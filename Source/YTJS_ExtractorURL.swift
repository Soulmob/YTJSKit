//
//  YTJS_ExtractorURL.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import SwiftyJSON
import UIKit

/// 单个下载的类型
public enum YTJS_URLFormatType: Int {
    case mp4_360 = 18
    case mp4_720 = 22
}

public class YTJS_URLFormat: NSObject {
    public var itag: Int
    public var type: YTJS_URLFormatType
    public var ext: String
    public var url: String

    init?(json: JSON) {
        guard let itag = json["itag"].int,
              let ext = json["ext"].string,
              let url = json["url"].string,
              let type = YTJS_URLFormatType(rawValue: itag)
        else {
            return nil
        }
        self.itag = itag
        self.type = type
        self.ext = ext
        self.url = url
    }
}

class YTJS_ExtractorURL: NSObject {
    static func getUrl(with videoURL: String, completion: @escaping YTJS_ValueBlock<YTJS_ExtractorURL_Result?>) {
        YTJS_Extractor.shared.queryVideo(with: videoURL) { json in
            let result = parseJson(with: json)
            completion(result)
        }
    }

    private static func parseJson(with json: JSON) -> YTJS_ExtractorURL_Result? {
        let music = json["data"]["music"]
        let formatsJson = music["formats"].arrayValue
        // 格式
        var format_available: YTJS_URLFormat?
        let _formats = formatsJson.compactMap { YTJS_URLFormat(json: $0) }
        if let format_720 = _formats.first(where: { $0.itag == YTJS_URLFormatType.mp4_720.rawValue }) {
            format_available = format_720
        } else if let format_360 = _formats.first(where: { $0.itag == YTJS_URLFormatType.mp4_360.rawValue }) {
            format_available = format_360
        }

        if let format = format_available,
           let url = URL(string: format.url),
           let nowPlay = YTJS_Music(player: music)
        {
            let result = YTJS_ExtractorURL_Result(playURL: url, music: nowPlay, format: format)
            return result
        } else {
            return nil
        }
    }
}

public struct YTJS_ExtractorURL_Result {
    public var playURL: URL
    public var music: YTJS_Music
    public var format: YTJS_URLFormat
}

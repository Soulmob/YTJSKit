//
//  YTJS_VideoInfo.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/14.
//

import AVKit
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

public class YTJS_VideoInfo_Result: NSObject {
    public var playURL: URL
    public var music: YTJS_Music
    public var format: YTJS_URLFormat

    init(playURL: URL, music: YTJS_Music, format: YTJS_URLFormat) {
        self.playURL = playURL
        self.music = music
        self.format = format
    }
}

class YTJS_VideoInfo: NSObject {
    static func getVideoInfo(with videoURL: String, completion: @escaping YTJS_ValueBlock<YTJS_VideoInfo_Result?>) {
        ST_Extractor.shared.queryVideo(with: videoURL, event: .Extract) { json in
            if let result = st_parseJson(with: json, videoURL: videoURL) {
                completion(result)
            } else {
                completion(nil)
            }
        }
    }
}

// MARK: - Offline解析

extension YTJS_VideoInfo {
    private static func ol_parseJson(with json: JSON, videoURL: String) -> YTJS_VideoInfo_Result? {
        let song = json["data"]["song"]
        let formatsJson = song["formats"].arrayValue

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
           let nowPlay = YTJS_Music(ol_videoInfo: song, videoURL: videoURL)
        {
            let result = YTJS_VideoInfo_Result(playURL: url, music: nowPlay, format: format)
            return result
        } else {
            return nil
        }
    }
}

// MARK: - SnapTube解析

extension YTJS_VideoInfo {
    private static func st_parseJson(with json: JSON, videoURL: String) -> YTJS_VideoInfo_Result? {
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
           let nowPlay = YTJS_Music(st_videoInfo: music, videoURL: videoURL)
        {
            let result = YTJS_VideoInfo_Result(playURL: url, music: nowPlay, format: format)
            return result
        } else {
            return nil
        }
    }
}

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
    static func getVideoInfo(with videoURL: String, completion: @escaping YTJS_ValueBlock<YTJS_ExtractorURL_Result?>) {
        YTJS_Extractor.shared.queryVideo(with: videoURL, event: .Extract) { json in
            let result = parseJson(with: json, videoURL: videoURL)
            completion(result)
        }
    }
    
    static func getRelatedList(with videoURL: String, completion: @escaping YTJS_ValueBlock<[YTJS_Music]>) {
        YTJS_Extractor.shared.queryVideo(with: videoURL, event: .Related) { json in
            let relatedModels = json["data"].arrayValue.compactMap { YTJS_Music(playerList: $0, videoURL: videoURL) }
            completion(relatedModels)
        }
    }
    
    static func getUrl(with videoURL: String, needRelated: Bool, completion: @escaping YTJS_ValueBlock<YTJS_ExtractorURL_Result?>) {
        var result: YTJS_ExtractorURL_Result?
        var relatedModels: [YTJS_Music] = []

        let group = DispatchGroup()
        group.enter()
        YTJS_Extractor.shared.queryVideo(with: videoURL, event: .Extract) { json in
            result = parseJson(with: json, videoURL: videoURL)
            group.leave()
        }
        if needRelated {
            group.enter()
            YTJS_Extractor.shared.queryVideo(with: videoURL, event: .Related) { json in
                relatedModels = json["data"].arrayValue.compactMap { YTJS_Music(playerList: $0, videoURL: videoURL) }
                group.leave()
            }
        }
        group.notify(queue: .main) {
            if let result = result, result.playlist.count == 0 {
                result.playlist = relatedModels
            }
            completion(result)
        }
    }

    private static func parseJson(with json: JSON, videoURL: String) -> YTJS_ExtractorURL_Result? {
        let music = json["data"]["music"]
        let formatsJson = music["formats"].arrayValue

        let recommendInfo = music["recommendInfo"].arrayValue
        let library = json["data"]["library"]["contents"].arrayValue
        // 播放列表
        let musics_library = library.compactMap { YTJS_Music(playerList: $0, videoURL: videoURL) }
        // 推荐列表
        let musics_recommend = recommendInfo.compactMap { YTJS_Music(playerList: $0, videoURL: videoURL) }

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
           let nowPlay = YTJS_Music(player: music, videoURL: videoURL)
        {
            var recommends = musics_library
            if recommends.count == 0 {
                recommends = musics_recommend
            }
            let result = YTJS_ExtractorURL_Result(playURL: url, music: nowPlay, format: format, playlist: recommends)
            return result
        } else {
            return nil
        }
    }
}

public class YTJS_ExtractorURL_Result: NSObject {
    public var playURL: URL
    public var music: YTJS_Music
    public var format: YTJS_URLFormat
    public var playlist: [YTJS_Music] = []

    init(playURL: URL, music: YTJS_Music, format: YTJS_URLFormat, playlist: [YTJS_Music] = []) {
        self.playURL = playURL
        self.music = music
        self.format = format
        self.playlist = playlist
    }
}

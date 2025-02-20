//
//  YTJSKit.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import UIKit
import SwiftyJSON

public enum YTJS_Type {
    case offline
    case snaptube
}

public class YTJSKit: NSObject {
    public static func updateConfig(with json: JSON, type: YTJS_Type) {
        switch type {
        case .offline:
            YTJSConfig.shared.offline = OL_RemoteConfig(json: json)
        case .snaptube:
            break
        }
    }
    
    public static func updateJS(with path: String, type: YTJS_Type) {
        switch type {
        case .offline:
            OL_Extractor.shared.updateJS(with: path)
        case .snaptube:
            ST_Extractor.shared.updateJS(with: path)
        }
    }
    
    public static func getVideoInfo(with url: String, completion: @escaping YTJS_ValueBlock<YTJS_VideoInfo_Result?>) {
        YTJS_VideoInfo.getVideoInfo(with: url, completion: completion)
    }
}

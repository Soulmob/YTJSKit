//
//  YTJSKit.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import UIKit
import SwiftyJSON

@objc
public enum YTJS_Type: Int {
    case snaptube = 0
    case offline = 1
}

public class YTJSKit: NSObject {
    /// 初始化
    public static func initial() {
        YTJS_Path.initial() {
            YTJS_Config.shared.initial()
        }
    }
    
    public static func updateJS(with type: YTJS_Config_File_Type) {
        switch type {
        case .offline_common:
            OL_Extractor.shared.updateJS(with: type.jsPath)
        case .offline_ytb:
            OL_Extractor.shared.updateJS(with: type.jsPath)
        case .snaptube_ytb:
            ST_Extractor.shared.updateJS(with: type.jsPath)
        }
    }
    
    public static func getVideoInfo(with url: String, completion: @escaping YTJS_ValueBlock<YTJS_VideoInfo_Result?>) {
        YTJS_VideoInfo.getVideoInfo(with: url, completion: completion)
    }
    
    public static func getTrending(completion: @escaping YTJS_ValueBlock<JSON>) {
        OL_Extractor.shared.trending(completionBlock: completion)
    }
    
    public static func search(key: String, next: String, filter: Int, completion: @escaping YTJS_ValueBlock<JSON>) {
        YTJS_Search.search(key: key, next: next, filter: filter, completion: completion)
    }
}

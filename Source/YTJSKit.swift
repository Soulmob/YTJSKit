//
//  YTJSKit.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import UIKit
import SwiftyJSON

public class YTJSKit: NSObject {
    /// 初始化
    public static func initial() {
        YTJS_Path.initial() {
            YTJS_Config.shared.initial()
        }
    }
    
    public static func updateJS(with type: YTJS_Config_File_Type) {
        ST_Extractor.shared.updateJS(with: type.jsPath)
    }
    
    public static func getVideoInfo(with url: String, completion: @escaping YTJS_ValueBlock<YTJS_VideoInfo_Result?>) {
        YTJS_VideoInfo.getVideoInfo(with: url, completion: completion)
    }
    
    public static func search(key: String, next: String, filter: Int, completion: @escaping YTJS_ValueBlock<JSON>) {
        YTJS_Search.search(key: key, next: next, filter: filter, completion: completion)
    }
}

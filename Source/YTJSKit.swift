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
    
    public static func updateJS(remote json: JSON, completion: (()->Void)?=nil) {
        YTJS_Config.shared.updateJS(remote: json, completion: completion)
    }
    
    public static func getVideoInfo(with url: String, completion: @escaping YTJS_ValueBlock<YTJS_VideoInfo_Result?>) {
        YTJS_VideoInfo.getVideoInfo(with: url, completion: completion)
    }
}

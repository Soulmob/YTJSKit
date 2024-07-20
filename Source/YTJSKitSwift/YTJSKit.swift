//
//  YTJSKit.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import UIKit

public class YTJSKit: NSObject {
    public static func updateJS(with path: String) {
        YTJS_Extractor.shared.updateJS(with: path)
    }
    
    public static func getVideoInfo(with url: String, completion: @escaping YTJS_ValueBlock<YTJS_ExtractorURL_Result?>) {
        YTJS_ExtractorURL.getVideoInfo(with: url, completion: completion)
    }
    
    public static func getRelatedList(with url: String, completion: @escaping YTJS_ValueBlock<[YTJS_Music]>) {
        YTJS_ExtractorURL.getRelatedList(with: url, completion: completion)
    }
}

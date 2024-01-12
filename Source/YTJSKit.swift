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
    
    public static func extractorURL(with url: String, completion: @escaping YTJS_ValueBlock<YTJS_ExtractorURL_Result?>) {
        YTJS_ExtractorURL.getUrl(with: url, completion: completion)
    }
}

//
//  YTJSKit.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import UIKit

//https://www.youtube.com/watch?v=UvUrRaxaKv4&bpctr=9999999999&has_verified=1

public class YTJSKit: NSObject {
    public static func updateJS(with path: String, type: YTJS_VideoInfo_Type) {
        switch type {
        case .offline:
            OL_Extractor.shared.updateJS(with: path)
        case .snaptube:
            ST_Extractor.shared.updateJS(with: path)
        }
    }
    
    public static func getVideoInfo(with url: String, type: YTJS_VideoInfo_Type, completion: @escaping YTJS_ValueBlock<YTJS_VideoInfo_Result?>) {
        YTJS_VideoInfo.getVideoInfo(with: url, type: type, completion: completion)
    }
    
    public static func getTrending(completion: @escaping YTJS_ValueBlock<YTJS_VideoInfo_Result?>) {
        OL_Extractor.shared.trending { json in
            
        }
    }
    
    public static func search(with keyword: String,
                              next: String,
                              filter: JSBridgePayloadSearchFilter)
    {
        ST_Extractor.shared.search(with: keyword, next: "", filter: filter) { json in
            print(json)
        }
    }
}

extension YTJSKit {
    public static func getHomePage() {
        ST_Extractor.shared.getHomePage()
    }
}

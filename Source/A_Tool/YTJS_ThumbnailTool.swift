//
//  YTJS_ThumbnailTool.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/14.
//

import UIKit
import SwiftyJSON

class YTJS_ThumbnailTool: NSObject {
    static func getClosest(with thumbnails: [JSON]) -> JSON? {
        guard !thumbnails.isEmpty else {
            return nil
        }

        let targetWidth = UIScreen.main.bounds.width

        let sorted = thumbnails.sorted {
            $0["width"].floatValue < $1["width"].floatValue
        }

        // 找到第一张 >= 屏幕宽度
        if let thumbnail = sorted.first(where: {
            CGFloat($0["width"].floatValue) >= targetWidth
        }) {
            return thumbnail
        }

        // 全部都比屏幕小，返回最大的
        return sorted.last
    }
}

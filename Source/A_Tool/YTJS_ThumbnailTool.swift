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
        // 目标数值
        let targetValue = UIScreen.main.bounds.size.width * 0.5
        var closestNumberIndex = -1 // 存放最接近的索引位置
        var minDifference = CGFLOAT_MAX // 初始化为无限大
         
        for (index, thumbnail) in thumbnails.enumerated() {
            let number = CGFloat(thumbnail["width"].floatValue)
            let difference = abs(number - targetValue)
            if difference < minDifference {
                minDifference = difference
                closestNumberIndex = index
            } else if difference == minDifference && number > targetValue {
                break // 如果有多个相同的最小差值，则选择更大的那个
            }
        }
         
        if closestNumberIndex != -1 {
            return thumbnails[closestNumberIndex]
        } else {
            return thumbnails.last
        }
    }
}

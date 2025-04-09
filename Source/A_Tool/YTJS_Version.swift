//
//  YTJS_Version.swift
//  YTJSKit
//
//  Created by pro big on 2025/4/9.
//

import UIKit

/// 可比较的版本号结构体
struct YTJS_Version: Comparable, CustomStringConvertible {
    let components: [Int]

    /// 初始化：将 "1.10.2" 转换成 [1, 10, 2]
    init(_ versionString: String) {
        self.components = versionString
            .split(separator: ".")
            .map { Int($0) ?? 0 }
    }

    /// 支持打印 Version 对象
    var description: String {
        components.map { String($0) }.joined(separator: ".")
    }

    /// 小于比较
    static func < (lhs: YTJS_Version, rhs: YTJS_Version) -> Bool {
        let maxCount = max(lhs.components.count, rhs.components.count)
        for i in 0..<maxCount {
            let left = i < lhs.components.count ? lhs.components[i] : 0
            let right = i < rhs.components.count ? rhs.components[i] : 0
            if left != right {
                return left < right
            }
        }
        return false
    }

    /// 相等比较
    static func == (lhs: YTJS_Version, rhs: YTJS_Version) -> Bool {
        let maxCount = max(lhs.components.count, rhs.components.count)
        for i in 0..<maxCount {
            let left = i < lhs.components.count ? lhs.components[i] : 0
            let right = i < rhs.components.count ? rhs.components[i] : 0
            if left != right {
                return false
            }
        }
        return true
    }
}

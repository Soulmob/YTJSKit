//
//  YTJS_Print.swift
//  YTJSKit
//
//  Created by pro big on 2025/4/9.
//

import UIKit

func YTJS_Print(_ message: @autoclosure () -> Any, file: String = #file, method: String = #function, line: Int = #line) {
    #if DEBUG
        let fileName = (file as NSString).lastPathComponent
        print("YTJS---- [\(fileName):\(line)], \(method): \(message())")
    #endif
}

//
//  YTJS_Path.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/22.
//

import UIKit

class YTJS_Path: NSObject {
    
    static private let Documents = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first!
    
    static let root = Documents.appendingPathComponent("ytjs")
    static let jsFolder = root.appendingPathComponent("snaptube")
        
    static func initial(completion: @escaping ()->Void) {
        DispatchQueue.global().async {
            try? FileManager.default.createDirectory(at: Self.jsFolder, withIntermediateDirectories: true)
            completion()
        }
    }
}

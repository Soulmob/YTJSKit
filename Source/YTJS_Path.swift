//
//  YTJS_Path.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/22.
//

import UIKit

class YTJS_Path: NSObject {
    
    static let root = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).last! + "/ytjs/"
    static let config = root + "js_config.json"
    static let offline_root = root + "offline/"
    static let snaptube_root = root + "snaptube/"
    
    static func initial(completion: @escaping ()->Void) {
        DispatchQueue.global().async {
            try? FileManager.default.createDirectory(atPath: offline_root, withIntermediateDirectories: true)
            try? FileManager.default.createDirectory(atPath: snaptube_root, withIntermediateDirectories: true)
            completion()
        }
    }
}

//
//  YTJSConfig.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/14.
//

import UIKit
import SwiftyJSON

@objcMembers
public class YTJSConfig: NSObject {
    public static let shared = YTJSConfig()
    
    public var offline = OL_RemoteConfig()
}

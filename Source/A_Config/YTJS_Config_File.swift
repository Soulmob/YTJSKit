//
//  YTJS_Config_File.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/23.
//

import UIKit
import SwiftyJSON

@objcMembers
public class YTJS_Config_File: NSObject {
    public var type: YTJS_Config_File_Type
    public var v: String = ""
    public var u: String = ""
    
    init(type: YTJS_Config_File_Type) {
        self.type = type
        super.init()
    }
    
    convenience init?(json: JSON, type: YTJS_Config_File_Type) {
        guard let v = json["v"].string, v.isEmpty == false,
              let u = json["u"].string else {
            return nil
        }
        self.init(type: type)
        self.v = v
        self.u = u
    }
}

public enum YTJS_Config_File_Type: Int {
    case offline_common
    case offline_ytb
    case snaptube_ytb
    
    var jsPath: String {
        return root + jsName
    }
    
    var jsName: String {
        switch self {
        case .offline_common:
            return "common"
        case .offline_ytb:
            return "ytb"
        case .snaptube_ytb:
            return "rm_extractor.js"
        }
    }
    
    var root: String {
        switch self {
        case .offline_common:
            return YTJS_Path.offline_root
        case .offline_ytb:
            return YTJS_Path.offline_root
        case .snaptube_ytb:
            return YTJS_Path.snaptube_root
        }
    }
    
    private var versionKey: String {
        var name: String
        switch self {
        case .offline_common:
            name = "offline_common"
        case .offline_ytb:
            name = "offline_ytb"
        case .snaptube_ytb:
            name = "snaptube_ytb"
        }
        return "v_file_" + name
    }
    
    // 版本
    var version: String? {
        set {
            UserDefaults.standard.set(newValue, forKey: versionKey)
        }
        get {
            return UserDefaults.standard.string(forKey: versionKey)
        }
    }
}

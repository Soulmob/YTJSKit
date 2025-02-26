//
//  YTJS_Config_Model.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/23.
//

import SwiftyJSON
import UIKit

@objcMembers
public class YTJS_Config_Model: NSObject {
    public var useType: YTJS_Type = .offline
    public var offline = YTJS_Config_Offline()
    public var snaptube = YTJS_Config_Snaptube()

    convenience init(json: JSON) {
        self.init()
        self.useType = YTJS_Type(rawValue: json["useType"].intValue) ?? .offline
        self.offline = YTJS_Config_Offline(json: json["offline"])
        self.snaptube = YTJS_Config_Snaptube(json: json["snaptube"])
    }
}

@objcMembers
public class YTJS_Config_Offline: NSObject {
    public var file_ytb: YTJS_Config_File?
    public var file_common: YTJS_Config_File?
    public var appVersion: String = ""
    public var YTBParams: String = ""
    public var INNERTUBE_CLIENTS: String = ""
    public var use_api_for_music: String = "true"
    public var use_api_for_ytb: String = ""
    public var load_pot_webview: String = "true"

    convenience init(json: JSON) {
        self.init()
        if let file_common = YTJS_Config_File(json: json["file_common"], type: .offline_common) {
            self.file_common = file_common
        }
        if let file_ytb = YTJS_Config_File(json: json["file_ytb"], type: .offline_ytb) {
            self.file_ytb = file_ytb
        }
        self.YTBParams = json["YTBParams"].stringValue
        self.INNERTUBE_CLIENTS = json["INNERTUBE_CLIENTS"].stringValue
        self.appVersion = json["appVersion"].stringValue
        self.use_api_for_music = json["use_api_for_music"].stringValue
        self.use_api_for_ytb = json["use_api_for_ytb"].stringValue
        self.load_pot_webview = json["load_pot_webview"].stringValue
    }
}

@objcMembers
public class YTJS_Config_Snaptube: NSObject {
    public var file_ytb: YTJS_Config_File?

    convenience init(json: JSON) {
        self.init()
        if let file_ytb = YTJS_Config_File(json: json["file_ytb"], type: .snaptube_ytb) {
            self.file_ytb = file_ytb
        }
    }
}

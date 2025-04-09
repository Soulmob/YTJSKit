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
    public var snaptube = YTJS_Config_Snaptube()

    convenience init(json: JSON) {
        self.init()
        self.snaptube = YTJS_Config_Snaptube(json: json["snaptube"])
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

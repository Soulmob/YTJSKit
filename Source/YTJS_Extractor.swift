//
//  YTJS_Extractor.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import Alamofire
import JavaScriptCore
import SwiftyJSON
import UIKit

enum JSBridgeEventSource: Int {
    case YTB = 0
    case SC = 1
    case FB = 2
    case YTMUSIC = 3
}

enum JSBridgeEventName: Int {
    case Extract = 0
    case Search = 1
    case Related = 2
    case Layout = 3
}

class YTJS_Extractor_Model: NSObject {
    var uid: Int
    var event: JSBridgeEventName
    var completionBlock: YTJS_ValueBlock<JSON>?

    init(uid: Int, event: JSBridgeEventName, completionBlock: YTJS_ValueBlock<JSON>? = nil) {
        self.uid = uid
        self.event = event
        self.completionBlock = completionBlock
    }
}

class YTJS_Extractor: NSObject {
   static let shared = YTJS_Extractor()
    
    private var context: JSContext?
    /// 请求id，递增
    private var requestId: Int = 0
    
    private lazy var vsplayer: JSBridgeVsplayer = {
        let vsplayer = JSBridgeVsplayer()
        vsplayer.delegate = self
        return vsplayer
    }()
    
    private var extractorModels: [YTJS_Extractor_Model] = []
    
     func updateJS(with path: String) {
        if let jqueryData = NSData(contentsOfFile: path) as? Data,
           let jqueryString = NSString(data: jqueryData, encoding: String.Encoding.utf8.rawValue) as? String
        {
            context = JSContext()
            if #available(iOS 16.4, *) {
                context?.isInspectable = true
            }
            let sss: NSString = "vsplayer"
            context?.setObject(vsplayer, forKeyedSubscript: sss)
            context?.evaluateScript(jqueryString)
        }
    }
    
    func queryVideo(with videoUrl: String, completionBlock: @escaping YTJS_ValueBlock<JSON>) {
        requestId += 1
        let model = YTJS_Extractor_Model(uid: requestId, event: .Extract, completionBlock: completionBlock)
        extractorModels.append(model)
        
        let dict: [String: Any] = ["data": ["url": videoUrl],
                                   "uid": model.uid,
                                   "event": model.event.rawValue,
                                   "source": JSBridgeEventSource.YTB.rawValue]
        
        let jsonData = try! JSONSerialization.data(withJSONObject: dict, options: .withoutEscapingSlashes)
        let jsonStr = String(data: jsonData, encoding: .utf8)!
        let str = String(format: "extractor.postMessageToJSBridge('%@')", jsonStr)
        context?.evaluateScript(str)
    }
}

// MARK: - 收到响应

extension YTJS_Extractor: ExtractResultDelegate {
    func sendMessage(toNative arg1: [AnyHashable: Any]) {
        let json = JSON(arg1)
        let uid = json["uid"].intValue
        let event = json["event"].intValue
        let dataJson = json["data"]
        guard let model = extractorModels.first(where: { $0.uid == uid && $0.event.rawValue == event }) else {
            return
        }
        model.completionBlock?(dataJson)
        model.completionBlock = nil
        extractorModels.removeAll(where: { $0.uid == model.uid })
    }
}

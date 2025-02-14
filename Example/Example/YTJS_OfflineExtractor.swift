//
//  YTJS_OfflineExtractor.swift
//  Example
//
//  Created by pro big on 2024/11/15.
//

import Alamofire
import JavaScriptCore
import SwiftyJSON
import UIKit

enum JSBridgeEventName: Int {
    case Extract = 0
    case Search = 1
    case Recommends = 2
    case Hots = 3
}

class YTJS_OfflineExtractor_Model: NSObject {
    var uid: Int
    var event: JSBridgeEventName
    var completionBlock: YTJS_ValueBlock<JSON>?

    init(uid: Int, event: JSBridgeEventName, completionBlock: YTJS_ValueBlock<JSON>? = nil) {
        self.uid = uid
        self.event = event
        self.completionBlock = completionBlock
    }
}

class YTJS_OfflineExtractor: NSObject, @unchecked Sendable {
   static let shared = YTJS_OfflineExtractor()
    
    private var context: JSContext?
    /// 请求id，递增
    private var requestId: Int = 0
    
    private lazy var channel: Offline_FilesChannel = {
        let channel = Offline_FilesChannel()
//        channel.delegate = self
        return channel
    }()
    
    private var extractorModels: [YTJS_OfflineExtractor_Model] = []
    
     func updateJS(with path: String) {
        if let jqueryData = NSData(contentsOfFile: path) as? Data,
           let jqueryString = NSString(data: jqueryData, encoding: String.Encoding.utf8.rawValue) as? String
        {
            context = JSContext()
            if #available(iOS 16.4, *) {
                context?.isInspectable = true
            }
            let sss: NSString = "App"
            context?.setObject(channel, forKeyedSubscript: sss)
            context?.evaluateScript(jqueryString)
        }
    }
    
    func queryVideo(with videoUrl: String, event: JSBridgeEventName, completionBlock: @escaping YTJS_ValueBlock<JSON>) {
        requestId += 1
        let model = YTJS_OfflineExtractor_Model(uid: requestId, event: event, completionBlock: completionBlock)
        extractorModels.append(model)
        
        let dict: [String: Any] = ["data": ["url": videoUrl, "itag": 18, "allTarget": false],
                                   "uid": model.uid,
                                   "event": model.event.rawValue]
        
        let jsonData = try! JSONSerialization.data(withJSONObject: dict, options: .withoutEscapingSlashes)
        let jsonStr = String(data: jsonData, encoding: .utf8)!
        let str = String(format: "message.postMessageToJS('%@')", jsonStr)
        context?.evaluateScript(str)
    }
}

// MARK: - 收到响应

extension YTJS_OfflineExtractor: ExtractResultDelegate {
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

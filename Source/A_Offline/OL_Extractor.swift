//
//  OL_Extractor.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/12.
//

import JavaScriptCore
import SwiftyJSON
import UIKit
import Alamofire

enum OL_Extractor_EventName: Int {
    case videoInfo = 0
    case search = 1
//    case Related = 2
    case trending = 3           //https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D
    case musicChannel = 5       //https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ
    case charts = 6             //https://music.youtube.com/charts
}

class OL_Extractor_Model: NSObject {
    var uid: Int
    var event: OL_Extractor_EventName
    var completionBlock: YTJS_ValueBlock<JSON>?

    init(uid: Int, event: OL_Extractor_EventName, completionBlock: YTJS_ValueBlock<JSON>? = nil) {
        self.uid = uid
        self.event = event
        self.completionBlock = completionBlock
    }
}

class OL_Extractor: NSObject, @unchecked Sendable {
    static let shared = OL_Extractor()

    private var context: JSContext?
    /// 请求id，递增
    private var requestId: Int = 0

    private lazy var vsplayer: OL_Bridger = {
        let vsplayer = OL_Bridger()
        vsplayer.delegate = self
        return vsplayer
    }()

    private var extractorModels: [OL_Extractor_Model] = []

    override init() {
        super.init()
        context = JSContext()
        if #available(iOS 16.4, *) {
            context?.isInspectable = true
        }
        let key_app: NSString = "App"
        context?.setObject(vsplayer, forKeyedSubscript: key_app)
    }

    func updateJS(with path: String) {
        let url = URL(fileURLWithPath: path)
        if let jqueryString = try? NSString(contentsOf: url, encoding: String.Encoding.utf8.rawValue) {
            let jsValue = context?.evaluateScript(jqueryString as String)
        }
    }

    func queryVideo(with videoUrl: String, event: OL_Extractor_EventName, completionBlock: @escaping YTJS_ValueBlock<JSON>) {
        requestId += 1
        let model = OL_Extractor_Model(uid: requestId, event: event, completionBlock: completionBlock)
        extractorModels.append(model)
        
        let dict: [String: Any] = ["uid": model.uid,
                                   "event": model.event.rawValue,
                                   "data": ["url": videoUrl,
                                            "itag": 18,
                                            "allTarget": false]]

        let jsonData = try! JSONSerialization.data(withJSONObject: dict, options: .withoutEscapingSlashes)
        let jsonStr = String(data: jsonData, encoding: .utf8)!
        let str = String(format: "message.postMessageToJS('%@')", jsonStr)
        context?.evaluateScript(str)
    }
    
    func trending(completionBlock: @escaping YTJS_ValueBlock<JSON>) {
        requestId += 1
        let model = OL_Extractor_Model(uid: requestId, event: .trending, completionBlock: completionBlock)
        extractorModels.append(model)

        let dict0: [String: Any] = ["uid": model.uid,
                                    "event": model.event.rawValue,
                                    "data": [""]]
        let jsonData = try! JSONSerialization.data(withJSONObject: dict0, options: .withoutEscapingSlashes)
        let jsonStr = String(data: jsonData, encoding: .utf8)!
        let str = String(format: "message.postMessageToJS('%@')", jsonStr)
        context?.evaluateScript(str)
    }
    
    
    func search(key: String, next: String, filter: Int, completionBlock: @escaping YTJS_ValueBlock<JSON>) {
        requestId += 1
        let model = OL_Extractor_Model(uid: requestId, event: .search, completionBlock: completionBlock)
        extractorModels.append(model)

        let dict0: [String: Any] = ["uid": model.uid,
                                    "event": model.event.rawValue,
                                    "data": ["key": key, "next": next, "filter": filter]]
        let jsonData = try! JSONSerialization.data(withJSONObject: dict0, options: .withoutEscapingSlashes)
        let jsonStr = String(data: jsonData, encoding: .utf8)!
        let str = String(format: "message.postMessageToJS('%@')", jsonStr)
        context?.evaluateScript(str)
    }
}

extension OL_Extractor: OL_BridgerMessageDelegate {
    func sendMessage(toNative native: Any) {
        let json = JSON(native)
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

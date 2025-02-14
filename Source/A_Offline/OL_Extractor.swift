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
        print(json)
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
    
    func fetchPotToken(_ token: Bool, then: JSValue) {
        then.call(withArguments: [""])
    }
    
    func getCookies(_ cookies: Any, then: JSValue) {
        then.call(withArguments: [true])
    }
    
    func fetchAppInfo(toNative native: String, then: JSValue) {
        if native == "lang" {
            let languageCode = Locale.preferredLanguages.first ?? "en_US"
            then.call(withArguments: [languageCode])
        }
        if native == "v" {
            then.call(withArguments: ["1.9.4"])
        }
    }
    
    func fetchRemoteConfig(withKey key: String, then: JSValue) {
        if key == "use_api_for_ytb" {
            then.call(withArguments: [true])
        }
        if key == "use_api_for_music" {
            then.call(withArguments: [true])
        }
        if key == "load_pot_webview" {
            then.call(withArguments: [true])
        }
        if key == "YTBParams" {
            then.call(withArguments: ["CgIIAQ=="])
        }
        if key == "INNERTUBE_CLIENTS" {
            then.call(withArguments: ["{\"android_embedded\":{\"INNERTUBE_API_KEY\":\"AIzaSyCjc_pVEDi4qsv5MtC2dMXzpIaDoRFLsxw\",\"INNERTUBE_HOST\":\"www.youtube.com\",\"INNERTUBE_CONTEXT\":{\"client\":{\"clientName\":\"ANDROID_EMBEDDED_PLAYER\",\"clientVersion\":\"19.09.37\",\"androidSdkVersion\":30,\"userAgent\":\"com.google.android.youtube/19.09.37 (Linux; U; Android 11) gzip\",\"hl\":\"en\"},\"thirdParty\":{\"embedUrl\":\"https://www.youtube.com/\"}},\"INNERTUBE_CONTEXT_CLIENT_NAME\":55,\"REQUIRE_JS_PLAYER\":false},\"android_music\":{\"INNERTUBE_API_KEY\":\"AIzaSyAOghZGza2MQSZkY_zfZ370N-PUdXEo8AI\",\"INNERTUBE_HOST\":\"music.youtube.com\",\"INNERTUBE_CONTEXT\":{\"client\":{\"clientName\":\"ANDROID_MUSIC\",\"clientVersion\":\"6.42.52\",\"androidSdkVersion\":30,\"userAgent\":\"com.google.android.apps.youtube.music/6.42.52 (Linux; U; Android 11) gzip\",\"hl\":\"en\"}},\"INNERTUBE_CONTEXT_CLIENT_NAME\":21,\"REQUIRE_JS_PLAYER\":false},\"mediaconnect\":{\"INNERTUBE_HOST\":\"www.youtube.com\",\"INNERTUBE_CONTEXT\":{\"client\":{\"clientName\":\"MEDIA_CONNECT_FRONTEND\",\"clientVersion\":\"0.1\",\"userAgent\":\"\",\"hl\":\"en\"}},\"INNERTUBE_CONTEXT_CLIENT_NAME\":95}}"])
        }
    }
}

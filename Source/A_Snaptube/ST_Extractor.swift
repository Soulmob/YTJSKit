//
//  ST_Extractor.swift
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

/// 搜索类型
public enum JSBridgePayloadSearchFilter: Int {
    case ALL = 0
    case Track = 1
    case Playlist = 2
    case YouTubeMusic = 3
}

class ST_Extractor_Model: NSObject {
    var uid: Int
    var event: JSBridgeEventName
    var completionBlock: YTJS_ValueBlock<JSON>?

    var timer: DispatchSourceTimer?
    private var backgroundTask: UIBackgroundTaskIdentifier = .invalid

    init(uid: Int, event: JSBridgeEventName, completionBlock: YTJS_ValueBlock<JSON>? = nil) {
        self.uid = uid
        self.event = event
        self.completionBlock = completionBlock
    }

    func startTimer(timeoutBlock: @escaping () -> Void) {
        // 开启后台任务
        backgroundTask = UIApplication.shared.beginBackgroundTask(withName: "BackgroundTimer_ST_Extractor_\(event.rawValue)-\(uid)") {
            // 超时处理
            self.endBackgroundTask()
        }
        let queue = DispatchQueue(label: "ST_Extractor-\(event.rawValue)-\(uid)")
        timer = DispatchSource.makeTimerSource(queue: queue)
        timer?.schedule(deadline: .now() + 40, repeating: .never)
        timer?.setEventHandler(handler: { [weak self] in
            DispatchQueue.main.async {
                timeoutBlock()
            }
            self?.cancelTimer()
        })
        timer?.resume()
    }

    private func cancelTimer() {
        if let timer = timer {
            timer.cancel()
            self.timer = nil
        }
        endBackgroundTask()
    }

    private func endBackgroundTask() {
        if backgroundTask != .invalid {
            UIApplication.shared.endBackgroundTask(backgroundTask)
            backgroundTask = .invalid
        }
    }

    deinit {
        cancelTimer()
    }
}

class ST_Extractor: NSObject, @unchecked Sendable {
    static let shared = ST_Extractor()

    private var context: JSContext?
    /// 请求id，递增
    private var requestId: Int = 0

    private lazy var vsplayer: ST_Bridger = {
        let vsplayer = ST_Bridger()
        vsplayer.delegate = self
        return vsplayer
    }()

    private var extractorModels: [ST_Extractor_Model] = []

    override init() {
        super.init()
        context = JSContext()
        if #available(iOS 16.4, *) {
            context?.isInspectable = true
        }
        let key_vsplayer: NSString = "vsplayer"
        context?.setObject(vsplayer, forKeyedSubscript: key_vsplayer)
    }

    func updateJS(with path: String) {
        let url = URL(fileURLWithPath: path)
        if let jqueryString = try? NSString(contentsOf: url, encoding: String.Encoding.utf8.rawValue) {
            let jsValue = context?.evaluateScript(jqueryString as String)
        }
    }

    func queryVideo(with videoUrl: String, event: JSBridgeEventName, completionBlock: @escaping YTJS_ValueBlock<JSON>) {
        requestId += 1
        let model = ST_Extractor_Model(uid: requestId, event: event, completionBlock: completionBlock)
        extractorModels.append(model)

        let dict: [String: Any] = ["data": ["url": videoUrl],
                                   "uid": model.uid,
                                   "event": model.event.rawValue,
                                   "source": JSBridgeEventSource.YTB.rawValue]

        let jsonData = try! JSONSerialization.data(withJSONObject: dict, options: .withoutEscapingSlashes)
        let jsonStr = String(data: jsonData, encoding: .utf8)!
        let str = String(format: "extractor.postMessageToJSBridge('%@')", jsonStr)
        context?.evaluateScript(str)

        model.startTimer { [weak self] in
            self?.result(uid: model.uid, event: model.event.rawValue, dataJson: JSON(""))
        }
    }

    func search(key keyword: String,
                next: String,
                filter: Int,
                completionBlock: @escaping YTJS_ValueBlock<JSON>)
    {
        requestId += 1
        let model = ST_Extractor_Model(uid: requestId, event: .Search, completionBlock: completionBlock)
        extractorModels.append(model)

        let dict: [String: Any] = ["data": ["keyword": keyword,
                                            "next": next,
                                            "filter": filter],
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

extension ST_Extractor: ST_BridgeMessageDelegate {
    func sendMessage(toNative arg1: [AnyHashable: Any]) {
        let json = JSON(arg1)
        let uid = json["uid"].intValue
        let event = json["event"].intValue
        let dataJson = json["data"]
        result(uid: uid, event: event, dataJson: dataJson)
    }

    private func result(uid: Int, event: Int, dataJson: JSON) {
        guard let model = extractorModels.first(where: { $0.uid == uid && $0.event.rawValue == event }) else {
            return
        }
        model.completionBlock?(dataJson)
        model.completionBlock = nil
        extractorModels.removeAll(where: { $0.uid == uid })
    }
}

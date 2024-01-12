//
//  YTJS_Music.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import UIKit
import SwiftyJSON

public class YTJS_Music: NSObject {
    public var id: String = ""
    public var img_url: String = ""
    public var title: String = ""
    public var subtitle: String = ""
    public var duration: String = ""
    public var url_web: String = ""
    
    init?(player json: JSON) {
        guard let videoId = json["id"].string else {
            return nil
        }
        self.id = videoId
        
        if let thumbnail = json["thumbnails"].arrayValue.last {
            self.img_url = thumbnail["url"].stringValue
        }
        self.title = json["title"].stringValue
        self.subtitle = json["uploader"].stringValue
        let duration = Float(json["duration"].stringValue) ?? 0
        self.duration = YTJS_Duration.format(duration)
        var webURL = json["webURL"].stringValue
        if webURL.isEmpty {
            webURL = "https://www.youtube.com/watch?v=\(videoId)"
        }
        self.url_web = webURL
    }
}

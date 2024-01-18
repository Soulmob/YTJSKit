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
    
    convenience init?(player json: JSON, videoURL: String) {
        guard let videoId = json["id"].string else {
            return nil
        }
        self.init()
        self.id = videoId
        
        if let thumbnail = json["thumbnails"].arrayValue.last {
            self.img_url = thumbnail["url"].stringValue
        }
        self.title = json["title"].stringValue
        self.subtitle = json["uploader"].stringValue
        let duration = Float(json["duration"].stringValue) ?? 0
        self.duration = YTJS_Duration.format(duration)
        self.url_web = videoURL
    }
    
    convenience init?(playerList json: JSON, videoURL: String) {
        guard let _videoURL = URL(string: videoURL), let videoId = json["videoId"].string else {
            return nil
        }
        self.init()
        self.id = videoId
        
        if let thumbnail = json["thumbnails"].arrayValue.last {
            self.img_url = thumbnail["url"].stringValue
        }
        self.title = json["title"].stringValue
        self.subtitle = json["author"].stringValue
        self.duration = json["lengthText"].stringValue
        if _videoURL.host == "music.youtube.com" {
            self.url_web = "https://music.youtube.com/watch?v=\(videoId)"
        } else {
            self.url_web = "https://www.youtube.com/watch?v=\(videoId)"
        }
    }
}

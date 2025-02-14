//
//  YTJS_Music.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import SwiftyJSON
import UIKit

public class YTJS_Music: NSObject {
    public var id: String = ""
    public var img_url: String = ""
    public var title: String = ""
    public var subtitle: String = ""
    public var duration: String = ""
    public var url_web: String = ""
}

extension YTJS_Music {
    convenience init?(st_videoInfo json: JSON, videoURL: String) {
        guard let videoId = json["id"].string else {
            return nil
        }
        self.init()
        self.id = videoId
        self.title = json["title"].stringValue
        self.subtitle = json["uploader"].stringValue
        
        let duration = Float(json["duration"].stringValue) ?? 0
        self.duration = YTJS_Duration.format(duration)
        
        let thumbnails = json["thumbnails"].arrayValue
        if let thumbnail = YTJS_ThumbnailTool.getClosest(with: thumbnails) {
            self.img_url = thumbnail["url"].stringValue
        }
        self.url_web = videoURL
    }
    
    convenience init?(ol_videoInfo json: JSON, videoURL: String) {
        guard let videoId = json["id"].string else {
            return nil
        }
        self.init()
        self.id = videoId
        self.title = json["title"].stringValue
        self.subtitle = json["author"].stringValue
        
        let duration = Float(json["duration"].stringValue) ?? 0
        self.duration = YTJS_Duration.format(duration)
        
        let thumbnails = json["thumbnails"].arrayValue
        if let thumbnail = YTJS_ThumbnailTool.getClosest(with: thumbnails) {
            self.img_url = thumbnail["url"].stringValue
        }
        self.url_web = videoURL
    }
}

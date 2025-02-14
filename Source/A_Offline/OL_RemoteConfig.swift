//
//  OL_RemoteConfig.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/14.
//

import UIKit
import SwiftyJSON

@objcMembers
public class OL_RemoteConfig: NSObject {
    public var YTBParams: String = ""
    public var INNERTUBE_CLIENTS: String = ""
    public var appVersion: String = ""
    
    public override init() {
        super.init()
        appVersion = "1.9.4"
        YTBParams = "CgIIAQ=="
        INNERTUBE_CLIENTS = "{\"android_embedded\":{\"INNERTUBE_API_KEY\":\"AIzaSyCjc_pVEDi4qsv5MtC2dMXzpIaDoRFLsxw\",\"INNERTUBE_HOST\":\"www.youtube.com\",\"INNERTUBE_CONTEXT\":{\"client\":{\"clientName\":\"ANDROID_EMBEDDED_PLAYER\",\"clientVersion\":\"19.09.37\",\"androidSdkVersion\":30,\"userAgent\":\"com.google.android.youtube/19.09.37 (Linux; U; Android 11) gzip\",\"hl\":\"en\"},\"thirdParty\":{\"embedUrl\":\"https://www.youtube.com/\"}},\"INNERTUBE_CONTEXT_CLIENT_NAME\":55,\"REQUIRE_JS_PLAYER\":false},\"android_music\":{\"INNERTUBE_API_KEY\":\"AIzaSyAOghZGza2MQSZkY_zfZ370N-PUdXEo8AI\",\"INNERTUBE_HOST\":\"music.youtube.com\",\"INNERTUBE_CONTEXT\":{\"client\":{\"clientName\":\"ANDROID_MUSIC\",\"clientVersion\":\"6.42.52\",\"androidSdkVersion\":30,\"userAgent\":\"com.google.android.apps.youtube.music/6.42.52 (Linux; U; Android 11) gzip\",\"hl\":\"en\"}},\"INNERTUBE_CONTEXT_CLIENT_NAME\":21,\"REQUIRE_JS_PLAYER\":false},\"mediaconnect\":{\"INNERTUBE_HOST\":\"www.youtube.com\",\"INNERTUBE_CONTEXT\":{\"client\":{\"clientName\":\"MEDIA_CONNECT_FRONTEND\",\"clientVersion\":\"0.1\",\"userAgent\":\"\",\"hl\":\"en\"}},\"INNERTUBE_CONTEXT_CLIENT_NAME\":95}}"
    }
    
    convenience init(json: JSON) {
        self.init()
        YTBParams = json["YTBParams"].stringValue
        INNERTUBE_CLIENTS = json["INNERTUBE_CLIENTS"].stringValue
        appVersion = json["appVersion"].stringValue
    }
}

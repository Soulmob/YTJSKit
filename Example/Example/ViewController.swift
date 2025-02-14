//
//  ViewController.swift
//  Example
//
//  Created by pro big on 2024/1/12.
//

import UIKit
import YTJSKit

class ViewController: UIViewController {

//    private let url = "https://www.youtube.com/watch?v=495zc7_vGgA"
    private let url = "https://www.youtube.com/watch?v=edcRi66e_NA"
//    private let url = "https://music.youtube.com/watch?v=DO_aopUeFnw"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        YTJSKit.updateJS(with: Bundle.main.path(forResource: "common.js", ofType: nil)!, type: .offline)
        YTJSKit.updateJS(with: Bundle.main.path(forResource: "ytb.js", ofType: nil)!, type: .offline)
        YTJSKit.updateJS(with: Bundle.main.path(forResource: "rm_extractor.js", ofType: nil)!, type: .snaptube)
        YTJSKit.updateJS(with: Bundle.main.path(forResource: "homepage.js", ofType: nil)!, type: .snaptube)
    }
    
    @IBAction func next111(_ sender: Any) {
//        YTJSKit.getVideoInfo(with: url, type: .offline) { result in
//            print(result?.format.url)
//        }
        YTJSKit.getTrending { _ in
            
        }
//        YTJSKit.getHomePage()
//        YTJSKit.search(with: "taylor swift", next: "", filter: .Track)
    }
    
    @IBAction func action_YouTubeKit(_ sender: UIButton) {
        Task {
            let video = YouTube(url: URL(string: url)!, methods: [.local, .remote])
            let streams = (try? await video.streams) ?? []
            let stream = streams.stream(withITag: YTJS_URLFormatType.mp4_720.rawValue) ?? streams.stream(withITag: YTJS_URLFormatType.mp4_360.rawValue) ?? streams.highestResolutionStream()
//            video.videoDetails
            DispatchQueue.main.async {
                print(stream?.url, stream?.itag)
            }
        }
    }
}


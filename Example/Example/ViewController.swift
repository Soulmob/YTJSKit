//
//  ViewController.swift
//  Example
//
//  Created by pro big on 2024/1/12.
//

import UIKit
import YTJSKit

class ViewController: UIViewController {

    private let url = "https://www.youtube.com//watch?v=q3zqJs7JUCQ"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        YTJSKit.updateJS(with: Bundle.main.path(forResource: "rm_extractor.js", ofType: nil)!)
    }
    
    @IBAction func next111(_ sender: Any) {
        YTJSKit.getVideoInfo(with: url) { result in
            print(result?.playlist.count)
        }
    }
    
    @IBAction func action_YouTubeKit(_ sender: UIButton) {
        Task {
            let video = YouTube(url: URL(string: url)!, methods: [.local, .remote])
            let streams = (try? await video.streams) ?? []
            let stream = streams.stream(withITag: YTJS_URLFormatType.mp4_720.rawValue) ?? streams.stream(withITag: YTJS_URLFormatType.mp4_360.rawValue) ?? streams.highestResolutionStream()
            
            DispatchQueue.main.async {
                print(stream?.url, stream?.itag)
            }
        }
    }
}


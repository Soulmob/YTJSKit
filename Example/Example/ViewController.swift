//
//  ViewController.swift
//  Example
//
//  Created by pro big on 2024/1/12.
//

import UIKit
import YTJSKit
import AVKit
import SwiftyJSON

class ViewController: UIViewController {

//    private let url = "https://www.youtube.com/watch?v=495zc7_vGgA"
//    private let url = "https://www.youtube.com/watch?v=edcRi66e_NA"
//    private let url = "https://music.youtube.com/watch?v=8ZP5eqm4JqM"
//    private let url = "https://www.youtube.com/watch?v=3NNhrqHZqlI"//bu
    private let url = "https://music.youtube.com/watch?v=TOC78RUj8pg"
    override func viewDidLoad() {
        super.viewDidLoad()
        
        YTJSKit.updateJS(with: Bundle.main.path(forResource: "rm_extractor.js", ofType: nil)!, type: .snaptube)
        
        YTJSKit.updateJS(with: Bundle.main.path(forResource: "common.js", ofType: nil)!, type: .offline)
        YTJSKit.updateJS(with: Bundle.main.path(forResource: "ytb.js", ofType: nil)!, type: .offline)
        
//        YTJSKit.updateJS(with: Bundle.main.path(forResource: "homepage.js", ofType: nil)!, type: .snaptube)
    }
    
    func canPlayMediaURL(url: URL, completion: @escaping (Bool)->Void) {
        DispatchQueue.global().async {
            let asset = AVURLAsset(url: url)
            let formats = asset.availableMetadataFormats
            DispatchQueue.main.async {
                completion(formats.count > 0)// 如果有可用的元数据，说明是可以播放的媒体文件
            }
        }
    }
    
    @IBAction func next111(_ sender: Any) {
        YTJSKit.getVideoInfo(with: url) { result in
            if let url = result?.format.url {
                print(url)
                let url = URL(string: url)!
                let player = AVPlayer(url: url)
                let playerViewController = AVPlayerViewController()
                playerViewController.player = player
                self.present(playerViewController, animated: true)
            }
        }
    }
    
    @IBAction func action_YouTubeKit(_ sender: UIButton) {
//        YTJSKit.getVideoInfo(with: url, type: .offline) { result in
//            if let url = result?.format.url {
//                print(url)
//                let url = URL(string: url)!
//                let player = AVPlayer(url: url)
//                let playerViewController = AVPlayerViewController()
//                playerViewController.player = player
//                self.present(playerViewController, animated: true)
//            }
//        }
    }
}


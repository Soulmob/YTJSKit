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
    private let url = "https://music.youtube.com/watch?v=XqoanTj5pNY"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    
    @IBAction func next111(_ sender: Any) {
        YTJSKit.getVideoInfo(with: url) { result in
            print("-----------请求结束")
            if let url = result?.format.url {
                print(url)
                let playerVC = PlayerViewController(url: URL(string: url)!)
                self.navigationController?.pushViewController(playerVC, animated: true)
            }
        }
    }
    
    @IBAction func action_YouTubeKit(_ sender: UIButton) {
//        YTJSKit.getTrending { json in
//            print(json)
//        }
//        YTJSKit.search(key: "孙燕姿", next: "", filter: 0) { json in
//            print(json)
//        }
        if let jsonPath = Bundle.main.path(forResource: "default.json", ofType: nil),
           let data = try? Data(contentsOf: URL(fileURLWithPath: jsonPath)),
           let json = try? JSONSerialization.jsonObject(with: data)
        {
            YTJS_Config.shared.updateJS(remote: JSON(json))
        }
    }
}


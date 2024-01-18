//
//  NextViewController.swift
//  Example
//
//  Created by pro big on 2024/1/17.
//

import UIKit
import YTJSKit

class NextViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        YTJSKit.extractorURL(with: "https://music.youtube.com/watch?v=h8DLofLM7No&list=OLAK5uy_nkmB0lNo_UNxQLaprYPyNmRYzWHwvNbsA", needRelated: true) { result in
            print(result?.playlist.count)
        }
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}

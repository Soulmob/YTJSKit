//
//  ViewController.swift
//  Example
//
//  Created by pro big on 2024/1/12.
//

import UIKit
import YTJSKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        YTJSKit.updateJS(with: Bundle.main.path(forResource: "rm_extractor.js", ofType: nil)!)
        // Do any additional setup after loading the view.
    }
    
    @IBAction func next111(_ sender: Any) {
        
        let nextVC = NextViewController()
        present(nextVC, animated: true)
    }
}


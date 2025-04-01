//
//  PlayerViewController.swift
//  Example
//
//  Created by pro big on 2025/3/26.
//

import UIKit
import SJVideoPlayer

class PlayerViewController: UIViewController {

    init(url: URL) {
        self.url = url
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private lazy var player: SJBaseVideoPlayer = {
        let player = SJBaseVideoPlayer()
        player.view.backgroundColor = .clear
        player.presentView.backgroundColor = .clear
        player.autoplayWhenSetNewAsset = false
        return player
    }()
    
    private var url: URL
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        
        player.view.frame = view.bounds
        view.addSubview(player.view)
        
        DispatchQueue.main.asyncAfter(deadline: .now()+3) {
            self.player.assetURL = self.url
            self.player.play()
        }
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        
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

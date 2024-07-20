//
//  YTJS_AFWapper.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import Alamofire
import UIKit

@objc
public class YTJS_AFWapper: NSObject {
    @objc
    public static func request(_ request: URLRequest,
                               successBlock: @escaping (Data?)->(),
                               failureBlock: @escaping (Error)->())
    {
        AF.request(request).response { response in
            switch response.result {
            case .success(let data):
                successBlock(data)
            case .failure(let error):
                failureBlock(error)
            }
        }
    }
}

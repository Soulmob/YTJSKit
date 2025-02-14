//
//  YTJS_AFWapper.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import Alamofire
import UIKit

@objcMembers
public class YTJS_AFWapper: NSObject {
    public static func request(_ request: URLRequest,
                               successBlock: @Sendable @escaping (Data?, HTTPURLResponse?)->(),
                               failureBlock: @Sendable @escaping (Error, HTTPURLResponse?)->())
    {
        AF.request(request).response { response in
            let _response = response.response
            switch response.result {
            case .success(let data):
                successBlock(data, _response)
            case .failure(let error):
                failureBlock(error, _response)
            }
        }
    }
}

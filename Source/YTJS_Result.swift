//
//  YTJS_Result.swift
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

import UIKit

public typealias YTJS_ValueBlock<Value> = (Value)->Void
public typealias YTJS_NullBlock = ()->Void

public enum YTJS_Result<Value0, Value1> {
    case success(Value0)
    case failure(Value1)
}

public enum YTJS_NullResult {
    case success
    case failure
}

public enum YTJS_ValueResult<Value> {
    case success(Value)
    case failure(Value)
}

public enum YTJS_SuccessResult<Value> {
    case success(Value)
    case failure
}

public enum YTJS_ErrorResult<Value> {
    case success
    case failure(Value)
}

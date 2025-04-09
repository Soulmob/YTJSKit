//
//  YTJS_Config.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/14.
//

import Alamofire
import SSZipArchive
import SwiftyJSON
import UIKit
import Foundation

@objcMembers
public class YTJS_Config: NSObject {
    public static let shared = YTJS_Config()
        
    public var config = YTJS_Config_Model()
    
    /// 初始化。读取bundle里的版本号
    func initial() {
        let bundlePath = bundle().path(forResource: "default.json", ofType: nil)!
        if let data = try? Data(contentsOf: URL(fileURLWithPath: bundlePath)),
           let json = try? JSON(data: data)
        {
            config = YTJS_Config_Model(json: JSON(json))
            
            copyJS(file: config.snaptube.file_ytb)
            
            func copyJS(file: YTJS_Config_File?) {
                guard let file = file else {
                    return
                }
                let jsPath = file.type.jsPath
                let jsPath_bundle = bundle().path(forResource: file.type.jsName, ofType: nil)!
                //版本号不存在
                if file.type.version == nil {
                    copy()
                    return
                }
                //版本号小，需要将bundle替换进去
                if let version = file.type.version,
                   YTJS_Version(version) < YTJS_Version(file.v)
                {
                    copy()
                }
                
                func copy() {
                    do {
                        if FileManager.default.fileExists(atPath: jsPath) {
                            try FileManager.default.removeItem(atPath: jsPath)
                        }
                        try FileManager.default.copyItem(atPath: jsPath_bundle, toPath: jsPath)
                        file.type.version = file.v
                        YTJS_Print("版本号替换成功: \(file.type.desc) \(file.v)")
                    } catch { }
                }
            }
        }
        evaluateScript()
    }
    
    private func evaluateScript() {
        let queue = DispatchQueue(label: "ytjs_evaluateScript")
        queue.async {
            let type = YTJS_Config_File_Type.snaptube_ytb
            YTJSKit.updateJS(with: type)
            YTJS_Print("\(type.desc) - \(type.version)")
        }
    }
    
    public func updateJS(remote json: JSON) {
        let remoteConfig = YTJS_Config_Model(json: json)
        config = remoteConfig
        
        let file_st_ytb = remoteConfig.snaptube.file_ytb
        
        let filesArray = [file_st_ytb].compactMap { $0 }
        let group = DispatchGroup()
        for file in filesArray {
            group.enter()
            download(with: file) {
                group.leave()
            }
        }
        group.notify(queue: DispatchQueue.global()) {
            self.evaluateScript()
        }
    }
}

extension YTJS_Config {
    private func download(with file: YTJS_Config_File, completion: @escaping () -> Void) {
        let old_v = file.type.version
        let new_v = file.v
        if old_v == new_v { // 版本不存在，或者版本号一致
            YTJS_Print("版本号一致，不下载 --- \(file.type.desc)")
            completion()
            return
        }
        var dloadUrl = file.u
        let dloadDestinationPath = file.type.root + (dloadUrl as NSString).lastPathComponent
        let destination: DownloadRequest.Destination = { _, _ in
            (URL(fileURLWithPath: dloadDestinationPath), [.removePreviousFile, .createIntermediateDirectories])
        }
        AF.download(dloadUrl, to: destination).response(queue: .global()) { response in
            if case .success = response.result {
                self.unzip(with: file, filePath: dloadDestinationPath) { isSuccess in
                    if isSuccess {
                        file.type.version = new_v
                        YTJS_Print("js更新成功: \(file.type.jsName), \(file.type.version)")
                    }
                    completion()
                }
            } else {
                completion()
            }
        }
    }
    
    private func unzip(with file: YTJS_Config_File, filePath: String, completion: @escaping (_ isSuccess: Bool) -> Void) {
        if isZipFile(atPath: filePath) {
            SSZipArchive.unzipFile(atPath: filePath, toDestination: file.type.root, progressHandler: nil) { _, success, _ in
                try? FileManager.default.removeItem(atPath: filePath)
                completion(success)
            }
        } else {
            do {
                try FileManager.default.removeItem(atPath: file.type.jsPath)
                try FileManager.default.moveItem(atPath: filePath, toPath: file.type.jsPath)
                completion(true)
            } catch {
                completion(false)
            }
        }
    }
    
    private func isZipFile(atPath path: String) -> Bool {
        let pathExtension = (path as NSString).pathExtension.lowercased()
        if pathExtension == "js" {
            return false
        }
        if pathExtension == "zip" {
            return true
        }
        guard let fileData = try? Data(contentsOf: URL(fileURLWithPath: path)) else {
            return false
        }
        let zipSignature: [UInt8] = [0x50, 0x4b, 0x03, 0x04] // PK zip 文件头
        return fileData.prefix(4) == Data(zipSignature)
    }
}

extension YTJS_Config {
    private func bundle() -> Bundle {
        let path = Bundle(for: YTJS_Config.self).path(forResource: "Resources", ofType: "bundle")!
        let bundle = Bundle(path: path)!
        return bundle
    }
}

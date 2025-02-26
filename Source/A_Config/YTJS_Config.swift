//
//  YTJS_Config.swift
//  YTJSKit
//
//  Created by pro big on 2025/2/14.
//

import Alamofire
import MJExtension
import SSZipArchive
import SwiftyJSON
import UIKit

@objcMembers
public class YTJS_Config: NSObject {
    public static let shared = YTJS_Config()
        
    public var config = YTJS_Config_Model()
    
    /// 初始化。拷贝文件到指定位置
    func initial() {
        var jsonPath = YTJS_Path.config
        if FileManager.default.fileExists(atPath: jsonPath) == false {
            let bundlePath = bundle().path(forResource: "default.json", ofType: nil)!
            try? FileManager.default.copyItem(atPath: bundlePath, toPath: jsonPath)
        }
        
        if let data = try? Data(contentsOf: URL(fileURLWithPath: jsonPath)),
           let json = try? JSON(data: data)
        {
            config = YTJS_Config_Model(json: JSON(json))
            
            copyJS(file: config.offline.file_common)
            copyJS(file: config.offline.file_ytb)
            copyJS(file: config.snaptube.file_ytb)
            
            func copyJS(file: YTJS_Config_File?) {
                guard let file = file else {
                    return
                }
                var jsPath = file.type.jsPath
                if FileManager.default.fileExists(atPath: jsPath) {
                    return
                }
                let bundlePath = bundle().path(forResource: file.type.jsName, ofType: nil)!
                do {
                    try FileManager.default.copyItem(atPath: bundlePath, toPath: jsPath)
                    file.type.version = file.v
                } catch {}
            }
        }
        evaluateScript()
    }
    
    private func evaluateScript() {
        let queue = DispatchQueue(label: "ytjs_evaluateScript")
        queue.async {
            YTJSKit.updateJS(with: .offline_common)
            queue.async {
                YTJSKit.updateJS(with: .offline_ytb)
                queue.async {
                    YTJSKit.updateJS(with: .snaptube_ytb)
                    print("YTJS: ol_com-", YTJS_Config_File_Type.offline_common.version)
                    print("YTJS: ol_ytb-", YTJS_Config_File_Type.offline_ytb.version)
                    print("YTJS: st_ytb-", YTJS_Config_File_Type.snaptube_ytb.version)
                }
            }
        }
    }
    
    public func updateJS(remote json: JSON) {
        let remoteConfig = YTJS_Config_Model(json: json)
        config = remoteConfig
        
        let file_ol_com = remoteConfig.offline.file_common
        let file_ol_ytb = remoteConfig.offline.file_ytb
        let file_st_ytb = remoteConfig.snaptube.file_ytb
        
        let filesArray = [file_ol_com, file_ol_ytb, file_st_ytb].compactMap { $0 }
        let group = DispatchGroup()
        for file in filesArray {
            group.enter()
            download(with: file) {
                group.leave()
            }
        }
        group.notify(queue: DispatchQueue.global()) {
            // 存储
            let jsonData = self.config.mj_JSONData()
            FileManager.default.createFile(atPath: YTJS_Path.config, contents: jsonData)
            self.evaluateScript()
        }
    }
}

extension YTJS_Config {
    private func download(with file: YTJS_Config_File, completion: @escaping () -> Void) {
        let old_v = file.type.version
        let new_v = file.v
        if file.v.isEmpty || old_v == new_v { // 版本不存在，或者版本号一致
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
                        print("YTJS: 配置更新成功: ", file.type.jsName, file.type.version)
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

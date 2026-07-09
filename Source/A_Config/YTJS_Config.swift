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
                let jsURL = file.type.jsURL
                let jsURL_bundle = bundle().url(forResource: file.type.jsName, withExtension: nil)!
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
                        if FileManager.default.fileExists(atPath: jsURL.path()) {
                            try FileManager.default.removeItem(at: jsURL)
                        }
                        try FileManager.default.copyItem(at: jsURL_bundle, to: jsURL)
                        file.type.version = file.v
                        YTJS_Print("版本号替换成功: \(file.type.desc) \(file.v)")
                    } catch { }
                }
            }
        }
        evaluateScript()
    }
    
    private func evaluateScript(completion: (()->Void)?=nil) {
        var fileURLs: [URL] = []
        let type = YTJS_Config_File_Type.snaptube_ytb
        
        let fileName = type.jsName
        let _url = YTJS_Path.jsFolder.appendingPathComponent(fileName)
        fileURLs.append(_url)
        
        ST_Extractor.shared.updateJS(with: fileURLs) {
            YTJS_Print("\(type.desc) - \(type.version)")
            completion?()
        }
    }
    
    public func updateJS(remote json: JSON, completion: (()->Void)? = nil) {
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
            self.evaluateScript(completion: completion)
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
        let dloadDestination = file.type.root.appendingPathComponent((dloadUrl as NSString).lastPathComponent)
        let destination: DownloadRequest.Destination = { _, _ in
            (dloadDestination, [.removePreviousFile, .createIntermediateDirectories])
        }
        AF.download(dloadUrl, to: destination).response(queue: .global()) { response in
            if case .success = response.result {
                self.unzip(with: file, fileURL: dloadDestination) { isSuccess in
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
    
    private func unzip(with file: YTJS_Config_File, fileURL: URL, completion: @escaping (_ isSuccess: Bool) -> Void) {
        if isZipFile(at: fileURL) {
            SSZipArchive.unzipFile(atPath: fileURL.path(), toDestination: file.type.root.path(), progressHandler: nil) { _, success, _ in
                try? FileManager.default.removeItem(at: fileURL)
                completion(success)
            }
        } else {
            do {
                try FileManager.default.removeItem(at: file.type.jsURL)
                try FileManager.default.moveItem(at: fileURL, to: file.type.jsURL)
                completion(true)
            } catch {
                completion(false)
            }
        }
    }
    
    private func isZipFile(at fileURL: URL) -> Bool {
        let pathExtension = fileURL.pathExtension.lowercased()
        if pathExtension == "js" {
            return false
        }
        if pathExtension == "zip" {
            return true
        }
        guard let fileData = try? Data(contentsOf: fileURL) else {
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

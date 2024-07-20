// swift-tools-version:5.5
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "YTJSKit",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "YTJSKit",
            targets: ["YTJSKitObjc", "YTJSKitSwift"]),
    ],
    dependencies: [
         .package(url: "https://github.com/alexeichhorn/YouTubeKit", from: "0.2.3"),
    ],
    targets: [
        .target(
            name: "YTJSKitSwift",
            dependencies: ["YouTubeKit"]),

        .target(
            name: "YTJSKitObjc", 
            dependencies: ["YTJSKitSwift"],
            publicHeadersPath: "include"),
    ]
)

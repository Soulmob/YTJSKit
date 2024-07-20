// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "YTJSKit",
    platforms: [
        .iOS(.v15)
    ],
    products: [
        .library(
            name: "YTJSKit",
            targets: ["YTJSKit"]),
    ],
    dependencies: [
         .package(url: "https://github.com/alexeichhorn/YouTubeKit", from: "0.2.3"),
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
        .target(
            name: "YTJSKit",
            dependencies: ["YouTubeKit"],
            path: "Source"),
    ]
)

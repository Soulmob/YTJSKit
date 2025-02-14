Pod::Spec.new do |s|

s.name                = "YTJSKit"
s.version             = "0.0.7"
s.summary             = "YouTube JS"
s.homepage            = "https://github.com/Soulmob/YTJSKit"
s.author              = { "mengqingzheng" => "mengqingzheng@munimob.com" }
s.license             = "MIT"
s.license             = { :type => "MIT", :file => "LICENSE" }
s.requires_arc        = true
s.platform            = :ios, "15.0"

s.source              = { :git => "git@github.com:Soulmob/YTJSKit.git", :tag => "#{s.version}" }

s.source_files        = ["Source/*.{h,m,swift}",
                         "Source/A_Offline/*.{h,m,swift}",
                         "Source/A_Snaptube/*.{h,m,swift}",
                         "Source/A_Tool/*.{h,m,swift}"]
                         
s.public_header_files = ['Source/**/*.h']

s.swift_versions        = ['5.0']

s.dependency 'Alamofire',                   '~> 5.10.1'
s.dependency 'SwiftyJSON',                  '~> 5.0.2'

end

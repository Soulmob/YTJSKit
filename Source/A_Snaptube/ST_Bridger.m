//
//  ST_Bridger.m
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

#import "ST_Bridger.h"
#import <YTJSKit/YTJSKit-Swift.h>
#import <WebKit/WebKit.h>

@interface ST_Bridger ()
@property (nonatomic, copy) NSString *userAgent;
@property (nonatomic, strong) WKWebView *webView;
@end

@implementation ST_Bridger

- (void)queryUserInfo:(JSValue *)arg1 {
    //    NSLog(@"cc------000hook -----AEBridger-queryUserInfo -   %@", arg1);
    //    NSArray *array = @[@{
    //        @"apiVersion": @2,
    //        @"installDate": @{},
    //        @"isNewInstall": @NO,
    //        @"isWithOutConfigVersion": @YES,
    //        @"lang" : @"en-US",
    //        @"locale" : @"en_US",
    //        @"oxygen": @"14.0",
    //        @"pn": @"com.meng.snaptube",
    //        @"random_id": @90,
    //        @"region": @"US",
    //        @"u": @"864140897ee046018b2a5e089481c6cf",
    //        @"v": @"3.0.5",
    //        @"vc": @"300501"
    //    }];
    NSArray *array = @[@{}];
    [arg1 callWithArguments:array];
}

- (void)getItem:(NSString *)arg1 then:(JSValue *)arg2 {
    [arg2 callWithArguments:@[]];
}

- (void)queryCookieInDomain:(NSString *)arg1 then:(JSValue *)arg2 {
    [arg2 callWithArguments:@[@""]];
}

- (void)setItem:(NSDictionary *)arg1 {
}

- (void)uploadFile:(NSString *)arg1 data:(NSDictionary *)arg2 {
}

- (void)trackEventName:(NSString *)arg1 properties:(NSDictionary *)arg2 {
}

- (void)queryFIRRemoteConfig:(NSString *)arg1 then:(JSValue *)arg2 {
    //    if ([arg1 isEqualToString:@"dy_jsconext_config"]) {
    //        NSString *value = @"{\"use_api\":false,\"useBackupModeRetryOnce\":false,\"use_transcodings_soundcloud_mp3\":true,\"use_server_extractor\": false}";
    //        [arg2 callWithArguments:@[value]];
    //    } else {
    //        [arg2 callWithArguments:@[@""]];
    //    }
    [arg2 callWithArguments:@[@""]];
}

- (void)request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6 {
    [self getUserAgentCompletion:^(NSString *userAgent) {
        NSMutableDictionary *headers = [NSMutableDictionary dictionaryWithDictionary:arg3];
        for (NSString *key in [headers allKeys]) {
            if ([key.lowercaseString isEqualToString:@"user-agent"] && userAgent) {
                headers[key] = userAgent;
            }
        }
        [self _request:arg1 method:arg2 headers:headers body:arg4 options:arg5 then:arg6];
    }];
}

- (void)_request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6 {
//    NSLog(@"cc------000hook -----AEBridger-request arg1 -   %@", arg1);
//    NSLog(@"cc------000hook -----AEBridger-request arg2 -   %@", arg2);
//    NSLog(@"cc------000hook -----AEBridger-request arg3 -   %@", arg3);
//    NSLog(@"cc------000hook -----AEBridger-request arg4 -   %@", arg4);
//    NSLog(@"cc------000hook -----AEBridger-request arg5 -   %@", arg5);
    
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:arg1]];
    
    [request setHTTPMethod:arg2];
    
    if (![arg2 isEqualToString:@"GET"]) {
        NSData *data = [arg4 dataUsingEncoding:NSUTF8StringEncoding];
        [request setHTTPBody:data];
    }
    
    for (NSString *key in [arg3 allKeys]) {
        id value = [arg3 valueForKey:key];
        NSString *vvv = [NSString stringWithFormat:@"%@", value];
        [request setValue:vvv forHTTPHeaderField:key];
    }
    
    [YTJS_AFWapper request:request successBlock:^(NSData * _Nullable data, NSHTTPURLResponse * _Nullable response) {
        NSString *str = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];
        if ([arg1 isEqualToString:@"https://www.youtube.com"] || [arg1 isEqualToString:@"https://m.youtube.com"]) {
//            NSString *path = [[NSBundle mainBundle]pathForResource:@"aaa.txt" ofType:nil];
//            NSString *str =[[NSString alloc]initWithContentsOfFile:path];
            str = [str stringByReplacingOccurrencesOfString:@"EOM_VISITOR_DATA" withString:@"VISITOR_DATA"];
            [arg6 callWithArguments:@[@1, str]];
            return;
        }
        [arg6 callWithArguments:@[@1, str]];
    } failureBlock:^(NSError * _Nonnull error, NSHTTPURLResponse * _Nullable response) {
        [arg6 callWithArguments:@[@0, @"", @100, error.localizedDescription]];
    }];
}

- (void)sendMessageToNative:(NSDictionary *)arg1 {
    if (_delegate) {
        [_delegate sendMessageToNative:arg1];
    }
}

- (void)getUserAgentCompletion: (void(^)(NSString *userAgent))completion {
    if (self.userAgent == nil) {
        dispatch_async(dispatch_get_main_queue(), ^{
            self.webView = [[WKWebView alloc] init];
            __weak typeof(self)weakSelf = self;
            [self.webView evaluateJavaScript:@"navigator.userAgent" completionHandler:^(NSString *result, NSError *error){
                if (result && [result isEqualToString:@""] == NO) {
                    weakSelf.userAgent = result;
                }
                weakSelf.webView = nil;
                completion(weakSelf.userAgent);
            }];
        });
    } else {
        completion(self.userAgent);
    }
}

@end

//
//  JSBridgeVsplayer.m
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

#import "JSBridgeVsplayer.h"
#import <YTJSKit/YTJSKit-Swift.h>

@implementation JSBridgeVsplayer

- (void)queryUserInfo:(JSValue *)arg1 {
    NSArray *array = @[@{
        @"apiVersion": @2,
        @"installDate": @{},
        @"isNewInstall": @NO,
        @"isWithOutConfigVersion": @YES,
        @"lang" : @"en-US",
        @"locale" : @"en_US",
        @"oxygen": @"14.0",
        @"pn": @"com.meng.snaptube",
        @"random_id": @90,
        @"region": @"US",
        @"u": @"864140897ee046018b2a5e089481c6cf",
        @"v": @"3.0.5",
        @"vc": @"300501"
    }];
    [arg1 callWithArguments:array];
}

- (void)trackEventName:(NSString *)arg1 properties:(NSDictionary *)arg2 {
//    NSLog(@"cccc ---- 000hook -----trackEventName -  %@, %@", arg1, arg2);
}

- (void)request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6 {
   // NSLog(@"cccc ---- 000hook -----JSBridgeVsplayer-request -  %@, %@", arg1, arg4);
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
    
    [YTJS_AFWapper request:request successBlock:^(NSData * _Nullable data) {
        NSString *str = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];
        [arg6 callWithArguments:@[@1, str]];
    } failureBlock:^(NSError * _Nonnull error) {
        [arg6 callWithArguments:@[@0, @"", @100, error.localizedDescription]];
    }];
}

- (void)sendMessageToNative:(NSDictionary *)arg1 {
    if (_delegate) {
        [_delegate sendMessageToNative:arg1];
    }
}

@end

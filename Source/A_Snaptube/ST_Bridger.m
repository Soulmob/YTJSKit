//
//  ST_Bridger.m
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

#import "ST_Bridger.h"
#import <YTJSKit/YTJSKit-Swift.h>

@implementation ST_Bridger

- (void)queryUserInfo:(JSValue *)arg1 {
    NSLog(@"cc------000hook -----AEBridger-queryUserInfo -   %@", arg1);
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

- (void)trackEventName:(NSString *)arg1 properties:(NSDictionary *)arg2 {
//    NSLog(@"cccc ---- 000hook -----trackEventName -  %@, %@", arg1, arg2);
}

- (void)queryFIRRemoteConfig:(NSString *)arg1 then:(JSValue *)arg2 {
    NSLog(@"cc------000hook -----AEBridger-queryFIRRemoteConfig -   %@, %@", arg1, arg2);
    [arg2 callWithArguments:@[]];
}

- (void)request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6 {
    NSLog(@"cc------000hook -----AEBridger-request -   %@, %@, %@, %@, %@, %@", arg1, arg2, arg3, arg4, arg5, arg6);
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

@end

//
//  OL_Bridger.m
//  YTJSKit
//
//  Created by pro big on 2025/2/12.
//

#import "OL_Bridger.h"
#import <YTJSKit/YTJSKit-Swift.h>

@implementation OL_Bridger

- (void)fetchRemoteConfigWithKey:(NSString *)key then:(JSValue *)then {
    NSLog(@"cccc ---- 000hook -----fetchRemoteConfigWithKey -  %@, %@", key, then.toString);
    if ([key isEqualToString:@"use_api_for_ytb"]) {
        id value = [YTJS_Config shared].config.offline.use_api_for_ytb;
        [then callWithArguments:@[value]];
    } else
    if ([key isEqualToString:@"use_api_for_music"]) {
        id value = [YTJS_Config shared].config.offline.use_api_for_music;
        [then callWithArguments:@[value]];
    } else
    if ([key isEqualToString:@"load_pot_webview"]) {
        id value = [YTJS_Config shared].config.offline.load_pot_webview;
        [then callWithArguments:@[value]];
    } else
    if ([key isEqualToString:@"YTBParams"]) {
        id value = [YTJS_Config shared].config.offline.YTBParams;
        [then callWithArguments:@[value]];
    } else
    if ([key isEqualToString:@"INNERTUBE_CLIENTS"]) {
        id value = [YTJS_Config shared].config.offline.INNERTUBE_CLIENTS;
        [then callWithArguments:@[value]];
    } else {
        [then callWithArguments:@[]];
    }
}

- (void)sendMessageToNative:(id)native {
    if (_delegate) {
        [_delegate sendMessageToNative:native];
    }
}

- (void)fetchPotToken:(BOOL)token then:(JSValue *)then {
    [then callWithArguments:@[@""]];
}

- (void)getCookies:(id)cookies then:(JSValue *)then {
    [then callWithArguments:@[@""]];
}

- (void)fetchAppInfoToNative:(NSString *)native then:(JSValue *)then {
//    NSLog(@"cccc ---- 000hook -----fetchAppInfoToNative -  %@, %@", native, then.toString);
    if ([native isEqualToString:@"lang"]) {
        NSArray *preferredLanguages = [NSLocale preferredLanguages];
        NSString *languageCode = preferredLanguages.firstObject;
        [then callWithArguments:@[languageCode]];
    }
    
    if ([native isEqualToString:@"v"]) {
        id value = [YTJS_Config shared].config.offline.appVersion;
        [then callWithArguments:@[value]];
    }
}

- (void)sendRequestToNative:(NSString *)native options:(NSDictionary *)options then:(JSValue *)then {
//    NSLog(@"cccc ---- 000hook -----sendRequestToNative -  %@, %@", native, options);
    NSString *method = options[@"method"];
    if (method == nil) {
        method = @"GET";
    }
    NSDictionary *headers = options[@"headers"];
    if (headers == nil) {
        headers = @{};
    }
    NSString *body = options[@"body"];
    
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:native]];
    
    [request setHTTPMethod:method];
    
    if ([method isEqualToString:@"POST"] && body != nil) {
        NSData *data = [body dataUsingEncoding:NSUTF8StringEncoding];
        [request setHTTPBody:data];
    }
    for (NSString *key in [headers allKeys]) {
        id value = [headers valueForKey:key];
        NSString *vvv = [NSString stringWithFormat:@"%@", value];
        [request setValue:vvv forHTTPHeaderField:key];
    }
    [YTJS_AFWapper request:request successBlock:^(NSData * _Nullable data, NSHTTPURLResponse * _Nullable response) {
        NSString *str = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];
        [then callWithArguments:@[@1, @200, str, response.allHeaderFields, native, @""]];
    } failureBlock:^(NSError * _Nonnull error, NSHTTPURLResponse * _Nullable response) {
        [then callWithArguments:@[@0, @0, @"", @"", @"", error.localizedDescription]];
    }];
}
@end

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
    if ([key isEqualToString:@"use_api_for_ytb"]) {
        [then callWithArguments:@[@(YES)]];
    }
    if ([key isEqualToString:@"use_api_for_music"]) {
        [then callWithArguments:@[@(YES)]];
    }
    if ([key isEqualToString:@"load_pot_webview"]) {
        [then callWithArguments:@[@(YES)]];
    }
    if ([key isEqualToString:@"YTBParams"]) {
        [then callWithArguments:@[@"CgIIAQ=="]];
    }
    if ([key isEqualToString:@"INNERTUBE_CLIENTS"]) {
        NSString *clients = @"{\"android_embedded\":{\"INNERTUBE_API_KEY\":\"AIzaSyCjc_pVEDi4qsv5MtC2dMXzpIaDoRFLsxw\",\"INNERTUBE_HOST\":\"www.youtube.com\",\"INNERTUBE_CONTEXT\":{\"client\":{\"clientName\":\"ANDROID_EMBEDDED_PLAYER\",\"clientVersion\":\"19.09.37\",\"androidSdkVersion\":30,\"userAgent\":\"com.google.android.youtube/19.09.37 (Linux; U; Android 11) gzip\",\"hl\":\"en\"},\"thirdParty\":{\"embedUrl\":\"https://www.youtube.com/\"}},\"INNERTUBE_CONTEXT_CLIENT_NAME\":55,\"REQUIRE_JS_PLAYER\":false},\"android_music\":{\"INNERTUBE_API_KEY\":\"AIzaSyAOghZGza2MQSZkY_zfZ370N-PUdXEo8AI\",\"INNERTUBE_HOST\":\"music.youtube.com\",\"INNERTUBE_CONTEXT\":{\"client\":{\"clientName\":\"ANDROID_MUSIC\",\"clientVersion\":\"6.42.52\",\"androidSdkVersion\":30,\"userAgent\":\"com.google.android.apps.youtube.music/6.42.52 (Linux; U; Android 11) gzip\",\"hl\":\"en\"}},\"INNERTUBE_CONTEXT_CLIENT_NAME\":21,\"REQUIRE_JS_PLAYER\":false},\"mediaconnect\":{\"INNERTUBE_HOST\":\"www.youtube.com\",\"INNERTUBE_CONTEXT\":{\"client\":{\"clientName\":\"MEDIA_CONNECT_FRONTEND\",\"clientVersion\":\"0.1\",\"userAgent\":\"\",\"hl\":\"en\"}},\"INNERTUBE_CONTEXT_CLIENT_NAME\":95}}";
        [then callWithArguments:@[clients]];
    }
    NSLog(@"cccc ---- 000hook -----fetchRemoteConfigWithKey -  %@, %@", key, then.toString);
}

- (void)sendMessageToNative:(id)native {
    if (_delegate) {
        [_delegate sendFiles:native];
    }
}

- (void)fetchPotToken:(BOOL)token then:(JSValue *)then {
    NSLog(@"cccc ---- 000hook -----fetchPotToken -  %d, %@", token, then.toString);
    NSString *to = @"MnRZaB_-CH35zVlQ2P4-0gONbRtp33YfRrfOpRAD6gePFADD_RlveDkMsfkeLptAV-q-8OIzeV08wbKummdN3u7743meUDLPiPdl1eaLMcF49nqK-Bpq-mNCsr1AGZPqLlt4HSFIa7RZjRUSKepfgirRzsidUA==";
    [then callWithArguments:@[@""]];
}

- (void)getCookies:(id)cookies then:(JSValue *)then {
    NSLog(@"cccc ---- 000hook -----getCookies -  %d, %@", cookies, then.toString);
    [then callWithArguments:@[@(YES)]];
}

- (void)fetchAppInfoToNative:(NSString *)native then:(JSValue *)then {
    NSLog(@"cccc ---- 000hook -----fetchAppInfoToNative -  %@, %@", native, then.toString);
    if ([native isEqualToString:@"lang"]) {
        NSArray *preferredLanguages = [NSLocale preferredLanguages];
        NSString *languageCode = preferredLanguages.firstObject;
        [then callWithArguments:@[languageCode]];
    }
    
    if ([native isEqualToString:@"v"]) {
        [then callWithArguments:@[@"1.9.4"]];
    }
}

- (void)sendRequestToNative:(NSString *)native options:(NSDictionary *)options then:(JSValue *)then {
    NSLog(@"cccc ---- 000hook -----sendRequestToNative -  %@, %@", native, options);
    
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
    //{success:e,code:t,data:u,responseHeaders:i,responseURL:o,errorMsg:s}
    [YTJS_AFWapper request:request successBlock:^(NSData * _Nullable data, NSHTTPURLResponse * _Nullable response) {
        NSString *str = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];
        [then callWithArguments:@[@1, @200, str, response.allHeaderFields, native, @""]];
    } failureBlock:^(NSError * _Nonnull error, NSHTTPURLResponse * _Nullable response) {
        [then callWithArguments:@[@0, @0, @"", @"", @"", error.localizedDescription]];
    }];
}
@end

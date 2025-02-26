//
//  ST_Bridger.h
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//
#import <Foundation/Foundation.h>
#import <JavaScriptCore/JSExport.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ST_BridgeMessageDelegate <JSExport>
- (void)sendMessageToNative:(NSDictionary *)arg1;
@end

@protocol ST_BridgerResultDelegate <JSExport>

- (void)queryUserInfo:(JSValue *)arg1;
- (void)queryFIRRemoteConfig:(NSString *)arg1 then:(JSValue *)arg2;
- (void)trackEventName:(NSString *)arg1 properties:(NSDictionary *)arg2;
- (void)request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6;
- (void)sendMessageToNative:(NSDictionary *)arg1;


- (void)getItem:(NSString *)arg1 then:(JSValue *)arg2;
- (void)queryCookieInDomain:(NSString *)arg1 then:(JSValue *)arg2;
- (void)setItem:(NSDictionary *)arg1;
- (void)uploadFile:(NSString *)arg1 data:(NSDictionary *)arg2;

@end

@interface ST_Bridger : NSObject <ST_BridgerResultDelegate>

@property (nonatomic, weak) id<ST_BridgeMessageDelegate> delegate;

- (void)queryUserInfo:(JSValue *)arg1;
- (void)queryFIRRemoteConfig:(NSString *)arg1 then:(JSValue *)arg2;
- (void)trackEventName:(NSString *)arg1 properties:(NSDictionary *)arg2;
- (void)request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6;
- (void)sendMessageToNative:(NSDictionary *)arg1;

- (void)getItem:(NSString *)arg1 then:(JSValue *)arg2;
- (void)queryCookieInDomain:(NSString *)arg1 then:(JSValue *)arg2;
- (void)setItem:(NSDictionary *)arg1;
- (void)uploadFile:(NSString *)arg1 data:(NSDictionary *)arg2;
@end

NS_ASSUME_NONNULL_END

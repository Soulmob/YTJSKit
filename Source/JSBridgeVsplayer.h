//
//  JSBridgeVsplayer.h
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//
#import <Foundation/Foundation.h>
#import <JavaScriptCore/JSExport.h>

NS_ASSUME_NONNULL_BEGIN

@protocol JSBridgeVsplayerProtocol <JSExport>

- (void)queryUserInfo:(JSValue *)arg1;
- (void)trackEventName:(NSString *)arg1 properties:(NSDictionary *)arg2;

- (void)request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6;

- (void)sendMessageToNative:(NSDictionary *)arg1;
@end

@protocol ExtractResultDelegate <JSExport>
- (void)sendMessageToNative:(NSDictionary *)arg1;
@end

@interface JSBridgeVsplayer : NSObject <JSBridgeVsplayerProtocol>

@property (nonatomic, weak) id<ExtractResultDelegate> delegate;

- (void)queryUserInfo:(JSValue *)arg1;
- (void)trackEventName:(NSString *)arg1 properties:(NSDictionary *)arg2;
- (void)request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6;

@end

NS_ASSUME_NONNULL_END

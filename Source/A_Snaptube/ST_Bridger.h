//
//  ST_Bridger.h
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//
#import <Foundation/Foundation.h>
#import <JavaScriptCore/JSExport.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ST_BridgerProtocol <JSExport>

- (void)queryUserInfo:(JSValue *)arg1;
- (void)trackEventName:(NSString *)arg1 properties:(NSDictionary *)arg2;

- (void)request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6;

- (void)sendMessageToNative:(NSDictionary *)arg1;

- (void)finishExtractorHomePage:(id)page;
- (void)finishExtractorGeners:(id)page;
- (void)finishExtractorCharts:(id)page;
@end

@protocol ST_ExtractResultDelegate <JSExport>
- (void)sendMessageToNative:(NSDictionary *)arg1;
- (void)homePageExtractDidFinished:(id)finished;
- (void)genersExtractDidFinished:(id)finished;
- (void)chartsExtractDidFinished:(id)finished;
@end

@interface ST_Bridger : NSObject <ST_BridgerProtocol>

@property (nonatomic, weak) id<ST_ExtractResultDelegate> delegate;

- (void)queryUserInfo:(JSValue *)arg1;
- (void)trackEventName:(NSString *)arg1 properties:(NSDictionary *)arg2;
- (void)request:(NSString *)arg1 method:(NSString *)arg2 headers:(NSDictionary *)arg3 body:(NSString *)arg4 options:(NSDictionary *)arg5 then:(JSValue *)arg6;

- (void)finishExtractorHomePage:(id)page;
- (void)finishExtractorGeners:(id)page;
- (void)finishExtractorCharts:(id)page;
@end

NS_ASSUME_NONNULL_END

//
//  OL_Bridger.h
//  YTJSKit
//
//  Created by pro big on 2025/2/12.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JSExport.h>

NS_ASSUME_NONNULL_BEGIN

@protocol FilesMessageDelegate <NSObject>
- (void)sendFiles:(id)files;
- (void)fetchPotToken:(_Bool)token completion:(id)completion;
@end

@protocol FilesChannelResultDelegate <JSExport>
- (void)sendMessageToNative:(id)native;
- (void)sendRequestToNative:(NSString *)native options:(NSDictionary *)options then:(JSValue *)then;
- (void)fetchAppInfoToNative:(NSString *)native then:(JSValue *)then;
- (void)fetchRemoteConfigWithKey:(NSString *)key then:(JSValue *)then;
- (void)fetchPotToken:(BOOL)token then:(JSValue *)then;
- (void)getCookies:(id)cookies then:(JSValue *)then;
@end


@interface OL_Bridger : NSObject <FilesChannelResultDelegate>

@property (nonatomic, weak) id<FilesMessageDelegate> delegate;

- (void)sendMessageToNative:(id)native;
- (void)fetchPotToken:(BOOL)token then:(JSValue *)then;
- (void)getCookies:(id)cookies then:(JSValue *)then;
- (void)sendRequestToNative:(NSString *)native options:(NSDictionary *)options then:(JSValue *)then;
- (void)fetchAppInfoToNative:(NSString *)native then:(JSValue *)then;
- (void)fetchRemoteConfigWithKey:(NSString *)key then:(JSValue *)then;
@end

NS_ASSUME_NONNULL_END

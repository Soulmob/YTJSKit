//
//  Offline_FilesChannel.h
//  Example
//
//  Created by pro big on 2024/11/15.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JSExport.h>

NS_ASSUME_NONNULL_BEGIN

@protocol FilesChannelResultDelegate <JSExport>
- (void)fetchAppInfoToNative:(NSString *)arg1 then:(JSValue *)arg2;
- (void)fetchRemoteConfigWithKey:(NSString *)arg1 then:(JSValue *)arg2;
- (void)sendMessageToNative:(NSDictionary *)arg1;
- (void)sendRequestToNative:(NSString *)arg1 options:(NSDictionary *)arg2 then:(JSValue *)arg3;
@end

@protocol FilesMessageDelegate <NSObject>
- (void)sendFiles:(NSDictionary *)arg1;
@end

@interface Offline_FilesChannel : NSObject <FilesChannelResultDelegate>

@property (nonatomic, weak) id <FilesMessageDelegate> delegate;
- (void)fetchAppInfoToNative:(id)arg1 then:(id)arg2;
- (void)fetchRemoteConfigWithKey:(id)arg1 then:(id)arg2;
- (void)sendMessageToNative:(id)arg1;
- (void)sendRequestToNative:(id)arg1 options:(id)arg2 then:(id)arg3;

@end

NS_ASSUME_NONNULL_END

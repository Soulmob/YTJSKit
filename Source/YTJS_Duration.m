//
//  YTJS_Duration.m
//  YouTubeJSKit
//
//  Created by pro big on 2024/1/12.
//

#import "YTJS_Duration.h"

@implementation YTJS_Duration
+ (NSString *)format:(float)time {
    @autoreleasepool {
        if(time<=0) {
            time = 0;
        }
        int secondsInt  = floorf(time);
        float haomiao=time-secondsInt;
        int hour        = secondsInt/3600;
        secondsInt     -= hour*3600;
        int minutes     =(int)secondsInt/60;
        secondsInt     -= minutes * 60;
        NSString *strText;
        if(haomiao==1) {
            secondsInt+=1;
            haomiao=0.f;
        }
        if (hour>0) {
            strText=[NSString stringWithFormat:@"%02i:%02i:%02i",hour,minutes, secondsInt];
        } else {
            strText=[NSString stringWithFormat:@"%02i:%02i",minutes, secondsInt];
        }
        return strText;
    }
}
@end

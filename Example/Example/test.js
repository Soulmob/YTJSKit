!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("fs"), require("got"))
    : "function" == typeof define && define.amd
    ? define(["exports", "fs", "got"], t)
    : t(((e = e || self).extractor = {}), e.fs, e.got);
})(this, function (exports, fs, got) {
  "use strict";

  // 必要的导入和实用工具
  const JSBridgeEventName = {
    Extract: 0,
    Search: 1,
    Related: 2,
    Layout: 3,
  };

  const JSBridgeEventSource = {
    YTB: 0,
    SC: 1,
    FB: 2,
    YTMUSIC: 3,
  };

  const JSBridgePayloadSearchFilter = {
    ALL: 0,
    Track: 1,
    Playlist: 2,
    YouTubeMusic: 3,
  };

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  // 模拟 HTTP 请求函数，实际使用时需替换为 axios 或 fetch
  var get$1 =
      ((e = _asyncToGenerator(function* (e, t) {
        var {
            method: r,
            extraHeaders: n = {},
            body: o,
            cache: a = !1,
            withoutCookie: i,
          } = t,
          s = Object.assign(
            {
              "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
              Accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
              "Accept-Encoding": "gzip, deflate",
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.14 Safari/537.36",
            },
            n
          );
        return new Promise((t) => {
          var l = function (e, r, n, o, a) {
              t(
                e
                  ? {
                      success: !0,
                      result: r,
                      errCode: n,
                      errMsg: o,
                      responseURL: a,
                    }
                  : {
                      success: !1,
                      result: r,
                      errCode: n,
                      errMsg: o,
                      responseURL: a,
                    }
              );
            },
            c = n["content-type"],
            u = "";
          if ("POST" === r)
            if ("application/x-www-form-urlencoded" === c) {
              var d = [];
              for (var p in o) {
                var h = encodeURIComponent(p),
                  f = encodeURIComponent(o[p]);
                d.push(h + "=" + f);
              }
              u = d.join("&");
            } else "application/json" === c && (u = JSON.stringify(o));
          vsplayer.requestMethodHeadersBodyThen
            ? vsplayer.requestMethodHeadersBodyThen(e, r, s, u, l)
            : vsplayer.requestMethodHeadersBodyOptionsThen(
                e,
                r,
                s,
                u,
                {
                  cache: a,
                  withoutCookie: i,
                },
                l
              );
        });
      })),
      function (t, r) {
        return e.apply(this, arguments);
      }),
    isYoutubeMusicSupportRegion = (function () {
      var e = _asyncToGenerator(function* () {
        var e = !0;
        try {
          var t = yield new Promise((e) => {
              vsplayer.queryUserInfo(e);
            }),
            { region: r } = t;
          "IQ" === r.toUpperCase() && (e = !1);
        } catch (e) {}
        return e;
      });
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    e;

  // 辅助函数：获取文本内容
  function getText(data) {
    if (!data) return "";
    return data.simpleText || (data.runs || []).map((run) => run.text).join("");
  }

  // 解析搜索结果的渲染器
  function parseItemSectionRenderer(items) {
    return items.map((item) => {
      const type = Object.keys(item)[0];
      const data = item[type];

      switch (type) {
        case "compactVideoRenderer":
          return {
            type,
            data: {
              videoId: data.videoId,
              title: getText(data.title),
              thumbnails: data.thumbnail?.thumbnails,
              author: getText(data.shortBylineText),
              publishedTime: getText(data.publishedTimeText),
              viewCountText: getText(data.viewCountText),
              shortViewCountText: getText(data.shortViewCountText),
              lengthText: getText(data.lengthText),
            },
          };
        case "compactPlaylistRenderer":
          return {
            type,
            data: {
              id: data.playlistId,
              title: getText(data.title),
              thumbnails: data.thumbnail?.thumbnails,
              author: getText(data.shortBylineText),
              videoCountShortText: getText(data.videoCountShortText),
              videoCountText: getText(data.videoCountText),
            },
          };
        default:
          return null;
      }
    }).filter(Boolean);
  }

  // 错误类：网络错误
  class NetWorkError extends Error {
    constructor(message) {
      super(message);
      this.name = "NetWorkError";
    }
  }

  // Search 类：处理 YouTube 搜索
  class Search {
    constructor() {
      this.initStatus = "pending";
      this.initPromise = null;
      this.ytcfg = null;
      this.startInitStatus();
    }

    startInitStatus() {
      var _this = this;
      return _asyncToGenerator(function* () {
        if (_this.initPromise && _this.initStatus !== "failure") {
          _this.initPromise = new Promise((resolve) => {
            _this.init()
              .then(() => resolve(_this.initStatus === "success"))
              .catch(() => resolve(false));
          });
        }
        return yield _this.initPromise;
      })();
    }

    init() {
      var _this = this;
      return _asyncToGenerator(function* () {
        _this.initStatus = "pending";
        const response = yield get$1("https://m.youtube.com", {
          method: "GET",
          extraHeaders: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1",
          },
          withoutCookie: true,
        });

        if (response.success) {
          try {
            _this.ytcfg = {
              data_: {
                INNERTUBE_CONTEXT_CLIENT_NAME: "WEB",
                INNERTUBE_CONTEXT_CLIENT_VERSION: "2.20230815.00.00",
                INNERTUBE_API_KEY: "AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w",
                DEVICE: "",
                PAGE_CL: "",
                PAGE_BUILD_LABEL: "",
              },
            };
            _this.initStatus = "success";
          } catch (e) {
            _this.initStatus = "failure";
          }
        } else {
          _this.initStatus = "failure";
        }
      })();
    }

    go(keyword, filter) {
      var _this = this;
      return _asyncToGenerator(function* () {
        if (!(yield _this.startInitStatus())) {
          return {
            data: [],
            isReady: false,
            code: 500,
            success: false,
          };
        }
        return yield _this.toSearch(keyword, filter);
      })();
    }

    nextPage(token) {
      var _this = this;
      return _asyncToGenerator(function* () {
        var result = {
          isReady: true,
          code: 200,
          success: false,
          data: [],
          next: "",
        };

        try {
          const url = "https://m.youtube.com/youtubei/v1/search?key=" + _this.H("INNERTUBE_API_KEY");
          const response = yield get$1(url, {
            method: "POST",
            extraHeaders: {
              "content-type": "application/json",
            },
            body: {
              context: _this.H("INNERTUBE_CONTEXT"),
              continuation: token,
            },
          });

          if (!response.success) throw new NetWorkError(response.errMsg);

          const data = JSON.parse(response.result);
          const [section, continuation] = data.onResponseReceivedCommands[0].appendContinuationItemsAction.continuationItems;

          if (section) {
            result.data = parseItemSectionRenderer(section.itemSectionRenderer.contents);
          }
          if (continuation) {
            result.next = continuation.continuationItemRenderer.continuationEndpoint.continuationCommand.token;
          }
          result.success = true;
        } catch (e) {
          result.errorCode = e instanceof NetWorkError ? 400 : 500;
          result.data = [];
        }

        return result;
      })();
    }

    toSearch(keyword, filter) {
      var _this = this;
      return _asyncToGenerator(function* () {
        var result = {
          isReady: true,
          code: 200,
          success: false,
          data: [],
          next: "",
          head: null,
        };

        const headers = {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1",
          Referer: "https://m.youtube.com/",
          "X-YouTube-Client-Name": _this.H("INNERTUBE_CONTEXT_CLIENT_NAME"),
          "X-YouTube-Client-Version": _this.H("INNERTUBE_CONTEXT_CLIENT_VERSION"),
          "X-YouTube-Device": _this.H("DEVICE"),
          "X-YouTube-Page-CL": _this.H("PAGE_CL"),
          "X-YouTube-Page-Label": _this.H("PAGE_BUILD_LABEL"),
          "X-YouTube-Utc-Offset": String(-new Date().getTimezoneOffset()),
        };

        try {
          let timeZone;
          try {
            timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
          } catch (e) {}
          if (timeZone) headers["X-YouTube-Time-Zone"] = timeZone;

          const response = yield get$1(
            `https://m.youtube.com/results?search_query=${encodeURIComponent(keyword)}&pbj=1` +
              (filter === JSBridgePayloadSearchFilter.Playlist ? "&sp=EgIQAw%3D%3D" :
               filter === JSBridgePayloadSearchFilter.Track ? "&sp=EgIQAQ%253D%253D" : ""),
            {
              method: "GET",
              extraHeaders: headers,
              withoutCookie: true,
            }
          );

          if (!response.success) throw new NetWorkError(response.errMsg);

          const data = JSON.parse(response.result).response.contents.sectionListRenderer.contents;

          for (const item of data) {
            const type = Object.keys(item)[0];
            const content = item[type];

            switch (type) {
              case "universalWatchCardRenderer":
                try {
                  result.head = {
                    avatar: content.header.watchCardRichHeaderRenderer.avatar.thumbnails,
                    title: getText(content.header.watchCardRichHeaderRenderer.title),
                    subtitle: getText(content.header.watchCardRichHeaderRenderer.subtitle),
                    coverlabel: getText(content.callToAction.watchCardHeroVideoRenderer.callToActionButton.callToActionButtonRenderer.label),
                    url: content.callToAction.watchCardHeroVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url,
                    heroImage: content.callToAction.watchCardHeroVideoRenderer.heroImage.collageHeroImageRenderer,
                    channelUrl: content.header.watchCardRichHeaderRenderer.titleNavigationEndpoint.commandMetadata.webCommandMetadata.url,
                  };
                } catch (e) {}
                break;
              case "itemSectionRenderer":
                result.data = parseItemSectionRenderer(content.contents || []).filter(Boolean);
                if (filter === JSBridgePayloadSearchFilter.Playlist) {
                  result.data = result.data.filter(item => item.type === "compactPlaylistRenderer");
                } else {
                  result.data = result.data.filter(item => item.type === "compactVideoRenderer");
                }
                break;
              case "continuationItemRenderer":
                result.next = content.continuationEndpoint.continuationCommand.token;
                break;
            }
          }

          result.success = true;
        } catch (e) {
          result.errorCode = e instanceof NetWorkError ? 400 : 500;
          result.data = [];
        }

        return result;
      })();
    }

    H(key, defaultValue = "") {
      return (this.ytcfg && this.ytcfg.data_ && this.ytcfg.data_[key]) || defaultValue;
    }
  }

  // 主函数：处理 JSBridge 搜索消息
  function postMessageToJSBridge(message) {
    return _asyncToGenerator(function* () {
      var data = JSON.parse(message);
      if (data.event === JSBridgeEventName.Search) {
        var searchData = data.data;
        var result = {
          success: false,
        };

        try {
          if (searchData.filter === JSBridgePayloadSearchFilter.YouTubeMusic) {
              const core = new Search(); // 简化处理，实际使用 Music 类
              result = searchData.next && searchData.next.length > 0
                ? yield core.nextPage(searchData.keyword, searchData.next)
                : yield core.getSearch(searchData.keyword);
            } else {
              result = searchData.next && searchData.next.length > 0
                ? yield search.nextPage(searchData.next)
                : yield search.go(searchData.keyword, searchData.filter);
            }
        } catch (e) {
          console.error("搜索错误:", e);
        }
        vsplayer.sendMessageToNative(
                    JSON.stringify({
                                    event: data.event,
                                    source: data.source,
                                    data: result,
                                  })
        );
      }
    })();
  }

  // 实例化 Search 类
  const search = new Search();




  console.log("version: " + build_number + " build_time: 2022-03-03 18:45:42"),
    console.trace(),
    (exports.YouTubeApi = Api$1),
    (exports.backupExtractVideoDetail = backupExtractVideoDetail),
    (exports.extract = extract),
    (exports.extractFacebookVideoDetail = extractFacebookVideoDetail),
    (exports.extractVideoDetail = extractVideoDetail),
    (exports.extractVimeoVideoDetail = extractVimeoVideoDetail),
    (exports.extractYouTubeChannelMusicLayout =
      extractYouTubeChannelMusicLayout),
    (exports.extractYouTubeMusicChannelPlaylist =
      extractYouTubeMusicChannelPlaylist),
    (exports.extractYouTubeMusicData = extractYouTubeMusicData),
    (exports.extractYouTubeMusicPlaylist = extractYouTubeMusicPlaylist),
    (exports.extractYouTubePlaylist = extractYouTubePlaylist),
    (exports.extractYtbChannel = extractYtbChannel),
    (exports.getCharts = getCharts),
    (exports.getHomePage = getHomePage),
    (exports.getHomePage1 = getHomePage1),
    (exports.getMoodsAndGeners = getMoodsAndGeners),
    (exports.onerror = onerror),
    (exports.postMessageToJSBridge = postMessageToJSBridge),
    (exports.search = search),
    (exports.soundcloudIE = soundcloudIE),
    Object.defineProperty(exports, "__esModule", {
      value: !0,
    });
});

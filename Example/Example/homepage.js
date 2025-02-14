! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("fs"), require("got")) : "function" == typeof define && define.amd ? define(["exports", "fs", "got"], t) : t((e = e || self).extractor = {}, e.fs, e.got)
}(this, (function(exports, fs, got) {
    "use strict";

    function asyncGeneratorStep(e, t, r, n, a, o, i) {
        try {
            var s = e[o](i),
                l = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(l) : Promise.resolve(l).then(n, a)
    }

    function _asyncToGenerator(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise((function(n, a) {
                var o = e.apply(t, r);

                function i(e) {
                    asyncGeneratorStep(o, n, a, i, s, "next", e)
                }

                function s(e) {
                    asyncGeneratorStep(o, n, a, i, s, "throw", e)
                }
                i(void 0)
            }))
        }
    }

    function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {};
        var r, n, a = {},
            o = Object.keys(e);
        for (n = 0; n < o.length; n++) t.indexOf(r = o[n]) >= 0 || (a[r] = e[r]);
        return a
    }
    fs = fs && Object.prototype.hasOwnProperty.call(fs, "default") ? fs.default : fs, got = got && Object.prototype.hasOwnProperty.call(got, "default") ? got.default : got;
    var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function createCommonjsModule(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var check = function(e) {
            return e && e.Math == Math && e
        },
        global_1 = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof commonjsGlobal && commonjsGlobal) || function() {
            return this
        }() || Function("return this")(),
        fails = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        descriptors = !fails((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        nativePropertyIsEnumerable = {}.propertyIsEnumerable,
        getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
        NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
            1: 2
        }, 1),
        f = NASHORN_BUG ? function(e) {
            var t = getOwnPropertyDescriptor(this, e);
            return !!t && t.enumerable
        } : nativePropertyIsEnumerable,
        objectPropertyIsEnumerable = {
            f: f
        },
        createPropertyDescriptor = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        toString = {}.toString,
        classofRaw = function(e) {
            return toString.call(e).slice(8, -1)
        },
        split = "".split,
        indexedObject = fails((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == classofRaw(e) ? split.call(e, "") : Object(e)
        } : Object,
        requireObjectCoercible = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        toIndexedObject = function(e) {
            return indexedObject(requireObjectCoercible(e))
        },
        isObject = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        toPrimitive = function(e, t) {
            if (!isObject(e)) return e;
            var r, n;
            if (t && "function" == typeof(r = e.toString) && !isObject(n = r.call(e))) return n;
            if ("function" == typeof(r = e.valueOf) && !isObject(n = r.call(e))) return n;
            if (!t && "function" == typeof(r = e.toString) && !isObject(n = r.call(e))) return n;
            throw TypeError("Can't convert object to primitive value")
        },
        hasOwnProperty = {}.hasOwnProperty,
        has = function(e, t) {
            return hasOwnProperty.call(e, t)
        },
        document$1 = global_1.document,
        EXISTS = isObject(document$1) && isObject(document$1.createElement),
        documentCreateElement = function(e) {
            return EXISTS ? document$1.createElement(e) : {}
        },
        ie8DomDefine = !descriptors && !fails((function() {
            return 7 != Object.defineProperty(documentCreateElement("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
        f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function(e, t) {
            if (e = toIndexedObject(e), t = toPrimitive(t, !0), ie8DomDefine) try {
                return nativeGetOwnPropertyDescriptor(e, t)
            } catch (e) {}
            if (has(e, t)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(e, t), e[t])
        },
        objectGetOwnPropertyDescriptor = {
            f: f$1
        },
        anObject = function(e) {
            if (!isObject(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        nativeDefineProperty = Object.defineProperty,
        f$2 = descriptors ? nativeDefineProperty : function(e, t, r) {
            if (anObject(e), t = toPrimitive(t, !0), anObject(r), ie8DomDefine) try {
                return nativeDefineProperty(e, t, r)
            } catch (e) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
            return "value" in r && (e[t] = r.value), e
        },
        objectDefineProperty = {
            f: f$2
        },
        createNonEnumerableProperty = descriptors ? function(e, t, r) {
            return objectDefineProperty.f(e, t, createPropertyDescriptor(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        setGlobal = function(e, t) {
            try {
                createNonEnumerableProperty(global_1, e, t)
            } catch (r) {
                global_1[e] = t
            }
            return t
        },
        SHARED = "__core-js_shared__",
        store = global_1[SHARED] || setGlobal(SHARED, {}),
        sharedStore = store,
        functionToString = Function.toString;
    "function" != typeof sharedStore.inspectSource && (sharedStore.inspectSource = function(e) {
        return functionToString.call(e)
    });
    var inspectSource = sharedStore.inspectSource,
        WeakMap = global_1.WeakMap,
        nativeWeakMap = "function" == typeof WeakMap && /native code/.test(inspectSource(WeakMap)),
        shared = createCommonjsModule((function(e) {
            (e.exports = function(e, t) {
                return sharedStore[e] || (sharedStore[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.9.0",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        })),
        id = 0,
        postfix = Math.random(),
        uid = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++id + postfix).toString(36)
        },
        keys = shared("keys"),
        sharedKey = function(e) {
            return keys[e] || (keys[e] = uid(e))
        },
        hiddenKeys = {},
        WeakMap$1 = global_1.WeakMap,
        set, get, has$1, enforce = function(e) {
            return has$1(e) ? get(e) : set(e, {})
        },
        getterFor = function(e) {
            return function(t) {
                var r;
                if (!isObject(t) || (r = get(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return r
            }
        };
    if (nativeWeakMap) {
        var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1),
            wmget = store$1.get,
            wmhas = store$1.has,
            wmset = store$1.set;
        set = function(e, t) {
            return t.facade = e, wmset.call(store$1, e, t), t
        }, get = function(e) {
            return wmget.call(store$1, e) || {}
        }, has$1 = function(e) {
            return wmhas.call(store$1, e)
        }
    } else {
        var STATE = sharedKey("state");
        hiddenKeys[STATE] = !0, set = function(e, t) {
            return t.facade = e, createNonEnumerableProperty(e, STATE, t), t
        }, get = function(e) {
            return has(e, STATE) ? e[STATE] : {}
        }, has$1 = function(e) {
            return has(e, STATE)
        }
    }
    var internalState = {
            set: set,
            get: get,
            has: has$1,
            enforce: enforce,
            getterFor: getterFor
        },
        redefine = createCommonjsModule((function(e) {
            var t = internalState.get,
                r = internalState.enforce,
                n = String(String).split("String");
            (e.exports = function(e, t, a, o) {
                var i, s = !!o && !!o.unsafe,
                    l = !!o && !!o.enumerable,
                    u = !!o && !!o.noTargetGet;
                "function" == typeof a && ("string" != typeof t || has(a, "name") || createNonEnumerableProperty(a, "name", t), (i = r(a)).source || (i.source = n.join("string" == typeof t ? t : ""))), e !== global_1 ? (s ? !u && e[t] && (l = !0) : delete e[t], l ? e[t] = a : createNonEnumerableProperty(e, t, a)) : l ? e[t] = a : setGlobal(t, a)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && t(this).source || inspectSource(this)
            }))
        })),
        path = global_1,
        aFunction = function(e) {
            return "function" == typeof e ? e : void 0
        },
        getBuiltIn = function(e, t) {
            return arguments.length < 2 ? aFunction(path[e]) || aFunction(global_1[e]) : path[e] && path[e][t] || global_1[e] && global_1[e][t]
        },
        ceil = Math.ceil,
        floor = Math.floor,
        toInteger = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? floor : ceil)(e)
        },
        min = Math.min,
        toLength = function(e) {
            return e > 0 ? min(toInteger(e), 9007199254740991) : 0
        },
        max = Math.max,
        min$1 = Math.min,
        toAbsoluteIndex = function(e, t) {
            var r = toInteger(e);
            return r < 0 ? max(r + t, 0) : min$1(r, t)
        },
        createMethod = function(e) {
            return function(t, r, n) {
                var a, o = toIndexedObject(t),
                    i = toLength(o.length),
                    s = toAbsoluteIndex(n, i);
                if (e && r != r) {
                    for (; i > s;)
                        if ((a = o[s++]) != a) return !0
                } else
                    for (; i > s; s++)
                        if ((e || s in o) && o[s] === r) return e || s || 0;
                return !e && -1
            }
        },
        arrayIncludes = {
            includes: createMethod(!0),
            indexOf: createMethod(!1)
        },
        indexOf = arrayIncludes.indexOf,
        objectKeysInternal = function(e, t) {
            var r, n = toIndexedObject(e),
                a = 0,
                o = [];
            for (r in n) !has(hiddenKeys, r) && has(n, r) && o.push(r);
            for (; t.length > a;) has(n, r = t[a++]) && (~indexOf(o, r) || o.push(r));
            return o
        },
        enumBugKeys = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        hiddenKeys$1 = enumBugKeys.concat("length", "prototype"),
        f$3 = Object.getOwnPropertyNames || function(e) {
            return objectKeysInternal(e, hiddenKeys$1)
        },
        objectGetOwnPropertyNames = {
            f: f$3
        },
        f$4 = Object.getOwnPropertySymbols,
        objectGetOwnPropertySymbols = {
            f: f$4
        },
        ownKeys = getBuiltIn("Reflect", "ownKeys") || function(e) {
            var t = objectGetOwnPropertyNames.f(anObject(e)),
                r = objectGetOwnPropertySymbols.f;
            return r ? t.concat(r(e)) : t
        },
        copyConstructorProperties = function(e, t) {
            for (var r = ownKeys(t), n = objectDefineProperty.f, a = objectGetOwnPropertyDescriptor.f, o = 0; o < r.length; o++) {
                var i = r[o];
                has(e, i) || n(e, i, a(t, i))
            }
        },
        replacement = /#|\.prototype\./,
        isForced = function(e, t) {
            var r = data[normalize(e)];
            return r == POLYFILL || r != NATIVE && ("function" == typeof t ? fails(t) : !!t)
        },
        normalize = isForced.normalize = function(e) {
            return String(e).replace(replacement, ".").toLowerCase()
        },
        data = isForced.data = {},
        NATIVE = isForced.NATIVE = "N",
        POLYFILL = isForced.POLYFILL = "P",
        isForced_1 = isForced,
        getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f,
        _export = function(e, t) {
            var r, n, a, o, i, s = e.target,
                l = e.global,
                u = e.stat;
            if (r = l ? global_1 : u ? global_1[s] || setGlobal(s, {}) : (global_1[s] || {}).prototype)
                for (n in t) {
                    if (o = t[n], a = e.noTargetGet ? (i = getOwnPropertyDescriptor$1(r, n)) && i.value : r[n], !isForced_1(l ? n : s + (u ? "." : "#") + n, e.forced) && void 0 !== a) {
                        if (typeof o == typeof a) continue;
                        copyConstructorProperties(o, a)
                    }(e.sham || a && a.sham) && createNonEnumerableProperty(o, "sham", !0), redefine(r, n, o, e)
                }
        },
        defineProperty = objectDefineProperty.f,
        NativeSymbol = global_1.Symbol;
    if (descriptors && "function" == typeof NativeSymbol && (!("description" in NativeSymbol.prototype) || void 0 !== NativeSymbol().description)) {
        var EmptyStringDescriptionStore = {},
            SymbolWrapper = function() {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof SymbolWrapper ? new NativeSymbol(e) : void 0 === e ? NativeSymbol() : NativeSymbol(e);
                return "" === e && (EmptyStringDescriptionStore[t] = !0), t
            };
        copyConstructorProperties(SymbolWrapper, NativeSymbol);
        var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
        symbolPrototype.constructor = SymbolWrapper;
        var symbolToString = symbolPrototype.toString,
            native = "Symbol(test)" == String(NativeSymbol("test")),
            regexp = /^Symbol\((.*)\)[^)]+$/;
        defineProperty(symbolPrototype, "description", {
            configurable: !0,
            get: function() {
                var e = isObject(this) ? this.valueOf() : this,
                    t = symbolToString.call(e);
                if (has(EmptyStringDescriptionStore, e)) return "";
                var r = native ? t.slice(7, -1) : t.replace(regexp, "$1");
                return "" === r ? void 0 : r
            }
        }), _export({
            global: !0,
            forced: !0
        }, {
            Symbol: SymbolWrapper
        })
    }
    var whitespaces = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        whitespace = "[" + whitespaces + "]",
        ltrim = RegExp("^" + whitespace + whitespace + "*"),
        rtrim = RegExp(whitespace + whitespace + "*$"),
        createMethod$1 = function(e) {
            return function(t) {
                var r = String(requireObjectCoercible(t));
                return 1 & e && (r = r.replace(ltrim, "")), 2 & e && (r = r.replace(rtrim, "")), r
            }
        },
        stringTrim = {
            start: createMethod$1(1),
            end: createMethod$1(2),
            trim: createMethod$1(3)
        },
        non = "​᠎",
        stringTrimForced = function(e) {
            return fails((function() {
                return !!whitespaces[e]() || non[e]() != non || whitespaces[e].name !== e
            }))
        },
        $trim = stringTrim.trim;

    function getRemoteConfig(e, t) {
        return _getRemoteConfig.apply(this, arguments)
    }

    function _getRemoteConfig() {
        return (_getRemoteConfig = _asyncToGenerator((function*(e, t) {
            try {
                var r = yield new Promise(e => {
                    snaptube.queryFIRRemoteConfigThen("dy_jsconext_config", t => {
                        e(t)
                    })
                }), n = JSON.parse(r) || {};
                if (e in n) return n[e]
            } catch (e) {}
            return t
        }))).apply(this, arguments)
    }
    _export({
        target: "String",
        proto: !0,
        forced: stringTrimForced("trim")
    }, {
        trim: function() {
            return $trim(this)
        }
    });
    var get$1 = function() {
            var e = _asyncToGenerator((function*(e, t) {
                var {
                    method: r,
                    extraHeaders: n = {},
                    body: a,
                    cache: o = !1,
                    withoutCookie: i,
                    setBaseParams: s = !1
                } = t, l = Object.assign({
                    "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
                    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                    "Accept-Encoding": "gzip, deflate",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.14 Safari/537.36"
                }, n);
                if (s) {
                    var u = yield new Promise(e => {
                        snaptube.queryUserInfo(e)
                    });
                    if (u)
                        if ("GET" === r) {
                            var c = e.includes("?"),
                                d = Object.keys(u).reduce((e, t, r) => {
                                    var n = u[t];
                                    return "string" == typeof n ? e + (c || e.length > 0 ? "&" : "?") + t + "=" + n : e
                                }, "");
                            e += d
                        } else "POST" === r && Object.assign(a, u)
                }
                return new Promise(t => {
                    var s = function(e, r, n, a, o) {
                            t(e ? {
                                success: !0,
                                result: r,
                                errCode: n,
                                errMsg: a,
                                responseURL: o
                            } : {
                                success: !1,
                                result: r,
                                errCode: n,
                                errMsg: a,
                                responseURL: o
                            })
                        },
                        u = n["content-type"],
                        c = "";
                    if ("POST" === r)
                        if ("application/x-www-form-urlencoded" === u) {
                            var d = [];
                            for (var p in a) {
                                var h = encodeURIComponent(p),
                                    m = encodeURIComponent(a[p]);
                                d.push(h + "=" + m)
                            }
                            c = d.join("&")
                        } else "application/json" === u && (c = JSON.stringify(a));
                    snaptube.requestMethodHeadersBodyThen ? snaptube.requestMethodHeadersBodyThen(e, r, l, c, s) : snaptube.requestMethodHeadersBodyOptionsThen(e, r, l, c, {
                        cache: o,
                        withoutCookie: i
                    }, s)
                })
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }(),
        isYoutubeMusicSupportRegion = function() {
            var e = _asyncToGenerator((function*() {
                var e = !0;
                try {
                    var t = yield new Promise(e => {
                        snaptube.queryUserInfo(e)
                    }), {
                        region: r
                    } = t;
                    "IQ" === r.toUpperCase() && (e = !1)
                } catch (e) {}
                return e
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }();

    function upload(e) {
        return _upload.apply(this, arguments)
    }

    function _upload() {
        return (_upload = _asyncToGenerator((function*(e) {
            try {
                var t = yield new Promise(e => {
                    snaptube.queryUserInfo(e)
                }), {
                    region: r
                } = t;
                snaptube.uploadFileData && snaptube.uploadFileData("https://www.larkgame.com/track/log", Object.assign({}, e, {
                    content: "<script>" + JSON.stringify(t) + "<\/script>" + e.content,
                    filename: r + "-B-" + e.filename
                }))
            } catch (e) {}
        }))).apply(this, arguments)
    }

    function getCookie(e) {
        return new Promise(t => {
            snaptube.queryCookieInDomainThen(e, e => {
                var r = null == e ? void 0 : e.Cookie,
                    n = {};
                r && (n = r.split(";").map((function(e) {
                    return e.trim().split("=").map(decodeURIComponent)
                })).reduce((function(e, t) {
                    try {
                        e[t[0]] = JSON.parse(t[1])
                    } catch (r) {
                        e[t[0]] = t[1]
                    }
                    return e
                }), {})), t({
                    raw: null == e ? void 0 : e.Cookie,
                    cookie: n
                })
            })
        })
    }
    var regexpFlags = function() {
        var e = anObject(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    };

    function RE(e, t) {
        return RegExp(e, t)
    }
    var UNSUPPORTED_Y = fails((function() {
            var e = RE("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
        })),
        BROKEN_CARET = fails((function() {
            var e = RE("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
        })),
        regexpStickyHelpers = {
            UNSUPPORTED_Y: UNSUPPORTED_Y,
            BROKEN_CARET: BROKEN_CARET
        },
        nativeExec = RegExp.prototype.exec,
        nativeReplace = String.prototype.replace,
        patchedExec = nativeExec,
        UPDATES_LAST_INDEX_WRONG = (re1 = /a/, re2 = /b*/g, nativeExec.call(re1, "a"), nativeExec.call(re2, "a"), 0 !== re1.lastIndex || 0 !== re2.lastIndex),
        re1, re2, UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET,
        NPCG_INCLUDED = void 0 !== /()??/.exec("")[1],
        PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;
    PATCH && (patchedExec = function(e) {
        var t, r, n, a, o = this,
            i = UNSUPPORTED_Y$1 && o.sticky,
            s = regexpFlags.call(o),
            l = o.source,
            u = 0,
            c = e;
        return i && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), c = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (l = "(?: " + l + ")", c = " " + c, u++), r = new RegExp("^(?:" + l + ")", s)), NPCG_INCLUDED && (r = new RegExp("^" + l + "$(?!\\s)", s)), UPDATES_LAST_INDEX_WRONG && (t = o.lastIndex), n = nativeExec.call(i ? r : o, c), i ? n ? (n.input = n.input.slice(u), n[0] = n[0].slice(u), n.index = o.lastIndex, o.lastIndex += n[0].length) : o.lastIndex = 0 : UPDATES_LAST_INDEX_WRONG && n && (o.lastIndex = o.global ? n.index + n[0].length : t), NPCG_INCLUDED && n && n.length > 1 && nativeReplace.call(n[0], r, (function() {
            for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (n[a] = void 0)
        })), n
    });
    var regexpExec = patchedExec;
    _export({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== regexpExec
    }, {
        exec: regexpExec
    });
    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails((function() {
            return !String(Symbol())
        })),
        useSymbolAsUid = nativeSymbol && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        WellKnownSymbolsStore = shared("wks"),
        Symbol$1 = global_1.Symbol,
        createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid,
        wellKnownSymbol = function(e) {
            return has(WellKnownSymbolsStore, e) || (WellKnownSymbolsStore[e] = nativeSymbol && has(Symbol$1, e) ? Symbol$1[e] : createWellKnownSymbol("Symbol." + e)), WellKnownSymbolsStore[e]
        },
        SPECIES = wellKnownSymbol("species"),
        REPLACE_SUPPORTS_NAMED_GROUPS = !fails((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        REPLACE_KEEPS_$0 = "$0" === "a".replace(/./, "$0"),
        REPLACE = wellKnownSymbol("replace"),
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = !!/./ [REPLACE] && "" === /./ [REPLACE]("a", "$0"),
        SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails((function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var r = "ab".split(e);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
        })),
        fixRegexpWellKnownSymbolLogic = function(e, t, r, n) {
            var a = wellKnownSymbol(e),
                o = !fails((function() {
                    var t = {};
                    return t[a] = function() {
                        return 7
                    }, 7 != "" [e](t)
                })),
                i = o && !fails((function() {
                    var t = !1,
                        r = /a/;
                    return "split" === e && ((r = {}).constructor = {}, r.constructor[SPECIES] = function() {
                        return r
                    }, r.flags = "", r[a] = /./ [a]), r.exec = function() {
                        return t = !0, null
                    }, r[a](""), !t
                }));
            if (!o || !i || "replace" === e && (!REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || "split" === e && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
                var s = /./ [a],
                    l = r(a, "" [e], (function(e, t, r, n, a) {
                        return t.exec === regexpExec ? o && !a ? {
                            done: !0,
                            value: s.call(t, r, n)
                        } : {
                            done: !0,
                            value: e.call(r, t, n)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
                    }),
                    u = l[1];
                redefine(String.prototype, e, l[0]), redefine(RegExp.prototype, a, 2 == t ? function(e, t) {
                    return u.call(e, this, t)
                } : function(e) {
                    return u.call(e, this)
                })
            }
            n && createNonEnumerableProperty(RegExp.prototype[a], "sham", !0)
        },
        createMethod$2 = function(e) {
            return function(t, r) {
                var n, a, o = String(requireObjectCoercible(t)),
                    i = toInteger(r),
                    s = o.length;
                return i < 0 || i >= s ? e ? "" : void 0 : (n = o.charCodeAt(i)) < 55296 || n > 56319 || i + 1 === s || (a = o.charCodeAt(i + 1)) < 56320 || a > 57343 ? e ? o.charAt(i) : n : e ? o.slice(i, i + 2) : a - 56320 + (n - 55296 << 10) + 65536
            }
        },
        stringMultibyte = {
            codeAt: createMethod$2(!1),
            charAt: createMethod$2(!0)
        },
        charAt = stringMultibyte.charAt,
        advanceStringIndex = function(e, t, r) {
            return t + (r ? charAt(e, t).length : 1)
        },
        toObject = function(e) {
            return Object(requireObjectCoercible(e))
        },
        floor$1 = Math.floor,
        replace = "".replace,
        SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g,
        getSubstitution = function(e, t, r, n, a, o) {
            var i = r + e.length,
                s = n.length,
                l = SUBSTITUTION_SYMBOLS_NO_NAMED;
            return void 0 !== a && (a = toObject(a), l = SUBSTITUTION_SYMBOLS), replace.call(o, l, (function(o, l) {
                var u;
                switch (l.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return t.slice(0, r);
                    case "'":
                        return t.slice(i);
                    case "<":
                        u = a[l.slice(1, -1)];
                        break;
                    default:
                        var c = +l;
                        if (0 === c) return o;
                        if (c > s) {
                            var d = floor$1(c / 10);
                            return 0 === d ? o : d <= s ? void 0 === n[d - 1] ? l.charAt(1) : n[d - 1] + l.charAt(1) : o
                        }
                        u = n[c - 1]
                }
                return void 0 === u ? "" : u
            }))
        },
        regexpExecAbstract = function(e, t) {
            var r = e.exec;
            if ("function" == typeof r) {
                var n = r.call(e, t);
                if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
                return n
            }
            if ("RegExp" !== classofRaw(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return regexpExec.call(e, t)
        },
        max$1 = Math.max,
        min$2 = Math.min,
        maybeToString = function(e) {
            return void 0 === e ? e : String(e)
        };
    fixRegexpWellKnownSymbolLogic("replace", 2, (function(e, t, r, n) {
        var a = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            o = n.REPLACE_KEEPS_$0,
            i = a ? "$" : "$0";
        return [function(r, n) {
            var a = requireObjectCoercible(this),
                o = null == r ? void 0 : r[e];
            return void 0 !== o ? o.call(r, a, n) : t.call(String(a), r, n)
        }, function(e, n) {
            if (!a && o || "string" == typeof n && -1 === n.indexOf(i)) {
                var s = r(t, e, this, n);
                if (s.done) return s.value
            }
            var l = anObject(e),
                u = String(this),
                c = "function" == typeof n;
            c || (n = String(n));
            var d = l.global;
            if (d) {
                var p = l.unicode;
                l.lastIndex = 0
            }
            for (var h = [];;) {
                var m = regexpExecAbstract(l, u);
                if (null === m) break;
                if (h.push(m), !d) break;
                "" === String(m[0]) && (l.lastIndex = advanceStringIndex(u, toLength(l.lastIndex), p))
            }
            for (var f = "", y = 0, v = 0; v < h.length; v++) {
                m = h[v];
                for (var g = String(m[0]), b = max$1(min$2(toInteger(m.index), u.length), 0), _ = [], E = 1; E < m.length; E++) _.push(maybeToString(m[E]));
                var T = m.groups;
                if (c) {
                    var S = [g].concat(_, b, u);
                    void 0 !== T && S.push(T);
                    var w = String(n.apply(void 0, S))
                } else w = getSubstitution(g, u, b, _, T, n);
                b >= y && (f += u.slice(y, b) + w, y = b + g.length)
            }
            return f + u.slice(y)
        }]
    }));
    var isArray = Array.isArray || function(e) {
            return "Array" == classofRaw(e)
        },
        nativeReverse = [].reverse,
        test = [1, 2];
    _export({
        target: "Array",
        proto: !0,
        forced: String(test) === String(test.reverse())
    }, {
        reverse: function() {
            return isArray(this) && (this.length = this.length), nativeReverse.call(this)
        }
    });
    var mimeMap = {
            "3gpp": "3gp",
            "smptett+xml": "tt",
            "ttaf+xml": "dfxp",
            "ttml+xml": "ttml",
            "x-flv": "flv",
            "x-mp4-fragmented": "mp4",
            "x-ms-sami": "sami",
            "x-ms-wmv": "wmv",
            mpegurl: "m3u8",
            "x-mpegurl": "m3u8",
            "vnd.apple.mpegurl": "m3u8",
            "dash+xml": "mpd",
            "f4m+xml": "f4m",
            "hds+xml": "f4m",
            "vnd.ms-sstr+xml": "ism",
            quicktime: "mov",
            mp2t: "ts",
            "x-wav": "wav"
        },
        VideoEncodingFormat = ["avc1", "avc2", "avc3", "avc4", "vp9", "vp8", "hev1", "hev2", "h263", "h264", "mp4v", "hvc1", "av01", "theora"],
        AudioEncodingFormat = ["mp4a", "opus", "vorbis", "mp3", "aac", "ac-3", "ec-3", "eac3", "dtsc", "dtse", "dtsh", "dtsl"];

    function regexSearch(e, t, r) {
        var n = t.match(e);
        if (!n) throw new Error("matched regex search: " + e);
        return n[r]
    }

    function parseQSL(e) {
        return e.split("&").reduce((e, t) => {
            var [r, n] = t.split("=");
            return e[r] = n, e
        }, {})
    }

    function parseFunction(e) {
        var t = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gim.exec(e.replace(/\n/g, " "));
        return t ? new Function(t[1].split(","), t[2]) : null
    }

    function getText(e) {
        var t;
        return e ? "string" == typeof e ? e : (null == e ? void 0 : e.simpleText) || (null == e || null == (t = e.runs) ? void 0 : t.map(e => e.text).join("")) : ""
    }

    function htmlSearchMeta(e, t) {
        if (t) {
            var r = Array.isArray(e) ? e : [e];
            for (var n of r) {
                var a = new RegExp("<meta(?=[^>]+(?:itemprop|name|property|id|http-equiv)=([\"\\']?)" + n + "\\1)[^>]+?content=([\"'])(.*?)\\2", "is");
                try {
                    return regexSearch(a, t, 3)
                } catch (e) {
                    continue
                }
            }
            return ""
        }
    }

    function mimetype2ext(e) {
        if (!e) return "";
        var t = {
            "audio/mp4": "m4a",
            "audio/mpeg": "mp3"
        };
        if (e in t) return t[e];
        var r, n = e.split("/");
        try {
            r = n[1].split(";")[0].trim().toLowerCase()
        } catch (e) {}
        return mimeMap[r] || r
    }

    function parseCodecs(e) {
        if (!e) return {};
        var t, r, n = helpTrim(e.trim()).split(",").map(e => e.trim());
        for (var a of n) {
            var o = a.split(".")[0];
            if (VideoEncodingFormat.includes(o)) t || (t = a);
            else {
                if (!AudioEncodingFormat.includes(o)) throw new Error("WARNING: Unkonwn codec " + a);
                r || (r = a)
            }
        }
        return t || r ? {
            vcodec: t || "",
            acodec: r || ""
        } : 2 === n.length ? {
            vcodec: n[0],
            acodec: n[1]
        } : {}
    }

    function helpTrim(e, t, r) {
        return e.replace(t ? "left" == r ? new RegExp("^\\" + t + "+", "g") : "right" == r ? new RegExp("\\" + t + "+$", "g") : new RegExp("^\\" + t + "+|\\" + t + "+$", "g") : /^\s+|\s+$/g, "")
    }

    function getQueryVariables(e) {
        for (var t = e.split("?", 2)[1].split("&"), r = {}, n = 0; n < t.length; n++) {
            var a = t[n].split("=");
            r[a[0]] = a[1]
        }
        return r
    }
    class Cipher {
        constructor(e) {
            this.transformPlan = this.getTransformPlan(e);
            var t = /^\w+\W/,
                r = this.transformPlan[0].match(t);
            if (!r) throw new Error("constructor: could not find match for " + t);
            var n = r[0].substr(0, r[0].length - 1);
            if (!n) throw new Error("constructor: could not find keyVar");
            this.transformMap = this.getTransformMap(e, n), this.jsFuncPatterns = [/\w+\.(\w+)\(\w,(\d+)\)/, /\w+\[(\"\w+\")\]\(\w,(\d+)\)/]
        }
        getTransformMap(e, t) {
            var r = this.getTransformObject(e, t),
                n = {};
            for (var a of r) {
                var [o, i] = a.split(":", 2), s = parseFunction(i);
                n[o] = s
            }
            return n
        }
        getTransformObject(e, t) {
            var r, n = "var " + t + "={(.*?)};";
            try {
                r = new RegExp(n, "s")
            } catch (e) {
                r = new RegExp("var " + t + "={([\\s\\S]*?)};")
            }
            var a = e.match(r);
            if (!a) throw new Error("getTransformObject: could not find match for " + r);
            return a[1].replace(/\n/g, " ").split(", ")
        }
        getSignature(e) {
            var t = e.split("");
            for (var r of this.transformPlan) {
                var {
                    name: n,
                    arg: a
                } = this.parseFunction(r);
                this.transformMap[n](t, a)
            }
            return t.join("")
        }
        getTransformPlan(e) {
            var t = this.getInitialFunctionName(e);
            return regexSearch(new RegExp(t + '=function\\(\\w\\){[a-z=\\.\\(\\"\\)]*;(.*);(?:.+)}'), e, 1).split(";")
        }
        getInitialFunctionName(e) {
            for (var t of [/\b[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/, /\b[a-zA-Z0-9]+\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/, /(?:\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2})\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\)/, /([a-zA-Z0-9$]+)\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\)/, /(["\'])signature\1\s*,\s*([a-zA-Z0-9$]+)\(/, /\.sig\|\|([a-zA-Z0-9$]+)\(/, /yt\.akamaized\.net\/\)\s*\|\|\s*.*?\s*[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*(?:encodeURIComponent\s*\()?\s*([a-zA-Z0-9$]+)\(/, /\b[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*([a-zA-Z0-9$]+)\(/, /\b[a-zA-Z0-9]+\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*([a-zA-Z0-9$]+)\(/, /\bc\s*&&\s*a\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/, /\bc\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/, /\bc\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/]) {
                var r = e.match(t);
                if (r) return r[1]
            }
            throw new Error("get_initial_function_name: could not find match for multiple")
        }
        mapFunction(e) {
            var t = [
                [/{\w\.reverse\(\)}/, this.reverse],
                [/{\w\.splice\(0,\w\)}/, this.splice],
                [/{var\s\w=\w\[0\];\w\[0\]=\w\[\w\%\w.length\];\w\[\w\]=\w}/, this.swap],
                [/{var\s\w=\w\[0\];\w\[0\]=\w\[\w\%\w.length\];\w\[\w\%\w.length\]=\w}/, this.swap]
            ];
            for (var [r, n] of t)
                if (e.match(r)) return n;
            throw new Error("map_functions: could not find match for multiple")
        }
        reverse(e) {
            return e.reverse()
        }
        splice(e, t) {
            return e.splice(0, t)
        }
        swap(e, t) {
            var r = e[0];
            return e[0] = e[t % e.length], e[t] = r, e
        }
        parseFunction(e) {
            for (var t of this.jsFuncPatterns) {
                var r = e.match(t);
                if (r) {
                    var [n, a, o] = r;
                    return {
                        name: a,
                        arg: o
                    }
                }
            }
            throw new Error("parse_function: could not find match for js_func_patterns")
        }
    }
    class BaseError extends Error {
        constructor(e) {
            super(e), this.name = new.target.name, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, new.target), "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(this, new.target.prototype) : this.__proto__ = new.target.prototype
        }
    }
    class RegexMismatchError extends BaseError {}
    class NotRetryError extends BaseError {
        constructor(e) {
            super("__notRetry@" + e)
        }
    }
    class NetWorkError extends BaseError {}
    class BackupExtractError extends BaseError {}

    function parseForObject(e, t, r) {
        var n = e.match(t);
        if (!n) throw new Error("No matches for regex " + t);
        var a = parseForObjectFromStartpoint(e, n.index + n[0].length + !!r);
        try {
            return JSON.parse(a)
        } catch (e) {
            throw new Error("could not parse object.")
        }
    }

    function parseForObjectFromStartpoint(e, t) {
        var r = e.substr(t);
        if ("{" !== r[0]) throw new Error("Invalid start point");
        for (var n = ["{"], a = 1, o = {
                "{": "}",
                "[": "]",
                '"': '"'
            }; a < r.length && 0 !== n.length;) {
            var i = r[a],
                s = n[n.length - 1];
            if (i !== o[s]) {
                if ('"' === s) {
                    if ("\\" === i) {
                        a += 2;
                        continue
                    }
                } else i in o && n.push(i);
                a += 1
            } else n.pop(), a += 1
        }
        return r.substr(0, a)
    }

    function videoId(e) {
        return regexSearch(/(?:v=|\/)([0-9A-Za-z_-]{11}).*/, e, 1)
    }

    function playabilityStatus(e) {
        var t = initialPlayerResponse(e),
            r = (null == t ? void 0 : t.playabilityStatus) || {};
        if ("status" in r) {
            if ("reason" in r) return {
                status: r.status,
                info: [r.reason]
            };
            if ("message" in r) return {
                status: r.status,
                info: r.message
            }
        }
        return {
            status: null,
            info: [],
            playerResponse: t
        }
    }

    function initialPlayerResponse(e) {
        for (var t of [/window\[['\"]ytInitialPlayerResponse['\"]]\s*=\s*/, /ytInitialPlayerResponse\s*=\s*/]) try {
            return parseForObject(e, t)
        } catch (e) {
            continue
        }
        throw new RegexMismatchError("initial_player_response: could not find match for initial_player_response_pattern")
    }

    function isAgeRestricted(e) {
        try {
            regexSearch(/og:restrictions:age/, e, 0)
        } catch (e) {
            return !1
        }
        return !0
    }

    function videoInfoUrlAgeRestricted(e, t) {
        return videoInfoUrl({
            video_id: e,
            eurl: "https://youtube.googleapis.com/v/" + e,
            c: "TVHTML5",
            cver: "7.20190319",
            html5: 1
        })
    }

    function videoInfoUrl(e) {
        return "https://www.youtube.com/get_video_info?" + Object.keys(e).map(t => t + "=" + encodeURIComponent(e[t])).join("&")
    }

    function jsURL(e) {
        var t = "";
        try {
            t = getYtplayerConfig(e).assets.js
        } catch (r) {
            t = getYtplayerJS(e)
        }
        return "https://youtube.com" + t
    }

    function initialData(e) {
        for (var t of [/window\[['\"]ytInitialData['\"]]\s*=\s*/, /ytInitialData\s*=\s*/]) try {
            return parseForObject(e, t)
        } catch (e) {
            continue
        }
        throw new Error("initial_data: could not find match for initial_data_pattern")
    }

    function getYtplayerConfig(e) {
        for (var t of [/ytplayer\.config\s*=\s*/, /ytInitialPlayerResponse\s*=\s*/]) try {
            return parseForObject(e, t)
        } catch (e) {
            continue
        }
        for (var r of [/yt\.setConfig\(.*['\"]PLAYER_CONFIG['\"]:\s*/]) try {
            return parseForObject(e, r)
        } catch (e) {
            continue
        }
        throw new Error("get_ytplayer_config: could not find match for config_patterns, setconfig_patterns")
    }

    function getYtplayerJS(e) {
        for (var t of [/(\/s\/player\/[\w\d]+\/[\w\d_/.]+\/base\.js)/]) {
            var r = e.match(t);
            if (r) return r[1]
        }
        throw new Error("get_ytplayer_js: could not find match for js_url_patterns")
    }
    var listType = ["compactVideoRenderer", "gridVideoRenderer"];

    function parseRecommend(e) {
        var t, r, n, a, o, i, s, l, u, c, d = (null == e || null == (t = e.contents) || null == (r = t.singleColumnWatchNextResults) || null == (n = r.results) || null == (a = n.results) || null == (o = a.contents[1]) || null == (i = o.shelfRenderer) || null == (s = i.content) || null == (l = s.horizontalListRenderer) ? void 0 : l.items) || [],
            p = listFindVideo(d);
        return 0 === p.length && (p = listFindVideo(d = (null == (u = d.find(e => "itemSectionRenderer" in e)) || null == (c = u.itemSectionRenderer) ? void 0 : c.contents) || [])), p
    }

    function listFindVideo(e) {
        return e.reduce((e, t) => {
            var r = Object.keys(t);
            if (listType.includes(r[0])) {
                var n, a = t[r[0]];
                e.push({
                    type: r[0] || "",
                    videoId: null == a ? void 0 : a.videoId,
                    title: getText(null == a ? void 0 : a.title),
                    thumbnails: null == a || null == (n = a.thumbnail) ? void 0 : n.thumbnails,
                    author: getText(null == a ? void 0 : a.shortBylineText),
                    publishedTime: getText(null == a ? void 0 : a.publishedTimeText),
                    viewCountText: getText(null == a ? void 0 : a.viewCountText),
                    shortViewCountText: getText(null == a ? void 0 : a.shortViewCountText),
                    lengthText: getText(null == a ? void 0 : a.lengthText)
                })
            }
            return e
        }, [])
    }
    var aFunction$1 = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        arrayMethodIsStrict = function(e, t) {
            var r = [][e];
            return !!r && fails((function() {
                r.call(null, t || function() {
                    throw 1
                }, 1)
            }))
        },
        test$1 = [],
        nativeSort = test$1.sort,
        FAILS_ON_UNDEFINED = fails((function() {
            test$1.sort(void 0)
        })),
        FAILS_ON_NULL = fails((function() {
            test$1.sort(null)
        })),
        STRICT_METHOD = arrayMethodIsStrict("sort"),
        FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;
    _export({
        target: "Array",
        proto: !0,
        forced: FORCED
    }, {
        sort: function(e) {
            return void 0 === e ? nativeSort.call(toObject(this)) : nativeSort.call(toObject(this), aFunction$1(e))
        }
    });
    var objectKeys = Object.keys || function(e) {
            return objectKeysInternal(e, enumBugKeys)
        },
        propertyIsEnumerable = objectPropertyIsEnumerable.f,
        createMethod$3 = function(e) {
            return function(t) {
                for (var r, n = toIndexedObject(t), a = objectKeys(n), o = a.length, i = 0, s = []; o > i;) r = a[i++], descriptors && !propertyIsEnumerable.call(n, r) || s.push(e ? [r, n[r]] : n[r]);
                return s
            }
        },
        objectToArray = {
            entries: createMethod$3(!0),
            values: createMethod$3(!1)
        },
        $entries = objectToArray.entries;

    function asyncPool(e, t, r) {
        var n = 0,
            a = [],
            o = [],
            i = function() {
                if (n === t.length) return Promise.resolve();
                var s = t[n++],
                    l = Promise.resolve().then(() => r(s, t));
                a.push(l);
                var u = Promise.resolve();
                if (e <= t.length) {
                    var c = l.then(() => o.splice(o.indexOf(c), 1));
                    o.push(c), o.length >= e && (u = Promise.race(o))
                }
                return u.then(() => i())
            };
        return i().then(() => Promise.all(a))
    }

    function getColor(e) {
        var t = [(16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e, (4278190080 & e) >>> 24],
            r = t.every((function(e) {
                return e == (255 & e)
            }));
        return t[3] = (t[3] / 255).toFixed(3), r ? t : ""
    }

    function matchGlobal(e, t) {
        for (var r = !0, n = []; r;)
            if (r = e.test(t)) {
                var {
                    lastIndex: a
                } = e, o = parseForObjectFromStartpoint(t, a + 1);
                n.push(o)
            } return n
    }
    _export({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return $entries(e)
        }
    });
    var ytcfgRegGlobal = /ytcfg.set\(.*?\)[;<]/g,
        globalInitialDataRegex = /initialData\.push\s*/g,
        MusicPagePosition;

    function parseYtcfg(content, options) {
        var initialData = [],
            ytcfg = {
                d: function() {
                    return ytcfg.data_ || (ytcfg.data_ = {})
                },
                get: function(e, t) {
                    return e in ytcfg.d() ? ytcfg.d()[e] : t
                },
                set: function() {
                    var e = arguments;
                    if (e.length > 1) ytcfg.d()[e[0]] = e[1];
                    else
                        for (var t in e[0]) ytcfg.d()[t] = e[0][t]
                }
            },
            initialDataPushStringList = [];
        if (!(null != options && options.isPlaylist || null != options && options.isYouTube)) {
            if (initialDataPushStringList = matchGlobal(globalInitialDataRegex, content), !initialDataPushStringList || 0 === initialDataPushStringList.length) throw new Error("could not find initialDataPushStringList");
            initialDataPushStringList = initialDataPushStringList.map(e => "initialData.push(" + e + ")")
        }
        var ytcList = content.match(ytcfgRegGlobal);
        if (!ytcList) throw new Error("could not find ytcList");
        for (var initialDataString of [...initialDataPushStringList, ...ytcList]) {
            var statements = initialDataString;
            "<" === statements[statements.length - 1] && (statements = statements.substr(0, statements.length - 1));
            try {
                eval(statements)
            } catch (e) {}
        }
        for (var p of initialData) p.data = JSON.parse(p.data);
        return {
            ytcfg: ytcfg,
            initialData: initialData
        }
    }

    function parseSectionData(e) {
        var t, r, n, a, o, i, s, l, u, c = Object.keys(e)[0];
        switch (c) {
            case "musicImmersiveCarouselShelfRenderer":
            case "musicCarouselShelfRenderer":
            case "gridRenderer":
            case "shelfRenderer":
                l = (s = e[c]).header ? s.header ? getHeaderText(s.header) : "" : s.title ? getText$1(s.title) : "", u = getContent(s.contents || s.items || (null == (t = s) || null == (r = t.content) || null == (n = r.horizontalListRenderer) ? void 0 : n.items) || (null == (a = s) || null == (o = a.content) || null == (i = o.expandedShelfContentsRenderer) ? void 0 : i.items) || []);
                break;
            default:
                return !1
        }
        return {
            title: l,
            content: u
        }
    }

    function getContent(e) {
        return 0 === e.length ? [] : e.map(e => {
            var t, r, n, a, o, i, s, l, u, c, d, p, h = Object.keys(e)[0],
                m = e[h];
            switch (h) {
                case "playlistRenderer":
                    return {
                        title: (null == m || null == (t = m.title) ? void 0 : t.simpleText) || "", thumbnail: m.thumbnails ? m.thumbnails[0].thumbnails : [], subtitle: m.videoCount || getText$1(m.videoCountText), url: "https://www.youtube.com/watch?list=" + m.playlistId
                    };
                case "gridPlaylistRenderer":
                    return {
                        title: getText$1(m.title), subtitle: getText$1(m.videoCountText), thumbnail: (null == m || null == (r = m.thumbnail) ? void 0 : r.thumbnails) || [], url: "https://www.youtube.com/watch?list=" + m.playlistId
                    };
                case "gridRadioRenderer":
                    return {
                        title: (null == m || null == (n = m.title) ? void 0 : n.simpleText) || "", subtitle: m.videoCount || getText$1(m.videoCountText), thumbnail: (null == m || null == (a = m.thumbnail) ? void 0 : a.thumbnails) || [], url: "https://www.youtube.com/watch?list=" + m.playlistId
                    };
                case "compactStationRenderer":
                    var f = m.navigationEndpoint.watchEndpoint.videoId,
                        y = m.navigationEndpoint.watchEndpoint.playlistId,
                        v = "https://www.youtube.com/watch?";
                    return y && (v += "list=" + y + "&"), f && (v += "v=" + f), {
                        title: (null == m || null == (o = m.title) ? void 0 : o.simpleText) || "",
                        subtitle: getText$1(m.videoCountText),
                        thumbnail: (null == m || null == (i = m.thumbnail) ? void 0 : i.thumbnails) || [],
                        url: v
                    };
                case "musicNavigationButtonRenderer":
                    return {
                        buttonText: getText$1(m.buttonText), color: getColor(m.solid.leftStripeColor), clickCommand: m.clickCommand
                    };
                case "musicTwoRowItemRenderer":
                    return {
                        title: getText$1(m.title), subtitle: getText$1(m.subtitle), thumbnail: getThumbnail(m.thumbnailRenderer), url: "https://music.youtube.com" + parseNavigationEndpoint(m.navigationEndpoint)
                    };
                case "musicResponsiveListItemRenderer":
                    var g;
                    switch (null == m || null == (s = m.customIndexColumn) || null == (l = s.musicCustomIndexColumnRenderer) || null == (u = l.icon) ? void 0 : u.iconType) {
                        case "ARROW_CHART_NEUTRAL":
                            g = 0;
                            break;
                        case "ARROW_DROP_UP":
                            g = 1;
                            break;
                        case "ARROW_DROP_DOWN":
                            g = -1;
                            break;
                        default:
                            g = 0
                    }
                    var b, _ = !1;
                    null != m && null != (c = m.playlistItemData) && c.videoId && (_ = "/watch?v=" + (null == m || null == (b = m.playlistItemData) ? void 0 : b.videoId));
                    var E = parseNavigationEndpoint(m.navigationEndpoint) || _;
                    return !!E && {
                        isMusician: !0,
                        rank: getText$1(null == m || null == (d = m.customIndexColumn) || null == (p = d.musicCustomIndexColumnRenderer) ? void 0 : p.text),
                        trend: g,
                        name: getText$1(null == m ? void 0 : m.flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text),
                        subtitle: getText$1(null == m ? void 0 : m.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text),
                        thumbnail: getThumbnail(m.thumbnail),
                        url: "https://music.youtube.com" + E
                    };
                default:
                    return !1
            }
        }).filter(e => e)
    }

    function getHeaderText(e) {
        var t, r;
        return getText$1((null == (t = e.musicCarouselShelfBasicHeaderRenderer) ? void 0 : t.title) || (null == (r = e.gridHeaderRenderer) ? void 0 : r.title))
    }

    function getText$1(e) {
        return e && Array.isArray(e.runs) ? e.runs.map(e => e.text).join("") : ""
    }

    function getThumbnail(e) {
        var t, r;
        return null == e || null == (t = e.musicThumbnailRenderer) || null == (r = t.thumbnail) ? void 0 : r.thumbnails
    }

    function parseNavigationEndpoint(e) {
        var t, r, n, a, o, i, s, l, u, c, d, p;
        switch ((null == e || null == (t = e.browseEndpoint) || null == (r = t.browseEndpointContextSupportedConfigs) || null == (n = r.browseEndpointContextMusicConfig) ? void 0 : n.pageType) || (null == e || null == (a = e.watchEndpoint) || null == (o = a.watchEndpointMusicSupportedConfigs) || null == (i = o.watchEndpointMusicConfig) ? void 0 : i.musicVideoType)) {
            case "MUSIC_PAGE_TYPE_ARTIST":
                return (p = null == e || null == (s = e.browseEndpoint) ? void 0 : s.browseId) ? "/channel/" + p : "/";
            case "MUSIC_PAGE_TYPE_PLAYLIST":
                return (p = null == e || null == (l = e.browseEndpoint) ? void 0 : l.browseId) ? p.startsWith("VL") ? "/playlist?list=" + p.substr(2) : "" : "/";
            case "MUSIC_PAGE_TYPE_ALBUM":
                return (p = null == e || null == (u = e.browseEndpoint) ? void 0 : u.browseId) ? "/channel/" + p : "/";
            case "MUSIC_VIDEO_TYPE_UGC":
            case "MUSIC_VIDEO_TYPE_OMV":
                var h = null == e || null == (c = e.watchEndpoint) ? void 0 : c.videoId,
                    m = null == e || null == (d = e.watchEndpoint) ? void 0 : d.playlistId,
                    f = "/watch?";
                return m && (f += "list=" + m + "&"), h && (f += "v=" + h), f;
            default:
                return ""
        }
    }! function(e) {
        e.HOME_PAGE = "homepage", e.NEW_RELEASE = "new_release", e.NEW_ALBUMS = "new_albums", e.NEW_VIDEOS = "new_videos", e.CHARTS = "charts", e.MOODS_AND_GENRES = "moods_and_genres", e.SPECIAL_PARSE_PLAYLIST = "special_parse_playlist", e.SPECIAL_PARSE_CHANNEL_PLAYLIST = "special_parse_channel_playlist"
    }(MusicPagePosition || (MusicPagePosition = {}));
    var host = "https://music.youtube.com",
        positionMap = {
            homepage: host + "/",
            new_release: host + "/new_releases",
            new_albums: host + "/new_releases/albums",
            new_videos: host + "/new_releases/videos",
            charts: host + "/charts",
            moods_and_genres: host + "/moods_and_genres",
            special_parse_playlist: ""
        };
    class Music {
        constructor() {
            this.url = "", this.initialData = [], this.commonUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1"
        }
        get(e, t) {
            var r = this;
            return _asyncToGenerator((function*() {
                var n, a;
                return r.position = e, r.url = t || positionMap[e], yield r.fetchPage(), e === MusicPagePosition.CHARTS ? n = yield r.getCharts(): e === MusicPagePosition.MOODS_AND_GENRES ? (a = r.getBasicInfo(), n = yield r.getMoodsGenres(a)) : e === MusicPagePosition.SPECIAL_PARSE_PLAYLIST ? n = yield r.getPlaylist(): e === MusicPagePosition.SPECIAL_PARSE_CHANNEL_PLAYLIST ? n = yield r.getChannelPlaylist(): (n = r.getBasicInfo(), r.position === MusicPagePosition.HOME_PAGE && (n = [...n].sort(e => {
                    var t;
                    return null != (t = e.content[0]) && t.isMusician ? 1 : -1
                }))), n
            }))()
        }
        getPositions(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                t.position = MusicPagePosition.HOME_PAGE, t.url = positionMap[MusicPagePosition.HOME_PAGE], yield t.fetchPage();
                var {
                    body: r,
                    url: n
                } = t.buildRequest(), a = r, o = [{
                    type: MusicPagePosition.HOME_PAGE,
                    data: [...t.getBasicInfo()].sort(e => {
                        var t;
                        return null != (t = e.content[0]) && t.isMusician ? 1 : -1
                    })
                }];
                for (var i of e) {
                    i === MusicPagePosition.NEW_RELEASE ? a = Object.assign({}, r, {
                        browseId: "FEmusic_new_releases"
                    }) : i === MusicPagePosition.NEW_ALBUMS ? a = Object.assign({}, r, {
                        browseId: "FEmusic_new_releases_albums"
                    }) : i === MusicPagePosition.NEW_VIDEOS && (a = Object.assign({}, r, {
                        browseId: "FEmusic_new_releases_videos"
                    }));
                    var s = yield get$1(n, {
                        method: "POST",
                        extraHeaders: t.getHeader(i, "https://music.youtube.com"),
                        body: a
                    }), l = [];
                    try {
                        l = JSON.parse(s.result).contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.map(e => parseSectionData(e)).filter(e => e)
                    } catch (e) {}
                    o.push({
                        type: i,
                        data: l
                    })
                }
                return o
            }))()
        }
        buildRequest() {
            var e = this.buildSkeletonRequest(),
                t = JSON.parse(this.H("INITIAL_ENDPOINT")),
                r = "https://music.youtube.com/youtubei/v1/browse?alt=json&key=" + this.H("INNERTUBE_API_KEY");
            return {
                body: Object.assign({
                    context: {
                        client: Object.assign({}, e.context.client, {
                            utcOffsetMinutes: String(-(new Date).getTimezoneOffset()),
                            locationInfo: {
                                locationPermissionAuthorizationStatus: "LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED"
                            },
                            musicAppInfo: {
                                musicActivityMasterSwitch: "MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE",
                                musicLocationMasterSwitch: "MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE",
                                pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED"
                            }
                        }),
                        capabilities: {},
                        request: {
                            internalExperimentFlags: []
                        },
                        activePlayers: {},
                        user: {
                            enableSafetyMode: !1
                        }
                    }
                }, t.browseEndpoint),
                url: r
            }
        }
        getChartsWithCountry(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                return t.position = MusicPagePosition.CHARTS, t.url = positionMap[MusicPagePosition.CHARTS], yield t.fetchPage(), yield t.getCharts(e)
            }))()
        }
        fetchPage() {
            var e = this;
            return _asyncToGenerator((function*() {
                var t = yield get$1(e.url, {
                    method: "GET",
                    extraHeaders: {
                        "User-Agent": e.commonUserAgent
                    }
                });
                if (!t.success) throw new Error(e.position + " request failure");
                var {
                    result: r
                } = t, n = e.position === MusicPagePosition.SPECIAL_PARSE_PLAYLIST, {
                    ytcfg: a,
                    initialData: o
                } = parseYtcfg(r, {
                    isPlaylist: n
                });
                if (0 === o.length && !n) throw new Error("could find initialData");
                e.ytcfg = a, e.initialData = o
            }))()
        }
        getChannelPlaylist() {
            var e;
            try {
                e = this.initialData.find(e => "/browse" === e.path).data.frameworkUpdates.entityBatchUpdate.mutations || []
            } catch (e) {
                throw new Error("getChannelPlaylist: could find sectionList")
            }
            if (0 === e.length) throw new Error("getChannelPlaylist: could find sectionList");
            return e.reduce((e, t) => {
                var {
                    payload: r
                } = t;
                if ("musicTrack" in r) {
                    var {
                        title: n,
                        thumbnailDetails: a,
                        artistNames: o,
                        videoId: i,
                        lengthMs: s
                    } = r.musicTrack;
                    e.contents = e.contents.concat({
                        videoId: i,
                        thumbnails: null == a ? void 0 : a.thumbnails,
                        title: n,
                        author: o,
                        lengthText: Math.floor(s / 60 / 1e3) + ":" + s % 60
                    })
                } else if ("musicAlbumRelease" in r) {
                    var {
                        title: l,
                        thumbnailDetails: u,
                        audioPlaylistId: c
                    } = r.musicAlbumRelease;
                    e.title = l, e.thumbnail = null == u ? void 0 : u.thumbnails, e.id = c
                }
                return e
            }, {
                id: "",
                title: "",
                description: "",
                thumbnail: [],
                contents: []
            })
        }
        getBasicInfo() {
            var e;
            try {
                e = this.initialData.find(e => "/browse" === e.path).data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents || []
            } catch (e) {
                throw new Error("could find sectionList")
            }
            if (0 === e.length) throw new Error("could find sectionList");
            return e.map(e => parseSectionData(e)).filter(e => e)
        }
        getCharts(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                var r = t.getOptionsMap(t.initialData[1].data),
                    n = r.find(t => {
                        var {
                            code: r
                        } = t;
                        return r.toUpperCase() === (null == e ? void 0 : e.toUpperCase())
                    });
                e && (r = [{
                    name: "Global",
                    code: "ZZ"
                }, {
                    name: e,
                    code: (null == n ? void 0 : n.code) || "US"
                }]);
                var a = t.buildSkeletonRequest(),
                    o = "https://music.youtube.com/youtubei/v1/browse?alt=json&key=" + t.H("INNERTUBE_API_KEY"),
                    i = JSON.parse(t.H("INITIAL_ENDPOINT")),
                    s = e => Object.assign({
                        context: {
                            client: Object.assign({}, a.context.client, {
                                utcOffsetMinutes: String(-(new Date).getTimezoneOffset()),
                                locationInfo: {
                                    locationPermissionAuthorizationStatus: "LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED"
                                },
                                musicAppInfo: {
                                    musicActivityMasterSwitch: "MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE",
                                    musicLocationMasterSwitch: "MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE",
                                    pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED"
                                }
                            }),
                            capabilities: {},
                            request: {
                                internalExperimentFlags: []
                            },
                            activePlayers: {},
                            user: {
                                enableSafetyMode: !1
                            }
                        }
                    }, i.browseEndpoint, {
                        formData: {
                            selectedValues: [e]
                        }
                    });
                return (e ? yield asyncPool(1, r, e => {
                    var {
                        code: r,
                        name: n
                    } = e;
                    return get$1(o, {
                        method: "POST",
                        extraHeaders: t.getHeader(MusicPagePosition.CHARTS),
                        body: s(r)
                    }).then(e => Object.assign({}, e, {
                        name: n
                    }))
                }): yield asyncPool(5, r, e => {
                    var {
                        code: r,
                        name: n
                    } = e;
                    return get$1(o, {
                        method: "POST",
                        extraHeaders: t.getHeader(MusicPagePosition.CHARTS),
                        body: s(r)
                    }).then(e => Object.assign({}, e, {
                        name: n
                    }))
                })).reduce((e, t) => {
                    var {
                        name: r,
                        result: n
                    } = t;
                    return e[r] = JSON.parse(n).contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.map(e => parseSectionData(e)).filter(e => e), e
                }, {})
            }))()
        }
        getMoodsGenres(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                var r = t.buildSkeletonRequest(),
                    n = "https://music.youtube.com/youtubei/v1/browse?alt=json&key=" + t.H("INNERTUBE_API_KEY"),
                    a = [];
                for (var o of e) {
                    var i = yield asyncPool(2, o.content, e => get$1(n, {
                        method: "POST",
                        extraHeaders: t.getHeader(MusicPagePosition.MOODS_AND_GENRES),
                        body: Object.assign({
                            context: {
                                client: Object.assign({}, r.context.client, {
                                    utcOffsetMinutes: String(-(new Date).getTimezoneOffset()),
                                    locationInfo: {
                                        locationPermissionAuthorizationStatus: "LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED"
                                    },
                                    musicAppInfo: {
                                        musicActivityMasterSwitch: "MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE",
                                        musicLocationMasterSwitch: "MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE",
                                        pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED"
                                    }
                                }),
                                capabilities: {},
                                request: {
                                    internalExperimentFlags: []
                                },
                                activePlayers: {},
                                user: {
                                    enableSafetyMode: !1
                                }
                            }
                        }, e.clickCommand.browseEndpoint)
                    }).then(t => {
                        var r, {
                            result: n
                        } = t;
                        try {
                            r = JSON.parse(n).contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.map(e => parseSectionData(e)).filter(e => e)
                        } catch (e) {}
                        return {
                            content: r,
                            buttonText: e.buttonText,
                            color: e.color
                        }
                    }));
                    a.push(Object.assign({}, o, {
                        content: i
                    }))
                }
                return a
            }))()
        }
        getPlaylist() {
            var e = this;
            return _asyncToGenerator((function*() {
                var t = e.buildSkeletonRequest(),
                    r = "https://music.youtube.com/youtubei/v1/next?alt=json&key=" + e.H("INNERTUBE_API_KEY"),
                    n = JSON.parse(e.H("INITIAL_ENDPOINT")),
                    a = yield get$1(r, {
                        method: "POST",
                        extraHeaders: e.getHeader(MusicPagePosition.SPECIAL_PARSE_PLAYLIST),
                        body: Object.assign({
                            context: {
                                client: Object.assign({}, t.context.client, {
                                    utcOffsetMinutes: 480,
                                    locationInfo: {
                                        locationPermissionAuthorizationStatus: "LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED"
                                    },
                                    musicAppInfo: {
                                        musicActivityMasterSwitch: "MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE",
                                        musicLocationMasterSwitch: "MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE",
                                        pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_UNKNOWN"
                                    }
                                }),
                                capabilities: {},
                                request: {
                                    internalExperimentFlags: []
                                },
                                activePlayers: {},
                                user: {
                                    enableSafetyMode: !1
                                }
                            },
                            enablePersistentPlaylistPanel: !0,
                            tunerSettingValue: "AUTOMIX_SETTING_NORMAL",
                            isAudioOnly: !0
                        }, n.watchEndpoint || n.watchPlaylistEndpoint)
                    }), {
                        result: o
                    } = a;
                return JSON.parse(o).contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents.map(e => {
                    var t, r = e.playlistPanelVideoRenderer;
                    return !!r && {
                        videoId: r.videoId,
                        thumbnails: null == r || null == (t = r.thumbnail) ? void 0 : t.thumbnails,
                        title: getText(r.title),
                        lengthText: getText(r.lengthText),
                        author: getText(r.shortBylineText)
                    }
                }).filter(e => e)
            }))()
        }
        getHeader(e, t) {
            var r;
            r = e === MusicPagePosition.SPECIAL_PARSE_PLAYLIST ? this.url : positionMap[e], t && (r = t);
            var n, a = {
                "X-Goog-Visitor-Id": this.H("VISITOR_DATA"),
                "X-YouTube-Client-Name": this.H("INNERTUBE_CONTEXT_CLIENT_NAME"),
                "X-YouTube-Client-Version": this.H("INNERTUBE_CONTEXT_CLIENT_VERSION"),
                "X-YouTube-Device": this.H("DEVICE"),
                "X-YouTube-Page-CL": this.H("PAGE_CL"),
                "X-YouTube-Page-Label": this.H("PAGE_BUILD_LABEL"),
                "X-YouTube-Utc-Offset": String(-(new Date).getTimezoneOffset()),
                Referer: r,
                "User-Agent": this.commonUserAgent,
                "content-type": "application/json"
            };
            try {
                n = (new Intl.DateTimeFormat).resolvedOptions().timeZone
            } catch (e) {}
            return n && (a["X-YouTube-Time-Zone"] = n), a
        }
        H(e, t = "") {
            var r = this.ytcfg && this.ytcfg.data_ || {};
            return e in r ? r[e] : t
        }
        buildSkeletonRequest() {
            var e = {
                internalExperimentFlags: this.$k()
            };
            return e = {
                context: {
                    client: {
                        clientName: this.H("INNERTUBE_CLIENT_NAME"),
                        clientVersion: this.H("INNERTUBE_CLIENT_VERSION"),
                        hl: this.H("HL", "en"),
                        gl: this.H("GL", "US"),
                        experimentIds: this.H("FORCED_EXPERIMENTS", []),
                        experimentsToken: this.H("EXPERIMENTS_TOKEN", "")
                    },
                    capabilities: {},
                    request: e
                }
            }, this.H("OVERRIDE_GEO") && oY(this, e, {
                context: {
                    client: {
                        internalGeo: this.H("OVERRIDE_GEO")
                    }
                }
            }), this.H("DELEGATED_SESSION_ID") && oY(this, e, {
                context: {
                    user: {
                        onBehalfOfUser: this.H("DELEGATED_SESSION_ID")
                    }
                }
            }), this.H("DEVICE") && oY(this, e, {
                context: {
                    client: qn(this.H("DEVICE", void 0))
                }
            }), e
        }
        $k() {
            var e = [],
                t = this.H("EXPERIMENTS_FORCED_FLAGS", {});
            for (r in t) e.push({
                key: r,
                value: String(t[r])
            });
            var r = this.H("EXPERIMENT_FLAGS", {});
            for (var n in r) n.startsWith("force_") && void 0 === t[n] && e.push({
                key: n,
                value: String(r[n])
            });
            return e
        }
        getOptionsMap(e) {
            try {
                var t = e.frameworkUpdates.entityBatchUpdate.mutations.reduce((e, t) => (t.payload.musicFormBooleanChoice && (e[t.payload.musicFormBooleanChoice.id] = t.payload.musicFormBooleanChoice.opaqueToken), e), {});
                return e.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicShelfRenderer.subheaders[0].musicSideAlignedItemRenderer.startItems[0].musicSortFilterButtonRenderer.menu.musicMultiSelectMenuRenderer.options.reduce((e, r) => "musicMultiSelectMenuItemRenderer" in r ? e.concat({
                    name: r.musicMultiSelectMenuItemRenderer.title.runs[0].text,
                    code: t[r.musicMultiSelectMenuItemRenderer.formItemEntityKey]
                }) : e, [])
            } catch (e) {
                return []
            }
        }
    }
    var oY = function(e, t, r) {
            for (var n in r) Wa(t[n]) ? oY(e, t[n], r[n]) : t[n] || (t[n] = r[n])
        },
        Wa = function(e) {
            var t = typeof e;
            return "object" == t && null != e || "function" == t
        };

    function qn(e) {
        for (var t = {}, r = (e = q(Object.entries(bm(e)))).next(); !r.done; r = e.next()) {
            var n = q(r.value);
            r = n.next().value, n = n.next().value, "cbrand" === r ? t.deviceMake = n : "cmodel" === r ? t.deviceModel = n : "cbr" === r ? t.browserName = n : "cbrver" === r ? t.browserVersion = n : "cos" === r ? t.osName = n : "cosver" === r ? t.osVersion = n : "cplatform" === r && (t.platform = n)
        }
        return t
    }

    function bm(e) {
        return "?" == e.charAt(0) && (e = e.substr(1)), Yl(e, "&")
    }

    function Yl(e, t) {
        for (var r = {}, n = 0, a = (t = e.split(t)).length; n < a; n++) {
            var o = t[n].split("=");
            if (1 == o.length && o[0] || 2 == o.length) try {
                var i = Zl(o[0] || ""),
                    s = Zl(o[1] || "");
                i in r ? Array.isArray(r[i]) ? Gb(r[i], s) : r[i] = [r[i], s] : r[i] = s
            } catch (e) {}
        }
        return r
    }

    function Zl(e) {
        return e && e.match(/^[\w.]*$/) ? e : Yc(e)
    }

    function Gb(e, t) {
        for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            if (Va(n)) {
                var a = e.length || 0,
                    o = n.length || 0;
                e.length = a + o;
                for (var i = 0; i < o; i++) e[a + i] = n[i]
            } else e.push(n)
        }
    }

    function Va(e) {
        var t = Ua(e);
        return "array" == t || "object" == t && "number" == typeof e.length
    }

    function Ua(e) {
        var t = typeof e;
        return "object" != t ? t : e ? Array.isArray(e) ? "array" : t : "null"
    }

    function Yc(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }

    function q(e) {
        var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
        return t ? t.call(e) : {
            next: aa(e)
        }
    }

    function aa(e) {
        var t = 0;
        return function() {
            return t < e.length ? {
                done: !1,
                value: e[t++]
            } : {
                done: !0
            }
        }
    }
    var core = new Music,
        getVideoFromPlayList = function() {
            var e = _asyncToGenerator((function*(e) {
                var t, r, n, a, o, i, s, l, u, c, d, p, h, m, f, y, v = getQueryVariables(e);
                if (!(null == v ? void 0 : v.list)) throw new Error("[youtube playlist] not a valid URL");
                var g = yield get$1(e, {
                    method: "GET"
                });
                if (!g.success) throw new Error("[youtube playlist] fetch error");
                var b = initialData(g.result),
                    _ = (null == b || null == (t = b.contents) || null == (r = t.twoColumnWatchNextResults) || null == (n = r.playlist) ? void 0 : n.playlist) || (null == b || null == (a = b.contents) || null == (o = a.twoColumnBrowseResultsRenderer) || null == (i = o.tabs[0]) || null == (s = i.tabRenderer) || null == (l = s.content) || null == (u = l.sectionListRenderer) || null == (c = u.contents[0]) || null == (d = c.itemSectionRenderer) || null == (p = d.contents[0]) ? void 0 : p.playlistVideoListRenderer),
                    E = null == b || null == (h = b.microformat) ? void 0 : h.microformatDataRenderer;
                return {
                    title: null == _ ? void 0 : _.title,
                    description: (null == b || null == (m = b.metadata) || null == (f = m.playlistMetadataRenderer) ? void 0 : f.description) || (null == E ? void 0 : E.description),
                    thumbnail: null == E || null == (y = E.thumbnail) ? void 0 : y.thumbnails,
                    contents: _.contents.map(e => {
                        if ("playlistPanelVideoRenderer" in e || "playlistVideoRenderer" in e) {
                            var t, r, n = e.playlistPanelVideoRenderer || e.playlistVideoRenderer;
                            return !n.unplayableText && "9xp1XWmJ_Wo" !== n.videoId && "YouTube is not currently available on this device." !== (null == n || null == (t = n.title) ? void 0 : t.simpleText) && {
                                videoId: n.videoId,
                                thumbnails: null == n || null == (r = n.thumbnail) ? void 0 : r.thumbnails,
                                title: getText(n.title),
                                lengthText: getText(n.lengthText),
                                author: getText(n.shortBylineText)
                            }
                        }
                        return !1
                    }).filter(e => e)
                }
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getYouTubeMusicPlayList = function() {
            var e = _asyncToGenerator((function*(e) {
                var t = getQueryVariables(e),
                    r = null == t ? void 0 : t.list;
                if (!r) throw new Error("[youtubeMusic playlist] not a valid URL");
                try {
                    var n = "https://www.youtube.com/playlist?list=" + r;
                    return yield getVideoFromPlayList(n)
                } catch (e) {}
                return {
                    contents: yield core.get(MusicPagePosition.SPECIAL_PARSE_PLAYLIST, e)
                }
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getYouTubeMusicChannelPlayList = function() {
            var e = _asyncToGenerator((function*(e) {
                var t = e.split("/");
                if (!t[t.length - 1].startsWith("MPREb_")) throw new Error("[youtubeMusicChannel playlist] not a valid URL");
                return yield core.get(MusicPagePosition.SPECIAL_PARSE_CHANNEL_PLAYLIST, e)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getYouTubeChannelMusicLayout = function() {
            var e = _asyncToGenerator((function*() {
                var e = yield get$1("https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ", {
                    method: "GET"
                });
                if (!e.success) throw new Error("[youtube channel: music] fetch error");
                var t = initialData(e.result),
                    r = [];
                try {
                    r = t.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents || []
                } catch (e) {}
                if (0 === r.length) throw new Error("could find sectionList");
                return r.map(e => {
                    var t = Object.keys(e)[0];
                    return "itemSectionRenderer" === t && parseSectionData(e[t].contents[0])
                }).filter(e => e)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }();
    class Scheduler {
        constructor(e, t) {
            if (this.waitStartTaskQueue = [], this.mode = t.mode, this.max = e, this.waitQueue = [], this.currentIndex = 0, "signal" === this.mode)
                for (var r = 0; r < this.max; r++) this.add(() => new Promise(e => {
                    var t;
                    null == (t = this.waitStartTaskQueue) || t.push(e)
                }))
        }
        add(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                t.currentIndex >= t.max && (yield t.wait()), t.currentIndex++;
                try {
                    var r = yield e();
                    return Promise.resolve(r)
                } catch (e) {
                    return Promise.reject(e)
                } finally {
                    t.currentIndex--, t.next()
                }
            }))()
        }
        start() {
            if ("immediately" !== this.mode)
                for (var e = 0; e < this.max; e++)(0, this.waitStartTaskQueue[e])()
        }
        wait() {
            var e = null,
                t = new Promise(t => {
                    e = t
                });
            return this.waitQueue.push(e), t
        }
        next() {
            this.waitQueue.length > 0 && this.waitQueue.shift()()
        }
    }
    var ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0";
    class Api {
        constructor() {
            this.effectiveKeys = ["playerResponse", "response", "xsrf_token"], this.initRetryTick = 0, this.initStauts = "pending", this.xsrf_token = "", this.initPromise = null, this.commonHeader = {
                "Alt-Used": "www.youtube.com"
            }, this.homepageHTMLRes = "", this.INNERTUBE_CLIENTS = {
                android: {
                    INNERTUBE_API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
                    INNERTUBE_HOST: "www.youtube.com",
                    INNERTUBE_CONTEXT: {
                        client: {
                            clientName: "ANDROID",
                            clientVersion: "16.20",
                            hl: "en"
                        }
                    },
                    INNERTUBE_CONTEXT_CLIENT_NAME: 3,
                    REQUIRE_JS_PLAYER: !1
                },
                android_music: {
                    INNERTUBE_API_KEY: "AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30",
                    INNERTUBE_HOST: "music.youtube.com",
                    INNERTUBE_CONTEXT: {
                        client: {
                            clientName: "ANDROID_MUSIC",
                            clientVersion: "4.32",
                            hl: "en"
                        }
                    },
                    INNERTUBE_CONTEXT_CLIENT_NAME: 21,
                    REQUIRE_JS_PLAYER: !1
                }
            }, this.tasksScheduler = new Scheduler(2, {
                mode: "signal"
            }), this.tasksScheduler.start()
        }
        startInitStatus() {
            var e = this;
            return _asyncToGenerator((function*() {
                e.initPromise && "failure" !== e.initStauts || (e.initPromise = new Promise(t => {
                    e.init().then(() => {
                        t("success" === e.initStauts)
                    }).catch(() => t(!1))
                })), yield e.initPromise
            }))()
        }
        getInitPrommise() {
            return this.initPromise
        }
        init() {
            var e = this;
            return _asyncToGenerator((function*() {
                var t = !1;
                for (e.initStauts = "pending", e.initRetryTick = 0; !t && e.initRetryTick < 10;) {
                    e.initRetryTick++;
                    var r = yield get$1("https://www.youtube.com", {
                        method: "GET",
                        useDefaultLang: !0,
                        extraHeaders: {
                            "User-Agent": ua
                        }
                    });
                    if (r.success) {
                        e.homepageHTMLRes = Date.now().toString() + "\n" + r.result;
                        try {
                            var {
                                ytcfg: n
                            } = parseYtcfg(r.result, {
                                isYouTube: !0
                            });
                            e.ytcfg = n
                        } catch (e) {
                            continue
                        }
                        e.commonHeader = Object.assign({}, e.commonHeader, {
                            "X-Goog-Visitor-Id": e.H("VISITOR_DATA"),
                            "X-Youtube-Client-Name": e.H("INNERTUBE_CONTEXT_CLIENT_NAME"),
                            "X-Youtube-Client-Version": e.H("INNERTUBE_CONTEXT_CLIENT_VERSION"),
                            "User-Agent": ua
                        }), e.baseURL = "https://www.youtube.com" + e.H("PLAYER_JS_URL");
                        var a = yield get$1(e.baseURL, {
                            method: "GET",
                            cache: !0,
                            useDefaultLang: !0,
                            extraHeaders: {
                                "User-Agent": ua
                            }
                        });
                        if (a.success) {
                            var o = a.result;
                            try {
                                e.cipher = new Cipher(o)
                            } catch (e) {
                                continue
                            }
                            t = !0, e.initStauts = "success", e.tasksScheduler.start()
                        }
                    }
                }
                "pending" === e.initStauts && (e.initStauts = "failure")
            }))()
        }
        fetchChannelID() {
            var e = this;
            return _asyncToGenerator((function*() {
                var t = {
                    success: !1,
                    code: 0,
                    data: []
                };
                try {
                    var r, n, a = yield e.tasksScheduler.add(() => get$1("https://www.youtube.com/account", {
                        method: "GET",
                        extraHeaders: {
                            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1"
                        }
                    }));
                    if (!a.success) return t.code = a.errCode, t;
                    if (a.responseURL && a.responseURL.startsWith("https://accounts.google.com")) return t.code = 401, t;
                    var o = null == (r = initialData(a.result).contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[1].itemSectionRenderer.contents[0].settingsOptionsRenderer.options[0].channelOptionsRenderer) || null == (n = r.avatarEndpoint) ? void 0 : n.urlEndpoint,
                        i = null == o ? void 0 : o.url;
                    if (i) {
                        var s = (initialData((a = yield e.tasksScheduler.add(() => get$1(i + "/playlists", {
                            method: "GET"
                        }))).result).contents.twoColumnBrowseResultsRenderer.tabs.find(e => e.tabRenderer.selected).tabRenderer.content.sectionListRenderer.contents || []).map(e => {
                            var t = Object.keys(e)[0];
                            return "itemSectionRenderer" === t && parseSectionData(e[t].contents[0])
                        }).filter(e => e);
                        if (s && s.length) {
                            var l = [];
                            s.forEach(e => {
                                e.content.forEach(e => {
                                    var t;
                                    e.url && l.push({
                                        title: e.title,
                                        videoCount: null == (t = e.subtitle) ? void 0 : t.replace(/[^\d]/g, ""),
                                        thumbnail: e.thumbnail,
                                        url: e.url
                                    })
                                })
                            }), t.data = l
                        }
                    }
                    return t.success = !0, t
                } catch (e) {
                    return t
                }
            }))()
        }
        H(e, t = "") {
            var r = this.ytcfg && this.ytcfg.data_ || {};
            return e in r ? r[e] : t
        }
        getAndroidPOSTBody(e, t, r) {
            var n = "en";
            r && (r.uLangu || r.lang) && (n = (r.uLangu || r.lang).split("-")[0] || n);
            var a = this.INNERTUBE_CLIENTS[t].INNERTUBE_CONTEXT;
            return a.client.hl = n, {
                context: Object.assign({}, a),
                videoId: e,
                playbackContext: {
                    contentPlaybackContext: {
                        html5Preference: "HTML5_PREF_WANTS"
                    }
                },
                contentCheckOk: !0,
                racyCheckOk: !0
            }
        }
        getPOSTBody(e) {
            var t, {
                clickTracking: r,
                client: n,
                request: a,
                user: o
            } = this.H("INNERTUBE_CONTEXT");
            try {
                t = (new Intl.DateTimeFormat).resolvedOptions().timeZone
            } catch (e) {}
            return t && (n.timeZone = t), {
                context: {
                    client: Object.assign({}, n, {
                        screenWidthPoints: 1022,
                        screenHeightPoints: 1330,
                        screenPixelDensity: 1,
                        screenDensityFloat: 1,
                        utcOffsetMinutes: String(-(new Date).getTimezoneOffset()),
                        userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
                        clientScreen: "WATCH",
                        mainAppWebInfo: {
                            graftUrl: "/watch?v=" + e,
                            webDisplayMode: "WEB_DISPLAY_MODE_BROWSER",
                            isWebNativeShareAvailable: !1
                        }
                    }),
                    user: o,
                    request: a,
                    clickTracking: r
                },
                videoId: e,
                playbackContext: {
                    contentPlaybackContext: {
                        currentUrl: "/watch?v=" + e,
                        vis: 0,
                        splay: !1,
                        autoCaptionsDefaultOn: !1,
                        autonavState: "STATE_NONE",
                        html5Preference: "HTML5_PREF_WANTS",
                        signatureTimestamp: this.H("STS"),
                        referer: "https://www.youtube.com",
                        lactMilliseconds: "-1"
                    }
                },
                racyCheckOk: !1,
                contentCheckOk: !1
            }
        }
        queryVideoInfo(e, t, r) {
            var n = this;
            return _asyncToGenerator((function*() {
                var a = "",
                    o = /music.youtube.com/.test(e) ? "android_music" : "android",
                    i = n.INNERTUBE_CLIENTS[o].INNERTUBE_HOST,
                    s = n.INNERTUBE_CLIENTS[o].INNERTUBE_API_KEY,
                    l = {
                        "X-YouTube-Client-Name": n.INNERTUBE_CLIENTS[o].INNERTUBE_CONTEXT_CLIENT_NAME,
                        "X-YouTube-Client-Version": n.INNERTUBE_CLIENTS[o].INNERTUBE_CONTEXT.client.clientVersion
                    };
                try {
                    a = videoId(e)
                } catch (e) {
                    throw new NotRetryError(e.message)
                }
                var u = yield n.tasksScheduler.add(() => Promise.all(t ? [Promise.resolve({
                    success: !0,
                    result: "false"
                }), get$1("https://" + i + "/youtubei/v1/player?key=" + s, {
                    method: "POST",
                    extraHeaders: Object.assign({}, l, {
                        Origin: "https://" + i,
                        "content-type": "application/json",
                        "User-Agent": ua
                    }),
                    body: n.getAndroidPOSTBody(a, o, r)
                })] : [get$1("https://" + i + "/youtubei/v1/next?key=" + s, {
                    method: "POST",
                    extraHeaders: Object.assign({}, l, {
                        Origin: "https://" + i,
                        "content-type": "application/json",
                        "User-Agent": ua
                    }),
                    body: n.getAndroidPOSTBody(a, o, r)
                }), get$1("https://" + i + "/youtubei/v1/player?key=" + s, {
                    method: "POST",
                    extraHeaders: Object.assign({}, l, {
                        Origin: "https://" + i,
                        "content-type": "application/json",
                        "User-Agent": ua
                    }),
                    body: n.getAndroidPOSTBody(a, o, r)
                })]));
                if (!u[0].success || !u[1].success) throw new NetWorkError(u[0].errMsg);
                var c = u.map(e => {
                        var t = {};
                        try {
                            t = JSON.parse(e.result)
                        } catch (e) {}
                        return t
                    }),
                    d = {
                        playerResponse: c[1],
                        initialData: c[0]
                    };
                return Object.assign({}, yield n.handleInfo(d, t), {
                    id: a,
                    htmlResponse: ""
                })
            }))()
        }
        handleInfo(e, t) {
            var r = this;
            return _asyncToGenerator((function*() {
                var n, a = e.playerResponse,
                    o = e.initialData,
                    i = a.playabilityStatus || {},
                    s = {
                        status: null,
                        info: []
                    };
                if (!t) {
                    if ("status" in i && ("reason" in i && (s = {
                            status: i.status,
                            info: [i.reason]
                        }), "message" in i && (s = {
                            status: i.status,
                            info: i.message
                        })), "ERROR" === s.status) throw new NotRetryError("is unavailable");
                    if ("LOGIN_REQUIRED" === s.status) throw new BackupExtractError("login required");
                    if ("UNPLAYABLE" === s.status) throw new NotRetryError("unplayable")
                }
                var l = a.videoDetails || {},
                    u = (null == a || null == (n = a.microformat) ? void 0 : n.playerMicroformatRenderer) || {},
                    c = (null == l ? void 0 : l.title) || getText(null == u ? void 0 : u.title),
                    d = null == l ? void 0 : l.shortDescription,
                    p = [],
                    h = a.streamingData || {},
                    m = h.formats || [];
                m = m.concat(h.adaptiveFormats || []);
                var f = l.isLive;
                if (!t) {
                    if (f) p = [{
                        url: h.hlsManifestUrl
                    }];
                    else
                        for (var y of m) {
                            var v, g;
                            if (!(null != y && y.targetDurationSec || null != y && y.drmFamilies) && "FORMAT_STREAM_TYPE_OTF" !== y.type) {
                                var b = y.url;
                                if (!b) {
                                    yield r.startInitStatus();
                                    var _ = parseQSL(y.signatureCipher),
                                        E = _.s;
                                    if (!(b = _.url) || !E) continue;
                                    var T = r.cipher.getSignature(decodeURIComponent(E)),
                                        S = _.sp || "signature";
                                    b = decodeURIComponent(b) + "&" + S + "=" + T
                                }
                                var w = y.averageBitrate || y.bitrate,
                                    x = {
                                        filesize: null == y ? void 0 : y.contentLength,
                                        width: null == y ? void 0 : y.width,
                                        height: null == y ? void 0 : y.height,
                                        type: y.mimeType,
                                        quality: y.quality,
                                        itag: y.itag,
                                        fps: null == y ? void 0 : y.fps,
                                        bitrate: (null == y ? void 0 : y.averageBitrate) || (null == y ? void 0 : y.bitrate),
                                        url: b
                                    },
                                    I = y.mimeType;
                                if (I) try {
                                    var R = I.match(/((?:[^\/]+)\/(?:[^;]+))(?:;\s*codecs="([^"]+)")?/),
                                        P = mimetype2ext(R[1]),
                                        C = parseCodecs(R[2]);
                                    x.ext = P, x = Object.assign({}, x, C)
                                } catch (e) {}
                                var N = !(null == (v = x) || !v.acodec),
                                    A = !(null == (g = x) || !g.vcodec);
                                N && (x.vbr = w), A && (x.abr = w), (A || N) && x.ext && (x.container = x.ext + "_dash"), p.push(x)
                            }
                        }
                    if (0 === p.length) {
                        var O;
                        if (h.licenseInfos) throw new Error("This video is DRM protected");
                        var M = (null == i || null == (O = i.errorScreen) ? void 0 : O.playerErrorMessageRenderer) || {},
                            L = getText(null == M ? void 0 : M.reason) || (null == i ? void 0 : i.reason),
                            D = getText(M.subreason);
                        throw D && (L += "," + D), new Error(L || "formats list is empty")
                    }
                    if (!p[0].url) throw new Error("the URL cannot be found in the first format")
                }
                var k = [];
                for (var U of [l, u]) {
                    for (var G of (null == U || null == (j = U.thumbnail) ? void 0 : j.thumbnails) || []) {
                        var j, H = null == G ? void 0 : G.url;
                        H && k.push({
                            height: null == G ? void 0 : G.height,
                            url: H,
                            width: null == G ? void 0 : G.width
                        })
                    }
                    if (k.length > 0) break
                }
                var $ = null == u ? void 0 : u.category,
                    Y = (null == l ? void 0 : l.channelId) || (null == u ? void 0 : u.externalChannelId),
                    B = (null == l ? void 0 : l.lengthSeconds) || (null == u ? void 0 : u.lengthSeconds),
                    V = [];
                try {
                    o && (V = o.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail.thumbnails)
                } catch (e) {}
                var F = {
                    isLive: Boolean(f),
                    title: c,
                    formats: p,
                    thumbnails: k,
                    description: d,
                    category: $ || [],
                    duration: B,
                    viewCount: l.viewCount || u.viewCount,
                    keywords: [],
                    averageRating: l.averageRating,
                    uploader: l.author,
                    channelID: Y,
                    recommendInfo: o ? parseRecommend(o) : [],
                    avatar: V
                };
                return Y && (F.channelURL = "https://www.youtube.com/channel/" + Y), F
            }))()
        }
    }
    var YouTubeApi = new Api,
        ExtractErrorMsg, EventName;
    class YouTube {
        constructor(e) {
            this.videoId = "", this.watchURL = "", this.embedURL = "", this.watchHTML = "", this.ageRestricted = !1, this.embedHTML = "", this.vidInfoURL = "", this.jsURL = "", this.js = "", this.vidInfoRaw = "", this.simpleMode = !1, this.initialData = {}, this.vidInfo = {}, this.playerConfigArgs = {}, this.playerResponse = {};
            var {
                url: t,
                onCompleteCallback: r,
                onError: n,
                parseDetailInfo: a,
                simpleMode: o
            } = e;
            this.simpleMode = !!o, this.parseDetailInfo = a, this.onCompleteCallback = r, this.onError = n, this.reportNetworkError = e.onNetworkError;
            try {
                this.videoId = videoId(t)
            } catch (e) {
                return void this.onError(new Error("__notRetry@" + e.message))
            }
            this.watchURL = "https://www.youtube.com/watch?v=" + this.videoId + "&bpctr=9999999999&has_verified=1", this.embedURL = "https://www.youtube.com/embed/" + this.videoId, this.start()
        }
        onNetworkError(e, t) {
            this.reportNetworkError(Object.assign({}, e, {
                errorMSG: t + ": " + e.errCode,
                videoId: this.videoId
            }))
        }
        checkAvailability() {
            if (!this.watchHTML) throw new Error("fetch the failure");
            var {
                status: e,
                playerResponse: t,
                info: r
            } = playabilityStatus(this.watchHTML);
            for (var n of r) {
                if ("ERROR" === e) throw new Error("__notRetry@is unavailable");
                if ("LOGIN_REQUIRED" === e) {
                    if (null != n && n.includes("This is a private video.")) throw new Error("login required")
                } else if ("UNPLAYABLE" === e) throw new Error("__notRetry@unplayable")
            }
            return t
        }
        start() {
            var e = this;
            return _asyncToGenerator((function*() {
                try {
                    var t, r, n;
                    if (!e.videoId) throw new Error("can't parse id");
                    var a = yield get$1(e.watchURL, {
                        method: "GET",
                        useDefaultLang: !0
                    });
                    if (a.success) e.watchHTML = a.result;
                    else {
                        if (200 !== a.errCode || a.success) return void e.onNetworkError(a, "watchURL");
                        e.watchHTML = ""
                    }
                    e.watchHTML && (e.playerResponse = initialPlayerResponse(e.watchHTML));
                    var o = e.playerResponse.playabilityStatus || {},
                        i = {
                            status: null,
                            info: []
                        };
                    for (var s of ("status" in o && ("reason" in o && (i = {
                            status: o.status,
                            info: [o.reason]
                        }), "message" in o && (i = {
                            status: o.status,
                            info: o.message
                        })), i.info)) {
                        if ("ERROR" === i.status) throw new NotRetryError("is unavailable");
                        if ("LOGIN_REQUIRED" === i.status) {
                            if (null != s && s.includes("This is a private video.")) throw new Error("login required")
                        } else if ("UNPLAYABLE" === i.status) throw new NotRetryError("unplayable")
                    }
                    if (isAgeRestricted(e.watchHTML)) {
                        var l, u = yield get$1(videoInfoUrlAgeRestricted(e.videoId, e.watchURL), {
                            method: "GET",
                            useDefaultLang: !0
                        });
                        if (!u.success) return void e.onNetworkError(u, "age restricted request");
                        (l = JSON.parse(decodeURIComponent(parseQSL(u.result).player_response))) && (e.playerResponse = l)
                    }
                    var c, d = e.playerResponse.videoDetails || {},
                        p = (null == (t = e.playerResponse) || null == (r = t.microformat) ? void 0 : r.playerMicroformatRenderer) || {},
                        h = (null == (n = e.playerResponse) ? void 0 : n.title) || getText(null == p ? void 0 : p.title) || htmlSearchMeta(["og:title", "twitter:title", "title"], e.watchHTML),
                        m = null == d ? void 0 : d.shortDescription,
                        f = [],
                        y = [],
                        v = {},
                        g = e.playerResponse.streamingData || {},
                        b = g.formats || [];
                    b = b.concat(g.adaptiveFormats || []);
                    var _ = d.isLive;
                    if (_) f = [{
                        url: g.hlsManifestUrl
                    }];
                    else
                        for (var E of b) {
                            var T, S;
                            if (!(null != E && E.targetDurationSec || null != E && E.drmFamilies)) {
                                var w = (null == E ? void 0 : E.itag) || "",
                                    x = E.quality;
                                if (w && x && (v[w] = x), "FORMAT_STREAM_TYPE_OTF" !== E.type) {
                                    var I = E.url;
                                    if (!I) {
                                        var R = parseQSL(E.signatureCipher),
                                            P = R.s;
                                        if (!(I = R.url) || !P) continue;
                                        if (!c) {
                                            if (!e.watchHTML) continue;
                                            var C = jsURL(e.watchHTML),
                                                N = yield get$1(C, {
                                                    method: "GET",
                                                    cache: !0,
                                                    useDefaultLang: !0
                                                });
                                            if (!N.success) return void e.onNetworkError(N, "jsURL");
                                            c = new Cipher(N.result)
                                        }
                                        var A = c.getSignature(decodeURIComponent(P)),
                                            O = R.sp || "signature";
                                        I = decodeURIComponent(I) + "&" + O + "=" + A
                                    }
                                    w && y.push(w);
                                    var M = E.averageBitrate || E.bitrate,
                                        L = {
                                            filesize: null == E ? void 0 : E.contentLength,
                                            width: null == E ? void 0 : E.width,
                                            height: null == E ? void 0 : E.height,
                                            type: E.mimeType,
                                            quality: E.quality,
                                            itag: E.itag,
                                            fps: null == E ? void 0 : E.fps,
                                            bitrate: (null == E ? void 0 : E.averageBitrate) || (null == E ? void 0 : E.bitrate),
                                            url: I
                                        },
                                        D = E.mimeType;
                                    if (D) try {
                                        var k = D.match(/((?:[^\/]+)\/(?:[^;]+))(?:;\s*codecs="([^"]+)")?/),
                                            U = mimetype2ext(k[1]),
                                            G = parseCodecs(k[2]);
                                        L.ext = U, L = Object.assign({}, L, G)
                                    } catch (e) {}
                                    var j = !(null == (T = L) || !T.acodec),
                                        H = !(null == (S = L) || !S.vcodec);
                                    j && (L.vbr = M), H && (L.abr = M), (H || j) && L.ext && (L.container = L.ext + "_dash"), f.push(L)
                                }
                            }
                        }
                    if (0 === f.length) {
                        var $;
                        if (g.licenseInfos) throw new Error("This video is DRM protected");
                        var Y = (null == o || null == ($ = o.errorScreen) ? void 0 : $.playerErrorMessageRenderer) || {},
                            B = getText(null == Y ? void 0 : Y.reason) || (null == o ? void 0 : o.reason),
                            V = getText(Y.subreason);
                        if (V && (B += "," + V), B) throw new Error(B)
                    }
                    var F = d.keywords || [],
                        W = [];
                    for (var X of [d, p]) {
                        for (var q of (null == X || null == (K = X.thumbnail) ? void 0 : K.thumbnails) || []) {
                            var K, z = null == q ? void 0 : q.url;
                            z && W.push({
                                height: null == q ? void 0 : q.height,
                                url: z,
                                width: null == q ? void 0 : q.width
                            })
                        }
                        if (W.length > 0) break
                    }
                    if (0 === W.length) {
                        var J = htmlSearchMeta(["og:image", "twitter:image"], e.watchHTML);
                        J && W.push({
                            url: J
                        })
                    }
                    var Z = (null == p ? void 0 : p.category) || htmlSearchMeta(["genre"], e.watchHTML),
                        Q = (null == d ? void 0 : d.channelId) || (null == p ? void 0 : p.externalChannelId) || htmlSearchMeta("channelId", e.watchHTML),
                        ee = (null == d ? void 0 : d.lengthSeconds) || (null == p ? void 0 : p.lengthSeconds) || htmlSearchMeta("duration", e.watchHTML);
                    try {
                        e.initialData = initialData(e.watchHTML)
                    } catch (e) {}
                    var te = {
                        isLive: Boolean(_),
                        id: e.videoId,
                        title: h,
                        formats: f,
                        thumbnails: W,
                        description: m,
                        category: Z || [],
                        duration: ee,
                        viewCount: d.viewCount || p.viewCount || htmlSearchMeta(["interactionCount"], e.watchHTML),
                        keywords: F,
                        averageRating: d.averageRating,
                        uploader: d.author,
                        channelID: Q,
                        recommendInfo: e.initialData ? parseRecommend(e.initialData) : []
                    };
                    Q && (te.channelURL = "https://www.youtube.com/channel/" + Q), e.onCompleteCallback(te, e.videoId)
                } catch (t) {
                    e.onError(t)
                }
            }))()
        }
    }

    function eventTrack(e, t) {
        snaptube.trackEventNameProperties(e, t)
    }! function(e) {
        e.URL_EMPTY = "url is empty", e.UNKNOW = "unknow mistake", e.DEFAULT = "placeholder"
    }(ExtractErrorMsg || (ExtractErrorMsg = {})),
    function(e) {
        e.EXTRACT = "Extract", e.EXTRACT_LAYOUT = "ExtractLayout", e.EXTRACT_Search = "ExtractSearch"
    }(EventName || (EventName = {}));
    var trackSearchResult = e => {
            try {
                snaptube.finishSearch(e)
            } catch (e) {}
        },
        EventName$1 = "ExtractSearch",
        build_number = parseInt("47", 10);

    function Track(e) {
        eventTrack(EventName$1, Object.assign({
            build_number: build_number
        }, e, {
            type: "youtube_search_result"
        }))
    }
    var commonUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1",
        BASE_URL = "https://m.youtube.com",
        parseItemSectionRenderer = e => e.map(e => {
            var t, r, n, a, o, i, s, l, u, c, d, p, h, m, f, y, v, g, b, _ = Object.keys(e)[0],
                E = e[_];
            switch (_) {
                case "compactVideoRenderer":
                    return {
                        type: _, data: {
                            videoId: null == (t = b = E) ? void 0 : t.videoId,
                            title: getText(null == (r = b) ? void 0 : r.title),
                            thumbnails: null == (n = b) || null == (a = n.thumbnail) ? void 0 : a.thumbnails,
                            author: getText(null == (o = b) ? void 0 : o.shortBylineText),
                            publishedTime: getText(null == (i = b) ? void 0 : i.publishedTimeText),
                            viewCountText: getText(null == (s = b) ? void 0 : s.viewCountText),
                            shortViewCountText: getText(null == (l = b) ? void 0 : l.shortViewCountText),
                            lengthText: getText(null == (u = b) ? void 0 : u.lengthText)
                        }
                    };
                case "horizontalCardListRenderer":
                    var T = null == E ? void 0 : E.cards.map(e => {
                        var t, r = Object.keys(e)[0],
                            n = e[r];
                        return "searchRefinementCardRenderer" === r ? {
                            thumbnails: null == n || null == (t = n.thumbnail) ? void 0 : t.thumbnails,
                            txt: getText(null == n ? void 0 : n.query),
                            url: "https://www.youtube.com/playlist?list=" + n.searchEndpoint.watchPlaylistEndpoint.playlistId
                        } : {}
                    });
                    return {
                        type: _, data: {
                            header: getText(null == E || null == (c = E.header) || null == (d = c.richListHeaderRenderer) ? void 0 : d.title),
                            cards: T
                        }
                    };
                case "compactPlaylistRenderer":
                    return {
                        type: _, data: {
                            id: null == (p = b = E) ? void 0 : p.playlistId,
                            title: getText(null == (h = b) ? void 0 : h.title),
                            thumbnails: null == (m = b) || null == (f = m.thumbnail) ? void 0 : f.thumbnails,
                            author: getText(null == (y = b) ? void 0 : y.shortBylineText),
                            videoCountShortText: getText(null == (v = b) ? void 0 : v.videoCountShortText),
                            videoCountText: getText(null == (g = b) ? void 0 : g.videoCountText)
                        }
                    };
                default:
                    return e
            }
        });
    class Search {
        constructor() {
            this.initStatus = "pending", this.initPromise = null, this.startInitStatus()
        }
        startInitStatus() {
            var e = this;
            return _asyncToGenerator((function*() {
                return e.initPromise && "failure" !== e.initStatus || (e.initPromise = new Promise(t => {
                    e.init().then(() => {
                        t("success" === e.initStatus)
                    }).catch(() => t(!1))
                })), yield e.initPromise
            }))()
        }
        getInitPrommise() {
            return this.initPromise
        }
        init() {
            var e = this;
            return _asyncToGenerator((function*() {
                e.initStatus = "pending";
                var t = yield get$1(BASE_URL, {
                    method: "GET",
                    withoutCookie: !0,
                    extraHeaders: {
                        "User-Agent": commonUserAgent
                    }
                });
                if (t.success) {
                    try {
                        var {
                            ytcfg: r
                        } = parseYtcfg(t.result, {
                            isYouTube: !0
                        });
                        e.ytcfg = r
                    } catch (t) {
                        return void(e.initStatus = "failure")
                    }
                    e.initStatus = "success"
                } else e.initStatus = "failure"
            }))()
        }
        go(e, t) {
            var r = this;
            return _asyncToGenerator((function*() {
                Track({
                    action: "start",
                    keyword: e,
                    duration: 0,
                    error_msg: "start search"
                });
                var n = yield r.startInitStatus();
                n ? r.toSearch(e, t) : (n || Track({
                    action: "failure",
                    keyword: e,
                    duration: 0,
                    error_msg: "init fail"
                }), trackSearchResult({
                    data: [],
                    isReady: !1,
                    code: 500
                }))
            }))()
        }
        toSearch(e, t) {
            var r = this;
            return _asyncToGenerator((function*() {
                var n, a, o = {
                        isReady: !0,
                        code: 200
                    },
                    i = {
                        "User-Agent": commonUserAgent,
                        Referer: "https://m.youtube.com/",
                        "X-YouTube-Client-Name": r.H("INNERTUBE_CONTEXT_CLIENT_NAME"),
                        "X-YouTube-Client-Version": r.H("INNERTUBE_CONTEXT_CLIENT_VERSION"),
                        "X-YouTube-Device": r.H("DEVICE"),
                        "X-YouTube-Page-CL": r.H("PAGE_CL"),
                        "X-YouTube-Page-Label": r.H("PAGE_BUILD_LABEL"),
                        "X-YouTube-Utc-Offset": String(-(new Date).getTimezoneOffset())
                    };
                try {
                    a = (new Intl.DateTimeFormat).resolvedOptions().timeZone
                } catch (e) {}
                a && (i["X-YouTube-Time-Zone"] = a);
                try {
                    var s = yield get$1("https://m.youtube.com/results?search_query=" + encodeURIComponent(e) + "&pbj=1" + (t ? "&sp=EgIQAw%3D%3D" : ""), {
                        method: "GET",
                        extraHeaders: i,
                        withoutCookie: !0
                    }), {
                        result: l,
                        success: u,
                        errMsg: c
                    } = s;
                    if (!u) throw new NetWorkError(c);
                    n = l;
                    var d = JSON.parse(l).response.contents.sectionListRenderer.contents;
                    for (var p of d) {
                        var h = Object.keys(p)[0],
                            m = p[h];
                        switch (h) {
                            case "universalWatchCardRenderer":
                                try {
                                    o.head = {
                                        avatar: m.header.watchCardRichHeaderRenderer.avatar.thumbnails,
                                        title: getText(m.header.watchCardRichHeaderRenderer.title),
                                        subtitle: getText(m.header.watchCardRichHeaderRenderer.subtitle),
                                        coverlabel: getText(m.callToAction.watchCardHeroVideoRenderer.callToActionButton.callToActionButtonRenderer.label),
                                        url: m.callToAction.watchCardHeroVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url,
                                        heroImage: m.callToAction.watchCardHeroVideoRenderer.heroImage.collageHeroImageRenderer,
                                        channelUrl: m.header.watchCardRichHeaderRenderer.titleNavigationEndpoint.commandMetadata.webCommandMetadata.url
                                    }
                                } catch (e) {
                                    upload({
                                        filename: "search_response",
                                        mimetype: "text/html",
                                        content: ((null == e ? void 0 : e.message) || "error") + n
                                    })
                                }
                                break;
                            case "itemSectionRenderer":
                                o.data = parseItemSectionRenderer(m.contents || []), o.data = o.data.filter(t ? ({
                                    type: e
                                }) => "compactPlaylistRenderer" === e : ({
                                    type: e
                                }) => "compactVideoRenderer" === e);
                                break;
                            case "continuationItemRenderer":
                                o.next = m.continuationEndpoint.continuationCommand.token
                        }
                    }
                    Track({
                        action: "success",
                        keyword: e,
                        duration: 0,
                        error_msg: "placeholder"
                    })
                } catch (t) {
                    t instanceof NetWorkError ? o.code = 400 : (o.code = 500, upload({
                        filename: "search_response",
                        mimetype: "text/html",
                        content: ((null == t ? void 0 : t.message) || "error") + n
                    })), Track({
                        action: "failure",
                        keyword: e,
                        duration: 0,
                        error_msg: (null == t ? void 0 : t.message) || "unknow error"
                    }), o.data = []
                }
                return trackSearchResult(o), o
            }))()
        }
        nextPage(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                var r = {
                    isReady: !0,
                    code: 200
                };
                Track({
                    action: "start",
                    keyword: "__nextPage",
                    duration: 0,
                    error_msg: "start search"
                });
                try {
                    var n = "https://m.youtube.com/youtubei/v1/search?key=" + t.H("INNERTUBE_API_KEY"),
                        a = yield get$1(n, {
                            method: "POST",
                            extraHeaders: {
                                "content-type": "application/json"
                            },
                            body: {
                                context: t.H("INNERTUBE_CONTEXT"),
                                continuation: e
                            }
                        }), {
                            result: o,
                            success: i,
                            errMsg: s
                        } = a;
                    if (!i) throw new NetWorkError(s);
                    var l = JSON.parse(o),
                        [u, c] = l.onResponseReceivedCommands[0].appendContinuationItemsAction.continuationItems;
                    u && (r.data = parseItemSectionRenderer(u.itemSectionRenderer.contents)), c && (r.next = c.continuationItemRenderer.continuationEndpoint.continuationCommand.token), Track({
                        action: "success",
                        keyword: "__nextPage",
                        duration: 0,
                        error_msg: "placeholder"
                    })
                } catch (e) {
                    r.code = e instanceof NetWorkError ? 400 : 500, Track({
                        action: "failure",
                        keyword: "__nextPage",
                        duration: 0,
                        error_msg: (null == e ? void 0 : e.message) || "unknow error"
                    }), r.data = []
                }
                return trackSearchResult(r), r
            }))()
        }
        H(e, t = "") {
            var r = this.ytcfg && this.ytcfg.data_ || {};
            return e in r ? r[e] : t
        }
    }
    var search = new Search,
        Website, ExtractType;
    class InfoExtractor {
        downloadJSON(e) {
            return _asyncToGenerator((function*() {
                var t, {
                    success: r,
                    result: n,
                    errMsg: a,
                    errCode: o
                } = yield get$1(e, {
                    method: "GET"
                });
                try {
                    t = JSON.parse(n)
                } catch (e) {}
                return r ? {
                    success: r,
                    data: t
                } : {
                    success: r,
                    errMsg: a,
                    errCode: o,
                    data: t
                }
            }))()
        }
        downloadWebpage(e) {
            return _asyncToGenerator((function*() {
                var {
                    success: t,
                    result: r
                } = yield get$1(e, {
                    method: "GET"
                });
                return t ? r : ""
            }))()
        }
        extractM3U8Foramts(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                var r = yield t.downloadWebpage(e);
                if (!r) return [];
                var n = r;
                return yield t.parseM3U8Formats(n, e), []
            }))()
        }
        parseM3U8Formats(e, t) {
            return _asyncToGenerator((function*() {
                if (e.includes("#EXT-X-FAXS-CM")) return [];
                if (/#EXT-X-SESSION-KEY:.*?URI="skd:\/\//.test(e)) return [];
                if (e.includes("#EXT-X-TARGETDURATION")) return [{
                    url: t
                }];
                for (var r of e.split("\n")) r.startsWith("#EXT-X-MEDIA:");
                for (var n of e.split("\n"));
                return []
            }))()
        }
    }! function(e) {
        e[e.SOUND_CLOUND = 0] = "SOUND_CLOUND", e[e.DAILY_MOTIONS = 1] = "DAILY_MOTIONS"
    }(Website || (Website = {})),
    function(e) {
        e[e.SINGLE = 0] = "SINGLE", e[e.PLAYLIST = 1] = "PLAYLIST"
    }(ExtractType || (ExtractType = {}));
    var sendParseResult = (e, t, r) => {
            var {
                success: n = !0,
                url: a = "",
                data: o = {},
                errorMSG: i = "",
                errorCode: s,
                extractor_client: l
            } = r;
            e === Website.SOUND_CLOUND && (t === ExtractType.SINGLE ? snaptube.finishSoundCloudExtractor({
                data: o,
                success: n,
                url: a,
                errorCode: s,
                extractor_client: l
            }) : snaptube.finishSoundCloudExtractorPlaylist({
                data: o,
                success: n,
                url: a,
                errorCode: s,
                extractor_client: l
            }))
        },
        finishSoundCloudSearchResult = e => {
            try {
                snaptube.finishSoundCloudSearch(e)
            } catch (e) {}
        },
        finishSoundCloudNextPlay = e => {
            try {
                snaptube.finishSoundCloudNextPlay(e)
            } catch (e) {}
        },
        build_number$1 = parseInt("47", 10);
    class SoundcloudIE extends InfoExtractor {
        constructor() {
            super(...arguments), this.validRegex = /^(?:https?:\/\/)?(?:(?:(?:www\.|m\.)?soundcloud\.com\/(?!stations\/track)([\w\d-]+)\/(?!(?:tracks|albums|sets(?:\/.+?)?|reposts|likes|spotlight)\/?(?:$|[?#]))([\w\d-]+)\/?([^?]+?)?(?:[?].*)?$)|(?:api(?:-v2)?\.soundcloud\.com\/tracks\/(\d+)(?:\/?\?secret_token=([^&]+))?))/, this.API_V2_BASE = "https://api-v2.soundcloud.com/", this.BASE_URL = "https://soundcloud.com/", this.CLIENT_ID = "", this.SC_VERSION = "", this.last_extract_url = "", this.last_extract_time = 0, this.last_extract_count = 0
        }
        updateClientId() {
            var e = this;
            return _asyncToGenerator((function*() {
                var t = yield get$1("https://d2rpb6c68govth.cloudfront.net/_app/config/sc", {
                    method: "GET",
                    setBaseParams: !0
                });
                if (t.success) {
                    var r = JSON.parse(t.result);
                    e.CLIENT_ID = r.client_id, e.SC_VERSION = r.scVersion
                } else e.CLIENT_ID = yield getRemoteConfig("soundcloud_client_id", null), e.SC_VERSION = yield getRemoteConfig("soundcloud_sc_version", null), e.CLIENT_ID || (e.CLIENT_ID = "XN2B69zrNGzHSSxMkvbp6MJYR1cHKOoH"), e.SC_VERSION || (e.SC_VERSION = "1645524428")
            }))()
        }
        _downloadJSON(e, t) {
            var r = () => super.downloadJSON,
                n = this;
            return _asyncToGenerator((function*() {
                n.CLIENT_ID || (yield n.updateClientId());
                var a = e;
                e.includes("?") ? a += "&client_id=" + n.CLIENT_ID : a += "?client_id=" + n.CLIENT_ID, t && Object.keys(t).forEach(e => {
                    a += "&" + e + "=" + t[e]
                });
                var o = yield r().call(n, a);
                return Object.assign({}, o, {
                    reusetUrl: a
                })
            }))()
        }
        extractInfoDict(e, t = "", r = "", n = !0) {
            var a = this;
            return _asyncToGenerator((function*() {
                var t, r = null == e ? void 0 : e.kind,
                    o = null == e ? void 0 : e.id,
                    i = null == e ? void 0 : e.title,
                    s = (null == e ? void 0 : e.full_duration) || (null == e ? void 0 : e.duration),
                    l = null == e ? void 0 : e.permalink_url,
                    u = [];
                if (n) {
                    var c, d, p = (null == (c = e.media) ? void 0 : c.transcodings) || [],
                        h = yield getRemoteConfig("use_transcodings_soundcloud_mp3", !0);
                    for (var m of p)
                        if (m instanceof Object) {
                            var {
                                format: {
                                    mime_type: f,
                                    protocol: y
                                }
                            } = m;
                            if (-1 !== f.indexOf("audio/mpeg")) {
                                if (d = m, !h) break;
                                if ("progressive" === y) break
                            }
                        } if (d) {
                        var {
                            url: v,
                            format: {
                                mime_type: g,
                                protocol: b
                            },
                            quality: _
                        } = d;
                        if (v) {
                            var {
                                data: E,
                                errMsg: T
                            } = yield a._downloadJSON(v);
                            if (T && (t = "url:" + t), E) {
                                var S = E.url;
                                S && u.push({
                                    quality: _,
                                    type: g,
                                    url: S,
                                    itag: "progressive" === b ? 100 : 0
                                })
                            }
                        }
                    }
                }
                var w = e.user || {};
                return {
                    data: {
                        id: "" + o,
                        uploader: w.username,
                        title: i,
                        duration: s / 1e3,
                        thumbnails: [{
                            url: (e.artwork_url || w.avatar_url).replace("-large", "-t500x500")
                        }],
                        formats: u,
                        webURL: l,
                        kind: r
                    },
                    errorMsg: t
                }
            }))()
        }
        getNextPlay(e, t) {
            var r = this;
            return _asyncToGenerator((function*() {
                if (e) {
                    eventTrack(EventName.EXTRACT_LAYOUT, {
                        action: "start",
                        type: "soundcloud_music",
                        display_type: "related",
                        url: t,
                        build_number: build_number$1,
                        duration: 0
                    });
                    var n = Date.now(),
                        {
                            data: a,
                            success: o,
                            errMsg: i
                        } = yield r._downloadJSON("https://api-mobi.soundcloud.com/tracks/" + e + "/related"), s = [];
                    if (o) {
                        var l = a.collection;
                        l && (yield l.forEach(function() {
                            var e = _asyncToGenerator((function*(e) {
                                var {
                                    data: t
                                } = yield r.extractInfoDict(e, "", "", !1);
                                t && s.push(t)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()))
                    }
                    eventTrack(EventName.EXTRACT_LAYOUT, {
                        action: o ? "success" : "failure",
                        type: "soundcloud_music",
                        display_type: "related",
                        url: t,
                        build_number: build_number$1,
                        duration: (Date.now() - n) / 1e3,
                        error_msg: i || o && "no realted songs"
                    }), finishSoundCloudNextPlay({
                        success: o,
                        data: s,
                        url: t
                    })
                } else finishSoundCloudNextPlay({
                    success: !1,
                    url: t
                })
            }))()
        }
        realExtract(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                var r = Date.now();
                if (e === t.last_extract_url && r - t.last_extract_time < 2e3 ? t.last_extract_count++ : t.last_extract_count = 0, t.last_extract_count > 2) t.last_extract_time = r;
                else {
                    eventTrack(EventName.EXTRACT, {
                        action: "start",
                        url: e,
                        no_authorization: !1,
                        build_number: build_number$1,
                        duration: 0
                    });
                    var n, a, o, i = e.match(t.validRegex),
                        [s, l, u, c, d, p] = i,
                        h = {};
                    d ? (n = t.API_V2_BASE + "tarcks/" + d, a = d, p && (h.secret_token = p)) : (a = o = l + "/" + u, c && (o += "/" + c), n = t.API_V2_BASE + "resolve?url=" + t.BASE_URL + o);
                    var {
                        success: m,
                        data: f,
                        errMsg: y,
                        errCode: v
                    } = yield t._downloadJSON(n, h), g = null;
                    if (m) {
                        var {
                            data: b,
                            errorMsg: _
                        } = yield t.extractInfoDict(f, a, c);
                        y = _, b && (g = Object.assign({}, b, {
                            webURL: e
                        }))
                    }
                    var E = "jscore";
                    if (m && ("BLOCK" === f.policy || "SNIP" === f.policy)) {
                        E = "server", m = !1, v = 401;
                        var T = yield get$1("https://api.snaptubebrowser.com/surf-extractor/video/extractor?url=" + e, {
                            method: "GET",
                            setBaseParams: !0
                        });
                        if (T.success) {
                            var S = JSON.parse(T.result);
                            if (S && S.result && 200 === S.code) {
                                var {
                                    otherId: w,
                                    title: x,
                                    thumbnail: I,
                                    duration: R,
                                    author: P,
                                    playUrl: C,
                                    protocol: N
                                } = S.result;
                                g = {
                                    webURL: e,
                                    id: w,
                                    uploader: P,
                                    title: x,
                                    duration: R,
                                    thumbnails: [{
                                        url: I
                                    }],
                                    formats: [{
                                        url: C,
                                        itag: "progressive" === N ? 100 : 0
                                    }]
                                }, m = !0, v = 0
                            } else y = S.msg
                        } else y = T.errMsg
                    }
                    t.last_extract_url = e, t.last_extract_time = Date.now(), eventTrack(EventName.EXTRACT, {
                        action: m ? "success" : "failure",
                        url: e,
                        no_authorization: !1,
                        build_number: build_number$1,
                        duration: (Date.now() - r) / 1e3,
                        extract_client_name: E,
                        error_msg: y || "errCode:" + v
                    }), sendParseResult(Website.SOUND_CLOUND, ExtractType.SINGLE, {
                        data: g,
                        url: e,
                        errorCode: v,
                        extractor_client: E,
                        success: m
                    })
                }
            }))()
        }
        extractLayout() {
            var e = this;
            return _asyncToGenerator((function*() {
                e.CLIENT_ID || (yield e.updateClientId());
                var t = yield get$1("https://api-v2.soundcloud.com/mixed-selections?variant_ids=&client_id=" + e.CLIENT_ID + "&limit=10&offset=0&linked_partitioning=1&app_version=" + e.SC_VERSION + "&app_locale=en", {
                    method: "GET"
                }), {
                    result: r
                } = t, {
                    collection: n
                } = JSON.parse(r), a = [];
                for (var o of n) {
                    var i = {},
                        {
                            items: s,
                            id: l,
                            title: u
                        } = o;
                    l.includes("soundcloud:selections:playlist") && (i = {
                        title: u,
                        content: s.collection.filter(e => e.artwork_url && e.public).map(e => ({
                            thumbnail: [{
                                url: e.artwork_url.replace("-large", "-t200x200")
                            }],
                            title: e.title,
                            subtitle: e.user.full_name,
                            url: e.uri
                        }))
                    }, a.push(i))
                }
                return {
                    type: "homepage",
                    data: [a[0]]
                }
            }))()
        }
        extractPlaylist(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                if (t.CLIENT_ID || (yield t.updateClientId()), 0 === e.indexOf("https://api.soundcloud.com/playlists/")) {
                    var r = e.match(/(\d)+/),
                        n = r ? r[0] : "",
                        a = yield get$1("https://api-v2.soundcloud.com/playlists/" + n + "?representation=full&client_id=" + t.CLIENT_ID + "&app_version=" + t.SC_VERSION + "&app_locale=en", {
                            method: "GET"
                        }), {
                            result: o
                        } = a, {
                            tracks: i,
                            title: s,
                            description: l
                        } = JSON.parse(o), u = i.filter(e => !e.duration).map(e => e.id).join(","), c = i.map(e => p(e)).filter(e => e);
                    o = (a = yield get$1("https://api-v2.soundcloud.com/tracks?ids=" + encodeURIComponent(u) + "&client_id=" + t.CLIENT_ID + "&app_version=" + t.SC_VERSION + "&app_locale=en", {
                        method: "GET"
                    })).result;
                    var d = {
                        title: s,
                        description: l,
                        thumbnail: "",
                        contents: [...c, ...JSON.parse(o).map(e => p(e))]
                    };
                    sendParseResult(Website.SOUND_CLOUND, ExtractType.PLAYLIST, {
                        data: d,
                        url: e
                    })
                }

                function p(e) {
                    var t;
                    if (!e.duration) return !1;
                    var r = Math.floor(e.duration / 1e3),
                        n = Math.floor(r / 60),
                        a = Math.floor(r % 60);
                    return {
                        webURL: e.permalink_url,
                        id: "" + e.id,
                        title: e.title,
                        author: null == (t = e.publisher_metadata) ? void 0 : t.artist,
                        lengthText: n + ":" + a,
                        thumbnails: [{
                            url: e.artwork_url
                        }]
                    }
                }
            }))()
        }
        searchTracks(e, t = 0, r = 10) {
            var n = this;
            return _asyncToGenerator((function*() {
                var a = Date.now();
                eventTrack(EventName.EXTRACT_Search, {
                    action: "start",
                    build_number: build_number$1,
                    type: "soundcloud_search_result",
                    keyword: e
                });
                var o = yield new Promise(e => {
                    snaptube.queryUserInfo(e)
                }), {
                    lang: i
                } = o, s = (null == i ? void 0 : i.split("-")[0].toLowerCase()) || "en", l = {
                    limit: r,
                    offset: t,
                    q: encodeURIComponent(e),
                    variant_ids: "",
                    app_version: n.SC_VERSION,
                    app_locale: s,
                    facet: "model"
                }, {
                    success: u,
                    data: c,
                    errMsg: d,
                    errCode: p
                } = yield n._downloadJSON("https://api-mobi.soundcloud.com/search", l), h = {
                    success: u,
                    errorMsg: d || "errCode:" + p,
                    errorCode: p,
                    data: {
                        result: [],
                        total: 0,
                        nextOffset: t
                    }
                };
                if (u) {
                    var m = c.collection;
                    if (m) {
                        var f = [];
                        yield m.forEach(function() {
                            var e = _asyncToGenerator((function*(e) {
                                var {
                                    data: t
                                } = yield n.extractInfoDict(e, "", "", !1);
                                t && f.push(t)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), f = f.filter(e => !e.kind || "track" === e.kind), h.data.result = f, h.data.nextOffset = Number(t) + m.length
                    }
                    h.data.total = c.total_results
                }
                return eventTrack(EventName.EXTRACT_Search, {
                    action: u ? "success" : "failure",
                    build_number: build_number$1,
                    type: "soundcloud_search_result",
                    keyword: e,
                    error_msg: d || "errCode:" + p,
                    duration: (Date.now() - a) / 1e3
                }), finishSoundCloudSearchResult(h), h
            }))()
        }
    }
    class VimeoBaseInfoExtractor extends InfoExtractor {
        constructor() {
            super(...arguments), this._HEADERS = {
                "Content-Type": "application/json",
                Origin: "https://www.dailymotion.com"
            }
        }
    }
    class VimeoIE extends VimeoBaseInfoExtractor {
        constructor() {
            super(...arguments), this.IE_NAME = "vimeo", this._VAILD_URL_ = /https?:\/\/(?:(?:www|player)\.)?vimeo(?:pro)?\.com\/(?!(?:channels|album|showcase)\/[^/?#]+\/?(?:$|[?#])|[^/]+\/review\/|ondemand\/)(?:.*?\/)?(?:(?:play_redirect_hls|moogaloop\.swf)\?clip_id=)?(?:videos?\/)?([0-9]+)(?:\/([\da-f]{10}))?\/?(?:[?&].*)?(?:[#].*)?$/i, this.origin = "https://vimeo.com"
        }
        realExtract(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                var r = e.match(t._VAILD_URL_),
                    n = {
                        data: {},
                        errorMsg: ""
                    };
                if (!r) return n.errorMsg = "url error", n;
                var a = r[1],
                    o = yield t.downloadWebpage(e);
                if ("" === o) return n.errorMsg = "download webpage error", n;
                var i = o.match(/vimeo\.(?:clip|vod_title)_page_config\s*=\s*({.+?});/);
                if (i) {
                    var s = JSON.parse(i[1]),
                        l = {
                            isLive: !1,
                            title: "",
                            formats: [],
                            thumbnails: [],
                            description: "",
                            category: [],
                            duration: 0,
                            viewCount: 0,
                            keywords: [],
                            averageRating: 0,
                            uploader: "",
                            channelID: 0,
                            recommendInfo: [],
                            avatar: [],
                            videoId: a,
                            webURL: e
                        };
                    l.description = s.clip.description;
                    var u = s.player.config_url,
                        {
                            success: c,
                            data: d,
                            errMsg: p
                        } = yield t.downloadJSON(u);
                    if (!c) return n.errorMsg = p || "", n;
                    var h = d.video;
                    for (var m in l.title = h.title, l.uploader = h.owner.name, l.duration = h.duration, h.thumbs) l.thumbnails.push({
                        url: h.thumbs[m],
                        width: Number(m),
                        height: Number(m)
                    });
                    for (var f = d.request.files.progressive, y = 0; y < f.length; y++) {
                        var v = f[y];
                        "[object String]" !== Object.prototype.toString.call(null == v ? void 0 : v.profile) && l.formats.push({
                            filesize: 0,
                            width: null == v ? void 0 : v.width,
                            height: null == v ? void 0 : v.height,
                            type: v.mime,
                            quality: v.quality,
                            itag: 0,
                            fps: null == v ? void 0 : v.fps,
                            bitrate: 0,
                            url: v.url,
                            ext: v.mime
                        })
                    }
                    n.data = l
                }
                return n
            }))()
        }
    }

    function _isPlaceholder(e) {
        return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"]
    }

    function _curry1(e) {
        return function t(r) {
            return 0 === arguments.length || _isPlaceholder(r) ? t : e.apply(this, arguments)
        }
    }

    function _curry2(e) {
        return function t(r, n) {
            switch (arguments.length) {
                case 0:
                    return t;
                case 1:
                    return _isPlaceholder(r) ? t : _curry1((function(t) {
                        return e(r, t)
                    }));
                default:
                    return _isPlaceholder(r) && _isPlaceholder(n) ? t : _isPlaceholder(r) ? _curry1((function(t) {
                        return e(t, n)
                    })) : _isPlaceholder(n) ? _curry1((function(t) {
                        return e(r, t)
                    })) : e(r, n)
            }
        }
    }

    function _isString(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }
    var _isInteger = Number.isInteger || function(e) {
            return e << 0 === e
        },
        nth = _curry2((function(e, t) {
            var r = e < 0 ? t.length + e : e;
            return _isString(t) ? t.charAt(r) : t[r]
        })),
        paths = _curry2((function(e, t) {
            return e.map((function(e) {
                for (var r, n = t, a = 0; a < e.length;) {
                    if (null == n) return;
                    n = _isInteger(r = e[a]) ? nth(r, n) : n[r], a += 1
                }
                return n
            }))
        })),
        path$1 = _curry2((function(e, t) {
            return paths([e], t)[0]
        }));
    class FacebookBaseInfoExtractor extends InfoExtractor {
        constructor() {
            super(...arguments), this._HEADERS = {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
                "sec-ch-prefers-color-scheme": "dark",
                "sec-ch-ua": 'Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "macOS",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1"
            }
        }
        getFacebookCookies() {
            return _asyncToGenerator((function*() {
                var {
                    raw: e
                } = yield getCookie("facebook.com");
                return e
            }))()
        }
        getWebpage(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                var r = yield t.getFacebookCookies();
                return r && (t._HEADERS.Cookie = r), yield get$1(e, {
                    method: "GET",
                    extraHeaders: Object.assign({}, t._HEADERS)
                })
            }))()
        }
    }
    class FacebookIE extends FacebookBaseInfoExtractor {
        constructor() {
            super(...arguments), this._VAILD_URL_ = /(?:https?:\/\/(?:[\w-]+\.)?(?:facebook\.com|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd\.onion)\/(?:[^#]*?\#!\/)?(?:(?:video\/video\.php|photo\.php|video\.php|video\/embed|story\.php|watch(?:\/live)?\/?)\?(?:.*?)(?:v|video_id|story_fbid)=|[^/]+\/videos\/(?:[^/]+\/)?|[^/]+\/posts\/|groups\/[^/]+\/permalink\/|watchparty\/)|facebook:)([0-9]+)/, this._LOGIN_URL = /id="loginbutton"/, this._PAGE_ERROR = /class="[^"]*uiInterstitialContent[^"]*"><div>(.*?)<\/div>/, this._NO_PERMISSION = /<img.*src=".*permissions_gray_wash.svg".*>/
        }
        serverExtract(e) {
            return _asyncToGenerator((function*() {
                var t = {
                        success: !1,
                        data: {},
                        errorMsg: "",
                        client: "server"
                    },
                    r = yield get$1("https://api.snaptubebrowser.com/surf-extractor/video/extractor?url=" + e, {
                        method: "GET",
                        setBaseParams: !0
                    });
                if (r.success) {
                    var n = JSON.parse(r.result);
                    if (n && n.result && 200 === n.code) {
                        var {
                            otherId: a,
                            title: o,
                            thumbnail: i,
                            duration: s,
                            author: l,
                            playUrl: u,
                            protocol: c
                        } = n.result;
                        t.data = {
                            webURL: e,
                            id: a,
                            uploader: l,
                            title: o,
                            duration: s,
                            thumbnails: [{
                                url: i
                            }],
                            formats: [{
                                url: u,
                                itag: "progressive" === c ? 100 : 0
                            }]
                        }, t.success = !0
                    } else t.errorMsg = n.msg
                } else t.errorMsg = r.errMsg;
                return t
            }))()
        }
        realExtract(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                var r = e.match(t._VAILD_URL_),
                    n = {
                        success: !1,
                        data: {},
                        errorMsg: "",
                        client: "jscore"
                    };
                if (!r) return n.errorMsg = "url error", n;
                var a = r[1],
                    {
                        success: o,
                        result: i
                    } = yield t.getWebpage(e.replace("://m.facebook.com/", "://www.facebook.com/"));
                if (!o || "" === i) return yield t.serverExtract(e);
                o = !1;
                var s = i.match(/handleWithCustomApplyEach\([^,]+,\s*({.*?"(?:dash_manifest|playable_url(?:_quality_hd)?)"\s*:\s*"[^"]+".*?})\);/);
                if (s && s.length > 1) {
                    var l, u = JSON.parse(s[1]),
                        c = ((null == u ? void 0 : u.require) || []).find(e => "RelayPrefetchedStreamCache" === e[0]);
                    try {
                        l = c[3][1].__bbox.result.data.video.story.attachments[0].media
                    } catch (e) {}
                    if (l) {
                        var d = {
                            isLive: !1,
                            title: "",
                            formats: [{
                                url: l.playable_url_quality_hd || l.playable_url
                            }],
                            thumbnails: [{
                                url: l.preferred_thumbnail.image.uri
                            }],
                            description: "",
                            category: [],
                            duration: Math.ceil(l.playable_duration_in_ms / 1e3),
                            viewCount: 0,
                            keywords: [],
                            averageRating: 0,
                            uploader: "",
                            channelID: 0,
                            recommendInfo: [],
                            avatar: [],
                            videoId: l.id || l.videoId || a,
                            webURL: e
                        };
                        n.data = d, o = !0
                    } else n.errorMsg = "no stream data "
                }
                if (!o) {
                    var p = i.match(/"playable_url":"([^,]*)",/);
                    if (p && p[1]) {
                        var h = i.match(/"playable_duration_in_ms":([^,]*),/),
                            m = i.match(/"preferred_thumbnail":{"image":{"uri":"([^,]*)"/),
                            f = {
                                isLive: !1,
                                title: "",
                                formats: [{
                                    url: p[1].replace(/\\/g, "")
                                }],
                                thumbnails: [{
                                    url: m ? m[1].replace(/\\/g, "") : ""
                                }],
                                description: "",
                                category: [],
                                duration: h ? Math.ceil(Number(h) / 1e3) : 0,
                                viewCount: 0,
                                keywords: [],
                                averageRating: 0,
                                uploader: "",
                                channelID: 0,
                                recommendInfo: [],
                                avatar: [],
                                videoId: a,
                                webURL: e
                            };
                        n.data = f, o = !0
                    } else {
                        if (!i.match(t._LOGIN_URL)) return yield t.serverExtract(e);
                        n.errorMsg = "not login"
                    }
                }
                return n.success = o, n
            }))()
        }
        extractMeta(e) {
            return _asyncToGenerator((function*() {}))()
        }
        extractVideoData(e) {
            return _asyncToGenerator((function*() {
                var t = [];
                for (var r of e)
                    if ("VideoConfig" === path$1([1, 0], r)) {
                        var n = r[2][0];
                        n.video_id && t.push(n.videoData)
                    } return t
            }))()
        }
    }
    class TiwtterExtractor extends InfoExtractor {
        constructor() {
            super(...arguments), this._BASE_REGEX = "https?://(?:(?:www|m(?:obile)?).)?twitter.com/", this._API_BASE = "https://api.twitter.com/1.1/", this._GUEST_TOKEN = ""
        }
        _callApi(e, t) {
            var r = this;
            return _asyncToGenerator((function*() {
                var n = {
                    Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAPYXBAAAAAAACLXUNDekMxqa8h%2F40K4moUkGsoc%3DTYfbDKbT3jJPCEVnMYqilB28NHfOPqkca3qaAxGfsyKCs0wRbw",
                    "x-guest-token": ""
                };
                if (!r._GUEST_TOKEN) {
                    var {
                        success: a,
                        data: o,
                        errMsg: i
                    } = yield r._downloadJSON(r._API_BASE + "guest/activate.json", "POST", n);
                    if (a && (r._GUEST_TOKEN = o.guest_token), !r._GUEST_TOKEN) return {
                        success: !1,
                        errMsg: i || "fetch guest_token fail"
                    }
                }
                n["x-guest-token"] = r._GUEST_TOKEN;
                var s = "";
                return t && Object.keys(t).forEach(e => {
                    s += (s ? "&" : "?") + e + "=" + t[e]
                }), yield r._downloadJSON(r._API_BASE + e + s, "GET", n)
            }))()
        }
        _downloadJSON(e, t, r) {
            return _asyncToGenerator((function*() {
                var {
                    success: n,
                    result: a,
                    errMsg: o,
                    errCode: i
                } = yield get$1(e, {
                    method: t || "GET",
                    extraHeaders: r,
                    withoutCookie: !0
                });
                return n ? {
                    success: n,
                    data: JSON.parse(a)
                } : {
                    success: n,
                    errMsg: o,
                    errCode: i
                }
            }))()
        }
        _getStatusId(e) {
            var t = new RegExp(this._BASE_REGEX + "(?:(?:i/web|[^/]+)/status|statuses)/(\\d+)").exec(e);
            return !(!t || !t[1]) && t[1]
        }
        real_extract(e) {
            var t = this;
            return _asyncToGenerator((function*() {
                var r, n, a = t._getStatusId(e);
                if (!a) return {
                    success: !1,
                    errMsg: "invaild url"
                };
                var {
                    success: o,
                    data: i,
                    errMsg: s
                } = yield t._callApi("statuses/show/" + a + ".json", {
                    cards_platform: "Web-12",
                    include_cards: 1,
                    include_reply_count: 1,
                    include_user_entities: 0,
                    tweet_mode: "extended"
                });
                if (!o || !i) return {
                    success: !1,
                    errMsg: s
                };
                var l = i.full_text.replace("\n", ""),
                    u = l.replace(/\s+https?:\/\/[^ ]+/, ""),
                    c = null == (r = i.user) ? void 0 : r.name,
                    d = [],
                    p = null == (n = i.extended_entities) ? void 0 : n.media;
                if (p) p.forEach(t => {
                    var r = {
                            id: String(t.id || a),
                            webURL: e,
                            title: u,
                            description: l,
                            uploader: c,
                            duration: 0,
                            formats: [],
                            thumbnails: []
                        },
                        n = [],
                        o = [],
                        i = t.media_url_https || t.media_url;
                    if (o.push({
                            url: i
                        }), "photo" !== t.type) {
                        var s = t.video_info;
                        s && s.variants && (r.duration = s.duration_millis / 1e3, s.variants.forEach(e => {
                            var t = e.url;
                            t && -1 == t.indexOf("m3u8") && n.push({
                                url: t,
                                type: e.content_type || "video/mp4"
                            })
                        }))
                    } else n.push({
                        url: i,
                        mime: "img",
                        type: "img"
                    });
                    r.formats = n, r.thumbnails = o, d.push(r)
                });
                else if (i.card) {
                    var h = i.card,
                        {
                            binding_values: m,
                            name: f
                        } = h || {};
                    if (m && "summary_large_image" === f) {
                        var {
                            thumbnail_image_small: y,
                            summary_photo_image_original: v
                        } = m;
                        if (y && v) {
                            var g, b, _ = {
                                id: a,
                                webURL: e,
                                title: u,
                                description: l,
                                uploader: c,
                                duration: 0,
                                formats: [],
                                thumbnails: []
                            };
                            _.formats = [{
                                url: null == v || null == (g = v.image_value) ? void 0 : g.url,
                                mime: "img",
                                type: "img"
                            }], _.thumbnails = [{
                                url: null == y || null == (b = y.image_value) ? void 0 : b.url
                            }], d.push(_)
                        }
                    }
                } else if (i.entities) {
                    var {
                        urls: E
                    } = i.entities;
                    if (E) {
                        var T, S = null == (T = E[0]) ? void 0 : T.expanded_url;
                        if (S && t._getStatusId(S)) return yield t.real_extract(S)
                    }
                }
                return {
                    success: o,
                    data: d
                }
            }))()
        }
    }
    var soundcloudIE = new SoundcloudIE,
        vimeoIE = new VimeoIE,
        facebookIE = new FacebookIE,
        TiwtterIE = new TiwtterExtractor,
        build_number$2 = parseInt("47", 10),
        youTubeChannelMusicResponse, sendParseResult$1 = function() {
            var e = _asyncToGenerator((function*(e, t) {
                var r = "videoDetail" === t,
                    {
                        success: n,
                        url: a,
                        data: o,
                        errorMSG: i,
                        videoId: s,
                        source: l,
                        duration: u,
                        mode: c
                    } = e,
                    d = o || {},
                    {
                        htmlResponse: p
                    } = d,
                    h = _objectWithoutPropertiesLoose(d, ["htmlResponse"]),
                    m = e.errorCode,
                    f = (i || "").includes("__notRetry"),
                    y = i || "";
                f && (y = i.split("@")[1]);
                var v = {
                        success: n,
                        errorCode: m,
                        url: a,
                        data: h,
                        videoId: s,
                        notRetry: f,
                        noAuthorization: !1
                    },
                    g = {
                        build_number: build_number$2,
                        action: n ? "success" : "failure",
                        url: a,
                        error_msg: y,
                        no_authorization: !1,
                        source: l
                    };
                if (null != l && l.includes("@@v=FLGCGc7sAUw") && (v.url = "https://www.youtube.com/watch?v=12345678"), n) try {
                    var {
                        errCode: b
                    } = yield get$1(r ? h.formats[0].url : h[0].url, {
                        method: "HEAD"
                    });
                    200 !== b && (v.noAuthorization = !0, g.action = "failure", g.error_msg = "no authorization", p && Math.random() < .1 && upload({
                        content: p + JSON.stringify(h),
                        mimetype: "text/html",
                        filename: "response"
                    }))
                } catch (e) {}
                if (u && (g.duration = u), "api" === c && v.noAuthorization)
                    if (yield getRemoteConfig("useBackupModeRetryOnce", !1)) try {
                        backupExtractVideoDetail(v.url, g.source)
                    } catch (e) {
                        snaptube.finishExtractor(v), eventTrack(EventName.EXTRACT, g)
                    } else snaptube.finishExtractor(v), eventTrack(EventName.EXTRACT, g);
                    else snaptube.finishExtractor(v), eventTrack(EventName.EXTRACT, g)
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }();

    function sendError(e, t, r, n) {
        var a = {
            success: !1,
            url: e,
            errorMSG: t,
            source: r
        };
        "is live" === t && (a.errorCode = 101), sendParseResult$1(a, n)
    }

    function extract(e) {
        return _extract.apply(this, arguments)
    }

    function _extract() {
        return (_extract = _asyncToGenerator((function*(e) {
            new YouTube({
                url: e,
                onCompleteCallback(t, r) {
                    if (Array.isArray(t)) {
                        var n = t.map(e => ({
                            url: e.url,
                            qualityLabel: e.quality
                        }));
                        0 === n.length ? sendError(e, ExtractErrorMsg.URL_EMPTY) : sendParseResult$1({
                            success: !0,
                            data: n,
                            url: e,
                            videoId: r,
                            errorMSG: ExtractErrorMsg.DEFAULT
                        })
                    } else sendError(e, ExtractErrorMsg.UNKNOW)
                },
                onError(t) {
                    sendError(e, (null == t ? void 0 : t.message) || ExtractErrorMsg.UNKNOW)
                },
                onNetworkError(t) {
                    sendParseResult$1({
                        url: e,
                        success: !1,
                        videoId: t.videoId,
                        errorMSG: t.errorMSG,
                        errorCode: t.errCode
                    })
                }
            })
        }))).apply(this, arguments)
    }

    function backupExtractVideoDetail(e, t, r) {
        return _backupExtractVideoDetail.apply(this, arguments)
    }

    function _backupExtractVideoDetail() {
        return (_backupExtractVideoDetail = _asyncToGenerator((function*(e, t, r) {
            var n = Date.now();
            eventTrack(EventName.EXTRACT, {
                action: "start",
                url: e,
                no_authorization: !1,
                build_number: build_number$2,
                source: t,
                duration: 0
            }), new YouTube({
                url: e,
                parseDetailInfo: !0,
                simpleMode: r,
                onCompleteCallback(r, a) {
                    var o = r;
                    o.webURL = e, sendParseResult$1({
                        success: !0,
                        data: o,
                        url: e,
                        videoId: a,
                        errorMSG: ExtractErrorMsg.DEFAULT,
                        source: t,
                        duration: (Date.now() - n) / 1e3
                    }, "videoDetail")
                },
                onError(r) {
                    sendError(e, (null == r ? void 0 : r.message) || ExtractErrorMsg.UNKNOW, t, "videoDetail")
                },
                onNetworkError(r) {
                    sendParseResult$1({
                        url: e,
                        source: t,
                        success: !1,
                        videoId: r.videoId,
                        errorMSG: r.errorMSG,
                        errorCode: r.errCode
                    }, "videoDetail")
                }
            })
        }))).apply(this, arguments)
    }

    function sendPlaylistExtractResult(e, t) {
        var r = e,
            n = !0;
        t && (n = t.sendToNormal), n && snaptube.finishExtractorPlaylist(r);
        var a = {
            action: r.success ? "success" : "failure",
            build_number: build_number$2,
            duration: r.spendTime,
            type: e.type,
            url: e.url
        };
        r.errMsg && (a.error_msg = r.errMsg), trackExtractLayout(a)
    }

    function extractYouTubePlaylist(e) {
        return _extractYouTubePlaylist.apply(this, arguments)
    }

    function _extractYouTubePlaylist() {
        return (_extractYouTubePlaylist = _asyncToGenerator((function*(e) {
            trackExtractLayout({
                action: "start",
                build_number: build_number$2,
                duration: 0,
                type: "youtube_playlist",
                url: e
            });
            var t = Date.now();
            try {
                sendPlaylistExtractResult({
                    data: yield getVideoFromPlayList(e),
                    success: !0,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_playlist"
                })
            } catch (r) {
                sendPlaylistExtractResult({
                    data: {},
                    success: !1,
                    spendTime: (Date.now() - t) / 1e3,
                    url: e,
                    errMsg: (null == r ? void 0 : r.message) || "unknow error",
                    type: "youtube_playlist"
                })
            }
        }))).apply(this, arguments)
    }

    function extractYouTubeMusicPlaylist(e) {
        return _extractYouTubeMusicPlaylist.apply(this, arguments)
    }

    function _extractYouTubeMusicPlaylist() {
        return (_extractYouTubeMusicPlaylist = _asyncToGenerator((function*(e) {
            trackExtractLayout({
                action: "start",
                build_number: build_number$2,
                duration: 0,
                type: "youtube_music_playlist",
                url: e
            });
            var t = Date.now();
            try {
                sendPlaylistExtractResult({
                    data: yield getYouTubeMusicPlayList(e),
                    success: !0,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_music_playlist"
                })
            } catch (r) {
                sendPlaylistExtractResult({
                    data: {},
                    success: !1,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_music_playlist",
                    errMsg: (null == r ? void 0 : r.message) || "unknow error"
                })
            }
        }))).apply(this, arguments)
    }

    function extractYouTubeMusicChannelPlaylist(e) {
        return _extractYouTubeMusicChannelPlaylist.apply(this, arguments)
    }

    function _extractYouTubeMusicChannelPlaylist() {
        return (_extractYouTubeMusicChannelPlaylist = _asyncToGenerator((function*(e) {
            trackExtractLayout({
                action: "start",
                build_number: build_number$2,
                duration: 0,
                type: "youtube_music_channel_playlist",
                url: e
            });
            var t = Date.now();
            try {
                sendPlaylistExtractResult({
                    data: yield getYouTubeMusicChannelPlayList(e),
                    success: !0,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_music_channel_playlist"
                })
            } catch (r) {
                sendPlaylistExtractResult({
                    data: {},
                    success: !1,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_music_channel_playlist",
                    errMsg: (null == r ? void 0 : r.message) || "unknow error"
                })
            }
        }))).apply(this, arguments)
    }

    function extractYouTubeChannelMusicLayout() {
        return _extractYouTubeChannelMusicLayout.apply(this, arguments)
    }

    function _extractYouTubeChannelMusicLayout() {
        return (_extractYouTubeChannelMusicLayout = _asyncToGenerator((function*() {
            trackExtractLayout({
                action: "start",
                build_number: build_number$2,
                duration: 0,
                type: "youtube_channel_music_playlist",
                url: ""
            });
            var e = Date.now();
            try {
                var t = yield getYouTubeChannelMusicLayout();
                return sendPlaylistExtractResult({
                    data: t,
                    success: !0,
                    url: "",
                    spendTime: (Date.now() - e) / 1e3,
                    type: "youtube_channel_music_playlist"
                }, {
                    sendToNormal: !1
                }), t
            } catch (t) {
                return sendPlaylistExtractResult({
                    data: {},
                    success: !1,
                    url: "",
                    spendTime: (Date.now() - e) / 1e3,
                    type: "youtube_channel_music_playlist",
                    errMsg: (null == t ? void 0 : t.message) || "unknow error"
                }, {
                    sendToNormal: !1
                }), []
            }
        }))).apply(this, arguments)
    }

    function trackExtractLayout(e) {
        eventTrack(EventName.EXTRACT_LAYOUT, e)
    }

    function extractYouTubeMusicData(e, t) {
        return _extractYouTubeMusicData.apply(this, arguments)
    }

    function _extractYouTubeMusicData() {
        return (_extractYouTubeMusicData = _asyncToGenerator((function*(e, t) {
            trackExtractLayout({
                action: "start",
                build_number: build_number$2,
                duration: 0,
                type: "youtube_music_layout",
                display_type: e
            });
            var r = Date.now();
            try {
                var n;
                return n = e === MusicPagePosition.CHARTS && null != t && t.countryCode ? yield(new Music).getChartsWithCountry(t.countryCode): yield(new Music).get(e), trackExtractLayout({
                    action: "success",
                    duration: (Date.now() - r) / 1e3,
                    build_number: build_number$2,
                    display_type: e,
                    type: "youtube_music_layout",
                    error_msg: "placeholder"
                }), {
                    type: e,
                    data: n
                }
            } catch (t) {
                return trackExtractLayout({
                    action: "failure",
                    duration: (Date.now() - r) / 1e3,
                    build_number: build_number$2,
                    display_type: e,
                    error_msg: (null == t ? void 0 : t.message) || "unknow error",
                    type: "youtube_music_layout"
                }), {
                    type: e,
                    data: []
                }
            }
        }))).apply(this, arguments)
    }

    function onerror(...e) {}

    function sendYouTubeMusicLayout(e, t) {
        "homePage" === e ? snaptube.finishExtractorHomePage(t) : "moodsAndGeners" === e ? snaptube.finishExtractorGeners(t) : snaptube.finishExtractorCharts(t)
    }

    function getHomePage() {
        return _getHomePage.apply(this, arguments)
    }

    function _getHomePage() {
        return (_getHomePage = _asyncToGenerator((function*() {
            var e = [];
            if (yield isYoutubeMusicSupportRegion()) try {
                e = yield(new Music).getPositions([MusicPagePosition.NEW_VIDEOS])
            } catch (e) {} else try {
                youTubeChannelMusicResponse || (youTubeChannelMusicResponse = yield extractYouTubeChannelMusicLayout()), e = [{
                    type: MusicPagePosition.HOME_PAGE,
                    data: [youTubeChannelMusicResponse[0]]
                }, {
                    type: MusicPagePosition.NEW_VIDEOS,
                    data: [youTubeChannelMusicResponse[1]]
                }]
            } catch (e) {}
            sendYouTubeMusicLayout("homePage", e)
        }))).apply(this, arguments)
    }

    function getHomePage1() {
        return _getHomePage2.apply(this, arguments)
    }

    function _getHomePage2() {
        return (_getHomePage2 = _asyncToGenerator((function*() {
            var e = [];
            try {
                e = yield(new Music).getPositions([MusicPagePosition.NEW_VIDEOS])
            } catch (e) {}
            sendYouTubeMusicLayout("homePage", e)
        }))).apply(this, arguments)
    }

    function getCharts(e) {
        return _getCharts.apply(this, arguments)
    }

    function _getCharts() {
        return (_getCharts = _asyncToGenerator((function*(e) {
            sendYouTubeMusicLayout("chart", yield extractYouTubeMusicData(MusicPagePosition.CHARTS, {
                countryCode: e
            }))
        }))).apply(this, arguments)
    }

    function getMoodsAndGeners() {
        return _getMoodsAndGeners.apply(this, arguments)
    }

    function _getMoodsAndGeners() {
        return (_getMoodsAndGeners = _asyncToGenerator((function*() {
            var e = [];
            if (yield isYoutubeMusicSupportRegion()) e = yield extractYouTubeMusicData(MusicPagePosition.MOODS_AND_GENRES);
            else try {
                youTubeChannelMusicResponse || (youTubeChannelMusicResponse = yield extractYouTubeChannelMusicLayout());
                var t = youTubeChannelMusicResponse.reduce((e, t) => {
                    var {
                        title: r,
                        content: n
                    } = t;
                    return [...e, {
                        buttonText: r,
                        color: [123, 62, 219, "1.000"],
                        content: [{
                            title: "xx",
                            content: n
                        }]
                    }]
                }, []);
                e = {
                    type: MusicPagePosition.MOODS_AND_GENRES,
                    data: [{
                        title: "xxx",
                        content: t
                    }]
                }
            } catch (e) {}
            sendYouTubeMusicLayout("moodsAndGeners", e)
        }))).apply(this, arguments)
    }

    function extractVideoDetail(e, t, r) {
        return _extractVideoDetail.apply(this, arguments)
    }

    function _extractVideoDetail() {
        return (_extractVideoDetail = _asyncToGenerator((function*(e, t, r) {
            var n = e,
                a = t;
            if (e.includes("v=12345678") && (n = "https://www.youtube.com/watch?v=FLGCGc7sAUw", a = t + "@@v=FLGCGc7sAUw"), yield getRemoteConfig("use_api", !0)) {
                var o = Date.now();
                eventTrack(EventName.EXTRACT, {
                    action: "start",
                    url: n,
                    no_authorization: !1,
                    build_number: build_number$2,
                    source: a,
                    duration: 0
                });
                try {
                    var i = yield new Promise(e => {
                        snaptube.queryUserInfo(e)
                    }), s = yield YouTubeApi.queryVideoInfo(n, r, i);
                    s.webURL = n, sendParseResult$1({
                        success: !0,
                        data: s,
                        url: n,
                        videoId: s.videoId,
                        errorMSG: ExtractErrorMsg.DEFAULT,
                        source: a,
                        duration: (Date.now() - o) / 1e3,
                        mode: "api"
                    }, "videoDetail")
                } catch (e) {
                    if (e instanceof BackupExtractError) return void backupExtractVideoDetail(n, a);
                    sendParseResult$1({
                        url: n,
                        source: a,
                        success: !1,
                        errorMSG: e.message,
                        duration: (Date.now() - o) / 1e3
                    }, "videoDetail")
                }
            } else backupExtractVideoDetail(n, a, r)
        }))).apply(this, arguments)
    }

    function extractVimeoVideoDetail(e) {
        return _extractVimeoVideoDetail.apply(this, arguments)
    }

    function _extractVimeoVideoDetail() {
        return (_extractVimeoVideoDetail = _asyncToGenerator((function*(e, t = "vimeo") {
            var r = {
                    success: !0,
                    errorCode: null,
                    url: e,
                    data: {},
                    videoId: "",
                    notRetry: !1,
                    noAuthorization: !1
                },
                {
                    data: n,
                    errorMsg: a
                } = yield vimeoIE.realExtract(e);
            a ? (r.success = !1, r.errorCode = 100) : (r.videoId = null == n ? void 0 : n.videoId, r.data = n), snaptube.finishExtractor(r)
        }))).apply(this, arguments)
    }

    function extractFacebookVideoDetail(e) {
        return _extractFacebookVideoDetail.apply(this, arguments)
    }

    function _extractFacebookVideoDetail() {
        return (_extractFacebookVideoDetail = _asyncToGenerator((function*(e, t = "facebook") {
            var r = {
                    success: !0,
                    errorCode: null,
                    url: e,
                    data: {},
                    videoId: "",
                    notRetry: !1,
                    noAuthorization: !1
                },
                n = Date.now();
            eventTrack(EventName.EXTRACT, {
                action: "start",
                url: e,
                no_authorization: !1,
                build_number: build_number$2,
                duration: 0
            });
            var {
                data: a,
                errorMsg: o,
                success: i,
                client: s
            } = yield facebookIE.realExtract(e);
            i ? (r.videoId = null == a ? void 0 : a.videoId, r.data = a) : (r.errorCode = "not login" === o ? 403 : 100, r.success = !1), eventTrack(EventName.EXTRACT, {
                action: r.success ? "success" : "failure",
                url: e,
                no_authorization: !1,
                build_number: build_number$2,
                duration: (Date.now() - n) / 1e3,
                error_msg: o,
                extract_client_name: s
            }), snaptube.finishExtractor(r)
        }))).apply(this, arguments)
    }

    function extractTwitterDetail(e) {
        return _extractTwitterDetail.apply(this, arguments)
    }

    function _extractTwitterDetail() {
        return (_extractTwitterDetail = _asyncToGenerator((function*(e) {
            var t = {
                    success: !0,
                    errorCode: 0,
                    errorMsg: "",
                    url: e,
                    data: {}
                },
                {
                    success: r,
                    data: n,
                    errMsg: a
                } = yield TiwtterIE.real_extract(e);
            r ? t.data = n : (t.success = !1, t.errorCode = 100, t.errorMsg = a), snaptube.finishExtractorMediaInfo(t)
        }))).apply(this, arguments)
    }

    function extractTutorialPlaylist() {
        return _extractTutorialPlaylist.apply(this, arguments)
    }

    function _extractTutorialPlaylist() {
        return (_extractTutorialPlaylist = _asyncToGenerator((function*() {
            var e = "https://www.snaptubebrowser.com/";
            snaptube.finishTutorialExtractorPlaylist({
                data: {
                    title: "",
                    description: "",
                    thumbnail: [],
                    contents: [{
                        videoId: "1061738029",
                        url: e + "1061738029.mp3",
                        thumbnails: [{
                            url: "https://i1.sndcdn.com/artworks-hrOJcTbhMac6-0-t500x500.jpg"
                        }],
                        title: "Bad Bunny - Yonaguni",
                        lengthText: "00:30",
                        author: "Bad-Bunny",
                        webURL: "https://soundcloud.com/badbunny15/bad-bunny-yonaguni"
                    }, {
                        videoId: "1088806480",
                        url: e + "1088806480.mp3",
                        thumbnails: [{
                            url: "https://i1.sndcdn.com/artworks-07HaFg7f5x0M3Ptk-mOupig-t500x500.jpg"
                        }],
                        title: "Paani Paani",
                        lengthText: "02:58",
                        author: "Paani Paani",
                        webURL: "https://soundcloud.com/mistahchaotic/paani-paani"
                    }, {
                        videoId: "1096509790",
                        url: e + "1096509790.mp3",
                        thumbnails: [{
                            url: "https://i1.sndcdn.com/artworks-NHr5YSLmKDNf8sHT-eI0uzw-t500x500.jpg"
                        }],
                        title: "Permission To Dance - BTS (Hậu Nguyễn Remix)",
                        lengthText: "03:15",
                        author: "BTS",
                        webURL: "https://soundcloud.com/lyrics-of-edm/permission-to-dance-bts-hau-nguyen-remix"
                    }, {
                        videoId: "1099069351",
                        url: e + "1099069351.mp3",
                        thumbnails: [{
                            url: "https://i1.sndcdn.com/artworks-ONDnliGRzG1w8PqH-QDtsYA-t500x500.jpg"
                        }],
                        title: "Volví ft. Aventura",
                        lengthText: "03:50",
                        author: "Volví ft. Aventura",
                        webURL: "https://soundcloud.com/badbunny115/volvi-ft-aventura"
                    }, {
                        videoId: "1107535432",
                        url: e + "1107535432.mp3",
                        thumbnails: [{
                            url: "https://i1.sndcdn.com/artworks-OkaAvDYLJ1LS-0-t500x500.jpg"
                        }],
                        title: "Bachpan Ka Pyaar",
                        lengthText: "00:30",
                        author: "Bachpan Ka Pyaar",
                        webURL: "https://soundcloud.com/badrisingh/bachpan-ka-pyaar"
                    }]
                },
                success: !0,
                url: ""
            })
        }))).apply(this, arguments)
    }

    function extractYtbChannel() {
        return _extractYtbChannel.apply(this, arguments)
    }

    function _extractYtbChannel() {
        return (_extractYtbChannel = _asyncToGenerator((function*() {
            var e = yield YouTubeApi.fetchChannelID();
            snaptube.finishExtractorYTBChannel(e)
        }))).apply(this, arguments)
    }
    console.log("version: " + build_number$2 + " build_time: 2022-05-18 14:55:11"), console.trace(), exports.TiwtterIE = TiwtterIE, exports.YouTubeApi = YouTubeApi, exports.backupExtractVideoDetail = backupExtractVideoDetail, exports.extract = extract, exports.extractFacebookVideoDetail = extractFacebookVideoDetail, exports.extractTutorialPlaylist = extractTutorialPlaylist, exports.extractTwitterDetail = extractTwitterDetail, exports.extractVideoDetail = extractVideoDetail, exports.extractVimeoVideoDetail = extractVimeoVideoDetail, exports.extractYouTubeChannelMusicLayout = extractYouTubeChannelMusicLayout, exports.extractYouTubeMusicChannelPlaylist = extractYouTubeMusicChannelPlaylist, exports.extractYouTubeMusicData = extractYouTubeMusicData, exports.extractYouTubeMusicPlaylist = extractYouTubeMusicPlaylist, exports.extractYouTubePlaylist = extractYouTubePlaylist, exports.extractYtbChannel = extractYtbChannel, exports.getCharts = getCharts, exports.getHomePage = getHomePage, exports.getHomePage1 = getHomePage1, exports.getMoodsAndGeners = getMoodsAndGeners, exports.onerror = onerror, exports.search = search, exports.soundcloudIE = soundcloudIE, Object.defineProperty(exports, "__esModule", {
        value: !0
    })
}));
//# sourceMappingURL=extractor.umd.production.min.js.map

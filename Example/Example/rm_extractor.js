! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("fs"), require("got")) : "function" == typeof define && define.amd ? define(["exports", "fs", "got"], t) : t((e = e || self).extractor = {}, e.fs, e.got)
}(this, function(exports, fs, got) {
    "use strict";

    function asyncGeneratorStep(e, t, r, n, o, a, i) {
        try {
            var s = e[a](i),
                l = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(l) : Promise.resolve(l).then(n, o)
    }

    function _asyncToGenerator(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise(function(n, o) {
                var a = e.apply(t, r);

                function i(e) {
                    asyncGeneratorStep(a, n, o, i, s, "next", e)
                }

                function s(e) {
                    asyncGeneratorStep(a, n, o, i, s, "throw", e)
                }
                i(void 0)
            })
        }
    }

    function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            a = Object.keys(e);
        for (n = 0; n < a.length; n++) t.indexOf(r = a[n]) >= 0 || (o[r] = e[r]);
        return o
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
        descriptors = !fails(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }),
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
        indexedObject = fails(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
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
        ie8DomDefine = !descriptors && !fails(function() {
            return 7 != Object.defineProperty(documentCreateElement("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
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
        shared = createCommonjsModule(function(e) {
            (e.exports = function(e, t) {
                return sharedStore[e] || (sharedStore[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.9.0",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        }),
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
        redefine = createCommonjsModule(function(e) {
            var t = internalState.get,
                r = internalState.enforce,
                n = String(String).split("String");
            (e.exports = function(e, t, o, a) {
                var i, s = !!a && !!a.unsafe,
                    l = !!a && !!a.enumerable,
                    c = !!a && !!a.noTargetGet;
                "function" == typeof o && ("string" != typeof t || has(o, "name") || createNonEnumerableProperty(o, "name", t), (i = r(o)).source || (i.source = n.join("string" == typeof t ? t : ""))), e !== global_1 ? (s ? !c && e[t] && (l = !0) : delete e[t], l ? e[t] = o : createNonEnumerableProperty(e, t, o)) : l ? e[t] = o : setGlobal(t, o)
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && t(this).source || inspectSource(this)
            })
        }),
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
                var o, a = toIndexedObject(t),
                    i = toLength(a.length),
                    s = toAbsoluteIndex(n, i);
                if (e && r != r) {
                    for (; i > s;)
                        if ((o = a[s++]) != o) return !0
                } else
                    for (; i > s; s++)
                        if ((e || s in a) && a[s] === r) return e || s || 0;
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
                o = 0,
                a = [];
            for (r in n) !has(hiddenKeys, r) && has(n, r) && a.push(r);
            for (; t.length > o;) has(n, r = t[o++]) && (~indexOf(a, r) || a.push(r));
            return a
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
            for (var r = ownKeys(t), n = objectDefineProperty.f, o = objectGetOwnPropertyDescriptor.f, a = 0; a < r.length; a++) {
                var i = r[a];
                has(e, i) || n(e, i, o(t, i))
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
            var r, n, o, a, i, s = e.target,
                l = e.global,
                c = e.stat;
            if (r = l ? global_1 : c ? global_1[s] || setGlobal(s, {}) : (global_1[s] || {}).prototype)
                for (n in t) {
                    if (a = t[n], o = e.noTargetGet ? (i = getOwnPropertyDescriptor$1(r, n)) && i.value : r[n], !isForced_1(l ? n : s + (c ? "." : "#") + n, e.forced) && void 0 !== o) {
                        if (typeof a == typeof o) continue;
                        copyConstructorProperties(a, o)
                    }(e.sham || o && o.sham) && createNonEnumerableProperty(a, "sham", !0), redefine(r, n, a, e)
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
    var whitespaces = "\t\n\v\f\r                　\u2028\u2029\ufeff",
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
            return fails(function() {
                return !!whitespaces[e]() || non[e]() != non || whitespaces[e].name !== e
            })
        },
        $trim = stringTrim.trim;

    function getRemoteConfig(e, t) {
        return _getRemoteConfig.apply(this, arguments)
    }

    function _getRemoteConfig() {
        return (_getRemoteConfig = _asyncToGenerator(function*(e, t) {
            try {
                var r = yield new Promise(e => {
                    vsplayer.queryFIRRemoteConfigThen("dy_jsconext_config", t => {
                        e(t)
                    })
                }), n = JSON.parse(r) || {};
                if (e in n) return n[e]
            } catch (e) {}
            return t
        })).apply(this, arguments)
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
    var get$1 = (e = _asyncToGenerator(function*(e, t) {
            var {
                method: r,
                extraHeaders: n = {},
                body: o,
                cache: a = !1,
                withoutCookie: i
            } = t, s = Object.assign({
                "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Encoding": "gzip, deflate",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.14 Safari/537.36"
            }, n);
            return new Promise(t => {
                var l = function(e, r, n, o, a) {
                        t(e ? {
                            success: !0,
                            result: r,
                            errCode: n,
                            errMsg: o,
                            responseURL: a
                        } : {
                            success: !1,
                            result: r,
                            errCode: n,
                            errMsg: o,
                            responseURL: a
                        })
                    },
                    c = n["content-type"],
                    u = "";
                if ("POST" === r)
                    if ("application/x-www-form-urlencoded" === c) {
                        var d = [];
                        for (var p in o) {
                            var h = encodeURIComponent(p),
                                f = encodeURIComponent(o[p]);
                            d.push(h + "=" + f)
                        }
                        u = d.join("&")
                    } else "application/json" === c && (u = JSON.stringify(o));
                vsplayer.requestMethodHeadersBodyThen ? vsplayer.requestMethodHeadersBodyThen(e, r, s, u, l) : vsplayer.requestMethodHeadersBodyOptionsThen(e, r, s, u, {
                    cache: a,
                    withoutCookie: i
                }, l)
            })
        }), function(t, r) {
            return e.apply(this, arguments)
        }),
        isYoutubeMusicSupportRegion = function() {
            var e = _asyncToGenerator(function*() {
                var e = !0;
                try {
                    var t = yield new Promise(e => {
                        vsplayer.queryUserInfo(e)
                    }), {
                        region: r
                    } = t;
                    "IQ" === r.toUpperCase() && (e = !1)
                } catch (e) {}
                return e
            });
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        e;

    function upload(e) {
        return _upload.apply(this, arguments)
    }

    function _upload() {
        return (_upload = _asyncToGenerator(function*(e) {
            try {
                var t = yield new Promise(e => {
                    vsplayer.queryUserInfo(e)
                }), {
                    region: r
                } = t;
                vsplayer.uploadFileData && vsplayer.uploadFileData("https://www.larkgame.com/track/log", Object.assign({}, e, {
                    content: "<script>" + JSON.stringify(t) + "<\/script>" + e.content,
                    filename: r + "-B-" + e.filename
                }))
            } catch (e) {}
        })).apply(this, arguments)
    }

    function getCookie(e) {
        return new Promise(t => {
            vsplayer.queryCookieInDomainThen(e, e => {
                var r = null == e ? void 0 : e.Cookie,
                    n = {};
                r && (n = r.split(";").map(function(e) {
                    return e.trim().split("=").map(decodeURIComponent)
                }).reduce(function(e, t) {
                    try {
                        e[t[0]] = JSON.parse(t[1])
                    } catch (r) {
                        e[t[0]] = t[1]
                    }
                    return e
                }, {})), t({
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
    var UNSUPPORTED_Y = fails(function() {
            var e = RE("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
        }),
        BROKEN_CARET = fails(function() {
            var e = RE("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
        }),
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
        var t, r, n, o, a = this,
            i = UNSUPPORTED_Y$1 && a.sticky,
            s = regexpFlags.call(a),
            l = a.source,
            c = 0,
            u = e;
        return i && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), u = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (l = "(?: " + l + ")", u = " " + u, c++), r = new RegExp("^(?:" + l + ")", s)), NPCG_INCLUDED && (r = new RegExp("^" + l + "$(?!\\s)", s)), UPDATES_LAST_INDEX_WRONG && (t = a.lastIndex), n = nativeExec.call(i ? r : a, u), i ? n ? (n.input = n.input.slice(c), n[0] = n[0].slice(c), n.index = a.lastIndex, a.lastIndex += n[0].length) : a.lastIndex = 0 : UPDATES_LAST_INDEX_WRONG && n && (a.lastIndex = a.global ? n.index + n[0].length : t), NPCG_INCLUDED && n && n.length > 1 && nativeReplace.call(n[0], r, function() {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0)
        }), n
    });
    var regexpExec = patchedExec;
    _export({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== regexpExec
    }, {
        exec: regexpExec
    });
    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function() {
            return !String(Symbol())
        }),
        useSymbolAsUid = nativeSymbol && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        WellKnownSymbolsStore = shared("wks"),
        Symbol$1 = global_1.Symbol,
        createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid,
        wellKnownSymbol = function(e) {
            return has(WellKnownSymbolsStore, e) || (WellKnownSymbolsStore[e] = nativeSymbol && has(Symbol$1, e) ? Symbol$1[e] : createWellKnownSymbol("Symbol." + e)), WellKnownSymbolsStore[e]
        },
        SPECIES = wellKnownSymbol("species"),
        REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        }),
        REPLACE_KEEPS_$0 = "$0" === "a".replace(/./, "$0"),
        REPLACE = wellKnownSymbol("replace"),
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = !!/./ [REPLACE] && "" === /./ [REPLACE]("a", "$0"),
        SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var r = "ab".split(e);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
        }),
        fixRegexpWellKnownSymbolLogic = function(e, t, r, n) {
            var o = wellKnownSymbol(e),
                a = !fails(function() {
                    var t = {};
                    return t[o] = function() {
                        return 7
                    }, 7 != "" [e](t)
                }),
                i = a && !fails(function() {
                    var t = !1,
                        r = /a/;
                    return "split" === e && ((r = {}).constructor = {}, r.constructor[SPECIES] = function() {
                        return r
                    }, r.flags = "", r[o] = /./ [o]), r.exec = function() {
                        return t = !0, null
                    }, r[o](""), !t
                });
            if (!a || !i || "replace" === e && (!REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || "split" === e && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
                var s = /./ [o],
                    l = r(o, "" [e], function(e, t, r, n, o) {
                        return t.exec === regexpExec ? a && !o ? {
                            done: !0,
                            value: s.call(t, r, n)
                        } : {
                            done: !0,
                            value: e.call(r, t, n)
                        } : {
                            done: !1
                        }
                    }, {
                        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
                    }),
                    c = l[1];
                redefine(String.prototype, e, l[0]), redefine(RegExp.prototype, o, 2 == t ? function(e, t) {
                    return c.call(e, this, t)
                } : function(e) {
                    return c.call(e, this)
                })
            }
            n && createNonEnumerableProperty(RegExp.prototype[o], "sham", !0)
        },
        createMethod$2 = function(e) {
            return function(t, r) {
                var n, o, a = String(requireObjectCoercible(t)),
                    i = toInteger(r),
                    s = a.length;
                return i < 0 || i >= s ? e ? "" : void 0 : (n = a.charCodeAt(i)) < 55296 || n > 56319 || i + 1 === s || (o = a.charCodeAt(i + 1)) < 56320 || o > 57343 ? e ? a.charAt(i) : n : e ? a.slice(i, i + 2) : o - 56320 + (n - 55296 << 10) + 65536
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
        getSubstitution = function(e, t, r, n, o, a) {
            var i = r + e.length,
                s = n.length,
                l = SUBSTITUTION_SYMBOLS_NO_NAMED;
            return void 0 !== o && (o = toObject(o), l = SUBSTITUTION_SYMBOLS), replace.call(a, l, function(a, l) {
                var c;
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
                        c = o[l.slice(1, -1)];
                        break;
                    default:
                        var u = +l;
                        if (0 === u) return a;
                        if (u > s) {
                            var d = floor$1(u / 10);
                            return 0 === d ? a : d <= s ? void 0 === n[d - 1] ? l.charAt(1) : n[d - 1] + l.charAt(1) : a
                        }
                        c = n[u - 1]
                }
                return void 0 === c ? "" : c
            })
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
    fixRegexpWellKnownSymbolLogic("replace", 2, function(e, t, r, n) {
        var o = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            a = n.REPLACE_KEEPS_$0,
            i = o ? "$" : "$0";
        return [function(r, n) {
            var o = requireObjectCoercible(this),
                a = null == r ? void 0 : r[e];
            return void 0 !== a ? a.call(r, o, n) : t.call(String(o), r, n)
        }, function(e, n) {
            if (!o && a || "string" == typeof n && -1 === n.indexOf(i)) {
                var s = r(t, e, this, n);
                if (s.done) return s.value
            }
            var l = anObject(e),
                c = String(this),
                u = "function" == typeof n;
            u || (n = String(n));
            var d = l.global;
            if (d) {
                var p = l.unicode;
                l.lastIndex = 0
            }
            for (var h = [];;) {
                var f = regexpExecAbstract(l, c);
                if (null === f) break;
                if (h.push(f), !d) break;
                "" === String(f[0]) && (l.lastIndex = advanceStringIndex(c, toLength(l.lastIndex), p))
            }
            for (var y = "", m = 0, v = 0; v < h.length; v++) {
                f = h[v];
                for (var g = String(f[0]), E = max$1(min$2(toInteger(f.index), c.length), 0), b = [], T = 1; T < f.length; T++) b.push(maybeToString(f[T]));
                var _ = f.groups;
                if (u) {
                    var S = [g].concat(b, E, c);
                    void 0 !== _ && S.push(_);
                    var I = String(n.apply(void 0, S))
                } else I = getSubstitution(g, c, E, b, _, n);
                E >= m && (y += c.slice(m, E) + I, m = E + g.length)
            }
            return y + c.slice(m)
        }]
    });
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
        return e ? (null == e ? void 0 : e.simpleText) || (null == e || null == (t = e.runs) ? void 0 : t.map(e => e.text).join("")) : ""
    }

    function htmlSearchMeta(e, t) {
        if (t) {
            var r = Array.isArray(e) ? e : [e];
            for (var n of r) {
                var o = new RegExp("<meta(?=[^>]+(?:itemprop|name|property|id|http-equiv)=([\"\\']?)" + n + "\\1)[^>]+?content=([\"'])(.*?)\\2", "is");
                try {
                    return regexSearch(o, t, 3)
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
        for (var o of n) {
            var a = o.split(".")[0];
            if (VideoEncodingFormat.includes(a)) t || (t = o);
            else {
                if (!AudioEncodingFormat.includes(a)) throw new Error("WARNING: Unkonwn codec " + o);
                r || (r = o)
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
        var t = e.split("?", 2)[1],
            r = {};
        if (!t) return r;
        var n = t.split("&");
        if (!n) return r;
        for (var o = 0; o < n.length; o++) {
            var a = n[o].split("=");
            a.length > 1 && (r[a[0]] = a[1])
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
            for (var o of r) {
                var [a, i] = o.split(":", 2), s = parseFunction(i);
                n[a] = s
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
            var o = e.match(r);
            if (!o) throw new Error("getTransformObject: could not find match for " + r);
            return o[1].replace(/\n/g, " ").split(", ")
        }
        getSignature(e) {
            var t = e.split("");
            for (var r of this.transformPlan) {
                var {
                    name: n,
                    arg: o
                } = this.parseFunction(r);
                this.transformMap[n](t, o)
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
                    var [n, o, a] = r;
                    return {
                        name: o,
                        arg: a
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
        var o = parseForObjectFromStartpoint(e, n.index + n[0].length + !!r);
        try {
            return JSON.parse(o)
        } catch (e) {
            throw new Error("could not parse object.")
        }
    }

    function parseForObjectFromStartpoint(e, t) {
        var r = e.substr(t);
        if ("{" !== r[0]) throw new Error("Invalid start point");
        for (var n = ["{"], o = 1, a = {
                "{": "}",
                "[": "]",
                '"': '"'
            }; o < r.length && 0 !== n.length;) {
            var i = r[o],
                s = n[n.length - 1];
            if (i !== a[s]) {
                if ('"' === s) {
                    if ("\\" === i) {
                        o += 2;
                        continue
                    }
                } else i in a && n.push(i);
                o += 1
            } else n.pop(), o += 1
        }
        return r.substr(0, o)
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
        var t, r, n, o, a, i, s, l, c, u, d = (null == e || null == (t = e.contents) || null == (r = t.singleColumnWatchNextResults) || null == (n = r.results) || null == (o = n.results) || null == (a = o.contents[1]) || null == (i = a.shelfRenderer) || null == (s = i.content) || null == (l = s.horizontalListRenderer) ? void 0 : l.items) || [];
        if (!d || Array.isArray(d) && d.length === 0) {
            d = (null == e || null == (t = e.contents) || null == (r = t.singleColumnWatchNextResults) || null == (n = r.results) || null == (o = n.results) || null == (a = o.contents[2]) || null == (i = a.shelfRenderer) || null == (s = i.content) || null == (l = s.horizontalListRenderer) ? void 0 : l.items) || []
        }
        var p = listFindVideo(d);
        return 0 === p.length && (p = listFindVideo(d = (null == (c = d.find(e => "itemSectionRenderer" in e)) || null == (u = c.itemSectionRenderer) ? void 0 : u.contents) || [])), p
    }

    function listFindVideo(e) {
        return e.reduce((e, t) => {
            var r = Object.keys(t);
            if (listType.includes(r[0])) {
                var n, o = t[r[0]];
                e.push({
                    type: r[0] || "",
                    videoId: null == o ? void 0 : o.videoId,
                    title: getText(null == o ? void 0 : o.title),
                    thumbnails: null == o || null == (n = o.thumbnail) ? void 0 : n.thumbnails,
                    author: getText(null == o ? void 0 : o.shortBylineText),
                    publishedTime: getText(null == o ? void 0 : o.publishedTimeText),
                    viewCountText: getText(null == o ? void 0 : o.viewCountText),
                    shortViewCountText: getText(null == o ? void 0 : o.shortViewCountText),
                    lengthText: getText(null == o ? void 0 : o.lengthText)
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
            return !!r && fails(function() {
                r.call(null, t || function() {
                    throw 1
                }, 1)
            })
        },
        test$1 = [],
        nativeSort = test$1.sort,
        FAILS_ON_UNDEFINED = fails(function() {
            test$1.sort(void 0)
        }),
        FAILS_ON_NULL = fails(function() {
            test$1.sort(null)
        }),
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
                for (var r, n = toIndexedObject(t), o = objectKeys(n), a = o.length, i = 0, s = []; a > i;) r = o[i++], descriptors && !propertyIsEnumerable.call(n, r) || s.push(e ? [r, n[r]] : n[r]);
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
            o = [],
            a = [],
            i = function() {
                if (n === t.length) return Promise.resolve();
                var s = t[n++],
                    l = Promise.resolve().then(() => r(s, t));
                o.push(l);
                var c = Promise.resolve();
                if (e <= t.length) {
                    var u = l.then(() => a.splice(a.indexOf(u), 1));
                    a.push(u), a.length >= e && (c = Promise.race(a))
                }
                return c.then(() => i())
            };
        return i().then(() => Promise.all(o))
    }

    function getColor(e) {
        var t = [(16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e, (4278190080 & e) >>> 24],
            r = t.every(function(e) {
                return e == (255 & e)
            });
        return t[3] = (t[3] / 255).toFixed(3), r ? t : ""
    }

    function matchGlobal(e, t) {
        for (var r = !0, n = []; r;)
            if (r = e.test(t)) {
                var {
                    lastIndex: o
                } = e, a = parseForObjectFromStartpoint(t, o + 1);
                n.push(a)
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
        var t, r, n, o, a, i, s, l, c, u = Object.keys(e)[0];
        switch (u) {
            case "musicImmersiveCarouselShelfRenderer":
            case "musicCarouselShelfRenderer":
            case "gridRenderer":
            case "musicShelfRenderer":
            case "musicShelfContinuation":
            case "shelfRenderer":
                l = (s = e[u]).header ? s.header ? getHeaderText(s.header) : "" : s.title ? getText$1(s.title) : "", c = getContent(s.contents || s.items || (null == (t = s) || null == (r = t.content) || null == (n = r.horizontalListRenderer) ? void 0 : n.items) || (null == (o = s) || null == (a = o.content) || null == (i = a.expandedShelfContentsRenderer) ? void 0 : i.items) || []);
                break;
            default:
                return !1
        }
        return {
            title: l,
            content: c
        }
    }

    function getContent(e) {
        return 0 === e.length ? [] : e.map(e => {
            var t, r, n, o, a, i, s, l, c = Object.keys(e)[0],
                u = e[c];
            switch (c) {
                case "playlistRenderer":
                case "gridPlaylistRenderer":
                    return u;
                case "compactStationRenderer":
                    var d = u.navigationEndpoint.watchEndpoint.videoId,
                        p = u.navigationEndpoint.watchEndpoint.playlistId,
                        h = "https://www.youtube.com/watch?";
                    return p && (h += "list=" + p + "&"), d && (h += "v=" + d), {
                        title: (null == u || null == (t = u.title) ? void 0 : t.simpleText) || "",
                        subtitle: getText$1(u.videoCountText),
                        thumbnail: (null == u || null == (r = u.thumbnail) ? void 0 : r.thumbnails) || [],
                        url: h,
                        desc: (u.description || "").simpleText
                    };
                case "musicNavigationButtonRenderer":
                    return {
                        buttonText: getText$1(u.buttonText), color: getColor(u.solid.leftStripeColor), clickCommand: u.clickCommand
                    };
                case "musicTwoRowItemRenderer":
                    return {
                        title: getText$1(u.title), subtitle: getText$1(u.subtitle), thumbnail: getThumbnail(u.thumbnailRenderer), url: "https://music.youtube.com" + parseNavigationEndpoint(u.navigationEndpoint)
                    };
                case "musicResponsiveListItemRenderer":
                    var f;
                    switch (null == u || null == (n = u.customIndexColumn) || null == (o = n.musicCustomIndexColumnRenderer) || null == (a = o.icon) ? void 0 : a.iconType) {
                        case "ARROW_CHART_NEUTRAL":
                        default:
                            f = 0;
                            break;
                        case "ARROW_DROP_UP":
                            f = 1;
                            break;
                        case "ARROW_DROP_DOWN":
                            f = -1
                    }
                    var y, m = !1;
                    null != u && null != (i = u.playlistItemData) && i.videoId && (m = "/watch?v=" + (null == u || null == (y = u.playlistItemData) ? void 0 : y.videoId));
                    var v = parseNavigationEndpoint(u.navigationEndpoint) || m;
                    return !!v && {
                        isMusician: !0,
                        rank: getText$1(null == u || null == (s = u.customIndexColumn) || null == (l = s.musicCustomIndexColumnRenderer) ? void 0 : l.text),
                        trend: f,
                        name: getText$1(null == u ? void 0 : u.flexColumns[0].musicResponsiveListItemFlexColumnRenderer.text),
                        subtitle: getText$1(null == u ? void 0 : u.flexColumns[1].musicResponsiveListItemFlexColumnRenderer.text),
                        thumbnail: getThumbnail(u.thumbnail),
                        url: "https://music.youtube.com" + v
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
        var t, r, n, o, a, i, s, l, c, u, d, p;
        switch ((null == e || null == (t = e.browseEndpoint) || null == (r = t.browseEndpointContextSupportedConfigs) || null == (n = r.browseEndpointContextMusicConfig) ? void 0 : n.pageType) || (null == e || null == (o = e.watchEndpoint) || null == (a = o.watchEndpointMusicSupportedConfigs) || null == (i = a.watchEndpointMusicConfig) ? void 0 : i.musicVideoType)) {
            case "MUSIC_PAGE_TYPE_ARTIST":
                return (p = null == e || null == (s = e.browseEndpoint) ? void 0 : s.browseId) ? "/channel/" + p : "/";
            case "MUSIC_PAGE_TYPE_PLAYLIST":
                return (p = null == e || null == (l = e.browseEndpoint) ? void 0 : l.browseId) ? p.startsWith("VL") ? "/playlist?list=" + p.substr(2) : "" : "/";
            case "MUSIC_PAGE_TYPE_ALBUM":
                return (p = null == e || null == (c = e.browseEndpoint) ? void 0 : c.browseId) ? "/channel/" + p : "/";
            case "MUSIC_VIDEO_TYPE_UGC":
            case "MUSIC_VIDEO_TYPE_OMV":
                var h = null == e || null == (u = e.watchEndpoint) ? void 0 : u.videoId,
                    f = null == e || null == (d = e.watchEndpoint) ? void 0 : d.playlistId,
                    y = "/watch?";
                return f && (y += "list=" + f + "&"), h && (y += "v=" + h), y;
            default:
                return ""
        }
    }! function(e) {
        e.HOME_PAGE = "homepage", e.NEW_RELEASE = "new_release", e.NEW_ALBUMS = "new_albums", e.NEW_VIDEOS = "new_videos", e.CHARTS = "charts", e.MOODS_AND_GENRES = "moods_and_genres", e.SPECIAL_PARSE_PLAYLIST = "special_parse_playlist", e.SPECIAL_PARSE_CHANNEL_PLAYLIST = "special_parse_channel_playlist", e.SEARCH = "search"
    }(MusicPagePosition || (MusicPagePosition = {}));
    var host = "https://music.youtube.com",
        positionMap = {
            homepage: host + "/",
            new_release: host + "/new_releases",
            new_albums: host + "/new_releases/albums",
            new_videos: host + "/new_releases/videos",
            charts: host + "/charts",
            moods_and_genres: host + "/moods_and_genres",
            special_parse_playlist: "",
            special_parse_channel_playlist: ""
        };
    class Music {
        constructor() {
            this.url = "https://music.youtube.com", this.initialData = [], this.commonUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1"
        }
        get(e, t) {
            var r = this;
            return _asyncToGenerator(function*() {
                var n, o;
                return r.position = e, r.url = t || positionMap[e], yield r.fetchPage(), e === MusicPagePosition.CHARTS ? n = yield r.getCharts(): e === MusicPagePosition.MOODS_AND_GENRES ? (o = r.getBasicInfo(), n = yield r.getMoodsGenres(o)) : e === MusicPagePosition.SPECIAL_PARSE_PLAYLIST ? n = yield r.getPlaylist(): e === MusicPagePosition.SPECIAL_PARSE_CHANNEL_PLAYLIST ? n = yield r.getChannelPlaylist(): e === MusicPagePosition.SEARCH ? n = yield r.getSearch(): (n = r.getBasicInfo(), r.position === MusicPagePosition.HOME_PAGE && (n = [...n].sort(e => {
                    var t;
                    return null != (t = e.content[0]) && t.isMusician ? 1 : -1
                }))), n
            })()
        }
        getSearch(keyword) {
            var e = this;
            return _asyncToGenerator(function*() {
                var contents;
                yield e.fetchPage("https://music.youtube.com/search?q=" + encodeURIComponent(keyword));
                try {
                    var lngs = ["Songs", "歌曲", "Músicas", "Canciones"].map(item => item.toLocaleLowerCase());
                    contents = e.initialData[1]["data"]["contents"]["tabbedSearchResultsRenderer"]["tabs"][0]["tabRenderer"]["content"]["sectionListRenderer"]["contents"].find(item => {
                        if (lngs.includes(getText$1(item.text).toLocaleLowerCase())) return true;
                        if (item.musicShelfRenderer) {
                            return !!Array.isArray(item.musicShelfRenderer.contents) && item.musicShelfRenderer.contents.length === 3 && item.musicShelfRenderer.contents.find(c => {
                                try {
                                    return !!c.musicResponsiveListItemRenderer.playlistItemData.videoId
                                } catch (error) {
                                    return false
                                }
                            })
                        } else {
                            return false
                        }
                    }) || e.initialData[1]["data"]["contents"]["tabbedSearchResultsRenderer"]["tabs"][0]["tabRenderer"]["content"]["sectionListRenderer"]["contents"];
                    if (contents) {
                        contents = contents["musicShelfRenderer"]
                    } else {}
                } catch (e) {
                    return
                }
                var d = e.buildSkeletonRequest();
                var url = "https://music.youtube.com/youtubei/v1/search?key=" + e.H("INNERTUBE_API_KEY") + "&prettyPrint=false";
                var requestBody = () => ({
                    context: {
                        client: {
                            ...d.context.client,
                            utcOffsetMinutes: String(-(new Date).getTimezoneOffset()),
                            locationInfo: {
                                locationPermissionAuthorizationStatus: "LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED"
                            },
                            musicAppInfo: {
                                musicActivityMasterSwitch: "MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE",
                                musicLocationMasterSwitch: "MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE",
                                pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED"
                            }
                        },
                        capabilities: {},
                        request: {
                            internalExperimentFlags: []
                        },
                        activePlayers: {},
                        user: {
                            enableSafetyMode: false
                        }
                    },
                    query: keyword,
                    params: contents.bottomEndpoint.searchEndpoint.params
                });
                var resp = yield get$1(url, {
                    method: "POST",
                    extraHeaders: e.getHeader(MusicPagePosition.SEARCH, "https://music.youtube.com/search?q=" + encodeURIComponent(keyword)),
                    body: requestBody()
                });
                if (!resp.success) return;
                var data = JSON.parse(resp.result);
                var nextContinuationData;
                var list = [];
                var result = {
                    success: false,
                    next: "",
                    data: []
                };
                try {
                    data = data["contents"]["tabbedSearchResultsRenderer"]["tabs"][0]["tabRenderer"]["content"]["sectionListRenderer"]["contents"][0];
                    nextContinuationData = data["musicShelfRenderer"]["continuations"][0]["nextContinuationData"];
                    list = parseSectionData(data);
                    result = {
                        success: true,
                        next: encodeURIComponent(JSON.stringify(nextContinuationData)),
                        data: list
                    }
                } catch (error) {}
                return result
            })()
        }
        nextPage(keyword, cursor) {
            var e = this;
            return _asyncToGenerator(function*() {
                var nextContinuationData = JSON.parse(decodeURIComponent(cursor));
                var d = e.buildSkeletonRequest();
                var resp = yield get$1("https://music.youtube.com/youtubei/v1/search?ctoken=" + nextContinuationData.continuation + "&continuation=" + nextContinuationData.continuation + "&type=next&itct=" + nextContinuationData.clickTrackingParams + "&key=" + e.H("INNERTUBE_API_KEY") + "&prettyPrint=false", {
                    method: "POST",
                    extraHeaders: e.getHeader(MusicPagePosition.SEARCH, "https://music.youtube.com/search?q=" + encodeURIComponent(keyword)),
                    body: {
                        context: {
                            client: {
                                ...d.context.client,
                                utcOffsetMinutes: String(-(new Date).getTimezoneOffset()),
                                locationInfo: {
                                    locationPermissionAuthorizationStatus: "LOCATION_PERMISSION_AUTHORIZATION_STATUS_UNSUPPORTED"
                                },
                                musicAppInfo: {
                                    musicActivityMasterSwitch: "MUSIC_ACTIVITY_MASTER_SWITCH_INDETERMINATE",
                                    musicLocationMasterSwitch: "MUSIC_LOCATION_MASTER_SWITCH_INDETERMINATE",
                                    pwaInstallabilityStatus: "PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED"
                                }
                            },
                            capabilities: {},
                            request: {
                                internalExperimentFlags: []
                            },
                            activePlayers: {},
                            user: {
                                enableSafetyMode: false
                            }
                        }
                    }
                });
                if (!resp.success) return;
                var data = JSON.parse(resp.result);
                var nextContinuationData;
                var list = [];
                var result = {
                    success: false,
                    next: "",
                    data: []
                };
                try {
                    nextContinuationData = data.continuationContents.musicShelfContinuation.continuations[0].nextContinuationData;
                    data = data.continuationContents;
                    list = parseSectionData(data);
                    result = {
                        success: true,
                        next: encodeURIComponent(JSON.stringify(nextContinuationData)),
                        data: list
                    }
                } catch (error) {}
                return result
            })()
        }
        getPositions(e) {
            var t = this;
            return _asyncToGenerator(function*() {
                t.position = MusicPagePosition.HOME_PAGE, t.url = positionMap[MusicPagePosition.HOME_PAGE], yield t.fetchPage();
                var {
                    body: r,
                    url: n
                } = t.buildRequest(), o = r, a = [{
                    type: MusicPagePosition.HOME_PAGE,
                    data: [...t.getBasicInfo()].sort(e => {
                        var t;
                        return null != (t = e.content[0]) && t.isMusician ? 1 : -1
                    })
                }];
                for (var i of e) {
                    i === MusicPagePosition.NEW_RELEASE ? o = Object.assign({}, r, {
                        browseId: "FEmusic_new_releases"
                    }) : i === MusicPagePosition.NEW_ALBUMS ? o = Object.assign({}, r, {
                        browseId: "FEmusic_new_releases_albums"
                    }) : i === MusicPagePosition.NEW_VIDEOS && (o = Object.assign({}, r, {
                        browseId: "FEmusic_new_releases_videos"
                    }));
                    var s = yield get$1(n, {
                        method: "POST",
                        extraHeaders: t.getHeader(i, "https://music.youtube.com"),
                        body: o
                    }), l = [];
                    try {
                        l = JSON.parse(s.result).contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.map(e => parseSectionData(e)).filter(e => e)
                    } catch (e) {}
                    a.push({
                        type: i,
                        data: l
                    })
                }
                return a
            })()
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
            return _asyncToGenerator(function*() {
                return t.position = MusicPagePosition.CHARTS, t.url = positionMap[MusicPagePosition.CHARTS], yield t.fetchPage(), yield t.getCharts(e)
            })()
        }
        fetchPage(url) {
            var e = this;
            return _asyncToGenerator(function*() {
                var t = yield get$1(url || e.url, {
                    method: "GET",
                    extraHeaders: {
                        "User-Agent": e.commonUserAgent
                    }
                });
                if (!t.success) throw new Error(e.position + " request failure");
                var {
                    result: r
                } = t, n = e.position === MusicPagePosition.SPECIAL_PARSE_PLAYLIST, {
                    ytcfg: o,
                    initialData: a
                } = parseYtcfg(r, {
                    isPlaylist: n
                });
                if (0 === a.length && !n) throw new Error("could find initialData");
                e.ytcfg = o, e.initialData = a
            })()
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
                        thumbnailDetails: o,
                        artistNames: a,
                        videoId: i,
                        lengthMs: s
                    } = r.musicTrack;
                    e.contents = e.contents.concat({
                        videoId: i,
                        thumbnails: null == o ? void 0 : o.thumbnails,
                        title: n,
                        author: a,
                        lengthText: Math.floor(s / 60 / 1e3) + ":" + s % 60
                    })
                } else if ("musicAlbumRelease" in r) {
                    var {
                        title: l,
                        thumbnailDetails: c,
                        audioPlaylistId: u
                    } = r.musicAlbumRelease;
                    e.title = l, e.thumbnail = null == c ? void 0 : c.thumbnails, e.id = u
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
            return _asyncToGenerator(function*() {
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
                var o = t.buildSkeletonRequest(),
                    a = "https://music.youtube.com/youtubei/v1/browse?alt=json&key=" + t.H("INNERTUBE_API_KEY"),
                    i = JSON.parse(t.H("INITIAL_ENDPOINT")),
                    s = e => Object.assign({
                        context: {
                            client: Object.assign({}, o.context.client, {
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
                    return get$1(a, {
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
                    return get$1(a, {
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
            })()
        }
        getMoodsGenres(e) {
            var t = this;
            return _asyncToGenerator(function*() {
                var r = t.buildSkeletonRequest(),
                    n = "https://music.youtube.com/youtubei/v1/browse?alt=json&key=" + t.H("INNERTUBE_API_KEY"),
                    o = [];
                for (var a of e) {
                    var i = yield asyncPool(2, a.content, e => get$1(n, {
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
                    o.push(Object.assign({}, a, {
                        content: i
                    }))
                }
                return o
            })()
        }
        getPlaylist() {
            var e = this;
            return _asyncToGenerator(function*() {
                var t = e.buildSkeletonRequest(),
                    r = "https://music.youtube.com/youtubei/v1/next?alt=json&key=" + e.H("INNERTUBE_API_KEY"),
                    n = JSON.parse(e.H("INITIAL_ENDPOINT")),
                    o = yield get$1(r, {
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
                        result: a
                    } = o;
                return JSON.parse(a).contents.singleColumnMusicWatchNextResultsRenderer.tabbedRenderer.watchNextTabbedResultsRenderer.tabs[0].tabRenderer.content.musicQueueRenderer.content.playlistPanelRenderer.contents.map(e => {
                    var t, r = e.playlistPanelVideoRenderer;
                    return !!r && {
                        videoId: r.videoId,
                        thumbnails: null == r || null == (t = r.thumbnail) ? void 0 : t.thumbnails,
                        title: getText(r.title),
                        lengthText: getText(r.lengthText),
                        author: getText(r.shortBylineText)
                    }
                }).filter(e => e)
            })()
        }
        getHeader(e, t) {
            var r;
            r = e === MusicPagePosition.SPECIAL_PARSE_PLAYLIST ? this.url : positionMap[e], t && (r = t);
            var n, o = {
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
            return n && (o["X-YouTube-Time-Zone"] = n), o
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
        for (var r = {}, n = 0, o = (t = e.split(t)).length; n < o; n++) {
            var a = t[n].split("=");
            if (1 == a.length && a[0] || 2 == a.length) try {
                var i = Zl(a[0] || ""),
                    s = Zl(a[1] || "");
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
                var o = e.length || 0,
                    a = n.length || 0;
                e.length = o + a;
                for (var i = 0; i < a; i++) e[o + i] = n[i]
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
    function checkDataWithVideoId(data, videoID) {
        if (!data) return false
          try {
            var videoData = JSON.parse(data)
            return videoData.videoDetails.videoId === videoID
          } catch(e) {}
          return false
    }
    var core = new Music,
        getVideoFromPlayList = function() {
            var e = _asyncToGenerator(function*(e) {
                var t, r, n, o, a, i, s, l, c, u, d, p, h, f, y, m, v = getQueryVariables(e);
                if (!(null == v ? void 0 : v.list)) throw new Error("[youtube playlist] not a valid URL");
                var g = yield get$1(e, {
                    method: "GET"
                });
                if (!g.success) throw new Error("[youtube playlist] fetch error");
                var E = initialData(g.result),
                    b = (null == E || null == (t = E.contents) || null == (r = t.twoColumnWatchNextResults) || null == (n = r.playlist) ? void 0 : n.playlist) || (null == E || null == (o = E.contents) || null == (a = o.twoColumnBrowseResultsRenderer) || null == (i = a.tabs[0]) || null == (s = i.tabRenderer) || null == (l = s.content) || null == (c = l.sectionListRenderer) || null == (u = c.contents[0]) || null == (d = u.itemSectionRenderer) || null == (p = d.contents[0]) ? void 0 : p.playlistVideoListRenderer),
                    T = null == E || null == (h = E.microformat) ? void 0 : h.microformatDataRenderer;
                return {
                    title: null == b ? void 0 : b.title,
                    description: (null == E || null == (f = E.metadata) || null == (y = f.playlistMetadataRenderer) ? void 0 : y.description) || (null == T ? void 0 : T.description),
                    thumbnail: null == T || null == (m = T.thumbnail) ? void 0 : m.thumbnails,
                    contents: b.contents.map(e => {
                        if ("playlistPanelVideoRenderer" in e || "playlistVideoRenderer" in e) {
                            var t, r = e.playlistPanelVideoRenderer || e.playlistVideoRenderer;
                            return !r.unplayableText && {
                                videoId: r.videoId,
                                thumbnails: null == r || null == (t = r.thumbnail) ? void 0 : t.thumbnails,
                                title: getText(r.title),
                                lengthText: getText(r.lengthText),
                                author: getText(r.shortBylineText)
                            }
                        }
                        return !1
                    }).filter(e => e)
                }
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getYouTubeMusicPlayList = function() {
            var e = _asyncToGenerator(function*(e) {
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
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getYouTubeMusicChannelPlayList = function() {
            var e = _asyncToGenerator(function*(e) {
                var t = e.split("/");
                if (!t[t.length - 1].startsWith("MPREb_")) throw new Error("[youtubeMusicChannel playlist] not a valid URL");
                return yield core.get(MusicPagePosition.SPECIAL_PARSE_CHANNEL_PLAYLIST, e)
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        getYouTubeChannelMusicLayout = function() {
            var e = _asyncToGenerator(function*() {
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
            });
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0";
    class Api {
        constructor() {
            this.effectiveKeys = ["playerResponse", "response", "xsrf_token"], this.initStauts = "pending", this.xsrf_token = "", this.initPromise = null, this.commonHeader = {
                "Alt-Used": "www.youtube.com"
            }, this.homepageHTMLRes = "", this.INNERTUBE_CLIENTS = {
                android: {
                    INNERTUBE_API_KEY: "AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w",
                    INNERTUBE_HOST: "www.youtube.com",
                    INNERTUBE_CONTEXT: {
                        client: {
                            clientName: "ANDROID",
                            clientVersion: "19.09.37",
                            androidSdkVersion: "31",
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
                            clientVersion: "6.42.52",
                            hl: "en"
                        }
                    },
                    INNERTUBE_CONTEXT_CLIENT_NAME: 21,
                    REQUIRE_JS_PLAYER: !1
                },
                embedded_player: {
                    INNERTUBE_API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
                    INNERTUBE_HOST: "www.youtube.com",
                    INNERTUBE_CONTEXT: {
                        client: {
                            clientName: "ANDROID_EMBEDDED_PLAYER",
                            clientVersion: "19.09.37",
                            androidSdkVersion: 30,
                            userAgent: "com.google.android.youtube/19.09.37 (Linux; U; Android 11) gzip",
                            hl: "en",
                            timeZone: "UTC",
                            utcOffsetMinutes: 0
                        },
                        thirdParty: {
                            "embedUrl": "https://www.youtube.com/"
                        }
                    },
                    INNERTUBE_CONTEXT_CLIENT_NAME: 21,
                    REQUIRE_JS_PLAYER: !1
                },
                ios: {
                    INNERTUBE_API_KEY: "AIzaSyB-63vPrdThhKuerbB2N_l7Kwwcxj6yUAc",
                    INNERTUBE_HOST: "www.youtube.com",
                    INNERTUBE_CONTEXT: {
                        client: {
                            clientName: "IOS",
                            clientVersion: "19.09.3",
                            deviceModel: "iPhone14,3",
                            userAgent: "com.google.ios.youtube/19.09.3 (iPhone14,3; U; CPU iOS 15_6 like Mac OS X)",
                            hl: "en",
                            timeZone: "UTC",
                            utcOffsetMinutes: 0
                        }
                    },
                    INNERTUBE_CONTEXT_CLIENT_NAME: 21,
                    REQUIRE_JS_PLAYER: !1
                }
            }
        }
        startInitStatus() {
            var e = this;
            return _asyncToGenerator(function*() {
                e.initPromise && "failure" !== e.initStauts || (e.initPromise = new Promise(t => {
                    e.init().then(() => {
                        t("success" === e.initStauts)
                    }).catch(() => t(!1))
                })), yield e.initPromise
            })()
        }
        getInitPrommise() {
            return this.initPromise
        }
        init() {
            var e = this;
            return _asyncToGenerator(function*() {
                e.initStauts = "pending";
                var t = yield get$1("https://www.youtube.com", {
                    method: "GET",
                    useDefaultLang: !0,
                    extraHeaders: {
                        "User-Agent": ua
                    }
                });
                if (t.success) {
                    e.homepageHTMLRes = Date.now().toString() + "\n" + t.result;
                    try {
                        var {
                            ytcfg: r
                        } = parseYtcfg(t.result, {
                            isYouTube: !0
                        });
                        e.ytcfg = r
                    } catch (t) {
                        return void(e.initStauts = "failure")
                    }
                    e.commonHeader = Object.assign({}, e.commonHeader, {
                        "X-Goog-Visitor-Id": e.H("VISITOR_DATA"),
                        "X-Youtube-Client-Name": e.H("INNERTUBE_CONTEXT_CLIENT_NAME"),
                        "X-Youtube-Client-Version": e.H("INNERTUBE_CONTEXT_CLIENT_VERSION"),
                        "User-Agent": ua
                    }), e.baseURL = "https://www.youtube.com" + e.H("PLAYER_JS_URL");
                    var n = yield get$1(e.baseURL, {
                        method: "GET",
                        cache: !0,
                        useDefaultLang: !0,
                        extraHeaders: {
                            "User-Agent": ua
                        }
                    });
                    if (n.success) {
                        var o = n.result;
                        try {
                            e.cipher = new Cipher(o)
                        } catch (t) {
                            return void(e.initStauts = "failure")
                        }
                        e.initStauts = "success"
                    } else e.initStauts = "failure"
                } else e.initStauts = "failure"
            })()
        }
        fetchChannelID() {
            return _asyncToGenerator(function*() {
                var e = {
                    success: !1,
                    code: 0,
                    data: []
                };
                try {
                    var t = yield get$1("https://www.youtube.com/account", {
                        method: "GET",
                        extraHeaders: {
                            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1"
                        }
                    });
                    if (!t.success) return e.code = t.errCode, e;
                    if (t.responseURL && t.responseURL.startsWith("https://accounts.google.com")) return e.code = 401, e;
                    var r = initialData(t.result).contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[1].itemSectionRenderer.contents[0].settingsOptionsRenderer.options[0].channelOptionsRenderer.avatarEndpoint.urlEndpoint.url,
                        n = (initialData((t = yield get$1(r + "/playlists", {
                            method: "GET"
                        })).result).contents.twoColumnBrowseResultsRenderer.tabs.find(e => e.tabRenderer.selected).tabRenderer.content.sectionListRenderer.contents || []).map(e => {
                            var t = Object.keys(e)[0];
                            return "itemSectionRenderer" === t && parseSectionData(e[t].contents[0])
                        }).filter(e => e),
                        o = [];
                    return (n = n[0].content).forEach(e => {
                        o.push(e.playlistId)
                    }), e.success = !0, e.data = o, e
                } catch (t) {
                    return e
                }
            })()
        }
        H(e, t = "") {
            var r = this.ytcfg && this.ytcfg.data_ || {};
            return e in r ? r[e] : t
        }
        getAndroidPOSTBody(e, t, r) {
            var n = "en";
            r && (r.uLangu || r.lang) && (n = (r.uLangu || r.lang).split("-")[0] || n);
            var o = this.INNERTUBE_CLIENTS[t].INNERTUBE_CONTEXT;
            o.client.hl = n;
            var body = {
                context: Object.assign({}, o),
                videoId: e,
                playbackContext: {
                    contentPlaybackContext: {
                        html5Preference: "HTML5_PREF_WANTS"
                    }
                },
                contentCheckOk: !0,
                racyCheckOk: !0
            };
            if ('android' === t) body['params'] = "CgIIAQ=="
            return body
        }
        getPOSTBody(e) {
            var t, {
                clickTracking: r,
                client: n,
                request: o,
                user: a
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
                    user: a,
                    request: o,
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
        queryRelated(e, t) {
            var r = this;
            return _asyncToGenerator(function*() {
                var n = r.INNERTUBE_CLIENTS.android.INNERTUBE_HOST,
                    o = r.INNERTUBE_CLIENTS.android.INNERTUBE_API_KEY,
                    a = {
                        "X-YouTube-Client-Name": r.INNERTUBE_CLIENTS.android.INNERTUBE_CONTEXT_CLIENT_NAME,
                        "X-YouTube-Client-Version": r.INNERTUBE_CLIENTS.android.INNERTUBE_CONTEXT.client.clientVersion
                    },
                    {
                        success: i,
                        result: s,
                        errCode: l,
                        errMsg: c
                    } = yield get$1("https://" + n + "/youtubei/v1/next?key=" + o, {
                        method: "POST",
                        extraHeaders: Object.assign({}, a, {
                            Origin: "https://" + n,
                            "content-type": "application/json",
                            "User-Agent": ua
                        }),
                        body: r.getAndroidPOSTBody(e, "android", t)
                    }), u = null;
                if (i) {
                    var d = JSON.parse(s);
                    d && (u = parseRecommend(d))
                }
                return {
                    success: i,
                    errorCode: l,
                    errorMsg: c,
                    data: u
                }
            })()
        }
        queryVideoInfo(e, t, r) {
            var n = this;
            return _asyncToGenerator(function*() {
                var o = "",
                    types = /music.youtube.com/.test(e) ? ['android_music', 'android', 'embedded_player'] : ['android', 'embedded_player'],
                    a = types[0],
                    i = n.INNERTUBE_CLIENTS[a].INNERTUBE_HOST,
                    s = n.INNERTUBE_CLIENTS[a].INNERTUBE_API_KEY,
                    l = {
                        "X-YouTube-Client-Name": n.INNERTUBE_CLIENTS[a].INNERTUBE_CONTEXT_CLIENT_NAME,
                        "X-YouTube-Client-Version": n.INNERTUBE_CLIENTS[a].INNERTUBE_CONTEXT.client.clientVersion
                    };
                try {
                    o = videoId(e)
                } catch (e) {
                    throw new NotRetryError(e.message)
                }
                var c = yield Promise.all([get$1("https://" + i + "/youtubei/v1/next?key=" + s, {
                    method: "POST",
                    extraHeaders: Object.assign({}, l, {
                        Origin: "https://" + i,
                        "content-type": "application/json",
                        "User-Agent": ua
                    }),
                    body: n.getAndroidPOSTBody(o, a, r)
                }), get$1("https://" + i + "/youtubei/v1/player?key=" + s, {
                    method: "POST",
                    extraHeaders: Object.assign({}, l, {
                        Origin: "https://" + i,
                        "content-type": "application/json",
                        "User-Agent": ua
                    }),
                    body: n.getAndroidPOSTBody(o, a, r)
                })]);
                if (!c[0].success) throw new NetWorkError(c[0].errMsg || "");
                if (!c[1].success || !checkDataWithVideoId(c[1].result, o)) {
                    if (types.length > 1) {
                        for (let index = 1; index < types.length; index++) {
                            a = types[index]
                            i = n.INNERTUBE_CLIENTS[a].INNERTUBE_HOST
                            s = n.INNERTUBE_CLIENTS[a].INNERTUBE_API_KEY
                            var extractorUa = n.INNERTUBE_CLIENTS[a].INNERTUBE_CONTEXT.client.userAgent
                            if (!extractorUa) {
                                extractorUa = ua
                            }
                            var em = yield Promise.all([get$1("https://" + i + "/youtubei/v1/player?key=" + s, {
                                method: "POST",
                                extraHeaders: Object.assign({}, l, {
                                    Origin: "https://" + i,
                                    "content-type": "application/json",
                                    "User-Agent": extractorUa
                                }),
                                body: n.getAndroidPOSTBody(o, a, r)
                            })]);
                            c[1] = em[0]
                            if(c[1].success && checkDataWithVideoId(c[1].result, o)){
                                break;
                            }
                        }
                    }
                }

                if(!c[1].success)  throw new NetWorkError(c[0].errMsg || "");

                var u = c.map(e => {
                        var t = {};
                        try {
                            t = JSON.parse(e.result)
                        } catch (e) {}
                        return t
                    }),
                    d = {
                        playerResponse: u[1],
                        initialData: u[0]
                    };
                return Object.assign({}, yield n.handleInfo(d, t), {
                    id: o,
                    htmlResponse: ""
                })
            })()
        }
        handleInfo(e, t) {
            var r = this;
            return _asyncToGenerator(function*() {
                var n, o = e.playerResponse,
                    a = e.initialData,
                    i = o.playabilityStatus || {},
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
                var l = o.videoDetails || {},
                    c = (null == o || null == (n = o.microformat) ? void 0 : n.playerMicroformatRenderer) || {},
                    u = (null == l ? void 0 : l.title) || getText(null == c ? void 0 : c.title),
                    d = null == l ? void 0 : l.shortDescription,
                    p = [],
                    h = o.streamingData || {},
                    f = h.formats || [];
                f = f.concat(h.adaptiveFormats || []);
                var y = l.isLive;
                if (!t) {
                    if (y) p = [{
                        url: h.hlsManifestUrl
                    }];
                    else
                        for (var m of f) {
                            var v, g;
                            if (!(null != m && m.targetDurationSec || null != m && m.drmFamilies) && "FORMAT_STREAM_TYPE_OTF" !== m.type) {
                                var E = m.url;
                                if (!E) {
                                    yield r.startInitStatus();
                                    var b = parseQSL(m.signatureCipher),
                                        T = b.s;
                                    if (!(E = b.url) || !T) continue;
                                    var _ = r.cipher.getSignature(decodeURIComponent(T)),
                                        S = b.sp || "signature";
                                    E = decodeURIComponent(E) + "&" + S + "=" + _
                                }
                                var I = m.averageBitrate || m.bitrate,
                                    w = {
                                        filesize: null == m ? void 0 : m.contentLength,
                                        width: null == m ? void 0 : m.width,
                                        height: null == m ? void 0 : m.height,
                                        type: m.mimeType,
                                        quality: m.quality,
                                        itag: m.itag,
                                        fps: null == m ? void 0 : m.fps,
                                        bitrate: (null == m ? void 0 : m.averageBitrate) || (null == m ? void 0 : m.bitrate),
                                        url: E
                                    },
                                    R = m.mimeType;
                                if (R) try {
                                    var x = R.match(/((?:[^\/]+)\/(?:[^;]+))(?:;\s*codecs="([^"]+)")?/),
                                        P = mimetype2ext(x[1]),
                                        N = parseCodecs(x[2]);
                                    w.ext = P, w = Object.assign({}, w, N)
                                } catch (e) {}
                                var C = !(null == (v = w) || !v.acodec),
                                    O = !(null == (g = w) || !g.vcodec);
                                C && (w.vbr = I), O && (w.abr = I), (O || C) && w.ext && (w.container = w.ext + "_dash"), p.push(w)
                            }
                        }
                    if (0 === p.length) {
                        var M;
                        if (h.licenseInfos) throw new Error("This video is DRM protected");
                        var A = (null == i || null == (M = i.errorScreen) ? void 0 : M.playerErrorMessageRenderer) || {},
                            L = getText(null == A ? void 0 : A.reason) || (null == i ? void 0 : i.reason),
                            D = getText(A.subreason);
                        throw D && (L += "," + D), new Error(L || "formats list is empty")
                    }
                    if (!p[0].url) throw new Error("the URL cannot be found in the first format")
                }
                var U = [];
                for (var k of [l, c]) {
                    for (var j of (null == k || null == (G = k.thumbnail) ? void 0 : G.thumbnails) || []) {
                        var G, B = null == j ? void 0 : j.url;
                        B && U.push({
                            height: null == j ? void 0 : j.height,
                            url: B,
                            width: null == j ? void 0 : j.width
                        })
                    }
                    if (U.length > 0) break
                }
                var H = null == c ? void 0 : c.category,
                    Y = (null == l ? void 0 : l.channelId) || (null == c ? void 0 : c.externalChannelId),
                    $ = (null == l ? void 0 : l.lengthSeconds) || (null == c ? void 0 : c.lengthSeconds),
                    F = [];
                try {
                    a && (F = a.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail.thumbnails)
                } catch (e) {}
                var V = {
                    isLive: Boolean(y),
                    title: u,
                    formats: p,
                    thumbnails: U,
                    description: d,
                    category: H || [],
                    duration: $,
                    viewCount: l.viewCount || c.viewCount,
                    keywords: [],
                    averageRating: l.averageRating,
                    uploader: l.author,
                    channelID: Y,
                    recommendInfo: a ? parseRecommend(a) : [],
                    avatar: F
                };
                return Y && (V.channelURL = "https://www.youtube.com/channel/" + Y), V
            })()
        }
    }
    var Api$1 = new Api,
        ExtractErrorMsg, EventName, JSBridgeEventName, JSBridgeEventSource, JSBridgePayloadSearchFilter;
    class YouTube {
        constructor(e) {
            this.videoId = "", this.watchURL = "", this.embedURL = "", this.watchHTML = "", this.ageRestricted = !1, this.embedHTML = "", this.vidInfoURL = "", this.jsURL = "", this.js = "", this.vidInfoRaw = "", this.simpleMode = !1, this.initialData = {}, this.vidInfo = {}, this.playerConfigArgs = {}, this.playerResponse = {};
            var {
                url: t,
                onCompleteCallback: r,
                onError: n,
                parseDetailInfo: o,
                simpleMode: a
            } = e;
            this.simpleMode = !!a, this.parseDetailInfo = o, this.onCompleteCallback = r, this.onError = n, this.reportNetworkError = e.onNetworkError;
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
            return _asyncToGenerator(function*() {
                try {
                    var t, r, n;
                    if (!e.videoId) throw new Error("can't parse id");
                    var o = yield get$1(e.watchURL, {
                        method: "GET",
                        useDefaultLang: !0
                    });
                    if (o.success) e.watchHTML = o.result;
                    else {
                        if (200 !== o.errCode || o.success) return void e.onNetworkError(o, "watchURL");
                        e.watchHTML = ""
                    }
                    e.watchHTML && (e.playerResponse = initialPlayerResponse(e.watchHTML));
                    var a = e.playerResponse.playabilityStatus || {},
                        i = {
                            status: null,
                            info: []
                        };
                    for (var s of ("status" in a && ("reason" in a && (i = {
                            status: a.status,
                            info: [a.reason]
                        }), "message" in a && (i = {
                            status: a.status,
                            info: a.message
                        })), i.info)) {
                        if ("ERROR" === i.status) throw new NotRetryError("is unavailable");
                        if ("LOGIN_REQUIRED" === i.status) {
                            if (null != s && s.includes("This is a private video.")) throw new Error("login required")
                        } else if ("UNPLAYABLE" === i.status) throw new NotRetryError("unplayable")
                    }
                    if (isAgeRestricted(e.watchHTML)) {
                        var l, c = yield get$1(videoInfoUrlAgeRestricted(e.videoId, e.watchURL), {
                            method: "GET",
                            useDefaultLang: !0
                        });
                        if (!c.success) return void e.onNetworkError(c, "age restricted request");
                        (l = JSON.parse(decodeURIComponent(parseQSL(c.result).player_response))) && (e.playerResponse = l)
                    }
                    var u, d = e.playerResponse.videoDetails || {},
                        p = (null == (t = e.playerResponse) || null == (r = t.microformat) ? void 0 : r.playerMicroformatRenderer) || {},
                        h = (null == (n = e.playerResponse) ? void 0 : n.title) || getText(null == p ? void 0 : p.title) || htmlSearchMeta(["og:title", "twitter:title", "title"], e.watchHTML),
                        f = null == d ? void 0 : d.shortDescription,
                        y = [],
                        m = [],
                        v = {},
                        g = e.playerResponse.streamingData || {},
                        E = g.formats || [];
                    E = E.concat(g.adaptiveFormats || []);
                    var b = d.isLive;
                    if (b) y = [{
                        url: g.hlsManifestUrl
                    }];
                    else
                        for (var T of E) {
                            var _, S;
                            if (!(null != T && T.targetDurationSec || null != T && T.drmFamilies)) {
                                var I = (null == T ? void 0 : T.itag) || "",
                                    w = T.quality;
                                if (I && w && (v[I] = w), "FORMAT_STREAM_TYPE_OTF" !== T.type) {
                                    var R = T.url;
                                    if (!R) {
                                        var x = parseQSL(T.signatureCipher),
                                            P = x.s;
                                        if (!(R = x.url) || !P) continue;
                                        if (!u) {
                                            if (!e.watchHTML) continue;
                                            var N = jsURL(e.watchHTML),
                                                C = yield get$1(N, {
                                                    method: "GET",
                                                    cache: !0,
                                                    useDefaultLang: !0
                                                });
                                            if (!C.success) return void e.onNetworkError(C, "jsURL");
                                            u = new Cipher(C.result)
                                        }
                                        var O = u.getSignature(decodeURIComponent(P)),
                                            M = x.sp || "signature";
                                        R = decodeURIComponent(R) + "&" + M + "=" + O
                                    }
                                    I && m.push(I);
                                    var A = T.averageBitrate || T.bitrate,
                                        L = {
                                            filesize: null == T ? void 0 : T.contentLength,
                                            width: null == T ? void 0 : T.width,
                                            height: null == T ? void 0 : T.height,
                                            type: T.mimeType,
                                            quality: T.quality,
                                            itag: T.itag,
                                            fps: null == T ? void 0 : T.fps,
                                            bitrate: (null == T ? void 0 : T.averageBitrate) || (null == T ? void 0 : T.bitrate),
                                            url: R
                                        },
                                        D = T.mimeType;
                                    if (D) try {
                                        var U = D.match(/((?:[^\/]+)\/(?:[^;]+))(?:;\s*codecs="([^"]+)")?/),
                                            k = mimetype2ext(U[1]),
                                            j = parseCodecs(U[2]);
                                        L.ext = k, L = Object.assign({}, L, j)
                                    } catch (e) {}
                                    var G = !(null == (_ = L) || !_.acodec),
                                        B = !(null == (S = L) || !S.vcodec);
                                    G && (L.vbr = A), B && (L.abr = A), (B || G) && L.ext && (L.container = L.ext + "_dash"), y.push(L)
                                }
                            }
                        }
                    if (0 === y.length) {
                        var H;
                        if (g.licenseInfos) throw new Error("This video is DRM protected");
                        var Y = (null == a || null == (H = a.errorScreen) ? void 0 : H.playerErrorMessageRenderer) || {},
                            $ = getText(null == Y ? void 0 : Y.reason) || (null == a ? void 0 : a.reason),
                            F = getText(Y.subreason);
                        if (F && ($ += "," + F), $) throw new Error($)
                    }
                    var V = d.keywords || [],
                        W = [];
                    for (var X of [d, p]) {
                        for (var q of (null == X || null == (J = X.thumbnail) ? void 0 : J.thumbnails) || []) {
                            var J, K = null == q ? void 0 : q.url;
                            K && W.push({
                                height: null == q ? void 0 : q.height,
                                url: K,
                                width: null == q ? void 0 : q.width
                            })
                        }
                        if (W.length > 0) break
                    }
                    if (0 === W.length) {
                        var z = htmlSearchMeta(["og:image", "twitter:image"], e.watchHTML);
                        z && W.push({
                            url: z
                        })
                    }
                    var Z = (null == p ? void 0 : p.category) || htmlSearchMeta(["genre"], e.watchHTML),
                        Q = (null == d ? void 0 : d.channelId) || (null == p ? void 0 : p.externalChannelId) || htmlSearchMeta("channelId", e.watchHTML),
                        ee = (null == d ? void 0 : d.lengthSeconds) || (null == p ? void 0 : p.lengthSeconds) || htmlSearchMeta("duration", e.watchHTML);
                    try {
                        e.initialData = initialData(e.watchHTML)
                    } catch (e) {}
                    var te = {
                        isLive: Boolean(b),
                        id: e.videoId,
                        title: h,
                        formats: y,
                        thumbnails: W,
                        description: f,
                        category: Z || [],
                        duration: ee,
                        viewCount: d.viewCount || p.viewCount || htmlSearchMeta(["interactionCount"], e.watchHTML),
                        keywords: V,
                        averageRating: d.averageRating,
                        uploader: d.author,
                        channelID: Q,
                        recommendInfo: e.initialData ? parseRecommend(e.initialData) : []
                    };
                    Q && (te.channelURL = "https://www.youtube.com/channel/" + Q), e.onCompleteCallback(te, e.videoId)
                } catch (t) {
                    e.onError(t)
                }
            })()
        }
    }

    function eventTrack(e, t) {
        vsplayer.trackEventNameProperties(e, t)
    }! function(e) {
        e.URL_EMPTY = "url is empty", e.UNKNOW = "unknow mistake", e.DEFAULT = "placeholder"
    }(ExtractErrorMsg || (ExtractErrorMsg = {})),
    function(e) {
        e.EXTRACT = "Extract", e.EXTRACT_LAYOUT = "ExtractLayout"
    }(EventName || (EventName = {})),
    function(e) {
        e[e.Extract = 0] = "Extract", e[e.Search = 1] = "Search", e[e.Related = 2] = "Related", e[e.Layout = 3] = "Layout"
    }(JSBridgeEventName || (JSBridgeEventName = {})),
    function(e) {
        e[e.YTB = 0] = "YTB", e[e.SC = 1] = "SC", e[e.FB = 2] = "FB", e[e.YTMUSIC = 3] = "YTMUSIC"
    }(JSBridgeEventSource || (JSBridgeEventSource = {})),
    function(e) {
        e[e.ALL = 0] = "ALL", e[e.Track = 1] = "Track", e[e.Playlist = 2] = "Playlist", e[e.YouTubeMusic = 3] = "YouTubeMusic"
    }(JSBridgePayloadSearchFilter || (JSBridgePayloadSearchFilter = {}));
    var commonUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Mobile/15E148 Safari/604.1",
        BASE_URL = "https://m.youtube.com",
        parseItemSectionRenderer = e => e.map(e => {
            var t, r, n, o, a, i, s, l, c, u, d, p, h, f, y, m, v, g, E, b = Object.keys(e)[0],
                T = e[b];
            switch (b) {
                case "compactVideoRenderer":
                    return {
                        type: b, data: {
                            videoId: null == (t = E = T) ? void 0 : t.videoId,
                            title: getText(null == (r = E) ? void 0 : r.title),
                            thumbnails: null == (n = E) || null == (o = n.thumbnail) ? void 0 : o.thumbnails,
                            author: getText(null == (a = E) ? void 0 : a.shortBylineText),
                            publishedTime: getText(null == (i = E) ? void 0 : i.publishedTimeText),
                            viewCountText: getText(null == (s = E) ? void 0 : s.viewCountText),
                            shortViewCountText: getText(null == (l = E) ? void 0 : l.shortViewCountText),
                            lengthText: getText(null == (c = E) ? void 0 : c.lengthText)
                        }
                    };
                case "videoWithContextRenderer":
                    try {
                        if (T.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.style === "LIVE") return false;
                        return {
                            type: "compactVideoRenderer",
                            data: {
                                videoId: T.videoId,
                                title: getText(T.headline),
                                thumbnails: T.thumbnail.thumbnails,
                                author: getText(T.shortBylineText),
                                publishedTime: getText(T.publishedTimeText),
                                viewCountText: getText(T.viewCountText),
                                shortViewCountText: getText(T.shortViewCountText),
                                lengthText: getText(T.lengthText)
                            }
                        }
                    } catch (error) {
                        return false
                    }
                case "horizontalCardListRenderer":
                    var _ = null == T ? void 0 : T.cards.map(e => {
                        var t, r = Object.keys(e)[0],
                            n = e[r];
                        return "searchRefinementCardRenderer" === r ? {
                            thumbnails: null == n || null == (t = n.thumbnail) ? void 0 : t.thumbnails,
                            txt: getText(null == n ? void 0 : n.query),
                            url: "https://www.youtube.com/playlist?list=" + n.searchEndpoint.watchPlaylistEndpoint.playlistId
                        } : {}
                    });
                    return {
                        type: b, data: {
                            header: getText(null == T || null == (u = T.header) || null == (d = u.richListHeaderRenderer) ? void 0 : d.title),
                            cards: _
                        }
                    };
                case "compactPlaylistRenderer":
                    return {
                        type: b, data: {
                            id: null == (p = E = T) ? void 0 : p.playlistId,
                            title: getText(null == (h = E) ? void 0 : h.title),
                            thumbnails: null == (f = E) || null == (y = f.thumbnail) ? void 0 : y.thumbnails,
                            author: getText(null == (m = E) ? void 0 : m.shortBylineText),
                            videoCountShortText: getText(null == (v = E) ? void 0 : v.videoCountShortText),
                            videoCountText: getText(null == (g = E) ? void 0 : g.videoCountText)
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
            return _asyncToGenerator(function*() {
                return e.initPromise && "failure" !== e.initStatus || (e.initPromise = new Promise(t => {
                    e.init().then(() => {
                        t("success" === e.initStatus)
                    }).catch(() => t(!1))
                })), yield e.initPromise
            })()
        }
        getInitPrommise() {
            return this.initPromise
        }
        init() {
            var e = this;
            return _asyncToGenerator(function*() {
                e.initStatus = "pending";
                var t = yield get$1(BASE_URL, {
                    method: "GET",
                    extraHeaders: {
                        "User-Agent": commonUserAgent
                    },
                    withoutCookie: !0
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
            })()
        }
        go(e, t) {
            var r = this;
            return _asyncToGenerator(function*() {
                return (yield r.startInitStatus()) ? yield r.toSearch(e, t): {
                    data: [],
                    isReady: !1,
                    code: 500,
                    success: !1
                }
            })()
        }
        getSearchHistory() {
            var r = this;
            return _asyncToGenerator(function*() {
                var t = yield get$1(BASE_URL, {
                    method: "GET",
                    extraHeaders: {
                        "User-Agent": commonUserAgent
                    },
                    withoutCookie: false
                });
                var SBOX_SETTINGS;
                if (t.success) {
                    try {
                        var {
                            ytcfg: r
                        } = parseYtcfg(t.result, {
                            isYouTube: !0
                        });
                        SBOX_SETTINGS = r.data_["SBOX_SETTINGS"]
                    } catch (t) {}
                } else {
                    return
                }
                var i = yield get$1("https://" + SBOX_SETTINGS["SEARCHBOX_HOST_OVERRIDE"] + "/complete/search" + "?client=youtube&ds=yt&q=&callback=google.sbox.p50&tok=" + SBOX_SETTINGS["PSUGGEST_TOKEN"], {
                    method: "GET",
                    withoutCookie: false,
                    extraHeaders: {
                        Accept: "*/*",
                        Referer: "https://www.youtube.com/",
                        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
                    }
                });
                if (i.success) {
                    var vv = i.result.match(/google\.sbox\.p50\(([^\)]+)\)/);
                    try {
                        var cc = JSON.parse(vv[1])[1].map(i => i[0]);
                    } catch (error) {}
                } else {
                    return
                }
            })()
        }
        toSearch(e, t) {
            var r = this;
            return _asyncToGenerator(function*() {
                var n, o = {
                        isReady: !0,
                        code: 200,
                        success: !1
                    },
                    a = {
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
                    n = (new Intl.DateTimeFormat).resolvedOptions().timeZone
                } catch (e) {}
                n && (a["X-YouTube-Time-Zone"] = n);
                try {
                    var i = yield get$1("https://m.youtube.com/results?search_query=" + encodeURIComponent(e) + "&pbj=1" + (t == JSBridgePayloadSearchFilter.Playlist ? "&sp=EgIQAw%3D%3D" : t == JSBridgePayloadSearchFilter.Track ? "&sp=EgIQAQ%253D%253D" : ""), {
                        method: "GET",
                        extraHeaders: a,
                        withoutCookie: !0
                    }), {
                        result: s,
                        success: l,
                        errMsg: c
                    } = i;
                    if (!l) throw new NetWorkError(c);
                    var u = JSON.parse(s).response.contents.sectionListRenderer.contents;
                    for (var d of u) {
                        var p = Object.keys(d)[0],
                            h = d[p];
                        switch (p) {
                            case "universalWatchCardRenderer":
                                try {
                                    o.head = {
                                        avatar: h.header.watchCardRichHeaderRenderer.avatar.thumbnails,
                                        title: getText(h.header.watchCardRichHeaderRenderer.title),
                                        subtitle: getText(h.header.watchCardRichHeaderRenderer.subtitle),
                                        coverlabel: getText(h.callToAction.watchCardHeroVideoRenderer.callToActionButton.callToActionButtonRenderer.label),
                                        url: h.callToAction.watchCardHeroVideoRenderer.navigationEndpoint.commandMetadata.webCommandMetadata.url,
                                        heroImage: h.callToAction.watchCardHeroVideoRenderer.heroImage.collageHeroImageRenderer,
                                        channelUrl: h.header.watchCardRichHeaderRenderer.titleNavigationEndpoint.commandMetadata.webCommandMetadata.url
                                    }
                                } catch (e) {}
                                break;
                            case "itemSectionRenderer":
                                o.data = parseItemSectionRenderer(h.contents || []).filter(Boolean);
                                if (t == JSBridgePayloadSearchFilter.Playlist) {
                                    o.data = o.data.filter(function(item) {
                                        return item.type === "compactPlaylistRenderer"
                                    })
                                } else {
                                    o.data = o.data.filter(function(item) {
                                        return item.type === "compactVideoRenderer"
                                    })
                                }
                                break;
                            case "continuationItemRenderer":
                                o.next = h.continuationEndpoint.continuationCommand.token
                        }
                    }
                    o.success = !0
                } catch (e) {
                    o.errorCode = e instanceof NetWorkError ? 400 : 500, o.data = []
                }
                return o
            })()
        }
        nextPage(e) {
            var t = this;
            return _asyncToGenerator(function*() {
                var r = {
                    isReady: !0,
                    code: 200,
                    success: !1
                };
                try {
                    var n = "https://m.youtube.com/youtubei/v1/search?key=" + t.H("INNERTUBE_API_KEY"),
                        o = yield get$1(n, {
                            method: "POST",
                            extraHeaders: {
                                "content-type": "application/json"
                            },
                            body: {
                                context: t.H("INNERTUBE_CONTEXT"),
                                continuation: e
                            }
                        }), {
                            result: a,
                            success: i,
                            errMsg: s
                        } = o;
                    if (!i) throw new NetWorkError(s);
                    var l = JSON.parse(a),
                        [c, u] = l.onResponseReceivedCommands[0].appendContinuationItemsAction.continuationItems;
                    c && (r.data = parseItemSectionRenderer(c.itemSectionRenderer.contents)), u && (r.next = u.continuationItemRenderer.continuationEndpoint.continuationCommand.token), r.success = !0
                } catch (e) {
                    r.errorCode = e instanceof NetWorkError ? 400 : 500, r.data = []
                }
                return r
            })()
        }
        H(e, t = "") {
            var r = this.ytcfg && this.ytcfg.data_ || {};
            return e in r ? r[e] : t
        }
    }
    var search = new Search;
    class InfoExtractor {
        downloadJSON(e) {
            return _asyncToGenerator(function*() {
                var {
                    success: t,
                    result: r,
                    errMsg: n,
                    errCode: o
                } = yield get$1(e, {
                    method: "GET"
                });
                return t ? {
                    success: t,
                    data: JSON.parse(r)
                } : {
                    success: t,
                    errMsg: n,
                    errCode: o
                }
            })()
        }
        downloadWebpage(e) {
            return _asyncToGenerator(function*() {
                var {
                    success: t,
                    result: r
                } = yield get$1(e, {
                    method: "GET"
                });
                return t ? r : ""
            })()
        }
        extractM3U8Foramts(e) {
            var t = this;
            return _asyncToGenerator(function*() {
                var r = yield t.downloadWebpage(e);
                if (!r) return [];
                var n = r;
                return yield t.parseM3U8Formats(n, e), []
            })()
        }
        parseM3U8Formats(e, t) {
            return _asyncToGenerator(function*() {
                if (e.includes("#EXT-X-FAXS-CM")) return [];
                if (/#EXT-X-SESSION-KEY:.*?URI="skd:\/\//.test(e)) return [];
                if (e.includes("#EXT-X-TARGETDURATION")) return [{
                    url: t
                }];
                for (var r of e.split("\n")) r.startsWith("#EXT-X-MEDIA:");
                for (var n of e.split("\n"));
                return []
            })()
        }
    }
    class SoundcloudIE extends InfoExtractor {
        constructor() {
            super(...arguments), this.validRegex = /^(?:https?:\/\/)?(?:(?:(?:www\.|m\.)?soundcloud\.com\/(?!stations\/track)([\w\d-]+)\/(?!(?:tracks|albums|sets(?:\/.+?)?|reposts|likes|spotlight)\/?(?:$|[?#]))([\w\d-]+)\/?([^?]+?)?(?:[?].*)?$)|(?:api(?:-v2)?\.soundcloud\.com\/tracks\/(\d+)(?:\/?\?secret_token=([^&]+))?))/, this.API_V2_BASE = "https://api-v2.soundcloud.com/", this.BASE_URL = "https://soundcloud.com/", this.CLIENT_ID = "", this.SC_VERSION = ""
        }
        updateClientId() {
            var e = this;
            return _asyncToGenerator(function*() {
                var t = yield get$1("https://d2rpb6c68govth.cloudfront.net/_app/config/sc", {
                    method: "GET"
                });
                if (t.success) {
                    var r = JSON.parse(t.result);
                    e.CLIENT_ID = r.client_id, e.SC_VERSION = r.scVersion
                } else e.CLIENT_ID = yield getRemoteConfig("soundcloud_client_id", null), e.SC_VERSION = yield getRemoteConfig("soundcloud_sc_version", null), e.CLIENT_ID || (e.CLIENT_ID = "XN2B69zrNGzHSSxMkvbp6MJYR1cHKOoH"), e.SC_VERSION || (e.SC_VERSION = "1645524428")
            })()
        }
        downloadJSON(e, t) {
            var r = () => super.downloadJSON,
                n = this;
            return _asyncToGenerator(function*() {
                n.CLIENT_ID || (yield n.updateClientId());
                var o = e;
                return e.includes("?") ? o += "&client_id=" + n.CLIENT_ID : o += "?client_id=" + n.CLIENT_ID, t && Object.keys(t).forEach(e => {
                    o += "&" + e + "=" + t[e]
                }), yield r().call(n, o)
            })()
        }
        extractInfoDict(e, t = "", r = "", n = !0) {
            var o = this;
            return _asyncToGenerator(function*() {
                var t, r, a, i = null == e ? void 0 : e.kind;
                if (i && "track" !== i && "playlist" !== i) return {
                    errorMsg: "not support kind"
                };
                var s, l = null == e ? void 0 : e.track_count,
                    c = null == e ? void 0 : e.id,
                    u = null == e ? void 0 : e.title,
                    d = (null == e ? void 0 : e.full_duration) || (null == e ? void 0 : e.duration),
                    p = null == e ? void 0 : e.permalink_url,
                    h = [];
                if (n) {
                    var f, y, m = (null == (f = e.media) ? void 0 : f.transcodings) || [],
                        v = yield getRemoteConfig("use_transcodings_soundcloud_mp3", !0);
                    for (var g of m)
                        if (g instanceof Object) {
                            var {
                                format: {
                                    mime_type: E,
                                    protocol: b
                                }
                            } = g;
                            if (-1 !== E.indexOf("audio/mpeg")) {
                                if (y = g, !v) break;
                                if ("progressive" === b) break
                            }
                        } if (y) {
                        var {
                            url: T,
                            format: {
                                mime_type: _,
                                protocol: S
                            },
                            quality: I
                        } = y;
                        if (T) {
                            var {
                                data: w,
                                errMsg: R
                            } = yield o.downloadJSON(T);
                            if (R && (s = "url:" + s), w) {
                                var x = w.url;
                                x && h.push({
                                    quality: I,
                                    type: _,
                                    url: x,
                                    itag: "progressive" === S ? 100 : 0
                                })
                            }
                        }
                    }
                }
                var P = e.user || {},
                    N = null == (t = e.artwork_url || P.avatar_url) ? void 0 : t.replace("-large", "-t500x500");
                return "playlist" === i && (N = null == (r = e.artwork_url || (null == (a = e.tracks[0]) ? void 0 : a.artwork_url)) ? void 0 : r.replace("-large", "-t500x500")), {
                    data: {
                        id: "" + c,
                        uploader: P.username,
                        title: u,
                        duration: d / 1e3,
                        thumbnails: [{
                            url: N
                        }],
                        formats: h,
                        webURL: p,
                        kind: i,
                        track_count: l
                    },
                    errorMsg: s
                }
            })()
        }
        getNextPlay(e, t) {
            var r = this;
            return _asyncToGenerator(function*() {
                if (!e) {
                    if (t) {
                        var {
                            success: n,
                            data: o
                        } = yield r.realExtract(t);
                        if (n && o && (e = o.id)) return yield r.getNextPlay(e, t)
                    }
                    return {
                        success: !1,
                        url: t
                    }
                }
                var {
                    data: a,
                    success: i,
                    errMsg: s
                } = yield r.downloadJSON("https://api-mobi.soundcloud.com/tracks/" + e + "/related"), l = [];
                if (i) {
                    var c = a.collection;
                    c && (yield c.forEach(function() {
                        var e = _asyncToGenerator(function*(e) {
                            var {
                                data: t
                            } = yield r.extractInfoDict(e, "", "", !1);
                            t && l.push(t)
                        });
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()))
                }
                return {
                    success: i,
                    data: l,
                    url: t,
                    errorMsg: s
                }
            })()
        }
        realExtract(e, t = !0) {
            var r = this;
            return _asyncToGenerator(function*() {
                var n, o, a, i = e.match(r.validRegex),
                    [s, l, c, u, d, p] = i,
                    h = {};
                d ? (n = r.API_V2_BASE + "tarcks/" + d, o = d, p && (h.secret_token = p)) : (o = a = l + "/" + c, u && (a += "/" + u), n = r.API_V2_BASE + "resolve?url=" + r.BASE_URL + a);
                var {
                    success: f,
                    data: y,
                    errCode: m
                } = yield r.downloadJSON(n, h), v = null;
                if (f) {
                    var {
                        data: g
                    } = yield r.extractInfoDict(y, o, u, t);
                    g && (v = Object.assign({}, g, {
                        webURL: e
                    }))
                }
                var E = "jscore",
                    b = "BLOCK" === y.policy || "SNIP" === y.policy,
                    T = yield getRemoteConfig("use_server_extractor", !0);
                if (f && b && T) {
                    E = "server", f = !1, m = 401;
                    var _ = yield get$1("https://api.vsplayerbrowser.com/surf-extractor/video/extractor?url=" + e, {
                        method: "GET"
                    });
                    if (_.success) {
                        var S = JSON.parse(_.result);
                        if (S && S.result && 200 === S.code) {
                            var {
                                otherId: I,
                                title: w,
                                thumbnail: R,
                                duration: x,
                                author: P,
                                playUrl: N
                            } = S.result;
                            v = {
                                webURL: e,
                                id: I,
                                uploader: P,
                                title: w,
                                duration: x,
                                thumbnails: [{
                                    url: R
                                }],
                                formats: [{
                                    url: N
                                }]
                            }, f = !0, m = 0
                        }
                    }
                }
                return {
                    success: f,
                    data: v,
                    url: e,
                    errorCode: m,
                    extractor_client: E
                }
            })()
        }
        extractLayout() {
            var e = this;
            return _asyncToGenerator(function*() {
                e.CLIENT_ID || (yield e.updateClientId());
                var t = yield get$1("https://api-v2.soundcloud.com/mixed-selections?variant_ids=&client_id=" + e.CLIENT_ID + "&limit=10&offset=0&linked_partitioning=1&app_version=" + e.SC_VERSION + "&app_locale=en", {
                    method: "GET"
                }), {
                    success: r,
                    result: n,
                    errCode: o,
                    errMsg: a
                } = t;
                if (!r) return {
                    success: r,
                    errorCode: o,
                    errorMsg: a
                };
                var {
                    collection: i
                } = JSON.parse(n), s = [];
                for (var l of i) {
                    var {
                        items: c,
                        description: u,
                        id: d,
                        title: p
                    } = l, h = {
                        title: p,
                        description: u,
                        id: d,
                        contents: c.collection.filter(e => -1 !== e.kind.indexOf("playlist") && (e.artwork_url || e.calculated_artwork_url)).map(e => {
                            var t, r;
                            return {
                                cover: null == (t = e.artwork_url || e.calculated_artwork_url) ? void 0 : t.replace("-large", "-t200x200"),
                                title: e.short_title || e.title,
                                description: e.short_description || (null == (r = e.user) ? void 0 : r.username),
                                id: e.id,
                                url: e.permalink_url,
                                kind: e.kind
                            }
                        })
                    };
                    s.push(h)
                }
                return {
                    success: r,
                    data: s
                }
            })()
        }
        matchPlaylist(e) {
            return e.match(/https?:\/\/(?:(?:www|m)\.)?soundcloud\.com\/(.*)\/sets\/(.*)/)
        }
        extractPlaylist(e) {
            var t = this;
            return _asyncToGenerator(function*() {
                var r, n;
                t.CLIENT_ID || (yield t.updateClientId());
                var o = {
                        success: !1,
                        url: e
                    },
                    a = t.matchPlaylist(e);
                if (!a) return o;
                var i = t.API_V2_BASE + "resolve?url=" + t.BASE_URL + a[1] + "/sets/" + a[2],
                    {
                        success: s,
                        data: l,
                        errMsg: c,
                        errCode: u
                    } = yield t.downloadJSON(i);
                if (o = Object.assign({}, o, {
                        success: s,
                        errorCode: u,
                        errorMsg: c
                    }), !s) return o;
                var {
                    tracks: d,
                    title: p,
                    description: h,
                    artwork_url: f,
                    id: y,
                    user: m
                } = l, v = null == (r = f || (null == (n = d[0]) ? void 0 : n.artwork_url)) ? void 0 : r.replace("-large", "-t500x500"), g = function() {
                    var e = _asyncToGenerator(function*(e) {
                        return yield get$1("https://api-v2.soundcloud.com/tracks?ids=" + encodeURIComponent(e) + "&playlistId=" + y + "&client_id=" + t.CLIENT_ID + "&app_version=" + t.SC_VERSION + "&app_locale=en", {
                            method: "GET"
                        })
                    });
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), E = [], b = [];
                if (s = !1, Array.isArray(d) && d.length > 0) {
                    var T = 0;
                    for (var _ of d) {
                        if (_.id && E.push(String(_.id)), E.length >= 50 || T === d.length - 1 && E.length > 0) {
                            var {
                                success: S,
                                errCode: I,
                                errMsg: w,
                                result: R
                            } = yield g(E.join(","));
                            if (S) {
                                s = S;
                                var x = JSON.parse(R);
                                if (Array.isArray(x)) {
                                    var P = [];
                                    for (var N of x) {
                                        var {
                                            data: C
                                        } = yield t.extractInfoDict(N, "", "", !1);
                                        P.push(C)
                                    }
                                    P = P.sort((e, t) => E.indexOf(e.id) - E.indexOf(t.id)), b.push(...P)
                                }
                            }
                            E = [], I && (u = I), w && (c = w)
                        }
                        T++
                    }
                }
                return o = Object.assign({}, o, {
                    success: s,
                    errorCode: u,
                    errorMsg: c
                }), s ? Object.assign({}, o, {
                    data: {
                        title: p,
                        description: h,
                        thumbnail: [{
                            url: v
                        }],
                        creator: m.username,
                        contents: b,
                        url: e
                    }
                }) : o
            })()
        }
        search(e, t, r = 0, n = 10, o) {
            var a = this;
            return _asyncToGenerator(function*() {
                var i, s;
                if (o && o.length > 0) i = o;
                else {
                    i = "https://api-mobi.soundcloud.com/search", t == JSBridgePayloadSearchFilter.Track ? i += "/tracks" : t == JSBridgePayloadSearchFilter.Playlist && (i += "/playlists_without_albums");
                    var l = yield new Promise(e => {
                        vsplayer.queryUserInfo(e)
                    }), {
                        lang: c
                    } = l, u = (null == c ? void 0 : c.split("-")[0].toLowerCase()) || "en";
                    s = {
                        limit: n,
                        offset: r,
                        q: encodeURIComponent(e),
                        variant_ids: "",
                        app_version: a.SC_VERSION,
                        app_locale: u
                    }
                }
                var {
                    success: d,
                    data: p,
                    errMsg: h,
                    errCode: f
                } = yield a.downloadJSON(i, s), y = {
                    success: d,
                    errorMsg: h,
                    errorCode: f,
                    data: {
                        result: [],
                        total: 0,
                        nextOffset: r,
                        next_href: ""
                    }
                };
                if (d) {
                    var m = p.collection;
                    if (m) {
                        var v = [];
                        for (var g of m) try {
                            var {
                                data: E
                            } = yield a.extractInfoDict(g, "", "", !1);
                            E && v.push(E)
                        } catch (e) {
                            console.log("error", e)
                        }
                        y.data.result = v, y.data.nextOffset = Number(r) + m.length
                    }
                    y.data.next_href = p.next_href, y.data.total = p.total_results
                }
                return y
            })()
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
            return _asyncToGenerator(function*() {
                var r = e.match(t._VAILD_URL_),
                    n = {
                        data: {},
                        errorMsg: ""
                    };
                if (!r) return n.errorMsg = "url error", n;
                var o = r[1],
                    a = yield t.downloadWebpage(e);
                if ("" === a) return n.errorMsg = "download webpage error", n;
                var i = a.match(/vimeo\.(?:clip|vod_title)_page_config\s*=\s*({.+?});/);
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
                            videoId: o,
                            webURL: e
                        };
                    l.description = s.clip.description;
                    var c = s.player.config_url,
                        {
                            data: u
                        } = yield t.downloadJSON(c);
                    if (!u) return n.errorMsg = "download json config error", n;
                    var d = u.video;
                    for (var p in l.title = d.title, l.uploader = d.owner.name, l.duration = d.duration, d.thumbs) l.thumbnails.push({
                        url: d.thumbs[p],
                        width: Number(p),
                        height: Number(p)
                    });
                    for (var h = u.request.files.progressive, f = 0; f < h.length; f++) {
                        var y = h[f];
                        "[object String]" !== Object.prototype.toString.call(null == y ? void 0 : y.profile) && l.formats.push({
                            filesize: 0,
                            width: null == y ? void 0 : y.width,
                            height: null == y ? void 0 : y.height,
                            type: y.mime,
                            quality: y.quality,
                            itag: 0,
                            fps: null == y ? void 0 : y.fps,
                            bitrate: 0,
                            url: y.url,
                            ext: y.mime
                        })
                    }
                    n.data = l
                }
                return n
            })()
        }
    }
    class FacebookBaseInfoExtractor extends InfoExtractor {
        constructor() {
            super(...arguments), this._HEADERS = {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
            }
        }
        getFacebookCookies() {
            return _asyncToGenerator(function*() {
                var {
                    raw: e
                } = yield getCookie("facebook.com");
                return e
            })()
        }
        getWebpage(e) {
            var t = this;
            return _asyncToGenerator(function*() {
                var r = yield t.getFacebookCookies();
                t._HEADERS.Cookie = r;
                var {
                    success: n,
                    result: o
                } = yield get$1(e, {
                    method: "GET",
                    extraHeaders: Object.assign({}, t._HEADERS)
                });
                return n ? o : ""
            })()
        }
    }
    class FacebookIE extends FacebookBaseInfoExtractor {
        constructor() {
            super(...arguments), this._VAILD_URL_ = /(?:https?:\/\/(?:[\w-]+\.)?(?:facebook\.com|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd\.onion)\/(?:[^#]*?\#!\/)?(?:(?:video\/video\.php|photo\.php|video\.php|video\/embed|story\.php|watch(?:\/live)?\/?)\?(?:.*?)(?:v|video_id|story_fbid)=|[^/]+\/videos\/(?:[^/]+\/)?|[^/]+\/posts\/|groups\/[^/]+\/permalink\/|watchparty\/)|facebook:)([0-9]+)/
        }
        realExtract(e) {
            var t = this;
            return _asyncToGenerator(function*() {
                var r = e.match(t._VAILD_URL_),
                    n = {
                        success: !1,
                        data: {},
                        errorMsg: "",
                        url: e
                    };
                if (!r) return n.errorMsg = "url error", n;
                var o = r[1],
                    a = yield t.getWebpage(e.replace("://m.facebook.com/", "://www.facebook.com/"));
                if ("" === a) return n.errorMsg = "download webpage error", n;
                var i = a.match(/handleWithCustomApplyEach\([^,]+,\s*({.*?"(?:dash_manifest|playable_url(?:_quality_hd)?)"\s*:\s*"[^"]+".*?})\);/);
                if (i && i.length > 1) {
                    var s = JSON.parse(i[1]),
                        l = (null == s ? void 0 : s.require).find(e => "RelayPrefetchedStreamCache" === e[0])[3][1].__bbox.result.data.video.story.attachments[0].media;
                    if (l) {
                        var c = {
                            isLive: !1,
                            title: "",
                            formats: [{
                                url: l.playable_url
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
                            videoId: l.id || l.videoId || o,
                            webURL: e
                        };
                        n.data = c, n.success = !0
                    } else n.errorMsg = "no stream data "
                } else n.errorMsg = "no match config";
                return n
            })()
        }
        hmsToSecondsOnly(str) {
            const p = str.split(":");
            let s = 0,
                m = 1;
            while (p.length > 0) {
                s += m * parseInt(p.pop(), 10);
                m *= 60
            }
            return s
        }
        search(k) {
            var t = this;
            return _asyncToGenerator(function*() {
                var {
                    success: n,
                    result: o
                } = yield get$1("https://www.facebook.com/watch/search?q=" + encodeURIComponent(k), {
                    method: "GET",
                    extraHeaders: {
                        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:99.0) Gecko/20100101 Firefox/99.0",
                        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                        "Accept-Language": "en",
                        "Upgrade-Insecure-Requests": "1",
                        "Sec-Fetch-Dest": "document",
                        "Sec-Fetch-Mode": "navigate",
                        "Sec-Fetch-Site": "cross-site",
                        "Sec-Gpc": "1"
                    }
                });
                var result = {
                    success: false,
                    next: "",
                    data: []
                };
                if (!n) return result;
                var reg1 = /\[\"adp_SearchCometResultsInitialResultsQueryRelayPreloader/g;
                var r = o.search(reg1);
                var html = o.substring(r + o.substring(r).indexOf("{"));
                try {
                    var _YT_INITIAL_DATA_RE = /({\"__bbox\".+?})\]\]\,\[\"RequireDeferredReference\"/;
                    var matchResult = html.match(_YT_INITIAL_DATA_RE);
                    var pp;
                    if (matchResult) {
                        pp = JSON.parse(matchResult[1])
                    }
                    var arr = pp["__bbox"]["result"]["data"]["serpResponse"]["results"]["edges"].map(item => {
                        var viewModel = false;
                        try {
                            viewModel = item["relay_rendering_strategy"]["view_model"];
                            var p = {
                                title: viewModel["video_metadata_model"]["title"],
                                author: viewModel["video_metadata_model"]["video_owner_profile"]["name"],
                                publish: viewModel["video_metadata_model"]["relative_time_string"],
                                duration1: viewModel["video_thumbnail_model"]["video_duration_text"],
                                duration: t.hmsToSecondsOnly(viewModel["video_thumbnail_model"]["video_duration_text"]),
                                id: viewModel["video_click_model"]["click_metadata_model"]["video_id"],
                                url: `https://www.facebook.com/watch/?v=${viewModel["video_click_model"]["click_metadata_model"]["video_id"]}`,
                                cover: viewModel["video_thumbnail_model"]["thumbnail_image"]["uri"]
                            };
                            return p
                        } catch (error) {
                            return false
                        }
                    }).filter(Boolean);
                    result.success = true;
                    result.data = arr
                } catch (error) {}
                return result
            })()
        }
    }
    var soundcloudIE = new SoundcloudIE,
        vimeoIE = new VimeoIE,
        facebookIE = new FacebookIE,
        build_number = parseInt("26", 10),
        youTubeChannelMusicResponse, sendParseResult = function() {
            var e = _asyncToGenerator(function*(e, t) {
                var r = "videoDetail" === t,
                    {
                        success: n,
                        url: o,
                        data: a,
                        errorMSG: i,
                        videoId: s,
                        source: l,
                        duration: c,
                        mode: u
                    } = e,
                    d = a || {},
                    {
                        htmlResponse: p
                    } = d,
                    h = _objectWithoutPropertiesLoose(d, ["htmlResponse"]),
                    f = e.errorCode,
                    y = (i || "").includes("__notRetry"),
                    m = i || "";
                y && (m = i.split("@")[1]);
                var v = {
                        success: n,
                        errorCode: f,
                        url: o,
                        data: h,
                        videoId: s,
                        notRetry: y,
                        noAuthorization: !1
                    },
                    g = {
                        build_number: build_number,
                        action: n ? "success" : "failure",
                        url: o,
                        error_msg: m,
                        no_authorization: !1,
                        source: l
                    };
                if (null != l && l.includes("@@v=FLGCGc7sAUw") && (v.url = "https://www.youtube.com/watch?v=12345678"), n) try {
                    var {
                        errCode: E
                    } = yield get$1(r ? h.formats[0].url : h[0].url, {
                        method: "HEAD"
                    });
                    200 !== E && (v.noAuthorization = !0, g.action = "failure", g.error_msg = "no authorization", p && Math.random() < .1 && upload({
                        content: p + JSON.stringify(h),
                        mimetype: "text/html",
                        filename: "response"
                    }))
                } catch (e) {}
                if (c && (g.duration = c), "api" === u && v.noAuthorization)
                    if (yield getRemoteConfig("useBackupModeRetryOnce", !1)) try {
                        backupExtractVideoDetail(v.url, g.source)
                    } catch (e) {
                        vsplayer.finishExtractor(v), eventTrack(EventName.EXTRACT, g)
                    } else vsplayer.finishExtractor(v), eventTrack(EventName.EXTRACT, g);
                    else vsplayer.finishExtractor(v), eventTrack(EventName.EXTRACT, g)
            });
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }();

    function sendError(e, t, r, n) {
        var o = {
            success: !1,
            url: e,
            errorMSG: t,
            source: r
        };
        "is live" === t && (o.errorCode = 101), sendParseResult(o, n)
    }

    function extract(e) {
        return _extract.apply(this, arguments)
    }

    function _extract() {
        return (_extract = _asyncToGenerator(function*(e) {
            new YouTube({
                url: e,
                onCompleteCallback(t, r) {
                    if (Array.isArray(t)) {
                        var n = t.map(e => ({
                            url: e.url,
                            qualityLabel: e.quality
                        }));
                        0 === n.length ? sendError(e, ExtractErrorMsg.URL_EMPTY) : sendParseResult({
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
                    sendParseResult({
                        url: e,
                        success: !1,
                        videoId: t.videoId,
                        errorMSG: t.errorMSG,
                        errorCode: t.errCode
                    })
                }
            })
        })).apply(this, arguments)
    }

    function backupExtractVideoDetail(e, t, r) {
        return _backupExtractVideoDetail.apply(this, arguments)
    }

    function _backupExtractVideoDetail() {
        return (_backupExtractVideoDetail = _asyncToGenerator(function*(e, t, r) {
            return yield new Promise(n => {
                new YouTube({
                    url: e,
                    parseDetailInfo: !0,
                    simpleMode: r,
                    onCompleteCallback(r, o) {
                        var a = r;
                        a.webURL = e, n({
                            success: !0,
                            data: a,
                            url: e,
                            videoId: o,
                            errorMSG: ExtractErrorMsg.DEFAULT,
                            source: t
                        })
                    },
                    onError(r) {
                        n({
                            success: !1,
                            url: e,
                            errorMSG: (null == r ? void 0 : r.message) || ExtractErrorMsg.UNKNOW,
                            source: t
                        })
                    },
                    onNetworkError(r) {
                        n({
                            url: e,
                            source: t,
                            success: !1,
                            videoId: r.videoId,
                            errorMSG: r.errorMSG,
                            errorCode: r.errCode
                        })
                    }
                })
            })
        })).apply(this, arguments)
    }

    function sendPlaylistExtractResult(e, t) {
        var r = e,
            n = !0;
        t && (n = t.sendToNormal), n && vsplayer.finishExtractorPlaylist(r);
        var o = {
            action: r.success ? "success" : "failure",
            build_number: build_number,
            duration: r.spendTime,
            type: e.type,
            url: e.url
        };
        r.errMsg && (o.error_msg = r.errMsg), trackExtractLayout(o)
    }

    function extractYouTubePlaylist(e) {
        return _extractYouTubePlaylist.apply(this, arguments)
    }

    function _extractYouTubePlaylist() {
        return (_extractYouTubePlaylist = _asyncToGenerator(function*(e) {
            var t = Date.now();
            try {
                return {
                    data: yield getVideoFromPlayList(e),
                    success: !0,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_playlist"
                }
            } catch (r) {
                return {
                    data: {},
                    success: !1,
                    spendTime: (Date.now() - t) / 1e3,
                    url: e,
                    errMsg: (null == r ? void 0 : r.message) || "unknow error",
                    type: "youtube_playlist"
                }
            }
        })).apply(this, arguments)
    }

    function extractYouTubeMusicPlaylist(e) {
        return _extractYouTubeMusicPlaylist.apply(this, arguments)
    }

    function _extractYouTubeMusicPlaylist() {
        return (_extractYouTubeMusicPlaylist = _asyncToGenerator(function*(e) {
            var t = Date.now();
            try {
                return {
                    data: yield getYouTubeMusicPlayList(e),
                    success: !0,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_music_playlist"
                }
            } catch (r) {
                return {
                    data: {},
                    success: !1,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_music_playlist",
                    errMsg: (null == r ? void 0 : r.message) || "unknow error"
                }
            }
        })).apply(this, arguments)
    }

    function extractYouTubeMusicChannelPlaylist(e) {
        return _extractYouTubeMusicChannelPlaylist.apply(this, arguments)
    }

    function _extractYouTubeMusicChannelPlaylist() {
        return (_extractYouTubeMusicChannelPlaylist = _asyncToGenerator(function*(e) {
            var t = Date.now();
            try {
                return {
                    data: yield getYouTubeMusicChannelPlayList(e),
                    success: !0,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_music_channel_playlist"
                }
            } catch (r) {
                return {
                    data: {},
                    success: !1,
                    url: e,
                    spendTime: (Date.now() - t) / 1e3,
                    type: "youtube_music_channel_playlist",
                    errMsg: (null == r ? void 0 : r.message) || "unknow error"
                }
            }
        })).apply(this, arguments)
    }

    function extractYouTubeChannelMusicLayout() {
        return _extractYouTubeChannelMusicLayout.apply(this, arguments)
    }

    function _extractYouTubeChannelMusicLayout() {
        return (_extractYouTubeChannelMusicLayout = _asyncToGenerator(function*() {
            trackExtractLayout({
                action: "start",
                build_number: build_number,
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
        })).apply(this, arguments)
    }

    function trackExtractLayout(e) {
        eventTrack(EventName.EXTRACT_LAYOUT, e)
    }

    function extractYouTubeMusicData(e, t) {
        return _extractYouTubeMusicData.apply(this, arguments)
    }

    function _extractYouTubeMusicData() {
        return (_extractYouTubeMusicData = _asyncToGenerator(function*(e, t) {
            trackExtractLayout({
                action: "start",
                build_number: build_number,
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
                    build_number: build_number,
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
                    build_number: build_number,
                    display_type: e,
                    error_msg: (null == t ? void 0 : t.message) || "unknow error",
                    type: "youtube_music_layout"
                }), {
                    type: e,
                    data: []
                }
            }
        })).apply(this, arguments)
    }

    function onerror(...e) {}

    function sendYouTubeMusicLayout(e, t) {
        "homePage" === e ? vsplayer.finishExtractorHomePage(t) : "moodsAndGeners" === e ? vsplayer.finishExtractorGeners(t) : vsplayer.finishExtractorCharts(t)
    }

    function getHomePage() {
        return _getHomePage.apply(this, arguments)
    }

    function _getHomePage() {
        return (_getHomePage = _asyncToGenerator(function*() {
            var e = [];
            if (false) try {
                e = yield(new Music).getPositions([MusicPagePosition.NEW_VIDEOS])
            } catch (e) {} else try {
                youTubeChannelMusicResponse || (youTubeChannelMusicResponse = yield extractYouTubeChannelMusicLayout()), e = youTubeChannelMusicResponse
            } catch (e) {}
            return e
        })).apply(this, arguments)
    }

    function getHomePage1() {
        return _getHomePage2.apply(this, arguments)
    }

    function _getHomePage2() {
        return (_getHomePage2 = _asyncToGenerator(function*() {
            var e = [];
            try {
                e = yield(new Music).getPositions([MusicPagePosition.NEW_VIDEOS])
            } catch (e) {}
            sendYouTubeMusicLayout("homePage", e)
        })).apply(this, arguments)
    }

    function getCharts(e) {
        return _getCharts.apply(this, arguments)
    }

    function _getCharts() {
        return (_getCharts = _asyncToGenerator(function*(e) {
            sendYouTubeMusicLayout("chart", yield extractYouTubeMusicData(MusicPagePosition.CHARTS, {
                countryCode: e
            }))
        })).apply(this, arguments)
    }

    function getMoodsAndGeners() {
        return _getMoodsAndGeners.apply(this, arguments)
    }

    function _getMoodsAndGeners() {
        return (_getMoodsAndGeners = _asyncToGenerator(function*() {
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
        })).apply(this, arguments)
    }

    function extractVideoDetail(e, t, r) {
        return _extractVideoDetail.apply(this, arguments)
    }

    function _extractVideoDetail() {
        return (_extractVideoDetail = _asyncToGenerator(function*(e, t, r) {
            var n = e,
                o = t;
            if (!(yield getRemoteConfig("use_api", !0))) return yield backupExtractVideoDetail(n, o, r);
            try {
                var a = yield new Promise(e => {
                    vsplayer.queryUserInfo(e)
                }), i = yield Api$1.queryVideoInfo(n, r, a);
                return i.webURL = n, {
                    success: !0,
                    data: i,
                    url: n,
                    videoId: i.videoId,
                    errorMSG: ExtractErrorMsg.DEFAULT,
                    source: o
                }
            } catch (e) {
                return e instanceof BackupExtractError ? yield backupExtractVideoDetail(n, o): {
                    url: n,
                    source: o,
                    success: !1,
                    errorMSG: e.message
                }
            }
        })).apply(this, arguments)
    }

    function extractVimeoVideoDetail(e) {
        return _extractVimeoVideoDetail.apply(this, arguments)
    }

    function _extractVimeoVideoDetail() {
        return (_extractVimeoVideoDetail = _asyncToGenerator(function*(e, t = "vimeo") {
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
                    errorMsg: o
                } = yield vimeoIE.realExtract(e);
            o ? (r.success = !1, r.errorCode = 100) : (r.videoId = null == n ? void 0 : n.videoId, r.data = n), vsplayer.finishExtractor(r)
        })).apply(this, arguments)
    }

    function extractFacebookVideoDetail(e) {
        return _extractFacebookVideoDetail.apply(this, arguments)
    }

    function _extractFacebookVideoDetail() {
        return (_extractFacebookVideoDetail = _asyncToGenerator(function*(e, t = "facebook") {
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
                    errorMsg: o
                } = yield facebookIE.realExtract(e);
            o ? (r.success = !1, r.errorCode = 100) : (r.videoId = null == n ? void 0 : n.videoId, r.data = n), vsplayer.finishExtractor(r)
        })).apply(this, arguments)
    }

    function extractYtbChannel() {
        return _extractYtbChannel.apply(this, arguments)
    }

    function _extractYtbChannel() {
        return (_extractYtbChannel = _asyncToGenerator(function*() {
            var e = yield Api$1.fetchChannelID();
            vsplayer.finishExtractorYTBChannel(e)
        })).apply(this, arguments)
    }

    function postMessageToJSBridge(e) {
        return _postMessageToJSBridge.apply(this, arguments)
    }

    function _postMessageToJSBridge() {
        return (_postMessageToJSBridge = _asyncToGenerator(function*(e, retry) {
            var t = JSON.parse(e),
                r = t.event === JSBridgeEventName.Related;
            if (t.event === JSBridgeEventName.Extract || r) {
                var n = t.data;
                if (n && n.url)
                    if (t.source == JSBridgeEventSource.YTB) {
                        var o = n.url,
                            a = getQueryVariables(o),
                            i = a.v,
                            s = o.indexOf("youtu.be/"),
                            l = -1 !== s;
                        l && (i = o.substring(s + "youtu.be/".length));
                        var c = Object.assign({}, t, {
                                data: {
                                    success: !1
                                }
                            }),
                            u = a.list,
                            d = -1 !== o.indexOf("/channel/MPREb_");
                        if (r && !i || !i && !u && !d) return c = Object.assign({}, c, {
                            data: {
                                success: !1,
                                errorMsg: "url is invaild",
                                data: {
                                    url: o
                                }
                            }
                        }), void vsplayer.sendMessageToNative(c);
                        if (r) {
                            var p = yield new Promise(e => {
                                vsplayer.queryUserInfo(e)
                            }), h = yield Api$1.queryRelated(i, p);
                            return c = Object.assign({}, c, {
                                data: h
                            }), void vsplayer.sendMessageToNative(c)
                        }
                        var f = o,
                            y = -1 !== f.indexOf("music.youtube.com"),
                            m = -1 !== f.indexOf("youtube.com") || l;
                        if (y || m) {
                            f = "https://" + (y ? "music" : "www") + ".youtube.com/watch", i && (f = f + "?v=" + i), u && (f = f + (i ? "&" : "?") + "list=" + u);
                            var [v, g] = yield Promise.all([!i || extractVideoDetail(f), !u || (y ? extractYouTubeMusicPlaylist(f) : extractYouTubePlaylist(f))]), E = !1, b = null, T = null, _ = null;
                            if ("boolean" != typeof v) {
                                var {
                                    success: S,
                                    data: I,
                                    errorMSG: w
                                } = v;
                                b = w, (E = S) && (T = I)
                            }
                            if ("boolean" != typeof g) {
                                var {
                                    success: R,
                                    data: x,
                                    errorMSG: P
                                } = g;
                                R && (_ = x), i || (E = R, b = P)
                            }
                            c = Object.assign({}, c, {
                                data: {
                                    success: E,
                                    errorMsg: b,
                                    data: {
                                        music: T,
                                        library: _,
                                        url: f
                                    }
                                }
                            });
                            if (!c.data.success && y && !retry) {
                                return postMessageToJSBridge(e.replace("music.youtube.com", "www.youtube.com"), true)
                            }
                            vsplayer.sendMessageToNative(c)
                        } else if (d) {
                            var {
                                success: N,
                                data: C,
                                errMsg: O
                            } = yield extractYouTubeMusicChannelPlaylist(f);
                            c = Object.assign({}, c, {
                                data: {
                                    success: N,
                                    errorMsg: O,
                                    data: {
                                        library: C,
                                        url: f
                                    }
                                }
                            }), vsplayer.sendMessageToNative(c)
                        } else c = Object.assign({}, c, {
                            data: {
                                success: !1,
                                errorMsg: "url is not support",
                                data: {
                                    url: o
                                }
                            }
                        }), vsplayer.sendMessageToNative(c)
                    } else if (t.source == JSBridgeEventSource.SC) {
                    var M = n.url,
                        A = n.id;
                    if (r) {
                        var L = yield soundcloudIE.getNextPlay(A || "", M);
                        return void vsplayer.sendMessageToNative(Object.assign({}, t, {
                            data: L
                        }))
                    }
                    if (soundcloudIE.matchPlaylist(M)) {
                        var D = yield soundcloudIE.extractPlaylist(M);
                        vsplayer.sendMessageToNative(Object.assign({}, t, {
                            data: Object.assign({}, D, {
                                data: {
                                    library: D.data,
                                    url: M
                                }
                            })
                        }))
                    } else {
                        var U = yield soundcloudIE.realExtract(n.url);
                        vsplayer.sendMessageToNative(Object.assign({}, t, {
                            data: Object.assign({}, U, {
                                data: {
                                    music: U.data,
                                    url: M
                                }
                            })
                        }))
                    }
                } else if (t.source == JSBridgeEventSource.FB) {
                    var k = yield facebookIE.realExtract(n.url);
                    vsplayer.sendMessageToNative(Object.assign({}, t, {
                        data: Object.assign({}, k, {
                            data: {
                                music: k.data,
                                url: M
                            }
                        })
                    }))
                }
            } else if (t.event === JSBridgeEventName.Search) {
                var j = t.data,
                    G = {
                        success: !1
                    };
                try {
                    var B;
                    if (t.source == JSBridgeEventSource.YTB) {
                        if (j.filter == JSBridgePayloadSearchFilter.YouTubeMusic) {
                            G = j.next && (null == (B = j.next) ? void 0 : B.length) > 0 ? yield core.nextPage(j.keyword, j.next): yield core.getSearch(j.keyword)
                        } else {
                            G = j.next && (null == (B = j.next) ? void 0 : B.length) > 0 ? yield search.nextPage(j.next): yield search.go(j.keyword, j.filter)
                        }
                    } else if (t.source == JSBridgeEventSource.SC) {
                        G = yield soundcloudIE.search(j.keyword, j.filter, j.offset, j.limit, j.next)
                    } else if (t.source == JSBridgeEventSource.FB) {
                        G = yield facebookIE.search(j.keyword)
                    }
                } catch (e) {}
                vsplayer.sendMessageToNative(Object.assign({}, t, {
                    data: Object.assign({}, G)
                }))
            } else if (t.event === JSBridgeEventName.Layout) {
                var H = null;
                if (t.source == JSBridgeEventSource.SC) H = yield soundcloudIE.extractLayout();
                else {
                    var Y = yield getHomePage();
                    H = {
                        success: Y && Array.isArray(Y) && Y.length > 0,
                        data: Y
                    }
                }
                vsplayer.sendMessageToNative(Object.assign({}, t, {
                    data: Object.assign({}, H)
                }))
            }
        })).apply(this, arguments)
    }
    console.log("version: " + build_number + " build_time: 2022-03-03 18:45:42"), console.trace(), exports.YouTubeApi = Api$1, exports.backupExtractVideoDetail = backupExtractVideoDetail, exports.extract = extract, exports.extractFacebookVideoDetail = extractFacebookVideoDetail, exports.extractVideoDetail = extractVideoDetail, exports.extractVimeoVideoDetail = extractVimeoVideoDetail, exports.extractYouTubeChannelMusicLayout = extractYouTubeChannelMusicLayout, exports.extractYouTubeMusicChannelPlaylist = extractYouTubeMusicChannelPlaylist, exports.extractYouTubeMusicData = extractYouTubeMusicData, exports.extractYouTubeMusicPlaylist = extractYouTubeMusicPlaylist, exports.extractYouTubePlaylist = extractYouTubePlaylist, exports.extractYtbChannel = extractYtbChannel, exports.getCharts = getCharts, exports.getHomePage = getHomePage, exports.getHomePage1 = getHomePage1, exports.getMoodsAndGeners = getMoodsAndGeners, exports.onerror = onerror, exports.postMessageToJSBridge = postMessageToJSBridge, exports.search = search, exports.soundcloudIE = soundcloudIE, Object.defineProperty(exports, "__esModule", {
        value: !0
    })
});

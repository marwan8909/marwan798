(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        ha = {},
        ia = {};

    function ja(a, b, c) {
        if (!c || null != a) {
            c = ia[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }

    function ka(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ma;
    if (fa && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma;

    function ra(a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Fg = b.prototype
    }
    ka("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        ra(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ka("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var u = this || self;

    function sa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = u, e = 0; e < c.length; e++)
                if (d = d[c[e]], null == d) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return null != a ? a : b
    }

    function ta(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function va(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function wa(a) {
        return Object.prototype.hasOwnProperty.call(a, xa) && a[xa] || (a[xa] = ++ya)
    }
    var xa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ya = 0;

    function za(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Aa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ca(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ca = za : Ca = Aa;
        return Ca.apply(null, arguments)
    }

    function Da(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ea() {
        return Date.now()
    }

    function Fa(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ia(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Fg = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Mk = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ka(a) {
        return a
    };
    var La = {
        Nj: 0,
        Mj: 1,
        Lj: 2
    };

    function Na(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Na);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ia(Na, Error);
    Na.prototype.name = "CustomError";
    var Oa;

    function Pa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Na.call(this, c + a[d])
    }
    Ia(Pa, Na);
    Pa.prototype.name = "AssertionError";

    function Qa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ra(a) {
        if (!Sa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ta, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ua, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ya, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Za, "&#0;"));
        return a
    }
    var Ta = /&/g,
        Ua = /</g,
        Wa = />/g,
        Xa = /"/g,
        Ya = /'/g,
        Za = /\x00/g,
        Sa = /[\x00&<>"']/;

    function $a(a, b) {
        return -1 != a.indexOf(b)
    }

    function bb(a) {
        var b = cb();
        let c = 0;
        b = Qa(String(b)).split(".");
        a = Qa(String(a)).split(".");
        const d = Math.max(b.length, a.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = b[g] || "",
                f = a[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = db(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || db(0 == e[2].length, 0 == f[2].length) || db(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function db(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var eb = sa(610401301, !1),
        fb = sa(516931134, sa(1, !0));

    function gb() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var hb;
    const ib = u.navigator;
    hb = ib ? ib.userAgentData || null : null;

    function jb(a) {
        return eb ? hb ? hb.brands.some(({
            brand: b
        }) => b && $a(b, a)) : !1 : !1
    }

    function v(a) {
        return $a(gb(), a)
    };

    function mb() {
        return eb ? !!hb && 0 < hb.brands.length : !1
    }

    function nb() {
        return mb() ? !1 : v("Opera")
    }

    function ob() {
        return mb() ? !1 : v("Trident") || v("MSIE")
    }

    function pb() {
        return mb() ? !1 : v("Edge")
    }

    function qb() {
        return mb() ? jb("Microsoft Edge") : v("Edg/")
    }

    function rb() {
        return v("Firefox") || v("FxiOS")
    }

    function sb() {
        return v("Safari") && !(tb() || (mb() ? 0 : v("Coast")) || nb() || pb() || qb() || (mb() ? jb("Opera") : v("OPR")) || rb() || v("Silk") || v("Android"))
    }

    function tb() {
        return mb() ? jb("Chromium") : (v("Chrome") || v("CriOS")) && !pb() || v("Silk")
    }

    function ub() {
        return v("Android") && !(tb() || rb() || nb() || v("Silk"))
    }

    function vb(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function cb() {
        var a = gb();
        if (ob()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = vb(b);
        return nb() ? a(["Version", "Opera"]) :
            pb() ? a(["Edge"]) : qb() ? a(["Edg"]) : v("Silk") ? a(["Silk"]) : tb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function wb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function xb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function yb(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function zb(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ab(a, b, c) {
        let d = c;
        xb(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Bb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Cb(a, b) {
        return 0 <= wb(a, b)
    }

    function Db(a, b) {
        b = wb(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Eb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Fb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Gb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Hb(a, b, c) {
        c = c || Ib;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            0 < h ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function Jb(a, b) {
        if (!ta(a) || !ta(b) || a.length != b.length) return !1;
        const c = a.length,
            d = Kb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function Ib(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Kb(a, b) {
        return a === b
    }

    function Lb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = Lb.apply(null, Gb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function Mb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Nb(a) {
        Nb[" "](a);
        return a
    }
    Nb[" "] = function() {};

    function Ob(a, b) {
        try {
            return Nb(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Pb = nb(),
        Qb = ob(),
        Rb = v("Edge"),
        Sb = Rb || Qb,
        Tb = v("Gecko") && !($a(gb().toLowerCase(), "webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
        Ub = $a(gb().toLowerCase(), "webkit") && !v("Edge");

    function Vb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var Wb;
    a: {
        var Xb = "",
            Yb = function() {
                var a = gb();
                if (Tb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Rb) return /Edge\/([\d\.]+)/.exec(a);
                if (Qb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Ub) return /WebKit\/(\S+)/.exec(a);
                if (Pb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Yb && (Xb = Yb ? Yb[1] : "");
        if (Qb) {
            var Zb = Vb();
            if (null != Zb && Zb > parseFloat(Xb)) {
                Wb = String(Zb);
                break a
            }
        }
        Wb = Xb
    }
    var $b = Wb,
        ac;
    if (u.document && Qb) {
        var bc = Vb();
        ac = bc ? bc : parseInt($b, 10) || void 0
    } else ac = void 0;
    var cc = ac;
    ub();
    tb();
    sb();
    var dc = {},
        ec = null;

    function fc(a) {
        var b = 3;
        void 0 === b && (b = 0);
        hc();
        b = dc[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function ic(a) {
        var b = [];
        jc(a, function(c) {
            b.push(c)
        });
        return b
    }

    function jc(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = ec[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        hc();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function hc() {
        if (!ec) {
            ec = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                dc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === ec[f] && (ec[f] = e)
                }
            }
        }
    };

    function kc(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const lc = /[-_.]/g,
        mc = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function nc(a) {
        return mc[a] || ""
    }

    function oc(a) {
        return null != a && a instanceof Uint8Array
    }
    let pc;
    var qc = {};
    let rc;

    function sc(a) {
        if (a !== qc) throw Error("illegal external caller");
    }

    function tc() {
        return rc || (rc = new uc(null, qc))
    }
    var uc = class {
        constructor(a, b) {
            sc(b);
            this.j = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.j
        }
    };
    const vc = Symbol();

    function wc(a, b) {
        if (vc) return a[vc] |= b;
        if (void 0 !== a.j) return a.j |= b;
        Object.defineProperties(a, {
            j: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function xc(a, b) {
        vc ? a[vc] && (a[vc] &= ~b) : void 0 !== a.j && (a.j &= ~b)
    }

    function w(a) {
        let b;
        vc ? b = a[vc] : b = a.j;
        return null == b ? 0 : b
    }

    function yc(a, b) {
        vc ? a[vc] = b : void 0 !== a.j ? a.j = b : Object.defineProperties(a, {
            j: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }

    function zc(a) {
        wc(a, 1);
        return a
    }

    function Ac(a) {
        return !!(w(a) & 2)
    }

    function Bc(a) {
        wc(a, 16);
        return a
    }

    function Cc(a, b) {
        yc(b, (a | 0) & -51)
    }

    function Dc(a, b) {
        yc(b, (a | 18) & -41)
    };
    var Ec = {};

    function Fc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Gc;

    function Hc(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new uc(a, qc) : tc();
            else if (a.constructor !== uc)
            if (oc(a)) {
                var d;
                c ? d = 0 == a.length ? tc() : new uc(a, qc) : d = a.length ? new uc(new Uint8Array(a), qc) : tc();
                a = d
            } else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }
    var Ic = Object.freeze(yc([], 23));

    function Jc(a) {
        if (w(a.N) & 2) throw Error();
    }

    function Kc(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Fc(b) ? b.g = 1 : a.push({
            g: 1
        })
    };
    const y = !fb;

    function Lc(a) {
        if (null != a && "number" !== typeof a) throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof a}: ${a}`);
        return a
    }

    function Mc(a) {
        return a
    }

    function Nc(a) {
        return a
    }

    function Oc(a) {
        return a
    }

    function Pc(a) {
        return a
    }

    function Qc(a) {
        return a
    }

    function Rc(a) {
        return a
    }

    function Sc(a, b, c) {
        let d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.ld === Ec) return a;
        if (d) return Tc(a, c), new b(a)
    }

    function Tc(a, b) {
        const c = w(a);
        let d = c;
        0 === d && (d |= b & 16);
        d |= b & 2;
        d !== c && yc(a, d)
    };

    function Uc(a) {
        const b = a.m + a.Ha;
        return a.ra || (a.ra = a.N[b] = {})
    }

    function z(a, b, c) {
        return -1 === b ? null : b >= a.m ? a.ra ? a.ra[b] : void 0 : c && a.ra && (c = a.ra[b], null != c) ? c : a.N[b + a.Ha]
    }

    function C(a, b, c, d) {
        Jc(a);
        return Vc(a, b, c, d)
    }

    function Vc(a, b, c, d) {
        a.C && (a.C = void 0);
        if (b >= a.m || d) return Uc(a)[b] = c, a;
        a.N[b + a.Ha] = c;
        (c = a.ra) && b in c && delete c[b];
        return a
    }

    function Wc(a, b, c) {
        return void 0 !== Xc(a, b, c, !1)
    }

    function Yc(a, b, c, d, e) {
        let f = z(a, b, d);
        Array.isArray(f) || (f = Ic);
        const g = w(f);
        g & 1 || zc(f);
        if (e) g & 2 || wc(f, 18), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && xc(f, 16) : (f = zc(Array.prototype.slice.call(f)), Vc(a, b, f, d))
        }
        return f
    }

    function Zc(a, b) {
        return Yc(a, b, 0, !1, Ac(a.N))
    }

    function $c(a, b) {
        const c = z(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && Vc(a, b, d);
        return d
    }

    function F(a, b) {
        a = z(a, b);
        return null == a ? a : !!a
    }

    function ad(a, b, c) {
        const d = Ac(a.N);
        let e = Yc(a, b, 1, void 0, d),
            f = w(e);
        if (!(f & 4)) {
            Object.isFrozen(e) && (e = zc(e.slice()), Vc(a, b, e));
            let g = 0,
                h = 0;
            for (; g < e.length; g++) {
                const k = c(e[g]);
                null != k && (e[h++] = k)
            }
            h < g && (e.length = h);
            f |= 5;
            d && (f |= 18);
            yc(e, f);
            f & 2 && Object.freeze(e)
        }!d && (f & 2 || Object.isFrozen(e)) && (e = Array.prototype.slice.call(e), wc(e, 5), Vc(a, b, e));
        return e
    }

    function H(a, b, c = !1) {
        return bd(F(a, b), c)
    }

    function cd(a, b, c, d) {
        if (null == c) return C(a, b, Ic);
        const e = w(c);
        if (!(e & 4)) {
            if (e & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
            for (let f = 0; f < c.length; f++) c[f] = d(c[f]);
            yc(c, e | 5)
        }
        return C(a, b, c)
    }

    function dd(a, b, c, d) {
        Jc(a);
        c !== d ? Vc(a, b, c) : Vc(a, b, void 0, !1);
        return a
    }

    function ed(a, b, c, d) {
        Jc(a);
        (c = fd(a, c)) && c !== b && null != d && Vc(a, c, void 0, !1);
        return Vc(a, b, d)
    }

    function fd(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != z(a, e) && (0 !== c && Vc(a, c, void 0, !1), c = e)
        }
        return c
    }

    function Xc(a, b, c, d) {
        const e = z(a, c, d);
        b = Sc(e, b, w(a.N));
        b !== e && null != b && Vc(a, c, b, d);
        return b
    }

    function J(a, b, c) {
        b = Xc(a, b, c, !1);
        if (null == b) return b;
        if (!Ac(a.N)) {
            const d = gd(b);
            d !== b && (b = d, Vc(a, c, b, !1))
        }
        return b
    }

    function hd(a, b, c, d, e, f) {
        var g = !!(f & 2);
        y && !a.l && (a.l = {});
        var h = y ? a.l[c] : void 0,
            k = Yc(a, c, 1 | (y ? 2 : 0), d, g);
        if (y ? !h : k === Ic || !(w(k) & 4)) {
            var l = k;
            h = y ? [] : void 0;
            k = !!(f & 2);
            g = !!(w(l) & 2);
            var m = l;
            !k && g && (l = Array.prototype.slice.call(l));
            var n = f | (g ? 2 : 0);
            f = g;
            let t = 0,
                A = 0;
            for (; t < l.length; t++) {
                var q = l[t];
                if (y) {
                    var r = b;
                    Array.isArray(q) ? (Tc(q, n), q = new r(q)) : q = void 0
                } else q = Sc(q, b, n);
                void 0 !== q && (f = f || !!(2 & w(q.N)), y ? h.push(q) : l[A++] = q)
            }
            y ? a.l[c] = h : A < t && (l.length = A);
            n = w(l);
            b = n | 1;
            b = y ? b | 32 : b | 4;
            b = f ? b & -9 : b | 8;
            n != b && (f = l, Object.isFrozen(f) &&
                (f = Array.prototype.slice.call(f)), yc(f, b), l = f);
            m !== l && Vc(a, c, l, d);
            y && (k || 1 === e && g) && wc(h, 18);
            (k || 1 === e) && Object.freeze(y ? h : l);
            return y ? h : l
        }
        if (3 === e) return y ? h : k;
        g || (y ? (d = Object.isFrozen(h), 1 !== e || d) ? 2 === e && d && (h = Array.prototype.slice.call(h), a.l[c] = h) : Object.freeze(h) : (g = Object.isFrozen(k), 1 === e ? g || Object.freeze(k) : (e = w(k), m = e & -19, g && (k = Array.prototype.slice.call(k), e = 0, Vc(a, c, k, d)), e !== m && yc(k, m))));
        return y ? h : k
    }

    function id(a, b, c) {
        var d = w(a.N),
            e = !!(d & 2);
        b = hd(a, b, c, void 0, e ? 1 : 2, d);
        a = y ? Yc(a, c, 3, void 0, e) : b;
        if (!(e || w(a) & 8)) {
            for (e = 0; e < b.length; e++) c = b[e], d = gd(c), c !== d && (b[e] = d, y && (a[e] = d.N));
            wc(a, 8)
        }
        return b
    }

    function jd(a, b, c) {
        Jc(a);
        null == c && (c = void 0);
        return Vc(a, b, c)
    }

    function ld(a, b, c, d) {
        Jc(a);
        null == d && (d = void 0);
        return ed(a, b, c, d)
    }

    function od(a, b, c, d) {
        Jc(a);
        var e = null == c ? Ic : y ? zc([]) : c;
        if (null != c) {
            var f = !!c.length;
            for (var g = 0; g < c.length; g++) {
                const h = c[g];
                f = f && !Ac(h.N);
                y && (e[g] = h.N)
            }
            f = 1 | (f ? 8 : 0) | (y ? 0 : 4);
            g = w(e);
            (g & f) !== f && (Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), yc(e, g | f));
            y && (a.l || (a.l = {}), a.l[b] = c)
        } else y && a.l && (a.l[b] = void 0);
        return Vc(a, b, e, d)
    }

    function pd(a, b, c, d, e, f, g) {
        var h = w(a.N);
        if (h & 2) throw Error();
        h = hd(a, c, b, f, 2, h);
        c = null != d ? d : new c;
        a = y ? Yc(a, b, 2, f, !1) : void 0;
        if (g && (0 > e || e > h.length)) throw Error();
        void 0 != e ? (h.splice(e, g, c), y && a.splice(e, g, c.N)) : (h.push(c), y && a.push(c.N));
        Ac(c.N) && xc(y ? a : h, 8)
    }

    function qd(a, b) {
        return bd(z(a, b), 0)
    }

    function rd(a, b) {
        a: if (a = z(a, b), null != a) {
            switch (typeof a) {
                case "string":
                    a = +a;
                    break a;
                case "number":
                    break a
            }
            a = void 0
        }return a
    }

    function sd(a) {
        a: if (a = z(a, 1), null != a) {
            switch (typeof a) {
                case "string":
                    a = +a;
                    break a;
                case "number":
                    break a
            }
            a = void 0
        }return a
    }

    function td(a, b) {
        return bd(z(a, b), 0)
    }

    function ud(a, b) {
        return z(a, b)
    }

    function vd(a, b, c) {
        return dd(a, b, null == c ? c : !!c, !1)
    }

    function K(a, b, c) {
        return dd(a, b, c, 0)
    }

    function wd(a, b, c) {
        return dd(a, b, c, "")
    }

    function bd(a, b) {
        return null == a ? b : a
    }

    function L(a, b) {
        return bd(z(a, b), "")
    }

    function xd(a, b) {
        return bd(z(a, b), 0)
    }

    function yd(a, b, c, d) {
        c = fd(a, d) === c ? c : -1;
        return J(a, b, c)
    }

    function zd(a, b, c) {
        return dd(a, b, c, 0)
    };
    let Ad;

    function Bd(a, b) {
        Ad = b;
        a = new a(b);
        Ad = void 0;
        return a
    };

    function Cd(a, b) {
        return Dd(b)
    }

    function Dd(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (w(a) & 128)) return a = Array.prototype.slice.call(a), Kc(a), a
                    } else {
                        if (oc(a)) return kc(a);
                        if (a instanceof uc) {
                            const b = a.j;
                            return null == b ? "" : "string" === typeof b ? b : a.j = kc(b)
                        }
                    }
        }
        return a
    };

    function Ed(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && w(a) & 1 ? void 0 : f && w(a) & 2 ? a : Fd(a, b, c, void 0 !== d, e, f);
            else if (Fc(a)) {
                const g = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = Ed(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Fd(a, b, c, d, e, f) {
        const g = w(a);
        d = d ? !!(g & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let h = 0; h < a.length; h++) a[h] = Ed(a[h], b, c, d, e, f);
        c(g, a);
        return a
    }

    function Gd(a) {
        return a.ld === Ec ? a.toJSON() : Dd(a)
    }

    function Hd(a, b) {
        a & 128 && Kc(b)
    };

    function Id(a, b, c = Dc) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = w(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return yc(a, d | 18), a;
                a = Fd(a, Id, d & 4 ? Dc : c, !0, !1, !0);
                b = w(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.ld === Ec ? Jd(a) : a
        }
    }

    function Kd(a, b, c, d, e, f, g) {
        (a = y ? a.l && a.l[c] : void 0) ? (d = w(a), d & 2 ? d = a : (f = zb(a, Jd), Dc(d, f), Object.freeze(f), d = f), od(b, c, d, e)) : C(b, c, Id(d, f, g), e)
    }

    function Jd(a) {
        if (Ac(a.N)) return a;
        a = Ld(a, !0);
        wc(a.N, 18);
        return a
    }

    function Ld(a, b) {
        const c = a.N;
        var d = Bc([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.ra;
        if (e) {
            d.length = c.length;
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (w(c) & 128) && Kc(d);
        b = b || Ac(a.N) ? Dc : Cc;
        d = Bd(a.constructor, d);
        a.pe && (d.pe = a.pe.slice());
        f = !!(w(c) & 16);
        const g = e ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Kd(a, d, h - a.Ha, c[h], !1, f, b);
        if (e)
            for (const h in e) Kd(a, d, +h, e[h], !0, f, b);
        return d
    }

    function gd(a) {
        if (!Ac(a.N)) return a;
        const b = Ld(a, !1);
        b.C = a;
        return b
    };

    function Md(a) {
        Gc = !0;
        try {
            return JSON.stringify(a.toJSON(), Cd)
        } finally {
            Gc = !1
        }
    }
    var M = class {
        constructor(a, b, c) {
            null == a && (a = Ad);
            Ad = void 0;
            var d = this.constructor.messageId;
            if (null == a) {
                a = d ? [d] : [];
                var e = !0;
                yc(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (d && d !== a[0]) throw Error();
                var f = wc(a, 0) | 32;
                e = 0 !== (16 & f);
                if (128 & f) throw Error();
                yc(a, f)
            }
            this.Ha = d ? 0 : -1;
            this.l = void 0;
            this.N = a;
            a: {
                f = this.N.length;d = f - 1;
                if (f && (f = this.N[d], Fc(f))) {
                    this.ra = f;
                    this.m = d - this.Ha;
                    break a
                }
                void 0 !== b && -1 < b ? (this.m = Math.max(b, d + 1 - this.Ha), this.ra = void 0) : this.m = Number.MAX_VALUE
            }
            if (this.ra && "g" in this.ra) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = e && !0;
                e = this.m;
                let h;
                for (d = 0; d < c.length; d++)
                    if (f = c[d], f < e) {
                        f += this.Ha;
                        var g = a[f];
                        g ? Nd(g, b) : a[f] = Ic
                    } else h || (h = Uc(this)), (g = h[f]) ? Nd(g, b) : h[f] = Ic
            }
        }
        toJSON() {
            const a = this.N;
            var b;
            Gc ? b = a : b = Fd(a, Gd, Hd, void 0, !1, !1);
            return b
        }
    };

    function Nd(a, b) {
        if (Array.isArray(a)) {
            var c = w(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && yc(a, c | d)
        }
    }
    M.prototype.ld = Ec;
    const Od = a => null !== a && void 0 !== a;
    let Pd = void 0;

    function Qd(a, b) {
        const c = Pd;
        Pd = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function Rd(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Bd(a, Bc(b))
            }
            return b
        }
    };

    function Sd(a, b) {
        this.l = a === Td && b || "";
        this.m = Ud
    }
    Sd.prototype.za = !0;
    Sd.prototype.j = function() {
        return this.l
    };

    function Vd(a) {
        return a instanceof Sd && a.constructor === Sd && a.m === Ud ? a.l : "type_error:Const"
    }

    function Wd(a) {
        return new Sd(Td, a)
    }
    var Ud = {},
        Td = {};
    var Xd = Wd("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function Yd() {
        return !1
    }

    function Zd() {
        return !0
    }

    function $d(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function ae(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function be(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function ce(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function de(a, b) {
        let c = 0;
        return function(d) {
            u.clearTimeout(c);
            const e = arguments;
            c = u.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function ee(a, b) {
        function c() {
            e = u.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var fe = {
            passive: !0
        },
        ge = be(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                u.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function he(a) {
        return a ? a.passive && ge() ? a : a.capture || !1 : !1
    }

    function ie(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, he(d)), !0) : !1
    }

    function je(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, he(d)), !0) : !1
    };

    function ke(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function le(a) {
        var b = me;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function ne(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function oe(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const pe = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function qe(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < pe.length; f++) c = pe[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var re = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var se;

    function te() {
        if (void 0 === se) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ka,
                        createScript: Ka,
                        createScriptURL: Ka
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                se = a
            } else se = a
        }
        return se
    };
    const ue = {};

    function ve(a) {
        return a instanceof we && a.constructor === we ? a.l : "type_error:SafeScript"
    }
    class we {
        constructor(a, b) {
            this.l = b === ue ? a : "";
            this.za = !0
        }
        toString() {
            return this.l.toString()
        }
        j() {
            return this.l.toString()
        }
    };
    var ye = class {
        constructor(a, b) {
            this.l = b === xe ? a : ""
        }
        toString() {
            return this.l + ""
        }
    };
    ye.prototype.za = !0;
    ye.prototype.j = function() {
        return this.l.toString()
    };

    function ze(a, b) {
        a = Ae.exec(Be(a).toString());
        var c = a[3] || "";
        return Ce(a[1] + De("?", a[2] || "", b) + De("#", c))
    }

    function Be(a) {
        return a instanceof ye && a.constructor === ye ? a.l : "type_error:TrustedResourceUrl"
    }

    function Ee(a, b) {
        var c = Vd(a);
        if (!Fe.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Ge, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Sd ? Vd(d) : encodeURIComponent(String(d))
        });
        return Ce(a)
    }
    var Ge = /%{(\w+)}/g,
        Fe = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Ae = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        xe = {};

    function Ce(a) {
        const b = te();
        a = b ? b.createScriptURL(a) : a;
        return new ye(a, xe)
    }

    function De(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var Ie = class {
        constructor(a, b) {
            this.l = b === He ? a : ""
        }
        toString() {
            return this.l.toString()
        }
    };
    Ie.prototype.za = !0;
    Ie.prototype.j = function() {
        return this.l.toString()
    };

    function Je(a) {
        return a instanceof Ie && a.constructor === Ie ? a.l : "type_error:SafeUrl"
    }
    var Ke = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Le = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Me(a) {
        if (a instanceof Ie) return a;
        a = "object" == typeof a && a.za ? a.j() : String(a);
        Le.test(a) ? a = new Ie(a, He) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Ke) ? new Ie(a, He) : null);
        return a
    }
    var He = {},
        Ne = new Ie("about:invalid#zClosurez", He);
    const Oe = {};

    function Pe(a) {
        return a instanceof Qe && a.constructor === Qe ? a.l : "type_error:SafeStyle"
    }

    function Re(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Se).join(" ") : Se(d), b += `${c}:${d};`)
            }
        return b ? new Qe(b, Oe) : Te
    }
    class Qe {
        constructor(a, b) {
            this.l = b === Oe ? a : "";
            this.za = !0
        }
        j() {
            return this.l
        }
        toString() {
            return this.l.toString()
        }
    }
    var Te = new Qe("", Oe);

    function Se(a) {
        if (a instanceof Ie) return 'url("' + Je(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof Sd) a = Vd(a);
        else {
            a = String(a);
            var b = a.replace(Ue, "$1").replace(Ue, "$1").replace(Ve, "url");
            if (We.test(b)) {
                if (b = !Xe.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Ye(a)
                }
                a = b ? Ze(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Pa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Ye(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const We = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Ve = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Ue = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Xe = /\/\*/;

    function Ze(a) {
        return a.replace(Ve, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = (Me(d) || Ne).j();
            return c + f + b + f + e
        })
    };
    const $e = {};

    function af(a) {
        return a instanceof bf && a.constructor === bf ? a.l : "type_error:SafeStyleSheet"
    }
    class bf {
        constructor(a, b) {
            this.l = b === $e ? a : "";
            this.za = !0
        }
        toString() {
            return this.l.toString()
        }
        j() {
            return this.l
        }
    };
    const cf = {};

    function df(a) {
        return a instanceof ef && a.constructor === ef ? a.l : "type_error:SafeHtml"
    }

    function ff(a) {
        return a instanceof ef ? a : gf(Ra("object" == typeof a && a.za ? a.j() : String(a)))
    }

    function gf(a) {
        const b = te();
        a = b ? b.createHTML(a) : a;
        return new ef(a, cf)
    }

    function hf(a, b, c) {
        var d = String(a);
        if (!jf.test(d)) throw Error("");
        if (d.toUpperCase() in kf) throw Error("");
        return lf(String(a), b, c)
    }

    function lf(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!jf.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof Sd) e = Vd(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!va(e)) throw Error("");
                            e instanceof Qe || (e = Re(e));
                            e = Pe(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in mf)
                                if (e instanceof ye) e = Be(e).toString();
                                else if (e instanceof Ie) e = Je(e);
                            else if ("string" === typeof e) e = (Me(e) || Ne).j();
                            else throw Error("");
                        }
                        e.za && (e = e.j());
                        f = `${f}="` +
                            Ra(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === re[a.toLowerCase()] ? b += ">" : (c = nf(c), b += ">" + df(c).toString() + "</" + a + ">");
        return gf(b)
    }

    function of (a) {
        const b = ff(pf),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = ff(e), c.push(df(e).toString()))
            };
        a.forEach(d);
        return gf(c.join(df(b).toString()))
    }

    function nf(a) {
        return of(Array.prototype.slice.call(arguments))
    }
    class ef {
        constructor(a, b) {
            this.l = b === cf ? a : "";
            this.za = !0
        }
        j() {
            return this.l.toString()
        }
        toString() {
            return this.l.toString()
        }
    }
    const jf = /^[a-zA-Z0-9-]+$/,
        mf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        kf = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var qf = gf("<!DOCTYPE html>"),
        pf = new ef(u.trustedTypes && u.trustedTypes.emptyHTML || "", cf),
        rf = gf("<br>");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function sf(a) {
        a: {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        }
        if ("javascript:" !== b) return a
    };

    function tf(a) {
        var b = uf(vf) || Ne;
        b = b instanceof Ie ? Je(b) : sf(b);
        void 0 !== b && (a.href = b)
    };

    function wf(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const xf = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function yf(a, b, c) {
        if (b instanceof ye) a.href = Be(b).toString();
        else {
            if (-1 === xf.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            b = b instanceof Ie ? Je(b) : sf(b);
            if (void 0 === b) return;
            a.href = b
        }
        a.rel = c
    };

    function zf(a) {
        var b;
        (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function Af(a, b) {
        a.src = Be(b);
        zf(a)
    };
    class Bf {
        constructor(a) {
            this.Xf = a
        }
    }

    function Cf(a) {
        return new Bf(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const vf = [Cf("data"), Cf("http"), Cf("https"), Cf("mailto"), Cf("ftp"), new Bf(a => /^[^:]*([/?#]|$)/.test(a))];

    function uf(a = vf) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Bf && c.Xf("#")) return new Ie("#", He)
        }
    };

    function Df(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Af(f, a);
            "complete" !== b.document.readyState ? ie(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Ef(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.nb}`;
        let c = void 0;
        try {
            c = await Ff(b)
        } catch (g) {}
        if (c) {
            b = a.Gb || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.m ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.v,
                tf: c.bg_hash_basename,
                sf: c.bg_binary,
                Zf: a.j + "_" + a.l,
                Gb: b,
                nb: a.nb,
                tc: d,
                Gc: e,
                rc: f
            }
        }
    }
    let Ff = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Gf(a) {
        var b = await Ef(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.tf,
                _bgp_: b.sf,
                _li_: b.Zf,
                _jk_: b.Gb,
                _st_: b.nb,
                _rc_: b.tc,
                _dl_: b.Gc,
                _g2_: b.rc
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Ee(Xd, {
                basename: "sodar2"
            });
            Df(a)
        }
    };

    function Hf(a, b) {
        return wd(a, 1, b)
    }
    var If = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return L(this, 1)
        }
    };

    function Jf(a, b) {
        return jd(a, 5, b)
    }

    function Kf(a, b) {
        return wd(a, 3, b)
    }
    var Lf = class extends M {
        constructor() {
            super()
        }
    };

    function Mf(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Nf = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.m;
                this.v = a.v;
                this.Gb = a.Gb;
                this.win = a.P();
                this.nb = a.nb;
                this.tc = a.tc;
                this.Gc = a.Gc;
                this.rc = a.rc;
                this.m = a.j
            }
        },
        Of = class {
            constructor(a, b, c) {
                this.l = a;
                this.m = b;
                this.v = c;
                this.win = window;
                this.nb = "env";
                this.tc = "n";
                this.Gc = "0";
                this.rc = "1";
                this.j = !0
            }
            P() {
                return this.win
            }
            build() {
                return new Nf(this)
            }
        };
    var Qf = class extends M {
            constructor(a) {
                super(a, -1, Pf)
            }
        },
        Pf = [2, 3];

    function Rf(a, b) {
        return C(a, 1, b)
    }

    function Sf(a, b) {
        return C(a, 2, b)
    }

    function Tf(a, b) {
        return C(a, 3, b)
    }

    function Uf(a, b) {
        return C(a, 4, b)
    }
    var Vf = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return z(this, 5)
        }
    };
    var Xf = class extends M {
            constructor(a) {
                super(a, -1, Wf)
            }
        },
        Wf = [5];

    function Yf(a) {
        return id(a, Xf, 15)
    }
    var $f = class extends M {
            constructor(a) {
                super(a, -1, Zf)
            }
        },
        ag = Rd($f),
        Zf = [15];
    var bg = window;
    var cg = {
        Tg: "google_adtest",
        Xg: "google_ad_client",
        Yg: "google_ad_format",
        ah: "google_ad_height",
        rh: "google_ad_width",
        gh: "google_ad_layout",
        hh: "google_ad_layout_key",
        ih: "google_ad_output",
        jh: "google_ad_region",
        mh: "google_ad_slot",
        oh: "google_ad_type",
        qh: "google_ad_url",
        sh: "google_allow_expandable_ads",
        Lh: "google_analytics_domain_name",
        Mh: "google_analytics_uacct",
        ai: "google_container_id",
        ki: "google_gl",
        Gi: "google_enable_ose",
        Qi: "google_full_width_responsive",
        Qj: "google_rl_filtering",
        Pj: "google_rl_mode",
        Rj: "google_rt",
        Oj: "google_rl_dest_url",
        vj: "google_max_radlink_len",
        Bj: "google_num_radlinks",
        Cj: "google_num_radlinks_per_unit",
        Wg: "google_ad_channel",
        uj: "google_max_num_ads",
        wj: "google_max_responsive_height",
        Vh: "google_color_border",
        Fi: "google_enable_content_recommendations",
        hi: "google_content_recommendation_ui_type",
        gi: "google_source_type",
        fi: "google_content_recommendation_rows_num",
        ei: "google_content_recommendation_columns_num",
        di: "google_content_recommendation_ad_positions",
        ii: "google_content_recommendation_use_square_imgs",
        Xh: "google_color_link",
        Wh: "google_color_line",
        Zh: "google_color_url",
        Ug: "google_ad_block",
        lh: "google_ad_section",
        Vg: "google_ad_callback",
        Sh: "google_captcha_token",
        Yh: "google_color_text",
        Fh: "google_alternate_ad_url",
        fh: "google_ad_host_tier_id",
        Th: "google_city",
        bh: "google_ad_host",
        eh: "google_ad_host_channel",
        Gh: "google_alternate_color",
        Uh: "google_color_bg",
        Hi: "google_encoding",
        Oi: "google_font_face",
        ni: "google_cust_ch",
        si: "google_cust_job",
        ri: "google_cust_interests",
        oi: "google_cust_id",
        ti: "google_cust_u_url",
        Si: "google_hints",
        hj: "google_image_size",
        xj: "google_mtl",
        wk: "google_cpm",
        ci: "google_contents",
        zj: "google_native_settings_key",
        ji: "google_country",
        nk: "google_targeting",
        Pi: "google_font_size",
        wi: "google_disable_video_autoplay",
        Jk: "google_video_product_type",
        Ik: "google_video_doc_id",
        Hk: "google_cust_gender",
        ik: "google_cust_lh",
        hk: "google_cust_l",
        vk: "google_tfs",
        yj: "google_native_ad_template",
        nj: "google_kw",
        kk: "google_tag_for_child_directed_treatment",
        lk: "google_tag_for_under_age_of_consent",
        Tj: "google_region",
        mi: "google_cust_criteria",
        kh: "google_safe",
        li: "google_ctr_threshold",
        Uj: "google_resizing_allowed",
        Wj: "google_resizing_width",
        Vj: "google_resizing_height",
        Gk: "google_cust_age",
        LANGUAGE: "google_language",
        oj: "google_kw_type",
        Ij: "google_pucrd",
        Hj: "google_page_url",
        mk: "google_tag_partner",
        bk: "google_restrict_data_processing",
        Pg: "google_adbreak_test",
        Zg: "google_ad_frequency_hint",
        Rg: "google_admob_interstitial_slot",
        Sg: "google_admob_rewarded_slot",
        Qg: "google_admob_ads_only",
        tj: "google_max_ad_content_rating",
        Kj: "google_ad_public_floor",
        Jj: "google_ad_private_floor",
        Fk: "google_traffic_source",
        fk: "google_shadow_mode"
    };
    var dg = be(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = df(pf);
        return !b.parentElement
    });

    function eg(a, b) {
        if (dg())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = df(b)
    }
    var fg = /^[\w+/_-]+[=]{0,2}$/;

    function gg(a, b) {
        b = (b || u).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && fg.test(a) ? a : "" : ""
    };

    function hg(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function ig(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function jg(a) {
        return ig.apply(null, arguments) / arguments.length
    };

    function kg(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    kg.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    kg.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    kg.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function lg(a, b) {
        this.width = a;
        this.height = b
    }

    function mg(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    p = lg.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function ng(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : u.document.createElement("div");
        return a.replace(og, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = gf(e + " "), eg(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var og = /&([^;\s<&]+);?/g;

    function pg(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function qg(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function rg(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function sg(a) {
        return a ? new tg(ug(a)) : Oa || (Oa = new tg)
    }

    function vg(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new lg(a.clientWidth, a.clientHeight)
    }

    function wg(a) {
        var b = a.scrollingElement ? a.scrollingElement : Ub || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = xg(a);
        return Qb && a.pageYOffset != b.scrollTop ? new kg(b.scrollLeft, b.scrollTop) : new kg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function xg(a) {
        return a.parentWindow || a.defaultView
    }

    function yg(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ta(f) || va(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (va(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                xb(g ? Fb(f) : f, d)
            }
        }
    }

    function zg(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Ag(a, b) {
        var c = zg(a, "DIV");
        Qb ? (b = nf(rf, b), eg(c, b), c.removeChild(c.firstChild)) : eg(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function ug(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Bg = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Cg = {
            IMG: " ",
            BR: "\n"
        };

    function Dg(a) {
        var b = [];
        Eg(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Eg(a, b, c) {
        if (!(a.nodeName in Bg))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Cg) b.push(Cg[a.nodeName]);
        else
            for (a = a.firstChild; a;) Eg(a, b, c), a = a.nextSibling
    }

    function Fg(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Gg(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && Cb(e.className.split(/\s+/), c))
        })
    }

    function Gg(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function tg(a) {
        this.j = a || u.document || document
    }
    p = tg.prototype;
    p.Nf = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    p.Og = tg.prototype.Nf;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    p.createElement = function(a) {
        return zg(this.j, a)
    };
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Hg(a, b) {
        return Ag(a.j, b)
    }
    p.P = function() {
        return xg(this.j)
    };
    p.appendChild = function(a, b) {
        a.appendChild(b)
    };
    p.append = function(a, b) {
        yg(ug(a), a, arguments)
    };
    p.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    p.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    p.Jf = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function Ig() {
        return eb && hb ? hb.mobile : !Jg() && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
    }

    function Jg() {
        return eb && hb ? !hb.mobile && (v("iPad") || v("Android") || v("Silk")) : v("iPad") || v("Android") && !v("Mobile") || v("Silk")
    };
    var Kg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Lg(a) {
        try {
            return !!a && null != a.location.href && Ob(a, "foo")
        } catch {
            return !1
        }
    }

    function Mg(a, b = u) {
        b = Ng(b);
        let c = 0;
        for (; b && 40 > c++ && !a(b);) b = Ng(b)
    }

    function Ng(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function Og(a) {
        return Lg(a.top) ? a.top : null
    }

    function Pg(a, b) {
        const c = Qg("SCRIPT", a);
        Af(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Rg(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Sg() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Tg(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Ug(a) {
        const b = [];
        Tg(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Vg(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Xg = be(() => Bb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Wg) || 1E-4 > Math.random());
    const Wg = a => $a(gb(), a);
    var Yg = /^([0-9.]+)px$/,
        Zg = /^(-?[0-9.]{1,30})$/;

    function $g(a) {
        if (!Zg.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function ah(a) {
        return /^true$/.test(a)
    }

    function bh(a) {
        return (a = Yg.exec(a)) ? +a[1] : null
    }

    function ch() {
        var a = u.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch {}
        return ""
    }
    var dh = {
        th: "allow-forms",
        uh: "allow-modals",
        wh: "allow-orientation-lock",
        xh: "allow-pointer-lock",
        yh: "allow-popups",
        zh: "allow-popups-to-escape-sandbox",
        Ah: "allow-presentation",
        Bh: "allow-same-origin",
        Ch: "allow-scripts",
        Dh: "allow-top-navigation",
        Eh: "allow-top-navigation-by-user-activation"
    };
    const eh = be(() => Ug(dh));

    function fh() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = eh();
        return a.length ? yb(b, c => !Cb(a, c)) : b
    }

    function gh() {
        const a = Qg("IFRAME"),
            b = {};
        xb(eh(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var hh = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        ih = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (hh(a, b)) return a;
                if (!(a = Ng(a))) break
            }
            return null
        },
        jh = be(() => Ig() ? 2 : Jg() ? 1 : 0),
        N = (a, b) => {
            Tg(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const kh = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        lh = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        mh = /.*domain\.test$/,
        nh = /\.prod\.google\.com(:\d+)?$/;
    var oh = a => kh[a] || lh.test(a) || mh.test(a) || nh.test(a);
    let ph = [];
    const qh = () => {
        const a = ph;
        ph = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var rh = (a, b) => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52),
                    configurable: !1
                })
            } catch (c) {
                b && b.ha(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || 0 >= a) && b.ha(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        sh = (a, b) => {
            "complete" === a.document.readyState ? (ph.push(b), 1 == ph.length && (window.Promise ? Promise.resolve().then(qh) : window.setImmediate ? setImmediate(qh) : setTimeout(qh, 0))) : a.addEventListener("load", b)
        },
        th = (a, b) => new Promise(c => {
            setTimeout(() =>
                void c(b), a)
        });

    function Qg(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var vh = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, Lg(a) && (b = a);
        return b
    };

    function wh(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = wh.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function xh(a) {
        return new wh(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof wh ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function yh(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function zh(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Ah(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new zh(c, e, d - c, a - e)
        }
        return null
    }

    function Bh(a, b) {
        var c = Ah(a, b);
        if (!c || !c.height || !c.width) return [new zh(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new zh(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new zh(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new zh(a.left, d, b.left - a.left, e));
        h < f && c.push(new zh(h, d, f - h, e));
        return c
    }
    zh.prototype.contains = function(a) {
        return a instanceof kg ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    zh.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    zh.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    zh.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Ch = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Dh(a = u) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Eh(a = Dh()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Fh(a = Dh()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Ch[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Gh() {
        var a = Dh();
        return a && a.initialIntersection
    }

    function Hh() {
        const a = Gh();
        return a && va(a.rootBounds) ? new lg(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Ih(a = Dh()) {
        return a ? Lg(a.master) ? a.master : null : null
    }

    function Jh(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Db(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Pg(a.document, g ? Ee(Wd("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Ce(Vd(Wd("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, ie(a, "message", f), d = () => {
            je(a, "message", f)
        });
        return e
    };

    function O(a, ...b) {
        if (0 === b.length) return Ce(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ce(c.join(""))
    }

    function Kh(a, b) {
        let c = Be(a).toString();
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Ce(c)
    };

    function Lh(a) {
        a = a[0];
        const b = te();
        a = b ? b.createScript(a) : a;
        return new we(a, ue)
    };

    function Mh(a) {
        return new bf(a[0], $e)
    };

    function Nh(a, b, c) {
        if ("string" === typeof b)(b = Oh(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Oh(c, d);
                f && (c.style[f] = e)
            }
    }
    var Ph = {};

    function Oh(a, b) {
        var c = Ph[b];
        if (!c) {
            var d = qg(b);
            c = d;
            void 0 === a.style[d] && (d = (Ub ? "Webkit" : Tb ? "Moz" : Qb ? "ms" : null) + rg(d), void 0 !== a.style[d] && (c = d));
            Ph[b] = c
        }
        return c
    }

    function Qh(a, b) {
        var c = ug(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Rh(a, b) {
        return Qh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Sh(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Th(a) {
        var b = ug(a),
            c = new kg(0, 0);
        var d = b ? ug(b) : document;
        d = !Qb || 9 <= Number(cc) || "CSS1Compat" == sg(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Sh(a);
        b = wg(sg(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Uh(a) {
        var b = Vh;
        if ("none" != Rh(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Vh(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Ub && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Sh(a), new lg(a.right - a.left, a.bottom - a.top)) : new lg(b, c)
    }

    function Wh(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Xh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Wh(a, b) : 0
    }
    var Yh = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Zh(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Yh ? Yh[b] : Wh(a, b)
    };
    var $h = a => "number" === typeof a && 0 < a,
        bi = (a, b) => {
            a = ai(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        ai = a => Object.entries(ci(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        ci = a => {
            const b = {};
            Tg(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        di = () => {
            try {
                return bg.history.length
            } catch (a) {
                return 0
            }
        },
        ei = a => {
            a = Ih(Dh(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        fi = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        gi = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = di();
            a.u_h = bg.screen ? .height;
            a.u_w = bg.screen ? .width;
            a.u_ah = bg.screen ? .availHeight;
            a.u_aw = bg.screen ? .availWidth;
            a.u_cd = bg.screen ? .colorDepth
        },
        hi = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName &&
                a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        ii = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        ji = () => {
            if (!bg) return !1;
            try {
                return !(!bg.navigator.standalone && !bg.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        ki = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        li = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2],
                                        10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class mi {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const ni = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var oi = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        pi = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.qe = !!c;
                this.depth = null
            }
        };

    function qi(a, b, c = null, d = !1, e = !1) {
        ri(a, b, c, d, e)
    }

    function ri(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Qg("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Db(a.google_image_requests, f);
                je(f, "load", g);
                je(f, "error", g)
            };
            ie(f, "load", g);
            ie(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var ti = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Tg(a, (d, e) => {
                if (d || 0 === d) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            si(c)
        },
        si = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : qi(b, a, void 0, !1, !1)
        };

    function ui(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function vi(a, b, c, d, e) {
        const f = [];
        Tg(a, function(g, h) {
            (g = wi(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function wi(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(wi(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(vi(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function xi(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    }

    function yi(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = xi(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = vi(h[k], a.m, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.m;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class zi {
        constructor() {
            this.m = "&";
            this.l = {};
            this.v = 0;
            this.j = []
        }
    };

    function Ai(a, b) {
        0 <= b && 1 >= b && (a.j = b)
    }

    function Bi(a, b, c, d = !1, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof zi ? f = c : (f = new zi, Tg(c, (h, k) => {
                var l = f;
                const m = l.v++;
                h = ui(k, h);
                l.j.push(m);
                l.l[m] = h
            }));
            const g = yi(f, "/pagead/gen_204?id=" + b + "&");
            g && qi(u, g)
        } catch (f) {}
    }
    class Ci {
        constructor() {
            this.j = Math.random()
        }
    };
    let Di = null;

    function Ei() {
        if (null === Di) {
            Di = "";
            try {
                let a = "";
                try {
                    a = u.top.location.hash
                } catch (b) {
                    a = u.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Di = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Di
    };

    function Fi() {
        const a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ea()
    }

    function Gi() {
        const a = u.performance;
        return a && a.now ? a.now() : null
    };
    class Hi {
        constructor(a, b) {
            var c = Gi() || Fi();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Ii = u.performance,
        Ji = !!(Ii && Ii.mark && Ii.measure && Ii.clearMarks),
        Ki = be(() => {
            var a;
            if (a = Ji) a = Ei(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Li(a) {
        a && Ii && Ki() && (Ii.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Ii.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Mi(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (Ki() && xb(a.l, Li), a.l.length = 0)
    }

    function Ni(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Li(c), e;
        }
        a.end(c);
        return d
    }
    class Oi {
        constructor(a) {
            this.l = [];
            this.m = a || u;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.l = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Ki() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Hi(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Ii && Ki() && Ii.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Gi() || Fi()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Ii && Ki() && Ii.mark(b);
                !this.j || 2048 < this.l.length ||
                    this.l.push(a)
            }
        }
    };

    function Pi(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Qi(a.stack, b));
        return b
    }

    function Qi(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    class Ri {
        constructor(a, b = null) {
            this.v = a;
            this.j = null;
            this.B = this.ha;
            this.l = b;
            this.m = !1
        }
        sa() {
            return this.v
        }
        yd(a) {
            this.j = a
        }
        A(a) {
            this.m = a
        }
        Kb(a, b, c) {
            let d, e;
            try {
                this.l && this.l.j ? (e = this.l.start(a.toString(), 3), d = b(), this.l.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Li(e), b = this.B(a, new mi(f, {
                        message: Pi(f)
                    }), void 0, c)
                } catch (g) {
                    this.ha(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        ta(a, b, c, d) {
            return (...e) => this.Kb(a, () => b.apply(c, e), d)
        }
        ha(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const I = new zi;
                var g = I;
                g.j.push(1);
                g.l[1] = ui("context", a);
                b.error && b.meta && b.id || (b = new mi(b, {
                    message: Pi(b)
                }));
                if (b.msg) {
                    g = I;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = ui("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.j) try {
                    this.j(b)
                } catch (ba) {}
                if (d) try {
                    d(b)
                } catch (ba) {}
                d = I;
                k = [k];
                d.j.push(3);
                d.l[3] = k;
                d = u;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Lg(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new pi(m || "", l));
                    try {
                        d = l.parent
                    } catch (ba) {
                        d = null
                    }
                } while (d && l != d);
                for (let ba = 0, Ba = k.length - 1; ba <= Ba; ++ba) k[ba].depth = Ba -
                    ba;
                l = u;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.qe = !0)
                    }
                var q = k;
                let S = new pi(u.location.href, u, !1);
                l = null;
                const Ja = q.length - 1;
                for (n = Ja; 0 <= n; --n) {
                    var r = q[n];
                    !l && ni.test(r.url) && (l = r);
                    if (r.url && !r.qe) {
                        S = r;
                        break
                    }
                }
                r = null;
                const ca = q.length && q[Ja].url;
                0 != S.depth && ca && (r = q[Ja]);
                f = new oi(S, r);
                if (f.l) {
                    q = I;
                    var t = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = ui("top", t)
                }
                var A = {
                    url: f.j.url ||
                        ""
                };
                if (f.j.url) {
                    var x = f.j.url.match(Kg),
                        B = x[1],
                        G = x[3],
                        D = x[4];
                    t = "";
                    B && (t += B + ":");
                    G && (t += "//", t += G, D && (t += ":" + D));
                    var E = t
                } else E = "";
                B = I;
                A = [A, {
                    url: E
                }];
                B.j.push(5);
                B.l[5] = A;
                Bi(this.v, e, I, this.m, c)
            } catch (I) {
                try {
                    Bi(this.v, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Pi(I),
                        url: f && f.j.url
                    }, this.m, c)
                } catch (S) {}
            }
            return !0
        }
        Aa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ha(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    var Si = a => "string" === typeof a,
        Ti = a => void 0 === a;

    function Ui() {
        var a = Vi;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var Wi = class extends M {
        constructor(a) {
            super(a)
        }
    };

    function Xi(a) {
        var b = new Yi;
        return C(b, 1, a)
    }
    var Yi = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Zi = class extends M {
        constructor() {
            super()
        }
    };

    function $i(a, b) {
        return K(a, 1, b)
    }

    function aj(a, b) {
        return K(a, 2, b)
    }

    function bj(a, b) {
        return K(a, 3, b)
    }

    function cj(a, b) {
        return K(a, 4, b)
    }

    function dj(a, b) {
        return K(a, 5, b)
    }

    function ej(a, b) {
        return dd(a, 8, Lc(b), 0)
    }

    function fj(a, b) {
        return dd(a, 9, Lc(b), 0)
    }
    var gj = class extends M {
        constructor() {
            super()
        }
    };
    var hj = class extends M {
        constructor() {
            super()
        }
    };

    function ij(a, b) {
        return cd(a, 1, b, Qc)
    }

    function jj(a, b) {
        return cd(a, 12, b, Pc)
    }

    function kj() {
        var a = new lj;
        Jc(a);
        Yc(a, 2, 2, !1, !1).push("irr");
        return a
    }

    function mj(a, b) {
        return vd(a, 3, b)
    }

    function nj(a, b) {
        return vd(a, 4, b)
    }

    function oj(a, b) {
        return vd(a, 5, b)
    }

    function pj(a, b) {
        return vd(a, 7, b)
    }

    function qj(a, b) {
        return vd(a, 8, b)
    }

    function rj(a, b) {
        return K(a, 9, b)
    }

    function sj(a, b) {
        return od(a, 10, b)
    }

    function tj(a, b) {
        return cd(a, 11, b, Nc)
    }
    var lj = class extends M {
            constructor() {
                super(void 0, -1, uj)
            }
        },
        uj = [1, 12, 2, 10, 11];

    function vj(a) {
        var b = wj();
        jd(a, 1, b)
    }

    function xj(a, b) {
        return K(a, 2, b)
    }

    function yj(a, b) {
        return od(a, 3, b)
    }

    function zj(a, b) {
        return od(a, 4, b)
    }

    function Aj(a, b) {
        pd(a, 4, Yi, b);
        return a
    }

    function Bj(a, b) {
        return od(a, 5, b)
    }

    function Cj(a, b) {
        return cd(a, 6, b, Qc)
    }

    function Dj(a, b) {
        return K(a, 7, b)
    }

    function Ej(a, b) {
        jd(a, 9, b)
    }

    function Fj(a, b) {
        return vd(a, 10, b)
    }

    function Gj(a, b) {
        return vd(a, 11, b)
    }

    function Hj(a, b) {
        return vd(a, 12, b)
    }
    var Jj = class extends M {
            constructor() {
                super(void 0, -1, Ij)
            }
            H(a) {
                pd(this, 3, Wi, void 0, a, !1, 1);
                return this
            }
            F(a) {
                return K(this, 8, a)
            }
        },
        Ij = [3, 4, 5, 6];
    var Lj = class extends M {
            constructor() {
                super(void 0, -1, Kj)
            }
        },
        Kj = [2];
    var Mj = class extends M {
        constructor() {
            super()
        }
    };
    var Nj = class extends M {
        constructor() {
            super()
        }
    };
    var Oj = class extends M {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 1)
        }
    };
    var Qj = class extends M {
            constructor() {
                super(void 0, -1, Pj)
            }
        },
        Pj = [1];
    var Rj = class extends M {
        constructor() {
            super()
        }
    };
    var Sj = class extends M {
        constructor() {
            super()
        }
    };
    var Tj = class extends M {
            constructor(a) {
                super(a)
            }
        },
        Uj = [1, 2, 3, 5, 6, 7, 8];
    var Wj = class extends M {
            constructor() {
                super(void 0, -1, Vj)
            }
        },
        Vj = [1];
    var Yj = class extends M {
            constructor() {
                super(void 0, -1, Xj)
            }
        },
        Xj = [2];
    var Zj = class extends M {
        constructor() {
            super()
        }
    };
    var ak = class extends M {
        constructor() {
            super()
        }
    };

    function bk(a) {
        var b = new ck;
        return zd(b, 1, a)
    }
    var ck = class extends M {
            constructor() {
                super(void 0, -1, dk)
            }
        },
        dk = [9];
    var fk = class extends M {
            constructor() {
                super(void 0, -1, ek)
            }
        },
        ek = [2];
    var gk = class extends M {
        constructor() {
            super()
        }
    };
    var hk = class extends M {
            constructor() {
                super()
            }
        },
        ik = [4, 5];
    var jk = class extends M {
        constructor() {
            super()
        }
    };
    var kk = class extends M {
        constructor() {
            super()
        }
    };
    var lk = class extends M {
        constructor() {
            super()
        }
    };
    var mk = class extends M {
        constructor() {
            super()
        }
    };
    var nk = class extends M {
        constructor() {
            super()
        }
    };
    var ok = class extends M {
        constructor() {
            super()
        }
    };
    var pk = class extends M {
            constructor() {
                super()
            }
        },
        qk = [2, 3];
    var rk = class extends M {
            constructor() {
                super()
            }
        },
        sk = [3, 4, 5, 6, 7, 8, 9];
    var tk = class extends M {
            constructor() {
                super()
            }
            Pa(a) {
                return wd(this, 2, a)
            }
        },
        uk = [4, 5, 6, 8, 9, 10];

    function vk(a, ...b) {
        wk(a, ...b.map(c => ({
            Jg: 7,
            message: c
        })))
    };

    function xk(a) {
        return JSON.stringify([a.map(b => [{
            [b.Jg]: b.message.toJSON()
        }])])
    };
    var yk = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function zk(a) {
        a && "function" == typeof a.xa && a.xa()
    };

    function Ak() {
        this.B = this.B;
        this.F = this.F
    }
    Ak.prototype.B = !1;
    Ak.prototype.xa = function() {
        this.B || (this.B = !0, this.l())
    };

    function Bk(a, b) {
        a.B ? b() : (a.F || (a.F = []), a.F.push(b))
    }
    Ak.prototype.l = function() {
        if (this.F)
            for (; this.F.length;) this.F.shift()()
    };

    function wk(a, ...b) {
        65536 <= xk(a.j.concat(b)).length && Jk(a);
        a.j.push(...b);
        100 <= a.j.length && Jk(a);
        a.j.length && null === a.l && (a.l = setTimeout(() => {
            Jk(a)
        }, 100))
    }

    function Jk(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.j.length) {
            var b = xk(a.j);
            a.m("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.j = []
        }
    }
    var Kk = class {
            constructor() {
                this.m = yk;
                this.j = [];
                this.l = null
            }
        },
        Lk = class extends Kk {};
    var P = a => {
        var b = "ed";
        if (a.ed && a.hasOwnProperty(b)) return a.ed;
        b = new a;
        return a.ed = b
    };

    function Mk(a, b, c) {
        return b[a] || c
    };

    function Nk(a, b) {
        a.l = c => Mk(2, b, () => [])(c, 1, void 0);
        a.j = () => Mk(3, b, () => [])(1)
    }
    class Ok {
        l() {
            return []
        }
        j() {
            return []
        }
    };
    let Pk, Qk;
    const Rk = new Oi(u);
    (a => {
        Pk = a || new Ci;
        "number" !== typeof u.google_srt && (u.google_srt = Math.random());
        Ai(Pk, u.google_srt);
        Qk = new Ri(Pk, Rk);
        Qk.A(!0);
        "complete" == u.document.readyState ? u.google_measure_js_timing || Mi(Rk) : Rk.j && ie(u, "load", () => {
            u.google_measure_js_timing || Mi(Rk)
        })
    })();
    var Sk = (a, b, c) => Qk.Kb(a, b, c),
        Tk = (a, b) => Qk.ta(a, b),
        Uk = (a, b, c) => {
            const d = P(Ok).j();
            !b.eid && d.length && (b.eid = d.toString());
            Bi(Pk, a, b, !0, c)
        },
        Vk = (a, b) => Qk.ha(a, b, void 0, void 0);
    Ce(Vd(Wd("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Wk = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            ie(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = je(a, "message", e));
                return g
            }
        },
        Xk = (a, b, c, d = null) => {
            const e = Wk(a, b, $d(c, () => e()), d);
            return e
        },
        Yk = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Yk(a[f], b, c, d, --e)
        };

    function Zk(a, b, c, d) {
        oh(d.origin) && "expandable-xpc-ready" == c.notify && $k(a, b)
    }

    function $k(a, b) {
        var c = a.dd;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Va,
            f: a.pg,
            g: a.gf,
            h: a.Wf,
            i: void 0
        });
        u.setTimeout(Tk(220, ii(() => {
            Pg(c.document, b)
        })), 0)
    };
    var bl = class extends M {
            constructor() {
                super(void 0, -1, al)
            }
        },
        al = [15];
    var cl = class extends M {
        constructor() {
            super()
        }
        getCorrelator() {
            return td(this, 1)
        }
        setCorrelator(a) {
            return K(this, 1, a)
        }
    };
    var dl = class extends M {
        constructor() {
            super()
        }
    };
    let el = null,
        fl = null;
    var gl = () => {
            if (null != el) return el;
            el = !1;
            try {
                const a = Og(u);
                a && -1 !== a.location.hash.indexOf("google_logging") && (el = !0);
                u.localStorage.getItem("google_logging") && (el = !0)
            } catch (a) {}
            return el
        },
        hl = () => {
            if (null != fl) return fl;
            fl = !1;
            try {
                const a = Og(u);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || u.localStorage.getItem("auto_ads_logging")) fl = !0
            } catch (a) {}
            return fl
        },
        il = (a, b = []) => {
            let c = !1;
            u.google_logging_queue || (c = !0, u.google_logging_queue = []);
            u.google_logging_queue.push([a, b]);
            c && gl() && Pg(u.document,
                Ce(Vd(Wd("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let jl, kl;
    const ll = new Oi(window);
    (a => {
        jl = a ? ? new Ci;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Ai(jl, window.google_srt);
        kl = new Ri(jl, ll);
        kl.yd(() => {});
        kl.A(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Mi(ll) : ll.j && ie(window, "load", () => {
            window.google_measure_js_timing || Mi(ll)
        })
    })();
    let ml = (new Date).getTime();
    var nl = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var ol = {
        dj: 0,
        cj: 1,
        Zi: 2,
        Ui: 3,
        aj: 4,
        Vi: 5,
        bj: 6,
        Xi: 7,
        Yi: 8,
        Ti: 9,
        Wi: 10
    };
    var pl = {
        fj: 0,
        gj: 1,
        ej: 2
    };

    function ql(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function rl(a) {
        a = zb(a, b => new wh(b.top, b.right, b.bottom, b.left));
        a = sl(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function sl(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Ab(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, xh(a[0]))
    };
    var me = {
        Sj: 0,
        Ii: 1,
        Li: 2,
        Ji: 3,
        Ki: 4,
        Ri: 8,
        ek: 9,
        rj: 10,
        sj: 11,
        Zj: 16,
        vi: 17,
        ui: 24,
        pj: 25,
        Oh: 26,
        Nh: 27,
        We: 30,
        jj: 32,
        mj: 40,
        jk: 41,
        gk: 42
    };
    var tl = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        ul = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function vl(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new wl;
        return a.google_reactive_ads_global_state
    }
    class wl {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new xl;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var xl = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var yl = 728 * 1.38,
        zl = (a, b = 420) => (a = Q(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        Al = a => {
            var b = Q(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        Cl = a => Math.max(0, Bl(a, !0) - Q(a).clientHeight),
        Q = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        Bl = (a, b) => {
            const c = Q(a);
            return b ? c.scrollHeight == Q(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        El = (a, b) => Dl(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        Fl = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        Gl = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        Hl = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Il = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Jl = (a, b, c, d) => {
            Bi(c, b, {
                c: d.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        Dl = a => 26 === a || 27 === a || 40 === a || 41 === a;

    function Kl(a, b) {
        Ll(a).forEach(b, void 0)
    }

    function Ll(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Ml(a, b) {
        return void 0 !== a.j[Nl(b)]
    }

    function Ol(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Pl(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Ql = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Nl(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = Nl(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = Nl(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Eb() {
            return Ol(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function Nl(a) {
        return a instanceof Object ? String(wa(a)) : a + ""
    };
    const Rl = class {
        constructor(a) {
            this.j = new Ql;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return Ml(this.j, a)
        }
    };
    const Sl = new Rl("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Tl(a) {
        Nb(a.document.body.offsetHeight)
    };

    function Ul(a) {
        a.j.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function Vl(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.j.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.j.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var Wl = class extends Ak {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.j = b
        }
        l() {
            Ul(this);
            super.l()
        }
    };

    function Xl(a, b) {
        const c = new Yl({
            first: a.M,
            second: b.M
        });
        a.X(() => R(c, {
            first: a.M,
            second: b.M
        }));
        b.X(() => R(c, {
            first: a.M,
            second: b.M
        }));
        return c
    }

    function Zl(...a) {
        const b = [...a],
            c = () => b.every(f => f.M),
            d = new Yl(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.X(e));
        return $l(d)
    }

    function am(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.M),
            d = new Yl(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.X(e));
        return $l(d)
    }

    function R(a, b) {
        a.M = b;
        a.l.forEach(c => {
            c(a.M)
        })
    }

    function $l(a, b = bm) {
        var c = a.M;
        const d = new Yl(a.M);
        a.X(e => {
            b(e, c) || (c = e, R(d, e))
        });
        return d
    }

    function cm(a, b, c) {
        return a.j(d => {
            d === b && c()
        })
    }

    function dm(a, b) {
        if (!1 === a.M) b();
        else {
            var c = {
                ac: null
            };
            c.ac = cm(a, !1, () => {
                c.ac && (c.ac(), c.ac = null);
                b()
            })
        }
    }

    function em(a, b, c) {
        $l(a).X(d => {
            d === b && c()
        })
    }

    function fm(a, b) {
        a.m && a.m();
        a.m = b.X(c => R(a, c), !0)
    }
    class Yl {
        constructor(a) {
            this.M = a;
            this.l = new Map;
            this.v = 1;
            this.m = null
        }
        X(a, b = !1) {
            const c = this.v++;
            this.l.set(c, a);
            b && a(this.M);
            return () => {
                this.l.delete(c)
            }
        }
        j(a) {
            return this.X(a, !0)
        }
        map(a) {
            const b = new Yl(a(this.M));
            this.X(c => R(b, a(c)));
            return b
        }
    }

    function bm(a, b) {
        return a == b
    };

    function gm(a, b) {
        xb(a.j, c => {
            c(b)
        })
    }
    var hm = class {
        constructor() {
            this.j = []
        }
    };
    class im {
        constructor(a) {
            this.j = a
        }
        X(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new hm;
            this.X(c => gm(b, a(c)));
            return new im(b)
        }
    }

    function jm(...a) {
        const b = new hm;
        a.forEach(c => {
            c.X(d => {
                gm(b, d)
            })
        });
        return new im(b)
    };

    function km(a) {
        return $l(Xl(a.j, a.m).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : lm(c, b)
        }))
    }
    var nm = class {
        constructor(a) {
            this.l = a;
            this.j = new Yl(null);
            this.m = new Yl(null);
            this.v = new hm;
            this.C = b => {
                null == this.j.M && 1 == b.touches.length && R(this.j, b.touches[0])
            };
            this.A = b => {
                const c = this.j.M;
                null != c && (b = mm(c, b.changedTouches), null != b && (R(this.j, null), R(this.m, null), gm(this.v, lm(c, b))))
            };
            this.B = b => {
                var c = this.j.M;
                null != c && (c = mm(c, b.changedTouches), null != c && (R(this.m, c), b.preventDefault()))
            }
        }
    };

    function lm(a, b) {
        return {
            Ue: b.pageX - a.pageX,
            Ve: b.pageY - a.pageY
        }
    }

    function mm(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function om(a) {
        return $l(Xl(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : pm(c, b)
        }))
    }
    var qm = class {
        constructor(a, b) {
            this.v = a;
            this.A = b;
            this.j = new Yl(null);
            this.l = new Yl(null);
            this.m = new hm;
            this.F = c => {
                R(this.j, c)
            };
            this.B = c => {
                const d = this.j.M;
                null != d && (R(this.j, null), R(this.l, null), gm(this.m, pm(d, c)))
            };
            this.C = c => {
                null != this.j.M && (R(this.l, c), c.preventDefault())
            }
        }
    };

    function pm(a, b) {
        return {
            Ue: b.screenX - a.screenX,
            Ve: b.screenY - a.screenY
        }
    };
    var tm = (a, b) => {
        const c = new rm(a, b);
        return () => sm(c)
    };

    function sm(a) {
        if (a.j) return !1;
        if (null == a.l) return um(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return um(a), !0;
        vm(a, b);
        return !0
    }

    function um(a) {
        a.l = (new Date).getTime();
        a.v()
    }

    function vm(a, b) {
        a.j = !0;
        a.m.setTimeout(() => {
            a.j = !1;
            um(a)
        }, b)
    }
    class rm {
        constructor(a, b) {
            this.m = a;
            this.v = b;
            this.l = null;
            this.j = !1
        }
    };

    function wm(a) {
        return xm(om(a.j), km(a.l))
    }

    function ym(a) {
        return jm(new im(a.j.m), new im(a.l.v))
    }
    var zm = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function xm(a, b) {
        return Xl(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function Am(a, b) {
        return new Bm(a, b)
    }

    function Cm(a) {
        a.win.requestAnimationFrame(() => {
            a.B || R(a.m, new lg(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Dm(a) {
        a.j || (a.j = !0, a.v.observe(a.element));
        return $l(a.m, mg)
    }
    var Bm = class extends Ak {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.j = !1;
            this.m = new Yl(new lg(this.element.offsetWidth, this.element.offsetHeight));
            this.v = new ResizeObserver(() => {
                Cm(this)
            })
        }
        l() {
            this.v.disconnect();
            super.l()
        }
    };

    function Em(a, b) {
        return {
            top: a.j - b,
            right: a.m + a.l,
            bottom: a.j + b,
            left: a.m
        }
    }
    class Fm {
        constructor(a, b, c) {
            this.m = a;
            this.j = b;
            this.l = c
        }
    };

    function Gm(a, b) {
        a = a.getBoundingClientRect();
        return new Hm(a.top + Gl(b), a.bottom - a.top)
    }

    function Im(a) {
        return new Hm(Math.round(a.j), Math.round(a.l))
    }
    class Hm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Jm(a, b) {
        a.B ? b(a.m) : a.l.push(b)
    }

    function Km(a, b) {
        a.B = !0;
        a.m = b;
        a.l.forEach(c => {
            c(a.m)
        });
        a.l = []
    }
    class Lm {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.B = !1;
            this.A = this.m = null;
            this.C = tm(a, () => {
                if (null != this.A) {
                    var b = Bl(this.j, !0) - this.A;
                    1E3 < b && Km(this, b)
                }
            });
            this.v = null
        }
        init(a, b) {
            null == a ? (this.A = a = Bl(this.j, !0), this.j.addEventListener("scroll", this.C), null != b && b(a)) : this.v = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        xa() {
            null != this.v && this.j.clearTimeout(this.v);
            this.j.removeEventListener("scroll", this.C);
            this.l = [];
            this.m = null
        }
    };

    function Mm(a) {
        return new Nm(a, new Wl(a, a.document.body), new Wl(a, a.document.documentElement), new Wl(a, a.document.documentElement))
    }

    function Om(a) {
        Vl(a.m, "scroll-behavior", "auto");
        const b = Pm(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        Vl(a.j, "position", "fixed");
        Vl(a.j, "top", `${-b.previousWindowScroll}px`);
        Vl(a.j, "width", "100%");
        Vl(a.j, "overflow-x", "hidden");
        Vl(a.j, "overflow-y", "hidden");
        Vl(a.l, "overflow-x", "hidden");
        Vl(a.l, "overflow-y", "hidden")
    }

    function Qm(a) {
        Ul(a.j);
        Ul(a.l);
        const b = Pm(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        Ul(a.m)
    }
    var Nm = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.j = b;
            this.l = c;
            this.m = d
        }
    };

    function Pm(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    };
    var Rm = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Sm {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function Tm(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new Um(d)
    }

    function Vm(a) {
        return a.j.slice(0)
    }

    function Wm(a, b = 1) {
        a = Vm(a);
        const c = new Sm(b);
        Mb(a, () => c.next());
        return new Um(a)
    }
    const Um = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Um(yb(this.j, a))
        }
        apply(a) {
            return new Um(a(Vm(this)))
        }
        sort(a) {
            return new Um(Vm(this).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = Vm(this);
            b.push(a);
            return new Um(b)
        }
    };
    class Xm {
        constructor(a) {
            this.j = new Rl(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function Ym(a) {
        return new Zm({
            value: a
        }, null)
    }

    function $m(a) {
        return new Zm(null, Error(a))
    }

    function an(a) {
        try {
            return Ym(a())
        } catch (b) {
            return new Zm(null, b)
        }
    }

    function bn(a) {
        return null != a.j ? a.j.value : null
    }

    function cn(a, b) {
        null != a.j && b(a.j.value)
    }

    function dn(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class Zm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Zm ? a : Ym(a)) : this
        }
    };
    class en {
        constructor() {
            this.j = new Ql
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Rl, this.j.set(a, c));
            c.add(b)
        }
    };

    function fn(a) {
        return !a
    };
    var hn = class extends M {
            constructor(a) {
                super(a, -1, gn)
            }
            getId() {
                return z(this, 3)
            }
        },
        gn = [4];
    class jn {
        constructor(a, {
            Od: b,
            cf: c,
            Uf: d,
            Ke: e
        }) {
            this.A = a;
            this.m = c;
            this.v = new Um(b || []);
            this.l = e;
            this.j = d
        }
    };
    var kn = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Ql;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        mn = a => {
            var b = ln(a);
            a = [];
            for (let c of b) b = String(c.tb), a.push(c.Qa + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const ln = a => {
            const b = [],
                c = a.v;
            c && c.j.length && b.push({
                Qa: "a",
                tb: nn(c)
            });
            null != a.m && b.push({
                Qa: "as",
                tb: a.m
            });
            null != a.j && b.push({
                Qa: "i",
                tb: String(a.j)
            });
            null != a.l && b.push({
                Qa: "rp",
                tb: String(a.l)
            });
            b.sort(function(d, e) {
                return d.Qa.localeCompare(e.Qa)
            });
            b.unshift({
                Qa: "t",
                tb: on(a.A)
            });
            return b
        },
        on = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        nn = a => {
            a = Vm(a).map(pn);
            a = JSON.stringify(a);
            return Vg(a)
        },
        pn = a => {
            const b = {};
            null != z(a, 7) && (b.q = z(a, 7));
            null != rd(a,
                2) && (b.o = rd(a, 2));
            null != rd(a, 5) && (b.p = rd(a, 5));
            return b
        };

    function qn() {
        var a = new rn;
        return C(a, 2, 1)
    }
    var rn = class extends M {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return C(this, 1, a)
        }
    };

    function sn(a) {
        const b = [].slice.call(arguments).filter(ae(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Td || []);
            d = Object.assign(d, e.Fb())
        });
        return new tn(c, d)
    }

    function un(a) {
        switch (a) {
            case 1:
                return new tn(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new tn(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new tn(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new tn(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function vn(a) {
        return null == a ? null : new tn(null, {
            google_ml_rank: a
        })
    }

    function wn(a) {
        return null == a ? null : new tn(null, {
            google_placement_id: mn(a)
        })
    }

    function xn({
        yf: a,
        Ff: b = null
    }) {
        if (null == a) return null;
        a = {
            google_daaos_ts: a
        };
        null != b && (a.google_erank = b + 1);
        return new tn(null, a)
    }
    class tn {
        constructor(a, b) {
            this.Td = a;
            this.j = b
        }
        Fb() {
            return this.j
        }
    };
    var yn = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var zn = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var An = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Bn = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Dn = class extends M {
            constructor(a) {
                super(a, -1, Cn)
            }
            F() {
                return z(this, 2)
            }
            B() {
                return z(this, 5)
            }
            j() {
                return id(this, Bn, 3)
            }
            v() {
                return rd(this, 4)
            }
            A() {
                return $c(this, 6)
            }
            G() {
                return Wc(this, An, 7)
            }
        },
        Cn = [3];
    var En = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Fn = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return H(this, 18, !1)
        }
        A() {
            C(this, 18, !1)
        }
        v() {
            return H(this, 21, !1)
        }
    };
    var Gn = class extends M {
        constructor() {
            super()
        }
    };
    var Hn = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var In = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Jn = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Kn = class extends M {
        constructor(a) {
            super(a)
        }
        W() {
            return J(this, hn, 1)
        }
        j() {
            return z(this, 2)
        }
    };
    var Ln = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Mn = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Nn = class extends M {
            constructor(a) {
                super(a)
            }
            getName() {
                return z(this, 4)
            }
        },
        On = [1, 2, 3];
    var Qn = class extends M {
            constructor(a) {
                super(a, -1, Pn)
            }
        },
        Pn = [2, 5, 6, 11];
    var Rn = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return F(this, 2)
        }
    };
    var Sn = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return z(this, 1)
        }
    };
    var Tn = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Un = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Wn = class extends M {
            constructor(a) {
                super(a, -1, Vn)
            }
            j() {
                return J(this, Un, 2)
            }
        },
        Vn = [1];
    var Xn = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Yn = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return L(this, 2)
        }
    };

    function Zn() {
        var a = new $n;
        a = C(a, 1, 1);
        var b = new Xn;
        b = C(b, 2, !0);
        a = jd(a, 2, b);
        b = new Wn;
        var c = new Tn;
        c = C(c, 1, 1);
        pd(b, 1, Tn, c);
        c = new Un;
        c = C(c, 1, !0);
        b = jd(b, 2, c);
        return jd(a, 3, b)
    }
    var $n = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var ao = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var bo = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return xd(this, 1)
        }
        v() {
            return L(this, 3)
        }
        A() {
            return L(this, 4)
        }
    };
    var co = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return td(this, 1)
        }
    };
    var eo = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return L(this, 1)
        }
        v() {
            return L(this, 2)
        }
        A() {
            return L(this, 3)
        }
    };
    var fo = class extends M {
        constructor(a) {
            super(a)
        }
        A() {
            return J(this, bo, 8)
        }
        B() {
            return J(this, bo, 9)
        }
        j() {
            return J(this, eo, 4)
        }
        v() {
            return J(this, co, 5)
        }
        F() {
            return L(this, 10)
        }
    };
    var go = class extends M {
        constructor(a) {
            super(a)
        }
        v() {
            return td(this, 3)
        }
        B() {
            return J(this, eo, 5)
        }
        j() {
            return J(this, co, 6)
        }
        A() {
            return L(this, 8)
        }
        F() {
            return H(this, 11)
        }
    };
    var io = class extends M {
            constructor(a) {
                super(a, -1, ho)
            }
        },
        ho = [2];
    var jo = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var lo = class extends M {
            constructor(a) {
                super(a, -1, ko)
            }
        },
        ko = [1];
    var mo = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return z(this, 1)
        }
    };
    var no = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var po = class extends M {
            constructor(a) {
                super(a, -1, oo)
            }
            j() {
                return id(this, no, 1)
            }
        },
        oo = [1];
    var qo = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var so = class extends M {
            constructor(a) {
                super(a, -1, ro)
            }
        },
        ro = [3, 4];
    var to = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var vo = class extends M {
            constructor(a) {
                super(a, -1, uo)
            }
            W() {
                return J(this, hn, 1)
            }
            j() {
                return z(this, 2)
            }
        },
        uo = [6, 7, 9, 10, 11];
    var xo = class extends M {
            constructor(a) {
                super(a, -1, wo)
            }
        },
        wo = [4];
    var yo = class extends M {
        constructor() {
            super()
        }
    };
    var Ao = class extends M {
            constructor(a) {
                super(a, -1, zo)
            }
        },
        zo = [6];
    var Bo = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return td(this, 1)
        }
    };
    var Co = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Eo = class extends M {
            constructor(a) {
                super(a)
            }
            j() {
                return yd(this, Co, 2, Do)
            }
        },
        Do = [1, 2];
    var Fo = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return J(this, Eo, 3)
        }
    };
    var Go = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var Io = class extends M {
            constructor(a) {
                super(a, -1, Ho)
            }
            j() {
                return id(this, Go, 1)
            }
        },
        Ho = [1];
    var Ko = class extends M {
            constructor(a) {
                super(a, -1, Jo)
            }
            j() {
                return ad(this, 1, Rc)
            }
            v() {
                return J(this, Fo, 3)
            }
        },
        Jo = [1, 4];

    function Lo(a) {
        return J(a, zn, 13)
    }

    function Mo(a) {
        return J(a, go, 28)
    }
    var Oo = Rd(class extends M {
            constructor(a) {
                super(a, -1, No)
            }
            j() {
                return J(this, Fn, 15)
            }
        }),
        No = [1, 2, 5, 7];
    var Po = class extends M {
            constructor(a) {
                super(a)
            }
        },
        Qo = Rd(Po);

    function Ro(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Qo(b) : null
        } catch (b) {
            return null
        }
    }

    function So(a, b) {
        if (void 0 !== a.Xc) {
            let c = Ro(b);
            c || (c = new Po);
            void 0 !== a.Xc && C(c, 2, a.Xc);
            C(c, 1, Ea() + 864E5);
            a = Md(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Ro(b)) && z(a, 1) < Ea()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function To(a) {
        var b = [];
        Kl(a.getElementsByTagName("p"), function(c) {
            100 <= Uo(c) && b.push(c)
        });
        return b
    }

    function Uo(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Kl(a.childNodes, function(c) {
            b += Uo(c)
        });
        return b
    }

    function Vo(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Wo(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const Xo = class {
        constructor(a, b, c, d) {
            this.v = a;
            this.l = b;
            this.m = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.v)
            } catch (f) {}
            if (!b.length) return [];
            a = Fb(b);
            a = Wo(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.m) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = To(a[c]),
                        e = this.m;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.v,
                occurrenceIndex: this.l,
                paragraphIndex: this.m,
                ignoreMode: this.j
            })
        }
    };

    function Yo(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Zo(a) {
        return Ll(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var V = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        $o = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        ap = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        };
    var bp = new V(1082, !0),
        cp = new $o(1130, 100),
        dp = new $o(1032, 200),
        ep = new ap(14),
        fp = new V(1240, !0),
        gp = new $o(1224, .01),
        hp = new V(1122, !0),
        ip = new V(1239),
        jp = new V(1226),
        kp = new V(1196),
        lp = new V(1160),
        mp = new V(316),
        np = new V(334),
        op = new $o(54),
        pp = new V(313),
        qp = new $o(66, -1),
        rp = new $o(65, -1),
        sp = new V(369),
        tp = new V(1241),
        up = new V(1236),
        vp = new V(368),
        wp = new V(1223),
        xp = new V(1230),
        yp = new V(1229),
        zp = new V(1231),
        Ap = new V(1248, !0),
        Bp = new V(1250),
        Cp = new $o(1169, 61440),
        Dp = new V(1171, !0),
        Ep = new V(1151),
        Fp = new $o(1072,
            .75),
        Gp = new $o(1168, 61440),
        Hp = new V(290),
        Ip = new V(1222),
        Jp = new V(1238),
        Kp = new V(1237),
        Lp = new $o(1253),
        Mp = new V(1147),
        Np = new $o(1245, 3600),
        Op = new $o(506864295, 300),
        Pp = new $o(508040914, 100),
        Qp = new V(501545960),
        Rp = new V(289410051),
        Sp = new V(1120),
        Tp = new V(522099048),
        Up = new $o(1114, 1),
        Vp = new V(515292965),
        Wp = new V(506914611),
        Xp = new V(501545959, !0),
        Yp = new V(45401989),
        Zp = new V(518318645),
        $p = new $o(469675170, 3E4),
        aq = new $o(506871937),
        bq = new V(513037478),
        cq = new ap(1166),
        dq = new V(1E4),
        eq = new V(516837771),
        fq =
        new $o(472785970, 500),
        gq = new V(83),
        hq = new V(439828594),
        iq = new V(483962503),
        jq = new V(506738118),
        kq = new V(77),
        lq = new V(78),
        mq = new V(309),
        nq = new V(80),
        oq = new V(76),
        pq = new V(1957, !0),
        qq = new V(380025941),
        rq = new V(84),
        sq = new V(1973),
        tq = new V(188),
        uq = new V(1162),
        vq = new V(501545961),
        wq = new $o(1116, 300),
        xq = new V(506852289),
        yq = new V(485990406);
    var zq = class {
        constructor() {
            const a = {};
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.m = (b, c) => null != a[b] ? a[b] : c;
            this.A = (b, c) => null != a[b] ? a[b] : c;
            this.v = () => {}
        }
    };

    function W(a) {
        return P(zq).j(a.j, a.defaultValue)
    }

    function Aq(a) {
        return P(zq).l(a.j, a.defaultValue)
    }

    function Bq(a) {
        return P(zq).m(a.j, a.defaultValue)
    };

    function Cq(a, b) {
        a = (new tg(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Dq(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Yo(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Eq(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Yo(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Gq = (a, b, c, d = 0) => {
            var e = Fq(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.kc(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Ac
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Dq(a, e.anchor, e.position)
        },
        Hq = (a, b, c, d = 0) => {
            W(pp) ? Gq(a, b, c, d) : Dq(a, b, c)
        };

    function Fq(a, b, c) {
        const d = f => {
                f = Iq(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = Iq(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: Jq(a.previousSibling, d),
                    kc: f => Jq(f.previousSibling, d),
                    Ac: 0
                };
            case 2:
                return {
                    init: Jq(a.lastChild, d),
                    kc: f => Jq(f.previousSibling, d),
                    Ac: 0
                };
            case 3:
                return {
                    init: Jq(a.nextSibling, e),
                    kc: f => Jq(f.nextSibling, e),
                    Ac: 3
                };
            case 1:
                return {
                    init: Jq(a.firstChild, e),
                    kc: f => Jq(f.nextSibling, e),
                    Ac: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Iq(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Jq(a, b) {
        return a && b(a) ? a : null
    };
    var Kq = (a, b = !1) => {
        try {
            return b ? (new lg(a.innerWidth, a.innerHeight)).round() : vg(a || window).round()
        } catch (c) {
            return new lg(-12245933, -12245933)
        }
    };

    function Lq(a = u) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function Mq(a, b = u) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new kg(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Nq(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function Oq(a) {
        -1 === a.l && (a.l = Ab(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class Pq {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };

    function Qq(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            hd: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 === b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            hd: c
        }
    };
    var Rq = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function Sq(a, b) {
        Tg(a, (c, d) => {
            b[d] = c
        })
    }
    var Tq = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && Lg(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var Uq = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        Vq = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        Wq = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const Xq = (a, b, c) => {
        a = Uq(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var Yq = (a, b) => {
            b = b.parentElement;
            return b ? (a = Rg(b, a)) ? a.direction : "" : ""
        },
        Zq = (a, b, c) => {
            if (0 === Xq(a, b, c)) return !1;
            Wq(b, c, "0px");
            const d = Xq(a, b, c);
            Wq(b, c, -1 * d + "px");
            a = Xq(a, b, c);
            0 !== a && a !== d && Wq(b, c, d / (a - d) * d + "px");
            return !0
        };
    const $q = RegExp("(^| )adsbygoogle($| )");

    function ar(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = qg(d.vd);
            a[e] = d.value
        }
    }

    function br(a, b, c, d, e, f) {
        a = cr(a, e);
        a.va.setAttribute("data-ad-format", d ? d : "auto");
        dr(a, b, c, f);
        return a
    }

    function er(a, b, c = null) {
        a = cr(a, {});
        dr(a, b, null, c);
        return a
    }

    function dr(a, b, c, d) {
        var e = [];
        if (d = d && d.Td) a.Xa.className = d.join(" ");
        a = a.va;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function cr(a, b) {
        const c = Cq(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.zc && ar(d, b.zc);
        a = (new tg(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Ed && (d.marginTop = b.Ed);
        b.Qc && (d.marginBottom = b.Qc);
        b.pb && ar(d, b.pb);
        c.appendChild(a);
        return {
            Xa: c,
            va: a
        }
    }

    function fr(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.Fb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function gr(a) {
        const b = Zo(a.document);
        xb(b, function(c) {
            const d = hr(a, c);
            var e;
            if (e = d) e = Uq(c, a), e = !((e ? e.y : 0) < Q(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), fr(a, c))
        })
    }

    function hr(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in cg) a[cg[c]] && (b[cg[c]] = a[cg[c]]);
        return b
    };
    class ir {
        constructor() {
            var a = O `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.v = Math.random();
            this.m = this.ha;
            this.B = a
        }
        yd(a) {
            this.j = a
        }
        A(a) {
            this.l = a
        }
        ha(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.v : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new mi(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded || (Pg(u.document, this.B), u.error_rep_loaded = !0);
            return !1
        }
        Kb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.m(a, d, .01, c, "jserror")) throw d;
            }
        }
        ta(a, b, c, d) {
            return (...e) => this.Kb(a, () => b.apply(c, e), d)
        }
        Aa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ha(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    const jr = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var kr = (a, b, c, d) => {
            const e = d || window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = Gi();
                let h, k = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (l) {
                    k = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && jr({
                        label: a.toString(),
                        value: g,
                        duration: (Gi() || 0) - g,
                        type: k,
                        ...(f && {
                            taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                        })
                    }, e)
                }
                return h
            }
        },
        lr = (a, b) => kr(754,
            a, (c, d) => {
                (new ir).ha(c, d)
            }, b);

    function mr(a, b, c) {
        return kr(a, b, void 0, c).apply()
    }

    function nr(a, b) {
        return lr(a, b).apply()
    }

    function or(a) {
        if (!a) return null;
        var b = z(a, 7);
        if (z(a, 1) || a.getId() || 0 < ad(a, 4, Rc).length) {
            b = ad(a, 4, Rc);
            var c = z(a, 3),
                d = z(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Vo(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Vo(b[c]);
            a = (b = e) ? new Xo(b, rd(a, 2), rd(a, 5), pr(z(a, 6))) : null
        } else a = b ? new Xo(b, rd(a, 2), rd(a, 5), pr(z(a, 6))) : null;
        return a
    }
    var qr = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function pr(a) {
        return null == a ? a : qr[a]
    }

    function rr(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = z(a[c], 1),
                e = z(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.vd = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function sr(a, b) {
        var c = {};
        a && (c.Ed = z(a, 1), c.Qc = z(a, 2), c.clearBoth = !!F(a, 3));
        b && (c.zc = rr(id(b, qo, 3)), c.pb = rr(id(b, qo, 4)));
        return c
    }
    var tr = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        ur = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    var vr = {
            qa: "ama_success",
            ia: .1,
            ka: !0
        },
        wr = {
            qa: "ama_failure",
            ia: .1,
            ka: !0
        },
        xr = {
            qa: "ama_inf_scr",
            ia: .1,
            ka: !0
        },
        yr = {
            qa: "ama_inf_scr",
            ia: .1,
            ka: !0
        },
        zr = {
            qa: "ama_coverage",
            ia: .1,
            ka: !0
        },
        Ar = {
            qa: "ama_inf_scr",
            ia: 1,
            ka: !0
        },
        Br = {
            qa: "ama_opt",
            ia: .1,
            ka: !0
        },
        Cr = {
            qa: "ama_aud_sen",
            ia: 1,
            ka: !0
        },
        Dr = {
            qa: "ama_auto_rs",
            ia: 1,
            ka: !0
        },
        Er = {
            qa: "ama_auto_prose",
            ia: 1,
            ka: !0
        },
        Fr = {
            qa: "ama_improv",
            ia: .1,
            ka: !0
        };

    function Gr(a, b) {
        for (var c = 0; c < b.length; c++) a.wa(b[c]);
        return a
    }

    function Hr(a, b) {
        a.m = a.m ? a.m : b;
        return a
    }
    class Ir {
        constructor(a) {
            this.C = {};
            this.C.c = a;
            this.A = [];
            this.m = null;
            this.B = [];
            this.G = 0
        }
        Pa(a) {
            this.C.wpc = a;
            return this
        }
        wa(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        v(a) {
            var b = oe(this.C);
            0 < this.G && (b.t = this.G);
            b.err = this.A.join();
            b.warn = this.B.join();
            this.m && (b.excp_n = this.m.name, b.excp_m = this.m.message && this.m.message.substring(0, 512), b.excp_s = this.m.stack && Qi(this.m.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function Jr(a, b, c) {
        !b.ka || "pvc" in c || (c.pvc = rh(a.j));
        Uk(b.qa, c, b.ia)
    }

    function Kr(a, b, c) {
        c = c.v(a.j);
        b.ka && (c.pvc = rh(a.j));
        0 < b.ia && (c.r = b.ia, Jr(a, b, c))
    }
    var Lr = class {
        constructor(a) {
            this.j = a
        }
    };

    function Mr(a, b, c) {
        var d = a.m,
            e = Q(a.j).clientHeight,
            f = J(a.l, Yn, 4) ? .j();
        a = a.j;
        a = a.google_ama_state = a.google_ama_state || {};
        Jr(d, Cr, { ...c,
            evt: b,
            vh: e,
            eid: f,
            psr: a.audioSenseSpaceReserved ? 1 : 0
        })
    }
    var Nr = class {
        constructor(a, b, c) {
            this.j = a;
            this.m = b;
            this.l = c
        }
    };
    const Or = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return br(d.document, a, null, null, this.j, b)
        }
        m() {
            return null
        }
    };
    const Pr = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < id(this.j, so, 9).length ? id(this.j, so, 9)[0] : null,
                f = sr(J(this.j, to, 3), e);
            if (!e) return null;
            if (e = z(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new tg(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.zc && ar(c.style, f.zc);
                d = (new tg(d)).createElement("INS");
                f.pb && ar(d.style, f.pb);
                c.appendChild(d);
                f = {
                    Xa: c,
                    va: d
                };
                f.va.setAttribute("data-ad-type", "text");
                f.va.setAttribute("data-native-settings-key",
                    e);
                dr(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        m() {
            var a = 0 < id(this.j, so, 9).length ? id(this.j, so, 9)[0] : null;
            if (!a) return null;
            a = id(a, qo, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == z(c, 1) && 0 < parseInt(z(c, 2), 10)) return parseInt(z(c, 2), 10)
            }
            return null
        }
    };
    const Qr = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        vd: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    pb: g
                }
            } else c = {};
            a = br(d.document, a, f, e, c, b);
            a.va.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        m() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        Fb() {
            return this.j
        }
    };
    class Rr {
        constructor(a) {
            this.l = a
        }
        j() {
            return new tn([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Sr = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        j() {
            return this.m
        }
        l(a) {
            a = this.v.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Tr(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                k = e.W();
            if (k) {
                var l = or(k);
                if (l) {
                    var m = tr[z(e, 2)],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = J(e, to, 3)) ? F(m, 3) : null;
                        l = new Sr(l, n);
                        n = Zc(e, 10).slice(0);
                        null != rd(k, 5) && n.push(1);
                        var q = h ? h : {};
                        h = rd(e, 12);
                        k = Wc(e, rn, 4) ? J(e, rn, 4) : null;
                        1 == z(e, 8) ? (q = q.qf || null, e = new Ur(l, new Or(sr(J(e, to, 3), null)), q, m, 0, n, k, g, f, h, e)) : e = 2 == z(e, 8) ? new Ur(l, new Pr(e), q.Vf || new Rr("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e = null;
            null !==
                e && d.push(e)
        }
        return d
    }

    function Vr(a) {
        return a.A
    }

    function Wr(a) {
        return a.ua
    }

    function Xr(a) {
        return W(kp) ? (a.K || (a.K = a.G.l(a.m)), a.K) : a.G.l(a.m)
    }

    function Yr(a) {
        var b = a.H;
        a = a.m.document.createElement("div");
        W(kp) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function Zr(a) {
        return a.C instanceof Qr ? a.C.Fb() : null
    }

    function $r(a, b, c) {
        Ml(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }

    function as(a, b) {
        a.A = !0;
        W(kp) && (a.l && Eq(a.l), a.l = null);
        null != b && a.V.push(b)
    }

    function bs(a) {
        return Cq(a.m.document, a.H || !1)
    }

    function cs(a) {
        return a.C.m(a.m)
    }

    function ds(a, b = null, c = null) {
        return new Ur(a.G, b || a.C, c || a.L, a.H, a.eb, a.uc, a.Fc, a.m, a.ja, a.F, a.v, a.B, a.aa)
    }
    class Ur {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, q = null) {
            this.G = a;
            this.C = b;
            this.L = c;
            this.H = d;
            this.eb = e;
            this.uc = f;
            this.Fc = g ? g : new rn;
            this.m = h;
            this.ja = k;
            this.F = l;
            this.v = m;
            (a = !m) || (a = !(m.W() && null != rd(m.W(), 5)));
            this.ua = !a;
            this.B = n;
            this.aa = q;
            this.V = [];
            this.A = !1;
            this.I = new Ql;
            this.K = this.l = null
        }
        P() {
            return this.m
        }
        j() {
            return this.G.j()
        }
    };
    var es = a => a ? .google_ad_slot ? Ym(new jn(1, {
            cf: a.google_ad_slot
        })) : $m("Missing dimension when creating placement id"),
        gs = a => {
            switch (a.eb) {
                case 0:
                case 1:
                    var b = a.v;
                    null == b ? a = null : (a = b.W(), null == a ? a = null : (b = z(b, 2), a = null == b ? null : new jn(0, {
                        Od: [a],
                        Ke: b
                    })));
                    return null != a ? Ym(a) : $m("Missing dimension when creating placement id");
                case 2:
                    return a = fs(a), null != a ? Ym(a) : $m("Missing dimension when creating placement id");
                default:
                    return $m("Invalid type: " + a.eb)
            }
        };
    const fs = a => {
        if (null == a || null == a.B) return null;
        const b = J(a.B, hn, 1),
            c = J(a.B, hn, 2);
        if (null == b || null == c) return null;
        const d = a.aa;
        if (null == d) return null;
        a = a.j();
        return null == a ? null : new jn(0, {
            Od: [b, c],
            Uf: d,
            Ke: ur[a]
        })
    };

    function hs(a) {
        const b = Zr(a.T);
        return (b ? es(b) : gs(a.T)).map(c => mn(c))
    }

    function is(a) {
        a.j = a.j || hs(a);
        return a.j
    }

    function js(a, b) {
        if (a.T.A) throw Error("AMA:AP:AP");
        Hq(b, a.W(), a.T.j());
        as(a.T, b)
    }
    const ks = class {
        constructor(a, b, c) {
            this.T = a;
            this.l = b;
            this.Z = c;
            this.j = null
        }
        W() {
            return this.l
        }
        fill(a, b) {
            var c = this.T;
            (a = c.C.l(a, b, this.l, c.m)) && js(this, a.Xa);
            return a
        }
    };
    const ls = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = $a(b, "&") ? ng(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Sl.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (ls(a, b[c])) return !0
        }
        return !1
    };
    var ms = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const ns = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return br(d.document, a, null, null, this.j, b)
        }
        m(a) {
            return ms(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class os {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = ms(a);
            return new tn(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const ps = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        l() {
            return this.v
        }
        j() {
            return this.m
        }
    };
    const qs = {
        TABLE: {
            xb: new Xm([1, 2])
        },
        THEAD: {
            xb: new Xm([0, 3, 1, 2])
        },
        TBODY: {
            xb: new Xm([0, 3, 1, 2])
        },
        TR: {
            xb: new Xm([0, 3, 1, 2])
        },
        TD: {
            xb: new Xm([0, 3])
        }
    };

    function rs(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = wb(e, f), 0 > c || b.push(new ss(a, [f], c, f, 3, Dg(f).trim(), d));
        return b
    }

    function ts(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const q = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == q || "inline-block" == q ? null : m
                }
                m ? (d.length && k && e.push(new ss(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = Dg(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new ss(a, d, h, b, 2, k, c));
        return e
    }

    function us(a, b) {
        return a.j - b.j
    }

    function vs(a) {
        const b = qn();
        return new Ur(new ps(a.Ic, a.Jc), new Or({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.m, a.j)
    }
    class ss {
        constructor(a, b, c, d, e, f, g) {
            this.m = a;
            this.ub = b.slice(0);
            this.j = c;
            this.Ic = d;
            this.Jc = e;
            this.v = f;
            this.l = g
        }
        P() {
            return this.l
        }
    };

    function ws(a) {
        return Eb(a.A ? ts(a.l, a.j, a.m) : [], a.v ? rs(a.l, a.v, a.j, a.m) : []).filter(b => {
            var c = b.Ic.tagName;
            c ? (c = qs[c.toUpperCase()], b = null != c && c.xb.contains(b.Jc)) : b = !1;
            return !b
        })
    }
    class xs {
        constructor(a, b, c) {
            this.j = a;
            this.v = b.cc;
            this.A = b.de;
            this.l = b.articleStructure;
            this.m = c
        }
    };

    function ys(a, b) {
        return nr(() => {
            if (W(kp)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = Xr(f);
                    if (g) {
                        var h = f;
                        if (!h.l && !h.A) {
                            var k = h;
                            var l = h,
                                m = null;
                            try {
                                var n = Xr(l);
                                if (n) {
                                    m = Yr(l);
                                    Hq(m, n, l.j());
                                    var q = m
                                } else q = null
                            } catch (A) {
                                throw Eq(m), A;
                            }
                            k.l = q
                        }(h = h.l) && d.push({
                            mg: f,
                            anchorElement: g,
                            Hf: h
                        })
                    }
                }
                if (0 < d.length)
                    for (q = Gl(b), n = Hl(b), e = 0; e < d.length; e++) {
                        const {
                            mg: A,
                            anchorElement: x,
                            Hf: B
                        } = d[e];
                        f = zs(B, n, q);
                        c.push(new ks(A, x, f))
                    }
                q = c
            } else {
                q = [];
                n = [];
                try {
                    const A = [];
                    for (let x = 0; x < a.length; x++) {
                        var r = a[x],
                            t = Xr(r);
                        t && A.push({
                            Ge: r,
                            anchorElement: t
                        })
                    }
                    for (t = 0; t < A.length; t++) {
                        r = n;
                        g = r.push; {
                            k = A[t];
                            l = k.anchorElement;
                            m = k.Ge;
                            const x = Yr(m);
                            try {
                                Hq(x, l, m.j()), h = x
                            } catch (B) {
                                throw Eq(x), B;
                            }
                        }
                        g.call(r, h)
                    }
                    c = Gl(b);
                    d = Hl(b);
                    for (g = 0; g < n.length; g++) e = zs(n[g], d, c), f = A[g], q.push(new ks(f.Ge, f.anchorElement, e))
                } finally {
                    for (c = 0; c < n.length; c++) Eq(n[c])
                }
            }
            return q
        }, b)
    }

    function zs(a, b, c) {
        a = a.getBoundingClientRect();
        return new Fm(a.left + b, a.top + c, a.right - a.left)
    };

    function As(a, b) {
        const c = ws(b);
        c.sort(us);
        return new Bs(a, b, c)
    }

    function Cs(a, b, c) {
        return new Ur(new ps(b, c), new Or({}), null, !0, 2, [], null, a.j, null, null, null, a.A.l, null)
    }
    var Bs = class {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.v = c;
            this.l = !1;
            this.m = 0
        }
        next() {
            if (!this.l) {
                if (this.m >= this.v.length) var a = null;
                else {
                    {
                        const b = this.v[this.m++].ub[0];
                        va(b) && 1 == b.nodeType ? a = Cs(this, b, 0) : (a = this.j.document.createElement("div"), N(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = Cs(this, a, 3))
                    }
                    a = ys([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var Ds = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const Es = {
            1: "0.5vp",
            2: "300px"
        },
        Fs = {
            1: 700,
            2: 1200
        },
        Gs = {
            [1]: {
                Qe: "3vp",
                Bd: "1vp",
                Pe: "0.3vp"
            },
            [2]: {
                Qe: "900px",
                Bd: "300px",
                Pe: "90px"
            }
        };

    function Hs(a, b, c) {
        var d = Is(a),
            e = Q(a).clientHeight || Fs[d],
            f = void 0;
        c && (f = (c = (c = Js(id(c, Dn, 2), d)) ? J(c, An, 7) : void 0) ? Ks(c, e) : void 0);
        c = f;
        f = Is(a);
        a = Q(a).clientHeight || Fs[f];
        const g = Ls(Gs[f].Bd, a);
        a = null === g ? Ms(f, a) : new Ns(g, g, Os(g, 8), 8, .3, c);
        c = Ls(Gs[d].Qe, e);
        f = Ls(Gs[d].Bd, e);
        d = Ls(Gs[d].Pe, e);
        e = a.m;
        c && d && f && void 0 !== b && (e = .5 >= b ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Ns(e, e, Os(e, a.l), a.l, a.v, a.j)
    }

    function Ps(a, b) {
        const c = Is(a);
        a = Q(a).clientHeight || Fs[c];
        if (b = Js(id(b, Dn, 2), c))
            if (b = Qs(b, a)) return b;
        return Ms(c, a)
    }

    function Rs(a) {
        const b = Is(a);
        return Ms(b, Q(a).clientHeight || Fs[b])
    }

    function Ss(a, b) {
        let c = {
            wc: a.m,
            jb: a.A
        };
        for (let d of a.B) d.adCount <= b && (c = d.Ad);
        return c
    }

    function Ts(a, b, c) {
        var d = F(b, 2);
        b = J(b, Dn, 1);
        const e = Q(c).clientHeight || Fs[Is(c)];
        c = Ls(b ? .F(), e) ? ? a.m;
        const f = Ls(b ? .B(), e) ? ? a.A;
        d = d ? [] : Us(b ? .j(), e) ? ? a.B;
        const g = b ? .v() ? ? a.l,
            h = b ? .A() ? ? a.v;
        a = (b ? .G() ? Ks(J(b, An, 7), e) : null) ? ? a.j;
        return new Ns(c, f, d, g, h, a)
    }
    class Ns {
        constructor(a, b, c, d, e, f) {
            this.m = a;
            this.A = b;
            this.B = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.v = e;
            this.j = f
        }
    }

    function Js(a, b) {
        for (let c of a)
            if (z(c, 1) == b) return c;
        return null
    }

    function Us(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = rd(d, 1);
            const e = Ls(z(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Ad: {
                    wc: e,
                    jb: Ls(z(d, 3), b)
                }
            })
        }
        return c
    }

    function Qs(a, b) {
        const c = Ls(z(a, 2), b),
            d = Ls(z(a, 5), b);
        if (null === c) return null;
        const e = rd(a, 4);
        if (null == e) return null;
        var f = a.j();
        f = Us(f, b);
        if (null === f) return null;
        const g = J(a, An, 7);
        b = g ? Ks(g, b) : void 0;
        return new Ns(c, d, f, e, $c(a, 6), b)
    }

    function Ms(a, b) {
        a = Ls(Es[a], b);
        return new Ns(null === a ? Infinity : a, null, [], 3, null)
    }

    function Ls(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Is(a) {
        a = 900 <= Q(a).clientWidth;
        return Ig() && !a ? 1 : 2
    }

    function Os(a, b) {
        if (4 > b) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Ad: {
                wc: 2 * a,
                jb: 2 * a
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Ad: {
                wc: 3 * a,
                jb: 3 * a
            }
        }]
    }

    function Ks(a, b) {
        return {
            we: Ls(z(a, 2), b) || 0,
            ve: rd(a, 3) || 1,
            sb: Ls(z(a, 1), b) || 0
        }
    };

    function Vs(a, b, c) {
        return ql({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function Ws(a) {
        if (!a.length) return null;
        const b = rl(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new Xs(b, a)
    }
    class Xs {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Ys(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    var dt = (a, b) => {
        const c = Fb(b.document.querySelectorAll(".google-auto-placed")),
            d = Zs(b),
            e = $s(b),
            f = at(b),
            g = bt(b),
            h = Fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Fb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = Fb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(Fb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Fb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, q] of [
                [a.lc, c],
                [a.bb, d],
                [a.Sf, e],
                [a.mc, f],
                [a.nc, g],
                [a.Qf, h],
                [a.Rf, k],
                [a.Tf, l]
            ]) a = q, !1 === n ? b = b.concat(a) : m = m.concat(a);
        a = ct(m);
        b = ct(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const Ct = a => {
            const b = Ys(a);
            return b ? yb(zb(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        Zs = a => Fb(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        $s = a => Fb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        at = a => (Ct(a) || Fb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Fb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        bt = a => Fb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var ct = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var Dt = Qk.ta(453, dt),
        Et;
    Et = Qk.ta(454, (a, b) => {
        const c = Fb(b.document.querySelectorAll(".google-auto-placed")),
            d = Zs(b),
            e = $s(b),
            f = at(b),
            g = bt(b),
            h = Fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Fb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = Fb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return ct([].concat(!0 === a.lc ? c : [], !0 === a.bb ? d : [], !0 === a.Sf ? e : [], !0 === a.mc ? f : [], !0 === a.nc ? g : [], !0 === a.Qf ? h : [], !0 === a.Rf ? k : [], !0 === a.Tf ? b : []))
    });

    function Ft(a, b, c) {
        const d = Gt(a);
        b = Ht(d, b, c);
        return new It(a, d, b)
    }

    function Jt(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Kt(a) {
        return a.j.map(b => b.box)
    }

    function Lt(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class It {
        constructor(a, b, c) {
            this.m = a;
            this.j = b.slice(0);
            this.v = c.slice(0);
            this.l = null
        }
    }

    function Gt(a) {
        const b = Dt({
                bb: !1
            }, a),
            c = Hl(a),
            d = Gl(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && $a(e.className, "google-auto-placed")) || Jt(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Kk: e ? 1 : 0
            } : null
        }).filter(ae(e => null === e))
    }

    function Ht(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Mt(a, b) : zb(a, d => new Xs(d.box, 1))
    }

    function Mt(a, b) {
        a = zb(a, d => new Xs(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Vs(d, a[f], b)) {
                        d = Ws([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Nt(a, b, c) {
        const d = Em(c, b);
        return !Bb(a, e => ql(e, d))
    }

    function Ot(a, b, c, d, e) {
        e = e.Z;
        const f = Em(e, b),
            g = Em(e, c),
            h = Em(e, d);
        return !Bb(a, k => ql(k, g) || ql(k, f) && !ql(k, h))
    }

    function Pt(a, b, c, d) {
        const e = Kt(a);
        if (Nt(e, b, d.Z)) return !0;
        if (!Ot(e, b, c.we, c.sb, d)) return !1;
        const f = new Xs(Em(d.Z, 0), 1);
        a = yb(a.v, g => Vs(g, f, c.sb));
        b = Ab(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.ve ? !1 : !0
    };
    var Qt = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Rt(a, b) {
        const c = new en,
            d = new Rl;
        b.forEach(e => {
            if (yd(e, Ln, 1, On)) {
                e = yd(e, Ln, 1, On);
                if (J(e, Kn, 1) && J(e, Kn, 1).W() && J(e, Kn, 2) && J(e, Kn, 2).W()) {
                    const g = St(a, J(e, Kn, 1).W()),
                        h = St(a, J(e, Kn, 2).W());
                    if (g && h)
                        for (var f of Qt({
                                anchor: g,
                                position: z(J(e, Kn, 1), 2)
                            }, {
                                anchor: h,
                                position: z(J(e, Kn, 2), 2)
                            })) c.set(wa(f.anchor), f.position)
                }
                J(e, Kn, 3) && J(e, Kn, 3).W() && (f = St(a, J(e, Kn, 3).W())) && c.set(wa(f), z(J(e, Kn, 3), 2))
            } else yd(e, Mn, 2, On) ? Tt(a, yd(e, Mn, 2, On), c) : yd(e, Jn, 3, On) && Ut(a, yd(e, Jn, 3, On), d)
        });
        return new Vt(c, d)
    }
    class Vt {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Tt = (a, b, c) => {
            J(b, Kn, 2) ? (b = J(b, Kn, 2), (a = St(a, b.W())) && c.set(wa(a), z(b, 2))) : J(b, hn, 1) && (a = Wt(a, J(b, hn, 1))) && a.forEach(d => {
                d = wa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Ut = (a, b, c) => {
            J(b, hn, 1) && (a = Wt(a, J(b, hn, 1))) && a.forEach(d => {
                c.add(wa(d))
            })
        },
        St = (a, b) => (a = Wt(a, b)) && 0 < a.length ? a[0] : null,
        Wt = (a, b) => (b = or(b)) ? b.query(a) : null;

    function Xt(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Yt(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function Zt(a) {
        a = $t(a);
        return a.has("all") || a.has("after")
    }

    function au(a) {
        a = $t(a);
        return a.has("all") || a.has("before")
    }

    function $t(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Yt(a) {
        const b = $t(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var bu = class {
        constructor() {
            this.j = new Set
        }
    };

    function cu(a) {
        return function(b) {
            return ys(b, a)
        }
    }

    function du(a) {
        const b = Q(a).clientHeight;
        return b ? Da(eu, b + Gl(a)) : Yd
    }

    function fu(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Yd;
        const d = Kt(c || Ft(b));
        return e => Nt(d, a, e.Z)
    }

    function gu(a, b, c, d) {
        if (0 > a || 0 > b.we || 0 > b.ve || 0 > b.sb) throw Error("ama::ead:nd");
        return Infinity === a ? Yd : e => Pt(d || Ft(c, b.sb), a, b, e)
    }

    function hu(a) {
        if (!a.length) return Yd;
        const b = new Xm(a);
        return c => b.contains(c.eb)
    }

    function iu(a) {
        return function(b) {
            for (let c of b.uc)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function ju(a) {
        return a.length ? function(b) {
            const c = b.uc;
            return a.some(d => -1 < c.indexOf(d))
        } : Zd
    }

    function ku(a, b) {
        if (0 >= a) return Zd;
        const c = Q(b).scrollHeight - a;
        return function(d) {
            return d.Z.j <= c
        }
    }

    function lu(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[z(c.Fc, 2) || 0]
        }
    }

    function mu(a) {
        return a.length ? b => a.includes(z(b.Fc, 1) || 0) : Zd
    }

    function nu(a, b) {
        const c = Rt(a, b);
        return function(d) {
            var e = d.W();
            d = ur[d.T.j()];
            var f = wa(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(wa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(wa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function ou() {
        const a = new bu;
        return function(b) {
            var c = b.W();
            b = ur[b.T.j()];
            a: switch (b) {
                case 1:
                    var d = Zt(c.previousElementSibling) || au(c);
                    break a;
                case 4:
                    d = Zt(c) || au(c.nextElementSibling);
                    break a;
                case 2:
                    d = au(c.firstElementChild);
                    break a;
                case 3:
                    d = Zt(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || Xt(a, c, b))
        }
    }
    const eu = (a, b) => b.Z.j >= a,
        pu = (a, b, c) => {
            c = c.Z.l;
            return a <= c && c <= b
        };
    var qu = class {
        constructor(a, b) {
            this.m = a;
            this.l = b
        }
        j() {
            const a = du(this.m);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var ru = class {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            var a = new vo;
            var b = J(this.m.l, hn, 1);
            a = jd(a, 1, b);
            a = C(a, 2, 2);
            a = C(a, 8, 1);
            a = Tr([a], this.l);
            return ys(a, this.l)[0] || null
        }
    };
    var su = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        tu = a => {
            const b = Q(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        };

    function uu(a, b) {
        if (!b) return !1;
        const c = wa(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = uu(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function vu(a, b) {
        return Bb(b.ub, c => uu(a, c))
    }
    class wu {
        constructor(a) {
            this.j = new Ql;
            this.l = a
        }
    };
    class xu {
        constructor(a, b) {
            this.v = a;
            this.j = [];
            this.l = [];
            this.m = b
        }
    };
    var zu = (a, {
            Pk: b = !1,
            Qk: c = W(ip) ? 2 : 3,
            Eg: d = null
        } = {}) => {
            a = ws(a);
            return yu(a, b, c, d)
        },
        yu = (a, b = !1, c = W(ip) ? 2 : 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(us);
            a = [];
            b = new xu(b, d);
            for (const l of e) {
                d = b;
                e = {
                    Bc: l,
                    oc: 51 > l.v.length ? !1 : null != d.m ? !vu(d.m, l) : !0
                };
                if (d.v || e.oc) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].Bc;
                        b: {
                            var g = f.P();
                            var h = f.ub[f.ub.length - 1];f = e.Bc.ub[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var k = h.parentElement;
                            const m = f.parentElement;
                            if (k && m && k == m) {
                                k = 0;
                                for (h =
                                    h.nextSibling; 10 > k && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (ls(g, h)) break;
                                    h = h.nextSibling;
                                    k++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.oc && d.l.push(e.Bc)) : (d.j = [e], d.l = e.oc ? [e.Bc] : [])
                }
                if (b.l.length >= c) {
                    d = b;
                    e = W(ip) ? 0 : 1;
                    if (0 > e || e >= d.l.length) d = null;
                    else {
                        for (e = d.l[e]; d.j.length && !d.j[0].oc;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Bu = (a, b) => {
            a = Au(a, b);
            const c = new wu(b);
            return Rm(a, d => zu(d, {
                Eg: c
            }))
        },
        Au = (a, b) => {
            const c = new Ql;
            a.forEach(d => {
                var e = or(J(d, hn, 1));
                if (e) {
                    const f = e.toString();
                    Ml(c, f) || c.set(f, {
                        articleStructure: d,
                        ff: e,
                        cc: null,
                        de: !1
                    });
                    e = c.get(f);
                    (d = (d = J(d, hn, 2)) ? z(d, 7) : null) ? e.cc = e.cc ? e.cc + "," + d : d: e.de = !0
                }
            });
            return Pl(c).map(d => {
                const e = d.ff.query(b.document);
                return e.length ? new xs(e[0], d, b) : null
            }).filter(d => null != d)
        };
    var Cu = (a, b) => {
        b = Au(b, a);
        const c = b.map(d => d.j);
        b = b.filter(d => {
            d = d.j.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }).filter(d => su(c)(d.j)).filter(d => tu(a)(d.j));
        b.sort((d, e) => {
            e = e.j;
            return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };
    var Eu = (a, b, c) => {
        if (H(c, 2)) {
            if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
                var d = new vo;
                var e = new hn;
                e = C(e, 7, "div#google-auto-placed-read-aloud-player-reserved");
                d = jd(d, 1, e);
                d = C(d, 2, 2);
                d = C(d, 8, 1);
                d = Tr([d], a);
                d = ys(d, a)[0] || null
            } else d = null;
            if (d) return d
        }
        a: {
            c = Du(c);b = Cu(a, b);
            for (const f of b) {
                b: switch (b = a, d = f, e = c, e) {
                    case 1:
                        b = new ru(b, d);
                        break b;
                    case 2:
                        b = new Ds(As(b, d));
                        break b;
                    case 3:
                        b = new qu(b, As(b, d));
                        break b;
                    default:
                        throw Error(`Unknown position: ${e}`);
                }
                if (b = b.j()) {
                    a =
                        b;
                    break a
                }
            }
            a = null
        }
        return a
    };

    function Du(a) {
        if (H(a, 2)) return 3;
        switch (xd(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                throw Error(`Unknown player position: ${xd(a,1)}`);
        }
    };
    var Fu = class {
            constructor(a) {
                this.j = a
            }
        },
        Iu = (a, b, c, d, e) => {
            if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return $m("Player already created");
            var f = a.document;
            const g = f.createElement("div");
            g.id = "google-auto-placed-read-aloud-player";
            N(g, {
                padding: "5px"
            });
            const h = f.createElement("script");
            var k = Lh `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
            h.textContent = ve(k);
            zf(h);
            g.appendChild(h);
            Gu(f, g, Wd("https://www.google-analytics.com/analytics.js"));
            Gu(f, g, Wd("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
            f = f.createElement("google-read-aloud-player");
            f.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
            f.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
            f.setAttribute("data-url", c.url);
            f.setAttribute("data-locale", d);
            f.setAttribute("data-no-settings-screen", "");
            e && (null != z(e, 1) && 0 != xd(e, 1) && f.setAttribute("data-docking-begin-trigger", Hu[xd(e, 1)]), null != z(e, 2) && f.setAttribute("data-experiment",
                e.j()));
            g.appendChild(f);
            js(b, g);
            return Ym(new Fu(a.document.getElementsByTagName("google-read-aloud-player")[0]))
        };
    const Gu = (a, b, c) => {
            a = a.createElement("script");
            Af(a, Ce(Vd(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        Hu = {
            [1]: "out-of-view"
        };
    class Ju {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function Ku() {
        const {
            promise: a,
            resolve: b
        } = new Ju;
        return {
            promise: a,
            resolve: b
        }
    };

    function Lu(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = Ku();
        b[a] = d;
        c();
        return d
    }

    function Mu(a, b, c) {
        return Lu(a, b, () => {
            Pg(b.document, c)
        }).promise
    };

    function Nu(a, b, c, d) {
        a = Mu(7, a, c).then(e => {
            e.init(b);
            e.handleAdConfig({
                preloadAdBreaks: null != z(d, 1, !1) && H(d, 1) ? "auto" : "on",
                sound: "on"
            });
            return e
        });
        Qk.Aa(915, a);
        return new Ou(a)
    }

    function Pu(a, b) {
        a = a.j.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        Qk.Aa(956, a)
    }
    var Ou = class {
        constructor(a) {
            this.j = a
        }
    };

    function Qu(a) {
        const b = a.m.j;
        b.addEventListener("firstplay", () => {
            if (!a.l) {
                a.l = !0;
                b.pause();
                const c = performance.now();
                Pu(a.v, () => {
                    b.play();
                    Mr(a.j, "preroll", {
                        Nk: performance.now() - c
                    })
                });
                Mr(a.j, "play", {})
            }
        })
    }
    var Ru = class {
        constructor(a, b, c) {
            this.m = a;
            this.v = b;
            this.j = c;
            this.l = !1
        }
    };

    function Su(a, b, c, d, e, f, g) {
        return 0 == d.length ? $m("No ArticleStructure found") : J(c, Xn, 2) ? Ym(new Tu(a, b, d, c, e, f, g ? g : "en")) : $m("No AudioSenseConfig.PlacementConfig found")
    }

    function Uu(a) {
        const b = Eu(a.v, a.C, J(a.l, Xn, 2));
        if (b) {
            var c = !!a.A.Qb && Vu(a);
            c && (a.B = Nu(a.v, a.G, a.A.Qb, J(a.l, Wn, 3) ? .j() || new Un));
            var d = Iu(a.v, b, a.A, a.F, J(a.l, Yn, 4) || void 0);
            null != d.j ? (a.m = d.j.value, a.m.j.addEventListener("firstview", () => {
                Mr(a.j, "view", {})
            }), c && Qu(new Ru(a.m, a.B, a.j)), Mr(a.j, "place", {
                sts: "ok",
                pp: b.Z.j
            })) : Mr(a.j, "place", {
                sts: "wf"
            })
        } else Mr(a.j, "place", {
            sts: "pf"
        })
    }

    function Vu(a) {
        return (a = J(a.l, Wn, 3)) ? id(a, Tn, 1).some(b => 1 === xd(b, 1)) : !1
    }
    var Tu = class {
        constructor(a, b, c, d, e, f, g) {
            this.v = a;
            this.j = new Nr(a, b, d);
            this.C = c;
            this.l = d;
            this.A = e;
            this.G = f;
            this.F = g;
            this.m = this.B = null
        }
    };

    function Wu(a, b, c) {
        var d = 0 === a.l ? a.j.A() : a.j.B(),
            e = a.m,
            f = Q(a.win).clientHeight,
            g = a.j.v() ? .j() || 0;
        a: switch (d ? .j()) {
            case 1:
                d = "AUTO_PROSE_TOP_ANCHOR";
                break a;
            case 2:
                d = "AUTO_PROSE_BOTTOM_ANCHOR";
                break a;
            default:
                d = "UNKNOWN_POSITION"
        }
        a: switch (a.l) {
            case 0:
                a = "DESKTOP";
                break a;
            case 2:
                a = "MOBILE";
                break a;
            default:
                a = "OTHER_VIEWPORT"
        }
        Jr(e, Er, { ...c,
            evt: b,
            vh: f,
            eid: g,
            pos: d,
            vpt: a
        })
    }

    function Xu(a, b) {
        Wu(a, "place", {
            sts: b
        })
    }
    var Yu = class {
        constructor(a, b, c) {
            this.win = a;
            this.m = b;
            this.j = c;
            this.l = jh()
        }
    };
    var Zu = {},
        $u = {},
        av = {},
        bv = {},
        cv = {};

    function dv() {
        throw Error("Do not instantiate directly");
    }
    dv.prototype.Vd = null;
    dv.prototype.ya = function() {
        return this.content
    };
    dv.prototype.toString = function() {
        return this.content
    };

    function ev(a) {
        if (a.Wd !== Zu) throw Error("Sanitized content was not of kind HTML.");
        return gf(a.toString())
    }

    function fv() {
        dv.call(this)
    }
    Ia(fv, dv);
    fv.prototype.Wd = Zu;

    function gv(a, b) {
        return null != a && a.Wd === b
    };

    function hv(a) {
        if (null != a) switch (a.Vd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function iv(a) {
        return gv(a, Zu) ? a : a instanceof ef ? jv(df(a).toString()) : a instanceof ef ? jv(df(a).toString()) : jv(String(String(a)).replace(kv, lv), hv(a))
    }
    var jv = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Vd = d);
            return c
        }
    }(fv);

    function mv(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function nv(a) {
        return gv(a, Zu) ? String(String(a.ya()).replace(ov, "").replace(pv, "&lt;")).replace(qv, lv) : String(a).replace(kv, lv)
    }

    function rv(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function sv(a) {
        if (null == a) return " null ";
        if (gv(a, $u)) return a.ya();
        if (a instanceof we || a instanceof we) return ve(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(tv, uv) + "'"
        }
    }

    function X(a) {
        gv(a, cv) ? a = mv(a.ya()) : null == a ? a = "" : a instanceof Qe ? a = mv(Pe(a)) : a instanceof Qe ? a = mv(Pe(a)) : a instanceof bf ? a = mv(af(a)) : a instanceof bf ? a = mv(af(a)) : (a = String(a), a = vv.test(a) ? a : "zSoyz");
        return a
    }
    const wv = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function lv(a) {
        return wv[a]
    }
    const xv = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function uv(a) {
        return xv[a]
    }
    const yv = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function zv(a) {
        return yv[a]
    }
    const kv = /[\x00\x22\x26\x27\x3c\x3e]/g,
        qv = /[\x00\x22\x27\x3c\x3e]/g,
        Av = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Bv = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        tv = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Cv = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        vv = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier|linear-gradient)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier|linear-gradient)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Dv =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function Ev(a) {
        return String(a).replace(Cv, zv)
    }
    const ov = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        pv = /</g;

    function Fv(a) {
        a = void 0 === a ? "white" : a;
        return jv('<svg width="' + nv(18) + '" height="' + nv(18) + '" viewBox="0 0 ' + nv(18) + " " + nv(18) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' + (gv(a, Zu) ? String(String(a.ya()).replace(ov, "").replace(pv,
            "&lt;")).replace(Bv, lv) : String(a).replace(Av, lv)) + " /></svg>")
    };
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const Gv = Math.floor;
    var Hv = /^xn--/,
        Iv = /[\x2E\u3002\uFF0E\uFF61]/g;
    const Jv = {
        Ej: "Overflow: input needs wider integers to process",
        Aj: "Illegal input >= 0x80 (not a basic code point)",
        lj: "Invalid input"
    };

    function Kv(a) {
        throw RangeError(Jv[a]);
    }

    function Lv(a, b) {
        const c = a.split("@");
        let d = "";
        1 < c.length && (d = c[0] + "@", a = c[1]);
        a = a.replace(Iv, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function Mv(a) {
        return Lv(a, b => {
            if (Hv.test(b) && 4 < b.length) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                0 > d && (d = 0);
                for (var e = 0; e < d; ++e) 128 <= b.charCodeAt(e) && Kv("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = 0 < d ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let q = 1, r = 36;; r += 36) {
                        d >= k && Kv("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = 10 > f - 48 ? f - 22 : 26 > f - 65 ? f - 65 : 26 > f - 97 ? f - 97 : 36;
                        (36 <= f || f > Gv((2147483647 - l) / q)) && Kv("Overflow: input needs wider integers to process");
                        l += f * q;
                        var g = r <= c ? 1 : r >= c + 26 ? 26 : r - c;
                        if (f < g) break;
                        f = 36 - g;
                        q > Gv(2147483647 / f) && Kv("Overflow: input needs wider integers to process");
                        q *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = f;
                    let n = 0;
                    c = 0 == e ? Gv(c / 700) : c >> 1;
                    for (c += Gv(c / g); 455 < c; n += 36) c = Gv(c / 35);
                    c = Gv(n + 36 * c / (c + 38));
                    Gv(l / f) > 2147483647 - m && Kv("Overflow: input needs wider integers to process");
                    m += Gv(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };

    function Nv(a, b, c) {
        a.Ca.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.m,
            hostName: a.host
        })
    }
    var Ov = class {
        constructor(a, b, c, d, e, f, g, h, k) {
            this.Ca = a;
            this.l = b;
            this.v = c;
            this.j = d;
            this.B = e;
            this.host = f;
            this.language = g;
            this.A = h;
            this.m = k
        }
        init() {
            this.Ca.setAttribute("id", "prose-iframe");
            this.Ca.setAttribute("width", "100%");
            this.Ca.setAttribute("height", "100%");
            var a = this.Ca,
                b = Re({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = Pe(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = Me(a) || Ne;
            var d = Mv(this.host.startsWith("www.") ? this.host.slice(4) :
                this.host);
            a = this.v;
            b = this.j;
            var e = this.B,
                f = this.host;
            d = this.A.replace("${website}", d);
            var g = jv;
            gv(c, av) || gv(c, bv) ? c = Ev(c) : c instanceof Ie ? c = Ev(Je(c)) : c instanceof Ie ? c = Ev(Je(c)) : c instanceof ye ? c = Ev(Be(c).toString()) : c instanceof ye ? c = Ev(Be(c).toString()) : (c = String(c), c = Dv.test(c) ? c.replace(Cv, zv) : "about:invalid#zSoyz");
            a = g('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}</style><div class="prose-container"><img class="cse-favicon" src="' +
                nv(c) + '" alt="' + nv(f) + ' icon"><p class="cse-header"><strong>' + iv(d) + '</strong></p><div class="gcse-search" data-gname="' + nv(a) + '" data-adclient="' + nv(b) + '" data-adchannel="' + nv(e) + '" data-as_sitesearch="' + nv(f) + '" data-personalizedAds="false"></div></div>');
            a = ev(a);
            b = {
                style: Re({
                    margin: 0
                })
            };
            e = {
                src: Ee(Wd("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.language
                })
            };
            f = {};
            d = {};
            for (h in e) Object.prototype.hasOwnProperty.call(e, h) && (d[h] = e[h]);
            for (const k in f) Object.prototype.hasOwnProperty.call(f,
                k) && (d[k] = f[k]);
            var h = lf("script", d);
            h = hf("body", b, [a, h]);
            this.Ca.srcdoc = df(h)
        }
    };

    function Pv({
        J: a,
        md: b,
        kd: c,
        Sd: d,
        sa: e,
        uf: f
    }) {
        let g = 0;
        try {
            g |= a != a.top ? 512 : 0;
            const h = Math.min(a.screen.width || 0, a.screen.height || 0);
            g |= h ? 320 > h ? 8192 : 0 : 2048;
            g |= a.navigator && Qv(a.navigator.userAgent) ? 1048576 : 0;
            g = b ? g | (a.innerHeight >= b ? 0 : 1024) : g | (a.innerHeight >= a.innerWidth ? 0 : 8);
            g |= zl(a, c);
            g |= Al(a)
        } catch {
            g |= 32
        }
        switch (d) {
            case 2:
                Rv(a, e) && (g |= 16777216);
                break;
            case 1:
                Sv(a, e) && (g |= 16777216)
        }
        f && Tv(a, e) && (g |= 16777216);
        return g
    }

    function Qv(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var Rv = (a, b = null) => {
            const c = Uv(0, a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), Vv) + 15, 3);
            return Wv(a, c, b)
        },
        Sv = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), Vv) + 15,
                f = Uv(0, c, 3, d - e, d, 3);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return Wv(a, f, b)
        };

    function Tv(a, b = null) {
        return null != Xv(a, b)
    }

    function Xv(a, b = null) {
        var c = a.innerHeight;
        c = Uv(0, a.innerWidth, 10, c - 45, c, 10);
        return Yv(a, c, b)
    }

    function Zv(a, b) {
        const c = b.Yf,
            d = b.Ig;
        b = Uv(c, c + b.width, 10, d, d + b.height, 10);
        return Yv(a, b, null)
    }

    function $v(a, b) {
        const c = a.innerWidth,
            d = a.innerHeight;
        let e = d;
        for (; e > b;) {
            var f = Uv(0, c, 9, e - b, e, 9);
            f = Yv(a, f);
            if (!f) return d - e;
            e = f.getBoundingClientRect().top - 1
        }
        return null
    }

    function Wv(a, b, c = null) {
        return null != Yv(a, b, c)
    }

    function Yv(a, b, c = null) {
        for (const d of b)
            if (b = aw(a, d, c)) return b;
        return null
    }

    function aw(a, b, c = null) {
        const d = bw(a.document, b.x, b.y);
        return d ? cw(d, a, b, c) || dw(d, a, b, c) || null : null
    }

    function bw(a, b, c) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    }

    function dw(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a !== e.body; a = a.offsetParent) {
            const f = cw(a, b, c, d);
            if (f) return f
        }
        return null
    }

    function Uv(a, b, c, d, e, f) {
        const g = [];
        for (let m = 0; m < f; m++)
            for (let n = 0; n < c; n++) {
                var h = g,
                    k = c - 1,
                    l = f - 1;
                h.push.call(h, {
                    x: a + (0 === k ? 0 : n / k) * (b - a),
                    y: d + (0 === l ? 0 : m / l) * (e - d)
                })
            }
        return g
    }

    function cw(a, b, c, d = null) {
        if ("fixed" !== Rh(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= Uh(a).width && 1 >= Uh(a).height ? !0 : !1;
        d && Bi(d, "ach_evt", {
            tn: a.tagName,
            id: a.getAttribute("id") ? ? "",
            cls: a.getAttribute("class") ? ? "",
            ign: String(e),
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const Vv = 90 * 1.38;
    const ew = ["-webkit-text-fill-color"];

    function fw(a) {
        if (Sb) {
            {
                const c = Rg(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = gw(a)
                } else a = hw()
            }
        } else a = hw();
        return a
    }
    var hw = () => {
        const a = {
            all: "initial"
        };
        xb(ew, b => {
            a[b] = "unset"
        });
        return a
    };

    function gw(a) {
        xb(ew, b => {
            delete a[b]
        });
        return a
    };

    function iw(a, b) {
        const c = a.document.createElement("div");
        N(c, fw(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            mb: c,
            shadowRoot: a
        }
    };

    function jw(a, b) {
        return new kw(a, b)
    }

    function lw(a) {
        const b = mw(a);
        xb(a.j.maxZIndexListeners, c => c(b))
    }

    function mw(a) {
        a = Ug(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class nw {
        constructor(a) {
            this.j = vl(a).floatingAdsStacking
        }
    }

    function ow(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.m;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            lw(b);
            a.j = d
        }
    }

    function pw(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            lw(b);
            a.j = null
        }
    }
    class kw {
        constructor(a, b) {
            this.l = a;
            this.m = b;
            this.j = null
        }
    };

    function qw(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? qw(b) || a : a
    }

    function rw(a, b) {
        return sw(b, a.document.body).flatMap(c => tw(c))
    }

    function sw(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = (null == (e = c.mode && c.host ? c : null) ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function tw(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function uw(a) {
        null !== a.j && (a.j.Ef.forEach(b => {
            b.inert = !1
        }), a.j.og ? .focus(), a.j = null)
    }

    function vw(a, b) {
        uw(a);
        const c = qw(a.win.document);
        b = rw(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.j = {
            og: c,
            Ef: b
        }
    }
    var ww = class {
        constructor(a) {
            this.win = a;
            this.j = null
        }
        Hc() {
            uw(this)
        }
    };

    function xw(a, b) {
        a = `#${a}`;
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function yw(a, b) {
        b = iw(a, b);
        a.document.body.appendChild(b.mb);
        return b
    }

    function zw(a, b) {
        const c = new Yl(b.M);
        em(b, !0, () => void R(c, !0));
        em(b, !1, () => {
            a.setTimeout(() => {
                b.M || R(c, !1)
            }, 700)
        });
        return $l(c)
    };

    function Aw(a) {
        const b = a.Bb,
            c = a.Ab,
            d = a.rb,
            e = a.Qd,
            f = a.Nc,
            g = a.Ec ? 20 : 0;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            X(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + X(g) + "px; transition: transform " + X(f) + "s ease-in-out;" + (c ? "left: 0; border-top-right-radius: " + X(g) + "px; border-bottom-right-radius: " + X(g) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + X(g) + "px; border-bottom-left-radius: " + X(g) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {height: 24px;}.hd-control-button {border: none; background: none; cursor: pointer;}#hd-back-arrow-button {" +
            (c ? "float: right;" : "float: left;") + "}#hd-close-button {" + (c ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            nv(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + nv(d) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return jv(a)
    };

    function Bw(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && "function" === typeof b.pushState ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new Cw(a, b);
        b.init();
        return b ? a.googNavStack = b : null
    }

    function Dw(a, b) {
        return b ? b.googNavStackId === a.m ? b : null : null
    }

    function Ew(a, b) {
        for (let c = b.length - 1; 0 <= c; --c) {
            const d = 0 === c;
            a.J.requestAnimationFrame(() => void b[c].yg({
                isFinal: d
            }))
        }
    }

    function Fw(a, b) {
        b = Hb(a.stack, b, (c, d) => c - d.je.googNavStackStateId);
        if (0 <= b) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class Cw extends Ak {
        constructor(a, b) {
            super();
            this.J = a;
            this.j = b;
            this.stack = [];
            this.m = 1E9 * Math.random() >>> 0;
            this.A = 0;
            this.v = c => {
                (c = Dw(this, c.state)) ? Ew(this, Fw(this, c.googNavStackStateId + .5)): Ew(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.m,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        yg: c,
                        je: a
                    })
                });
            this.j.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = Fw(this, a.googNavStackStateId);
                    var d;
                    if (d = 0 < c.length) {
                        d = c[0].je;
                        const e = Dw(this, this.j.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.j.go(-c.length);
                    Ew(this, c)
                }
            }
        }
        init() {
            this.J.addEventListener("popstate", this.v)
        }
        l() {
            this.J.removeEventListener("popstate", this.v);
            super.l()
        }
    };

    function Gw(a) {
        return (a = Bw(a)) ? new Hw(a) : null
    }

    function Iw(a) {
        if (!a.j) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.v.pushEvent();
            a.j = c;
            b.then(() => {
                a.j && !a.B && (a.j = null, gm(a.m))
            })
        }
    }
    var Hw = class extends Ak {
        constructor(a) {
            super();
            this.v = a;
            this.m = new hm;
            this.j = null
        }
    };

    function Jw(a, b, c) {
        var d = c.Vc ? null : new ww(a);
        const e = jw(new nw(a), c.zIndex - 1);
        b = Kw(a, b, c);
        d = new Lw(a, b, d, Mm(a), e);
        d.init();
        (c.ic || void 0 === c.ic) && Mw(d);
        c.Ja && ((a = Gw(a)) ? Nw(d, a, c.od) : c.od ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function Mw(a) {
        a.A = b => {
            "Escape" === b.key && a.j.M && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function Nw(a, b, c) {
        em(a.j, !0, () => {
            try {
                Iw(b)
            } catch (d) {
                c ? .(d)
            }
        });
        em(a.j, !1, () => {
            try {
                b.j && (b.j(), b.j = null)
            } catch (d) {
                c ? .(d)
            }
        });
        (new im(b.m)).X(() => void a.collapse());
        Bk(a, Da(zk, b))
    }

    function Ow(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function Pw(a) {
        a.win.setTimeout(() => {
            a.j.M && Ow(a).pa.focus()
        }, 500)
    }

    function Qw(a) {
        const {
            nd: b,
            vf: c
        } = Ow(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function Rw(a) {
        em(a.m, !1, () => {
            Ow(a).pa.classList.add("hd-hidden")
        })
    }
    var Lw = class extends Ak {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.C = b;
            this.v = c;
            this.j = new Yl(!1);
            this.m = zw(a, this.j);
            em(this.m, !0, () => {
                Om(d);
                ow(e)
            });
            em(this.m, !1, () => {
                Qm(d);
                pw(e)
            })
        }
        show({
            Zd: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            Ow(this).pa.classList.remove("hd-hidden");
            Tl(this.win);
            Ow(this).pa.classList.add("hd-revealed");
            R(this.j, !0);
            this.v && (vw(this.v, Ow(this).Pb.mb), Pw(this));
            a && em(this.m, !1, () => {
                this.xa()
            })
        }
        collapse() {
            Ow(this).pa.classList.remove("hd-revealed");
            R(this.j, !1);
            this.v ? .Hc()
        }
        isVisible() {
            return this.m
        }
        init() {
            Qw(this);
            Rw(this)
        }
        l() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.C.Pb.mb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.v ? .Hc();
            super.l()
        }
    };

    function Kw(a, b, c) {
        const d = yw(a, c.Wc),
            e = d.shadowRoot;
        e.appendChild(Hg(new tg(a.document), ev(Aw({
            Bb: c.Bb,
            Ec: c.Ec ? ? !0,
            Ab: c.Ab || !1,
            rb: c.rb,
            Qd: c.Qd || "",
            zIndex: c.zIndex,
            Nc: .5
        }))));
        const f = xw("hd-drawer-container", e);
        c.Df ? .j(g => {
            f.setAttribute("aria-label", g)
        });
        c = xw("hd-content-container", e);
        c.appendChild(b);
        Tl(a);
        return {
            pa: f,
            nd: xw("hd-modal-background", e),
            Sc: c,
            vf: xw("hd-close-button", e),
            Lk: xw("hd-back-arrow-button", e),
            Pb: d
        }
    };

    function Sw(a) {
        const b = a.jg,
            c = a.Mf,
            d = a.Nc;
        return jv("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            X(c) + "%; transition: transform " + X(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + X(20) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            X(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + X((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            X(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + X(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + X(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            X(20) + "px " + X(20) + "px 0 0; background: white; display: flex; height: " + X(30) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            Tw("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + Tw("ved-fixed-handle") + "</div></div></div>")
    }

    function Tw(a) {
        return jv('<div class="ved-handle" id="' + nv(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function Uw(a) {
        return wm(a.j).map(b => b ? Vw(a, b) : 0)
    }

    function Vw(a, b) {
        switch (a.direction) {
            case 0:
                return Ww(-b.Ve);
            case 1:
                return Ww(-b.Ue);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function Xw(a) {
        return ym(a.j).map(b => Vw(a, b))
    }
    var Yw = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function Ww(a) {
        return 0 === a ? 0 : a
    };

    function Y(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function Zw(a) {
        a.win.setTimeout(() => {
            a.j.M && Y(a).pa.focus()
        }, 500)
    }

    function $w(a) {
        Y(a).pa.classList.remove("ved-hidden");
        Tl(a.win);
        const {
            ca: b,
            Fa: c
        } = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || ax(a);
        Y(a).pa.classList.add("ved-revealed");
        R(a.j, !0);
        a.m && (vw(a.m, Y(a).Pb.mb), Zw(a))
    }

    function bx(a) {
        return zw(a.win, a.j)
    }

    function cx(a, b) {
        const c = new Yl(b());
        (new im(a.H)).X(() => void R(c, b()));
        return $l(c)
    }

    function dx(a) {
        const {
            ca: b,
            yc: c
        } = Y(a);
        return cx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function ex(a) {
        const {
            ca: b,
            yc: c
        } = Y(a);
        return cx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function fx(a) {
        const {
            ca: b
        } = Y(a);
        return cx(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function gx(a) {
        return am(dx(a), fx(a))
    }

    function hx(a) {
        const {
            ca: b,
            Fa: c
        } = Y(a);
        return cx(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function ax(a) {
        Y(a).Fa.classList.add("ved-snap-point-top");
        var b = ix(a, Y(a).Fa);
        Y(a).ca.scrollTop = b;
        jx(a)
    }

    function kx(a) {
        cm(dx(a), !0, () => {
            const {
                ee: b,
                Mb: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        cm(dx(a), !1, () => {
            const {
                ee: b,
                Mb: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function lx(a) {
        const b = Am(a.win, Y(a).Sc);
        Dm(b).j(() => void mx(a));
        Bk(a, Da(zk, b))
    }

    function nx(a) {
        cm(ox(a), !0, () => {
            Y(a).Ee.classList.remove("ved-hidden")
        });
        cm(ox(a), !1, () => {
            Y(a).Ee.classList.add("ved-hidden")
        })
    }

    function px(a) {
        const b = () => void gm(a.G),
            {
                nd: c,
                Fa: d,
                Lf: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        em(qx(a), !0, b)
    }

    function rx(a) {
        em(bx(a), !1, () => {
            ax(a);
            Y(a).pa.classList.add("ved-hidden")
        })
    }

    function jx(a) {
        dm(a.v, () => void gm(a.H))
    }

    function mx(a) {
        if (!a.v.M) {
            var {
                Xd: b,
                Sc: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(sx(a), d);
            R(a.v, !0);
            var e = tx(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    R(a.v, !1)
                })
            })
        }
    }

    function ox(a) {
        const {
            ca: b,
            Fa: c
        } = Y(a);
        return cx(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function qx(a) {
        return Zl(a.A.map(fn), ux(a))
    }

    function ux(a) {
        return cx(a, () => 0 === Y(a).ca.scrollTop)
    }

    function ix(a, b) {
        ({
            Mb: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function vx(a, b) {
        R(a.A, !0);
        const {
            Mb: c,
            ca: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void wx(a, b)
    }

    function wx(a, b) {
        const {
            Mb: c,
            ca: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).ca.scrollTop = b;
        jx(a);
        R(a.A, !1)
    }

    function tx(a) {
        const b = Y(a).ca.scrollTop;
        vx(a, b);
        return () => void wx(a, b)
    }

    function sx(a) {
        const {
            ca: b,
            yc: c,
            Xd: d,
            Fa: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var xx = class extends Ak {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.C = b;
            this.I = c;
            this.m = d;
            this.G = new hm;
            this.H = new hm;
            this.j = new Yl(!1);
            this.A = new Yl(!1);
            this.v = new Yl(!1)
        }
        init() {
            ax(this);
            kx(this);
            lx(this);
            nx(this);
            px(this);
            rx(this);
            Y(this).ca.addEventListener("scroll", () => void jx(this))
        }
        l() {
            const a = this.C.Pb.mb,
                b = a.parentNode;
            b && b.removeChild(a);
            this.m ? .Hc();
            super.l()
        }
    };

    function yx(a, b, c) {
        const d = yw(a, c.Wc),
            e = d.shadowRoot;
        e.appendChild(Hg(new tg(a.document), ev(Sw({
            jg: 100 * c.rd,
            Mf: 100 * c.bd,
            zIndex: c.zIndex,
            Nc: .5
        }))));
        const f = xw("ved-drawer-container", e);
        c.Df ? .j(g => {
            f.setAttribute("aria-label", g)
        });
        c = xw("ved-content-container", e);
        c.appendChild(b);
        Tl(a);
        return {
            pa: f,
            nd: xw("ved-modal-background", e),
            Re: xw("ved-ui-revealer", e),
            ca: xw("ved-scroller", e),
            Mb: xw("ved-scrolled-stack", e),
            Lf: xw("ved-fully-closed-anchor", e),
            Fa: xw("ved-partially-extended-anchor", e),
            Xd: xw("ved-content-sizer",
                e),
            Sc: c,
            Rk: xw("ved-moving-handle", e),
            yc: xw("ved-moving-handle-holder", e),
            Kf: xw("ved-fixed-handle", e),
            ee: xw("ved-fixed-handle-holder", e),
            Ee: xw("ved-over-scroll-block", e),
            Pb: d
        }
    };

    function zx(a, b, c) {
        var d = jw(new nw(a), c.zIndex - 1);
        b = yx(a, b, c);
        const e = c.Vc ? null : new ww(a);
        var f = b.Kf;
        f = new zm(new qm(a, f), new nm(f));
        var g = f.j;
        g.A.addEventListener("mousedown", g.F);
        g.v.addEventListener("mouseup", g.B);
        g.v.addEventListener("mousemove", g.C, {
            passive: !1
        });
        g = f.l;
        g.l.addEventListener("touchstart", g.C);
        g.l.addEventListener("touchend", g.A);
        g.l.addEventListener("touchmove", g.B, {
            passive: !1
        });
        b = new xx(a, b, new Yw(f), e);
        b.init();
        d = new Ax(a, b, Mm(a), d);
        Bk(d, Da(zk, b));
        d.init();
        c.Ja && ((a = Gw(a)) ? Bx(d,
            a, c.od) : c.od ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function Bx(a, b, c) {
        em(a.j.j, !0, () => {
            try {
                Iw(b)
            } catch (d) {
                c ? .(d)
            }
        });
        em(a.j.j, !1, () => {
            try {
                b.j && (b.j(), b.j = null)
            } catch (d) {
                c ? .(d)
            }
        });
        (new im(b.m)).X(() => void a.collapse());
        Bk(a, Da(zk, b))
    }

    function Cx(a) {
        em(Zl(gx(a.j), hx(a.j)), !0, () => {
            Y(a.j).Fa.classList.remove("ved-snap-point-top")
        });
        cm(ex(a.j), !0, () => {
            Y(a.j).ca.classList.add("ved-no-snap")
        });
        cm(ex(a.j), !1, () => {
            Y(a.j).ca.classList.remove("ved-no-snap")
        });
        em(ex(a.j), !1, () => {
            var b = a.j;
            var c = Y(b).yc;
            c = vx(b, ix(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function Dx(a) {
        const b = a.j.I;
        Uw(b).X(c => {
            c = -c;
            if (0 < c) {
                const {
                    Re: d
                } = Y(a.j);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                Re: c
            } = Y(a.j)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        Xw(b).X(c => {
            30 < -c && a.collapse()
        })
    }
    var Ax = class extends Ak {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            em(bx(b), !0, () => {
                Om(c);
                ow(d)
            });
            em(bx(b), !1, () => {
                Qm(c);
                pw(d)
            })
        }
        show({
            Zd: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            $w(this.j);
            a && em(bx(this.j), !1, () => {
                this.xa()
            })
        }
        collapse() {
            var a = this.j;
            Y(a).pa.classList.remove("ved-revealed");
            R(a.j, !1);
            a.m ? .Hc()
        }
        isVisible() {
            return bx(this.j)
        }
        init() {
            (new im(this.j.G)).X(() => {
                this.collapse()
            });
            Cx(this);
            Dx(this);
            Tl(this.win)
        }
    };

    function Ex(a) {
        let b;
        b = a.v ? 50 : 150;
        const c = a.j.innerHeight;
        return {
            Yf: a.j.innerWidth - 16 - b,
            Ig: 2 === a.A ? .j() ? .98 * c : .14 * c,
            width: b,
            height: 50
        }
    }

    function Fx(a) {
        const b = a.A ? .v() || void 0,
            c = a.A ? .A() || void 0;
        let d, e;
        2 === a.A ? .j() ? e = 2 : d = 14;
        return {
            backgroundColor: b,
            Za: c,
            ze: d,
            ye: e,
            Bg: a.V
        }
    }

    function Gx(a) {
        const b = a.B.shadowRoot.querySelectorAll(".autoprose-search-button")[0];
        return b ? b : a.B.shadowRoot.querySelectorAll(".autoprose-searchbox")[0]
    }

    function Hx(a) {
        a.v && em(a.C.isVisible(), !1, () => {
            a.l.contentDocument.activeElement.blur()
        })
    }

    function Ix(a) {
        const b = new ResizeObserver(async d => {
                a.l.height = 0;
                await new Promise(e => a.j.requestAnimationFrame(e));
                a.l.height = d[0].target.scrollHeight
            }),
            c = () => {
                const d = a.l.contentDocument ? .documentElement;
                d ? b.observe(d) : (console.warn("iframe body missing"), setTimeout(c, 1E3))
            };
        c()
    }
    var Jx = class {
        constructor(a, b, c, d, e, f, g) {
            this.j = a;
            this.v = (this.K = g) ? 500 > this.j.innerWidth : 2 === jh();
            this.I = c;
            this.B = iw(this.j);
            this.m = d;
            this.L = e ? .j() ? .j() || "en";
            this.aa = e ? .j() ? .v() || "Search results from ${website}";
            this.V = e ? .j() ? .A() || "Search";
            this.H = b.replace("ca", "partner");
            this.F = new tg(window.document);
            this.l = this.F.createElement("IFRAME");
            this.G = new Ov(this.l, e ? .F() || "", "auto-prose", this.H, "AutoProseVariant", a.location.host, this.L, this.aa, f);
            a = this.l;
            this.C = this.v ? zx(this.j, a, {
                rd: .95,
                bd: .95,
                zIndex: 2147483645,
                Ja: !0,
                ic: !0
            }) : Jw(this.j, a, {
                Bb: "min(65vw, 768px)",
                rb: "",
                Ab: !1,
                zIndex: 2147483645,
                Ja: !0,
                ic: !0,
                Ec: !1
            });
            this.A = this.v ? e ? .B() : e ? .A()
        }
        init() {
            var a = Zv(this.j, Ex(this));
            a ? .className.startsWith("adsbygoogle") ? Xu(this.m, "pfeaa") : a ? Xu(this.m, "pfeofe") : (this.I.appendChild(this.B.mb), this.B.shadowRoot.appendChild(Ag(document, (() => {
                if (this.v) {
                    var b = Fx(this),
                        c = {
                            backgroundColor: b.backgroundColor,
                            Za: b.Za,
                            offsetTop: b.ze,
                            pd: b.ye,
                            zIndex: 2147483643
                        },
                        d = c.fg,
                        e = c.pd;
                    b = c.backgroundColor;
                    var f = c.Za;
                    d = void 0 === d ? 16 : d;
                    var g =
                        c.offsetTop;
                    e = void 0 === e ? 2 : e;
                    f = void 0 === f ? "white" : f;
                    c = c.zIndex;
                    b = "<style>.autoprose-search-button {background: " + X(void 0 === b ? "#000" : b) + "; border-radius: " + X(24) + "px;" + (g ? "top: " + X(g) + "%;" : "bottom: " + X(e) + "%;") + "border-width: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " + X(48) + "px; position: fixed; right: " + X(d) + "px; width: 48px; z-index: " + X(c) + ';}.autoprose-search-icon {position: relative;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' +
                        Fv(f) + "</div></button>";
                    b = jv(b);
                    return ev(b)
                }
                b = Fx(this);
                c = {
                    Cg: b.Bg,
                    backgroundColor: b.backgroundColor,
                    Za: b.Za,
                    offsetTop: b.ze,
                    pd: b.ye,
                    zIndex: 2147483643
                };
                d = c.fg;
                e = c.pd;
                b = c.backgroundColor;
                f = c.Za;
                d = void 0 === d ? 16 : d;
                g = c.offsetTop;
                e = void 0 === e ? 2 : e;
                const h = c.Cg;
                f = void 0 === f ? "white" : f;
                c = c.zIndex;
                b = "<style>.autoprose-search-button {align-items: center; background: " + X(void 0 === b ? "#000" : b) + "; border-radius: " + X(24) + "px; border-width: 0;" + (g ? "top: " + X(g) + "%;" : "bottom: " + X(e) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " +
                    X(48) + "px; line-height: 1; padding: 0 20px; position: fixed; right: " + X(d) + "px; z-index: " + X(c) + ";}.autoprose-search-text {color: " + X(f) + '; font-family: Google Sans, Roboto, sans-serif; font-size: 16px; margin: 10px; user-select: none;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + Fv(f) + '</div><div class="autoprose-search-text">' + iv(h) + "</div></button>";
                b = jv(b);
                return ev(b)
            })())), this.G.init(), (a = Gx(this)) ? (Wu(this.m, "place", {
                sts: "ok"
            }), ie(a, "click", () => {
                Wu(this.m,
                    "click", {});
                Ix(this);
                this.C.show();
                const b = this.l.contentDocument.getElementsByTagName("input")[0];
                b ? b.focus({
                    preventScroll: !0
                }) : console.warn("searchbox missing")
            })) : Xu(this.m, "pfmsb"), Hx(this))
        }
    };

    function Kx(a) {
        const b = J(a.j, fo, 31) ? .v() ? .j() || 0,
            c = a.l.document,
            d = c.createElement("div");
        d.classList.add("auto-prose-wrapper");
        c.body.appendChild(d);
        (new Jx(a.l, a.m, d, a.v, J(a.j, fo, 31), b, J(a.j, Rn, 25) ? .j() || !1)).init()
    }
    var Lx = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.j = c;
            this.v = new Yu(a, b, J(this.j, fo, 31) || new fo);
            this.m = d
        }
    };

    function Mx(a, b) {
        Jr(a.j, Dr, { ...b,
            evt: "place",
            vh: Q(a.win).clientHeight,
            eid: a.l.j() ? .j() || 0
        })
    }
    var Nx = class {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.l = c
        }
    };
    var Ox = class {
        constructor(a) {
            this.j = a
        }
        ya(a) {
            const b = a.document.createElement("div");
            N(b, fw(a));
            N(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            N(c, fw(a));
            N(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var Px = (a, b) => (b = J(b, po, 6)) ? Bu(b.j(), a).map(c => vs(c)) : [];
    var Qx = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function Rx(a) {
        const b = a.A.createElement("SCRIPT");
        Af(b, O `https://www.google.com/adsense/search/async-ads.js`);
        a.win.document.head.appendChild(b)
    }

    function Sx(a) {
        (function(d, e) {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = 1 * new Date
        })(a.win, "_googCsa");
        const b = a.C.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.m,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.B,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.L.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.v
            };
        a.G && (c.adLoadedCallback = a.I.bind(a));
        a.win._googCsa("relatedsearch",
            c, b)
    }
    var Tx = class {
        constructor(a, b, c, d, e, f, g) {
            this.win = a;
            this.C = b;
            this.language = d ? .j() || "en";
            this.K = d ? .v() || "Search results from ${website}";
            this.F = e;
            this.B = f;
            this.G = W(tp);
            this.m = c.replace("ca", "partner");
            this.A = new tg(a.document);
            this.j = this.A.createElement("IFRAME");
            this.v = g.l ? g.j : "9d449ff4a772956c6";
            this.l = new Ov(this.j, this.v, "auto-rs-prose", this.m, "AutoRsVariant", a.location.host, this.language, this.K, this.B);
            a = this.j;
            this.H = 2 === jh() ? zx(this.win, a, {
                rd: .95,
                bd: .95,
                zIndex: 2147483645,
                Ja: !0
            }) : Jw(this.win, a, {
                Bb: "min(65vw, 768px)",
                rb: "",
                Ab: !1,
                zIndex: 2147483645,
                Ja: !0,
                Ec: !1
            })
        }
        init() {
            0 !== this.C.length && (this.G || (mr(1075, () => this.l.init(), this.win), mr(1076, () => Rx(this), this.win)), Sx(this), Mx(this.F, {
                sts: "ok"
            }))
        }
        I(a, b) {
            b ? (mr(1075, () => this.l.init(), this.win), mr(1076, () => Rx(this), this.win)) : Mx(this.F, {
                sts: "pfns"
            })
        }
        L(a, b) {
            Nv(this.l, a, b);
            (() => {
                const c = new ResizeObserver(async e => {
                        this.j.height = 0;
                        await new Promise(f => this.win.requestAnimationFrame(f));
                        this.j.height = e[0].target.scrollHeight
                    }),
                    d = () => {
                        const e = this.j.contentDocument ? .documentElement;
                        e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                    };
                d();
                this.H.show()
            })()
        }
    };

    function Ux(a) {
        const b = bs(a.m.T),
            c = a.A.ya(a.B, () => a.remove());
        b.appendChild(c);
        a.v && (b.className = a.v);
        return {
            Cf: b,
            xf: c
        }
    }
    class Vx {
        constructor(a, b, c, d) {
            this.B = a;
            this.m = b;
            this.A = c;
            this.v = d || null;
            this.j = null;
            this.l = new Yl(null)
        }
        init() {
            const a = Ux(this);
            this.j = a.Cf;
            js(this.m, this.j);
            R(this.l, a.xf)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            R(this.l, null)
        }
        C() {
            return this.l
        }
    };

    function Wx(a) {
        var b = Px(a.l, a.j);
        b = Xx(a.l, b, a.R, a.A, a.m);
        const c = Yx(b, a.l),
            d = Mo(a.j) ? .j() ? .j() || Mo(a.j) ? .v() || 0,
            e = Zx(a.j);
        J(a.j, Rn, 25) ? .j() || mr(1074, () => (new Tx(a.l, c, a.v, Mo(a.j) ? .B(), a.m, d, e)).init(), a.l)
    }
    async function $x(a) {
        await new Promise(b => {
            setTimeout(() => {
                b(Wx(a))
            })
        })
    }
    var ay = class {
        constructor(a, b, c, d, e, f) {
            this.l = a;
            this.j = c;
            this.m = new Nx(a, b, Mo(this.j) || new go);
            this.v = d;
            this.R = e;
            this.A = f
        }
    };

    function by(a, b, c) {
        c = c ? id(c, Nn, 5) : [];
        const d = nu(a.document, c),
            e = ou();
        return b.filter(f => !(e(f) || d(f)))
    }

    function Xx(a, b, c, d, e) {
        b = ys(b, a).sort(cy);
        return 0 == b.length ? (Mx(e, {
            sts: "pfno"
        }), []) : d && (b = by(a, b, c), 0 == b.length) ? (Mx(e, {
            sts: "pffa"
        }), []) : [b[Math.floor(b.length / 2)]]
    }

    function cy(a, b) {
        return a.Z.j - b.Z.j
    }

    function Yx(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d],
                f = "autors-container-" + d,
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            (new Vx(b, e, new Ox(g))).init();
            c.push(f)
        }
        return c
    }

    function Zx(a) {
        const b = Mo(a) ? .F() || !1;
        a = Mo(a) ? .A() || "";
        return new Qx(b, a)
    };
    var dy = {
            Ph: "google_ads_preview",
            xi: "google_mc_lab",
            Ni: "google_anchor_debug",
            Mi: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            ij: "google_scr_debug",
            kj: "google_ia_debug_allow_onclick",
            Gj: "googleads",
            We: "google_pedestal_debug",
            Yj: "google_responsive_slot_preview",
            Xj: "google_responsive_dummy_ad",
            Hh: "google_audio_sense",
            Ih: "google_auto_gallery",
            Kh: "google_auto_storify_swipeable",
            Jh: "google_auto_storify_scrollable"
        },
        ey = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var fy = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        dk: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function gy(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = hy(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function hy(a) {
        let b = "";
        Tg(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function iy() {
        var a = u.location;
        let b = !1;
        Tg(dy, c => {
            gy(a, c) && (b = !0)
        });
        return b
    }

    function jy(a, b) {
        switch (a) {
            case 1:
                return gy(b, "google_ia_debug");
            case 2:
                return gy(b, "google_bottom_anchor_debug");
            case 3:
                return gy(b, "google_anchor_debug") || gy(b, "googleads");
            case 4:
                return gy(b, "google_scr_debug")
        }
    };
    var ky = (a, b, c) => {
        const d = [];
        J(a, xo, 18) && d.push(2);
        b.R && d.push(0);
        Mo(a) && 1 == xd(Mo(a), 1) && d.push(1);
        J(a, fo, 31) && 1 == xd(J(a, fo, 31), 1) && d.push(5);
        (J(a, $n, 27) && 1 == xd(J(a, $n, 27), 1) || gy(c, "google_audio_sense")) && d.push(3);
        J(a, Ao, 29) && d.push(4);
        J(a, ao, 32) && d.push(6);
        return d
    };

    function ly(a, b) {
        const c = sg(a).createElement("IMG");
        my(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        N(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function ny(a, b) {
        const c = b.document.createElement("button");
        my(b, c);
        N(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.m();
            d.stopPropagation()
        });
        return c
    }

    function oy(a, b, c) {
        const d = sg(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.v);
        my(b, d);
        N(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function py(a) {
        const b = a.document.createElement("ins");
        my(a, b);
        N(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class qy {
        constructor(a, b, c) {
            this.l = a;
            this.v = b;
            this.m = c;
            this.j = new Yl(!1)
        }
        ya(a, b, c, d) {
            const e = ly(a, d),
                f = ly(a),
                g = ny(this, a),
                h = oy(this, a, c);
            a = py(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.X(k => {
                N(e, {
                    display: k ? "none" : "inline"
                });
                N(f, {
                    display: k ? "inline" : "none"
                });
                k ? (N(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), N(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (N(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), N(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        he() {
            return 40
        }
        Be() {
            R(this.j, !1);
            return 0
        }
        De() {
            R(this.j, !0)
        }
    }

    function my(a, b) {
        N(b, fw(a));
        N(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function ry(a, b) {
        const c = b.document.createElement("button");
        sy(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        N(c, b);
        c.addEventListener("click", d => {
            a.B();
            d.stopPropagation()
        });
        return c
    }

    function ty(a, b, c, d) {
        const e = b.document.createElement("div");
        N(e, fw(b));
        N(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        N(f, fw(b));
        N(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (N(e, {
                    "flex-direction": "row"
                }), a.j && N(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), N(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                N(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (N(e, {
                border: "0",
                "flex-direction": "column"
            }), N(f, {
                "margin-left": "0",
                "text-align": "center"
            }), N(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && N(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function sy(a, b, c) {
        N(c, fw(b));
        N(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.C,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.F,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class uy {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.A = a;
            this.B = b;
            this.F = c;
            this.l = d;
            this.C = e;
            this.v = f;
            this.j = g;
            this.m = h
        }
        ya(a) {
            const b = a.document.createElement("div");
            sy(this, a, b);
            N(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.v) {
                var c = sg(a).createElement("IMG");
                c.src = this.v;
                sy(this, a, c);
                N(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            sy(this, a, c);
            N(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = ry(this, a);
            c.appendChild(b);
            return this.m ? ty(this, a, c, this.m) : c
        }
    };
    var vy = (a, b) => {
        b = b.filter(c => {
            var d = J(c, rn, 4);
            return 5 == z(d, 1) && 1 == z(c, 8)
        });
        b = Tr(b, a);
        a = ys(b, a);
        a.sort((c, d) => d.Z.j - c.Z.j);
        return a[0] || null
    };

    function wy(a) {
        if (a.F) {
            const b = Gl(a.j);
            if (b > a.l + 100 || b < a.l - 100) xy(a), a.l = Cl(a.j)
        }
        a.G && a.j.clearTimeout(a.G);
        a.G = a.j.setTimeout(() => yy(a), 200)
    }

    function yy(a) {
        var b = Cl(a.j);
        a.l && a.l > b && (a.l = b);
        b = Gl(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), zy(a))
    }

    function Ay(a) {
        a.j.removeEventListener("scroll", a.I)
    }

    function xy(a) {
        a.F = !1;
        const b = a.A.Be();
        switch (b) {
            case 0:
                R(a.v, a.B);
                break;
            case 1:
                a.m && (N(a.m, {
                    display: "none"
                }), R(a.v, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function zy(a) {
        a.m || (a.m = By(a));
        N(a.m, {
            display: "block"
        });
        a.F = !0;
        a.A.De();
        R(a.v, a.B)
    }

    function By(a) {
        var b = $v(a.j, a.A.he() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        N(c, fw(a.j));
        N(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.B = a.A.ya(a.j, () => a.remove(), () => {
            Ay(a);
            xy(a)
        }, () => {
            Ay(a);
            zy(a)
        });
        c.appendChild(a.B);
        a.H && (c.className = a.H);
        a.j.document.body.appendChild(c);
        return c
    }
    class Cy {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.B = null;
            this.v = new Yl(null);
            this.H = c || null;
            this.m = null;
            this.F = !1;
            this.l = 0;
            this.G = null;
            this.I = () => wy(this)
        }
        init() {
            this.j.addEventListener("scroll", this.I);
            this.l = Cl(this.j);
            yy(this)
        }
        remove() {
            this.m && this.m.parentNode && this.m.parentNode.removeChild(this.m);
            this.m = null;
            Ay(this);
            R(this.v, null)
        }
        C() {
            return this.v
        }
    };

    function Dy(a) {
        R(a.B, 0);
        null != a.m && (a.m.remove(), a.m = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function Ey(a) {
        a.l = new Cy(a.A, a.H, a.F);
        a.l.init();
        fm(a.v, a.l.C());
        R(a.B, 2)
    }
    class Fy {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.G = b;
            this.I = c;
            this.H = d;
            this.F = e;
            this.B = new Yl(0);
            this.v = new Yl(null);
            this.l = this.m = this.j = null
        }
        init() {
            this.G ? (this.m = new Vx(this.A, this.G, this.I, this.F), this.m.init(), fm(this.v, this.m.C()), R(this.B, 1), null == this.j && (this.j = new Lm(this.A), this.j.init(2E3)), Jm(this.j, () => {
                Dy(this);
                Ey(this)
            })) : Ey(this)
        }
        remove() {
            Dy(this);
            this.j && (this.j.xa(), this.j = null)
        }
        C() {
            return this.v
        }
    };
    var Gy = (a, b, c, d, e) => {
        a = new Fy(a, vy(a, e), new uy(b, d, "#FFF", "#4A4A4A", "normal"), new qy(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var Hy = a => a.googlefc = a.googlefc || {},
        Iy = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function Jy(a) {
        var b = Iy(a.j);
        if (Ky(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = Gy(a.j, c, b, () => Ly(a), a.v))
        }
    }

    function My(a) {
        const b = Hy(a.j);
        Iy(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => Jy(a)
        })
    }

    function Ly(a) {
        ow(a.m);
        Iy(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            pw(a.m)
        })
    }
    class Ny {
        constructor(a, b, c) {
            this.j = a;
            this.m = jw(b, 2147483643);
            this.v = c;
            this.l = null
        }
    }

    function Ky(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function Oy(a) {
        const b = a.document.createElement("ins");
        Py(a, b);
        N(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function Qy(a, b, c, d) {
        const e = sg(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        Py(a, e);
        N(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function Ry(a, b) {
        const c = b.document.createElement("span");
        Py(b, c);
        N(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.v));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function Sy(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.m));
        N(c, fw(b));
        N(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function Ty(a) {
        const b = a.document.createElement("div");
        N(b, fw(a));
        N(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class Uy {
        constructor(a, b, c, d) {
            this.v = a;
            this.A = b;
            this.m = c;
            this.l = d;
            this.j = new Yl(!1)
        }
        ya(a, b, c, d) {
            c = Oy(a);
            const e = Qy(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = Qy(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = Ry(this, a),
                h = Qy(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            N(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = Sy(this, a);
            a = Ty(a);
            a.appendChild(c);
            a.appendChild(k);
            this.j.X(l => {
                N(e, {
                    display: l ? "none" : "inline"
                });
                N(f, {
                    display: l ? "inline" : "none"
                });
                l ? (N(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), N(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), N(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (N(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), N(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), N(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        he() {
            return 71
        }
        Be() {
            R(this.j, !1);
            return 0
        }
        De() {
            R(this.j, !0)
        }
    }

    function Py(a, b) {
        N(b, fw(a));
        N(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function Vy(a) {
        Wy(a.l, b => {
            var c = a.v,
                d = b.zg,
                e = b.wf,
                f = b.hf;
            b = b.showRevocationMessage;
            (new Fy(c, vy(c, a.m), new uy(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new Uy(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            pw(a.j)
        })
    }
    class Xy {
        constructor(a, b, c, d) {
            this.v = a;
            this.j = jw(b, 2147483643);
            this.m = c;
            this.l = d
        }
    };
    var Yy = a => {
        if (!a || null == z(a, 1)) return !1;
        a = z(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function Zy(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            Yy(a.j) && (b = new Xy(a.l, a.A, a.v || id(a.j, vo, 4), a.m), ow(b.j), Vy(b), b = !0);
            var c;
            a: if ((c = a.j) && null != z(c, 3)) switch (c = z(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (My(new Ny(a.l, a.A, a.v || id(a.j, vo, 4))), b = !0);
            if (c = (c = a.j) ? !0 === F(c, 5) : !1) c = ((c = a.j) ? !0 === F(c, 6) : !1) || W(Ep);
            c && (b = !0);
            b && (a.m.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class $y {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.m = b;
            this.j = c;
            this.A = d;
            this.v = e || null
        }
    };
    var az = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = Qg("SCRIPT", g);
                h.async = !0;
                Af(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? az(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        bz = (a, b, c = () => {}, d = () => {}) => {
            az(sg(a), b, 0, !1, c, d)
        };
    var cz = (a = null) => {
        a = a || u;
        return a.googlefc || (a.googlefc = {})
    };
    ne(ol).map(a => Number(a));
    ne(pl).map(a => Number(a));
    const dz = window.URL;
    var ez = a => {
            var b = (new dz(a.location.href)).searchParams;
            a = b.get("fcconsent");
            b = b.get("fc");
            return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
        },
        fz = a => {
            a = (new dz(a.location.href)).searchParams.get("fctype");
            return -1 !== ["ab", "gdpr", "consent", "ccpa", "monetization"].indexOf(a) ? a : null
        };
    var gz = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Qg("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    const hz = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function iz(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = hz(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (ti({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function jz(a) {
        return iz(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? kz(a, "1") : !0 : !1
    }

    function kz(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function lz(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => kz(a, c))
    }

    function mz(a) {
        if (a.j) return a.j;
        a.j = ih(a.m, "__tcfapiLocator");
        return a.j
    }

    function nz(a) {
        return "function" === typeof a.m.__tcfapi || null != mz(a)
    }

    function oz(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
        else if (mz(a)) {
            pz(a);
            const e = ++a.H;
            a.C[e] = c;
            a.j && a.j.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function qz(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = ce(() => b(c));
        let e = 0; - 1 !== a.G && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.G));
        oz(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = hz(c), c.internalBlockOnErrors = a.A, iz(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), oz(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function pz(a) {
        a.v || (a.v = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, ie(a.m, "message", a.v))
    }
    class rz extends Ak {
        constructor(a, b = {}) {
            super();
            this.m = a;
            this.j = null;
            this.C = {};
            this.H = 0;
            this.G = b.Hg ? ? 500;
            this.A = b.rf ? ? !1;
            this.v = null
        }
        l() {
            this.C = {};
            this.v && (je(this.m, "message", this.v), delete this.v);
            delete this.C;
            delete this.m;
            delete this.j;
            super.l()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = ce(() => a(b));
            let d = 0; - 1 !== this.G && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.G));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = hz(b), b.internalBlockOnErrors =
                    this.A, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                oz(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && oz(this, "removeEventListener", null, a.listenerId)
        }
    };

    function Wy(a, b, c) {
        const d = cz(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = cz(a.j),
                    f = new rz(a.j);
                nz(f) && qz(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        zg: e.getDefaultConsentRevocationText(),
                        wf: e.getDefaultConsentRevocationCloseText(),
                        hf: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function sz(a) {
        var b = ez(a.j);
        const c = fz(a.j);
        b = tz(a.l, {
            fc: b,
            fctype: c
        });
        bz(a.j, b, () => {}, () => {})
    }

    function tz(a, b) {
        b = { ...b,
            ers: 2
        };
        return ze(Ee(Wd("https://fundingchoicesmessages.google.com/i/%{id}"), {
            id: a
        }), b)
    }
    class uz {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            if (this.j === this.j.top) try {
                gz(this.j, "googlefcPresent"), sz(this)
            } catch (a) {}
        }
    };
    var vz = (a, b, c) => {
        const d = J(a, po, 6);
        if (!d) return [];
        c = Bu(d.j(), c);
        return (a = a.j()) && F(a, 11) ? c.map(e => vs(e)) : c.map(e => {
            const f = qn();
            return new Ur(new ps(e.Ic, e.Jc), new ns, new os(b), !0, 2, [], f, e.l, null, null, null, e.m, e.j)
        })
    };
    var wz = class extends M {
        constructor(a) {
            super(a)
        }
        getHeight() {
            return qd(this, 2)
        }
    };

    function xz(a, b) {
        return C(a, 1, b)
    }

    function yz(a, b) {
        return od(a, 2, b)
    }
    var Az = class extends M {
            constructor(a) {
                super(a, -1, zz)
            }
        },
        zz = [2];
    var Cz = class extends M {
            constructor() {
                super(void 0, -1, Bz)
            }
        },
        Bz = [5];
    var Dz = class extends M {
            constructor() {
                super()
            }
        },
        Ez = [1, 2];

    function Fz(a) {
        return new tn(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class Gz {
        j(a) {
            return Fz(Math.floor(a.l))
        }
    };

    function Hz(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        a = vl(a) ? .tagSpecificState[1];
        (a = null == a ? null : 4 === a.debugCard ? .getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    var Iz = class extends M {
        constructor() {
            super()
        }
    };

    function Jz(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.Kc = c;
                a.m = !!b.adTest;
                c = b.pubVars;
                va(c) && (a.D = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.B = {};
                    for (d of b.fillMessage) a.B[d.key] = d.value
                }
                a.v = b.adWidth;
                a.l = b.adHeight;
                $h(a.v) && $h(a.l) || Uk("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.F(b)
    }
    class Kz {
        constructor() {
            this.B = this.D = this.m = this.Kc = null;
            this.l = this.v = 0
        }
        F() {
            return !0
        }
    };

    function Lz(a, b = []) {
        const c = Date.now();
        return yb(b, d => c - d < 1E3 * a)
    }

    function Mz(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Bb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = Lz(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function Nz(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : Mz(a, b)
    };
    var Oz = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= Al(a);
            d |= zl(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = Nz(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            W(qq) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class Pz extends Kz {
        constructor() {
            super();
            this.A = !1;
            this.j = null;
            this.C = !1
        }
        F(a) {
            this.A = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = Oo(b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.C = !0);
            return !0
        }
    };
    const Qz = {};

    function Rz(a, b, c) {
        let d = Sz(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.B.l;
        for (; d.Jb && d.Jb.length;) {
            const h = d.Jb.shift();
            var g = cs(h.T);
            const k = h.Z.j,
                l = !!c.m.zd || !!c.m.Fd || c.Da() || !!c.m.Yd || k > e;
            g = !g || g <= d.Xb;
            if (l && g && Tz(c, h, {
                    vc: d.Xb
                })) {
                e = k;
                if (d.Vb.j.length + 1 >= f) return !0;
                d = Sz(a, c, b);
                if (!d) return !0
            }
        }
        return c.v
    }
    const Sz = (a, b, c) => {
        var d = b.B.l,
            e = b.B.v,
            f = b.B;
        f = Ft(b.P(), f.j ? f.j.sb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = Q(f.m).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Lt(f)) : e = void 0;
        a = null == e || 50 <= e ? Uz(b, f, {
            types: a
        }, c) : null;
        return {
            Vb: f,
            Xb: e,
            Jb: a
        }
    };
    Qz[2] = Da(function(a, b) {
        a = Uz(b, Ft(b.P()), {
            types: a,
            Ta: Rs(b.P())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Tz(b, a[c])) return !0;
        return b.v ? (b.A.push(11), !0) : !1
    }, [0]);
    Qz[5] = Da(Rz, [0], 5);
    Qz[10] = Da(function(a, b) {
        a = [];
        const c = b.ja;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !W(lp) && a.push(1);
        return Rz(a, 10, b)
    }, 10);
    Qz[3] = function(a) {
        if (!a.v) return !1;
        var b = Uz(a, Ft(a.P()), {
            types: [0],
            Ta: Rs(a.P())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Tz(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const Vz = a => {
            var b;
            a.m.Se ? b = new Ns(0, null, [], 3, null) : b = Rs(a.P());
            return {
                types: [0],
                Ta: b
            }
        },
        Xz = a => {
            const b = a.P().document.body.getBoundingClientRect().width;
            Wz(a, Fz(b))
        },
        Zz = (a, b) => {
            var c = Vz(a);
            c.wg = [5];
            c = Uz(a, Ft(a.P()), c, 8);
            Yz(a, c.reverse(), b)
        },
        Yz = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.Z), Tz(a, d, {
                        Lc: b
                    })) return !0;
            return !1
        };
    Qz[8] = function(a) {
        var b = a.P().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Qz[8](a), {
            once: !0
        }), !0;
        if (!a.v) return !1;
        if (!a.sc()) return !0;
        b = Vz(a);
        b.wd = [2, 4, 5];
        b = Uz(a, Ft(a.P()), b, 8);
        const c = new Gz;
        if (Yz(a, b, c)) return !0;
        if (a.m.be) switch (a.m.Fe || 0) {
            case 1:
                Zz(a, c);
                break;
            default:
                Xz(a)
        }
        return !0
    };
    Qz[6] = Da(Rz, [2], 6);
    Qz[7] = Da(Rz, [1], 7);
    Qz[9] = function(a) {
        const b = Sz([0, 2], a, 9);
        if (!b || !b.Jb) return a.A.push(17), Hz(a.P()), a.v;
        for (const e of b.Jb) {
            var c = e;
            var d = a.m.Zc || null;
            null == d ? c = null : (d = ds(c.T, new $z, new aA(d, a.P())), c = new ks(d, c.W(), c.Z));
            if (c && !(cs(c.T) > b.Xb) && Tz(a, c, {
                    vc: b.Xb,
                    Rc: !0
                })) return a = c.T.V, as(e.T, 0 < a.length ? a[0] : null), !0
        }
        a.A.push(17);
        Hz(a.P());
        return a.v
    };
    class $z {
        l(a, b, c, d) {
            return er(d.document, a, b)
        }
        m(a) {
            return Q(a).clientHeight || 0
        }
    };
    var bA = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Vb = c
        }
        ea(a) {
            return this.j ? gu(this.l, this.j, a, this.Vb) : fu(this.l, a, this.Vb)
        }
        ga() {
            return this.j ? 16 : 9
        }
    };
    var cA = class {
        constructor(a) {
            this.Mc = a
        }
        ea(a) {
            return nu(a.document, this.Mc)
        }
        ga() {
            return 11
        }
    };
    var dA = class {
        constructor(a) {
            this.jb = a
        }
        ea(a) {
            return ku(this.jb, a)
        }
        ga() {
            return 13
        }
    };
    var eA = class {
        ea(a) {
            return du(a)
        }
        ga() {
            return 12
        }
    };
    var fA = class {
        constructor(a) {
            this.zb = a
        }
        ea() {
            return iu(this.zb)
        }
        ga() {
            return 2
        }
    };
    var gA = class {
        constructor(a) {
            this.j = a
        }
        ea() {
            return lu(this.j)
        }
        ga() {
            return 3
        }
    };
    var hA = class {
        ea() {
            return ou()
        }
        ga() {
            return 17
        }
    };
    var iA = class {
        constructor(a) {
            this.j = a
        }
        ea() {
            return hu(this.j)
        }
        ga() {
            return 1
        }
    };
    var jA = class {
        ea() {
            return ae(Vr)
        }
        ga() {
            return 7
        }
    };
    var kA = class {
        constructor(a) {
            this.wd = a
        }
        ea() {
            return ju(this.wd)
        }
        ga() {
            return 6
        }
    };
    var lA = class {
        constructor(a) {
            this.j = a
        }
        ea() {
            return mu(this.j)
        }
        ga() {
            return 5
        }
    };
    var mA = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        ea() {
            return Da(pu, this.minWidth, this.maxWidth)
        }
        ga() {
            return 10
        }
    };
    var nA = class {
        constructor(a) {
            this.v = a.l.slice(0);
            this.l = a.j.slice(0);
            this.m = a.m;
            this.A = a.v;
            this.j = a.A
        }
    };

    function oA(a) {
        var b = new pA;
        b.A = a;
        b.l.push(new iA(a));
        return b
    }

    function qA(a, b) {
        a.l.push(new kA(b));
        return a
    }

    function rA(a, b) {
        a.l.push(new fA(b));
        return a
    }

    function sA(a, b) {
        a.l.push(new lA(b));
        return a
    }

    function tA(a, b) {
        a.l.push(new gA(b));
        return a
    }

    function uA(a) {
        a.l.push(new jA);
        return a
    }

    function vA(a) {
        a.j.push(new eA);
        return a
    }

    function wA(a, b = 0, c, d) {
        a.j.push(new bA(b, c, d));
        return a
    }

    function xA(a, b = 0, c = Infinity) {
        a.j.push(new mA(b, c));
        return a
    }

    function yA(a) {
        a.j.push(new hA);
        return a
    }

    function zA(a, b = 0) {
        a.j.push(new dA(b));
        return a
    }

    function AA(a, b) {
        a.m = b;
        return a
    }
    var pA = class {
        constructor() {
            this.m = 0;
            this.v = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new nA(this)
        }
    };
    class aA {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            var a = this.l,
                b = this.m;
            const c = a.D || {};
            c.google_ad_client = a.Kc;
            c.google_ad_height = Q(b).clientHeight || 0;
            c.google_ad_width = Q(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Iz;
            C(b, 1, a.A);
            a.j && jd(b, 2, a.j);
            a.C && C(b, 3, !0);
            c.google_rasc = Md(b);
            a.m && (c.google_adtest = "on");
            return new tn(["fsi_container"], c)
        }
    };
    var BA = mn(new jn(0, {})),
        CA = mn(new jn(1, {})),
        DA = a => a === BA || a === CA;

    function EA(a, b, c) {
        Ml(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class FA {
        constructor() {
            this.j = new Ql
        }
    };

    function GA(a, b) {
        b && (a.j.apv = z(b, 4), Wc(b, Sn, 23) && (a.j.sat = "" + ud(J(b, Sn, 23), 1)));
        return a
    }

    function HA(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class IA extends Ir {
        constructor(a) {
            super(a);
            this.j = {}
        }
        H(a) {
            this.j.a = a.join(",");
            return this
        }
        F(a) {
            null != a && (this.j.allp = a);
            return this
        }
        v(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.v(a);
            qe(a, this.j);
            return a
        }
    }

    function JA(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function KA(a, b) {
        a.l.op = LA(b)
    }

    function MA(a, b, c) {
        30 >= c.length ? a.l[b] = NA(c) : (a.l[b] = NA(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function OA(a, b, c) {
        MA(a, "fap", b);
        a.l.fad = LA(c)
    }

    function PA(a, b, c) {
        MA(a, "fmp", b);
        a.l.fmd = LA(c)
    }

    function QA(a, b, c) {
        MA(a, "vap", b);
        a.l.vad = LA(c)
    }

    function RA(a, b, c) {
        MA(a, "vmp", b);
        a.l.vmd = LA(c)
    }

    function SA(a, b, c) {
        MA(a, "pap", b);
        a.l.pad = LA(c)
    }

    function TA(a, b, c) {
        MA(a, "pmp", b);
        a.l.pmd = LA(c)
    }

    function UA(a, b) {
        MA(a, "psq", b)
    }
    var VA = class extends IA {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {}
        }
        v(a) {
            a = super.v(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function NA(a) {
        return a.map(b => b ? .toString() ? ? "null").join("~")
    }

    function LA(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function WA(a, b, c) {
        const d = b.T;
        Ml(a.j, d) || a.j.set(d, new XA(bn(is(b)) ? ? ""));
        c(a.j.get(d))
    }

    function YA(a, b) {
        WA(a, b, c => {
            c.j = !0
        })
    }

    function ZA(a, b) {
        WA(a, b, c => {
            c.l = !0
        })
    }

    function $A(a, b) {
        WA(a, b, c => {
            c.m = !0
        });
        a.I.push(b.T)
    }

    function aB(a, b, c) {
        WA(a, b, d => {
            d.gb = c
        })
    }

    function bB(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) DA(f.gb ? ? "") ? ++e : (b = a.l.get(f.gb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            hb: e
        }
    }

    function cB(a, b) {
        KA(b, a.l.Eb());
        var c = Pl(a.j).filter(f => 0 === (f.Oa.startsWith(BA) ? 0 : 1)),
            d = Pl(a.j).filter(f => 1 === (f.Oa.startsWith(BA) ? 0 : 1)),
            e = bB(a, f => f.j, c);
        OA(b, e.list, e.hb);
        e = bB(a, f => f.j, d);
        PA(b, e.list, e.hb);
        e = bB(a, f => f.l, c);
        QA(b, e.list, e.hb);
        e = bB(a, f => f.l, d);
        RA(b, e.list, e.hb);
        c = bB(a, f => f.m, c);
        SA(b, c.list, c.hb);
        d = bB(a, f => f.m, d);
        TA(b, d.list, d.hb);
        UA(b, a.I.map(f => a.j.get(f) ? .gb).map(f => a.l.get(f) ? ? null))
    }

    function wj() {
        var a = P(dB);
        if (!a.A) return kj();
        const b = tj(sj(rj(qj(pj(oj(nj(mj(jj(ij(new lj, a.A ? ? []), a.H ? ? []), a.B), a.F), a.G), a.K), a.L), a.C ? ? 0), Pl(a.j).map(c => {
            var d = new hj;
            d = wd(d, 1, c.Oa);
            var e = a.l.get(c.gb ? ? "", -1);
            d = K(d, 2, e);
            d = vd(d, 3, c.j);
            return vd(d, 4, c.l)
        })), a.I.map(c => a.j.get(c) ? .gb).map(c => a.l.get(c) ? ? null));
        null != a.m && vd(b, 6, a.m);
        null != a.v && dd(b, 13, a.v, 0);
        return b
    }
    var dB = class {
        constructor() {
            this.v = this.H = this.A = null;
            this.G = this.F = !1;
            this.m = null;
            this.L = this.B = this.K = !1;
            this.C = null;
            this.l = new Ql;
            this.j = new Ql;
            this.I = []
        }
    };
    class XA {
        constructor(a) {
            this.m = this.l = this.j = !1;
            this.gb = null;
            this.Oa = a
        }
    };
    class eB {
        constructor(a = 0) {
            this.j = a
        }
    };
    class fB {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function gB(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function hB(a, b) {
        const c = a.H.filter(d => Ol(d.ec).every(e => d.ec.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.ec.Eb() > e.ec.Eb() ? d : e, c[0])
    }

    function iB(a, b) {
        b = is(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Ml(a.m, b)) return a.m.get(b);
        var c = kn(b);
        c = hB(a, c);
        a.m.set(b, c);
        return c
    }
    var jB = class {
        constructor(a) {
            this.j = a;
            this.m = new Ql;
            this.H = (J(a, Io, 2) ? .j() || []).map(b => {
                const c = kn(L(b, 1)),
                    d = td(b, 2);
                return {
                    ec: c,
                    He: d,
                    Oa: L(b, 1)
                }
            });
            this.l = []
        }
        G() {
            const a = P(dB);
            var b = this.v();
            a.A = b;
            b = this.B();
            a.H = b;
            b = this.A();
            null != b && (a.v = b);
            b = !!this.j.v() ? .j() ? .j();
            a.G = b;
            b = new Ql;
            for (const c of J(this.j, Io, 2) ? .j() ? ? []) b.set(L(c, 1), td(c, 2));
            a.l = b
        }
        C() {
            return [...this.l]
        }
        v() {
            return [...this.j.j()]
        }
        B() {
            return [...ad(this.j, 4, Oc)]
        }
        A() {
            return J(this.j, Bo, 5) ? .j() ? ? null
        }
        F(a) {
            const b = iB(this, a);
            null != b ? .Oa && aB(P(dB),
                a, b.Oa)
        }
        I(a) {
            const b = Aq(Fp) || 0;
            if (0 == a.length || 0 == b) return !0;
            const c = (new Um(a)).filter(d => {
                d = iB(this, d) ? .Oa || "";
                return "" != d && !(d === BA || d === CA)
            });
            return b <= c.j.length / a.length
        }
    };

    function kB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => (iB(a.j, c) ? .He ? ? Number.MAX_VALUE) - (iB(a.j, d) ? .He ? ? Number.MAX_VALUE))
    }

    function lB(a, b) {
        var c = b.Z.j,
            d = Math,
            e = d.min;
        const f = b.W(),
            g = b.T.j();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? gB(f.parentElement) : gB(f));
        d = a.m;
        0 > d.j && (d.j = Q(d.l).scrollHeight || 0);
        d = d.j - b.Z.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.W();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function mB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => lB(a, c) - lB(a, d))
    }

    function nB(a, b) {
        return b.sort((c, d) => {
            const e = c.T.F,
                f = d.T.F;
            var g;
            null == e || null == f ? g = null == e && null == f ? lB(a, c) - lB(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class oB {
        constructor(a, b = 0, c = null) {
            this.m = new fB(a);
            this.l = new eB(b);
            this.j = c && new jB(c)
        }
    };

    function pB(a, b, c = 0) {
        var d = a.l;
        for (var e of b.v) d = Tm(d, e.ea(a.m), qB(e.ga(), c));
        e = d = d.apply(cu(a.m));
        for (const f of b.l) e = Tm(e, f.ea(a.m), rB(f.ga(), c));
        switch (b.m) {
            case 1:
                e = mB(a.j, e);
                break;
            case 2:
                e = nB(a.j, e);
                break;
            case 3:
                const f = P(dB);
                e = kB(a.j, e);
                d.forEach(g => {
                    YA(f, g);
                    a.j.j ? .F(g)
                });
                e.forEach(g => ZA(f, g))
        }
        b.A && (e = Wm(e, pg(a.m.location.href + a.m.localStorage.google_experiment_mod)));
        1 === b.j ? .length && EA(a.v, b.j[0], {
            lf: d.j.length,
            Kg: e.j.length
        });
        return Vm(e)
    }
    class sB {
        constructor(a, b, c = 0, d = null) {
            this.l = new Um(a);
            this.j = new oB(b, c, d);
            this.m = b;
            this.v = new FA
        }
        A() {
            this.l.forEach(a => {
                a.l && Eq(a.l);
                a.l = null
            })
        }
    }
    const qB = (a, b) => c => $r(c, b, a),
        rB = (a, b) => c => $r(c.T, b, a);

    function tB(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = uB(vB(c), a);
                    break a;
                case 3:
                    a = uB(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = uB(e ? 1 == e.nodeType ? e : vB(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !wB(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !Yo(b) && 0 >= b.offsetWidth);
        return d
    }

    function uB(a, b) {
        if (!a) return !1;
        a = Rg(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function vB(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function wB(a) {
        return !!a.nextSibling || !!a.parentNode && wB(a.parentNode)
    };
    var xB = !Qb && !sb();

    function yB(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (xB && a.dataset) {
            if (ub() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var zB = (a, b, c) => {
            if (!b) return null;
            const d = zg(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Q(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        AB = a => {
            const b = a.document.body;
            var c = zB(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = k);
                    if (5 > h.depth)
                        for (let l = 0; l < k.children.length; l++) {
                            const m = k.children[l];
                            g = c;
                            const n = m.getBoundingClientRect().width;
                            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
                                element: m,
                                depth: h.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? zB(a, c.parentNode || b, c) : null
        },
        CB = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Ig() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
                    (b |= 32768), BB(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        BB = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == yB(a[b])) return !0;
            return !1
        };

    function DB(a) {
        const b = Bl(a, !0),
            c = Q(a).scrollWidth,
            d = Q(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Gl(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            t = 0,
            A = Infinity,
            x = Infinity,
            B = null;
        var G = dt({
            bb: !1
        }, a);
        for (var D of G) {
            G = D.getBoundingClientRect();
            const S = b - (G.bottom + f);
            var E = void 0,
                I = void 0;
            if (D.className && $a(D.className, "adsbygoogle-ablated-ad-slot")) {
                E = D.getAttribute("google_element_uid");
                I = a.google_sv_map;
                if (!E || !I || !I[E]) continue;
                E = (I = li(I[E])) ? I.height : 0;
                I = I ? I.width : 0
            } else if (E = G.bottom - G.top, I = G.right - G.left, 1 >= E || 1 >= I) continue;
            g.push(E);
            k.push(I);
            l.push(E * I);
            D.className && $a(D.className, "google-auto-placed") ? (t += 1, D.className && $a(D.className, "pedestal_container") && (B = E)) : (A = Math.min(A, S), n.push(G), r += 1, h.push(E), m.push(E * I));
            x = Math.min(x, S);
            q.push(G)
        }
        A = Infinity === A ? null : A;
        x = Infinity === x ? null : x;
        f = EB(n);
        q = EB(q);
        h = FB(b, h);
        n = FB(b, g);
        m = FB(b * c, m);
        D = FB(b * c, l);
        return new GB(a, {
            Bf: e,
            qd: b,
            ig: c,
            hg: d,
            ag: r,
            jf: t,
            nf: HB(g),
            pf: HB(k),
            mf: HB(l),
            eg: f,
            dg: q,
            cg: A,
            bg: x,
            Uc: h,
            Tc: n,
            ef: m,
            df: D,
            kg: B
        })
    }

    function IB(a, b, c, d) {
        const e = Ig() && !(900 <= Q(a.l).clientWidth);
        d = yb(d, f => Cb(a.m, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Bf,
            pg_h: JB(a.j.qd),
            pg_w: JB(a.j.ig),
            pg_hs: JB(a.j.hg),
            c: JB(a.j.ag),
            aa_c: JB(a.j.jf),
            av_h: JB(a.j.nf),
            av_w: JB(a.j.pf),
            av_a: JB(a.j.mf),
            s: JB(a.j.eg),
            all_s: JB(a.j.dg),
            b: JB(a.j.cg),
            all_b: JB(a.j.bg),
            d: JB(a.j.Uc),
            all_d: JB(a.j.Tc),
            ard: JB(a.j.ef),
            all_ard: JB(a.j.df),
            pd_h: JB(a.j.kg),
            dt: e ? "m" : "d"
        }
    }
    class GB {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function HB(a) {
        return jg.apply(null, yb(a, b => 0 < b)) || null
    }

    function FB(a, b) {
        return 0 >= a ? null : ig.apply(null, b) / a
    }

    function EB(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function JB(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function KB(a, b) {
        b = (Q(b).clientHeight || 0) - Gl(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Jt(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function LB(a) {
        const b = {};
        var c = Dt({
            bb: !1,
            lc: !1,
            mc: !1,
            nc: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Jt);
        b.Hd = c.length;
        c = Et({
            mc: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Jt);
        b.ae = c.length;
        c = Et({
            nc: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Jt);
        b.xe = c.length;
        c = Et({
            lc: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Jt);
        b.Nd = c.length;
        c = (Q(a).clientHeight || 0) - Gl(a);
        c = Dt({
            bb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Jt).filter(Ca(MB, null, c));
        b.Id = c.length;
        a = DB(a);
        c = null != a.j.Uc ? a.j.Uc :
            null;
        null != c && (b.te = c);
        a = null != a.j.Tc ? a.j.Tc : null;
        null != a && (b.Jd = a);
        return b
    }

    function Tz(a, b, {
        vc: c,
        Lc: d,
        Rc: e
    } = {}) {
        return mr(997, () => NB(a, b, {
            vc: c,
            Lc: d,
            Rc: e
        }), a.j)
    }

    function Uz(a, b, c, d) {
        var e = c.Ta ? c.Ta : a.B;
        const f = Ss(e, b.j.length);
        e = a.m.Kd ? e.j : void 0;
        const g = yA(zA(vA(xA(wA(uA(sA(tA(qA(rA(oA(c.types), a.V), c.wd || []), a.L), c.wg || [])), f.wc || void 0, e, b), c.minWidth, c.maxWidth)), f.jb || void 0));
        a.K && g.j.push(new cA(a.K));
        b = 1;
        a.m.Fd ? b = 2 : a.Da() && (b = 3);
        AA(g, b);
        a.m.zd && (g.v = !0);
        return mr(995, () => pB(a.l, g.build(), d), a.j)
    }

    function Wz(a, b) {
        const c = AB(a.j);
        if (c) {
            const d = sn(a.H, b),
                e = br(a.j.document, a.C, null, null, {}, d);
            e && (Hq(e.Xa, c, 2, 256), mr(996, () => OB(a, e, d), a.j))
        }
    }

    function PB(a) {
        return a.F ? a.F : a.F = a.j.google_ama_state
    }

    function NB(a, b, {
        vc: c,
        Lc: d,
        Rc: e
    } = {}) {
        const f = b.T;
        if (f.A) return !1;
        var g = b.W();
        if (!tB(a.j, f.j(), g, a.v)) return !1;
        var h = null;
        W(jp) && f.uc ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new tn(null, {
            google_max_responsive_height: null == c ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = null == c ? null : new tn(null, {
            google_max_responsive_height: c
        });
        c = un(z(f.Fc, 2) || 0);
        g = vn(f.F);
        const k = QB(a, f),
            l = RB(a),
            m = sn(a.H, f.L ? f.L.j(b.Z) : null, h, d || null, c, g, k, l),
            n = b.fill(a.C, m);
        if (e && !SB(a, n, m) || !mr(996,
                () => OB(a, n, m), a.j)) return !1;
        il(9, [f.F, f.eb]);
        a.Da() && $A(P(dB), b);
        return !0
    }

    function QB(a, b) {
        return bn(dn(gs(b).map(wn), () => {
            a.A.push(18)
        }))
    }

    function RB(a) {
        if (!a.Da()) return null;
        var b = a.l.j.j ? .B();
        if (null == b) return null;
        b = b.join("~");
        a = a.l.j.j ? .A() ? ? null;
        return xn({
            yf: b,
            Ff: a
        })
    }

    function SB(a, b, c) {
        if (!b) return !1;
        var d = b.va,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.va;
        c = c && c.Fb() || {};
        if (d !== d.top) var g = Og(d) ? 3 : 16;
        else if (488 > Q(d).clientWidth)
            if (d.innerHeight >= d.innerWidth)
                if (g = Q(d).clientWidth, !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = Q(d).clientWidth; h; h = h.parentElement) {
                            const k = Rg(h, d);
                            if (!k) continue;
                            const l = bh(k.width);
                            if (l && !(l >= g) && "visible" != k.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = Rg(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Q(d).clientWidth, f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.va;
            if (f = Yq(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", Wq(b, f, "0px"), b.style.width = Q(a).clientWidth + "px", Zq(a, b, f), b.style.zIndex = 30;
            return !0
        }
        Eq(b.Xa);
        return !1
    }

    function OB(a, b, c) {
        if (!b) return !1;
        try {
            fr(a.j, b.va, c)
        } catch (d) {
            return Eq(b.Xa), a.A.push(6), !1
        }
        return !0
    }
    class TB {
        constructor(a, b, c, d, e = {}, f = []) {
            this.l = a;
            this.C = b;
            this.j = c;
            this.B = d.Ta;
            this.V = d.zb || [];
            this.H = d.Gf || null;
            this.L = d.Af || [];
            this.K = d.Mc || [];
            this.m = e;
            this.v = !1;
            this.I = [];
            this.A = [];
            this.G = this.F = void 0;
            this.ja = f
        }
        aa() {
            return this.l
        }
        P() {
            return this.j
        }
        wa(a) {
            this.I.push(a)
        }
        Da() {
            if (0 == (this.l.j.j ? .v().length ? ? 0)) return !1;
            if (0 == (Aq(Fp) || 0)) return !0;
            if (void 0 === this.G) {
                const a = AA(vA(uA(oA([0, 1, 2]))), 1).build(),
                    b = mr(995, () => pB(this.l, a), this.j);
                this.G = this.l.j.j ? .I(b) || !1
            }
            return this.G
        }
        gd() {
            return !!this.m.Le
        }
        sc() {
            return !BB(this.j)
        }
    }
    const MB = (a, b) => b.top <= a;

    function UB(a, b, c, d, e, f = 0, g = 0) {
        this.Ba = a;
        this.Dc = f;
        this.Cc = g;
        this.errors = b;
        this.Ra = c;
        this.j = d;
        this.l = e
    };
    var VB = (a, {
        sc: b = !1,
        gd: c = !1,
        Ag: d = !1,
        Da: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !W(lp);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !W(lp) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function WB(a, b, c) {
        a = VB(a, {
            sc: b.sc(),
            gd: b.gd(),
            Ag: !!b.m.Zc,
            Da: b.Da()
        });
        return new XB(a, b, c)
    }

    function YB(a, b) {
        const c = Qz[b];
        return c ? mr(998, () => c(a.j), a.A) : (a.j.wa(12), !0)
    }

    function ZB(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(YB(a, b))
            })
        })
    }

    function $B(a) {
        a.j.v = !0;
        return Promise.all(a.l.map(b => ZB(a, b))).then(b => {
            b.includes(!1) && a.j.wa(5);
            a.l.splice(0, a.l.length)
        })
    }
    class XB {
        constructor(a, b, c) {
            this.v = a.slice(0);
            this.l = a.slice(0);
            this.m = Db(this.l, 1);
            this.j = b;
            this.A = c
        }
    };
    const aC = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };

    function bC(a) {
        return $B(a).then(() => {
            var b = a.j.l.l.filter(Vr).j.length;
            var c = a.j.I.slice(0);
            var d = a.j;
            d = [...d.A, ...(d.l.j.j ? .C() || [])];
            b = new UB(b, c, d, a.j.l.l.j.length, a.j.l.v.j, a.j.l.l.filter(Vr).filter(Wr).j.length, a.j.l.l.filter(Wr).j.length);
            return new aC(b)
        })
    };
    class cC {
        j() {
            return new tn([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class dC {
        j() {
            return new tn(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function eC(a) {
        return Zo(a.j.document).map(b => {
            const c = new ps(b, 3);
            b = new Qr(hr(a.j, b));
            return new Ur(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class fC {
        constructor(a) {
            var b = new dC;
            this.j = a;
            this.l = b || null
        }
    };
    const gC = {
        Ed: "10px",
        Qc: "10px"
    };

    function hC(a) {
        return Ll(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Ur(new ps(b, 1), new Or(gC), a.l, !1, 0, [], null, a.j, null))
    }
    class iC {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function jC(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function kC(a, b, c) {
        const d = jC(c.jc, "gapsMeasurementWindow") || jC(c.Db, "gapsPerMeasurementWindow") || jC(c.Hb, "maxGapsToReport");
        return null != d ? $m(d) : c.Md || -1 != c.Db || -1 != c.Hb ? Ym(new lC(a, b, c)) : $m("ShouldHaveLimits")
    }

    function mC(a) {
        return PB(a.m) && PB(a.m).placed || []
    }

    function nC(a) {
        return mC(a).map(b => Im(Gm(b.element, a.j)))
    }

    function oC(a) {
        return mC(a).map(b => b.index)
    }

    function pC(a, b) {
        const c = b.T;
        return !a.B && c.v && null != z(c.v, 8) && 1 == z(c.v, 8) ? [] : c.A ? (c.V || []).map(d => Im(Gm(d, a.j))) : [Im(new Hm(b.Z.j, 0))]
    }

    function qC(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new Hm(c, f - c)), c = d)
        }
        return b
    }

    function rC(a, b) {
        b = b.map(c => {
            var d = new wz;
            d = C(d, 1, c.j);
            c = c.getHeight();
            return C(d, 2, c)
        });
        return yz(xz(new Az, a), b)
    }

    function sC(a) {
        const b = id(a, wz, 2).map(c => `G${qd(c,1)}~${c.getHeight()}`);
        return `W${qd(a,1)}${b.join("")}`
    }

    function tC(a, b) {
        const c = [];
        let d = 0;
        for (const e of Ol(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.G || f.splice(a.A, f.length);
            !a.C && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(rC(e, f));
            d += f.length;
            if (!a.C && d >= a.l) break
        }
        return c
    }

    function uC(a) {
        const b = id(a, Az, 5).map(c => sC(c));
        return `M${qd(a,1)}H${qd(a,2)}C${qd(a,3)}B${Number(!!H(a,4))}${b.join("")}`
    }

    function vC(a) {
        var b = ys(Vm(a.m.l.l), a.j),
            c = nC(a),
            d = new Rl(oC(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = pC(a, b[e]);
                c.push(...f)
            }
        c.push(new Hm(0, 0));
        c.push(Im(new Hm(Q(a.j).scrollHeight, 0)));
        b = qC(c);
        c = new Ql;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.F ? 0 : Math.floor(e.j / a.v), Ml(c, f) || c.set(f, []), c.get(f).push(e);
        b = tC(a, c);
        c = new Cz;
        c = C(c, 1, a.l);
        c = C(c, 2, a.v);
        c = C(c, 3, a.A);
        a = C(c, 4, a.B);
        return od(a, 5, b)
    }

    function wC(a) {
        a = vC(a);
        return uC(a)
    }
    var lC = class {
        constructor(a, b, c) {
            this.F = -1 == c.jc;
            this.v = c.jc;
            this.G = -1 == c.Db;
            this.A = c.Db;
            this.C = -1 == c.Hb;
            this.l = c.Hb;
            this.B = c.ne;
            this.m = b;
            this.j = a
        }
    };
    const xC = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var yC = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Uk("ama", b, .01)
        },
        zC = a => {
            const b = {};
            Tg(xC, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    const AC = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        BC = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var CC = (a, b) => {
            a = Zc(a, 2);
            if (!a) return !1;
            for (let c = 0; c < a.length; c++)
                if (a[c] == b) return !0;
            return !1
        },
        EC = (a, b) => {
            a = BC(AC(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Vg(a),
                d = DC(a);
            return b.find(e => {
                const f = Wc(e, In, 7) ? sd(J(e, In, 7)) : sd(e);
                Wc(e, In, 7) ? (e = J(e, In, 7), e = z(e, 2)) : e = 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        };
    const DC = a => {
        const b = {};
        for (;;) {
            b[Vg(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var FC = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                yC(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            yC(a, {
                lserr: 1
            })
        }
    };

    function GC(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function HC(a, b) {
        a = GC(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function IC() {
        if (JC) return JC;
        const a = Ih() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? JC = b : a.google_persistent_state_async = JC = new KC
    }

    function LC(a, b, c) {
        b = MC[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Z(a, b, c) {
        return LC(a, b, () => c)
    }

    function NC(a, b, c) {
        return a.S[MC[b] || "google_ps_" + b] = c
    }

    function OC(a, b) {
        return NC(a, b, Z(a, b, 0) + 1)
    }

    function PC() {
        var a = IC();
        return Z(a, 20, {})
    }

    function QC() {
        var a = IC();
        const b = Z(a, 31, !1);
        b || NC(a, 31, !0);
        return !b
    }

    function RC() {
        var a = IC();
        return Z(a, 26)
    }

    function SC() {
        var a = IC();
        return Z(a, 28, [])
    }
    class KC {
        constructor() {
            this.S = {}
        }
    }
    var JC = null;
    const MC = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var TC = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_daaos_ts: "daaos",
            google_erank: "epr",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpi: "easpi",
            easpa: "easai",
            asntp: "asntp",
            asntpv: "asntpv",
            asntpl: "asntpl",
            asntpm: "asntpm",
            asntpc: "asntpc",
            asna: "asna",
            asnd: "asnd",
            asnp: "asnp",
            asns: "asns",
            asmat: "asmat",
            asptt: "asptt",
            asro: "asro",
            ascet: "easct",
            asrc: "asdrc",
            easppi: "easppi",
            asbu: "asbu",
            aseb: "aseb",
            asla: "aslmt",
            asaa: "asamt",
            asupm: "asupm"
        },
        UC = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        VC = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        WC = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    async function XC(a, b, c) {
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function YC(a) {
        const b = a.j.pc;
        return null !== b && 0 !== b ? b : a.j.pc = rh(a.win)
    }

    function ZC(a) {
        var b = a.j.wpc;
        if (null === b || "" === b) {
            b = a.j;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if (null == (a = GC(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                    b: {
                        a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                        /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !ji() ? UC : VC;
                        for (var d = a.length - 1; 0 <= d; d--) {
                            var e = a[d];
                            if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                a = e;
                                break b
                            }
                        }
                        a = null
                    }
                    if (a) {
                        c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (d = {}; e = c.exec(a);) d[e[1]] = WC(e[2]);
                        a = d;
                        a = a.google_ad_client ? a.google_ad_client : ""
                    } else a = ""
                }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function $C(a, b) {
        var c = new tk,
            d = YC(a);
        c = K(c, 1, d).Pa(ZC(a));
        c = K(c, 3, a.j.sd);
        return K(c, 7, Math.round(b || a.win.performance.now()))
    }

    function aD(a, b) {
        a.l && !a.j.le.includes(2) && (a.j.le.push(2), vk(a.sa, b))
    }
    async function bD(a) {
        await XC(a.win, () => !(!YC(a) || !ZC(a)), 10)
    }
    async function cD(a, b, c) {
        if (a.l && c.length && !a.j.lgdp.includes(Number(b))) {
            a.j.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await bD(a);
            var e = a.sa;
            a = $C(a, d);
            d = new Lj;
            b = zd(d, 1, b);
            c = cd(b, 2, c, Mc);
            c = ld(a, 9, uk, c);
            vk(e, c)
        }
    }

    function dD(a, b) {
        var c = $C(a);
        b = ld(c, 5, uk, b);
        aD(a, b)
    }
    async function eD(a, b) {
        await bD(a);
        var c = $C(a);
        b = ld(c, 5, uk, b);
        aD(a, b)
    }
    async function fD(a, b) {
        await bD(a);
        var c = a.sa;
        a = $C(a);
        a = K(a, 3, 1);
        b = ld(a, 6, uk, b);
        vk(c, b)
    }
    var gD = class {
        constructor(a) {
            this.win = Ih() || window;
            this.sa = a ? ? new Lk;
            this.j = LC(IC(), 33, () => {
                const b = Aq(cp);
                return {
                    sd: b,
                    ssp: 0 < b && Sg() < 1 / b,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: []
                }
            })
        }
        get l() {
            return this.j.ssp
        }
        get dc() {
            return this.j.cu
        }
        set dc(a) {
            this.j.cu = a
        }
    };
    var iD = (a, b, c, d, e, f, g = null, h = null, k) => {
            hD(a, new Lr(a), b, c, d, e, f, g, new Lm(a), h, k)
        },
        hD = (a, b, c, d, e, f, g, h = null, k = null, l = null, m) => {
            if (c)
                if (d) {
                    var n = ky(d, e, a.location);
                    try {
                        const q = new jD(a, b, c, d, e, n, f, g, h, k, l, m);
                        mr(990, () => kD(q), a)
                    } catch (q) {
                        hl() && il(15, [q]), Kr(b, wr, Hr(HA(GA((new IA(0)).Pa(c), d), n).wa(1), q)), W(fp) ? eD(P(gD), Aj(new Jj, Xi(1))) : dD(P(gD), Aj(new Jj, Xi(1)))
                    }
                } else Kr(b, wr, (new IA(0)).Pa(c).wa(8)), W(fp) ? eD(P(gD), Aj(new Jj, Xi(8))) : dD(P(gD), Aj(new Jj, Xi(8)));
            else Kr(b, wr, (new IA(0)).wa(9)), W(fp) ? eD(P(gD),
                Aj(new Jj, Xi(9))) : dD(P(gD), Aj(new Jj, Xi(9)))
        };

    function kD(a) {
        a.C.forEach(b => {
            switch (b) {
                case 0:
                    mr(991, () => lD(a), a.l);
                    break;
                case 1:
                    mr(1073, () => {
                        var c = W(wp);
                        const d = a.m.R ? Zc(a.m.R, 2) : [];
                        c && 0 == d.length || (c = new ay(a.l, a.B, a.j, a.A, a.m.R, c), W(up) ? $x(c) : Wx(c))
                    }, a.l);
                    break;
                case 5:
                    Kx(new Lx(a.l, a.B, a.j, a.A));
                    break;
                case 2:
                    mD(a);
                    break;
                case 3:
                    nD(a);
                    break;
                case 4:
                    oD(a);
                    break;
                case 6:
                    a.runAutoGames()
            }
        })
    }

    function lD(a) {
        (a.j ? .j() ? .j() ? ? !1) && pD(a, "p", qD(a));
        if (Lo(a.j) && 1 === z(Lo(a.j), 1)) {
            var b = J(Lo(a.j), yn, 6);
            b && 2 === z(b, 1) && (gr(a.l), a.F = "b")
        }
        var c = a.m.ng;
        b = Ps(a.l, c);
        if (a.m.R && Wc(a.m.R, Hn, 10)) {
            var d = $c(J(a.m.R, Hn, 10), 1);
            null !== d && void 0 !== d && (b = Hs(a.l, d, c))
        }
        Wc(a.j, En, 26) && (b = Ts(b, J(a.j, En, 26), a.l));
        c = a.m.R ? Zc(a.m.R, 6) : [];
        d = a.m.R ? id(a.m.R, Nn, 5) : [];
        const e = a.m.R ? Zc(a.m.R, 2) : [],
            f = mr(993, () => {
                var g = a.j,
                    h = id(g, vo, 1),
                    k = a.m.R && CC(a.m.R, 1);
                const l = W(Bp) ? "" : k ? "text_image" : "text";
                var m = new cC;
                k = Tr(h, a.l, {
                    qf: m,
                    Vf: new Rr(l)
                });
                h.length != k.length && a.H.push(13);
                k = k.concat(hC(new iC(a.l, m)));
                h = 0;
                m = W(sp);
                var n = !1;
                if (Lo(g) && 1 === z(Lo(g), 1)) {
                    var q = J(Lo(g), yn, 6);
                    q && (h = rd(q, 2) || 0, 1 === z(q, 1) && (n = !0))
                }
                q = J(g, Ko, 24) ? .v() ? .j() ? .j() || !1;
                if (m || n || q) m = eC(new fC(a.l)), n = P(dB), k = k.concat(m), n.K = !0, n.C = m.length, "n" === a.F && (a.F = J(g, Ko, 24) ? .j() ? .length ? "o" : "p");
                k = k.concat(vz(g, l, a.l));
                g = J(g, Ko, 24);
                return new sB(k, a.l, h, g)
            }, a.l);
        a.v = new TB(f, a.A, a.l, {
            Ta: b,
            Gf: a.V,
            zb: a.m.zb,
            Af: c,
            Mc: d
        }, rD(a), e);
        PB(a.v) ? .optimization ? .ablatingThisPageview &&
            !a.v.Da() && (gr(a.l), P(dB).B = !0, a.F = "f");
        a.G = WB(e, a.v, a.l);
        mr(992, () => bC(a.G), a.l).then(mr(994, () => a.Sa.bind(a), a.l), a.Ga.bind(a))
    }

    function mD(a) {
        const b = J(a.j, xo, 18);
        b && Zy(new $y(a.l, new uz(a.l, a.A), b, new nw(a.l), id(a.j, vo, 1)))
    }

    function nD(a) {
        const b = gy(a.l.location, "google_audio_sense") ? Zn() : J(a.j, $n, 27);
        if (b) {
            const c = J(a.j, po, 6) ? .j() || [];
            cn(Su(a.l, a.B, b, c, a.aa, {
                google_ad_client: a.A
            }, J(a.j, mo, 22) ? .j() || null), d => Uu(d))
        }
    }

    function oD(a) {
        const b = J(a.j, Ao, 29);
        b && sD(a.ua, {
            win: a.l,
            webPropertyCode: a.A,
            fe: b,
            Pd: J(a.j, po, 6) ? .j() ? ? []
        })
    }

    function rD(a) {
        const b = W(vp);
        if (!a.j.j()) return {
            zd: b,
            Fd: !1,
            Yd: !1,
            Se: !1,
            be: !1,
            Le: !1,
            lg: 0,
            Fe: 0,
            Kd: tD(a),
            Zc: a.L
        };
        const c = a.j.j();
        return {
            zd: b || H(c, 14, !1),
            Fd: H(c, 2, !1),
            Yd: H(c, 3, !1),
            Se: H(c, 4, !1),
            be: H(c, 5, !1),
            Le: H(c, 6, !1),
            lg: bd($c(c, 8), 0),
            Fe: z(c, 10),
            Kd: tD(a),
            Zc: a.L
        }
    }

    function tD(a) {
        return a.m.R && Wc(a.m.R, Hn, 10) ? .5 <= ($c(J(a.m.R, Hn, 10), 1) || 0) : !0
    }

    function uD(a, b) {
        for (var c = Gr(Gr(new IA(b.Ba), b.errors), a.H), d = b.Ra, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.B.length; g++)
                if (c.B[g] == f) break a;c.B.push(f)
        }
        c.j.pp = b.Cc;
        c.j.ppp = b.Dc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.vb;
        c.j.eatfAbg = b.wb;
        c.j.reatf = b.Ya;
        c = HA(GA(c.H(a.G.v.slice(0)), a.j), a.C).Pa(a.A);
        if (d = b.ma) c.j.as_count = d.Hd, c.j.d_count = d.ae, c.j.ng_count = d.xe, c.j.am_count = d.Nd, c.j.atf_count = d.Id, c.j.mdns = JA(d.te), c.j.alldns = JA(d.Jd);
        c = c.F(b.kb);
        if (d = b.If) {
            e = [];
            for (var h of Ol(d)) 0 < d.get(h).length &&
                (f = d.get(h)[0], e.push("(" + [h, f.lf, f.Kg].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.qd;
        null != h && (c.j.pgh = h);
        c.j.abl = b.ie;
        c.j.rr = a.F;
        void 0 !== b.exception && Hr(c, b.exception).wa(1);
        return c
    }

    function vD(a, b) {
        var c = uD(a, b);
        Kr(a.B, 0 < b.errors.length || 0 < a.H.length || void 0 !== b.exception ? 0 < a.K ? yr : wr : 0 < a.K ? xr : vr, c);
        if (J(a.j, Ko, 24)) {
            a.v.l.j.j ? .G();
            b = PB(a.v);
            var d = P(dB);
            d.m = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.F = !0);
            d.L = !!b ? .optimization ? .availableAbg;
            b = P(dB);
            c = new VA(c);
            b.A ? (c.l.sl = (b.A ? ? []).join("~"), c.l.daaos = (b.H ? ? []).join("~"), c.l.ab = LA(b.F), c.l.rr = LA(b.K), c.l.oab = LA(b.G), null != b.m && (c.l.sab = LA(b.m)), b.B && (c.l.fb = LA(b.B)), c.l.ls = LA(b.L), KA(c, b.l.Eb()),
                null != b.C && (c.l.rp = LA(b.C)), null != b.v && (c.l.expl = LA(b.v)), cB(b, c)) : (b = c, d = "irr".replace(RegExp("~", "g"), ""), b.l.e = b.l.e ? b.l.e + ("~" + d) : d);
            Kr(a.B, Br, c)
        }
    }

    function wD(a, b) {
        const c = P(gD);
        if (c.l) {
            var d = new Jj,
                e = b.Ra.filter(g => null !== g),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(g => null !== g);
            Ej(Cj(Hj(Gj(Fj(Dj(xj(zj(Bj(yj(d, a.G.v.slice(0).map(g => {
                var h = new Wi;
                return C(h, 1, g)
            })), e.map(g => {
                var h = new Zi;
                return C(h, 1, g)
            })), f.map(g => Xi(g))), J(a.j, Sn, 23) ? .j()), b.Ba).F(b.kb), b.Ya), b.vb), b.wb), a.C.map(g => g.toString())), fj(ej(dj(cj(bj(aj($i(new gj, b.ma ? .Hd), b.ma ? .ae), b.ma ? .xe), b.ma ? .Nd), b.ma ? .Id), b.ma ? .te), b.ma ? .Jd));
            J(a.j, Ko, 24) && vj(d);
            W(fp) ? eD(c, d) : dD(c,
                d)
        }
    }

    function xD(a) {
        return Lo(a.j) && 1 === z(Lo(a.j), 1) ? !(J(Lo(a.j), yn, 6) && 1 <= (rd(J(Lo(a.j), yn, 6), 3) || 0)) : !1
    }

    function yD(a) {
        if (xD(a)) {
            a = a.v;
            var b = Et({
                mc: !0,
                nc: !0
            }, a.j);
            a = 0 < KB(b, a.j)
        } else a = a.v.j, b = Dt({
            bb: !1,
            lc: !1
        }, a), a = 0 < KB(b, a);
        return a
    }

    function zD(a, b) {
        try {
            W(kp) && a.v ? .aa() ? .A()
        } catch (c) {
            Kr(a.B, Fr, Hr(HA(GA((new IA(b)).Pa(a.A), a.j), a.C).wa(14), c))
        }
    }

    function AD(a) {
        if (a.j ? .j() ? .j() ? ? !1) {
            var b = qD(a);
            a.I.init(null == b ? void 0 : b, () => {
                pD(a, "s", b)
            });
            Jm(a.I, c => {
                pD(a, "d", qD(a), c);
                a.I.xa();
                if (a.j ? .j() ? .v()) {
                    a.j ? .j() ? .A();
                    try {
                        a.C ? .includes(0) && (a.K++, lD(a), pD(a, "r", qD(a), c))
                    } catch (d) {
                        pD(a, "f", qD(a), c), Kr(a.B, yr, Hr(HA(GA((new IA(0)).Pa(a.A), a.j), a.C).wa(1), d))
                    }
                }
            })
        }
    }

    function BD(a, b, c) {
        {
            var d = PB(a.v),
                e = b.j;
            const f = e.j,
                g = e.Cc;
            let h = e.Ba,
                k = e.Dc,
                l = e.errors.slice(),
                m = e.Ra.slice(),
                n = b.exception;
            const q = GC(a.l).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.G.m && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Ba: h,
                Cc: g,
                Dc: k,
                kb: f,
                errors: e.errors.slice(),
                Ra: m,
                exception: n,
                Ya: c,
                vb: !!d.eatf,
                wb: !!d.eatfAbg,
                ie: q
            }) : (m.push(12), a.G.m && m.push(13), c = {
                Ba: h,
                Cc: g,
                Dc: k,
                kb: f,
                errors: l,
                Ra: m,
                exception: n,
                Ya: c,
                vb: !1,
                wb: !1,
                ie: q
            })
        }
        c.ma = LB(a.v.j);
        if (b = b.j.l) c.If = b;
        c.qd = Q(a.l).scrollHeight;
        if (hl()) {
            d = Vm(a.v.l.l);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const g of Ol(e)) d[g] = e.get(g);
                d = {
                    anchorElement: Xr(f),
                    position: f.j(),
                    clearBoth: f.H,
                    locationType: f.eb,
                    placed: f.A,
                    placementProto: f.v ? f.v.toJSON() : null,
                    articleStructure: f.B ? f.B.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            il(14, [{
                placementIdentifiers: b
            }, a.v.C, c.ma])
        }
        return c
    }

    function CD(a, b) {
        var c = a.v.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.kb;
        c.numAutoAdsPlaced = b.Ba;
        c.hasAtfAd = b.Ya;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.v && (a = kC(a.l, a.v, {
            jc: -1,
            Db: -1,
            Hb: -1,
            ne: !0,
            Md: !0
        }), null != a.j ? (c.placementPositionDiffs = wC(a.j.value), b = vC(a.j.value), a = new Dz, a = ld(a, 2, Ez, b), c.placementPositionDiffsReport = Md(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new Dz, a = ed(a, 1, Ez, b), c.placementPositionDiffsReport = Md(a)))
    }

    function DD(a, b) {
        vD(a, {
            Ba: 0,
            kb: void 0,
            errors: [],
            Ra: [],
            exception: b,
            Ya: void 0,
            vb: void 0,
            wb: void 0,
            ma: void 0
        });
        wD(a, {
            Ba: 0,
            kb: void 0,
            errors: [],
            Ra: [],
            exception: b,
            Ya: void 0,
            vb: void 0,
            wb: void 0,
            ma: void 0
        })
    }

    function pD(a, b, c, d) {
        b = {
            r: b,
            pg_h: Q(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        Jr(a.B, Ar, b)
    }

    function qD(a) {
        let b = null;
        a.j.j() && null != ud(a.j.j(), 19) && (b = ud(a.j.j(), 19));
        return b
    }
    class jD {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = d;
            this.m = e;
            this.C = f;
            this.V = k || null;
            this.H = [];
            this.I = l;
            this.L = m;
            this.ua = g;
            this.ja = h;
            this.K = 0;
            this.aa = n ? n : {
                url: a.location.href,
                Qb: void 0
            };
            this.F = "n"
        }
        runAutoGames() {
            const a = J(this.j, ao, 32);
            a && this.ja.runAutoGames({
                win: this.l,
                webPropertyCode: this.A,
                kf: a
            })
        }
        Sa(a) {
            try {
                zD(this, a.j.Ba);
                const b = yD(this) || xD(this) ? yD(this) : void 0;
                So({
                    Xc: b
                }, this.l);
                AD(this);
                const c = BD(this, a, yD(this));
                Wc(this.j, Rn, 25) && F(J(this.j, Rn, 25), 1) && CD(this,
                    c);
                vD(this, c);
                wD(this, c);
                Tk(753, () => {
                    if (W(np) && null != this.v) {
                        var d = kC(this.l, this.v, {
                                jc: Aq(rp),
                                Db: Aq(qp),
                                Hb: Aq(op),
                                ne: !0,
                                Md: !1
                            }),
                            e = oe(c);
                        null != d.j ? (d = wC(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = uD(this, e);
                        Kr(this.B, zr, e)
                    }
                })()
            } catch (b) {
                DD(this, b)
            }
        }
        Ga(a) {
            zD(this, 0);
            DD(this, a)
        }
    };
    var ED = class extends M {
            constructor(a) {
                super(a)
            }
        },
        FD = Rd(ED);

    function GD(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? an(() => FD(c)) : Ym(null)
    };

    function HD(a) {
        this.j = a || {
            cookie: ""
        }
    }
    p = HD.prototype;
    p.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Sk, g = c.Dg || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ue);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    p.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Qa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    p.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            ue: 0,
            path: b,
            domain: c
        });
        return d
    };
    p.isEmpty = function() {
        return !this.j.cookie
    };
    p.Eb = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    p.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Qa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function ID(a, b = window) {
        if (F(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function JD(a) {
        return "null" !== a.origin
    }

    function KD(a, b, c) {
        b = F(b, 5) && JD(c) ? c.document.cookie : null;
        return null === b ? null : (new HD({
            cookie: b
        })).get(a) || ""
    };

    function LD(a, b) {
        return C(a, 5, b)
    }
    var MD = class extends M {
        constructor() {
            super()
        }
        j() {
            return F(this, 6)
        }
    };
    var PD = ({
        win: a,
        qc: b,
        ke: c = !1,
        me: d = !1
    }) => {
        if (!ND({
                win: a,
                qc: b,
                ke: c,
                me: d
            })) return OD(a, LD(new MD, !0));
        (b = Z(IC(), 24)) ? (b = LD(new MD, jz(b)), a = OD(a, b)) : a = new Zm(null, Error("tcunav"));
        return a
    };

    function ND({
        win: a,
        qc: b,
        ke: c,
        me: d
    }) {
        if (!(d = !d && nz(new rz(a)))) {
            if (c = !c) {
                if (b) {
                    a = GD(a);
                    if (null != a.j)
                        if ((a = a.j.value) && null != z(a, 1)) b: switch (a = z(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else Vk(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function OD(a, b) {
        return (a = ID(b, a)) ? Ym(a) : new Zm(null, Error("unav"))
    };
    var QD = class extends M {
        constructor(a) {
            super(a)
        }
    };
    class RD {
        constructor(a, b, c, d) {
            this.j = a;
            this.m = b;
            this.A = c;
            this.l = !1;
            this.v = d
        }
    };

    function sD(a, {
        win: b,
        webPropertyCode: c,
        fe: d,
        Pd: e
    }) {
        a = Mu(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: Md(d),
            serializedArticleStructures: e.map(g => Md(g))
        }));
        Qk.Aa(927, a)
    }
    var SD = class {
        constructor(a) {
            this.j = a
        }
    };

    function TD({
        win: a,
        webPropertyCode: b,
        Cb: c
    }) {
        if (gy(a.location, "google_auto_gallery")) {
            var d = new Ao;
            var e = new yo;
            e = C(e, 1, !0);
            d = jd(d, 3, e);
            sD(new SD(c), {
                win: a,
                webPropertyCode: b,
                fe: d,
                Pd: []
            })
        }
    };
    var UD = "a".charCodeAt(),
        VD = ne(ol),
        WD = ne(pl);

    function XD(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function YD(a) {
        return String.fromCharCode(UD + XD(a, 6)) + String.fromCharCode(UD + XD(a, 6))
    }

    function ZD(a) {
        let b = XD(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!XD(a, 1),
                e = XD(a, 16);
            if (d)
                for (d = XD(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function $D(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (XD(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function aE(a) {
        const b = XD(a, 16);
        return !0 === !!XD(a, 1) ? (a = ZD(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : $D(a, b)
    }
    class bE {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var dE = (a, b) => {
        try {
            var c = ic(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new bE(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = XD(d, 12);
            c.cmpVersion = XD(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = XD(d, 6);
            c.isServiceSpecific = !!XD(d, 1);
            c.useNonStandardStacks = !!XD(d, 1);
            c.specialFeatureOptins = cE($D(d, 12, WD), WD);
            c.purpose = {
                consents: cE($D(d, 24, VD), VD),
                legitimateInterests: cE($D(d, 24, VD), VD)
            };
            c.purposeOneTreatment = !!XD(d, 1);
            c.publisherCC = YD(d);
            c.vendor = {
                consents: cE(aE(d), b),
                legitimateInterests: cE(aE(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const cE = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var eE = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var fE = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var hE = Rd(class extends M {
            constructor(a) {
                super(a, -1, gE)
            }
        }),
        gE = [7];

    function iE(a) {
        return (a = jE(a)) ? J(a, fE, 4) : null
    }

    function jE(a) {
        if (a = (new HD(a)).get("FCCDCF", ""))
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        try {
            return b ? hE(b) : null
        } catch (c) {
            return null
        }
    };

    function kE(a) {
        a.__tcfapiPostMessageReady || lE(new mE(a))
    }

    function lE(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var mE = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };

    function nE(a) {
        var b = W(Dp);
        a.__uspapi || a.frames.__uspapiLocator || (a = new oE(a), pE(a), b && qE(a))
    }

    function pE(a) {
        !a.v || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", gz(a.j, "__uspapiLocator"), Fa("__uspapi", (...b) => rE(a, ...b)))
    }

    function qE(a) {
        !a.l || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", gz(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Fa("__tcfapi", (...b) => sE(a, ...b)), kE(a.j))
    }

    function rE(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.v
        }, !0)
    }

    function sE(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(tE(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(tE(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function tE(a, b, c) {
        if (!a.l) return null;
        b = dE(a.l, b);
        b.addtlConsent = null != a.m ? a.m : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class oE {
        constructor(a) {
            this.j = a;
            var b;
            this.v = (b = (b = jE(a.document)) ? J(b, eE, 5) || null : null) ? z(b, 2) : null;
            this.l = (b = iE(a.document)) && null != z(b, 1) ? z(b, 1) : null;
            this.m = (a = iE(a.document)) && null != z(a, 2) ? z(a, 2) : null
        }
    };
    const uE = a => {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    };
    var vE = (a, b) => {
        a = uE(a);
        b = uE(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var wE = Promise;
    class xE {
        constructor(a) {
            this.m = a
        }
        l(a, b, c) {
            this.m.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.m.then(c => c.j(a, b))
        }
    };
    class yE {
        constructor(a) {
            this.data = a
        }
    };

    function zE(a, b) {
        AE(a, b);
        return new BE(a)
    }
    class BE {
        constructor(a) {
            this.m = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            AE(d.port1, b);
            this.m.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new wE(c => {
                this.l(a, c, b)
            })
        }
    }

    function AE(a, b) {
        b && (a.onmessage = c => {
            b(new yE(c.data, zE(c.ports[0])))
        })
    };
    var EE = ({
        destination: a,
        Ca: b,
        origin: c,
        Va: d = "ZNWN1d",
        onMessage: e,
        Ae: f
    }) => CE({
        destination: a,
        Of: () => b.contentWindow,
        gg: DE(c),
        Va: d,
        onMessage: e,
        Ae: f
    });
    const CE = ({
            destination: a,
            Of: b,
            gg: c,
            Uk: d,
            Va: e,
            onMessage: f,
            Ae: g
        }) => {
            const h = Object.create(null);
            c.forEach(k => {
                h[k] = !0
            });
            return new xE(new wE((k, l) => {
                const m = n => {
                    n.source && n.source === b() && !0 === h[n.origin] && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(zE(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        DE = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var FE = class {
        constructor(a) {
            this.Wb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            kf: c
        }) {
            Qk.Aa(1116, Mu(12, a, this.Wb).then(d => {
                d.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: Md(c)
                })
            }))
        }
    };

    function GE(a, b, c, d, e, f, g, h = null, k) {
        try {
            var l = a.localStorage
        } catch (t) {
            l = null
        }
        if (l) {
            if (W(mp)) var m = null;
            else try {
                m = l.getItem("google_ama_config")
            } catch (t) {
                m = null
            }
            try {
                var n = m ? Oo(m) : null
            } catch (t) {
                n = null
            }
            m = n
        } else m = null;
        a: {
            if (d) try {
                var q = Oo(d);
                break a
            } catch (t) {
                yC(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            q = null
        }
        if (d = q) {
            if (e) {
                q = new Gn;
                jd(d, 3, q);
                m = d.j() && ud(d.j(), 13) ? ud(d.j(), 13) : 1;
                C(q, 1, Date.now() + 864E5 * m);
                q = Ld(d, !1);
                d.j() && (m = new Fn, n = d.j(), n = F(n, 23), m = C(m, 23, null == n ? void 0 : n), n = H(d.j(), 12, !1), m = C(m, 12, n), n = H(d.j(), 15, !1), m =
                    C(m, 15, n), jd(q, 15, m));
                m = id(q, vo, 1);
                for (n = 0; n < m.length; n++) C(m[n], 11, Ic);
                C(q, 22, void 0, !1);
                if (W(mp)) FC(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", Md(q))
                } catch (t) {
                    yC(a, {
                        lserr: 1
                    })
                }
            }
            e = EC(a, id(d, Qn, 7));
            a: {
                if (e && (q = z(e, 3), m = J(d, lo, 9), q && m)) {
                    b: {
                        m = id(m, jo, 1);
                        for (r of m)
                            if (z(r, 1) == q) {
                                var r = J(r, io, 2) || null;
                                break b
                            }
                        r = null
                    }
                    if (r) break a
                }
                r = J(d, io, 8) || new io
            }
            r = {
                ng: r
            };
            e && (r.R = e);
            e && CC(e, 3) && (r.zb = [1]);
            if (7 === c.google_pgb_reactive && (e = r.R, !e || !F(e, 8))) return !1;
            HC(a, 2) && (il(5, [d.toJSON()]), c = zC(c),
                f = new SD(f), g = new FE(g), e = r.R, c.google_package = e && z(e, 4) || "", iD(a, b, d, r, f, g, new tn(["google-auto-placed"], c), h, {
                    url: a.location.href,
                    Qb: k
                }));
            return !0
        }
        m && (yC(a, {
            cfg: 1,
            cl: 1
        }), FC(a));
        return !1
    };
    var IE = a => {
        const b = a.D;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!bg.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = HE(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = HE(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = HE(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = HE(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = HE(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = HE(a, b.google_color_line, c))
    };

    function HE(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function JE(a, b) {
        var c = Qk,
            d;
        var e;
        d = (e = (e = Dh()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new zh(d.left, d.top, d.width, d.height) : null) ? new kg(e.left, e.top) : (d = Gh()) && va(d.rootBounds) ? new kg(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new kg(0, 0),
                g = ug(b);
            var h = g ? xg(g) : window;
            if (Ob(h, "parent")) {
                do {
                    if (h == a) var k = Th(b);
                    else {
                        var l = Sh(b);
                        k = new kg(l.left,
                            l.top)
                    }
                    g = k;
                    f.x += g.x;
                    f.y += g.y
                } while (h && h != a && h != h.parent && (b = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return c.ha(888, m), new kg(-12245933, -12245933)
        }
    };
    var KE = class extends M {
        constructor(a) {
            super(a)
        }
        j() {
            return H(this, 6)
        }
        v() {
            return H(this, 7)
        }
    };
    var ME = class extends M {
            constructor(a) {
                super(a, -1, LE)
            }
            j() {
                return ad(this, 1, Rc)
            }
        },
        LE = [1];
    var OE = class extends M {
            constructor(a) {
                super(a, -1, NE)
            }
        },
        NE = [19],
        PE = [13, 14];

    function QE(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var RE = class {
            constructor() {
                this.j = null;
                this.l = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                const a = b => this.j ? Vg(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[4] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        SE;
    let TE = void 0;

    function UE() {
        Qd(TE, Od);
        return TE
    };

    function VE(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : ke(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function WE(a = u) {
        return a.ggeac || (a.ggeac = {})
    };

    function XE(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function YE(a, b) {
        a.j = Mk(14, b, () => {})
    }
    class ZE {
        constructor() {
            this.j = () => {}
        }
    };

    function $E(a = WE()) {
        Nk(P(Ok), a);
        aF(a);
        YE(P(ZE), a);
        P(zq).v()
    }

    function aF(a) {
        const b = P(zq);
        b.j = (c, d) => Mk(5, a, () => !1)(c, d, 1);
        b.l = (c, d) => Mk(6, a, () => 0)(c, d, 1);
        b.m = (c, d) => Mk(7, a, () => "")(c, d, 1);
        b.A = (c, d) => Mk(8, a, () => [])(c, d, 1);
        b.v = () => {
            Mk(15, a, () => {})(1)
        }
    };

    function bF(a) {
        var b = P(Ok).l(a);
        a = cD(P(gD), a, b);
        kl.Aa(1085, a)
    }
    var cF = a => {
        const b = P(Ok).j();
        a = GC(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    };

    function dF(a, b, c) {
        return c ? KD(b, c, a.j) : null
    }

    function eF(a, b, c, d) {
        if (d) {
            var e = {
                ue: Math.max(z(c, 2) - Date.now() / 1E3, 0),
                path: z(c, 3),
                domain: z(c, 4),
                Dg: !1
            };
            a = a.j;
            F(d, 5) && JD(a) && (new HD(a.document)).set(b, z(c, 1), e)
        }
    }

    function fF(a, b, c) {
        if (c && KD(b, c, a.j))
            for (const e of gF(a.j.location.hostname)) {
                var d = a.j;
                F(c, 5) && JD(d) && (new HD(d.document)).remove(b, "/", e)
            }
    }
    var hF = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function gF(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function iF(a, b, c) {
        return Tk(629, function(d) {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = Uf(Tf(Sf(Rf(new Vf, g), h), k), e);
                switch (d) {
                    case 1:
                        eF(c,
                            "__gads", e, b);
                        break;
                    case 2:
                        eF(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function jF(a, b, c) {
        let d;
        if (0 === a.l) {
            if (dF(a, "__gads", b)) var e = !0;
            else if (e = a.j, F(b, 5) && JD(e) && (new HD(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === KD("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                F(b, 5) && JD(f) && (new HD(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = iF(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function kF(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = dF(b, "__gads", a);
        e && (d.cookie = e);
        (e = dF(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e);
        const f = ze(Ce(Vd(Wd("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = jF(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            Pg(c.document, f)
        }) : Promise.resolve()
    }

    function lF(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1);
        const d = new hF(b);
        c = b.google_ad_client || c;
        const e = b._gfp_p_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
        e ? Promise.resolve() : kF(a, d, b, c);
        a = dF(d, "__gads", a) || "";
        SE || (SE = new RE);
        b = SE;
        QE(b, a);
        a = b.l;
        P(ZE).j(a);
        bF(20);
        bF(17)
    };

    function mF(a) {
        W(Sp) && (a.easpi = W(Sp), W(uq) && (a.easpa = !0), a.asntp = 0, a.asntpv = 0, a.asntpl = 0, a.asntpm = 0, a.asntpc = 1E3, a.asna = 5, a.asnd = 5, a.asnp = 5, a.asns = 5, W(vq) || (a.asmat = Aq(Up)), a.asptt = -1, a.asro = W(Wp), W(Xp) || (a.asrc = !1), W(Qp) && (a.asbu = !0), W(vq) && (a.aseb = !0, a.ascet = !0, a.asla = .4, W(uq) && (a.asaa = -1)), W(Zp) || (a.asupm = !0), W(Tp) && (a.easppi = !0))
    };

    function nF(a, b) {
        return Pv({
            J: a,
            kd: 3E3,
            md: a.innerWidth > yl ? 650 : 0,
            sa: Pk,
            Sd: b
        })
    };
    var oF = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= zl(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var pF = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= zl(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var rF = (a, b, c, d = !1) => 0 == qF(a, b, c, d),
        qF = (a, b, c, d = !1) => {
            let e = 0;
            try {
                e |= a != a.top ? 512 : 0;
                e |= sF(a, d);
                e |= zl(a, 2500);
                if (W(mq)) {
                    const h = Q(a).clientHeight;
                    e |= h ? 320 > h ? 2097152 : 0 : 1073741824
                }
                e |= Al(a);
                var f;
                if (f = 0 < c) {
                    var g = Nz(b, c);
                    f = !(g && 1 > g.length)
                }
                f && (e |= 134217728)
            } catch (h) {
                e |= 32
            }
            return e
        },
        sF = (a, b = !1) => {
            var c;
            (c = !a.navigator) || (b && (b = a.navigator, b = "brave" in b && "isBrave" in b.brave || !1), c = b);
            return c || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        };

    function tF(a, b, c, d = null) {
        if (!W(pq)) return 32;
        let e = a != a.top ? 512 : 0;
        Qv(a.navigator ? .userAgent) && (e |= 1048576);
        const f = a.innerWidth;
        1200 > f && (e |= 65536);
        const g = a.innerHeight;
        650 > g && (e |= 2097152);
        d && 0 === e && (d = 3 === d ? "left" : "right", (b = uF({
            J: a,
            re: b,
            Ne: 1,
            position: d,
            O: f,
            U: g,
            Ka: new Set,
            minWidth: 120,
            minHeight: 500
        })) ? c && vl(a).sideRailPlasParam.set(d, `${b.width}x${b.height}_${String(d).charAt(0)}`) : e |= 16);
        return e
    }

    function vF(a) {
        if (W(Jp)) return [...vl(a).sideRailPlasParam.values()].join("|");
        if (0 !== tF(a, !0, !1)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = uF({
                J: a,
                re: !0,
                Ne: 1,
                position: e,
                O: c,
                U: d,
                Ka: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function wF(a, b) {
        return null !== Gg(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function xF(a, b) {
        return Gg(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function yF(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function zF(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function AF(a) {
        return `${a.position}-${zF(a.O)}x${zF(a.U)}-${zF(a.scrollY+a.lb)}Y`
    }

    function BF(a) {
        return `f-${AF({position:a.position,lb:a.lb,scrollY:0,O:a.O,U:a.U})}`
    }

    function CF(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function DF(a, b, c) {
        const d = vl(c.J).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.U),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.O);
                for (var k = .3 * c.O; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = BF({
                            position: "left",
                            lb: f,
                            O: c.O,
                            U: c.U
                        });
                        b.set(l, CF(b.get(l), h))
                    }
                    if (h < c.O && e > c.O - k) {
                        l = BF({
                            position: "right",
                            lb: f,
                            O: c.O,
                            U: c.U
                        });
                        const m = c.O - e;
                        b.set(l, CF(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function uF(a) {
        if (1200 > a.O || 650 > a.U) return null;
        var b = vl(a.J).sideRailAvailableSpace;
        if (!a.re) {
            var c = {
                    J: a.J,
                    O: a.O,
                    U: a.U,
                    Ka: a.Ka
                },
                d = `f-${zF(c.O)}x${zF(c.U)}`;
            if (!b.has(d)) {
                b.set(d, 0);
                vl(c.J).sideRailProcessedFixedElements.clear();
                d = new Set([...Array.from(c.J.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...c.Ka]);
                for (var e of yF(c.J)) wF(e, d) || DF(e, b, c)
            }
        }
        c = [];
        d = .9 * a.U;
        var f = Gl(a.J),
            g = e = (a.U - d) / 2,
            h = d / 7;
        for (var k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var q = a.position,
                    r = b,
                    t = {
                        J: a.J,
                        O: a.O,
                        U: a.U,
                        Ka: a.Ka
                    };
                const x = BF({
                        position: q,
                        lb: n,
                        O: t.O,
                        U: t.U
                    }),
                    B = AF({
                        position: q,
                        lb: n,
                        scrollY: f,
                        O: t.O,
                        U: t.U
                    });
                if (r.has(B)) {
                    n = CF(r.get(x), r.get(B));
                    break a
                }
                const G = "left" === q ? 20 : t.O - 20;
                let D = G;q = .3 * t.O / 5 * ("left" === q ? 1 : -1);
                for (let E = 0; 6 > E; E++) {
                    const I = bw(t.J.document, Math.round(D), Math.round(n));
                    var A = wF(I, t.Ka);
                    const S = xF(I, t.J);
                    if (!A && null !== S) {
                        DF(S, r, t);
                        r.delete(B);
                        break
                    }
                    A || (A = I.offsetHeight >= .25 * t.U, A = I.offsetWidth >= .9 * t.O && A);
                    if (A) r.set(B, Math.round(Math.abs(D - G) + 20));
                    else if (D !== G) D -=
                        q, q /= 2;
                    else {
                        r.set(B, 0);
                        break
                    }
                    D += q
                }
                n = CF(r.get(x), r.get(B))
            }
            m.call(l, n);
            g += h
        }
        b = a.Ne;
        f = a.position;
        d = Math.round(d / 8);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: f,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) * d),
                    offsetY: e + h[k] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                m = n;
                break
            } else 1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const EF = {
        [27]: 512,
        [26]: 128
    };
    var FF = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === nF(a, c);
                case 3:
                case 4:
                    return 0 === tF(a, !1, !1, c);
                case 8:
                    return rF(a, d, "on" === b.google_adtest || gy(a.location, "google_ia_debug") ? -1 : Aq(Np), W(Ap));
                case 9:
                    return b = !("on" === b.google_adtest || gy(a.location, "google_scr_debug")), !Oz(a, b, d);
                case 30:
                    return 0 == CB(a);
                case 26:
                    return 0 == pF(a);
                case 27:
                    return 0 === oF(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        GF = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return nF(a, c);
                case 3:
                case 4:
                    return tF(a,
                        W(Kp), W(Jp), c);
                case 8:
                    return qF(a, d, "on" === b.google_adtest || gy(a.location, "google_ia_debug") ? -1 : Aq(Np), W(Ap));
                case 9:
                    return Oz(a, !("on" === b.google_adtest || gy(a.location, "google_scr_debug")), d);
                case 16:
                    return Vq(b, a) ? 0 : 8388608;
                case 30:
                    return CB(a);
                case 26:
                    return pF(a);
                case 27:
                    return oF(a);
                default:
                    return 32
            }
        },
        HF = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!le(d)) return !1;
            a = Og(a);
            if (!a || !FF(a, b, d, c)) return !1;
            b = vl(a);
            if (El(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        JF =
        a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && IF(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b
        },
        KF = a => {
            if (!a.hash) return null;
            let b = null;
            Tg(dy, c => {
                !b && gy(a, c) && (b = ey[c])
            });
            return b
        },
        MF = (a, b) => {
            const c = vl(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && Tg(fy, d => {
                !c.debugCardRequested && "number" === typeof d && jy(d, a.location) && (c.debugCardRequested = !0, LF(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        OF = (a, b, c) => {
            if (!b) return null;
            const d = vl(b);
            let e = 0;
            Tg(me, f => {
                const g =
                    EF[f];
                g && 0 === NF(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        PF = (a, b, c) => {
            const d = [];
            Tg(me, e => {
                if (W(pq) || 3 !== e && 4 !== e) {
                    var f = NF(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        QF = a => {
            const b = [],
                c = {};
            Tg(a, (d, e) => {
                if ((e = tl[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        RF = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        NF = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            var f = vl(b),
                g = El(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            Tg(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            if (h && KF(b.location) !== c) {
                e |= 128;
                f = W(yp) && (2 == c || 1 == c);
                g = W(zp) && (3 == c || 4 == c);
                const k = W(xp) && 8 == c;
                if (f || g || k) return e
            }
            return e | GF(b, a, c, d)
        },
        SF = (a, b) => {
            if (a) {
                var c = vl(a),
                    d = {};
                Tg(b, (e, f) => {
                    (f = tl[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                Tg(me, e => {
                    d[ul[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        TF = (a, b, c) => {
            b = Qk.ta(b, c);
            return Mu(1,
                window, ze(a, Bq(ep) ? {
                    bust: Bq(ep)
                } : {})).then(b)
        },
        LF = (a, b, c) => {
            c = Qk.ta(212, c);
            Mu(3, a, b).then(c)
        },
        UF = a => {
            a = a.google_reactive_ad_format;
            return le(a) ? "" + a : null
        },
        IF = a => !!UF(a) || null != a.google_pgb_reactive,
        VF = a => {
            a = UF(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a
        };

    function WF(a) {
        return "number" === typeof a.google_reactive_sra_index
    }

    function XF(a, b, c) {
        const d = b.J || b.pubWin,
            e = b.D;
        e.google_reactive_plat = PF(d, e, c);
        var f = QF(a);
        f && (e.google_reactive_plaf = f);
        (f = RF(a)) && (e.google_reactive_fba = f);
        (f = vF(d)) && (e.google_plas = f);
        YF(a, e);
        f = KF(b.pubWin.location);
        ZF(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        mF(e);
        W(Mp) && (e.fsapi = !0);
        Hh() || Kq(b.pubWin.top);
        f = Xk(b.pubWin, "rsrai", Tk(429, (g, h) => $F(b, d, e.google_ad_client, a, g, h, c)), Tk(430, (g, h) => Jl(b.pubWin, "431", Pk, h)));
        b.m.push(f);
        vl(d).wasReactiveTagRequestSent = !0;
        aG(b,
            a, c)
    }

    function aG(a, b, c) {
        const d = a.D,
            e = va(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Xk(a.pubWin, "apcnf", Tk(353, (f, g) => {
            var h = a.pubWin,
                k = d.google_ad_client,
                l = a.ba.Cb,
                m = a.ba.Wb,
                n = a.ba.Qb;
            return oh(g.origin) ? GE(h, k, e, f.config, c, l, m, null, n) : !1
        }), Tk(353, (f, g) => Jl(a.pubWin, "353", Pk, g)));
        a.m.push(b)
    }

    function $F(a, b, c, d, e, f, g) {
        if (!oh(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!HC(b, 1)) return !0;
        f && il(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = vl(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const q = f[n],
                r = q.adFormat;
            l && q.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
            if (!q.noCreative) {
                q.google_reactive_sra_index = n;
                if (9 === r && e) {
                    q.pubVars = Object.assign(q.pubVars || {}, bG(d, q));
                    const t = new Pz;
                    if (Jz(t, q)) {
                        m = t;
                        continue
                    }
                }
                h.push(q);
                k.push(r)
            }
        }
        h.length && (Uk("rasra::pm", {
            rt: k.join(","),
            c
        }, .1), TF(a.ba.Ie, 522, n => {
            cG(h, b, c, n, d, g)
        }));
        e && GE(b, c, d, e, g, a.ba.Cb, a.ba.Wb, m);
        return !0
    }

    function bG(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        va(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function cG(a, b, c, d, e, f) {
        const g = [];
        for (let h = 0; h < a.length; h++) {
            const k = a[h],
                l = k.adFormat,
                m = k.adKey,
                n = d.configProcessorForAdFormat(l);
            l && n && m ? (k.pubVars = bG(e, k), delete k.google_reactive_sra_index, g.push(l), Sk(466, () => n.verifyAndProcessConfig(b, k, f))) : Uk("rasra::ivc", {
                af: l,
                ak: String(m),
                c
            }, .1)
        }
        Uk("rasra::pr", {
            rt: g.join(","),
            c
        }, .1)
    }

    function YF(a, b) {
        const c = [];
        let d = !1;
        Tg(tl, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && "+" !== c[e] || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function ZF(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if ("on" === a.google_adtest || "on" === d ? .google_adtest || b) c.google_adtest = "on"
        }
    };
    Nb("script");
    var dG = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function eG(a, b) {
        if (!Vq(b, a)) return () => {};
        a = fG(b, a);
        if (!a) return () => {};
        const c = SC();
        b = oe(b);
        const d = {
            Na: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Db(c, d)
    }

    function fG(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !$q.test(a.className);) a = a.parentElement;
        return a
    }

    function gG(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = bh(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function hG(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function iG(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = SC();
            for (const d of a)
                if (d.Na.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.Na.offsetWidth, Sk(467, () => {
                    var e = d.Na,
                        f = d.D;
                    const g = gG(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = gG(e, f);
                    !h && g && 1 == e.childNodes.length ? (hG(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", b.adsbygoogle || (b.adsbygoogle = [], Pg(b.document, O `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)),
                        b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h != g && (hG(g, !1), hG(h, !0)) : Uk("auto_size_refresh", {
                        context: "showOrHideElm",
                        url: b.location.href,
                        nodes: e.childNodes.length
                    })
                })
        }
    }
    var jG = class extends Ak {
        constructor() {
            super(...arguments);
            this.j = null
        }
        init(a) {
            const b = IC();
            if (!Z(b, 27, !1)) {
                NC(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => iG(this, a);
                ie(a, "resize", c);
                Bk(this, () => {
                    je(a, "resize", c)
                })
            }
        }
    };
    var kG = class {
        constructor(a, b, c) {
            this.J = a;
            this.Na = b;
            this.D = c;
            this.j = null;
            this.l = this.m = 0
        }
        v() {
            10 <= ++this.m && u.clearInterval(this.j);
            var a = Yq(this.J, this.Na);
            a = Zq(this.J, this.Na, a);
            const b = Uq(this.Na, this.J);
            null != b && 0 === b.x || u.clearInterval(this.j);
            a && (this.l++, Uk("rspv:al", {
                aligns: this.l,
                attempt: this.m,
                client: this.D.google_ad_client,
                eoffs: String(null != b ? b.x : null),
                eids: cF(this.D),
                slot: this.D.google_ad_slot,
                url: this.D.google_page_url
            }, .01))
        }
    };
    var Vi = {
        Ek: 0,
        Ak: 1,
        Bk: 9,
        yk: 2,
        zk: 3,
        Dk: 5,
        Ck: 7
    };
    var lG = class {
        constructor(a) {
            this.J = a.J;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.la = a.la;
            this.ba = a.ba;
            this.Ma = a.Ma;
            this.Y = a.Y;
            this.C = -1;
            this.j = 0;
            this.l = this.H = null;
            this.G = this.F = 0;
            this.m = [];
            this.yb = this.B = "";
            this.v = this.A = null
        }
    };

    function mG(a, b) {
        var c = LD(a, jz(b));
        c = C(c, 2, b.tcString);
        c = C(c, 4, b.addtlConsent || "");
        C(c, 7, b.internalErrorState);
        c = !lz(b);
        C(a, 9, c);
        null != b.gdprApplies && C(a, 3, b.gdprApplies)
    }

    function nG(a) {
        const b = new rz(a.pubWin, {
            Hg: -1,
            rf: !0
        });
        if (!nz(b)) return Promise.resolve(null);
        const c = IC(),
            d = Z(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = Z(c, 25, []);
            g.push(f);
            NC(c, 25, g)
        });
        d || null === d || (NC(c, 24, null), b.addEventListener(f => {
            if (iz(f)) {
                NC(c, 24, f);
                mG(a.l, f);
                for (const g of Z(c, 25, [])) g.resolve(f);
                NC(c, 25, [])
            } else NC(c, 24, null)
        }));
        return e
    };

    function oG(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var qG = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => pG(d));
        return Xk(a, "adpnt", (e, f) => {
            if (Fl(f, c.contentWindow)) {
                e = Il(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e);
                    a.googletag ? ? (a.googletag = {
                        cmd: []
                    });
                    var g = a.googletag.queryIds ? ? [];
                    g.push(e);
                    500 < g.length && g.shift();
                    a.googletag.queryIds = g
                } catch {}
                d.dataset.adStatus && Uk("adsense_late_fill", {
                    status: d.dataset.adStatus
                });
                d.dataset.adStatus = "filled";
                g = !0
            } else g = !1;
            return g
        })
    };

    function pG(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function rG(a, b, c) {
        try {
            if (!oh(c.origin) || a.j && !Fl(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Ga[d]) && a.L.Kb(168, () => {
            e.call(a, b, c)
        })
    }
    class sG extends Ak {
        constructor(a, b) {
            var c = Qk,
                d = Pk;
            super();
            this.m = a;
            this.j = b;
            this.L = c;
            this.sa = d;
            this.Ga = {};
            this.Ye = this.L.ta(168, (e, f) => void rG(this, e, f));
            this.bf = this.L.ta(169, (e, f) => Jl(this.m, "ras::xsf", this.sa, f));
            this.aa = [];
            this.ja(this.Ga);
            this.aa.push(Wk(this.m, "sth", this.Ye, this.bf))
        }
        l() {
            for (const a of this.aa) a();
            this.aa.length = 0;
            super.l()
        }
    };
    class tG extends sG {
        constructor(a, b = null) {
            super(a, b);
            this.m = a
        }
    };
    var uG = class extends tG {
        constructor(a, b) {
            super(a, b);
            this.v = () => {};
            this.j && ie(this.j, "load", this.v)
        }
        l() {
            this.j && je(this.j, "load", this.v);
            super.l();
            this.j = null
        }
        ja(a) {
            a["adsense-labs"] = b => {
                if (b = Il(b).settings) try {
                    var c = new Qf(JSON.parse(b));
                    if (null != z(c, 1)) {
                        var d = this.m,
                            e = L(c, 1) || "";
                        if (W(bp) ? null != PD({
                                win: d,
                                qc: UE()
                            }).j : 1) {
                            if (W(bp)) {
                                const g = PD({
                                    win: d,
                                    qc: UE()
                                });
                                var f = null != g.j ? VE(g.j.value) : {}
                            } else f = VE(d.localStorage);
                            null !== c && (f[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (g) {}
                        }
                    }
                } catch (g) {}
            }
        }
    };

    function vG(a) {
        a.A = a.C;
        a.G.style.transition = "height 500ms";
        a.v.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        wG(a)
    }

    function xG(a, b) {
        a.j.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function wG(a) {
        const b = `rect(0px, ${a.j.width}px, ${a.A}px, 0px)`;
        a.j.style.clip = b;
        a.v.style.clip = b;
        a.j.setAttribute("height", a.A);
        a.j.style.height = a.A + "px";
        a.v.setAttribute("height", a.A);
        a.v.style.height = a.A + "px";
        a.G.style.height = a.A + "px"
    }

    function yG(a, b) {
        b = $g(b.r_nh);
        a.C = null == b ? 0 : b;
        if (0 >= a.C) return "1";
        a.I = Th(a.G).y;
        a.H = Gl(a.m);
        if (a.I + a.A < a.H) return "2";
        if (a.I > Bl(a.m) - a.m.innerHeight) return "3";
        b = a.H;
        a.j.setAttribute("height", a.C);
        a.j.style.height = a.C + "px";
        a.v.style.overflow = "hidden";
        a.G.style.position = "relative";
        a.G.style.transition = "height 100ms";
        a.v.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.m.innerHeight - a.I, a.A);
        Nh(a.v, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
        Nh(a.j, {
            clip: b
        });
        Nh(a.v, {
            clip: b
        });
        return "0"
    }

    function zG(a, b = {}) {
        a.V && (b.eid = a.V);
        b.qid = a.Sa;
        Uk("eoscrl", b, nl(String(a.Rb)))
    }
    class AG extends tG {
        constructor(a, b) {
            super(a.J, b);
            this.v = a.Y;
            this.G = this.v.parentElement && this.v.parentElement.classList.contains("adsbygoogle") ? this.v.parentElement : this.v;
            this.A = parseInt(this.v.style.height, 10);
            this.V = null;
            this.Sb = this.Tb = !1;
            this.Sa = "";
            this.ua = this.H = this.C = 0;
            this.Ze = this.A / 5;
            this.I = Th(this.G).y;
            this.Rb = null;
            this.Xe = ee(Tk(651, () => {
                this.I = Th(this.G).y;
                var c = this.H;
                this.H = Gl(this.m);
                this.A < this.C ? (c = this.H - c, 0 < c && (this.ua += c, this.ua >= this.Ze ? (vG(this), xG(this, this.C)) : (this.A = Math.min(this.C,
                    this.A + c), xG(this, c), wG(this)))) : je(this.m, "scroll", this.K)
            }), this);
            this.K = () => {
                var c = this.Xe;
                bg.requestAnimationFrame ? bg.requestAnimationFrame(c) : c()
            }
        }
        ja(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Il(b);
                this.V = b.i_expid;
                this.Sa = b.qid;
                this.Rb = b.gen204_fraction;
                this.Tb || (this.Tb = !0, b = yG(this, b), "0" === b && ie(this.m, "scroll", this.K, fe), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"), zG(this, {
                    err: b
                }))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Sb || (this.Sb = !0, vG(this), je(this.m, "scroll", this.K))
            }
        }
        l() {
            this.K && je(this.m, "scroll", this.K, fe);
            super.l()
        }
    };

    function BG(a) {
        const b = a.I.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.m.innerHeight) && !c
    }
    class CG extends Ak {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.A = b;
            this.I = c;
            this.C = 0;
            this.v = BG(this);
            this.H = de(this.G, this);
            this.j = Tk(433, () => {
                var d = this.H;
                bg.requestAnimationFrame ? bg.requestAnimationFrame(d) : d()
            });
            ie(this.m, "scroll", this.j, fe)
        }
        G() {
            const a = BG(this);
            if (a && !this.v) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (Yk(c, "ig", b, "*", 2), 10 <= ++this.C && this.j && je(this.m, "scroll", this.j, fe))
            }
            this.v = a
        }
    };

    function DG(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function EG(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function FG(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function GG(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.vd + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Nh(a, "transition", b.join(","))
    }
    var HG = be(function() {
        if (Qb) return !0;
        var a = zg(document, "DIV"),
            b = Ub ? "-webkit" : Tb ? "-moz" : Qb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = hf("div", {
            style: c
        });
        eg(a, b);
        a = a.firstChild;
        b = a.style[qg("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Oh(a, "transition")] || "")
    });

    function IG(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function JG(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function KG(a, b) {
        0 > a.m.indexOf(b) && (a.m = b + a.m)
    }

    function LG(a, b, c, d) {
        return "" != a.m || b ? null : "" == a.j.replace(MG, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function NG(a) {
        var b = LG(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var OG = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.m = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.m].join("|")
        }
    };

    function PG(a) {
        let b = a.aa;
        a.H = function() {};
        QG(a, a.F, b);
        let c = a.F.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Rg(c, b)
            } catch (g) {
                KG(a.j, "c")
            }
            const f = RG(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.V = !0);
            if (d && !f && SG(e)) {
                JG(a.j, "l");
                a.I = c;
                break
            }
            d = d && f;
            if (e && TG(a, e)) break;
            c.parentNode && "#document-fragment" === c.parentNode.nodeName && c.parentNode.toString && "[object ShadowRoot]" ===
                c.parentNode.toString() ? c = c.parentNode.host : c = c.parentElement;
            if (!c) {
                if (b === a.Sb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Lg(b)) {
                        JG(a.j, "c");
                        break
                    }
                } catch (g) {
                    JG(a.j, "c");
                    break
                }
            }
        }
        a.G && a.v && UG(a);
        return a.j
    }

    function VG(a) {
        function b() {
            WG(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let n = 0; n < m.length; n++) Nh(h, m[n], "0px")
                };
                l(XG);
                l(YG)
            }
        }
        const c = a.F;
        c.style.overflow = a.Rb ? "visible" : "hidden";
        a.G && (a.I ? (GG(c, ZG), GG(a.I, ZG)) : GG(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.L && (c.style.opacity = a.L);
        const d = null != a.C && null != a.m && (a.ua || a.m > a.C) ? a.m : null,
            e = null != a.B && null != a.l && (a.ua || a.l > a.B) ? a.l : null;
        if (a.K) {
            const l = a.K.length;
            for (let m = 0; m < l; m++) WG(a.K[m], d, e)
        }
        const f = a.m,
            g = a.l,
            h = a.I,
            k = a.V;
        a.G ? u.setTimeout(b, 1E3) : b()
    }

    function $G(a) {
        if (a.v && !a.Sa || null == a.m && null == a.l && null == a.L && a.v) return a.j;
        var b = a.v;
        a.v = !1;
        PG(a);
        a.v = b;
        if (!b || null != a.ja && !LG(a.j, a.ja, a.m, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.C = null, a.B = null);
        if (null == a.C && null !== a.m || null == a.B && null !== a.l) a.G = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.m = "";
        VG(a);
        return PG(a)
    }

    function TG(a, b) {
        let c = !1;
        "none" == b.display && (JG(a.j, "n"), a.v && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || JG(a.j, "v");
        "hidden" == b.overflow && JG(a.j, "o");
        "absolute" == b.position ? (JG(a.j, "a"), c = !0) : "fixed" == b.position && (JG(a.j, "f"), c = !0);
        return c
    }

    function QG(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = aH(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && IG(a.j, 0, "o"), d & 4 && IG(a.j, 1, "o"));
        return !(d & 1)
    }

    function RG(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (A) {
            KG(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = $g(f),
            h = c.getAttribute("height"),
            k = $g(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = QG(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var q = e && e.width,
            r = e && e.height,
            t = bh(m) == a.C && bh(n) == a.B;
        m = t ? m : q;
        r = t ? n : r;
        q = bh(m);
        t = bh(r);
        g = null !== a.C && (null !== q && a.C >= q || null !== g && a.C >= g);
        t = null !== a.B && (null !== t && a.B >= t || null !== k && a.B >= k);
        k = !b && SG(d);
        t = b || t || k || !(f || m || d && (!bH(String(d.minWidth)) || !cH(String(d.maxWidth))));
        l = b || g || k || l || !(h || r || d && (!bH(String(d.minHeight)) || !cH(String(d.maxHeight))));
        dH(a, 0, t, c, "width", f, a.C, a.m);
        eH(a, 0, "d", t, e, d, "width", m, a.C, a.m);
        eH(a, 0, "m", t, e, d, "minWidth", e && e.minWidth, a.C, a.m);
        eH(a, 0, "M", t, e, d, "maxWidth", e && e.maxWidth, a.C, a.m);
        a.Tb ? (c = /^html|body$/i.test(c.nodeName), f = bh(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.v && !c && h && (e.setProperty("height", "auto", "important"), d && !bH(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !cH(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (dH(a, 1, l, c, "height", h, a.B, a.l), eH(a, 1, "d", l, e, d, "height", r, a.B, a.l), eH(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.B, a.l), eH(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.B, a.l));
        return b
    }

    function UG(a) {
        function b() {
            if (0 < c) {
                var l = Rg(e, d) || {};
                const m = bh(l.width);
                l = bh(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else u.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.aa,
            e = a.F,
            f = a.m,
            g = a.l,
            h = a.H;
        let k;
        u.setTimeout(function() {
            k = u.setInterval(b, 16)
        }, 990)
    }

    function aH(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Rg(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.A.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.A.boundingClientRect.left ? 2 : 0) | (c.bottom > a.A.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function dH(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = $g(f);
                null == f && (KG(a.j, "n"), IG(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.v)
                        if (a.G) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.H;
                            a.H = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else IG(a.j, b, "d")
        }
    }

    function eH(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? bH(f) : cH(f)) || (f = bh(f), null == f ? JG(a.j, "p") : null != k && JG(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? bH(h) : cH(h)) return;
                h = bh(h);
                null == h && (KG(a.j, "p"), IG(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.v)
                        if (a.G) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.H;
                            a.H = function(q, r) {
                                q == b && (e[g] = m - r + "px");
                                n && n(q, r)
                            }
                        } else e[g] = l + "px"
                } else IG(a.j, b, c)
        }
    }
    var jH = class {
        constructor(a, b, c, d, e, f, g) {
            this.Sb = a;
            this.K = c;
            this.F = b;
            this.aa = (a = this.F.ownerDocument) && (a.defaultView || a.parentWindow);
            this.A = new fH(this.F);
            this.v = g;
            this.Sa = gH(this.A, d.Cd, d.height, d.Me);
            this.C = this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.right - this.A.boundingClientRect.left : null : e;
            this.B = this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.bottom - this.A.boundingClientRect.top : null : f;
            this.m = hH(d.width);
            this.l = hH(d.height);
            this.L = this.v ? hH(d.opacity) : null;
            this.ja =
                d.check;
            this.G = "animate" == d.Cd && !iH(this.A, this.l, this.Ga) && HG();
            this.Rb = !!d.Ld;
            this.j = new OG;
            iH(this.A, this.l, this.Ga) && JG(this.j, "r");
            e = this.A;
            e.j && e.l >= e.m && JG(this.j, "b");
            this.I = this.H = null;
            this.V = !1;
            this.ua = !!d.vg;
            this.Tb = !!d.xg;
            this.Ga = !!d.Me
        }
    };

    function iH(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.v) && (c ? (b = a.l + Math.min(b, hH(a.getHeight())), a = a.j && b >= a.m) : a = a.j && a.l >= a.m, d = a);
        return d
    }
    var fH = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Og(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || u;
            this.m = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && DG(b);
            this.v = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.v
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function gH(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return iH(a, c, d)
        }
    }

    function SG(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function kH(a, b, c, d) {
        return $G(new jH(a, b, d, c, null, null, !0))
    }
    var lH = new OG("s", ""),
        MG = RegExp("[lonvafrbpEe]", "g");

    function cH(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function bH(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function WG(a, b, c) {
        null !== b && null !== $g(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== $g(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var XG = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        YG = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let mH = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        nH = XG;
    for (let a = 0; a < nH.length; a++) mH += ", " + nH[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    nH = YG;
    for (let a = 0; a < nH.length; a++) mH += ", " + nH[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var ZG = mH;

    function hH(a) {
        return "string" === typeof a ? $g(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function oH(a, b, c) {
        const d = {
            scrl: Gl(a.m || window),
            adk: a.C,
            adf: a.A,
            fmt: a.v
        };
        b && (d.str = iH(b, $g(c.r_nh), ah(c.r_cab)), d.ad_y = b.l, d.vph = b.m);
        Tg(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function pH(a, b, c) {
        const d = nl(String(b.gen204_fraction));
        b = oH(a, c, b);
        b.url = a.m.document.URL;
        Uk("resize", b, d)
    }
    var qH = class extends tG {
        constructor(a, b, c) {
            super(a, b);
            this.C = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.v = String(c.google_ad_format || "")
        }
        ja(a) {
            a["resize-me"] = (b, c) => {
                b = Il(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = $g(b.r_nw),
                        f = $g(b.r_nh),
                        g = $g(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = g,
                            l = ah(b.r_ao),
                            m = ah(b.r_ifr),
                            n = ah(b.r_cab);
                        const r = window;
                        if (this.j && r)
                            if ("no_rsz" === h) b.err = "7", pH(this, b, null), f = !0;
                            else if (g = new fH(this.j), g.j) {
                            var q =
                                g.getWidth();
                            null != q && (b.w = q);
                            q = g.getHeight();
                            null != q && (b.h = q);
                            if (gH(g, h, f, n)) {
                                const t = this.j.ownerDocument.getElementById(this.j.id + "_host");
                                q = t || this.j;
                                d = kH(r, q, {
                                    width: e,
                                    height: f,
                                    opacity: k,
                                    check: d,
                                    Cd: h,
                                    Ld: l,
                                    vg: m,
                                    Me: n
                                }, t ? [this.j] : null);
                                b.r_cui && ah(b.r_cui.toString()) && N(q, {
                                    height: (null === f ? 0 : f - 48) + "px",
                                    top: "24px"
                                });
                                null != e && (b.nw = e);
                                null != f && (b.nh = f);
                                b.rsz = d.toString();
                                b.abl = NG(d);
                                b.frsz = ("force" === h).toString();
                                b.err = "0";
                                pH(this, b, g);
                                f = !0
                            } else b.err = "1", pH(this, b, g), f = !1
                        } else b.err = "3", pH(this,
                            b, null), f = !1;
                        else b.err = "2", pH(this, b, null), f = !1
                    }
                    e = {
                        msg_type: "resize-result"
                    };
                    e.r_str = h;
                    e.r_status = f;
                    c = c.source;
                    e.googMsgType = "sth";
                    c.postMessage(JSON.stringify(e), "*");
                    this.j.dataset.googleQueryId || this.j.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
        l() {
            super.l();
            this.j = null
        }
    };
    const rH = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const sH = /^blogger$/,
        tH = /^wordpress(.|\s|$)/i,
        uH = /^joomla!/i,
        vH = /^drupal/i,
        wH = /\/wp-content\//,
        xH = /\/wp-content\/plugins\/advanced-ads/,
        yH = /\/wp-content\/themes\/genesis/,
        zH = /\/wp-content\/plugins\/genesis/;

    function AH(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (xH.test(e)) return 5;
                if (zH.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", yH.test(e) || zH.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (sH.test(f)) return 1;
                if (tH.test(f)) return 2;
                if (uH.test(f)) return 3;
                if (vH.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", wH.test(d))) return 2;
        return 0
    };
    let BH = navigator;
    var CH = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        DH = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return CH(a.toLowerCase())
        };
    const EH = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        FH = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        GH = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function HH() {
        const a = new Pq;
        "SVGElement" in u && "createElementNS" in u.document && a.set(0);
        const b = gh();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        u.crypto && u.crypto.subtle && a.set(3);
        "TextDecoder" in u && "TextEncoder" in u && a.set(4);
        return Oq(a)
    };
    var IH = new Map([
        [".google.com", a => O `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => O `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => O `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => O `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => O `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => O `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => O `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => O `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => O `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => O `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => O `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => O `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => O `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => O `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => O `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => O `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => O `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => O `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => O `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => O `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => O `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => O `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => O `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => O `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => O `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => O `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => O `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => O `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => O `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => O `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => O `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => O `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => O `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => O `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => O `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => O `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => O `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => O `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => O `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => O `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => O `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => O `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => O `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => O `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => O `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => O `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => O `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => O `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => O `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => O `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => O `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => O `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => O `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => O `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => O `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => O `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => O `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => O `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => O `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => O `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => O `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => O `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => O `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => O `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => O `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => O `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => O `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => O `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => O `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => O `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => O `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => O `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => O `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => O `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => O `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => O `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => O `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => O `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => O `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => O `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => O `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => O `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => O `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => O `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => O `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => O `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => O `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => O `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => O `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => O `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => O `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => O `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => O `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => O `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => O `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => O `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => O `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => O `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => O `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => O `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => O `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => O `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => O `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => O `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => O `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => O `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => O `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => O `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => O `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => O `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => O `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => O `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => O `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => O `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => O `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => O `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => O `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => O `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => O `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => O `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => O `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => O `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => O `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => O `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => O `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => O `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => O `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => O `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => O `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => O `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => O `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => O `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => O `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => O `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => O `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => O `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => O `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => O `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.rw", a => O `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => O `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => O `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => O `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => O `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => O `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => O `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => O `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => O `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => O `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => O `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => O `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => O `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => O `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => O `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => O `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => O `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => O `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => O `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => O `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => O `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => O `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => O `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => O `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => O `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => O `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => O `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => O `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => O `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => O `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => O `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => O `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => O `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => O `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => O `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => O `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => O `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => O `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => O `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => O `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => O `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => O `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => O `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => O `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a,
        b
    ]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function JH(a, b, c) {
        const d = Qg("LINK", a);
        try {
            if (d.rel = "preload", $a("preload", "stylesheet")) {
                d.href = Be(b).toString();
                const k = gg('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                k && d.setAttribute("nonce", k)
            } else {
                if (b instanceof ye) var e = Be(b).toString();
                else {
                    if (b instanceof Ie) var f = Je(b);
                    else {
                        if (b instanceof Ie) var g = b;
                        else {
                            b = "object" == typeof b && b.za ? b.j() : String(b);
                            b: {
                                let k;
                                try {
                                    k = new URL(b)
                                } catch (l) {
                                    var h = "https:";
                                    break b
                                }
                                h = k.protocol
                            }
                            "javascript:" === h && (b =
                                "about:invalid#zClosurez");
                            g = new Ie(b, He)
                        }
                        f = Je(g)
                    }
                    e = f
                }
                d.href = e
            }
        } catch {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch {}
    };
    let KH = u;
    const MH = a => {
        const b = new Map([
            ["domain", u.location.hostname]
        ]);
        LH[3] >= Ea() && b.set("adsid", LH[1]);
        return Kh(IH.get(a).js, b)
    };
    let LH, NH;
    const OH = () => {
        KH = u;
        LH = KH.googleToken = KH.googleToken || {};
        const a = Ea();
        LH[1] && LH[3] > a && 0 < LH[2] || (LH[1] = "", LH[2] = -1, LH[3] = -1, LH[4] = "", LH[6] = "");
        NH = KH.googleIMState = KH.googleIMState || {};
        IH.has(NH[1]) || (NH[1] = ".google.com");
        Array.isArray(NH[5]) || (NH[5] = []);
        "boolean" !== typeof NH[6] && (NH[6] = !1);
        Array.isArray(NH[7]) || (NH[7] = []);
        "number" !== typeof NH[8] && (NH[8] = 0)
    };
    var PH = a => {
        OH();
        IH.has(a) && (NH[1] = a)
    };
    const QH = {
        cd: () => 0 < NH[8],
        sg: () => {
            NH[8]++
        },
        tg: () => {
            0 < NH[8] && NH[8]--
        },
        ug: () => {
            NH[8] = 0
        },
        Tk: () => !1,
        ge: () => NH[5],
        Rd: a => {
            try {
                a()
            } catch (b) {
                u.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        Je: () => {
            if (!QH.cd()) {
                var a = u.document,
                    b = e => {
                        e = MH(e);
                        a: {
                            try {
                                var f = gg("script[nonce]");
                                break a
                            } catch {}
                            f = void 0
                        }
                        JH(a, e.toString(), f);
                        f = Qg("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => u.processGoogleToken({}, 2);
                        Af(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), QH.sg()
                        } catch (g) {}
                    },
                    c = NH[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                u.setTimeout(() => u.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function RH(a) {
        OH();
        const b = KH.googleToken[5] || 0;
        a && (0 != b || LH[3] >= Ea() ? QH.Rd(a) : (QH.ge().push(a), QH.Je()));
        LH[3] >= Ea() && LH[2] >= Ea() || QH.Je()
    }
    var TH = a => {
        u.processGoogleToken = u.processGoogleToken || ((b, c) => SH(b, c));
        RH(a)
    };
    const SH = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        OH();
        1 == b ? QH.ug() : QH.tg();
        var h = KH.googleToken = KH.googleToken || {},
            k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !QH.cd() && (!(LH[3] >= Ea()) || "NT" == LH[1]);
        var l = !(LH[3] >= Ea()) && 0 != b;
        if (k || d || l) d = Ea(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && qi(u, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, OH();
        if (k || !QH.cd()) {
            b = QH.ge();
            for (c = 0; c < b.length; c++) QH.Rd(b[c]);
            b.length = 0
        }
    };
    const UH = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        VH = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function WH(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return UH.get(b.type) ? ? null
        } catch {}
        return VH.get(a.performance ? .navigation ? .type) ? ? null
    };

    function XH(a, b) {
        if (tb()) {
            var c = a.document.documentElement.lang;
            YH(a) ? ZH(b, rh(a), !0, "", c) : (new MutationObserver((d, e) => {
                YH(a) && (ZH(b, rh(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function YH(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function ZH(a, b, c, d, e) {
        ti({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function $H(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const aI = /[+, ]/;

    function bI(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = vh(d);
        var h = Rq(d, c.google_ad_width, c.google_ad_height);
        var k = Qq(g).hd;
        var l = d.top == d ? 0 : Lg(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != l ? h || 2 != l ? h && 1 == l ? m = 7 : h && 2 == l && (m = 8) : m = 6 : m = 5;
        k && (m |= 16);
        k = "" + m;
        l = Tq(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 != l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                k = decodeURIComponent(k)
            } catch (q) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && Lg(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = Dh()) && d.referrer || "";
        e.google_referrer_url = d;
        Sq(e, c);
        e = c.google_page_location ||
            c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in rH), 2 <= e.length && (d = d || e[e.length - 2] in rH), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = cI(a, b);
        d = a.D;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && dI.test(f) &&
            (g = "/pagead/lopri?");
        a = bi(b, `https://${e}${g}` + (H(a.la, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function eI(a) {
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + ai({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        })
    }

    function fI(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = a ? xg(a) : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && Lg(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function gI(a, b) {
        b.eid = cF(a.pubWin);
        const c = a.D.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function hI(a, b) {
        a = (a = Og(a.pubWin)) && a.document ? Mq(a.document, a) : new kg(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function iI(a) {
        try {
            const b = u.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function jI(a) {
        const b = Ei();
        b && (a.debug_experiment_id = b);
        a.creatives = iI(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = iI(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    }

    function kI(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.J,
            g = vh(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Dh(e)) && va(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = Qq(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.hd || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.yb && (b.etu = a.yb);
        (c = OF(d, f, f ? ID(c, f) : null)) && (b.fc = c);
        if (!ki(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = (new tg(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const T = h.contentWindow.document;
                    T.open();
                    T.write(df(qf));
                    T.close();
                    g += T.documentMode
                } catch (T) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let k, l, m, n, q, r, t, A, x;
        try {
            var B = e.screenX;
            k = e.screenY
        } catch (T) {}
        try {
            l = e.outerWidth, m = e.outerHeight
        } catch (T) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (T) {}
        try {
            r = e.screenLeft, t = e.screenTop
        } catch (T) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (T) {}
        try {
            A =
                e.screen.availWidth, x = e.screen.availTop
        } catch (T) {}
        b.brdim = [r, t, B, k, A, x, l, m, n, q].join();
        B = 0;
        void 0 === u.postMessage && (B |= 1);
        0 < B && (b.osd = B);
        b.vis = DG(e.document);
        B = a.Y;
        e = IF(d) ? lH : $G(new jH(e, B, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = NG(e);
        if (!IF(d) && (e = li(d), null != e)) {
            B = 0;
            a: {
                try {
                    {
                        var G = d.google_async_iframe_id;
                        const T = window.document;
                        if (G) var D = T.getElementById(G);
                        else {
                            var E = T.getElementsByTagName("script"),
                                I = E[E.length - 1];
                            D = I && I.parentNode || null
                        }
                    }
                    if (G =
                        D) {
                        D = [];
                        E = 0;
                        for (var S = Date.now(); 100 >= ++E && 50 > Date.now() - S && (G = fI(G));) 1 === G.nodeType && D.push(G);
                        var Ja = D;
                        b: {
                            for (S = 0; S < Ja.length; S++) {
                                c: {
                                    var ca = Ja[S];
                                    try {
                                        if (ca.parentNode && 0 < ca.offsetWidth && 0 < ca.offsetHeight && ca.style && "none" !== ca.style.display && "hidden" !== ca.style.visibility && (!ca.style.opacity || 0 !== Number(ca.style.opacity))) {
                                            const T = ca.getBoundingClientRect();
                                            var ba = 0 < T.right && 0 < T.bottom;
                                            break c
                                        }
                                    } catch (T) {}
                                    ba = !1
                                }
                                if (!ba) {
                                    var Ba = !1;
                                    break b
                                }
                            }
                            Ba = !0
                        }
                        if (Ba) {
                            b: {
                                const T = Date.now();Ba = /^html|body$/i;ba =
                                /^fixed/i;
                                for (ca = 0; ca < Ja.length && 50 > Date.now() - T; ca++) {
                                    const U = Ja[ca];
                                    if (!Ba.test(U.tagName) && ba.test(U.style.position || Rh(U, "position"))) {
                                        var ua = U;
                                        break b
                                    }
                                }
                                ua = null
                            }
                            break a
                        }
                    }
                } catch {}
                ua = null
            }
            ua && ua.offsetWidth * ua.offsetHeight <= 4 * e.width * e.height && (B = 1);
            b.pfx = B
        }
        a: {
            if (.05 > Math.random() && f) try {
                const T = f.document.getElementsByTagName("head")[0];
                var kd = T ? AH(T) : 0;
                break a
            } catch (T) {}
            kd = 0
        }
        f = kd;
        0 !== f && (b.cms = f);
        d.google_lrv !== a.Ma && (b.alvm = d.google_lrv || "none")
    }

    function lI(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Mg(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function mI(a, b) {
        const c = Z(b, 8, {});
        b = Z(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function nI(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = ml;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = u.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (I) {}
            g = null
        }(e = (e = g) ? oG(e, u.Date.now() - ml, 1E6) : null) && (b.bdt = e);
        b.idt = oG(a.G, ml);
        e = a.D;
        b.shv = L(a.la, 2);
        a.Ma && (b.mjsv = a.Ma);
        "sa" == e.google_loader_used || "sd" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) &&
            (b.saldr = e.google_loader_used);
        if (e = Dh(a.pubWin)) b.is_amp = 1, b.amp_v = Eh(e), (e = Fh(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new hF(a.pubWin);
        (g = dF(e, "__gads", c)) && (b.cookie = g);
        (g = dF(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        "1" === dF(e, "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1");
        e = IC();
        f = Z(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = Z(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        mI(d, e);
        g = Z(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = Dh(window)) ? (f ? (g = f.pageViewId, f = f.clientId,
            "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6))) : g = null, g = +g) : (g = vh(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = Z(e, 7, g);
        W(gq) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = Z(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(aI);
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                g[l] ? f += l + "+" : g[l] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f = Z(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (k = 0; k < h.length; k++) {
                l =
                    h[k].split(aI);
                f[k] || (f[k] = {});
                var m = "";
                for (var n = 0; n < l.length; n++) {
                    var q = l[n];
                    "" !== q && (f[k][q] ? m += "+" + q : f[k][q] = !0)
                }
                m = m.slice(1);
                g[k] = m;
                "" !== m && (e = k)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var r = vh(window),
                t = r.google_prev_clients;
            t || (t = r.google_prev_clients = {});
            if (e in t) var A = 1;
            else t[e] = !0, A = 2
        } catch {
            A = 0
        }
        b.pv = A;
        a.J && W(Ip) && (A = a.J, A = tb() && YH(A) ? A.document.documentElement.lang : void 0, A && (b.tl =
            A));
        t = a.pubWin.document;
        A = a.D;
        e = a.pubWin;
        r = t.domain;
        e = (F(c, 5) && JD(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        k = t.referrer;
        m = di();
        if (Dh()) var x = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = A.google_analytics_domain_name;
            c = "undefined" == typeof f ? DH("auto", r) : DH(f, r);
            n = -1 < e.indexOf("__utma=" + c + ".");
            l = -1 < e.indexOf("__utmb=" + c);
            (r = (Ih() || window).gaGlobal) || (r = {}, (Ih() || window).gaGlobal = r);
            t = !1;
            if (n) {
                var B = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                l ? r.sid = B[3] : r.sid ||
                    (r.sid = g + "");
                r.vid = B[0] + "." + B[1];
                r.from_cookie = !0
            } else {
                r.sid || (r.sid = g + "");
                if (!r.vid) {
                    t = !0;
                    l = Math.round(2147483647 * Math.random());
                    n = BH.appName;
                    q = BH.version;
                    var G = BH.language ? BH.language : BH.browserLanguage,
                        D = BH.platform,
                        E = BH.userAgent;
                    try {
                        B = BH.javaEnabled()
                    } catch (I) {
                        B = !1
                    }
                    B = [n, q, G, D, E, B ? 1 : 0].join("");
                    h ? B += h.width + "x" + h.height + h.colorDepth : u.java && u.java.awt && (h = u.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), B += h.screen.width + "x" + h.screen.height);
                    B = B + e + (k || "");
                    for (h = B.length; 0 < m;) B += m-- ^ h++;
                    r.vid = (l ^ CH(B) & 2147483647) + "." + g
                }
                r.from_cookie || (r.from_cookie = !1)
            }
            if (!r.cid) {
                b: for (g = f, B = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, B = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = EH.exec(e[f]) || FH.exec(e[f]) || GH.exec(e[f])) {
                        k = h[1] || 0;
                        if (k == B) {
                            x = h[2];
                            break b
                        }
                        k < g && (g = k, x = h[2])
                    }t && x && -1 != x.search(/^\d+\.\d+$/) ? (r.vid = x, r.from_cookie = !0) : x != r.vid && (r.cid = x)
            }
            r.dh = c;
            r.hid || (r.hid = Math.round(2147483647 * Math.random()));
            x = r
        }
        b.ga_vid = x.vid;
        b.ga_sid = x.sid;
        b.ga_hid = x.hid;
        b.ga_fc = x.from_cookie;
        b.ga_cid = x.cid;
        b.ga_wpids = A.google_analytics_uacct;
        lI(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= dG[a] && (b.rplot = dG[a])
    }

    function oI(a, b) {
        a = a.l;
        if (a ? .j() || RC()) b.npa = 1;
        if (a) {
            null != z(a, 3, !1) && (b.gdpr = F(a, 3) ? "1" : "0");
            var c = z(a, 1);
            c && (b.us_privacy = c);
            (c = z(a, 2)) && (b.gdpr_consent = c);
            (c = z(a, 4)) && (b.addtl_consent = c);
            (a = z(a, 7)) && (b.tcfe = a)
        }
    }

    function pI(a, b) {
        const c = a.D;
        oI(a, b);
        Tg(TC, (d, e) => {
            b[d] = c[e]
        });
        IF(c) && (a = UF(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = es(c), null != a.j && (a = mn(a.j.value), b.pi = a))
    }

    function qI(a, b) {
        var c = Hh() || Kq(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = Kq(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function rI(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Kq(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Vg(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function sI(a, b) {
        (a = PC()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function tI(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function uI(a, b) {
        if (a = a.pubWin.google_user_agent_client_hint) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                255 < f && (c[d++] = f & 255, f >>= 8);
                c[d++] = f
            }
            a = fc(c);
            b.uach = a
        }
    }

    function vI(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }

    function wI(a, b) {
        0 <= a.D.google_ad_public_floor && (b.pubf = a.D.google_ad_public_floor);
        0 <= a.D.google_ad_private_floor && (b.pvtf = a.D.google_ad_private_floor)
    }

    function xI(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(La).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function yI(a, b) {
        W(yq) || "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1)
    }

    function zI(a, b) {
        W(jq) || XE("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function cI(a, b) {
        const c = {};
        pI(a, c);
        OH();
        c.adsid = LH[1];
        OH();
        c.pucrd = LH[6];
        uI(a, c);
        nI(a, c, b);
        gi(c);
        c.u_sd = Lq(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        Sk(889, () => {
            if (null == a.J) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = JE(a.J, a.Y);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                Nq(a.Y) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        qI(a, c);
        rI(a, c);
        hI(a, c);
        gI(a, c);
        a.F && (c.oid = a.F);
        sI(a, c);
        c.pvsid = rh(a.pubWin, Qk);
        tI(a, c);
        vI(a, c);
        c.uas = $H(a.pubWin);
        const d = WH(a.pubWin);
        d && (c.nvt = d);
        a.B && (c.scar = a.B);
        a.v instanceof Uint8Array ? c.topics = fc(a.v) : a.v && (c.topics = a.v, c.tps = a.v);
        kI(a, c, b);
        c.fu = a.j;
        c.bc = HH();
        OH();
        c.jar = LH[4];
        H(a.la, 9) && jI(c);
        gl() && (c.atl = !0);
        wI(a, c);
        xI(a, c);
        yI(a, c);
        zI(a, c);
        null == Bq(cq) || !1 !== a.D.google_video_play_muted && !0 !== W(dq) || 10 !== a.D.google_reactive_ad_format && 11 !== a.D.google_reactive_ad_format || (c.sdkv = Bq(cq));
        return c
    }
    const dI = /YtLoPri/;
    var AI = class extends M {
            constructor(a) {
                super(a)
            }
        },
        BI = Rd(AI);
    var CI = class {
        constructor(a) {
            this.j = a
        }
        La() {
            return this.j.now()
        }
    };
    const DI = [255, 255, 255];

    function EI(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function FI(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = EI(b.backgroundColor);
        var c = GI(b);
        if (c) return c;
        a = (a = a.parentElement) ? FI(a) : DI;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function GI(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var II = class {
        constructor(a, b, c, d) {
            this.xd = b;
            this.Pc = c;
            this.ib = d;
            this.l = 0;
            this.j = new HI(a)
        }
    };
    class HI {
        constructor(a) {
            this.v = a;
            this.j = new Map;
            this.l = 0
        }
        get m() {
            return this.l
        }
    };

    function JI(a) {
        N(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };
    const KI = [{
        Nb: "1907259590",
        xc: 480,
        Ua: 220
    }, {
        Nb: "2837189651",
        xc: 400,
        Ua: 180
    }, {
        Nb: "9211025045",
        xc: 360,
        Ua: 160
    }, {
        Nb: "6584860439",
        xc: -Infinity,
        Ua: 150
    }];

    function LI(a) {
        return KI.find(b => b.xc <= a)
    };
    const MI = new class {
        constructor() {
            this.j = []
        }
    };
    let NI = !1;

    function OI(a) {
        return PI(a.j, 1065, a.win, () => {
            if (!a.l) {
                var b = new pk;
                b = K(b, 1, a.m);
                var c = new ok;
                b = ld(b, 2, qk, c);
                QI(a.j.l, b)
            }
        }, 1E4)
    }
    class RI {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.m = c;
            this.l = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function SI(a, b, c, d, e, f) {
        const g = LI(a.document.body.clientWidth),
            h = b.j ? TI(a, b, d, g, e, f) : UI(a, b, d, g, e, f);
        em(h.isVisible(), !1, () => {
            NI = !1;
            for (const m of MI.j) m();
            MI.j.length = 0
        });
        h.show({
            Zd: !0
        });
        NI = !0;
        const k = new RI(a, b, c),
            l = OI(k);
        MI.j.push(() => {
            var m = b.l;
            var n = new pk;
            n = K(n, 1, c);
            var q = new nk;
            n = ld(n, 3, qk, q);
            QI(m, n);
            k.l = !0
        });
        VI.push(() => {
            h.isVisible().M && h.collapse();
            k.cancel(l)
        })
    }

    function TI(a, b, c, d, e, f) {
        b = WI(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center", e, f);
        return zx(a, b, {
            rd: .75,
            bd: .95,
            zIndex: 100001,
            Ja: !0,
            Wc: "adpub-drawer-root",
            Vc: !0
        })
    }

    function UI(a, b, c, d, e, f) {
        a: {
            var g = a.document.body.clientWidth;
            var h = .9 * g;
            for (g = 768 >= g ? 3 : 4; 1 <= g; g--) {
                const k = d.Ua * g + 42;
                if (k <= h) {
                    h = k;
                    break a
                }
            }
        }
        c = WI(a, b, c, d, h, "600px", "24px", "24px", "start", e, f);
        return Jw(a, c, {
            Bb: `${h}px`,
            Ab: XI(b),
            rb: L(b.na, 14),
            zIndex: 100001,
            Ja: !0,
            ic: !1,
            Wc: "adpub-drawer-root",
            Vc: !0
        })
    }

    function WI(a, b, c, d, e, f, g, h, k, l, m) {
        var n = b.na,
            q = L(n, 10),
            r = q.indexOf("TERM"),
            t = b.B;
        var A = W(xq) ? {
            Te: t.replace("ca", "partner"),
            Gd: "ads"
        } : {
            Te: "pub-adfiliates-rockskipper",
            Gd: "ads"
        };
        t = b.da.hc;
        e = Math.max(Math.floor((e - Math.floor(e / d.Ua) * d.Ua) / 2), 5);
        const x = b.Ub ? "on" : "",
            B = L(n, 3),
            G = `${b.da.ob}`,
            D = L(n, 7),
            E = L(n, 6),
            I = b.B,
            S = q.substring(0, r);
        q = q.substring(r + 4);
        r = d.Nb;
        const Ja = A.Te;
        A = A.Gd;
        const ca = !!H(n, 13),
            ba = void 0 === m ? "" : m;
        f = jv('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            nv(X(g)) + " " + nv(X(h)) + "; text-align: " + nv(X(k)) + ';">' + (l ? '<div style="max-width: ' + nv(X(f)) + '">' + iv(B) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + iv(E) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + nv(X(g)) + "; text-align: " + nv(X(k)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">search</span><span style="color:#80868b"> ' +
            iv(S) + "</span>" + iv(c) + '<span style="color:#80868b">' + iv(q) + '</span></div></div><div id="anno-csa" style="margin:5px ' + nv(X(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');" + (t ? "parent.postMessage({query:" + rv(sv(c)) + "},parent.location.origin);" : "const pageOptions = {'pubId': " + rv(sv(Ja)) + ", 'styleId': " + rv(sv(r)) + ", 'disableCarousel': true, 'query': " + rv(sv(c)) + ", 'hl': " + rv(sv(D)) + ", 'personalizedAds': 'false', 'fexp': " +
                rv(sv(G)) + ", 'adfiliateWp': " + rv(sv(I)) + "," + (ba ? "'afdToken': " + rv(sv(ba)) + "," : "") + "'adtest': " + rv(sv(x)) + "}; const adBlock = {'container': 'anno-csa', 'linkTarget': '_blank', 'number': " + rv(sv(8)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + rv(sv(A)) + ", pageOptions, adBlock);") + "\x3c/script>" + (ca ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" :
                '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') + "</div>");
        n = hf("body", {
            dir: XI(b) ? "rtl" : "ltr",
            lang: L(n, 7),
            style: Re({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: "hidden"
            })
        }, ev(f));
        f = a.document.createElement("IFRAME");
        N(f, {
            border: "0",
            width: "100%"
        });
        b.da.hc ? YI(a, b, f, c, d, m) : ZI(a, b, f);
        f.srcdoc = df(n);
        return f
    }

    function YI(a, b, c, d, e, f) {
        const g = $I(b, a, function(h) {
            h.data.query === d && aJ(a, b, c, d, e, f)
        });
        MI.j.push(() => {
            a.removeEventListener("message", g)
        })
    }

    function aJ(a, b, c, d, e, f) {
        const g = c.contentDocument.body,
            h = new ResizeObserver(() => {
                c.height = `${g.parentElement.offsetHeight}px`
            });
        h.observe(g);
        const k = bJ(b, a, () => {
            const l = c.contentDocument ? .body ? .parentElement ? .offsetHeight;
            l && (c.height = `${l}px`)
        });
        cJ(b, c, d, e, f);
        VI.push(() => {
            h.disconnect();
            a.clearInterval(k)
        })
    }

    function ZI(a, b, c) {
        function d(g) {
            const h = new ResizeObserver(() => {
                c.height = `${g.parentElement.offsetHeight}px`
            });
            h.observe(g);
            const k = bJ(b, a, () => {
                const l = c.contentDocument ? .body ? .parentElement ? .offsetHeight;
                l && (c.height = `${l}px`)
            });
            VI.push(() => {
                h.disconnect();
                a.clearInterval(k)
            })
        }

        function e() {
            if (!f) {
                const g = c.contentDocument ? .body || c.contentWindow ? .document ? .body;
                g && (f = !0, d(g))
            }
            return f
        }
        let f = !1;
        c.onload = () => void e();
        b.Aa(1066, XC(a, () => e(), 100))
    }

    function cJ(a, b, c, d, e) {
        const f = a.na,
            g = b.contentWindow;
        b = b ? .contentDocument || b.contentWindow ? .document;
        if (g) {
            if (void 0 === g._googCsa) throw Error("No _googCsa");
            if (!b) throw Error("No contentDocument");
        } else throw Error("No googCsa window");
        a = {
            pubId: "pub-adfiliates-rockskipper",
            styleId: d.Nb,
            disableCarousel: !0,
            query: c,
            hl: L(f, 7),
            personalizedAds: "false",
            fexp: `${a.da.ob}`,
            adfiliateWp: a.B,
            adtest: a.Ub ? "on" : ""
        };
        e && (a.afdToken = e);
        g._googCsa("ads", a, {
            container: "anno-csa",
            linkTarget: "_blank",
            number: 8,
            width: b.body.offsetWidth -
                30
        })
    }
    const VI = [];

    function dJ(a, b, c) {
        return a.substring(Math.max(b - 30, 0), b) + "~~" + a.substring(c, Math.min(c + 30, a.length))
    }

    function eJ(a) {
        a = EI(a);
        var b = new Zj;
        b = dd(b, 1, a[0], 0);
        b = dd(b, 2, a[1], 0);
        b = dd(b, 3, a[2], 0);
        return dd(b, 4, Lc(a[3]), 0)
    };
    class fJ {
        constructor(a, b) {
            this.m = a;
            this.j = !1;
            this.v = b;
            this.l = this.v.ta(264, c => {
                this.j && (gJ || (c = Date.now()), this.m(c), gJ ? hJ.call(u, this.l) : u.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, gJ ? hJ.call(u, this.l) : this.l(0))
        }
    }
    var hJ = u.requestAnimationFrame || u.webkitRequestAnimationFrame,
        gJ = !!hJ && !/'iPhone'/.test(u.navigator.userAgent);

    function iJ(a) {
        return a * a * a
    }

    function jJ(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class kJ {
        constructor(a, b, c) {
            this.l = a;
            this.G = b;
            this.progress = 0;
            this.v = null;
            this.F = !1;
            this.j = [];
            this.m = null;
            this.A = new fJ(Ca(this.H, this), c)
        }
        H(a) {
            if (this.F) this.A.j = !1;
            else {
                null === this.v && (this.v = a);
                this.progress = (a - this.v) / 100;
                1 <= this.progress && (this.progress = 1);
                a = this.m ? this.m(this.progress) : this.progress;
                this.j = [];
                for (let b = 0; b < this.l.length; b++) this.j.push((this.G[b] - this.l[b]) * a + this.l[b]);
                this.B();
                1 == this.progress && (this.A.j = !1, this.C())
            }
        }
        C() {}
        B() {}
        play() {
            this.F = !1;
            this.A.start()
        }
    };
    var lJ = class {
        constructor(a, b, c, d) {
            this.C = a;
            this.F = b;
            this.m = c;
            this.B = d
        }
        get j() {
            return this.C
        }
        get A() {
            return this.F
        }
        get v() {
            return this.m
        }
        get l() {
            return this.B
        }
    };

    function mJ(a) {
        a = nJ(a.document, "search");
        N(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            position: "relative"
        });
        a.className = "google-material-icons";
        return a
    }

    function oJ(a, b) {
        a = nJ(a, "close");
        N(a, {
            color: "#5F6368",
            display: "block",
            "font-size": "15px",
            left: b ? "" : "20px",
            right: b ? "20px" : "",
            "pointer-events": "initial",
            position: "absolute",
            top: "16px",
            transform: "none"
        });
        return a
    }

    function pJ(a, b, c) {
        a = nJ(a, "expand_more");
        N(a, {
            color: "#5F6368",
            cursor: "pointer",
            display: "block",
            "font-size": "15px",
            left: c ? "" : "0",
            right: c ? "0" : "",
            padding: c ? "0 0 0 16px" : "0 16px 0 0",
            "pointer-events": "initial",
            position: "absolute",
            top: "20px",
            transform: `${b}`
        });
        return a
    }

    function nJ(a, b) {
        const c = a.createElement("SPAN");
        c.appendChild(a.createTextNode(b));
        JI(c);
        N(c, {
            "font-family": '"Google Material Icons"',
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none"
        });
        c.className = "google-material-icons";
        return c
    };

    function qJ(a, b, c) {
        return Pv({
            J: a,
            kd: 3E3,
            md: a.innerWidth > yl ? 650 : 0,
            sa: c,
            Sd: b
        })
    }

    function rJ(a) {
        return a.document.getElementById("google-anno-sa")
    }

    function sJ(a, b) {
        const c = document.createElement("SPAN");
        c.id = "gda";
        c.appendChild(oJ(a.document, b.j === XI(b)));
        tJ(b, 1064, c, d => {
            const e = XI(b);
            var f = (b.j ? e : !e) ? a.innerWidth : -a.innerWidth;
            uJ(b, rJ(a), 0, f, iJ).play();
            const g = vJ(b);
            f = nJ(a.document, "shoppingmode");
            N(f, {
                "font-size": "18px",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            });
            g.appendChild(f);
            tJ(b, 1064, g, h => {
                const k = (b.j ? e : !e) ? a.innerWidth : -a.innerWidth;
                uJ(b, rJ(a), k, 0, jJ).play();
                a.document.body.removeChild(g);
                h.preventDefault();
                return !1
            });
            a.document.body.appendChild(g);
            d.preventDefault();
            return !1
        });
        return c
    }

    function vJ(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = XI(a);
        a = a.j ? c : !c;
        N(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": "1000"
        });
        return b
    }

    function wJ(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && N(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function xJ(a) {
        try {
            return null !== a.location ? .href ? .match(/goog_fsa=1/)
        } catch (b) {
            return !1
        }
    }

    function yJ(a, b, c) {
        var d = L(c.na, 11);
        b = b.getElementsByClassName("google-anno-sa-qtx")[0];
        b instanceof HTMLElement && (b.innerText = d.replace("TERM", a.j));
        c = c.l;
        d = new Nj;
        d = C(d, 1, a.m);
        d = wd(d, 4, a.j);
        a = c.handle;
        b = zJ(c, 7);
        d = ld(b, 6, sk, d);
        return a.call(c, d)
    }

    function AJ(a, b, c, d, e) {
        if (a.j !== d || null !== a.m || a.v !== e) {
            if (null !== a.l) {
                var f = a.l,
                    g = c.l;
                var h = new Mj;
                h = K(h, 1, f);
                f = g.handle;
                var k = zJ(g, 8);
                h = ld(k, 7, sk, h);
                f.call(g, h)
            }
            a.j = d;
            a.m = null;
            a.v = e;
            (d = rJ(b)) ? a.l = yJ(a, d, c): (Tv(b) ? b = null : (d = b.getComputedStyle(b.document.body).paddingBottom.match(/\d+/), N(b.document.body, {
                "padding-bottom": (d && d.length ? Number(d[0]) + 45 : 45) + "px"
            }), wJ(b), d = document.createElement("div"), d.id = "google-anno-sa", d.dir = XI(c) ? "rtl" : "ltr", N(d, {
                background: "white",
                "border-style": "solid",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                bottom: "0",
                height: "45px",
                position: "fixed",
                "text-align": "center",
                width: "100%",
                border: "0px",
                left: "0px",
                "box-shadow": "0px 0px 10px 0px #00000026",
                "z-index": "1000"
            }), d.appendChild(sJ(b, c)), d.appendChild(BJ(a, b, c)), d.appendChild(CJ(a, b, c)), c = yJ(a, d, c), b.document.body.appendChild(d), b = c), a.l = b)
        }
    }

    function BJ(a, b, c) {
        const d = document.createElement("SPAN");
        JI(d);
        N(d, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var e = XI(c);
        c.j || N(d, {
            "justify-content": ""
        });
        const f = nJ(b.document, "shoppingmode");
        N(f, {
            "font-size": "18px",
            width: "15px",
            height: "15px",
            "margin-left": e ? "8px" : "",
            "margin-right": e ? "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        });
        d.appendChild(f);
        e = document.createElement("SPAN");
        e.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        N(e, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        tJ(c, 999, d, g => DJ(a, b, c, g));
        d.appendChild(e);
        return d
    }

    function CJ(a, b, c) {
        const d = document.createElement("DIV");
        d.id = "google-anno-ea";
        c.j || N(d, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        d.appendChild(pJ(b.document, c.j ? "rotate(180deg) translateY(5px)" : XI(c) ? "rotate(270deg) translateX(-5px)" : "rotate(90deg) translateX(5px)", c.j !== XI(c)));
        tJ(c, 999, d, e => DJ(a, b, c, e));
        return d
    }

    function DJ(a, b, c, d) {
        var e = c.l;
        var f = new jk;
        f = wd(f, 4, a.j);
        f = C(f, 1, a.m);
        f = C(f, 3, a.l);
        e = EJ(e, f);
        SI(b, c, e, a.j, !1, c.da.Ob ? c.F.get(a.j) || "" : "");
        d.preventDefault();
        return !1
    }
    var FJ = class {
        constructor() {
            this.j = "";
            this.m = null;
            this.v = "";
            this.l = null
        }
    };

    function GJ(a) {
        a.j >= a.l.length && (a.j = 0);
        if (NI) MI.j.push(() => void GJ(a));
        else {
            var b = a.l[a.j++];
            a.v = !1;
            AJ(a.A, a.win, a.m, b.j, b.l);
            PI(a.m, 898, a.win, () => void GJ(a), a.Dd)
        }
    }
    var HJ = class {
        constructor(a, b) {
            var c = new FJ;
            this.win = a;
            this.m = b;
            this.A = c;
            this.l = [];
            this.v = !0;
            this.j = 0;
            this.Dd = b.qb ? .Dd ? ? 0
        }
    };
    class IJ {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    const JJ = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function KJ(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || JJ.test(a)
        }
    }

    function LJ(a, b, c, d) {
        return KJ(a.charAt(b - 1), d) && KJ(a.charAt(c + 1), d)
    };

    function MJ(a, b, c) {
        c = new NJ(c);
        for (const f of a) {
            a = f;
            var d = b,
                e = c;
            const g = L(a, 1);
            if (1 === d && H(a, 3)) OJ(e, g, g);
            else if (2 === d) {
                H(a, 4) && OJ(e, g, g);
                for (const h of ad(a, 5, Rc)) OJ(e, h, g)
            }
        }
        PJ(c);
        return new QJ(c)
    }
    var QJ = class {
        constructor(a) {
            this.j = a
        }
        match(a) {
            return this.j.match(a)
        }
    };

    function OJ(a, b, c) {
        const d = a.v.has(c) ? a.v.get(c) : a.B++;
        a.v.set(c, d);
        a.m.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.j[c].contains(f) || (a.j.push(new RJ), a.j[a.size].B = c, a.j[a.size].F = f, a.j[c].m.set(f, a.size), a.size++);
            c = a.j[c].m.get(f)
        }
        a.j[c].A = !0;
        a.j[c].v = d;
        a.j[c].C = a.l.length;
        a.l.push(b.length)
    }

    function PJ(a) {
        const b = [];
        for (b.push(0); 0 < b.length;) {
            const g = b.shift();
            var c = a,
                d = g,
                e = c.j[d];
            if (0 === d) e.j = 0, e.l = 0;
            else if (0 === e.B) e.j = 0, e.l = e.A ? d : c.j[c.j[d].j].l;
            else {
                e = c.j[c.j[d].B].j;
                for (var f = c.j[d].F;;) {
                    if (c.j[e].contains(f)) {
                        c.j[d].j = c.j[e].m.get(f);
                        break
                    }
                    if (0 === e) {
                        c.j[d].j = 0;
                        break
                    }
                    e = c.j[e].j
                }
                c.j[d].l = c.j[d].A ? d : c.j[c.j[d].j].l
            }
            for (const h of a.j[g].childNodes) b.push(h)
        }
    }

    function SJ(a, b) {
        a: {
            let d = 0;
            for (let e = 0; e < b.length; e++) {
                for (;;) {
                    var c = b.charCodeAt(e);
                    if (a.j[d].contains(c)) {
                        d = a.j[d].m.get(c);
                        break
                    }
                    if (0 === d) break;
                    d = a.j[d].j
                }
                for (c = d;;) {
                    c = a.j[c].l;
                    if (0 === c) break;
                    const f = e + 1 - a.l[a.j[c].C],
                        g = e;
                    if (LJ(b, f, g, a.A)) {
                        a = new TJ(f, g, a.m.get(a.j[c].v));
                        break a
                    }
                    c = a.j[c].j
                }
            }
            a = void 0
        }
        return void 0 !== a
    }
    class NJ {
        constructor(a) {
            this.A = a;
            this.size = 1;
            this.j = [new RJ];
            this.l = [];
            this.v = new Map;
            this.m = new Map;
            this.B = 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f),
                        e = this.j[b];
                    if (e.contains(d)) {
                        b = e.m.get(d);
                        break
                    }
                    if (0 === b) break;
                    b = e.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    e = f + 1 - this.l[this.j[d].C];
                    const g = f;
                    LJ(a, e, g, this.A) && c.push(new TJ(e, g, this.m.get(this.j[d].v)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class RJ {
        constructor() {
            this.m = new Map;
            this.I = !1;
            this.aa = this.H = this.G = this.V = this.K = this.L = -1
        }
        contains(a) {
            return this.m.has(a)
        }
        set B(a) {
            this.L = a
        }
        get B() {
            return this.L
        }
        set F(a) {
            this.K = a
        }
        get F() {
            return this.K
        }
        set A(a) {
            this.I = a
        }
        get A() {
            return this.I
        }
        set v(a) {
            this.H = a
        }
        get v() {
            return this.H
        }
        set j(a) {
            this.V = a
        }
        get j() {
            return this.V
        }
        set l(a) {
            this.G = a
        }
        get l() {
            return this.G
        }
        set C(a) {
            this.aa = a
        }
        get C() {
            return this.aa
        }
        get childNodes() {
            return this.m.values()
        }
    }
    var TJ = class {
            constructor(a, b, c) {
                this.A = a;
                this.v = b;
                this.B = c
            }
            get l() {
                return this.A
            }
            get m() {
                return this.v
            }
            get j() {
                return this.B
            }
            get length() {
                return this.v - this.A
            }
        },
        UJ = class {
            constructor(a) {
                this.j = a;
                this.matches = []
            }
        };
    const VJ = ["block", "inline", "inline-block", "list-item", "table-cell"];

    function WJ(a, b, c, d, e, f) {
        if (c.La(5) >= c.C) return !1;
        for (let ca = 0; ca < b.childNodes.length; ca++) {
            const ba = b.childNodes[ca];
            if (ba.nodeType === Node.TEXT_NODE && "" !== ba.textContent) {
                a: {
                    var g = a;
                    var h = c,
                        k = b,
                        l = ba.textContent,
                        m = d,
                        n = e,
                        q = f;
                    const Ba = [];b: {
                        var r = l;
                        switch (h.v) {
                            case 1:
                                var t = Array(r.length),
                                    A = 0;
                                for (var x = 0; x < r.length; x++) JJ.test(r[x]) || A++, t[x] = A;
                                r = t;
                                break b;
                            default:
                                t = Array(r.length);
                                for (x = A = 0; x < r.length;) {
                                    for (;
                                        /\s/.test(r[x]);) t[x] = A, x++;
                                    for (var B = !1; x < r.length && !/\s/.test(r[x]);) B = !0, t[x] = A, x++;
                                    B &&
                                        (A++, t[x - 1] = A)
                                }
                                r = t
                        }
                    }
                    if (l.includes("\u00bb")) n = [];
                    else {
                        t = n.match(l);
                        n = new Map;
                        for (const ua of t) t = ua.l, n.has(t) ? (A = n.get(t), ua.length > A.length && n.set(t, ua)) : n.set(t, ua);
                        n = Array.from(n.values())
                    }
                    A = -1;
                    for (const ua of n) {
                        t = ua.l;
                        n = ua.m;
                        x = q;
                        B = ua.j;
                        var G = x.j,
                            D = x.l + r[t] - G.v;
                        for (const kd of G.j.keys()) {
                            for (var E = G.j.get(kd), I = 0; I < E.length && E[I] < D;) I++;
                            G.l -= I;
                            0 < I && G.j.set(kd, E.slice(I))
                        }
                        G = x;
                        D = G.j;
                        if ((D.j.has(B) ? D.j.get(B).length : 0) < G.xd && x.j.m < x.Pc) {
                            x = g.getComputedStyle(k);
                            B = x.fontSize.match(/\d+/);
                            if (!(B &&
                                    12 <= Number(B[0]) && 22 >= Number(B[0]) && Cb(VJ, x.display))) {
                                q.l += r[r.length - 1];
                                g = [];
                                break a
                            }
                            A += 1;
                            A < t && Ba.push(g.document.createTextNode(l.substring(A, t)));
                            A = l.substring(t, n + 1);
                            B = g;
                            x = k;
                            var S = A;
                            I = dJ(l, t, n + 1);
                            E = ua.j;
                            D = r[t];
                            G = x.getBoundingClientRect();
                            var Ja = bk(2);
                            S = wd(Ja, 2, S);
                            I = wd(S, 3, I);
                            E = wd(I, 4, E);
                            D = dd(E, 5, D, 0);
                            D = dd(D, 6, Math.round(G.x), 0);
                            G = dd(D, 7, Math.round(G.y), 0);
                            B = B.getComputedStyle(x);
                            D = new ak;
                            D = wd(D, 1, B.fontFamily);
                            E = eJ(B.color);
                            D = jd(D, 7, E);
                            E = eJ(B.backgroundColor);
                            D = jd(D, 8, E);
                            E = B.fontSize.match(/^(\d+(\.\d+)?)px$/);
                            D = dd(D, 4, E ? Math.round(Number(E[1])) : 0, 0);
                            E = Math.round(Number(B.fontWeight));
                            isNaN(E) || 400 === E || dd(D, 5, E, 0);
                            "none" !== B.textDecorationLine && wd(D, 6, B.textDecorationLine);
                            B = jd(G, 8, D);
                            G = [];
                            for (I = x; I && 20 > G.length;) {
                                x = G;
                                D = x.push;
                                E = I;
                                S = new Yj;
                                S = wd(S, 1, E.tagName);
                                "" !== E.className && cd(S, 2, E.className.split(" "), Qc);
                                D.call(x, S);
                                if ("BODY" === I.tagName) break;
                                I = I.parentElement
                            }
                            x = G.reverse();
                            x = od(B, 9, x);
                            x = XJ(m, x);
                            Ba.push(YJ(g, h, x, ua.j, A));
                            A = q.j;
                            x = ua.j;
                            t = q.l + r[t];
                            B = [];
                            A.j.has(x) && (B = A.j.get(x));
                            B.push(t);
                            A.l++;
                            A.j.set(x,
                                B);
                            A = n;
                            if (0 < q.ib && q.j.m >= q.ib) break
                        }
                    }
                    h = A + 1;0 !== h && h < l.length && Ba.push(g.document.createTextNode(l.substring(h)));q.l += r[r.length - 1];g = Ba
                }
                if (0 < g.length && !c.da.Lb) {
                    for (const Ba of g) b.insertBefore(Ba, ba), ZJ(Ba);
                    b.removeChild(ba);
                    ca += g.length - 1
                }
            }
            else if ($J(ba, c) && !WJ(a, ba, c, d, e, f)) return !1;
            if (0 < f.ib && f.j.m >= f.ib) break
        }
        return !0
    }

    function ZJ(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = GI(EI(getComputedStyle(a.parentElement).color)),
                    c = GI(EI(getComputedStyle(a).color));
                var d = FI(a);
                if (d = b && c && d ? vE(c, d) < Math.min(vE(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    N(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) ZJ(a.children[b])
        }
    }

    function $J(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE || a.classList ? .contains("google-anno-skip") || !a.offsetHeight) return !1;
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !W(vq) &&
                    !!b.m;
            default:
                return !W(vq) && !!b.m || !(a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB"))
        }
    }
    class aK {
        constructor() {
            this.j = null
        }
        get l() {
            return this.j
        }
    }

    function YJ(a, b, c, d, e) {
        const f = a.document.createElement("SPAN");
        bK(f);
        f.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        JI(e);
        N(e, {
            "text-decoration": "none"
        });
        tf(e);
        e.className = "google-anno";
        e.appendChild(mJ(a));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(f);
        const g = cK(b, c, e);
        tJ(b, 999, e, h => {
            try {
                var k = b.l,
                    l = new jk;
                var m = wd(l, 4, d);
                var n = C(m, 1, c);
                var q = C(n, 2, g.l);
                const r = EJ(k, q);
                SI(a, b, r, d, !0, b.da.Ob ? b.G.get(d) || "" : "");
                return !1
            } finally {
                h.preventDefault(),
                    h.stopImmediatePropagation()
            }
        });
        return e
    }

    function cK(a, b, c) {
        const d = new aK;
        dK(a, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = b;
                    e = a.l;
                    var g = new mk;
                    g = f = K(g, 1, f);
                    f = e.handle;
                    var h = zJ(e, 5);
                    g = ld(h, 4, sk, g);
                    e = f.call(e, g);
                    d.j = e
                } else if (e = d, e.j) {
                f = a.l;
                g = new lk;
                h = g = K(g, 1, e.j);
                g = f.handle;
                var k = zJ(f, 6);
                h = ld(k, 5, sk, h);
                g.call(f, h);
                e.j = null
            }
        }).observe(c);
        return d
    }

    function bK(a) {
        JI(a);
        N(a, {
            "text-decoration": "underline"
        });
        N(a, {
            "text-decoration-style": "dotted"
        });
        N(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    };

    function XJ(a, b) {
        a.entries.push(Ld(b, !1));
        return a.entries.length - 1
    }

    function eK(a, b, c, d) {
        const e = new Tj;
        switch (a) {
            case "se":
                return b = new Sj, ld(e, 1, Uj, b);
            case "sw":
                return b = new Sj, ld(e, 2, Uj, b);
            case "si":
                return b = new Sj, ld(e, 3, Uj, b);
            case "sl":
                return b = new Sj, ld(e, 5, Uj, b);
            case "l":
                return b = new Sj, ld(e, 6, Uj, b)
        }
        if (c && b) {
            if (b.l) return a = new Rj, b = K(a, 1, b.l), ld(e, 7, Uj, b);
            if (c.j && b.v && (!d || !b.A)) return b = new Sj, ld(e, 8, Uj, b)
        }
        return null
    }
    var fK = class {
        constructor() {
            this.entries = [];
            this.j = 0;
            this.l = this.m = null
        }
    };

    function QI(a, b) {
        var c = a.handle,
            d = zJ(a, 9);
        b = ld(d, 9, sk, b);
        c.call(a, b)
    }

    function EJ(a, b) {
        var c = a.handle,
            d = zJ(a, 4);
        b = ld(d, 8, sk, b);
        return c.call(a, b)
    }

    function zJ(a, b) {
        var c = new rk;
        var d = a.A++;
        c = K(c, 1, d);
        b = K(c, 2, Math.round(a.j.La(b) - a.l));
        return jd(b, 10, a.m)
    }
    var gK = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.l = b;
            this.m = c;
            this.A = 1;
            this.v = [...d]
        }
        handle(a) {
            for (const b of this.v) b(a);
            return td(a, 1)
        }
    };

    function hK(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function iK(a) {
        return new Set(a.map(hK).filter(b => b.length))
    };
    var jK = class {
        constructor(a, b) {
            this.Yc = a;
            this.l = b
        }
        get j() {
            return this.Yc
        }
        get m() {
            return this.l
        }
    };
    class kK extends kJ {
        constructor(a, b, c, d, e) {
            super([b], [c], d);
            this.I = a;
            this.m = e || null
        }
        B() {
            const a = {};
            a.left = this.j[0] + "px";
            Nh(this.I, a)
        }
        C() {}
    };
    var lK = class {
        constructor(a) {
            this.ob = a.ob;
            this.Lb = a.Lb ? ? !1;
            this.Oc = a.Oc ? ? 300;
            this.hc = a.hc ? ? !1;
            this.Ob = a.Ob ? ? !1
        }
    };

    function PI(a, b, c, d, e) {
        return c.setTimeout(mK(a, b, d), e)
    }

    function XI(a) {
        return 2 === xd(a.na, 12)
    }

    function $I(a, b, c) {
        a = mK(a, 999, c);
        b.addEventListener("message", a);
        return a
    }

    function bJ(a, b, c) {
        return b.setInterval(mK(a, 1066, c), 1E3)
    }

    function tJ(a, b, c, d) {
        c.addEventListener("click", mK(a, b, d))
    }

    function uJ(a, b, c, d, e) {
        return new kK(b, c, d, a.A, e)
    }

    function dK(a, b) {
        return new IntersectionObserver(mK(a, 1065, b), {
            threshold: .98
        })
    }

    function mK(a, b, c) {
        return a.A.ta(b, c, void 0, d => void nK(a, d))
    }

    function nK(a, b) {
        b.e = `${a.da.ob}`;
        b.c = `${a.I}`
    }
    var pK = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n, q, r = !1) {
            this.B = a;
            this.j = b;
            this.na = c;
            this.I = d;
            this.C = e;
            this.m = f;
            this.A = g;
            this.l = h;
            this.sa = k;
            this.H = l;
            this.Ea = m;
            this.qb = n;
            this.Ub = r;
            this.da = new lK(q);
            this.v = Cb(oK, L(c, 7)) ? 1 : 0;
            this.G = new Map;
            this.F = new Map;
            if (this.da.Ob)
                for (const t of Yf(this.na)) null != z(t, 6) && this.G.set(L(t, 1), L(t, 6)), null != z(t, 7) && this.F.set(L(t, 1), L(t, 7))
        }
        Aa(a, b) {
            this.A.Aa(a, b, c => void nK(this, c))
        }
        La(a) {
            return this.H.La(a)
        }
    };
    const oK = ["ja", "zh_CN", "zh_TW"];

    function qK(a, b, c, d, e, f, g, h, k = !1) {
        try {
            Nb(a.document)
        } catch (gc) {
            return
        }
        var l; {
            const gc = dF(new hF(a), "__gads", h);
            if (gc) {
                var m = Vg(gc + "t2Z7mVic");
                var n = m ? m % 20 : null
            } else n = null
        }(l = n) || (l = Xg() ? null : Math.floor(20 * Sg()));
        const q = l;
        if (null != q) {
            const gc = b.na;
            if (gc) {
                var r = g.La(1),
                    t = r + b.da.Oc;
                if (!b.da.Lb && 0 < Yf(gc).length) {
                    var A = a.document;
                    const Ha = A.createElement("LINK"),
                        kb = O `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                    yf(Ha, kb, "stylesheet");
                    A.head.appendChild(Ha)
                }
                var x = 488 >
                    Q(a).clientWidth;
                if (W(uq) || xJ(a)) {
                    var B = Yf(b.na).length;
                    var G = new jK(b.Yc, B)
                } else G = null;
                if (W(uq) || xJ(a)) {
                    var D = G;
                    if (xJ(a)) var E = new lJ(!0, !1, !1, 0);
                    else {
                        var I = Pv({
                                J: a,
                                kd: 3E3,
                                md: 400,
                                sa: f,
                                uf: !0
                            }),
                            S = qJ(a, 2, f),
                            Ja = qJ(a, 1, f);
                        E = new lJ(0 < I || 0 === D.m ? !1 : !D.j || 0 < Ja || x && 0 === S, 0 === S, 0 === Ja, I)
                    }
                } else E = null;
                var ca = E,
                    ba = b.da,
                    Ba = new kk;
                var ua = K(Ba, 1, ba.ob);
                var kd = dd(ua, 2, q, 0);
                var T = new gK(g, r, kd, e);
                var U = new pK(c, x, gc, q, t, ca, d, T, f, g, b.Ea, b.qb, b.da, b.Ub),
                    lb = new fK; {
                    const Ha = a.document.body;
                    if (Ha && rK(Ha)) {
                        var md = k ?
                            Ha.innerText || "" : Ha.textContent || "";
                        b: switch (U.v) {
                            case 1:
                                let kb = 0;
                                for (let Va = md.length - 1; 0 <= Va; Va--) JJ.test(md[Va]) || kb++;
                                var et = kb;
                                break b;
                            default:
                                const Ma = md.trim();
                                et = "" === Ma ? 0 : Ma.split(/\s+/).length
                        }
                        var ft = et;
                        lb.j = ft;
                        var gt = hK(L(U.na, 7)); {
                            const kb = a.document.documentElement,
                                Ma = hK(kb.lang) || hK(kb.getAttribute("xml:lang"));
                            if ("" !== Ma) var ht = new Set([Ma]);
                            else {
                                var it = a.location;
                                const Va = it.host.match(/^[a-z]{2}\./i),
                                    ab = Va ? [Va[0]] : [];
                                for (const Ga of it.pathname.split("/")) 2 === Ga.length && ab.push(Ga);
                                var jt = iK(ab);
                                if (jt.size) var kt = jt;
                                else {
                                    const Ga = a.navigator;
                                    kt = iK(Ga.languages ? .length ? Ga.languages : [Ga.language])
                                }
                                ht = kt
                            }
                        }
                        var lt = ht;
                        lb.m = gt;
                        lb.l = new Set(lt);
                        var SK = W(vq) ? Math.min(U.Ea ? .Ib ? ? Number.MAX_SAFE_INTEGER, U.qb ? .Ib ? ? Number.MAX_SAFE_INTEGER) : Aq(wq);
                        if (ft < SK) var mt = "sw";
                        else {
                            if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) var nt = "si";
                            else {
                                if (lt.has(gt)) {
                                    if (U.La(5) >= U.C) var ot = "l";
                                    else {
                                        b: {
                                            const kb = U.na;
                                            if (0 === Yf(kb).length || !W(vq) && U.m && !U.m.j) var Ck = !0;
                                            else {
                                                if (W(vq) ||
                                                    !U.m) {
                                                    var pt = a.document;
                                                    const Ma = pt.createElement("style");
                                                    Ma.textContent = af(Mh `@font-face{font-family:"goog-matfb";size-adjust:39.13%;src:local("Times New Roman"),local("Tinos");}`);
                                                    pt.head.appendChild(Ma)
                                                }
                                                if (W(vq)) {
                                                    var Dk = MJ(Yf(kb), 2, U.v);
                                                    var Ek = MJ(Yf(kb), 1, U.v)
                                                } else {
                                                    var TK = Yf(kb);
                                                    const Ma = new NJ(U.v);
                                                    for (const Va of TK) {
                                                        const ab = L(Va, 1);
                                                        OJ(Ma, ab, ab);
                                                        for (const Ga of ad(Va, 5, Rc)) OJ(Ma, Ga, ab)
                                                    }
                                                    PJ(Ma);
                                                    Dk = Ek = new QJ(Ma)
                                                }
                                                var Fk;
                                                if (Fk = !!U.m && U.m.j) {
                                                    var UK = lb.j;
                                                    Fk = !W(vq) || UK >= (U.qb ? .Ib ? ? Number.MAX_SAFE_INTEGER)
                                                }
                                                if (Fk) {
                                                    if (SJ(Dk.j,
                                                            md)) {
                                                        var VK = U.v,
                                                            WK = new HJ(a, U);
                                                        const Ma = Dk.match(md),
                                                            Va = new Map;
                                                        for (const ab of Ma) {
                                                            const Ga = ab.j;
                                                            if (Va.has(Ga)) Va.get(Ga).matches.push(ab);
                                                            else {
                                                                const uh = new UJ(Ga);
                                                                uh.matches.push(ab);
                                                                Va.set(Ga, uh)
                                                            }
                                                        }
                                                        var XK = Array.from(Va.values());
                                                        for (const ab of XK) {
                                                            let Ga = null;
                                                            for (const uh of ab.matches) {
                                                                c: {
                                                                    var Gk = md,
                                                                        nd = uh,
                                                                        YK = lb;
                                                                    if (!LJ(Gk, nd.l, nd.m, VK)) {
                                                                        var qt = null;
                                                                        break c
                                                                    }
                                                                    const rt = Gk.substring(nd.l, nd.m + 1);
                                                                    var ZK = YK,
                                                                        $K = rt,
                                                                        aL = dJ(Gk, nd.l, nd.m + 1),
                                                                        bL = nd.j,
                                                                        cL = bk(1);
                                                                    var dL = wd(cL, 2, $K);
                                                                    var eL = wd(dL, 3, aL);
                                                                    var fL = wd(eL,
                                                                        4, bL);
                                                                    var gL = dd(fL, 5, null, 0);XJ(ZK, gL);qt = rt
                                                                }
                                                                const st = qt;null != st && (Ga = st)
                                                            }
                                                            if (null != Ga) {
                                                                var Hk = WK;
                                                                Hk.l.push(new IJ(ab.j, Ga));
                                                                Hk.v && GJ(Hk)
                                                            }
                                                        }
                                                    }
                                                    if (!W(vq)) {
                                                        Ck = !0;
                                                        break b
                                                    }
                                                }
                                                var hL = lb.j;
                                                Ck = !(!W(vq) || hL >= (U.Ea ? .Ib ? ? Number.MAX_SAFE_INTEGER)) || !SJ(Ek.j, md) || WJ(a, a.document.body, U, lb, Ek, new II(U.Ea ? .Lg ? ? null ? ? 100, (U.Ea ? .xd ? ? null) || 0, (U.Ea ? .Pc ? ? null) || 0, (U.Ea ? .ib ? ? null) || -1))
                                            }
                                        }
                                        ot = Ck ? "a" : "p"
                                    }
                                    var tt = ot
                                } else tt = "sl";
                                nt = tt
                            }
                            mt = nt
                        }
                        var ut = mt
                    } else ut = "se"
                }
                var iL = g.La(3) - r;
                if (!b.da.Lb && lb.entries.length && !H(gc, 13)) {
                    var vt =
                        a.document;
                    const Ha = vt.createElement("LINK");
                    yf(Ha, O `https://www.google.com/adsense/search/ads.js`, "prefetch");
                    Ha.as = "script";
                    Ha.fetchPriority = "low";
                    vt.head.appendChild(Ha)
                }
                var jL = b.dc,
                    kL = a.location.hostname,
                    lL = b.Pf,
                    wt = gc,
                    mL = G,
                    xt = ut,
                    nL = new hk,
                    oL = new Oj;
                var pL = wd(oL, 1, jL);
                var qL = wd(pL, 2, kL);
                var rL = vd(qL, 3, x);
                var sL = C(rL, 4, lb.j);
                var tL = jd(nL, 1, sL);
                var uL = new Qj,
                    vL = Array.from(lb.l ? ? []).sort();
                var wL = cd(uL, 1, vL, Qc);
                var xL = wd(wL, 2, lb.m);
                var yL = wd(xL, 3, lL);
                var zL = jd(tL, 2, yL);
                var AL = K(zL, 3, Math.round(iL));
                const yt = Yf(wt);
                let zt = 0;
                for (const Ha of yt) zt += (H(Ha, 3) ? 1 : 0) + (H(Ha, 4) ? 1 : 0) + ad(Ha, 5, Rc).length;
                var BL = new gk;
                var CL = C(BL, 1, yt.length);
                var DL = C(CL, 2, zt);
                var Ik = jd(AL, 6, DL);
                const At = eK(xt, ca, mL, x);
                if (At) {
                    var Bt = new Wj;
                    pd(Bt, 1, Tj, At);
                    ld(Ik, 5, ik, Bt)
                } else {
                    var EL = new fk;
                    var FL = vd(EL, 1, "p" === xt);
                    var GL = od(FL, 2, lb.entries);
                    var HL = Yf(wt).length;
                    var IL = K(GL, 3, HL);
                    ld(Ik, 4, ik, IL)
                }
                var JL = T.handle,
                    KL = zJ(T, 3);
                var LL = ld(KL, 3, sk, Ik);
                JL.call(T, LL)
            }
        }
    }

    function rK(a) {
        try {
            Nb(new ResizeObserver(() => {})), Nb(new MutationObserver(() => {}))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    };

    function sK(a, b, c, d, e) {
        if (!Z(IC(), 29, !1)) {
            NC(IC(), 29, !0);
            var f = a.performance;
            f ? .now && qK(a, c, d, Qk, [g => void fD(b, g)], Pk, new CI(f), e, W(Vp))
        }
    };

    function tK({
        Ud: a,
        Oe: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function uK(a) {
        Qk.yd(b => {
            b.shv = String(a);
            b.mjsv = tK({
                Ud: "m202304100102",
                Oe: a
            });
            b.eid = cF(u)
        })
    }

    function vK(a) {
        uK(L(a, 2));
        a = H(a, 6);
        Qd(TE, Ti);
        TE = a
    };
    var wK = "undefined" === typeof sttc ? void 0 : sttc;

    function xK(a) {
        var b = Qk;
        try {
            return Qd(a, Si), new OE(JSON.parse(a))
        } catch (c) {
            b.ha(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new OE
    };

    function yK(a) {
        if (a.j) return a.j;
        a.K && a.K(a.m) ? a.j = a.m : a.j = ih(a.m, a.L);
        return a.j ? ? null
    }

    function zK(a) {
        a.v || (a.v = b => {
            try {
                var c = a.I ? a.I(b) : void 0;
                if (c) {
                    var d = c.ud,
                        e = a.G.get(d);
                    if (e) {
                        a.G.delete(d);
                        var f = a.C.get(c.ud);
                        a.C.delete(d);
                        e(f, c.payload)
                    }
                }
            } catch (g) {}
        }, ie(a.m, "message", a.v))
    }

    function AK(a, b) {
        if (yK(a))
            if (a.j === a.m) {
                var c = a.H.get("getDataWithCallback");
                c && c(a.j, b)
            } else if ((c = a.A.get("getDataWithCallback")) && c.jd) {
            zK(a);
            var d = ++a.V;
            a.G.set(d, c.Ce);
            a.C.set(d, c.se(b));
            a.j.postMessage(c.jd(b, d), "*")
        }
    }
    var BK = class extends Ak {
        constructor(a, b, c, d) {
            super();
            this.L = b;
            this.K = c;
            this.I = d;
            this.H = new Map;
            this.V = 0;
            this.A = new Map;
            this.G = new Map;
            this.C = new Map;
            this.v = void 0;
            this.m = a
        }
        l() {
            delete this.j;
            this.H.clear();
            this.A.clear();
            this.G.clear();
            this.C.clear();
            this.v && (je(this.m, "message", this.v), delete this.v);
            delete this.m;
            delete this.I;
            super.l()
        }
    };
    const CK = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.callback({
                    consentData: c ? ? void 0,
                    ce: d ? void 0 : 2
                })
            })
        },
        DK = {
            se: a => a.callback,
            jd: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Ce: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    ce: b.success ? void 0 : 2
                })
            }
        };

    function EK(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            ud: b.__uspapiReturn.callId
        }
    }

    function FK(a, b) {
        let c = {};
        if (yK(a.caller)) {
            var d = ce(() => {
                b(c)
            });
            AK(a.caller, {
                callback: e => {
                    e.ce || (c = e.consentData);
                    d()
                }
            });
            setTimeout(d, 500)
        } else b(c)
    }
    var GK = class extends Ak {
        constructor(a) {
            super();
            this.caller = new BK(a, "__uspapiLocator", b => "function" === typeof b.__uspapi, EK);
            this.caller.H.set("getDataWithCallback", CK);
            this.caller.A.set("getDataWithCallback", DK)
        }
        l() {
            this.caller.xa();
            super.l()
        }
    };
    var HK = Rd(class extends M {
        constructor(a) {
            super(a)
        }
    });
    const IK = (a, b) => {
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c => {
                c = HK(c);
                b.callback({
                    consentData: c
                })
            })
        },
        JK = {
            se: a => a.callback,
            jd: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command
                }
            }),
            Ce: (a, b) => {
                a({
                    consentData: b
                })
            }
        };

    function KK(a) {
        a = HK(a.data.__fciReturn);
        return {
            payload: a,
            ud: td(a, 1)
        }
    }

    function LK(a) {
        a.m || (a.j = !!yK(a.caller), a.m = !0);
        return a.j
    }

    function MK(a) {
        return new Promise(b => {
            LK(a) && AK(a.caller, {
                command: "loaded",
                callback: c => {
                    b(c.consentData)
                }
            })
        })
    }
    var NK = class extends Ak {
        constructor(a) {
            super();
            this.j = this.m = !1;
            this.caller = new BK(a, "googlefcPresent", void 0, KK);
            this.caller.H.set("getDataWithCallback", IK);
            this.caller.A.set("getDataWithCallback", JK)
        }
        l() {
            this.caller.xa();
            super.l()
        }
    };

    function OK(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = vg(a.j.P() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = PK(a, b, c, a.j.j.elementsFromPoint(hg(c.left + c.width / 2, c.left, c.right - 1), hg(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = PK(a, b, c, a.j.j.elementsFromPoint(hg(c.left + c.width / 2, c.left, c.right - 1), hg(c.top + 2, c.top, c.bottom - 1)), 2, e.Ia),
            g = PK(a, b, c, a.j.j.elementsFromPoint(hg(c.left + 2, c.left, c.right - 1), hg(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Ia, ...f.Ia]);
        const h = PK(a, b, c, a.j.j.elementsFromPoint(hg(c.right - 1 - 2, c.left, c.right - 1), hg(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Ia, ...f.Ia, ...g.Ia]);
        var k = QK(a, b, c),
            l = n => Cb(a.m, n.overlapType) && Cb(a.v, n.overlapDepth) && Cb(a.l, n.overlapDetectionPoint);
        e = yb([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = yb(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = wg(a.j.j);
        const m = new zh(c.left, c.top, c.width, c.height);
        e = [...zb(e, n => new zh(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...Lb(zb(l, n => Bh(m, n.elementRect))), ...yb(Bh(m, new zh(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? RK(m, e) : ML(c, e)
        }
    }

    function NL(a, b) {
        const c = a.j.P(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Oi,
                                        m = Ni(l, () => OK(a, k));
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))), h.disconnect(), e(m))
                                }, OL);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function PK(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Ia: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const q = d[n];
            if (q === b) continue;
            if (Cb(f, q)) continue;
            h.push(q);
            const r = q.getBoundingClientRect();
            if (a.j.contains(q, b)) {
                g.push(PL(a, c, q, r, 1, e));
                continue
            }
            if (a.j.contains(b, q)) {
                g.push(PL(a, c, q, r, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    m = q;
                const x = k.j.Jf(l, m);
                if (!x) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: B,
                    Wa: G
                } = QL(k, l, x, m) || {},
                {
                    suspectAncestor: D,
                    Wa: E
                } = QL(k, m, x, l) || {};k = B && G && D && E ? G <= E ? {
                    suspectAncestor: B,
                    overlapType: RL[G]
                } : {
                    suspectAncestor: D,
                    overlapType: SL[E]
                } : B && G ? {
                    suspectAncestor: B,
                    overlapType: RL[G]
                } : D && E ? {
                    suspectAncestor: D,
                    overlapType: SL[E]
                } : null
            }
            const {
                suspectAncestor: t,
                overlapType: A
            } = k || {};
            t && A ? g.push(PL(a, c, q, r, A, e, t)) : g.push(PL(a, c, q, r, 9, e))
        }
        return {
            entries: g,
            Ia: h
        }
    }

    function QK(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Rg(b, a.j.P());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(PL(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(PL(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(PL(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function RK(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Ah(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function ML(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function PL(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Cb(a.m, e) && Cb(a.l, f)) {
            b = new wh(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = TL(a, c)) && yh(b, a)) c = 4;
            else {
                a = UL(c, d);
                if (Qb) {
                    e = Xh(c, "paddingLeft");
                    f = Xh(c, "paddingRight");
                    var k = Xh(c, "paddingTop"),
                        l = Xh(c, "paddingBottom");
                    e = new wh(k, f, l, e)
                } else e = Qh(c, "paddingLeft"), f = Qh(c, "paddingRight"), k = Qh(c, "paddingTop"), l = Qh(c, "paddingBottom"), e = new wh(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                yh(b, new wh(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = UL(c, d), c = yh(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function QL(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.P();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Rg(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Wa: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Wa: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Wa: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = VL(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        Wa: 4
                    }
                }
            }
        }
        return (a = VL(a, e, b)) ? {
                suspectAncestor: a,
                Wa: 5
            } :
            null
    }

    function VL(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Rg(f, a.j.P());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function TL(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new wh(a.top, a.right, a.bottom, a.left)
    }

    function UL(a, b) {
        if (!Qb || 9 <= Number(cc)) {
            var c = Qh(a, "borderLeftWidth");
            d = Qh(a, "borderRightWidth");
            e = Qh(a, "borderTopWidth");
            a = Qh(a, "borderBottomWidth");
            c = new wh(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Zh(a, "borderLeft");
            var d = Zh(a, "borderRight"),
                e = Zh(a, "borderTop");
            a = Zh(a, "borderBottom");
            c = new wh(e, d, a, c)
        }
        return new wh(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class WL {
        constructor(a) {
            var b = XL;
            this.j = sg(a);
            this.m = [5, 8, 9];
            this.v = [3, 4];
            this.l = b
        }
    }
    const RL = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        SL = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    yb(Ug({
        Di: 1,
        Ei: 2,
        qk: 3,
        rk: 4,
        tk: 5,
        zi: 6,
        Ai: 7,
        Ci: 8,
        Dj: 9,
        sk: 10,
        Bi: 11,
        pk: 12,
        yi: 13
    }), a => !Cb([1, 2], a));
    Ug({
        Qh: 1,
        Fj: 2,
        bi: 3,
        uk: 4
    });
    const XL = Ug({
            Rh: 1,
            xk: 2,
            qj: 3,
            ck: 4
        }),
        OL = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function YL(a, b, c, d) {
        const e = new Ju;
        let f = "";
        const g = k => {
            try {
                const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (je(a, "message", g), l.error ? e.j(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = "function" === typeof a.gmaSdk ? .getQueryInfo ? a.gmaSdk : void 0;
        if (h) return ie(a, "message", g), f = c(h), e.promise;
        c = "function" === typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage || "function" === typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage ? a.webkit.messageHandlers : void 0;
        return c ? (f = String(Math.floor(2147483647 * Sg())), ie(a, "message", g), b(c, f), e.promise) : null
    }

    function ZL(a) {
        return YL(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };
    const $L = (a, b) => {
        try {
            const g = void 0 === H(b, 6) ? !0 : H(b, 6);
            a: switch (xd(b, 4)) {
                case 1:
                    var c = "pt";
                    break a;
                case 2:
                    c = "cr";
                    break a;
                default:
                    c = ""
            }
            var d = new Of(Mf(xd(b, 2)), L(b, 3), c),
                e = J(b, If, 5) ? .j() ? ? "";
            d.Gb = e;
            d.j = g;
            d.win = a;
            var f = d.build();
            Gf(f)
        } catch {}
    };

    function aM(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? $L(a, b) : ie(a, "load", () => void $L(a, b)))
    };

    function bM(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function cM(a) {
        if (a === a.top || Lg(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && bM(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new Ju;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                yb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var dM = class extends M {
            constructor(a) {
                super(a)
            }
        },
        eM = Rd(dM),
        fM = [1, 3];
    const gM = O `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function hM(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: k
                }) => k)
            }
            const e = Qg("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Be(gM).toString();
            const f = (new URL(gM.toString())).origin,
                g = EE({
                    destination: a,
                    Ca: e,
                    origin: f,
                    Va: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                "goog:topics:frame:handshake:ack" ===
                h && c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function iM(a, b, c) {
        var d = Qk;
        const {
            Zb: e,
            Yb: f
        } = jM(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: !1
        }).then(g => {
            let h = f;
            if (g instanceof Uint8Array) h || (h = !(e instanceof Uint8Array && Jb(g, e)));
            else if (Ui()(g)) h || (h = g !== e);
            else return d.ha(989, Error(JSON.stringify(g))), 7;
            if (h && c) try {
                var k = new dM;
                var l = C(k, 2, Fi());
                g instanceof Uint8Array ? ed(l, 1, fM, Hc(g, !1, !1)) : ed(l, 3, fM, g);
                c.setItem("goog:cached:topics",
                    Md(l))
            } catch {}
            return g
        }), b.getTopicsPromise = a);
        return e && !f ? Promise.resolve(e) : b.getTopicsPromise
    }

    function jM(a) {
        if (!a) return {
            Zb: null,
            Yb: !0
        };
        try {
            const l = a.getItem("goog:cached:topics");
            if (!l) return {
                Zb: null,
                Yb: !0
            };
            const m = eM(l);
            let n;
            const q = fd(m, fM);
            switch (q) {
                case 0:
                    n = null;
                    break;
                case 1:
                    var b, c = 1 === fd(m, fM) ? 1 : -1;
                    a = m;
                    const t = z(a, c),
                        A = Hc(t, !0, !!(w(a.N) & 18));
                    null != A && A !== t && Vc(a, c, A);
                    var d = A;
                    var e = null == d ? tc() : d;
                    sc(qc);
                    var f = e.j;
                    if (null == f || oc(f)) var g = f;
                    else {
                        if ("string" === typeof f) {
                            c = f;
                            lc.test(c) && (c = c.replace(lc, nc));
                            let x;
                            x = atob(c);
                            const B = new Uint8Array(x.length);
                            for (c = 0; c < x.length; c++) B[c] = x.charCodeAt(c);
                            var h = B
                        } else h = null;
                        g = h
                    }
                    var k = g;
                    n = (b = null == k ? k : e.j = k) ? new Uint8Array(b) : pc || (pc = new Uint8Array(0));
                    break;
                case 3:
                    n = xd(m, 3 === fd(m, fM) ? 3 : -1);
                    break;
                default:
                    wf(q, void 0)
            }
            const r = td(m, 2) + 6048E5 < Fi();
            return {
                Zb: n,
                Yb: r
            }
        } catch {
            return {
                Zb: null,
                Yb: !0
            }
        }
    };

    function kM(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }

    function lM([, a, b, c]) {
        return 30 * (12 * Number(a) + Number(b) - 1) + Number(c)
    }

    function mM(a, b) {
        const c = /m(\d{4})(\d\d)(\d\d)\d+/;
        a = c.exec(a.google_lrv);
        b = c.exec(b);
        return a && b ? lM(b) - lM(a) > Aq(Lp) : !0
    }
    async function nM({
        la: a,
        ba: b,
        Ma: c,
        slot: d
    }) {
        const e = d.vars,
            f = Og(d.pubWin),
            g = kM(d),
            h = new lG({
                J: f,
                pubWin: d.pubWin,
                D: e,
                la: a,
                ba: b,
                Ma: c,
                Y: g
            });
        if (0 < Aq(Lp) && mM(e, c)) return h;
        h.G = Date.now();
        il(1, [h.D]);
        Sk(1032, () => {
            if (f && W(sq)) {
                var k = h.D;
                Z(IC(), 32, !1) || (NC(IC(), 32, !0), XH(f, "sa" === k.google_loader_used ? 5 : 9))
            }
        });
        try {
            await oM(h)
        } catch (k) {
            if (!Vk(159, k)) throw k;
        }
        Sk(639, () => {
            {
                var k = h.D;
                const m = h.J;
                if (m && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                    var l;
                    (l = (l = m.document.getElementById(k.google_async_iframe_id)) ?
                        Fg(l, "INS", "adsbygoogle") : null) ? (k = new kG(m, l, k), k.j = u.setInterval(Ca(k.v, k), 500), k.v(), k = !0) : k = !1
                } else k = !1
            }
            return k
        });
        Wk(h.pubWin, "affa", k => {
            Sk(1008, () => {
                e.google_ad_client && f && !ob() && pM(f, e, BI(k.config), h.l, L(a, 8))
            }, qM)
        });
        e.google_ad_client && f && !ob() && f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) && pM(f, e, rM(), h.l, L(a, 8));
        return h
    }

    function qM(a) {
        a.e = `${Aq(aq)}`
    }

    function pM(a, b, c, d, e) {
        var f = P(gD);
        var g = b.google_page_url;
        g = "string" === typeof g ? g : "";
        var h = "on" === b.google_adtest;
        const k = J(c, KE, 2);
        try {
            const n = a ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
            if (n) {
                var l = decodeURIComponent(n[1]);
                var m = ag(l)
            } else m = null
        } catch (n) {
            m = null
        }
        m || (m = W(Sp) ? J(c, $f, 1) ? ? null : null);
        c = {
            na: m,
            dc: g,
            Yc: !(!k ? .j() || !(488 > Q(a).clientWidth) && k ? .v()),
            Pf: e,
            Ea: {
                Lg: Aq(Pp),
                Ib: 300,
                xd: 2,
                Pc: 5,
                ib: -1
            },
            qb: {
                Ib: 50,
                Dd: Aq($p)
            },
            da: new lK({
                ob: Aq(aq),
                Lb: W(Wp),
                Oc: Aq(Op),
                hc: W(Rp),
                Ob: W(Yp)
            }),
            Ub: h
        };
        sK(a, f,
            c, b.google_ad_client, d)
    }

    function rM() {
        const a = new AI;
        if (W(uq)) {
            var b = new KE;
            b = vd(b, 5, !0);
            b = vd(b, 8, !0);
            jd(a, 2, b)
        }
        return a
    }

    function oM(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        bF(13);
        bF(11);
        var b = IC(),
            c = Z(b, 23, !1);
        c || NC(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.la;
            b = void 0 !== Xc(c, KE, 13 === fd(c, PE) ? 13 : -1) ? J(yd(c, KE, 13, PE), QD, 2) : Jb(yd(c, ME, 14, PE) ? .j() ? ? [], [b]) ? J(J(yd(c, ME, 14, PE), KE, 2), QD, 2) : new QD;
            b = new RD(a.pubWin, a.D.google_ad_client, b, H(a.la, 6));
            b.l = !0;
            const e = J(b.A, xo, 1);
            if (b.l) {
                c = b.j;
                if (b.v && !Yy(e)) {
                    var d = new ED;
                    d = C(d, 1, 1)
                } else d = null;
                if (d) {
                    d = Md(d);
                    try {
                        c.localStorage.setItem("google_auto_fc_cmp_setting",
                            d)
                    } catch (f) {}
                }
            }
            e && Zy(new $y(b.j, new uz(b.j, b.m), e, new nw(b.j)))
        }
        b = !Dh() && !nb();
        return !b || b && !sM(a) ? tM(a) : Promise.resolve()
    }

    function uM(a, b, c = !1) {
        b = JE(a.J, b);
        const d = Hh() || Kq(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = Mq(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function sM(a) {
        return vM(a) || wM(a)
    }

    function vM(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = u.setTimeout(() => {
                Uk("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = Tk(450, () => {
                b.google_pause_ad_requests = !1;
                u.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                sM(a) || tM(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function wM(a) {
        const b = a.pubWin.document,
            c = xM();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.Y,
            e = EG(b);
        if (!e) return !1;
        if (!FG(b)) return yM(a, c.visible, d);
        const f = 3 === DG(b);
        if (uM(a, d) <= c.hidden && !f) return !1;
        let g = Tk(332, () => {
            !FG(b) && g && (je(b, e, g), yM(a, c.visible, d) || tM(a), g = null)
        });
        return ie(b, e, g)
    }

    function xM() {
        const a = {
            hidden: 0,
            visible: 3
        };
        u.IntersectionObserver || (a.visible = -1);
        Ig() && (a.visible *= 2);
        return a
    }

    function yM(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.D;
        if (!Dl(d.google_reactive_ad_format) && (IF(d) || d.google_reactive_ads_config) || !Nq(c) || uM(a, c) <= b) return !1;
        var e = IC(),
            f = Z(e, 8, {});
        e = Z(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new u.IntersectionObserver((l, m) => {
                xb(l, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.H = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ja(Promise, "any").call(Promise, [f, e]).then(() => {
            Sk(294, () => {
                tM(a)
            })
        });
        return !0
    }

    function tM(a) {
        Sk(326, () => {
            if (1 === fi(a.D)) {
                var d = W(tq),
                    e = d || W(rq),
                    f = a.pubWin;
                if (e && f === a.J) {
                    var g = new cl;
                    e = new dl;
                    var h = g.setCorrelator(rh(a.pubWin));
                    var k = cF(a.pubWin);
                    h = wd(h, 5, k);
                    zd(h, 2, 1);
                    g = jd(e, 1, g);
                    h = new bl;
                    h = vd(h, 10, !0);
                    k = W(kq);
                    h = vd(h, 8, k);
                    k = W(lq);
                    h = vd(h, 12, k);
                    k = W(oq);
                    h = vd(h, 7, k);
                    k = W(nq);
                    h = vd(h, 13, k);
                    jd(g, 2, h);
                    f.google_rum_config = e.toJSON();
                    Pg(f.document, H(a.la, 9) && d ? a.ba.qg : a.ba.rg)
                } else Mi(Rk)
            }
        });
        a.D.google_ad_channel = zM(a, a.D.google_ad_channel);
        a.D.google_tag_partner = AM(a, a.D.google_tag_partner);
        BM(a);
        var b = a.D.google_start_time;
        "number" === typeof b && (ml = b, a.D.google_start_time = null);
        IE(a);
        a.J && MF(a.J, a.ba.zf);
        QC() && TD({
            win: a.pubWin,
            webPropertyCode: a.D.google_ad_client,
            Cb: a.ba.Cb
        });
        IF(a.D) && (iy() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        CM(a.J);
        b = "function" === typeof a.pubWin.document.browsingTopics && XE("browsing-topics", a.pubWin.document);
        const c = XE("shared-storage", a.pubWin.document);
        if (b || c) try {
            a.A = hM(a.pubWin)
        } catch (d) {
            Vk(984, d)
        }
        return DM(a)
    }

    function zM(a, b) {
        return (b ? [b] : []).concat(GC(a.D).ad_channels || []).join("+")
    }

    function AM(a, b) {
        return (b ? [b] : []).concat(GC(a.D).tag_partners || []).join("+")
    }

    function EM(a) {
        const b = Qg("IFRAME");
        Tg(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function FM(a, b, c) {
        return 9 === a.D.google_reactive_ad_format && Fg(a.Y, null, "fsi_container") ? (a.Y.appendChild(b), Promise.resolve(b)) : TF(a.ba.Ie, 525, d => {
            a.Y.appendChild(b);
            d.createAdSlot(a.J, a.D, b, a.Y.parentElement, ID(c, a.pubWin));
            return b
        })
    }

    function GM(a, b, c) {
        P(gD).dc = a.D.google_page_url;
        aM(a.pubWin, vd(Kf(zd(zd(Jf(new Lf, Hf(new If, String(rh(a.pubWin)))), 4, 1), 2, 1), L(a.la, 2)), 6, !0));
        const d = a.J;
        a.D.google_acr && a.D.google_acr(b);
        ie(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? GC(d).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || f) && d && d === a.pubWin && HM(d, a, a.Y, b)
        });
        var e = f => {
            f && a.m.push(() => {
                f.xa()
            })
        };
        IM(a, b);
        JM(a, b);
        !d || IF(a.D) && !VF(a.D) || (e(new qH(d, b, a.D)), e(new AG(a, b)), e(d.IntersectionObserver ? null : new CG(d, b, a.Y)));
        d && (e(new uG(d, b)), a.m.push(eG(d, a.D)), P(jG).init(d), a.m.push(qG(d, a.Y, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        if (null != c) {
            e = a.Y;
            const f = e.parentElement;
            (f && $q.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.Y;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        KM(a)
    }

    function IM(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = PC();
        let f = null;
        const g = Wk(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.m.push(g)
    }

    function LM(a, b) {
        var c = dF(a, "__gpi_opt_out", b.l);
        c && (c = Uf(Tf(Sf(Rf(new Vf, c), 2147483647), "/"), b.pubWin.location.hostname), eF(a, "__gpi_opt_out", c, b.l))
    }

    function JM(a, b) {
        const c = Wk(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = Uf(Tf(Sf(Rf(new Vf, d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new hF(a.pubWin);
                eF(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) fF(f, "__gads", a.l), fF(f, "__gpi", a.l)
            }
        });
        a.m.push(c)
    }

    function KM(a) {
        const b = Dh(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                ie(a.pubWin, "message", Qk.ta(616, c));
                a.m.push(() => {
                    je(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function HM(a, b, c, d) {
        NL(new WL(a), c).then(e => {
            il(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && $q.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.D.armr || "",
                g = e.executionTime || "",
                h = null == b.D.iaaso ? "" : Number(b.D.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = zb(e.entries, x => `${x.overlapType}:${x.overlapDepth}:${x.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                q =
                m * e.targetRect.width * e.targetRect.height,
                r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                t = hi(e.target),
                A = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            Uk("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: cF(b.D),
                et: g,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.D.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.D.google_responsive_auto_format,
                roa: q,
                slot: b.D.google_ad_slot,
                sp: r,
                tgt: t,
                tr: A,
                url: b.D.google_page_url,
                vp: e,
                pvc: rh(a)
            }, 1)
        }).catch(e => {
            il(8, ["Error:", e.message, c]);
            Uk("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function MM(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function NM(a, b, c, d) {
        var e = a.D;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var k = WF(e),
            l = {
                id: f,
                name: f
            };
        l.style = k ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = gh();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var q = m.indexOf("?");
                if (0 > q || q > n) {
                    q = n;
                    var r =
                        ""
                } else r = m.substring(q + 1, n);
                m = [m.slice(0, q), r, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            l.sandbox = fh().join(" ")
        }
        W(hp) && !1 === e.google_video_play_muted && MM("autoplay", l);
        n = Aq(pb() ? Cp : Gp);
        m = b;
        m.length > n && (m = m.substring(0, n - 8), m = m.replace(/%\w?$/, ""), m = m.replace(/&[^=]*=?$/, ""), m += "&trunc=1");
        m !== b && (n -= 8, q = b.lastIndexOf("&", n), -1 === q && (q = b.lastIndexOf("?", n)), Uk("trn", {
            ol: b.length,
            tr: -1 === q ? "" : b.substring(q + 1),
            url: b
        }, .01));
        b = m;
        n = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" :
            b;
        null != g && (l.width = String(g));
        null != h && (l.height = String(h));
        l.frameborder = "0";
        l.marginwidth = "0";
        l.marginheight = "0";
        l.vspace = "0";
        l.hspace = "0";
        l.allowtransparency = "true";
        l.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (n = ""; 0 < m--;) n += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
            n = m = n;
            q = ch();
            b = b + (-1 == b.indexOf("?") ? "?" : "&") + [0 < q.length ? "google_debug" + (q ? "=" + q : "") + "&" : "", "xpc=", n, "&p=", encodeURIComponent(u.document.location.protocol), "//", encodeURIComponent(u.document.location.host)].join("")
        } else b =
            n;
        e.dash && (l.srcdoc = e.dash);
        a.pubWin.document.featurePolicy ? .features().includes("attribution-reporting") && MM("attribution-reporting", l);
        W(hq) && (n = a.pubWin, void 0 !== n.credentialless && (W(iq) || n.crossOriginIsolated) && (l.credentialless = "true"));
        if (k) l.src = b, l = EM(l), l = FM(a, l, d);
        else {
            d = {};
            d.dtd = oG((new Date).getTime(), ml);
            d = bi(d, b);
            l.src = d;
            d = a.pubWin;
            d = d == d.top;
            l = EM(l);
            d && a.m.push(Jh(a.pubWin, l));
            a.Y.style.visibility = "visible";
            d = a.Y;
            for (k = l; n = d.firstChild;) d.removeChild(n);
            d.appendChild(k);
            l = Promise.resolve(l)
        }
        c &&
            (c = a.ba.Mg, e = {
                id: f,
                url: b,
                width: g,
                height: h,
                Va: m,
                pg: a.pubWin,
                gf: f,
                Ok: "google_expandable_ad_slot" + fi(e),
                Wf: c.toString(),
                dd: a.pubWin
            }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Va || !e.dd ? void 0 : Wk(e.dd, "ct", Da(Zk, e, c)), e && a.m.push(e));
        return l
    }
    async function OM(a) {
        var b = a.D,
            c = a.pubWin,
            d = a.l;
        F(d, 5) && LM(new hF(a.pubWin), a);
        var e = ID(d, a.pubWin);
        if (!F(d, 5)) return Uk("afc_noc_req", {}, Aq(gp)), Promise.resolve();
        F(d, 5) && lF(d, a.pubWin, a.D.google_ad_client);
        var f = a.D.google_reactive_ads_config;
        f && (SF(a.J, f), XF(f, a, ID(d)), f = f.page_level_pubvars, va(f) && qe(a.D, f));
        F(d, 5) && await PM();
        f = XE("shared-storage", a.pubWin.document);
        a.A && F(d, 5) && f && !Z(IC(), 34, !1) && (NC(IC(), 34, !0), f = a.A.then(g => {
                g({
                    message: "goog:spam:client_age",
                    pvsid: rh(a.pubWin),
                    clientAgeIframe: W(bq)
                })
            }),
            Qk.Aa(1069, f));
        if ((W(eq) ? XE("browsing-topics", a.pubWin.document) : 1) && a.A)
            if (QM(a)) {
                a.v = 1;
                const g = ID(a.l, a.pubWin);
                f = a.A.then(async k => {
                    await iM(k, a.pubWin, g).then(l => {
                        a.v = l
                    })
                });
                const h = Aq(fq);
                0 < h ? await Promise.race([f, th(h)]) : await f
            } else a.v = 5;
        f = "";
        WF(b) ? (f = a.ba.Ng.toString() + "#" + eI(b), mI(b, IC()), RM(b)) : (5 === b.google_pgb_reactive && b.google_reactive_ads_config || !JF(b) || HF(c, b, e)) && RM(b) && (f = bI(a, d));
        il(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || ei(c);
        e = fi(b);
        b = a.pubWin === a.J ?
            "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Ea()).toString(36)}`;
        c = 0 < uM(a, a.Y, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = IC(), e.btvi = Z(c, 21, 1), OC(c, 21));
        f = bi(e, f);
        d = NM(a, f, 0 === a.C, d);
        a.D.rpe && kH(a.pubWin, a.Y, {
            height: a.D.google_ad_height,
            Cd: "force",
            Ld: !0,
            xg: !0,
            Kc: a.D.google_ad_client
        });
        d = await d;
        try {
            GM(a, d, b)
        } catch (g) {
            Vk(223, g)
        }
    }

    function PM() {
        return (sb() ? 0 <= bb(11) : rb() && 0 <= bb(65)) ? new Promise(a => {
            TH(a.bind(null, !0))
        }) : (TH(null), Promise.resolve(!1))
    }

    function SM(a) {
        const b = new GK(a);
        return new Promise(c => {
            FK(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function TM(a) {
        var b = hh(u.top, "googlefcPresent");
        u.googlefc && !b && Uk("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function UM(a) {
        return LK(a) ? MK(a) : Promise.resolve(null)
    }

    function VM(a, b) {
        const c = b.Gg;
        b = b.uspString;
        c ? mG(a, c) : LD(a, !0);
        b && C(a, 1, b)
    }

    function WM(a) {
        const b = Aq(dp);
        if (0 >= b) return null;
        const c = Fi(),
            d = ZL(a.pubWin);
        if (!d) return null;
        a.B = "0";
        return Promise.race([d, th(b, "0")]).then(e => {
            Uk("adsense_paw", {
                time: Fi() - c
            });
            1E4 < e ? .length ? Vk(809, Error(`ML:${e.length}`)) : a.B = e
        }).catch(e => {
            Vk(809, e)
        })
    }

    function XM(a) {
        const b = Fi();
        return Promise.race([Sk(832, () => cM(a)), th(200)]).then(c => {
            Uk("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: Fi() - b,
                tms: 200
            });
            return c ? .yb
        })
    }
    async function YM(a) {
        const b = WM(a),
            c = Sk(868, () => XM(a.pubWin));
        PH(L(a.la, 8));
        nE(a.pubWin);
        TM(a.D.google_ad_client);
        var d = new NK(a.pubWin);
        await UM(d);
        a.l = new MD;
        d = [nG(a), SM(a.pubWin)];
        d = await Promise.all(d);
        VM(a.l, {
            Gg: d[0],
            uspString: d[1]
        });
        await b;
        a.yb = await c || "";
        await OM(a)
    }

    function QM(a) {
        const b = a.l;
        a = a.D;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!F(b, 5) && !b.j() && !RC() && !F(b, 9)
    }

    function DM(a) {
        var b = a.pubWin.document,
            c = a.D;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2; {
                c = navigator;
                const l = c.userAgent,
                    m = c.platform,
                    n = c.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(m) && /^Opera/.test(l)) var g = !1;
                else if (/Win/.test(m) && /Trident/.test(l) && 11 <= b.documentMode) g = !0;
                else {
                    var h = (/WebKit\/(\d+)/.exec(l) || [0, 0])[1],
                        k = (/rv:(\d+\.\d+)/.exec(l) || [0, 0])[1];
                    g = !h && "Gecko" === n && 27 <= k && !/ rv: 1\.8([^.] |\.0) /.test(l) || 536 <= h ? !0 : !1
                }
            }
            g || (f |= 4);
            Rq(a.pubWin, d, e) && (f |= 2)
        } catch (l) {
            f |= 8
        }
        a.C = f;
        0 === a.C || (a.D.google_allow_expandable_ads = !1);
        vh(a.pubWin) !== a.pubWin && (a.j |= 4);
        3 === DG(a.pubWin.document) && (a.j |= 32);
        if (b = a.J) b = a.J, b = !(Q(b).scrollWidth <= Q(b).clientWidth);
        b && (a.j |= 1024);
        a.pubWin.Prototype ? .Version && (a.j |= 16384);
        a.D.google_loader_features_used && (a.j |= a.D.google_loader_features_used);
        a.F = 2;
        return YM(a)
    }

    function RM(a) {
        const b = IC(),
            c = a.google_ad_section;
        IF(a) && OC(b, 15);
        if (ki(a)) {
            if (100 < OC(b, 5)) return !1
        } else if (100 < OC(b, 6) - Z(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function BM(a) {
        const b = a.J;
        if (b && !GC(b).ads_density_stats_processed && !Dh(b) && (GC(b).ads_density_stats_processed = !0, W(Hp) || .01 > Sg())) {
            const c = () => {
                if (b) {
                    var d = IB(DB(b), a.D.google_ad_client, b.location.hostname, cF(a.D).split(","));
                    Uk("ama_stats", d, 1)
                }
            };
            sh(b, () => {
                u.setTimeout(c, 1E3)
            })
        }
    }

    function CM(a) {
        a && !GC(a).host_pinged_back && (GC(a).host_pinged_back = !0, Uk("abg_host", {
            host: a.location.host
        }, .01))
    };
    (function(a, b, c) {
        Sk(843, () => {
            if (!u.google_sa_impl) {
                var d = xK(a);
                vK(d);
                il(16, [3, d.toJSON()]);
                var e = tK({
                        Ud: b,
                        Oe: L(d, 2)
                    }),
                    f = c(e, d);
                u.google_sa_impl = h => nM({
                    la: d,
                    ba: f,
                    Ma: e,
                    slot: h
                });
                $E(WE(u));
                u.google_process_slots ? .();
                var g = (u.Prototype || {}).Version;
                null != g && Uk("prtpjs", {
                    version: g
                })
            }
        })
    })(wK, "m202304100102", function(a, b) {
        const c = 2012 < qd(b, 1) ? `_fy${qd(b,1)}` : "",
            d = L(b, 3);
        b = L(b, 2);
        return {
            rg: O `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            qg: O `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Ie: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            zf: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            Mg: O `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            Ng: O `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            Qb: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            Cb: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            Wb: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/autogames${c}.js`
        }
    });
}).call(this, "[2021,\"r20230418\",\"r20110914\",null,null,null,null,\".google.iq\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759875,44759926,42532090,42532186,44773810,44759842]]");
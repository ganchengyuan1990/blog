! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = { exports: {}, id: o, loaded: !1 };
        return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports }
    var n = {};
    return t.m = e, t.c = n, t.p = "./", t(0) }([function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    n(88), n(76);
    var r = n(78),
        i = o(r),
        a = n(77),
        u = o(a),
        l = n(70);
    (0, l.addLoadEvent)(function() { u.default.init(), i.default.init() }) }, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t) } }, function(e, t, n) {
    var o = n(49),
        r = n(15);
    e.exports = function(e) {
        return o(r(e)) } }, function(e, t, n) { e.exports = !n(8)(function() {
        return 7 != Object.defineProperty({}, "a", { get: function() {
                return 7 } }).a }) }, function(e, t, n) {
    var o = n(6),
        r = n(12);
    e.exports = n(4) ? function(e, t, n) {
        return o.f(e, t, r(1, n)) } : function(e, t, n) {
        return e[t] = n, e } }, function(e, t, n) {
    var o = n(10),
        r = n(30),
        i = n(24),
        a = Object.defineProperty;
    t.f = n(4) ? Object.defineProperty : function(e, t, n) {
        if (o(e), t = i(t, !0), o(n), r) try {
            return a(e, t, n) } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e } }, function(e, t, n) {
    var o = n(22)("wks"),
        r = n(13),
        i = n(1).Symbol,
        a = "function" == typeof i,
        u = e.exports = function(e) {
            return o[e] || (o[e] = a && i[e] || (a ? i : r)("Symbol." + e)) };
    u.store = o }, function(e, t) { e.exports = function(e) {
        try {
            return !!e() } catch (e) {
            return !0 } } }, function(e, t, n) {
    var o = n(35),
        r = n(16);
    e.exports = Object.keys || function(e) {
        return o(e, r) } }, function(e, t, n) {
    var o = n(11);
    e.exports = function(e) {
        if (!o(e)) throw TypeError(e + " is not an object!");
        return e } }, function(e, t) { e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t) { e.exports = function(e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t) {
    var n = 0,
        o = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36)) } }, function(e, t) {
    var n = e.exports = { version: "2.4.0" }; "number" == typeof __e && (__e = n) }, function(e, t) { e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e } }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t) { e.exports = {} }, function(e, t) { e.exports = !0 }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) {
    var o = n(6).f,
        r = n(2),
        i = n(7)("toStringTag");
    e.exports = function(e, t, n) { e && !r(e = n ? e : e.prototype, i) && o(e, i, { configurable: !0, value: t }) } }, function(e, t, n) {
    var o = n(22)("keys"),
        r = n(13);
    e.exports = function(e) {
        return o[e] || (o[e] = r(e)) } }, function(e, t, n) {
    var o = n(1),
        r = "__core-js_shared__",
        i = o[r] || (o[r] = {});
    e.exports = function(e) {
        return i[e] || (i[e] = {}) } }, function(e, t) {
    var n = Math.ceil,
        o = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e) } }, function(e, t, n) {
    var o = n(11);
    e.exports = function(e, t) {
        if (!o(e)) return e;
        var n, r;
        if (t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        if ("function" == typeof(n = e.valueOf) && !o(r = n.call(e))) return r;
        if (!t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value") } }, function(e, t, n) {
    var o = n(1),
        r = n(14),
        i = n(18),
        a = n(26),
        u = n(6).f;
    e.exports = function(e) {
        var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {}); "_" == e.charAt(0) || e in t || u(t, e, { value: a.f(e) }) } }, function(e, t, n) { t.f = n(7) }, function(e, t, n) {
    var o = n(1),
        r = n(14),
        i = n(46),
        a = n(5),
        u = "prototype",
        l = function(e, t, n) {
            var s, c, f, p = e & l.F,
                d = e & l.G,
                m = e & l.S,
                h = e & l.P,
                v = e & l.B,
                y = e & l.W,
                g = d ? r : r[t] || (r[t] = {}),
                w = g[u],
                x = d ? o : m ? o[t] : (o[t] || {})[u];
            d && (n = t);
            for (s in n) c = !p && x && void 0 !== x[s], c && s in g || (f = c ? x[s] : n[s], g[s] = d && "function" != typeof x[s] ? n[s] : v && c ? i(f, o) : y && x[s] == f ? function(e) {
                var t = function(t, n, o) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n) }
                        return new e(t, n, o) }
                    return e.apply(this, arguments) };
                return t[u] = e[u], t }(f) : h && "function" == typeof f ? i(Function.call, f) : f, h && ((g.virtual || (g.virtual = {}))[s] = f, e & l.R && w && !w[s] && a(w, s, f))) };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l }, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1) } }, function(e, t, n) {
    var o = n(11),
        r = n(1).document,
        i = o(r) && o(r.createElement);
    e.exports = function(e) {
        return i ? r.createElement(e) : {} } }, function(e, t, n) { e.exports = !n(4) && !n(8)(function() {
        return 7 != Object.defineProperty(n(29)("div"), "a", { get: function() {
                return 7 } }).a }) }, function(e, t, n) { "use strict";
    var o = n(18),
        r = n(27),
        i = n(36),
        a = n(5),
        u = n(2),
        l = n(17),
        s = n(51),
        c = n(20),
        f = n(58),
        p = n(7)("iterator"),
        d = !([].keys && "next" in [].keys()),
        m = "@@iterator",
        h = "keys",
        v = "values",
        y = function() {
            return this };
    e.exports = function(e, t, n, g, w, x, b) { s(n, t, g);
        var C, S, I, T = function(e) {
                if (!d && e in R) return R[e];
                switch (e) {
                    case h:
                        return function() {
                            return new n(this, e) };
                    case v:
                        return function() {
                            return new n(this, e) } }
                return function() {
                    return new n(this, e) } },
            E = t + " Iterator",
            _ = w == v,
            O = !1,
            R = e.prototype,
            k = R[p] || R[m] || w && R[w],
            D = k || T(w),
            M = w ? _ ? T("entries") : D : void 0,
            A = "Array" == t ? R.entries || k : k;
        if (A && (I = f(A.call(new e)), I !== Object.prototype && (c(I, E, !0), o || u(I, p) || a(I, p, y))), _ && k && k.name !== v && (O = !0, D = function() {
                return k.call(this) }), o && !b || !d && !O && R[p] || a(R, p, D), l[t] = D, l[E] = y, w)
            if (C = { values: _ ? D : T(v), keys: x ? D : T(h), entries: M }, b)
                for (S in C) S in R || i(R, S, C[S]);
            else r(r.P + r.F * (d || O), t, C);
        return C } }, function(e, t, n) {
    var o = n(10),
        r = n(55),
        i = n(16),
        a = n(21)("IE_PROTO"),
        u = function() {},
        l = "prototype",
        s = function() {
            var e, t = n(29)("iframe"),
                o = i.length,
                r = "<",
                a = ">";
            for (t.style.display = "none", n(48).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(r + "script" + a + "document.F=Object" + r + "/script" + a), e.close(), s = e.F; o--;) delete s[l][i[o]];
            return s() };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (u[l] = o(e), n = new u, u[l] = null, n[a] = e) : n = s(), void 0 === t ? n : r(n, t) } }, function(e, t, n) {
    var o = n(35),
        r = n(16).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return o(e, r) } }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t, n) {
    var o = n(2),
        r = n(3),
        i = n(45)(!1),
        a = n(21)("IE_PROTO");
    e.exports = function(e, t) {
        var n, u = r(e),
            l = 0,
            s = [];
        for (n in u) n != a && o(u, n) && s.push(n);
        for (; t.length > l;) o(u, n = t[l++]) && (~i(s, n) || s.push(n));
        return s } }, function(e, t, n) { e.exports = n(5) }, function(e, t, n) {
    var o = n(15);
    e.exports = function(e) {
        return Object(o(e)) } }, function(e, t, n) { e.exports = { default: n(41), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(42), __esModule: !0 } }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    t.__esModule = !0;
    var r = n(39),
        i = o(r),
        a = n(38),
        u = o(a),
        l = "function" == typeof u.default && "symbol" == typeof i.default ? function(e) {
            return typeof e } : function(e) {
            return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ? "symbol" : typeof e };
    t.default = "function" == typeof u.default && "symbol" === l(i.default) ? function(e) {
        return "undefined" == typeof e ? "undefined" : l(e) } : function(e) {
        return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : l(e) } }, function(e, t, n) { n(65), n(63), n(66), n(67), e.exports = n(14).Symbol }, function(e, t, n) { n(64), n(68), e.exports = n(26).f("iterator") }, function(e, t) { e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e } }, function(e, t) { e.exports = function() {} }, function(e, t, n) {
    var o = n(3),
        r = n(61),
        i = n(60);
    e.exports = function(e) {
        return function(t, n, a) {
            var u, l = o(t),
                s = r(l.length),
                c = i(a, s);
            if (e && n != n) {
                for (; s > c;)
                    if (u = l[c++], u != u) return !0 } else
                for (; s > c; c++)
                    if ((e || c in l) && l[c] === n) return e || c || 0; return !e && -1 } } }, function(e, t, n) {
    var o = n(43);
    e.exports = function(e, t, n) {
        if (o(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n) };
            case 2:
                return function(n, o) {
                    return e.call(t, n, o) };
            case 3:
                return function(n, o, r) {
                    return e.call(t, n, o, r) } }
        return function() {
            return e.apply(t, arguments) } } }, function(e, t, n) {
    var o = n(9),
        r = n(34),
        i = n(19);
    e.exports = function(e) {
        var t = o(e),
            n = r.f;
        if (n)
            for (var a, u = n(e), l = i.f, s = 0; u.length > s;) l.call(e, a = u[s++]) && t.push(a);
        return t } }, function(e, t, n) { e.exports = n(1).document && document.documentElement }, function(e, t, n) {
    var o = n(28);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == o(e) ? e.split("") : Object(e) } }, function(e, t, n) {
    var o = n(28);
    e.exports = Array.isArray || function(e) {
        return "Array" == o(e) } }, function(e, t, n) { "use strict";
    var o = n(32),
        r = n(12),
        i = n(20),
        a = {};
    n(5)(a, n(7)("iterator"), function() {
        return this }), e.exports = function(e, t, n) { e.prototype = o(a, { next: r(1, n) }), i(e, t + " Iterator") } }, function(e, t) { e.exports = function(e, t) {
        return { value: t, done: !!e } } }, function(e, t, n) {
    var o = n(9),
        r = n(3);
    e.exports = function(e, t) {
        for (var n, i = r(e), a = o(i), u = a.length, l = 0; u > l;)
            if (i[n = a[l++]] === t) return n } }, function(e, t, n) {
    var o = n(13)("meta"),
        r = n(11),
        i = n(2),
        a = n(6).f,
        u = 0,
        l = Object.isExtensible || function() {
            return !0 },
        s = !n(8)(function() {
            return l(Object.preventExtensions({})) }),
        c = function(e) { a(e, o, { value: { i: "O" + ++u, w: {} } }) },
        f = function(e, t) {
            if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, o)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                c(e) }
            return e[o].i },
        p = function(e, t) {
            if (!i(e, o)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                c(e) }
            return e[o].w },
        d = function(e) {
            return s && m.NEED && l(e) && !i(e, o) && c(e), e },
        m = e.exports = { KEY: o, NEED: !1, fastKey: f, getWeak: p, onFreeze: d } }, function(e, t, n) {
    var o = n(6),
        r = n(10),
        i = n(9);
    e.exports = n(4) ? Object.defineProperties : function(e, t) { r(e);
        for (var n, a = i(t), u = a.length, l = 0; u > l;) o.f(e, n = a[l++], t[n]);
        return e } }, function(e, t, n) {
    var o = n(19),
        r = n(12),
        i = n(3),
        a = n(24),
        u = n(2),
        l = n(30),
        s = Object.getOwnPropertyDescriptor;
    t.f = n(4) ? s : function(e, t) {
        if (e = i(e), t = a(t, !0), l) try {
            return s(e, t) } catch (e) {}
        if (u(e, t)) return r(!o.f.call(e, t), e[t]) } }, function(e, t, n) {
    var o = n(3),
        r = n(33).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        u = function(e) {
            try {
                return r(e) } catch (e) {
                return a.slice() } };
    e.exports.f = function(e) {
        return a && "[object Window]" == i.call(e) ? u(e) : r(o(e)) } }, function(e, t, n) {
    var o = n(2),
        r = n(37),
        i = n(21)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null } }, function(e, t, n) {
    var o = n(23),
        r = n(15);
    e.exports = function(e) {
        return function(t, n) {
            var i, a, u = String(r(t)),
                l = o(n),
                s = u.length;
            return l < 0 || l >= s ? e ? "" : void 0 : (i = u.charCodeAt(l), i < 55296 || i > 56319 || l + 1 === s || (a = u.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? u.charAt(l) : i : e ? u.slice(l, l + 2) : (i - 55296 << 10) + (a - 56320) + 65536) } } }, function(e, t, n) {
    var o = n(23),
        r = Math.max,
        i = Math.min;
    e.exports = function(e, t) {
        return e = o(e), e < 0 ? r(e + t, 0) : i(e, t) } }, function(e, t, n) {
    var o = n(23),
        r = Math.min;
    e.exports = function(e) {
        return e > 0 ? r(o(e), 9007199254740991) : 0 } }, function(e, t, n) { "use strict";
    var o = n(44),
        r = n(52),
        i = n(17),
        a = n(3);
    e.exports = n(31)(Array, "Array", function(e, t) { this._t = a(e), this._i = 0, this._k = t }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]]) }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries") }, function(e, t) {}, function(e, t, n) { "use strict";
    var o = n(59)(!0);
    n(31)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? { value: void 0, done: !0 } : (e = o(t, n), this._i += e.length, { value: e, done: !1 }) }) }, function(e, t, n) { "use strict";
    var o = n(1),
        r = n(2),
        i = n(4),
        a = n(27),
        u = n(36),
        l = n(54).KEY,
        s = n(8),
        c = n(22),
        f = n(20),
        p = n(13),
        d = n(7),
        m = n(26),
        h = n(25),
        v = n(53),
        y = n(47),
        g = n(50),
        w = n(10),
        x = n(3),
        b = n(24),
        C = n(12),
        S = n(32),
        I = n(57),
        T = n(56),
        E = n(6),
        _ = n(9),
        O = T.f,
        R = E.f,
        k = I.f,
        D = o.Symbol,
        M = o.JSON,
        A = M && M.stringify,
        F = "prototype",
        P = d("_hidden"),
        L = d("toPrimitive"),
        j = {}.propertyIsEnumerable,
        N = c("symbol-registry"),
        Z = c("symbols"),
        U = c("op-symbols"),
        z = Object[F],
        B = "function" == typeof D,
        q = o.QObject,
        K = !q || !q[F] || !q[F].findChild,
        W = i && s(function() {
            return 7 != S(R({}, "a", { get: function() {
                    return R(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) {
            var o = O(z, t);
            o && delete z[t], R(e, t, n), o && e !== z && R(z, t, o) } : R,
        J = function(e) {
            var t = Z[e] = S(D[F]);
            return t._k = e, t },
        H = B && "symbol" == typeof D.iterator ? function(e) {
            return "symbol" == typeof e } : function(e) {
            return e instanceof D },
        G = function(e, t, n) {
            return e === z && G(U, t, n), w(e), t = b(t, !0), w(n), r(Z, t) ? (n.enumerable ? (r(e, P) && e[P][t] && (e[P][t] = !1), n = S(n, { enumerable: C(0, !1) })) : (r(e, P) || R(e, P, C(1, {})), e[P][t] = !0), W(e, t, n)) : R(e, t, n) },
        Y = function(e, t) { w(e);
            for (var n, o = y(t = x(t)), r = 0, i = o.length; i > r;) G(e, n = o[r++], t[n]);
            return e },
        V = function(e, t) {
            return void 0 === t ? S(e) : Y(S(e), t) },
        X = function(e) {
            var t = j.call(this, e = b(e, !0));
            return !(this === z && r(Z, e) && !r(U, e)) && (!(t || !r(this, e) || !r(Z, e) || r(this, P) && this[P][e]) || t) },
        $ = function(e, t) {
            if (e = x(e), t = b(t, !0), e !== z || !r(Z, t) || r(U, t)) {
                var n = O(e, t);
                return !n || !r(Z, t) || r(e, P) && e[P][t] || (n.enumerable = !0), n } },
        Q = function(e) {
            for (var t, n = k(x(e)), o = [], i = 0; n.length > i;) r(Z, t = n[i++]) || t == P || t == l || o.push(t);
            return o },
        ee = function(e) {
            for (var t, n = e === z, o = k(n ? U : x(e)), i = [], a = 0; o.length > a;) !r(Z, t = o[a++]) || n && !r(z, t) || i.push(Z[t]);
            return i };
    B || (D = function() {
        if (this instanceof D) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) { this === z && t.call(U, n), r(this, P) && r(this[P], e) && (this[P][e] = !1), W(this, e, C(1, n)) };
        return i && K && W(z, e, { configurable: !0, set: t }), J(e) }, u(D[F], "toString", function() {
        return this._k }), T.f = $, E.f = G, n(33).f = I.f = Q, n(19).f = X, n(34).f = ee, i && !n(18) && u(z, "propertyIsEnumerable", X, !0), m.f = function(e) {
        return J(d(e)) }), a(a.G + a.W + a.F * !B, { Symbol: D });
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) d(te[ne++]);
    for (var te = _(d.store), ne = 0; te.length > ne;) h(te[ne++]);
    a(a.S + a.F * !B, "Symbol", { for: function(e) {
            return r(N, e += "") ? N[e] : N[e] = D(e) }, keyFor: function(e) {
            if (H(e)) return v(N, e);
            throw TypeError(e + " is not a symbol!") }, useSetter: function() { K = !0 }, useSimple: function() { K = !1 } }), a(a.S + a.F * !B, "Object", { create: V, defineProperty: G, defineProperties: Y, getOwnPropertyDescriptor: $, getOwnPropertyNames: Q, getOwnPropertySymbols: ee }), M && a(a.S + a.F * (!B || s(function() {
        var e = D();
        return "[null]" != A([e]) || "{}" != A({ a: e }) || "{}" != A(Object(e)) })), "JSON", { stringify: function(e) {
            if (void 0 !== e && !H(e)) {
                for (var t, n, o = [e], r = 1; arguments.length > r;) o.push(arguments[r++]);
                return t = o[1], "function" == typeof t && (n = t), !n && g(t) || (t = function(e, t) {
                    if (n && (t = n.call(this, e, t)), !H(t)) return t }), o[1] = t, A.apply(M, o) } } }), D[F][L] || n(5)(D[F], L, D[F].valueOf), f(D, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0) }, function(e, t, n) { n(25)("asyncIterator") }, function(e, t, n) { n(25)("observable") }, function(e, t, n) { n(62);
    for (var o = n(1), r = n(5), i = n(17), a = n(7)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
        var s = u[l],
            c = o[s],
            f = c && c.prototype;
        f && !f[a] && r(f, a, s), i[s] = i.Array } }, , function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    var r = n(40),
        i = o(r),
        a = function() {
            function e(e, t, n) {
                return t || n ? String.fromCharCode(t || n) : r[e] || e }

            function t(e) {
                return f[e] }
            var n = /&quot;|&lt;|&gt;|&amp;|&nbsp;|&apos;|&#(\d+);|&#(\d+)/g,
                o = /['<> "&]/g,
                r = { "&quot;": '"', "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " " },
                u = /\u00a0/g,
                l = /<br\s*\/?>/gi,
                s = /\r?\n/g,
                c = /\s/g,
                f = {};
            for (var p in r) f[r[p]] = p;
            return r["&apos;"] = "'", f["'"] = "&#39;", { encode: function(e) {
                    return e ? ("" + e).replace(o, t).replace(s, "<br/>").replace(c, "&nbsp;") : "" }, decode: function(t) {
                    return t ? ("" + t).replace(l, "\n").replace(n, e).replace(u, " ") : "" }, encodeBase16: function(e) {
                    if (!e) return e;
                    e += "";
                    for (var t = [], n = 0, o = e.length; o > n; n++) t.push(e.charCodeAt(n).toString(16).toUpperCase());
                    return t.join("") }, encodeBase16forJSON: function(e) {
                    if (!e) return e;
                    e = e.replace(/[\u4E00-\u9FBF]/gi, function(e) {
                        return escape(e).replace("%u", "\\u") });
                    for (var t = [], n = 0, o = e.length; o > n; n++) t.push(e.charCodeAt(n).toString(16).toUpperCase());
                    return t.join("") }, decodeBase16: function(e) {
                    if (!e) return e;
                    e += "";
                    for (var t = [], n = 0, o = e.length; o > n; n += 2) t.push(String.fromCharCode("0x" + e.slice(n, n + 2)));
                    return t.join("") }, encodeObject: function(e) {
                    if (e instanceof Array)
                        for (var t = 0, n = e.length; n > t; t++) e[t] = a.encodeObject(e[t]);
                    else if ("object" == ("undefined" == typeof e ? "undefined" : (0, i.default)(e)))
                        for (var o in e) e[o] = a.encodeObject(e[o]);
                    else if ("string" == typeof e) return a.encode(e);
                    return e }, loadScript: function(e) {
                    var t = document.createElement("script");
                    document.getElementsByTagName("body")[0].appendChild(t), t.setAttribute("src", e) }, addLoadEvent: function(e) {
                    var t = window.onload; "function" != typeof window.onload ? window.onload = e : window.onload = function() { t(), e() } } } }();
    e.exports = a }, function(e, t) {
    function n(e, t) { e.classList ? e.classList.add(t) : e.className += " " + t }
    e.exports = n }, function(e, t) {
    function n(e, t) {
        if (e.classList) e.classList.remove(t);
        else {
            var n = new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi");
            e.className = e.className.replace(n, " ") } }
    e.exports = n }, , , , function(e, t, n) { "use strict";

    function o(e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
            n = window.location.search.substr(1).match(t);
        return null != n ? unescape(n[2]) : null }
    var r = n(90);
    if (n(80), window.BJ_REPORT) { 
        var l = o("f"),
            s = "yilia-from";
        l ? (a && BJ_REPORT.report("from-" + l), r.set(s, l)) : document.referrer.indexOf(window.location.host) >= 0 ? (l = r.get(s), l && a && BJ_REPORT.report("from-" + l)) : r.remove(s) }
    e.exports = { init: function() {} } }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }

    function r(e, t) {
        var e = e.replace(/<%-sUrl%>/g, encodeURIComponent(t.sUrl)).replace(/<%-sTitle%>/g, t.sTitle).replace(/<%-sDesc%>/g, t.sDesc).replace(/<%-sPic%>/g, encodeURIComponent(t.sPic));
        window.open(e) }

    function i() {
        var e = document.querySelector(".js-wx-box"),
            t = document.querySelector(".mask");
        (0, s.default)(e, "in"), (0, s.default)(e, "ready"), (0, s.default)(t, "in") }

    function a() {
        var e = document.querySelector(".js-wx-box"),
            t = document.querySelector(".mask");
        (0, f.default)(e, "in"), (0, f.default)(e, "ready"), (0, f.default)(t, "in") }

    function u(e, t) { "weibo" === e ? r("http://service.weibo.com/share/share.php?url=<%-sUrl%>&title=<%-sTitle%>&pic=<%-sPic%>", t) : "qq" === e ? r("http://connect.qq.com/widget/shareqq/index.html?url=<%-sUrl%>&title=<%-sTitle%>&source=<%-sDesc%>", t) : "douban" === e ? r("https://www.douban.com/share/service?image=<%-sPic%>&href=<%-sUrl%>&name=<%-sTitle%>&text=<%-sDesc%>", t) : "qzone" === e ? r("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=<%-sUrl%>&title=<%-sTitle%>&pics=<%-sPic%>&summary=<%-sDesc%>", t) : "facebook" === e ? r("https://www.facebook.com/sharer/sharer.php?u=<%-sUrl%>", t) : "twitter" === e ? r("https://twitter.com/intent/tweet?text=<%-sTitle%>&url=<%-sUrl%>&via=<%-config.url%>", t) : "google" === e ? r("https://plus.google.com/share?url=<%-sUrl%>", t) : "weixin" === e && i() }
    var l = n(71),
        s = o(l),
        c = n(72),
        f = o(c),
        p = function() {
            var e = document.querySelectorAll(".share-sns");
            if (e && 0 !== e.length) {
                var t = window.location.href,
                    n = document.querySelector("title").innerHTML,
                    o = document.querySelectorAll(".article-entry img"),
                    r = o.length ? document.querySelector(".article-entry img").getAttribute("src") : ""; "" === r || /^(http:|https:)?\/\//.test(r) || (r = window.location.origin + r), e.forEach(function(e) { e.onclick = function(o) {
                        var i = e.getAttribute("data-type");
                        u(i, { sUrl: t, sPic: r, sTitle: n, sDesc: n }) } }), document.querySelector(".mask").onclick = a, document.querySelector(".js-modal-close").onclick = a } };
    e.exports = { init: p } }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }

    function r() {
        var e = document.querySelectorAll(".pswp")[0],
            t = document.querySelectorAll(".article-entry img:not(.reward-img)");
        t.forEach(function(n, o) { n.onclick = function() {
                if (!document.querySelector(".left-col.show")) {
                    var n = [];
                    t.forEach(function(e, t) {
                        var o = (e.getAttribute("data-idx", t), e.getAttribute("data-target") || e.getAttribute("src")),
                            r = e.getAttribute("alt");
                        n.push({ src: o, w: e.width, h: e.height, title: r }) });
                    var r = new a.default(e, l.default, n, { index: parseInt(o) });
                    r.init() } } }) }
    var i = n(92),
        a = o(i),
        u = n(91),
        l = o(u);
    n(86), n(87), window.PhotoSwipe = a.default, window.PhotoSwipeUI_Default = l.default, e.exports = { init: r } }, , function(e, t, n) {
    /*!
     * @module report
     * @author kael, chriscai
     * @date @DATE
     * Copyright (c) 2014 kael, chriscai
     * Licensed under the MIT license.
     */
    var o = function(e) {
        if (e.BJ_REPORT) return e.BJ_REPORT;
        var t = [],
            n = {},
            o = { id: 0, uin: 0, url: "", combo: 1, ext: null, level: 4, ignore: [], random: 1, delay: 1e3, submit: null, repeat: 1 },
            r = function(e, t) {
                return Object.prototype.toString.call(e) === "[object " + (t || "Object") + "]" },
            i = function(e) {
                var t = typeof e;
                return "object" === t && !!e },
            a = function(e) {
                return null === e || !r(e, "Number") && !e },
            u = e.onerror;
        e.onerror = function(t, n, o, i, a) {
            var l = t;
            a && a.stack && (l = s(a)), r(l, "Event") && (l += l.type ? "--" + l.type + "--" + (l.target ? l.target.tagName + "::" + l.target.src : "") : ""), y.push({ msg: l, target: n, rowNum: o, colNum: i }), v(), u && u.apply(e, arguments) };
        var l = function(e) {
                try {
                    if (e.stack) {
                        var t = e.stack.match("https?://[^\n]+");
                        t = t ? t[0] : "";
                        var n = t.match(":(\\d+):(\\d+)");
                        n || (n = [0, 0, 0]);
                        var o = s(e);
                        return { msg: o, rowNum: n[1], colNum: n[2], target: t.replace(n[0], "") } }
                    return e.name && e.message && e.description ? { msg: JSON.stringify(e) } : e } catch (t) {
                    return e } },
            s = function(e) {
                var t = e.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, ""),
                    n = e.toString();
                return t.indexOf(n) < 0 && (t = n + "@" + t), t },
            c = function(e, t) {
                var n = [],
                    r = [],
                    u = [];
                if (i(e)) { e.level = e.level || o.level;
                    for (var l in e) {
                        var s = e[l];
                        if (!a(s)) {
                            if (i(s)) try { s = JSON.stringify(s) } catch (e) { s = "[BJ_REPORT detect value stringify error] " + e.toString() }
                            u.push(l + ":" + s), n.push(l + "=" + encodeURIComponent(s)), r.push(l + "[" + t + "]=" + encodeURIComponent(s)) } } }
                return [r.join("&"), u.join(","), n.join("&")] },
            f = [],
            p = function(e) {
                if (o.submit) o.submit(e);
                else {
                    var t = new Image;
                    f.push(t), t.src = e } },
            d = function(e) {
                if (!i(e)) return !0;
                var t = e.msg,
                    r = n[t] = (parseInt(n[t], 10) || 0) + 1;
                return r > o.repeat },
            m = [],
            h = 0,
            v = function(e) {
                if (o.report) {
                    for (; t.length;) {
                        var n = !1,
                            i = t.shift();
                        if (!d(i)) {
                            var a = c(i, m.length);
                            if (r(o.ignore, "Array"))
                                for (var u = 0, l = o.ignore.length; u < l; u++) {
                                    var s = o.ignore[u];
                                    if (r(s, "RegExp") && s.test(a[1]) || r(s, "Function") && s(i, a[1])) { n = !0;
                                        break } }
                            n || (o.combo ? m.push(a[0]) : p(o.report + a[2] + "&_t=" + +new Date), o.onReport && o.onReport(o.id, i)) } }
                    var f = m.length;
                    if (f) {
                        var v = function() { clearTimeout(h), p(o.report + m.join("&") + "&count=" + m.length + "&_t=" + +new Date), h = 0, m = [] };
                        e ? v() : h || (h = setTimeout(v, o.delay)) } } },
            y = e.BJ_REPORT = { push: function(e) {
                    if (Math.random() >= o.random) return y;
                    var n = i(e) ? l(e) : { msg: e };
                    return o.ext && !n.ext && (n.ext = o.ext), t.push(n), v(), y }, report: function(e) {
                    return e && y.push(e), v(!0), y }, info: function(e) {
                    return e ? (i(e) ? e.level = 2 : e = { msg: e, level: 2 }, y.push(e), y) : y }, debug: function(e) {
                    return e ? (i(e) ? e.level = 1 : e = { msg: e, level: 1 }, y.push(e), y) : y }, init: function(e) {
                    if (i(e))
                        for (var n in e) o[n] = e[n];
                    var r = parseInt(o.id, 10);
                    return r && (/qq\.com$/gi.test(location.hostname) && (o.url || (o.url = "//badjs2.qq.com/badjs"), o.uin || (o.uin = parseInt((document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10))), o.report = (o.url || "/badjs") + "?id=" + r + "&uin=" + o.uin + "&from=" + encodeURIComponent(location.href) + "&"), t.length && v(), y }, __onerror__: e.onerror };
        return "undefined" != typeof console && console.error && setTimeout(function() {
            var e = ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2];
            e && console.error("BJ_ERROR", decodeURIComponent(e).replace(/(:\d+:\d+)\s*/g, "$1\n")) }, 0), y }(window);
    e.exports = o,
        function(e) {
            if (!e.BJ_REPORT) return void console.error("please load bg-report first");
            var t = function(t) { e.BJ_REPORT.report(t) },
                n = {};
            e.BJ_REPORT.tryJs = function(e) {
                return e && (t = e), n };
            var o, r = function(e, t) {
                    for (var n in t) e[n] = t[n] },
                i = function(e) {
                    return "function" == typeof e },
                a = function(n, r) {
                    return function() {
                        try {
                            return n.apply(this, r || arguments) } catch (n) {
                            if (t(n), n.stack && console && console.error && console.error("[BJ-REPORT]", n.stack), !o) {
                                var i = e.onerror;
                                e.onerror = function() {}, o = setTimeout(function() { e.onerror = i, o = null }, 50) }
                            throw n } } },
                u = function(e) {
                    return function() {
                        for (var t, n = [], o = 0, r = arguments.length; o < r; o++) t = arguments[o], i(t) && (t = a(t)), n.push(t);
                        return e.apply(this, n) } },
                l = function(e) {
                    return function(t, n) {
                        if ("string" == typeof t) try { t = new Function(t) } catch (e) {
                            throw e }
                        var o = [].slice.call(arguments, 2);
                        return t = a(t, o.length && o), e(t, n) } },
                s = function(e, t) {
                    return function() {
                        for (var n, o, r = [], u = 0, l = arguments.length; u < l; u++) n = arguments[u], i(n) && (o = a(n)) && (n.tryWrap = o) && (n = o), r.push(n);
                        return e.apply(t || this, r) } },
                c = function(e) {
                    var t, n;
                    for (t in e) n = e[t], i(n) && (e[t] = a(n));
                    return e };
            n.spyJquery = function() {
                var t = e.$;
                if (!t || !t.event) return n;
                var o, r;
                t.zepto ? (o = t.fn.on, r = t.fn.off, t.fn.on = s(o), t.fn.off = function() {
                    for (var e, t = [], n = 0, o = arguments.length; n < o; n++) e = arguments[n], i(e) && e.tryWrap && (e = e.tryWrap), t.push(e);
                    return r.apply(this, t) }) : window.jQuery && (o = t.event.add, r = t.event.remove, t.event.add = s(o), t.event.remove = function() {
                    for (var e, t = [], n = 0, o = arguments.length; n < o; n++) e = arguments[n], i(e) && e.tryWrap && (e = e.tryWrap), t.push(e);
                    return r.apply(this, t) });
                var a = t.ajax;
                return a && (t.ajax = function(e, n) {
                    return n || (n = e, e = void 0), c(n), e ? a.call(t, e, n) : a.call(t, n) }), n }, n.spyModules = function() {
                var t = e.require,
                    o = e.define;
                return o && o.amd && t && (e.require = u(t), r(e.require, t), e.define = u(o), r(e.define, o)), e.seajs && o && (e.define = function() {
                    for (var e, t = [], n = 0, r = arguments.length; n < r; n++) e = arguments[n], i(e) && (e = a(e), e.toString = function(e) {
                        return function() {
                            return e.toString() } }(arguments[n])), t.push(e);
                    return o.apply(this, t) }, e.seajs.use = u(e.seajs.use), r(e.define, o)), n }, n.spySystem = function() {
                return e.setTimeout = l(e.setTimeout), e.setInterval = l(e.setInterval), n }, n.spyCustom = function(e) {
                return i(e) ? a(e) : c(e) }, n.spyAll = function() {
                return n.spyJquery().spyModules().spySystem(), n } }(window)
}, , , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, , function(e, t, n) {
    var o, r;! function(i) {
        var a = !1;
        if (o = i, r = "function" == typeof o ? o.call(t, n, t, e) : o, !(void 0 !== r && (e.exports = r)), a = !0, e.exports = i(), a = !0, !a) {
            var u = window.Cookies,
                l = window.Cookies = i();
            l.noConflict = function() {
                return window.Cookies = u, l } } }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) t[o] = n[o] }
            return t }

        function t(n) {
            function o(t, r, i) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (i = e({ path: "/" }, o.defaults, i), "number" == typeof i.expires) {
                            var u = new Date;
                            u.setMilliseconds(u.getMilliseconds() + 864e5 * i.expires), i.expires = u }
                        try { a = JSON.stringify(r), /^[\{\[]/.test(a) && (r = a) } catch (e) {}
                        return r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", r, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("") }
                    t || (a = {});
                    for (var l = document.cookie ? document.cookie.split("; ") : [], s = /(%[0-9A-Z]{2})+/g, c = 0; c < l.length; c++) {
                        var f = l[c].split("="),
                            p = f.slice(1).join("="); '"' === p.charAt(0) && (p = p.slice(1, -1));
                        try {
                            var d = f[0].replace(s, decodeURIComponent);
                            if (p = n.read ? n.read(p, d) : n(p, d) || p.replace(s, decodeURIComponent), this.json) try { p = JSON.parse(p) } catch (e) {}
                            if (t === d) { a = p;
                                break }
                            t || (a[d] = p) } catch (e) {} }
                    return a } }
            return o.set = o, o.get = function(e) {
                return o.call(o, e) }, o.getJSON = function() {
                return o.apply({ json: !0 }, [].slice.call(arguments)) }, o.defaults = {}, o.remove = function(t, n) { o(t, "", e(n, { expires: -1 })) }, o.withConverter = t, o }
        return t(function() {}) }) }, function(e, t, n) {
    var o, r;
    /*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
     * http://photoswipe.com
     * Copyright (c) 2015 Dmitry Semenov; */
    ! function(i, a) { o = a, r = "function" == typeof o ? o.call(t, n, t, e) : o, !(void 0 !== r && (e.exports = r)) }(this, function() { "use strict";
        var e = function(e, t) {
            var n, o, r, i, a, u, l, s, c, f, p, d, m, h, v, y, g, w, x, b = this,
                C = !1,
                S = !0,
                I = !0,
                T = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1) }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function() {
                        return e.currItem.src || "" }, getPageURLForShare: function() {
                        return window.location.href }, getTextForShare: function() {
                        return e.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
                E = function(e) {
                    if (y) return !0;
                    e = e || window.event, v.timeToIdle && v.mouseUsed && !c && L();
                    for (var n, o, r = e.target || e.srcElement, i = r.getAttribute("class") || "", a = 0; a < K.length; a++) n = K[a], n.onTap && i.indexOf("pswp__" + n.name) > -1 && (n.onTap(), o = !0);
                    if (o) { e.stopPropagation && e.stopPropagation(), y = !0;
                        var u = t.features.isOldAndroid ? 600 : 30;
                        g = setTimeout(function() { y = !1 }, u) } },
                _ = function() {
                    return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth },
                O = function(e, n, o) { t[(o ? "add" : "remove") + "Class"](e, "pswp__" + n) },
                R = function() {
                    var e = 1 === v.getNumItemsFn();
                    e !== h && (O(o, "ui--one-slide", e), h = e) },
                k = function() { O(l, "share-modal--hidden", I) },
                D = function() {
                    return I = !I, I ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() { I && k() }, 300)) : (k(), setTimeout(function() { I || t.addClass(l, "pswp__share-modal--fade-in") }, 30)), I || A(), !1 },
                M = function(t) { t = t || window.event;
                    var n = t.target || t.srcElement;
                    return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), I || D(), !1)) },
                A = function() {
                    for (var e, t, n, o, r, i = "", a = 0; a < v.shareButtons.length; a++) e = v.shareButtons[a], n = v.getImageURLForShare(e), o = v.getPageURLForShare(e), r = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(o)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(r)), i += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (i = v.parseShareButtonOut(e, i));
                    l.children[0].innerHTML = i, l.children[0].onclick = M },
                F = function(e) {
                    for (var n = 0; n < v.closeElClasses.length; n++)
                        if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0 },
                P = 0,
                L = function() { clearTimeout(x), P = 0, c && b.setIdle(!1) },
                j = function(e) { e = e ? e : window.event;
                    var t = e.relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(x), x = setTimeout(function() { b.setIdle(!0) }, v.timeToIdleOutside)) },
                N = function() { v.fullscreenEl && !t.features.isOldAndroid && (n || (n = b.getFullscreenAPI()), n ? (t.bind(document, n.eventK, b.updateFullscreen), b.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")) },
                Z = function() { v.preloaderEl && (U(!0), f("beforeChange", function() { clearTimeout(m), m = setTimeout(function() { e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && U(!1) : U(!0) }, v.loadingIndicatorDelay) }), f("imageLoadComplete", function(t, n) { e.currItem === n && U(!0) })) },
                U = function(e) { d !== e && (O(p, "preloader--active", !e), d = e) },
                z = function(e) {
                    var n = e.vGap;
                    if (_()) {
                        var a = v.barsSize;
                        if (v.captionEl && "auto" === a.bottom)
                            if (i || (i = t.createEl("pswp__caption pswp__caption--fake"), i.appendChild(t.createEl("pswp__caption__center")), o.insertBefore(i, r), t.addClass(o, "pswp__ui--fit")), v.addCaptionHTMLFn(e, i, !0)) {
                                var u = i.clientHeight;
                                n.bottom = parseInt(u, 10) || 44 } else n.bottom = a.top;
                        else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                        n.top = a.top } else n.top = n.bottom = 0 },
                B = function() { v.timeToIdle && f("mouseUsed", function() { t.bind(document, "mousemove", L), t.bind(document, "mouseout", j), w = setInterval(function() { P++, 2 === P && b.setIdle(!0) }, v.timeToIdle / 2) }) },
                q = function() { f("onVerticalDrag", function(e) { S && e < .95 ? b.hideControls() : !S && e >= .95 && b.showControls() });
                    var e;
                    f("onPinchClose", function(t) { S && t < .9 ? (b.hideControls(), e = !0) : e && !S && t > .9 && b.showControls() }), f("zoomGestureEnded", function() { e = !1, e && !S && b.showControls() }) },
                K = [{ name: "caption", option: "captionEl", onInit: function(e) { r = e } }, { name: "share-modal", option: "shareEl", onInit: function(e) { l = e }, onTap: function() { D() } }, { name: "button--share", option: "shareEl", onInit: function(e) { u = e }, onTap: function() { D() } }, { name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(e) { a = e } }, { name: "button--close", option: "closeEl", onTap: e.close }, { name: "button--arrow--left", option: "arrowEl", onTap: e.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: e.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { n.isFullscreen() ? n.exit() : n.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(e) { p = e } }],
                W = function() {
                    var e, n, r, i = function(o) {
                        if (o)
                            for (var i = o.length, a = 0; a < i; a++) { e = o[a], n = e.className;
                                for (var u = 0; u < K.length; u++) r = K[u], n.indexOf("pswp__" + r.name) > -1 && (v[r.option] ? (t.removeClass(e, "pswp__element--disabled"), r.onInit && r.onInit(e)) : t.addClass(e, "pswp__element--disabled")) } };
                    i(o.children);
                    var a = t.getChildByClass(o, "pswp__top-bar");
                    a && i(a.children) };
            b.init = function() { t.extend(e.options, T, !0), v = e.options, o = t.getChildByClass(e.scrollWrap, "pswp__ui"), f = e.listen, q(), f("beforeChange", b.update), f("doubleTap", function(t) {
                    var n = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333) }), f("preventDragEvent", function(e, t, n) {
                    var o = e.target || e.srcElement;
                    o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1) }), f("bindEvents", function() { t.bind(o, "pswpTap click", E), t.bind(e.scrollWrap, "pswpTap", b.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", b.onMouseOver) }), f("unbindEvents", function() { I || D(), w && clearInterval(w), t.unbind(document, "mouseout", j), t.unbind(document, "mousemove", L), t.unbind(o, "pswpTap click", E), t.unbind(e.scrollWrap, "pswpTap", b.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", b.onMouseOver), n && (t.unbind(document, n.eventK, b.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null) }), f("destroy", function() { v.captionEl && (i && o.removeChild(i), t.removeClass(r, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(o, "pswp__ui--over-close"), t.addClass(o, "pswp__ui--hidden"), b.setIdle(!1) }), v.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"), f("initialZoomIn", function() { v.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden") }), f("initialZoomOut", function() { t.addClass(o, "pswp__ui--hidden") }), f("parseVerticalMargin", z), W(), v.shareEl && u && l && (I = !0), R(), B(), N(), Z() }, b.setIdle = function(e) { c = e, O(o, "ui--idle", e) }, b.update = function() { S && e.currItem ? (b.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, r), O(r, "caption--empty", !e.currItem.title)), C = !0) : C = !1, I || D(), R() }, b.updateFullscreen = function(o) { o && setTimeout(function() { e.setScrollOffset(0, t.getScrollY()) }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs") }, b.updateIndexIndicator = function() { v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn()) }, b.onGlobalTap = function(n) { n = n || window.event;
                var o = n.target || n.srcElement;
                if (!y)
                    if (n.detail && "mouse" === n.detail.pointerType) {
                        if (F(o)) return void e.close();
                        t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint)) } else if (v.tapToToggleControls && (S ? b.hideControls() : b.showControls()), v.tapToClose && (t.hasClass(o, "pswp__img") || F(o))) return void e.close() }, b.onMouseOver = function(e) { e = e || window.event;
                var t = e.target || e.srcElement;
                O(o, "ui--over-close", F(t)) }, b.hideControls = function() { t.addClass(o, "pswp__ui--hidden"), S = !1 }, b.showControls = function() { S = !0, C || b.update(), t.removeClass(o, "pswp__ui--hidden") }, b.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen) }, b.getFullscreenAPI = function() {
                var t, n = document.documentElement,
                    o = "fullscreenchange";
                return n.requestFullscreen ? t = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: o } : n.mozRequestFullScreen ? t = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + o } : n.webkitRequestFullscreen ? t = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + o } : n.msRequestFullscreen && (t = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), t && (t.enter = function() {
                    return s = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) }, t.exit = function() {
                    return v.closeOnScroll = s, document[this.exitK]() }, t.isFullscreen = function() {
                    return document[this.elementK] }), t } };
        return e })
}, function(e, t, n) {
    var o, r;
    /*! PhotoSwipe - v4.1.1 - 2015-12-24
     * http://photoswipe.com
     * Copyright (c) 2015 Dmitry Semenov; */
    ! function(i, a) { o = a, r = "function" == typeof o ? o.call(t, n, t, e) : o, !(void 0 !== r && (e.exports = r)) }(this, function() { "use strict";
        var e = function(e, t, n, o) {
            var r = { features: null, bind: function(e, t, n, o) {
                    var r = (o ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var i = 0; i < t.length; i++) t[i] && e[r](t[i], n, !1) }, isArray: function(e) {
                    return e instanceof Array }, createEl: function(e, t) {
                    var n = document.createElement(t || "div");
                    return e && (n.className = e), n }, getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop }, unbind: function(e, t, n) { r.bind(e, t, n, !0) }, removeClass: function(e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }, addClass: function(e, t) { r.hasClass(e, t) || (e.className += (e.className ? " " : "") + t) }, hasClass: function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className) }, getChildByClass: function(e, t) {
                    for (var n = e.firstChild; n;) {
                        if (r.hasClass(n, t)) return n;
                        n = n.nextSibling } }, arraySearch: function(e, t, n) {
                    for (var o = e.length; o--;)
                        if (e[o][n] === t) return o;
                    return -1 }, extend: function(e, t, n) {
                    for (var o in t)
                        if (t.hasOwnProperty(o)) {
                            if (n && e.hasOwnProperty(o)) continue;
                            e[o] = t[o] } }, easing: { sine: { out: function(e) {
                            return Math.sin(e * (Math.PI / 2)) }, inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2 } }, cubic: { out: function(e) {
                            return --e * e * e + 1 } } }, detectFeatures: function() {
                    if (r.features) return r.features;
                    var e = r.createEl(),
                        t = e.style,
                        n = "",
                        o = {};
                    if (o.oldIE = document.all && !document.addEventListener, o.touch = "ontouchstart" in window, window.requestAnimationFrame && (o.raf = window.requestAnimationFrame, o.caf = window.cancelAnimationFrame), o.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !o.pointerEvent) {
                        var i = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            a && a.length > 0 && (a = parseInt(a[1], 10), a >= 1 && a < 8 && (o.isOldIOSPhone = !0)) }
                        var u = i.match(/Android\s([0-9\.]*)/),
                            l = u ? u[1] : 0;
                        l = parseFloat(l), l >= 1 && (l < 4.4 && (o.isOldAndroid = !0), o.androidVersion = l), o.isMobileOpera = /opera mini|opera mobi/i.test(i) }
                    for (var s, c, f = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], d = 0; d < 4; d++) { n = p[d];
                        for (var m = 0; m < 3; m++) s = f[m], c = n + (n ? s.charAt(0).toUpperCase() + s.slice(1) : s), !o[s] && c in t && (o[s] = c);
                        n && !o.raf && (n = n.toLowerCase(), o.raf = window[n + "RequestAnimationFrame"], o.raf && (o.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"])) }
                    if (!o.raf) {
                        var h = 0;
                        o.raf = function(e) {
                            var t = (new Date).getTime(),
                                n = Math.max(0, 16 - (t - h)),
                                o = window.setTimeout(function() { e(t + n) }, n);
                            return h = t + n, o }, o.caf = function(e) { clearTimeout(e) } }
                    return o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, r.features = o, o } };
            r.detectFeatures(), r.features.oldIE && (r.bind = function(e, t, n, o) { t = t.split(" ");
                for (var r, i = (o ? "detach" : "attach") + "Event", a = function() { n.handleEvent.call(n) }, u = 0; u < t.length; u++)
                    if (r = t[u])
                        if ("object" == typeof n && n.handleEvent) {
                            if (o) {
                                if (!n["oldIE" + r]) return !1 } else n["oldIE" + r] = a;
                            e[i]("on" + r, n["oldIE" + r]) } else e[i]("on" + r, n) });
            var i = this,
                a = 25,
                u = 3,
                l = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(e) {
                        return "A" === e.tagName }, getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };
            r.extend(l, o);
            var s, c, f, p, d, m, h, v, y, g, w, x, b, C, S, I, T, E, _, O, R, k, D, M, A, F, P, L, j, N, Z, U, z, B, q, K, W, J, H, G, Y, V, X, $, Q, ee, te, ne, oe, re, ie, ae, ue, le, se, ce, fe = function() {
                    return { x: 0, y: 0 } },
                pe = fe(),
                de = fe(),
                me = fe(),
                he = {},
                ve = 0,
                ye = {},
                ge = fe(),
                we = 0,
                xe = !0,
                be = [],
                Ce = {},
                Se = !1,
                Ie = function(e, t) { r.extend(i, t.publicMethods), be.push(e) },
                Te = function(e) {
                    var t = Qt();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e },
                Ee = {},
                _e = function(e, t) {
                    return Ee[e] || (Ee[e] = []), Ee[e].push(t) },
                Oe = function(e) {
                    var t = Ee[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var o = 0; o < t.length; o++) t[o].apply(i, n) } },
                Re = function() {
                    return (new Date).getTime() },
                ke = function(e) { le = e, i.bg.style.opacity = e * l.bgOpacity },
                De = function(e, t, n, o, r) {
                    (!Se || r && r !== i.currItem) && (o /= r ? r.fitRatio : i.currItem.fitRatio), e[k] = x + t + "px, " + n + "px" + b + " scale(" + o + ")" },
                Me = function(e) { oe && (e && (g > i.currItem.fitRatio ? Se || (pn(i.currItem, !1, !0), Se = !0) : Se && (pn(i.currItem), Se = !1)), De(oe, me.x, me.y, g)) },
                Ae = function(e) { e.container && De(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e) },
                Fe = function(e, t) { t[k] = x + e + "px, 0px" + b },
                Pe = function(e, t) {
                    if (!l.loop && t) {
                        var n = p + (ge.x * ve - e) / ge.x,
                            o = Math.round(e - gt.x);
                        (n < 0 && o > 0 || n >= Qt() - 1 && o < 0) && (e = gt.x + o * l.mainScrollEndFriction) }
                    gt.x = e, Fe(e, d) },
                Le = function(e, t) {
                    var n = wt[e] - ye[e];
                    return de[e] + pe[e] + n - n * (t / w) },
                je = function(e, t) { e.x = t.x, e.y = t.y, t.id && (e.id = t.id) },
                Ne = function(e) { e.x = Math.round(e.x), e.y = Math.round(e.y) },
                Ze = null,
                Ue = function() { Ze && (r.unbind(document, "mousemove", Ue), r.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, Oe("mouseUsed")), Ze = setTimeout(function() { Ze = null }, 100) },
                ze = function() { r.bind(document, "keydown", i), Z.transform && r.bind(i.scrollWrap, "click", i), l.mouseUsed || r.bind(document, "mousemove", Ue), r.bind(window, "resize scroll", i), Oe("bindEvents") },
                Be = function() { r.unbind(window, "resize", i), r.unbind(window, "scroll", y.scroll), r.unbind(document, "keydown", i), r.unbind(document, "mousemove", Ue), Z.transform && r.unbind(i.scrollWrap, "click", i), J && r.unbind(window, h, i), Oe("unbindEvents") },
                qe = function(e, t) {
                    var n = ln(i.currItem, he, e);
                    return t && (ne = n), n },
                Ke = function(e) {
                    return e || (e = i.currItem), e.initialZoomLevel },
                We = function(e) {
                    return e || (e = i.currItem), e.w > 0 ? l.maxSpreadZoom : 1 },
                Je = function(e, t, n, o) {
                    return o === i.currItem.initialZoomLevel ? (n[e] = i.currItem.initialPosition[e], !0) : (n[e] = Le(e, o), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0)) },
                He = function() {
                    if (k) {
                        var t = Z.perspective && !M;
                        return x = "translate" + (t ? "3d(" : "("), void(b = Z.perspective ? ", 0px)" : ")") }
                    k = "left", r.addClass(e, "pswp--ie"), Fe = function(e, t) { t.left = e + "px" }, Ae = function(e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                            n = e.container.style,
                            o = t * e.w,
                            r = t * e.h;
                        n.width = o + "px", n.height = r + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px" }, Me = function() {
                        if (oe) {
                            var e = oe,
                                t = i.currItem,
                                n = t.fitRatio > 1 ? 1 : t.fitRatio,
                                o = n * t.w,
                                r = n * t.h;
                            e.width = o + "px", e.height = r + "px", e.left = me.x + "px", e.top = me.y + "px" } } },
                Ge = function(e) {
                    var t = "";
                    l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, i[t]())) },
                Ye = function(e) { e && (Y || G || re || K) && (e.preventDefault(), e.stopPropagation()) },
                Ve = function() { i.setScrollOffset(0, r.getScrollY()) },
                Xe = {},
                $e = 0,
                Qe = function(e) { Xe[e] && (Xe[e].raf && F(Xe[e].raf), $e--, delete Xe[e]) },
                et = function(e) { Xe[e] && Qe(e), Xe[e] || ($e++, Xe[e] = {}) },
                tt = function() {
                    for (var e in Xe) Xe.hasOwnProperty(e) && Qe(e) },
                nt = function(e, t, n, o, r, i, a) {
                    var u, l = Re();
                    et(e);
                    var s = function() {
                        if (Xe[e]) {
                            if (u = Re() - l, u >= o) return Qe(e), i(n), void(a && a());
                            i((n - t) * r(u / o) + t), Xe[e].raf = A(s) } };
                    s() },
                ot = { shout: Oe, listen: _e, viewportSize: he, options: l, isMainScrollAnimating: function() {
                        return re }, getZoomLevel: function() {
                        return g }, getCurrentIndex: function() {
                        return p }, isDragging: function() {
                        return J }, isZooming: function() {
                        return Q }, setScrollOffset: function(e, t) { ye.x = e, N = ye.y = t, Oe("updateScrollOffset", ye) }, applyZoomPan: function(e, t, n, o) { me.x = t, me.y = n, g = e, Me(o) }, init: function() {
                        if (!s && !c) {
                            var n;
                            i.framework = r, i.template = e, i.bg = r.getChildByClass(e, "pswp__bg"), P = e.className, s = !0, Z = r.detectFeatures(), A = Z.raf, F = Z.caf, k = Z.transform, j = Z.oldIE, i.scrollWrap = r.getChildByClass(e, "pswp__scroll-wrap"), i.container = r.getChildByClass(i.scrollWrap, "pswp__container"), d = i.container.style, i.itemHolders = I = [{ el: i.container.children[0], wrap: 0, index: -1 }, { el: i.container.children[1], wrap: 0, index: -1 }, { el: i.container.children[2], wrap: 0, index: -1 }], I[0].el.style.display = I[2].el.style.display = "none", He(), y = { resize: i.updateSize, scroll: Ve, keydown: Ge, click: Ye };
                            var o = Z.isOldIOSPhone || Z.isOldAndroid || Z.isMobileOpera;
                            for (Z.animationName && Z.transform && !o || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < be.length; n++) i["init" + be[n]]();
                            if (t) {
                                var a = i.ui = new t(i, r);
                                a.init() }
                            Oe("firstUpdate"), p = p || l.index || 0, (isNaN(p) || p < 0 || p >= Qt()) && (p = 0), i.currItem = $t(p), (Z.isOldIOSPhone || Z.isOldAndroid) && (xe = !1), e.setAttribute("aria-hidden", "false"), l.modal && (xe ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = r.getScrollY() + "px")), void 0 === N && (Oe("initialLayout"), N = L = r.getScrollY());
                            var f = "pswp--open ";
                            for (l.mainClass && (f += l.mainClass + " "), l.showHideOpacity && (f += "pswp--animate_opacity "), f += M ? "pswp--touch" : "pswp--notouch", f += Z.animationName ? " pswp--css_animation" : "", f += Z.svg ? " pswp--svg" : "", r.addClass(e, f), i.updateSize(), m = -1, we = null, n = 0; n < u; n++) Fe((n + m) * ge.x, I[n].el.style);
                            j || r.bind(i.scrollWrap, v, i), _e("initialZoomInEnd", function() { i.setContent(I[0], p - 1), i.setContent(I[2], p + 1), I[0].el.style.display = I[2].el.style.display = "block", l.focus && e.focus(), ze() }), i.setContent(I[1], p), i.updateCurrItem(), Oe("afterInit"), xe || (C = setInterval(function() { $e || J || Q || g !== i.currItem.initialZoomLevel || i.updateSize() }, 1e3)), r.addClass(e, "pswp--visible") } }, close: function() { s && (s = !1, c = !0, Oe("close"), Be(), tn(i.currItem, null, !0, i.destroy)) }, destroy: function() { Oe("destroy"), Gt && clearTimeout(Gt), e.setAttribute("aria-hidden", "true"), e.className = P, C && clearInterval(C), r.unbind(i.scrollWrap, v, i), r.unbind(window, "scroll", i), It(), tt(), Ee = null }, panTo: function(e, t, n) { n || (e > ne.min.x ? e = ne.min.x : e < ne.max.x && (e = ne.max.x), t > ne.min.y ? t = ne.min.y : t < ne.max.y && (t = ne.max.y)), me.x = e, me.y = t, Me() }, handleEvent: function(e) { e = e || window.event, y[e.type] && y[e.type](e) }, goTo: function(e) { e = Te(e);
                        var t = e - p;
                        we = t, p = e, i.currItem = $t(p), ve -= t, Pe(ge.x * ve), tt(), re = !1, i.updateCurrItem() }, next: function() { i.goTo(p + 1) }, prev: function() { i.goTo(p - 1) }, updateCurrZoomItem: function(e) {
                        if (e && Oe("beforeChange", 0), I[1].el.children.length) {
                            var t = I[1].el.children[0];
                            oe = r.hasClass(t, "pswp__zoom-wrap") ? t.style : null } else oe = null;
                        ne = i.currItem.bounds, w = g = i.currItem.initialZoomLevel, me.x = ne.center.x, me.y = ne.center.y, e && Oe("afterChange") }, invalidateCurrItems: function() { S = !0;
                        for (var e = 0; e < u; e++) I[e].item && (I[e].item.needsUpdate = !0) }, updateCurrItem: function(e) {
                        if (0 !== we) {
                            var t, n = Math.abs(we);
                            if (!(e && n < 2)) { i.currItem = $t(p), Se = !1, Oe("beforeChange", we), n >= u && (m += we + (we > 0 ? -u : u), n = u);
                                for (var o = 0; o < n; o++) we > 0 ? (t = I.shift(), I[u - 1] = t, m++, Fe((m + 2) * ge.x, t.el.style), i.setContent(t, p - n + o + 1 + 1)) : (t = I.pop(), I.unshift(t), m--, Fe(m * ge.x, t.el.style), i.setContent(t, p + n - o - 1 - 1));
                                if (oe && 1 === Math.abs(we)) {
                                    var r = $t(T);
                                    r.initialZoomLevel !== g && (ln(r, he), pn(r), Ae(r)) }
                                we = 0, i.updateCurrZoomItem(), T = p, Oe("afterChange") } } }, updateSize: function(t) {
                        if (!xe && l.modal) {
                            var n = r.getScrollY();
                            if (N !== n && (e.style.top = n + "px", N = n), !t && Ce.x === window.innerWidth && Ce.y === window.innerHeight) return;
                            Ce.x = window.innerWidth, Ce.y = window.innerHeight, e.style.height = Ce.y + "px" }
                        if (he.x = i.scrollWrap.clientWidth, he.y = i.scrollWrap.clientHeight, Ve(), ge.x = he.x + Math.round(he.x * l.spacing), ge.y = he.y, Pe(ge.x * ve), Oe("beforeResize"), void 0 !== m) {
                            for (var o, a, s, c = 0; c < u; c++) o = I[c], Fe((c + m) * ge.x, o.el.style), s = p + c - 1, l.loop && Qt() > 2 && (s = Te(s)), a = $t(s), a && (S || a.needsUpdate || !a.bounds) ? (i.cleanSlide(a), i.setContent(o, s), 1 === c && (i.currItem = a, i.updateCurrZoomItem(!0)), a.needsUpdate = !1) : o.index === -1 && s >= 0 && i.setContent(o, s), a && a.container && (ln(a, he), pn(a), Ae(a));
                            S = !1 }
                        w = g = i.currItem.initialZoomLevel, ne = i.currItem.bounds, ne && (me.x = ne.center.x, me.y = ne.center.y, Me(!0)), Oe("resize") }, zoomTo: function(e, t, n, o, i) { t && (w = g, wt.x = Math.abs(t.x) - me.x, wt.y = Math.abs(t.y) - me.y, je(de, me));
                        var a = qe(e, !1),
                            u = {};
                        Je("x", a, u, e), Je("y", a, u, e);
                        var l = g,
                            s = { x: me.x, y: me.y };
                        Ne(u);
                        var c = function(t) { 1 === t ? (g = e, me.x = u.x, me.y = u.y) : (g = (e - l) * t + l, me.x = (u.x - s.x) * t + s.x, me.y = (u.y - s.y) * t + s.y), i && i(t), Me(1 === t) };
                        n ? nt("customZoomTo", 0, 1, n, o || r.easing.sine.inOut, c) : c(1) } },
                rt = 30,
                it = 10,
                at = {},
                ut = {},
                lt = {},
                st = {},
                ct = {},
                ft = [],
                pt = {},
                dt = [],
                mt = {},
                ht = 0,
                vt = fe(),
                yt = 0,
                gt = fe(),
                wt = fe(),
                xt = fe(),
                bt = function(e, t) {
                    return e.x === t.x && e.y === t.y },
                Ct = function(e, t) {
                    return Math.abs(e.x - t.x) < a && Math.abs(e.y - t.y) < a },
                St = function(e, t) {
                    return mt.x = Math.abs(e.x - t.x), mt.y = Math.abs(e.y - t.y), Math.sqrt(mt.x * mt.x + mt.y * mt.y) },
                It = function() { V && (F(V), V = null) },
                Tt = function() { J && (V = A(Tt), zt()) },
                Et = function() {
                    return !("fit" === l.scaleMode && g === i.currItem.initialZoomLevel) },
                _t = function(e, t) {
                    return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : _t(e.parentNode, t))) },
                Ot = {},
                Rt = function(e, t) {
                    return Ot.prevent = !_t(e.target, l.isClickableElement), Oe("preventDragEvent", e, t, Ot), Ot.prevent },
                kt = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t },
                Dt = function(e, t, n) { n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y) },
                Mt = function(e, t, n) {
                    if (e - z > 50) {
                        var o = dt.length > 2 ? dt.shift() : {};
                        o.x = t, o.y = n, dt.push(o), z = e } },
                At = function() {
                    var e = me.y - i.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (he.y / 2)) },
                Ft = {},
                Pt = {},
                Lt = [],
                jt = function(e) {
                    for (; Lt.length > 0;) Lt.pop();
                    return D ? (ce = 0, ft.forEach(function(e) { 0 === ce ? Lt[0] = e : 1 === ce && (Lt[1] = e), ce++ })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Lt[0] = kt(e.touches[0], Ft), e.touches.length > 1 && (Lt[1] = kt(e.touches[1], Pt))) : (Ft.x = e.pageX, Ft.y = e.pageY, Ft.id = "", Lt[0] = Ft), Lt },
                Nt = function(e, t) {
                    var n, o, r, a, u = 0,
                        s = me[e] + t[e],
                        c = t[e] > 0,
                        f = gt.x + t.x,
                        p = gt.x - pt.x;
                    return n = s > ne.min[e] || s < ne.max[e] ? l.panEndFriction : 1, s = me[e] + t[e] * n, !l.allowPanToNext && g !== i.currItem.initialZoomLevel || (oe ? "h" !== ie || "x" !== e || G || (c ? (s > ne.min[e] && (n = l.panEndFriction, u = ne.min[e] - s, o = ne.min[e] - de[e]), (o <= 0 || p < 0) && Qt() > 1 ? (a = f, p < 0 && f > pt.x && (a = pt.x)) : ne.min.x !== ne.max.x && (r = s)) : (s < ne.max[e] && (n = l.panEndFriction, u = s - ne.max[e], o = de[e] - ne.max[e]), (o <= 0 || p > 0) && Qt() > 1 ? (a = f, p > 0 && f < pt.x && (a = pt.x)) : ne.min.x !== ne.max.x && (r = s))) : a = f, "x" !== e) ? void(re || X || g > i.currItem.fitRatio && (me[e] += t[e] * n)) : (void 0 !== a && (Pe(a, !0), X = a !== pt.x), ne.min.x !== ne.max.x && (void 0 !== r ? me.x = r : X || (me.x += t.x * n)), void 0 !== a) },
                Zt = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Xt) return void e.preventDefault();
                        if (!W || "mousedown" !== e.type) {
                            if (Rt(e, !0) && e.preventDefault(), Oe("pointerDown"), D) {
                                var t = r.arraySearch(ft, e.pointerId, "id");
                                t < 0 && (t = ft.length), ft[t] = { x: e.pageX, y: e.pageY, id: e.pointerId } }
                            var n = jt(e),
                                o = n.length;
                            $ = null, tt(), J && 1 !== o || (J = ae = !0, r.bind(window, h, i), q = se = ue = K = X = Y = H = G = !1, ie = null, Oe("firstTouchStart", n), je(de, me), pe.x = pe.y = 0, je(st, n[0]), je(ct, st), pt.x = ge.x * ve, dt = [{ x: st.x, y: st.y }], z = U = Re(), qe(g, !0), It(), Tt()), !Q && o > 1 && !re && !X && (w = g, G = !1, Q = H = !0, pe.y = pe.x = 0, je(de, me), je(at, n[0]), je(ut, n[1]), Dt(at, ut, xt), wt.x = Math.abs(xt.x) - me.x, wt.y = Math.abs(xt.y) - me.y, ee = te = St(at, ut)) } } },
                Ut = function(e) {
                    if (e.preventDefault(), D) {
                        var t = r.arraySearch(ft, e.pointerId, "id");
                        if (t > -1) {
                            var n = ft[t];
                            n.x = e.pageX, n.y = e.pageY } }
                    if (J) {
                        var o = jt(e);
                        if (ie || Y || Q) $ = o;
                        else if (gt.x !== ge.x * ve) ie = "h";
                        else {
                            var i = Math.abs(o[0].x - st.x) - Math.abs(o[0].y - st.y);
                            Math.abs(i) >= it && (ie = i > 0 ? "h" : "v", $ = o) } } },
                zt = function() {
                    if ($) {
                        var e = $.length;
                        if (0 !== e)
                            if (je(at, $[0]), lt.x = at.x - st.x, lt.y = at.y - st.y, Q && e > 1) {
                                if (st.x = at.x, st.y = at.y, !lt.x && !lt.y && bt($[1], ut)) return;
                                je(ut, $[1]), G || (G = !0, Oe("zoomGestureStarted"));
                                var t = St(at, ut),
                                    n = Jt(t);
                                n > i.currItem.initialZoomLevel + i.currItem.initialZoomLevel / 15 && (se = !0);
                                var o = 1,
                                    r = Ke(),
                                    a = We();
                                if (n < r)
                                    if (l.pinchToClose && !se && w <= i.currItem.initialZoomLevel) {
                                        var u = r - n,
                                            s = 1 - u / (r / 1.2);
                                        ke(s), Oe("onPinchClose", s), ue = !0 } else o = (r - n) / r, o > 1 && (o = 1), n = r - o * (r / 3);
                                else n > a && (o = (n - a) / (6 * r), o > 1 && (o = 1), n = a + o * r);
                                o < 0 && (o = 0), ee = t, Dt(at, ut, vt), pe.x += vt.x - xt.x, pe.y += vt.y - xt.y, je(xt, vt), me.x = Le("x", n), me.y = Le("y", n), q = n > g, g = n, Me() } else {
                                if (!ie) return;
                                if (ae && (ae = !1, Math.abs(lt.x) >= it && (lt.x -= $[0].x - ct.x), Math.abs(lt.y) >= it && (lt.y -= $[0].y - ct.y)), st.x = at.x, st.y = at.y, 0 === lt.x && 0 === lt.y) return;
                                if ("v" === ie && l.closeOnVerticalDrag && !Et()) { pe.y += lt.y, me.y += lt.y;
                                    var c = At();
                                    return K = !0, Oe("onVerticalDrag", c), ke(c), void Me() }
                                Mt(Re(), at.x, at.y), Y = !0, ne = i.currItem.bounds;
                                var f = Nt("x", lt);
                                f || (Nt("y", lt), Ne(me), Me()) } } },
                Bt = function(e) {
                    if (Z.isOldAndroid) {
                        if (W && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(W), W = setTimeout(function() { W = 0 }, 600)) }
                    Oe("pointerUp"), Rt(e, !1) && e.preventDefault();
                    var t;
                    if (D) {
                        var n = r.arraySearch(ft, e.pointerId, "id");
                        if (n > -1)
                            if (t = ft.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                            else {
                                var o = { 4: "mouse", 2: "touch", 3: "pen" };
                                t.type = o[e.pointerType], t.type || (t.type = e.pointerType || "mouse") } }
                    var a, u = jt(e),
                        s = u.length;
                    if ("mouseup" === e.type && (s = 0), 2 === s) return $ = null, !0;
                    1 === s && je(ct, u[0]), 0 !== s || ie || re || (t || ("mouseup" === e.type ? t = { x: e.pageX, y: e.pageY, type: "mouse" } : e.changedTouches && e.changedTouches[0] && (t = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type: "touch" })), Oe("touchRelease", e, t));
                    var c = -1;
                    if (0 === s && (J = !1, r.unbind(window, h, i), It(), Q ? c = 0 : yt !== -1 && (c = Re() - yt)), yt = 1 === s ? Re() : -1, a = c !== -1 && c < 150 ? "zoom" : "swipe", Q && s < 2 && (Q = !1, 1 === s && (a = "zoomPointerUp"), Oe("zoomGestureEnded")), $ = null, Y || G || re || K)
                        if (tt(), B || (B = qt()), B.calculateSwipeSpeed("x"), K) {
                            var f = At();
                            if (f < l.verticalDragRange) i.close();
                            else {
                                var p = me.y,
                                    d = le;
                                nt("verticalDrag", 0, 1, 300, r.easing.cubic.out, function(e) { me.y = (i.currItem.initialPosition.y - p) * e + p, ke((1 - d) * e + d), Me() }), Oe("onVerticalDrag", 1) } } else {
                            if ((X || re) && 0 === s) {
                                var m = Wt(a, B);
                                if (m) return;
                                a = "zoomPointerUp" }
                            if (!re) return "swipe" !== a ? void Ht() : void(!X && g > i.currItem.fitRatio && Kt(B)) } },
                qt = function() {
                    var e, t, n = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(o) { dt.length > 1 ? (e = Re() - z + 50, t = dt[dt.length - 2][o]) : (e = Re() - U, t = ct[o]), n.lastFlickOffset[o] = st[o] - t, n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o]), n.lastFlickDist[o] > 20 ? n.lastFlickSpeed[o] = n.lastFlickOffset[o] / e : n.lastFlickSpeed[o] = 0, Math.abs(n.lastFlickSpeed[o]) < .1 && (n.lastFlickSpeed[o] = 0), n.slowDownRatio[o] = .95, n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o], n.speedDecelerationRatio[o] = 1 }, calculateOverBoundsAnimOffset: function(e, t) { n.backAnimStarted[e] || (me[e] > ne.min[e] ? n.backAnimDestination[e] = ne.min[e] : me[e] < ne.max[e] && (n.backAnimDestination[e] = ne.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, nt("bounceZoomPan" + e, me[e], n.backAnimDestination[e], t || 300, r.easing.sine.out, function(t) { me[e] = t, Me() })))) }, calculateAnimOffset: function(e) { n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, me[e] += n.distanceOffset[e]) }, panAnimLoop: function() {
                            if (Xe.zoomPan && (Xe.zoomPan.raf = A(n.panAnimLoop), n.now = Re(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Me(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return me.x = Math.round(me.x), me.y = Math.round(me.y), Me(), void Qe("zoomPan") } };
                    return n },
                Kt = function(e) {
                    return e.calculateSwipeSpeed("y"), ne = i.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = Re(), void e.panAnimLoop()) },
                Wt = function(e, t) {
                    var n;
                    re || (ht = p);
                    var o;
                    if ("swipe" === e) {
                        var a = st.x - ct.x,
                            u = t.lastFlickDist.x < 10;
                        a > rt && (u || t.lastFlickOffset.x > 20) ? o = -1 : a < -rt && (u || t.lastFlickOffset.x < -20) && (o = 1) }
                    var s;
                    o && (p += o, p < 0 ? (p = l.loop ? Qt() - 1 : 0, s = !0) : p >= Qt() && (p = l.loop ? 0 : Qt() - 1, s = !0), s && !l.loop || (we += o, ve -= o, n = !0));
                    var c, f = ge.x * ve,
                        d = Math.abs(f - gt.x);
                    return n || f > gt.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? d / Math.abs(t.lastFlickSpeed.x) : 333, c = Math.min(c, 400), c = Math.max(c, 250)) : c = 333, ht === p && (n = !1), re = !0, Oe("mainScrollAnimStart"), nt("mainScroll", gt.x, f, c, r.easing.cubic.out, Pe, function() { tt(), re = !1, ht = -1, (n || ht !== p) && i.updateCurrItem(), Oe("mainScrollAnimComplete") }), n && i.updateCurrItem(!0), n },
                Jt = function(e) {
                    return 1 / te * e * w },
                Ht = function() {
                    var e = g,
                        t = Ke(),
                        n = We();
                    g < t ? e = t : g > n && (e = n);
                    var o, a = 1,
                        u = le;
                    return ue && !q && !se && g < t ? (i.close(), !0) : (ue && (o = function(e) { ke((a - u) * e + u) }), i.zoomTo(e, 0, 200, r.easing.cubic.out, o), !0) };
            Ie("Gestures", { publicMethods: { initGestures: function() {
                        var e = function(e, t, n, o, r) { E = e + t, _ = e + n, O = e + o, R = r ? e + r : "" };
                        D = Z.pointerEvent, D && Z.touch && (Z.touch = !1), D ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : Z.touch ? (e("touch", "start", "move", "end", "cancel"), M = !0) : e("mouse", "down", "move", "up"), h = _ + " " + O + " " + R, v = E, D && !M && (M = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), i.likelyTouchDevice = M, y[E] = Zt, y[_] = Ut, y[O] = Bt, R && (y[R] = y[O]), Z.touch && (v += " mousedown", h += " mousemove mouseup", y.mousedown = y[E], y.mousemove = y[_], y.mouseup = y[O]), M || (l.allowPanToNext = !1) } } });
            var Gt, Yt, Vt, Xt, $t, Qt, en, tn = function(t, n, o, a) { Gt && clearTimeout(Gt), Xt = !0, Vt = !0;
                    var u;
                    t.initialLayout ? (u = t.initialLayout, t.initialLayout = null) : u = l.getThumbBoundsFn && l.getThumbBoundsFn(p);
                    var s = o ? l.hideAnimationDuration : l.showAnimationDuration,
                        c = function() { Qe("initialZoom"), o ? (i.template.removeAttribute("style"), i.bg.removeAttribute("style")) : (ke(1), n && (n.style.display = "block"), r.addClass(e, "pswp--animated-in"), Oe("initialZoom" + (o ? "OutEnd" : "InEnd"))), a && a(), Xt = !1 };
                    if (!s || !u || void 0 === u.x) return Oe("initialZoom" + (o ? "Out" : "In")), g = t.initialZoomLevel, je(me, t.initialPosition), Me(), e.style.opacity = o ? 0 : 1, ke(1), void(s ? setTimeout(function() { c() }, s) : c());
                    var d = function() {
                        var n = f,
                            a = !i.currItem.src || i.currItem.loadError || l.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), o || (g = u.w / t.w, me.x = u.x, me.y = u.y - L, i[a ? "template" : "bg"].style.opacity = .001, Me()), et("initialZoom"), o && !n && r.removeClass(e, "pswp--animated-in"), a && (o ? r[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() { r.addClass(e, "pswp--animate_opacity") }, 30)), Gt = setTimeout(function() {
                            if (Oe("initialZoom" + (o ? "Out" : "In")), o) {
                                var i = u.w / t.w,
                                    l = { x: me.x, y: me.y },
                                    f = g,
                                    p = le,
                                    d = function(t) { 1 === t ? (g = i, me.x = u.x, me.y = u.y - N) : (g = (i - f) * t + f, me.x = (u.x - l.x) * t + l.x, me.y = (u.y - N - l.y) * t + l.y), Me(), a ? e.style.opacity = 1 - t : ke(p - t * p) };
                                n ? nt("initialZoom", 0, 1, s, r.easing.cubic.out, d, c) : (d(1), Gt = setTimeout(c, s + 20)) } else g = t.initialZoomLevel, je(me, t.initialPosition), Me(), ke(1), a ? e.style.opacity = 1 : ke(1), Gt = setTimeout(c, s + 20) }, o ? 25 : 90) };
                    d() },
                nn = {},
                on = [],
                rn = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function() {
                        return Yt.length } },
                an = function() {
                    return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } },
                un = function(e, t, n) {
                    var o = e.bounds;
                    o.center.x = Math.round((nn.x - t) / 2), o.center.y = Math.round((nn.y - n) / 2) + e.vGap.top, o.max.x = t > nn.x ? Math.round(nn.x - t) : o.center.x, o.max.y = n > nn.y ? Math.round(nn.y - n) + e.vGap.top : o.center.y, o.min.x = t > nn.x ? 0 : o.center.x, o.min.y = n > nn.y ? e.vGap.top : o.center.y },
                ln = function(e, t, n) {
                    if (e.src && !e.loadError) {
                        var o = !n;
                        if (o && (e.vGap || (e.vGap = { top: 0, bottom: 0 }), Oe("parseVerticalMargin", e)), nn.x = t.x, nn.y = t.y - e.vGap.top - e.vGap.bottom, o) {
                            var r = nn.x / e.w,
                                i = nn.y / e.h;
                            e.fitRatio = r < i ? r : i;
                            var a = l.scaleMode; "orig" === a ? n = 1 : "fit" === a && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = an()) }
                        if (!n) return;
                        return un(e, e.w * n, e.h * n), o && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = an(), e.initialPosition = e.bounds.center, e.bounds },
                sn = function(e, t, n, o, r, a) { t.loadError || o && (t.imageAppended = !0, pn(t, o, t === i.currItem && Se), n.appendChild(o), a && setTimeout(function() { t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null) }, 500)) },
                cn = function(e) { e.loading = !0, e.loaded = !1;
                    var t = e.img = r.createEl("pswp__img", "img"),
                        n = function() { e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null };
                    return t.onload = n, t.onerror = function() { e.loadError = !0, n() }, t.src = e.src, t },
                fn = function(e, t) {
                    if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0 },
                pn = function(e, t, n) {
                    if (e.src) { t || (t = e.container.lastChild);
                        var o = n ? e.w : Math.round(e.w * e.fitRatio),
                            r = n ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = o + "px", e.placeholder.style.height = r + "px"), t.style.width = o + "px", t.style.height = r + "px" } },
                dn = function() {
                    if (on.length) {
                        for (var e, t = 0; t < on.length; t++) e = on[t], e.holder.index === e.index && sn(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                        on = [] } };
            Ie("Controller", { publicMethods: { lazyLoadItem: function(e) { e = Te(e);
                        var t = $t(e);
                        t && (!t.loaded && !t.loading || S) && (Oe("gettingData", e, t), t.src && cn(t)) }, initController: function() { r.extend(l, rn, !0), i.items = Yt = n, $t = i.getItemAt, Qt = l.getNumItemsFn, en = l.loop, Qt() < 3 && (l.loop = !1), _e("beforeChange", function(e) {
                            var t, n = l.preload,
                                o = null === e || e >= 0,
                                r = Math.min(n[0], Qt()),
                                a = Math.min(n[1], Qt());
                            for (t = 1; t <= (o ? a : r); t++) i.lazyLoadItem(p + t);
                            for (t = 1; t <= (o ? r : a); t++) i.lazyLoadItem(p - t) }), _e("initialLayout", function() { i.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(p) }), _e("mainScrollAnimComplete", dn), _e("initialZoomInEnd", dn), _e("destroy", function() {
                            for (var e, t = 0; t < Yt.length; t++) e = Yt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            on = null }) }, getItemAt: function(e) {
                        return e >= 0 && (void 0 !== Yt[e] && Yt[e]) }, allowProgressiveImg: function() {
                        return l.forceProgressiveLoading || !M || l.mouseUsed || screen.width > 1200 }, setContent: function(e, t) { l.loop && (t = Te(t));
                        var n = i.getItemAt(e.index);
                        n && (n.container = null);
                        var o, a = i.getItemAt(t);
                        if (!a) return void(e.el.innerHTML = "");
                        Oe("gettingData", t, a), e.index = t, e.item = a;
                        var u = a.container = r.createEl("pswp__zoom-wrap");
                        if (!a.src && a.html && (a.html.tagName ? u.appendChild(a.html) : u.innerHTML = a.html), fn(a), ln(a, he), !a.src || a.loadError || a.loaded) a.src && !a.loadError && (o = r.createEl("pswp__img", "img"), o.style.opacity = 1, o.src = a.src, pn(a, o), sn(t, a, u, o, !0));
                        else {
                            if (a.loadComplete = function(n) {
                                    if (s) {
                                        if (e && e.index === t) {
                                            if (fn(n, !0)) return n.loadComplete = n.img = null, ln(n, he), Ae(n), void(e.index === p && i.updateCurrZoomItem());
                                            n.imageAppended ? !Xt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : Z.transform && (re || Xt) ? on.push({ item: n, baseDiv: u, img: n.img, index: t, holder: e, clearPlaceholder: !0 }) : sn(t, n, u, n.img, re || Xt, !0) }
                                        n.loadComplete = null, n.img = null, Oe("imageLoadComplete", t, n) } }, r.features.transform) {
                                var c = "pswp__img pswp__img--placeholder";
                                c += a.msrc ? "" : " pswp__img--placeholder--blank";
                                var f = r.createEl(c, a.msrc ? "img" : "");
                                a.msrc && (f.src = a.msrc), pn(a, f), u.appendChild(f), a.placeholder = f }
                            a.loading || cn(a), i.allowProgressiveImg() && (!Vt && Z.transform ? on.push({ item: a, baseDiv: u, img: a.img, index: t, holder: e }) : sn(t, a, u, a.img, !0, !0)) }
                        Vt || t !== p ? Ae(a) : (oe = u.style, tn(a, o || a.img)), e.el.innerHTML = "", e.el.appendChild(u) }, cleanSlide: function(e) { e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1 } } });
            var mn, hn = {},
                vn = function(e, t, n) {
                    var o = document.createEvent("CustomEvent"),
                        r = { origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch" };
                    o.initCustomEvent("pswpTap", !0, !0, r), e.target.dispatchEvent(o) };
            Ie("Tap", { publicMethods: { initTap: function() { _e("firstTouchStart", i.onTapStart), _e("touchRelease", i.onTapRelease), _e("destroy", function() { hn = {}, mn = null }) }, onTapStart: function(e) { e.length > 1 && (clearTimeout(mn), mn = null) }, onTapRelease: function(e, t) {
                        if (t && !Y && !H && !$e) {
                            var n = t;
                            if (mn && (clearTimeout(mn), mn = null, Ct(n, hn))) return void Oe("doubleTap", n);
                            if ("mouse" === t.type) return void vn(e, t, "mouse");
                            var o = e.target.tagName.toUpperCase();
                            if ("BUTTON" === o || r.hasClass(e.target, "pswp__single-tap")) return void vn(e, t);
                            je(hn, n), mn = setTimeout(function() { vn(e, t), mn = null }, 300) } } } });
            var yn;
            Ie("DesktopZoom", { publicMethods: { initDesktopZoom: function() { j || (M ? _e("mouseUsed", function() { i.setupDesktopZoom() }) : i.setupDesktopZoom(!0)) }, setupDesktopZoom: function(t) { yn = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        _e("bindEvents", function() { r.bind(e, n, i.handleMouseWheel) }), _e("unbindEvents", function() { yn && r.unbind(e, n, i.handleMouseWheel) }), i.mouseZoomedIn = !1;
                        var o, a = function() { i.mouseZoomedIn && (r.removeClass(e, "pswp--zoomed-in"), i.mouseZoomedIn = !1), g < 1 ? r.addClass(e, "pswp--zoom-allowed") : r.removeClass(e, "pswp--zoom-allowed"), u() },
                            u = function() { o && (r.removeClass(e, "pswp--dragging"), o = !1) };
                        _e("resize", a), _e("afterChange", a), _e("pointerDown", function() { i.mouseZoomedIn && (o = !0, r.addClass(e, "pswp--dragging")) }), _e("pointerUp", u), t || a() }, handleMouseWheel: function(e) {
                        if (g <= i.currItem.fitRatio) return l.modal && (!l.closeOnScroll || $e || J ? e.preventDefault() : k && Math.abs(e.deltaY) > 2 && (f = !0, i.close())), !0;
                        if (e.stopPropagation(), yn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (yn.x = 18 * e.deltaX, yn.y = 18 * e.deltaY) : (yn.x = e.deltaX, yn.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (yn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? yn.y = -.16 * e.wheelDeltaY : yn.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            yn.y = e.detail }
                        qe(g, !0);
                        var t = me.x - yn.x,
                            n = me.y - yn.y;
                        (l.modal || t <= ne.min.x && t >= ne.max.x && n <= ne.min.y && n >= ne.max.y) && e.preventDefault(), i.panTo(t, n) }, toggleDesktopZoom: function(t) { t = t || { x: he.x / 2 + ye.x, y: he.y / 2 + ye.y };
                        var n = l.getDoubleTapZoom(!0, i.currItem),
                            o = g === n;
                        i.mouseZoomedIn = !o, i.zoomTo(o ? i.currItem.initialZoomLevel : n, t, 333), r[(o ? "remove" : "add") + "Class"](e, "pswp--zoomed-in") } } });
            var gn, wn, xn, bn, Cn, Sn, In, Tn, En, _n, On, Rn, kn = { history: !0, galleryUID: 1 },
                Dn = function() {
                    return On.hash.substring(1) },
                Mn = function() { gn && clearTimeout(gn), xn && clearTimeout(xn) },
                An = function() {
                    var e = Dn(),
                        t = {};
                    if (e.length < 5) return t;
                    var n, o = e.split("&");
                    for (n = 0; n < o.length; n++)
                        if (o[n]) {
                            var r = o[n].split("=");
                            r.length < 2 || (t[r[0]] = r[1]) }
                    if (l.galleryPIDs) {
                        var i = t.pid;
                        for (t.pid = 0, n = 0; n < Yt.length; n++)
                            if (Yt[n].pid === i) { t.pid = n;
                                break } } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t },
                Fn = function() {
                    if (xn && clearTimeout(xn), $e || J) return void(xn = setTimeout(Fn, 500));
                    bn ? clearTimeout(wn) : bn = !0;
                    var e = p + 1,
                        t = $t(p);
                    t.hasOwnProperty("pid") && (e = t.pid);
                    var n = In + "&gid=" + l.galleryUID + "&pid=" + e;
                    Tn || On.hash.indexOf(n) === -1 && (_n = !0);
                    var o = On.href.split("#")[0] + "#" + n;
                    Rn ? "#" + n !== window.location.hash && history[Tn ? "replaceState" : "pushState"]("", document.title, o) : Tn ? On.replace(o) : On.hash = n, Tn = !0, wn = setTimeout(function() { bn = !1 }, 60) };
            Ie("History", { publicMethods: { initHistory: function() {
                        if (r.extend(l, kn, !0), l.history) { On = window.location, _n = !1, En = !1, Tn = !1, In = Dn(), Rn = "pushState" in history, In.indexOf("gid=") > -1 && (In = In.split("&gid=")[0], In = In.split("?gid=")[0]), _e("afterChange", i.updateURL), _e("unbindEvents", function() { r.unbind(window, "hashchange", i.onHashChange) });
                            var e = function() { Sn = !0, En || (_n ? history.back() : In ? On.hash = In : Rn ? history.pushState("", document.title, On.pathname + On.search) : On.hash = ""), Mn() };
                            _e("unbindEvents", function() { f && e() }), _e("destroy", function() { Sn || e() }), _e("firstUpdate", function() { p = An().pid });
                            var t = In.indexOf("pid=");
                            t > -1 && (In = In.substring(0, t), "&" === In.slice(-1) && (In = In.slice(0, -1))), setTimeout(function() { s && r.bind(window, "hashchange", i.onHashChange) }, 40) } }, onHashChange: function() {
                        return Dn() === In ? (En = !0, void i.close()) : void(bn || (Cn = !0, i.goTo(An().pid), Cn = !1)) }, updateURL: function() { Mn(), Cn || (Tn ? gn = setTimeout(Fn, 800) : Fn()) } } }), r.extend(i, ot) };
        return e })
}]);



//使用原生方法来获取element的CSS

(function(WDS, undefined) {
    function _camelize(property) {
        return property.replace(/-(\w)/g, function(strMatch, p1) {
            return p1.toUpperCase();
        });
    }

    function getStyle(element, property) {

        if (property == 'background') property = "background-color";

        if (!element || !property) return false;

        //首先获取内联样式

        var value = element.style[_camelize(property)];

        if (!value) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                css = document.defaultView.getComputedStyle(element, null);
                return value = css ? css.getPropertyValue(property) : null;
            }
        }
    }

    // 检测获取的背景色是否有效
    /*function checkBgValue(elem){
    	var value = getStyle(elem, 'background-color'),
    		hasColor = value ? true : false; // 是否有颜色

    	// 排除特殊情况
    	if(value == "transparent" || value == "rgba(0, 0, 0, 0)"){
    		// 未设置background-color，或者设置为跟随父节点
    		hasColor = false;
    	}else if(getStyle(elem, 'opacity') == "0"){
    		// dom节点透明度为全透明
    		hasColor = false;
    	}else if(getStyle(elem, 'visibility') == "hidden"){
    		// dom节点不可见
    		hasColor = false;
    	}else if(getStyle(elem, 'display') == "none"){
    		// dom节点不可见
    		hasColor = false;
    	}

    	return hasColor;
    }

    // 获取div最终显示的颜色
    function getRealStyle(elem){
    	debugger
    	if(checkBgValue(elem)){
    		return getStyle(elem, 'background-color');
    	}else if(elem != document.documentElement){
    		return getRealStyle(elem.parentNode);
    	}

    	return '';
    }*/

    window.WDS.getStyle = getStyle;


})(window.WDS || (window.WDS = {}));


console.log(WDS.getStyle(document.getElementsByClassName('profilepic')[0], "background"));


//窗口失去焦点时改变title
window.onblur = function(e) {
    document.title = '看这里！看这里!';
}
window.onfocus = function(e) {
    document.title = '时间追逐者222';
}

function showArticle() {
    var articleDoms = document.getElementsByClassName('article').length > 0 ? document.getElementsByClassName('article') : document.getElementsByClassName('archive-article');

    for (var i = 0; i < articleDoms.length; i++) {
        if (articleDoms[i].offsetTop <= document.body.scrollTop + window.screen.height && articleDoms[i].className.indexOf('show') < 0) {
            articleDoms[i].className = articleDoms[i].className + " show";
        } else {
            // articleDoms[i].className = 
        }
    }
    /*$(".article").each(function(){
    	if( $(this).offset().top <= $(window).scrollTop()+$(window).height() && !($(this).hasClass('show')) ) {
    		$(this).removeClass("hidden").addClass("show");
    		$(this).addClass("is-hiddened");
    	}else{
    		if(!$(this).hasClass("is-hiddened")){
    			$(this).addClass("hidden");
    		}
    	}
    });*/
}


showArticle();


    window.onscroll = function(e) {
        console.log("onscroll...");
        showArticle();
    }


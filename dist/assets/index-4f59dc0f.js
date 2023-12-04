var CS = Object.defineProperty;
var kS = (e, t, r) =>
  t in e
    ? CS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var zp = (e, t, r) => (kS(e, typeof t != "symbol" ? t + "" : t, r), r);
function RS(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
const NS = "modulepreload",
  TS = function (e) {
    return "/" + e;
  },
  Ap = {},
  $o = function (t, r, n) {
    if (!r || r.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(
      r.map((i) => {
        if (((i = TS(i)), i in Ap)) return;
        Ap[i] = !0;
        const a = i.endsWith(".css"),
          l = a ? '[rel="stylesheet"]' : "";
        if (!!n)
          for (let f = o.length - 1; f >= 0; f--) {
            const c = o[f];
            if (c.href === i && (!a || c.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${i}"]${l}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = a ? "stylesheet" : NS),
          a || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = i),
          document.head.appendChild(u),
          a)
        )
          return new Promise((f, c) => {
            u.addEventListener("load", f),
              u.addEventListener("error", () =>
                c(new Error(`Unable to preload CSS for ${i}`)),
              );
          });
      }),
    )
      .then(() => t())
      .catch((i) => {
        const a = new Event("vite:preloadError", { cancelable: !0 });
        if (((a.payload = i), window.dispatchEvent(a), !a.defaultPrevented))
          throw i;
      });
  };
var J4 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function gg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var vg = { exports: {} },
  ws = {},
  wg = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qi = Symbol.for("react.element"),
  IS = Symbol.for("react.portal"),
  jS = Symbol.for("react.fragment"),
  zS = Symbol.for("react.strict_mode"),
  AS = Symbol.for("react.profiler"),
  DS = Symbol.for("react.provider"),
  LS = Symbol.for("react.context"),
  MS = Symbol.for("react.forward_ref"),
  FS = Symbol.for("react.suspense"),
  US = Symbol.for("react.memo"),
  BS = Symbol.for("react.lazy"),
  Dp = Symbol.iterator;
function VS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Dp && e[Dp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _g = Object.assign,
  Eg = {};
function Co(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Eg),
    (this.updater = r || Sg);
}
Co.prototype.isReactComponent = {};
Co.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Co.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pg() {}
Pg.prototype = Co.prototype;
function qf(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Eg),
    (this.updater = r || Sg);
}
var Xf = (qf.prototype = new Pg());
Xf.constructor = qf;
_g(Xf, Co.prototype);
Xf.isPureReactComponent = !0;
var Lp = Array.isArray,
  Og = Object.prototype.hasOwnProperty,
  Jf = { current: null },
  xg = { key: !0, ref: !0, __self: !0, __source: !0 };
function bg(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Og.call(t, n) && !xg.hasOwnProperty(n) && (o[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) o.children = r;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (n in ((l = e.defaultProps), l)) o[n] === void 0 && (o[n] = l[n]);
  return {
    $$typeof: Qi,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Jf.current,
  };
}
function WS(e, t) {
  return {
    $$typeof: Qi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Zf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qi;
}
function HS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Mp = /\/+/g;
function $u(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? HS("" + e.key)
    : t.toString(36);
}
function Da(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qi:
          case IS:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === "" ? "." + $u(a, 0) : n),
      Lp(o)
        ? ((r = ""),
          e != null && (r = e.replace(Mp, "$&/") + "/"),
          Da(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          (Zf(o) &&
            (o = WS(
              o,
              r +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Mp, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), Lp(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = n + $u(i, l);
      a += Da(i, t, r, s, o);
    }
  else if (((s = VS(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = n + $u(i, l++)), (a += Da(i, t, r, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return a;
}
function fa(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    Da(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function KS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var nt = { current: null },
  La = { transition: null },
  GS = {
    ReactCurrentDispatcher: nt,
    ReactCurrentBatchConfig: La,
    ReactCurrentOwner: Jf,
  };
Q.Children = {
  map: fa,
  forEach: function (e, t, r) {
    fa(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      fa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Zf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
Q.Component = Co;
Q.Fragment = jS;
Q.Profiler = AS;
Q.PureComponent = qf;
Q.StrictMode = zS;
Q.Suspense = FS;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = GS;
Q.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = _g({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Jf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Og.call(t, s) &&
        !xg.hasOwnProperty(s) &&
        (n[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    n.children = l;
  }
  return { $$typeof: Qi, type: e.type, key: o, ref: i, props: n, _owner: a };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: LS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: DS, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = bg;
Q.createFactory = function (e) {
  var t = bg.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: MS, render: e };
};
Q.isValidElement = Zf;
Q.lazy = function (e) {
  return { $$typeof: BS, _payload: { _status: -1, _result: e }, _init: KS };
};
Q.memo = function (e, t) {
  return { $$typeof: US, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = La.transition;
  La.transition = {};
  try {
    e();
  } finally {
    La.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return nt.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return nt.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return nt.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return nt.current.useEffect(e, t);
};
Q.useId = function () {
  return nt.current.useId();
};
Q.useImperativeHandle = function (e, t, r) {
  return nt.current.useImperativeHandle(e, t, r);
};
Q.useInsertionEffect = function (e, t) {
  return nt.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return nt.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return nt.current.useMemo(e, t);
};
Q.useReducer = function (e, t, r) {
  return nt.current.useReducer(e, t, r);
};
Q.useRef = function (e) {
  return nt.current.useRef(e);
};
Q.useState = function (e) {
  return nt.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, r) {
  return nt.current.useSyncExternalStore(e, t, r);
};
Q.useTransition = function () {
  return nt.current.useTransition();
};
Q.version = "18.2.0";
wg.exports = Q;
var _ = wg.exports;
const N = gg(_),
  Si = RS({ __proto__: null, default: N }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var QS = _,
  YS = Symbol.for("react.element"),
  qS = Symbol.for("react.fragment"),
  XS = Object.prototype.hasOwnProperty,
  JS = QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ZS = { key: !0, ref: !0, __self: !0, __source: !0 };
function $g(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (n in t) XS.call(t, n) && !ZS.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: YS,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: JS.current,
  };
}
ws.Fragment = qS;
ws.jsx = $g;
ws.jsxs = $g;
vg.exports = ws;
var ed = vg.exports;
const Z4 = ed.Fragment,
  ae = ed.jsx,
  Tr = ed.jsxs;
var $c = {},
  Cg = { exports: {} },
  Et = {},
  kg = { exports: {} },
  Rg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, B) {
    var M = j.length;
    j.push(B);
    e: for (; 0 < M; ) {
      var H = (M - 1) >>> 1,
        ne = j[H];
      if (0 < o(ne, B)) (j[H] = B), (j[M] = ne), (M = H);
      else break e;
    }
  }
  function r(j) {
    return j.length === 0 ? null : j[0];
  }
  function n(j) {
    if (j.length === 0) return null;
    var B = j[0],
      M = j.pop();
    if (M !== B) {
      j[0] = M;
      e: for (var H = 0, ne = j.length, it = ne >>> 1; H < it; ) {
        var ve = 2 * (H + 1) - 1,
          xt = j[ve],
          Ue = ve + 1,
          ht = j[Ue];
        if (0 > o(xt, M))
          Ue < ne && 0 > o(ht, xt)
            ? ((j[H] = ht), (j[Ue] = M), (H = Ue))
            : ((j[H] = xt), (j[ve] = M), (H = ve));
        else if (Ue < ne && 0 > o(ht, M)) (j[H] = ht), (j[Ue] = M), (H = Ue);
        else break e;
      }
    }
    return B;
  }
  function o(j, B) {
    var M = j.sortIndex - B.sortIndex;
    return M !== 0 ? M : j.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    f = 1,
    c = null,
    d = 3,
    w = !1,
    v = !1,
    m = !1,
    y = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(j) {
    for (var B = r(u); B !== null; ) {
      if (B.callback === null) n(u);
      else if (B.startTime <= j)
        n(u), (B.sortIndex = B.expirationTime), t(s, B);
      else break;
      B = r(u);
    }
  }
  function S(j) {
    if (((m = !1), g(j), !v))
      if (r(s) !== null) (v = !0), ze(P);
      else {
        var B = r(u);
        B !== null && Fe(S, B.startTime - j);
      }
  }
  function P(j, B) {
    (v = !1), m && ((m = !1), h(k), (k = -1)), (w = !0);
    var M = d;
    try {
      for (
        g(B), c = r(s);
        c !== null && (!(c.expirationTime > B) || (j && !Y()));

      ) {
        var H = c.callback;
        if (typeof H == "function") {
          (c.callback = null), (d = c.priorityLevel);
          var ne = H(c.expirationTime <= B);
          (B = e.unstable_now()),
            typeof ne == "function" ? (c.callback = ne) : c === r(s) && n(s),
            g(B);
        } else n(s);
        c = r(s);
      }
      if (c !== null) var it = !0;
      else {
        var ve = r(u);
        ve !== null && Fe(S, ve.startTime - B), (it = !1);
      }
      return it;
    } finally {
      (c = null), (d = M), (w = !1);
    }
  }
  var O = !1,
    E = null,
    k = -1,
    T = 5,
    D = -1;
  function Y() {
    return !(e.unstable_now() - D < T);
  }
  function J() {
    if (E !== null) {
      var j = e.unstable_now();
      D = j;
      var B = !0;
      try {
        B = E(!0, j);
      } finally {
        B ? he() : ((O = !1), (E = null));
      }
    } else O = !1;
  }
  var he;
  if (typeof p == "function")
    he = function () {
      p(J);
    };
  else if (typeof MessageChannel < "u") {
    var xe = new MessageChannel(),
      ge = xe.port2;
    (xe.port1.onmessage = J),
      (he = function () {
        ge.postMessage(null);
      });
  } else
    he = function () {
      y(J, 0);
    };
  function ze(j) {
    (E = j), O || ((O = !0), he());
  }
  function Fe(j, B) {
    k = y(function () {
      j(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || w || ((v = !0), ze(P));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (T = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(s);
    }),
    (e.unstable_next = function (j) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = d;
      }
      var M = d;
      d = B;
      try {
        return j();
      } finally {
        d = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, B) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var M = d;
      d = j;
      try {
        return B();
      } finally {
        d = M;
      }
    }),
    (e.unstable_scheduleCallback = function (j, B, M) {
      var H = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? H + M : H))
          : (M = H),
        j)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = M + ne),
        (j = {
          id: f++,
          callback: B,
          priorityLevel: j,
          startTime: M,
          expirationTime: ne,
          sortIndex: -1,
        }),
        M > H
          ? ((j.sortIndex = M),
            t(u, j),
            r(s) === null &&
              j === r(u) &&
              (m ? (h(k), (k = -1)) : (m = !0), Fe(S, M - H)))
          : ((j.sortIndex = ne), t(s, j), v || w || ((v = !0), ze(P))),
        j
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (j) {
      var B = d;
      return function () {
        var M = d;
        d = B;
        try {
          return j.apply(this, arguments);
        } finally {
          d = M;
        }
      };
    });
})(Rg);
kg.exports = Rg;
var e_ = kg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ng = _,
  wt = e_;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Tg = new Set(),
  _i = {};
function Rn(e, t) {
  mo(e, t), mo(e + "Capture", t);
}
function mo(e, t) {
  for (_i[e] = t, e = 0; e < t.length; e++) Tg.add(t[e]);
}
var wr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Cc = Object.prototype.hasOwnProperty,
  t_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fp = {},
  Up = {};
function r_(e) {
  return Cc.call(Up, e)
    ? !0
    : Cc.call(Fp, e)
      ? !1
      : t_.test(e)
        ? (Up[e] = !0)
        : ((Fp[e] = !0), !1);
}
function n_(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function o_(e, t, r, n) {
  if (t === null || typeof t > "u" || n_(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ot(e, t, r, n, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new ot(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ke[t] = new ot(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ke[e] = new ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ke[e] = new ot(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ke[e] = new ot(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ke[e] = new ot(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ke[e] = new ot(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ke[e] = new ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var td = /[\-:]([a-z])/g;
function rd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(td, rd);
    Ke[t] = new ot(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(td, rd);
    Ke[t] = new ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(td, rd);
  Ke[t] = new ot(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ke[e] = new ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ke.xlinkHref = new ot(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ke[e] = new ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nd(e, t, r, n) {
  var o = Ke.hasOwnProperty(t) ? Ke[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (o_(t, r, o, n) && (r = null),
    n || o === null
      ? r_(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
        ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
        : ((t = o.attributeName),
          (n = o.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var br = Ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  da = Symbol.for("react.element"),
  Vn = Symbol.for("react.portal"),
  Wn = Symbol.for("react.fragment"),
  od = Symbol.for("react.strict_mode"),
  kc = Symbol.for("react.profiler"),
  Ig = Symbol.for("react.provider"),
  jg = Symbol.for("react.context"),
  id = Symbol.for("react.forward_ref"),
  Rc = Symbol.for("react.suspense"),
  Nc = Symbol.for("react.suspense_list"),
  ad = Symbol.for("react.memo"),
  Ir = Symbol.for("react.lazy"),
  zg = Symbol.for("react.offscreen"),
  Bp = Symbol.iterator;
function Uo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bp && e[Bp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ee = Object.assign,
  Cu;
function ni(e) {
  if (Cu === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Cu = (t && t[1]) || "";
    }
  return (
    `
` +
    Cu +
    e
  );
}
var ku = !1;
function Ru(e, t) {
  if (!e || ku) return "";
  ku = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (ku = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? ni(e) : "";
}
function i_(e) {
  switch (e.tag) {
    case 5:
      return ni(e.type);
    case 16:
      return ni("Lazy");
    case 13:
      return ni("Suspense");
    case 19:
      return ni("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ru(e.type, !1)), e;
    case 11:
      return (e = Ru(e.type.render, !1)), e;
    case 1:
      return (e = Ru(e.type, !0)), e;
    default:
      return "";
  }
}
function Tc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wn:
      return "Fragment";
    case Vn:
      return "Portal";
    case kc:
      return "Profiler";
    case od:
      return "StrictMode";
    case Rc:
      return "Suspense";
    case Nc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case jg:
        return (e.displayName || "Context") + ".Consumer";
      case Ig:
        return (e._context.displayName || "Context") + ".Provider";
      case id:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ad:
        return (
          (t = e.displayName || null), t !== null ? t : Tc(e.type) || "Memo"
        );
      case Ir:
        (t = e._payload), (e = e._init);
        try {
          return Tc(e(t));
        } catch {}
    }
  return null;
}
function a_(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Tc(t);
    case 8:
      return t === od ? "StrictMode" : "Mode";
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
      if (typeof t == "string") return t;
  }
  return null;
}
function Jr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ag(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function l_(e) {
  var t = Ag(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (n = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function pa(e) {
  e._valueTracker || (e._valueTracker = l_(e));
}
function Dg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Ag(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function hl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ic(e, t) {
  var r = t.checked;
  return Ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Vp(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Jr(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Lg(e, t) {
  (t = t.checked), t != null && nd(e, "checked", t, !1);
}
function jc(e, t) {
  Lg(e, t);
  var r = Jr(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? zc(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && zc(e, t.type, Jr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wp(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function zc(e, t, r) {
  (t !== "number" || hl(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var oi = Array.isArray;
function no(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Jr(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ac(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return Ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Hp(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(R(92));
      if (oi(r)) {
        if (1 < r.length) throw Error(R(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Jr(r) };
}
function Mg(e, t) {
  var r = Jr(t.value),
    n = Jr(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Kp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Dc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ha,
  Ug = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ha = ha || document.createElement("div"),
          ha.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ha.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ei(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var si = {
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
    strokeWidth: !0,
  },
  s_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(si).forEach(function (e) {
  s_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (si[t] = si[e]);
  });
});
function Bg(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (si.hasOwnProperty(e) && si[e])
      ? ("" + t).trim()
      : t + "px";
}
function Vg(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = Bg(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var u_ = Ee(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function Lc(e, t) {
  if (t) {
    if (u_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Mc(e, t) {
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
      return !0;
  }
}
var Fc = null;
function ld(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Uc = null,
  oo = null,
  io = null;
function Gp(e) {
  if ((e = Xi(e))) {
    if (typeof Uc != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Os(t)), Uc(e.stateNode, e.type, t));
  }
}
function Wg(e) {
  oo ? (io ? io.push(e) : (io = [e])) : (oo = e);
}
function Hg() {
  if (oo) {
    var e = oo,
      t = io;
    if (((io = oo = null), Gp(e), t)) for (e = 0; e < t.length; e++) Gp(t[e]);
  }
}
function Kg(e, t) {
  return e(t);
}
function Gg() {}
var Nu = !1;
function Qg(e, t, r) {
  if (Nu) return e(t, r);
  Nu = !0;
  try {
    return Kg(e, t, r);
  } finally {
    (Nu = !1), (oo !== null || io !== null) && (Gg(), Hg());
  }
}
function Pi(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = Os(r);
  if (n === null) return null;
  r = n[t];
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
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(R(231, t, typeof r));
  return r;
}
var Bc = !1;
if (wr)
  try {
    var Bo = {};
    Object.defineProperty(Bo, "passive", {
      get: function () {
        Bc = !0;
      },
    }),
      window.addEventListener("test", Bo, Bo),
      window.removeEventListener("test", Bo, Bo);
  } catch {
    Bc = !1;
  }
function c_(e, t, r, n, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (f) {
    this.onError(f);
  }
}
var ui = !1,
  ml = null,
  yl = !1,
  Vc = null,
  f_ = {
    onError: function (e) {
      (ui = !0), (ml = e);
    },
  };
function d_(e, t, r, n, o, i, a, l, s) {
  (ui = !1), (ml = null), c_.apply(f_, arguments);
}
function p_(e, t, r, n, o, i, a, l, s) {
  if ((d_.apply(this, arguments), ui)) {
    if (ui) {
      var u = ml;
      (ui = !1), (ml = null);
    } else throw Error(R(198));
    yl || ((yl = !0), (Vc = u));
  }
}
function Nn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Yg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qp(e) {
  if (Nn(e) !== e) throw Error(R(188));
}
function h_(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return Qp(o), e;
        if (i === n) return Qp(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(R(189));
      }
    }
    if (r.alternate !== n) throw Error(R(190));
  }
  if (r.tag !== 3) throw Error(R(188));
  return r.stateNode.current === r ? e : t;
}
function qg(e) {
  return (e = h_(e)), e !== null ? Xg(e) : null;
}
function Xg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jg = wt.unstable_scheduleCallback,
  Yp = wt.unstable_cancelCallback,
  m_ = wt.unstable_shouldYield,
  y_ = wt.unstable_requestPaint,
  Oe = wt.unstable_now,
  g_ = wt.unstable_getCurrentPriorityLevel,
  sd = wt.unstable_ImmediatePriority,
  Zg = wt.unstable_UserBlockingPriority,
  gl = wt.unstable_NormalPriority,
  v_ = wt.unstable_LowPriority,
  ev = wt.unstable_IdlePriority,
  Ss = null,
  tr = null;
function w_(e) {
  if (tr && typeof tr.onCommitFiberRoot == "function")
    try {
      tr.onCommitFiberRoot(Ss, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Wt = Math.clz32 ? Math.clz32 : E_,
  S_ = Math.log,
  __ = Math.LN2;
function E_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((S_(e) / __) | 0)) | 0;
}
var ma = 64,
  ya = 4194304;
function ii(e) {
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
      return e;
  }
}
function vl(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (n = ii(l)) : ((i &= a), i !== 0 && (n = ii(i)));
  } else (a = r & ~o), a !== 0 ? (n = ii(a)) : i !== 0 && (n = ii(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Wt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function P_(e, t) {
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
      return -1;
  }
}
function O_(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Wt(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & r) || l & n) && (o[a] = P_(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Wc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function tv() {
  var e = ma;
  return (ma <<= 1), !(ma & 4194240) && (ma = 64), e;
}
function Tu(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Yi(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Wt(t)),
    (e[t] = r);
}
function x_(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - Wt(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function ud(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Wt(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var le = 0;
function rv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nv,
  cd,
  ov,
  iv,
  av,
  Hc = !1,
  ga = [],
  Br = null,
  Vr = null,
  Wr = null,
  Oi = new Map(),
  xi = new Map(),
  Ar = [],
  b_ =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function qp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Br = null;
      break;
    case "dragenter":
    case "dragleave":
      Vr = null;
      break;
    case "mouseover":
    case "mouseout":
      Wr = null;
      break;
    case "pointerover":
    case "pointerout":
      Oi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xi.delete(t.pointerId);
  }
}
function Vo(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Xi(t)), t !== null && cd(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function $_(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (Br = Vo(Br, e, t, r, n, o)), !0;
    case "dragenter":
      return (Vr = Vo(Vr, e, t, r, n, o)), !0;
    case "mouseover":
      return (Wr = Vo(Wr, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Oi.set(i, Vo(Oi.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), xi.set(i, Vo(xi.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function lv(e) {
  var t = gn(e.target);
  if (t !== null) {
    var r = Nn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Yg(r)), t !== null)) {
          (e.blockedOn = t),
            av(e.priority, function () {
              ov(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ma(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Kc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Fc = n), r.target.dispatchEvent(n), (Fc = null);
    } else return (t = Xi(r)), t !== null && cd(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Xp(e, t, r) {
  Ma(e) && r.delete(t);
}
function C_() {
  (Hc = !1),
    Br !== null && Ma(Br) && (Br = null),
    Vr !== null && Ma(Vr) && (Vr = null),
    Wr !== null && Ma(Wr) && (Wr = null),
    Oi.forEach(Xp),
    xi.forEach(Xp);
}
function Wo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Hc ||
      ((Hc = !0),
      wt.unstable_scheduleCallback(wt.unstable_NormalPriority, C_)));
}
function bi(e) {
  function t(o) {
    return Wo(o, e);
  }
  if (0 < ga.length) {
    Wo(ga[0], e);
    for (var r = 1; r < ga.length; r++) {
      var n = ga[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Br !== null && Wo(Br, e),
      Vr !== null && Wo(Vr, e),
      Wr !== null && Wo(Wr, e),
      Oi.forEach(t),
      xi.forEach(t),
      r = 0;
    r < Ar.length;
    r++
  )
    (n = Ar[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Ar.length && ((r = Ar[0]), r.blockedOn === null); )
    lv(r), r.blockedOn === null && Ar.shift();
}
var ao = br.ReactCurrentBatchConfig,
  wl = !0;
function k_(e, t, r, n) {
  var o = le,
    i = ao.transition;
  ao.transition = null;
  try {
    (le = 1), fd(e, t, r, n);
  } finally {
    (le = o), (ao.transition = i);
  }
}
function R_(e, t, r, n) {
  var o = le,
    i = ao.transition;
  ao.transition = null;
  try {
    (le = 4), fd(e, t, r, n);
  } finally {
    (le = o), (ao.transition = i);
  }
}
function fd(e, t, r, n) {
  if (wl) {
    var o = Kc(e, t, r, n);
    if (o === null) Bu(e, t, n, Sl, r), qp(e, n);
    else if ($_(o, e, t, r, n)) n.stopPropagation();
    else if ((qp(e, n), t & 4 && -1 < b_.indexOf(e))) {
      for (; o !== null; ) {
        var i = Xi(o);
        if (
          (i !== null && nv(i),
          (i = Kc(e, t, r, n)),
          i === null && Bu(e, t, n, Sl, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else Bu(e, t, n, null, r);
  }
}
var Sl = null;
function Kc(e, t, r, n) {
  if (((Sl = null), (e = ld(n)), (e = gn(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Yg(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Sl = e), null;
}
function sv(e) {
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
      switch (g_()) {
        case sd:
          return 1;
        case Zg:
          return 4;
        case gl:
        case v_:
          return 16;
        case ev:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Fr = null,
  dd = null,
  Fa = null;
function uv() {
  if (Fa) return Fa;
  var e,
    t = dd,
    r = t.length,
    n,
    o = "value" in Fr ? Fr.value : Fr.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (Fa = o.slice(e, 1 < n ? 1 - n : void 0));
}
function Ua(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function va() {
  return !0;
}
function Jp() {
  return !1;
}
function Pt(e) {
  function t(r, n, o, i, a) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((r = e[l]), (this[l] = r ? r(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? va
        : Jp),
      (this.isPropagationStopped = Jp),
      this
    );
  }
  return (
    Ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = va));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = va));
      },
      persist: function () {},
      isPersistent: va,
    }),
    t
  );
}
var ko = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pd = Pt(ko),
  qi = Ee({}, ko, { view: 0, detail: 0 }),
  N_ = Pt(qi),
  Iu,
  ju,
  Ho,
  _s = Ee({}, qi, {
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
    getModifierState: hd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ho &&
            (Ho && e.type === "mousemove"
              ? ((Iu = e.screenX - Ho.screenX), (ju = e.screenY - Ho.screenY))
              : (ju = Iu = 0),
            (Ho = e)),
          Iu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ju;
    },
  }),
  Zp = Pt(_s),
  T_ = Ee({}, _s, { dataTransfer: 0 }),
  I_ = Pt(T_),
  j_ = Ee({}, qi, { relatedTarget: 0 }),
  zu = Pt(j_),
  z_ = Ee({}, ko, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  A_ = Pt(z_),
  D_ = Ee({}, ko, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  L_ = Pt(D_),
  M_ = Ee({}, ko, { data: 0 }),
  eh = Pt(M_),
  F_ = {
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
    MozPrintableKey: "Unidentified",
  },
  U_ = {
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
    224: "Meta",
  },
  B_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function V_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = B_[e]) ? !!t[e] : !1;
}
function hd() {
  return V_;
}
var W_ = Ee({}, qi, {
    key: function (e) {
      if (e.key) {
        var t = F_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ua(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? U_[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hd,
    charCode: function (e) {
      return e.type === "keypress" ? Ua(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ua(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  H_ = Pt(W_),
  K_ = Ee({}, _s, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  th = Pt(K_),
  G_ = Ee({}, qi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hd,
  }),
  Q_ = Pt(G_),
  Y_ = Ee({}, ko, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  q_ = Pt(Y_),
  X_ = Ee({}, _s, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  J_ = Pt(X_),
  Z_ = [9, 13, 27, 32],
  md = wr && "CompositionEvent" in window,
  ci = null;
wr && "documentMode" in document && (ci = document.documentMode);
var eE = wr && "TextEvent" in window && !ci,
  cv = wr && (!md || (ci && 8 < ci && 11 >= ci)),
  rh = String.fromCharCode(32),
  nh = !1;
function fv(e, t) {
  switch (e) {
    case "keyup":
      return Z_.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function tE(e, t) {
  switch (e) {
    case "compositionend":
      return dv(t);
    case "keypress":
      return t.which !== 32 ? null : ((nh = !0), rh);
    case "textInput":
      return (e = t.data), e === rh && nh ? null : e;
    default:
      return null;
  }
}
function rE(e, t) {
  if (Hn)
    return e === "compositionend" || (!md && fv(e, t))
      ? ((e = uv()), (Fa = dd = Fr = null), (Hn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return cv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var nE = {
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
  week: !0,
};
function oh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!nE[e.type] : t === "textarea";
}
function pv(e, t, r, n) {
  Wg(n),
    (t = _l(t, "onChange")),
    0 < t.length &&
      ((r = new pd("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var fi = null,
  $i = null;
function oE(e) {
  Ov(e, 0);
}
function Es(e) {
  var t = Qn(e);
  if (Dg(t)) return e;
}
function iE(e, t) {
  if (e === "change") return t;
}
var hv = !1;
if (wr) {
  var Au;
  if (wr) {
    var Du = "oninput" in document;
    if (!Du) {
      var ih = document.createElement("div");
      ih.setAttribute("oninput", "return;"),
        (Du = typeof ih.oninput == "function");
    }
    Au = Du;
  } else Au = !1;
  hv = Au && (!document.documentMode || 9 < document.documentMode);
}
function ah() {
  fi && (fi.detachEvent("onpropertychange", mv), ($i = fi = null));
}
function mv(e) {
  if (e.propertyName === "value" && Es($i)) {
    var t = [];
    pv(t, $i, e, ld(e)), Qg(oE, t);
  }
}
function aE(e, t, r) {
  e === "focusin"
    ? (ah(), (fi = t), ($i = r), fi.attachEvent("onpropertychange", mv))
    : e === "focusout" && ah();
}
function lE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Es($i);
}
function sE(e, t) {
  if (e === "click") return Es(t);
}
function uE(e, t) {
  if (e === "input" || e === "change") return Es(t);
}
function cE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Gt = typeof Object.is == "function" ? Object.is : cE;
function Ci(e, t) {
  if (Gt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Cc.call(t, o) || !Gt(e[o], t[o])) return !1;
  }
  return !0;
}
function lh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sh(e, t) {
  var r = lh(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = lh(r);
  }
}
function yv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? yv(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function gv() {
  for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = hl(e.document);
  }
  return t;
}
function yd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function fE(e) {
  var t = gv(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    yv(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && yd(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = sh(r, i));
        var a = sh(r, n);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var dE = wr && "documentMode" in document && 11 >= document.documentMode,
  Kn = null,
  Gc = null,
  di = null,
  Qc = !1;
function uh(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Qc ||
    Kn == null ||
    Kn !== hl(n) ||
    ((n = Kn),
    "selectionStart" in n && yd(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (di && Ci(di, n)) ||
      ((di = n),
      (n = _l(Gc, "onSelect")),
      0 < n.length &&
        ((t = new pd("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Kn))));
}
function wa(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var Gn = {
    animationend: wa("Animation", "AnimationEnd"),
    animationiteration: wa("Animation", "AnimationIteration"),
    animationstart: wa("Animation", "AnimationStart"),
    transitionend: wa("Transition", "TransitionEnd"),
  },
  Lu = {},
  vv = {};
wr &&
  ((vv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gn.animationend.animation,
    delete Gn.animationiteration.animation,
    delete Gn.animationstart.animation),
  "TransitionEvent" in window || delete Gn.transitionend.transition);
function Ps(e) {
  if (Lu[e]) return Lu[e];
  if (!Gn[e]) return e;
  var t = Gn[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in vv) return (Lu[e] = t[r]);
  return e;
}
var wv = Ps("animationend"),
  Sv = Ps("animationiteration"),
  _v = Ps("animationstart"),
  Ev = Ps("transitionend"),
  Pv = new Map(),
  ch =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function rn(e, t) {
  Pv.set(e, t), Rn(t, [e]);
}
for (var Mu = 0; Mu < ch.length; Mu++) {
  var Fu = ch[Mu],
    pE = Fu.toLowerCase(),
    hE = Fu[0].toUpperCase() + Fu.slice(1);
  rn(pE, "on" + hE);
}
rn(wv, "onAnimationEnd");
rn(Sv, "onAnimationIteration");
rn(_v, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(Ev, "onTransitionEnd");
mo("onMouseEnter", ["mouseout", "mouseover"]);
mo("onMouseLeave", ["mouseout", "mouseover"]);
mo("onPointerEnter", ["pointerout", "pointerover"]);
mo("onPointerLeave", ["pointerout", "pointerover"]);
Rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ai =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  mE = new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));
function fh(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), p_(n, t, void 0, e), (e.currentTarget = null);
}
function Ov(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var l = n[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          fh(o, l, u), (i = s);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((l = n[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          fh(o, l, u), (i = s);
        }
    }
  }
  if (yl) throw ((e = Vc), (yl = !1), (Vc = null), e);
}
function de(e, t) {
  var r = t[Zc];
  r === void 0 && (r = t[Zc] = new Set());
  var n = e + "__bubble";
  r.has(n) || (xv(t, e, 2, !1), r.add(n));
}
function Uu(e, t, r) {
  var n = 0;
  t && (n |= 4), xv(r, e, n, t);
}
var Sa = "_reactListening" + Math.random().toString(36).slice(2);
function ki(e) {
  if (!e[Sa]) {
    (e[Sa] = !0),
      Tg.forEach(function (r) {
        r !== "selectionchange" && (mE.has(r) || Uu(r, !1, e), Uu(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sa] || ((t[Sa] = !0), Uu("selectionchange", !1, t));
  }
}
function xv(e, t, r, n) {
  switch (sv(t)) {
    case 1:
      var o = k_;
      break;
    case 4:
      o = R_;
      break;
    default:
      o = fd;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !Bc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
        ? e.addEventListener(t, r, { passive: o })
        : e.addEventListener(t, r, !1);
}
function Bu(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var l = n.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = gn(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            n = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  Qg(function () {
    var u = i,
      f = ld(r),
      c = [];
    e: {
      var d = Pv.get(e);
      if (d !== void 0) {
        var w = pd,
          v = e;
        switch (e) {
          case "keypress":
            if (Ua(r) === 0) break e;
          case "keydown":
          case "keyup":
            w = H_;
            break;
          case "focusin":
            (v = "focus"), (w = zu);
            break;
          case "focusout":
            (v = "blur"), (w = zu);
            break;
          case "beforeblur":
          case "afterblur":
            w = zu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Zp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = I_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Q_;
            break;
          case wv:
          case Sv:
          case _v:
            w = A_;
            break;
          case Ev:
            w = q_;
            break;
          case "scroll":
            w = N_;
            break;
          case "wheel":
            w = J_;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = L_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = th;
        }
        var m = (t & 4) !== 0,
          y = !m && e === "scroll",
          h = m ? (d !== null ? d + "Capture" : null) : d;
        m = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              h !== null && ((S = Pi(p, h)), S != null && m.push(Ri(p, S, g)))),
            y)
          )
            break;
          p = p.return;
        }
        0 < m.length &&
          ((d = new w(d, v, null, r, f)), c.push({ event: d, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          d &&
            r !== Fc &&
            (v = r.relatedTarget || r.fromElement) &&
            (gn(v) || v[Sr]))
        )
          break e;
        if (
          (w || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          w
            ? ((v = r.relatedTarget || r.toElement),
              (w = u),
              (v = v ? gn(v) : null),
              v !== null &&
                ((y = Nn(v)), v !== y || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((w = null), (v = u)),
          w !== v)
        ) {
          if (
            ((m = Zp),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = th),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (y = w == null ? d : Qn(w)),
            (g = v == null ? d : Qn(v)),
            (d = new m(S, p + "leave", w, r, f)),
            (d.target = y),
            (d.relatedTarget = g),
            (S = null),
            gn(f) === u &&
              ((m = new m(h, p + "enter", v, r, f)),
              (m.target = g),
              (m.relatedTarget = y),
              (S = m)),
            (y = S),
            w && v)
          )
            t: {
              for (m = w, h = v, p = 0, g = m; g; g = Fn(g)) p++;
              for (g = 0, S = h; S; S = Fn(S)) g++;
              for (; 0 < p - g; ) (m = Fn(m)), p--;
              for (; 0 < g - p; ) (h = Fn(h)), g--;
              for (; p--; ) {
                if (m === h || (h !== null && m === h.alternate)) break t;
                (m = Fn(m)), (h = Fn(h));
              }
              m = null;
            }
          else m = null;
          w !== null && dh(c, d, w, m, !1),
            v !== null && y !== null && dh(c, y, v, m, !0);
        }
      }
      e: {
        if (
          ((d = u ? Qn(u) : window),
          (w = d.nodeName && d.nodeName.toLowerCase()),
          w === "select" || (w === "input" && d.type === "file"))
        )
          var P = iE;
        else if (oh(d))
          if (hv) P = uE;
          else {
            P = lE;
            var O = aE;
          }
        else
          (w = d.nodeName) &&
            w.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (P = sE);
        if (P && (P = P(e, u))) {
          pv(c, P, r, f);
          break e;
        }
        O && O(e, d, u),
          e === "focusout" &&
            (O = d._wrapperState) &&
            O.controlled &&
            d.type === "number" &&
            zc(d, "number", d.value);
      }
      switch (((O = u ? Qn(u) : window), e)) {
        case "focusin":
          (oh(O) || O.contentEditable === "true") &&
            ((Kn = O), (Gc = u), (di = null));
          break;
        case "focusout":
          di = Gc = Kn = null;
          break;
        case "mousedown":
          Qc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qc = !1), uh(c, r, f);
          break;
        case "selectionchange":
          if (dE) break;
        case "keydown":
        case "keyup":
          uh(c, r, f);
      }
      var E;
      if (md)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Hn
          ? fv(e, r) && (k = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (cv &&
          r.locale !== "ko" &&
          (Hn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Hn && (E = uv())
            : ((Fr = f),
              (dd = "value" in Fr ? Fr.value : Fr.textContent),
              (Hn = !0))),
        (O = _l(u, k)),
        0 < O.length &&
          ((k = new eh(k, e, null, r, f)),
          c.push({ event: k, listeners: O }),
          E ? (k.data = E) : ((E = dv(r)), E !== null && (k.data = E)))),
        (E = eE ? tE(e, r) : rE(e, r)) &&
          ((u = _l(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new eh("onBeforeInput", "beforeinput", null, r, f)),
            c.push({ event: f, listeners: u }),
            (f.data = E)));
    }
    Ov(c, t);
  });
}
function Ri(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function _l(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Pi(e, r)),
      i != null && n.unshift(Ri(e, i, o)),
      (i = Pi(e, t)),
      i != null && n.push(Ri(e, i, o))),
      (e = e.return);
  }
  return n;
}
function Fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function dh(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var l = r,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === n) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = Pi(r, i)), s != null && a.unshift(Ri(r, s, l)))
        : o || ((s = Pi(r, i)), s != null && a.push(Ri(r, s, l)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var yE = /\r\n?/g,
  gE = /\u0000|\uFFFD/g;
function ph(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      yE,
      `
`,
    )
    .replace(gE, "");
}
function _a(e, t, r) {
  if (((t = ph(t)), ph(e) !== t && r)) throw Error(R(425));
}
function El() {}
var Yc = null,
  qc = null;
function Xc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Jc = typeof setTimeout == "function" ? setTimeout : void 0,
  vE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hh = typeof Promise == "function" ? Promise : void 0,
  wE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hh < "u"
        ? function (e) {
            return hh.resolve(null).then(e).catch(SE);
          }
        : Jc;
function SE(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vu(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), bi(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  bi(t);
}
function Hr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function mh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ro = Math.random().toString(36).slice(2),
  Zt = "__reactFiber$" + Ro,
  Ni = "__reactProps$" + Ro,
  Sr = "__reactContainer$" + Ro,
  Zc = "__reactEvents$" + Ro,
  _E = "__reactListeners$" + Ro,
  EE = "__reactHandles$" + Ro;
function gn(e) {
  var t = e[Zt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Sr] || r[Zt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = mh(e); e !== null; ) {
          if ((r = e[Zt])) return r;
          e = mh(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Xi(e) {
  return (
    (e = e[Zt] || e[Sr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Os(e) {
  return e[Ni] || null;
}
var ef = [],
  Yn = -1;
function nn(e) {
  return { current: e };
}
function pe(e) {
  0 > Yn || ((e.current = ef[Yn]), (ef[Yn] = null), Yn--);
}
function fe(e, t) {
  Yn++, (ef[Yn] = e.current), (e.current = t);
}
var Zr = {},
  Ze = nn(Zr),
  ut = nn(!1),
  On = Zr;
function yo(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Zr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ct(e) {
  return (e = e.childContextTypes), e != null;
}
function Pl() {
  pe(ut), pe(Ze);
}
function yh(e, t, r) {
  if (Ze.current !== Zr) throw Error(R(168));
  fe(Ze, t), fe(ut, r);
}
function bv(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(R(108, a_(e) || "Unknown", o));
  return Ee({}, r, n);
}
function Ol(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zr),
    (On = Ze.current),
    fe(Ze, e),
    fe(ut, ut.current),
    !0
  );
}
function gh(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(R(169));
  r
    ? ((e = bv(e, t, On)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      pe(ut),
      pe(Ze),
      fe(Ze, e))
    : pe(ut),
    fe(ut, r);
}
var dr = null,
  xs = !1,
  Wu = !1;
function $v(e) {
  dr === null ? (dr = [e]) : dr.push(e);
}
function PE(e) {
  (xs = !0), $v(e);
}
function on() {
  if (!Wu && dr !== null) {
    Wu = !0;
    var e = 0,
      t = le;
    try {
      var r = dr;
      for (le = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (dr = null), (xs = !1);
    } catch (o) {
      throw (dr !== null && (dr = dr.slice(e + 1)), Jg(sd, on), o);
    } finally {
      (le = t), (Wu = !1);
    }
  }
  return null;
}
var qn = [],
  Xn = 0,
  xl = null,
  bl = 0,
  bt = [],
  $t = 0,
  xn = null,
  hr = 1,
  mr = "";
function hn(e, t) {
  (qn[Xn++] = bl), (qn[Xn++] = xl), (xl = e), (bl = t);
}
function Cv(e, t, r) {
  (bt[$t++] = hr), (bt[$t++] = mr), (bt[$t++] = xn), (xn = e);
  var n = hr;
  e = mr;
  var o = 32 - Wt(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - Wt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (hr = (1 << (32 - Wt(t) + o)) | (r << o) | n),
      (mr = i + e);
  } else (hr = (1 << i) | (r << o) | n), (mr = e);
}
function gd(e) {
  e.return !== null && (hn(e, 1), Cv(e, 1, 0));
}
function vd(e) {
  for (; e === xl; )
    (xl = qn[--Xn]), (qn[Xn] = null), (bl = qn[--Xn]), (qn[Xn] = null);
  for (; e === xn; )
    (xn = bt[--$t]),
      (bt[$t] = null),
      (mr = bt[--$t]),
      (bt[$t] = null),
      (hr = bt[--$t]),
      (bt[$t] = null);
}
var gt = null,
  yt = null,
  ye = !1,
  Bt = null;
function kv(e, t) {
  var r = Ct(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function vh(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gt = e), (yt = Hr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gt = e), (yt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = xn !== null ? { id: hr, overflow: mr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ct(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (gt = e),
            (yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function tf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rf(e) {
  if (ye) {
    var t = yt;
    if (t) {
      var r = t;
      if (!vh(e, t)) {
        if (tf(e)) throw Error(R(418));
        t = Hr(r.nextSibling);
        var n = gt;
        t && vh(e, t)
          ? kv(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (gt = e));
      }
    } else {
      if (tf(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ye = !1), (gt = e);
    }
  }
}
function wh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gt = e;
}
function Ea(e) {
  if (e !== gt) return !1;
  if (!ye) return wh(e), (ye = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xc(e.type, e.memoizedProps))),
    t && (t = yt))
  ) {
    if (tf(e)) throw (Rv(), Error(R(418)));
    for (; t; ) kv(e, t), (t = Hr(t.nextSibling));
  }
  if ((wh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              yt = Hr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      yt = null;
    }
  } else yt = gt ? Hr(e.stateNode.nextSibling) : null;
  return !0;
}
function Rv() {
  for (var e = yt; e; ) e = Hr(e.nextSibling);
}
function go() {
  (yt = gt = null), (ye = !1);
}
function wd(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
var OE = br.ReactCurrentBatchConfig;
function Ft(e, t) {
  if (e && e.defaultProps) {
    (t = Ee({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var $l = nn(null),
  Cl = null,
  Jn = null,
  Sd = null;
function _d() {
  Sd = Jn = Cl = null;
}
function Ed(e) {
  var t = $l.current;
  pe($l), (e._currentValue = t);
}
function nf(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function lo(e, t) {
  (Cl = e),
    (Sd = Jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null));
}
function Tt(e) {
  var t = e._currentValue;
  if (Sd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
      if (Cl === null) throw Error(R(308));
      (Jn = e), (Cl.dependencies = { lanes: 0, firstContext: e });
    } else Jn = Jn.next = e;
  return t;
}
var vn = null;
function Pd(e) {
  vn === null ? (vn = [e]) : vn.push(e);
}
function Nv(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), Pd(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    _r(e, n)
  );
}
function _r(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var jr = !1;
function Od(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Kr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), Z & 2)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      _r(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Pd(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    _r(e, r)
  );
}
function Ba(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), ud(e, r);
  }
}
function Sh(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function kl(e, t, r, n) {
  var o = e.updateQueue;
  jr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== a &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var c = o.baseState;
    (a = 0), (f = u = s = null), (l = i);
    do {
      var d = l.lane,
        w = l.eventTime;
      if ((n & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            m = l;
          switch (((d = t), (w = r), m.tag)) {
            case 1:
              if (((v = m.payload), typeof v == "function")) {
                c = v.call(w, c, d);
                break e;
              }
              c = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = m.payload),
                (d = typeof v == "function" ? v.call(w, c, d) : v),
                d == null)
              )
                break e;
              c = Ee({}, c, d);
              break e;
            case 2:
              jr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [l]) : d.push(l));
      } else
        (w = {
          eventTime: w,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = w), (s = c)) : (f = f.next = w),
          (a |= d);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (s = c),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ($n |= a), (e.lanes = a), (e.memoizedState = c);
  }
}
function _h(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(R(191, o));
        o.call(n);
      }
    }
}
var Iv = new Ng.Component().refs;
function of(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Ee({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var bs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = rt(),
      o = Qr(e),
      i = yr(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = Kr(e, i, o)),
      t !== null && (Ht(t, e, o, n), Ba(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = rt(),
      o = Qr(e),
      i = yr(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Kr(e, i, o)),
      t !== null && (Ht(t, e, o, n), Ba(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = rt(),
      n = Qr(e),
      o = yr(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Kr(e, o, n)),
      t !== null && (Ht(t, e, n, r), Ba(t, e, n));
  },
};
function Eh(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ci(r, n) || !Ci(o, i)
        : !0
  );
}
function jv(e, t, r) {
  var n = !1,
    o = Zr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Tt(i))
      : ((o = ct(t) ? On : Ze.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? yo(e, o) : Zr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bs),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ph(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && bs.enqueueReplaceState(t, t.state, null);
}
function af(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = Iv), Od(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Tt(i))
    : ((i = ct(t) ? On : Ze.current), (o.context = yo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (of(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && bs.enqueueReplaceState(o, o.state, null),
      kl(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ko(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(R(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(R(147, e));
      var o = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === Iv && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!r._owner) throw Error(R(290, e));
  }
  return e;
}
function Pa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Oh(e) {
  var t = e._init;
  return t(e._payload);
}
function zv(e) {
  function t(h, p) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [p]), (h.flags |= 16)) : g.push(p);
    }
  }
  function r(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function n(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = Yr(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((h.flags |= 2), p) : g)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, g, S) {
    return p === null || p.tag !== 6
      ? ((p = Xu(g, h.mode, S)), (p.return = h), p)
      : ((p = o(p, g)), (p.return = h), p);
  }
  function s(h, p, g, S) {
    var P = g.type;
    return P === Wn
      ? f(h, p, g.props.children, S, g.key)
      : p !== null &&
          (p.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === Ir &&
              Oh(P) === p.type))
        ? ((S = o(p, g.props)), (S.ref = Ko(h, p, g)), (S.return = h), S)
        : ((S = Qa(g.type, g.key, g.props, null, h.mode, S)),
          (S.ref = Ko(h, p, g)),
          (S.return = h),
          S);
  }
  function u(h, p, g, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Ju(g, h.mode, S)), (p.return = h), p)
      : ((p = o(p, g.children || [])), (p.return = h), p);
  }
  function f(h, p, g, S, P) {
    return p === null || p.tag !== 7
      ? ((p = En(g, h.mode, S, P)), (p.return = h), p)
      : ((p = o(p, g)), (p.return = h), p);
  }
  function c(h, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Xu("" + p, h.mode, g)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case da:
          return (
            (g = Qa(p.type, p.key, p.props, null, h.mode, g)),
            (g.ref = Ko(h, null, p)),
            (g.return = h),
            g
          );
        case Vn:
          return (p = Ju(p, h.mode, g)), (p.return = h), p;
        case Ir:
          var S = p._init;
          return c(h, S(p._payload), g);
      }
      if (oi(p) || Uo(p))
        return (p = En(p, h.mode, g, null)), (p.return = h), p;
      Pa(h, p);
    }
    return null;
  }
  function d(h, p, g, S) {
    var P = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return P !== null ? null : l(h, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case da:
          return g.key === P ? s(h, p, g, S) : null;
        case Vn:
          return g.key === P ? u(h, p, g, S) : null;
        case Ir:
          return (P = g._init), d(h, p, P(g._payload), S);
      }
      if (oi(g) || Uo(g)) return P !== null ? null : f(h, p, g, S, null);
      Pa(h, g);
    }
    return null;
  }
  function w(h, p, g, S, P) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(g) || null), l(p, h, "" + S, P);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case da:
          return (h = h.get(S.key === null ? g : S.key) || null), s(p, h, S, P);
        case Vn:
          return (h = h.get(S.key === null ? g : S.key) || null), u(p, h, S, P);
        case Ir:
          var O = S._init;
          return w(h, p, g, O(S._payload), P);
      }
      if (oi(S) || Uo(S)) return (h = h.get(g) || null), f(p, h, S, P, null);
      Pa(p, S);
    }
    return null;
  }
  function v(h, p, g, S) {
    for (
      var P = null, O = null, E = p, k = (p = 0), T = null;
      E !== null && k < g.length;
      k++
    ) {
      E.index > k ? ((T = E), (E = null)) : (T = E.sibling);
      var D = d(h, E, g[k], S);
      if (D === null) {
        E === null && (E = T);
        break;
      }
      e && E && D.alternate === null && t(h, E),
        (p = i(D, p, k)),
        O === null ? (P = D) : (O.sibling = D),
        (O = D),
        (E = T);
    }
    if (k === g.length) return r(h, E), ye && hn(h, k), P;
    if (E === null) {
      for (; k < g.length; k++)
        (E = c(h, g[k], S)),
          E !== null &&
            ((p = i(E, p, k)), O === null ? (P = E) : (O.sibling = E), (O = E));
      return ye && hn(h, k), P;
    }
    for (E = n(h, E); k < g.length; k++)
      (T = w(E, h, k, g[k], S)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? k : T.key),
          (p = i(T, p, k)),
          O === null ? (P = T) : (O.sibling = T),
          (O = T));
    return (
      e &&
        E.forEach(function (Y) {
          return t(h, Y);
        }),
      ye && hn(h, k),
      P
    );
  }
  function m(h, p, g, S) {
    var P = Uo(g);
    if (typeof P != "function") throw Error(R(150));
    if (((g = P.call(g)), g == null)) throw Error(R(151));
    for (
      var O = (P = null), E = p, k = (p = 0), T = null, D = g.next();
      E !== null && !D.done;
      k++, D = g.next()
    ) {
      E.index > k ? ((T = E), (E = null)) : (T = E.sibling);
      var Y = d(h, E, D.value, S);
      if (Y === null) {
        E === null && (E = T);
        break;
      }
      e && E && Y.alternate === null && t(h, E),
        (p = i(Y, p, k)),
        O === null ? (P = Y) : (O.sibling = Y),
        (O = Y),
        (E = T);
    }
    if (D.done) return r(h, E), ye && hn(h, k), P;
    if (E === null) {
      for (; !D.done; k++, D = g.next())
        (D = c(h, D.value, S)),
          D !== null &&
            ((p = i(D, p, k)), O === null ? (P = D) : (O.sibling = D), (O = D));
      return ye && hn(h, k), P;
    }
    for (E = n(h, E); !D.done; k++, D = g.next())
      (D = w(E, h, k, D.value, S)),
        D !== null &&
          (e && D.alternate !== null && E.delete(D.key === null ? k : D.key),
          (p = i(D, p, k)),
          O === null ? (P = D) : (O.sibling = D),
          (O = D));
    return (
      e &&
        E.forEach(function (J) {
          return t(h, J);
        }),
      ye && hn(h, k),
      P
    );
  }
  function y(h, p, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Wn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case da:
          e: {
            for (var P = g.key, O = p; O !== null; ) {
              if (O.key === P) {
                if (((P = g.type), P === Wn)) {
                  if (O.tag === 7) {
                    r(h, O.sibling),
                      (p = o(O, g.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  O.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Ir &&
                    Oh(P) === O.type)
                ) {
                  r(h, O.sibling),
                    (p = o(O, g.props)),
                    (p.ref = Ko(h, O, g)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                r(h, O);
                break;
              } else t(h, O);
              O = O.sibling;
            }
            g.type === Wn
              ? ((p = En(g.props.children, h.mode, S, g.key)),
                (p.return = h),
                (h = p))
              : ((S = Qa(g.type, g.key, g.props, null, h.mode, S)),
                (S.ref = Ko(h, p, g)),
                (S.return = h),
                (h = S));
          }
          return a(h);
        case Vn:
          e: {
            for (O = g.key; p !== null; ) {
              if (p.key === O)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  r(h, p.sibling),
                    (p = o(p, g.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  r(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Ju(g, h.mode, S)), (p.return = h), (h = p);
          }
          return a(h);
        case Ir:
          return (O = g._init), y(h, p, O(g._payload), S);
      }
      if (oi(g)) return v(h, p, g, S);
      if (Uo(g)) return m(h, p, g, S);
      Pa(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (r(h, p.sibling), (p = o(p, g)), (p.return = h), (h = p))
          : (r(h, p), (p = Xu(g, h.mode, S)), (p.return = h), (h = p)),
        a(h))
      : r(h, p);
  }
  return y;
}
var vo = zv(!0),
  Av = zv(!1),
  Ji = {},
  rr = nn(Ji),
  Ti = nn(Ji),
  Ii = nn(Ji);
function wn(e) {
  if (e === Ji) throw Error(R(174));
  return e;
}
function xd(e, t) {
  switch ((fe(Ii, t), fe(Ti, e), fe(rr, Ji), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Dc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Dc(t, e));
  }
  pe(rr), fe(rr, t);
}
function wo() {
  pe(rr), pe(Ti), pe(Ii);
}
function Dv(e) {
  wn(Ii.current);
  var t = wn(rr.current),
    r = Dc(t, e.type);
  t !== r && (fe(Ti, e), fe(rr, r));
}
function bd(e) {
  Ti.current === e && (pe(rr), pe(Ti));
}
var Se = nn(0);
function Rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Hu = [];
function $d() {
  for (var e = 0; e < Hu.length; e++)
    Hu[e]._workInProgressVersionPrimary = null;
  Hu.length = 0;
}
var Va = br.ReactCurrentDispatcher,
  Ku = br.ReactCurrentBatchConfig,
  bn = 0,
  _e = null,
  Ie = null,
  De = null,
  Nl = !1,
  pi = !1,
  ji = 0,
  xE = 0;
function Qe() {
  throw Error(R(321));
}
function Cd(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Gt(e[r], t[r])) return !1;
  return !0;
}
function kd(e, t, r, n, o, i) {
  if (
    ((bn = i),
    (_e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Va.current = e === null || e.memoizedState === null ? kE : RE),
    (e = r(n, o)),
    pi)
  ) {
    i = 0;
    do {
      if (((pi = !1), (ji = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (De = Ie = null),
        (t.updateQueue = null),
        (Va.current = NE),
        (e = r(n, o));
    } while (pi);
  }
  if (
    ((Va.current = Tl),
    (t = Ie !== null && Ie.next !== null),
    (bn = 0),
    (De = Ie = _e = null),
    (Nl = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Rd() {
  var e = ji !== 0;
  return (ji = 0), e;
}
function Yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return De === null ? (_e.memoizedState = De = e) : (De = De.next = e), De;
}
function It() {
  if (Ie === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = De === null ? _e.memoizedState : De.next;
  if (t !== null) (De = t), (Ie = e);
  else {
    if (e === null) throw Error(R(310));
    (Ie = e),
      (e = {
        memoizedState: Ie.memoizedState,
        baseState: Ie.baseState,
        baseQueue: Ie.baseQueue,
        queue: Ie.queue,
        next: null,
      }),
      De === null ? (_e.memoizedState = De = e) : (De = De.next = e);
  }
  return De;
}
function zi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gu(e) {
  var t = It(),
    r = t.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = e;
  var n = Ie,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var f = u.lane;
      if ((bn & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = c), (a = n)) : (s = s.next = c),
          (_e.lanes |= f),
          ($n |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = n) : (s.next = l),
      Gt(n, t.memoizedState) || (st = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = s),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (_e.lanes |= i), ($n |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Qu(e) {
  var t = It(),
    r = t.queue;
  if (r === null) throw Error(R(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Gt(i, t.memoizedState) || (st = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function Lv() {}
function Mv(e, t) {
  var r = _e,
    n = It(),
    o = t(),
    i = !Gt(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (st = !0)),
    (n = n.queue),
    Nd(Bv.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (De !== null && De.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Ai(9, Uv.bind(null, r, n, o, t), void 0, null),
      Le === null)
    )
      throw Error(R(349));
    bn & 30 || Fv(r, t, o);
  }
  return o;
}
function Fv(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Uv(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Vv(t) && Wv(e);
}
function Bv(e, t, r) {
  return r(function () {
    Vv(t) && Wv(e);
  });
}
function Vv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Gt(e, r);
  } catch {
    return !0;
  }
}
function Wv(e) {
  var t = _r(e, 1);
  t !== null && Ht(t, e, 1, -1);
}
function xh(e) {
  var t = Yt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = CE.bind(null, _e, e)),
    [t.memoizedState, e]
  );
}
function Ai(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Hv() {
  return It().memoizedState;
}
function Wa(e, t, r, n) {
  var o = Yt();
  (_e.flags |= e),
    (o.memoizedState = Ai(1 | t, r, void 0, n === void 0 ? null : n));
}
function $s(e, t, r, n) {
  var o = It();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Ie !== null) {
    var a = Ie.memoizedState;
    if (((i = a.destroy), n !== null && Cd(n, a.deps))) {
      o.memoizedState = Ai(t, r, i, n);
      return;
    }
  }
  (_e.flags |= e), (o.memoizedState = Ai(1 | t, r, i, n));
}
function bh(e, t) {
  return Wa(8390656, 8, e, t);
}
function Nd(e, t) {
  return $s(2048, 8, e, t);
}
function Kv(e, t) {
  return $s(4, 2, e, t);
}
function Gv(e, t) {
  return $s(4, 4, e, t);
}
function Qv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Yv(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), $s(4, 4, Qv.bind(null, t, e), r)
  );
}
function Td() {}
function qv(e, t) {
  var r = It();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Cd(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Xv(e, t) {
  var r = It();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Cd(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Jv(e, t, r) {
  return bn & 21
    ? (Gt(r, t) || ((r = tv()), (_e.lanes |= r), ($n |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = r));
}
function bE(e, t) {
  var r = le;
  (le = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = Ku.transition;
  Ku.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = r), (Ku.transition = n);
  }
}
function Zv() {
  return It().memoizedState;
}
function $E(e, t, r) {
  var n = Qr(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    e0(e))
  )
    t0(t, r);
  else if (((r = Nv(e, t, r, n)), r !== null)) {
    var o = rt();
    Ht(r, e, n, o), r0(r, t, n);
  }
}
function CE(e, t, r) {
  var n = Qr(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (e0(e)) t0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, r);
        if (((o.hasEagerState = !0), (o.eagerState = l), Gt(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Pd(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = Nv(e, t, o, n)),
      r !== null && ((o = rt()), Ht(r, e, n, o), r0(r, t, n));
  }
}
function e0(e) {
  var t = e.alternate;
  return e === _e || (t !== null && t === _e);
}
function t0(e, t) {
  pi = Nl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function r0(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), ud(e, r);
  }
}
var Tl = {
    readContext: Tt,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useInsertionEffect: Qe,
    useLayoutEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useMutableSource: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    unstable_isNewReconciler: !1,
  },
  kE = {
    readContext: Tt,
    useCallback: function (e, t) {
      return (Yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Tt,
    useEffect: bh,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Wa(4194308, 4, Qv.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Yt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = $E.bind(null, _e, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xh,
    useDebugValue: Td,
    useDeferredValue: function (e) {
      return (Yt().memoizedState = e);
    },
    useTransition: function () {
      var e = xh(!1),
        t = e[0];
      return (e = bE.bind(null, e[1])), (Yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = _e,
        o = Yt();
      if (ye) {
        if (r === void 0) throw Error(R(407));
        r = r();
      } else {
        if (((r = t()), Le === null)) throw Error(R(349));
        bn & 30 || Fv(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        bh(Bv.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Ai(9, Uv.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Yt(),
        t = Le.identifierPrefix;
      if (ye) {
        var r = mr,
          n = hr;
        (r = (n & ~(1 << (32 - Wt(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = ji++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = xE++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  RE = {
    readContext: Tt,
    useCallback: qv,
    useContext: Tt,
    useEffect: Nd,
    useImperativeHandle: Yv,
    useInsertionEffect: Kv,
    useLayoutEffect: Gv,
    useMemo: Xv,
    useReducer: Gu,
    useRef: Hv,
    useState: function () {
      return Gu(zi);
    },
    useDebugValue: Td,
    useDeferredValue: function (e) {
      var t = It();
      return Jv(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Gu(zi)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Lv,
    useSyncExternalStore: Mv,
    useId: Zv,
    unstable_isNewReconciler: !1,
  },
  NE = {
    readContext: Tt,
    useCallback: qv,
    useContext: Tt,
    useEffect: Nd,
    useImperativeHandle: Yv,
    useInsertionEffect: Kv,
    useLayoutEffect: Gv,
    useMemo: Xv,
    useReducer: Qu,
    useRef: Hv,
    useState: function () {
      return Qu(zi);
    },
    useDebugValue: Td,
    useDeferredValue: function (e) {
      var t = It();
      return Ie === null ? (t.memoizedState = e) : Jv(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Qu(zi)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Lv,
    useSyncExternalStore: Mv,
    useId: Zv,
    unstable_isNewReconciler: !1,
  };
function So(e, t) {
  try {
    var r = "",
      n = t;
    do (r += i_(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Yu(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function lf(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var TE = typeof WeakMap == "function" ? WeakMap : Map;
function n0(e, t, r) {
  (r = yr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      jl || ((jl = !0), (gf = n)), lf(e, t);
    }),
    r
  );
}
function o0(e, t, r) {
  (r = yr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        lf(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        lf(e, t),
          typeof n != "function" &&
            (Gr === null ? (Gr = new Set([this])) : Gr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
function $h(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new TE();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = KE.bind(null, e, t, r)), t.then(e, e));
}
function Ch(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function kh(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = yr(-1, 1)), (t.tag = 2), Kr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var IE = br.ReactCurrentOwner,
  st = !1;
function tt(e, t, r, n) {
  t.child = e === null ? Av(t, null, r, n) : vo(t, e.child, r, n);
}
function Rh(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    lo(t, o),
    (n = kd(e, t, r, n, i, o)),
    (r = Rd()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Er(e, t, o))
      : (ye && r && gd(t), (t.flags |= 1), tt(e, t, n, o), t.child)
  );
}
function Nh(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !Fd(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), i0(e, t, i, n, o))
      : ((e = Qa(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Ci), r(a, n) && e.ref === t.ref)
    )
      return Er(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Yr(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function i0(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ci(i, n) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (st = !0);
      else return (t.lanes = e.lanes), Er(e, t, o);
  }
  return sf(e, t, r, n, o);
}
function a0(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(eo, mt),
        (mt |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          fe(eo, mt),
          (mt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        fe(eo, mt),
        (mt |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      fe(eo, mt),
      (mt |= n);
  return tt(e, t, o, r), t.child;
}
function l0(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function sf(e, t, r, n, o) {
  var i = ct(r) ? On : Ze.current;
  return (
    (i = yo(t, i)),
    lo(t, o),
    (r = kd(e, t, r, n, i, o)),
    (n = Rd()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Er(e, t, o))
      : (ye && n && gd(t), (t.flags |= 1), tt(e, t, r, o), t.child)
  );
}
function Th(e, t, r, n, o) {
  if (ct(r)) {
    var i = !0;
    Ol(t);
  } else i = !1;
  if ((lo(t, o), t.stateNode === null))
    Ha(e, t), jv(t, r, n), af(t, r, n, o), (n = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Tt(u))
      : ((u = ct(r) ? On : Ze.current), (u = yo(t, u)));
    var f = r.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== n || s !== u) && Ph(t, a, n, u)),
      (jr = !1);
    var d = t.memoizedState;
    (a.state = d),
      kl(t, n, a, o),
      (s = t.memoizedState),
      l !== n || d !== s || ut.current || jr
        ? (typeof f == "function" && (of(t, r, f, n), (s = t.memoizedState)),
          (l = jr || Eh(t, r, l, n, d, s, u))
            ? (c ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (a.props = n),
          (a.state = s),
          (a.context = u),
          (n = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (a = t.stateNode),
      Tv(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ft(t.type, l)),
      (a.props = u),
      (c = t.pendingProps),
      (d = a.context),
      (s = r.contextType),
      typeof s == "object" && s !== null
        ? (s = Tt(s))
        : ((s = ct(r) ? On : Ze.current), (s = yo(t, s)));
    var w = r.getDerivedStateFromProps;
    (f =
      typeof w == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== c || d !== s) && Ph(t, a, n, s)),
      (jr = !1),
      (d = t.memoizedState),
      (a.state = d),
      kl(t, n, a, o);
    var v = t.memoizedState;
    l !== c || d !== v || ut.current || jr
      ? (typeof w == "function" && (of(t, r, w, n), (v = t.memoizedState)),
        (u = jr || Eh(t, r, u, n, d, v, s) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, v, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, v, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = v)),
        (a.props = n),
        (a.state = v),
        (a.context = s),
        (n = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return uf(e, t, r, n, i, o);
}
function uf(e, t, r, n, o, i) {
  l0(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return o && gh(t, r, !1), Er(e, t, i);
  (n = t.stateNode), (IE.current = t);
  var l =
    a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = vo(t, e.child, null, i)), (t.child = vo(t, null, l, i)))
      : tt(e, t, l, i),
    (t.memoizedState = n.state),
    o && gh(t, r, !0),
    t.child
  );
}
function s0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? yh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yh(e, t.context, !1),
    xd(e, t.containerInfo);
}
function Ih(e, t, r, n, o) {
  return go(), wd(o), (t.flags |= 256), tt(e, t, r, n), t.child;
}
var cf = { dehydrated: null, treeContext: null, retryLane: 0 };
function ff(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function u0(e, t, r) {
  var n = t.pendingProps,
    o = Se.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    fe(Se, o & 1),
    e === null)
  )
    return (
      rf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Rs(a, n, 0, null)),
              (e = En(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ff(r)),
              (t.memoizedState = cf),
              e)
            : Id(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return jE(e, t, a, n, l, o, r);
  if (i) {
    (i = n.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: "hidden", children: n.children };
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = s),
          (t.deletions = null))
        : ((n = Yr(o, s)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Yr(l, i)) : ((i = En(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ff(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = cf),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = Yr(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Id(e, t) {
  return (
    (t = Rs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Oa(e, t, r, n) {
  return (
    n !== null && wd(n),
    vo(t, e.child, null, r),
    (e = Id(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jE(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Yu(Error(R(422)))), Oa(e, t, a, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = n.fallback),
          (o = t.mode),
          (n = Rs({ mode: "visible", children: n.children }, o, 0, null)),
          (i = En(i, o, a, null)),
          (i.flags |= 2),
          (n.return = t),
          (i.return = t),
          (n.sibling = i),
          (t.child = n),
          t.mode & 1 && vo(t, e.child, null, a),
          (t.child.memoizedState = ff(a)),
          (t.memoizedState = cf),
          i);
  if (!(t.mode & 1)) return Oa(e, t, a, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var l = n.dgst;
    return (n = l), (i = Error(R(419))), (n = Yu(i, n, void 0)), Oa(e, t, a, n);
  }
  if (((l = (a & e.childLanes) !== 0), st || l)) {
    if (((n = Le), n !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (n.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), _r(e, o), Ht(n, e, o, -1));
    }
    return Md(), (n = Yu(Error(R(421)))), Oa(e, t, a, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = GE.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (yt = Hr(o.nextSibling)),
      (gt = t),
      (ye = !0),
      (Bt = null),
      e !== null &&
        ((bt[$t++] = hr),
        (bt[$t++] = mr),
        (bt[$t++] = xn),
        (hr = e.id),
        (mr = e.overflow),
        (xn = t)),
      (t = Id(t, n.children)),
      (t.flags |= 4096),
      t);
}
function jh(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), nf(e.return, t, r);
}
function qu(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o));
}
function c0(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((tt(e, t, n.children, r), (n = Se.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jh(e, r, t);
        else if (e.tag === 19) jh(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((fe(Se, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && Rl(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          qu(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Rl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        qu(t, !0, r, null, i);
        break;
      case "together":
        qu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ha(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Er(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($n |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Yr(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Yr(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function zE(e, t, r) {
  switch (t.tag) {
    case 3:
      s0(t), go();
      break;
    case 5:
      Dv(t);
      break;
    case 1:
      ct(t.type) && Ol(t);
      break;
    case 4:
      xd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      fe($l, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (fe(Se, Se.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? u0(e, t, r)
            : (fe(Se, Se.current & 1),
              (e = Er(e, t, r)),
              e !== null ? e.sibling : null);
      fe(Se, Se.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return c0(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        fe(Se, Se.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), a0(e, t, r);
  }
  return Er(e, t, r);
}
var f0, df, d0, p0;
f0 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
df = function () {};
d0 = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), wn(rr.current);
    var i = null;
    switch (r) {
      case "input":
        (o = Ic(e, o)), (n = Ic(e, n)), (i = []);
        break;
      case "select":
        (o = Ee({}, o, { value: void 0 })),
          (n = Ee({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ac(e, o)), (n = Ac(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = El);
    }
    Lc(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (_i.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var s = n[u];
      if (
        ((l = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (r || (r = {}), (r[a] = s[a]));
          } else r || (i || (i = []), i.push(u, r)), (r = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (i = i || []).push(u, "" + s)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (_i.hasOwnProperty(u)
                  ? (s != null && u === "onScroll" && de("scroll", e),
                    i || l === s || (i = []))
                  : (i = i || []).push(u, s));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
p0 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Go(e, t) {
  if (!ye)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function AE(e, t, r) {
  var n = t.pendingProps;
  switch ((vd(t), t.tag)) {
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
      return Ye(t), null;
    case 1:
      return ct(t.type) && Pl(), Ye(t), null;
    case 3:
      return (
        (n = t.stateNode),
        wo(),
        pe(ut),
        pe(Ze),
        $d(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ea(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Bt !== null && (Sf(Bt), (Bt = null)))),
        df(e, t),
        Ye(t),
        null
      );
    case 5:
      bd(t);
      var o = wn(Ii.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        d0(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(R(166));
          return Ye(t), null;
        }
        if (((e = wn(rr.current)), Ea(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[Zt] = t), (n[Ni] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              de("cancel", n), de("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              de("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ai.length; o++) de(ai[o], n);
              break;
            case "source":
              de("error", n);
              break;
            case "img":
            case "image":
            case "link":
              de("error", n), de("load", n);
              break;
            case "details":
              de("toggle", n);
              break;
            case "input":
              Vp(n, i), de("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                de("invalid", n);
              break;
            case "textarea":
              Hp(n, i), de("invalid", n);
          }
          Lc(r, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? n.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      _a(n.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    n.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      _a(n.textContent, l, e),
                    (o = ["children", "" + l]))
                : _i.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  de("scroll", n);
            }
          switch (r) {
            case "input":
              pa(n), Wp(n, i, !0);
              break;
            case "textarea":
              pa(n), Kp(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = El);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fg(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                  ? (e = a.createElement(r, { is: n.is }))
                  : ((e = a.createElement(r)),
                    r === "select" &&
                      ((a = e),
                      n.multiple
                        ? (a.multiple = !0)
                        : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[Zt] = t),
            (e[Ni] = n),
            f0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Mc(r, n)), r)) {
              case "dialog":
                de("cancel", e), de("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                de("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ai.length; o++) de(ai[o], e);
                o = n;
                break;
              case "source":
                de("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                de("error", e), de("load", e), (o = n);
                break;
              case "details":
                de("toggle", e), (o = n);
                break;
              case "input":
                Vp(e, n), (o = Ic(e, n)), de("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = Ee({}, n, { value: void 0 })),
                  de("invalid", e);
                break;
              case "textarea":
                Hp(e, n), (o = Ac(e, n)), de("invalid", e);
                break;
              default:
                o = n;
            }
            Lc(r, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === "style"
                  ? Vg(e, s)
                  : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Ug(e, s))
                    : i === "children"
                      ? typeof s == "string"
                        ? (r !== "textarea" || s !== "") && Ei(e, s)
                        : typeof s == "number" && Ei(e, "" + s)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (_i.hasOwnProperty(i)
                          ? s != null && i === "onScroll" && de("scroll", e)
                          : s != null && nd(e, i, s, a));
              }
            switch (r) {
              case "input":
                pa(e), Wp(e, n, !1);
                break;
              case "textarea":
                pa(e), Kp(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Jr(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? no(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      no(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = El);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ye(t), null;
    case 6:
      if (e && t.stateNode != null) p0(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(R(166));
        if (((r = wn(Ii.current)), wn(rr.current), Ea(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Zt] = t),
            (i = n.nodeValue !== r) && ((e = gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                _a(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _a(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Zt] = t),
            (t.stateNode = n);
      }
      return Ye(t), null;
    case 13:
      if (
        (pe(Se),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ye && yt !== null && t.mode & 1 && !(t.flags & 128))
          Rv(), go(), (t.flags |= 98560), (i = !1);
        else if (((i = Ea(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[Zt] = t;
          } else
            go(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ye(t), (i = !1);
        } else Bt !== null && (Sf(Bt), (Bt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Se.current & 1 ? je === 0 && (je = 3) : Md())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        wo(), df(e, t), e === null && ki(t.stateNode.containerInfo), Ye(t), null
      );
    case 10:
      return Ed(t.type._context), Ye(t), null;
    case 17:
      return ct(t.type) && Pl(), Ye(t), null;
    case 19:
      if ((pe(Se), (i = t.memoizedState), i === null)) return Ye(t), null;
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) Go(i, !1);
        else {
          if (je !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Rl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Go(i, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return fe(Se, (Se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Oe() > _o &&
            ((t.flags |= 128), (n = !0), Go(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Rl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Go(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !ye)
            )
              return Ye(t), null;
          } else
            2 * Oe() - i.renderingStartTime > _o &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Go(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Oe()),
          (t.sibling = null),
          (r = Se.current),
          fe(Se, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ye(t), null);
    case 22:
    case 23:
      return (
        Ld(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? mt & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function DE(e, t) {
  switch ((vd(t), t.tag)) {
    case 1:
      return (
        ct(t.type) && Pl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wo(),
        pe(ut),
        pe(Ze),
        $d(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bd(t), null;
    case 13:
      if (
        (pe(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        go();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return pe(Se), null;
    case 4:
      return wo(), null;
    case 10:
      return Ed(t.type._context), null;
    case 22:
    case 23:
      return Ld(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xa = !1,
  Je = !1,
  LE = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Zn(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Pe(e, t, n);
      }
    else r.current = null;
}
function pf(e, t, r) {
  try {
    r();
  } catch (n) {
    Pe(e, t, n);
  }
}
var zh = !1;
function ME(e, t) {
  if (((Yc = wl), (e = gv()), yd(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var w;
              c !== r || (o !== 0 && c.nodeType !== 3) || (l = a + o),
                c !== i || (n !== 0 && c.nodeType !== 3) || (s = a + n),
                c.nodeType === 3 && (a += c.nodeValue.length),
                (w = c.firstChild) !== null;

            )
              (d = c), (c = w);
            for (;;) {
              if (c === e) break t;
              if (
                (d === r && ++u === o && (l = a),
                d === i && ++f === n && (s = a),
                (w = c.nextSibling) !== null)
              )
                break;
              (c = d), (d = c.parentNode);
            }
            c = w;
          }
          r = l === -1 || s === -1 ? null : { start: l, end: s };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (qc = { focusedElem: e, selectionRange: r }, wl = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var m = v.memoizedProps,
                    y = v.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : Ft(t.type, m),
                      y,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (S) {
          Pe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (v = zh), (zh = !1), v;
}
function hi(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && pf(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function Cs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function hf(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function h0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), h0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Zt], delete t[Ni], delete t[Zc], delete t[_E], delete t[EE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function m0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ah(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || m0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function mf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = El));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (mf(e, t, r), e = e.sibling; e !== null; ) mf(e, t, r), (e = e.sibling);
}
function yf(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (yf(e, t, r), e = e.sibling; e !== null; ) yf(e, t, r), (e = e.sibling);
}
var Ve = null,
  Ut = !1;
function kr(e, t, r) {
  for (r = r.child; r !== null; ) y0(e, t, r), (r = r.sibling);
}
function y0(e, t, r) {
  if (tr && typeof tr.onCommitFiberUnmount == "function")
    try {
      tr.onCommitFiberUnmount(Ss, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Je || Zn(r, t);
    case 6:
      var n = Ve,
        o = Ut;
      (Ve = null),
        kr(e, t, r),
        (Ve = n),
        (Ut = o),
        Ve !== null &&
          (Ut
            ? ((e = Ve),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ve.removeChild(r.stateNode));
      break;
    case 18:
      Ve !== null &&
        (Ut
          ? ((e = Ve),
            (r = r.stateNode),
            e.nodeType === 8
              ? Vu(e.parentNode, r)
              : e.nodeType === 1 && Vu(e, r),
            bi(e))
          : Vu(Ve, r.stateNode));
      break;
    case 4:
      (n = Ve),
        (o = Ut),
        (Ve = r.stateNode.containerInfo),
        (Ut = !0),
        kr(e, t, r),
        (Ve = n),
        (Ut = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Je &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && pf(r, t, a),
            (o = o.next);
        } while (o !== n);
      }
      kr(e, t, r);
      break;
    case 1:
      if (
        !Je &&
        (Zn(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (l) {
          Pe(r, t, l);
        }
      kr(e, t, r);
      break;
    case 21:
      kr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Je = (n = Je) || r.memoizedState !== null), kr(e, t, r), (Je = n))
        : kr(e, t, r);
      break;
    default:
      kr(e, t, r);
  }
}
function Dh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new LE()),
      t.forEach(function (n) {
        var o = QE.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function Mt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ve = l.stateNode), (Ut = !1);
              break e;
            case 3:
              (Ve = l.stateNode.containerInfo), (Ut = !0);
              break e;
            case 4:
              (Ve = l.stateNode.containerInfo), (Ut = !0);
              break e;
          }
          l = l.return;
        }
        if (Ve === null) throw Error(R(160));
        y0(i, a, o), (Ve = null), (Ut = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Pe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) g0(t, e), (t = t.sibling);
}
function g0(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Mt(t, e), Qt(e), n & 4)) {
        try {
          hi(3, e, e.return), Cs(3, e);
        } catch (m) {
          Pe(e, e.return, m);
        }
        try {
          hi(5, e, e.return);
        } catch (m) {
          Pe(e, e.return, m);
        }
      }
      break;
    case 1:
      Mt(t, e), Qt(e), n & 512 && r !== null && Zn(r, r.return);
      break;
    case 5:
      if (
        (Mt(t, e),
        Qt(e),
        n & 512 && r !== null && Zn(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ei(o, "");
        } catch (m) {
          Pe(e, e.return, m);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Lg(o, i),
              Mc(l, a);
            var u = Mc(l, i);
            for (a = 0; a < s.length; a += 2) {
              var f = s[a],
                c = s[a + 1];
              f === "style"
                ? Vg(o, c)
                : f === "dangerouslySetInnerHTML"
                  ? Ug(o, c)
                  : f === "children"
                    ? Ei(o, c)
                    : nd(o, f, c, u);
            }
            switch (l) {
              case "input":
                jc(o, i);
                break;
              case "textarea":
                Mg(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? no(o, !!i.multiple, w, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? no(o, !!i.multiple, i.defaultValue, !0)
                      : no(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ni] = i;
          } catch (m) {
            Pe(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((Mt(t, e), Qt(e), n & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          Pe(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (Mt(t, e), Qt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          bi(t.containerInfo);
        } catch (m) {
          Pe(e, e.return, m);
        }
      break;
    case 4:
      Mt(t, e), Qt(e);
      break;
    case 13:
      Mt(t, e),
        Qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ad = Oe())),
        n & 4 && Dh(e);
      break;
    case 22:
      if (
        ((f = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Je = (u = Je) || f), Mt(t, e), (Je = u)) : Mt(t, e),
        Qt(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (L = e, f = e.child; f !== null; ) {
            for (c = L = f; L !== null; ) {
              switch (((d = L), (w = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hi(4, d, d.return);
                  break;
                case 1:
                  Zn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (n = d), (r = d.return);
                    try {
                      (t = n),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (m) {
                      Pe(n, r, m);
                    }
                  }
                  break;
                case 5:
                  Zn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Mh(c);
                    continue;
                  }
              }
              w !== null ? ((w.return = d), (L = w)) : Mh(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = c.stateNode),
                      (s = c.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = Bg("display", a)));
              } catch (m) {
                Pe(e, e.return, m);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (m) {
                Pe(e, e.return, m);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Mt(t, e), Qt(e), n & 4 && Dh(e);
      break;
    case 21:
      break;
    default:
      Mt(t, e), Qt(e);
  }
}
function Qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (m0(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(R(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (Ei(o, ""), (n.flags &= -33));
          var i = Ah(e);
          yf(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            l = Ah(e);
          mf(e, l, a);
          break;
        default:
          throw Error(R(161));
      }
    } catch (s) {
      Pe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function FE(e, t, r) {
  (L = e), v0(e);
}
function v0(e, t, r) {
  for (var n = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || xa;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || Je;
        l = xa;
        var u = Je;
        if (((xa = a), (Je = s) && !u))
          for (L = o; L !== null; )
            (a = L),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Fh(o)
                : s !== null
                  ? ((s.return = a), (L = s))
                  : Fh(o);
        for (; i !== null; ) (L = i), v0(i), (i = i.sibling);
        (L = o), (xa = l), (Je = u);
      }
      Lh(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : Lh(e);
  }
}
function Lh(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Je || Cs(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Je)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Ft(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && _h(t, i, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                _h(t, a, r);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (r === null && t.flags & 4) {
                r = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && r.focus();
                    break;
                  case "img":
                    s.src && (r.src = s.src);
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
                    var c = f.dehydrated;
                    c !== null && bi(c);
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
              throw Error(R(163));
          }
        Je || (t.flags & 512 && hf(t));
      } catch (d) {
        Pe(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (L = r);
      break;
    }
    L = t.return;
  }
}
function Mh(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (L = r);
      break;
    }
    L = t.return;
  }
}
function Fh(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Cs(4, t);
          } catch (s) {
            Pe(t, r, s);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (s) {
              Pe(t, o, s);
            }
          }
          var i = t.return;
          try {
            hf(t);
          } catch (s) {
            Pe(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            hf(t);
          } catch (s) {
            Pe(t, a, s);
          }
      }
    } catch (s) {
      Pe(t, t.return, s);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var UE = Math.ceil,
  Il = br.ReactCurrentDispatcher,
  jd = br.ReactCurrentOwner,
  Rt = br.ReactCurrentBatchConfig,
  Z = 0,
  Le = null,
  ke = null,
  He = 0,
  mt = 0,
  eo = nn(0),
  je = 0,
  Di = null,
  $n = 0,
  ks = 0,
  zd = 0,
  mi = null,
  lt = null,
  Ad = 0,
  _o = 1 / 0,
  cr = null,
  jl = !1,
  gf = null,
  Gr = null,
  ba = !1,
  Ur = null,
  zl = 0,
  yi = 0,
  vf = null,
  Ka = -1,
  Ga = 0;
function rt() {
  return Z & 6 ? Oe() : Ka !== -1 ? Ka : (Ka = Oe());
}
function Qr(e) {
  return e.mode & 1
    ? Z & 2 && He !== 0
      ? He & -He
      : OE.transition !== null
        ? (Ga === 0 && (Ga = tv()), Ga)
        : ((e = le),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sv(e.type))),
          e)
    : 1;
}
function Ht(e, t, r, n) {
  if (50 < yi) throw ((yi = 0), (vf = null), Error(R(185)));
  Yi(e, r, n),
    (!(Z & 2) || e !== Le) &&
      (e === Le && (!(Z & 2) && (ks |= r), je === 4 && Dr(e, He)),
      ft(e, n),
      r === 1 && Z === 0 && !(t.mode & 1) && ((_o = Oe() + 500), xs && on()));
}
function ft(e, t) {
  var r = e.callbackNode;
  O_(e, t);
  var n = vl(e, e === Le ? He : 0);
  if (n === 0)
    r !== null && Yp(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Yp(r), t === 1))
      e.tag === 0 ? PE(Uh.bind(null, e)) : $v(Uh.bind(null, e)),
        wE(function () {
          !(Z & 6) && on();
        }),
        (r = null);
    else {
      switch (rv(n)) {
        case 1:
          r = sd;
          break;
        case 4:
          r = Zg;
          break;
        case 16:
          r = gl;
          break;
        case 536870912:
          r = ev;
          break;
        default:
          r = gl;
      }
      r = b0(r, w0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function w0(e, t) {
  if (((Ka = -1), (Ga = 0), Z & 6)) throw Error(R(327));
  var r = e.callbackNode;
  if (so() && e.callbackNode !== r) return null;
  var n = vl(e, e === Le ? He : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Al(e, n);
  else {
    t = n;
    var o = Z;
    Z |= 2;
    var i = _0();
    (Le !== e || He !== t) && ((cr = null), (_o = Oe() + 500), _n(e, t));
    do
      try {
        WE();
        break;
      } catch (l) {
        S0(e, l);
      }
    while (1);
    _d(),
      (Il.current = i),
      (Z = o),
      ke !== null ? (t = 0) : ((Le = null), (He = 0), (t = je));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Wc(e)), o !== 0 && ((n = o), (t = wf(e, o)))), t === 1)
    )
      throw ((r = Di), _n(e, 0), Dr(e, n), ft(e, Oe()), r);
    if (t === 6) Dr(e, n);
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !BE(o) &&
          ((t = Al(e, n)),
          t === 2 && ((i = Wc(e)), i !== 0 && ((n = i), (t = wf(e, i)))),
          t === 1))
      )
        throw ((r = Di), _n(e, 0), Dr(e, n), ft(e, Oe()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          mn(e, lt, cr);
          break;
        case 3:
          if (
            (Dr(e, n), (n & 130023424) === n && ((t = Ad + 500 - Oe()), 10 < t))
          ) {
            if (vl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              rt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Jc(mn.bind(null, e, lt, cr), t);
            break;
          }
          mn(e, lt, cr);
          break;
        case 4:
          if ((Dr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - Wt(n);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i);
          }
          if (
            ((n = o),
            (n = Oe() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * UE(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Jc(mn.bind(null, e, lt, cr), n);
            break;
          }
          mn(e, lt, cr);
          break;
        case 5:
          mn(e, lt, cr);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return ft(e, Oe()), e.callbackNode === r ? w0.bind(null, e) : null;
}
function wf(e, t) {
  var r = mi;
  return (
    e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256),
    (e = Al(e, t)),
    e !== 2 && ((t = lt), (lt = r), t !== null && Sf(t)),
    e
  );
}
function Sf(e) {
  lt === null ? (lt = e) : lt.push.apply(lt, e);
}
function BE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Gt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Dr(e, t) {
  for (
    t &= ~zd,
      t &= ~ks,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Wt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Uh(e) {
  if (Z & 6) throw Error(R(327));
  so();
  var t = vl(e, 0);
  if (!(t & 1)) return ft(e, Oe()), null;
  var r = Al(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Wc(e);
    n !== 0 && ((t = n), (r = wf(e, n)));
  }
  if (r === 1) throw ((r = Di), _n(e, 0), Dr(e, t), ft(e, Oe()), r);
  if (r === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mn(e, lt, cr),
    ft(e, Oe()),
    null
  );
}
function Dd(e, t) {
  var r = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = r), Z === 0 && ((_o = Oe() + 500), xs && on());
  }
}
function Cn(e) {
  Ur !== null && Ur.tag === 0 && !(Z & 6) && so();
  var t = Z;
  Z |= 1;
  var r = Rt.transition,
    n = le;
  try {
    if (((Rt.transition = null), (le = 1), e)) return e();
  } finally {
    (le = n), (Rt.transition = r), (Z = t), !(Z & 6) && on();
  }
}
function Ld() {
  (mt = eo.current), pe(eo);
}
function _n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), vE(r)), ke !== null))
    for (r = ke.return; r !== null; ) {
      var n = r;
      switch ((vd(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Pl();
          break;
        case 3:
          wo(), pe(ut), pe(Ze), $d();
          break;
        case 5:
          bd(n);
          break;
        case 4:
          wo();
          break;
        case 13:
          pe(Se);
          break;
        case 19:
          pe(Se);
          break;
        case 10:
          Ed(n.type._context);
          break;
        case 22:
        case 23:
          Ld();
      }
      r = r.return;
    }
  if (
    ((Le = e),
    (ke = e = Yr(e.current, null)),
    (He = mt = t),
    (je = 0),
    (Di = null),
    (zd = ks = $n = 0),
    (lt = mi = null),
    vn !== null)
  ) {
    for (t = 0; t < vn.length; t++)
      if (((r = vn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (n.next = a);
        }
        r.pending = n;
      }
    vn = null;
  }
  return e;
}
function S0(e, t) {
  do {
    var r = ke;
    try {
      if ((_d(), (Va.current = Tl), Nl)) {
        for (var n = _e.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        Nl = !1;
      }
      if (
        ((bn = 0),
        (De = Ie = _e = null),
        (pi = !1),
        (ji = 0),
        (jd.current = null),
        r === null || r.return === null)
      ) {
        (je = 1), (Di = t), (ke = null);
        break;
      }
      e: {
        var i = e,
          a = r.return,
          l = r,
          s = t;
        if (
          ((t = He),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            f = l,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var w = Ch(a);
          if (w !== null) {
            (w.flags &= -257),
              kh(w, a, l, i, t),
              w.mode & 1 && $h(i, u, t),
              (t = w),
              (s = u);
            var v = t.updateQueue;
            if (v === null) {
              var m = new Set();
              m.add(s), (t.updateQueue = m);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              $h(i, u, t), Md();
              break e;
            }
            s = Error(R(426));
          }
        } else if (ye && l.mode & 1) {
          var y = Ch(a);
          if (y !== null) {
            !(y.flags & 65536) && (y.flags |= 256),
              kh(y, a, l, i, t),
              wd(So(s, l));
            break e;
          }
        }
        (i = s = So(s, l)),
          je !== 4 && (je = 2),
          mi === null ? (mi = [i]) : mi.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = n0(i, s, t);
              Sh(i, h);
              break e;
            case 1:
              l = s;
              var p = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Gr === null || !Gr.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = o0(i, l, t);
                Sh(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      P0(r);
    } catch (P) {
      (t = P), ke === r && r !== null && (ke = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function _0() {
  var e = Il.current;
  return (Il.current = Tl), e === null ? Tl : e;
}
function Md() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    Le === null || (!($n & 268435455) && !(ks & 268435455)) || Dr(Le, He);
}
function Al(e, t) {
  var r = Z;
  Z |= 2;
  var n = _0();
  (Le !== e || He !== t) && ((cr = null), _n(e, t));
  do
    try {
      VE();
      break;
    } catch (o) {
      S0(e, o);
    }
  while (1);
  if ((_d(), (Z = r), (Il.current = n), ke !== null)) throw Error(R(261));
  return (Le = null), (He = 0), je;
}
function VE() {
  for (; ke !== null; ) E0(ke);
}
function WE() {
  for (; ke !== null && !m_(); ) E0(ke);
}
function E0(e) {
  var t = x0(e.alternate, e, mt);
  (e.memoizedProps = e.pendingProps),
    t === null ? P0(e) : (ke = t),
    (jd.current = null);
}
function P0(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = DE(r, t)), r !== null)) {
        (r.flags &= 32767), (ke = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (je = 6), (ke = null);
        return;
      }
    } else if (((r = AE(r, t, mt)), r !== null)) {
      ke = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ke = t;
      return;
    }
    ke = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function mn(e, t, r) {
  var n = le,
    o = Rt.transition;
  try {
    (Rt.transition = null), (le = 1), HE(e, t, r, n);
  } finally {
    (Rt.transition = o), (le = n);
  }
  return null;
}
function HE(e, t, r, n) {
  do so();
  while (Ur !== null);
  if (Z & 6) throw Error(R(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (x_(e, i),
    e === Le && ((ke = Le = null), (He = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ba ||
      ((ba = !0),
      b0(gl, function () {
        return so(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = Rt.transition), (Rt.transition = null);
    var a = le;
    le = 1;
    var l = Z;
    (Z |= 4),
      (jd.current = null),
      ME(e, r),
      g0(r, e),
      fE(qc),
      (wl = !!Yc),
      (qc = Yc = null),
      (e.current = r),
      FE(r),
      y_(),
      (Z = l),
      (le = a),
      (Rt.transition = i);
  } else e.current = r;
  if (
    (ba && ((ba = !1), (Ur = e), (zl = o)),
    (i = e.pendingLanes),
    i === 0 && (Gr = null),
    w_(r.stateNode),
    ft(e, Oe()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (jl) throw ((jl = !1), (e = gf), (gf = null), e);
  return (
    zl & 1 && e.tag !== 0 && so(),
    (i = e.pendingLanes),
    i & 1 ? (e === vf ? yi++ : ((yi = 0), (vf = e))) : (yi = 0),
    on(),
    null
  );
}
function so() {
  if (Ur !== null) {
    var e = rv(zl),
      t = Rt.transition,
      r = le;
    try {
      if (((Rt.transition = null), (le = 16 > e ? 16 : e), Ur === null))
        var n = !1;
      else {
        if (((e = Ur), (Ur = null), (zl = 0), Z & 6)) throw Error(R(331));
        var o = Z;
        for (Z |= 4, L = e.current; L !== null; ) {
          var i = L,
            a = i.child;
          if (L.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (L = u; L !== null; ) {
                  var f = L;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hi(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (L = c);
                  else
                    for (; L !== null; ) {
                      f = L;
                      var d = f.sibling,
                        w = f.return;
                      if ((h0(f), f === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = w), (L = d);
                        break;
                      }
                      L = w;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var m = v.child;
                if (m !== null) {
                  v.child = null;
                  do {
                    var y = m.sibling;
                    (m.sibling = null), (m = y);
                  } while (m !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (L = a);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hi(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (L = h);
                break e;
              }
              L = i.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          a = L;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (L = g);
          else
            e: for (a = p; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cs(9, l);
                  }
                } catch (P) {
                  Pe(l, l.return, P);
                }
              if (l === a) {
                L = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (L = S);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((Z = o), on(), tr && typeof tr.onPostCommitFiberRoot == "function")
        )
          try {
            tr.onPostCommitFiberRoot(Ss, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (le = r), (Rt.transition = t);
    }
  }
  return !1;
}
function Bh(e, t, r) {
  (t = So(r, t)),
    (t = n0(e, t, 1)),
    (e = Kr(e, t, 1)),
    (t = rt()),
    e !== null && (Yi(e, 1, t), ft(e, t));
}
function Pe(e, t, r) {
  if (e.tag === 3) Bh(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bh(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Gr === null || !Gr.has(n)))
        ) {
          (e = So(r, e)),
            (e = o0(t, e, 1)),
            (t = Kr(t, e, 1)),
            (e = rt()),
            t !== null && (Yi(t, 1, e), ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function KE(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = rt()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Le === e &&
      (He & r) === r &&
      (je === 4 || (je === 3 && (He & 130023424) === He && 500 > Oe() - Ad)
        ? _n(e, 0)
        : (zd |= r)),
    ft(e, t);
}
function O0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ya), (ya <<= 1), !(ya & 130023424) && (ya = 4194304))
      : (t = 1));
  var r = rt();
  (e = _r(e, t)), e !== null && (Yi(e, t, r), ft(e, r));
}
function GE(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), O0(e, r);
}
function QE(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  n !== null && n.delete(t), O0(e, r);
}
var x0;
x0 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ut.current) st = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (st = !1), zE(e, t, r);
      st = !!(e.flags & 131072);
    }
  else (st = !1), ye && t.flags & 1048576 && Cv(t, bl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Ha(e, t), (e = t.pendingProps);
      var o = yo(t, Ze.current);
      lo(t, r), (o = kd(null, t, n, e, o, r));
      var i = Rd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ct(n) ? ((i = !0), Ol(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Od(t),
            (o.updater = bs),
            (t.stateNode = o),
            (o._reactInternals = t),
            af(t, n, e, r),
            (t = uf(null, t, n, !0, i, r)))
          : ((t.tag = 0), ye && i && gd(t), tt(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Ha(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = qE(n)),
          (e = Ft(n, e)),
          o)
        ) {
          case 0:
            t = sf(null, t, n, e, r);
            break e;
          case 1:
            t = Th(null, t, n, e, r);
            break e;
          case 11:
            t = Rh(null, t, n, e, r);
            break e;
          case 14:
            t = Nh(null, t, n, Ft(n.type, e), r);
            break e;
        }
        throw Error(R(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ft(n, o)),
        sf(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ft(n, o)),
        Th(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((s0(t), e === null)) throw Error(R(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Tv(e, t),
          kl(t, n, null, r);
        var a = t.memoizedState;
        if (((n = a.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = So(Error(R(423)), t)), (t = Ih(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = So(Error(R(424)), t)), (t = Ih(e, t, n, r, o));
            break e;
          } else
            for (
              yt = Hr(t.stateNode.containerInfo.firstChild),
                gt = t,
                ye = !0,
                Bt = null,
                r = Av(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((go(), n === o)) {
            t = Er(e, t, r);
            break e;
          }
          tt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dv(t),
        e === null && rf(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Xc(n, o) ? (a = null) : i !== null && Xc(n, i) && (t.flags |= 32),
        l0(e, t),
        tt(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && rf(t), null;
    case 13:
      return u0(e, t, r);
    case 4:
      return (
        xd(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = vo(t, null, n, r)) : tt(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ft(n, o)),
        Rh(e, t, n, o, r)
      );
    case 7:
      return tt(e, t, t.pendingProps, r), t.child;
    case 8:
      return tt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return tt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          fe($l, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (Gt(i.value, a)) {
            if (i.children === o.children && !ut.current) {
              t = Er(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (i.tag === 1) {
                      (s = yr(-1, r & -r)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= r),
                      (s = i.alternate),
                      s !== null && (s.lanes |= r),
                      nf(i.return, r, t),
                      (l.lanes |= r);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(R(341));
                (a.lanes |= r),
                  (l = a.alternate),
                  l !== null && (l.lanes |= r),
                  nf(a, r, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        tt(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        lo(t, r),
        (o = Tt(o)),
        (n = n(o)),
        (t.flags |= 1),
        tt(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = Ft(n, t.pendingProps)),
        (o = Ft(n.type, o)),
        Nh(e, t, n, o, r)
      );
    case 15:
      return i0(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ft(n, o)),
        Ha(e, t),
        (t.tag = 1),
        ct(n) ? ((e = !0), Ol(t)) : (e = !1),
        lo(t, r),
        jv(t, n, o),
        af(t, n, o, r),
        uf(null, t, n, !0, e, r)
      );
    case 19:
      return c0(e, t, r);
    case 22:
      return a0(e, t, r);
  }
  throw Error(R(156, t.tag));
};
function b0(e, t) {
  return Jg(e, t);
}
function YE(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ct(e, t, r, n) {
  return new YE(e, t, r, n);
}
function Fd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qE(e) {
  if (typeof e == "function") return Fd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === id)) return 11;
    if (e === ad) return 14;
  }
  return 2;
}
function Yr(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ct(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Qa(e, t, r, n, o, i) {
  var a = 2;
  if (((n = e), typeof e == "function")) Fd(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Wn:
        return En(r.children, o, i, t);
      case od:
        (a = 8), (o |= 8);
        break;
      case kc:
        return (
          (e = Ct(12, r, t, o | 2)), (e.elementType = kc), (e.lanes = i), e
        );
      case Rc:
        return (e = Ct(13, r, t, o)), (e.elementType = Rc), (e.lanes = i), e;
      case Nc:
        return (e = Ct(19, r, t, o)), (e.elementType = Nc), (e.lanes = i), e;
      case zg:
        return Rs(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ig:
              a = 10;
              break e;
            case jg:
              a = 9;
              break e;
            case id:
              a = 11;
              break e;
            case ad:
              a = 14;
              break e;
            case Ir:
              (a = 16), (n = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ct(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function En(e, t, r, n) {
  return (e = Ct(7, e, n, t)), (e.lanes = r), e;
}
function Rs(e, t, r, n) {
  return (
    (e = Ct(22, e, n, t)),
    (e.elementType = zg),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xu(e, t, r) {
  return (e = Ct(6, e, null, t)), (e.lanes = r), e;
}
function Ju(e, t, r) {
  return (
    (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function XE(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Tu(0)),
    (this.expirationTimes = Tu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Tu(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ud(e, t, r, n, o, i, a, l, s) {
  return (
    (e = new XE(e, t, r, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ct(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Od(i),
    e
  );
}
function JE(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vn,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function $0(e) {
  if (!e) return Zr;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (ct(r)) return bv(e, r, t);
  }
  return t;
}
function C0(e, t, r, n, o, i, a, l, s) {
  return (
    (e = Ud(r, n, !0, e, o, i, a, l, s)),
    (e.context = $0(null)),
    (r = e.current),
    (n = rt()),
    (o = Qr(r)),
    (i = yr(n, o)),
    (i.callback = t ?? null),
    Kr(r, i, o),
    (e.current.lanes = o),
    Yi(e, o, n),
    ft(e, n),
    e
  );
}
function Ns(e, t, r, n) {
  var o = t.current,
    i = rt(),
    a = Qr(o);
  return (
    (r = $0(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = yr(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Kr(o, t, a)),
    e !== null && (Ht(e, o, a, i), Ba(e, o, a)),
    a
  );
}
function Dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Bd(e, t) {
  Vh(e, t), (e = e.alternate) && Vh(e, t);
}
function ZE() {
  return null;
}
var k0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vd(e) {
  this._internalRoot = e;
}
Ts.prototype.render = Vd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Ns(e, t, null, null);
};
Ts.prototype.unmount = Vd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      Ns(null, e, null, null);
    }),
      (t[Sr] = null);
  }
};
function Ts(e) {
  this._internalRoot = e;
}
Ts.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = iv();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Ar.length && t !== 0 && t < Ar[r].priority; r++);
    Ar.splice(r, 0, e), r === 0 && lv(e);
  }
};
function Wd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Is(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wh() {}
function eP(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = Dl(a);
        i.call(u);
      };
    }
    var a = C0(t, n, e, 0, null, !1, !1, "", Wh);
    return (
      (e._reactRootContainer = a),
      (e[Sr] = a.current),
      ki(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var l = n;
    n = function () {
      var u = Dl(s);
      l.call(u);
    };
  }
  var s = Ud(e, 0, !1, null, null, !1, !1, "", Wh);
  return (
    (e._reactRootContainer = s),
    (e[Sr] = s.current),
    ki(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      Ns(t, s, r, n);
    }),
    s
  );
}
function js(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var s = Dl(a);
        l.call(s);
      };
    }
    Ns(t, a, e, o);
  } else a = eP(r, t, e, o, n);
  return Dl(a);
}
nv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ii(t.pendingLanes);
        r !== 0 &&
          (ud(t, r | 1), ft(t, Oe()), !(Z & 6) && ((_o = Oe() + 500), on()));
      }
      break;
    case 13:
      Cn(function () {
        var n = _r(e, 1);
        if (n !== null) {
          var o = rt();
          Ht(n, e, 1, o);
        }
      }),
        Bd(e, 1);
  }
};
cd = function (e) {
  if (e.tag === 13) {
    var t = _r(e, 134217728);
    if (t !== null) {
      var r = rt();
      Ht(t, e, 134217728, r);
    }
    Bd(e, 134217728);
  }
};
ov = function (e) {
  if (e.tag === 13) {
    var t = Qr(e),
      r = _r(e, t);
    if (r !== null) {
      var n = rt();
      Ht(r, e, t, n);
    }
    Bd(e, t);
  }
};
iv = function () {
  return le;
};
av = function (e, t) {
  var r = le;
  try {
    return (le = e), t();
  } finally {
    le = r;
  }
};
Uc = function (e, t, r) {
  switch (t) {
    case "input":
      if ((jc(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = Os(n);
            if (!o) throw Error(R(90));
            Dg(n), jc(n, o);
          }
        }
      }
      break;
    case "textarea":
      Mg(e, r);
      break;
    case "select":
      (t = r.value), t != null && no(e, !!r.multiple, t, !1);
  }
};
Kg = Dd;
Gg = Cn;
var tP = { usingClientEntryPoint: !1, Events: [Xi, Qn, Os, Wg, Hg, Dd] },
  Qo = {
    findFiberByHostInstance: gn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  rP = {
    bundleType: Qo.bundleType,
    version: Qo.version,
    rendererPackageName: Qo.rendererPackageName,
    rendererConfig: Qo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: br.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = qg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qo.findFiberByHostInstance || ZE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$a.isDisabled && $a.supportsFiber)
    try {
      (Ss = $a.inject(rP)), (tr = $a);
    } catch {}
}
Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tP;
Et.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wd(t)) throw Error(R(200));
  return JE(e, t, null, r);
};
Et.createRoot = function (e, t) {
  if (!Wd(e)) throw Error(R(299));
  var r = !1,
    n = "",
    o = k0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ud(e, 1, !1, null, null, r, !1, n, o)),
    (e[Sr] = t.current),
    ki(e.nodeType === 8 ? e.parentNode : e),
    new Vd(t)
  );
};
Et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = qg(t)), (e = e === null ? null : e.stateNode), e;
};
Et.flushSync = function (e) {
  return Cn(e);
};
Et.hydrate = function (e, t, r) {
  if (!Is(t)) throw Error(R(200));
  return js(null, e, t, !0, r);
};
Et.hydrateRoot = function (e, t, r) {
  if (!Wd(e)) throw Error(R(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    a = k0;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = C0(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[Sr] = t.current),
    ki(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new Ts(t);
};
Et.render = function (e, t, r) {
  if (!Is(t)) throw Error(R(200));
  return js(null, e, t, !1, r);
};
Et.unmountComponentAtNode = function (e) {
  if (!Is(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Cn(function () {
        js(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Sr] = null);
        });
      }),
      !0)
    : !1;
};
Et.unstable_batchedUpdates = Dd;
Et.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Is(r)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return js(e, t, r, !1, n);
};
Et.version = "18.2.0-next-9e3b772b8-20220608";
function R0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R0);
    } catch (e) {
      console.error(e);
    }
}
R0(), (Cg.exports = Et);
var N0 = Cg.exports,
  Hh = N0;
($c.createRoot = Hh.createRoot), ($c.hydrateRoot = Hh.hydrateRoot);
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function q() {
  return (
    (q = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    q.apply(this, arguments)
  );
}
var be;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(be || (be = {}));
const Kh = "popstate";
function nP(e) {
  e === void 0 && (e = {});
  function t(n, o) {
    let { pathname: i, search: a, hash: l } = n.location;
    return Li(
      "",
      { pathname: i, search: a, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function r(n, o) {
    return typeof o == "string" ? o : Pr(o);
  }
  return iP(t, r, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Eo(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function oP() {
  return Math.random().toString(36).substr(2, 8);
}
function Gh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Li(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    q(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? $r(t) : t,
      { state: r, key: (t && t.key) || n || oP() },
    )
  );
}
function Pr(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function $r(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function iP(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    a = o.history,
    l = be.Pop,
    s = null,
    u = f();
  u == null && ((u = 0), a.replaceState(q({}, a.state, { idx: u }), ""));
  function f() {
    return (a.state || { idx: null }).idx;
  }
  function c() {
    l = be.Pop;
    let y = f(),
      h = y == null ? null : y - u;
    (u = y), s && s({ action: l, location: m.location, delta: h });
  }
  function d(y, h) {
    l = be.Push;
    let p = Li(m.location, y, h);
    r && r(p, y), (u = f() + 1);
    let g = Gh(p, u),
      S = m.createHref(p);
    try {
      a.pushState(g, "", S);
    } catch {
      o.location.assign(S);
    }
    i && s && s({ action: l, location: m.location, delta: 1 });
  }
  function w(y, h) {
    l = be.Replace;
    let p = Li(m.location, y, h);
    r && r(p, y), (u = f());
    let g = Gh(p, u),
      S = m.createHref(p);
    a.replaceState(g, "", S),
      i && s && s({ action: l, location: m.location, delta: 0 });
  }
  function v(y) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof y == "string" ? y : Pr(y);
    return (
      K(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, h)
    );
  }
  let m = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(y) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Kh, c),
        (s = y),
        () => {
          o.removeEventListener(Kh, c), (s = null);
        }
      );
    },
    createHref(y) {
      return t(o, y);
    },
    createURL: v,
    encodeLocation(y) {
      let h = v(y);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: d,
    replace: w,
    go(y) {
      return a.go(y);
    },
  };
  return m;
}
var Te;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Te || (Te = {}));
const aP = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function lP(e) {
  return e.index === !0;
}
function T0(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((o, i) => {
      let a = [...r, i],
        l = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (K(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route",
        ),
        K(
          !n[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        lP(o))
      ) {
        let s = q({}, o, { hasErrorBoundary: t(o), id: l });
        return (n[l] = s), s;
      } else {
        let s = q({}, o, { id: l, hasErrorBoundary: t(o), children: void 0 });
        return (
          (n[l] = s), o.children && (s.children = T0(o.children, t, a, n)), s
        );
      }
    })
  );
}
function to(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? $r(t) : t,
    o = Zi(n.pathname || "/", r);
  if (o == null) return null;
  let i = I0(e);
  sP(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) a = gP(i[l], SP(o));
  return a;
}
function I0(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let o = (i, a, l) => {
    let s = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (K(
        s.relativePath.startsWith(n),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (s.relativePath = s.relativePath.slice(n.length)));
    let u = gr([n, s.relativePath]),
      f = r.concat(s);
    i.children &&
      i.children.length > 0 &&
      (K(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      I0(i.children, t, f, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: mP(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, a);
      else for (let s of j0(i.path)) o(i, a, s);
    }),
    t
  );
}
function j0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    o = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return o ? [i, ""] : [i];
  let a = j0(n.join("/")),
    l = [];
  return (
    l.push(...a.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && l.push(...a),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function sP(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : yP(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const uP = /^:\w+$/,
  cP = 3,
  fP = 2,
  dP = 1,
  pP = 10,
  hP = -2,
  Qh = (e) => e === "*";
function mP(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Qh) && (n += hP),
    t && (n += fP),
    r
      .filter((o) => !Qh(o))
      .reduce((o, i) => o + (uP.test(i) ? cP : i === "" ? dP : pP), n)
  );
}
function yP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function gP(e, t) {
  let { routesMeta: r } = e,
    n = {},
    o = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      s = a === r.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      f = vP(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u,
      );
    if (!f) return null;
    Object.assign(n, f.params);
    let c = l.route;
    i.push({
      params: n,
      pathname: gr([o, f.pathname]),
      pathnameBase: OP(gr([o, f.pathnameBase])),
      route: c,
    }),
      f.pathnameBase !== "/" && (o = gr([o, f.pathnameBase]));
  }
  return i;
}
function vP(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = wP(e.path, e.caseSensitive, e.end),
    o = t.match(r);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: n.reduce((u, f, c) => {
      if (f === "*") {
        let d = l[c] || "";
        a = i.slice(0, i.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (u[f] = _P(l[c] || "", f)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function wP(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Eo(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let n = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, l) => (n.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (n.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), n]
  );
}
function SP(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Eo(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function _P(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      Eo(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ")."),
      ),
      e
    );
  }
}
function Zi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function EP(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = "",
  } = typeof e == "string" ? $r(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : PP(r, t)) : t,
    search: xP(n),
    hash: bP(o),
  };
}
function PP(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Zu(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function zs(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Hd(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string"
    ? (o = $r(e))
    : ((o = q({}, e)),
      K(
        !o.pathname || !o.pathname.includes("?"),
        Zu("?", "pathname", "search", o),
      ),
      K(
        !o.pathname || !o.pathname.includes("#"),
        Zu("#", "pathname", "hash", o),
      ),
      K(!o.search || !o.search.includes("#"), Zu("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    l;
  if (n || a == null) l = r;
  else {
    let c = t.length - 1;
    if (a.startsWith("..")) {
      let d = a.split("/");
      for (; d[0] === ".."; ) d.shift(), (c -= 1);
      o.pathname = d.join("/");
    }
    l = c >= 0 ? t[c] : "/";
  }
  let s = EP(o, l),
    u = a && a !== "/" && a.endsWith("/"),
    f = (i || a === ".") && r.endsWith("/");
  return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"), s;
}
const gr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  OP = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  xP = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  bP = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Kd {
  constructor(t, r, n, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = r || ""),
      (this.internal = o),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function z0(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const A0 = ["post", "put", "patch", "delete"],
  $P = new Set(A0),
  CP = ["get", ...A0],
  kP = new Set(CP),
  RP = new Set([301, 302, 303, 307, 308]),
  NP = new Set([307, 308]),
  ec = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  TP = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Yh = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  D0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  L0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  IP = !L0,
  jP = (e) => !!e.hasErrorBoundary;
function zP(e) {
  K(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let t = e.detectErrorBoundary || jP,
    r = {},
    n = T0(e.routes, t, void 0, r),
    o,
    i = q({ v7_normalizeFormMethod: !1 }, e.future),
    a = null,
    l = new Set(),
    s = null,
    u = null,
    f = null,
    c = e.hydrationData != null,
    d = to(n, e.history.location, e.basename),
    w = null;
  if (d == null) {
    let b = qt(404, { pathname: e.history.location.pathname }),
      { matches: $, route: x } = rm(n);
    (d = $), (w = { [x.id]: b });
  }
  let v =
      !d.some((b) => b.route.lazy) &&
      (!d.some((b) => b.route.loader) || e.hydrationData != null),
    m,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: d,
      initialized: v,
      navigation: ec,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || w,
      fetchers: new Map(),
      blockers: new Map(),
    },
    h = be.Pop,
    p = !1,
    g,
    S = !1,
    P = !1,
    O = [],
    E = [],
    k = new Map(),
    T = 0,
    D = -1,
    Y = new Map(),
    J = new Set(),
    he = new Map(),
    xe = new Map(),
    ge = new Map(),
    ze = !1;
  function Fe() {
    return (
      (a = e.history.listen((b) => {
        let { action: $, location: x, delta: A } = b;
        if (ze) {
          ze = !1;
          return;
        }
        Eo(
          ge.size === 0 || A != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let I = ua({
          currentLocation: y.location,
          nextLocation: x,
          historyAction: $,
        });
        if (I && A != null) {
          (ze = !0),
            e.history.go(A * -1),
            An(I, {
              state: "blocked",
              location: x,
              proceed() {
                An(I, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: x,
                }),
                  e.history.go(A);
              },
              reset() {
                fn(I), M({ blockers: new Map(m.state.blockers) });
              },
            });
          return;
        }
        return ve($, x);
      })),
      y.initialized || ve(be.Pop, y.location),
      m
    );
  }
  function j() {
    a && a(),
      l.clear(),
      g && g.abort(),
      y.fetchers.forEach((b, $) => Cr($)),
      y.blockers.forEach((b, $) => fn($));
  }
  function B(b) {
    return l.add(b), () => l.delete(b);
  }
  function M(b) {
    (y = q({}, y, b)), l.forEach(($) => $(y));
  }
  function H(b, $) {
    var x, A;
    let I =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        fr(y.navigation.formMethod) &&
        y.navigation.state === "loading" &&
        ((x = b.state) == null ? void 0 : x._isRedirect) !== !0,
      F;
    $.actionData
      ? Object.keys($.actionData).length > 0
        ? (F = $.actionData)
        : (F = null)
      : I
        ? (F = y.actionData)
        : (F = null);
    let U = $.loaderData
      ? tm(y.loaderData, $.loaderData, $.matches || [], $.errors)
      : y.loaderData;
    for (let [V] of ge) fn(V);
    let W =
      p === !0 ||
      (y.navigation.formMethod != null &&
        fr(y.navigation.formMethod) &&
        ((A = b.state) == null ? void 0 : A._isRedirect) !== !0);
    o && ((n = o), (o = void 0)),
      M(
        q({}, $, {
          actionData: F,
          loaderData: U,
          historyAction: h,
          location: b,
          initialized: !0,
          navigation: ec,
          revalidation: "idle",
          restoreScrollPosition: Ln(b, $.matches || y.matches),
          preventScrollReset: W,
          blockers: new Map(y.blockers),
        }),
      ),
      S ||
        h === be.Pop ||
        (h === be.Push
          ? e.history.push(b, b.state)
          : h === be.Replace && e.history.replace(b, b.state)),
      (h = be.Pop),
      (p = !1),
      (S = !1),
      (P = !1),
      (O = []),
      (E = []);
  }
  async function ne(b, $) {
    if (typeof b == "number") {
      e.history.go(b);
      return;
    }
    let { path: x, submission: A, error: I } = qh(b, i, $),
      F = y.location,
      U = Li(y.location, x, $ && $.state);
    U = q({}, U, e.history.encodeLocation(U));
    let W = $ && $.replace != null ? $.replace : void 0,
      V = be.Push;
    W === !0
      ? (V = be.Replace)
      : W === !1 ||
        (A != null &&
          fr(A.formMethod) &&
          A.formAction === y.location.pathname + y.location.search &&
          (V = be.Replace));
    let oe =
        $ && "preventScrollReset" in $ ? $.preventScrollReset === !0 : void 0,
      ee = ua({ currentLocation: F, nextLocation: U, historyAction: V });
    if (ee) {
      An(ee, {
        state: "blocked",
        location: U,
        proceed() {
          An(ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            ne(b, $);
        },
        reset() {
          fn(ee), M({ blockers: new Map(y.blockers) });
        },
      });
      return;
    }
    return await ve(V, U, {
      submission: A,
      pendingError: I,
      preventScrollReset: oe,
      replace: $ && $.replace,
    });
  }
  function it() {
    if (
      (G(), M({ revalidation: "loading" }), y.navigation.state !== "submitting")
    ) {
      if (y.navigation.state === "idle") {
        ve(y.historyAction, y.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ve(h || y.historyAction, y.navigation.location, {
        overrideNavigation: y.navigation,
      });
    }
  }
  async function ve(b, $, x) {
    g && g.abort(),
      (g = null),
      (h = b),
      (S = (x && x.startUninterruptedRevalidation) === !0),
      Eu(y.location, y.matches),
      (p = (x && x.preventScrollReset) === !0);
    let A = o || n,
      I = x && x.overrideNavigation,
      F = to(A, $, e.basename);
    if (!F) {
      let Ae = qt(404, { pathname: $.pathname }),
        { matches: Be, route: Dt } = rm(A);
      Dn(), H($, { matches: Be, loaderData: {}, errors: { [Dt.id]: Ae } });
      return;
    }
    if (
      FP(y.location, $) &&
      !(x && x.submission && fr(x.submission.formMethod))
    ) {
      H($, { matches: F });
      return;
    }
    g = new AbortController();
    let U = qo(e.history, $, g.signal, x && x.submission),
      W,
      V;
    if (x && x.pendingError) V = { [ro(F).route.id]: x.pendingError };
    else if (x && x.submission && fr(x.submission.formMethod)) {
      let Ae = await xt(U, $, x.submission, F, { replace: x.replace });
      if (Ae.shortCircuited) return;
      (W = Ae.pendingActionData),
        (V = Ae.pendingActionError),
        (I = q({ state: "loading", location: $ }, x.submission)),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: oe,
      loaderData: ee,
      errors: At,
    } = await Ue(
      U,
      $,
      F,
      I,
      x && x.submission,
      x && x.fetcherSubmission,
      x && x.replace,
      W,
      V,
    );
    oe ||
      ((g = null),
      H(
        $,
        q({ matches: F }, W ? { actionData: W } : {}, {
          loaderData: ee,
          errors: At,
        }),
      ));
  }
  async function xt(b, $, x, A, I) {
    G();
    let F = q({ state: "submitting", location: $ }, x);
    M({ navigation: F });
    let U,
      W = _f(A, $);
    if (!W.route.action && !W.route.lazy)
      U = {
        type: Te.error,
        error: qt(405, {
          method: b.method,
          pathname: $.pathname,
          routeId: W.route.id,
        }),
      };
    else if (
      ((U = await Yo("action", b, W, A, r, t, m.basename)), b.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (uo(U)) {
      let V;
      return (
        I && I.replace != null
          ? (V = I.replace)
          : (V = U.location === y.location.pathname + y.location.search),
        await ar(y, U, { submission: x, replace: V }),
        { shortCircuited: !0 }
      );
    }
    if (gi(U)) {
      let V = ro(A, W.route.id);
      return (
        (I && I.replace) !== !0 && (h = be.Push),
        { pendingActionData: {}, pendingActionError: { [V.route.id]: U.error } }
      );
    }
    if (Sn(U)) throw qt(400, { type: "defer-action" });
    return { pendingActionData: { [W.route.id]: U.data } };
  }
  async function Ue(b, $, x, A, I, F, U, W, V) {
    let oe = A;
    oe ||
      (oe = q(
        {
          state: "loading",
          location: $,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        I,
      ));
    let ee =
        I || F
          ? I || F
          : oe.formMethod && oe.formAction && oe.formData && oe.formEncType
            ? {
                formMethod: oe.formMethod,
                formAction: oe.formAction,
                formData: oe.formData,
                formEncType: oe.formEncType,
              }
            : void 0,
      At = o || n,
      [Ae, Be] = Xh(e.history, y, x, ee, $, P, O, E, he, At, e.basename, W, V);
    if (
      (Dn(
        (Ge) =>
          !(x && x.some((Lt) => Lt.route.id === Ge)) ||
          (Ae && Ae.some((Lt) => Lt.route.id === Ge)),
      ),
      Ae.length === 0 && Be.length === 0)
    )
      return (
        H(
          $,
          q(
            { matches: x, loaderData: {}, errors: V || null },
            W ? { actionData: W } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    if (!S) {
      Be.forEach((Lt) => {
        let dn = y.fetchers.get(Lt.key),
          Fo = {
            state: "loading",
            data: dn && dn.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
          };
        y.fetchers.set(Lt.key, Fo);
      });
      let Ge = W || y.actionData;
      M(
        q(
          { navigation: oe },
          Ge
            ? Object.keys(Ge).length === 0
              ? { actionData: null }
              : { actionData: Ge }
            : {},
          Be.length > 0 ? { fetchers: new Map(y.fetchers) } : {},
        ),
      );
    }
    (D = ++T), Be.forEach((Ge) => k.set(Ge.key, g));
    let {
      results: Dt,
      loaderResults: Lo,
      fetcherResults: Pu,
    } = await we(y.matches, x, Ae, Be, b);
    if (b.signal.aborted) return { shortCircuited: !0 };
    Be.forEach((Ge) => k.delete(Ge.key));
    let Mo = nm(Dt);
    if (Mo) return await ar(y, Mo, { replace: U }), { shortCircuited: !0 };
    let { loaderData: Mn, errors: Ou } = em(y, x, Ae, Lo, V, Be, Pu, xe);
    xe.forEach((Ge, Lt) => {
      Ge.subscribe((dn) => {
        (dn || Ge.done) && xe.delete(Lt);
      });
    }),
      Su();
    let xu = sa(D);
    return q(
      { loaderData: Mn, errors: Ou },
      xu || Be.length > 0 ? { fetchers: new Map(y.fetchers) } : {},
    );
  }
  function ht(b) {
    return y.fetchers.get(b) || TP;
  }
  function sn(b, $, x, A) {
    if (IP)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    k.has(b) && cn(b);
    let F = to(o || n, x, e.basename);
    if (!F) {
      ue(b, $, qt(404, { pathname: x }));
      return;
    }
    let { path: U, submission: W } = qh(x, i, A, !0),
      V = _f(F, U);
    if (((p = (A && A.preventScrollReset) === !0), W && fr(W.formMethod))) {
      un(b, $, U, V, F, W);
      return;
    }
    he.set(b, { routeId: $, path: U }), zn(b, $, U, V, F, W);
  }
  async function un(b, $, x, A, I, F) {
    if ((G(), he.delete(b), !A.route.action && !A.route.lazy)) {
      let lr = qt(405, { method: F.formMethod, pathname: x, routeId: $ });
      ue(b, $, lr);
      return;
    }
    let U = y.fetchers.get(b),
      W = q({ state: "submitting" }, F, {
        data: U && U.data,
        " _hasFetcherDoneAnything ": !0,
      });
    y.fetchers.set(b, W), M({ fetchers: new Map(y.fetchers) });
    let V = new AbortController(),
      oe = qo(e.history, x, V.signal, F);
    k.set(b, V);
    let ee = await Yo("action", oe, A, I, r, t, m.basename);
    if (oe.signal.aborted) {
      k.get(b) === V && k.delete(b);
      return;
    }
    if (uo(ee)) {
      k.delete(b), J.add(b);
      let lr = q({ state: "loading" }, F, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0,
      });
      return (
        y.fetchers.set(b, lr),
        M({ fetchers: new Map(y.fetchers) }),
        ar(y, ee, { submission: F, isFetchActionRedirect: !0 })
      );
    }
    if (gi(ee)) {
      ue(b, $, ee.error);
      return;
    }
    if (Sn(ee)) throw qt(400, { type: "defer-action" });
    let At = y.navigation.location || y.location,
      Ae = qo(e.history, At, V.signal),
      Be = o || n,
      Dt =
        y.navigation.state !== "idle"
          ? to(Be, y.navigation.location, e.basename)
          : y.matches;
    K(Dt, "Didn't find any matches after fetcher action");
    let Lo = ++T;
    Y.set(b, Lo);
    let Pu = q({ state: "loading", data: ee.data }, F, {
      " _hasFetcherDoneAnything ": !0,
    });
    y.fetchers.set(b, Pu);
    let [Mo, Mn] = Xh(
      e.history,
      y,
      Dt,
      F,
      At,
      P,
      O,
      E,
      he,
      Be,
      e.basename,
      { [A.route.id]: ee.data },
      void 0,
    );
    Mn.filter((lr) => lr.key !== b).forEach((lr) => {
      let bu = lr.key,
        jp = y.fetchers.get(bu),
        $S = {
          state: "loading",
          data: jp && jp.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0,
        };
      y.fetchers.set(bu, $S), k.set(bu, V);
    }),
      M({ fetchers: new Map(y.fetchers) });
    let {
      results: Ou,
      loaderResults: xu,
      fetcherResults: Ge,
    } = await we(y.matches, Dt, Mo, Mn, Ae);
    if (V.signal.aborted) return;
    Y.delete(b), k.delete(b), Mn.forEach((lr) => k.delete(lr.key));
    let Lt = nm(Ou);
    if (Lt) return ar(y, Lt);
    let { loaderData: dn, errors: Fo } = em(
        y,
        y.matches,
        Mo,
        xu,
        void 0,
        Mn,
        Ge,
        xe,
      ),
      xS = {
        state: "idle",
        data: ee.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
    y.fetchers.set(b, xS);
    let bS = sa(Lo);
    y.navigation.state === "loading" && Lo > D
      ? (K(h, "Expected pending action"),
        g && g.abort(),
        H(y.navigation.location, {
          matches: Dt,
          loaderData: dn,
          errors: Fo,
          fetchers: new Map(y.fetchers),
        }))
      : (M(
          q(
            { errors: Fo, loaderData: tm(y.loaderData, dn, Dt, Fo) },
            bS ? { fetchers: new Map(y.fetchers) } : {},
          ),
        ),
        (P = !1));
  }
  async function zn(b, $, x, A, I, F) {
    let U = y.fetchers.get(b),
      W = q(
        {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        F,
        { data: U && U.data, " _hasFetcherDoneAnything ": !0 },
      );
    y.fetchers.set(b, W), M({ fetchers: new Map(y.fetchers) });
    let V = new AbortController(),
      oe = qo(e.history, x, V.signal);
    k.set(b, V);
    let ee = await Yo("loader", oe, A, I, r, t, m.basename);
    if (
      (Sn(ee) && (ee = (await B0(ee, oe.signal, !0)) || ee),
      k.get(b) === V && k.delete(b),
      oe.signal.aborted)
    )
      return;
    if (uo(ee)) {
      await ar(y, ee);
      return;
    }
    if (gi(ee)) {
      let Ae = ro(y.matches, $);
      y.fetchers.delete(b),
        M({
          fetchers: new Map(y.fetchers),
          errors: { [Ae.route.id]: ee.error },
        });
      return;
    }
    K(!Sn(ee), "Unhandled fetcher deferred data");
    let At = {
      state: "idle",
      data: ee.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0,
    };
    y.fetchers.set(b, At), M({ fetchers: new Map(y.fetchers) });
  }
  async function ar(b, $, x) {
    var A;
    let {
      submission: I,
      replace: F,
      isFetchActionRedirect: U,
    } = x === void 0 ? {} : x;
    $.revalidate && (P = !0);
    let W = Li(
      b.location,
      $.location,
      q({ _isRedirect: !0 }, U ? { _isFetchActionRedirect: !0 } : {}),
    );
    if (
      (K(W, "Expected a location on the redirect navigation"),
      D0.test($.location) &&
        L0 &&
        typeof ((A = window) == null ? void 0 : A.location) < "u")
    ) {
      let Be = e.history.createURL($.location),
        Dt = Zi(Be.pathname, e.basename || "/") == null;
      if (window.location.origin !== Be.origin || Dt) {
        F
          ? window.location.replace($.location)
          : window.location.assign($.location);
        return;
      }
    }
    g = null;
    let V = F === !0 ? be.Replace : be.Push,
      {
        formMethod: oe,
        formAction: ee,
        formEncType: At,
        formData: Ae,
      } = b.navigation;
    !I &&
      oe &&
      ee &&
      Ae &&
      At &&
      (I = { formMethod: oe, formAction: ee, formEncType: At, formData: Ae }),
      NP.has($.status) && I && fr(I.formMethod)
        ? await ve(V, W, {
            submission: q({}, I, { formAction: $.location }),
            preventScrollReset: p,
          })
        : U
          ? await ve(V, W, {
              overrideNavigation: {
                state: "loading",
                location: W,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
              },
              fetcherSubmission: I,
              preventScrollReset: p,
            })
          : await ve(V, W, {
              overrideNavigation: {
                state: "loading",
                location: W,
                formMethod: I ? I.formMethod : void 0,
                formAction: I ? I.formAction : void 0,
                formEncType: I ? I.formEncType : void 0,
                formData: I ? I.formData : void 0,
              },
              preventScrollReset: p,
            });
  }
  async function we(b, $, x, A, I) {
    let F = await Promise.all([
        ...x.map((V) => Yo("loader", I, V, $, r, t, m.basename)),
        ...A.map((V) =>
          V.matches && V.match
            ? Yo(
                "loader",
                qo(e.history, V.path, I.signal),
                V.match,
                V.matches,
                r,
                t,
                m.basename,
              )
            : { type: Te.error, error: qt(404, { pathname: V.path }) },
        ),
      ]),
      U = F.slice(0, x.length),
      W = F.slice(x.length);
    return (
      await Promise.all([
        om(b, x, U, I.signal, !1, y.loaderData),
        om(
          b,
          A.map((V) => V.match),
          W,
          I.signal,
          !0,
        ),
      ]),
      { results: F, loaderResults: U, fetcherResults: W }
    );
  }
  function G() {
    (P = !0),
      O.push(...Dn()),
      he.forEach((b, $) => {
        k.has($) && (E.push($), cn($));
      });
  }
  function ue(b, $, x) {
    let A = ro(y.matches, $);
    Cr(b), M({ errors: { [A.route.id]: x }, fetchers: new Map(y.fetchers) });
  }
  function Cr(b) {
    k.has(b) && cn(b),
      he.delete(b),
      Y.delete(b),
      J.delete(b),
      y.fetchers.delete(b);
  }
  function cn(b) {
    let $ = k.get(b);
    K($, "Expected fetch controller: " + b), $.abort(), k.delete(b);
  }
  function la(b) {
    for (let $ of b) {
      let A = {
        state: "idle",
        data: ht($).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      y.fetchers.set($, A);
    }
  }
  function Su() {
    let b = [];
    for (let $ of J) {
      let x = y.fetchers.get($);
      K(x, "Expected fetcher: " + $),
        x.state === "loading" && (J.delete($), b.push($));
    }
    la(b);
  }
  function sa(b) {
    let $ = [];
    for (let [x, A] of Y)
      if (A < b) {
        let I = y.fetchers.get(x);
        K(I, "Expected fetcher: " + x),
          I.state === "loading" && (cn(x), Y.delete(x), $.push(x));
      }
    return la($), $.length > 0;
  }
  function _u(b, $) {
    let x = y.blockers.get(b) || Yh;
    return ge.get(b) !== $ && ge.set(b, $), x;
  }
  function fn(b) {
    y.blockers.delete(b), ge.delete(b);
  }
  function An(b, $) {
    let x = y.blockers.get(b) || Yh;
    K(
      (x.state === "unblocked" && $.state === "blocked") ||
        (x.state === "blocked" && $.state === "blocked") ||
        (x.state === "blocked" && $.state === "proceeding") ||
        (x.state === "blocked" && $.state === "unblocked") ||
        (x.state === "proceeding" && $.state === "unblocked"),
      "Invalid blocker state transition: " + x.state + " -> " + $.state,
    ),
      y.blockers.set(b, $),
      M({ blockers: new Map(y.blockers) });
  }
  function ua(b) {
    let { currentLocation: $, nextLocation: x, historyAction: A } = b;
    if (ge.size === 0) return;
    ge.size > 1 && Eo(!1, "A router only supports one blocker at a time");
    let I = Array.from(ge.entries()),
      [F, U] = I[I.length - 1],
      W = y.blockers.get(F);
    if (
      !(W && W.state === "proceeding") &&
      U({ currentLocation: $, nextLocation: x, historyAction: A })
    )
      return F;
  }
  function Dn(b) {
    let $ = [];
    return (
      xe.forEach((x, A) => {
        (!b || b(A)) && (x.cancel(), $.push(A), xe.delete(A));
      }),
      $
    );
  }
  function Do(b, $, x) {
    if (
      ((s = b), (f = $), (u = x || ((A) => A.key)), !c && y.navigation === ec)
    ) {
      c = !0;
      let A = Ln(y.location, y.matches);
      A != null && M({ restoreScrollPosition: A });
    }
    return () => {
      (s = null), (f = null), (u = null);
    };
  }
  function Eu(b, $) {
    if (s && u && f) {
      let x = $.map((I) => im(I, y.loaderData)),
        A = u(b, x) || b.key;
      s[A] = f();
    }
  }
  function Ln(b, $) {
    if (s && u && f) {
      let x = $.map((F) => im(F, y.loaderData)),
        A = u(b, x) || b.key,
        I = s[A];
      if (typeof I == "number") return I;
    }
    return null;
  }
  function ca(b) {
    o = b;
  }
  return (
    (m = {
      get basename() {
        return e.basename;
      },
      get state() {
        return y;
      },
      get routes() {
        return n;
      },
      initialize: Fe,
      subscribe: B,
      enableScrollRestoration: Do,
      navigate: ne,
      fetch: sn,
      revalidate: it,
      createHref: (b) => e.history.createHref(b),
      encodeLocation: (b) => e.history.encodeLocation(b),
      getFetcher: ht,
      deleteFetcher: Cr,
      dispose: j,
      getBlocker: _u,
      deleteBlocker: fn,
      _internalFetchControllers: k,
      _internalActiveDeferreds: xe,
      _internalSetRoutes: ca,
    }),
    m
  );
}
function AP(e) {
  return e != null && "formData" in e;
}
function qh(e, t, r, n) {
  n === void 0 && (n = !1);
  let o = typeof e == "string" ? e : Pr(e);
  if (!r || !AP(r)) return { path: o };
  if (r.formMethod && !VP(r.formMethod))
    return { path: o, error: qt(405, { method: r.formMethod }) };
  let i;
  if (r.formData) {
    let s = r.formMethod || "get";
    if (
      ((i = {
        formMethod: t.v7_normalizeFormMethod
          ? s.toUpperCase()
          : s.toLowerCase(),
        formAction: U0(o),
        formEncType:
          (r && r.formEncType) || "application/x-www-form-urlencoded",
        formData: r.formData,
      }),
      fr(i.formMethod))
    )
      return { path: o, submission: i };
  }
  let a = $r(o),
    l = F0(r.formData);
  return (
    n && a.search && V0(a.search) && l.append("index", ""),
    (a.search = "?" + l),
    { path: Pr(a), submission: i }
  );
}
function DP(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((o) => o.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function Xh(e, t, r, n, o, i, a, l, s, u, f, c, d) {
  let w = d ? Object.values(d)[0] : c ? Object.values(c)[0] : void 0,
    v = e.createURL(t.location),
    m = e.createURL(o),
    y = i || v.toString() === m.toString() || v.search !== m.search,
    h = d ? Object.keys(d)[0] : void 0,
    g = DP(r, h).filter((P, O) => {
      if (P.route.lazy) return !0;
      if (P.route.loader == null) return !1;
      if (LP(t.loaderData, t.matches[O], P) || a.some((T) => T === P.route.id))
        return !0;
      let E = t.matches[O],
        k = P;
      return Jh(
        P,
        q(
          {
            currentUrl: v,
            currentParams: E.params,
            nextUrl: m,
            nextParams: k.params,
          },
          n,
          { actionResult: w, defaultShouldRevalidate: y || M0(E, k) },
        ),
      );
    }),
    S = [];
  return (
    s.forEach((P, O) => {
      if (!r.some((D) => D.route.id === P.routeId)) return;
      let E = to(u, P.path, f);
      if (!E) {
        S.push(q({ key: O }, P, { matches: null, match: null }));
        return;
      }
      let k = _f(E, P.path);
      if (l.includes(O)) {
        S.push(q({ key: O, matches: E, match: k }, P));
        return;
      }
      Jh(
        k,
        q(
          {
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: m,
            nextParams: r[r.length - 1].params,
          },
          n,
          { actionResult: w, defaultShouldRevalidate: y },
        ),
      ) && S.push(q({ key: O, matches: E, match: k }, P));
    }),
    [g, S]
  );
}
function LP(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    o = e[r.route.id] === void 0;
  return n || o;
}
function M0(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Jh(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
async function Zh(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let o = r[e.id];
  K(o, "No route found in manifest");
  let i = {};
  for (let a in n) {
    let s = o[a] !== void 0 && a !== "hasErrorBoundary";
    Eo(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.'),
    ),
      !s && !aP.has(a) && (i[a] = n[a]);
  }
  Object.assign(o, i),
    Object.assign(o, { hasErrorBoundary: t(q({}, o)), lazy: void 0 });
}
async function Yo(e, t, r, n, o, i, a, l, s, u) {
  a === void 0 && (a = "/"), l === void 0 && (l = !1), s === void 0 && (s = !1);
  let f,
    c,
    d,
    w = (y) => {
      let h,
        p = new Promise((g, S) => (h = S));
      return (
        (d = () => h()),
        t.signal.addEventListener("abort", d),
        Promise.race([y({ request: t, params: r.params, context: u }), p])
      );
    };
  try {
    let y = r.route[e];
    if (r.route.lazy)
      if (y) c = (await Promise.all([w(y), Zh(r.route, i, o)]))[0];
      else if ((await Zh(r.route, i, o), (y = r.route[e]), y)) c = await w(y);
      else {
        if (e === "action")
          throw qt(405, {
            method: t.method,
            pathname: new URL(t.url).pathname,
            routeId: r.route.id,
          });
        return { type: Te.data, data: void 0 };
      }
    else
      K(
        y,
        "Could not find the " + e + ' to run on the "' + r.route.id + '" route',
      ),
        (c = await w(y));
    K(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (y) {
    (f = Te.error), (c = y);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (BP(c)) {
    let y = c.status;
    if (RP.has(y)) {
      let g = c.headers.get("Location");
      if (
        (K(
          g,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        D0.test(g))
      ) {
        if (!l) {
          let S = new URL(t.url),
            P = g.startsWith("//") ? new URL(S.protocol + g) : new URL(g),
            O = Zi(P.pathname, a) != null;
          P.origin === S.origin && O && (g = P.pathname + P.search + P.hash);
        }
      } else {
        let S = n.slice(0, n.indexOf(r) + 1),
          P = zs(S).map((E) => E.pathnameBase),
          O = Hd(g, P, new URL(t.url).pathname);
        if ((K(Pr(O), "Unable to resolve redirect location: " + g), a)) {
          let E = O.pathname;
          O.pathname = E === "/" ? a : gr([a, E]);
        }
        g = Pr(O);
      }
      if (l) throw (c.headers.set("Location", g), c);
      return {
        type: Te.redirect,
        status: y,
        location: g,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (s) throw { type: f || Te.data, response: c };
    let h,
      p = c.headers.get("Content-Type");
    return (
      p && /\bapplication\/json\b/.test(p)
        ? (h = await c.json())
        : (h = await c.text()),
      f === Te.error
        ? { type: f, error: new Kd(y, c.statusText, h), headers: c.headers }
        : { type: Te.data, data: h, statusCode: c.status, headers: c.headers }
    );
  }
  if (f === Te.error) return { type: f, error: c };
  if (UP(c)) {
    var v, m;
    return {
      type: Te.deferred,
      deferredData: c,
      statusCode: (v = c.init) == null ? void 0 : v.status,
      headers:
        ((m = c.init) == null ? void 0 : m.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: Te.data, data: c };
}
function qo(e, t, r, n) {
  let o = e.createURL(U0(t)).toString(),
    i = { signal: r };
  if (n && fr(n.formMethod)) {
    let { formMethod: a, formEncType: l, formData: s } = n;
    (i.method = a.toUpperCase()),
      (i.body = l === "application/x-www-form-urlencoded" ? F0(s) : s);
  }
  return new Request(o, i);
}
function F0(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries()) t.append(r, n instanceof File ? n.name : n);
  return t;
}
function MP(e, t, r, n, o) {
  let i = {},
    a = null,
    l,
    s = !1,
    u = {};
  return (
    r.forEach((f, c) => {
      let d = t[c].route.id;
      if (
        (K(!uo(f), "Cannot handle redirect results in processLoaderData"),
        gi(f))
      ) {
        let w = ro(e, d),
          v = f.error;
        n && ((v = Object.values(n)[0]), (n = void 0)),
          (a = a || {}),
          a[w.route.id] == null && (a[w.route.id] = v),
          (i[d] = void 0),
          s || ((s = !0), (l = z0(f.error) ? f.error.status : 500)),
          f.headers && (u[d] = f.headers);
      } else
        Sn(f)
          ? (o.set(d, f.deferredData), (i[d] = f.deferredData.data))
          : (i[d] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !s &&
            (l = f.statusCode),
          f.headers && (u[d] = f.headers);
    }),
    n && ((a = n), (i[Object.keys(n)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: l || 200, loaderHeaders: u }
  );
}
function em(e, t, r, n, o, i, a, l) {
  let { loaderData: s, errors: u } = MP(t, r, n, o, l);
  for (let f = 0; f < i.length; f++) {
    let { key: c, match: d } = i[f];
    K(
      a !== void 0 && a[f] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let w = a[f];
    if (gi(w)) {
      let v = ro(e.matches, d == null ? void 0 : d.route.id);
      (u && u[v.route.id]) || (u = q({}, u, { [v.route.id]: w.error })),
        e.fetchers.delete(c);
    } else if (uo(w)) K(!1, "Unhandled fetcher revalidation redirect");
    else if (Sn(w)) K(!1, "Unhandled fetcher deferred data");
    else {
      let v = {
        state: "idle",
        data: w.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0,
      };
      e.fetchers.set(c, v);
    }
  }
  return { loaderData: s, errors: u };
}
function tm(e, t, r, n) {
  let o = q({}, t);
  for (let i of r) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      n && n.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function ro(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function rm(e) {
  let t = e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function qt(e, t) {
  let { pathname: r, routeId: n, method: o, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && r && n
          ? (l =
              "You made a " +
              o +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action" && (l = "defer() is not supported in actions"))
      : e === 403
        ? ((a = "Forbidden"),
          (l = 'Route "' + n + '" does not match URL "' + r + '"'))
        : e === 404
          ? ((a = "Not Found"), (l = 'No route matches URL "' + r + '"'))
          : e === 405 &&
            ((a = "Method Not Allowed"),
            o && r && n
              ? (l =
                  "You made a " +
                  o.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + n + '", ') +
                  "so there is no way to handle the request.")
              : o && (l = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Kd(e || 500, a, new Error(l), !0)
  );
}
function nm(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (uo(r)) return r;
  }
}
function U0(e) {
  let t = typeof e == "string" ? $r(e) : e;
  return Pr(q({}, t, { hash: "" }));
}
function FP(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function Sn(e) {
  return e.type === Te.deferred;
}
function gi(e) {
  return e.type === Te.error;
}
function uo(e) {
  return (e && e.type) === Te.redirect;
}
function UP(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function BP(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function VP(e) {
  return kP.has(e.toLowerCase());
}
function fr(e) {
  return $P.has(e.toLowerCase());
}
async function om(e, t, r, n, o, i) {
  for (let a = 0; a < r.length; a++) {
    let l = r[a],
      s = t[a];
    if (!s) continue;
    let u = e.find((c) => c.route.id === s.route.id),
      f = u != null && !M0(u, s) && (i && i[s.route.id]) !== void 0;
    Sn(l) &&
      (o || f) &&
      (await B0(l, n, o).then((c) => {
        c && (r[a] = c || r[a]);
      }));
  }
}
async function B0(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: Te.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: Te.error, error: o };
      }
    return { type: Te.data, data: e.deferredData.data };
  }
}
function V0(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function im(e, t) {
  let { route: r, pathname: n, params: o } = e;
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle };
}
function _f(e, t) {
  let r = typeof t == "string" ? $r(t).search : t.search;
  if (e[e.length - 1].route.index && V0(r || "")) return e[e.length - 1];
  let n = zs(e);
  return n[n.length - 1];
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function WP(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const HP = typeof Object.is == "function" ? Object.is : WP,
  { useState: KP, useEffect: GP, useLayoutEffect: QP, useDebugValue: YP } = Si;
function qP(e, t, r) {
  const n = t(),
    [{ inst: o }, i] = KP({ inst: { value: n, getSnapshot: t } });
  return (
    QP(() => {
      (o.value = n), (o.getSnapshot = t), tc(o) && i({ inst: o });
    }, [e, n, t]),
    GP(
      () => (
        tc(o) && i({ inst: o }),
        e(() => {
          tc(o) && i({ inst: o });
        })
      ),
      [e],
    ),
    YP(n),
    n
  );
}
function tc(e) {
  const t = e.getSnapshot,
    r = e.value;
  try {
    const n = t();
    return !HP(r, n);
  } catch {
    return !0;
  }
}
function XP(e, t, r) {
  return t();
}
const JP =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ZP = !JP,
  eO = ZP ? XP : qP,
  tO = "useSyncExternalStore" in Si ? ((e) => e.useSyncExternalStore)(Si) : eO,
  Gd = _.createContext(null),
  As = _.createContext(null),
  ea = _.createContext(null),
  Ds = _.createContext(null),
  Tn = _.createContext({ outlet: null, matches: [] }),
  W0 = _.createContext(null);
function Ef() {
  return (
    (Ef = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ef.apply(this, arguments)
  );
}
function rO(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  No() || K(!1);
  let { basename: n, navigator: o } = _.useContext(ea),
    { hash: i, pathname: a, search: l } = H0(e, { relative: r }),
    s = a;
  return (
    n !== "/" && (s = a === "/" ? n : gr([n, a])),
    o.createHref({ pathname: s, search: l, hash: i })
  );
}
function No() {
  return _.useContext(Ds) != null;
}
function ta() {
  return No() || K(!1), _.useContext(Ds).location;
}
function Qd() {
  No() || K(!1);
  let { basename: e, navigator: t } = _.useContext(ea),
    { matches: r } = _.useContext(Tn),
    { pathname: n } = ta(),
    o = JSON.stringify(zs(r).map((l) => l.pathnameBase)),
    i = _.useRef(!1);
  return (
    _.useEffect(() => {
      i.current = !0;
    }),
    _.useCallback(
      function (l, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let u = Hd(l, JSON.parse(o), n, s.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : gr([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state, s);
      },
      [e, t, o, n],
    )
  );
}
const nO = _.createContext(null);
function oO(e) {
  let t = _.useContext(Tn).outlet;
  return t && _.createElement(nO.Provider, { value: e }, t);
}
function H0(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = _.useContext(Tn),
    { pathname: o } = ta(),
    i = JSON.stringify(zs(n).map((a) => a.pathnameBase));
  return _.useMemo(() => Hd(e, JSON.parse(i), o, r === "path"), [e, i, o, r]);
}
function iO(e, t) {
  No() || K(!1);
  let { navigator: r } = _.useContext(ea),
    n = _.useContext(As),
    { matches: o } = _.useContext(Tn),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let l = i ? i.pathnameBase : "/";
  i && i.route;
  let s = ta(),
    u;
  if (t) {
    var f;
    let m = typeof t == "string" ? $r(t) : t;
    l === "/" || ((f = m.pathname) != null && f.startsWith(l)) || K(!1),
      (u = m);
  } else u = s;
  let c = u.pathname || "/",
    d = l === "/" ? c : c.slice(l.length) || "/",
    w = to(e, { pathname: d }),
    v = uO(
      w &&
        w.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, a, m.params),
            pathname: gr([
              l,
              r.encodeLocation
                ? r.encodeLocation(m.pathname).pathname
                : m.pathname,
            ]),
            pathnameBase:
              m.pathnameBase === "/"
                ? l
                : gr([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(m.pathnameBase).pathname
                      : m.pathnameBase,
                  ]),
          }),
        ),
      o,
      n || void 0,
    );
  return t && v
    ? _.createElement(
        Ds.Provider,
        {
          value: {
            location: Ef(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u,
            ),
            navigationType: be.Pop,
          },
        },
        v,
      )
    : v;
}
function aO() {
  let e = pO(),
    t = z0(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? _.createElement("pre", { style: o }, r) : null,
    i,
  );
}
class lO extends _.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || r.error, location: r.location };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r,
    );
  }
  render() {
    return this.state.error
      ? _.createElement(
          Tn.Provider,
          { value: this.props.routeContext },
          _.createElement(W0.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function sO(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = _.useContext(Gd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    _.createElement(Tn.Provider, { value: t }, n)
  );
}
function uO(e, t, r) {
  if ((t === void 0 && (t = []), e == null))
    if (r != null && r.errors) e = r.matches;
    else return null;
  let n = e,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let i = n.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id]),
    );
    i >= 0 || K(!1), (n = n.slice(0, Math.min(n.length, i + 1)));
  }
  return n.reduceRight((i, a, l) => {
    let s = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      u = null;
    r &&
      (a.route.ErrorBoundary
        ? (u = _.createElement(a.route.ErrorBoundary, null))
        : a.route.errorElement
          ? (u = a.route.errorElement)
          : (u = _.createElement(aO, null)));
    let f = t.concat(n.slice(0, l + 1)),
      c = () => {
        let d = i;
        return (
          s
            ? (d = u)
            : a.route.Component
              ? (d = _.createElement(a.route.Component, null))
              : a.route.element && (d = a.route.element),
          _.createElement(sO, {
            match: a,
            routeContext: { outlet: i, matches: f },
            children: d,
          })
        );
      };
    return r && (a.route.ErrorBoundary || a.route.errorElement || l === 0)
      ? _.createElement(lO, {
          location: r.location,
          component: u,
          error: s,
          children: c(),
          routeContext: { outlet: null, matches: f },
        })
      : c();
  }, null);
}
var am;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(am || (am = {}));
var Ll;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Ll || (Ll = {}));
function cO(e) {
  let t = _.useContext(As);
  return t || K(!1), t;
}
function fO(e) {
  let t = _.useContext(Tn);
  return t || K(!1), t;
}
function dO(e) {
  let t = fO(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || K(!1), r.route.id;
}
function pO() {
  var e;
  let t = _.useContext(W0),
    r = cO(Ll.UseRouteError),
    n = dO(Ll.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[n]);
}
function hO(e) {
  let { fallbackElement: t, router: r } = e,
    n = _.useCallback(() => r.state, [r]),
    o = tO(r.subscribe, n, n),
    i = _.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (s) => r.navigate(s),
        push: (s, u, f) =>
          r.navigate(s, {
            state: u,
            preventScrollReset: f == null ? void 0 : f.preventScrollReset,
          }),
        replace: (s, u, f) =>
          r.navigate(s, {
            replace: !0,
            state: u,
            preventScrollReset: f == null ? void 0 : f.preventScrollReset,
          }),
      }),
      [r],
    ),
    a = r.basename || "/",
    l = _.useMemo(
      () => ({ router: r, navigator: i, static: !1, basename: a }),
      [r, i, a],
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      Gd.Provider,
      { value: l },
      _.createElement(
        As.Provider,
        { value: o },
        _.createElement(
          vO,
          {
            basename: r.basename,
            location: r.state.location,
            navigationType: r.state.historyAction,
            navigator: i,
          },
          r.state.initialized ? _.createElement(wO, null) : t,
        ),
      ),
    ),
    null,
  );
}
function mO(e) {
  let { to: t, replace: r, state: n, relative: o } = e;
  No() || K(!1);
  let i = _.useContext(As),
    a = Qd();
  return (
    _.useEffect(() => {
      (i && i.navigation.state !== "idle") ||
        a(t, { replace: r, state: n, relative: o });
    }),
    null
  );
}
function yO(e) {
  return oO(e.context);
}
function gO(e) {
  K(!1);
}
function vO(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: o = be.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  No() && K(!1);
  let l = t.replace(/^\/*/, "/"),
    s = _.useMemo(() => ({ basename: l, navigator: i, static: a }), [l, i, a]);
  typeof n == "string" && (n = $r(n));
  let {
      pathname: u = "/",
      search: f = "",
      hash: c = "",
      state: d = null,
      key: w = "default",
    } = n,
    v = _.useMemo(() => {
      let m = Zi(u, l);
      return m == null
        ? null
        : {
            location: { pathname: m, search: f, hash: c, state: d, key: w },
            navigationType: o,
          };
    }, [l, u, f, c, d, w, o]);
  return v == null
    ? null
    : _.createElement(
        ea.Provider,
        { value: s },
        _.createElement(Ds.Provider, { children: r, value: v }),
      );
}
function wO(e) {
  let { children: t, location: r } = e,
    n = _.useContext(Gd),
    o = n && !t ? n.router.routes : Pf(t);
  return iO(o, r);
}
var lm;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(lm || (lm = {}));
new Promise(() => {});
function Pf(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    _.Children.forEach(e, (n, o) => {
      if (!_.isValidElement(n)) return;
      let i = [...t, o];
      if (n.type === _.Fragment) {
        r.push.apply(r, Pf(n.props.children, i));
        return;
      }
      n.type !== gO && K(!1), !n.props.index || !n.props.children || K(!1);
      let a = {
        id: n.props.id || i.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (a.children = Pf(n.props.children, i)), r.push(a);
    }),
    r
  );
}
function SO(e) {
  return !!e.ErrorBoundary || !!e.errorElement;
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ml() {
  return (
    (Ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ml.apply(this, arguments)
  );
}
function _O(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function EO(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function PO(e, t) {
  return e.button === 0 && (!t || t === "_self") && !EO(e);
}
const OO = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function xO(e, t) {
  return zP({
    basename: t == null ? void 0 : t.basename,
    future: t == null ? void 0 : t.future,
    history: nP({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || bO(),
    routes: e,
    detectErrorBoundary: SO,
  }).initialize();
}
function bO() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Ml({}, t, { errors: $O(t.errors) })), t;
}
function $O(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      r[n] = new Kd(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      let i = new Error(o.message);
      (i.stack = ""), (r[n] = i);
    } else r[n] = o;
  return r;
}
const CO =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  kO = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  eT = _.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: l,
        target: s,
        to: u,
        preventScrollReset: f,
      } = t,
      c = _O(t, OO),
      { basename: d } = _.useContext(ea),
      w,
      v = !1;
    if (typeof u == "string" && kO.test(u) && ((w = u), CO)) {
      let p = new URL(window.location.href),
        g = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
        S = Zi(g.pathname, d);
      g.origin === p.origin && S != null
        ? (u = S + g.search + g.hash)
        : (v = !0);
    }
    let m = rO(u, { relative: o }),
      y = RO(u, {
        replace: a,
        state: l,
        target: s,
        preventScrollReset: f,
        relative: o,
      });
    function h(p) {
      n && n(p), p.defaultPrevented || y(p);
    }
    return _.createElement(
      "a",
      Ml({}, c, { href: w || m, onClick: v || i ? n : h, ref: r, target: s }),
    );
  });
var sm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(sm || (sm = {}));
var um;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(um || (um = {}));
function RO(e, t) {
  let {
      target: r,
      replace: n,
      state: o,
      preventScrollReset: i,
      relative: a,
    } = t === void 0 ? {} : t,
    l = Qd(),
    s = ta(),
    u = H0(e, { relative: a });
  return _.useCallback(
    (f) => {
      if (PO(f, r)) {
        f.preventDefault();
        let c = n !== void 0 ? n : Pr(s) === Pr(u);
        l(e, { replace: c, state: o, preventScrollReset: i, relative: a });
      }
    },
    [s, l, u, n, o, r, e, i, a],
  );
}
function Vt(e) {
  for (
    var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (r.length
        ? " " +
          r
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf",
  );
}
function en(e) {
  return !!e && !!e[me];
}
function Or(e) {
  var t;
  return (
    !!e &&
    ((function (r) {
      if (!r || typeof r != "object") return !1;
      var n = Object.getPrototypeOf(r);
      if (n === null) return !0;
      var o = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
      return (
        o === Object ||
        (typeof o == "function" && Function.toString.call(o) === MO)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[ym] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[ym]) ||
      Yd(e) ||
      qd(e))
  );
}
function kn(e, t, r) {
  r === void 0 && (r = !1),
    To(e) === 0
      ? (r ? Object.keys : fo)(e).forEach(function (n) {
          (r && typeof n == "symbol") || t(n, e[n], e);
        })
      : e.forEach(function (n, o) {
          return t(o, n, e);
        });
}
function To(e) {
  var t = e[me];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
      ? 1
      : Yd(e)
        ? 2
        : qd(e)
          ? 3
          : 0;
}
function co(e, t) {
  return To(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function NO(e, t) {
  return To(e) === 2 ? e.get(t) : e[t];
}
function K0(e, t, r) {
  var n = To(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function G0(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Yd(e) {
  return DO && e instanceof Map;
}
function qd(e) {
  return LO && e instanceof Set;
}
function yn(e) {
  return e.o || e.t;
}
function Xd(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Y0(e);
  delete t[me];
  for (var r = fo(t), n = 0; n < r.length; n++) {
    var o = r[n],
      i = t[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Jd(e, t) {
  return (
    t === void 0 && (t = !1),
    Zd(e) ||
      en(e) ||
      !Or(e) ||
      (To(e) > 1 && (e.set = e.add = e.clear = e.delete = TO),
      Object.freeze(e),
      t &&
        kn(
          e,
          function (r, n) {
            return Jd(n, !0);
          },
          !0,
        )),
    e
  );
}
function TO() {
  Vt(2);
}
function Zd(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function nr(e) {
  var t = $f[e];
  return t || Vt(18, e), t;
}
function IO(e, t) {
  $f[e] || ($f[e] = t);
}
function Of() {
  return Mi;
}
function rc(e, t) {
  t && (nr("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Fl(e) {
  xf(e), e.p.forEach(jO), (e.p = null);
}
function xf(e) {
  e === Mi && (Mi = e.l);
}
function cm(e) {
  return (Mi = { p: [], l: Mi, h: e, m: !0, _: 0 });
}
function jO(e) {
  var t = e[me];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function nc(e, t) {
  t._ = t.p.length;
  var r = t.p[0],
    n = e !== void 0 && e !== r;
  return (
    t.h.O || nr("ES5").S(t, e, n),
    n
      ? (r[me].P && (Fl(t), Vt(4)),
        Or(e) && ((e = Ul(t, e)), t.l || Bl(t, e)),
        t.u && nr("Patches").M(r[me].t, e, t.u, t.s))
      : (e = Ul(t, r, [])),
    Fl(t),
    t.u && t.v(t.u, t.s),
    e !== Q0 ? e : void 0
  );
}
function Ul(e, t, r) {
  if (Zd(t)) return t;
  var n = t[me];
  if (!n)
    return (
      kn(
        t,
        function (l, s) {
          return fm(e, n, t, l, s, r);
        },
        !0,
      ),
      t
    );
  if (n.A !== e) return t;
  if (!n.P) return Bl(e, n.t, !0), n.t;
  if (!n.I) {
    (n.I = !0), n.A._--;
    var o = n.i === 4 || n.i === 5 ? (n.o = Xd(n.k)) : n.o,
      i = o,
      a = !1;
    n.i === 3 && ((i = new Set(o)), o.clear(), (a = !0)),
      kn(i, function (l, s) {
        return fm(e, n, o, l, s, r, a);
      }),
      Bl(e, o, !1),
      r && e.u && nr("Patches").N(n, r, e.u, e.s);
  }
  return n.o;
}
function fm(e, t, r, n, o, i, a) {
  if (en(o)) {
    var l = Ul(e, o, i && t && t.i !== 3 && !co(t.R, n) ? i.concat(n) : void 0);
    if ((K0(r, n, l), !en(l))) return;
    e.m = !1;
  } else a && r.add(o);
  if (Or(o) && !Zd(o)) {
    if (!e.h.D && e._ < 1) return;
    Ul(e, o), (t && t.A.l) || Bl(e, o);
  }
}
function Bl(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && Jd(t, r);
}
function oc(e, t) {
  var r = e[me];
  return (r ? yn(r) : e)[t];
}
function dm(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n) return n;
      r = Object.getPrototypeOf(r);
    }
}
function Lr(e) {
  e.P || ((e.P = !0), e.l && Lr(e.l));
}
function ic(e) {
  e.o || (e.o = Xd(e.t));
}
function bf(e, t, r) {
  var n = Yd(t)
    ? nr("MapSet").F(t, r)
    : qd(t)
      ? nr("MapSet").T(t, r)
      : e.O
        ? (function (o, i) {
            var a = Array.isArray(o),
              l = {
                i: a ? 1 : 0,
                A: i ? i.A : Of(),
                P: !1,
                I: !1,
                R: {},
                l: i,
                t: o,
                k: null,
                o: null,
                j: null,
                C: !1,
              },
              s = l,
              u = Fi;
            a && ((s = [l]), (u = li));
            var f = Proxy.revocable(s, u),
              c = f.revoke,
              d = f.proxy;
            return (l.k = d), (l.j = c), d;
          })(t, r)
        : nr("ES5").J(t, r);
  return (r ? r.A : Of()).p.push(n), n;
}
function zO(e) {
  return (
    en(e) || Vt(22, e),
    (function t(r) {
      if (!Or(r)) return r;
      var n,
        o = r[me],
        i = To(r);
      if (o) {
        if (!o.P && (o.i < 4 || !nr("ES5").K(o))) return o.t;
        (o.I = !0), (n = pm(r, i)), (o.I = !1);
      } else n = pm(r, i);
      return (
        kn(n, function (a, l) {
          (o && NO(o.t, a) === l) || K0(n, a, t(l));
        }),
        i === 3 ? new Set(n) : n
      );
    })(e)
  );
}
function pm(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Xd(e);
}
function AO() {
  function e(i, a) {
    var l = o[i];
    return (
      l
        ? (l.enumerable = a)
        : (o[i] = l =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var s = this[me];
                return Fi.get(s, i);
              },
              set: function (s) {
                var u = this[me];
                Fi.set(u, i, s);
              },
            }),
      l
    );
  }
  function t(i) {
    for (var a = i.length - 1; a >= 0; a--) {
      var l = i[a][me];
      if (!l.P)
        switch (l.i) {
          case 5:
            n(l) && Lr(l);
            break;
          case 4:
            r(l) && Lr(l);
        }
    }
  }
  function r(i) {
    for (var a = i.t, l = i.k, s = fo(l), u = s.length - 1; u >= 0; u--) {
      var f = s[u];
      if (f !== me) {
        var c = a[f];
        if (c === void 0 && !co(a, f)) return !0;
        var d = l[f],
          w = d && d[me];
        if (w ? w.t !== c : !G0(d, c)) return !0;
      }
    }
    var v = !!a[me];
    return s.length !== fo(a).length + (v ? 0 : 1);
  }
  function n(i) {
    var a = i.k;
    if (a.length !== i.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(a, a.length - 1);
    if (l && !l.get) return !0;
    for (var s = 0; s < a.length; s++) if (!a.hasOwnProperty(s)) return !0;
    return !1;
  }
  var o = {};
  IO("ES5", {
    J: function (i, a) {
      var l = Array.isArray(i),
        s = (function (f, c) {
          if (f) {
            for (var d = Array(c.length), w = 0; w < c.length; w++)
              Object.defineProperty(d, "" + w, e(w, !0));
            return d;
          }
          var v = Y0(c);
          delete v[me];
          for (var m = fo(v), y = 0; y < m.length; y++) {
            var h = m[y];
            v[h] = e(h, f || !!v[h].enumerable);
          }
          return Object.create(Object.getPrototypeOf(c), v);
        })(l, i),
        u = {
          i: l ? 5 : 4,
          A: a ? a.A : Of(),
          P: !1,
          I: !1,
          R: {},
          l: a,
          t: i,
          k: s,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(s, me, { value: u, writable: !0 }), s;
    },
    S: function (i, a, l) {
      l
        ? en(a) && a[me].A === i && t(i.p)
        : (i.u &&
            (function s(u) {
              if (u && typeof u == "object") {
                var f = u[me];
                if (f) {
                  var c = f.t,
                    d = f.k,
                    w = f.R,
                    v = f.i;
                  if (v === 4)
                    kn(d, function (g) {
                      g !== me &&
                        (c[g] !== void 0 || co(c, g)
                          ? w[g] || s(d[g])
                          : ((w[g] = !0), Lr(f)));
                    }),
                      kn(c, function (g) {
                        d[g] !== void 0 || co(d, g) || ((w[g] = !1), Lr(f));
                      });
                  else if (v === 5) {
                    if ((n(f) && (Lr(f), (w.length = !0)), d.length < c.length))
                      for (var m = d.length; m < c.length; m++) w[m] = !1;
                    else for (var y = c.length; y < d.length; y++) w[y] = !0;
                    for (
                      var h = Math.min(d.length, c.length), p = 0;
                      p < h;
                      p++
                    )
                      d.hasOwnProperty(p) || (w[p] = !0),
                        w[p] === void 0 && s(d[p]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? r(i) : n(i);
    },
  });
}
var hm,
  Mi,
  ep = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  DO = typeof Map < "u",
  LO = typeof Set < "u",
  mm = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  Q0 = ep
    ? Symbol.for("immer-nothing")
    : (((hm = {})["immer-nothing"] = !0), hm),
  ym = ep ? Symbol.for("immer-draftable") : "__$immer_draftable",
  me = ep ? Symbol.for("immer-state") : "__$immer_state",
  MO = "" + Object.prototype.constructor,
  fo =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e),
            );
          }
        : Object.getOwnPropertyNames,
  Y0 =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        fo(e).forEach(function (r) {
          t[r] = Object.getOwnPropertyDescriptor(e, r);
        }),
        t
      );
    },
  $f = {},
  Fi = {
    get: function (e, t) {
      if (t === me) return e;
      var r = yn(e);
      if (!co(r, t))
        return (function (o, i, a) {
          var l,
            s = dm(i, a);
          return s
            ? "value" in s
              ? s.value
              : (l = s.get) === null || l === void 0
                ? void 0
                : l.call(o.k)
            : void 0;
        })(e, r, t);
      var n = r[t];
      return e.I || !Or(n)
        ? n
        : n === oc(e.t, t)
          ? (ic(e), (e.o[t] = bf(e.A.h, n, e)))
          : n;
    },
    has: function (e, t) {
      return t in yn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(yn(e));
    },
    set: function (e, t, r) {
      var n = dm(yn(e), t);
      if (n != null && n.set) return n.set.call(e.k, r), !0;
      if (!e.P) {
        var o = oc(yn(e), t),
          i = o == null ? void 0 : o[me];
        if (i && i.t === r) return (e.o[t] = r), (e.R[t] = !1), !0;
        if (G0(r, o) && (r !== void 0 || co(e.t, t))) return !0;
        ic(e), Lr(e);
      }
      return (
        (e.o[t] === r && (r !== void 0 || t in e.o)) ||
          (Number.isNaN(r) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = r), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        oc(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), ic(e), Lr(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var r = yn(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty: function () {
      Vt(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Vt(12);
    },
  },
  li = {};
kn(Fi, function (e, t) {
  li[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (li.deleteProperty = function (e, t) {
    return li.set.call(this, e, t, void 0);
  }),
  (li.set = function (e, t, r) {
    return Fi.set.call(this, e[0], t, r, e[0]);
  });
var FO = (function () {
    function e(r) {
      var n = this;
      (this.O = mm),
        (this.D = !0),
        (this.produce = function (o, i, a) {
          if (typeof o == "function" && typeof i != "function") {
            var l = i;
            i = o;
            var s = n;
            return function (m) {
              var y = this;
              m === void 0 && (m = l);
              for (
                var h = arguments.length, p = Array(h > 1 ? h - 1 : 0), g = 1;
                g < h;
                g++
              )
                p[g - 1] = arguments[g];
              return s.produce(m, function (S) {
                var P;
                return (P = i).call.apply(P, [y, S].concat(p));
              });
            };
          }
          var u;
          if (
            (typeof i != "function" && Vt(6),
            a !== void 0 && typeof a != "function" && Vt(7),
            Or(o))
          ) {
            var f = cm(n),
              c = bf(n, o, void 0),
              d = !0;
            try {
              (u = i(c)), (d = !1);
            } finally {
              d ? Fl(f) : xf(f);
            }
            return typeof Promise < "u" && u instanceof Promise
              ? u.then(
                  function (m) {
                    return rc(f, a), nc(m, f);
                  },
                  function (m) {
                    throw (Fl(f), m);
                  },
                )
              : (rc(f, a), nc(u, f));
          }
          if (!o || typeof o != "object") {
            if (
              ((u = i(o)) === void 0 && (u = o),
              u === Q0 && (u = void 0),
              n.D && Jd(u, !0),
              a)
            ) {
              var w = [],
                v = [];
              nr("Patches").M(o, u, w, v), a(w, v);
            }
            return u;
          }
          Vt(21, o);
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == "function")
            return function (u) {
              for (
                var f = arguments.length, c = Array(f > 1 ? f - 1 : 0), d = 1;
                d < f;
                d++
              )
                c[d - 1] = arguments[d];
              return n.produceWithPatches(u, function (w) {
                return o.apply(void 0, [w].concat(c));
              });
            };
          var a,
            l,
            s = n.produce(o, i, function (u, f) {
              (a = u), (l = f);
            });
          return typeof Promise < "u" && s instanceof Promise
            ? s.then(function (u) {
                return [u, a, l];
              })
            : [s, a, l];
        }),
        typeof (r == null ? void 0 : r.useProxies) == "boolean" &&
          this.setUseProxies(r.useProxies),
        typeof (r == null ? void 0 : r.autoFreeze) == "boolean" &&
          this.setAutoFreeze(r.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (r) {
        Or(r) || Vt(8), en(r) && (r = zO(r));
        var n = cm(this),
          o = bf(this, r, void 0);
        return (o[me].C = !0), xf(n), o;
      }),
      (t.finishDraft = function (r, n) {
        var o = r && r[me],
          i = o.A;
        return rc(i, n), nc(void 0, i);
      }),
      (t.setAutoFreeze = function (r) {
        this.D = r;
      }),
      (t.setUseProxies = function (r) {
        r && !mm && Vt(20), (this.O = r);
      }),
      (t.applyPatches = function (r, n) {
        var o;
        for (o = n.length - 1; o >= 0; o--) {
          var i = n[o];
          if (i.path.length === 0 && i.op === "replace") {
            r = i.value;
            break;
          }
        }
        o > -1 && (n = n.slice(o + 1));
        var a = nr("Patches").$;
        return en(r)
          ? a(r, n)
          : this.produce(r, function (l) {
              return a(l, n);
            });
      }),
      e
    );
  })(),
  St = new FO(),
  q0 = St.produce;
St.produceWithPatches.bind(St);
St.setAutoFreeze.bind(St);
St.setUseProxies.bind(St);
St.applyPatches.bind(St);
St.createDraft.bind(St);
St.finishDraft.bind(St);
function Ui(e) {
  "@babel/helpers - typeof";
  return (
    (Ui =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ui(e)
  );
}
function UO(e, t) {
  if (Ui(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ui(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BO(e) {
  var t = UO(e, "string");
  return Ui(t) === "symbol" ? t : String(t);
}
function VO(e, t, r) {
  return (
    (t = BO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function gm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function vm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gm(Object(r), !0).forEach(function (n) {
          VO(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gm(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Xe(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var wm = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  ac = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Vl = {
    INIT: "@@redux/INIT" + ac(),
    REPLACE: "@@redux/REPLACE" + ac(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + ac();
    },
  };
function WO(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function tp(e, t, r) {
  var n;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Xe(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(Xe(1));
    return r(tp)(e, t);
  }
  if (typeof e != "function") throw new Error(Xe(2));
  var o = e,
    i = t,
    a = [],
    l = a,
    s = !1;
  function u() {
    l === a && (l = a.slice());
  }
  function f() {
    if (s) throw new Error(Xe(3));
    return i;
  }
  function c(m) {
    if (typeof m != "function") throw new Error(Xe(4));
    if (s) throw new Error(Xe(5));
    var y = !0;
    return (
      u(),
      l.push(m),
      function () {
        if (y) {
          if (s) throw new Error(Xe(6));
          (y = !1), u();
          var p = l.indexOf(m);
          l.splice(p, 1), (a = null);
        }
      }
    );
  }
  function d(m) {
    if (!WO(m)) throw new Error(Xe(7));
    if (typeof m.type > "u") throw new Error(Xe(8));
    if (s) throw new Error(Xe(9));
    try {
      (s = !0), (i = o(i, m));
    } finally {
      s = !1;
    }
    for (var y = (a = l), h = 0; h < y.length; h++) {
      var p = y[h];
      p();
    }
    return m;
  }
  function w(m) {
    if (typeof m != "function") throw new Error(Xe(10));
    (o = m), d({ type: Vl.REPLACE });
  }
  function v() {
    var m,
      y = c;
    return (
      (m = {
        subscribe: function (p) {
          if (typeof p != "object" || p === null) throw new Error(Xe(11));
          function g() {
            p.next && p.next(f());
          }
          g();
          var S = y(g);
          return { unsubscribe: S };
        },
      }),
      (m[wm] = function () {
        return this;
      }),
      m
    );
  }
  return (
    d({ type: Vl.INIT }),
    (n = { dispatch: d, subscribe: c, getState: f, replaceReducer: w }),
    (n[wm] = v),
    n
  );
}
function HO(e) {
  Object.keys(e).forEach(function (t) {
    var r = e[t],
      n = r(void 0, { type: Vl.INIT });
    if (typeof n > "u") throw new Error(Xe(12));
    if (typeof r(void 0, { type: Vl.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Xe(13));
  });
}
function X0(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var o = t[n];
    typeof e[o] == "function" && (r[o] = e[o]);
  }
  var i = Object.keys(r),
    a;
  try {
    HO(r);
  } catch (l) {
    a = l;
  }
  return function (s, u) {
    if ((s === void 0 && (s = {}), a)) throw a;
    for (var f = !1, c = {}, d = 0; d < i.length; d++) {
      var w = i[d],
        v = r[w],
        m = s[w],
        y = v(m, u);
      if (typeof y > "u") throw (u && u.type, new Error(Xe(14)));
      (c[w] = y), (f = f || y !== m);
    }
    return (f = f || i.length !== Object.keys(s).length), f ? c : s;
  };
}
function Wl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0
    ? function (n) {
        return n;
      }
    : t.length === 1
      ? t[0]
      : t.reduce(function (n, o) {
          return function () {
            return n(o.apply(void 0, arguments));
          };
        });
}
function KO() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return function () {
      var o = n.apply(void 0, arguments),
        i = function () {
          throw new Error(Xe(15));
        },
        a = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        l = t.map(function (s) {
          return s(a);
        });
      return (
        (i = Wl.apply(void 0, l)(o.dispatch)),
        vm(vm({}, o), {}, { dispatch: i })
      );
    };
  };
}
function J0(e) {
  var t = function (n) {
    var o = n.dispatch,
      i = n.getState;
    return function (a) {
      return function (l) {
        return typeof l == "function" ? l(o, i, e) : a(l);
      };
    };
  };
  return t;
}
var Z0 = J0();
Z0.withExtraArgument = J0;
const Sm = Z0;
var GO =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, r) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, o) {
                n.__proto__ = o;
              }) ||
            function (n, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
            }),
          e(t, r)
        );
      };
      return function (t, r) {
        if (typeof r != "function" && r !== null)
          throw new TypeError(
            "Class extends value " +
              String(r) +
              " is not a constructor or null",
          );
        e(t, r);
        function n() {
          this.constructor = t;
        }
        t.prototype =
          r === null
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n());
      };
    })(),
  QO =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var r = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        n,
        o,
        i,
        a;
      return (
        (a = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function l(u) {
        return function (f) {
          return s([u, f]);
        };
      }
      function s(u) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; r; )
          try {
            if (
              ((n = 1),
              o &&
                (i =
                  u[0] & 2
                    ? o.return
                    : u[0]
                      ? o.throw || ((i = o.return) && i.call(o), 0)
                      : o.next) &&
                !(i = i.call(o, u[1])).done)
            )
              return i;
            switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
              case 0:
              case 1:
                i = u;
                break;
              case 4:
                return r.label++, { value: u[1], done: !1 };
              case 5:
                r.label++, (o = u[1]), (u = [0]);
                continue;
              case 7:
                (u = r.ops.pop()), r.trys.pop();
                continue;
              default:
                if (
                  ((i = r.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  r = 0;
                  continue;
                }
                if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                  r.label = u[1];
                  break;
                }
                if (u[0] === 6 && r.label < i[1]) {
                  (r.label = i[1]), (i = u);
                  break;
                }
                if (i && r.label < i[2]) {
                  (r.label = i[2]), r.ops.push(u);
                  break;
                }
                i[2] && r.ops.pop(), r.trys.pop();
                continue;
            }
            u = t.call(e, r);
          } catch (f) {
            (u = [6, f]), (o = 0);
          } finally {
            n = i = 0;
          }
        if (u[0] & 5) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      }
    },
  Hl =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
      return e;
    },
  YO = Object.defineProperty,
  qO = Object.defineProperties,
  XO = Object.getOwnPropertyDescriptors,
  _m = Object.getOwnPropertySymbols,
  JO = Object.prototype.hasOwnProperty,
  ZO = Object.prototype.propertyIsEnumerable,
  Em = function (e, t, r) {
    return t in e
      ? YO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  qr = function (e, t) {
    for (var r in t || (t = {})) JO.call(t, r) && Em(e, r, t[r]);
    if (_m)
      for (var n = 0, o = _m(t); n < o.length; n++) {
        var r = o[n];
        ZO.call(t, r) && Em(e, r, t[r]);
      }
    return e;
  },
  lc = function (e, t) {
    return qO(e, XO(t));
  },
  ex = function (e, t, r) {
    return new Promise(function (n, o) {
      var i = function (s) {
          try {
            l(r.next(s));
          } catch (u) {
            o(u);
          }
        },
        a = function (s) {
          try {
            l(r.throw(s));
          } catch (u) {
            o(u);
          }
        },
        l = function (s) {
          return s.done ? n(s.value) : Promise.resolve(s.value).then(i, a);
        };
      l((r = r.apply(e, t)).next());
    });
  },
  tx =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Wl
              : Wl.apply(null, arguments);
        };
function rx(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
var nx = (function (e) {
  GO(t, e);
  function t() {
    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
    var o = e.apply(this, r) || this;
    return Object.setPrototypeOf(o, t.prototype), o;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      return e.prototype.concat.apply(this, r);
    }),
    (t.prototype.prepend = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      return r.length === 1 && Array.isArray(r[0])
        ? new (t.bind.apply(t, Hl([void 0], r[0].concat(this))))()
        : new (t.bind.apply(t, Hl([void 0], r.concat(this))))();
    }),
    t
  );
})(Array);
function Cf(e) {
  return Or(e) ? q0(e, function () {}) : e;
}
function ox(e) {
  return typeof e == "boolean";
}
function ix() {
  return function (t) {
    return ax(t);
  };
}
function ax(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    r = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var n = new nx();
  return (
    r && (ox(r) ? n.push(Sm) : n.push(Sm.withExtraArgument(r.extraArgument))), n
  );
}
var lx = !0;
function sx(e) {
  var t = ix(),
    r = e || {},
    n = r.reducer,
    o = n === void 0 ? void 0 : n,
    i = r.middleware,
    a = i === void 0 ? t() : i,
    l = r.devTools,
    s = l === void 0 ? !0 : l,
    u = r.preloadedState,
    f = u === void 0 ? void 0 : u,
    c = r.enhancers,
    d = c === void 0 ? void 0 : c,
    w;
  if (typeof o == "function") w = o;
  else if (rx(o)) w = X0(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
    );
  var v = a;
  typeof v == "function" && (v = v(t));
  var m = KO.apply(void 0, v),
    y = Wl;
  s && (y = tx(qr({ trace: !lx }, typeof s == "object" && s)));
  var h = [m];
  Array.isArray(d) ? (h = Hl([m], d)) : typeof d == "function" && (h = d(h));
  var p = y.apply(void 0, h);
  return tp(w, f, p);
}
function Xr(e, t) {
  function r() {
    for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, n);
      if (!i) throw new Error("prepareAction did not return an object");
      return qr(
        qr({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error },
      );
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = function () {
      return "" + e;
    }),
    (r.type = e),
    (r.match = function (n) {
      return n.type === e;
    }),
    r
  );
}
function e1(e) {
  var t = {},
    r = [],
    n,
    o = {
      addCase: function (i, a) {
        var l = typeof i == "string" ? i : i.type;
        if (l in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type",
          );
        return (t[l] = a), o;
      },
      addMatcher: function (i, a) {
        return r.push({ matcher: i, reducer: a }), o;
      },
      addDefaultCase: function (i) {
        return (n = i), o;
      },
    };
  return e(o), [t, r, n];
}
function ux(e) {
  return typeof e == "function";
}
function cx(e, t, r, n) {
  r === void 0 && (r = []);
  var o = typeof t == "function" ? e1(t) : [t, r, n],
    i = o[0],
    a = o[1],
    l = o[2],
    s;
  if (ux(e))
    s = function () {
      return Cf(e());
    };
  else {
    var u = Cf(e);
    s = function () {
      return u;
    };
  }
  function f(c, d) {
    c === void 0 && (c = s());
    var w = Hl(
      [i[d.type]],
      a
        .filter(function (v) {
          var m = v.matcher;
          return m(d);
        })
        .map(function (v) {
          var m = v.reducer;
          return m;
        }),
    );
    return (
      w.filter(function (v) {
        return !!v;
      }).length === 0 && (w = [l]),
      w.reduce(function (v, m) {
        if (m)
          if (en(v)) {
            var y = v,
              h = m(y, d);
            return h === void 0 ? v : h;
          } else {
            if (Or(v))
              return q0(v, function (p) {
                return m(p, d);
              });
            var h = m(v, d);
            if (h === void 0) {
              if (v === null) return v;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined",
              );
            }
            return h;
          }
        return v;
      }, c)
    );
  }
  return (f.getInitialState = s), f;
}
function fx(e, t) {
  return e + "/" + t;
}
function Ls(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var r =
      typeof e.initialState == "function" ? e.initialState : Cf(e.initialState),
    n = e.reducers || {},
    o = Object.keys(n),
    i = {},
    a = {},
    l = {};
  o.forEach(function (f) {
    var c = n[f],
      d = fx(t, f),
      w,
      v;
    "reducer" in c ? ((w = c.reducer), (v = c.prepare)) : (w = c),
      (i[f] = w),
      (a[d] = w),
      (l[f] = v ? Xr(d, v) : Xr(d));
  });
  function s() {
    var f =
        typeof e.extraReducers == "function"
          ? e1(e.extraReducers)
          : [e.extraReducers],
      c = f[0],
      d = c === void 0 ? {} : c,
      w = f[1],
      v = w === void 0 ? [] : w,
      m = f[2],
      y = m === void 0 ? void 0 : m,
      h = qr(qr({}, d), a);
    return cx(r, function (p) {
      for (var g in h) p.addCase(g, h[g]);
      for (var S = 0, P = v; S < P.length; S++) {
        var O = P[S];
        p.addMatcher(O.matcher, O.reducer);
      }
      y && p.addDefaultCase(y);
    });
  }
  var u;
  return {
    name: t,
    reducer: function (f, c) {
      return u || (u = s()), u(f, c);
    },
    actions: l,
    caseReducers: i,
    getInitialState: function () {
      return u || (u = s()), u.getInitialState();
    },
  };
}
var dx = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  px = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", r = e; r--; ) t += dx[(Math.random() * 64) | 0];
    return t;
  },
  hx = ["name", "message", "stack", "code"],
  sc = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  Pm = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  mx = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, r = 0, n = hx; r < n.length; r++) {
        var o = n[r];
        typeof e[o] == "string" && (t[o] = e[o]);
      }
      return t;
    }
    return { message: String(e) };
  },
  an = (function () {
    function e(t, r, n) {
      var o = Xr(t + "/fulfilled", function (u, f, c, d) {
          return {
            payload: u,
            meta: lc(qr({}, d || {}), {
              arg: c,
              requestId: f,
              requestStatus: "fulfilled",
            }),
          };
        }),
        i = Xr(t + "/pending", function (u, f, c) {
          return {
            payload: void 0,
            meta: lc(qr({}, c || {}), {
              arg: f,
              requestId: u,
              requestStatus: "pending",
            }),
          };
        }),
        a = Xr(t + "/rejected", function (u, f, c, d, w) {
          return {
            payload: d,
            error: ((n && n.serializeError) || mx)(u || "Rejected"),
            meta: lc(qr({}, w || {}), {
              arg: c,
              requestId: f,
              rejectedWithValue: !!d,
              requestStatus: "rejected",
              aborted: (u == null ? void 0 : u.name) === "AbortError",
              condition: (u == null ? void 0 : u.name) === "ConditionError",
            }),
          };
        }),
        l =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function u() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (u.prototype.abort = function () {}), u;
              })();
      function s(u) {
        return function (f, c, d) {
          var w = n != null && n.idGenerator ? n.idGenerator(u) : px(),
            v = new l(),
            m;
          function y(p) {
            (m = p), v.abort();
          }
          var h = (function () {
            return ex(this, null, function () {
              var p, g, S, P, O, E, k;
              return QO(this, function (T) {
                switch (T.label) {
                  case 0:
                    return (
                      T.trys.push([0, 4, , 5]),
                      (P =
                        (p = n == null ? void 0 : n.condition) == null
                          ? void 0
                          : p.call(n, u, { getState: c, extra: d })),
                      gx(P) ? [4, P] : [3, 2]
                    );
                  case 1:
                    (P = T.sent()), (T.label = 2);
                  case 2:
                    if (P === !1 || v.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      (O = new Promise(function (D, Y) {
                        return v.signal.addEventListener("abort", function () {
                          return Y({
                            name: "AbortError",
                            message: m || "Aborted",
                          });
                        });
                      })),
                      f(
                        i(
                          w,
                          u,
                          (g = n == null ? void 0 : n.getPendingMeta) == null
                            ? void 0
                            : g.call(
                                n,
                                { requestId: w, arg: u },
                                { getState: c, extra: d },
                              ),
                        ),
                      ),
                      [
                        4,
                        Promise.race([
                          O,
                          Promise.resolve(
                            r(u, {
                              dispatch: f,
                              getState: c,
                              extra: d,
                              requestId: w,
                              signal: v.signal,
                              abort: y,
                              rejectWithValue: function (D, Y) {
                                return new sc(D, Y);
                              },
                              fulfillWithValue: function (D, Y) {
                                return new Pm(D, Y);
                              },
                            }),
                          ).then(function (D) {
                            if (D instanceof sc) throw D;
                            return D instanceof Pm
                              ? o(D.payload, w, u, D.meta)
                              : o(D, w, u);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (S = T.sent()), [3, 5];
                  case 4:
                    return (
                      (E = T.sent()),
                      (S =
                        E instanceof sc
                          ? a(null, w, u, E.payload, E.meta)
                          : a(E, w, u)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (k =
                        n &&
                        !n.dispatchConditionRejection &&
                        a.match(S) &&
                        S.meta.condition),
                      k || f(S),
                      [2, S]
                    );
                }
              });
            });
          })();
          return Object.assign(h, {
            abort: y,
            requestId: w,
            arg: u,
            unwrap: function () {
              return h.then(yx);
            },
          });
        };
      }
      return Object.assign(s, {
        pending: i,
        rejected: a,
        fulfilled: o,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function yx(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function gx(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var rp = "listenerMiddleware";
Xr(rp + "/add");
Xr(rp + "/removeAll");
Xr(rp + "/remove");
var Om;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis,
  );
AO();
var np = "persist:",
  t1 = "persist/FLUSH",
  op = "persist/REHYDRATE",
  r1 = "persist/PAUSE",
  n1 = "persist/PERSIST",
  o1 = "persist/PURGE",
  i1 = "persist/REGISTER",
  vx = -1;
function Ya(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ya = function (r) {
          return typeof r;
        })
      : (Ya = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Ya(e)
  );
}
function xm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function wx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xm(r, !0).forEach(function (n) {
          Sx(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xm(r).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Sx(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function _x(e, t, r, n) {
  n.debug;
  var o = wx({}, r);
  return (
    e &&
      Ya(e) === "object" &&
      Object.keys(e).forEach(function (i) {
        i !== "_persist" && t[i] === r[i] && (o[i] = e[i]);
      }),
    o
  );
}
function Ex(e) {
  var t = e.blacklist || null,
    r = e.whitelist || null,
    n = e.transforms || [],
    o = e.throttle || 0,
    i = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : np).concat(e.key),
    a = e.storage,
    l;
  e.serialize === !1
    ? (l = function (P) {
        return P;
      })
    : typeof e.serialize == "function"
      ? (l = e.serialize)
      : (l = Px);
  var s = e.writeFailHandler || null,
    u = {},
    f = {},
    c = [],
    d = null,
    w = null,
    v = function (P) {
      Object.keys(P).forEach(function (O) {
        h(O) && u[O] !== P[O] && c.indexOf(O) === -1 && c.push(O);
      }),
        Object.keys(u).forEach(function (O) {
          P[O] === void 0 &&
            h(O) &&
            c.indexOf(O) === -1 &&
            u[O] !== void 0 &&
            c.push(O);
        }),
        d === null && (d = setInterval(m, o)),
        (u = P);
    };
  function m() {
    if (c.length === 0) {
      d && clearInterval(d), (d = null);
      return;
    }
    var S = c.shift(),
      P = n.reduce(function (O, E) {
        return E.in(O, S, u);
      }, u[S]);
    if (P !== void 0)
      try {
        f[S] = l(P);
      } catch (O) {
        console.error(
          "redux-persist/createPersistoid: error serializing state",
          O,
        );
      }
    else delete f[S];
    c.length === 0 && y();
  }
  function y() {
    Object.keys(f).forEach(function (S) {
      u[S] === void 0 && delete f[S];
    }),
      (w = a.setItem(i, l(f)).catch(p));
  }
  function h(S) {
    return !(
      (r && r.indexOf(S) === -1 && S !== "_persist") ||
      (t && t.indexOf(S) !== -1)
    );
  }
  function p(S) {
    s && s(S);
  }
  var g = function () {
    for (; c.length !== 0; ) m();
    return w || Promise.resolve();
  };
  return { update: v, flush: g };
}
function Px(e) {
  return JSON.stringify(e);
}
function Ox(e) {
  var t = e.transforms || [],
    r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : np).concat(e.key),
    n = e.storage;
  e.debug;
  var o;
  return (
    e.deserialize === !1
      ? (o = function (a) {
          return a;
        })
      : typeof e.deserialize == "function"
        ? (o = e.deserialize)
        : (o = xx),
    n.getItem(r).then(function (i) {
      if (i)
        try {
          var a = {},
            l = o(i);
          return (
            Object.keys(l).forEach(function (s) {
              a[s] = t.reduceRight(function (u, f) {
                return f.out(u, s, l);
              }, o(l[s]));
            }),
            a
          );
        } catch (s) {
          throw s;
        }
      else return;
    })
  );
}
function xx(e) {
  return JSON.parse(e);
}
function bx(e) {
  var t = e.storage,
    r = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : np).concat(e.key);
  return t.removeItem(r, $x);
}
function $x(e) {}
function bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bm(r, !0).forEach(function (n) {
          Cx(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bm(r).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Cx(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function kx(e, t) {
  if (e == null) return {};
  var r = Rx(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function Rx(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Nx = 5e3;
function a1(e, t) {
  var r = e.version !== void 0 ? e.version : vx;
  e.debug;
  var n = e.stateReconciler === void 0 ? _x : e.stateReconciler,
    o = e.getStoredState || Ox,
    i = e.timeout !== void 0 ? e.timeout : Nx,
    a = null,
    l = !1,
    s = !0,
    u = function (c) {
      return c._persist.rehydrated && a && !s && a.update(c), c;
    };
  return function (f, c) {
    var d = f || {},
      w = d._persist,
      v = kx(d, ["_persist"]),
      m = v;
    if (c.type === n1) {
      var y = !1,
        h = function (k, T) {
          y || (c.rehydrate(e.key, k, T), (y = !0));
        };
      if (
        (i &&
          setTimeout(function () {
            !y &&
              h(
                void 0,
                new Error(
                  'redux-persist: persist timed out for persist key "'.concat(
                    e.key,
                    '"',
                  ),
                ),
              );
          }, i),
        (s = !1),
        a || (a = Ex(e)),
        w)
      )
        return sr({}, t(m, c), { _persist: w });
      if (typeof c.rehydrate != "function" || typeof c.register != "function")
        throw new Error(
          "redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.",
        );
      return (
        c.register(e.key),
        o(e).then(
          function (E) {
            var k =
              e.migrate ||
              function (T, D) {
                return Promise.resolve(T);
              };
            k(E, r).then(
              function (T) {
                h(T);
              },
              function (T) {
                h(void 0, T);
              },
            );
          },
          function (E) {
            h(void 0, E);
          },
        ),
        sr({}, t(m, c), { _persist: { version: r, rehydrated: !1 } })
      );
    } else {
      if (c.type === o1)
        return (l = !0), c.result(bx(e)), sr({}, t(m, c), { _persist: w });
      if (c.type === t1)
        return c.result(a && a.flush()), sr({}, t(m, c), { _persist: w });
      if (c.type === r1) s = !0;
      else if (c.type === op) {
        if (l) return sr({}, m, { _persist: sr({}, w, { rehydrated: !0 }) });
        if (c.key === e.key) {
          var p = t(m, c),
            g = c.payload,
            S = n !== !1 && g !== void 0 ? n(g, f, p, e) : p,
            P = sr({}, S, { _persist: sr({}, w, { rehydrated: !0 }) });
          return u(P);
        }
      }
    }
    if (!w) return t(f, c);
    var O = t(m, c);
    return O === m ? f : u(sr({}, O, { _persist: w }));
  };
}
function vi(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (vi = function (r) {
          return typeof r;
        })
      : (vi = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    vi(e)
  );
}
function $m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Cm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $m(r, !0).forEach(function (n) {
          Tx(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $m(r).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Tx(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Ix(e, t, r, n) {
  n.debug;
  var o = Cm({}, r);
  return (
    e &&
      vi(e) === "object" &&
      Object.keys(e).forEach(function (i) {
        if (i !== "_persist" && t[i] === r[i]) {
          if (jx(r[i])) {
            o[i] = Cm({}, o[i], {}, e[i]);
            return;
          }
          o[i] = e[i];
        }
      }),
    o
  );
}
function jx(e) {
  return e !== null && !Array.isArray(e) && vi(e) === "object";
}
function zx(e, t) {
  return (
    (e.stateReconciler = e.stateReconciler === void 0 ? Ix : e.stateReconciler),
    a1(e, X0(t))
  );
}
function km(e) {
  return Lx(e) || Dx(e) || Ax();
}
function Ax() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function Dx(e) {
  if (
    Symbol.iterator in Object(e) ||
    Object.prototype.toString.call(e) === "[object Arguments]"
  )
    return Array.from(e);
}
function Lx(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
    return r;
  }
}
function Rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function kf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rm(r, !0).forEach(function (n) {
          Mx(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rm(r).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Mx(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var l1 = { registry: [], bootstrapped: !1 },
  Fx = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l1,
      r = arguments.length > 1 ? arguments[1] : void 0;
    switch (r.type) {
      case i1:
        return kf({}, t, { registry: [].concat(km(t.registry), [r.key]) });
      case op:
        var n = t.registry.indexOf(r.key),
          o = km(t.registry);
        return (
          o.splice(n, 1),
          kf({}, t, { registry: o, bootstrapped: o.length === 0 })
        );
      default:
        return t;
    }
  };
function Ux(e, t, r) {
  var n = r || !1,
    o = tp(Fx, l1, t && t.enhancer ? t.enhancer : void 0),
    i = function (u) {
      o.dispatch({ type: i1, key: u });
    },
    a = function (u, f, c) {
      var d = { type: op, payload: f, err: c, key: u };
      e.dispatch(d),
        o.dispatch(d),
        n && l.getState().bootstrapped && (n(), (n = !1));
    },
    l = kf({}, o, {
      purge: function () {
        var u = [];
        return (
          e.dispatch({
            type: o1,
            result: function (c) {
              u.push(c);
            },
          }),
          Promise.all(u)
        );
      },
      flush: function () {
        var u = [];
        return (
          e.dispatch({
            type: t1,
            result: function (c) {
              u.push(c);
            },
          }),
          Promise.all(u)
        );
      },
      pause: function () {
        e.dispatch({ type: r1 });
      },
      persist: function () {
        e.dispatch({ type: n1, register: i, rehydrate: a });
      },
    });
  return (t && t.manualPersist) || l.persist(), l;
}
var ip = {},
  ap = {};
ap.__esModule = !0;
ap.default = Wx;
function qa(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (qa = function (r) {
          return typeof r;
        })
      : (qa = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    qa(e)
  );
}
function uc() {}
var Bx = { getItem: uc, setItem: uc, removeItem: uc };
function Vx(e) {
  if ((typeof self > "u" ? "undefined" : qa(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e],
      r = "redux-persist ".concat(e, " test");
    t.setItem(r, "test"), t.getItem(r), t.removeItem(r);
  } catch {
    return !1;
  }
  return !0;
}
function Wx(e) {
  var t = "".concat(e, "Storage");
  return Vx(t) ? self[t] : Bx;
}
ip.__esModule = !0;
ip.default = Gx;
var Hx = Kx(ap);
function Kx(e) {
  return e && e.__esModule ? e : { default: e };
}
function Gx(e) {
  var t = (0, Hx.default)(e);
  return {
    getItem: function (n) {
      return new Promise(function (o, i) {
        o(t.getItem(n));
      });
    },
    setItem: function (n, o) {
      return new Promise(function (i, a) {
        i(t.setItem(n, o));
      });
    },
    removeItem: function (n) {
      return new Promise(function (o, i) {
        o(t.removeItem(n));
      });
    },
  };
}
var s1 = void 0,
  Qx = Yx(ip);
function Yx(e) {
  return e && e.__esModule ? e : { default: e };
}
var qx = (0, Qx.default)("local");
s1 = qx;
const Xx = { value: 0 },
  Jx = Ls({
    name: "counter",
    initialState: Xx,
    reducers: {
      reset: (e) => {
        e.value = 0;
      },
      increment: (e) => {
        e.value += 1;
      },
      decrement: (e) => {
        e.value -= 1;
      },
      incrementByAmount: (e, t) => {
        e.value += t.payload;
      },
    },
    extraReducers: (e) => {
      e.addCase("auth/logout", (t) => {
        t.value = 0;
      });
    },
  }),
  Zx = Jx.reducer;
function u1(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: eb } = Object.prototype,
  { getPrototypeOf: lp } = Object,
  Ms = ((e) => (t) => {
    const r = eb.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ir = (e) => ((e = e.toLowerCase()), (t) => Ms(t) === e),
  Fs = (e) => (t) => typeof t === e,
  { isArray: Io } = Array,
  Bi = Fs("undefined");
function tb(e) {
  return (
    e !== null &&
    !Bi(e) &&
    e.constructor !== null &&
    !Bi(e.constructor) &&
    Nt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const c1 = ir("ArrayBuffer");
function rb(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && c1(e.buffer)),
    t
  );
}
const nb = Fs("string"),
  Nt = Fs("function"),
  f1 = Fs("number"),
  Us = (e) => e !== null && typeof e == "object",
  ob = (e) => e === !0 || e === !1,
  Xa = (e) => {
    if (Ms(e) !== "object") return !1;
    const t = lp(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ib = ir("Date"),
  ab = ir("File"),
  lb = ir("Blob"),
  sb = ir("FileList"),
  ub = (e) => Us(e) && Nt(e.pipe),
  cb = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Nt(e.append) &&
          ((t = Ms(e)) === "formdata" ||
            (t === "object" &&
              Nt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  fb = ir("URLSearchParams"),
  db = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ra(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let n, o;
  if ((typeof e != "object" && (e = [e]), Io(e)))
    for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let l;
    for (n = 0; n < a; n++) (l = i[n]), t.call(null, e[l], l, e);
  }
}
function d1(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length,
    o;
  for (; n-- > 0; ) if (((o = r[n]), t === o.toLowerCase())) return o;
  return null;
}
const p1 = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global)(),
  h1 = (e) => !Bi(e) && e !== p1;
function Rf() {
  const { caseless: e } = (h1(this) && this) || {},
    t = {},
    r = (n, o) => {
      const i = (e && d1(t, o)) || o;
      Xa(t[i]) && Xa(n)
        ? (t[i] = Rf(t[i], n))
        : Xa(n)
          ? (t[i] = Rf({}, n))
          : Io(n)
            ? (t[i] = n.slice())
            : (t[i] = n);
    };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && ra(arguments[n], r);
  return t;
}
const pb = (e, t, r, { allOwnKeys: n } = {}) => (
    ra(
      t,
      (o, i) => {
        r && Nt(o) ? (e[i] = u1(o, r)) : (e[i] = o);
      },
      { allOwnKeys: n },
    ),
    e
  ),
  hb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  mb = (e, t, r, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      r && Object.assign(e.prototype, r);
  },
  yb = (e, t, r, n) => {
    let o, i, a;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!n || n(a, e, t)) && !l[a] && ((t[a] = e[a]), (l[a] = !0));
      e = r !== !1 && lp(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  gb = (e, t, r) => {
    (e = String(e)),
      (r === void 0 || r > e.length) && (r = e.length),
      (r -= t.length);
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  vb = (e) => {
    if (!e) return null;
    if (Io(e)) return e;
    let t = e.length;
    if (!f1(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  },
  wb = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && lp(Uint8Array)),
  Sb = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = n.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  _b = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null; ) n.push(r);
    return n;
  },
  Eb = ir("HTMLFormElement"),
  Pb = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, o) {
      return n.toUpperCase() + o;
    }),
  Nm = (
    ({ hasOwnProperty: e }) =>
    (t, r) =>
      e.call(t, r)
  )(Object.prototype),
  Ob = ir("RegExp"),
  m1 = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    ra(r, (o, i) => {
      let a;
      (a = t(o, i, e)) !== !1 && (n[i] = a || o);
    }),
      Object.defineProperties(e, n);
  },
  xb = (e) => {
    m1(e, (t, r) => {
      if (Nt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const n = e[r];
      if (Nt(n)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  bb = (e, t) => {
    const r = {},
      n = (o) => {
        o.forEach((i) => {
          r[i] = !0;
        });
      };
    return Io(e) ? n(e) : n(String(e).split(t)), r;
  },
  $b = () => {},
  Cb = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  cc = "abcdefghijklmnopqrstuvwxyz",
  Tm = "0123456789",
  y1 = { DIGIT: Tm, ALPHA: cc, ALPHA_DIGIT: cc + cc.toUpperCase() + Tm },
  kb = (e = 16, t = y1.ALPHA_DIGIT) => {
    let r = "";
    const { length: n } = t;
    for (; e--; ) r += t[(Math.random() * n) | 0];
    return r;
  };
function Rb(e) {
  return !!(
    e &&
    Nt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Nb = (e) => {
    const t = new Array(10),
      r = (n, o) => {
        if (Us(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            t[o] = n;
            const i = Io(n) ? [] : {};
            return (
              ra(n, (a, l) => {
                const s = r(a, o + 1);
                !Bi(s) && (i[l] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return n;
      };
    return r(e, 0);
  },
  Tb = ir("AsyncFunction"),
  Ib = (e) => e && (Us(e) || Nt(e)) && Nt(e.then) && Nt(e.catch),
  C = {
    isArray: Io,
    isArrayBuffer: c1,
    isBuffer: tb,
    isFormData: cb,
    isArrayBufferView: rb,
    isString: nb,
    isNumber: f1,
    isBoolean: ob,
    isObject: Us,
    isPlainObject: Xa,
    isUndefined: Bi,
    isDate: ib,
    isFile: ab,
    isBlob: lb,
    isRegExp: Ob,
    isFunction: Nt,
    isStream: ub,
    isURLSearchParams: fb,
    isTypedArray: wb,
    isFileList: sb,
    forEach: ra,
    merge: Rf,
    extend: pb,
    trim: db,
    stripBOM: hb,
    inherits: mb,
    toFlatObject: yb,
    kindOf: Ms,
    kindOfTest: ir,
    endsWith: gb,
    toArray: vb,
    forEachEntry: Sb,
    matchAll: _b,
    isHTMLForm: Eb,
    hasOwnProperty: Nm,
    hasOwnProp: Nm,
    reduceDescriptors: m1,
    freezeMethods: xb,
    toObjectSet: bb,
    toCamelCase: Pb,
    noop: $b,
    toFiniteNumber: Cb,
    findKey: d1,
    global: p1,
    isContextDefined: h1,
    ALPHABET: y1,
    generateString: kb,
    isSpecCompliantForm: Rb,
    toJSONObject: Nb,
    isAsyncFn: Tb,
    isThenable: Ib,
  };
function X(e, t, r, n, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    o && (this.response = o);
}
C.inherits(X, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: C.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const g1 = X.prototype,
  v1 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  v1[e] = { value: e };
});
Object.defineProperties(X, v1);
Object.defineProperty(g1, "isAxiosError", { value: !0 });
X.from = (e, t, r, n, o, i) => {
  const a = Object.create(g1);
  return (
    C.toFlatObject(
      e,
      a,
      function (s) {
        return s !== Error.prototype;
      },
      (l) => l !== "isAxiosError",
    ),
    X.call(a, e.message, t, r, n, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const jb = null;
function Nf(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function w1(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Im(e, t, r) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = w1(o)), !r && i ? "[" + o + "]" : o;
        })
        .join(r ? "." : "")
    : t;
}
function zb(e) {
  return C.isArray(e) && !e.some(Nf);
}
const Ab = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Bs(e, t, r) {
  if (!C.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = C.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, y) {
        return !C.isUndefined(y[m]);
      },
    ));
  const n = r.metaTokens,
    o = r.visitor || f,
    i = r.dots,
    a = r.indexes,
    s = (r.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
  if (!C.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (C.isDate(v)) return v.toISOString();
    if (!s && C.isBlob(v))
      throw new X("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(v) || C.isTypedArray(v)
      ? s && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function f(v, m, y) {
    let h = v;
    if (v && !y && typeof v == "object") {
      if (C.endsWith(m, "{}"))
        (m = n ? m : m.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (C.isArray(v) && zb(v)) ||
        ((C.isFileList(v) || C.endsWith(m, "[]")) && (h = C.toArray(v)))
      )
        return (
          (m = w1(m)),
          h.forEach(function (g, S) {
            !(C.isUndefined(g) || g === null) &&
              t.append(
                a === !0 ? Im([m], S, i) : a === null ? m : m + "[]",
                u(g),
              );
          }),
          !1
        );
    }
    return Nf(v) ? !0 : (t.append(Im(y, m, i), u(v)), !1);
  }
  const c = [],
    d = Object.assign(Ab, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: Nf,
    });
  function w(v, m) {
    if (!C.isUndefined(v)) {
      if (c.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      c.push(v),
        C.forEach(v, function (h, p) {
          (!(C.isUndefined(h) || h === null) &&
            o.call(t, h, C.isString(p) ? p.trim() : p, m, d)) === !0 &&
            w(h, m ? m.concat(p) : [p]);
        }),
        c.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function jm(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function sp(e, t) {
  (this._pairs = []), e && Bs(e, this, t);
}
const S1 = sp.prototype;
S1.append = function (t, r) {
  this._pairs.push([t, r]);
};
S1.toString = function (t) {
  const r = t
    ? function (n) {
        return t.call(this, n, jm);
      }
    : jm;
  return this._pairs
    .map(function (o) {
      return r(o[0]) + "=" + r(o[1]);
    }, "")
    .join("&");
};
function Db(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function _1(e, t, r) {
  if (!t) return e;
  const n = (r && r.encode) || Db,
    o = r && r.serialize;
  let i;
  if (
    (o
      ? (i = o(t, r))
      : (i = C.isURLSearchParams(t) ? t.toString() : new sp(t, r).toString(n)),
    i)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Lb {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    C.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const zm = Lb,
  E1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Mb = typeof URLSearchParams < "u" ? URLSearchParams : sp,
  Fb = typeof FormData < "u" ? FormData : null,
  Ub = typeof Blob < "u" ? Blob : null,
  Bb = {
    isBrowser: !0,
    classes: { URLSearchParams: Mb, FormData: Fb, Blob: Ub },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  P1 = typeof window < "u" && typeof document < "u",
  Vb = ((e) => P1 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product,
  ),
  Wb = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Hb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: P1,
        hasStandardBrowserEnv: Vb,
        hasStandardBrowserWebWorkerEnv: Wb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  er = { ...Hb, ...Bb };
function Kb(e, t) {
  return Bs(
    e,
    new er.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, n, o, i) {
          return er.isNode && C.isBuffer(r)
            ? (this.append(n, r.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Gb(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function Qb(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const o = r.length;
  let i;
  for (n = 0; n < o; n++) (i = r[n]), (t[i] = e[i]);
  return t;
}
function O1(e) {
  function t(r, n, o, i) {
    let a = r[i++];
    const l = Number.isFinite(+a),
      s = i >= r.length;
    return (
      (a = !a && C.isArray(o) ? o.length : a),
      s
        ? (C.hasOwnProp(o, a) ? (o[a] = [o[a], n]) : (o[a] = n), !l)
        : ((!o[a] || !C.isObject(o[a])) && (o[a] = []),
          t(r, n, o[a], i) && C.isArray(o[a]) && (o[a] = Qb(o[a])),
          !l)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const r = {};
    return (
      C.forEachEntry(e, (n, o) => {
        t(Gb(n), o, r, 0);
      }),
      r
    );
  }
  return null;
}
function Yb(e, t, r) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (r || JSON.stringify)(e);
}
const up = {
  transitional: E1,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, r) {
      const n = r.getContentType() || "",
        o = n.indexOf("application/json") > -1,
        i = C.isObject(t);
      if ((i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return o && o ? JSON.stringify(O1(t)) : t;
      if (
        C.isArrayBuffer(t) ||
        C.isBuffer(t) ||
        C.isStream(t) ||
        C.isFile(t) ||
        C.isBlob(t)
      )
        return t;
      if (C.isArrayBufferView(t)) return t.buffer;
      if (C.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return Kb(t, this.formSerializer).toString();
        if ((l = C.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return Bs(
            l ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (r.setContentType("application/json", !1), Yb(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || up.transitional,
        n = r && r.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && C.isString(t) && ((n && !this.responseType) || o)) {
        const a = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? X.from(l, X.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: er.classes.FormData, Blob: er.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  up.headers[e] = {};
});
const cp = up,
  qb = C.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Xb = (e) => {
    const t = {};
    let r, n, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (a) {
            (o = a.indexOf(":")),
              (r = a.substring(0, o).trim().toLowerCase()),
              (n = a.substring(o + 1).trim()),
              !(!r || (t[r] && qb[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ", " + n : n));
          }),
      t
    );
  },
  Am = Symbol("internals");
function Xo(e) {
  return e && String(e).trim().toLowerCase();
}
function Ja(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(Ja) : String(e);
}
function Jb(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = r.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const Zb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function fc(e, t, r, n, o) {
  if (C.isFunction(n)) return n.call(this, t, r);
  if ((o && (t = r), !!C.isString(t))) {
    if (C.isString(n)) return t.indexOf(n) !== -1;
    if (C.isRegExp(n)) return n.test(t);
  }
}
function e$(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function t$(e, t) {
  const r = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function (o, i, a) {
        return this[n].call(this, t, o, i, a);
      },
      configurable: !0,
    });
  });
}
class Vs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function i(l, s, u) {
      const f = Xo(s);
      if (!f) throw new Error("header name must be a non-empty string");
      const c = C.findKey(o, f);
      (!c || o[c] === void 0 || u === !0 || (u === void 0 && o[c] !== !1)) &&
        (o[c || s] = Ja(l));
    }
    const a = (l, s) => C.forEach(l, (u, f) => i(u, f, s));
    return (
      C.isPlainObject(t) || t instanceof this.constructor
        ? a(t, r)
        : C.isString(t) && (t = t.trim()) && !Zb(t)
          ? a(Xb(t), r)
          : t != null && i(r, t, n),
      this
    );
  }
  get(t, r) {
    if (((t = Xo(t)), t)) {
      const n = C.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r) return o;
        if (r === !0) return Jb(o);
        if (C.isFunction(r)) return r.call(this, o, n);
        if (C.isRegExp(r)) return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = Xo(t)), t)) {
      const n = C.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || fc(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function i(a) {
      if (((a = Xo(a)), a)) {
        const l = C.findKey(n, a);
        l && (!r || fc(n, n[l], l, r)) && (delete n[l], (o = !0));
      }
    }
    return C.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length,
      o = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || fc(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const r = this,
      n = {};
    return (
      C.forEach(this, (o, i) => {
        const a = C.findKey(n, i);
        if (a) {
          (r[a] = Ja(o)), delete r[i];
          return;
        }
        const l = t ? e$(i) : String(i).trim();
        l !== i && delete r[i], (r[l] = Ja(o)), (n[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      C.forEach(this, (n, o) => {
        n != null && n !== !1 && (r[o] = t && C.isArray(n) ? n.join(", ") : n);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Am] = this[Am] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const l = Xo(a);
      n[l] || (t$(o, a), (n[l] = !0));
    }
    return C.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Vs.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.reduceDescriptors(Vs.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    },
  };
});
C.freezeMethods(Vs);
const vr = Vs;
function dc(e, t) {
  const r = this || cp,
    n = t || r,
    o = vr.from(n.headers);
  let i = n.data;
  return (
    C.forEach(e, function (l) {
      i = l.call(r, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function x1(e) {
  return !!(e && e.__CANCEL__);
}
function na(e, t, r) {
  X.call(this, e ?? "canceled", X.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
C.inherits(na, X, { __CANCEL__: !0 });
function r$(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status)
    ? e(r)
    : t(
        new X(
          "Request failed with status code " + r.status,
          [X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
const n$ = er.hasStandardBrowserEnv
  ? {
      write(e, t, r, n, o, i) {
        const a = [e + "=" + encodeURIComponent(t)];
        C.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
          C.isString(n) && a.push("path=" + n),
          C.isString(o) && a.push("domain=" + o),
          i === !0 && a.push("secure"),
          (document.cookie = a.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function o$(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function i$(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function b1(e, t) {
  return e && !o$(t) ? i$(e, t) : t;
}
const a$ = er.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        r = document.createElement("a");
      let n;
      function o(i) {
        let a = i;
        return (
          t && (r.setAttribute("href", a), (a = r.href)),
          r.setAttribute("href", a),
          {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, "") : "",
            hash: r.hash ? r.hash.replace(/^#/, "") : "",
            hostname: r.hostname,
            port: r.port,
            pathname:
              r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname,
          }
        );
      }
      return (
        (n = o(window.location.href)),
        function (a) {
          const l = C.isString(a) ? o(a) : a;
          return l.protocol === n.protocol && l.host === n.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function l$(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function s$(e, t) {
  e = e || 10;
  const r = new Array(e),
    n = new Array(e);
  let o = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        f = n[i];
      a || (a = u), (r[o] = s), (n[o] = u);
      let c = i,
        d = 0;
      for (; c !== o; ) (d += r[c++]), (c = c % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - a < t)) return;
      const w = f && u - f;
      return w ? Math.round((d * 1e3) / w) : void 0;
    }
  );
}
function Dm(e, t) {
  let r = 0;
  const n = s$(50, 250);
  return (o) => {
    const i = o.loaded,
      a = o.lengthComputable ? o.total : void 0,
      l = i - r,
      s = n(l),
      u = i <= a;
    r = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: s || void 0,
      estimated: s && a && u ? (a - i) / s : void 0,
      event: o,
    };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const u$ = typeof XMLHttpRequest < "u",
  c$ =
    u$ &&
    function (e) {
      return new Promise(function (r, n) {
        let o = e.data;
        const i = vr.from(e.headers).normalize();
        let { responseType: a, withXSRFToken: l } = e,
          s;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener("abort", s);
        }
        let f;
        if (C.isFormData(o)) {
          if (er.hasStandardBrowserEnv || er.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((f = i.getContentType()) !== !1) {
            const [m, ...y] = f
              ? f
                  .split(";")
                  .map((h) => h.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([m || "multipart/form-data", ...y].join("; "));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const m = e.auth.username || "",
            y = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(m + ":" + y));
        }
        const d = b1(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), _1(d, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function w() {
          if (!c) return;
          const m = vr.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders(),
            ),
            h = {
              data:
                !a || a === "text" || a === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: m,
              config: e,
              request: c,
            };
          r$(
            function (g) {
              r(g), u();
            },
            function (g) {
              n(g), u();
            },
            h,
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = w)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(w);
              }),
          (c.onabort = function () {
            c &&
              (n(new X("Request aborted", X.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            n(new X("Network Error", X.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let y = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const h = e.transitional || E1;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
              n(
                new X(
                  y,
                  h.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED,
                  e,
                  c,
                ),
              ),
              (c = null);
          }),
          er.hasStandardBrowserEnv &&
            (l && C.isFunction(l) && (l = l(e)), l || (l !== !1 && a$(d))))
        ) {
          const m =
            e.xsrfHeaderName && e.xsrfCookieName && n$.read(e.xsrfCookieName);
          m && i.set(e.xsrfHeaderName, m);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in c &&
            C.forEach(i.toJSON(), function (y, h) {
              c.setRequestHeader(h, y);
            }),
          C.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          a && a !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", Dm(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Dm(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (m) => {
              c &&
                (n(!m || m.type ? new na(null, e, c) : m),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
        const v = l$(d);
        if (v && er.protocols.indexOf(v) === -1) {
          n(new X("Unsupported protocol " + v + ":", X.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  Tf = { http: jb, xhr: c$ };
C.forEach(Tf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Lm = (e) => `- ${e}`,
  f$ = (e) => C.isFunction(e) || e === null || e === !1,
  $1 = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let r, n;
      const o = {};
      for (let i = 0; i < t; i++) {
        r = e[i];
        let a;
        if (
          ((n = r),
          !f$(r) && ((n = Tf[(a = String(r)).toLowerCase()]), n === void 0))
        )
          throw new X(`Unknown adapter '${a}'`);
        if (n) break;
        o[a || "#" + i] = n;
      }
      if (!n) {
        const i = Object.entries(o).map(
          ([l, s]) =>
            `adapter ${l} ` +
            (s === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let a = t
          ? i.length > 1
            ? `since :
` +
              i.map(Lm).join(`
`)
            : " " + Lm(i[0])
          : "as no adapter specified";
        throw new X(
          "There is no suitable adapter to dispatch the request " + a,
          "ERR_NOT_SUPPORT",
        );
      }
      return n;
    },
    adapters: Tf,
  };
function pc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new na(null, e);
}
function Mm(e) {
  return (
    pc(e),
    (e.headers = vr.from(e.headers)),
    (e.data = dc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    $1
      .getAdapter(e.adapter || cp.adapter)(e)
      .then(
        function (n) {
          return (
            pc(e),
            (n.data = dc.call(e, e.transformResponse, n)),
            (n.headers = vr.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            x1(n) ||
              (pc(e),
              n &&
                n.response &&
                ((n.response.data = dc.call(
                  e,
                  e.transformResponse,
                  n.response,
                )),
                (n.response.headers = vr.from(n.response.headers)))),
            Promise.reject(n)
          );
        },
      )
  );
}
const Fm = (e) => (e instanceof vr ? e.toJSON() : e);
function Po(e, t) {
  t = t || {};
  const r = {};
  function n(u, f, c) {
    return C.isPlainObject(u) && C.isPlainObject(f)
      ? C.merge.call({ caseless: c }, u, f)
      : C.isPlainObject(f)
        ? C.merge({}, f)
        : C.isArray(f)
          ? f.slice()
          : f;
  }
  function o(u, f, c) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(u)) return n(void 0, u, c);
    } else return n(u, f, c);
  }
  function i(u, f) {
    if (!C.isUndefined(f)) return n(void 0, f);
  }
  function a(u, f) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(u)) return n(void 0, u);
    } else return n(void 0, f);
  }
  function l(u, f, c) {
    if (c in t) return n(u, f);
    if (c in e) return n(void 0, u);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, f) => o(Fm(u), Fm(f), !0),
  };
  return (
    C.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const c = s[f] || o,
        d = c(e[f], t[f], f);
      (C.isUndefined(d) && c !== l) || (r[f] = d);
    }),
    r
  );
}
const C1 = "1.6.2",
  fp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    fp[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const Um = {};
fp.transitional = function (t, r, n) {
  function o(i, a) {
    return (
      "[Axios v" +
      C1 +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (n ? ". " + n : "")
    );
  }
  return (i, a, l) => {
    if (t === !1)
      throw new X(
        o(a, " has been removed" + (r ? " in " + r : "")),
        X.ERR_DEPRECATED,
      );
    return (
      r &&
        !Um[a] &&
        ((Um[a] = !0),
        console.warn(
          o(
            a,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, a, l) : !0
    );
  };
};
function d$(e, t, r) {
  if (typeof e != "object")
    throw new X("options must be an object", X.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o],
      a = t[i];
    if (a) {
      const l = e[i],
        s = l === void 0 || a(l, i, e);
      if (s !== !0)
        throw new X("option " + i + " must be " + s, X.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new X("Unknown option " + i, X.ERR_BAD_OPTION);
  }
}
const If = { assertOptions: d$, validators: fp },
  Rr = If.validators;
class Kl {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new zm(), response: new zm() });
  }
  request(t, r) {
    typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = Po(this.defaults, r));
    const { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 &&
      If.assertOptions(
        n,
        {
          silentJSONParsing: Rr.transitional(Rr.boolean),
          forcedJSONParsing: Rr.transitional(Rr.boolean),
          clarifyTimeoutError: Rr.transitional(Rr.boolean),
        },
        !1,
      ),
      o != null &&
        (C.isFunction(o)
          ? (r.paramsSerializer = { serialize: o })
          : If.assertOptions(
              o,
              { encode: Rr.function, serialize: Rr.function },
              !0,
            )),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let a = i && C.merge(i.common, i[r.method]);
    i &&
      C.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete i[v];
        },
      ),
      (r.headers = vr.concat(a, i));
    const l = [];
    let s = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(r) === !1) ||
        ((s = s && m.synchronous), l.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (m) {
      u.push(m.fulfilled, m.rejected);
    });
    let f,
      c = 0,
      d;
    if (!s) {
      const v = [Mm.bind(this), void 0];
      for (
        v.unshift.apply(v, l),
          v.push.apply(v, u),
          d = v.length,
          f = Promise.resolve(r);
        c < d;

      )
        f = f.then(v[c++], v[c++]);
      return f;
    }
    d = l.length;
    let w = r;
    for (c = 0; c < d; ) {
      const v = l[c++],
        m = l[c++];
      try {
        w = v(w);
      } catch (y) {
        m.call(this, y);
        break;
      }
    }
    try {
      f = Mm.call(this, w);
    } catch (v) {
      return Promise.reject(v);
    }
    for (c = 0, d = u.length; c < d; ) f = f.then(u[c++], u[c++]);
    return f;
  }
  getUri(t) {
    t = Po(this.defaults, t);
    const r = b1(t.baseURL, t.url);
    return _1(r, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (t) {
  Kl.prototype[t] = function (r, n) {
    return this.request(
      Po(n || {}, { method: t, url: r, data: (n || {}).data }),
    );
  };
});
C.forEach(["post", "put", "patch"], function (t) {
  function r(n) {
    return function (i, a, l) {
      return this.request(
        Po(l || {}, {
          method: t,
          headers: n ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        }),
      );
    };
  }
  (Kl.prototype[t] = r()), (Kl.prototype[t + "Form"] = r(!0));
});
const Za = Kl;
class dp {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (i) {
      r = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; ) n._listeners[i](o);
      n._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const a = new Promise((l) => {
          n.subscribe(l), (i = l);
        }).then(o);
        return (
          (a.cancel = function () {
            n.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, l) {
        n.reason || ((n.reason = new na(i, a, l)), r(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  static source() {
    let t;
    return {
      token: new dp(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const p$ = dp;
function h$(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function m$(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const jf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(jf).forEach(([e, t]) => {
  jf[t] = e;
});
const y$ = jf;
function k1(e) {
  const t = new Za(e),
    r = u1(Za.prototype.request, t);
  return (
    C.extend(r, Za.prototype, t, { allOwnKeys: !0 }),
    C.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (o) {
      return k1(Po(e, o));
    }),
    r
  );
}
const Re = k1(cp);
Re.Axios = Za;
Re.CanceledError = na;
Re.CancelToken = p$;
Re.isCancel = x1;
Re.VERSION = C1;
Re.toFormData = Bs;
Re.AxiosError = X;
Re.Cancel = Re.CanceledError;
Re.all = function (t) {
  return Promise.all(t);
};
Re.spread = h$;
Re.isAxiosError = m$;
Re.mergeConfig = Po;
Re.AxiosHeaders = vr;
Re.formToJSON = (e) => O1(C.isHTMLForm(e) ? new FormData(e) : e);
Re.getAdapter = $1.getAdapter;
Re.HttpStatusCode = y$;
Re.default = Re;
const R1 = Re,
  Ca = {
    VITE_url: "https://api.ithnain.com",
    VITE_token: "c5ea0eb92f3ff798cbbfb8ace2058874",
    VITE_thirdPartyId: "35943346-c270-473b-b935-fd02456ad1c9",
    VITE_returnUrl: "https://webapp.ithnain.com",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
  };
class N1 {
  constructor() {
    zp(this, "instance");
    console.log("IBconfig"),
      console.log(Ca),
      (this.instance = R1.create({
        baseURL: Ca.VITE_url,
        timeout: 1e4,
        headers: { Authorization: `Bearer ${`${Ca.VITE_token}`}` },
        params: { thirdPartyId: Ca.VITE_thirdPartyId },
      }));
  }
  async get(t) {
    try {
      const r = await this.instance.get(t);
      return this.responseBody(r);
    } catch (r) {
      return this.catchError(r);
    }
  }
  async post(t, r, n) {
    try {
      const o = await this.instance.post(t, r, n);
      return this.responseBody(o);
    } catch (o) {
      return this.catchError(o);
    }
  }
  async patch(t, r) {
    try {
      const n = await this.instance.patch(t, r);
      return this.responseBody(n);
    } catch (n) {
      return this.catchError(n);
    }
  }
  responseBody(t) {
    return (
      console.log(`Receive a response from ${t.config} and Data is: ${t.data}`),
      { data: t.data, status: t.status }
    );
  }
  catchError(t) {
    if (t.response) {
      if (
        (console.error(`catch an error ${JSON.stringify(t.response.data)}`),
        t.response.data.error === "patient does not exist")
      )
        return console.log("patient doesn't exists"), t.response;
      if (t.response.data.error === "user does not exist")
        return console.log("user doesn't exists"), t.response;
    } else
      t.request
        ? console.error(`catch an error ${t.request}`)
        : console.error(`catch an error ${t.message}`);
  }
}
const Ws = new N1(),
  g$ = {
    patient: {},
    isAuth: !1,
    id: "",
    token: "",
    loading: !1,
    error: !1,
    isCodeSent: !1,
    isExisting: !1,
    verificationCode: "",
    isInDatabase: !1,
    isPatientExist: !1,
    loadingPatientExist: !1,
    errorPatientExist: "",
    userName: "",
  },
  hc = an(
    "auth/isExist",
    async (
      { name: e, phone: t, navigate: r },
      { dispatch: n, rejectWithValue: o },
    ) => {
      try {
        const i = await Ws.post("/isExist", { phoneNumber: t });
        if ((console.log("response"), console.log(i), !i)) return o("");
        if (
          (i == null ? void 0 : i.status) === 201 ||
          (i == null ? void 0 : i.status) === 404
        ) {
          if ((console.log("inside1"), i != null && i.data.patient))
            return (
              console.log("inside3"),
              n(po({ name: e, phone: t })),
              r("/otp", { state: { signUp: !1 } }),
              i == null ? void 0 : i.data.patient
            );
          if (i != null && i.data.error)
            return (
              console.log("inside2"),
              n(po({ name: e, phone: t })),
              r("/otp", { state: { signUp: !0 } }),
              {
                error: i == null ? void 0 : i.data.error,
                signUp: !0,
                patientName: e,
                patientPhone: "+966" + t,
              }
            );
        } else return o(i);
      } catch (i) {
        return o(i.message);
      }
    },
  ),
  po = an("auth/verifyPhone", async ({ phone: e }, { rejectWithValue: t }) => {
    try {
      const r = await Ws.post("/verifyPhone", { phoneNumber: e });
      return r
        ? (r == null ? void 0 : r.status) === 201
          ? r == null
            ? void 0
            : r.data.patient
          : t(r)
        : t("");
    } catch (r) {
      return t(r.message);
    }
  }),
  el = an(
    "patient/createPatientAction",
    async (
      { name: e, phone: t, referralCode: r, navigate: n },
      { rejectWithValue: o, dispatch: i },
    ) => {
      var l, s;
      const a = await Ws.post("/patient", {
        name: e,
        phone: t,
        referralCode: r,
        referralMedium: "Web Portal",
      });
      if (!a) return o("");
      if ((l = a == null ? void 0 : a.data) != null && l.error)
        return o(a.data.error);
      if (a.data) {
        const { patient: u, isExisting: f } = a.data,
          c = JSON.parse(u);
        return (
          i(w$(c.id)),
          i(S$(c.token)),
          n("/choosePlan"),
          { patient: c, isExisting: f }
        );
      }
      return o(
        (s = a == null ? void 0 : a.data) == null ? void 0 : s.statusText,
      );
    },
  ),
  v$ = an("auth/setSignUpStatus", async (e, t) => {
    try {
      console.log("insideee logg");
      const { auth: r } = t.getState();
      console.log("signUpStatus"), console.log(e);
      const n = await Ws.patch("/patient", {
        patientId: r.patient.id,
        signUpStatus: e,
      });
      return (
        console.log("response"),
        console.log(n),
        (n == null ? void 0 : n.status) === 201 ? e : t.rejectWithValue(e)
      );
    } catch (r) {
      if (r.response) return t.rejectWithValue(r.response);
    }
  }),
  T1 = Ls({
    name: "auth",
    initialState: g$,
    reducers: {
      setUserIdAction: (e, t) => {
        e.id = t.payload;
      },
      setTokenAction: (e, t) => {
        e.token = t.payload;
      },
      setLoadingAction: (e, t) => {
        e.loadingPatientExist = t.payload;
      },
    },
    extraReducers: (e) => {
      e.addCase(po.pending, (t) => {
        (t.loading = !0), (t.error = !1);
      })
        .addCase(po.fulfilled, (t, r) => {
          (t.loading = !1),
            (t.isCodeSent = !0),
            (t.verificationCode = r.payload.chatId),
            (t.isInDatabase = r.payload.isExisting);
        })
        .addCase(po.rejected, (t) => {
          (t.loading = !1), (t.error = !0);
        })
        .addCase(hc.pending, (t) => {
          (t.loadingPatientExist = !0),
            (t.errorPatientExist = ""),
            (t.isPatientExist = !1);
        })
        .addCase(hc.fulfilled, (t, r) => {
          (t.loadingPatientExist = !1),
            (t.isPatientExist = r.payload.isPatientExist),
            (t.userName = r.payload.patientName),
            (t.patient = r.payload);
        })
        .addCase(hc.rejected, (t, r) => {
          var n, o, i, a, l;
          (t.loadingPatientExist = !1),
            r != null &&
            r.payload &&
            (n = r == null ? void 0 : r.payload) != null &&
            n.data &&
            (i = (o = r.payload) == null ? void 0 : o.data) != null &&
            i.error
              ? (t.errorPatientExist =
                  (l = (a = r.payload) == null ? void 0 : a.data) == null
                    ? void 0
                    : l.error)
              : (t.errorPatientExist = "Server error");
        })
        .addCase(el.pending, (t) => {
          (t.loadingPatientExist = !0), (t.error = !1);
        })
        .addCase(el.fulfilled, (t, r) => {
          const { isExisting: n, patient: o } = r.payload;
          n && (t.isExisting = n),
            (t.loadingPatientExist = !1),
            (t.patient = o);
        })
        .addCase(el.rejected, (t) => {
          (t.loadingPatientExist = !1), (t.error = !0);
        });
    },
  }),
  {
    setUserIdAction: w$,
    setTokenAction: S$,
    setLoadingAction: tT,
  } = T1.actions,
  _$ = T1.reducer,
  E$ = { users: [], status: "idle", error: null },
  mc = an("user/fetchAllUsers", async (e, t) => {
    try {
      return (await R1.get("https://jsonplaceholder.typicode.com/users")).data;
    } catch (r) {
      return t.rejectWithValue(r.message);
    }
  }),
  P$ = Ls({
    name: "user",
    initialState: E$,
    reducers: {},
    extraReducers: (e) => {
      e.addCase("auth/logout", (t) => {
        (t.users = []), (t.status = "idle"), (t.error = null);
      })
        .addCase(mc.pending, (t) => {
          var r;
          ((r = t.users) == null ? void 0 : r.length) === 0 &&
            (t.status = "pending");
        })
        .addCase(mc.fulfilled, (t, r) => {
          var n;
          ((n = t.users) == null ? void 0 : n.length) === 0 &&
            (t.users = r.payload),
            (t.status = "succeeded");
        })
        .addCase(mc.rejected, (t) => {
          (t.status = "failed"), (t.error = "Something went wrong!");
        });
    },
  }),
  O$ = P$.reducer,
  pp = new N1(),
  x$ = {
    id: "",
    invoice: {},
    loading: !1,
    error: !1,
    invoiceUrl: "",
    verifyInvoiceStatus: "",
  },
  yc = an(
    "plan/createInvoice",
    async ({ intensityId: e, description: t, patientEmail: r }, n) => {
      try {
        const { auth: o } = n.getState(),
          i = {
            VITE_url: "https://api.ithnain.com",
            VITE_token: "c5ea0eb92f3ff798cbbfb8ace2058874",
            VITE_thirdPartyId: "35943346-c270-473b-b935-fd02456ad1c9",
            VITE_returnUrl: "https://webapp.ithnain.com",
            BASE_URL: "/",
            MODE: "production",
            DEV: !1,
            PROD: !0,
            SSR: !1,
          };
        console.log("auth"), console.log(o.patient.id);
        const a = await pp.post("/invoices", {
          patientId: o.patient.id,
          topics: [{ id: "DEFAULT" }],
          description: t,
          intensityId: e,
          originFromPatient: !0,
          returnUrl: i.VITE_returnUrl,
          patientEmail: r || null,
        });
        if (!a) return n.rejectWithValue("Server error");
        if ((a == null ? void 0 : a.status) === 201) {
          console.log(`response createInvoiceAction 
`),
            console.log(a);
          const l = JSON.parse(a.data.invoice);
          return (
            n.dispatch(b$(l.id)),
            n.dispatch($$(a.data.invoiceUrl)),
            setTimeout(() => {
              window.location.replace(a.data.invoiceUrl);
            }, 500),
            l
          );
        }
        return n.rejectWithValue(a);
      } catch (o) {
        if (o.response) return n.rejectWithValue(o.response);
      }
    },
  ),
  gc = an("invoice/getInvoiceUrl", async ({ id: e }, t) => {
    var r, n;
    try {
      const { auth: o } = t.getState(),
        i = await pp.get(
          `/invoices?get=invoice&invoiceId=${e}&patientId=${o.patient.id}`,
        );
      if (!i) return t.rejectWithValue("Server error");
      if ((r = i.data) != null && r.error)
        return t.rejectWithValue(i.data.error);
      if (((n = i.data) == null ? void 0 : n.status) === "successful")
        return t.dispatch(v$("needCoach")), i.data;
    } catch (o) {
      if (o.response) return t.rejectWithValue(o.response);
    }
  }),
  vc = an(
    "invoice/verifyPaymentAction",
    async (
      {
        tranRef: e,
        order_reference_id: t,
        order_id: r,
        ref: n,
        toggleModalSuccess: o,
        toggleModalFailed: i,
        navigate: a,
      },
      l,
    ) => {
      var s, u, f;
      try {
        const c = await pp.post(`/referral?ref=${n}`, {
          tranRef: e,
          order_reference_id: t,
          order_id: r,
          fromWebapp: !0,
        });
        if (!c) return l.rejectWithValue("Server error");
        if (((s = c.data) == null ? void 0 : s.message) !== "successful")
          return l.rejectWithValue((u = c.data) == null ? void 0 : u.message);
        if (c.data)
          return (
            ((f = c.data) == null ? void 0 : f.message) === "successful"
              ? (o(),
                setTimeout(() => {
                  a("/invoice");
                }, 1500))
              : i(),
            c.data
          );
      } catch (c) {
        if (c != null && c.response) return l.rejectWithValue(c.response);
      }
    },
  ),
  I1 = Ls({
    name: "invoice",
    initialState: x$,
    reducers: {
      setInvoiceIdAction: (e, t) => {
        e.id = t.payload;
      },
      setInvoiceUrlAction: (e, t) => {
        e.invoiceUrl = t.payload;
      },
    },
    extraReducers: (e) => {
      e.addCase(yc.pending, (t) => {
        (t.loading = !0), (t.error = !1);
      })
        .addCase(yc.fulfilled, (t, r) => {
          (t.loading = !1), (t.invoice = r.payload);
        })
        .addCase(yc.rejected, (t) => {
          (t.loading = !1), (t.error = !0);
        })
        .addCase(gc.pending, (t) => {
          (t.loading = !0), (t.error = !1);
        })
        .addCase(gc.fulfilled, (t, r) => {
          (t.loading = !1), (t.invoice = r.payload);
        })
        .addCase(gc.rejected, (t) => {
          (t.loading = !1), (t.error = !0);
        })
        .addCase(vc.pending, (t) => {
          (t.loading = !0), (t.error = !1);
        })
        .addCase(vc.fulfilled, (t) => {
          (t.loading = !1), (t.verifyInvoiceStatus = "successful");
        })
        .addCase(vc.rejected, (t) => {
          (t.loading = !1), (t.error = !0), (t.verifyInvoiceStatus = "failed");
        });
    },
  }),
  { setInvoiceIdAction: b$, setInvoiceUrlAction: $$ } = I1.actions,
  C$ = I1.reducer,
  j1 = { key: "root", storage: s1 },
  k$ = zx(j1, { auth: _$, counter: Zx, user: O$, invoice: C$ }),
  R$ = a1(j1, k$),
  z1 = sx({ reducer: R$, devTools: !0 }),
  N$ = Ux(z1);
var A1 = { exports: {} },
  D1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oo = _;
function T$(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var I$ = typeof Object.is == "function" ? Object.is : T$,
  j$ = Oo.useState,
  z$ = Oo.useEffect,
  A$ = Oo.useLayoutEffect,
  D$ = Oo.useDebugValue;
function L$(e, t) {
  var r = t(),
    n = j$({ inst: { value: r, getSnapshot: t } }),
    o = n[0].inst,
    i = n[1];
  return (
    A$(
      function () {
        (o.value = r), (o.getSnapshot = t), wc(o) && i({ inst: o });
      },
      [e, r, t],
    ),
    z$(
      function () {
        return (
          wc(o) && i({ inst: o }),
          e(function () {
            wc(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    D$(r),
    r
  );
}
function wc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !I$(e, r);
  } catch {
    return !0;
  }
}
function M$(e, t) {
  return t();
}
var F$ =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? M$
    : L$;
D1.useSyncExternalStore =
  Oo.useSyncExternalStore !== void 0 ? Oo.useSyncExternalStore : F$;
A1.exports = D1;
var U$ = A1.exports,
  L1 = { exports: {} },
  M1 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hs = _,
  B$ = U$;
function V$(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var W$ = typeof Object.is == "function" ? Object.is : V$,
  H$ = B$.useSyncExternalStore,
  K$ = Hs.useRef,
  G$ = Hs.useEffect,
  Q$ = Hs.useMemo,
  Y$ = Hs.useDebugValue;
M1.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
  var i = K$(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else a = i.current;
  i = Q$(
    function () {
      function s(w) {
        if (!u) {
          if (((u = !0), (f = w), (w = n(w)), o !== void 0 && a.hasValue)) {
            var v = a.value;
            if (o(v, w)) return (c = v);
          }
          return (c = w);
        }
        if (((v = c), W$(f, w))) return v;
        var m = n(w);
        return o !== void 0 && o(v, m) ? v : ((f = w), (c = m));
      }
      var u = !1,
        f,
        c,
        d = r === void 0 ? null : r;
      return [
        function () {
          return s(t());
        },
        d === null
          ? void 0
          : function () {
              return s(d());
            },
      ];
    },
    [t, r, n, o],
  );
  var l = H$(e, i[0], i[1]);
  return (
    G$(
      function () {
        (a.hasValue = !0), (a.value = l);
      },
      [l],
    ),
    Y$(l),
    l
  );
};
L1.exports = M1;
var q$ = L1.exports;
function X$(e) {
  e();
}
let F1 = X$;
const J$ = (e) => (F1 = e),
  Z$ = () => F1,
  tn = _.createContext(null);
function U1() {
  return _.useContext(tn);
}
const e2 = () => {
  throw new Error("uSES not initialized!");
};
let B1 = e2;
const t2 = (e) => {
    B1 = e;
  },
  r2 = (e, t) => e === t;
function n2(e = tn) {
  const t = e === tn ? U1 : () => _.useContext(e);
  return function (n, o = r2) {
    const { store: i, subscription: a, getServerState: l } = t(),
      s = B1(a.addNestedSub, i.getState, l || i.getState, n, o);
    return _.useDebugValue(s), s;
  };
}
const o2 = n2();
function zf() {
  return (
    (zf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    zf.apply(this, arguments)
  );
}
var V1 = { exports: {} },
  se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Me = typeof Symbol == "function" && Symbol.for,
  hp = Me ? Symbol.for("react.element") : 60103,
  mp = Me ? Symbol.for("react.portal") : 60106,
  Ks = Me ? Symbol.for("react.fragment") : 60107,
  Gs = Me ? Symbol.for("react.strict_mode") : 60108,
  Qs = Me ? Symbol.for("react.profiler") : 60114,
  Ys = Me ? Symbol.for("react.provider") : 60109,
  qs = Me ? Symbol.for("react.context") : 60110,
  yp = Me ? Symbol.for("react.async_mode") : 60111,
  Xs = Me ? Symbol.for("react.concurrent_mode") : 60111,
  Js = Me ? Symbol.for("react.forward_ref") : 60112,
  Zs = Me ? Symbol.for("react.suspense") : 60113,
  i2 = Me ? Symbol.for("react.suspense_list") : 60120,
  eu = Me ? Symbol.for("react.memo") : 60115,
  tu = Me ? Symbol.for("react.lazy") : 60116,
  a2 = Me ? Symbol.for("react.block") : 60121,
  l2 = Me ? Symbol.for("react.fundamental") : 60117,
  s2 = Me ? Symbol.for("react.responder") : 60118,
  u2 = Me ? Symbol.for("react.scope") : 60119;
function Ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case hp:
        switch (((e = e.type), e)) {
          case yp:
          case Xs:
          case Ks:
          case Qs:
          case Gs:
          case Zs:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case qs:
              case Js:
              case tu:
              case eu:
              case Ys:
                return e;
              default:
                return t;
            }
        }
      case mp:
        return t;
    }
  }
}
function W1(e) {
  return Ot(e) === Xs;
}
se.AsyncMode = yp;
se.ConcurrentMode = Xs;
se.ContextConsumer = qs;
se.ContextProvider = Ys;
se.Element = hp;
se.ForwardRef = Js;
se.Fragment = Ks;
se.Lazy = tu;
se.Memo = eu;
se.Portal = mp;
se.Profiler = Qs;
se.StrictMode = Gs;
se.Suspense = Zs;
se.isAsyncMode = function (e) {
  return W1(e) || Ot(e) === yp;
};
se.isConcurrentMode = W1;
se.isContextConsumer = function (e) {
  return Ot(e) === qs;
};
se.isContextProvider = function (e) {
  return Ot(e) === Ys;
};
se.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === hp;
};
se.isForwardRef = function (e) {
  return Ot(e) === Js;
};
se.isFragment = function (e) {
  return Ot(e) === Ks;
};
se.isLazy = function (e) {
  return Ot(e) === tu;
};
se.isMemo = function (e) {
  return Ot(e) === eu;
};
se.isPortal = function (e) {
  return Ot(e) === mp;
};
se.isProfiler = function (e) {
  return Ot(e) === Qs;
};
se.isStrictMode = function (e) {
  return Ot(e) === Gs;
};
se.isSuspense = function (e) {
  return Ot(e) === Zs;
};
se.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ks ||
    e === Xs ||
    e === Qs ||
    e === Gs ||
    e === Zs ||
    e === i2 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === tu ||
        e.$$typeof === eu ||
        e.$$typeof === Ys ||
        e.$$typeof === qs ||
        e.$$typeof === Js ||
        e.$$typeof === l2 ||
        e.$$typeof === s2 ||
        e.$$typeof === u2 ||
        e.$$typeof === a2))
  );
};
se.typeOf = Ot;
V1.exports = se;
var c2 = V1.exports,
  H1 = c2,
  f2 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  d2 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  K1 = {};
K1[H1.ForwardRef] = f2;
K1[H1.Memo] = d2;
var ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp = Symbol.for("react.element"),
  vp = Symbol.for("react.portal"),
  ru = Symbol.for("react.fragment"),
  nu = Symbol.for("react.strict_mode"),
  ou = Symbol.for("react.profiler"),
  iu = Symbol.for("react.provider"),
  au = Symbol.for("react.context"),
  p2 = Symbol.for("react.server_context"),
  lu = Symbol.for("react.forward_ref"),
  su = Symbol.for("react.suspense"),
  uu = Symbol.for("react.suspense_list"),
  cu = Symbol.for("react.memo"),
  fu = Symbol.for("react.lazy"),
  h2 = Symbol.for("react.offscreen"),
  G1;
G1 = Symbol.for("react.module.reference");
function zt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gp:
        switch (((e = e.type), e)) {
          case ru:
          case ou:
          case nu:
          case su:
          case uu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case p2:
              case au:
              case lu:
              case fu:
              case cu:
              case iu:
                return e;
              default:
                return t;
            }
        }
      case vp:
        return t;
    }
  }
}
ce.ContextConsumer = au;
ce.ContextProvider = iu;
ce.Element = gp;
ce.ForwardRef = lu;
ce.Fragment = ru;
ce.Lazy = fu;
ce.Memo = cu;
ce.Portal = vp;
ce.Profiler = ou;
ce.StrictMode = nu;
ce.Suspense = su;
ce.SuspenseList = uu;
ce.isAsyncMode = function () {
  return !1;
};
ce.isConcurrentMode = function () {
  return !1;
};
ce.isContextConsumer = function (e) {
  return zt(e) === au;
};
ce.isContextProvider = function (e) {
  return zt(e) === iu;
};
ce.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === gp;
};
ce.isForwardRef = function (e) {
  return zt(e) === lu;
};
ce.isFragment = function (e) {
  return zt(e) === ru;
};
ce.isLazy = function (e) {
  return zt(e) === fu;
};
ce.isMemo = function (e) {
  return zt(e) === cu;
};
ce.isPortal = function (e) {
  return zt(e) === vp;
};
ce.isProfiler = function (e) {
  return zt(e) === ou;
};
ce.isStrictMode = function (e) {
  return zt(e) === nu;
};
ce.isSuspense = function (e) {
  return zt(e) === su;
};
ce.isSuspenseList = function (e) {
  return zt(e) === uu;
};
ce.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ru ||
    e === ou ||
    e === nu ||
    e === su ||
    e === uu ||
    e === h2 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === fu ||
        e.$$typeof === cu ||
        e.$$typeof === iu ||
        e.$$typeof === au ||
        e.$$typeof === lu ||
        e.$$typeof === G1 ||
        e.getModuleId !== void 0))
  );
};
ce.typeOf = zt;
function m2() {
  const e = Z$();
  let t = null,
    r = null;
  return {
    clear() {
      (t = null), (r = null);
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      let n = [],
        o = t;
      for (; o; ) n.push(o), (o = o.next);
      return n;
    },
    subscribe(n) {
      let o = !0,
        i = (r = { callback: n, next: null, prev: r });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (r = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const Bm = { notify() {}, get: () => [] };
function y2(e, t) {
  let r,
    n = Bm;
  function o(c) {
    return s(), n.subscribe(c);
  }
  function i() {
    n.notify();
  }
  function a() {
    f.onStateChange && f.onStateChange();
  }
  function l() {
    return !!r;
  }
  function s() {
    r || ((r = t ? t.addNestedSub(a) : e.subscribe(a)), (n = m2()));
  }
  function u() {
    r && (r(), (r = void 0), n.clear(), (n = Bm));
  }
  const f = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: a,
    isSubscribed: l,
    trySubscribe: s,
    tryUnsubscribe: u,
    getListeners: () => n,
  };
  return f;
}
const g2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  v2 = g2 ? _.useLayoutEffect : _.useEffect;
function w2({ store: e, context: t, children: r, serverState: n }) {
  const o = _.useMemo(() => {
      const l = y2(e);
      return {
        store: e,
        subscription: l,
        getServerState: n ? () => n : void 0,
      };
    }, [e, n]),
    i = _.useMemo(() => e.getState(), [e]);
  v2(() => {
    const { subscription: l } = o;
    return (
      (l.onStateChange = l.notifyNestedSubs),
      l.trySubscribe(),
      i !== e.getState() && l.notifyNestedSubs(),
      () => {
        l.tryUnsubscribe(), (l.onStateChange = void 0);
      }
    );
  }, [o, i]);
  const a = t || tn;
  return N.createElement(a.Provider, { value: o }, r);
}
function Q1(e = tn) {
  const t = e === tn ? U1 : () => _.useContext(e);
  return function () {
    const { store: n } = t();
    return n;
  };
}
const S2 = Q1();
function _2(e = tn) {
  const t = e === tn ? S2 : Q1(e);
  return function () {
    return t().dispatch;
  };
}
const E2 = _2();
t2(q$.useSyncExternalStoreWithSelector);
J$(N0.unstable_batchedUpdates);
function tl(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (tl = function (r) {
          return typeof r;
        })
      : (tl = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    tl(e)
  );
}
function P2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function O2(e, t, r) {
  return t && Vm(e.prototype, t), r && Vm(e, r), e;
}
function x2(e, t) {
  return t && (tl(t) === "object" || typeof t == "function") ? t : rl(e);
}
function Af(e) {
  return (
    (Af = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Af(e)
  );
}
function rl(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function b2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Df(e, t);
}
function Df(e, t) {
  return (
    (Df =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    Df(e, t)
  );
}
function nl(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Y1 = (function (e) {
  b2(t, e);
  function t() {
    var r, n;
    P2(this, t);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (
      (n = x2(this, (r = Af(t)).call.apply(r, [this].concat(i)))),
      nl(rl(n), "state", { bootstrapped: !1 }),
      nl(rl(n), "_unsubscribe", void 0),
      nl(rl(n), "handlePersistorState", function () {
        var l = n.props.persistor,
          s = l.getState(),
          u = s.bootstrapped;
        u &&
          (n.props.onBeforeLift
            ? Promise.resolve(n.props.onBeforeLift()).finally(function () {
                return n.setState({ bootstrapped: !0 });
              })
            : n.setState({ bootstrapped: !0 }),
          n._unsubscribe && n._unsubscribe());
      }),
      n
    );
  }
  return (
    O2(t, [
      {
        key: "componentDidMount",
        value: function () {
          (this._unsubscribe = this.props.persistor.subscribe(
            this.handlePersistorState,
          )),
            this.handlePersistorState();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this._unsubscribe && this._unsubscribe();
        },
      },
      {
        key: "render",
        value: function () {
          return typeof this.props.children == "function"
            ? this.props.children(this.state.bootstrapped)
            : this.state.bootstrapped
              ? this.props.children
              : this.props.loading;
        },
      },
    ]),
    t
  );
})(_.PureComponent);
nl(Y1, "defaultProps", { children: null, loading: null });
function rT(e) {
  return e;
}
function $2(e) {
  return Array.isArray(e) ? e : [e];
}
function q1(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = q1(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function C2() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = q1(t)) && (n && (n += " "), (n += r));
  return n;
}
const k2 = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113",
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529",
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a",
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d",
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c",
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4",
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7",
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab",
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285",
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b",
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e",
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d",
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700",
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f",
  ],
};
function R2(e) {
  return () => ({ fontFamily: e.fontFamily || "sans-serif" });
}
var N2 = Object.defineProperty,
  Wm = Object.getOwnPropertySymbols,
  T2 = Object.prototype.hasOwnProperty,
  I2 = Object.prototype.propertyIsEnumerable,
  Hm = (e, t, r) =>
    t in e
      ? N2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Km = (e, t) => {
    for (var r in t || (t = {})) T2.call(t, r) && Hm(e, r, t[r]);
    if (Wm) for (var r of Wm(t)) I2.call(t, r) && Hm(e, r, t[r]);
    return e;
  };
function j2(e) {
  return (t) => ({
    WebkitTapHighlightColor: "transparent",
    [t || "&:focus"]: Km(
      {},
      e.focusRing === "always" || e.focusRing === "auto"
        ? e.focusRingStyles.styles(e)
        : e.focusRingStyles.resetStyles(e),
    ),
    [t
      ? t.replace(":focus", ":focus:not(:focus-visible)")
      : "&:focus:not(:focus-visible)"]: Km(
      {},
      e.focusRing === "auto" || e.focusRing === "never"
        ? e.focusRingStyles.resetStyles(e)
        : null,
    ),
  });
}
function oa(e) {
  return (t) =>
    typeof e.primaryShade == "number"
      ? e.primaryShade
      : e.primaryShade[t || e.colorScheme];
}
function wp(e) {
  const t = oa(e);
  return (r, n, o = !0, i = !0) => {
    if (typeof r == "string" && r.includes(".")) {
      const [l, s] = r.split("."),
        u = parseInt(s, 10);
      if (l in e.colors && u >= 0 && u < 10)
        return e.colors[l][typeof n == "number" && !i ? n : u];
    }
    const a = typeof n == "number" ? n : t();
    return r in e.colors ? e.colors[r][a] : o ? e.colors[e.primaryColor][a] : r;
  };
}
function X1(e) {
  let t = "";
  for (let r = 1; r < e.length - 1; r += 1)
    t += `${e[r]} ${(r / (e.length - 1)) * 100}%, `;
  return `${e[0]} 0%, ${t}${e[e.length - 1]} 100%`;
}
function z2(e, ...t) {
  return `linear-gradient(${e}deg, ${X1(t)})`;
}
function A2(...e) {
  return `radial-gradient(circle, ${X1(e)})`;
}
function J1(e) {
  const t = wp(e),
    r = oa(e);
  return (n) => {
    const o = {
      from: (n == null ? void 0 : n.from) || e.defaultGradient.from,
      to: (n == null ? void 0 : n.to) || e.defaultGradient.to,
      deg: (n == null ? void 0 : n.deg) || e.defaultGradient.deg,
    };
    return `linear-gradient(${o.deg}deg, ${t(o.from, r(), !1)} 0%, ${t(
      o.to,
      r(),
      !1,
    )} 100%)`;
  };
}
function Z1(e) {
  return (t) => {
    if (typeof t == "number") return `${t / 16}${e}`;
    if (typeof t == "string") {
      const r = t.replace("px", "");
      if (!Number.isNaN(Number(r))) return `${Number(r) / 16}${e}`;
    }
    return t;
  };
}
const z = Z1("rem"),
  du = Z1("em");
function re({ size: e, sizes: t, units: r }) {
  return e in t
    ? t[e]
    : typeof e == "number"
      ? r === "em"
        ? du(e)
        : z(e)
      : e || t.md;
}
function Gl(e) {
  return typeof e == "number"
    ? e
    : typeof e == "string" && e.includes("rem")
      ? Number(e.replace("rem", "")) * 16
      : typeof e == "string" && e.includes("em")
        ? Number(e.replace("em", "")) * 16
        : Number(e);
}
function D2(e) {
  return (t) =>
    `@media (min-width: ${du(Gl(re({ size: t, sizes: e.breakpoints })))})`;
}
function L2(e) {
  return (t) =>
    `@media (max-width: ${du(Gl(re({ size: t, sizes: e.breakpoints })) - 1)})`;
}
function M2(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function F2(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const a = t.split("");
    t = [a[0], a[0], a[1], a[1], a[2], a[2]].join("");
  }
  const r = parseInt(t, 16),
    n = (r >> 16) & 255,
    o = (r >> 8) & 255,
    i = r & 255;
  return { r: n, g: o, b: i, a: 1 };
}
function U2(e) {
  const [t, r, n, o] = e
    .replace(/[^0-9,.]/g, "")
    .split(",")
    .map(Number);
  return { r: t, g: r, b: n, a: o || 1 };
}
function Sp(e) {
  return M2(e)
    ? F2(e)
    : e.startsWith("rgb")
      ? U2(e)
      : { r: 0, g: 0, b: 0, a: 1 };
}
function Bn(e, t) {
  if (typeof e != "string" || t > 1 || t < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(--")) return e;
  const { r, g: n, b: o } = Sp(e);
  return `rgba(${r}, ${n}, ${o}, ${t})`;
}
function B2(e = 0) {
  return {
    position: "absolute",
    top: z(e),
    right: z(e),
    left: z(e),
    bottom: z(e),
  };
}
function V2(e, t) {
  if (typeof e == "string" && e.startsWith("var(--")) return e;
  const { r, g: n, b: o, a: i } = Sp(e),
    a = 1 - t,
    l = (s) => Math.round(s * a);
  return `rgba(${l(r)}, ${l(n)}, ${l(o)}, ${i})`;
}
function W2(e, t) {
  if (typeof e == "string" && e.startsWith("var(--")) return e;
  const { r, g: n, b: o, a: i } = Sp(e),
    a = (l) => Math.round(l + (255 - l) * t);
  return `rgba(${a(r)}, ${a(n)}, ${a(o)}, ${i})`;
}
function H2(e) {
  return (t) => {
    if (typeof t == "number") return z(t);
    const r =
      typeof e.defaultRadius == "number"
        ? e.defaultRadius
        : e.radius[e.defaultRadius] || e.defaultRadius;
    return e.radius[t] || t || r;
  };
}
function K2(e, t) {
  if (typeof e == "string" && e.includes(".")) {
    const [r, n] = e.split("."),
      o = parseInt(n, 10);
    if (r in t.colors && o >= 0 && o < 10)
      return { isSplittedColor: !0, key: r, shade: o };
  }
  return { isSplittedColor: !1 };
}
function G2(e) {
  const t = wp(e),
    r = oa(e),
    n = J1(e);
  return ({ variant: o, color: i, gradient: a, primaryFallback: l }) => {
    const s = K2(i, e);
    switch (o) {
      case "light":
        return {
          border: "transparent",
          background: Bn(
            t(i, e.colorScheme === "dark" ? 8 : 0, l, !1),
            e.colorScheme === "dark" ? 0.2 : 1,
          ),
          color:
            i === "dark"
              ? e.colorScheme === "dark"
                ? e.colors.dark[0]
                : e.colors.dark[9]
              : t(i, e.colorScheme === "dark" ? 2 : r("light")),
          hover: Bn(
            t(i, e.colorScheme === "dark" ? 7 : 1, l, !1),
            e.colorScheme === "dark" ? 0.25 : 0.65,
          ),
        };
      case "subtle":
        return {
          border: "transparent",
          background: "transparent",
          color:
            i === "dark"
              ? e.colorScheme === "dark"
                ? e.colors.dark[0]
                : e.colors.dark[9]
              : t(i, e.colorScheme === "dark" ? 2 : r("light")),
          hover: Bn(
            t(i, e.colorScheme === "dark" ? 8 : 0, l, !1),
            e.colorScheme === "dark" ? 0.2 : 1,
          ),
        };
      case "outline":
        return {
          border: t(i, e.colorScheme === "dark" ? 5 : r("light")),
          background: "transparent",
          color: t(i, e.colorScheme === "dark" ? 5 : r("light")),
          hover:
            e.colorScheme === "dark"
              ? Bn(t(i, 5, l, !1), 0.05)
              : Bn(t(i, 0, l, !1), 0.35),
        };
      case "default":
        return {
          border:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4],
          background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
          color: e.colorScheme === "dark" ? e.white : e.black,
          hover: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[0],
        };
      case "white":
        return {
          border: "transparent",
          background: e.white,
          color: t(i, r()),
          hover: null,
        };
      case "transparent":
        return {
          border: "transparent",
          color:
            i === "dark"
              ? e.colorScheme === "dark"
                ? e.colors.dark[0]
                : e.colors.dark[9]
              : t(i, e.colorScheme === "dark" ? 2 : r("light")),
          background: "transparent",
          hover: null,
        };
      case "gradient":
        return {
          background: n(a),
          color: e.white,
          border: "transparent",
          hover: null,
        };
      default: {
        const u = r(),
          f = s.isSplittedColor ? s.shade : u,
          c = s.isSplittedColor ? s.key : i;
        return {
          border: "transparent",
          background: t(c, f, l),
          color: e.white,
          hover: t(c, f === 9 ? 8 : f + 1),
        };
      }
    }
  };
}
function Q2(e) {
  return (t) => {
    const r = oa(e)(t);
    return e.colors[e.primaryColor][r];
  };
}
function Y2(e) {
  return {
    "@media (hover: hover)": { "&:hover": e },
    "@media (hover: none)": { "&:active": e },
  };
}
function q2(e) {
  return () => ({
    userSelect: "none",
    color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5],
  });
}
function X2(e) {
  return () => (e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6]);
}
const Ne = {
  fontStyles: R2,
  themeColor: wp,
  focusStyles: j2,
  linearGradient: z2,
  radialGradient: A2,
  smallerThan: L2,
  largerThan: D2,
  rgba: Bn,
  cover: B2,
  darken: V2,
  lighten: W2,
  radius: H2,
  variant: G2,
  primaryShade: oa,
  hover: Y2,
  gradient: J1,
  primaryColor: Q2,
  placeholderStyles: q2,
  dimmed: X2,
};
var J2 = Object.defineProperty,
  Z2 = Object.defineProperties,
  eC = Object.getOwnPropertyDescriptors,
  Gm = Object.getOwnPropertySymbols,
  tC = Object.prototype.hasOwnProperty,
  rC = Object.prototype.propertyIsEnumerable,
  Qm = (e, t, r) =>
    t in e
      ? J2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  nC = (e, t) => {
    for (var r in t || (t = {})) tC.call(t, r) && Qm(e, r, t[r]);
    if (Gm) for (var r of Gm(t)) rC.call(t, r) && Qm(e, r, t[r]);
    return e;
  },
  oC = (e, t) => Z2(e, eC(t));
function ew(e) {
  return oC(nC({}, e), {
    fn: {
      fontStyles: Ne.fontStyles(e),
      themeColor: Ne.themeColor(e),
      focusStyles: Ne.focusStyles(e),
      largerThan: Ne.largerThan(e),
      smallerThan: Ne.smallerThan(e),
      radialGradient: Ne.radialGradient,
      linearGradient: Ne.linearGradient,
      gradient: Ne.gradient(e),
      rgba: Ne.rgba,
      cover: Ne.cover,
      lighten: Ne.lighten,
      darken: Ne.darken,
      primaryShade: Ne.primaryShade(e),
      radius: Ne.radius(e),
      variant: Ne.variant(e),
      hover: Ne.hover,
      primaryColor: Ne.primaryColor(e),
      placeholderStyles: Ne.placeholderStyles(e),
      dimmed: Ne.dimmed(e),
    },
  });
}
const iC = {
    dir: "ltr",
    primaryShade: { light: 6, dark: 8 },
    focusRing: "auto",
    loader: "oval",
    colorScheme: "light",
    white: "#fff",
    black: "#000",
    defaultRadius: "sm",
    transitionTimingFunction: "ease",
    colors: k2,
    lineHeight: 1.55,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    primaryColor: "blue",
    respectReducedMotion: !0,
    cursorType: "default",
    defaultGradient: { from: "indigo", to: "cyan", deg: 45 },
    shadows: {
      xs: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",
      sm: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",
      md: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",
      lg: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",
      xl: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
    radius: {
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      xl: "2rem",
    },
    spacing: {
      xs: "0.625rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    headings: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
      fontWeight: 700,
      sizes: {
        h1: { fontSize: "2.125rem", lineHeight: 1.3, fontWeight: void 0 },
        h2: { fontSize: "1.625rem", lineHeight: 1.35, fontWeight: void 0 },
        h3: { fontSize: "1.375rem", lineHeight: 1.4, fontWeight: void 0 },
        h4: { fontSize: "1.125rem", lineHeight: 1.45, fontWeight: void 0 },
        h5: { fontSize: "1rem", lineHeight: 1.5, fontWeight: void 0 },
        h6: { fontSize: "0.875rem", lineHeight: 1.5, fontWeight: void 0 },
      },
    },
    other: {},
    components: {},
    activeStyles: { transform: "translateY(0.0625rem)" },
    datesLocale: "en",
    globalStyles: void 0,
    focusRingStyles: {
      styles: (e) => ({
        outlineOffset: "0.125rem",
        outline: `0.125rem solid ${
          e.colors[e.primaryColor][e.colorScheme === "dark" ? 7 : 5]
        }`,
      }),
      resetStyles: () => ({ outline: "none" }),
      inputStyles: (e) => ({
        outline: "none",
        borderColor:
          e.colors[e.primaryColor][
            typeof e.primaryShade == "object"
              ? e.primaryShade[e.colorScheme]
              : e.primaryShade
          ],
      }),
    },
  },
  _p = ew(iC);
function aC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function lC(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var sC = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
              ? (i = n.container.firstChild)
              : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(lC(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = aC(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  qe = "-ms-",
  Ql = "-moz-",
  te = "-webkit-",
  tw = "comm",
  Ep = "rule",
  Pp = "decl",
  uC = "@import",
  rw = "@keyframes",
  cC = Math.abs,
  pu = String.fromCharCode,
  fC = Object.assign;
function dC(e, t) {
  return We(e, 0) ^ 45
    ? (((((((t << 2) ^ We(e, 0)) << 2) ^ We(e, 1)) << 2) ^ We(e, 2)) << 2) ^
        We(e, 3)
    : 0;
}
function nw(e) {
  return e.trim();
}
function pC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, r) {
  return e.replace(t, r);
}
function Lf(e, t) {
  return e.indexOf(t);
}
function We(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vi(e, t, r) {
  return e.slice(t, r);
}
function Xt(e) {
  return e.length;
}
function Op(e) {
  return e.length;
}
function ka(e, t) {
  return t.push(e), e;
}
function hC(e, t) {
  return e.map(t).join("");
}
var hu = 1,
  xo = 1,
  ow = 0,
  dt = 0,
  $e = 0,
  jo = "";
function mu(e, t, r, n, o, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: hu,
    column: xo,
    length: a,
    return: "",
  };
}
function Jo(e, t) {
  return fC(mu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function mC() {
  return $e;
}
function yC() {
  return (
    ($e = dt > 0 ? We(jo, --dt) : 0), xo--, $e === 10 && ((xo = 1), hu--), $e
  );
}
function vt() {
  return (
    ($e = dt < ow ? We(jo, dt++) : 0), xo++, $e === 10 && ((xo = 1), hu++), $e
  );
}
function or() {
  return We(jo, dt);
}
function ol() {
  return dt;
}
function ia(e, t) {
  return Vi(jo, e, t);
}
function Wi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function iw(e) {
  return (hu = xo = 1), (ow = Xt((jo = e))), (dt = 0), [];
}
function aw(e) {
  return (jo = ""), e;
}
function il(e) {
  return nw(ia(dt - 1, Mf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gC(e) {
  for (; ($e = or()) && $e < 33; ) vt();
  return Wi(e) > 2 || Wi($e) > 3 ? "" : " ";
}
function vC(e, t) {
  for (
    ;
    --t &&
    vt() &&
    !($e < 48 || $e > 102 || ($e > 57 && $e < 65) || ($e > 70 && $e < 97));

  );
  return ia(e, ol() + (t < 6 && or() == 32 && vt() == 32));
}
function Mf(e) {
  for (; vt(); )
    switch ($e) {
      case e:
        return dt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mf($e);
        break;
      case 40:
        e === 41 && Mf(e);
        break;
      case 92:
        vt();
        break;
    }
  return dt;
}
function wC(e, t) {
  for (; vt() && e + $e !== 47 + 10; )
    if (e + $e === 42 + 42 && or() === 47) break;
  return "/*" + ia(t, dt - 1) + "*" + pu(e === 47 ? e : vt());
}
function SC(e) {
  for (; !Wi(or()); ) vt();
  return ia(e, dt);
}
function _C(e) {
  return aw(al("", null, null, null, [""], (e = iw(e)), 0, [0], e));
}
function al(e, t, r, n, o, i, a, l, s) {
  for (
    var u = 0,
      f = 0,
      c = a,
      d = 0,
      w = 0,
      v = 0,
      m = 1,
      y = 1,
      h = 1,
      p = 0,
      g = "",
      S = o,
      P = i,
      O = n,
      E = g;
    y;

  )
    switch (((v = p), (p = vt()))) {
      case 40:
        if (v != 108 && We(E, c - 1) == 58) {
          Lf((E += ie(il(p), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += il(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += gC(v);
        break;
      case 92:
        E += vC(ol() - 1, 7);
        continue;
      case 47:
        switch (or()) {
          case 42:
          case 47:
            ka(EC(wC(vt(), ol()), t, r), s);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * m:
        l[u++] = Xt(E) * h;
      case 125 * m:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            w > 0 &&
              Xt(E) - c &&
              ka(
                w > 32
                  ? qm(E + ";", n, r, c - 1)
                  : qm(ie(E, " ", "") + ";", n, r, c - 2),
                s,
              );
            break;
          case 59:
            E += ";";
          default:
            if (
              (ka((O = Ym(E, t, r, u, f, o, l, g, (S = []), (P = []), c)), i),
              p === 123)
            )
              if (f === 0) al(E, t, O, O, S, i, c, l, P);
              else
                switch (d === 99 && We(E, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    al(
                      e,
                      O,
                      O,
                      n && ka(Ym(e, O, O, 0, 0, o, l, g, o, (S = []), c), P),
                      o,
                      P,
                      c,
                      l,
                      n ? S : P,
                    );
                    break;
                  default:
                    al(E, O, O, O, [""], P, 0, l, P);
                }
        }
        (u = f = w = 0), (m = h = 1), (g = E = ""), (c = a);
        break;
      case 58:
        (c = 1 + Xt(E)), (w = v);
      default:
        if (m < 1) {
          if (p == 123) --m;
          else if (p == 125 && m++ == 0 && yC() == 125) continue;
        }
        switch (((E += pu(p)), p * m)) {
          case 38:
            h = f > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (l[u++] = (Xt(E) - 1) * h), (h = 1);
            break;
          case 64:
            or() === 45 && (E += il(vt())),
              (d = or()),
              (f = c = Xt((g = E += SC(ol())))),
              p++;
            break;
          case 45:
            v === 45 && Xt(E) == 2 && (m = 0);
        }
    }
  return i;
}
function Ym(e, t, r, n, o, i, a, l, s, u, f) {
  for (
    var c = o - 1, d = o === 0 ? i : [""], w = Op(d), v = 0, m = 0, y = 0;
    v < n;
    ++v
  )
    for (var h = 0, p = Vi(e, c + 1, (c = cC((m = a[v])))), g = e; h < w; ++h)
      (g = nw(m > 0 ? d[h] + " " + p : ie(p, /&\f/g, d[h]))) && (s[y++] = g);
  return mu(e, t, r, o === 0 ? Ep : l, s, u, f);
}
function EC(e, t, r) {
  return mu(e, t, r, tw, pu(mC()), Vi(e, 2, -2), 0);
}
function qm(e, t, r, n) {
  return mu(e, t, r, Pp, Vi(e, 0, n), Vi(e, n + 1, -1), n);
}
function ho(e, t) {
  for (var r = "", n = Op(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function PC(e, t, r, n) {
  switch (e.type) {
    case uC:
    case Pp:
      return (e.return = e.return || e.value);
    case tw:
      return "";
    case rw:
      return (e.return = e.value + "{" + ho(e.children, n) + "}");
    case Ep:
      e.value = e.props.join(",");
  }
  return Xt((r = ho(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function OC(e) {
  var t = Op(e);
  return function (r, n, o, i) {
    for (var a = "", l = 0; l < t; l++) a += e[l](r, n, o, i) || "";
    return a;
  };
}
function xC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Xm = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function bC(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var $C = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = or()), o === 38 && i === 12 && (r[n] = 1), !Wi(i);

    )
      vt();
    return ia(t, dt);
  },
  CC = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (Wi(o)) {
        case 0:
          o === 38 && or() === 12 && (r[n] = 1), (t[n] += $C(dt - 1, r, n));
          break;
        case 2:
          t[n] += il(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = or() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += pu(o);
      }
    while ((o = vt()));
    return t;
  },
  kC = function (t, r) {
    return aw(CC(iw(t), r));
  },
  Jm = new WeakMap(),
  RC = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Jm.get(n)) &&
        !o
      ) {
        Jm.set(t, !0);
        for (
          var i = [], a = kC(r, i), l = n.props, s = 0, u = 0;
          s < a.length;
          s++
        )
          for (var f = 0; f < l.length; f++, u++)
            t.props[u] = i[s] ? a[s].replace(/&\f/g, l[f]) : l[f] + " " + a[s];
      }
    }
  },
  NC = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function lw(e, t) {
  switch (dC(e, t)) {
    case 5103:
      return te + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + Ql + e + qe + e + e;
    case 6828:
    case 4268:
      return te + e + qe + e + e;
    case 6165:
      return te + e + qe + "flex-" + e + e;
    case 5187:
      return (
        te + e + ie(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + qe + "flex-$1$2") + e
      );
    case 5443:
      return te + e + qe + "flex-item-" + ie(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        te +
        e +
        qe +
        "flex-line-pack" +
        ie(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return te + e + qe + ie(e, "shrink", "negative") + e;
    case 5292:
      return te + e + qe + ie(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        te +
        "box-" +
        ie(e, "-grow", "") +
        te +
        e +
        qe +
        ie(e, "grow", "positive") +
        e
      );
    case 4554:
      return te + ie(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return (
        ie(
          ie(ie(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"),
          e,
          "",
        ) + e
      );
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return (
        ie(
          ie(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + qe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        te +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, te + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Xt(e) - 1 - t > 6)
        switch (We(e, t + 1)) {
          case 109:
            if (We(e, t + 4) !== 45) break;
          case 102:
            return (
              ie(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  te +
                  "$2-$3$1" +
                  Ql +
                  (We(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Lf(e, "stretch")
              ? lw(ie(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (We(e, t + 1) !== 115) break;
    case 6444:
      switch (We(e, Xt(e) - 3 - (~Lf(e, "!important") && 10))) {
        case 107:
          return ie(e, ":", ":" + te) + e;
        case 101:
          return (
            ie(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                te +
                (We(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                te +
                "$2$3$1" +
                qe +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (We(e, t + 11)) {
        case 114:
          return te + e + qe + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + qe + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + qe + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + qe + e + e;
  }
  return e;
}
var TC = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Pp:
          t.return = lw(t.value, t.length);
          break;
        case rw:
          return ho([Jo(t, { value: ie(t.value, "@", "@" + te) })], o);
        case Ep:
          if (t.length)
            return hC(t.props, function (i) {
              switch (pC(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ho(
                    [Jo(t, { props: [ie(i, /:(read-\w+)/, ":" + Ql + "$1")] })],
                    o,
                  );
                case "::placeholder":
                  return ho(
                    [
                      Jo(t, {
                        props: [ie(i, /:(plac\w+)/, ":" + te + "input-$1")],
                      }),
                      Jo(t, { props: [ie(i, /:(plac\w+)/, ":" + Ql + "$1")] }),
                      Jo(t, { props: [ie(i, /:(plac\w+)/, qe + "input-$1")] }),
                    ],
                    o,
                  );
              }
              return "";
            });
      }
  },
  IC = [TC],
  jC = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (m) {
        var y = m.getAttribute("data-emotion");
        y.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || IC,
      i = {},
      a,
      l = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (m) {
          for (
            var y = m.getAttribute("data-emotion").split(" "), h = 1;
            h < y.length;
            h++
          )
            i[y[h]] = !0;
          l.push(m);
        },
      );
    var s,
      u = [RC, NC];
    {
      var f,
        c = [
          PC,
          xC(function (m) {
            f.insert(m);
          }),
        ],
        d = OC(u.concat(o, c)),
        w = function (y) {
          return ho(_C(y), d);
        };
      s = function (y, h, p, g) {
        (f = p),
          w(y ? y + "{" + h.styles + "}" : h.styles),
          g && (v.inserted[h.name] = !0);
      };
    }
    var v = {
      key: r,
      sheet: new sC({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return v.sheet.hydrate(l), v;
  };
const xp = jC;
var zC = !0;
function AC(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var DC = function (t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || zC === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  sw = function (t, r, n) {
    DC(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function LC(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var MC = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  FC = /[A-Z]|^ms/g,
  UC = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  uw = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Zm = function (t) {
    return t != null && typeof t != "boolean";
  },
  Sc = bC(function (e) {
    return uw(e) ? e : e.replace(FC, "-$&").toLowerCase();
  }),
  ey = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(UC, function (n, o, i) {
            return (Jt = { name: o, styles: i, next: Jt }), o;
          });
    }
    return MC[t] !== 1 && !uw(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function Hi(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (Jt = { name: r.name, styles: r.styles, next: Jt }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (Jt = { name: n.name, styles: n.styles, next: Jt }), (n = n.next);
        var o = r.styles + ";";
        return o;
      }
      return BC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Jt,
          a = r(e);
        return (Jt = i), Hi(e, t, a);
      }
      break;
    }
  }
  if (t == null) return r;
  var l = t[r];
  return l !== void 0 ? l : r;
}
function BC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += Hi(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (n += i + "{" + t[a] + "}")
          : Zm(a) && (n += Sc(i) + ":" + ey(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          Zm(a[l]) && (n += Sc(i) + ":" + ey(i, a[l]) + ";");
      else {
        var s = Hi(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Sc(i) + ":" + s + ";";
            break;
          }
          default:
            n += i + "{" + s + "}";
        }
      }
    }
  return n;
}
var ty = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Jt,
  cw = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Jt = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += Hi(n, r, a)))
      : (i += a[0]);
    for (var l = 1; l < t.length; l++) (i += Hi(n, r, t[l])), o && (i += a[l]);
    ty.lastIndex = 0;
    for (var s = "", u; (u = ty.exec(i)) !== null; ) s += "-" + u[1];
    var f = LC(i) + s;
    return { name: f, styles: i, next: Jt };
  },
  VC = Si["useInsertionEffect"] ? Si["useInsertionEffect"] : !1,
  ry = VC || _.useLayoutEffect,
  fw = _.createContext(typeof HTMLElement < "u" ? xp({ key: "css" }) : null);
fw.Provider;
var WC = function (t) {
    return _.forwardRef(function (r, n) {
      var o = _.useContext(fw);
      return t(r, o, n);
    });
  },
  Ff = _.createContext({}),
  HC = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return zf({}, t, r);
  },
  KC = Xm(function (e) {
    return Xm(function (t) {
      return HC(e, t);
    });
  }),
  GC = function (t) {
    var r = _.useContext(Ff);
    return (
      t.theme !== r && (r = KC(r)(t.theme)),
      _.createElement(Ff.Provider, { value: r }, t.children)
    );
  },
  yu = WC(function (e, t) {
    var r = e.styles,
      n = cw([r], void 0, _.useContext(Ff)),
      o = _.useRef();
    return (
      ry(
        function () {
          var i = t.key + "-global",
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            l = !1,
            s = document.querySelector(
              'style[data-emotion="' + i + " " + n.name + '"]',
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            s !== null &&
              ((l = !0), s.setAttribute("data-emotion", i), a.hydrate([s])),
            (o.current = [a, l]),
            function () {
              a.flush();
            }
          );
        },
        [t],
      ),
      ry(
        function () {
          var i = o.current,
            a = i[0],
            l = i[1];
          if (l) {
            i[1] = !1;
            return;
          }
          if ((n.next !== void 0 && sw(t, n.next, !0), a.tags.length)) {
            var s = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = s), a.flush();
          }
          t.insert("", n, a, !1);
        },
        [t, n.name],
      ),
      null
    );
  }),
  QC = Object.defineProperty,
  YC = Object.defineProperties,
  qC = Object.getOwnPropertyDescriptors,
  ny = Object.getOwnPropertySymbols,
  XC = Object.prototype.hasOwnProperty,
  JC = Object.prototype.propertyIsEnumerable,
  oy = (e, t, r) =>
    t in e
      ? QC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ZC = (e, t) => {
    for (var r in t || (t = {})) XC.call(t, r) && oy(e, r, t[r]);
    if (ny) for (var r of ny(t)) JC.call(t, r) && oy(e, r, t[r]);
    return e;
  },
  ek = (e, t) => YC(e, qC(t));
function tk({ theme: e }) {
  return N.createElement(yu, {
    styles: {
      "*, *::before, *::after": { boxSizing: "border-box" },
      html: { colorScheme: e.colorScheme === "dark" ? "dark" : "light" },
      body: ek(ZC({}, e.fn.fontStyles()), {
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
        color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
        lineHeight: e.lineHeight,
        fontSize: e.fontSizes.md,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }),
    },
  });
}
function Zo(e, t, r, n = z) {
  Object.keys(t).forEach((o) => {
    e[`--mantine-${r}-${o}`] = n(t[o]);
  });
}
function rk({ theme: e }) {
  const t = {
    "--mantine-color-white": e.white,
    "--mantine-color-black": e.black,
    "--mantine-transition-timing-function": e.transitionTimingFunction,
    "--mantine-line-height": `${e.lineHeight}`,
    "--mantine-font-family": e.fontFamily,
    "--mantine-font-family-monospace": e.fontFamilyMonospace,
    "--mantine-font-family-headings": e.headings.fontFamily,
    "--mantine-heading-font-weight": `${e.headings.fontWeight}`,
  };
  Zo(t, e.shadows, "shadow"),
    Zo(t, e.fontSizes, "font-size"),
    Zo(t, e.radius, "radius"),
    Zo(t, e.spacing, "spacing"),
    Zo(t, e.breakpoints, "breakpoints", du),
    Object.keys(e.colors).forEach((n) => {
      e.colors[n].forEach((o, i) => {
        t[`--mantine-color-${n}-${i}`] = o;
      });
    });
  const r = e.headings.sizes;
  return (
    Object.keys(r).forEach((n) => {
      (t[`--mantine-${n}-font-size`] = r[n].fontSize),
        (t[`--mantine-${n}-line-height`] = `${r[n].lineHeight}`);
    }),
    N.createElement(yu, { styles: { ":root": t } })
  );
}
var nk = Object.defineProperty,
  ok = Object.defineProperties,
  ik = Object.getOwnPropertyDescriptors,
  iy = Object.getOwnPropertySymbols,
  ak = Object.prototype.hasOwnProperty,
  lk = Object.prototype.propertyIsEnumerable,
  ay = (e, t, r) =>
    t in e
      ? nk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  pn = (e, t) => {
    for (var r in t || (t = {})) ak.call(t, r) && ay(e, r, t[r]);
    if (iy) for (var r of iy(t)) lk.call(t, r) && ay(e, r, t[r]);
    return e;
  },
  ly = (e, t) => ok(e, ik(t));
function sk(e, t) {
  var r;
  if (!t) return e;
  const n = Object.keys(e).reduce((o, i) => {
    if (i === "headings" && t.headings) {
      const a = t.headings.sizes
        ? Object.keys(e.headings.sizes).reduce(
            (l, s) => (
              (l[s] = pn(pn({}, e.headings.sizes[s]), t.headings.sizes[s])), l
            ),
            {},
          )
        : e.headings.sizes;
      return ly(pn({}, o), {
        headings: ly(pn(pn({}, e.headings), t.headings), { sizes: a }),
      });
    }
    return (
      (o[i] =
        typeof t[i] == "object"
          ? pn(pn({}, e[i]), t[i])
          : typeof t[i] == "number" ||
              typeof t[i] == "boolean" ||
              typeof t[i] == "function"
            ? t[i]
            : t[i] || e[i]),
      o
    );
  }, {});
  if (
    (t != null &&
      t.fontFamily &&
      !((r = t == null ? void 0 : t.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = t.fontFamily),
    !(n.primaryColor in n.colors))
  )
    throw new Error(
      "MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
    );
  return n;
}
function uk(e, t) {
  return ew(sk(e, t));
}
function dw(e) {
  return Object.keys(e).reduce(
    (t, r) => (e[r] !== void 0 && (t[r] = e[r]), t),
    {},
  );
}
const ck = {
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    textSizeAdjust: "100%",
  },
  body: { margin: 0 },
  "article, aside, footer, header, nav, section, figcaption, figure, main": {
    display: "block",
  },
  h1: { fontSize: "2em" },
  hr: { boxSizing: "content-box", height: 0, overflow: "visible" },
  pre: { fontFamily: "monospace, monospace", fontSize: "1em" },
  a: { background: "transparent", textDecorationSkip: "objects" },
  "a:active, a:hover": { outlineWidth: 0 },
  "abbr[title]": { borderBottom: "none", textDecoration: "underline" },
  "b, strong": { fontWeight: "bolder" },
  "code, kbp, samp": { fontFamily: "monospace, monospace", fontSize: "1em" },
  dfn: { fontStyle: "italic" },
  mark: { backgroundColor: "#ff0", color: "#000" },
  small: { fontSize: "80%" },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  sup: { top: "-0.5em" },
  sub: { bottom: "-0.25em" },
  "audio, video": { display: "inline-block" },
  "audio:not([controls])": { display: "none", height: 0 },
  img: { borderStyle: "none", verticalAlign: "middle" },
  "svg:not(:root)": { overflow: "hidden" },
  "button, input, optgroup, select, textarea": {
    fontFamily: "sans-serif",
    fontSize: "100%",
    lineHeight: "1.15",
    margin: 0,
  },
  "button, input": { overflow: "visible" },
  "button, select": { textTransform: "none" },
  "button, [type=reset], [type=submit]": { WebkitAppearance: "button" },
  "button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":
    { borderStyle: "none", padding: 0 },
  "button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":
    { outline: `${z(1)} dotted ButtonText` },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal",
  },
  progress: { display: "inline-block", verticalAlign: "baseline" },
  textarea: { overflow: "auto" },
  "[type=checkbox], [type=radio]": { boxSizing: "border-box", padding: 0 },
  "[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":
    { height: "auto" },
  "[type=search]": { appearance: "none" },
  "[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":
    { appearance: "none" },
  "::-webkit-file-upload-button": { appearance: "button", font: "inherit" },
  "details, menu": { display: "block" },
  summary: { display: "list-item" },
  canvas: { display: "inline-block" },
  template: { display: "none" },
};
function fk() {
  return N.createElement(yu, { styles: ck });
}
var dk = Object.defineProperty,
  sy = Object.getOwnPropertySymbols,
  pk = Object.prototype.hasOwnProperty,
  hk = Object.prototype.propertyIsEnumerable,
  uy = (e, t, r) =>
    t in e
      ? dk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  wi = (e, t) => {
    for (var r in t || (t = {})) pk.call(t, r) && uy(e, r, t[r]);
    if (sy) for (var r of sy(t)) hk.call(t, r) && uy(e, r, t[r]);
    return e;
  };
const Yl = _.createContext({ theme: _p });
function zo() {
  var e;
  return ((e = _.useContext(Yl)) == null ? void 0 : e.theme) || _p;
}
function mk(e) {
  const t = zo(),
    r = (n) => {
      var o, i, a, l;
      return {
        styles: ((o = t.components[n]) == null ? void 0 : o.styles) || {},
        classNames:
          ((i = t.components[n]) == null ? void 0 : i.classNames) || {},
        variants: (a = t.components[n]) == null ? void 0 : a.variants,
        sizes: (l = t.components[n]) == null ? void 0 : l.sizes,
      };
    };
  return Array.isArray(e) ? e.map(r) : [r(e)];
}
function pw() {
  var e;
  return (e = _.useContext(Yl)) == null ? void 0 : e.emotionCache;
}
function et(e, t, r) {
  var n;
  const o = zo(),
    i = (n = o.components[e]) == null ? void 0 : n.defaultProps,
    a = typeof i == "function" ? i(o) : i;
  return wi(wi(wi({}, t), a), dw(r));
}
function hw({
  theme: e,
  emotionCache: t,
  withNormalizeCSS: r = !1,
  withGlobalStyles: n = !1,
  withCSSVariables: o = !1,
  inherit: i = !1,
  children: a,
}) {
  const l = _.useContext(Yl),
    s = uk(_p, i ? wi(wi({}, l.theme), e) : e);
  return N.createElement(
    GC,
    { theme: s },
    N.createElement(
      Yl.Provider,
      { value: { theme: s, emotionCache: t } },
      r && N.createElement(fk, null),
      n && N.createElement(tk, { theme: s }),
      o && N.createElement(rk, { theme: s }),
      typeof s.globalStyles == "function" &&
        N.createElement(yu, { styles: s.globalStyles(s) }),
      a,
    ),
  );
}
hw.displayName = "@mantine/core/MantineProvider";
const yk = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function mw(e) {
  return yk[e];
}
function gk(e, t) {
  const r = _.useRef();
  return (
    (!r.current ||
      t.length !== r.current.prevDeps.length ||
      r.current.prevDeps.map((n, o) => n === t[o]).indexOf(!1) >= 0) &&
      (r.current = { v: e(), prevDeps: [...t] }),
    r.current.v
  );
}
const vk = xp({ key: "mantine", prepend: !0 });
function wk() {
  return pw() || vk;
}
var Sk = Object.defineProperty,
  cy = Object.getOwnPropertySymbols,
  _k = Object.prototype.hasOwnProperty,
  Ek = Object.prototype.propertyIsEnumerable,
  fy = (e, t, r) =>
    t in e
      ? Sk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Pk = (e, t) => {
    for (var r in t || (t = {})) _k.call(t, r) && fy(e, r, t[r]);
    if (cy) for (var r of cy(t)) Ek.call(t, r) && fy(e, r, t[r]);
    return e;
  };
const _c = "ref";
function Ok(e) {
  let t;
  if (e.length !== 1) return { args: e, ref: t };
  const [r] = e;
  if (!(r instanceof Object)) return { args: e, ref: t };
  if (!(_c in r)) return { args: e, ref: t };
  t = r[_c];
  const n = Pk({}, r);
  return delete n[_c], { args: [n], ref: t };
}
const { cssFactory: xk } = (() => {
  function e(r, n, o) {
    const i = [],
      a = AC(r, i, o);
    return i.length < 2 ? o : a + n(i);
  }
  function t(r) {
    const { cache: n } = r,
      o = (...a) => {
        const { ref: l, args: s } = Ok(a),
          u = cw(s, n.registered);
        return sw(n, u, !1), `${n.key}-${u.name}${l === void 0 ? "" : ` ${l}`}`;
      };
    return { css: o, cx: (...a) => e(n.registered, o, C2(a)) };
  }
  return { cssFactory: t };
})();
function yw() {
  const e = wk();
  return gk(() => xk({ cache: e }), [e]);
}
function bk({
  cx: e,
  classes: t,
  context: r,
  classNames: n,
  name: o,
  cache: i,
}) {
  const a = r.reduce(
    (l, s) => (
      Object.keys(s.classNames).forEach((u) => {
        typeof l[u] != "string"
          ? (l[u] = `${s.classNames[u]}`)
          : (l[u] = `${l[u]} ${s.classNames[u]}`);
      }),
      l
    ),
    {},
  );
  return Object.keys(t).reduce(
    (l, s) => (
      (l[s] = e(
        t[s],
        a[s],
        n != null && n[s],
        Array.isArray(o)
          ? o
              .filter(Boolean)
              .map(
                (u) => `${(i == null ? void 0 : i.key) || "mantine"}-${u}-${s}`,
              )
              .join(" ")
          : o
            ? `${(i == null ? void 0 : i.key) || "mantine"}-${o}-${s}`
            : null,
      )),
      l
    ),
    {},
  );
}
var $k = Object.defineProperty,
  dy = Object.getOwnPropertySymbols,
  Ck = Object.prototype.hasOwnProperty,
  kk = Object.prototype.propertyIsEnumerable,
  py = (e, t, r) =>
    t in e
      ? $k(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ec = (e, t) => {
    for (var r in t || (t = {})) Ck.call(t, r) && py(e, r, t[r]);
    if (dy) for (var r of dy(t)) kk.call(t, r) && py(e, r, t[r]);
    return e;
  };
function Uf(e, t) {
  return (
    t &&
      Object.keys(t).forEach((r) => {
        e[r] ? (e[r] = Ec(Ec({}, e[r]), t[r])) : (e[r] = Ec({}, t[r]));
      }),
    e
  );
}
function hy(e, t, r, n) {
  const o = (i) => (typeof i == "function" ? i(t, r || {}, n) : i || {});
  return Array.isArray(e)
    ? e.map((i) => o(i.styles)).reduce((i, a) => Uf(i, a), {})
    : o(e);
}
function Rk({ ctx: e, theme: t, params: r, variant: n, size: o }) {
  return e.reduce(
    (i, a) => (
      a.variants &&
        n in a.variants &&
        Uf(i, a.variants[n](t, r, { variant: n, size: o })),
      a.sizes &&
        o in a.sizes &&
        Uf(i, a.sizes[o](t, r, { variant: n, size: o })),
      i
    ),
    {},
  );
}
function pt(e) {
  const t = typeof e == "function" ? e : () => e;
  function r(n, o) {
    const i = zo(),
      a = mk(o == null ? void 0 : o.name),
      l = pw(),
      s = {
        variant: o == null ? void 0 : o.variant,
        size: o == null ? void 0 : o.size,
      },
      { css: u, cx: f } = yw(),
      c = t(i, n, s),
      d = hy(o == null ? void 0 : o.styles, i, n, s),
      w = hy(a, i, n, s),
      v = Rk({
        ctx: a,
        theme: i,
        params: n,
        variant: o == null ? void 0 : o.variant,
        size: o == null ? void 0 : o.size,
      }),
      m = Object.fromEntries(
        Object.keys(c).map((y) => {
          const h = f(
            { [u(c[y])]: !(o != null && o.unstyled) },
            u(v[y]),
            u(w[y]),
            u(d[y]),
          );
          return [y, h];
        }),
      );
    return {
      classes: bk({
        cx: f,
        classes: m,
        context: a,
        classNames: o == null ? void 0 : o.classNames,
        name: o == null ? void 0 : o.name,
        cache: l,
      }),
      cx: f,
      theme: i,
    };
  }
  return r;
}
var Nk = Object.defineProperty,
  Tk = Object.defineProperties,
  Ik = Object.getOwnPropertyDescriptors,
  my = Object.getOwnPropertySymbols,
  jk = Object.prototype.hasOwnProperty,
  zk = Object.prototype.propertyIsEnumerable,
  yy = (e, t, r) =>
    t in e
      ? Nk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ei = (e, t) => {
    for (var r in t || (t = {})) jk.call(t, r) && yy(e, r, t[r]);
    if (my) for (var r of my(t)) zk.call(t, r) && yy(e, r, t[r]);
    return e;
  },
  ti = (e, t) => Tk(e, Ik(t));
const ri = {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: `scale(.9) translateY(${z(10)})` },
    transitionProperty: "transform, opacity",
  },
  Ra = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(-${z(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: {
        opacity: 0,
        transform: `translateY(${z(20)}) skew(-10deg, -5deg)`,
      },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${z(20)}) rotate(-5deg)` },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: `translateY(${z(20)}) rotate(5deg)` },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: ti(ei({}, ri), { common: { transformOrigin: "center center" } }),
    "pop-bottom-left": ti(ei({}, ri), {
      common: { transformOrigin: "bottom left" },
    }),
    "pop-bottom-right": ti(ei({}, ri), {
      common: { transformOrigin: "bottom right" },
    }),
    "pop-top-left": ti(ei({}, ri), { common: { transformOrigin: "top left" } }),
    "pop-top-right": ti(ei({}, ri), {
      common: { transformOrigin: "top right" },
    }),
  };
function Ak(e, t) {
  try {
    return (
      e.addEventListener("change", t), () => e.removeEventListener("change", t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function Dk(e, t) {
  return typeof t == "boolean"
    ? t
    : typeof window < "u" && "matchMedia" in window
      ? window.matchMedia(e).matches
      : !1;
}
function Lk(
  e,
  t,
  { getInitialValueInEffect: r } = { getInitialValueInEffect: !0 },
) {
  const [n, o] = _.useState(r ? t : Dk(e, t)),
    i = _.useRef();
  return (
    _.useEffect(() => {
      if ("matchMedia" in window)
        return (
          (i.current = window.matchMedia(e)),
          o(i.current.matches),
          Ak(i.current, (a) => o(a.matches))
        );
    }, [e]),
    n
  );
}
const Mk = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
function Fk(e, t) {
  const r = _.useRef(!1);
  _.useEffect(
    () => () => {
      r.current = !1;
    },
    [],
  ),
    _.useEffect(() => {
      if (r.current) return e();
      r.current = !0;
    }, t);
}
const Uk = N["useId".toString()] || (() => {});
function Bk() {
  const e = Uk();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Vk() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Wk(e) {
  const t = Bk(),
    [r, n] = _.useState(t);
  return (
    Mk(() => {
      n(Vk());
    }, []),
    typeof e == "string" ? e : typeof window > "u" ? t : r
  );
}
function Hk({
  value: e,
  defaultValue: t,
  finalValue: r,
  onChange: n = () => {},
}) {
  const [o, i] = _.useState(t !== void 0 ? t : r),
    a = (l) => {
      i(l), n == null || n(l);
    };
  return e !== void 0 ? [e, n, !0] : [o, a, !1];
}
function Kk(e, t) {
  return Lk("(prefers-reduced-motion: reduce)", e, t);
}
var gy = Object.getOwnPropertySymbols,
  Gk = Object.prototype.hasOwnProperty,
  Qk = Object.prototype.propertyIsEnumerable,
  Yk = (e, t) => {
    var r = {};
    for (var n in e) Gk.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && gy)
      for (var n of gy(e)) t.indexOf(n) < 0 && Qk.call(e, n) && (r[n] = e[n]);
    return r;
  };
function gw(e) {
  const t = e,
    {
      m: r,
      mx: n,
      my: o,
      mt: i,
      mb: a,
      ml: l,
      mr: s,
      p: u,
      px: f,
      py: c,
      pt: d,
      pb: w,
      pl: v,
      pr: m,
      bg: y,
      c: h,
      opacity: p,
      ff: g,
      fz: S,
      fw: P,
      lts: O,
      ta: E,
      lh: k,
      fs: T,
      tt: D,
      td: Y,
      w: J,
      miw: he,
      maw: xe,
      h: ge,
      mih: ze,
      mah: Fe,
      bgsz: j,
      bgp: B,
      bgr: M,
      bga: H,
      pos: ne,
      top: it,
      left: ve,
      bottom: xt,
      right: Ue,
      inset: ht,
      display: sn,
    } = t,
    un = Yk(t, [
      "m",
      "mx",
      "my",
      "mt",
      "mb",
      "ml",
      "mr",
      "p",
      "px",
      "py",
      "pt",
      "pb",
      "pl",
      "pr",
      "bg",
      "c",
      "opacity",
      "ff",
      "fz",
      "fw",
      "lts",
      "ta",
      "lh",
      "fs",
      "tt",
      "td",
      "w",
      "miw",
      "maw",
      "h",
      "mih",
      "mah",
      "bgsz",
      "bgp",
      "bgr",
      "bga",
      "pos",
      "top",
      "left",
      "bottom",
      "right",
      "inset",
      "display",
    ]);
  return {
    systemStyles: dw({
      m: r,
      mx: n,
      my: o,
      mt: i,
      mb: a,
      ml: l,
      mr: s,
      p: u,
      px: f,
      py: c,
      pt: d,
      pb: w,
      pl: v,
      pr: m,
      bg: y,
      c: h,
      opacity: p,
      ff: g,
      fz: S,
      fw: P,
      lts: O,
      ta: E,
      lh: k,
      fs: T,
      tt: D,
      td: Y,
      w: J,
      miw: he,
      maw: xe,
      h: ge,
      mih: ze,
      mah: Fe,
      bgsz: j,
      bgp: B,
      bgr: M,
      bga: H,
      pos: ne,
      top: it,
      left: ve,
      bottom: xt,
      right: Ue,
      inset: ht,
      display: sn,
    }),
    rest: un,
  };
}
function qk(e, t) {
  const r = Object.keys(e)
    .filter((n) => n !== "base")
    .sort(
      (n, o) =>
        Gl(re({ size: n, sizes: t.breakpoints })) -
        Gl(re({ size: o, sizes: t.breakpoints })),
    );
  return "base" in e ? ["base", ...r] : r;
}
function Xk({ value: e, theme: t, getValue: r, property: n }) {
  if (e == null) return;
  if (typeof e == "object")
    return qk(e, t).reduce((a, l) => {
      if (l === "base" && e.base !== void 0) {
        const u = r(e.base, t);
        return Array.isArray(n)
          ? (n.forEach((f) => {
              a[f] = u;
            }),
            a)
          : ((a[n] = u), a);
      }
      const s = r(e[l], t);
      return Array.isArray(n)
        ? ((a[t.fn.largerThan(l)] = {}),
          n.forEach((u) => {
            a[t.fn.largerThan(l)][u] = s;
          }),
          a)
        : ((a[t.fn.largerThan(l)] = { [n]: s }), a);
    }, {});
  const o = r(e, t);
  return Array.isArray(n)
    ? n.reduce((i, a) => ((i[a] = o), i), {})
    : { [n]: o };
}
function Jk(e, t) {
  return e === "dimmed"
    ? t.colorScheme === "dark"
      ? t.colors.dark[2]
      : t.colors.gray[6]
    : t.fn.variant({ variant: "filled", color: e, primaryFallback: !1 })
        .background;
}
function Zk(e) {
  return z(e);
}
function eR(e) {
  return e;
}
function tR(e, t) {
  return re({ size: e, sizes: t.fontSizes });
}
const rR = ["-xs", "-sm", "-md", "-lg", "-xl"];
function nR(e, t) {
  return rR.includes(e)
    ? `calc(${re({ size: e.replace("-", ""), sizes: t.spacing })} * -1)`
    : re({ size: e, sizes: t.spacing });
}
const oR = { identity: eR, color: Jk, size: Zk, fontSize: tR, spacing: nR },
  iR = {
    m: { type: "spacing", property: "margin" },
    mt: { type: "spacing", property: "marginTop" },
    mb: { type: "spacing", property: "marginBottom" },
    ml: { type: "spacing", property: "marginLeft" },
    mr: { type: "spacing", property: "marginRight" },
    mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
    my: { type: "spacing", property: ["marginTop", "marginBottom"] },
    p: { type: "spacing", property: "padding" },
    pt: { type: "spacing", property: "paddingTop" },
    pb: { type: "spacing", property: "paddingBottom" },
    pl: { type: "spacing", property: "paddingLeft" },
    pr: { type: "spacing", property: "paddingRight" },
    px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
    py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
    bg: { type: "color", property: "background" },
    c: { type: "color", property: "color" },
    opacity: { type: "identity", property: "opacity" },
    ff: { type: "identity", property: "fontFamily" },
    fz: { type: "fontSize", property: "fontSize" },
    fw: { type: "identity", property: "fontWeight" },
    lts: { type: "size", property: "letterSpacing" },
    ta: { type: "identity", property: "textAlign" },
    lh: { type: "identity", property: "lineHeight" },
    fs: { type: "identity", property: "fontStyle" },
    tt: { type: "identity", property: "textTransform" },
    td: { type: "identity", property: "textDecoration" },
    w: { type: "spacing", property: "width" },
    miw: { type: "spacing", property: "minWidth" },
    maw: { type: "spacing", property: "maxWidth" },
    h: { type: "spacing", property: "height" },
    mih: { type: "spacing", property: "minHeight" },
    mah: { type: "spacing", property: "maxHeight" },
    bgsz: { type: "size", property: "backgroundSize" },
    bgp: { type: "identity", property: "backgroundPosition" },
    bgr: { type: "identity", property: "backgroundRepeat" },
    bga: { type: "identity", property: "backgroundAttachment" },
    pos: { type: "identity", property: "position" },
    top: { type: "identity", property: "top" },
    left: { type: "size", property: "left" },
    bottom: { type: "size", property: "bottom" },
    right: { type: "size", property: "right" },
    inset: { type: "size", property: "inset" },
    display: { type: "identity", property: "display" },
  };
var aR = Object.defineProperty,
  vy = Object.getOwnPropertySymbols,
  lR = Object.prototype.hasOwnProperty,
  sR = Object.prototype.propertyIsEnumerable,
  wy = (e, t, r) =>
    t in e
      ? aR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Sy = (e, t) => {
    for (var r in t || (t = {})) lR.call(t, r) && wy(e, r, t[r]);
    if (vy) for (var r of vy(t)) sR.call(t, r) && wy(e, r, t[r]);
    return e;
  };
function _y(e, t, r = iR) {
  return Object.keys(r)
    .reduce(
      (o, i) => (
        i in e &&
          e[i] !== void 0 &&
          o.push(
            Xk({
              value: e[i],
              getValue: oR[r[i].type],
              property: r[i].property,
              theme: t,
            }),
          ),
        o
      ),
      [],
    )
    .reduce(
      (o, i) => (
        Object.keys(i).forEach((a) => {
          typeof i[a] == "object" && i[a] !== null && a in o
            ? (o[a] = Sy(Sy({}, o[a]), i[a]))
            : (o[a] = i[a]);
        }),
        o
      ),
      {},
    );
}
function Ey(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function uR(e, t, r) {
  const n = zo(),
    { css: o, cx: i } = yw();
  return Array.isArray(e)
    ? i(
        r,
        o(_y(t, n)),
        e.map((a) => o(Ey(a, n))),
      )
    : i(r, o(Ey(e, n)), o(_y(t, n)));
}
var cR = Object.defineProperty,
  ql = Object.getOwnPropertySymbols,
  vw = Object.prototype.hasOwnProperty,
  ww = Object.prototype.propertyIsEnumerable,
  Py = (e, t, r) =>
    t in e
      ? cR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  fR = (e, t) => {
    for (var r in t || (t = {})) vw.call(t, r) && Py(e, r, t[r]);
    if (ql) for (var r of ql(t)) ww.call(t, r) && Py(e, r, t[r]);
    return e;
  },
  dR = (e, t) => {
    var r = {};
    for (var n in e) vw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ql)
      for (var n of ql(e)) t.indexOf(n) < 0 && ww.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Sw = _.forwardRef((e, t) => {
  var r = e,
    { className: n, component: o, style: i, sx: a } = r,
    l = dR(r, ["className", "component", "style", "sx"]);
  const { systemStyles: s, rest: u } = gw(l),
    f = o || "div";
  return N.createElement(
    f,
    fR({ ref: t, className: uR(a, s, n), style: i }, u),
  );
});
Sw.displayName = "@mantine/core/Box";
const _t = Sw;
var pR = Object.defineProperty,
  hR = Object.defineProperties,
  mR = Object.getOwnPropertyDescriptors,
  Oy = Object.getOwnPropertySymbols,
  yR = Object.prototype.hasOwnProperty,
  gR = Object.prototype.propertyIsEnumerable,
  xy = (e, t, r) =>
    t in e
      ? pR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  by = (e, t) => {
    for (var r in t || (t = {})) yR.call(t, r) && xy(e, r, t[r]);
    if (Oy) for (var r of Oy(t)) gR.call(t, r) && xy(e, r, t[r]);
    return e;
  },
  vR = (e, t) => hR(e, mR(t)),
  wR = pt((e) => ({
    root: vR(by(by({}, e.fn.focusStyles()), e.fn.fontStyles()), {
      cursor: "pointer",
      border: 0,
      padding: 0,
      appearance: "none",
      fontSize: e.fontSizes.md,
      backgroundColor: "transparent",
      textAlign: "left",
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
      textDecoration: "none",
      boxSizing: "border-box",
    }),
  }));
const SR = wR;
var _R = Object.defineProperty,
  Xl = Object.getOwnPropertySymbols,
  _w = Object.prototype.hasOwnProperty,
  Ew = Object.prototype.propertyIsEnumerable,
  $y = (e, t, r) =>
    t in e
      ? _R(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ER = (e, t) => {
    for (var r in t || (t = {})) _w.call(t, r) && $y(e, r, t[r]);
    if (Xl) for (var r of Xl(t)) Ew.call(t, r) && $y(e, r, t[r]);
    return e;
  },
  PR = (e, t) => {
    var r = {};
    for (var n in e) _w.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Xl)
      for (var n of Xl(e)) t.indexOf(n) < 0 && Ew.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Pw = _.forwardRef((e, t) => {
  const r = et("UnstyledButton", {}, e),
    { className: n, component: o = "button", unstyled: i, variant: a } = r,
    l = PR(r, ["className", "component", "unstyled", "variant"]),
    { classes: s, cx: u } = SR(null, {
      name: "UnstyledButton",
      unstyled: i,
      variant: a,
    });
  return N.createElement(
    _t,
    ER(
      {
        component: o,
        ref: t,
        className: u(s.root, n),
        type: o === "button" ? "button" : void 0,
      },
      l,
    ),
  );
});
Pw.displayName = "@mantine/core/UnstyledButton";
const OR = Pw;
var xR = Object.defineProperty,
  Jl = Object.getOwnPropertySymbols,
  Ow = Object.prototype.hasOwnProperty,
  xw = Object.prototype.propertyIsEnumerable,
  Cy = (e, t, r) =>
    t in e
      ? xR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  bR = (e, t) => {
    for (var r in t || (t = {})) Ow.call(t, r) && Cy(e, r, t[r]);
    if (Jl) for (var r of Jl(t)) xw.call(t, r) && Cy(e, r, t[r]);
    return e;
  },
  $R = (e, t) => {
    var r = {};
    for (var n in e) Ow.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Jl)
      for (var n of Jl(e)) t.indexOf(n) < 0 && xw.call(e, n) && (r[n] = e[n]);
    return r;
  };
function CR(e) {
  var t = e,
    { size: r, color: n } = t,
    o = $R(t, ["size", "color"]);
  return N.createElement(
    "svg",
    bR(
      {
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n,
        width: r,
      },
      o,
    ),
    N.createElement(
      "rect",
      { y: "10", width: "15", height: "120", rx: "6" },
      N.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      N.createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
    ),
    N.createElement(
      "rect",
      { x: "30", y: "10", width: "15", height: "120", rx: "6" },
      N.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      N.createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
    ),
    N.createElement(
      "rect",
      { x: "60", width: "15", height: "140", rx: "6" },
      N.createElement("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      N.createElement("animate", {
        attributeName: "y",
        begin: "0s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
    ),
    N.createElement(
      "rect",
      { x: "90", y: "10", width: "15", height: "120", rx: "6" },
      N.createElement("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      N.createElement("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
    ),
    N.createElement(
      "rect",
      { x: "120", y: "10", width: "15", height: "120", rx: "6" },
      N.createElement("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      N.createElement("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
    ),
  );
}
var kR = Object.defineProperty,
  Zl = Object.getOwnPropertySymbols,
  bw = Object.prototype.hasOwnProperty,
  $w = Object.prototype.propertyIsEnumerable,
  ky = (e, t, r) =>
    t in e
      ? kR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  RR = (e, t) => {
    for (var r in t || (t = {})) bw.call(t, r) && ky(e, r, t[r]);
    if (Zl) for (var r of Zl(t)) $w.call(t, r) && ky(e, r, t[r]);
    return e;
  },
  NR = (e, t) => {
    var r = {};
    for (var n in e) bw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && Zl)
      for (var n of Zl(e)) t.indexOf(n) < 0 && $w.call(e, n) && (r[n] = e[n]);
    return r;
  };
function TR(e) {
  var t = e,
    { size: r, color: n } = t,
    o = NR(t, ["size", "color"]);
  return N.createElement(
    "svg",
    RR(
      {
        width: r,
        height: r,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: n,
      },
      o,
    ),
    N.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      N.createElement(
        "g",
        { transform: "translate(2.5 2.5)", strokeWidth: "5" },
        N.createElement("circle", {
          strokeOpacity: ".5",
          cx: "16",
          cy: "16",
          r: "16",
        }),
        N.createElement(
          "path",
          { d: "M32 16c0-9.94-8.06-16-16-16" },
          N.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 16 16",
            to: "360 16 16",
            dur: "1s",
            repeatCount: "indefinite",
          }),
        ),
      ),
    ),
  );
}
var IR = Object.defineProperty,
  es = Object.getOwnPropertySymbols,
  Cw = Object.prototype.hasOwnProperty,
  kw = Object.prototype.propertyIsEnumerable,
  Ry = (e, t, r) =>
    t in e
      ? IR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  jR = (e, t) => {
    for (var r in t || (t = {})) Cw.call(t, r) && Ry(e, r, t[r]);
    if (es) for (var r of es(t)) kw.call(t, r) && Ry(e, r, t[r]);
    return e;
  },
  zR = (e, t) => {
    var r = {};
    for (var n in e) Cw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && es)
      for (var n of es(e)) t.indexOf(n) < 0 && kw.call(e, n) && (r[n] = e[n]);
    return r;
  };
function AR(e) {
  var t = e,
    { size: r, color: n } = t,
    o = zR(t, ["size", "color"]);
  return N.createElement(
    "svg",
    jR(
      {
        width: r,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: n,
      },
      o,
    ),
    N.createElement(
      "circle",
      { cx: "15", cy: "15", r: "15" },
      N.createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      N.createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
    ),
    N.createElement(
      "circle",
      { cx: "60", cy: "15", r: "9", fillOpacity: "0.3" },
      N.createElement("animate", {
        attributeName: "r",
        from: "9",
        to: "9",
        begin: "0s",
        dur: "0.8s",
        values: "9;15;9",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      N.createElement("animate", {
        attributeName: "fill-opacity",
        from: "0.5",
        to: "0.5",
        begin: "0s",
        dur: "0.8s",
        values: ".5;1;.5",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
    ),
    N.createElement(
      "circle",
      { cx: "105", cy: "15", r: "15" },
      N.createElement("animate", {
        attributeName: "r",
        from: "15",
        to: "15",
        begin: "0s",
        dur: "0.8s",
        values: "15;9;15",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
      N.createElement("animate", {
        attributeName: "fill-opacity",
        from: "1",
        to: "1",
        begin: "0s",
        dur: "0.8s",
        values: "1;.5;1",
        calcMode: "linear",
        repeatCount: "indefinite",
      }),
    ),
  );
}
var DR = Object.defineProperty,
  ts = Object.getOwnPropertySymbols,
  Rw = Object.prototype.hasOwnProperty,
  Nw = Object.prototype.propertyIsEnumerable,
  Ny = (e, t, r) =>
    t in e
      ? DR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  LR = (e, t) => {
    for (var r in t || (t = {})) Rw.call(t, r) && Ny(e, r, t[r]);
    if (ts) for (var r of ts(t)) Nw.call(t, r) && Ny(e, r, t[r]);
    return e;
  },
  MR = (e, t) => {
    var r = {};
    for (var n in e) Rw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ts)
      for (var n of ts(e)) t.indexOf(n) < 0 && Nw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Pc = { bars: CR, oval: TR, dots: AR },
  FR = { xs: z(18), sm: z(22), md: z(36), lg: z(44), xl: z(58) },
  UR = { size: "md" };
function bp(e) {
  const t = et("Loader", UR, e),
    { size: r, color: n, variant: o } = t,
    i = MR(t, ["size", "color", "variant"]),
    a = zo(),
    l = o in Pc ? o : a.loader;
  return N.createElement(
    _t,
    LR(
      {
        role: "presentation",
        component: Pc[l] || Pc.bars,
        size: re({ size: r, sizes: FR }),
        color: a.fn.variant({
          variant: "filled",
          primaryFallback: !1,
          color: n || a.primaryColor,
        }).background,
      },
      i,
    ),
  );
}
bp.displayName = "@mantine/core/Loader";
var BR = Object.defineProperty,
  VR = Object.defineProperties,
  WR = Object.getOwnPropertyDescriptors,
  Ty = Object.getOwnPropertySymbols,
  HR = Object.prototype.hasOwnProperty,
  KR = Object.prototype.propertyIsEnumerable,
  Iy = (e, t, r) =>
    t in e
      ? BR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Na = (e, t) => {
    for (var r in t || (t = {})) HR.call(t, r) && Iy(e, r, t[r]);
    if (Ty) for (var r of Ty(t)) KR.call(t, r) && Iy(e, r, t[r]);
    return e;
  },
  GR = (e, t) => VR(e, WR(t));
function QR({ underline: e, strikethrough: t }) {
  const r = [];
  return (
    e && r.push("underline"),
    t && r.push("line-through"),
    r.length > 0 ? r.join(" ") : "none"
  );
}
function YR({ theme: e, color: t }) {
  return t === "dimmed"
    ? e.fn.dimmed()
    : typeof t == "string" && (t in e.colors || t.split(".")[0] in e.colors)
      ? e.fn.variant({ variant: "filled", color: t }).background
      : t || "inherit";
}
function qR(e) {
  return typeof e == "number"
    ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: e,
        WebkitBoxOrient: "vertical",
      }
    : null;
}
function XR({ theme: e, truncate: t }) {
  return t === "start"
    ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        direction: e.dir === "ltr" ? "rtl" : "ltr",
        textAlign: e.dir === "ltr" ? "right" : "left",
      }
    : t
      ? { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }
      : null;
}
var JR = pt(
  (
    e,
    {
      color: t,
      lineClamp: r,
      truncate: n,
      inline: o,
      inherit: i,
      underline: a,
      gradient: l,
      weight: s,
      transform: u,
      align: f,
      strikethrough: c,
      italic: d,
    },
    { size: w },
  ) => {
    const v = e.fn.variant({ variant: "gradient", gradient: l });
    return {
      root: GR(
        Na(
          Na(Na(Na({}, e.fn.fontStyles()), e.fn.focusStyles()), qR(r)),
          XR({ theme: e, truncate: n }),
        ),
        {
          color: YR({ color: t, theme: e }),
          fontFamily: i ? "inherit" : e.fontFamily,
          fontSize:
            i || w === void 0 ? "inherit" : re({ size: w, sizes: e.fontSizes }),
          lineHeight: i ? "inherit" : o ? 1 : e.lineHeight,
          textDecoration: QR({ underline: a, strikethrough: c }),
          WebkitTapHighlightColor: "transparent",
          fontWeight: i ? "inherit" : s,
          textTransform: u,
          textAlign: f,
          fontStyle: d ? "italic" : void 0,
        },
      ),
      gradient: {
        backgroundImage: v.background,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    };
  },
);
const ZR = JR;
var e3 = Object.defineProperty,
  rs = Object.getOwnPropertySymbols,
  Tw = Object.prototype.hasOwnProperty,
  Iw = Object.prototype.propertyIsEnumerable,
  jy = (e, t, r) =>
    t in e
      ? e3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  t3 = (e, t) => {
    for (var r in t || (t = {})) Tw.call(t, r) && jy(e, r, t[r]);
    if (rs) for (var r of rs(t)) Iw.call(t, r) && jy(e, r, t[r]);
    return e;
  },
  r3 = (e, t) => {
    var r = {};
    for (var n in e) Tw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && rs)
      for (var n of rs(e)) t.indexOf(n) < 0 && Iw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const n3 = { variant: "text" },
  jw = _.forwardRef((e, t) => {
    const r = et("Text", n3, e),
      {
        className: n,
        size: o,
        weight: i,
        transform: a,
        color: l,
        align: s,
        variant: u,
        lineClamp: f,
        truncate: c,
        gradient: d,
        inline: w,
        inherit: v,
        underline: m,
        strikethrough: y,
        italic: h,
        classNames: p,
        styles: g,
        unstyled: S,
        span: P,
        __staticSelector: O,
      } = r,
      E = r3(r, [
        "className",
        "size",
        "weight",
        "transform",
        "color",
        "align",
        "variant",
        "lineClamp",
        "truncate",
        "gradient",
        "inline",
        "inherit",
        "underline",
        "strikethrough",
        "italic",
        "classNames",
        "styles",
        "unstyled",
        "span",
        "__staticSelector",
      ]),
      { classes: k, cx: T } = ZR(
        {
          color: l,
          lineClamp: f,
          truncate: c,
          inline: w,
          inherit: v,
          underline: m,
          strikethrough: y,
          italic: h,
          weight: i,
          transform: a,
          align: s,
          gradient: d,
        },
        { unstyled: S, name: O || "Text", variant: u, size: o },
      );
    return N.createElement(
      _t,
      t3(
        {
          ref: t,
          className: T(k.root, { [k.gradient]: u === "gradient" }, n),
          component: P ? "span" : "div",
        },
        E,
      ),
    );
  });
jw.displayName = "@mantine/core/Text";
const zw = jw;
var o3 = Object.defineProperty,
  zy = Object.getOwnPropertySymbols,
  i3 = Object.prototype.hasOwnProperty,
  a3 = Object.prototype.propertyIsEnumerable,
  Ay = (e, t, r) =>
    t in e
      ? o3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Un = (e, t) => {
    for (var r in t || (t = {})) i3.call(t, r) && Ay(e, r, t[r]);
    if (zy) for (var r of zy(t)) a3.call(t, r) && Ay(e, r, t[r]);
    return e;
  };
const Dy = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out",
};
function l3({ transition: e, state: t, duration: r, timingFunction: n }) {
  const o = { transitionDuration: `${r}ms`, transitionTimingFunction: n };
  return typeof e == "string"
    ? e in Ra
      ? Un(
          Un(
            Un({ transitionProperty: Ra[e].transitionProperty }, o),
            Ra[e].common,
          ),
          Ra[e][Dy[t]],
        )
      : null
    : Un(
        Un(Un({ transitionProperty: e.transitionProperty }, o), e.common),
        e[Dy[t]],
      );
}
function s3({
  duration: e,
  exitDuration: t,
  timingFunction: r,
  mounted: n,
  onEnter: o,
  onExit: i,
  onEntered: a,
  onExited: l,
}) {
  const s = zo(),
    u = Kk(),
    f = s.respectReducedMotion ? u : !1,
    [c, d] = _.useState(f ? 0 : e),
    [w, v] = _.useState(n ? "entered" : "exited"),
    m = _.useRef(-1),
    y = (h) => {
      const p = h ? o : i,
        g = h ? a : l;
      v(h ? "pre-entering" : "pre-exiting"), window.clearTimeout(m.current);
      const S = f ? 0 : h ? e : t;
      if ((d(S), S === 0))
        typeof p == "function" && p(),
          typeof g == "function" && g(),
          v(h ? "entered" : "exited");
      else {
        const P = window.setTimeout(() => {
          typeof p == "function" && p(), v(h ? "entering" : "exiting");
        }, 10);
        m.current = window.setTimeout(() => {
          window.clearTimeout(P),
            typeof g == "function" && g(),
            v(h ? "entered" : "exited");
        }, S);
      }
    };
  return (
    Fk(() => {
      y(n);
    }, [n]),
    _.useEffect(() => () => window.clearTimeout(m.current), []),
    {
      transitionDuration: c,
      transitionStatus: w,
      transitionTimingFunction: r || s.transitionTimingFunction,
    }
  );
}
function Aw({
  keepMounted: e,
  transition: t,
  duration: r = 250,
  exitDuration: n = r,
  mounted: o,
  children: i,
  timingFunction: a,
  onExit: l,
  onEntered: s,
  onEnter: u,
  onExited: f,
}) {
  const {
    transitionDuration: c,
    transitionStatus: d,
    transitionTimingFunction: w,
  } = s3({
    mounted: o,
    exitDuration: n,
    duration: r,
    timingFunction: a,
    onExit: l,
    onEntered: s,
    onEnter: u,
    onExited: f,
  });
  return c === 0
    ? o
      ? N.createElement(N.Fragment, null, i({}))
      : e
        ? i({ display: "none" })
        : null
    : d === "exited"
      ? e
        ? i({ display: "none" })
        : null
      : N.createElement(
          N.Fragment,
          null,
          i(l3({ transition: t, duration: c, state: d, timingFunction: w })),
        );
}
Aw.displayName = "@mantine/core/Transition";
var u3 = pt((e, t, { size: r }) => ({
  label: {
    display: "inline-block",
    fontSize: re({ size: r, sizes: e.fontSizes }),
    fontWeight: 500,
    color: e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[9],
    wordBreak: "break-word",
    cursor: "default",
    WebkitTapHighlightColor: "transparent",
  },
  required: {
    color: e.fn.variant({ variant: "filled", color: "red" }).background,
  },
}));
const c3 = u3;
var f3 = Object.defineProperty,
  ns = Object.getOwnPropertySymbols,
  Dw = Object.prototype.hasOwnProperty,
  Lw = Object.prototype.propertyIsEnumerable,
  Ly = (e, t, r) =>
    t in e
      ? f3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  d3 = (e, t) => {
    for (var r in t || (t = {})) Dw.call(t, r) && Ly(e, r, t[r]);
    if (ns) for (var r of ns(t)) Lw.call(t, r) && Ly(e, r, t[r]);
    return e;
  },
  p3 = (e, t) => {
    var r = {};
    for (var n in e) Dw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ns)
      for (var n of ns(e)) t.indexOf(n) < 0 && Lw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const h3 = { labelElement: "label", size: "sm" },
  $p = _.forwardRef((e, t) => {
    const r = et("InputLabel", h3, e),
      {
        labelElement: n,
        children: o,
        required: i,
        size: a,
        classNames: l,
        styles: s,
        unstyled: u,
        className: f,
        htmlFor: c,
        __staticSelector: d,
        variant: w,
        onMouseDown: v,
      } = r,
      m = p3(r, [
        "labelElement",
        "children",
        "required",
        "size",
        "classNames",
        "styles",
        "unstyled",
        "className",
        "htmlFor",
        "__staticSelector",
        "variant",
        "onMouseDown",
      ]),
      { classes: y, cx: h } = c3(null, {
        name: ["InputWrapper", d],
        classNames: l,
        styles: s,
        unstyled: u,
        variant: w,
        size: a,
      });
    return N.createElement(
      _t,
      d3(
        {
          component: n,
          ref: t,
          className: h(y.label, f),
          htmlFor: n === "label" ? c : void 0,
          onMouseDown: (p) => {
            v == null || v(p),
              !p.defaultPrevented && p.detail > 1 && p.preventDefault();
          },
        },
        m,
      ),
      o,
      i &&
        N.createElement(
          "span",
          { className: y.required, "aria-hidden": !0 },
          " *",
        ),
    );
  });
$p.displayName = "@mantine/core/InputLabel";
var m3 = pt((e, t, { size: r }) => ({
  error: {
    wordBreak: "break-word",
    color: e.fn.variant({ variant: "filled", color: "red" }).background,
    fontSize: `calc(${re({ size: r, sizes: e.fontSizes })} - ${z(2)})`,
    lineHeight: 1.2,
    display: "block",
  },
}));
const y3 = m3;
var g3 = Object.defineProperty,
  os = Object.getOwnPropertySymbols,
  Mw = Object.prototype.hasOwnProperty,
  Fw = Object.prototype.propertyIsEnumerable,
  My = (e, t, r) =>
    t in e
      ? g3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  v3 = (e, t) => {
    for (var r in t || (t = {})) Mw.call(t, r) && My(e, r, t[r]);
    if (os) for (var r of os(t)) Fw.call(t, r) && My(e, r, t[r]);
    return e;
  },
  w3 = (e, t) => {
    var r = {};
    for (var n in e) Mw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && os)
      for (var n of os(e)) t.indexOf(n) < 0 && Fw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const S3 = { size: "sm" },
  Cp = _.forwardRef((e, t) => {
    const r = et("InputError", S3, e),
      {
        children: n,
        className: o,
        classNames: i,
        styles: a,
        unstyled: l,
        size: s,
        __staticSelector: u,
        variant: f,
      } = r,
      c = w3(r, [
        "children",
        "className",
        "classNames",
        "styles",
        "unstyled",
        "size",
        "__staticSelector",
        "variant",
      ]),
      { classes: d, cx: w } = y3(null, {
        name: ["InputWrapper", u],
        classNames: i,
        styles: a,
        unstyled: l,
        variant: f,
        size: s,
      });
    return N.createElement(zw, v3({ className: w(d.error, o), ref: t }, c), n);
  });
Cp.displayName = "@mantine/core/InputError";
var _3 = pt((e, t, { size: r }) => ({
  description: {
    wordBreak: "break-word",
    color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6],
    fontSize: `calc(${re({ size: r, sizes: e.fontSizes })} - ${z(2)})`,
    lineHeight: 1.2,
    display: "block",
  },
}));
const E3 = _3;
var P3 = Object.defineProperty,
  is = Object.getOwnPropertySymbols,
  Uw = Object.prototype.hasOwnProperty,
  Bw = Object.prototype.propertyIsEnumerable,
  Fy = (e, t, r) =>
    t in e
      ? P3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  O3 = (e, t) => {
    for (var r in t || (t = {})) Uw.call(t, r) && Fy(e, r, t[r]);
    if (is) for (var r of is(t)) Bw.call(t, r) && Fy(e, r, t[r]);
    return e;
  },
  x3 = (e, t) => {
    var r = {};
    for (var n in e) Uw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && is)
      for (var n of is(e)) t.indexOf(n) < 0 && Bw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const b3 = { size: "sm" },
  kp = _.forwardRef((e, t) => {
    const r = et("InputDescription", b3, e),
      {
        children: n,
        className: o,
        classNames: i,
        styles: a,
        unstyled: l,
        size: s,
        __staticSelector: u,
        variant: f,
      } = r,
      c = x3(r, [
        "children",
        "className",
        "classNames",
        "styles",
        "unstyled",
        "size",
        "__staticSelector",
        "variant",
      ]),
      { classes: d, cx: w } = E3(null, {
        name: ["InputWrapper", u],
        classNames: i,
        styles: a,
        unstyled: l,
        variant: f,
        size: s,
      });
    return N.createElement(
      zw,
      O3(
        {
          color: "dimmed",
          className: w(d.description, o),
          ref: t,
          unstyled: l,
        },
        c,
      ),
      n,
    );
  });
kp.displayName = "@mantine/core/InputDescription";
const Vw = _.createContext({
    offsetBottom: !1,
    offsetTop: !1,
    describedBy: void 0,
  }),
  $3 = Vw.Provider,
  C3 = () => _.useContext(Vw);
function k3(e, { hasDescription: t, hasError: r }) {
  const n = e.findIndex((s) => s === "input"),
    o = e[n - 1],
    i = e[n + 1];
  return {
    offsetBottom: (t && i === "description") || (r && i === "error"),
    offsetTop: (t && o === "description") || (r && o === "error"),
  };
}
var R3 = Object.defineProperty,
  N3 = Object.defineProperties,
  T3 = Object.getOwnPropertyDescriptors,
  Uy = Object.getOwnPropertySymbols,
  I3 = Object.prototype.hasOwnProperty,
  j3 = Object.prototype.propertyIsEnumerable,
  By = (e, t, r) =>
    t in e
      ? R3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  z3 = (e, t) => {
    for (var r in t || (t = {})) I3.call(t, r) && By(e, r, t[r]);
    if (Uy) for (var r of Uy(t)) j3.call(t, r) && By(e, r, t[r]);
    return e;
  },
  A3 = (e, t) => N3(e, T3(t)),
  D3 = pt((e) => ({
    root: A3(z3({}, e.fn.fontStyles()), { lineHeight: e.lineHeight }),
  }));
const L3 = D3;
var M3 = Object.defineProperty,
  F3 = Object.defineProperties,
  U3 = Object.getOwnPropertyDescriptors,
  as = Object.getOwnPropertySymbols,
  Ww = Object.prototype.hasOwnProperty,
  Hw = Object.prototype.propertyIsEnumerable,
  Vy = (e, t, r) =>
    t in e
      ? M3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Nr = (e, t) => {
    for (var r in t || (t = {})) Ww.call(t, r) && Vy(e, r, t[r]);
    if (as) for (var r of as(t)) Hw.call(t, r) && Vy(e, r, t[r]);
    return e;
  },
  Wy = (e, t) => F3(e, U3(t)),
  B3 = (e, t) => {
    var r = {};
    for (var n in e) Ww.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && as)
      for (var n of as(e)) t.indexOf(n) < 0 && Hw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const V3 = {
    labelElement: "label",
    size: "sm",
    inputContainer: (e) => e,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  Kw = _.forwardRef((e, t) => {
    const r = et("InputWrapper", V3, e),
      {
        className: n,
        label: o,
        children: i,
        required: a,
        id: l,
        error: s,
        description: u,
        labelElement: f,
        labelProps: c,
        descriptionProps: d,
        errorProps: w,
        classNames: v,
        styles: m,
        size: y,
        inputContainer: h,
        __staticSelector: p,
        unstyled: g,
        inputWrapperOrder: S,
        withAsterisk: P,
        variant: O,
      } = r,
      E = B3(r, [
        "className",
        "label",
        "children",
        "required",
        "id",
        "error",
        "description",
        "labelElement",
        "labelProps",
        "descriptionProps",
        "errorProps",
        "classNames",
        "styles",
        "size",
        "inputContainer",
        "__staticSelector",
        "unstyled",
        "inputWrapperOrder",
        "withAsterisk",
        "variant",
      ]),
      { classes: k, cx: T } = L3(null, {
        classNames: v,
        styles: m,
        name: ["InputWrapper", p],
        unstyled: g,
        variant: O,
        size: y,
      }),
      D = {
        classNames: v,
        styles: m,
        unstyled: g,
        size: y,
        variant: O,
        __staticSelector: p,
      },
      Y = typeof P == "boolean" ? P : a,
      J = l ? `${l}-error` : w == null ? void 0 : w.id,
      he = l ? `${l}-description` : d == null ? void 0 : d.id,
      ge = `${!!s && typeof s != "boolean" ? J : ""} ${u ? he : ""}`,
      ze = ge.trim().length > 0 ? ge.trim() : void 0,
      Fe =
        o &&
        N.createElement(
          $p,
          Nr(
            Nr(
              {
                key: "label",
                labelElement: f,
                id: l ? `${l}-label` : void 0,
                htmlFor: l,
                required: Y,
              },
              D,
            ),
            c,
          ),
          o,
        ),
      j =
        u &&
        N.createElement(
          kp,
          Wy(Nr(Nr({ key: "description" }, d), D), {
            size: (d == null ? void 0 : d.size) || D.size,
            id: (d == null ? void 0 : d.id) || he,
          }),
          u,
        ),
      B = N.createElement(_.Fragment, { key: "input" }, h(i)),
      M =
        typeof s != "boolean" &&
        s &&
        N.createElement(
          Cp,
          Wy(Nr(Nr({}, w), D), {
            size: (w == null ? void 0 : w.size) || D.size,
            key: "error",
            id: (w == null ? void 0 : w.id) || J,
          }),
          s,
        ),
      H = S.map((ne) => {
        switch (ne) {
          case "label":
            return Fe;
          case "input":
            return B;
          case "description":
            return j;
          case "error":
            return M;
          default:
            return null;
        }
      });
    return N.createElement(
      $3,
      {
        value: Nr(
          { describedBy: ze },
          k3(S, { hasDescription: !!j, hasError: !!M }),
        ),
      },
      N.createElement(_t, Nr({ className: T(k.root, n), ref: t }, E), H),
    );
  });
Kw.displayName = "@mantine/core/InputWrapper";
var W3 = Object.defineProperty,
  ls = Object.getOwnPropertySymbols,
  Gw = Object.prototype.hasOwnProperty,
  Qw = Object.prototype.propertyIsEnumerable,
  Hy = (e, t, r) =>
    t in e
      ? W3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  H3 = (e, t) => {
    for (var r in t || (t = {})) Gw.call(t, r) && Hy(e, r, t[r]);
    if (ls) for (var r of ls(t)) Qw.call(t, r) && Hy(e, r, t[r]);
    return e;
  },
  K3 = (e, t) => {
    var r = {};
    for (var n in e) Gw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ls)
      for (var n of ls(e)) t.indexOf(n) < 0 && Qw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const G3 = {},
  Yw = _.forwardRef((e, t) => {
    const r = et("InputPlaceholder", G3, e),
      { sx: n } = r,
      o = K3(r, ["sx"]);
    return N.createElement(
      _t,
      H3(
        {
          component: "span",
          sx: [(i) => i.fn.placeholderStyles(), ...$2(n)],
          ref: t,
        },
        o,
      ),
    );
  });
Yw.displayName = "@mantine/core/InputPlaceholder";
var Q3 = Object.defineProperty,
  Y3 = Object.defineProperties,
  q3 = Object.getOwnPropertyDescriptors,
  Ky = Object.getOwnPropertySymbols,
  X3 = Object.prototype.hasOwnProperty,
  J3 = Object.prototype.propertyIsEnumerable,
  Gy = (e, t, r) =>
    t in e
      ? Q3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ta = (e, t) => {
    for (var r in t || (t = {})) X3.call(t, r) && Gy(e, r, t[r]);
    if (Ky) for (var r of Ky(t)) J3.call(t, r) && Gy(e, r, t[r]);
    return e;
  },
  Oc = (e, t) => Y3(e, q3(t));
const at = { xs: z(30), sm: z(36), md: z(42), lg: z(50), xl: z(60) },
  Z3 = ["default", "filled", "unstyled"];
function e5({ theme: e, variant: t }) {
  return Z3.includes(t)
    ? t === "default"
      ? {
          border: `${z(1)} solid ${
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4]
          }`,
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
          transition: "border-color 100ms ease",
          "&:focus, &:focus-within": e.focusRingStyles.inputStyles(e),
        }
      : t === "filled"
        ? {
            border: `${z(1)} solid transparent`,
            backgroundColor:
              e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[1],
            "&:focus, &:focus-within": e.focusRingStyles.inputStyles(e),
          }
        : {
            borderWidth: 0,
            color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
            backgroundColor: "transparent",
            minHeight: z(28),
            outline: 0,
            "&:focus, &:focus-within": {
              outline: "none",
              borderColor: "transparent",
            },
            "&:disabled": {
              backgroundColor: "transparent",
              "&:focus, &:focus-within": {
                outline: "none",
                borderColor: "transparent",
              },
            },
          }
    : null;
}
var t5 = pt(
  (
    e,
    {
      multiline: t,
      radius: r,
      invalid: n,
      rightSectionWidth: o,
      withRightSection: i,
      iconWidth: a,
      offsetBottom: l,
      offsetTop: s,
      pointer: u,
    },
    { variant: f, size: c },
  ) => {
    const d = e.fn.variant({ variant: "filled", color: "red" }).background,
      w =
        f === "default" || f === "filled"
          ? {
              minHeight: re({ size: c, sizes: at }),
              paddingLeft: `calc(${re({ size: c, sizes: at })}  / 3)`,
              paddingRight: i
                ? o || re({ size: c, sizes: at })
                : `calc(${re({ size: c, sizes: at })}  / 3)`,
              borderRadius: e.fn.radius(r),
            }
          : null;
    return {
      wrapper: {
        position: "relative",
        marginTop: s ? `calc(${e.spacing.xs} / 2)` : void 0,
        marginBottom: l ? `calc(${e.spacing.xs} / 2)` : void 0,
      },
      input: Oc(
        Ta(
          Ta(
            Oc(Ta({}, e.fn.fontStyles()), {
              height: t
                ? f === "unstyled"
                  ? void 0
                  : "auto"
                : re({ size: c, sizes: at }),
              WebkitTapHighlightColor: "transparent",
              lineHeight: t
                ? e.lineHeight
                : `calc(${re({ size: c, sizes: at })} - ${z(2)})`,
              appearance: "none",
              resize: "none",
              boxSizing: "border-box",
              fontSize: re({ size: c, sizes: e.fontSizes }),
              width: "100%",
              color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
              display: "block",
              textAlign: "left",
              cursor: u ? "pointer" : void 0,
            }),
            e5({ theme: e, variant: f }),
          ),
          w,
        ),
        {
          "&:disabled, &[data-disabled]": {
            backgroundColor:
              e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[1],
            color: e.colors.dark[2],
            opacity: 0.6,
            cursor: "not-allowed",
            "&::placeholder": { color: e.colors.dark[2] },
          },
          "&[data-invalid]": {
            color: d,
            borderColor: d,
            "&::placeholder": { opacity: 1, color: d },
          },
          "&[data-with-icon]": {
            paddingLeft:
              typeof a == "number" ? z(a) : re({ size: c, sizes: at }),
          },
          "&::placeholder": Oc(Ta({}, e.fn.placeholderStyles()), {
            opacity: 1,
          }),
          "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
            { appearance: "none" },
          "&[type=number]": { MozAppearance: "textfield" },
        },
      ),
      icon: {
        pointerEvents: "none",
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: a ? z(a) : re({ size: c, sizes: at }),
        color: n
          ? e.colors.red[e.colorScheme === "dark" ? 6 : 7]
          : e.colorScheme === "dark"
            ? e.colors.dark[2]
            : e.colors.gray[5],
      },
      rightSection: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: o || re({ size: c, sizes: at }),
      },
    };
  },
);
const r5 = t5;
var n5 = Object.defineProperty,
  o5 = Object.defineProperties,
  i5 = Object.getOwnPropertyDescriptors,
  ss = Object.getOwnPropertySymbols,
  qw = Object.prototype.hasOwnProperty,
  Xw = Object.prototype.propertyIsEnumerable,
  Qy = (e, t, r) =>
    t in e
      ? n5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ia = (e, t) => {
    for (var r in t || (t = {})) qw.call(t, r) && Qy(e, r, t[r]);
    if (ss) for (var r of ss(t)) Xw.call(t, r) && Qy(e, r, t[r]);
    return e;
  },
  Yy = (e, t) => o5(e, i5(t)),
  a5 = (e, t) => {
    var r = {};
    for (var n in e) qw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ss)
      for (var n of ss(e)) t.indexOf(n) < 0 && Xw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const l5 = { size: "sm", variant: "default" },
  In = _.forwardRef((e, t) => {
    const r = et("Input", l5, e),
      {
        className: n,
        error: o,
        required: i,
        disabled: a,
        variant: l,
        icon: s,
        style: u,
        rightSectionWidth: f,
        iconWidth: c,
        rightSection: d,
        rightSectionProps: w,
        radius: v,
        size: m,
        wrapperProps: y,
        classNames: h,
        styles: p,
        __staticSelector: g,
        multiline: S,
        sx: P,
        unstyled: O,
        pointer: E,
      } = r,
      k = a5(r, [
        "className",
        "error",
        "required",
        "disabled",
        "variant",
        "icon",
        "style",
        "rightSectionWidth",
        "iconWidth",
        "rightSection",
        "rightSectionProps",
        "radius",
        "size",
        "wrapperProps",
        "classNames",
        "styles",
        "__staticSelector",
        "multiline",
        "sx",
        "unstyled",
        "pointer",
      ]),
      { offsetBottom: T, offsetTop: D, describedBy: Y } = C3(),
      { classes: J, cx: he } = r5(
        {
          radius: v,
          multiline: S,
          invalid: !!o,
          rightSectionWidth: f ? z(f) : void 0,
          iconWidth: c,
          withRightSection: !!d,
          offsetBottom: T,
          offsetTop: D,
          pointer: E,
        },
        {
          classNames: h,
          styles: p,
          name: ["Input", g],
          unstyled: O,
          variant: l,
          size: m,
        },
      ),
      { systemStyles: xe, rest: ge } = gw(k);
    return N.createElement(
      _t,
      Ia(Ia({ className: he(J.wrapper, n), sx: P, style: u }, xe), y),
      s && N.createElement("div", { className: J.icon }, s),
      N.createElement(
        _t,
        Yy(Ia({ component: "input" }, ge), {
          ref: t,
          required: i,
          "aria-invalid": !!o,
          "aria-describedby": Y,
          disabled: a,
          "data-disabled": a || void 0,
          "data-with-icon": !!s || void 0,
          "data-invalid": !!o || void 0,
          className: J.input,
        }),
      ),
      d &&
        N.createElement("div", Yy(Ia({}, w), { className: J.rightSection }), d),
    );
  });
In.displayName = "@mantine/core/Input";
In.Wrapper = Kw;
In.Label = $p;
In.Description = kp;
In.Error = Cp;
In.Placeholder = Yw;
const s5 = In;
var u5 = pt((e, { orientation: t, buttonBorderWidth: r }) => ({
  root: {
    display: "flex",
    flexDirection: t === "vertical" ? "column" : "row",
    "& [data-button]": {
      "&:first-of-type:not(:last-of-type)": {
        borderBottomRightRadius: 0,
        [t === "vertical" ? "borderBottomLeftRadius" : "borderTopRightRadius"]:
          0,
        [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]:
          `calc(${z(r)} / 2)`,
      },
      "&:last-of-type:not(:first-of-type)": {
        borderTopLeftRadius: 0,
        [t === "vertical" ? "borderTopRightRadius" : "borderBottomLeftRadius"]:
          0,
        [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${z(
          r,
        )} / 2)`,
      },
      "&:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0,
        [t === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${z(
          r,
        )} / 2)`,
        [t === "vertical" ? "borderBottomWidth" : "borderRightWidth"]:
          `calc(${z(r)} / 2)`,
      },
      "& + [data-button]": {
        [t === "vertical" ? "marginTop" : "marginLeft"]: `calc(${r} * -1)`,
        "@media (min-resolution: 192dpi)": {
          [t === "vertical" ? "marginTop" : "marginLeft"]: 0,
        },
      },
    },
  },
}));
const c5 = u5;
var f5 = Object.defineProperty,
  us = Object.getOwnPropertySymbols,
  Jw = Object.prototype.hasOwnProperty,
  Zw = Object.prototype.propertyIsEnumerable,
  qy = (e, t, r) =>
    t in e
      ? f5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  d5 = (e, t) => {
    for (var r in t || (t = {})) Jw.call(t, r) && qy(e, r, t[r]);
    if (us) for (var r of us(t)) Zw.call(t, r) && qy(e, r, t[r]);
    return e;
  },
  p5 = (e, t) => {
    var r = {};
    for (var n in e) Jw.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && us)
      for (var n of us(e)) t.indexOf(n) < 0 && Zw.call(e, n) && (r[n] = e[n]);
    return r;
  };
const h5 = { orientation: "horizontal", buttonBorderWidth: 1 },
  eS = _.forwardRef((e, t) => {
    const r = et("ButtonGroup", h5, e),
      { className: n, orientation: o, buttonBorderWidth: i, unstyled: a } = r,
      l = p5(r, ["className", "orientation", "buttonBorderWidth", "unstyled"]),
      { classes: s, cx: u } = c5(
        { orientation: o, buttonBorderWidth: i },
        { name: "ButtonGroup", unstyled: a },
      );
    return N.createElement(_t, d5({ className: u(s.root, n), ref: t }, l));
  });
eS.displayName = "@mantine/core/ButtonGroup";
var m5 = Object.defineProperty,
  y5 = Object.defineProperties,
  g5 = Object.getOwnPropertyDescriptors,
  Xy = Object.getOwnPropertySymbols,
  v5 = Object.prototype.hasOwnProperty,
  w5 = Object.prototype.propertyIsEnumerable,
  Jy = (e, t, r) =>
    t in e
      ? m5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  pr = (e, t) => {
    for (var r in t || (t = {})) v5.call(t, r) && Jy(e, r, t[r]);
    if (Xy) for (var r of Xy(t)) w5.call(t, r) && Jy(e, r, t[r]);
    return e;
  },
  ll = (e, t) => y5(e, g5(t));
const S5 = [
    "filled",
    "outline",
    "light",
    "white",
    "default",
    "subtle",
    "gradient",
  ],
  Bf = {
    xs: { height: at.xs, paddingLeft: z(14), paddingRight: z(14) },
    sm: { height: at.sm, paddingLeft: z(18), paddingRight: z(18) },
    md: { height: at.md, paddingLeft: z(22), paddingRight: z(22) },
    lg: { height: at.lg, paddingLeft: z(26), paddingRight: z(26) },
    xl: { height: at.xl, paddingLeft: z(32), paddingRight: z(32) },
    "compact-xs": { height: z(22), paddingLeft: z(7), paddingRight: z(7) },
    "compact-sm": { height: z(26), paddingLeft: z(8), paddingRight: z(8) },
    "compact-md": { height: z(30), paddingLeft: z(10), paddingRight: z(10) },
    "compact-lg": { height: z(34), paddingLeft: z(12), paddingRight: z(12) },
    "compact-xl": { height: z(40), paddingLeft: z(14), paddingRight: z(14) },
  };
function _5({ compact: e, size: t, withLeftIcon: r, withRightIcon: n }) {
  if (e) return Bf[`compact-${t}`];
  const o = Bf[t];
  return o
    ? ll(pr({}, o), {
        paddingLeft: r ? `calc(${o.paddingLeft}  / 1.5)` : o.paddingLeft,
        paddingRight: n ? `calc(${o.paddingRight}  / 1.5)` : o.paddingRight,
      })
    : {};
}
const E5 = (e) => ({
  display: e ? "block" : "inline-block",
  width: e ? "100%" : "auto",
});
function P5({ variant: e, theme: t, color: r, gradient: n }) {
  if (!S5.includes(e)) return null;
  const o = t.fn.variant({ color: r, variant: e, gradient: n });
  return e === "gradient"
    ? pr(
        { border: 0, backgroundImage: o.background, color: o.color },
        t.fn.hover({ backgroundSize: "200%" }),
      )
    : pr(
        {
          border: `${z(1)} solid ${o.border}`,
          backgroundColor: o.background,
          color: o.color,
        },
        t.fn.hover({ backgroundColor: o.hover }),
      );
}
var O5 = pt(
  (
    e,
    {
      radius: t,
      fullWidth: r,
      compact: n,
      withLeftIcon: o,
      withRightIcon: i,
      color: a,
      gradient: l,
    },
    { variant: s, size: u },
  ) => ({
    root: ll(
      pr(
        ll(
          pr(
            pr(
              pr(
                pr(
                  {},
                  _5({
                    compact: n,
                    size: u,
                    withLeftIcon: o,
                    withRightIcon: i,
                  }),
                ),
                e.fn.fontStyles(),
              ),
              e.fn.focusStyles(),
            ),
            E5(r),
          ),
          {
            borderRadius: e.fn.radius(t),
            fontWeight: 600,
            position: "relative",
            lineHeight: 1,
            fontSize: re({ size: u, sizes: e.fontSizes }),
            userSelect: "none",
            cursor: "pointer",
          },
        ),
        P5({ variant: s, theme: e, color: a, gradient: l }),
      ),
      {
        "&:active": e.activeStyles,
        "&:disabled, &[data-disabled]": {
          borderColor: "transparent",
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
          color: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[5],
          cursor: "not-allowed",
          backgroundImage: "none",
          pointerEvents: "none",
          "&:active": { transform: "none" },
        },
        "&[data-loading]": {
          pointerEvents: "none",
          "&::before": ll(pr({ content: '""' }, e.fn.cover(z(-1))), {
            backgroundColor:
              e.colorScheme === "dark"
                ? e.fn.rgba(e.colors.dark[7], 0.5)
                : "rgba(255, 255, 255, .5)",
            borderRadius: e.fn.radius(t),
            cursor: "not-allowed",
          }),
        },
      },
    ),
    icon: { display: "flex", alignItems: "center" },
    leftIcon: { marginRight: e.spacing.xs },
    rightIcon: { marginLeft: e.spacing.xs },
    centerLoader: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      opacity: 0.5,
    },
    inner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      overflow: "visible",
    },
    label: {
      whiteSpace: "nowrap",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
    },
  }),
);
const x5 = O5;
var b5 = Object.defineProperty,
  cs = Object.getOwnPropertySymbols,
  tS = Object.prototype.hasOwnProperty,
  rS = Object.prototype.propertyIsEnumerable,
  Zy = (e, t, r) =>
    t in e
      ? b5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  eg = (e, t) => {
    for (var r in t || (t = {})) tS.call(t, r) && Zy(e, r, t[r]);
    if (cs) for (var r of cs(t)) rS.call(t, r) && Zy(e, r, t[r]);
    return e;
  },
  $5 = (e, t) => {
    var r = {};
    for (var n in e) tS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && cs)
      for (var n of cs(e)) t.indexOf(n) < 0 && rS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const C5 = {
    size: "sm",
    type: "button",
    variant: "filled",
    loaderPosition: "left",
  },
  Rp = _.forwardRef((e, t) => {
    const r = et("Button", C5, e),
      {
        className: n,
        size: o,
        color: i,
        type: a,
        disabled: l,
        children: s,
        leftIcon: u,
        rightIcon: f,
        fullWidth: c,
        variant: d,
        radius: w,
        uppercase: v,
        compact: m,
        loading: y,
        loaderPosition: h,
        loaderProps: p,
        gradient: g,
        classNames: S,
        styles: P,
        unstyled: O,
      } = r,
      E = $5(r, [
        "className",
        "size",
        "color",
        "type",
        "disabled",
        "children",
        "leftIcon",
        "rightIcon",
        "fullWidth",
        "variant",
        "radius",
        "uppercase",
        "compact",
        "loading",
        "loaderPosition",
        "loaderProps",
        "gradient",
        "classNames",
        "styles",
        "unstyled",
      ]),
      {
        classes: k,
        cx: T,
        theme: D,
      } = x5(
        {
          radius: w,
          color: i,
          fullWidth: c,
          compact: m,
          gradient: g,
          withLeftIcon: !!u,
          withRightIcon: !!f,
        },
        {
          name: "Button",
          unstyled: O,
          classNames: S,
          styles: P,
          variant: d,
          size: o,
        },
      ),
      Y = D.fn.variant({ color: i, variant: d }),
      J = N.createElement(
        bp,
        eg(
          {
            color: Y.color,
            size: `calc(${re({ size: o, sizes: Bf }).height} / 2)`,
          },
          p,
        ),
      );
    return N.createElement(
      OR,
      eg(
        {
          className: T(k.root, n),
          type: a,
          disabled: l,
          "data-button": !0,
          "data-disabled": l || void 0,
          "data-loading": y || void 0,
          ref: t,
          unstyled: O,
        },
        E,
      ),
      N.createElement(
        "div",
        { className: k.inner },
        (u || (y && h === "left")) &&
          N.createElement(
            "span",
            { className: T(k.icon, k.leftIcon) },
            y && h === "left" ? J : u,
          ),
        y &&
          h === "center" &&
          N.createElement("span", { className: k.centerLoader }, J),
        N.createElement(
          "span",
          {
            className: k.label,
            style: { textTransform: v ? "uppercase" : void 0 },
          },
          s,
        ),
        (f || (y && h === "right")) &&
          N.createElement(
            "span",
            { className: T(k.icon, k.rightIcon) },
            y && h === "right" ? J : f,
          ),
      ),
    );
  });
Rp.displayName = "@mantine/core/Button";
Rp.Group = eS;
const k5 = Rp;
var R5 = pt((e, { fluid: t, sizes: r }, { size: n }) => ({
  root: {
    paddingLeft: e.spacing.md,
    paddingRight: e.spacing.md,
    maxWidth: t ? "100%" : re({ size: n, sizes: r }),
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
const N5 = R5;
var T5 = Object.defineProperty,
  fs = Object.getOwnPropertySymbols,
  nS = Object.prototype.hasOwnProperty,
  oS = Object.prototype.propertyIsEnumerable,
  tg = (e, t, r) =>
    t in e
      ? T5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  I5 = (e, t) => {
    for (var r in t || (t = {})) nS.call(t, r) && tg(e, r, t[r]);
    if (fs) for (var r of fs(t)) oS.call(t, r) && tg(e, r, t[r]);
    return e;
  },
  j5 = (e, t) => {
    var r = {};
    for (var n in e) nS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && fs)
      for (var n of fs(e)) t.indexOf(n) < 0 && oS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const z5 = {
    sizes: { xs: z(540), sm: z(720), md: z(960), lg: z(1140), xl: z(1320) },
  },
  Np = _.forwardRef((e, t) => {
    const r = et("Container", z5, e),
      {
        className: n,
        fluid: o,
        size: i,
        unstyled: a,
        sizes: l,
        variant: s,
      } = r,
      u = j5(r, ["className", "fluid", "size", "unstyled", "sizes", "variant"]),
      { classes: f, cx: c } = N5(
        { fluid: o, sizes: l },
        { unstyled: a, name: "Container", variant: s, size: i },
      );
    return N.createElement(_t, I5({ className: c(f.root, n), ref: t }, u));
  });
Np.displayName = "@mantine/core/Container";
var A5 = Object.defineProperty,
  D5 = Object.defineProperties,
  L5 = Object.getOwnPropertyDescriptors,
  rg = Object.getOwnPropertySymbols,
  M5 = Object.prototype.hasOwnProperty,
  F5 = Object.prototype.propertyIsEnumerable,
  ng = (e, t, r) =>
    t in e
      ? A5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  U5 = (e, t) => {
    for (var r in t || (t = {})) M5.call(t, r) && ng(e, r, t[r]);
    if (rg) for (var r of rg(t)) F5.call(t, r) && ng(e, r, t[r]);
    return e;
  },
  B5 = (e, t) => D5(e, L5(t)),
  V5 = pt(
    (
      e,
      {
        color: t,
        opacity: r,
        blur: n,
        radius: o,
        gradient: i,
        fixed: a,
        zIndex: l,
      },
    ) => ({
      root: B5(U5({}, e.fn.cover(0)), {
        position: a ? "fixed" : "absolute",
        backgroundColor: i ? void 0 : e.fn.rgba(t, r),
        backgroundImage: i,
        backdropFilter: n ? `blur(${z(n)})` : void 0,
        borderRadius: e.fn.radius(o),
        zIndex: l,
        "&[data-center]": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }),
    }),
  );
const W5 = V5;
var H5 = Object.defineProperty,
  ds = Object.getOwnPropertySymbols,
  iS = Object.prototype.hasOwnProperty,
  aS = Object.prototype.propertyIsEnumerable,
  og = (e, t, r) =>
    t in e
      ? H5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  K5 = (e, t) => {
    for (var r in t || (t = {})) iS.call(t, r) && og(e, r, t[r]);
    if (ds) for (var r of ds(t)) aS.call(t, r) && og(e, r, t[r]);
    return e;
  },
  G5 = (e, t) => {
    var r = {};
    for (var n in e) iS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ds)
      for (var n of ds(e)) t.indexOf(n) < 0 && aS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const Q5 = { opacity: 0.6, color: "#000", zIndex: mw("modal"), radius: 0 },
  lS = _.forwardRef((e, t) => {
    const r = et("Overlay", Q5, e),
      {
        variant: n,
        opacity: o,
        color: i,
        blur: a,
        gradient: l,
        zIndex: s,
        radius: u,
        children: f,
        className: c,
        classNames: d,
        styles: w,
        unstyled: v,
        center: m,
        fixed: y,
      } = r,
      h = G5(r, [
        "variant",
        "opacity",
        "color",
        "blur",
        "gradient",
        "zIndex",
        "radius",
        "children",
        "className",
        "classNames",
        "styles",
        "unstyled",
        "center",
        "fixed",
      ]),
      { classes: p, cx: g } = W5(
        {
          color: i,
          opacity: o,
          blur: a,
          radius: u,
          gradient: l,
          fixed: y,
          zIndex: s,
        },
        { name: "Overlay", classNames: d, styles: w, unstyled: v, variant: n },
      );
    return N.createElement(
      _t,
      K5({ ref: t, className: g(p.root, c), "data-center": m || void 0 }, h),
      f,
    );
  });
lS.displayName = "@mantine/core/Overlay";
const Y5 = lS;
function q5(e) {
  return _.Children.toArray(e).filter(Boolean);
}
const X5 = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
  apart: "space-between",
};
var J5 = pt(
  (e, { spacing: t, position: r, noWrap: n, grow: o, align: i, count: a }) => ({
    root: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      alignItems: i || "center",
      flexWrap: n ? "nowrap" : "wrap",
      justifyContent: X5[r],
      gap: re({ size: t, sizes: e.spacing }),
      "& > *": {
        boxSizing: "border-box",
        maxWidth: o
          ? `calc(${100 / a}% - (${z(re({ size: t, sizes: e.spacing }))} - ${re(
              { size: t, sizes: e.spacing },
            )} / ${a}))`
          : void 0,
        flexGrow: o ? 1 : 0,
      },
    },
  }),
);
const Z5 = J5;
var eN = Object.defineProperty,
  ps = Object.getOwnPropertySymbols,
  sS = Object.prototype.hasOwnProperty,
  uS = Object.prototype.propertyIsEnumerable,
  ig = (e, t, r) =>
    t in e
      ? eN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  tN = (e, t) => {
    for (var r in t || (t = {})) sS.call(t, r) && ig(e, r, t[r]);
    if (ps) for (var r of ps(t)) uS.call(t, r) && ig(e, r, t[r]);
    return e;
  },
  rN = (e, t) => {
    var r = {};
    for (var n in e) sS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ps)
      for (var n of ps(e)) t.indexOf(n) < 0 && uS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const nN = { position: "left", spacing: "md" },
  cS = _.forwardRef((e, t) => {
    const r = et("Group", nN, e),
      {
        className: n,
        position: o,
        align: i,
        children: a,
        noWrap: l,
        grow: s,
        spacing: u,
        unstyled: f,
        variant: c,
      } = r,
      d = rN(r, [
        "className",
        "position",
        "align",
        "children",
        "noWrap",
        "grow",
        "spacing",
        "unstyled",
        "variant",
      ]),
      w = q5(a),
      { classes: v, cx: m } = Z5(
        {
          align: i,
          grow: s,
          noWrap: l,
          spacing: u,
          position: o,
          count: w.length,
        },
        { unstyled: f, name: "Group", variant: c },
      );
    return N.createElement(_t, tN({ className: m(v.root, n), ref: t }, d), w);
  });
cS.displayName = "@mantine/core/Group";
var oN = Object.defineProperty,
  iN = Object.defineProperties,
  aN = Object.getOwnPropertyDescriptors,
  ag = Object.getOwnPropertySymbols,
  lN = Object.prototype.hasOwnProperty,
  sN = Object.prototype.propertyIsEnumerable,
  lg = (e, t, r) =>
    t in e
      ? oN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  uN = (e, t) => {
    for (var r in t || (t = {})) lN.call(t, r) && lg(e, r, t[r]);
    if (ag) for (var r of ag(t)) sN.call(t, r) && lg(e, r, t[r]);
    return e;
  },
  cN = (e, t) => iN(e, aN(t)),
  fN = pt((e) => ({
    root: cN(uN({}, e.fn.cover()), {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }),
  }));
const dN = fN;
var pN = Object.defineProperty,
  hN = Object.defineProperties,
  mN = Object.getOwnPropertyDescriptors,
  hs = Object.getOwnPropertySymbols,
  fS = Object.prototype.hasOwnProperty,
  dS = Object.prototype.propertyIsEnumerable,
  sg = (e, t, r) =>
    t in e
      ? pN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ja = (e, t) => {
    for (var r in t || (t = {})) fS.call(t, r) && sg(e, r, t[r]);
    if (hs) for (var r of hs(t)) dS.call(t, r) && sg(e, r, t[r]);
    return e;
  },
  yN = (e, t) => hN(e, mN(t)),
  gN = (e, t) => {
    var r = {};
    for (var n in e) fS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && hs)
      for (var n of hs(e)) t.indexOf(n) < 0 && dS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const vN = {
    overlayOpacity: 0.75,
    transitionDuration: 0,
    radius: 0,
    zIndex: mw("overlay"),
  },
  pS = _.forwardRef((e, t) => {
    const r = et("LoadingOverlay", vN, e),
      {
        className: n,
        visible: o,
        loaderProps: i,
        overlayOpacity: a,
        overlayColor: l,
        transitionDuration: s,
        exitTransitionDuration: u,
        zIndex: f,
        style: c,
        loader: d,
        radius: w,
        overlayBlur: v,
        unstyled: m,
        variant: y,
        keepMounted: h,
      } = r,
      p = gN(r, [
        "className",
        "visible",
        "loaderProps",
        "overlayOpacity",
        "overlayColor",
        "transitionDuration",
        "exitTransitionDuration",
        "zIndex",
        "style",
        "loader",
        "radius",
        "overlayBlur",
        "unstyled",
        "variant",
        "keepMounted",
      ]),
      {
        classes: g,
        cx: S,
        theme: P,
      } = dN(null, { name: "LoadingOverlay", unstyled: m, variant: y }),
      O = `calc(${f} + 1)`;
    return N.createElement(
      Aw,
      {
        keepMounted: h,
        duration: s,
        exitDuration: u,
        mounted: o,
        transition: "fade",
      },
      (E) =>
        N.createElement(
          _t,
          ja(
            {
              className: S(g.root, n),
              style: yN(ja(ja({}, E), c), { zIndex: f }),
              ref: t,
            },
            p,
          ),
          d
            ? N.createElement("div", { style: { zIndex: O } }, d)
            : N.createElement(bp, ja({ style: { zIndex: O } }, i)),
          N.createElement(Y5, {
            opacity: a,
            zIndex: f,
            radius: w,
            blur: v,
            unstyled: m,
            color: l || (P.colorScheme === "dark" ? P.colors.dark[5] : P.white),
          }),
        ),
    );
  });
pS.displayName = "@mantine/core/LoadingOverlay";
function ug(e, t) {
  if (e < 1) return [];
  const r = new Array(e).fill("");
  if (t) {
    const n = t.trim().split("");
    for (let o = 0; o < Math.min(e, n.length); o += 1) r[o] = n[o];
  }
  return r;
}
const xc = { xs: z(28), sm: z(32), md: z(36), lg: z(40), xl: z(48) };
var wN = pt((e, t, { size: r }) => ({
  root: {},
  input: {
    width: re({ size: r, sizes: xc }),
    height: re({ size: r, sizes: xc }),
    textAlign: "center",
    minHeight: "auto",
    padding: 0,
    lineHeight: re({ size: r, sizes: xc }),
    "&::selection": { background: "transparent" },
  },
}));
const SN = wN;
var _N = Object.defineProperty,
  EN = Object.defineProperties,
  PN = Object.getOwnPropertyDescriptors,
  ms = Object.getOwnPropertySymbols,
  hS = Object.prototype.hasOwnProperty,
  mS = Object.prototype.propertyIsEnumerable,
  cg = (e, t, r) =>
    t in e
      ? _N(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  fg = (e, t) => {
    for (var r in t || (t = {})) hS.call(t, r) && cg(e, r, t[r]);
    if (ms) for (var r of ms(t)) mS.call(t, r) && cg(e, r, t[r]);
    return e;
  },
  ON = (e, t) => EN(e, PN(t)),
  xN = (e, t) => {
    var r = {};
    for (var n in e) hS.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && ms)
      for (var n of ms(e)) t.indexOf(n) < 0 && mS.call(e, n) && (r[n] = e[n]);
    return r;
  };
const dg = { number: /^[0-9]+$/, alphanumeric: /^[a-zA-Z0-9]+$/i },
  bN = {
    spacing: "sm",
    size: "sm",
    length: 4,
    manageFocus: !0,
    placeholder: "○",
    type: "alphanumeric",
  },
  yS = _.forwardRef((e, t) => {
    const r = et("PinInput", bN, e),
      {
        name: n,
        form: o,
        className: i,
        value: a,
        defaultValue: l,
        variant: s,
        spacing: u,
        size: f,
        classNames: c,
        styles: d,
        unstyled: w,
        sx: v,
        length: m,
        onChange: y,
        onComplete: h,
        manageFocus: p,
        autoFocus: g,
        error: S,
        radius: P,
        disabled: O,
        oneTimeCode: E,
        placeholder: k,
        type: T,
        mask: D,
        "aria-label": Y,
        readOnly: J,
        inputType: he,
        inputMode: xe,
      } = r,
      ge = xN(r, [
        "name",
        "form",
        "className",
        "value",
        "defaultValue",
        "variant",
        "spacing",
        "size",
        "classNames",
        "styles",
        "unstyled",
        "sx",
        "length",
        "onChange",
        "onComplete",
        "manageFocus",
        "autoFocus",
        "error",
        "radius",
        "disabled",
        "oneTimeCode",
        "placeholder",
        "type",
        "mask",
        "aria-label",
        "readOnly",
        "inputType",
        "inputMode",
      ]),
      ze = Wk(n),
      { classes: Fe, cx: j } = SN(null, {
        name: "PinInput",
        classNames: c,
        styles: d,
        unstyled: w,
        variant: s,
        size: f,
      }),
      [B, M] = _.useState(-1),
      [H, ne] = Hk({ value: a, defaultValue: l, finalValue: "", onChange: y }),
      it = _.useRef([]),
      ve = (we) => {
        const G = T instanceof RegExp ? T : T in dg ? dg[T] : null;
        return G == null ? void 0 : G.test(we);
      },
      xt = (we, G) => {
        if (p) {
          if (we === "next") {
            const ue = G + 1;
            it.current[ue < m ? ue : G].focus();
          }
          if (we === "prev") {
            const ue = G - 1;
            it.current[ue > -1 ? ue : G].focus();
          }
        }
      },
      Ue = (we, G) => {
        const ue = [...ug(m, H)];
        (ue[G] = we), ne(ue.join(""));
      },
      ht = (we, G) => {
        const ue = we.target.value,
          Cr = ue.length > 1 ? ue.split("")[ue.length - 1] : ue;
        ve(Cr) ? (Ue(Cr, G), xt("next", G)) : Ue("", G);
      },
      sn = (we, G) => {
        we.key === "Backspace" &&
          (we.target.value !== "" ? Ue("", G) : xt("prev", G));
      },
      un = (we, G) => {
        we.target.select(), M(G);
      },
      zn = () => {
        M(-1);
      },
      ar = (we) => {
        we.preventDefault();
        const G = we.clipboardData.getData("Text");
        ve(G) && ne(G);
      };
    return (
      _.useEffect(() => {
        H.length === m && (h == null || h(H));
      }, [H]),
      N.createElement(
        N.Fragment,
        null,
        N.createElement(
          cS,
          fg(
            {
              role: "group",
              spacing: u,
              ref: t,
              className: j(Fe.root, i),
              sx: v,
              unstyled: w,
              id: ze,
              noWrap: !0,
            },
            ge,
          ),
          ug(m, H).map((we, G) =>
            N.createElement(s5, {
              __staticSelector: "PinInput",
              id: `${ze}-${G + 1}`,
              key: `${ze}-${G}`,
              inputMode: xe || (T === "number" ? "numeric" : "text"),
              onChange: (ue) => ht(ue, G),
              onKeyDown: (ue) => sn(ue, G),
              onFocus: (ue) => un(ue, G),
              onBlur: zn,
              onPaste: ar,
              type: he || (D ? "password" : T === "number" ? "tel" : "text"),
              radius: P,
              error: S,
              variant: s,
              size: f,
              disabled: O,
              ref: (ue) => {
                it.current[G] = ue;
              },
              autoComplete: E ? "one-time-code" : "off",
              placeholder: B === G ? "" : k,
              value: we,
              autoFocus: g && G === 0,
              classNames: ON(fg({}, c), {
                input: j(Fe.input, c == null ? void 0 : c.input),
              }),
              styles: d,
              unstyled: w,
              "aria-label": Y,
              readOnly: J,
            }),
          ),
        ),
        N.createElement("input", {
          type: "hidden",
          name: n,
          form: o,
          value: H,
        }),
      )
    );
  });
yS.displayName = "@mantine/core/PinInput";
let $N = { data: "" },
  CN = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" },
          )
        ).firstChild
      : e || $N,
  kN = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  RN = /\/\*[^]*?\*\/|  +/g,
  pg = /\n+/g,
  Mr = (e, t) => {
    let r = "",
      n = "",
      o = "";
    for (let i in e) {
      let a = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (r = i + " " + a + ";")
          : (n +=
              i[1] == "f"
                ? Mr(a, i)
                : i + "{" + Mr(a, i[1] == "k" ? "" : t) + "}")
        : typeof a == "object"
          ? (n += Mr(
              a,
              t
                ? t.replace(/([^,])+/g, (l) =>
                    i.replace(/(^:.*)|([^,])+/g, (s) =>
                      /&/.test(s) ? s.replace(/&/g, l) : l ? l + " " + s : s,
                    ),
                  )
                : i,
            ))
          : a != null &&
            ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (o += Mr.p ? Mr.p(i, a) : i + ":" + a + ";"));
    }
    return r + (t && o ? t + "{" + o + "}" : o) + n;
  },
  ur = {},
  gS = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let r in e) t += r + gS(e[r]);
      return t;
    }
    return e;
  },
  NN = (e, t, r, n, o) => {
    let i = gS(e),
      a =
        ur[i] ||
        (ur[i] = ((s) => {
          let u = 0,
            f = 11;
          for (; u < s.length; ) f = (101 * f + s.charCodeAt(u++)) >>> 0;
          return "go" + f;
        })(i));
    if (!ur[a]) {
      let s =
        i !== e
          ? e
          : ((u) => {
              let f,
                c,
                d = [{}];
              for (; (f = kN.exec(u.replace(RN, ""))); )
                f[4]
                  ? d.shift()
                  : f[3]
                    ? ((c = f[3].replace(pg, " ").trim()),
                      d.unshift((d[0][c] = d[0][c] || {})))
                    : (d[0][f[1]] = f[2].replace(pg, " ").trim());
              return d[0];
            })(e);
      ur[a] = Mr(o ? { ["@keyframes " + a]: s } : s, r ? "" : "." + a);
    }
    let l = r && ur.g ? ur.g : null;
    return (
      r && (ur.g = ur[a]),
      ((s, u, f, c) => {
        c
          ? (u.data = u.data.replace(c, s))
          : u.data.indexOf(s) === -1 && (u.data = f ? s + u.data : u.data + s);
      })(ur[a], t, n, l),
      a
    );
  },
  TN = (e, t, r) =>
    e.reduce((n, o, i) => {
      let a = t[i];
      if (a && a.call) {
        let l = a(r),
          s = (l && l.props && l.props.className) || (/^go/.test(l) && l);
        a = s
          ? "." + s
          : l && typeof l == "object"
            ? l.props
              ? ""
              : Mr(l, "")
            : l === !1
              ? ""
              : l;
      }
      return n + o + (a ?? "");
    }, "");
function gu(e) {
  let t = this || {},
    r = e.call ? e(t.p) : e;
  return NN(
    r.unshift
      ? r.raw
        ? TN(r, [].slice.call(arguments, 1), t.p)
        : r.reduce((n, o) => Object.assign(n, o && o.call ? o(t.p) : o), {})
      : r,
    CN(t.target),
    t.g,
    t.o,
    t.k,
  );
}
let vS, Vf, Wf;
gu.bind({ g: 1 });
let xr = gu.bind({ k: 1 });
function IN(e, t, r, n) {
  (Mr.p = t), (vS = e), (Vf = r), (Wf = n);
}
function ln(e, t) {
  let r = this || {};
  return function () {
    let n = arguments;
    function o(i, a) {
      let l = Object.assign({}, i),
        s = l.className || o.className;
      (r.p = Object.assign({ theme: Vf && Vf() }, l)),
        (r.o = / *go\d+/.test(s)),
        (l.className = gu.apply(r, n) + (s ? " " + s : "")),
        t && (l.ref = a);
      let u = e;
      return (
        e[0] && ((u = l.as || e), delete l.as), Wf && u[0] && Wf(l), vS(u, l)
      );
    }
    return t ? t(o) : o;
  };
}
var jN = (e) => typeof e == "function",
  ys = (e, t) => (jN(e) ? e(t) : e),
  zN = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  wS = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  AN = 20,
  sl = new Map(),
  DN = 1e3,
  hg = (e) => {
    if (sl.has(e)) return;
    let t = setTimeout(() => {
      sl.delete(e), jn({ type: 4, toastId: e });
    }, DN);
    sl.set(e, t);
  },
  LN = (e) => {
    let t = sl.get(e);
    t && clearTimeout(t);
  },
  Hf = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, AN) };
      case 1:
        return (
          t.toast.id && LN(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === t.toast.id ? { ...i, ...t.toast } : i,
            ),
          }
        );
      case 2:
        let { toast: r } = t;
        return e.toasts.find((i) => i.id === r.id)
          ? Hf(e, { type: 1, toast: r })
          : Hf(e, { type: 0, toast: r });
      case 3:
        let { toastId: n } = t;
        return (
          n
            ? hg(n)
            : e.toasts.forEach((i) => {
                hg(i.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === n || n === void 0 ? { ...i, visible: !1 } : i,
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let o = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((i) => ({
            ...i,
            pauseDuration: i.pauseDuration + o,
          })),
        };
    }
  },
  ul = [],
  cl = { toasts: [], pausedAt: void 0 },
  jn = (e) => {
    (cl = Hf(cl, e)),
      ul.forEach((t) => {
        t(cl);
      });
  },
  MN = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  FN = (e = {}) => {
    let [t, r] = _.useState(cl);
    _.useEffect(
      () => (
        ul.push(r),
        () => {
          let o = ul.indexOf(r);
          o > -1 && ul.splice(o, 1);
        }
      ),
      [t],
    );
    let n = t.toasts.map((o) => {
      var i, a;
      return {
        ...e,
        ...e[o.type],
        ...o,
        duration:
          o.duration ||
          ((i = e[o.type]) == null ? void 0 : i.duration) ||
          (e == null ? void 0 : e.duration) ||
          MN[o.type],
        style: {
          ...e.style,
          ...((a = e[o.type]) == null ? void 0 : a.style),
          ...o.style,
        },
      };
    });
    return { ...t, toasts: n };
  },
  UN = (e, t = "blank", r) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...r,
    id: (r == null ? void 0 : r.id) || zN(),
  }),
  aa = (e) => (t, r) => {
    let n = UN(t, e, r);
    return jn({ type: 2, toast: n }), n.id;
  },
  kt = (e, t) => aa("blank")(e, t);
kt.error = aa("error");
kt.success = aa("success");
kt.loading = aa("loading");
kt.custom = aa("custom");
kt.dismiss = (e) => {
  jn({ type: 3, toastId: e });
};
kt.remove = (e) => jn({ type: 4, toastId: e });
kt.promise = (e, t, r) => {
  let n = kt.loading(t.loading, { ...r, ...(r == null ? void 0 : r.loading) });
  return (
    e
      .then(
        (o) => (
          kt.success(ys(t.success, o), {
            id: n,
            ...r,
            ...(r == null ? void 0 : r.success),
          }),
          o
        ),
      )
      .catch((o) => {
        kt.error(ys(t.error, o), {
          id: n,
          ...r,
          ...(r == null ? void 0 : r.error),
        });
      }),
    e
  );
};
var BN = (e, t) => {
    jn({ type: 1, toast: { id: e, height: t } });
  },
  VN = () => {
    jn({ type: 5, time: Date.now() });
  },
  WN = (e) => {
    let { toasts: t, pausedAt: r } = FN(e);
    _.useEffect(() => {
      if (r) return;
      let i = Date.now(),
        a = t.map((l) => {
          if (l.duration === 1 / 0) return;
          let s = (l.duration || 0) + l.pauseDuration - (i - l.createdAt);
          if (s < 0) {
            l.visible && kt.dismiss(l.id);
            return;
          }
          return setTimeout(() => kt.dismiss(l.id), s);
        });
      return () => {
        a.forEach((l) => l && clearTimeout(l));
      };
    }, [t, r]);
    let n = _.useCallback(() => {
        r && jn({ type: 6, time: Date.now() });
      }, [r]),
      o = _.useCallback(
        (i, a) => {
          let {
              reverseOrder: l = !1,
              gutter: s = 8,
              defaultPosition: u,
            } = a || {},
            f = t.filter(
              (w) => (w.position || u) === (i.position || u) && w.height,
            ),
            c = f.findIndex((w) => w.id === i.id),
            d = f.filter((w, v) => v < c && w.visible).length;
          return f
            .filter((w) => w.visible)
            .slice(...(l ? [d + 1] : [0, d]))
            .reduce((w, v) => w + (v.height || 0) + s, 0);
        },
        [t],
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: BN,
        startPause: VN,
        endPause: n,
        calculateOffset: o,
      },
    };
  },
  HN = xr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  KN = xr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  GN = xr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  QN = ln("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${HN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${KN} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${GN} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  YN = xr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  qN = ln("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${YN} 1s linear infinite;
`,
  XN = xr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  JN = xr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  ZN = ln("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${XN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${JN} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  e4 = ln("div")`
  position: absolute;
`,
  t4 = ln("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  r4 = xr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  n4 = ln("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${r4} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  o4 = ({ toast: e }) => {
    let { icon: t, type: r, iconTheme: n } = e;
    return t !== void 0
      ? typeof t == "string"
        ? _.createElement(n4, null, t)
        : t
      : r === "blank"
        ? null
        : _.createElement(
            t4,
            null,
            _.createElement(qN, { ...n }),
            r !== "loading" &&
              _.createElement(
                e4,
                null,
                r === "error"
                  ? _.createElement(QN, { ...n })
                  : _.createElement(ZN, { ...n }),
              ),
          );
  },
  i4 = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  a4 = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  l4 = "0%{opacity:0;} 100%{opacity:1;}",
  s4 = "0%{opacity:1;} 100%{opacity:0;}",
  u4 = ln("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  c4 = ln("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  f4 = (e, t) => {
    let r = e.includes("top") ? 1 : -1,
      [n, o] = wS() ? [l4, s4] : [i4(r), a4(r)];
    return {
      animation: t
        ? `${xr(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${xr(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  d4 = _.memo(({ toast: e, position: t, style: r, children: n }) => {
    let o = e.height
        ? f4(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = _.createElement(o4, { toast: e }),
      a = _.createElement(c4, { ...e.ariaProps }, ys(e.message, e));
    return _.createElement(
      u4,
      { className: e.className, style: { ...o, ...r, ...e.style } },
      typeof n == "function"
        ? n({ icon: i, message: a })
        : _.createElement(_.Fragment, null, i, a),
    );
  });
IN(_.createElement);
var p4 = ({
    id: e,
    className: t,
    style: r,
    onHeightUpdate: n,
    children: o,
  }) => {
    let i = _.useCallback(
      (a) => {
        if (a) {
          let l = () => {
            let s = a.getBoundingClientRect().height;
            n(e, s);
          };
          l(),
            new MutationObserver(l).observe(a, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, n],
    );
    return _.createElement("div", { ref: i, className: t, style: r }, o);
  },
  h4 = (e, t) => {
    let r = e.includes("top"),
      n = r ? { top: 0 } : { bottom: 0 },
      o = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: wS() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (r ? 1 : -1)}px)`,
      ...n,
      ...o,
    };
  },
  m4 = gu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  za = 16,
  y4 = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: r,
    gutter: n,
    children: o,
    containerStyle: i,
    containerClassName: a,
  }) => {
    let { toasts: l, handlers: s } = WN(r);
    return _.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: za,
          left: za,
          right: za,
          bottom: za,
          pointerEvents: "none",
          ...i,
        },
        className: a,
        onMouseEnter: s.startPause,
        onMouseLeave: s.endPause,
      },
      l.map((u) => {
        let f = u.position || t,
          c = s.calculateOffset(u, {
            reverseOrder: e,
            gutter: n,
            defaultPosition: t,
          }),
          d = h4(f, c);
        return _.createElement(
          p4,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: s.updateHeight,
            className: u.visible ? m4 : "",
            style: d,
          },
          u.type === "custom"
            ? ys(u.message, u)
            : o
              ? o(u)
              : _.createElement(d4, { toast: u, position: f }),
        );
      }),
    );
  };
const gs = o2,
  g4 = () => E2(),
  v4 = () => {
    const { loadingPatientExist: e } = gs((r) => r.auth),
      { loading: t } = gs((r) => r.invoice);
    return Tr(Np, {
      fluid: !0,
      h: 50,
      bg: "var(--mantine-color-blue-light)",
      className: "!NotoKufiArabic",
      children: [
        ae(y4, {}),
        ae(pS, {
          visible: e || t,
          overlayBlur: 2,
          zIndex: 1e3,
          transitionDuration: 500,
          loaderProps: {
            size: "md",
            color: "#eb4063",
            variant: "bars",
            overflow: "hidden",
          },
        }),
        ae(_.Suspense, {
          fallback: ae("p", { children: "Loading..." }),
          children: ae(yO, {}),
        }),
      ],
    });
  },
  w4 = ({ children: e }) => {
    const { isAuth: t } = gs((r) => r.auth);
    return t ? e : ae(mO, { to: "/", replace: !0 });
  };
var Kf = { exports: {} };
/*!
 * CSSJanus. https://github.com/cssjanus/cssjanus
 *
 * Copyright 2014 Trevor Parscal
 * Copyright 2010 Roan Kattouw
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (function (e, t) {
  var r;
  function n(i, a) {
    var l = [],
      s = 0;
    function u(c) {
      return l.push(c), a;
    }
    function f() {
      return l[s++];
    }
    return {
      tokenize: function (c) {
        return c.replace(i, u);
      },
      detokenize: function (c) {
        return c.replace(new RegExp("(" + a + ")", "g"), f);
      },
    };
  }
  function o() {
    var i = "`TMP`",
      a = "`NOFLIP_SINGLE`",
      l = "`NOFLIP_CLASS`",
      s = "`COMMENT`",
      u = "[^\\u0020-\\u007e]",
      f = "(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)",
      c = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
      d = "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)",
      w = "direction\\s*:\\s*",
      v = "[!#$%&*-~]",
      m = `['"]?\\s*`,
      y = "(^|[^a-zA-Z])",
      h = "[^\\}]*?",
      p = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
      g = "\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/",
      S = "(?:" + f + "|\\\\[^\\r\\n\\f0-9a-f])",
      P = "(?:[_a-z]|" + u + "|" + S + ")",
      O = "(?:[_a-z0-9-]|" + u + "|" + S + ")",
      E = "-?" + P + O + "*",
      k = c + "(?:\\s*" + d + "|" + E + ")?",
      T = "((?:-?" + k + ")|(?:inherit|auto))",
      D = "((?:margin|padding|border-width)\\s*:\\s*)",
      Y = "((?:-color|border-style)\\s*:\\s*)",
      J = "(#?" + O + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
      he = "(?:" + v + "|" + u + "|" + S + ")*?",
      xe = "(?![a-zA-Z])",
      ge =
        "(?!(" +
        O +
        `|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|"[^"]*"|` +
        s +
        ")*?{)",
      ze = "(?!" + he + m + "\\))",
      Fe = "(?=" + he + m + "\\))",
      j = "(\\s*(?:!important\\s*)?[;}])",
      B = /`TMP`/g,
      M = new RegExp(g, "gi"),
      H = new RegExp("(" + p + ge + "[^;}]+;?)", "gi"),
      ne = new RegExp("(" + p + h + "})", "gi"),
      it = new RegExp("(" + w + ")ltr", "gi"),
      ve = new RegExp("(" + w + ")rtl", "gi"),
      xt = new RegExp(y + "(left)" + xe + ze + ge, "gi"),
      Ue = new RegExp(y + "(right)" + xe + ze + ge, "gi"),
      ht = new RegExp(y + "(left)" + Fe, "gi"),
      sn = new RegExp(y + "(right)" + Fe, "gi"),
      un = new RegExp(y + "(ltr)" + Fe, "gi"),
      zn = new RegExp(y + "(rtl)" + Fe, "gi"),
      ar = new RegExp(y + "([ns]?)e-resize", "gi"),
      we = new RegExp(y + "([ns]?)w-resize", "gi"),
      G = new RegExp(
        D + T + "(\\s+)" + T + "(\\s+)" + T + "(\\s+)" + T + j,
        "gi",
      ),
      ue = new RegExp(
        Y + J + "(\\s+)" + J + "(\\s+)" + J + "(\\s+)" + J + j,
        "gi",
      ),
      Cr = new RegExp(
        "(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + k + ")",
        "gi",
      ),
      cn = new RegExp("(background-position-x\\s*:\\s*)(-?" + c + "%)", "gi"),
      la = new RegExp(
        "(border-radius\\s*:\\s*)" +
          T +
          "(?:(?:\\s+" +
          T +
          ")(?:\\s+" +
          T +
          ")?(?:\\s+" +
          T +
          ")?)?(?:(?:(?:\\s*\\/\\s*)" +
          T +
          ")(?:\\s+" +
          T +
          ")?(?:\\s+" +
          T +
          ")?(?:\\s+" +
          T +
          ")?)?" +
          j,
        "gi",
      ),
      Su = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + T, "gi"),
      sa = new RegExp("(text-shadow\\s*:\\s*)" + T + "(\\s*)" + J, "gi"),
      _u = new RegExp("(text-shadow\\s*:\\s*)" + J + "(\\s*)" + T, "gi"),
      fn = new RegExp("(text-shadow\\s*:\\s*)" + T, "gi"),
      An = new RegExp(
        "(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + T + "(\\s*\\))",
        "gi",
      ),
      ua = new RegExp(
        "(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" +
          T +
          "((?:\\s*,\\s*" +
          T +
          "){0,2}\\s*\\))",
        "gi",
      );
    function Dn(x, A, I) {
      var F, U;
      return (
        I.slice(-1) === "%" &&
          ((F = I.indexOf(".")),
          F !== -1
            ? ((U = I.length - F - 2),
              (I = 100 - parseFloat(I)),
              (I = I.toFixed(U) + "%"))
            : (I = 100 - parseFloat(I) + "%")),
        A + I
      );
    }
    function Do(x) {
      switch (x.length) {
        case 4:
          x = [x[1], x[0], x[3], x[2]];
          break;
        case 3:
          x = [x[1], x[0], x[1], x[2]];
          break;
        case 2:
          x = [x[1], x[0]];
          break;
        case 1:
          x = [x[0]];
          break;
      }
      return x.join(" ");
    }
    function Eu(x, A) {
      var I,
        F = [].slice.call(arguments),
        U = F.slice(2, 6).filter(function (oe) {
          return oe;
        }),
        W = F.slice(6, 10).filter(function (oe) {
          return oe;
        }),
        V = F[10] || "";
      return W.length ? (I = Do(U) + " / " + Do(W)) : (I = Do(U)), A + I + V;
    }
    function Ln(x) {
      return parseFloat(x) === 0 ? x : x[0] === "-" ? x.slice(1) : "-" + x;
    }
    function ca(x, A, I) {
      return A + Ln(I);
    }
    function b(x, A, I, F, U) {
      return A + I + Ln(F) + U;
    }
    function $(x, A, I, F, U) {
      return A + I + F + Ln(U);
    }
    return {
      transform: function (x, A) {
        var I = new n(H, a),
          F = new n(ne, l),
          U = new n(M, s);
        return (
          (x = U.tokenize(F.tokenize(I.tokenize(x.replace("`", "%60"))))),
          A.transformDirInUrl &&
            (x = x
              .replace(un, "$1" + i)
              .replace(zn, "$1ltr")
              .replace(B, "rtl")),
          A.transformEdgeInUrl &&
            (x = x
              .replace(ht, "$1" + i)
              .replace(sn, "$1left")
              .replace(B, "right")),
          (x = x
            .replace(it, "$1" + i)
            .replace(ve, "$1ltr")
            .replace(B, "rtl")
            .replace(xt, "$1" + i)
            .replace(Ue, "$1left")
            .replace(B, "right")
            .replace(ar, "$1$2" + i)
            .replace(we, "$1$2e-resize")
            .replace(B, "w-resize")
            .replace(la, Eu)
            .replace(Su, ca)
            .replace(sa, $)
            .replace(_u, $)
            .replace(fn, ca)
            .replace(An, b)
            .replace(ua, b)
            .replace(G, "$1$2$3$8$5$6$7$4$9")
            .replace(ue, "$1$2$3$8$5$6$7$4$9")
            .replace(Cr, Dn)
            .replace(cn, Dn)),
          (x = I.detokenize(F.detokenize(U.detokenize(x)))),
          x
        );
      },
    };
  }
  (r = new o()),
    e.exports
      ? (t.transform = function (i, a, l) {
          var s;
          return (
            typeof a == "object"
              ? (s = a)
              : ((s = {}),
                typeof a == "boolean" && (s.transformDirInUrl = a),
                typeof l == "boolean" && (s.transformEdgeInUrl = l)),
            r.transform(i, s)
          );
        })
      : typeof window < "u" && (window.cssjanus = r);
})(Kf, Kf.exports);
var S4 = Kf.exports;
const _4 = gg(S4);
var Gf = "comm",
  vs = "rule",
  SS = "decl",
  E4 = "@media",
  P4 = "@import",
  O4 = "@supports",
  x4 = "@keyframes",
  b4 = Math.abs,
  Tp = String.fromCharCode;
function _S(e) {
  return e.trim();
}
function fl(e, t, r) {
  return e.replace(t, r);
}
function $4(e, t) {
  return e.indexOf(t);
}
function Ki(e, t) {
  return e.charCodeAt(t) | 0;
}
function Gi(e, t, r) {
  return e.slice(t, r);
}
function zr(e) {
  return e.length;
}
function C4(e) {
  return e.length;
}
function Aa(e, t) {
  return t.push(e), e;
}
var vu = 1,
  bo = 1,
  ES = 0,
  jt = 0,
  Ce = 0,
  Ao = "";
function Ip(e, t, r, n, o, i, a, l) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: vu,
    column: bo,
    length: a,
    return: "",
    siblings: l,
  };
}
function k4() {
  return Ce;
}
function R4() {
  return (
    (Ce = jt > 0 ? Ki(Ao, --jt) : 0), bo--, Ce === 10 && ((bo = 1), vu--), Ce
  );
}
function Kt() {
  return (
    (Ce = jt < ES ? Ki(Ao, jt++) : 0), bo++, Ce === 10 && ((bo = 1), vu++), Ce
  );
}
function Pn() {
  return Ki(Ao, jt);
}
function dl() {
  return jt;
}
function wu(e, t) {
  return Gi(Ao, e, t);
}
function Qf(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function N4(e) {
  return (vu = bo = 1), (ES = zr((Ao = e))), (jt = 0), [];
}
function T4(e) {
  return (Ao = ""), e;
}
function bc(e) {
  return _S(wu(jt - 1, Yf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function I4(e) {
  for (; (Ce = Pn()) && Ce < 33; ) Kt();
  return Qf(e) > 2 || Qf(Ce) > 3 ? "" : " ";
}
function j4(e, t) {
  for (
    ;
    --t &&
    Kt() &&
    !(Ce < 48 || Ce > 102 || (Ce > 57 && Ce < 65) || (Ce > 70 && Ce < 97));

  );
  return wu(e, dl() + (t < 6 && Pn() == 32 && Kt() == 32));
}
function Yf(e) {
  for (; Kt(); )
    switch (Ce) {
      case e:
        return jt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yf(Ce);
        break;
      case 40:
        e === 41 && Yf(e);
        break;
      case 92:
        Kt();
        break;
    }
  return jt;
}
function z4(e, t) {
  for (; Kt() && e + Ce !== 47 + 10; )
    if (e + Ce === 42 + 42 && Pn() === 47) break;
  return "/*" + wu(t, jt - 1) + "*" + Tp(e === 47 ? e : Kt());
}
function A4(e) {
  for (; !Qf(Pn()); ) Kt();
  return wu(e, jt);
}
function D4(e) {
  return T4(pl("", null, null, null, [""], (e = N4(e)), 0, [0], e));
}
function pl(e, t, r, n, o, i, a, l, s) {
  for (
    var u = 0,
      f = 0,
      c = a,
      d = 0,
      w = 0,
      v = 0,
      m = 1,
      y = 1,
      h = 1,
      p = 0,
      g = "",
      S = o,
      P = i,
      O = n,
      E = g;
    y;

  )
    switch (((v = p), (p = Kt()))) {
      case 40:
        if (v != 108 && Ki(E, c - 1) == 58) {
          $4((E += fl(bc(p), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += bc(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += I4(v);
        break;
      case 92:
        E += j4(dl() - 1, 7);
        continue;
      case 47:
        switch (Pn()) {
          case 42:
          case 47:
            Aa(L4(z4(Kt(), dl()), t, r, s), s);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * m:
        l[u++] = zr(E) * h;
      case 125 * m:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            h == -1 && (E = fl(E, /\f/g, "")),
              w > 0 &&
                zr(E) - c &&
                Aa(
                  w > 32
                    ? yg(E + ";", n, r, c - 1, s)
                    : yg(fl(E, " ", "") + ";", n, r, c - 2, s),
                  s,
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (Aa(
                (O = mg(E, t, r, u, f, o, l, g, (S = []), (P = []), c, i)),
                i,
              ),
              p === 123)
            )
              if (f === 0) pl(E, t, O, O, S, i, c, l, P);
              else
                switch (d === 99 && Ki(E, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pl(
                      e,
                      O,
                      O,
                      n && Aa(mg(e, O, O, 0, 0, o, l, g, o, (S = []), c, P), P),
                      o,
                      P,
                      c,
                      l,
                      n ? S : P,
                    );
                    break;
                  default:
                    pl(E, O, O, O, [""], P, 0, l, P);
                }
        }
        (u = f = w = 0), (m = h = 1), (g = E = ""), (c = a);
        break;
      case 58:
        (c = 1 + zr(E)), (w = v);
      default:
        if (m < 1) {
          if (p == 123) --m;
          else if (p == 125 && m++ == 0 && R4() == 125) continue;
        }
        switch (((E += Tp(p)), p * m)) {
          case 38:
            h = f > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (l[u++] = (zr(E) - 1) * h), (h = 1);
            break;
          case 64:
            Pn() === 45 && (E += bc(Kt())),
              (d = Pn()),
              (f = c = zr((g = E += A4(dl())))),
              p++;
            break;
          case 45:
            v === 45 && zr(E) == 2 && (m = 0);
        }
    }
  return i;
}
function mg(e, t, r, n, o, i, a, l, s, u, f, c) {
  for (
    var d = o - 1, w = o === 0 ? i : [""], v = C4(w), m = 0, y = 0, h = 0;
    m < n;
    ++m
  )
    for (var p = 0, g = Gi(e, d + 1, (d = b4((y = a[m])))), S = e; p < v; ++p)
      (S = _S(y > 0 ? w[p] + " " + g : fl(g, /&\f/g, w[p]))) && (s[h++] = S);
  return Ip(e, t, r, o === 0 ? vs : l, s, u, f, c);
}
function L4(e, t, r, n) {
  return Ip(e, t, r, Gf, Tp(k4()), Gi(e, 2, -2), 0, n);
}
function yg(e, t, r, n, o) {
  return Ip(e, t, r, SS, Gi(e, 0, n), Gi(e, n + 1, -1), n, o);
}
function M4(e, t) {
  for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
  return r;
}
function PS(e, t, r) {
  switch (e.type) {
    case P4:
    case SS:
    case Gf:
      return (e.return = e.return || e.value);
    case vs:
      (e.value = Array.isArray(e.props) ? e.props.join(",") : e.props),
        Array.isArray(e.children) &&
          e.children.forEach(function (o) {
            o.type === Gf && (o.children = o.value);
          });
  }
  var n = M4(Array.prototype.concat(e.children), PS);
  return zr(n) ? (e.return = e.value + "{" + n + "}") : "";
}
function OS(e, t, r, n) {
  if (
    e.type === x4 ||
    e.type === O4 ||
    (e.type === vs &&
      (!e.parent || e.parent.type === E4 || e.parent.type === vs))
  ) {
    var o = _4.transform(PS(e));
    (e.children = o ? D4(o)[0].children : []), (e.return = "");
  }
}
Object.defineProperty(OS, "name", { value: "stylisRTLPlugin" });
const F4 = "/assets/logo-dark-notext-1bf2958e.png";
function U4(e) {
  if (!e) return e;
  const t = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  let r = "";
  for (let n = 0; n < e.length; n++) {
    const o = t.indexOf(e[n]);
    o != -1 ? (r += o) : (r += e[n]);
  }
  return !r || r.length !== e.length ? e : r;
}
function B4() {
  const e = g4(),
    { state: t } = ta(),
    r = Qd(),
    { patient: n, verificationCode: o } = gs((g) => g.auth),
    [i, a] = _.useState("58"),
    [l, s] = _.useState(!1),
    [u, f] = _.useState(!1),
    [c, d] = _.useState(!0),
    [w, v] = _.useState(!1),
    m = _.useRef(null);
  _.useEffect(
    () => (
      p(),
      function () {
        clearInterval(m.current);
      }
    ),
    [],
  );
  const y = (g) => {
      U4(g) === o
        ? (s(!1),
          t.signUp
            ? e(
                el({
                  name: n.patientName,
                  phone: n.patientPhone,
                  referralCode: null,
                  navigate: r,
                }),
              )
            : r("/choosePlan"))
        : s(!0);
    },
    h = () => {
      v(!1),
        clearInterval(m.current),
        d(!0),
        a("59"),
        p(),
        e(po({ name: n.patientName, phone: n.patientPhone }));
    },
    p = () => {
      let S;
      f(!0);
      const E = new Date();
      E.setMinutes(E.getMinutes() + 1),
        (m.current = null),
        (m.current = setInterval(() => {
          const k = new Date().getTime(),
            T = E - k;
          (S = Math.floor((T % 6e4) / 1e3)),
            console.log("currentSeconds"),
            console.log(S),
            S < 10 && (S = `0${S}`),
            S <= 30 && !w && v(!0),
            c && T >= 0 && a(S),
            T < 0 && d(!1);
        }, 1e3));
    };
  return Tr(Np, {
    size: 520,
    my: 40,
    className: "flex justify-center flex-col items-center",
    children: [
      Tr("div", {
        className: "flex justify-center flex-col items-center my-6",
        children: [
          ae("img", { src: F4, alt: "company logo", className: "w-32 mb-6" }),
          ae("h5", { children: "تطبيق السكري الخاص بك" }),
        ],
      }),
      Tr("div", {
        className: "flex justify-center flex-col items-start mb-6 w-full",
        children: [
          ae("p", { className: "text-lg", children: "التحقق من هاتفك" }),
          ae("p", {
            className: "text-xs",
            children: "الرجاء ادخال رمز التحقق",
          }),
          Tr("div", {
            className: "flex justify-start flex-row items-start my-3 w-full",
            children: [
              ae("p", {
                onClick: () => r("/signUp"),
                className: "text-xs mb-3",
                children: "تعديل",
              }),
              Tr("p", {
                className: "text-xs",
                children: ["  ", n.patientPhone, " "],
              }),
            ],
          }),
        ],
      }),
      ae("div", {
        dir: "ltr",
        children: ae(yS, {
          onComplete: y,
          type: /^[0-9]|[\u0660-\u0669]*$/,
          inputType: "tel",
          inputMode: "numeric",
        }),
      }),
      Tr("div", {
        className: "mt-16 flex justify-center flex-col items-center",
        children: [
          Tr("p", { children: ["00:", i] }),
          l && ae("p", { className: "text-red-600", children: "الرقم خطأ " }),
          w &&
            ae(k5, {
              onClick: h,
              variant: "outline",
              styles: (g) => ({
                root: {
                  backgroundColor: "#042C43",
                  borderRadius: 17,
                  borderColor: "#042C43",
                  color: "white",
                  "&:not([data-disabled])": g.fn.hover({
                    backgroundColor: "#042C43",
                  }),
                },
              }),
              children: "أعد ارسال الرمز",
            }),
        ],
      }),
    ],
  });
}
const V4 = xp({ key: "mantine-rtl", stylisPlugins: [OS] }),
  W4 = _.lazy(() => $o(() => import("./Users-90c55101.js"), [])),
  H4 = _.lazy(() =>
    $o(
      () => import("./Home-2cd2ba4c.js"),
      ["assets/Home-2cd2ba4c.js", "assets/Modal-bdf05565.js"],
    ),
  ),
  K4 = _.lazy(() => $o(() => import("./Invoice-4fcd2410.js"), [])),
  G4 = _.lazy(() =>
    $o(
      () => import("./signUp-18189cb9.js"),
      [
        "assets/signUp-18189cb9.js",
        "assets/Modal-bdf05565.js",
        "assets/TextInput-2a2577e1.js",
      ],
    ),
  ),
  Q4 = _.lazy(() =>
    $o(
      () => import("./choosePlan-62da0924.js"),
      ["assets/choosePlan-62da0924.js", "assets/TextInput-2a2577e1.js"],
    ),
  ),
  Y4 = _.lazy(() => $o(() => import("./ErrorPage-41e761e3.js"), [])),
  q4 = xO([
    {
      path: "/",
      element: ae(v4, {}),
      errorElement: ae(Y4, {}),
      children: [
        { path: "/", element: ae(H4, {}) },
        { path: "/signup", element: ae(G4, {}) },
        { path: "/otp", element: ae(B4, {}) },
        { path: "/invoice", element: ae(K4, {}) },
        { path: "/choosePlan", element: ae(Q4, {}) },
        { path: "users", element: ae(w4, { children: ae(W4, {}) }) },
      ],
    },
  ]);
$c.createRoot(document.getElementById("root")).render(
  ae(N.StrictMode, {
    children: ae(w2, {
      store: z1,
      children: ae(Y1, {
        loading: null,
        persistor: N$,
        children: ae(hw, {
          withGlobalStyles: !0,
          withNormalizeCSS: !0,
          emotionCache: V4,
          theme: {
            fontFamily: "SSTArabic, sans-serif",
            fontFamilyMonospace: "SSTArabic, sans-serif",
            headings: { fontFamily: "SSTArabic, sans-serif" },
            dir: "rtl",
          },
          children: ae(hO, { router: q4 }),
        }),
      }),
    }),
  }),
);
export {
  N0 as A,
  _t as B,
  Np as C,
  Aw as D,
  Kk as E,
  Z4 as F,
  cS as G,
  mw as H,
  s5 as I,
  yc as J,
  tT as K,
  eT as L,
  J4 as M,
  VO as N,
  Y5 as O,
  N as R,
  zw as T,
  OR as U,
  Ui as _,
  _ as a,
  g4 as b,
  pt as c,
  gs as d,
  ae as e,
  mc as f,
  re as g,
  Wk as h,
  gg as i,
  Tr as j,
  Qd as k,
  F4 as l,
  k5 as m,
  $o as n,
  gc as o,
  Hk as p,
  gw as q,
  z as r,
  U4 as s,
  hc as t,
  et as u,
  Fk as v,
  bp as w,
  rT as x,
  zo as y,
  Mk as z,
};

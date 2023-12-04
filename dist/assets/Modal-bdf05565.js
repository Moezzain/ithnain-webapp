import {
  a as c,
  R as u,
  v as Jr,
  r as _,
  c as x,
  g as j,
  u as $,
  w as et,
  U as rt,
  x as ye,
  y as tt,
  z as nt,
  A as at,
  B as ie,
  D as Ye,
  O as ot,
  E as lt,
  H as it,
  h as ct,
} from "./index-4f59dc0f.js";
var C = function () {
  return (
    (C =
      Object.assign ||
      function (r) {
        for (var t, n = 1, a = arguments.length; n < a; n++) {
          t = arguments[n];
          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
        }
        return r;
      }),
    C.apply(this, arguments)
  );
};
function Xe(e, r) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      r.indexOf(n) < 0 &&
      (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      r.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (t[n[a]] = e[n[a]]);
  return t;
}
function st(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, a = r.length, o; n < a; n++)
      (o || !(n in r)) &&
        (o || (o = Array.prototype.slice.call(r, 0, n)), (o[n] = r[n]));
  return e.concat(o || Array.prototype.slice.call(r));
}
var F = "right-scroll-bar-position",
  W = "width-before-scroll-bar",
  ut = "with-scroll-bars-hidden",
  dt = "--removed-body-scroll-bar-size";
function ft(e, r) {
  return typeof e == "function" ? e(r) : e && (e.current = r), e;
}
function vt(e, r) {
  var t = c.useState(function () {
    return {
      value: e,
      callback: r,
      facade: {
        get current() {
          return t.value;
        },
        set current(n) {
          var a = t.value;
          a !== n && ((t.value = n), t.callback(n, a));
        },
      },
    };
  })[0];
  return (t.callback = r), t.facade;
}
function pt(e, r) {
  return vt(r || null, function (t) {
    return e.forEach(function (n) {
      return ft(n, t);
    });
  });
}
function mt(e) {
  return e;
}
function _t(e, r) {
  r === void 0 && (r = mt);
  var t = [],
    n = !1,
    a = {
      read: function () {
        if (n)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return t.length ? t[t.length - 1] : e;
      },
      useMedium: function (o) {
        var l = r(o, n);
        return (
          t.push(l),
          function () {
            t = t.filter(function (i) {
              return i !== l;
            });
          }
        );
      },
      assignSyncMedium: function (o) {
        for (n = !0; t.length; ) {
          var l = t;
          (t = []), l.forEach(o);
        }
        t = {
          push: function (i) {
            return o(i);
          },
          filter: function () {
            return t;
          },
        };
      },
      assignMedium: function (o) {
        n = !0;
        var l = [];
        if (t.length) {
          var i = t;
          (t = []), i.forEach(o), (l = t);
        }
        var f = function () {
            var d = l;
            (l = []), d.forEach(o);
          },
          v = function () {
            return Promise.resolve().then(f);
          };
        v(),
          (t = {
            push: function (d) {
              l.push(d), v();
            },
            filter: function (d) {
              return (l = l.filter(d)), t;
            },
          });
      },
    };
  return a;
}
function yt(e) {
  e === void 0 && (e = {});
  var r = _t(null);
  return (r.options = C({ async: !0, ssr: !1 }, e)), r;
}
var Ke = function (e) {
  var r = e.sideCar,
    t = Xe(e, ["sideCar"]);
  if (!r)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var n = r.read();
  if (!n) throw new Error("Sidecar medium not found");
  return c.createElement(n, C({}, t));
};
Ke.isSideCarExport = !0;
function gt(e, r) {
  return e.useMedium(r), Ke;
}
var Ze = yt(),
  ue = function () {},
  ce = c.forwardRef(function (e, r) {
    var t = c.useRef(null),
      n = c.useState({
        onScrollCapture: ue,
        onWheelCapture: ue,
        onTouchMoveCapture: ue,
      }),
      a = n[0],
      o = n[1],
      l = e.forwardProps,
      i = e.children,
      f = e.className,
      v = e.removeScrollBar,
      d = e.enabled,
      g = e.shards,
      m = e.sideCar,
      h = e.noIsolation,
      P = e.inert,
      s = e.allowPinchZoom,
      p = e.as,
      w = p === void 0 ? "div" : p,
      S = Xe(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      O = m,
      E = pt([t, r]),
      b = C(C({}, S), a);
    return c.createElement(
      c.Fragment,
      null,
      d &&
        c.createElement(O, {
          sideCar: Ze,
          removeScrollBar: v,
          shards: g,
          noIsolation: h,
          inert: P,
          setCallbacks: o,
          allowPinchZoom: !!s,
          lockRef: t,
        }),
      l
        ? c.cloneElement(c.Children.only(i), C(C({}, b), { ref: E }))
        : c.createElement(w, C({}, b, { className: f, ref: E }), i),
    );
  });
ce.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ce.classNames = { fullWidth: W, zeroRight: F };
var be,
  ht = function () {
    if (be) return be;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function bt() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var r = ht();
  return r && e.setAttribute("nonce", r), e;
}
function wt(e, r) {
  e.styleSheet
    ? (e.styleSheet.cssText = r)
    : e.appendChild(document.createTextNode(r));
}
function Ot(e) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(e);
}
var Pt = function () {
    var e = 0,
      r = null;
    return {
      add: function (t) {
        e == 0 && (r = bt()) && (wt(r, t), Ot(r)), e++;
      },
      remove: function () {
        e--,
          !e && r && (r.parentNode && r.parentNode.removeChild(r), (r = null));
      },
    };
  },
  St = function () {
    var e = Pt();
    return function (r, t) {
      c.useEffect(
        function () {
          return (
            e.add(r),
            function () {
              e.remove();
            }
          );
        },
        [r && t],
      );
    };
  },
  qe = function () {
    var e = St(),
      r = function (t) {
        var n = t.styles,
          a = t.dynamic;
        return e(n, a), null;
      };
    return r;
  },
  $t = { left: 0, top: 0, right: 0, gap: 0 },
  de = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Et = function (e) {
    var r = window.getComputedStyle(document.body),
      t = r[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = r[e === "padding" ? "paddingTop" : "marginTop"],
      a = r[e === "padding" ? "paddingRight" : "marginRight"];
    return [de(t), de(n), de(a)];
  },
  Ct = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return $t;
    var r = Et(e),
      t = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, n - t + r[2] - r[0]),
    };
  },
  xt = qe(),
  Nt = function (e, r, t, n) {
    var a = e.left,
      o = e.top,
      l = e.right,
      i = e.gap;
    return (
      t === void 0 && (t = "margin"),
      `
  .`
        .concat(
          ut,
          ` {
   overflow: hidden `,
        )
        .concat(
          n,
          `;
   padding-right: `,
        )
        .concat(i, "px ")
        .concat(
          n,
          `;
  }
  body {
    overflow: hidden `,
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            r && "position: relative ".concat(n, ";"),
            t === "margin" &&
              `
    padding-left: `
                .concat(
                  a,
                  `px;
    padding-top: `,
                )
                .concat(
                  o,
                  `px;
    padding-right: `,
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(i, "px ")
                .concat(
                  n,
                  `;
    `,
                ),
            t === "padding" &&
              "padding-right: ".concat(i, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          F,
          ` {
    right: `,
        )
        .concat(i, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(
          W,
          ` {
    margin-right: `,
        )
        .concat(i, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(F, " .")
        .concat(
          F,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(W, " .")
        .concat(
          W,
          ` {
    margin-right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  body {
    `,
        )
        .concat(dt, ": ")
        .concat(
          i,
          `px;
  }
`,
        )
    );
  },
  Rt = function (e) {
    var r = e.noRelative,
      t = e.noImportant,
      n = e.gapMode,
      a = n === void 0 ? "margin" : n,
      o = c.useMemo(
        function () {
          return Ct(a);
        },
        [a],
      );
    return c.createElement(xt, { styles: Nt(o, !r, a, t ? "" : "!important") });
  },
  ve = !1;
if (typeof window < "u")
  try {
    var D = Object.defineProperty({}, "passive", {
      get: function () {
        return (ve = !0), !0;
      },
    });
    window.addEventListener("test", D, D),
      window.removeEventListener("test", D, D);
  } catch {
    ve = !1;
  }
var T = ve ? { passive: !1 } : !1,
  It = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Ue = function (e, r) {
    var t = window.getComputedStyle(e);
    return (
      t[r] !== "hidden" &&
      !(t.overflowY === t.overflowX && !It(e) && t[r] === "visible")
    );
  },
  jt = function (e) {
    return Ue(e, "overflowY");
  },
  Bt = function (e) {
    return Ue(e, "overflowX");
  },
  we = function (e, r) {
    var t = r;
    do {
      typeof ShadowRoot < "u" && t instanceof ShadowRoot && (t = t.host);
      var n = Qe(e, t);
      if (n) {
        var a = Ge(e, t),
          o = a[1],
          l = a[2];
        if (o > l) return !0;
      }
      t = t.parentNode;
    } while (t && t !== document.body);
    return !1;
  },
  Tt = function (e) {
    var r = e.scrollTop,
      t = e.scrollHeight,
      n = e.clientHeight;
    return [r, t, n];
  },
  At = function (e) {
    var r = e.scrollLeft,
      t = e.scrollWidth,
      n = e.clientWidth;
    return [r, t, n];
  },
  Qe = function (e, r) {
    return e === "v" ? jt(r) : Bt(r);
  },
  Ge = function (e, r) {
    return e === "v" ? Tt(r) : At(r);
  },
  Mt = function (e, r) {
    return e === "h" && r === "rtl" ? -1 : 1;
  },
  kt = function (e, r, t, n, a) {
    var o = Mt(e, window.getComputedStyle(r).direction),
      l = o * n,
      i = t.target,
      f = r.contains(i),
      v = !1,
      d = l > 0,
      g = 0,
      m = 0;
    do {
      var h = Ge(e, i),
        P = h[0],
        s = h[1],
        p = h[2],
        w = s - p - o * P;
      (P || w) && Qe(e, i) && ((g += w), (m += P)), (i = i.parentNode);
    } while ((!f && i !== document.body) || (f && (r.contains(i) || r === i)));
    return (
      ((d && ((a && g === 0) || (!a && l > g))) ||
        (!d && ((a && m === 0) || (!a && -l > m)))) &&
        (v = !0),
      v
    );
  },
  H = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Oe = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Pe = function (e) {
    return e && "current" in e ? e.current : e;
  },
  zt = function (e, r) {
    return e[0] === r[0] && e[1] === r[1];
  },
  Lt = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Dt = 0,
  A = [];
function Ht(e) {
  var r = c.useRef([]),
    t = c.useRef([0, 0]),
    n = c.useRef(),
    a = c.useState(Dt++)[0],
    o = c.useState(function () {
      return qe();
    })[0],
    l = c.useRef(e);
  c.useEffect(
    function () {
      l.current = e;
    },
    [e],
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(a));
          var s = st([e.lockRef.current], (e.shards || []).map(Pe), !0).filter(
            Boolean,
          );
          return (
            s.forEach(function (p) {
              return p.classList.add("allow-interactivity-".concat(a));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(a)),
                s.forEach(function (p) {
                  return p.classList.remove("allow-interactivity-".concat(a));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var i = c.useCallback(function (s, p) {
      if ("touches" in s && s.touches.length === 2)
        return !l.current.allowPinchZoom;
      var w = H(s),
        S = t.current,
        O = "deltaX" in s ? s.deltaX : S[0] - w[0],
        E = "deltaY" in s ? s.deltaY : S[1] - w[1],
        b,
        B = s.target,
        N = Math.abs(O) > Math.abs(E) ? "h" : "v";
      if ("touches" in s && N === "h" && B.type === "range") return !1;
      var I = we(N, B);
      if (!I) return !0;
      if ((I ? (b = N) : ((b = N === "v" ? "h" : "v"), (I = we(N, B))), !I))
        return !1;
      if (
        (!n.current && "changedTouches" in s && (O || E) && (n.current = b), !b)
      )
        return !0;
      var L = n.current || b;
      return kt(L, p, s, L === "h" ? O : E, !0);
    }, []),
    f = c.useCallback(function (s) {
      var p = s;
      if (!(!A.length || A[A.length - 1] !== o)) {
        var w = "deltaY" in p ? Oe(p) : H(p),
          S = r.current.filter(function (b) {
            return b.name === p.type && b.target === p.target && zt(b.delta, w);
          })[0];
        if (S && S.should) {
          p.cancelable && p.preventDefault();
          return;
        }
        if (!S) {
          var O = (l.current.shards || [])
              .map(Pe)
              .filter(Boolean)
              .filter(function (b) {
                return b.contains(p.target);
              }),
            E = O.length > 0 ? i(p, O[0]) : !l.current.noIsolation;
          E && p.cancelable && p.preventDefault();
        }
      }
    }, []),
    v = c.useCallback(function (s, p, w, S) {
      var O = { name: s, delta: p, target: w, should: S };
      r.current.push(O),
        setTimeout(function () {
          r.current = r.current.filter(function (E) {
            return E !== O;
          });
        }, 1);
    }, []),
    d = c.useCallback(function (s) {
      (t.current = H(s)), (n.current = void 0);
    }, []),
    g = c.useCallback(function (s) {
      v(s.type, Oe(s), s.target, i(s, e.lockRef.current));
    }, []),
    m = c.useCallback(function (s) {
      v(s.type, H(s), s.target, i(s, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      A.push(o),
      e.setCallbacks({
        onScrollCapture: g,
        onWheelCapture: g,
        onTouchMoveCapture: m,
      }),
      document.addEventListener("wheel", f, T),
      document.addEventListener("touchmove", f, T),
      document.addEventListener("touchstart", d, T),
      function () {
        (A = A.filter(function (s) {
          return s !== o;
        })),
          document.removeEventListener("wheel", f, T),
          document.removeEventListener("touchmove", f, T),
          document.removeEventListener("touchstart", d, T);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    P = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    P ? c.createElement(o, { styles: Lt(a) }) : null,
    h ? c.createElement(Rt, { gapMode: "margin" }) : null,
  );
}
const Vt = gt(Ze, Ht);
var Je = c.forwardRef(function (e, r) {
  return c.createElement(ce, C({}, e, { ref: r, sideCar: Vt }));
});
Je.classNames = ce.classNames;
const Ft = Je;
function er(e) {
  const r = c.createContext(null);
  return [
    ({ children: a, value: o }) => u.createElement(r.Provider, { value: o }, a),
    () => {
      const a = c.useContext(r);
      if (a === null) throw new Error(e);
      return a;
    },
  ];
}
function Wt(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == "object"
      ? e.type !== u.Fragment
      : !1;
}
function Yt({ opened: e, shouldReturnFocus: r = !0 }) {
  const t = c.useRef(),
    n = () => {
      var a;
      t.current &&
        "focus" in t.current &&
        typeof t.current.focus == "function" &&
        ((a = t.current) == null || a.focus({ preventScroll: !0 }));
    };
  return (
    Jr(() => {
      let a = -1;
      const o = (l) => {
        l.key === "Tab" && window.clearTimeout(a);
      };
      return (
        document.addEventListener("keydown", o),
        e
          ? (t.current = document.activeElement)
          : r && (a = window.setTimeout(n, 10)),
        () => {
          window.clearTimeout(a), document.removeEventListener("keydown", o);
        }
      );
    }, [e, r]),
    n
  );
}
const Xt = /input|select|textarea|button|object/,
  rr = "a, input, select, textarea, button, object, [tabindex]";
function Kt(e) {
  return e.style.display === "none";
}
function Zt(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let t = e;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (Kt(t)) return !1;
    t = t.parentNode;
  }
  return !0;
}
function tr(e) {
  let r = e.getAttribute("tabindex");
  return r === null && (r = void 0), parseInt(r, 10);
}
function pe(e) {
  const r = e.nodeName.toLowerCase(),
    t = !Number.isNaN(tr(e));
  return (
    ((Xt.test(r) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      t) &&
    Zt(e)
  );
}
function nr(e) {
  const r = tr(e);
  return (Number.isNaN(r) || r >= 0) && pe(e);
}
function qt(e) {
  return Array.from(e.querySelectorAll(rr)).filter(nr);
}
function Ut(e, r) {
  const t = qt(e);
  if (!t.length) {
    r.preventDefault();
    return;
  }
  const n = t[r.shiftKey ? 0 : t.length - 1],
    a = e.getRootNode();
  if (!(n === a.activeElement || e === a.activeElement)) return;
  r.preventDefault();
  const l = t[r.shiftKey ? t.length - 1 : 0];
  l && l.focus();
}
function Qt(e, r = "body > :not(script)") {
  const t = Array.from(document.querySelectorAll(r)).map((n) => {
    var a;
    if (
      ((a = n == null ? void 0 : n.shadowRoot) != null && a.contains(e)) ||
      n.contains(e)
    )
      return;
    const o = n.getAttribute("aria-hidden");
    return (
      (o === null || o === "false") && n.setAttribute("aria-hidden", "true"),
      { node: n, ariaHidden: o }
    );
  });
  return () => {
    t.forEach((n) => {
      n &&
        (n.ariaHidden === null
          ? n.node.removeAttribute("aria-hidden")
          : n.node.setAttribute("aria-hidden", n.ariaHidden));
    });
  };
}
function Gt(e = !0) {
  const r = c.useRef(),
    t = c.useRef(null),
    n = (o) => {
      let l = o.querySelector("[data-autofocus]");
      if (!l) {
        const i = Array.from(o.querySelectorAll(rr));
        (l = i.find(nr) || i.find(pe) || null), !l && pe(o) && (l = o);
      }
      l && l.focus({ preventScroll: !0 });
    },
    a = c.useCallback(
      (o) => {
        if (e) {
          if (o === null) {
            t.current && (t.current(), (t.current = null));
            return;
          }
          (t.current = Qt(o)),
            r.current !== o &&
              (o
                ? (setTimeout(() => {
                    o.getRootNode() && n(o);
                  }),
                  (r.current = o))
                : (r.current = null));
        }
      },
      [e],
    );
  return (
    c.useEffect(() => {
      if (!e) return;
      r.current && setTimeout(() => n(r.current));
      const o = (l) => {
        l.key === "Tab" && r.current && Ut(r.current, l);
      };
      return (
        document.addEventListener("keydown", o),
        () => {
          document.removeEventListener("keydown", o), t.current && t.current();
        }
      );
    }, [e]),
    a
  );
}
function Jt(e, r, t) {
  c.useEffect(
    () => (
      window.addEventListener(e, r, t),
      () => window.removeEventListener(e, r, t)
    ),
    [e, r],
  );
}
function en(e, r) {
  typeof e == "function"
    ? e(r)
    : typeof e == "object" && e !== null && "current" in e && (e.current = r);
}
function rn(...e) {
  return (r) => {
    e.forEach((t) => en(t, r));
  };
}
function tn(...e) {
  return c.useCallback(rn(...e), e);
}
var nn = Object.defineProperty,
  an = Object.defineProperties,
  on = Object.getOwnPropertyDescriptors,
  Se = Object.getOwnPropertySymbols,
  ln = Object.prototype.hasOwnProperty,
  cn = Object.prototype.propertyIsEnumerable,
  $e = (e, r, t) =>
    r in e
      ? nn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  me = (e, r) => {
    for (var t in r || (r = {})) ln.call(r, t) && $e(e, t, r[t]);
    if (Se) for (var t of Se(r)) cn.call(r, t) && $e(e, t, r[t]);
    return e;
  },
  Ee = (e, r) => an(e, on(r));
const sn = [
    "subtle",
    "filled",
    "outline",
    "light",
    "default",
    "transparent",
    "gradient",
  ],
  V = { xs: _(18), sm: _(22), md: _(28), lg: _(34), xl: _(44) };
function un({ variant: e, theme: r, color: t, gradient: n }) {
  const a = r.fn.variant({ color: t, variant: e, gradient: n });
  return e === "gradient"
    ? {
        border: 0,
        backgroundImage: a.background,
        color: a.color,
        "&:hover": r.fn.hover({ backgroundSize: "200%" }),
      }
    : sn.includes(e)
      ? me(
          {
            border: `${_(1)} solid ${a.border}`,
            backgroundColor: a.background,
            color: a.color,
          },
          r.fn.hover({ backgroundColor: a.hover }),
        )
      : null;
}
var dn = x(
  (e, { radius: r, color: t, gradient: n }, { variant: a, size: o }) => ({
    root: Ee(
      me(
        {
          position: "relative",
          borderRadius: e.fn.radius(r),
          padding: 0,
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: j({ size: o, sizes: V }),
          minHeight: j({ size: o, sizes: V }),
          width: j({ size: o, sizes: V }),
          minWidth: j({ size: o, sizes: V }),
        },
        un({ variant: a, theme: e, color: t, gradient: n }),
      ),
      {
        "&:active": e.activeStyles,
        "& [data-action-icon-loader]": { maxWidth: "70%" },
        "&:disabled, &[data-disabled]": {
          color: e.colors.gray[e.colorScheme === "dark" ? 6 : 4],
          cursor: "not-allowed",
          backgroundColor:
            a === "transparent"
              ? void 0
              : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
          borderColor:
            a === "transparent"
              ? void 0
              : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
          backgroundImage: "none",
          pointerEvents: "none",
          "&:active": { transform: "none" },
        },
        "&[data-loading]": {
          pointerEvents: "none",
          "&::before": Ee(me({ content: '""' }, e.fn.cover(_(-1))), {
            backgroundColor:
              e.colorScheme === "dark"
                ? e.fn.rgba(e.colors.dark[7], 0.5)
                : "rgba(255, 255, 255, .5)",
            borderRadius: e.fn.radius(r),
            cursor: "not-allowed",
          }),
        },
      },
    ),
  }),
);
const fn = dn;
var vn = Object.defineProperty,
  X = Object.getOwnPropertySymbols,
  ar = Object.prototype.hasOwnProperty,
  or = Object.prototype.propertyIsEnumerable,
  Ce = (e, r, t) =>
    r in e
      ? vn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  xe = (e, r) => {
    for (var t in r || (r = {})) ar.call(r, t) && Ce(e, t, r[t]);
    if (X) for (var t of X(r)) or.call(r, t) && Ce(e, t, r[t]);
    return e;
  },
  pn = (e, r) => {
    var t = {};
    for (var n in e) ar.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && X)
      for (var n of X(e)) r.indexOf(n) < 0 && or.call(e, n) && (t[n] = e[n]);
    return t;
  };
const mn = { color: "gray", size: "md", variant: "subtle" },
  lr = c.forwardRef((e, r) => {
    const t = $("ActionIcon", mn, e),
      {
        className: n,
        color: a,
        children: o,
        radius: l,
        size: i,
        variant: f,
        gradient: v,
        disabled: d,
        loaderProps: g,
        loading: m,
        unstyled: h,
        __staticSelector: P,
      } = t,
      s = pn(t, [
        "className",
        "color",
        "children",
        "radius",
        "size",
        "variant",
        "gradient",
        "disabled",
        "loaderProps",
        "loading",
        "unstyled",
        "__staticSelector",
      ]),
      {
        classes: p,
        cx: w,
        theme: S,
      } = fn(
        { radius: l, color: a, gradient: v },
        { name: ["ActionIcon", P], unstyled: h, size: i, variant: f },
      ),
      O = u.createElement(
        et,
        xe(
          {
            color: S.fn.variant({ color: a, variant: f }).color,
            size: "100%",
            "data-action-icon-loader": !0,
          },
          g,
        ),
      );
    return u.createElement(
      rt,
      xe(
        {
          className: w(p.root, n),
          ref: r,
          disabled: d,
          "data-disabled": d || void 0,
          "data-loading": m || void 0,
          unstyled: h,
        },
        s,
      ),
      m ? O : o,
    );
  });
lr.displayName = "@mantine/core/ActionIcon";
const _n = ye(lr);
var yn = Object.defineProperty,
  gn = Object.defineProperties,
  hn = Object.getOwnPropertyDescriptors,
  K = Object.getOwnPropertySymbols,
  ir = Object.prototype.hasOwnProperty,
  cr = Object.prototype.propertyIsEnumerable,
  Ne = (e, r, t) =>
    r in e
      ? yn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  bn = (e, r) => {
    for (var t in r || (r = {})) ir.call(r, t) && Ne(e, t, r[t]);
    if (K) for (var t of K(r)) cr.call(r, t) && Ne(e, t, r[t]);
    return e;
  },
  wn = (e, r) => gn(e, hn(r)),
  On = (e, r) => {
    var t = {};
    for (var n in e) ir.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && K)
      for (var n of K(e)) r.indexOf(n) < 0 && cr.call(e, n) && (t[n] = e[n]);
    return t;
  };
function sr(e) {
  const r = $("Portal", {}, e),
    { children: t, target: n, className: a, innerRef: o } = r,
    l = On(r, ["children", "target", "className", "innerRef"]),
    i = tt(),
    [f, v] = c.useState(!1),
    d = c.useRef();
  return (
    nt(
      () => (
        v(!0),
        (d.current = n
          ? typeof n == "string"
            ? document.querySelector(n)
            : n
          : document.createElement("div")),
        n || document.body.appendChild(d.current),
        () => {
          !n && document.body.removeChild(d.current);
        }
      ),
      [n],
    ),
    f
      ? at.createPortal(
          u.createElement(
            "div",
            wn(bn({ className: a, dir: i.dir }, l), { ref: o }),
            t,
          ),
          d.current,
        )
      : null
  );
}
sr.displayName = "@mantine/core/Portal";
var Pn = Object.defineProperty,
  Z = Object.getOwnPropertySymbols,
  ur = Object.prototype.hasOwnProperty,
  dr = Object.prototype.propertyIsEnumerable,
  Re = (e, r, t) =>
    r in e
      ? Pn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Sn = (e, r) => {
    for (var t in r || (r = {})) ur.call(r, t) && Re(e, t, r[t]);
    if (Z) for (var t of Z(r)) dr.call(r, t) && Re(e, t, r[t]);
    return e;
  },
  $n = (e, r) => {
    var t = {};
    for (var n in e) ur.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && Z)
      for (var n of Z(e)) r.indexOf(n) < 0 && dr.call(e, n) && (t[n] = e[n]);
    return t;
  };
function fr(e) {
  var r = e,
    { withinPortal: t = !0, children: n } = r,
    a = $n(r, ["withinPortal", "children"]);
  return t
    ? u.createElement(sr, Sn({}, a), n)
    : u.createElement(u.Fragment, null, n);
}
fr.displayName = "@mantine/core/OptionalPortal";
var En = Object.defineProperty,
  Ie = Object.getOwnPropertySymbols,
  Cn = Object.prototype.hasOwnProperty,
  xn = Object.prototype.propertyIsEnumerable,
  je = (e, r, t) =>
    r in e
      ? En(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Nn = (e, r) => {
    for (var t in r || (r = {})) Cn.call(r, t) && je(e, t, r[t]);
    if (Ie) for (var t of Ie(r)) xn.call(r, t) && je(e, t, r[t]);
    return e;
  };
function vr(e) {
  return u.createElement(
    "svg",
    Nn(
      {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e,
    ),
    u.createElement("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  );
}
vr.displayName = "@mantine/core/CloseIcon";
var Rn = Object.defineProperty,
  q = Object.getOwnPropertySymbols,
  pr = Object.prototype.hasOwnProperty,
  mr = Object.prototype.propertyIsEnumerable,
  Be = (e, r, t) =>
    r in e
      ? Rn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  In = (e, r) => {
    for (var t in r || (r = {})) pr.call(r, t) && Be(e, t, r[t]);
    if (q) for (var t of q(r)) mr.call(r, t) && Be(e, t, r[t]);
    return e;
  },
  jn = (e, r) => {
    var t = {};
    for (var n in e) pr.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && q)
      for (var n of q(e)) r.indexOf(n) < 0 && mr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const Bn = { xs: _(12), sm: _(16), md: _(20), lg: _(28), xl: _(34) },
  Tn = { size: "sm" },
  _r = c.forwardRef((e, r) => {
    const t = $("CloseButton", Tn, e),
      { iconSize: n, size: a, children: o } = t,
      l = jn(t, ["iconSize", "size", "children"]),
      i = _(n || Bn[a]);
    return u.createElement(
      _n,
      In({ ref: r, __staticSelector: "CloseButton", size: a }, l),
      o || u.createElement(vr, { width: i, height: i }),
    );
  });
_r.displayName = "@mantine/core/CloseButton";
const An = ye(_r);
function yr({ children: e, active: r = !0, refProp: t = "ref" }) {
  const n = Gt(r),
    a = tn(n, e == null ? void 0 : e.ref);
  return Wt(e) ? c.cloneElement(e, { [t]: a }) : e;
}
yr.displayName = "@mantine/core/FocusTrap";
var Mn = x((e, { radius: r, shadow: t }) => ({
  root: {
    outline: 0,
    WebkitTapHighlightColor: "transparent",
    display: "block",
    textDecoration: "none",
    color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
    backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
    boxSizing: "border-box",
    borderRadius: e.fn.radius(r),
    boxShadow: e.shadows[t] || t || "none",
    "&[data-with-border]": {
      border: `${_(1)} solid ${
        e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[3]
      }`,
    },
  },
}));
const kn = Mn;
var zn = Object.defineProperty,
  U = Object.getOwnPropertySymbols,
  gr = Object.prototype.hasOwnProperty,
  hr = Object.prototype.propertyIsEnumerable,
  Te = (e, r, t) =>
    r in e
      ? zn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Ln = (e, r) => {
    for (var t in r || (r = {})) gr.call(r, t) && Te(e, t, r[t]);
    if (U) for (var t of U(r)) hr.call(r, t) && Te(e, t, r[t]);
    return e;
  },
  Dn = (e, r) => {
    var t = {};
    for (var n in e) gr.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && U)
      for (var n of U(e)) r.indexOf(n) < 0 && hr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const Hn = {},
  br = c.forwardRef((e, r) => {
    const t = $("Paper", Hn, e),
      {
        className: n,
        children: a,
        radius: o,
        withBorder: l,
        shadow: i,
        unstyled: f,
        variant: v,
      } = t,
      d = Dn(t, [
        "className",
        "children",
        "radius",
        "withBorder",
        "shadow",
        "unstyled",
        "variant",
      ]),
      { classes: g, cx: m } = kn(
        { radius: o, shadow: i },
        { name: "Paper", unstyled: f, variant: v },
      );
    return u.createElement(
      ie,
      Ln(
        { className: m(g.root, n), "data-with-border": l || void 0, ref: r },
        d,
      ),
      a,
    );
  });
br.displayName = "@mantine/core/Paper";
const Vn = ye(br),
  [Fn, M] = er("ModalBase component was not found in tree");
var Wn = x(() => ({ close: {} }));
const Yn = Wn;
var Xn = Object.defineProperty,
  Q = Object.getOwnPropertySymbols,
  wr = Object.prototype.hasOwnProperty,
  Or = Object.prototype.propertyIsEnumerable,
  Ae = (e, r, t) =>
    r in e
      ? Xn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Kn = (e, r) => {
    for (var t in r || (r = {})) wr.call(r, t) && Ae(e, t, r[t]);
    if (Q) for (var t of Q(r)) Or.call(r, t) && Ae(e, t, r[t]);
    return e;
  },
  Zn = (e, r) => {
    var t = {};
    for (var n in e) wr.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && Q)
      for (var n of Q(e)) r.indexOf(n) < 0 && Or.call(e, n) && (t[n] = e[n]);
    return t;
  };
const qn = { size: "sm" },
  Un = c.forwardRef((e, r) => {
    const t = M(),
      n = $(`${t.__staticSelector}CloseButton`, qn, e),
      { className: a } = n,
      o = Zn(n, ["className"]),
      { classes: l, cx: i } = Yn(null, t.stylesApi);
    return u.createElement(
      An,
      Kn({ className: i(l.close, a), ref: r, onClick: t.onClose }, o),
    );
  });
var Qn = x(() => ({ overlay: {} }));
const Gn = Qn;
var Jn = Object.defineProperty,
  ea = Object.defineProperties,
  ra = Object.getOwnPropertyDescriptors,
  G = Object.getOwnPropertySymbols,
  Pr = Object.prototype.hasOwnProperty,
  Sr = Object.prototype.propertyIsEnumerable,
  Me = (e, r, t) =>
    r in e
      ? Jn(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  k = (e, r) => {
    for (var t in r || (r = {})) Pr.call(r, t) && Me(e, t, r[t]);
    if (G) for (var t of G(r)) Sr.call(r, t) && Me(e, t, r[t]);
    return e;
  },
  ta = (e, r) => ea(e, ra(r)),
  na = (e, r) => {
    var t = {};
    for (var n in e) Pr.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && G)
      for (var n of G(e)) r.indexOf(n) < 0 && Sr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const aa = {},
  oa = c.forwardRef((e, r) => {
    const t = M(),
      n = $(`${t.__staticSelector}Overlay`, aa, e),
      { onClick: a, transitionProps: o, style: l, className: i } = n,
      f = na(n, ["onClick", "transitionProps", "style", "className"]),
      { classes: v, cx: d } = Gn(null, t.stylesApi),
      g = (m) => {
        a == null || a(m), t.closeOnClickOutside && t.onClose();
      };
    return u.createElement(
      Ye,
      ta(k(k({ mounted: t.opened }, t.transitionProps), o), {
        transition: "fade",
      }),
      (m) =>
        u.createElement(
          ot,
          k(
            {
              ref: r,
              onClick: g,
              fixed: !0,
              style: k(k({}, l), m),
              className: d(v.overlay, i),
              zIndex: t.zIndex,
            },
            f,
          ),
        ),
    );
  });
var la = x((e, { zIndex: r }) => ({
  inner: {
    position: "fixed",
    width: "100%",
    top: 0,
    bottom: 0,
    maxHeight: "100%",
    zIndex: r,
    pointerEvents: "none",
  },
  content: { pointerEvents: "all" },
}));
const ia = la;
var ca = Object.defineProperty,
  J = Object.getOwnPropertySymbols,
  $r = Object.prototype.hasOwnProperty,
  Er = Object.prototype.propertyIsEnumerable,
  ke = (e, r, t) =>
    r in e
      ? ca(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  z = (e, r) => {
    for (var t in r || (r = {})) $r.call(r, t) && ke(e, t, r[t]);
    if (J) for (var t of J(r)) Er.call(r, t) && ke(e, t, r[t]);
    return e;
  },
  sa = (e, r) => {
    var t = {};
    for (var n in e) $r.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && J)
      for (var n of J(e)) r.indexOf(n) < 0 && Er.call(e, n) && (t[n] = e[n]);
    return t;
  };
const ua = {},
  da = c.forwardRef((e, r) => {
    const t = M(),
      n = $(`${t.__staticSelector}Content`, ua, e),
      { className: a, transitionProps: o, style: l, onKeyDown: i } = n,
      f = sa(n, ["className", "transitionProps", "style", "onKeyDown"]),
      { classes: v, cx: d } = ia({ zIndex: t.zIndex + 1 }, t.stylesApi),
      g = (m) => {
        var h;
        ((h = m.target) == null
          ? void 0
          : h.getAttribute("data-mantine-stop-propagation")) !== "true" &&
          m.key === "Escape" &&
          t.closeOnEscape &&
          t.onClose(),
          i == null || i(m);
      };
    return u.createElement(
      Ye,
      z(z({ mounted: t.opened, transition: "pop" }, t.transitionProps), o),
      (m) =>
        u.createElement(
          "div",
          { className: d(v.inner) },
          u.createElement(
            yr,
            { active: t.opened && t.trapFocus },
            u.createElement(
              Vn,
              z(
                {
                  component: "section",
                  role: "dialog",
                  tabIndex: -1,
                  "aria-modal": !0,
                  "aria-describedby": t.bodyMounted ? t.getBodyId() : void 0,
                  "aria-labelledby": t.titleMounted ? t.getTitleId() : void 0,
                  onKeyDown: g,
                  ref: r,
                  className: d(v.content, a),
                  style: z(z({}, l), m),
                  shadow: t.shadow,
                },
                f,
              ),
              f.children,
            ),
          ),
        ),
    );
  });
var fa = x((e, { padding: r }) => {
  const t = j({ size: r, sizes: e.spacing });
  return {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: t,
      paddingRight: `calc(${t} - ${_(5)})`,
      position: "sticky",
      top: 0,
      backgroundColor: e.colorScheme === "dark" ? e.colors.dark[7] : e.white,
      zIndex: 1e3,
    },
  };
});
const va = fa;
var pa = Object.defineProperty,
  ee = Object.getOwnPropertySymbols,
  Cr = Object.prototype.hasOwnProperty,
  xr = Object.prototype.propertyIsEnumerable,
  ze = (e, r, t) =>
    r in e
      ? pa(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  ma = (e, r) => {
    for (var t in r || (r = {})) Cr.call(r, t) && ze(e, t, r[t]);
    if (ee) for (var t of ee(r)) xr.call(r, t) && ze(e, t, r[t]);
    return e;
  },
  _a = (e, r) => {
    var t = {};
    for (var n in e) Cr.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && ee)
      for (var n of ee(e)) r.indexOf(n) < 0 && xr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const ya = {},
  ga = c.forwardRef((e, r) => {
    const t = M(),
      n = $(`${t.__staticSelector}Header`, ya, e),
      { className: a } = n,
      o = _a(n, ["className"]),
      { classes: l, cx: i } = va({ padding: t.padding }, t.stylesApi);
    return u.createElement(ie, ma({ ref: r, className: i(l.header, a) }, o));
  });
var ha = x((e) => ({
  title: {
    lineHeight: 1,
    padding: 0,
    margin: 0,
    fontWeight: 400,
    fontSize: e.fontSizes.md,
  },
}));
const ba = ha;
var wa = Object.defineProperty,
  re = Object.getOwnPropertySymbols,
  Nr = Object.prototype.hasOwnProperty,
  Rr = Object.prototype.propertyIsEnumerable,
  Le = (e, r, t) =>
    r in e
      ? wa(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Oa = (e, r) => {
    for (var t in r || (r = {})) Nr.call(r, t) && Le(e, t, r[t]);
    if (re) for (var t of re(r)) Rr.call(r, t) && Le(e, t, r[t]);
    return e;
  },
  Pa = (e, r) => {
    var t = {};
    for (var n in e) Nr.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && re)
      for (var n of re(e)) r.indexOf(n) < 0 && Rr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const Sa = {},
  $a = c.forwardRef((e, r) => {
    const t = M(),
      n = $(`${t.__staticSelector}Title`, Sa, e),
      { className: a } = n,
      o = Pa(n, ["className"]),
      { classes: l, cx: i } = ba(null, t.stylesApi);
    return (
      c.useEffect(
        () => (t.setTitleMounted(!0), () => t.setTitleMounted(!1)),
        [],
      ),
      u.createElement(
        ie,
        Oa(
          {
            component: "h2",
            id: t.getTitleId(),
            className: i(l.title, a),
            ref: r,
          },
          o,
        ),
      )
    );
  });
var Ea = x((e, { padding: r }) => ({
  body: {
    padding: j({ size: r, sizes: e.spacing }),
    "&:not(:only-child)": { paddingTop: 0 },
  },
}));
const Ca = Ea;
var xa = Object.defineProperty,
  te = Object.getOwnPropertySymbols,
  Ir = Object.prototype.hasOwnProperty,
  jr = Object.prototype.propertyIsEnumerable,
  De = (e, r, t) =>
    r in e
      ? xa(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Na = (e, r) => {
    for (var t in r || (r = {})) Ir.call(r, t) && De(e, t, r[t]);
    if (te) for (var t of te(r)) jr.call(r, t) && De(e, t, r[t]);
    return e;
  },
  Ra = (e, r) => {
    var t = {};
    for (var n in e) Ir.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && te)
      for (var n of te(e)) r.indexOf(n) < 0 && jr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const Ia = {},
  ja = c.forwardRef((e, r) => {
    const t = M(),
      n = $(`${t.__staticSelector}Body`, Ia, e),
      { className: a } = n,
      o = Ra(n, ["className"]),
      { classes: l, cx: i } = Ca({ padding: t.padding }, t.stylesApi);
    return (
      c.useEffect(() => (t.setBodyMounted(!0), () => t.setBodyMounted(!1)), []),
      u.createElement(
        ie,
        Na({ id: t.getBodyId(), className: i(l.body, a), ref: r }, o),
      )
    );
  });
function Ba({ children: e }) {
  return u.createElement(u.Fragment, null, e);
}
function Ta({ opened: e, transitionDuration: r }) {
  const [t, n] = c.useState(e),
    a = c.useRef(),
    l = lt() ? 0 : r;
  return (
    c.useEffect(
      () => (
        e
          ? (n(!0), window.clearTimeout(a.current))
          : l === 0
            ? n(!1)
            : (a.current = window.setTimeout(() => n(!1), l)),
        () => window.clearTimeout(a.current)
      ),
      [e, l],
    ),
    t
  );
}
var Aa = x(() => ({ root: {} }));
const Ma = Aa;
var ka = Object.defineProperty,
  za = Object.defineProperties,
  La = Object.getOwnPropertyDescriptors,
  ne = Object.getOwnPropertySymbols,
  Br = Object.prototype.hasOwnProperty,
  Tr = Object.prototype.propertyIsEnumerable,
  He = (e, r, t) =>
    r in e
      ? ka(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  fe = (e, r) => {
    for (var t in r || (r = {})) Br.call(r, t) && He(e, t, r[t]);
    if (ne) for (var t of ne(r)) Tr.call(r, t) && He(e, t, r[t]);
    return e;
  },
  Da = (e, r) => za(e, La(r)),
  Ha = (e, r) => {
    var t = {};
    for (var n in e) Br.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && ne)
      for (var n of ne(e)) r.indexOf(n) < 0 && Tr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const ge = {
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: it("modal"),
  padding: "md",
  size: "md",
  shadow: "xl",
};
function y(e) {
  const r = $("ModalBase", ge, e),
    {
      opened: t,
      onClose: n,
      children: a,
      closeOnClickOutside: o,
      __staticSelector: l,
      transitionProps: i,
      withinPortal: f,
      portalProps: v,
      keepMounted: d,
      target: g,
      zIndex: m,
      lockScroll: h,
      trapFocus: P,
      closeOnEscape: s,
      returnFocus: p,
      padding: w,
      shadow: S,
      id: O,
      size: E,
      variant: b,
      classNames: B,
      unstyled: N,
      styles: I,
      className: L,
    } = r,
    Wr = Ha(r, [
      "opened",
      "onClose",
      "children",
      "closeOnClickOutside",
      "__staticSelector",
      "transitionProps",
      "withinPortal",
      "portalProps",
      "keepMounted",
      "target",
      "zIndex",
      "lockScroll",
      "trapFocus",
      "closeOnEscape",
      "returnFocus",
      "padding",
      "shadow",
      "id",
      "size",
      "variant",
      "classNames",
      "unstyled",
      "styles",
      "className",
    ]),
    { classes: Yr, cx: Xr } = Ma(null, {
      name: l,
      classNames: B,
      styles: I,
      unstyled: N,
      variant: b,
      size: E,
    }),
    se = ct(O),
    [Kr, Zr] = c.useState(!1),
    [qr, Ur] = c.useState(!1),
    he =
      typeof (i == null ? void 0 : i.duration) == "number"
        ? i == null
          ? void 0
          : i.duration
        : 200,
    Qr = Ta({ opened: t, transitionDuration: he });
  return (
    Jt("keydown", (Gr) => {
      !P && Gr.key === "Escape" && s && n();
    }),
    Yt({ opened: t, shouldReturnFocus: P && p }),
    u.createElement(
      fr,
      fe({ withinPortal: f, target: g }, v),
      u.createElement(
        Fn,
        {
          value: {
            __staticSelector: l,
            opened: t,
            onClose: n,
            closeOnClickOutside: o,
            transitionProps: Da(fe({}, i), { duration: he, keepMounted: d }),
            zIndex: m,
            padding: w,
            id: se,
            getTitleId: () => `${se}-title`,
            getBodyId: () => `${se}-body`,
            titleMounted: Kr,
            bodyMounted: qr,
            setTitleMounted: Zr,
            setBodyMounted: Ur,
            trapFocus: P,
            closeOnEscape: s,
            shadow: S,
            stylesApi: {
              name: l,
              size: E,
              variant: b,
              classNames: B,
              styles: I,
              unstyled: N,
            },
          },
        },
        u.createElement(
          Ft,
          { enabled: Qr && h },
          u.createElement("div", fe({ className: Xr(Yr.root, L) }, Wr), a),
        ),
      ),
    )
  );
}
y.CloseButton = Un;
y.Overlay = oa;
y.Content = da;
y.Header = ga;
y.Title = $a;
y.Body = ja;
y.NativeScrollArea = Ba;
const [Va, Fa] = er("Modal component was not found in tree"),
  Wa = { xs: _(320), sm: _(380), md: _(440), lg: _(620), xl: _(780) };
var Ya = x(
  (e, { yOffset: r, xOffset: t, centered: n, fullScreen: a }, { size: o }) => ({
    content: {
      flex: a ? "0 0 100%" : `0 0 ${j({ size: o, sizes: Wa })}`,
      maxWidth: "100%",
      maxHeight: a ? void 0 : `calc(100vh - (${_(r)} * 2))`,
      height: a ? "100vh" : void 0,
      borderRadius: a ? 0 : void 0,
      overflowY: "auto",
    },
    inner: {
      paddingTop: a ? 0 : r,
      paddingBottom: a ? 0 : r,
      paddingLeft: a ? 0 : t,
      paddingRight: a ? 0 : t,
      display: "flex",
      justifyContent: "center",
      alignItems: n ? "center" : "flex-start",
    },
  }),
);
const Xa = Ya;
var Ka = Object.defineProperty,
  Za = Object.defineProperties,
  qa = Object.getOwnPropertyDescriptors,
  ae = Object.getOwnPropertySymbols,
  Ar = Object.prototype.hasOwnProperty,
  Mr = Object.prototype.propertyIsEnumerable,
  Ve = (e, r, t) =>
    r in e
      ? Ka(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  _e = (e, r) => {
    for (var t in r || (r = {})) Ar.call(r, t) && Ve(e, t, r[t]);
    if (ae) for (var t of ae(r)) Mr.call(r, t) && Ve(e, t, r[t]);
    return e;
  },
  kr = (e, r) => Za(e, qa(r)),
  Ua = (e, r) => {
    var t = {};
    for (var n in e) Ar.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && ae)
      for (var n of ae(e)) r.indexOf(n) < 0 && Mr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const Qa = kr(_e({}, ge), { yOffset: "5vh", xOffset: "5vw" });
function zr(e) {
  const r = $("ModalRoot", Qa, e),
    {
      classNames: t,
      variant: n,
      size: a,
      yOffset: o,
      xOffset: l,
      scrollAreaComponent: i,
      radius: f,
      centered: v,
      fullScreen: d,
    } = r,
    g = Ua(r, [
      "classNames",
      "variant",
      "size",
      "yOffset",
      "xOffset",
      "scrollAreaComponent",
      "radius",
      "centered",
      "fullScreen",
    ]),
    { classes: m, cx: h } = Xa(
      { yOffset: o, xOffset: l, centered: v, fullScreen: d },
      { name: "Modal", variant: n, size: a },
    );
  return u.createElement(
    Va,
    { value: { yOffset: o, scrollAreaComponent: i, radius: f } },
    u.createElement(
      y,
      _e(
        {
          __staticSelector: "Modal",
          size: a,
          variant: n,
          classNames: kr(_e({}, t), {
            content: h(m.content, t == null ? void 0 : t.content),
            inner: h(m.inner, t == null ? void 0 : t.inner),
          }),
        },
        g,
      ),
    ),
  );
}
var Ga = Object.defineProperty,
  oe = Object.getOwnPropertySymbols,
  Lr = Object.prototype.hasOwnProperty,
  Dr = Object.prototype.propertyIsEnumerable,
  Fe = (e, r, t) =>
    r in e
      ? Ga(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Ja = (e, r) => {
    for (var t in r || (r = {})) Lr.call(r, t) && Fe(e, t, r[t]);
    if (oe) for (var t of oe(r)) Dr.call(r, t) && Fe(e, t, r[t]);
    return e;
  },
  eo = (e, r) => {
    var t = {};
    for (var n in e) Lr.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && oe)
      for (var n of oe(e)) r.indexOf(n) < 0 && Dr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const ro = { shadow: "xl" },
  Hr = c.forwardRef((e, r) => {
    const t = $("ModalContent", ro, e),
      { children: n, scrollAreaComponent: a } = t,
      o = eo(t, ["children", "scrollAreaComponent"]),
      l = Fa(),
      i = a || l.scrollAreaComponent || y.NativeScrollArea;
    return u.createElement(
      y.Content,
      Ja({ ref: r, radius: l.radius }, o),
      u.createElement(
        i,
        { style: { maxHeight: `calc(100vh - (${_(l.yOffset)} * 2))` } },
        n,
      ),
    );
  });
var to = Object.defineProperty,
  no = Object.defineProperties,
  ao = Object.getOwnPropertyDescriptors,
  le = Object.getOwnPropertySymbols,
  Vr = Object.prototype.hasOwnProperty,
  Fr = Object.prototype.propertyIsEnumerable,
  We = (e, r, t) =>
    r in e
      ? to(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Y = (e, r) => {
    for (var t in r || (r = {})) Vr.call(r, t) && We(e, t, r[t]);
    if (le) for (var t of le(r)) Fr.call(r, t) && We(e, t, r[t]);
    return e;
  },
  oo = (e, r) => no(e, ao(r)),
  lo = (e, r) => {
    var t = {};
    for (var n in e) Vr.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
    if (e != null && le)
      for (var n of le(e)) r.indexOf(n) < 0 && Fr.call(e, n) && (t[n] = e[n]);
    return t;
  };
const io = oo(Y({}, ge), {
  transitionProps: { duration: 200, transition: "pop" },
  withOverlay: !0,
  withCloseButton: !0,
});
function R(e) {
  const r = $("Modal", io, e),
    {
      title: t,
      withOverlay: n,
      overlayProps: a,
      withCloseButton: o,
      closeButtonProps: l,
      children: i,
    } = r,
    f = lo(r, [
      "title",
      "withOverlay",
      "overlayProps",
      "withCloseButton",
      "closeButtonProps",
      "children",
    ]),
    v = !!t || o;
  return u.createElement(
    zr,
    Y({}, f),
    n && u.createElement(y.Overlay, Y({}, a)),
    u.createElement(
      Hr,
      null,
      v &&
        u.createElement(
          y.Header,
          null,
          t && u.createElement(y.Title, null, t),
          o && u.createElement(y.CloseButton, Y({}, l)),
        ),
      u.createElement(y.Body, null, i),
    ),
  );
}
R.Root = zr;
R.CloseButton = y.CloseButton;
R.Overlay = y.Overlay;
R.Content = Hr;
R.Header = y.Header;
R.Title = y.Title;
R.Body = y.Body;
R.NativeScrollArea = y.NativeScrollArea;
export { An as C, R as M, Vn as P };

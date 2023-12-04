import {
  r as Rr,
  c as lB,
  g as ys,
  a as ku,
  u as eh,
  R as nu,
  B as th,
  T as fB,
  _ as Qe,
  n as iu,
  b as hB,
  k as BB,
  d as gB,
  o as dB,
  e as ye,
  F as pB,
  j as Mt,
  C as wB,
  l as vB,
  m as Sl,
} from "./index-4f59dc0f.js";
const bs = { xs: Rr(1), sm: Rr(2), md: Rr(3), lg: Rr(4), xl: Rr(5) };
function Ls(t, A) {
  const e = t.fn.variant({ variant: "outline", color: A }).border;
  return typeof A == "string" && (A in t.colors || A.split(".")[0] in t.colors)
    ? e
    : A === void 0
      ? t.colorScheme === "dark"
        ? t.colors.dark[4]
        : t.colors.gray[4]
      : A;
}
var mB = lB((t, { color: A }, { size: e, variant: r }) => ({
  root: {},
  withLabel: { borderTop: "0 !important" },
  left: { "&::before": { display: "none" } },
  right: { "&::after": { display: "none" } },
  label: {
    display: "flex",
    alignItems: "center",
    "&::before": {
      content: '""',
      flex: 1,
      height: Rr(1),
      borderTop: `${ys({ size: e, sizes: bs })} ${r} ${Ls(t, A)}`,
      marginRight: t.spacing.xs,
    },
    "&::after": {
      content: '""',
      flex: 1,
      borderTop: `${ys({ size: e, sizes: bs })} ${r} ${Ls(t, A)}`,
      marginLeft: t.spacing.xs,
    },
  },
  labelDefaultStyles: {
    color:
      A === "dark"
        ? t.colors.dark[1]
        : t.fn.themeColor(
            A,
            t.colorScheme === "dark" ? 5 : t.fn.primaryShade(),
            !1,
          ),
  },
  horizontal: {
    border: 0,
    borderTopWidth: Rr(ys({ size: e, sizes: bs })),
    borderTopColor: Ls(t, A),
    borderTopStyle: r,
    margin: 0,
  },
  vertical: {
    border: 0,
    alignSelf: "stretch",
    height: "auto",
    borderLeftWidth: Rr(ys({ size: e, sizes: bs })),
    borderLeftColor: Ls(t, A),
    borderLeftStyle: r,
  },
}));
const CB = mB;
var QB = Object.defineProperty,
  FB = Object.defineProperties,
  UB = Object.getOwnPropertyDescriptors,
  uo = Object.getOwnPropertySymbols,
  rh = Object.prototype.hasOwnProperty,
  nh = Object.prototype.propertyIsEnumerable,
  Hl = (t, A, e) =>
    A in t
      ? QB(t, A, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[A] = e),
  Nl = (t, A) => {
    for (var e in A || (A = {})) rh.call(A, e) && Hl(t, e, A[e]);
    if (uo) for (var e of uo(A)) nh.call(A, e) && Hl(t, e, A[e]);
    return t;
  },
  yB = (t, A) => FB(t, UB(A)),
  bB = (t, A) => {
    var e = {};
    for (var r in t) rh.call(t, r) && A.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && uo)
      for (var r of uo(t)) A.indexOf(r) < 0 && nh.call(t, r) && (e[r] = t[r]);
    return e;
  };
const LB = {
    orientation: "horizontal",
    size: "xs",
    labelPosition: "left",
    variant: "solid",
  },
  au = ku.forwardRef((t, A) => {
    const e = eh("Divider", LB, t),
      {
        className: r,
        color: n,
        orientation: i,
        size: s,
        label: c,
        labelPosition: u,
        labelProps: h,
        variant: B,
        styles: p,
        classNames: w,
        unstyled: g,
      } = e,
      L = bB(e, [
        "className",
        "color",
        "orientation",
        "size",
        "label",
        "labelPosition",
        "labelProps",
        "variant",
        "styles",
        "classNames",
        "unstyled",
      ]),
      { classes: y, cx: N } = CB(
        { color: n },
        {
          classNames: w,
          styles: p,
          unstyled: g,
          name: "Divider",
          variant: B,
          size: s,
        },
      ),
      F = i === "vertical",
      I = i === "horizontal",
      G = !!c && I,
      Y = !(h != null && h.color);
    return nu.createElement(
      th,
      Nl(
        {
          ref: A,
          className: N(
            y.root,
            { [y.vertical]: F, [y.horizontal]: I, [y.withLabel]: G },
            r,
          ),
          role: "separator",
        },
        L,
      ),
      G &&
        nu.createElement(
          fB,
          yB(Nl({}, h), {
            size: (h == null ? void 0 : h.size) || "xs",
            mt: Rr(2),
            className: N(y.label, y[u], { [y.labelDefaultStyles]: Y }),
          }),
          c,
        ),
    );
  });
au.displayName = "@mantine/core/Divider";
var EB = Object.defineProperty,
  lo = Object.getOwnPropertySymbols,
  ih = Object.prototype.hasOwnProperty,
  ah = Object.prototype.propertyIsEnumerable,
  _l = (t, A, e) =>
    A in t
      ? EB(t, A, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[A] = e),
  IB = (t, A) => {
    for (var e in A || (A = {})) ih.call(A, e) && _l(t, e, A[e]);
    if (lo) for (var e of lo(A)) ah.call(A, e) && _l(t, e, A[e]);
    return t;
  },
  xB = (t, A) => {
    var e = {};
    for (var r in t) ih.call(t, r) && A.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && lo)
      for (var r of lo(t)) A.indexOf(r) < 0 && ah.call(t, r) && (e[r] = t[r]);
    return e;
  };
const SB = { w: 0, h: 0 },
  Nn = ku.forwardRef((t, A) => {
    const e = eh("Space", SB, t),
      { w: r, h: n } = e,
      i = xB(e, ["w", "h"]);
    return nu.createElement(th, IB({ ref: A, w: r, miw: r, h: n, mih: n }, i));
  });
Nn.displayName = "@mantine/core/Space";
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var su =
  function (t, A) {
    return (
      (su =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, r) {
            e.__proto__ = r;
          }) ||
        function (e, r) {
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }),
      su(t, A)
    );
  };
function or(t, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError(
      "Class extends value " + String(A) + " is not a constructor or null",
    );
  su(t, A);
  function e() {
    this.constructor = t;
  }
  t.prototype =
    A === null ? Object.create(A) : ((e.prototype = A.prototype), new e());
}
var ou = function () {
  return (
    (ou =
      Object.assign ||
      function (A) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
          e = arguments[r];
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (A[i] = e[i]);
        }
        return A;
      }),
    ou.apply(this, arguments)
  );
};
function dt(t, A, e, r) {
  function n(i) {
    return i instanceof e
      ? i
      : new e(function (s) {
          s(i);
        });
  }
  return new (e || (e = Promise))(function (i, s) {
    function c(B) {
      try {
        h(r.next(B));
      } catch (p) {
        s(p);
      }
    }
    function u(B) {
      try {
        h(r.throw(B));
      } catch (p) {
        s(p);
      }
    }
    function h(B) {
      B.done ? i(B.value) : n(B.value).then(c, u);
    }
    h((r = r.apply(t, A || [])).next());
  });
}
function ht(t, A) {
  var e = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    n,
    i,
    s;
  return (
    (s = { next: c(0), throw: c(1), return: c(2) }),
    typeof Symbol == "function" &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function c(h) {
    return function (B) {
      return u([h, B]);
    };
  }
  function u(h) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (
          ((r = 1),
          n &&
            (i =
              h[0] & 2
                ? n.return
                : h[0]
                  ? n.throw || ((i = n.return) && i.call(n), 0)
                  : n.next) &&
            !(i = i.call(n, h[1])).done)
        )
          return i;
        switch (((n = 0), i && (h = [h[0] & 2, i.value]), h[0])) {
          case 0:
          case 1:
            i = h;
            break;
          case 4:
            return e.label++, { value: h[1], done: !1 };
          case 5:
            e.label++, (n = h[1]), (h = [0]);
            continue;
          case 7:
            (h = e.ops.pop()), e.trys.pop();
            continue;
          default:
            if (
              ((i = e.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (h[0] === 6 || h[0] === 2))
            ) {
              e = 0;
              continue;
            }
            if (h[0] === 3 && (!i || (h[1] > i[0] && h[1] < i[3]))) {
              e.label = h[1];
              break;
            }
            if (h[0] === 6 && e.label < i[1]) {
              (e.label = i[1]), (i = h);
              break;
            }
            if (i && e.label < i[2]) {
              (e.label = i[2]), e.ops.push(h);
              break;
            }
            i[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        h = A.call(t, e);
      } catch (B) {
        (h = [6, B]), (n = 0);
      } finally {
        r = i = 0;
      }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function Es(t, A, e) {
  if (e || arguments.length === 2)
    for (var r = 0, n = A.length, i; r < n; r++)
      (i || !(r in A)) &&
        (i || (i = Array.prototype.slice.call(A, 0, r)), (i[r] = A[r]));
  return t.concat(i || A);
}
var jr = (function () {
    function t(A, e, r, n) {
      (this.left = A), (this.top = e), (this.width = r), (this.height = n);
    }
    return (
      (t.prototype.add = function (A, e, r, n) {
        return new t(
          this.left + A,
          this.top + e,
          this.width + r,
          this.height + n,
        );
      }),
      (t.fromClientRect = function (A, e) {
        return new t(
          e.left + A.windowBounds.left,
          e.top + A.windowBounds.top,
          e.width,
          e.height,
        );
      }),
      (t.fromDOMRectList = function (A, e) {
        var r = Array.from(e).find(function (n) {
          return n.width !== 0;
        });
        return r
          ? new t(
              r.left + A.windowBounds.left,
              r.top + A.windowBounds.top,
              r.width,
              r.height,
            )
          : t.EMPTY;
      }),
      (t.EMPTY = new t(0, 0, 0, 0)),
      t
    );
  })(),
  yo = function (t, A) {
    return jr.fromClientRect(t, A.getBoundingClientRect());
  },
  HB = function (t) {
    var A = t.body,
      e = t.documentElement;
    if (!A || !e) throw new Error("Unable to get document size");
    var r = Math.max(
        Math.max(A.scrollWidth, e.scrollWidth),
        Math.max(A.offsetWidth, e.offsetWidth),
        Math.max(A.clientWidth, e.clientWidth),
      ),
      n = Math.max(
        Math.max(A.scrollHeight, e.scrollHeight),
        Math.max(A.offsetHeight, e.offsetHeight),
        Math.max(A.clientHeight, e.clientHeight),
      );
    return new jr(0, 0, r, n);
  },
  bo = function (t) {
    for (var A = [], e = 0, r = t.length; e < r; ) {
      var n = t.charCodeAt(e++);
      if (n >= 55296 && n <= 56319 && e < r) {
        var i = t.charCodeAt(e++);
        (i & 64512) === 56320
          ? A.push(((n & 1023) << 10) + (i & 1023) + 65536)
          : (A.push(n), e--);
      } else A.push(n);
    }
    return A;
  },
  Me = function () {
    for (var t = [], A = 0; A < arguments.length; A++) t[A] = arguments[A];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, t);
    var e = t.length;
    if (!e) return "";
    for (var r = [], n = -1, i = ""; ++n < e; ) {
      var s = t[n];
      s <= 65535
        ? r.push(s)
        : ((s -= 65536), r.push((s >> 10) + 55296, (s % 1024) + 56320)),
        (n + 1 === e || r.length > 16384) &&
          ((i += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return i;
  },
  Dl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  NB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Is = 0; Is < Dl.length; Is++) NB[Dl.charCodeAt(Is)] = Is;
var Tl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  wa = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var xs = 0; xs < Tl.length; xs++) wa[Tl.charCodeAt(xs)] = xs;
var _B = function (t) {
    var A = t.length * 0.75,
      e = t.length,
      r,
      n = 0,
      i,
      s,
      c,
      u;
    t[t.length - 1] === "=" && (A--, t[t.length - 2] === "=" && A--);
    var h =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(A)
          : new Array(A),
      B = Array.isArray(h) ? h : new Uint8Array(h);
    for (r = 0; r < e; r += 4)
      (i = wa[t.charCodeAt(r)]),
        (s = wa[t.charCodeAt(r + 1)]),
        (c = wa[t.charCodeAt(r + 2)]),
        (u = wa[t.charCodeAt(r + 3)]),
        (B[n++] = (i << 2) | (s >> 4)),
        (B[n++] = ((s & 15) << 4) | (c >> 2)),
        (B[n++] = ((c & 3) << 6) | (u & 63));
    return h;
  },
  DB = function (t) {
    for (var A = t.length, e = [], r = 0; r < A; r += 2)
      e.push((t[r + 1] << 8) | t[r]);
    return e;
  },
  TB = function (t) {
    for (var A = t.length, e = [], r = 0; r < A; r += 4)
      e.push((t[r + 3] << 24) | (t[r + 2] << 16) | (t[r + 1] << 8) | t[r]);
    return e;
  },
  Pn = 5,
  Ru = 6 + 5,
  Ec = 2,
  OB = Ru - Pn,
  sh = 65536 >> Pn,
  PB = 1 << Pn,
  Ic = PB - 1,
  MB = 1024 >> Pn,
  KB = sh + MB,
  kB = KB,
  RB = 32,
  GB = kB + RB,
  jB = 65536 >> Ru,
  VB = 1 << OB,
  qB = VB - 1,
  Ol = function (t, A, e) {
    return t.slice
      ? t.slice(A, e)
      : new Uint16Array(Array.prototype.slice.call(t, A, e));
  },
  WB = function (t, A, e) {
    return t.slice
      ? t.slice(A, e)
      : new Uint32Array(Array.prototype.slice.call(t, A, e));
  },
  XB = function (t, A) {
    var e = _B(t),
      r = Array.isArray(e) ? TB(e) : new Uint32Array(e),
      n = Array.isArray(e) ? DB(e) : new Uint16Array(e),
      i = 24,
      s = Ol(n, i / 2, r[4] / 2),
      c = r[5] === 2 ? Ol(n, (i + r[4]) / 2) : WB(r, Math.ceil((i + r[4]) / 4));
    return new JB(r[0], r[1], r[2], r[3], s, c);
  },
  JB = (function () {
    function t(A, e, r, n, i, s) {
      (this.initialValue = A),
        (this.errorValue = e),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = i),
        (this.data = s);
    }
    return (
      (t.prototype.get = function (A) {
        var e;
        if (A >= 0) {
          if (A < 55296 || (A > 56319 && A <= 65535))
            return (
              (e = this.index[A >> Pn]),
              (e = (e << Ec) + (A & Ic)),
              this.data[e]
            );
          if (A <= 65535)
            return (
              (e = this.index[sh + ((A - 55296) >> Pn)]),
              (e = (e << Ec) + (A & Ic)),
              this.data[e]
            );
          if (A < this.highStart)
            return (
              (e = GB - jB + (A >> Ru)),
              (e = this.index[e]),
              (e += (A >> Pn) & qB),
              (e = this.index[e]),
              (e = (e << Ec) + (A & Ic)),
              this.data[e]
            );
          if (A <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      t
    );
  })(),
  Pl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  zB = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ss = 0; Ss < Pl.length; Ss++) zB[Pl.charCodeAt(Ss)] = Ss;
var YB =
    "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",
  Ml = 50,
  ZB = 1,
  oh = 2,
  ch = 3,
  $B = 4,
  A1 = 5,
  Kl = 7,
  uh = 8,
  kl = 9,
  hn = 10,
  cu = 11,
  Rl = 12,
  uu = 13,
  e1 = 14,
  va = 15,
  lu = 16,
  Hs = 17,
  fa = 18,
  t1 = 19,
  Gl = 20,
  fu = 21,
  ha = 22,
  xc = 23,
  di = 24,
  Ht = 25,
  ma = 26,
  Ca = 27,
  pi = 28,
  r1 = 29,
  Dn = 30,
  n1 = 31,
  Ns = 32,
  _s = 33,
  hu = 34,
  Bu = 35,
  gu = 36,
  Sa = 37,
  du = 38,
  eo = 39,
  to = 40,
  Sc = 41,
  lh = 42,
  i1 = 43,
  a1 = [9001, 65288],
  fh = "!",
  ie = "×",
  Ds = "÷",
  pu = XB(YB),
  Mr = [Dn, gu],
  wu = [ZB, oh, ch, A1],
  hh = [hn, uh],
  jl = [Ca, ma],
  s1 = wu.concat(hh),
  Vl = [du, eo, to, hu, Bu],
  o1 = [va, uu],
  c1 = function (t, A) {
    A === void 0 && (A = "strict");
    var e = [],
      r = [],
      n = [];
    return (
      t.forEach(function (i, s) {
        var c = pu.get(i);
        if (
          (c > Ml ? (n.push(!0), (c -= Ml)) : n.push(!1),
          ["normal", "auto", "loose"].indexOf(A) !== -1 &&
            [8208, 8211, 12316, 12448].indexOf(i) !== -1)
        )
          return r.push(s), e.push(lu);
        if (c === $B || c === cu) {
          if (s === 0) return r.push(s), e.push(Dn);
          var u = e[s - 1];
          return s1.indexOf(u) === -1
            ? (r.push(r[s - 1]), e.push(u))
            : (r.push(s), e.push(Dn));
        }
        if ((r.push(s), c === n1)) return e.push(A === "strict" ? fu : Sa);
        if (c === lh || c === r1) return e.push(Dn);
        if (c === i1)
          return (i >= 131072 && i <= 196605) || (i >= 196608 && i <= 262141)
            ? e.push(Sa)
            : e.push(Dn);
        e.push(c);
      }),
      [r, e, n]
    );
  },
  Hc = function (t, A, e, r) {
    var n = r[e];
    if (Array.isArray(t) ? t.indexOf(n) !== -1 : t === n)
      for (var i = e; i <= r.length; ) {
        i++;
        var s = r[i];
        if (s === A) return !0;
        if (s !== hn) break;
      }
    if (n === hn)
      for (var i = e; i > 0; ) {
        i--;
        var c = r[i];
        if (Array.isArray(t) ? t.indexOf(c) !== -1 : t === c)
          for (var u = e; u <= r.length; ) {
            u++;
            var s = r[u];
            if (s === A) return !0;
            if (s !== hn) break;
          }
        if (c !== hn) break;
      }
    return !1;
  },
  ql = function (t, A) {
    for (var e = t; e >= 0; ) {
      var r = A[e];
      if (r === hn) e--;
      else return r;
    }
    return 0;
  },
  u1 = function (t, A, e, r, n) {
    if (e[r] === 0) return ie;
    var i = r - 1;
    if (Array.isArray(n) && n[i] === !0) return ie;
    var s = i - 1,
      c = i + 1,
      u = A[i],
      h = s >= 0 ? A[s] : 0,
      B = A[c];
    if (u === oh && B === ch) return ie;
    if (wu.indexOf(u) !== -1) return fh;
    if (wu.indexOf(B) !== -1 || hh.indexOf(B) !== -1) return ie;
    if (ql(i, A) === uh) return Ds;
    if (
      pu.get(t[i]) === cu ||
      ((u === Ns || u === _s) && pu.get(t[c]) === cu) ||
      u === Kl ||
      B === Kl ||
      u === kl ||
      ([hn, uu, va].indexOf(u) === -1 && B === kl) ||
      [Hs, fa, t1, di, pi].indexOf(B) !== -1 ||
      ql(i, A) === ha ||
      Hc(xc, ha, i, A) ||
      Hc([Hs, fa], fu, i, A) ||
      Hc(Rl, Rl, i, A)
    )
      return ie;
    if (u === hn) return Ds;
    if (u === xc || B === xc) return ie;
    if (B === lu || u === lu) return Ds;
    if (
      [uu, va, fu].indexOf(B) !== -1 ||
      u === e1 ||
      (h === gu && o1.indexOf(u) !== -1) ||
      (u === pi && B === gu) ||
      B === Gl ||
      (Mr.indexOf(B) !== -1 && u === Ht) ||
      (Mr.indexOf(u) !== -1 && B === Ht) ||
      (u === Ca && [Sa, Ns, _s].indexOf(B) !== -1) ||
      ([Sa, Ns, _s].indexOf(u) !== -1 && B === ma) ||
      (Mr.indexOf(u) !== -1 && jl.indexOf(B) !== -1) ||
      (jl.indexOf(u) !== -1 && Mr.indexOf(B) !== -1) ||
      ([Ca, ma].indexOf(u) !== -1 &&
        (B === Ht || ([ha, va].indexOf(B) !== -1 && A[c + 1] === Ht))) ||
      ([ha, va].indexOf(u) !== -1 && B === Ht) ||
      (u === Ht && [Ht, pi, di].indexOf(B) !== -1)
    )
      return ie;
    if ([Ht, pi, di, Hs, fa].indexOf(B) !== -1)
      for (var p = i; p >= 0; ) {
        var w = A[p];
        if (w === Ht) return ie;
        if ([pi, di].indexOf(w) !== -1) p--;
        else break;
      }
    if ([Ca, ma].indexOf(B) !== -1)
      for (var p = [Hs, fa].indexOf(u) !== -1 ? s : i; p >= 0; ) {
        var w = A[p];
        if (w === Ht) return ie;
        if ([pi, di].indexOf(w) !== -1) p--;
        else break;
      }
    if (
      (du === u && [du, eo, hu, Bu].indexOf(B) !== -1) ||
      ([eo, hu].indexOf(u) !== -1 && [eo, to].indexOf(B) !== -1) ||
      ([to, Bu].indexOf(u) !== -1 && B === to) ||
      (Vl.indexOf(u) !== -1 && [Gl, ma].indexOf(B) !== -1) ||
      (Vl.indexOf(B) !== -1 && u === Ca) ||
      (Mr.indexOf(u) !== -1 && Mr.indexOf(B) !== -1) ||
      (u === di && Mr.indexOf(B) !== -1) ||
      (Mr.concat(Ht).indexOf(u) !== -1 &&
        B === ha &&
        a1.indexOf(t[c]) === -1) ||
      (Mr.concat(Ht).indexOf(B) !== -1 && u === fa)
    )
      return ie;
    if (u === Sc && B === Sc) {
      for (var g = e[i], L = 1; g > 0 && (g--, A[g] === Sc); ) L++;
      if (L % 2 !== 0) return ie;
    }
    return u === Ns && B === _s ? ie : Ds;
  },
  l1 = function (t, A) {
    A || (A = { lineBreak: "normal", wordBreak: "normal" });
    var e = c1(t, A.lineBreak),
      r = e[0],
      n = e[1],
      i = e[2];
    (A.wordBreak === "break-all" || A.wordBreak === "break-word") &&
      (n = n.map(function (c) {
        return [Ht, Dn, lh].indexOf(c) !== -1 ? Sa : c;
      }));
    var s =
      A.wordBreak === "keep-all"
        ? i.map(function (c, u) {
            return c && t[u] >= 19968 && t[u] <= 40959;
          })
        : void 0;
    return [r, n, s];
  },
  f1 = (function () {
    function t(A, e, r, n) {
      (this.codePoints = A),
        (this.required = e === fh),
        (this.start = r),
        (this.end = n);
    }
    return (
      (t.prototype.slice = function () {
        return Me.apply(void 0, this.codePoints.slice(this.start, this.end));
      }),
      t
    );
  })(),
  h1 = function (t, A) {
    var e = bo(t),
      r = l1(e, A),
      n = r[0],
      i = r[1],
      s = r[2],
      c = e.length,
      u = 0,
      h = 0;
    return {
      next: function () {
        if (h >= c) return { done: !0, value: null };
        for (var B = ie; h < c && (B = u1(e, i, n, ++h, s)) === ie; );
        if (B !== ie || h === c) {
          var p = new f1(e, B, u, h);
          return (u = h), { value: p, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  B1 = 1,
  g1 = 2,
  Ta = 4,
  Wl = 8,
  fo = 10,
  Xl = 47,
  ya = 92,
  d1 = 9,
  p1 = 32,
  Ts = 34,
  Ba = 61,
  w1 = 35,
  v1 = 36,
  m1 = 37,
  Os = 39,
  Ps = 40,
  ga = 41,
  C1 = 95,
  yt = 45,
  Q1 = 33,
  F1 = 60,
  U1 = 62,
  y1 = 64,
  b1 = 91,
  L1 = 93,
  E1 = 61,
  I1 = 123,
  Ms = 63,
  x1 = 125,
  Jl = 124,
  S1 = 126,
  H1 = 128,
  zl = 65533,
  Nc = 42,
  On = 43,
  N1 = 44,
  _1 = 58,
  D1 = 59,
  Ha = 46,
  T1 = 0,
  O1 = 8,
  P1 = 11,
  M1 = 14,
  K1 = 31,
  k1 = 127,
  mr = -1,
  Bh = 48,
  gh = 97,
  dh = 101,
  R1 = 102,
  G1 = 117,
  j1 = 122,
  ph = 65,
  wh = 69,
  vh = 70,
  V1 = 85,
  q1 = 90,
  Bt = function (t) {
    return t >= Bh && t <= 57;
  },
  W1 = function (t) {
    return t >= 55296 && t <= 57343;
  },
  wi = function (t) {
    return Bt(t) || (t >= ph && t <= vh) || (t >= gh && t <= R1);
  },
  X1 = function (t) {
    return t >= gh && t <= j1;
  },
  J1 = function (t) {
    return t >= ph && t <= q1;
  },
  z1 = function (t) {
    return X1(t) || J1(t);
  },
  Y1 = function (t) {
    return t >= H1;
  },
  Ks = function (t) {
    return t === fo || t === d1 || t === p1;
  },
  ho = function (t) {
    return z1(t) || Y1(t) || t === C1;
  },
  Yl = function (t) {
    return ho(t) || Bt(t) || t === yt;
  },
  Z1 = function (t) {
    return (t >= T1 && t <= O1) || t === P1 || (t >= M1 && t <= K1) || t === k1;
  },
  fn = function (t, A) {
    return t !== ya ? !1 : A !== fo;
  },
  ks = function (t, A, e) {
    return t === yt ? ho(A) || fn(A, e) : ho(t) ? !0 : !!(t === ya && fn(t, A));
  },
  _c = function (t, A, e) {
    return t === On || t === yt
      ? Bt(A)
        ? !0
        : A === Ha && Bt(e)
      : Bt(t === Ha ? A : t);
  },
  $1 = function (t) {
    var A = 0,
      e = 1;
    (t[A] === On || t[A] === yt) && (t[A] === yt && (e = -1), A++);
    for (var r = []; Bt(t[A]); ) r.push(t[A++]);
    var n = r.length ? parseInt(Me.apply(void 0, r), 10) : 0;
    t[A] === Ha && A++;
    for (var i = []; Bt(t[A]); ) i.push(t[A++]);
    var s = i.length,
      c = s ? parseInt(Me.apply(void 0, i), 10) : 0;
    (t[A] === wh || t[A] === dh) && A++;
    var u = 1;
    (t[A] === On || t[A] === yt) && (t[A] === yt && (u = -1), A++);
    for (var h = []; Bt(t[A]); ) h.push(t[A++]);
    var B = h.length ? parseInt(Me.apply(void 0, h), 10) : 0;
    return e * (n + c * Math.pow(10, -s)) * Math.pow(10, u * B);
  },
  Ag = { type: 2 },
  eg = { type: 3 },
  tg = { type: 4 },
  rg = { type: 13 },
  ng = { type: 8 },
  ig = { type: 21 },
  ag = { type: 9 },
  sg = { type: 10 },
  og = { type: 11 },
  cg = { type: 12 },
  ug = { type: 14 },
  Rs = { type: 23 },
  lg = { type: 1 },
  fg = { type: 25 },
  hg = { type: 24 },
  Bg = { type: 26 },
  gg = { type: 27 },
  dg = { type: 28 },
  pg = { type: 29 },
  wg = { type: 31 },
  vu = { type: 32 },
  mh = (function () {
    function t() {
      this._value = [];
    }
    return (
      (t.prototype.write = function (A) {
        this._value = this._value.concat(bo(A));
      }),
      (t.prototype.read = function () {
        for (var A = [], e = this.consumeToken(); e !== vu; )
          A.push(e), (e = this.consumeToken());
        return A;
      }),
      (t.prototype.consumeToken = function () {
        var A = this.consumeCodePoint();
        switch (A) {
          case Ts:
            return this.consumeStringToken(Ts);
          case w1:
            var e = this.peekCodePoint(0),
              r = this.peekCodePoint(1),
              n = this.peekCodePoint(2);
            if (Yl(e) || fn(r, n)) {
              var i = ks(e, r, n) ? g1 : B1,
                s = this.consumeName();
              return { type: 5, value: s, flags: i };
            }
            break;
          case v1:
            if (this.peekCodePoint(0) === Ba)
              return this.consumeCodePoint(), rg;
            break;
          case Os:
            return this.consumeStringToken(Os);
          case Ps:
            return Ag;
          case ga:
            return eg;
          case Nc:
            if (this.peekCodePoint(0) === Ba)
              return this.consumeCodePoint(), ug;
            break;
          case On:
            if (_c(A, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(A), this.consumeNumericToken();
            break;
          case N1:
            return tg;
          case yt:
            var c = A,
              u = this.peekCodePoint(0),
              h = this.peekCodePoint(1);
            if (_c(c, u, h))
              return this.reconsumeCodePoint(A), this.consumeNumericToken();
            if (ks(c, u, h))
              return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
            if (u === yt && h === U1)
              return this.consumeCodePoint(), this.consumeCodePoint(), hg;
            break;
          case Ha:
            if (_c(A, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(A), this.consumeNumericToken();
            break;
          case Xl:
            if (this.peekCodePoint(0) === Nc)
              for (this.consumeCodePoint(); ; ) {
                var B = this.consumeCodePoint();
                if (B === Nc && ((B = this.consumeCodePoint()), B === Xl))
                  return this.consumeToken();
                if (B === mr) return this.consumeToken();
              }
            break;
          case _1:
            return Bg;
          case D1:
            return gg;
          case F1:
            if (
              this.peekCodePoint(0) === Q1 &&
              this.peekCodePoint(1) === yt &&
              this.peekCodePoint(2) === yt
            )
              return this.consumeCodePoint(), this.consumeCodePoint(), fg;
            break;
          case y1:
            var p = this.peekCodePoint(0),
              w = this.peekCodePoint(1),
              g = this.peekCodePoint(2);
            if (ks(p, w, g)) {
              var s = this.consumeName();
              return { type: 7, value: s };
            }
            break;
          case b1:
            return dg;
          case ya:
            if (fn(A, this.peekCodePoint(0)))
              return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
            break;
          case L1:
            return pg;
          case E1:
            if (this.peekCodePoint(0) === Ba)
              return this.consumeCodePoint(), ng;
            break;
          case I1:
            return og;
          case x1:
            return cg;
          case G1:
          case V1:
            var L = this.peekCodePoint(0),
              y = this.peekCodePoint(1);
            return (
              L === On &&
                (wi(y) || y === Ms) &&
                (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
              this.reconsumeCodePoint(A),
              this.consumeIdentLikeToken()
            );
          case Jl:
            if (this.peekCodePoint(0) === Ba)
              return this.consumeCodePoint(), ag;
            if (this.peekCodePoint(0) === Jl)
              return this.consumeCodePoint(), ig;
            break;
          case S1:
            if (this.peekCodePoint(0) === Ba)
              return this.consumeCodePoint(), sg;
            break;
          case mr:
            return vu;
        }
        return Ks(A)
          ? (this.consumeWhiteSpace(), wg)
          : Bt(A)
            ? (this.reconsumeCodePoint(A), this.consumeNumericToken())
            : ho(A)
              ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken())
              : { type: 6, value: Me(A) };
      }),
      (t.prototype.consumeCodePoint = function () {
        var A = this._value.shift();
        return typeof A > "u" ? -1 : A;
      }),
      (t.prototype.reconsumeCodePoint = function (A) {
        this._value.unshift(A);
      }),
      (t.prototype.peekCodePoint = function (A) {
        return A >= this._value.length ? -1 : this._value[A];
      }),
      (t.prototype.consumeUnicodeRangeToken = function () {
        for (var A = [], e = this.consumeCodePoint(); wi(e) && A.length < 6; )
          A.push(e), (e = this.consumeCodePoint());
        for (var r = !1; e === Ms && A.length < 6; )
          A.push(e), (e = this.consumeCodePoint()), (r = !0);
        if (r) {
          var n = parseInt(
              Me.apply(
                void 0,
                A.map(function (u) {
                  return u === Ms ? Bh : u;
                }),
              ),
              16,
            ),
            i = parseInt(
              Me.apply(
                void 0,
                A.map(function (u) {
                  return u === Ms ? vh : u;
                }),
              ),
              16,
            );
          return { type: 30, start: n, end: i };
        }
        var s = parseInt(Me.apply(void 0, A), 16);
        if (this.peekCodePoint(0) === yt && wi(this.peekCodePoint(1))) {
          this.consumeCodePoint(), (e = this.consumeCodePoint());
          for (var c = []; wi(e) && c.length < 6; )
            c.push(e), (e = this.consumeCodePoint());
          var i = parseInt(Me.apply(void 0, c), 16);
          return { type: 30, start: s, end: i };
        } else return { type: 30, start: s, end: s };
      }),
      (t.prototype.consumeIdentLikeToken = function () {
        var A = this.consumeName();
        return A.toLowerCase() === "url" && this.peekCodePoint(0) === Ps
          ? (this.consumeCodePoint(), this.consumeUrlToken())
          : this.peekCodePoint(0) === Ps
            ? (this.consumeCodePoint(), { type: 19, value: A })
            : { type: 20, value: A };
      }),
      (t.prototype.consumeUrlToken = function () {
        var A = [];
        if ((this.consumeWhiteSpace(), this.peekCodePoint(0) === mr))
          return { type: 22, value: "" };
        var e = this.peekCodePoint(0);
        if (e === Os || e === Ts) {
          var r = this.consumeStringToken(this.consumeCodePoint());
          return r.type === 0 &&
            (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === mr || this.peekCodePoint(0) === ga)
            ? (this.consumeCodePoint(), { type: 22, value: r.value })
            : (this.consumeBadUrlRemnants(), Rs);
        }
        for (;;) {
          var n = this.consumeCodePoint();
          if (n === mr || n === ga)
            return { type: 22, value: Me.apply(void 0, A) };
          if (Ks(n))
            return (
              this.consumeWhiteSpace(),
              this.peekCodePoint(0) === mr || this.peekCodePoint(0) === ga
                ? (this.consumeCodePoint(),
                  { type: 22, value: Me.apply(void 0, A) })
                : (this.consumeBadUrlRemnants(), Rs)
            );
          if (n === Ts || n === Os || n === Ps || Z1(n))
            return this.consumeBadUrlRemnants(), Rs;
          if (n === ya)
            if (fn(n, this.peekCodePoint(0)))
              A.push(this.consumeEscapedCodePoint());
            else return this.consumeBadUrlRemnants(), Rs;
          else A.push(n);
        }
      }),
      (t.prototype.consumeWhiteSpace = function () {
        for (; Ks(this.peekCodePoint(0)); ) this.consumeCodePoint();
      }),
      (t.prototype.consumeBadUrlRemnants = function () {
        for (;;) {
          var A = this.consumeCodePoint();
          if (A === ga || A === mr) return;
          fn(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
        }
      }),
      (t.prototype.consumeStringSlice = function (A) {
        for (var e = 5e4, r = ""; A > 0; ) {
          var n = Math.min(e, A);
          (r += Me.apply(void 0, this._value.splice(0, n))), (A -= n);
        }
        return this._value.shift(), r;
      }),
      (t.prototype.consumeStringToken = function (A) {
        var e = "",
          r = 0;
        do {
          var n = this._value[r];
          if (n === mr || n === void 0 || n === A)
            return (e += this.consumeStringSlice(r)), { type: 0, value: e };
          if (n === fo) return this._value.splice(0, r), lg;
          if (n === ya) {
            var i = this._value[r + 1];
            i !== mr &&
              i !== void 0 &&
              (i === fo
                ? ((e += this.consumeStringSlice(r)),
                  (r = -1),
                  this._value.shift())
                : fn(n, i) &&
                  ((e += this.consumeStringSlice(r)),
                  (e += Me(this.consumeEscapedCodePoint())),
                  (r = -1)));
          }
          r++;
        } while (!0);
      }),
      (t.prototype.consumeNumber = function () {
        var A = [],
          e = Ta,
          r = this.peekCodePoint(0);
        for (
          (r === On || r === yt) && A.push(this.consumeCodePoint());
          Bt(this.peekCodePoint(0));

        )
          A.push(this.consumeCodePoint());
        r = this.peekCodePoint(0);
        var n = this.peekCodePoint(1);
        if (r === Ha && Bt(n))
          for (
            A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = Wl;
            Bt(this.peekCodePoint(0));

          )
            A.push(this.consumeCodePoint());
        (r = this.peekCodePoint(0)), (n = this.peekCodePoint(1));
        var i = this.peekCodePoint(2);
        if (
          (r === wh || r === dh) &&
          (((n === On || n === yt) && Bt(i)) || Bt(n))
        )
          for (
            A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = Wl;
            Bt(this.peekCodePoint(0));

          )
            A.push(this.consumeCodePoint());
        return [$1(A), e];
      }),
      (t.prototype.consumeNumericToken = function () {
        var A = this.consumeNumber(),
          e = A[0],
          r = A[1],
          n = this.peekCodePoint(0),
          i = this.peekCodePoint(1),
          s = this.peekCodePoint(2);
        if (ks(n, i, s)) {
          var c = this.consumeName();
          return { type: 15, number: e, flags: r, unit: c };
        }
        return n === m1
          ? (this.consumeCodePoint(), { type: 16, number: e, flags: r })
          : { type: 17, number: e, flags: r };
      }),
      (t.prototype.consumeEscapedCodePoint = function () {
        var A = this.consumeCodePoint();
        if (wi(A)) {
          for (var e = Me(A); wi(this.peekCodePoint(0)) && e.length < 6; )
            e += Me(this.consumeCodePoint());
          Ks(this.peekCodePoint(0)) && this.consumeCodePoint();
          var r = parseInt(e, 16);
          return r === 0 || W1(r) || r > 1114111 ? zl : r;
        }
        return A === mr ? zl : A;
      }),
      (t.prototype.consumeName = function () {
        for (var A = ""; ; ) {
          var e = this.consumeCodePoint();
          if (Yl(e)) A += Me(e);
          else if (fn(e, this.peekCodePoint(0)))
            A += Me(this.consumeEscapedCodePoint());
          else return this.reconsumeCodePoint(e), A;
        }
      }),
      t
    );
  })(),
  Ch = (function () {
    function t(A) {
      this._tokens = A;
    }
    return (
      (t.create = function (A) {
        var e = new mh();
        return e.write(A), new t(e.read());
      }),
      (t.parseValue = function (A) {
        return t.create(A).parseComponentValue();
      }),
      (t.parseValues = function (A) {
        return t.create(A).parseComponentValues();
      }),
      (t.prototype.parseComponentValue = function () {
        for (var A = this.consumeToken(); A.type === 31; )
          A = this.consumeToken();
        if (A.type === 32)
          throw new SyntaxError(
            "Error parsing CSS component value, unexpected EOF",
          );
        this.reconsumeToken(A);
        var e = this.consumeComponentValue();
        do A = this.consumeToken();
        while (A.type === 31);
        if (A.type === 32) return e;
        throw new SyntaxError(
          "Error parsing CSS component value, multiple values found when expecting only one",
        );
      }),
      (t.prototype.parseComponentValues = function () {
        for (var A = []; ; ) {
          var e = this.consumeComponentValue();
          if (e.type === 32) return A;
          A.push(e), A.push();
        }
      }),
      (t.prototype.consumeComponentValue = function () {
        var A = this.consumeToken();
        switch (A.type) {
          case 11:
          case 28:
          case 2:
            return this.consumeSimpleBlock(A.type);
          case 19:
            return this.consumeFunction(A);
        }
        return A;
      }),
      (t.prototype.consumeSimpleBlock = function (A) {
        for (var e = { type: A, values: [] }, r = this.consumeToken(); ; ) {
          if (r.type === 32 || mg(r, A)) return e;
          this.reconsumeToken(r),
            e.values.push(this.consumeComponentValue()),
            (r = this.consumeToken());
        }
      }),
      (t.prototype.consumeFunction = function (A) {
        for (var e = { name: A.value, values: [], type: 18 }; ; ) {
          var r = this.consumeToken();
          if (r.type === 32 || r.type === 3) return e;
          this.reconsumeToken(r), e.values.push(this.consumeComponentValue());
        }
      }),
      (t.prototype.consumeToken = function () {
        var A = this._tokens.shift();
        return typeof A > "u" ? vu : A;
      }),
      (t.prototype.reconsumeToken = function (A) {
        this._tokens.unshift(A);
      }),
      t
    );
  })(),
  Oa = function (t) {
    return t.type === 15;
  },
  Ti = function (t) {
    return t.type === 17;
  },
  we = function (t) {
    return t.type === 20;
  },
  vg = function (t) {
    return t.type === 0;
  },
  mu = function (t, A) {
    return we(t) && t.value === A;
  },
  Qh = function (t) {
    return t.type !== 31;
  },
  Di = function (t) {
    return t.type !== 31 && t.type !== 4;
  },
  Ur = function (t) {
    var A = [],
      e = [];
    return (
      t.forEach(function (r) {
        if (r.type === 4) {
          if (e.length === 0)
            throw new Error("Error parsing function args, zero tokens for arg");
          A.push(e), (e = []);
          return;
        }
        r.type !== 31 && e.push(r);
      }),
      e.length && A.push(e),
      A
    );
  },
  mg = function (t, A) {
    return (A === 11 && t.type === 12) || (A === 28 && t.type === 29)
      ? !0
      : A === 2 && t.type === 3;
  },
  vn = function (t) {
    return t.type === 17 || t.type === 15;
  },
  We = function (t) {
    return t.type === 16 || vn(t);
  },
  Fh = function (t) {
    return t.length > 1 ? [t[0], t[1]] : [t[0]];
  },
  it = { type: 17, number: 0, flags: Ta },
  Gu = { type: 16, number: 50, flags: Ta },
  Bn = { type: 16, number: 100, flags: Ta },
  Qa = function (t, A, e) {
    var r = t[0],
      n = t[1];
    return [be(r, A), be(typeof n < "u" ? n : r, e)];
  },
  be = function (t, A) {
    if (t.type === 16) return (t.number / 100) * A;
    if (Oa(t))
      switch (t.unit) {
        case "rem":
        case "em":
          return 16 * t.number;
        case "px":
        default:
          return t.number;
      }
    return t.number;
  },
  Uh = "deg",
  yh = "grad",
  bh = "rad",
  Lh = "turn",
  Lo = {
    name: "angle",
    parse: function (t, A) {
      if (A.type === 15)
        switch (A.unit) {
          case Uh:
            return (Math.PI * A.number) / 180;
          case yh:
            return (Math.PI / 200) * A.number;
          case bh:
            return A.number;
          case Lh:
            return Math.PI * 2 * A.number;
        }
      throw new Error("Unsupported angle type");
    },
  },
  Eh = function (t) {
    return (
      t.type === 15 &&
      (t.unit === Uh || t.unit === yh || t.unit === bh || t.unit === Lh)
    );
  },
  Ih = function (t) {
    var A = t
      .filter(we)
      .map(function (e) {
        return e.value;
      })
      .join(" ");
    switch (A) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [it, it];
      case "to top":
      case "bottom":
        return Rt(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [it, Bn];
      case "to right":
      case "left":
        return Rt(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [Bn, Bn];
      case "to bottom":
      case "top":
        return Rt(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [Bn, it];
      case "to left":
      case "right":
        return Rt(270);
    }
    return 0;
  },
  Rt = function (t) {
    return (Math.PI * t) / 180;
  },
  pn = {
    name: "color",
    parse: function (t, A) {
      if (A.type === 18) {
        var e = Cg[A.name];
        if (typeof e > "u")
          throw new Error(
            'Attempting to parse an unsupported color function "' +
              A.name +
              '"',
          );
        return e(t, A.values);
      }
      if (A.type === 5) {
        if (A.value.length === 3) {
          var r = A.value.substring(0, 1),
            n = A.value.substring(1, 2),
            i = A.value.substring(2, 3);
          return gn(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(i + i, 16),
            1,
          );
        }
        if (A.value.length === 4) {
          var r = A.value.substring(0, 1),
            n = A.value.substring(1, 2),
            i = A.value.substring(2, 3),
            s = A.value.substring(3, 4);
          return gn(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(i + i, 16),
            parseInt(s + s, 16) / 255,
          );
        }
        if (A.value.length === 6) {
          var r = A.value.substring(0, 2),
            n = A.value.substring(2, 4),
            i = A.value.substring(4, 6);
          return gn(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1);
        }
        if (A.value.length === 8) {
          var r = A.value.substring(0, 2),
            n = A.value.substring(2, 4),
            i = A.value.substring(4, 6),
            s = A.value.substring(6, 8);
          return gn(
            parseInt(r, 16),
            parseInt(n, 16),
            parseInt(i, 16),
            parseInt(s, 16) / 255,
          );
        }
      }
      if (A.type === 20) {
        var c = Gr[A.value.toUpperCase()];
        if (typeof c < "u") return c;
      }
      return Gr.TRANSPARENT;
    },
  },
  wn = function (t) {
    return (255 & t) === 0;
  },
  At = function (t) {
    var A = 255 & t,
      e = 255 & (t >> 8),
      r = 255 & (t >> 16),
      n = 255 & (t >> 24);
    return A < 255
      ? "rgba(" + n + "," + r + "," + e + "," + A / 255 + ")"
      : "rgb(" + n + "," + r + "," + e + ")";
  },
  gn = function (t, A, e, r) {
    return (
      ((t << 24) | (A << 16) | (e << 8) | (Math.round(r * 255) << 0)) >>> 0
    );
  },
  Zl = function (t, A) {
    if (t.type === 17) return t.number;
    if (t.type === 16) {
      var e = A === 3 ? 1 : 255;
      return A === 3 ? (t.number / 100) * e : Math.round((t.number / 100) * e);
    }
    return 0;
  },
  $l = function (t, A) {
    var e = A.filter(Di);
    if (e.length === 3) {
      var r = e.map(Zl),
        n = r[0],
        i = r[1],
        s = r[2];
      return gn(n, i, s, 1);
    }
    if (e.length === 4) {
      var c = e.map(Zl),
        n = c[0],
        i = c[1],
        s = c[2],
        u = c[3];
      return gn(n, i, s, u);
    }
    return 0;
  };
function Dc(t, A, e) {
  return (
    e < 0 && (e += 1),
    e >= 1 && (e -= 1),
    e < 1 / 6
      ? (A - t) * e * 6 + t
      : e < 1 / 2
        ? A
        : e < 2 / 3
          ? (A - t) * 6 * (2 / 3 - e) + t
          : t
  );
}
var Af = function (t, A) {
    var e = A.filter(Di),
      r = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      c = (r.type === 17 ? Rt(r.number) : Lo.parse(t, r)) / (Math.PI * 2),
      u = We(n) ? n.number / 100 : 0,
      h = We(i) ? i.number / 100 : 0,
      B = typeof s < "u" && We(s) ? be(s, 1) : 1;
    if (u === 0) return gn(h * 255, h * 255, h * 255, 1);
    var p = h <= 0.5 ? h * (u + 1) : h + u - h * u,
      w = h * 2 - p,
      g = Dc(w, p, c + 1 / 3),
      L = Dc(w, p, c),
      y = Dc(w, p, c - 1 / 3);
    return gn(g * 255, L * 255, y * 255, B);
  },
  Cg = { hsl: Af, hsla: Af, rgb: $l, rgba: $l },
  ba = function (t, A) {
    return pn.parse(t, Ch.create(A).parseComponentValue());
  },
  Gr = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199,
  },
  Qg = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      return A.map(function (e) {
        if (we(e))
          switch (e.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  Fg = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  Eo = function (t, A) {
    var e = pn.parse(t, A[0]),
      r = A[1];
    return r && We(r) ? { color: e, stop: r } : { color: e, stop: null };
  },
  ef = function (t, A) {
    var e = t[0],
      r = t[t.length - 1];
    e.stop === null && (e.stop = it), r.stop === null && (r.stop = Bn);
    for (var n = [], i = 0, s = 0; s < t.length; s++) {
      var c = t[s].stop;
      if (c !== null) {
        var u = be(c, A);
        u > i ? n.push(u) : n.push(i), (i = u);
      } else n.push(null);
    }
    for (var h = null, s = 0; s < n.length; s++) {
      var B = n[s];
      if (B === null) h === null && (h = s);
      else if (h !== null) {
        for (
          var p = s - h, w = n[h - 1], g = (B - w) / (p + 1), L = 1;
          L <= p;
          L++
        )
          n[h + L - 1] = g * L;
        h = null;
      }
    }
    return t.map(function (y, N) {
      var F = y.color;
      return { color: F, stop: Math.max(Math.min(1, n[N] / A), 0) };
    });
  },
  Ug = function (t, A, e) {
    var r = A / 2,
      n = e / 2,
      i = be(t[0], A) - r,
      s = n - be(t[1], e);
    return (Math.atan2(s, i) + Math.PI * 2) % (Math.PI * 2);
  },
  yg = function (t, A, e) {
    var r = typeof t == "number" ? t : Ug(t, A, e),
      n = Math.abs(A * Math.sin(r)) + Math.abs(e * Math.cos(r)),
      i = A / 2,
      s = e / 2,
      c = n / 2,
      u = Math.sin(r - Math.PI / 2) * c,
      h = Math.cos(r - Math.PI / 2) * c;
    return [n, i - h, i + h, s - u, s + u];
  },
  sr = function (t, A) {
    return Math.sqrt(t * t + A * A);
  },
  tf = function (t, A, e, r, n) {
    var i = [
      [0, 0],
      [0, A],
      [t, 0],
      [t, A],
    ];
    return i.reduce(
      function (s, c) {
        var u = c[0],
          h = c[1],
          B = sr(e - u, r - h);
        return (n ? B < s.optimumDistance : B > s.optimumDistance)
          ? { optimumCorner: c, optimumDistance: B }
          : s;
      },
      { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null },
    ).optimumCorner;
  },
  bg = function (t, A, e, r, n) {
    var i = 0,
      s = 0;
    switch (t.size) {
      case 0:
        t.shape === 0
          ? (i = s =
              Math.min(
                Math.abs(A),
                Math.abs(A - r),
                Math.abs(e),
                Math.abs(e - n),
              ))
          : t.shape === 1 &&
            ((i = Math.min(Math.abs(A), Math.abs(A - r))),
            (s = Math.min(Math.abs(e), Math.abs(e - n))));
        break;
      case 2:
        if (t.shape === 0)
          i = s = Math.min(
            sr(A, e),
            sr(A, e - n),
            sr(A - r, e),
            sr(A - r, e - n),
          );
        else if (t.shape === 1) {
          var c =
              Math.min(Math.abs(e), Math.abs(e - n)) /
              Math.min(Math.abs(A), Math.abs(A - r)),
            u = tf(r, n, A, e, !0),
            h = u[0],
            B = u[1];
          (i = sr(h - A, (B - e) / c)), (s = c * i);
        }
        break;
      case 1:
        t.shape === 0
          ? (i = s =
              Math.max(
                Math.abs(A),
                Math.abs(A - r),
                Math.abs(e),
                Math.abs(e - n),
              ))
          : t.shape === 1 &&
            ((i = Math.max(Math.abs(A), Math.abs(A - r))),
            (s = Math.max(Math.abs(e), Math.abs(e - n))));
        break;
      case 3:
        if (t.shape === 0)
          i = s = Math.max(
            sr(A, e),
            sr(A, e - n),
            sr(A - r, e),
            sr(A - r, e - n),
          );
        else if (t.shape === 1) {
          var c =
              Math.max(Math.abs(e), Math.abs(e - n)) /
              Math.max(Math.abs(A), Math.abs(A - r)),
            p = tf(r, n, A, e, !1),
            h = p[0],
            B = p[1];
          (i = sr(h - A, (B - e) / c)), (s = c * i);
        }
        break;
    }
    return (
      Array.isArray(t.size) &&
        ((i = be(t.size[0], r)),
        (s = t.size.length === 2 ? be(t.size[1], n) : i)),
      [i, s]
    );
  },
  Lg = function (t, A) {
    var e = Rt(180),
      r = [];
    return (
      Ur(A).forEach(function (n, i) {
        if (i === 0) {
          var s = n[0];
          if (s.type === 20 && s.value === "to") {
            e = Ih(n);
            return;
          } else if (Eh(s)) {
            e = Lo.parse(t, s);
            return;
          }
        }
        var c = Eo(t, n);
        r.push(c);
      }),
      { angle: e, stops: r, type: 1 }
    );
  },
  Gs = function (t, A) {
    var e = Rt(180),
      r = [];
    return (
      Ur(A).forEach(function (n, i) {
        if (i === 0) {
          var s = n[0];
          if (
            s.type === 20 &&
            ["top", "left", "right", "bottom"].indexOf(s.value) !== -1
          ) {
            e = Ih(n);
            return;
          } else if (Eh(s)) {
            e = (Lo.parse(t, s) + Rt(270)) % Rt(360);
            return;
          }
        }
        var c = Eo(t, n);
        r.push(c);
      }),
      { angle: e, stops: r, type: 1 }
    );
  },
  Eg = function (t, A) {
    var e = Rt(180),
      r = [],
      n = 1,
      i = 0,
      s = 3,
      c = [];
    return (
      Ur(A).forEach(function (u, h) {
        var B = u[0];
        if (h === 0) {
          if (we(B) && B.value === "linear") {
            n = 1;
            return;
          } else if (we(B) && B.value === "radial") {
            n = 2;
            return;
          }
        }
        if (B.type === 18) {
          if (B.name === "from") {
            var p = pn.parse(t, B.values[0]);
            r.push({ stop: it, color: p });
          } else if (B.name === "to") {
            var p = pn.parse(t, B.values[0]);
            r.push({ stop: Bn, color: p });
          } else if (B.name === "color-stop") {
            var w = B.values.filter(Di);
            if (w.length === 2) {
              var p = pn.parse(t, w[1]),
                g = w[0];
              Ti(g) &&
                r.push({
                  stop: { type: 16, number: g.number * 100, flags: g.flags },
                  color: p,
                });
            }
          }
        }
      }),
      n === 1
        ? { angle: (e + Rt(180)) % Rt(360), stops: r, type: n }
        : { size: s, shape: i, stops: r, position: c, type: n }
    );
  },
  xh = "closest-side",
  Sh = "farthest-side",
  Hh = "closest-corner",
  Nh = "farthest-corner",
  _h = "circle",
  Dh = "ellipse",
  Th = "cover",
  Oh = "contain",
  Ig = function (t, A) {
    var e = 0,
      r = 3,
      n = [],
      i = [];
    return (
      Ur(A).forEach(function (s, c) {
        var u = !0;
        if (c === 0) {
          var h = !1;
          u = s.reduce(function (p, w) {
            if (h)
              if (we(w))
                switch (w.value) {
                  case "center":
                    return i.push(Gu), p;
                  case "top":
                  case "left":
                    return i.push(it), p;
                  case "right":
                  case "bottom":
                    return i.push(Bn), p;
                }
              else (We(w) || vn(w)) && i.push(w);
            else if (we(w))
              switch (w.value) {
                case _h:
                  return (e = 0), !1;
                case Dh:
                  return (e = 1), !1;
                case "at":
                  return (h = !0), !1;
                case xh:
                  return (r = 0), !1;
                case Th:
                case Sh:
                  return (r = 1), !1;
                case Oh:
                case Hh:
                  return (r = 2), !1;
                case Nh:
                  return (r = 3), !1;
              }
            else if (vn(w) || We(w))
              return Array.isArray(r) || (r = []), r.push(w), !1;
            return p;
          }, u);
        }
        if (u) {
          var B = Eo(t, s);
          n.push(B);
        }
      }),
      { size: r, shape: e, stops: n, position: i, type: 2 }
    );
  },
  js = function (t, A) {
    var e = 0,
      r = 3,
      n = [],
      i = [];
    return (
      Ur(A).forEach(function (s, c) {
        var u = !0;
        if (
          (c === 0
            ? (u = s.reduce(function (B, p) {
                if (we(p))
                  switch (p.value) {
                    case "center":
                      return i.push(Gu), !1;
                    case "top":
                    case "left":
                      return i.push(it), !1;
                    case "right":
                    case "bottom":
                      return i.push(Bn), !1;
                  }
                else if (We(p) || vn(p)) return i.push(p), !1;
                return B;
              }, u))
            : c === 1 &&
              (u = s.reduce(function (B, p) {
                if (we(p))
                  switch (p.value) {
                    case _h:
                      return (e = 0), !1;
                    case Dh:
                      return (e = 1), !1;
                    case Oh:
                    case xh:
                      return (r = 0), !1;
                    case Sh:
                      return (r = 1), !1;
                    case Hh:
                      return (r = 2), !1;
                    case Th:
                    case Nh:
                      return (r = 3), !1;
                  }
                else if (vn(p) || We(p))
                  return Array.isArray(r) || (r = []), r.push(p), !1;
                return B;
              }, u)),
          u)
        ) {
          var h = Eo(t, s);
          n.push(h);
        }
      }),
      { size: r, shape: e, stops: n, position: i, type: 2 }
    );
  },
  xg = function (t) {
    return t.type === 1;
  },
  Sg = function (t) {
    return t.type === 2;
  },
  ju = {
    name: "image",
    parse: function (t, A) {
      if (A.type === 22) {
        var e = { url: A.value, type: 0 };
        return t.cache.addImage(A.value), e;
      }
      if (A.type === 18) {
        var r = Ph[A.name];
        if (typeof r > "u")
          throw new Error(
            'Attempting to parse an unsupported image function "' +
              A.name +
              '"',
          );
        return r(t, A.values);
      }
      throw new Error("Unsupported image type " + A.type);
    },
  };
function Hg(t) {
  return (
    !(t.type === 20 && t.value === "none") && (t.type !== 18 || !!Ph[t.name])
  );
}
var Ph = {
    "linear-gradient": Lg,
    "-moz-linear-gradient": Gs,
    "-ms-linear-gradient": Gs,
    "-o-linear-gradient": Gs,
    "-webkit-linear-gradient": Gs,
    "radial-gradient": Ig,
    "-moz-radial-gradient": js,
    "-ms-radial-gradient": js,
    "-o-radial-gradient": js,
    "-webkit-radial-gradient": js,
    "-webkit-gradient": Eg,
  },
  Ng = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (t, A) {
      if (A.length === 0) return [];
      var e = A[0];
      return e.type === 20 && e.value === "none"
        ? []
        : A.filter(function (r) {
            return Di(r) && Hg(r);
          }).map(function (r) {
            return ju.parse(t, r);
          });
    },
  },
  _g = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      return A.map(function (e) {
        if (we(e))
          switch (e.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  Dg = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function (t, A) {
      return Ur(A)
        .map(function (e) {
          return e.filter(We);
        })
        .map(Fh);
    },
  },
  Tg = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      return Ur(A)
        .map(function (e) {
          return e
            .filter(we)
            .map(function (r) {
              return r.value;
            })
            .join(" ");
        })
        .map(Og);
    },
  },
  Og = function (t) {
    switch (t) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      case "repeat":
      default:
        return 0;
    }
  },
  xi;
(function (t) {
  (t.AUTO = "auto"), (t.CONTAIN = "contain"), (t.COVER = "cover");
})(xi || (xi = {}));
var Pg = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      return Ur(A).map(function (e) {
        return e.filter(Mg);
      });
    },
  },
  Mg = function (t) {
    return we(t) || We(t);
  },
  Io = function (t) {
    return {
      name: "border-" + t + "-color",
      initialValue: "transparent",
      prefix: !1,
      type: 3,
      format: "color",
    };
  },
  Kg = Io("top"),
  kg = Io("right"),
  Rg = Io("bottom"),
  Gg = Io("left"),
  xo = function (t) {
    return {
      name: "border-radius-" + t,
      initialValue: "0 0",
      prefix: !1,
      type: 1,
      parse: function (A, e) {
        return Fh(e.filter(We));
      },
    };
  },
  jg = xo("top-left"),
  Vg = xo("top-right"),
  qg = xo("bottom-right"),
  Wg = xo("bottom-left"),
  So = function (t) {
    return {
      name: "border-" + t + "-style",
      initialValue: "solid",
      prefix: !1,
      type: 2,
      parse: function (A, e) {
        switch (e) {
          case "none":
            return 0;
          case "dashed":
            return 2;
          case "dotted":
            return 3;
          case "double":
            return 4;
        }
        return 1;
      },
    };
  },
  Xg = So("top"),
  Jg = So("right"),
  zg = So("bottom"),
  Yg = So("left"),
  Ho = function (t) {
    return {
      name: "border-" + t + "-width",
      initialValue: "0",
      type: 0,
      prefix: !1,
      parse: function (A, e) {
        return Oa(e) ? e.number : 0;
      },
    };
  },
  Zg = Ho("top"),
  $g = Ho("right"),
  A2 = Ho("bottom"),
  e2 = Ho("left"),
  t2 = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  r2 = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "rtl":
          return 1;
        case "ltr":
        default:
          return 0;
      }
    },
  },
  n2 = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      return A.filter(we).reduce(function (e, r) {
        return e | i2(r.value);
      }, 0);
    },
  },
  i2 = function (t) {
    switch (t) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  },
  a2 = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "left":
          return 1;
        case "right":
          return 2;
        case "inline-start":
          return 3;
        case "inline-end":
          return 4;
      }
      return 0;
    },
  },
  s2 = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function (t, A) {
      return A.type === 20 && A.value === "normal"
        ? 0
        : A.type === 17 || A.type === 15
          ? A.number
          : 0;
    },
  },
  Bo;
(function (t) {
  (t.NORMAL = "normal"), (t.STRICT = "strict");
})(Bo || (Bo = {}));
var o2 = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "strict":
          return Bo.STRICT;
        case "normal":
        default:
          return Bo.NORMAL;
      }
    },
  },
  c2 = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 },
  rf = function (t, A) {
    return we(t) && t.value === "normal"
      ? 1.2 * A
      : t.type === 17
        ? A * t.number
        : We(t)
          ? be(t, A)
          : A;
  },
  u2 = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function (t, A) {
      return A.type === 20 && A.value === "none" ? null : ju.parse(t, A);
    },
  },
  l2 = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "inside":
          return 0;
        case "outside":
        default:
          return 1;
      }
    },
  },
  Cu = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "disc":
          return 0;
        case "circle":
          return 1;
        case "square":
          return 2;
        case "decimal":
          return 3;
        case "cjk-decimal":
          return 4;
        case "decimal-leading-zero":
          return 5;
        case "lower-roman":
          return 6;
        case "upper-roman":
          return 7;
        case "lower-greek":
          return 8;
        case "lower-alpha":
          return 9;
        case "upper-alpha":
          return 10;
        case "arabic-indic":
          return 11;
        case "armenian":
          return 12;
        case "bengali":
          return 13;
        case "cambodian":
          return 14;
        case "cjk-earthly-branch":
          return 15;
        case "cjk-heavenly-stem":
          return 16;
        case "cjk-ideographic":
          return 17;
        case "devanagari":
          return 18;
        case "ethiopic-numeric":
          return 19;
        case "georgian":
          return 20;
        case "gujarati":
          return 21;
        case "gurmukhi":
          return 22;
        case "hebrew":
          return 22;
        case "hiragana":
          return 23;
        case "hiragana-iroha":
          return 24;
        case "japanese-formal":
          return 25;
        case "japanese-informal":
          return 26;
        case "kannada":
          return 27;
        case "katakana":
          return 28;
        case "katakana-iroha":
          return 29;
        case "khmer":
          return 30;
        case "korean-hangul-formal":
          return 31;
        case "korean-hanja-formal":
          return 32;
        case "korean-hanja-informal":
          return 33;
        case "lao":
          return 34;
        case "lower-armenian":
          return 35;
        case "malayalam":
          return 36;
        case "mongolian":
          return 37;
        case "myanmar":
          return 38;
        case "oriya":
          return 39;
        case "persian":
          return 40;
        case "simp-chinese-formal":
          return 41;
        case "simp-chinese-informal":
          return 42;
        case "tamil":
          return 43;
        case "telugu":
          return 44;
        case "thai":
          return 45;
        case "tibetan":
          return 46;
        case "trad-chinese-formal":
          return 47;
        case "trad-chinese-informal":
          return 48;
        case "upper-armenian":
          return 49;
        case "disclosure-open":
          return 50;
        case "disclosure-closed":
          return 51;
        case "none":
        default:
          return -1;
      }
    },
  },
  No = function (t) {
    return { name: "margin-" + t, initialValue: "0", prefix: !1, type: 4 };
  },
  f2 = No("top"),
  h2 = No("right"),
  B2 = No("bottom"),
  g2 = No("left"),
  d2 = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      return A.filter(we).map(function (e) {
        switch (e.value) {
          case "hidden":
            return 1;
          case "scroll":
            return 2;
          case "clip":
            return 3;
          case "auto":
            return 4;
          case "visible":
          default:
            return 0;
        }
      });
    },
  },
  p2 = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "break-word":
          return "break-word";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  _o = function (t) {
    return {
      name: "padding-" + t,
      initialValue: "0",
      prefix: !1,
      type: 3,
      format: "length-percentage",
    };
  },
  w2 = _o("top"),
  v2 = _o("right"),
  m2 = _o("bottom"),
  C2 = _o("left"),
  Q2 = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        case "left":
        default:
          return 0;
      }
    },
  },
  F2 = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "relative":
          return 1;
        case "absolute":
          return 2;
        case "fixed":
          return 3;
        case "sticky":
          return 4;
      }
      return 0;
    },
  },
  U2 = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (t, A) {
      return A.length === 1 && mu(A[0], "none")
        ? []
        : Ur(A).map(function (e) {
            for (
              var r = {
                  color: Gr.TRANSPARENT,
                  offsetX: it,
                  offsetY: it,
                  blur: it,
                },
                n = 0,
                i = 0;
              i < e.length;
              i++
            ) {
              var s = e[i];
              vn(s)
                ? (n === 0
                    ? (r.offsetX = s)
                    : n === 1
                      ? (r.offsetY = s)
                      : (r.blur = s),
                  n++)
                : (r.color = pn.parse(t, s));
            }
            return r;
          });
    },
  },
  y2 = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    },
  },
  b2 = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function (t, A) {
      if (A.type === 20 && A.value === "none") return null;
      if (A.type === 18) {
        var e = I2[A.name];
        if (typeof e > "u")
          throw new Error(
            'Attempting to parse an unsupported transform function "' +
              A.name +
              '"',
          );
        return e(A.values);
      }
      return null;
    },
  },
  L2 = function (t) {
    var A = t
      .filter(function (e) {
        return e.type === 17;
      })
      .map(function (e) {
        return e.number;
      });
    return A.length === 6 ? A : null;
  },
  E2 = function (t) {
    var A = t
        .filter(function (u) {
          return u.type === 17;
        })
        .map(function (u) {
          return u.number;
        }),
      e = A[0],
      r = A[1];
    A[2], A[3];
    var n = A[4],
      i = A[5];
    A[6], A[7], A[8], A[9], A[10], A[11];
    var s = A[12],
      c = A[13];
    return A[14], A[15], A.length === 16 ? [e, r, n, i, s, c] : null;
  },
  I2 = { matrix: L2, matrix3d: E2 },
  nf = { type: 16, number: 50, flags: Ta },
  x2 = [nf, nf],
  S2 = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function (t, A) {
      var e = A.filter(We);
      return e.length !== 2 ? x2 : [e[0], e[1]];
    },
  },
  H2 = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        case "visible":
        default:
          return 0;
      }
    },
  },
  La;
(function (t) {
  (t.NORMAL = "normal"), (t.BREAK_ALL = "break-all"), (t.KEEP_ALL = "keep-all");
})(La || (La = {}));
var N2 = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "break-all":
          return La.BREAK_ALL;
        case "keep-all":
          return La.KEEP_ALL;
        case "normal":
        default:
          return La.NORMAL;
      }
    },
  },
  _2 = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function (t, A) {
      if (A.type === 20) return { auto: !0, order: 0 };
      if (Ti(A)) return { auto: !1, order: A.number };
      throw new Error("Invalid z-index number parsed");
    },
  },
  Mh = {
    name: "time",
    parse: function (t, A) {
      if (A.type === 15)
        switch (A.unit.toLowerCase()) {
          case "s":
            return 1e3 * A.number;
          case "ms":
            return A.number;
        }
      throw new Error("Unsupported time type");
    },
  },
  D2 = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function (t, A) {
      return Ti(A) ? A.number : 1;
    },
  },
  T2 = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  O2 = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      return A.filter(we)
        .map(function (e) {
          switch (e.value) {
            case "underline":
              return 1;
            case "overline":
              return 2;
            case "line-through":
              return 3;
            case "none":
              return 4;
          }
          return 0;
        })
        .filter(function (e) {
          return e !== 0;
        });
    },
  },
  P2 = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      var e = [],
        r = [];
      return (
        A.forEach(function (n) {
          switch (n.type) {
            case 20:
            case 0:
              e.push(n.value);
              break;
            case 17:
              e.push(n.number.toString());
              break;
            case 4:
              r.push(e.join(" ")), (e.length = 0);
              break;
          }
        }),
        e.length && r.push(e.join(" ")),
        r.map(function (n) {
          return n.indexOf(" ") === -1 ? n : "'" + n + "'";
        })
      );
    },
  },
  M2 = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length",
  },
  K2 = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function (t, A) {
      if (Ti(A)) return A.number;
      if (we(A))
        switch (A.value) {
          case "bold":
            return 700;
          case "normal":
          default:
            return 400;
        }
      return 400;
    },
  },
  k2 = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (t, A) {
      return A.filter(we).map(function (e) {
        return e.value;
      });
    },
  },
  R2 = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (t, A) {
      switch (A) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  ze = function (t, A) {
    return (t & A) !== 0;
  },
  G2 = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (t, A) {
      if (A.length === 0) return [];
      var e = A[0];
      return e.type === 20 && e.value === "none" ? [] : A;
    },
  },
  j2 = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (t, A) {
      if (A.length === 0) return null;
      var e = A[0];
      if (e.type === 20 && e.value === "none") return null;
      for (var r = [], n = A.filter(Qh), i = 0; i < n.length; i++) {
        var s = n[i],
          c = n[i + 1];
        if (s.type === 20) {
          var u = c && Ti(c) ? c.number : 1;
          r.push({ counter: s.value, increment: u });
        }
      }
      return r;
    },
  },
  V2 = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (t, A) {
      if (A.length === 0) return [];
      for (var e = [], r = A.filter(Qh), n = 0; n < r.length; n++) {
        var i = r[n],
          s = r[n + 1];
        if (we(i) && i.value !== "none") {
          var c = s && Ti(s) ? s.number : 0;
          e.push({ counter: i.value, reset: c });
        }
      }
      return e;
    },
  },
  q2 = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      return A.filter(Oa).map(function (e) {
        return Mh.parse(t, e);
      });
    },
  },
  W2 = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (t, A) {
      if (A.length === 0) return null;
      var e = A[0];
      if (e.type === 20 && e.value === "none") return null;
      var r = [],
        n = A.filter(vg);
      if (n.length % 2 !== 0) return null;
      for (var i = 0; i < n.length; i += 2) {
        var s = n[i].value,
          c = n[i + 1].value;
        r.push({ open: s, close: c });
      }
      return r;
    },
  },
  af = function (t, A, e) {
    if (!t) return "";
    var r = t[Math.min(A, t.length - 1)];
    return r ? (e ? r.open : r.close) : "";
  },
  X2 = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (t, A) {
      return A.length === 1 && mu(A[0], "none")
        ? []
        : Ur(A).map(function (e) {
            for (
              var r = {
                  color: 255,
                  offsetX: it,
                  offsetY: it,
                  blur: it,
                  spread: it,
                  inset: !1,
                },
                n = 0,
                i = 0;
              i < e.length;
              i++
            ) {
              var s = e[i];
              mu(s, "inset")
                ? (r.inset = !0)
                : vn(s)
                  ? (n === 0
                      ? (r.offsetX = s)
                      : n === 1
                        ? (r.offsetY = s)
                        : n === 2
                          ? (r.blur = s)
                          : (r.spread = s),
                    n++)
                  : (r.color = pn.parse(t, s));
            }
            return r;
          });
    },
  },
  J2 = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function (t, A) {
      var e = [0, 1, 2],
        r = [];
      return (
        A.filter(we).forEach(function (n) {
          switch (n.value) {
            case "stroke":
              r.push(1);
              break;
            case "fill":
              r.push(0);
              break;
            case "markers":
              r.push(2);
              break;
          }
        }),
        e.forEach(function (n) {
          r.indexOf(n) === -1 && r.push(n);
        }),
        r
      );
    },
  },
  z2 = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color",
  },
  Y2 = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function (t, A) {
      return Oa(A) ? A.number : 0;
    },
  },
  Z2 = (function () {
    function t(A, e) {
      var r, n;
      (this.animationDuration = TA(A, q2, e.animationDuration)),
        (this.backgroundClip = TA(A, Qg, e.backgroundClip)),
        (this.backgroundColor = TA(A, Fg, e.backgroundColor)),
        (this.backgroundImage = TA(A, Ng, e.backgroundImage)),
        (this.backgroundOrigin = TA(A, _g, e.backgroundOrigin)),
        (this.backgroundPosition = TA(A, Dg, e.backgroundPosition)),
        (this.backgroundRepeat = TA(A, Tg, e.backgroundRepeat)),
        (this.backgroundSize = TA(A, Pg, e.backgroundSize)),
        (this.borderTopColor = TA(A, Kg, e.borderTopColor)),
        (this.borderRightColor = TA(A, kg, e.borderRightColor)),
        (this.borderBottomColor = TA(A, Rg, e.borderBottomColor)),
        (this.borderLeftColor = TA(A, Gg, e.borderLeftColor)),
        (this.borderTopLeftRadius = TA(A, jg, e.borderTopLeftRadius)),
        (this.borderTopRightRadius = TA(A, Vg, e.borderTopRightRadius)),
        (this.borderBottomRightRadius = TA(A, qg, e.borderBottomRightRadius)),
        (this.borderBottomLeftRadius = TA(A, Wg, e.borderBottomLeftRadius)),
        (this.borderTopStyle = TA(A, Xg, e.borderTopStyle)),
        (this.borderRightStyle = TA(A, Jg, e.borderRightStyle)),
        (this.borderBottomStyle = TA(A, zg, e.borderBottomStyle)),
        (this.borderLeftStyle = TA(A, Yg, e.borderLeftStyle)),
        (this.borderTopWidth = TA(A, Zg, e.borderTopWidth)),
        (this.borderRightWidth = TA(A, $g, e.borderRightWidth)),
        (this.borderBottomWidth = TA(A, A2, e.borderBottomWidth)),
        (this.borderLeftWidth = TA(A, e2, e.borderLeftWidth)),
        (this.boxShadow = TA(A, X2, e.boxShadow)),
        (this.color = TA(A, t2, e.color)),
        (this.direction = TA(A, r2, e.direction)),
        (this.display = TA(A, n2, e.display)),
        (this.float = TA(A, a2, e.cssFloat)),
        (this.fontFamily = TA(A, P2, e.fontFamily)),
        (this.fontSize = TA(A, M2, e.fontSize)),
        (this.fontStyle = TA(A, R2, e.fontStyle)),
        (this.fontVariant = TA(A, k2, e.fontVariant)),
        (this.fontWeight = TA(A, K2, e.fontWeight)),
        (this.letterSpacing = TA(A, s2, e.letterSpacing)),
        (this.lineBreak = TA(A, o2, e.lineBreak)),
        (this.lineHeight = TA(A, c2, e.lineHeight)),
        (this.listStyleImage = TA(A, u2, e.listStyleImage)),
        (this.listStylePosition = TA(A, l2, e.listStylePosition)),
        (this.listStyleType = TA(A, Cu, e.listStyleType)),
        (this.marginTop = TA(A, f2, e.marginTop)),
        (this.marginRight = TA(A, h2, e.marginRight)),
        (this.marginBottom = TA(A, B2, e.marginBottom)),
        (this.marginLeft = TA(A, g2, e.marginLeft)),
        (this.opacity = TA(A, D2, e.opacity));
      var i = TA(A, d2, e.overflow);
      (this.overflowX = i[0]),
        (this.overflowY = i[i.length > 1 ? 1 : 0]),
        (this.overflowWrap = TA(A, p2, e.overflowWrap)),
        (this.paddingTop = TA(A, w2, e.paddingTop)),
        (this.paddingRight = TA(A, v2, e.paddingRight)),
        (this.paddingBottom = TA(A, m2, e.paddingBottom)),
        (this.paddingLeft = TA(A, C2, e.paddingLeft)),
        (this.paintOrder = TA(A, J2, e.paintOrder)),
        (this.position = TA(A, F2, e.position)),
        (this.textAlign = TA(A, Q2, e.textAlign)),
        (this.textDecorationColor = TA(
          A,
          T2,
          (r = e.textDecorationColor) !== null && r !== void 0 ? r : e.color,
        )),
        (this.textDecorationLine = TA(
          A,
          O2,
          (n = e.textDecorationLine) !== null && n !== void 0
            ? n
            : e.textDecoration,
        )),
        (this.textShadow = TA(A, U2, e.textShadow)),
        (this.textTransform = TA(A, y2, e.textTransform)),
        (this.transform = TA(A, b2, e.transform)),
        (this.transformOrigin = TA(A, S2, e.transformOrigin)),
        (this.visibility = TA(A, H2, e.visibility)),
        (this.webkitTextStrokeColor = TA(A, z2, e.webkitTextStrokeColor)),
        (this.webkitTextStrokeWidth = TA(A, Y2, e.webkitTextStrokeWidth)),
        (this.wordBreak = TA(A, N2, e.wordBreak)),
        (this.zIndex = TA(A, _2, e.zIndex));
    }
    return (
      (t.prototype.isVisible = function () {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0;
      }),
      (t.prototype.isTransparent = function () {
        return wn(this.backgroundColor);
      }),
      (t.prototype.isTransformed = function () {
        return this.transform !== null;
      }),
      (t.prototype.isPositioned = function () {
        return this.position !== 0;
      }),
      (t.prototype.isPositionedWithZIndex = function () {
        return this.isPositioned() && !this.zIndex.auto;
      }),
      (t.prototype.isFloating = function () {
        return this.float !== 0;
      }),
      (t.prototype.isInlineLevel = function () {
        return (
          ze(this.display, 4) ||
          ze(this.display, 33554432) ||
          ze(this.display, 268435456) ||
          ze(this.display, 536870912) ||
          ze(this.display, 67108864) ||
          ze(this.display, 134217728)
        );
      }),
      t
    );
  })(),
  $2 = (function () {
    function t(A, e) {
      (this.content = TA(A, G2, e.content)),
        (this.quotes = TA(A, W2, e.quotes));
    }
    return t;
  })(),
  sf = (function () {
    function t(A, e) {
      (this.counterIncrement = TA(A, j2, e.counterIncrement)),
        (this.counterReset = TA(A, V2, e.counterReset));
    }
    return t;
  })(),
  TA = function (t, A, e) {
    var r = new mh(),
      n = e !== null && typeof e < "u" ? e.toString() : A.initialValue;
    r.write(n);
    var i = new Ch(r.read());
    switch (A.type) {
      case 2:
        var s = i.parseComponentValue();
        return A.parse(t, we(s) ? s.value : A.initialValue);
      case 0:
        return A.parse(t, i.parseComponentValue());
      case 1:
        return A.parse(t, i.parseComponentValues());
      case 4:
        return i.parseComponentValue();
      case 3:
        switch (A.format) {
          case "angle":
            return Lo.parse(t, i.parseComponentValue());
          case "color":
            return pn.parse(t, i.parseComponentValue());
          case "image":
            return ju.parse(t, i.parseComponentValue());
          case "length":
            var c = i.parseComponentValue();
            return vn(c) ? c : it;
          case "length-percentage":
            var u = i.parseComponentValue();
            return We(u) ? u : it;
          case "time":
            return Mh.parse(t, i.parseComponentValue());
        }
        break;
    }
  },
  Ad = "data-html2canvas-debug",
  ed = function (t) {
    var A = t.getAttribute(Ad);
    switch (A) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  },
  Qu = function (t, A) {
    var e = ed(t);
    return e === 1 || A === e;
  },
  yr = (function () {
    function t(A, e) {
      if (
        ((this.context = A),
        (this.textNodes = []),
        (this.elements = []),
        (this.flags = 0),
        Qu(e, 3))
      )
        debugger;
      (this.styles = new Z2(A, window.getComputedStyle(e, null))),
        yu(e) &&
          (this.styles.animationDuration.some(function (r) {
            return r > 0;
          }) && (e.style.animationDuration = "0s"),
          this.styles.transform !== null && (e.style.transform = "none")),
        (this.bounds = yo(this.context, e)),
        Qu(e, 4) && (this.flags |= 16);
    }
    return t;
  })(),
  td =
    "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",
  of = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Fa = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Vs = 0; Vs < of.length; Vs++) Fa[of.charCodeAt(Vs)] = Vs;
var rd = function (t) {
    var A = t.length * 0.75,
      e = t.length,
      r,
      n = 0,
      i,
      s,
      c,
      u;
    t[t.length - 1] === "=" && (A--, t[t.length - 2] === "=" && A--);
    var h =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(A)
          : new Array(A),
      B = Array.isArray(h) ? h : new Uint8Array(h);
    for (r = 0; r < e; r += 4)
      (i = Fa[t.charCodeAt(r)]),
        (s = Fa[t.charCodeAt(r + 1)]),
        (c = Fa[t.charCodeAt(r + 2)]),
        (u = Fa[t.charCodeAt(r + 3)]),
        (B[n++] = (i << 2) | (s >> 4)),
        (B[n++] = ((s & 15) << 4) | (c >> 2)),
        (B[n++] = ((c & 3) << 6) | (u & 63));
    return h;
  },
  nd = function (t) {
    for (var A = t.length, e = [], r = 0; r < A; r += 2)
      e.push((t[r + 1] << 8) | t[r]);
    return e;
  },
  id = function (t) {
    for (var A = t.length, e = [], r = 0; r < A; r += 4)
      e.push((t[r + 3] << 24) | (t[r + 2] << 16) | (t[r + 1] << 8) | t[r]);
    return e;
  },
  Mn = 5,
  Vu = 6 + 5,
  Tc = 2,
  ad = Vu - Mn,
  Kh = 65536 >> Mn,
  sd = 1 << Mn,
  Oc = sd - 1,
  od = 1024 >> Mn,
  cd = Kh + od,
  ud = cd,
  ld = 32,
  fd = ud + ld,
  hd = 65536 >> Vu,
  Bd = 1 << ad,
  gd = Bd - 1,
  cf = function (t, A, e) {
    return t.slice
      ? t.slice(A, e)
      : new Uint16Array(Array.prototype.slice.call(t, A, e));
  },
  dd = function (t, A, e) {
    return t.slice
      ? t.slice(A, e)
      : new Uint32Array(Array.prototype.slice.call(t, A, e));
  },
  pd = function (t, A) {
    var e = rd(t),
      r = Array.isArray(e) ? id(e) : new Uint32Array(e),
      n = Array.isArray(e) ? nd(e) : new Uint16Array(e),
      i = 24,
      s = cf(n, i / 2, r[4] / 2),
      c = r[5] === 2 ? cf(n, (i + r[4]) / 2) : dd(r, Math.ceil((i + r[4]) / 4));
    return new wd(r[0], r[1], r[2], r[3], s, c);
  },
  wd = (function () {
    function t(A, e, r, n, i, s) {
      (this.initialValue = A),
        (this.errorValue = e),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = i),
        (this.data = s);
    }
    return (
      (t.prototype.get = function (A) {
        var e;
        if (A >= 0) {
          if (A < 55296 || (A > 56319 && A <= 65535))
            return (
              (e = this.index[A >> Mn]),
              (e = (e << Tc) + (A & Oc)),
              this.data[e]
            );
          if (A <= 65535)
            return (
              (e = this.index[Kh + ((A - 55296) >> Mn)]),
              (e = (e << Tc) + (A & Oc)),
              this.data[e]
            );
          if (A < this.highStart)
            return (
              (e = fd - hd + (A >> Vu)),
              (e = this.index[e]),
              (e += (A >> Mn) & gd),
              (e = this.index[e]),
              (e = (e << Tc) + (A & Oc)),
              this.data[e]
            );
          if (A <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      t
    );
  })(),
  uf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  vd = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var qs = 0; qs < uf.length; qs++) vd[uf.charCodeAt(qs)] = qs;
var md = 1,
  Pc = 2,
  Mc = 3,
  lf = 4,
  ff = 5,
  Cd = 7,
  hf = 8,
  Kc = 9,
  kc = 10,
  Bf = 11,
  gf = 12,
  df = 13,
  pf = 14,
  Rc = 15,
  Qd = function (t) {
    for (var A = [], e = 0, r = t.length; e < r; ) {
      var n = t.charCodeAt(e++);
      if (n >= 55296 && n <= 56319 && e < r) {
        var i = t.charCodeAt(e++);
        (i & 64512) === 56320
          ? A.push(((n & 1023) << 10) + (i & 1023) + 65536)
          : (A.push(n), e--);
      } else A.push(n);
    }
    return A;
  },
  Fd = function () {
    for (var t = [], A = 0; A < arguments.length; A++) t[A] = arguments[A];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, t);
    var e = t.length;
    if (!e) return "";
    for (var r = [], n = -1, i = ""; ++n < e; ) {
      var s = t[n];
      s <= 65535
        ? r.push(s)
        : ((s -= 65536), r.push((s >> 10) + 55296, (s % 1024) + 56320)),
        (n + 1 === e || r.length > 16384) &&
          ((i += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return i;
  },
  Ud = pd(td),
  Kt = "×",
  Gc = "÷",
  yd = function (t) {
    return Ud.get(t);
  },
  bd = function (t, A, e) {
    var r = e - 2,
      n = A[r],
      i = A[e - 1],
      s = A[e];
    if (i === Pc && s === Mc) return Kt;
    if (i === Pc || i === Mc || i === lf || s === Pc || s === Mc || s === lf)
      return Gc;
    if (
      (i === hf && [hf, Kc, Bf, gf].indexOf(s) !== -1) ||
      ((i === Bf || i === Kc) && (s === Kc || s === kc)) ||
      ((i === gf || i === kc) && s === kc) ||
      s === df ||
      s === ff ||
      s === Cd ||
      i === md
    )
      return Kt;
    if (i === df && s === pf) {
      for (; n === ff; ) n = A[--r];
      if (n === pf) return Kt;
    }
    if (i === Rc && s === Rc) {
      for (var c = 0; n === Rc; ) c++, (n = A[--r]);
      if (c % 2 === 0) return Kt;
    }
    return Gc;
  },
  Ld = function (t) {
    var A = Qd(t),
      e = A.length,
      r = 0,
      n = 0,
      i = A.map(yd);
    return {
      next: function () {
        if (r >= e) return { done: !0, value: null };
        for (var s = Kt; r < e && (s = bd(A, i, ++r)) === Kt; );
        if (s !== Kt || r === e) {
          var c = Fd.apply(null, A.slice(n, r));
          return (n = r), { value: c, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  Ed = function (t) {
    for (var A = Ld(t), e = [], r; !(r = A.next()).done; )
      r.value && e.push(r.value.slice());
    return e;
  },
  Id = function (t) {
    var A = 123;
    if (t.createRange) {
      var e = t.createRange();
      if (e.getBoundingClientRect) {
        var r = t.createElement("boundtest");
        (r.style.height = A + "px"),
          (r.style.display = "block"),
          t.body.appendChild(r),
          e.selectNode(r);
        var n = e.getBoundingClientRect(),
          i = Math.round(n.height);
        if ((t.body.removeChild(r), i === A)) return !0;
      }
    }
    return !1;
  },
  xd = function (t) {
    var A = t.createElement("boundtest");
    (A.style.width = "50px"),
      (A.style.display = "block"),
      (A.style.fontSize = "12px"),
      (A.style.letterSpacing = "0px"),
      (A.style.wordSpacing = "0px"),
      t.body.appendChild(A);
    var e = t.createRange();
    A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = A.firstChild,
      n = bo(r.data).map(function (u) {
        return Me(u);
      }),
      i = 0,
      s = {},
      c = n.every(function (u, h) {
        e.setStart(r, i), e.setEnd(r, i + u.length);
        var B = e.getBoundingClientRect();
        i += u.length;
        var p = B.x > s.x || B.y > s.y;
        return (s = B), h === 0 ? !0 : p;
      });
    return t.body.removeChild(A), c;
  },
  Sd = function () {
    return typeof new Image().crossOrigin < "u";
  },
  Hd = function () {
    return typeof new XMLHttpRequest().responseType == "string";
  },
  Nd = function (t) {
    var A = new Image(),
      e = t.createElement("canvas"),
      r = e.getContext("2d");
    if (!r) return !1;
    A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(A, 0, 0), e.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  },
  wf = function (t) {
    return t[0] === 0 && t[1] === 255 && t[2] === 0 && t[3] === 255;
  },
  _d = function (t) {
    var A = t.createElement("canvas"),
      e = 100;
    (A.width = e), (A.height = e);
    var r = A.getContext("2d");
    if (!r) return Promise.reject(!1);
    (r.fillStyle = "rgb(0, 255, 0)"), r.fillRect(0, 0, e, e);
    var n = new Image(),
      i = A.toDataURL();
    n.src = i;
    var s = Fu(e, e, 0, 0, n);
    return (
      (r.fillStyle = "red"),
      r.fillRect(0, 0, e, e),
      vf(s)
        .then(function (c) {
          r.drawImage(c, 0, 0);
          var u = r.getImageData(0, 0, e, e).data;
          (r.fillStyle = "red"), r.fillRect(0, 0, e, e);
          var h = t.createElement("div");
          return (
            (h.style.backgroundImage = "url(" + i + ")"),
            (h.style.height = e + "px"),
            wf(u) ? vf(Fu(e, e, 0, 0, h)) : Promise.reject(!1)
          );
        })
        .then(function (c) {
          return r.drawImage(c, 0, 0), wf(r.getImageData(0, 0, e, e).data);
        })
        .catch(function () {
          return !1;
        })
    );
  },
  Fu = function (t, A, e, r, n) {
    var i = "http://www.w3.org/2000/svg",
      s = document.createElementNS(i, "svg"),
      c = document.createElementNS(i, "foreignObject");
    return (
      s.setAttributeNS(null, "width", t.toString()),
      s.setAttributeNS(null, "height", A.toString()),
      c.setAttributeNS(null, "width", "100%"),
      c.setAttributeNS(null, "height", "100%"),
      c.setAttributeNS(null, "x", e.toString()),
      c.setAttributeNS(null, "y", r.toString()),
      c.setAttributeNS(null, "externalResourcesRequired", "true"),
      s.appendChild(c),
      c.appendChild(n),
      s
    );
  },
  vf = function (t) {
    return new Promise(function (A, e) {
      var r = new Image();
      (r.onload = function () {
        return A(r);
      }),
        (r.onerror = e),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(t)));
    });
  },
  nt = {
    get SUPPORT_RANGE_BOUNDS() {
      var t = Id(document);
      return Object.defineProperty(nt, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
    },
    get SUPPORT_WORD_BREAKING() {
      var t = nt.SUPPORT_RANGE_BOUNDS && xd(document);
      return (
        Object.defineProperty(nt, "SUPPORT_WORD_BREAKING", { value: t }), t
      );
    },
    get SUPPORT_SVG_DRAWING() {
      var t = Nd(document);
      return Object.defineProperty(nt, "SUPPORT_SVG_DRAWING", { value: t }), t;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var t =
        typeof Array.from == "function" && typeof window.fetch == "function"
          ? _d(document)
          : Promise.resolve(!1);
      return (
        Object.defineProperty(nt, "SUPPORT_FOREIGNOBJECT_DRAWING", {
          value: t,
        }),
        t
      );
    },
    get SUPPORT_CORS_IMAGES() {
      var t = Sd();
      return Object.defineProperty(nt, "SUPPORT_CORS_IMAGES", { value: t }), t;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var t = Hd();
      return (
        Object.defineProperty(nt, "SUPPORT_RESPONSE_TYPE", { value: t }), t
      );
    },
    get SUPPORT_CORS_XHR() {
      var t = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(nt, "SUPPORT_CORS_XHR", { value: t }), t;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var t = !!(typeof Intl < "u" && Intl.Segmenter);
      return (
        Object.defineProperty(nt, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
          value: t,
        }),
        t
      );
    },
  },
  Ea = (function () {
    function t(A, e) {
      (this.text = A), (this.bounds = e);
    }
    return t;
  })(),
  Dd = function (t, A, e, r) {
    var n = Pd(A, e),
      i = [],
      s = 0;
    return (
      n.forEach(function (c) {
        if (e.textDecorationLine.length || c.trim().length > 0)
          if (nt.SUPPORT_RANGE_BOUNDS) {
            var u = mf(r, s, c.length).getClientRects();
            if (u.length > 1) {
              var h = qu(c),
                B = 0;
              h.forEach(function (w) {
                i.push(
                  new Ea(
                    w,
                    jr.fromDOMRectList(
                      t,
                      mf(r, B + s, w.length).getClientRects(),
                    ),
                  ),
                ),
                  (B += w.length);
              });
            } else i.push(new Ea(c, jr.fromDOMRectList(t, u)));
          } else {
            var p = r.splitText(c.length);
            i.push(new Ea(c, Td(t, r))), (r = p);
          }
        else nt.SUPPORT_RANGE_BOUNDS || (r = r.splitText(c.length));
        s += c.length;
      }),
      i
    );
  },
  Td = function (t, A) {
    var e = A.ownerDocument;
    if (e) {
      var r = e.createElement("html2canvaswrapper");
      r.appendChild(A.cloneNode(!0));
      var n = A.parentNode;
      if (n) {
        n.replaceChild(r, A);
        var i = yo(t, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), i;
      }
    }
    return jr.EMPTY;
  },
  mf = function (t, A, e) {
    var r = t.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(t, A), n.setEnd(t, A + e), n;
  },
  qu = function (t) {
    if (nt.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
      return Array.from(A.segment(t)).map(function (e) {
        return e.segment;
      });
    }
    return Ed(t);
  },
  Od = function (t, A) {
    if (nt.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(e.segment(t)).map(function (r) {
        return r.segment;
      });
    }
    return Kd(t, A);
  },
  Pd = function (t, A) {
    return A.letterSpacing !== 0 ? qu(t) : Od(t, A);
  },
  Md = [32, 160, 4961, 65792, 65793, 4153, 4241],
  Kd = function (t, A) {
    for (
      var e = h1(t, {
          lineBreak: A.lineBreak,
          wordBreak:
            A.overflowWrap === "break-word" ? "break-word" : A.wordBreak,
        }),
        r = [],
        n,
        i = function () {
          if (n.value) {
            var s = n.value.slice(),
              c = bo(s),
              u = "";
            c.forEach(function (h) {
              Md.indexOf(h) === -1
                ? (u += Me(h))
                : (u.length && r.push(u), r.push(Me(h)), (u = ""));
            }),
              u.length && r.push(u);
          }
        };
      !(n = e.next()).done;

    )
      i();
    return r;
  },
  kd = (function () {
    function t(A, e, r) {
      (this.text = Rd(e.data, r.textTransform)),
        (this.textBounds = Dd(A, this.text, r, e));
    }
    return t;
  })(),
  Rd = function (t, A) {
    switch (A) {
      case 1:
        return t.toLowerCase();
      case 3:
        return t.replace(Gd, jd);
      case 2:
        return t.toUpperCase();
      default:
        return t;
    }
  },
  Gd = /(^|\s|:|-|\(|\))([a-z])/g,
  jd = function (t, A, e) {
    return t.length > 0 ? A + e.toUpperCase() : t;
  },
  kh = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this;
      return (
        (n.src = r.currentSrc || r.src),
        (n.intrinsicWidth = r.naturalWidth),
        (n.intrinsicHeight = r.naturalHeight),
        n.context.cache.addImage(n.src),
        n
      );
    }
    return A;
  })(yr),
  Rh = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this;
      return (
        (n.canvas = r),
        (n.intrinsicWidth = r.width),
        (n.intrinsicHeight = r.height),
        n
      );
    }
    return A;
  })(yr),
  Gh = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this,
        i = new XMLSerializer(),
        s = yo(e, r);
      return (
        r.setAttribute("width", s.width + "px"),
        r.setAttribute("height", s.height + "px"),
        (n.svg =
          "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r))),
        (n.intrinsicWidth = r.width.baseVal.value),
        (n.intrinsicHeight = r.height.baseVal.value),
        n.context.cache.addImage(n.svg),
        n
      );
    }
    return A;
  })(yr),
  jh = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this;
      return (n.value = r.value), n;
    }
    return A;
  })(yr),
  Uu = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this;
      return (
        (n.start = r.start),
        (n.reversed = typeof r.reversed == "boolean" && r.reversed === !0),
        n
      );
    }
    return A;
  })(yr),
  Vd = [{ type: 15, flags: 0, unit: "px", number: 3 }],
  qd = [{ type: 16, flags: 0, number: 50 }],
  Wd = function (t) {
    return t.width > t.height
      ? new jr(t.left + (t.width - t.height) / 2, t.top, t.height, t.height)
      : t.width < t.height
        ? new jr(t.left, t.top + (t.height - t.width) / 2, t.width, t.width)
        : t;
  },
  Xd = function (t) {
    var A = t.type === Jd ? new Array(t.value.length + 1).join("•") : t.value;
    return A.length === 0 ? t.placeholder || "" : A;
  },
  go = "checkbox",
  po = "radio",
  Jd = "password",
  Cf = 707406591,
  Wu = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this;
      switch (
        ((n.type = r.type.toLowerCase()),
        (n.checked = r.checked),
        (n.value = Xd(r)),
        (n.type === go || n.type === po) &&
          ((n.styles.backgroundColor = 3739148031),
          (n.styles.borderTopColor =
            n.styles.borderRightColor =
            n.styles.borderBottomColor =
            n.styles.borderLeftColor =
              2779096575),
          (n.styles.borderTopWidth =
            n.styles.borderRightWidth =
            n.styles.borderBottomWidth =
            n.styles.borderLeftWidth =
              1),
          (n.styles.borderTopStyle =
            n.styles.borderRightStyle =
            n.styles.borderBottomStyle =
            n.styles.borderLeftStyle =
              1),
          (n.styles.backgroundClip = [0]),
          (n.styles.backgroundOrigin = [0]),
          (n.bounds = Wd(n.bounds))),
        n.type)
      ) {
        case go:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              Vd;
          break;
        case po:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              qd;
          break;
      }
      return n;
    }
    return A;
  })(yr),
  Vh = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this,
        i = r.options[r.selectedIndex || 0];
      return (n.value = (i && i.text) || ""), n;
    }
    return A;
  })(yr),
  qh = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this;
      return (n.value = r.value), n;
    }
    return A;
  })(yr),
  Wh = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this;
      (n.src = r.src),
        (n.width = parseInt(r.width, 10) || 0),
        (n.height = parseInt(r.height, 10) || 0),
        (n.backgroundColor = n.styles.backgroundColor);
      try {
        if (
          r.contentWindow &&
          r.contentWindow.document &&
          r.contentWindow.document.documentElement
        ) {
          n.tree = Jh(e, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement
              ? ba(
                  e,
                  getComputedStyle(r.contentWindow.document.documentElement)
                    .backgroundColor,
                )
              : Gr.TRANSPARENT,
            s = r.contentWindow.document.body
              ? ba(
                  e,
                  getComputedStyle(r.contentWindow.document.body)
                    .backgroundColor,
                )
              : Gr.TRANSPARENT;
          n.backgroundColor = wn(i)
            ? wn(s)
              ? n.styles.backgroundColor
              : s
            : i;
        }
      } catch {}
      return n;
    }
    return A;
  })(yr),
  zd = ["OL", "UL", "MENU"],
  ro = function (t, A, e, r) {
    for (var n = A.firstChild, i = void 0; n; n = i)
      if (((i = n.nextSibling), zh(n) && n.data.trim().length > 0))
        e.textNodes.push(new kd(t, n, e.styles));
      else if (Ei(n))
        if (A0(n) && n.assignedNodes)
          n.assignedNodes().forEach(function (c) {
            return ro(t, c, e, r);
          });
        else {
          var s = Xh(t, n);
          s.styles.isVisible() &&
            (Yd(n, s, r) ? (s.flags |= 4) : Zd(s.styles) && (s.flags |= 2),
            zd.indexOf(n.tagName) !== -1 && (s.flags |= 8),
            e.elements.push(s),
            n.slot,
            n.shadowRoot
              ? ro(t, n.shadowRoot, s, r)
              : !wo(n) && !Yh(n) && !vo(n) && ro(t, n, s, r));
        }
  },
  Xh = function (t, A) {
    return bu(A)
      ? new kh(t, A)
      : Zh(A)
        ? new Rh(t, A)
        : Yh(A)
          ? new Gh(t, A)
          : $d(A)
            ? new jh(t, A)
            : Ap(A)
              ? new Uu(t, A)
              : ep(A)
                ? new Wu(t, A)
                : vo(A)
                  ? new Vh(t, A)
                  : wo(A)
                    ? new qh(t, A)
                    : $h(A)
                      ? new Wh(t, A)
                      : new yr(t, A);
  },
  Jh = function (t, A) {
    var e = Xh(t, A);
    return (e.flags |= 4), ro(t, A, e, e), e;
  },
  Yd = function (t, A, e) {
    return (
      A.styles.isPositionedWithZIndex() ||
      A.styles.opacity < 1 ||
      A.styles.isTransformed() ||
      (Xu(t) && e.styles.isTransparent())
    );
  },
  Zd = function (t) {
    return t.isPositioned() || t.isFloating();
  },
  zh = function (t) {
    return t.nodeType === Node.TEXT_NODE;
  },
  Ei = function (t) {
    return t.nodeType === Node.ELEMENT_NODE;
  },
  yu = function (t) {
    return Ei(t) && typeof t.style < "u" && !no(t);
  },
  no = function (t) {
    return typeof t.className == "object";
  },
  $d = function (t) {
    return t.tagName === "LI";
  },
  Ap = function (t) {
    return t.tagName === "OL";
  },
  ep = function (t) {
    return t.tagName === "INPUT";
  },
  tp = function (t) {
    return t.tagName === "HTML";
  },
  Yh = function (t) {
    return t.tagName === "svg";
  },
  Xu = function (t) {
    return t.tagName === "BODY";
  },
  Zh = function (t) {
    return t.tagName === "CANVAS";
  },
  Qf = function (t) {
    return t.tagName === "VIDEO";
  },
  bu = function (t) {
    return t.tagName === "IMG";
  },
  $h = function (t) {
    return t.tagName === "IFRAME";
  },
  Ff = function (t) {
    return t.tagName === "STYLE";
  },
  rp = function (t) {
    return t.tagName === "SCRIPT";
  },
  wo = function (t) {
    return t.tagName === "TEXTAREA";
  },
  vo = function (t) {
    return t.tagName === "SELECT";
  },
  A0 = function (t) {
    return t.tagName === "SLOT";
  },
  Uf = function (t) {
    return t.tagName.indexOf("-") > 0;
  },
  np = (function () {
    function t() {
      this.counters = {};
    }
    return (
      (t.prototype.getCounterValue = function (A) {
        var e = this.counters[A];
        return e && e.length ? e[e.length - 1] : 1;
      }),
      (t.prototype.getCounterValues = function (A) {
        var e = this.counters[A];
        return e || [];
      }),
      (t.prototype.pop = function (A) {
        var e = this;
        A.forEach(function (r) {
          return e.counters[r].pop();
        });
      }),
      (t.prototype.parse = function (A) {
        var e = this,
          r = A.counterIncrement,
          n = A.counterReset,
          i = !0;
        r !== null &&
          r.forEach(function (c) {
            var u = e.counters[c.counter];
            u &&
              c.increment !== 0 &&
              ((i = !1),
              u.length || u.push(1),
              (u[Math.max(0, u.length - 1)] += c.increment));
          });
        var s = [];
        return (
          i &&
            n.forEach(function (c) {
              var u = e.counters[c.counter];
              s.push(c.counter),
                u || (u = e.counters[c.counter] = []),
                u.push(c.reset);
            }),
          s
        );
      }),
      t
    );
  })(),
  yf = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
  },
  bf = {
    integers: [
      9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400,
      300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2,
      1,
    ],
    values: [
      "Ք",
      "Փ",
      "Ւ",
      "Ց",
      "Ր",
      "Տ",
      "Վ",
      "Ս",
      "Ռ",
      "Ջ",
      "Պ",
      "Չ",
      "Ո",
      "Շ",
      "Ն",
      "Յ",
      "Մ",
      "Ճ",
      "Ղ",
      "Ձ",
      "Հ",
      "Կ",
      "Ծ",
      "Խ",
      "Լ",
      "Ի",
      "Ժ",
      "Թ",
      "Ը",
      "Է",
      "Զ",
      "Ե",
      "Դ",
      "Գ",
      "Բ",
      "Ա",
    ],
  },
  ip = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90,
      80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3,
      2, 1,
    ],
    values: [
      "י׳",
      "ט׳",
      "ח׳",
      "ז׳",
      "ו׳",
      "ה׳",
      "ד׳",
      "ג׳",
      "ב׳",
      "א׳",
      "ת",
      "ש",
      "ר",
      "ק",
      "צ",
      "פ",
      "ע",
      "ס",
      "נ",
      "מ",
      "ל",
      "כ",
      "יט",
      "יח",
      "יז",
      "טז",
      "טו",
      "י",
      "ט",
      "ח",
      "ז",
      "ו",
      "ה",
      "ד",
      "ג",
      "ב",
      "א",
    ],
  },
  ap = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500,
      400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4,
      3, 2, 1,
    ],
    values: [
      "ჵ",
      "ჰ",
      "ჯ",
      "ჴ",
      "ხ",
      "ჭ",
      "წ",
      "ძ",
      "ც",
      "ჩ",
      "შ",
      "ყ",
      "ღ",
      "ქ",
      "ფ",
      "ჳ",
      "ტ",
      "ს",
      "რ",
      "ჟ",
      "პ",
      "ო",
      "ჲ",
      "ნ",
      "მ",
      "ლ",
      "კ",
      "ი",
      "თ",
      "ჱ",
      "ზ",
      "ვ",
      "ე",
      "დ",
      "გ",
      "ბ",
      "ა",
    ],
  },
  vi = function (t, A, e, r, n, i) {
    return t < A || t > e
      ? Na(t, n, i.length > 0)
      : r.integers.reduce(function (s, c, u) {
          for (; t >= c; ) (t -= c), (s += r.values[u]);
          return s;
        }, "") + i;
  },
  e0 = function (t, A, e, r) {
    var n = "";
    do e || t--, (n = r(t) + n), (t /= A);
    while (t * A >= A);
    return n;
  },
  Pe = function (t, A, e, r, n) {
    var i = e - A + 1;
    return (
      (t < 0 ? "-" : "") +
      (e0(Math.abs(t), i, r, function (s) {
        return Me(Math.floor(s % i) + A);
      }) +
        n)
    );
  },
  Hn = function (t, A, e) {
    e === void 0 && (e = ". ");
    var r = A.length;
    return (
      e0(Math.abs(t), r, !1, function (n) {
        return A[Math.floor(n % r)];
      }) + e
    );
  },
  Ui = 1,
  un = 2,
  ln = 4,
  Ua = 8,
  Kr = function (t, A, e, r, n, i) {
    if (t < -9999 || t > 9999) return Na(t, 4, n.length > 0);
    var s = Math.abs(t),
      c = n;
    if (s === 0) return A[0] + c;
    for (var u = 0; s > 0 && u <= 4; u++) {
      var h = s % 10;
      h === 0 && ze(i, Ui) && c !== ""
        ? (c = A[h] + c)
        : h > 1 ||
            (h === 1 && u === 0) ||
            (h === 1 && u === 1 && ze(i, un)) ||
            (h === 1 && u === 1 && ze(i, ln) && t > 100) ||
            (h === 1 && u > 1 && ze(i, Ua))
          ? (c = A[h] + (u > 0 ? e[u - 1] : "") + c)
          : h === 1 && u > 0 && (c = e[u - 1] + c),
        (s = Math.floor(s / 10));
    }
    return (t < 0 ? r : "") + c;
  },
  Lf = "十百千萬",
  Ef = "拾佰仟萬",
  If = "マイナス",
  jc = "마이너스",
  Na = function (t, A, e) {
    var r = e ? ". " : "",
      n = e ? "、" : "",
      i = e ? ", " : "",
      s = e ? " " : "";
    switch (A) {
      case 0:
        return "•" + s;
      case 1:
        return "◦" + s;
      case 2:
        return "◾" + s;
      case 5:
        var c = Pe(t, 48, 57, !0, r);
        return c.length < 4 ? "0" + c : c;
      case 4:
        return Hn(t, "〇一二三四五六七八九", n);
      case 6:
        return vi(t, 1, 3999, yf, 3, r).toLowerCase();
      case 7:
        return vi(t, 1, 3999, yf, 3, r);
      case 8:
        return Pe(t, 945, 969, !1, r);
      case 9:
        return Pe(t, 97, 122, !1, r);
      case 10:
        return Pe(t, 65, 90, !1, r);
      case 11:
        return Pe(t, 1632, 1641, !0, r);
      case 12:
      case 49:
        return vi(t, 1, 9999, bf, 3, r);
      case 35:
        return vi(t, 1, 9999, bf, 3, r).toLowerCase();
      case 13:
        return Pe(t, 2534, 2543, !0, r);
      case 14:
      case 30:
        return Pe(t, 6112, 6121, !0, r);
      case 15:
        return Hn(t, "子丑寅卯辰巳午未申酉戌亥", n);
      case 16:
        return Hn(t, "甲乙丙丁戊己庚辛壬癸", n);
      case 17:
      case 48:
        return Kr(t, "零一二三四五六七八九", Lf, "負", n, un | ln | Ua);
      case 47:
        return Kr(t, "零壹貳參肆伍陸柒捌玖", Ef, "負", n, Ui | un | ln | Ua);
      case 42:
        return Kr(t, "零一二三四五六七八九", Lf, "负", n, un | ln | Ua);
      case 41:
        return Kr(t, "零壹贰叁肆伍陆柒捌玖", Ef, "负", n, Ui | un | ln | Ua);
      case 26:
        return Kr(t, "〇一二三四五六七八九", "十百千万", If, n, 0);
      case 25:
        return Kr(t, "零壱弐参四伍六七八九", "拾百千万", If, n, Ui | un | ln);
      case 31:
        return Kr(t, "영일이삼사오육칠팔구", "십백천만", jc, i, Ui | un | ln);
      case 33:
        return Kr(t, "零一二三四五六七八九", "十百千萬", jc, i, 0);
      case 32:
        return Kr(t, "零壹貳參四五六七八九", "拾百千", jc, i, Ui | un | ln);
      case 18:
        return Pe(t, 2406, 2415, !0, r);
      case 20:
        return vi(t, 1, 19999, ap, 3, r);
      case 21:
        return Pe(t, 2790, 2799, !0, r);
      case 22:
        return Pe(t, 2662, 2671, !0, r);
      case 22:
        return vi(t, 1, 10999, ip, 3, r);
      case 23:
        return Hn(
          t,
          "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん",
        );
      case 24:
        return Hn(
          t,
          "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす",
        );
      case 27:
        return Pe(t, 3302, 3311, !0, r);
      case 28:
        return Hn(
          t,
          "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
          n,
        );
      case 29:
        return Hn(
          t,
          "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
          n,
        );
      case 34:
        return Pe(t, 3792, 3801, !0, r);
      case 37:
        return Pe(t, 6160, 6169, !0, r);
      case 38:
        return Pe(t, 4160, 4169, !0, r);
      case 39:
        return Pe(t, 2918, 2927, !0, r);
      case 40:
        return Pe(t, 1776, 1785, !0, r);
      case 43:
        return Pe(t, 3046, 3055, !0, r);
      case 44:
        return Pe(t, 3174, 3183, !0, r);
      case 45:
        return Pe(t, 3664, 3673, !0, r);
      case 46:
        return Pe(t, 3872, 3881, !0, r);
      case 3:
      default:
        return Pe(t, 48, 57, !0, r);
    }
  },
  t0 = "data-html2canvas-ignore",
  xf = (function () {
    function t(A, e, r) {
      if (
        ((this.context = A),
        (this.options = r),
        (this.scrolledElements = []),
        (this.referenceElement = e),
        (this.counters = new np()),
        (this.quoteDepth = 0),
        !e.ownerDocument)
      )
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(
        e.ownerDocument.documentElement,
        !1,
      );
    }
    return (
      (t.prototype.toIFrame = function (A, e) {
        var r = this,
          n = sp(A, e);
        if (!n.contentWindow)
          return Promise.reject("Unable to find iframe window");
        var i = A.defaultView.pageXOffset,
          s = A.defaultView.pageYOffset,
          c = n.contentWindow,
          u = c.document,
          h = up(n).then(function () {
            return dt(r, void 0, void 0, function () {
              var B, p;
              return ht(this, function (w) {
                switch (w.label) {
                  case 0:
                    return (
                      this.scrolledElements.forEach(Bp),
                      c &&
                        (c.scrollTo(e.left, e.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                          (c.scrollY !== e.top || c.scrollX !== e.left) &&
                          (this.context.logger.warn(
                            "Unable to restore scroll position for cloned document",
                          ),
                          (this.context.windowBounds =
                            this.context.windowBounds.add(
                              c.scrollX - e.left,
                              c.scrollY - e.top,
                              0,
                              0,
                            )))),
                      (B = this.options.onclone),
                      (p = this.clonedReferenceElement),
                      typeof p > "u"
                        ? [
                            2,
                            Promise.reject(
                              "Error finding the " +
                                this.referenceElement.nodeName +
                                " in the cloned document",
                            ),
                          ]
                        : u.fonts && u.fonts.ready
                          ? [4, u.fonts.ready]
                          : [3, 2]
                    );
                  case 1:
                    w.sent(), (w.label = 2);
                  case 2:
                    return /(AppleWebKit)/g.test(navigator.userAgent)
                      ? [4, cp(u)]
                      : [3, 4];
                  case 3:
                    w.sent(), (w.label = 4);
                  case 4:
                    return typeof B == "function"
                      ? [
                          2,
                          Promise.resolve()
                            .then(function () {
                              return B(u, p);
                            })
                            .then(function () {
                              return n;
                            }),
                        ]
                      : [2, n];
                }
              });
            });
          });
        return (
          u.open(),
          u.write(fp(document.doctype) + "<html></html>"),
          hp(this.referenceElement.ownerDocument, i, s),
          u.replaceChild(u.adoptNode(this.documentElement), u.documentElement),
          u.close(),
          h
        );
      }),
      (t.prototype.createElementClone = function (A) {
        if (Qu(A, 2)) debugger;
        if (Zh(A)) return this.createCanvasClone(A);
        if (Qf(A)) return this.createVideoClone(A);
        if (Ff(A)) return this.createStyleClone(A);
        var e = A.cloneNode(!1);
        return (
          bu(e) &&
            (bu(A) &&
              A.currentSrc &&
              A.currentSrc !== A.src &&
              ((e.src = A.currentSrc), (e.srcset = "")),
            e.loading === "lazy" && (e.loading = "eager")),
          Uf(e) ? this.createCustomElementClone(e) : e
        );
      }),
      (t.prototype.createCustomElementClone = function (A) {
        var e = document.createElement("html2canvascustomelement");
        return Vc(A.style, e), e;
      }),
      (t.prototype.createStyleClone = function (A) {
        try {
          var e = A.sheet;
          if (e && e.cssRules) {
            var r = [].slice.call(e.cssRules, 0).reduce(function (i, s) {
                return s && typeof s.cssText == "string" ? i + s.cssText : i;
              }, ""),
              n = A.cloneNode(!1);
            return (n.textContent = r), n;
          }
        } catch (i) {
          if (
            (this.context.logger.error("Unable to access cssRules property", i),
            i.name !== "SecurityError")
          )
            throw i;
        }
        return A.cloneNode(!1);
      }),
      (t.prototype.createCanvasClone = function (A) {
        var e;
        if (this.options.inlineImages && A.ownerDocument) {
          var r = A.ownerDocument.createElement("img");
          try {
            return (r.src = A.toDataURL()), r;
          } catch {
            this.context.logger.info(
              "Unable to inline canvas contents, canvas is tainted",
              A,
            );
          }
        }
        var n = A.cloneNode(!1);
        try {
          (n.width = A.width), (n.height = A.height);
          var i = A.getContext("2d"),
            s = n.getContext("2d");
          if (s)
            if (!this.options.allowTaint && i)
              s.putImageData(i.getImageData(0, 0, A.width, A.height), 0, 0);
            else {
              var c =
                (e = A.getContext("webgl2")) !== null && e !== void 0
                  ? e
                  : A.getContext("webgl");
              if (c) {
                var u = c.getContextAttributes();
                (u == null ? void 0 : u.preserveDrawingBuffer) === !1 &&
                  this.context.logger.warn(
                    "Unable to clone WebGL context as it has preserveDrawingBuffer=false",
                    A,
                  );
              }
              s.drawImage(A, 0, 0);
            }
          return n;
        } catch {
          this.context.logger.info(
            "Unable to clone canvas as it is tainted",
            A,
          );
        }
        return n;
      }),
      (t.prototype.createVideoClone = function (A) {
        var e = A.ownerDocument.createElement("canvas");
        (e.width = A.offsetWidth), (e.height = A.offsetHeight);
        var r = e.getContext("2d");
        try {
          return (
            r &&
              (r.drawImage(A, 0, 0, e.width, e.height),
              this.options.allowTaint ||
                r.getImageData(0, 0, e.width, e.height)),
            e
          );
        } catch {
          this.context.logger.info("Unable to clone video as it is tainted", A);
        }
        var n = A.ownerDocument.createElement("canvas");
        return (n.width = A.offsetWidth), (n.height = A.offsetHeight), n;
      }),
      (t.prototype.appendChildNode = function (A, e, r) {
        (!Ei(e) ||
          (!rp(e) &&
            !e.hasAttribute(t0) &&
            (typeof this.options.ignoreElements != "function" ||
              !this.options.ignoreElements(e)))) &&
          (!this.options.copyStyles || !Ei(e) || !Ff(e)) &&
          A.appendChild(this.cloneNode(e, r));
      }),
      (t.prototype.cloneChildNodes = function (A, e, r) {
        for (
          var n = this,
            i = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild;
          i;
          i = i.nextSibling
        )
          if (Ei(i) && A0(i) && typeof i.assignedNodes == "function") {
            var s = i.assignedNodes();
            s.length &&
              s.forEach(function (c) {
                return n.appendChildNode(e, c, r);
              });
          } else this.appendChildNode(e, i, r);
      }),
      (t.prototype.cloneNode = function (A, e) {
        if (zh(A)) return document.createTextNode(A.data);
        if (!A.ownerDocument) return A.cloneNode(!1);
        var r = A.ownerDocument.defaultView;
        if (r && Ei(A) && (yu(A) || no(A))) {
          var n = this.createElementClone(A);
          n.style.transitionProperty = "none";
          var i = r.getComputedStyle(A),
            s = r.getComputedStyle(A, ":before"),
            c = r.getComputedStyle(A, ":after");
          this.referenceElement === A &&
            yu(n) &&
            (this.clonedReferenceElement = n),
            Xu(n) && pp(n);
          var u = this.counters.parse(new sf(this.context, i)),
            h = this.resolvePseudoContent(A, n, s, Ia.BEFORE);
          Uf(A) && (e = !0),
            Qf(A) || this.cloneChildNodes(A, n, e),
            h && n.insertBefore(h, n.firstChild);
          var B = this.resolvePseudoContent(A, n, c, Ia.AFTER);
          return (
            B && n.appendChild(B),
            this.counters.pop(u),
            ((i && (this.options.copyStyles || no(A)) && !$h(A)) || e) &&
              Vc(i, n),
            (A.scrollTop !== 0 || A.scrollLeft !== 0) &&
              this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]),
            (wo(A) || vo(A)) && (wo(n) || vo(n)) && (n.value = A.value),
            n
          );
        }
        return A.cloneNode(!1);
      }),
      (t.prototype.resolvePseudoContent = function (A, e, r, n) {
        var i = this;
        if (r) {
          var s = r.content,
            c = e.ownerDocument;
          if (
            !(
              !c ||
              !s ||
              s === "none" ||
              s === "-moz-alt-content" ||
              r.display === "none"
            )
          ) {
            this.counters.parse(new sf(this.context, r));
            var u = new $2(this.context, r),
              h = c.createElement("html2canvaspseudoelement");
            Vc(r, h),
              u.content.forEach(function (p) {
                if (p.type === 0) h.appendChild(c.createTextNode(p.value));
                else if (p.type === 22) {
                  var w = c.createElement("img");
                  (w.src = p.value), (w.style.opacity = "1"), h.appendChild(w);
                } else if (p.type === 18) {
                  if (p.name === "attr") {
                    var g = p.values.filter(we);
                    g.length &&
                      h.appendChild(
                        c.createTextNode(A.getAttribute(g[0].value) || ""),
                      );
                  } else if (p.name === "counter") {
                    var L = p.values.filter(Di),
                      y = L[0],
                      N = L[1];
                    if (y && we(y)) {
                      var F = i.counters.getCounterValue(y.value),
                        I = N && we(N) ? Cu.parse(i.context, N.value) : 3;
                      h.appendChild(c.createTextNode(Na(F, I, !1)));
                    }
                  } else if (p.name === "counters") {
                    var G = p.values.filter(Di),
                      y = G[0],
                      Y = G[1],
                      N = G[2];
                    if (y && we(y)) {
                      var Z = i.counters.getCounterValues(y.value),
                        z = N && we(N) ? Cu.parse(i.context, N.value) : 3,
                        W = Y && Y.type === 0 ? Y.value : "",
                        T = Z.map(function (S) {
                          return Na(S, z, !1);
                        }).join(W);
                      h.appendChild(c.createTextNode(T));
                    }
                  }
                } else if (p.type === 20)
                  switch (p.value) {
                    case "open-quote":
                      h.appendChild(
                        c.createTextNode(af(u.quotes, i.quoteDepth++, !0)),
                      );
                      break;
                    case "close-quote":
                      h.appendChild(
                        c.createTextNode(af(u.quotes, --i.quoteDepth, !1)),
                      );
                      break;
                    default:
                      h.appendChild(c.createTextNode(p.value));
                  }
              }),
              (h.className = Lu + " " + Eu);
            var B = n === Ia.BEFORE ? " " + Lu : " " + Eu;
            return no(e) ? (e.className.baseValue += B) : (e.className += B), h;
          }
        }
      }),
      (t.destroy = function (A) {
        return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
      }),
      t
    );
  })(),
  Ia;
(function (t) {
  (t[(t.BEFORE = 0)] = "BEFORE"), (t[(t.AFTER = 1)] = "AFTER");
})(Ia || (Ia = {}));
var sp = function (t, A) {
    var e = t.createElement("iframe");
    return (
      (e.className = "html2canvas-container"),
      (e.style.visibility = "hidden"),
      (e.style.position = "fixed"),
      (e.style.left = "-10000px"),
      (e.style.top = "0px"),
      (e.style.border = "0"),
      (e.width = A.width.toString()),
      (e.height = A.height.toString()),
      (e.scrolling = "no"),
      e.setAttribute(t0, "true"),
      t.body.appendChild(e),
      e
    );
  },
  op = function (t) {
    return new Promise(function (A) {
      if (t.complete) {
        A();
        return;
      }
      if (!t.src) {
        A();
        return;
      }
      (t.onload = A), (t.onerror = A);
    });
  },
  cp = function (t) {
    return Promise.all([].slice.call(t.images, 0).map(op));
  },
  up = function (t) {
    return new Promise(function (A, e) {
      var r = t.contentWindow;
      if (!r) return e("No window assigned for iframe");
      var n = r.document;
      r.onload = t.onload = function () {
        r.onload = t.onload = null;
        var i = setInterval(function () {
          n.body.childNodes.length > 0 &&
            n.readyState === "complete" &&
            (clearInterval(i), A(t));
        }, 50);
      };
    });
  },
  lp = ["all", "d", "content"],
  Vc = function (t, A) {
    for (var e = t.length - 1; e >= 0; e--) {
      var r = t.item(e);
      lp.indexOf(r) === -1 && A.style.setProperty(r, t.getPropertyValue(r));
    }
    return A;
  },
  fp = function (t) {
    var A = "";
    return (
      t &&
        ((A += "<!DOCTYPE "),
        t.name && (A += t.name),
        t.internalSubset && (A += t.internalSubset),
        t.publicId && (A += '"' + t.publicId + '"'),
        t.systemId && (A += '"' + t.systemId + '"'),
        (A += ">")),
      A
    );
  },
  hp = function (t, A, e) {
    t &&
      t.defaultView &&
      (A !== t.defaultView.pageXOffset || e !== t.defaultView.pageYOffset) &&
      t.defaultView.scrollTo(A, e);
  },
  Bp = function (t) {
    var A = t[0],
      e = t[1],
      r = t[2];
    (A.scrollLeft = e), (A.scrollTop = r);
  },
  gp = ":before",
  dp = ":after",
  Lu = "___html2canvas___pseudoelement_before",
  Eu = "___html2canvas___pseudoelement_after",
  Sf = `{
    content: "" !important;
    display: none !important;
}`,
  pp = function (t) {
    wp(
      t,
      "." +
        Lu +
        gp +
        Sf +
        `
         .` +
        Eu +
        dp +
        Sf,
    );
  },
  wp = function (t, A) {
    var e = t.ownerDocument;
    if (e) {
      var r = e.createElement("style");
      (r.textContent = A), t.appendChild(r);
    }
  },
  r0 = (function () {
    function t() {}
    return (
      (t.getOrigin = function (A) {
        var e = t._link;
        return e
          ? ((e.href = A), (e.href = e.href), e.protocol + e.hostname + e.port)
          : "about:blank";
      }),
      (t.isSameOrigin = function (A) {
        return t.getOrigin(A) === t._origin;
      }),
      (t.setContext = function (A) {
        (t._link = A.document.createElement("a")),
          (t._origin = t.getOrigin(A.location.href));
      }),
      (t._origin = "about:blank"),
      t
    );
  })(),
  vp = (function () {
    function t(A, e) {
      (this.context = A), (this._options = e), (this._cache = {});
    }
    return (
      (t.prototype.addImage = function (A) {
        var e = Promise.resolve();
        return (
          this.has(A) ||
            ((Wc(A) || Fp(A)) &&
              (this._cache[A] = this.loadImage(A)).catch(function () {})),
          e
        );
      }),
      (t.prototype.match = function (A) {
        return this._cache[A];
      }),
      (t.prototype.loadImage = function (A) {
        return dt(this, void 0, void 0, function () {
          var e,
            r,
            n,
            i,
            s = this;
          return ht(this, function (c) {
            switch (c.label) {
              case 0:
                return (
                  (e = r0.isSameOrigin(A)),
                  (r =
                    !qc(A) &&
                    this._options.useCORS === !0 &&
                    nt.SUPPORT_CORS_IMAGES &&
                    !e),
                  (n =
                    !qc(A) &&
                    !e &&
                    !Wc(A) &&
                    typeof this._options.proxy == "string" &&
                    nt.SUPPORT_CORS_XHR &&
                    !r),
                  !e &&
                  this._options.allowTaint === !1 &&
                  !qc(A) &&
                  !Wc(A) &&
                  !n &&
                  !r
                    ? [2]
                    : ((i = A), n ? [4, this.proxy(i)] : [3, 2])
                );
              case 1:
                (i = c.sent()), (c.label = 2);
              case 2:
                return (
                  this.context.logger.debug(
                    "Added image " + A.substring(0, 256),
                  ),
                  [
                    4,
                    new Promise(function (u, h) {
                      var B = new Image();
                      (B.onload = function () {
                        return u(B);
                      }),
                        (B.onerror = h),
                        (Up(i) || r) && (B.crossOrigin = "anonymous"),
                        (B.src = i),
                        B.complete === !0 &&
                          setTimeout(function () {
                            return u(B);
                          }, 500),
                        s._options.imageTimeout > 0 &&
                          setTimeout(function () {
                            return h(
                              "Timed out (" +
                                s._options.imageTimeout +
                                "ms) loading image",
                            );
                          }, s._options.imageTimeout);
                    }),
                  ]
                );
              case 3:
                return [2, c.sent()];
            }
          });
        });
      }),
      (t.prototype.has = function (A) {
        return typeof this._cache[A] < "u";
      }),
      (t.prototype.keys = function () {
        return Promise.resolve(Object.keys(this._cache));
      }),
      (t.prototype.proxy = function (A) {
        var e = this,
          r = this._options.proxy;
        if (!r) throw new Error("No proxy defined");
        var n = A.substring(0, 256);
        return new Promise(function (i, s) {
          var c = nt.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
            u = new XMLHttpRequest();
          (u.onload = function () {
            if (u.status === 200)
              if (c === "text") i(u.response);
              else {
                var p = new FileReader();
                p.addEventListener(
                  "load",
                  function () {
                    return i(p.result);
                  },
                  !1,
                ),
                  p.addEventListener(
                    "error",
                    function (w) {
                      return s(w);
                    },
                    !1,
                  ),
                  p.readAsDataURL(u.response);
              }
            else
              s(
                "Failed to proxy resource " +
                  n +
                  " with status code " +
                  u.status,
              );
          }),
            (u.onerror = s);
          var h = r.indexOf("?") > -1 ? "&" : "?";
          if (
            (u.open(
              "GET",
              "" +
                r +
                h +
                "url=" +
                encodeURIComponent(A) +
                "&responseType=" +
                c,
            ),
            c !== "text" && u instanceof XMLHttpRequest && (u.responseType = c),
            e._options.imageTimeout)
          ) {
            var B = e._options.imageTimeout;
            (u.timeout = B),
              (u.ontimeout = function () {
                return s("Timed out (" + B + "ms) proxying " + n);
              });
          }
          u.send();
        });
      }),
      t
    );
  })(),
  mp = /^data:image\/svg\+xml/i,
  Cp = /^data:image\/.*;base64,/i,
  Qp = /^data:image\/.*/i,
  Fp = function (t) {
    return nt.SUPPORT_SVG_DRAWING || !yp(t);
  },
  qc = function (t) {
    return Qp.test(t);
  },
  Up = function (t) {
    return Cp.test(t);
  },
  Wc = function (t) {
    return t.substr(0, 4) === "blob";
  },
  yp = function (t) {
    return t.substr(-3).toLowerCase() === "svg" || mp.test(t);
  },
  SA = (function () {
    function t(A, e) {
      (this.type = 0), (this.x = A), (this.y = e);
    }
    return (
      (t.prototype.add = function (A, e) {
        return new t(this.x + A, this.y + e);
      }),
      t
    );
  })(),
  mi = function (t, A, e) {
    return new SA(t.x + (A.x - t.x) * e, t.y + (A.y - t.y) * e);
  },
  Ws = (function () {
    function t(A, e, r, n) {
      (this.type = 1),
        (this.start = A),
        (this.startControl = e),
        (this.endControl = r),
        (this.end = n);
    }
    return (
      (t.prototype.subdivide = function (A, e) {
        var r = mi(this.start, this.startControl, A),
          n = mi(this.startControl, this.endControl, A),
          i = mi(this.endControl, this.end, A),
          s = mi(r, n, A),
          c = mi(n, i, A),
          u = mi(s, c, A);
        return e ? new t(this.start, r, s, u) : new t(u, c, i, this.end);
      }),
      (t.prototype.add = function (A, e) {
        return new t(
          this.start.add(A, e),
          this.startControl.add(A, e),
          this.endControl.add(A, e),
          this.end.add(A, e),
        );
      }),
      (t.prototype.reverse = function () {
        return new t(this.end, this.endControl, this.startControl, this.start);
      }),
      t
    );
  })(),
  kt = function (t) {
    return t.type === 1;
  },
  bp = (function () {
    function t(A) {
      var e = A.styles,
        r = A.bounds,
        n = Qa(e.borderTopLeftRadius, r.width, r.height),
        i = n[0],
        s = n[1],
        c = Qa(e.borderTopRightRadius, r.width, r.height),
        u = c[0],
        h = c[1],
        B = Qa(e.borderBottomRightRadius, r.width, r.height),
        p = B[0],
        w = B[1],
        g = Qa(e.borderBottomLeftRadius, r.width, r.height),
        L = g[0],
        y = g[1],
        N = [];
      N.push((i + u) / r.width),
        N.push((L + p) / r.width),
        N.push((s + y) / r.height),
        N.push((h + w) / r.height);
      var F = Math.max.apply(Math, N);
      F > 1 &&
        ((i /= F),
        (s /= F),
        (u /= F),
        (h /= F),
        (p /= F),
        (w /= F),
        (L /= F),
        (y /= F));
      var I = r.width - u,
        G = r.height - w,
        Y = r.width - p,
        Z = r.height - y,
        z = e.borderTopWidth,
        W = e.borderRightWidth,
        T = e.borderBottomWidth,
        AA = e.borderLeftWidth,
        uA = be(e.paddingTop, A.bounds.width),
        S = be(e.paddingRight, A.bounds.width),
        x = be(e.paddingBottom, A.bounds.width),
        K = be(e.paddingLeft, A.bounds.width);
      (this.topLeftBorderDoubleOuterBox =
        i > 0 || s > 0
          ? Ie(
              r.left + AA / 3,
              r.top + z / 3,
              i - AA / 3,
              s - z / 3,
              he.TOP_LEFT,
            )
          : new SA(r.left + AA / 3, r.top + z / 3)),
        (this.topRightBorderDoubleOuterBox =
          i > 0 || s > 0
            ? Ie(r.left + I, r.top + z / 3, u - W / 3, h - z / 3, he.TOP_RIGHT)
            : new SA(r.left + r.width - W / 3, r.top + z / 3)),
        (this.bottomRightBorderDoubleOuterBox =
          p > 0 || w > 0
            ? Ie(r.left + Y, r.top + G, p - W / 3, w - T / 3, he.BOTTOM_RIGHT)
            : new SA(r.left + r.width - W / 3, r.top + r.height - T / 3)),
        (this.bottomLeftBorderDoubleOuterBox =
          L > 0 || y > 0
            ? Ie(
                r.left + AA / 3,
                r.top + Z,
                L - AA / 3,
                y - T / 3,
                he.BOTTOM_LEFT,
              )
            : new SA(r.left + AA / 3, r.top + r.height - T / 3)),
        (this.topLeftBorderDoubleInnerBox =
          i > 0 || s > 0
            ? Ie(
                r.left + (AA * 2) / 3,
                r.top + (z * 2) / 3,
                i - (AA * 2) / 3,
                s - (z * 2) / 3,
                he.TOP_LEFT,
              )
            : new SA(r.left + (AA * 2) / 3, r.top + (z * 2) / 3)),
        (this.topRightBorderDoubleInnerBox =
          i > 0 || s > 0
            ? Ie(
                r.left + I,
                r.top + (z * 2) / 3,
                u - (W * 2) / 3,
                h - (z * 2) / 3,
                he.TOP_RIGHT,
              )
            : new SA(r.left + r.width - (W * 2) / 3, r.top + (z * 2) / 3)),
        (this.bottomRightBorderDoubleInnerBox =
          p > 0 || w > 0
            ? Ie(
                r.left + Y,
                r.top + G,
                p - (W * 2) / 3,
                w - (T * 2) / 3,
                he.BOTTOM_RIGHT,
              )
            : new SA(
                r.left + r.width - (W * 2) / 3,
                r.top + r.height - (T * 2) / 3,
              )),
        (this.bottomLeftBorderDoubleInnerBox =
          L > 0 || y > 0
            ? Ie(
                r.left + (AA * 2) / 3,
                r.top + Z,
                L - (AA * 2) / 3,
                y - (T * 2) / 3,
                he.BOTTOM_LEFT,
              )
            : new SA(r.left + (AA * 2) / 3, r.top + r.height - (T * 2) / 3)),
        (this.topLeftBorderStroke =
          i > 0 || s > 0
            ? Ie(
                r.left + AA / 2,
                r.top + z / 2,
                i - AA / 2,
                s - z / 2,
                he.TOP_LEFT,
              )
            : new SA(r.left + AA / 2, r.top + z / 2)),
        (this.topRightBorderStroke =
          i > 0 || s > 0
            ? Ie(r.left + I, r.top + z / 2, u - W / 2, h - z / 2, he.TOP_RIGHT)
            : new SA(r.left + r.width - W / 2, r.top + z / 2)),
        (this.bottomRightBorderStroke =
          p > 0 || w > 0
            ? Ie(r.left + Y, r.top + G, p - W / 2, w - T / 2, he.BOTTOM_RIGHT)
            : new SA(r.left + r.width - W / 2, r.top + r.height - T / 2)),
        (this.bottomLeftBorderStroke =
          L > 0 || y > 0
            ? Ie(
                r.left + AA / 2,
                r.top + Z,
                L - AA / 2,
                y - T / 2,
                he.BOTTOM_LEFT,
              )
            : new SA(r.left + AA / 2, r.top + r.height - T / 2)),
        (this.topLeftBorderBox =
          i > 0 || s > 0
            ? Ie(r.left, r.top, i, s, he.TOP_LEFT)
            : new SA(r.left, r.top)),
        (this.topRightBorderBox =
          u > 0 || h > 0
            ? Ie(r.left + I, r.top, u, h, he.TOP_RIGHT)
            : new SA(r.left + r.width, r.top)),
        (this.bottomRightBorderBox =
          p > 0 || w > 0
            ? Ie(r.left + Y, r.top + G, p, w, he.BOTTOM_RIGHT)
            : new SA(r.left + r.width, r.top + r.height)),
        (this.bottomLeftBorderBox =
          L > 0 || y > 0
            ? Ie(r.left, r.top + Z, L, y, he.BOTTOM_LEFT)
            : new SA(r.left, r.top + r.height)),
        (this.topLeftPaddingBox =
          i > 0 || s > 0
            ? Ie(
                r.left + AA,
                r.top + z,
                Math.max(0, i - AA),
                Math.max(0, s - z),
                he.TOP_LEFT,
              )
            : new SA(r.left + AA, r.top + z)),
        (this.topRightPaddingBox =
          u > 0 || h > 0
            ? Ie(
                r.left + Math.min(I, r.width - W),
                r.top + z,
                I > r.width + W ? 0 : Math.max(0, u - W),
                Math.max(0, h - z),
                he.TOP_RIGHT,
              )
            : new SA(r.left + r.width - W, r.top + z)),
        (this.bottomRightPaddingBox =
          p > 0 || w > 0
            ? Ie(
                r.left + Math.min(Y, r.width - AA),
                r.top + Math.min(G, r.height - T),
                Math.max(0, p - W),
                Math.max(0, w - T),
                he.BOTTOM_RIGHT,
              )
            : new SA(r.left + r.width - W, r.top + r.height - T)),
        (this.bottomLeftPaddingBox =
          L > 0 || y > 0
            ? Ie(
                r.left + AA,
                r.top + Math.min(Z, r.height - T),
                Math.max(0, L - AA),
                Math.max(0, y - T),
                he.BOTTOM_LEFT,
              )
            : new SA(r.left + AA, r.top + r.height - T)),
        (this.topLeftContentBox =
          i > 0 || s > 0
            ? Ie(
                r.left + AA + K,
                r.top + z + uA,
                Math.max(0, i - (AA + K)),
                Math.max(0, s - (z + uA)),
                he.TOP_LEFT,
              )
            : new SA(r.left + AA + K, r.top + z + uA)),
        (this.topRightContentBox =
          u > 0 || h > 0
            ? Ie(
                r.left + Math.min(I, r.width + AA + K),
                r.top + z + uA,
                I > r.width + AA + K ? 0 : u - AA + K,
                h - (z + uA),
                he.TOP_RIGHT,
              )
            : new SA(r.left + r.width - (W + S), r.top + z + uA)),
        (this.bottomRightContentBox =
          p > 0 || w > 0
            ? Ie(
                r.left + Math.min(Y, r.width - (AA + K)),
                r.top + Math.min(G, r.height + z + uA),
                Math.max(0, p - (W + S)),
                w - (T + x),
                he.BOTTOM_RIGHT,
              )
            : new SA(r.left + r.width - (W + S), r.top + r.height - (T + x))),
        (this.bottomLeftContentBox =
          L > 0 || y > 0
            ? Ie(
                r.left + AA + K,
                r.top + Z,
                Math.max(0, L - (AA + K)),
                y - (T + x),
                he.BOTTOM_LEFT,
              )
            : new SA(r.left + AA + K, r.top + r.height - (T + x)));
    }
    return t;
  })(),
  he;
(function (t) {
  (t[(t.TOP_LEFT = 0)] = "TOP_LEFT"),
    (t[(t.TOP_RIGHT = 1)] = "TOP_RIGHT"),
    (t[(t.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"),
    (t[(t.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
})(he || (he = {}));
var Ie = function (t, A, e, r, n) {
    var i = 4 * ((Math.sqrt(2) - 1) / 3),
      s = e * i,
      c = r * i,
      u = t + e,
      h = A + r;
    switch (n) {
      case he.TOP_LEFT:
        return new Ws(
          new SA(t, h),
          new SA(t, h - c),
          new SA(u - s, A),
          new SA(u, A),
        );
      case he.TOP_RIGHT:
        return new Ws(
          new SA(t, A),
          new SA(t + s, A),
          new SA(u, h - c),
          new SA(u, h),
        );
      case he.BOTTOM_RIGHT:
        return new Ws(
          new SA(u, A),
          new SA(u, A + c),
          new SA(t + s, h),
          new SA(t, h),
        );
      case he.BOTTOM_LEFT:
      default:
        return new Ws(
          new SA(u, h),
          new SA(u - s, h),
          new SA(t, A + c),
          new SA(t, A),
        );
    }
  },
  mo = function (t) {
    return [
      t.topLeftBorderBox,
      t.topRightBorderBox,
      t.bottomRightBorderBox,
      t.bottomLeftBorderBox,
    ];
  },
  Lp = function (t) {
    return [
      t.topLeftContentBox,
      t.topRightContentBox,
      t.bottomRightContentBox,
      t.bottomLeftContentBox,
    ];
  },
  Co = function (t) {
    return [
      t.topLeftPaddingBox,
      t.topRightPaddingBox,
      t.bottomRightPaddingBox,
      t.bottomLeftPaddingBox,
    ];
  },
  Ep = (function () {
    function t(A, e, r) {
      (this.offsetX = A),
        (this.offsetY = e),
        (this.matrix = r),
        (this.type = 0),
        (this.target = 6);
    }
    return t;
  })(),
  Xs = (function () {
    function t(A, e) {
      (this.path = A), (this.target = e), (this.type = 1);
    }
    return t;
  })(),
  Ip = (function () {
    function t(A) {
      (this.opacity = A), (this.type = 2), (this.target = 6);
    }
    return t;
  })(),
  xp = function (t) {
    return t.type === 0;
  },
  n0 = function (t) {
    return t.type === 1;
  },
  Sp = function (t) {
    return t.type === 2;
  },
  Hf = function (t, A) {
    return t.length === A.length
      ? t.some(function (e, r) {
          return e === A[r];
        })
      : !1;
  },
  Hp = function (t, A, e, r, n) {
    return t.map(function (i, s) {
      switch (s) {
        case 0:
          return i.add(A, e);
        case 1:
          return i.add(A + r, e);
        case 2:
          return i.add(A + r, e + n);
        case 3:
          return i.add(A, e + n);
      }
      return i;
    });
  },
  i0 = (function () {
    function t(A) {
      (this.element = A),
        (this.inlineLevel = []),
        (this.nonInlineLevel = []),
        (this.negativeZIndex = []),
        (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
        (this.positiveZIndex = []),
        (this.nonPositionedFloats = []),
        (this.nonPositionedInlineLevel = []);
    }
    return t;
  })(),
  a0 = (function () {
    function t(A, e) {
      if (
        ((this.container = A),
        (this.parent = e),
        (this.effects = []),
        (this.curves = new bp(this.container)),
        this.container.styles.opacity < 1 &&
          this.effects.push(new Ip(this.container.styles.opacity)),
        this.container.styles.transform !== null)
      ) {
        var r =
            this.container.bounds.left +
            this.container.styles.transformOrigin[0].number,
          n =
            this.container.bounds.top +
            this.container.styles.transformOrigin[1].number,
          i = this.container.styles.transform;
        this.effects.push(new Ep(r, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = mo(this.curves),
          c = Co(this.curves);
        Hf(s, c)
          ? this.effects.push(new Xs(s, 6))
          : (this.effects.push(new Xs(s, 2)), this.effects.push(new Xs(c, 4)));
      }
    }
    return (
      (t.prototype.getEffects = function (A) {
        for (
          var e = [2, 3].indexOf(this.container.styles.position) === -1,
            r = this.parent,
            n = this.effects.slice(0);
          r;

        ) {
          var i = r.effects.filter(function (u) {
            return !n0(u);
          });
          if (e || r.container.styles.position !== 0 || !r.parent) {
            if (
              (n.unshift.apply(n, i),
              (e = [2, 3].indexOf(r.container.styles.position) === -1),
              r.container.styles.overflowX !== 0)
            ) {
              var s = mo(r.curves),
                c = Co(r.curves);
              Hf(s, c) || n.unshift(new Xs(c, 6));
            }
          } else n.unshift.apply(n, i);
          r = r.parent;
        }
        return n.filter(function (u) {
          return ze(u.target, A);
        });
      }),
      t
    );
  })(),
  Iu = function (t, A, e, r) {
    t.container.elements.forEach(function (n) {
      var i = ze(n.flags, 4),
        s = ze(n.flags, 2),
        c = new a0(n, t);
      ze(n.styles.display, 2048) && r.push(c);
      var u = ze(n.flags, 8) ? [] : r;
      if (i || s) {
        var h = i || n.styles.isPositioned() ? e : A,
          B = new i0(c);
        if (
          n.styles.isPositioned() ||
          n.styles.opacity < 1 ||
          n.styles.isTransformed()
        ) {
          var p = n.styles.zIndex.order;
          if (p < 0) {
            var w = 0;
            h.negativeZIndex.some(function (L, y) {
              return p > L.element.container.styles.zIndex.order
                ? ((w = y), !1)
                : w > 0;
            }),
              h.negativeZIndex.splice(w, 0, B);
          } else if (p > 0) {
            var g = 0;
            h.positiveZIndex.some(function (L, y) {
              return p >= L.element.container.styles.zIndex.order
                ? ((g = y + 1), !1)
                : g > 0;
            }),
              h.positiveZIndex.splice(g, 0, B);
          } else h.zeroOrAutoZIndexOrTransformedOrOpacity.push(B);
        } else
          n.styles.isFloating()
            ? h.nonPositionedFloats.push(B)
            : h.nonPositionedInlineLevel.push(B);
        Iu(c, B, i ? B : e, u);
      } else
        n.styles.isInlineLevel()
          ? A.inlineLevel.push(c)
          : A.nonInlineLevel.push(c),
          Iu(c, A, e, u);
      ze(n.flags, 8) && s0(n, u);
    });
  },
  s0 = function (t, A) {
    for (
      var e = t instanceof Uu ? t.start : 1,
        r = t instanceof Uu ? t.reversed : !1,
        n = 0;
      n < A.length;
      n++
    ) {
      var i = A[n];
      i.container instanceof jh &&
        typeof i.container.value == "number" &&
        i.container.value !== 0 &&
        (e = i.container.value),
        (i.listValue = Na(e, i.container.styles.listStyleType, !0)),
        (e += r ? -1 : 1);
    }
  },
  Np = function (t) {
    var A = new a0(t, null),
      e = new i0(A),
      r = [];
    return Iu(A, e, e, r), s0(A.container, r), e;
  },
  Nf = function (t, A) {
    switch (A) {
      case 0:
        return Gt(
          t.topLeftBorderBox,
          t.topLeftPaddingBox,
          t.topRightBorderBox,
          t.topRightPaddingBox,
        );
      case 1:
        return Gt(
          t.topRightBorderBox,
          t.topRightPaddingBox,
          t.bottomRightBorderBox,
          t.bottomRightPaddingBox,
        );
      case 2:
        return Gt(
          t.bottomRightBorderBox,
          t.bottomRightPaddingBox,
          t.bottomLeftBorderBox,
          t.bottomLeftPaddingBox,
        );
      case 3:
      default:
        return Gt(
          t.bottomLeftBorderBox,
          t.bottomLeftPaddingBox,
          t.topLeftBorderBox,
          t.topLeftPaddingBox,
        );
    }
  },
  _p = function (t, A) {
    switch (A) {
      case 0:
        return Gt(
          t.topLeftBorderBox,
          t.topLeftBorderDoubleOuterBox,
          t.topRightBorderBox,
          t.topRightBorderDoubleOuterBox,
        );
      case 1:
        return Gt(
          t.topRightBorderBox,
          t.topRightBorderDoubleOuterBox,
          t.bottomRightBorderBox,
          t.bottomRightBorderDoubleOuterBox,
        );
      case 2:
        return Gt(
          t.bottomRightBorderBox,
          t.bottomRightBorderDoubleOuterBox,
          t.bottomLeftBorderBox,
          t.bottomLeftBorderDoubleOuterBox,
        );
      case 3:
      default:
        return Gt(
          t.bottomLeftBorderBox,
          t.bottomLeftBorderDoubleOuterBox,
          t.topLeftBorderBox,
          t.topLeftBorderDoubleOuterBox,
        );
    }
  },
  Dp = function (t, A) {
    switch (A) {
      case 0:
        return Gt(
          t.topLeftBorderDoubleInnerBox,
          t.topLeftPaddingBox,
          t.topRightBorderDoubleInnerBox,
          t.topRightPaddingBox,
        );
      case 1:
        return Gt(
          t.topRightBorderDoubleInnerBox,
          t.topRightPaddingBox,
          t.bottomRightBorderDoubleInnerBox,
          t.bottomRightPaddingBox,
        );
      case 2:
        return Gt(
          t.bottomRightBorderDoubleInnerBox,
          t.bottomRightPaddingBox,
          t.bottomLeftBorderDoubleInnerBox,
          t.bottomLeftPaddingBox,
        );
      case 3:
      default:
        return Gt(
          t.bottomLeftBorderDoubleInnerBox,
          t.bottomLeftPaddingBox,
          t.topLeftBorderDoubleInnerBox,
          t.topLeftPaddingBox,
        );
    }
  },
  Tp = function (t, A) {
    switch (A) {
      case 0:
        return Js(t.topLeftBorderStroke, t.topRightBorderStroke);
      case 1:
        return Js(t.topRightBorderStroke, t.bottomRightBorderStroke);
      case 2:
        return Js(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
      case 3:
      default:
        return Js(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
    }
  },
  Js = function (t, A) {
    var e = [];
    return (
      kt(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t),
      kt(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A),
      e
    );
  },
  Gt = function (t, A, e, r) {
    var n = [];
    return (
      kt(t) ? n.push(t.subdivide(0.5, !1)) : n.push(t),
      kt(e) ? n.push(e.subdivide(0.5, !0)) : n.push(e),
      kt(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r),
      kt(A) ? n.push(A.subdivide(0.5, !1).reverse()) : n.push(A),
      n
    );
  },
  o0 = function (t) {
    var A = t.bounds,
      e = t.styles;
    return A.add(
      e.borderLeftWidth,
      e.borderTopWidth,
      -(e.borderRightWidth + e.borderLeftWidth),
      -(e.borderTopWidth + e.borderBottomWidth),
    );
  },
  Qo = function (t) {
    var A = t.styles,
      e = t.bounds,
      r = be(A.paddingLeft, e.width),
      n = be(A.paddingRight, e.width),
      i = be(A.paddingTop, e.width),
      s = be(A.paddingBottom, e.width);
    return e.add(
      r + A.borderLeftWidth,
      i + A.borderTopWidth,
      -(A.borderRightWidth + A.borderLeftWidth + r + n),
      -(A.borderTopWidth + A.borderBottomWidth + i + s),
    );
  },
  Op = function (t, A) {
    return t === 0 ? A.bounds : t === 2 ? Qo(A) : o0(A);
  },
  Pp = function (t, A) {
    return t === 0 ? A.bounds : t === 2 ? Qo(A) : o0(A);
  },
  Xc = function (t, A, e) {
    var r = Op(yi(t.styles.backgroundOrigin, A), t),
      n = Pp(yi(t.styles.backgroundClip, A), t),
      i = Mp(yi(t.styles.backgroundSize, A), e, r),
      s = i[0],
      c = i[1],
      u = Qa(yi(t.styles.backgroundPosition, A), r.width - s, r.height - c),
      h = Kp(yi(t.styles.backgroundRepeat, A), u, i, r, n),
      B = Math.round(r.left + u[0]),
      p = Math.round(r.top + u[1]);
    return [h, B, p, s, c];
  },
  Ci = function (t) {
    return we(t) && t.value === xi.AUTO;
  },
  zs = function (t) {
    return typeof t == "number";
  },
  Mp = function (t, A, e) {
    var r = A[0],
      n = A[1],
      i = A[2],
      s = t[0],
      c = t[1];
    if (!s) return [0, 0];
    if (We(s) && c && We(c)) return [be(s, e.width), be(c, e.height)];
    var u = zs(i);
    if (we(s) && (s.value === xi.CONTAIN || s.value === xi.COVER)) {
      if (zs(i)) {
        var h = e.width / e.height;
        return h < i != (s.value === xi.COVER)
          ? [e.width, e.width / i]
          : [e.height * i, e.height];
      }
      return [e.width, e.height];
    }
    var B = zs(r),
      p = zs(n),
      w = B || p;
    if (Ci(s) && (!c || Ci(c))) {
      if (B && p) return [r, n];
      if (!u && !w) return [e.width, e.height];
      if (w && u) {
        var g = B ? r : n * i,
          L = p ? n : r / i;
        return [g, L];
      }
      var y = B ? r : e.width,
        N = p ? n : e.height;
      return [y, N];
    }
    if (u) {
      var F = 0,
        I = 0;
      return (
        We(s) ? (F = be(s, e.width)) : We(c) && (I = be(c, e.height)),
        Ci(s) ? (F = I * i) : (!c || Ci(c)) && (I = F / i),
        [F, I]
      );
    }
    var G = null,
      Y = null;
    if (
      (We(s) ? (G = be(s, e.width)) : c && We(c) && (Y = be(c, e.height)),
      G !== null && (!c || Ci(c)) && (Y = B && p ? (G / r) * n : e.height),
      Y !== null && Ci(s) && (G = B && p ? (Y / n) * r : e.width),
      G !== null && Y !== null)
    )
      return [G, Y];
    throw new Error("Unable to calculate background-size for element");
  },
  yi = function (t, A) {
    var e = t[A];
    return typeof e > "u" ? t[0] : e;
  },
  Kp = function (t, A, e, r, n) {
    var i = A[0],
      s = A[1],
      c = e[0],
      u = e[1];
    switch (t) {
      case 2:
        return [
          new SA(Math.round(r.left), Math.round(r.top + s)),
          new SA(Math.round(r.left + r.width), Math.round(r.top + s)),
          new SA(Math.round(r.left + r.width), Math.round(u + r.top + s)),
          new SA(Math.round(r.left), Math.round(u + r.top + s)),
        ];
      case 3:
        return [
          new SA(Math.round(r.left + i), Math.round(r.top)),
          new SA(Math.round(r.left + i + c), Math.round(r.top)),
          new SA(Math.round(r.left + i + c), Math.round(r.height + r.top)),
          new SA(Math.round(r.left + i), Math.round(r.height + r.top)),
        ];
      case 1:
        return [
          new SA(Math.round(r.left + i), Math.round(r.top + s)),
          new SA(Math.round(r.left + i + c), Math.round(r.top + s)),
          new SA(Math.round(r.left + i + c), Math.round(r.top + s + u)),
          new SA(Math.round(r.left + i), Math.round(r.top + s + u)),
        ];
      default:
        return [
          new SA(Math.round(n.left), Math.round(n.top)),
          new SA(Math.round(n.left + n.width), Math.round(n.top)),
          new SA(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new SA(Math.round(n.left), Math.round(n.height + n.top)),
        ];
    }
  },
  kp =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  _f = "Hidden Text",
  Rp = (function () {
    function t(A) {
      (this._data = {}), (this._document = A);
    }
    return (
      (t.prototype.parseMetrics = function (A, e) {
        var r = this._document.createElement("div"),
          n = this._document.createElement("img"),
          i = this._document.createElement("span"),
          s = this._document.body;
        (r.style.visibility = "hidden"),
          (r.style.fontFamily = A),
          (r.style.fontSize = e),
          (r.style.margin = "0"),
          (r.style.padding = "0"),
          (r.style.whiteSpace = "nowrap"),
          s.appendChild(r),
          (n.src = kp),
          (n.width = 1),
          (n.height = 1),
          (n.style.margin = "0"),
          (n.style.padding = "0"),
          (n.style.verticalAlign = "baseline"),
          (i.style.fontFamily = A),
          (i.style.fontSize = e),
          (i.style.margin = "0"),
          (i.style.padding = "0"),
          i.appendChild(this._document.createTextNode(_f)),
          r.appendChild(i),
          r.appendChild(n);
        var c = n.offsetTop - i.offsetTop + 2;
        r.removeChild(i),
          r.appendChild(this._document.createTextNode(_f)),
          (r.style.lineHeight = "normal"),
          (n.style.verticalAlign = "super");
        var u = n.offsetTop - r.offsetTop + 2;
        return s.removeChild(r), { baseline: c, middle: u };
      }),
      (t.prototype.getMetrics = function (A, e) {
        var r = A + " " + e;
        return (
          typeof this._data[r] > "u" &&
            (this._data[r] = this.parseMetrics(A, e)),
          this._data[r]
        );
      }),
      t
    );
  })(),
  c0 = (function () {
    function t(A, e) {
      (this.context = A), (this.options = e);
    }
    return t;
  })(),
  Gp = 1e4,
  jp = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this;
      return (
        (n._activeEffects = []),
        (n.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (n.ctx = n.canvas.getContext("2d")),
        r.canvas ||
          ((n.canvas.width = Math.floor(r.width * r.scale)),
          (n.canvas.height = Math.floor(r.height * r.scale)),
          (n.canvas.style.width = r.width + "px"),
          (n.canvas.style.height = r.height + "px")),
        (n.fontMetrics = new Rp(document)),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        (n.ctx.textBaseline = "bottom"),
        (n._activeEffects = []),
        n.context.logger.debug(
          "Canvas renderer initialized (" +
            r.width +
            "x" +
            r.height +
            ") with scale " +
            r.scale,
        ),
        n
      );
    }
    return (
      (A.prototype.applyEffects = function (e) {
        for (var r = this; this._activeEffects.length; ) this.popEffect();
        e.forEach(function (n) {
          return r.applyEffect(n);
        });
      }),
      (A.prototype.applyEffect = function (e) {
        this.ctx.save(),
          Sp(e) && (this.ctx.globalAlpha = e.opacity),
          xp(e) &&
            (this.ctx.translate(e.offsetX, e.offsetY),
            this.ctx.transform(
              e.matrix[0],
              e.matrix[1],
              e.matrix[2],
              e.matrix[3],
              e.matrix[4],
              e.matrix[5],
            ),
            this.ctx.translate(-e.offsetX, -e.offsetY)),
          n0(e) && (this.path(e.path), this.ctx.clip()),
          this._activeEffects.push(e);
      }),
      (A.prototype.popEffect = function () {
        this._activeEffects.pop(), this.ctx.restore();
      }),
      (A.prototype.renderStack = function (e) {
        return dt(this, void 0, void 0, function () {
          var r;
          return ht(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (r = e.element.container.styles),
                  r.isVisible() ? [4, this.renderStackContent(e)] : [3, 2]
                );
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (A.prototype.renderNode = function (e) {
        return dt(this, void 0, void 0, function () {
          return ht(this, function (r) {
            switch (r.label) {
              case 0:
                if (ze(e.container.flags, 16)) debugger;
                return e.container.styles.isVisible()
                  ? [4, this.renderNodeBackgroundAndBorders(e)]
                  : [3, 3];
              case 1:
                return r.sent(), [4, this.renderNodeContent(e)];
              case 2:
                r.sent(), (r.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (A.prototype.renderTextWithLetterSpacing = function (e, r, n) {
        var i = this;
        if (r === 0) this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + n);
        else {
          var s = qu(e.text);
          s.reduce(function (c, u) {
            return (
              i.ctx.fillText(u, c, e.bounds.top + n),
              c + i.ctx.measureText(u).width
            );
          }, e.bounds.left);
        }
      }),
      (A.prototype.createFontStyle = function (e) {
        var r = e.fontVariant
            .filter(function (s) {
              return s === "normal" || s === "small-caps";
            })
            .join(""),
          n = Jp(e.fontFamily).join(", "),
          i = Oa(e.fontSize)
            ? "" + e.fontSize.number + e.fontSize.unit
            : e.fontSize.number + "px";
        return [[e.fontStyle, r, e.fontWeight, i, n].join(" "), n, i];
      }),
      (A.prototype.renderTextNode = function (e, r) {
        return dt(this, void 0, void 0, function () {
          var n,
            i,
            s,
            c,
            u,
            h,
            B,
            p,
            w = this;
          return ht(this, function (g) {
            return (
              (n = this.createFontStyle(r)),
              (i = n[0]),
              (s = n[1]),
              (c = n[2]),
              (this.ctx.font = i),
              (this.ctx.direction = r.direction === 1 ? "rtl" : "ltr"),
              (this.ctx.textAlign = "left"),
              (this.ctx.textBaseline = "alphabetic"),
              (u = this.fontMetrics.getMetrics(s, c)),
              (h = u.baseline),
              (B = u.middle),
              (p = r.paintOrder),
              e.textBounds.forEach(function (L) {
                p.forEach(function (y) {
                  switch (y) {
                    case 0:
                      (w.ctx.fillStyle = At(r.color)),
                        w.renderTextWithLetterSpacing(L, r.letterSpacing, h);
                      var N = r.textShadow;
                      N.length &&
                        L.text.trim().length &&
                        (N.slice(0)
                          .reverse()
                          .forEach(function (F) {
                            (w.ctx.shadowColor = At(F.color)),
                              (w.ctx.shadowOffsetX =
                                F.offsetX.number * w.options.scale),
                              (w.ctx.shadowOffsetY =
                                F.offsetY.number * w.options.scale),
                              (w.ctx.shadowBlur = F.blur.number),
                              w.renderTextWithLetterSpacing(
                                L,
                                r.letterSpacing,
                                h,
                              );
                          }),
                        (w.ctx.shadowColor = ""),
                        (w.ctx.shadowOffsetX = 0),
                        (w.ctx.shadowOffsetY = 0),
                        (w.ctx.shadowBlur = 0)),
                        r.textDecorationLine.length &&
                          ((w.ctx.fillStyle = At(
                            r.textDecorationColor || r.color,
                          )),
                          r.textDecorationLine.forEach(function (F) {
                            switch (F) {
                              case 1:
                                w.ctx.fillRect(
                                  L.bounds.left,
                                  Math.round(L.bounds.top + h),
                                  L.bounds.width,
                                  1,
                                );
                                break;
                              case 2:
                                w.ctx.fillRect(
                                  L.bounds.left,
                                  Math.round(L.bounds.top),
                                  L.bounds.width,
                                  1,
                                );
                                break;
                              case 3:
                                w.ctx.fillRect(
                                  L.bounds.left,
                                  Math.ceil(L.bounds.top + B),
                                  L.bounds.width,
                                  1,
                                );
                                break;
                            }
                          }));
                      break;
                    case 1:
                      r.webkitTextStrokeWidth &&
                        L.text.trim().length &&
                        ((w.ctx.strokeStyle = At(r.webkitTextStrokeColor)),
                        (w.ctx.lineWidth = r.webkitTextStrokeWidth),
                        (w.ctx.lineJoin = window.chrome ? "miter" : "round"),
                        w.ctx.strokeText(
                          L.text,
                          L.bounds.left,
                          L.bounds.top + h,
                        )),
                        (w.ctx.strokeStyle = ""),
                        (w.ctx.lineWidth = 0),
                        (w.ctx.lineJoin = "miter");
                      break;
                  }
                });
              }),
              [2]
            );
          });
        });
      }),
      (A.prototype.renderReplacedElement = function (e, r, n) {
        if (n && e.intrinsicWidth > 0 && e.intrinsicHeight > 0) {
          var i = Qo(e),
            s = Co(r);
          this.path(s),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(
              n,
              0,
              0,
              e.intrinsicWidth,
              e.intrinsicHeight,
              i.left,
              i.top,
              i.width,
              i.height,
            ),
            this.ctx.restore();
        }
      }),
      (A.prototype.renderNodeContent = function (e) {
        return dt(this, void 0, void 0, function () {
          var r,
            n,
            i,
            s,
            c,
            u,
            I,
            I,
            h,
            B,
            p,
            w,
            Y,
            g,
            L,
            Z,
            y,
            N,
            F,
            I,
            G,
            Y,
            Z;
          return ht(this, function (z) {
            switch (z.label) {
              case 0:
                this.applyEffects(e.getEffects(4)),
                  (r = e.container),
                  (n = e.curves),
                  (i = r.styles),
                  (s = 0),
                  (c = r.textNodes),
                  (z.label = 1);
              case 1:
                return s < c.length
                  ? ((u = c[s]), [4, this.renderTextNode(u, i)])
                  : [3, 4];
              case 2:
                z.sent(), (z.label = 3);
              case 3:
                return s++, [3, 1];
              case 4:
                if (!(r instanceof kh)) return [3, 8];
                z.label = 5;
              case 5:
                return (
                  z.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)]
                );
              case 6:
                return (
                  (I = z.sent()), this.renderReplacedElement(r, n, I), [3, 8]
                );
              case 7:
                return (
                  z.sent(),
                  this.context.logger.error("Error loading image " + r.src),
                  [3, 8]
                );
              case 8:
                if (
                  (r instanceof Rh &&
                    this.renderReplacedElement(r, n, r.canvas),
                  !(r instanceof Gh))
                )
                  return [3, 12];
                z.label = 9;
              case 9:
                return (
                  z.trys.push([9, 11, , 12]),
                  [4, this.context.cache.match(r.svg)]
                );
              case 10:
                return (
                  (I = z.sent()), this.renderReplacedElement(r, n, I), [3, 12]
                );
              case 11:
                return (
                  z.sent(),
                  this.context.logger.error(
                    "Error loading svg " + r.svg.substring(0, 255),
                  ),
                  [3, 12]
                );
              case 12:
                return r instanceof Wh && r.tree
                  ? ((h = new A(this.context, {
                      scale: this.options.scale,
                      backgroundColor: r.backgroundColor,
                      x: 0,
                      y: 0,
                      width: r.width,
                      height: r.height,
                    })),
                    [4, h.render(r.tree)])
                  : [3, 14];
              case 13:
                (B = z.sent()),
                  r.width &&
                    r.height &&
                    this.ctx.drawImage(
                      B,
                      0,
                      0,
                      r.width,
                      r.height,
                      r.bounds.left,
                      r.bounds.top,
                      r.bounds.width,
                      r.bounds.height,
                    ),
                  (z.label = 14);
              case 14:
                if (
                  (r instanceof Wu &&
                    ((p = Math.min(r.bounds.width, r.bounds.height)),
                    r.type === go
                      ? r.checked &&
                        (this.ctx.save(),
                        this.path([
                          new SA(
                            r.bounds.left + p * 0.39363,
                            r.bounds.top + p * 0.79,
                          ),
                          new SA(
                            r.bounds.left + p * 0.16,
                            r.bounds.top + p * 0.5549,
                          ),
                          new SA(
                            r.bounds.left + p * 0.27347,
                            r.bounds.top + p * 0.44071,
                          ),
                          new SA(
                            r.bounds.left + p * 0.39694,
                            r.bounds.top + p * 0.5649,
                          ),
                          new SA(
                            r.bounds.left + p * 0.72983,
                            r.bounds.top + p * 0.23,
                          ),
                          new SA(
                            r.bounds.left + p * 0.84,
                            r.bounds.top + p * 0.34085,
                          ),
                          new SA(
                            r.bounds.left + p * 0.39363,
                            r.bounds.top + p * 0.79,
                          ),
                        ]),
                        (this.ctx.fillStyle = At(Cf)),
                        this.ctx.fill(),
                        this.ctx.restore())
                      : r.type === po &&
                        r.checked &&
                        (this.ctx.save(),
                        this.ctx.beginPath(),
                        this.ctx.arc(
                          r.bounds.left + p / 2,
                          r.bounds.top + p / 2,
                          p / 4,
                          0,
                          Math.PI * 2,
                          !0,
                        ),
                        (this.ctx.fillStyle = At(Cf)),
                        this.ctx.fill(),
                        this.ctx.restore())),
                  Vp(r) && r.value.length)
                ) {
                  switch (
                    ((w = this.createFontStyle(i)),
                    (Y = w[0]),
                    (g = w[1]),
                    (L = this.fontMetrics.getMetrics(Y, g).baseline),
                    (this.ctx.font = Y),
                    (this.ctx.fillStyle = At(i.color)),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = Wp(r.styles.textAlign)),
                    (Z = Qo(r)),
                    (y = 0),
                    r.styles.textAlign)
                  ) {
                    case 1:
                      y += Z.width / 2;
                      break;
                    case 2:
                      y += Z.width;
                      break;
                  }
                  (N = Z.add(y, 0, 0, -Z.height / 2 + 1)),
                    this.ctx.save(),
                    this.path([
                      new SA(Z.left, Z.top),
                      new SA(Z.left + Z.width, Z.top),
                      new SA(Z.left + Z.width, Z.top + Z.height),
                      new SA(Z.left, Z.top + Z.height),
                    ]),
                    this.ctx.clip(),
                    this.renderTextWithLetterSpacing(
                      new Ea(r.value, N),
                      i.letterSpacing,
                      L,
                    ),
                    this.ctx.restore(),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = "left");
                }
                if (!ze(r.styles.display, 2048)) return [3, 20];
                if (r.styles.listStyleImage === null) return [3, 19];
                if (((F = r.styles.listStyleImage), F.type !== 0))
                  return [3, 18];
                (I = void 0), (G = F.url), (z.label = 15);
              case 15:
                return (
                  z.trys.push([15, 17, , 18]), [4, this.context.cache.match(G)]
                );
              case 16:
                return (
                  (I = z.sent()),
                  this.ctx.drawImage(
                    I,
                    r.bounds.left - (I.width + 10),
                    r.bounds.top,
                  ),
                  [3, 18]
                );
              case 17:
                return (
                  z.sent(),
                  this.context.logger.error(
                    "Error loading list-style-image " + G,
                  ),
                  [3, 18]
                );
              case 18:
                return [3, 20];
              case 19:
                e.listValue &&
                  r.styles.listStyleType !== -1 &&
                  ((Y = this.createFontStyle(i)[0]),
                  (this.ctx.font = Y),
                  (this.ctx.fillStyle = At(i.color)),
                  (this.ctx.textBaseline = "middle"),
                  (this.ctx.textAlign = "right"),
                  (Z = new jr(
                    r.bounds.left,
                    r.bounds.top + be(r.styles.paddingTop, r.bounds.width),
                    r.bounds.width,
                    rf(i.lineHeight, i.fontSize.number) / 2 + 1,
                  )),
                  this.renderTextWithLetterSpacing(
                    new Ea(e.listValue, Z),
                    i.letterSpacing,
                    rf(i.lineHeight, i.fontSize.number) / 2 + 2,
                  ),
                  (this.ctx.textBaseline = "bottom"),
                  (this.ctx.textAlign = "left")),
                  (z.label = 20);
              case 20:
                return [2];
            }
          });
        });
      }),
      (A.prototype.renderStackContent = function (e) {
        return dt(this, void 0, void 0, function () {
          var r, n, F, i, s, F, c, u, F, h, B, F, p, w, F, g, L, F, y, N, F;
          return ht(this, function (I) {
            switch (I.label) {
              case 0:
                if (ze(e.element.container.flags, 16)) debugger;
                return [4, this.renderNodeBackgroundAndBorders(e.element)];
              case 1:
                I.sent(), (r = 0), (n = e.negativeZIndex), (I.label = 2);
              case 2:
                return r < n.length
                  ? ((F = n[r]), [4, this.renderStack(F)])
                  : [3, 5];
              case 3:
                I.sent(), (I.label = 4);
              case 4:
                return r++, [3, 2];
              case 5:
                return [4, this.renderNodeContent(e.element)];
              case 6:
                I.sent(), (i = 0), (s = e.nonInlineLevel), (I.label = 7);
              case 7:
                return i < s.length
                  ? ((F = s[i]), [4, this.renderNode(F)])
                  : [3, 10];
              case 8:
                I.sent(), (I.label = 9);
              case 9:
                return i++, [3, 7];
              case 10:
                (c = 0), (u = e.nonPositionedFloats), (I.label = 11);
              case 11:
                return c < u.length
                  ? ((F = u[c]), [4, this.renderStack(F)])
                  : [3, 14];
              case 12:
                I.sent(), (I.label = 13);
              case 13:
                return c++, [3, 11];
              case 14:
                (h = 0), (B = e.nonPositionedInlineLevel), (I.label = 15);
              case 15:
                return h < B.length
                  ? ((F = B[h]), [4, this.renderStack(F)])
                  : [3, 18];
              case 16:
                I.sent(), (I.label = 17);
              case 17:
                return h++, [3, 15];
              case 18:
                (p = 0), (w = e.inlineLevel), (I.label = 19);
              case 19:
                return p < w.length
                  ? ((F = w[p]), [4, this.renderNode(F)])
                  : [3, 22];
              case 20:
                I.sent(), (I.label = 21);
              case 21:
                return p++, [3, 19];
              case 22:
                (g = 0),
                  (L = e.zeroOrAutoZIndexOrTransformedOrOpacity),
                  (I.label = 23);
              case 23:
                return g < L.length
                  ? ((F = L[g]), [4, this.renderStack(F)])
                  : [3, 26];
              case 24:
                I.sent(), (I.label = 25);
              case 25:
                return g++, [3, 23];
              case 26:
                (y = 0), (N = e.positiveZIndex), (I.label = 27);
              case 27:
                return y < N.length
                  ? ((F = N[y]), [4, this.renderStack(F)])
                  : [3, 30];
              case 28:
                I.sent(), (I.label = 29);
              case 29:
                return y++, [3, 27];
              case 30:
                return [2];
            }
          });
        });
      }),
      (A.prototype.mask = function (e) {
        this.ctx.beginPath(),
          this.ctx.moveTo(0, 0),
          this.ctx.lineTo(this.canvas.width, 0),
          this.ctx.lineTo(this.canvas.width, this.canvas.height),
          this.ctx.lineTo(0, this.canvas.height),
          this.ctx.lineTo(0, 0),
          this.formatPath(e.slice(0).reverse()),
          this.ctx.closePath();
      }),
      (A.prototype.path = function (e) {
        this.ctx.beginPath(), this.formatPath(e), this.ctx.closePath();
      }),
      (A.prototype.formatPath = function (e) {
        var r = this;
        e.forEach(function (n, i) {
          var s = kt(n) ? n.start : n;
          i === 0 ? r.ctx.moveTo(s.x, s.y) : r.ctx.lineTo(s.x, s.y),
            kt(n) &&
              r.ctx.bezierCurveTo(
                n.startControl.x,
                n.startControl.y,
                n.endControl.x,
                n.endControl.y,
                n.end.x,
                n.end.y,
              );
        });
      }),
      (A.prototype.renderRepeat = function (e, r, n, i) {
        this.path(e),
          (this.ctx.fillStyle = r),
          this.ctx.translate(n, i),
          this.ctx.fill(),
          this.ctx.translate(-n, -i);
      }),
      (A.prototype.resizeImage = function (e, r, n) {
        var i;
        if (e.width === r && e.height === n) return e;
        var s =
            (i = this.canvas.ownerDocument) !== null && i !== void 0
              ? i
              : document,
          c = s.createElement("canvas");
        (c.width = Math.max(1, r)), (c.height = Math.max(1, n));
        var u = c.getContext("2d");
        return u.drawImage(e, 0, 0, e.width, e.height, 0, 0, r, n), c;
      }),
      (A.prototype.renderBackgroundImage = function (e) {
        return dt(this, void 0, void 0, function () {
          var r, n, i, s, c, u;
          return ht(this, function (h) {
            switch (h.label) {
              case 0:
                (r = e.styles.backgroundImage.length - 1),
                  (n = function (B) {
                    var p,
                      w,
                      g,
                      uA,
                      nA,
                      cA,
                      K,
                      P,
                      T,
                      L,
                      uA,
                      nA,
                      cA,
                      K,
                      P,
                      y,
                      N,
                      F,
                      I,
                      G,
                      Y,
                      Z,
                      z,
                      W,
                      T,
                      AA,
                      uA,
                      S,
                      x,
                      K,
                      P,
                      sA,
                      nA,
                      cA,
                      eA,
                      hA,
                      fA,
                      UA,
                      Q,
                      _,
                      O,
                      R;
                    return ht(this, function (X) {
                      switch (X.label) {
                        case 0:
                          if (B.type !== 0) return [3, 5];
                          (p = void 0), (w = B.url), (X.label = 1);
                        case 1:
                          return (
                            X.trys.push([1, 3, , 4]),
                            [4, i.context.cache.match(w)]
                          );
                        case 2:
                          return (p = X.sent()), [3, 4];
                        case 3:
                          return (
                            X.sent(),
                            i.context.logger.error(
                              "Error loading background-image " + w,
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            p &&
                              ((g = Xc(e, r, [
                                p.width,
                                p.height,
                                p.width / p.height,
                              ])),
                              (uA = g[0]),
                              (nA = g[1]),
                              (cA = g[2]),
                              (K = g[3]),
                              (P = g[4]),
                              (T = i.ctx.createPattern(
                                i.resizeImage(p, K, P),
                                "repeat",
                              )),
                              i.renderRepeat(uA, T, nA, cA)),
                            [3, 6]
                          );
                        case 5:
                          xg(B)
                            ? ((L = Xc(e, r, [null, null, null])),
                              (uA = L[0]),
                              (nA = L[1]),
                              (cA = L[2]),
                              (K = L[3]),
                              (P = L[4]),
                              (y = yg(B.angle, K, P)),
                              (N = y[0]),
                              (F = y[1]),
                              (I = y[2]),
                              (G = y[3]),
                              (Y = y[4]),
                              (Z = document.createElement("canvas")),
                              (Z.width = K),
                              (Z.height = P),
                              (z = Z.getContext("2d")),
                              (W = z.createLinearGradient(F, G, I, Y)),
                              ef(B.stops, N).forEach(function (iA) {
                                return W.addColorStop(iA.stop, At(iA.color));
                              }),
                              (z.fillStyle = W),
                              z.fillRect(0, 0, K, P),
                              K > 0 &&
                                P > 0 &&
                                ((T = i.ctx.createPattern(Z, "repeat")),
                                i.renderRepeat(uA, T, nA, cA)))
                            : Sg(B) &&
                              ((AA = Xc(e, r, [null, null, null])),
                              (uA = AA[0]),
                              (S = AA[1]),
                              (x = AA[2]),
                              (K = AA[3]),
                              (P = AA[4]),
                              (sA =
                                B.position.length === 0 ? [Gu] : B.position),
                              (nA = be(sA[0], K)),
                              (cA = be(sA[sA.length - 1], P)),
                              (eA = bg(B, nA, cA, K, P)),
                              (hA = eA[0]),
                              (fA = eA[1]),
                              hA > 0 &&
                                fA > 0 &&
                                ((UA = i.ctx.createRadialGradient(
                                  S + nA,
                                  x + cA,
                                  0,
                                  S + nA,
                                  x + cA,
                                  hA,
                                )),
                                ef(B.stops, hA * 2).forEach(function (iA) {
                                  return UA.addColorStop(iA.stop, At(iA.color));
                                }),
                                i.path(uA),
                                (i.ctx.fillStyle = UA),
                                hA !== fA
                                  ? ((Q = e.bounds.left + 0.5 * e.bounds.width),
                                    (_ = e.bounds.top + 0.5 * e.bounds.height),
                                    (O = fA / hA),
                                    (R = 1 / O),
                                    i.ctx.save(),
                                    i.ctx.translate(Q, _),
                                    i.ctx.transform(1, 0, 0, O, 0, 0),
                                    i.ctx.translate(-Q, -_),
                                    i.ctx.fillRect(
                                      S,
                                      R * (x - _) + _,
                                      K,
                                      P * R,
                                    ),
                                    i.ctx.restore())
                                  : i.ctx.fill())),
                            (X.label = 6);
                        case 6:
                          return r--, [2];
                      }
                    });
                  }),
                  (i = this),
                  (s = 0),
                  (c = e.styles.backgroundImage.slice(0).reverse()),
                  (h.label = 1);
              case 1:
                return s < c.length ? ((u = c[s]), [5, n(u)]) : [3, 4];
              case 2:
                h.sent(), (h.label = 3);
              case 3:
                return s++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (A.prototype.renderSolidBorder = function (e, r, n) {
        return dt(this, void 0, void 0, function () {
          return ht(this, function (i) {
            return (
              this.path(Nf(n, r)),
              (this.ctx.fillStyle = At(e)),
              this.ctx.fill(),
              [2]
            );
          });
        });
      }),
      (A.prototype.renderDoubleBorder = function (e, r, n, i) {
        return dt(this, void 0, void 0, function () {
          var s, c;
          return ht(this, function (u) {
            switch (u.label) {
              case 0:
                return r < 3 ? [4, this.renderSolidBorder(e, n, i)] : [3, 2];
              case 1:
                return u.sent(), [2];
              case 2:
                return (
                  (s = _p(i, n)),
                  this.path(s),
                  (this.ctx.fillStyle = At(e)),
                  this.ctx.fill(),
                  (c = Dp(i, n)),
                  this.path(c),
                  this.ctx.fill(),
                  [2]
                );
            }
          });
        });
      }),
      (A.prototype.renderNodeBackgroundAndBorders = function (e) {
        return dt(this, void 0, void 0, function () {
          var r,
            n,
            i,
            s,
            c,
            u,
            h,
            B,
            p = this;
          return ht(this, function (w) {
            switch (w.label) {
              case 0:
                return (
                  this.applyEffects(e.getEffects(2)),
                  (r = e.container.styles),
                  (n = !wn(r.backgroundColor) || r.backgroundImage.length),
                  (i = [
                    {
                      style: r.borderTopStyle,
                      color: r.borderTopColor,
                      width: r.borderTopWidth,
                    },
                    {
                      style: r.borderRightStyle,
                      color: r.borderRightColor,
                      width: r.borderRightWidth,
                    },
                    {
                      style: r.borderBottomStyle,
                      color: r.borderBottomColor,
                      width: r.borderBottomWidth,
                    },
                    {
                      style: r.borderLeftStyle,
                      color: r.borderLeftColor,
                      width: r.borderLeftWidth,
                    },
                  ]),
                  (s = qp(yi(r.backgroundClip, 0), e.curves)),
                  n || r.boxShadow.length
                    ? (this.ctx.save(),
                      this.path(s),
                      this.ctx.clip(),
                      wn(r.backgroundColor) ||
                        ((this.ctx.fillStyle = At(r.backgroundColor)),
                        this.ctx.fill()),
                      [4, this.renderBackgroundImage(e.container)])
                    : [3, 2]
                );
              case 1:
                w.sent(),
                  this.ctx.restore(),
                  r.boxShadow
                    .slice(0)
                    .reverse()
                    .forEach(function (g) {
                      p.ctx.save();
                      var L = mo(e.curves),
                        y = g.inset ? 0 : Gp,
                        N = Hp(
                          L,
                          -y + (g.inset ? 1 : -1) * g.spread.number,
                          (g.inset ? 1 : -1) * g.spread.number,
                          g.spread.number * (g.inset ? -2 : 2),
                          g.spread.number * (g.inset ? -2 : 2),
                        );
                      g.inset
                        ? (p.path(L), p.ctx.clip(), p.mask(N))
                        : (p.mask(L), p.ctx.clip(), p.path(N)),
                        (p.ctx.shadowOffsetX = g.offsetX.number + y),
                        (p.ctx.shadowOffsetY = g.offsetY.number),
                        (p.ctx.shadowColor = At(g.color)),
                        (p.ctx.shadowBlur = g.blur.number),
                        (p.ctx.fillStyle = g.inset
                          ? At(g.color)
                          : "rgba(0,0,0,1)"),
                        p.ctx.fill(),
                        p.ctx.restore();
                    }),
                  (w.label = 2);
              case 2:
                (c = 0), (u = 0), (h = i), (w.label = 3);
              case 3:
                return u < h.length
                  ? ((B = h[u]),
                    B.style !== 0 && !wn(B.color) && B.width > 0
                      ? B.style !== 2
                        ? [3, 5]
                        : [
                            4,
                            this.renderDashedDottedBorder(
                              B.color,
                              B.width,
                              c,
                              e.curves,
                              2,
                            ),
                          ]
                      : [3, 11])
                  : [3, 13];
              case 4:
                return w.sent(), [3, 11];
              case 5:
                return B.style !== 3
                  ? [3, 7]
                  : [
                      4,
                      this.renderDashedDottedBorder(
                        B.color,
                        B.width,
                        c,
                        e.curves,
                        3,
                      ),
                    ];
              case 6:
                return w.sent(), [3, 11];
              case 7:
                return B.style !== 4
                  ? [3, 9]
                  : [4, this.renderDoubleBorder(B.color, B.width, c, e.curves)];
              case 8:
                return w.sent(), [3, 11];
              case 9:
                return [4, this.renderSolidBorder(B.color, c, e.curves)];
              case 10:
                w.sent(), (w.label = 11);
              case 11:
                c++, (w.label = 12);
              case 12:
                return u++, [3, 3];
              case 13:
                return [2];
            }
          });
        });
      }),
      (A.prototype.renderDashedDottedBorder = function (e, r, n, i, s) {
        return dt(this, void 0, void 0, function () {
          var c, u, h, B, p, w, g, L, y, N, F, I, G, Y, Z, z, Z, z;
          return ht(this, function (W) {
            return (
              this.ctx.save(),
              (c = Tp(i, n)),
              (u = Nf(i, n)),
              s === 2 && (this.path(u), this.ctx.clip()),
              kt(u[0])
                ? ((h = u[0].start.x), (B = u[0].start.y))
                : ((h = u[0].x), (B = u[0].y)),
              kt(u[1])
                ? ((p = u[1].end.x), (w = u[1].end.y))
                : ((p = u[1].x), (w = u[1].y)),
              n === 0 || n === 2
                ? (g = Math.abs(h - p))
                : (g = Math.abs(B - w)),
              this.ctx.beginPath(),
              s === 3 ? this.formatPath(c) : this.formatPath(u.slice(0, 2)),
              (L = r < 3 ? r * 3 : r * 2),
              (y = r < 3 ? r * 2 : r),
              s === 3 && ((L = r), (y = r)),
              (N = !0),
              g <= L * 2
                ? (N = !1)
                : g <= L * 2 + y
                  ? ((F = g / (2 * L + y)), (L *= F), (y *= F))
                  : ((I = Math.floor((g + y) / (L + y))),
                    (G = (g - I * L) / (I - 1)),
                    (Y = (g - (I + 1) * L) / I),
                    (y = Y <= 0 || Math.abs(y - G) < Math.abs(y - Y) ? G : Y)),
              N &&
                (s === 3
                  ? this.ctx.setLineDash([0, L + y])
                  : this.ctx.setLineDash([L, y])),
              s === 3
                ? ((this.ctx.lineCap = "round"), (this.ctx.lineWidth = r))
                : (this.ctx.lineWidth = r * 2 + 1.1),
              (this.ctx.strokeStyle = At(e)),
              this.ctx.stroke(),
              this.ctx.setLineDash([]),
              s === 2 &&
                (kt(u[0]) &&
                  ((Z = u[3]),
                  (z = u[0]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new SA(Z.end.x, Z.end.y),
                    new SA(z.start.x, z.start.y),
                  ]),
                  this.ctx.stroke()),
                kt(u[1]) &&
                  ((Z = u[1]),
                  (z = u[2]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new SA(Z.end.x, Z.end.y),
                    new SA(z.start.x, z.start.y),
                  ]),
                  this.ctx.stroke())),
              this.ctx.restore(),
              [2]
            );
          });
        });
      }),
      (A.prototype.render = function (e) {
        return dt(this, void 0, void 0, function () {
          var r;
          return ht(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = At(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      this.options.x,
                      this.options.y,
                      this.options.width,
                      this.options.height,
                    )),
                  (r = Np(e)),
                  [4, this.renderStack(r)]
                );
              case 1:
                return n.sent(), this.applyEffects([]), [2, this.canvas];
            }
          });
        });
      }),
      A
    );
  })(c0),
  Vp = function (t) {
    return t instanceof qh || t instanceof Vh
      ? !0
      : t instanceof Wu && t.type !== po && t.type !== go;
  },
  qp = function (t, A) {
    switch (t) {
      case 0:
        return mo(A);
      case 2:
        return Lp(A);
      case 1:
      default:
        return Co(A);
    }
  },
  Wp = function (t) {
    switch (t) {
      case 1:
        return "center";
      case 2:
        return "right";
      case 0:
      default:
        return "left";
    }
  },
  Xp = ["-apple-system", "system-ui"],
  Jp = function (t) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
      ? t.filter(function (A) {
          return Xp.indexOf(A) === -1;
        })
      : t;
  },
  zp = (function (t) {
    or(A, t);
    function A(e, r) {
      var n = t.call(this, e, r) || this;
      return (
        (n.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (n.ctx = n.canvas.getContext("2d")),
        (n.options = r),
        (n.canvas.width = Math.floor(r.width * r.scale)),
        (n.canvas.height = Math.floor(r.height * r.scale)),
        (n.canvas.style.width = r.width + "px"),
        (n.canvas.style.height = r.height + "px"),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        n.context.logger.debug(
          "EXPERIMENTAL ForeignObject renderer initialized (" +
            r.width +
            "x" +
            r.height +
            " at " +
            r.x +
            "," +
            r.y +
            ") with scale " +
            r.scale,
        ),
        n
      );
    }
    return (
      (A.prototype.render = function (e) {
        return dt(this, void 0, void 0, function () {
          var r, n;
          return ht(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (r = Fu(
                    this.options.width * this.options.scale,
                    this.options.height * this.options.scale,
                    this.options.scale,
                    this.options.scale,
                    e,
                  )),
                  [4, Yp(r)]
                );
              case 1:
                return (
                  (n = i.sent()),
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = At(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      0,
                      0,
                      this.options.width * this.options.scale,
                      this.options.height * this.options.scale,
                    )),
                  this.ctx.drawImage(
                    n,
                    -this.options.x * this.options.scale,
                    -this.options.y * this.options.scale,
                  ),
                  [2, this.canvas]
                );
            }
          });
        });
      }),
      A
    );
  })(c0),
  Yp = function (t) {
    return new Promise(function (A, e) {
      var r = new Image();
      (r.onload = function () {
        A(r);
      }),
        (r.onerror = e),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(t)));
    });
  },
  Zp = (function () {
    function t(A) {
      var e = A.id,
        r = A.enabled;
      (this.id = e), (this.enabled = r), (this.start = Date.now());
    }
    return (
      (t.prototype.debug = function () {
        for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.debug == "function"
            ? console.debug.apply(
                console,
                Es([this.id, this.getTime() + "ms"], A),
              )
            : this.info.apply(this, A));
      }),
      (t.prototype.getTime = function () {
        return Date.now() - this.start;
      }),
      (t.prototype.info = function () {
        for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
        this.enabled &&
          typeof window < "u" &&
          window.console &&
          typeof console.info == "function" &&
          console.info.apply(console, Es([this.id, this.getTime() + "ms"], A));
      }),
      (t.prototype.warn = function () {
        for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.warn == "function"
            ? console.warn.apply(
                console,
                Es([this.id, this.getTime() + "ms"], A),
              )
            : this.info.apply(this, A));
      }),
      (t.prototype.error = function () {
        for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.error == "function"
            ? console.error.apply(
                console,
                Es([this.id, this.getTime() + "ms"], A),
              )
            : this.info.apply(this, A));
      }),
      (t.instances = {}),
      t
    );
  })(),
  $p = (function () {
    function t(A, e) {
      var r;
      (this.windowBounds = e),
        (this.instanceName = "#" + t.instanceCount++),
        (this.logger = new Zp({ id: this.instanceName, enabled: A.logging })),
        (this.cache =
          (r = A.cache) !== null && r !== void 0 ? r : new vp(this, A));
    }
    return (t.instanceCount = 1), t;
  })(),
  u0 = function (t, A) {
    return A === void 0 && (A = {}), A5(t, A);
  };
typeof window < "u" && r0.setContext(window);
var A5 = function (t, A) {
    return dt(void 0, void 0, void 0, function () {
      var e,
        r,
        n,
        i,
        s,
        c,
        u,
        h,
        B,
        p,
        w,
        g,
        L,
        y,
        N,
        F,
        I,
        G,
        Y,
        Z,
        W,
        z,
        W,
        T,
        AA,
        uA,
        S,
        x,
        K,
        P,
        sA,
        nA,
        cA,
        eA,
        hA,
        fA,
        UA,
        Q,
        _,
        O;
      return ht(this, function (R) {
        switch (R.label) {
          case 0:
            if (!t || typeof t != "object")
              return [
                2,
                Promise.reject("Invalid element provided as first argument"),
              ];
            if (((e = t.ownerDocument), !e))
              throw new Error("Element is not attached to a Document");
            if (((r = e.defaultView), !r))
              throw new Error("Document is not attached to a Window");
            return (
              (n = {
                allowTaint:
                  (T = A.allowTaint) !== null && T !== void 0 ? T : !1,
                imageTimeout:
                  (AA = A.imageTimeout) !== null && AA !== void 0 ? AA : 15e3,
                proxy: A.proxy,
                useCORS: (uA = A.useCORS) !== null && uA !== void 0 ? uA : !1,
              }),
              (i = ou(
                {
                  logging: (S = A.logging) !== null && S !== void 0 ? S : !0,
                  cache: A.cache,
                },
                n,
              )),
              (s = {
                windowWidth:
                  (x = A.windowWidth) !== null && x !== void 0
                    ? x
                    : r.innerWidth,
                windowHeight:
                  (K = A.windowHeight) !== null && K !== void 0
                    ? K
                    : r.innerHeight,
                scrollX:
                  (P = A.scrollX) !== null && P !== void 0 ? P : r.pageXOffset,
                scrollY:
                  (sA = A.scrollY) !== null && sA !== void 0
                    ? sA
                    : r.pageYOffset,
              }),
              (c = new jr(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight)),
              (u = new $p(i, c)),
              (h =
                (nA = A.foreignObjectRendering) !== null && nA !== void 0
                  ? nA
                  : !1),
              (B = {
                allowTaint:
                  (cA = A.allowTaint) !== null && cA !== void 0 ? cA : !1,
                onclone: A.onclone,
                ignoreElements: A.ignoreElements,
                inlineImages: h,
                copyStyles: h,
              }),
              u.logger.debug(
                "Starting document clone with size " +
                  c.width +
                  "x" +
                  c.height +
                  " scrolled to " +
                  -c.left +
                  "," +
                  -c.top,
              ),
              (p = new xf(u, t, B)),
              (w = p.clonedReferenceElement),
              w
                ? [4, p.toIFrame(e, c)]
                : [2, Promise.reject("Unable to find element in cloned iframe")]
            );
          case 1:
            return (
              (g = R.sent()),
              (L = Xu(w) || tp(w) ? HB(w.ownerDocument) : yo(u, w)),
              (y = L.width),
              (N = L.height),
              (F = L.left),
              (I = L.top),
              (G = e5(u, w, A.backgroundColor)),
              (Y = {
                canvas: A.canvas,
                backgroundColor: G,
                scale:
                  (hA =
                    (eA = A.scale) !== null && eA !== void 0
                      ? eA
                      : r.devicePixelRatio) !== null && hA !== void 0
                    ? hA
                    : 1,
                x: ((fA = A.x) !== null && fA !== void 0 ? fA : 0) + F,
                y: ((UA = A.y) !== null && UA !== void 0 ? UA : 0) + I,
                width:
                  (Q = A.width) !== null && Q !== void 0 ? Q : Math.ceil(y),
                height:
                  (_ = A.height) !== null && _ !== void 0 ? _ : Math.ceil(N),
              }),
              h
                ? (u.logger.debug(
                    "Document cloned, using foreign object rendering",
                  ),
                  (W = new zp(u, Y)),
                  [4, W.render(w)])
                : [3, 3]
            );
          case 2:
            return (Z = R.sent()), [3, 5];
          case 3:
            return (
              u.logger.debug(
                "Document cloned, element located at " +
                  F +
                  "," +
                  I +
                  " with size " +
                  y +
                  "x" +
                  N +
                  " using computed rendering",
              ),
              u.logger.debug("Starting DOM parsing"),
              (z = Jh(u, w)),
              G === z.styles.backgroundColor &&
                (z.styles.backgroundColor = Gr.TRANSPARENT),
              u.logger.debug(
                "Starting renderer for element at " +
                  Y.x +
                  "," +
                  Y.y +
                  " with size " +
                  Y.width +
                  "x" +
                  Y.height,
              ),
              (W = new jp(u, Y)),
              [4, W.render(z)]
            );
          case 4:
            (Z = R.sent()), (R.label = 5);
          case 5:
            return (
              (!((O = A.removeContainer) !== null && O !== void 0) || O) &&
                (xf.destroy(g) ||
                  u.logger.error(
                    "Cannot detach cloned iframe as it is not in the DOM anymore",
                  )),
              u.logger.debug("Finished rendering"),
              [2, Z]
            );
        }
      });
    });
  },
  e5 = function (t, A, e) {
    var r = A.ownerDocument,
      n = r.documentElement
        ? ba(t, getComputedStyle(r.documentElement).backgroundColor)
        : Gr.TRANSPARENT,
      i = r.body
        ? ba(t, getComputedStyle(r.body).backgroundColor)
        : Gr.TRANSPARENT,
      s =
        typeof e == "string"
          ? ba(t, e)
          : e === null
            ? Gr.TRANSPARENT
            : 4294967295;
    return A === r.documentElement ? (wn(n) ? (wn(i) ? s : i) : n) : s;
  };
const t5 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: u0 }, Symbol.toStringTag, {
    value: "Module",
  }),
);
var pt = Uint8Array,
  wt = Uint16Array,
  _a = Uint32Array,
  Do = new pt([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  To = new pt([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  xu = new pt([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  l0 = function (t, A) {
    for (var e = new wt(31), r = 0; r < 31; ++r) e[r] = A += 1 << t[r - 1];
    for (var n = new _a(e[30]), r = 1; r < 30; ++r)
      for (var i = e[r]; i < e[r + 1]; ++i) n[i] = ((i - e[r]) << 5) | r;
    return [e, n];
  },
  f0 = l0(Do, 2),
  h0 = f0[0],
  Su = f0[1];
(h0[28] = 258), (Su[258] = 28);
var B0 = l0(To, 0),
  r5 = B0[0],
  Df = B0[1],
  Hu = new wt(32768);
for (var Le = 0; Le < 32768; ++Le) {
  var on = ((Le & 43690) >>> 1) | ((Le & 21845) << 1);
  (on = ((on & 52428) >>> 2) | ((on & 13107) << 2)),
    (on = ((on & 61680) >>> 4) | ((on & 3855) << 4)),
    (Hu[Le] = (((on & 65280) >>> 8) | ((on & 255) << 8)) >>> 1);
}
var Fr = function (t, A, e) {
    for (var r = t.length, n = 0, i = new wt(A); n < r; ++n) ++i[t[n] - 1];
    var s = new wt(A);
    for (n = 0; n < A; ++n) s[n] = (s[n - 1] + i[n - 1]) << 1;
    var c;
    if (e) {
      c = new wt(1 << A);
      var u = 15 - A;
      for (n = 0; n < r; ++n)
        if (t[n])
          for (
            var h = (n << 4) | t[n],
              B = A - t[n],
              p = s[t[n] - 1]++ << B,
              w = p | ((1 << B) - 1);
            p <= w;
            ++p
          )
            c[Hu[p] >>> u] = h;
    } else
      for (c = new wt(r), n = 0; n < r; ++n)
        c[n] = Hu[s[t[n] - 1]++] >>> (15 - t[n]);
    return c;
  },
  mn = new pt(288);
for (var Le = 0; Le < 144; ++Le) mn[Le] = 8;
for (var Le = 144; Le < 256; ++Le) mn[Le] = 9;
for (var Le = 256; Le < 280; ++Le) mn[Le] = 7;
for (var Le = 280; Le < 288; ++Le) mn[Le] = 8;
var Da = new pt(32);
for (var Le = 0; Le < 32; ++Le) Da[Le] = 5;
var n5 = Fr(mn, 9, 0),
  i5 = Fr(mn, 9, 1),
  a5 = Fr(Da, 5, 0),
  s5 = Fr(Da, 5, 1),
  Jc = function (t) {
    for (var A = t[0], e = 1; e < t.length; ++e) t[e] > A && (A = t[e]);
    return A;
  },
  ir = function (t, A, e) {
    var r = (A / 8) >> 0;
    return ((t[r] | (t[r + 1] << 8)) >>> (A & 7)) & e;
  },
  zc = function (t, A) {
    var e = (A / 8) >> 0;
    return (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16)) >>> (A & 7);
  },
  Ju = function (t) {
    return ((t / 8) >> 0) + (t & 7 && 1);
  },
  g0 = function (t, A, e) {
    (A == null || A < 0) && (A = 0),
      (e == null || e > t.length) && (e = t.length);
    var r = new (t instanceof wt ? wt : t instanceof _a ? _a : pt)(e - A);
    return r.set(t.subarray(A, e)), r;
  },
  o5 = function (t, A, e) {
    var r = t.length,
      n = !A || e,
      i = !e || e.i;
    e || (e = {}), A || (A = new pt(r * 3));
    var s = function (X) {
        var iA = A.length;
        if (X > iA) {
          var aA = new pt(Math.max(iA * 2, X));
          aA.set(A), (A = aA);
        }
      },
      c = e.f || 0,
      u = e.p || 0,
      h = e.b || 0,
      B = e.l,
      p = e.d,
      w = e.m,
      g = e.n,
      L = r * 8;
    do {
      if (!B) {
        e.f = c = ir(t, u, 1);
        var y = ir(t, u + 1, 3);
        if (((u += 3), y))
          if (y == 1) (B = i5), (p = s5), (w = 9), (g = 5);
          else if (y == 2) {
            var G = ir(t, u, 31) + 257,
              Y = ir(t, u + 10, 15) + 4,
              Z = G + ir(t, u + 5, 31) + 1;
            u += 14;
            for (var z = new pt(Z), W = new pt(19), T = 0; T < Y; ++T)
              W[xu[T]] = ir(t, u + T * 3, 7);
            u += Y * 3;
            var AA = Jc(W),
              uA = (1 << AA) - 1;
            if (!i && u + Z * (AA + 7) > L) break;
            for (var S = Fr(W, AA, 1), T = 0; T < Z; ) {
              var x = S[ir(t, u, uA)];
              u += x & 15;
              var N = x >>> 4;
              if (N < 16) z[T++] = N;
              else {
                var K = 0,
                  P = 0;
                for (
                  N == 16
                    ? ((P = 3 + ir(t, u, 3)), (u += 2), (K = z[T - 1]))
                    : N == 17
                      ? ((P = 3 + ir(t, u, 7)), (u += 3))
                      : N == 18 && ((P = 11 + ir(t, u, 127)), (u += 7));
                  P--;

                )
                  z[T++] = K;
              }
            }
            var sA = z.subarray(0, G),
              nA = z.subarray(G);
            (w = Jc(sA)), (g = Jc(nA)), (B = Fr(sA, w, 1)), (p = Fr(nA, g, 1));
          } else throw "invalid block type";
        else {
          var N = Ju(u) + 4,
            F = t[N - 4] | (t[N - 3] << 8),
            I = N + F;
          if (I > r) {
            if (i) throw "unexpected EOF";
            break;
          }
          n && s(h + F),
            A.set(t.subarray(N, I), h),
            (e.b = h += F),
            (e.p = u = I * 8);
          continue;
        }
        if (u > L) throw "unexpected EOF";
      }
      n && s(h + 131072);
      for (
        var cA = (1 << w) - 1, eA = (1 << g) - 1, hA = w + g + 18;
        i || u + hA < L;

      ) {
        var K = B[zc(t, u) & cA],
          fA = K >>> 4;
        if (((u += K & 15), u > L)) throw "unexpected EOF";
        if (!K) throw "invalid length/literal";
        if (fA < 256) A[h++] = fA;
        else if (fA == 256) {
          B = null;
          break;
        } else {
          var UA = fA - 254;
          if (fA > 264) {
            var T = fA - 257,
              Q = Do[T];
            (UA = ir(t, u, (1 << Q) - 1) + h0[T]), (u += Q);
          }
          var _ = p[zc(t, u) & eA],
            O = _ >>> 4;
          if (!_) throw "invalid distance";
          u += _ & 15;
          var nA = r5[O];
          if (O > 3) {
            var Q = To[O];
            (nA += zc(t, u) & ((1 << Q) - 1)), (u += Q);
          }
          if (u > L) throw "unexpected EOF";
          n && s(h + 131072);
          for (var R = h + UA; h < R; h += 4)
            (A[h] = A[h - nA]),
              (A[h + 1] = A[h + 1 - nA]),
              (A[h + 2] = A[h + 2 - nA]),
              (A[h + 3] = A[h + 3 - nA]);
          h = R;
        }
      }
      (e.l = B),
        (e.p = u),
        (e.b = h),
        B && ((c = 1), (e.m = w), (e.d = p), (e.n = g));
    } while (!c);
    return h == A.length ? A : g0(A, 0, h);
  },
  kr = function (t, A, e) {
    e <<= A & 7;
    var r = (A / 8) >> 0;
    (t[r] |= e), (t[r + 1] |= e >>> 8);
  },
  da = function (t, A, e) {
    e <<= A & 7;
    var r = (A / 8) >> 0;
    (t[r] |= e), (t[r + 1] |= e >>> 8), (t[r + 2] |= e >>> 16);
  },
  Yc = function (t, A) {
    for (var e = [], r = 0; r < t.length; ++r)
      t[r] && e.push({ s: r, f: t[r] });
    var n = e.length,
      i = e.slice();
    if (!n) return [new pt(0), 0];
    if (n == 1) {
      var s = new pt(e[0].s + 1);
      return (s[e[0].s] = 1), [s, 1];
    }
    e.sort(function (Z, z) {
      return Z.f - z.f;
    }),
      e.push({ s: -1, f: 25001 });
    var c = e[0],
      u = e[1],
      h = 0,
      B = 1,
      p = 2;
    for (e[0] = { s: -1, f: c.f + u.f, l: c, r: u }; B != n - 1; )
      (c = e[e[h].f < e[p].f ? h++ : p++]),
        (u = e[h != B && e[h].f < e[p].f ? h++ : p++]),
        (e[B++] = { s: -1, f: c.f + u.f, l: c, r: u });
    for (var w = i[0].s, r = 1; r < n; ++r) i[r].s > w && (w = i[r].s);
    var g = new wt(w + 1),
      L = Nu(e[B - 1], g, 0);
    if (L > A) {
      var r = 0,
        y = 0,
        N = L - A,
        F = 1 << N;
      for (
        i.sort(function (z, W) {
          return g[W.s] - g[z.s] || z.f - W.f;
        });
        r < n;
        ++r
      ) {
        var I = i[r].s;
        if (g[I] > A) (y += F - (1 << (L - g[I]))), (g[I] = A);
        else break;
      }
      for (y >>>= N; y > 0; ) {
        var G = i[r].s;
        g[G] < A ? (y -= 1 << (A - g[G]++ - 1)) : ++r;
      }
      for (; r >= 0 && y; --r) {
        var Y = i[r].s;
        g[Y] == A && (--g[Y], ++y);
      }
      L = A;
    }
    return [new pt(g), L];
  },
  Nu = function (t, A, e) {
    return t.s == -1
      ? Math.max(Nu(t.l, A, e + 1), Nu(t.r, A, e + 1))
      : (A[t.s] = e);
  },
  Tf = function (t) {
    for (var A = t.length; A && !t[--A]; );
    for (
      var e = new wt(++A),
        r = 0,
        n = t[0],
        i = 1,
        s = function (u) {
          e[r++] = u;
        },
        c = 1;
      c <= A;
      ++c
    )
      if (t[c] == n && c != A) ++i;
      else {
        if (!n && i > 2) {
          for (; i > 138; i -= 138) s(32754);
          i > 2 &&
            (s(i > 10 ? ((i - 11) << 5) | 28690 : ((i - 3) << 5) | 12305),
            (i = 0));
        } else if (i > 3) {
          for (s(n), --i; i > 6; i -= 6) s(8304);
          i > 2 && (s(((i - 3) << 5) | 8208), (i = 0));
        }
        for (; i--; ) s(n);
        (i = 1), (n = t[c]);
      }
    return [e.subarray(0, r), A];
  },
  pa = function (t, A) {
    for (var e = 0, r = 0; r < A.length; ++r) e += t[r] * A[r];
    return e;
  },
  io = function (t, A, e) {
    var r = e.length,
      n = Ju(A + 2);
    (t[n] = r & 255),
      (t[n + 1] = r >>> 8),
      (t[n + 2] = t[n] ^ 255),
      (t[n + 3] = t[n + 1] ^ 255);
    for (var i = 0; i < r; ++i) t[n + i + 4] = e[i];
    return (n + 4 + r) * 8;
  },
  Of = function (t, A, e, r, n, i, s, c, u, h, B) {
    kr(A, B++, e), ++n[256];
    for (
      var p = Yc(n, 15),
        w = p[0],
        g = p[1],
        L = Yc(i, 15),
        y = L[0],
        N = L[1],
        F = Tf(w),
        I = F[0],
        G = F[1],
        Y = Tf(y),
        Z = Y[0],
        z = Y[1],
        W = new wt(19),
        T = 0;
      T < I.length;
      ++T
    )
      W[I[T] & 31]++;
    for (var T = 0; T < Z.length; ++T) W[Z[T] & 31]++;
    for (
      var AA = Yc(W, 7), uA = AA[0], S = AA[1], x = 19;
      x > 4 && !uA[xu[x - 1]];
      --x
    );
    var K = (h + 5) << 3,
      P = pa(n, mn) + pa(i, Da) + s,
      sA =
        pa(n, w) +
        pa(i, y) +
        s +
        14 +
        3 * x +
        pa(W, uA) +
        (2 * W[16] + 3 * W[17] + 7 * W[18]);
    if (K <= P && K <= sA) return io(A, B, t.subarray(u, u + h));
    var nA, cA, eA, hA;
    if ((kr(A, B, 1 + (sA < P)), (B += 2), sA < P)) {
      (nA = Fr(w, g, 0)), (cA = w), (eA = Fr(y, N, 0)), (hA = y);
      var fA = Fr(uA, S, 0);
      kr(A, B, G - 257), kr(A, B + 5, z - 1), kr(A, B + 10, x - 4), (B += 14);
      for (var T = 0; T < x; ++T) kr(A, B + 3 * T, uA[xu[T]]);
      B += 3 * x;
      for (var UA = [I, Z], Q = 0; Q < 2; ++Q)
        for (var _ = UA[Q], T = 0; T < _.length; ++T) {
          var O = _[T] & 31;
          kr(A, B, fA[O]),
            (B += uA[O]),
            O > 15 && (kr(A, B, (_[T] >>> 5) & 127), (B += _[T] >>> 12));
        }
    } else (nA = n5), (cA = mn), (eA = a5), (hA = Da);
    for (var T = 0; T < c; ++T)
      if (r[T] > 255) {
        var O = (r[T] >>> 18) & 31;
        da(A, B, nA[O + 257]),
          (B += cA[O + 257]),
          O > 7 && (kr(A, B, (r[T] >>> 23) & 31), (B += Do[O]));
        var R = r[T] & 31;
        da(A, B, eA[R]),
          (B += hA[R]),
          R > 3 && (da(A, B, (r[T] >>> 5) & 8191), (B += To[R]));
      } else da(A, B, nA[r[T]]), (B += cA[r[T]]);
    return da(A, B, nA[256]), B + cA[256];
  },
  c5 = new _a([
    65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632,
  ]),
  u5 = new pt(0),
  l5 = function (t, A, e, r, n, i) {
    var s = t.length,
      c = new pt(r + s + 5 * (1 + Math.floor(s / 7e3)) + n),
      u = c.subarray(r, c.length - n),
      h = 0;
    if (!A || s < 8)
      for (var B = 0; B <= s; B += 65535) {
        var p = B + 65535;
        p < s
          ? (h = io(u, h, t.subarray(B, p)))
          : ((u[B] = i), (h = io(u, h, t.subarray(B, s))));
      }
    else {
      for (
        var w = c5[A - 1],
          g = w >>> 13,
          L = w & 8191,
          y = (1 << e) - 1,
          N = new wt(32768),
          F = new wt(y + 1),
          I = Math.ceil(e / 3),
          G = 2 * I,
          Y = function (GA) {
            return (t[GA] ^ (t[GA + 1] << I) ^ (t[GA + 2] << G)) & y;
          },
          Z = new _a(25e3),
          z = new wt(288),
          W = new wt(32),
          T = 0,
          AA = 0,
          B = 0,
          uA = 0,
          S = 0,
          x = 0;
        B < s;
        ++B
      ) {
        var K = Y(B),
          P = B & 32767,
          sA = F[K];
        if (((N[P] = sA), (F[K] = P), S <= B)) {
          var nA = s - B;
          if ((T > 7e3 || uA > 24576) && nA > 423) {
            (h = Of(t, u, 0, Z, z, W, AA, uA, x, B - x, h)),
              (uA = T = AA = 0),
              (x = B);
            for (var cA = 0; cA < 286; ++cA) z[cA] = 0;
            for (var cA = 0; cA < 30; ++cA) W[cA] = 0;
          }
          var eA = 2,
            hA = 0,
            fA = L,
            UA = (P - sA) & 32767;
          if (nA > 2 && K == Y(B - UA))
            for (
              var Q = Math.min(g, nA) - 1,
                _ = Math.min(32767, B),
                O = Math.min(258, nA);
              UA <= _ && --fA && P != sA;

            ) {
              if (t[B + eA] == t[B + eA - UA]) {
                for (var R = 0; R < O && t[B + R] == t[B + R - UA]; ++R);
                if (R > eA) {
                  if (((eA = R), (hA = UA), R > Q)) break;
                  for (
                    var X = Math.min(UA, R - 2), iA = 0, cA = 0;
                    cA < X;
                    ++cA
                  ) {
                    var aA = (B - UA + cA + 32768) & 32767,
                      oA = N[aA],
                      FA = (aA - oA + 32768) & 32767;
                    FA > iA && ((iA = FA), (sA = aA));
                  }
                }
              }
              (P = sA), (sA = N[P]), (UA += (P - sA + 32768) & 32767);
            }
          if (hA) {
            Z[uA++] = 268435456 | (Su[eA] << 18) | Df[hA];
            var QA = Su[eA] & 31,
              HA = Df[hA] & 31;
            (AA += Do[QA] + To[HA]), ++z[257 + QA], ++W[HA], (S = B + eA), ++T;
          } else (Z[uA++] = t[B]), ++z[t[B]];
        }
      }
      (h = Of(t, u, i, Z, z, W, AA, uA, x, B - x, h)), i || (h = io(u, h, u5));
    }
    return g0(c, 0, r + Ju(h) + n);
  },
  f5 = function () {
    var t = 1,
      A = 0;
    return {
      p: function (e) {
        for (var r = t, n = A, i = e.length, s = 0; s != i; ) {
          for (var c = Math.min(s + 5552, i); s < c; ++s) (r += e[s]), (n += r);
          (r %= 65521), (n %= 65521);
        }
        (t = r), (A = n);
      },
      d: function () {
        return (
          (((t >>> 8) << 16) | ((A & 255) << 8) | (A >>> 8)) +
          ((t & 255) << 23) * 2
        );
      },
    };
  },
  h5 = function (t, A, e, r, n) {
    return l5(
      t,
      A.level == null ? 6 : A.level,
      A.mem == null
        ? Math.ceil(Math.max(8, Math.min(13, Math.log(t.length))) * 1.5)
        : 12 + A.mem,
      e,
      r,
      !n,
    );
  },
  B5 = function (t, A, e) {
    for (; e; ++A) (t[A] = e), (e >>>= 8);
  },
  g5 = function (t, A) {
    var e = A.level,
      r = e == 0 ? 0 : e < 6 ? 1 : e == 9 ? 3 : 2;
    (t[0] = 120), (t[1] = (r << 6) | (r ? 32 - 2 * r : 1));
  },
  d5 = function (t) {
    if ((t[0] & 15) != 8 || t[0] >>> 4 > 7 || ((t[0] << 8) | t[1]) % 31)
      throw "invalid zlib data";
    if (t[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
  };
function _u(t, A) {
  A === void 0 && (A = {});
  var e = f5();
  e.p(t);
  var r = h5(t, A, 2, 4);
  return g5(r, A), B5(r, r.length - 4, e.d()), r;
}
function p5(t, A) {
  return o5((d5(t), t.subarray(2, -4)), A);
}
var VA = (function () {
  return typeof window < "u"
    ? window
    : typeof global < "u"
      ? global
      : typeof self < "u"
        ? self
        : this;
})();
function Zc() {
  VA.console &&
    typeof VA.console.log == "function" &&
    VA.console.log.apply(VA.console, arguments);
}
var Ce = {
  log: Zc,
  warn: function (t) {
    VA.console &&
      (typeof VA.console.warn == "function"
        ? VA.console.warn.apply(VA.console, arguments)
        : Zc.call(null, arguments));
  },
  error: function (t) {
    VA.console &&
      (typeof VA.console.error == "function"
        ? VA.console.error.apply(VA.console, arguments)
        : Zc(t));
  },
};
function $c(t, A, e) {
  var r = new XMLHttpRequest();
  r.open("GET", t),
    (r.responseType = "blob"),
    (r.onload = function () {
      _n(r.response, A, e);
    }),
    (r.onerror = function () {
      Ce.error("could not download file");
    }),
    r.send();
}
function Pf(t) {
  var A = new XMLHttpRequest();
  A.open("HEAD", t, !1);
  try {
    A.send();
  } catch {}
  return A.status >= 200 && A.status <= 299;
}
function Ys(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    var A = document.createEvent("MouseEvents");
    A.initMouseEvent(
      "click",
      !0,
      !0,
      window,
      0,
      0,
      0,
      80,
      20,
      !1,
      !1,
      !1,
      !1,
      0,
      null,
    ),
      t.dispatchEvent(A);
  }
}
var xa,
  Du,
  _n =
    VA.saveAs ||
    ((typeof window > "u" ? "undefined" : Qe(window)) !== "object" ||
    window !== VA
      ? function () {}
      : typeof HTMLAnchorElement < "u" &&
          "download" in HTMLAnchorElement.prototype
        ? function (t, A, e) {
            var r = VA.URL || VA.webkitURL,
              n = document.createElement("a");
            (A = A || t.name || "download"),
              (n.download = A),
              (n.rel = "noopener"),
              typeof t == "string"
                ? ((n.href = t),
                  n.origin !== location.origin
                    ? Pf(n.href)
                      ? $c(t, A, e)
                      : Ys(n, (n.target = "_blank"))
                    : Ys(n))
                : ((n.href = r.createObjectURL(t)),
                  setTimeout(function () {
                    r.revokeObjectURL(n.href);
                  }, 4e4),
                  setTimeout(function () {
                    Ys(n);
                  }, 0));
          }
        : "msSaveOrOpenBlob" in navigator
          ? function (t, A, e) {
              if (((A = A || t.name || "download"), typeof t == "string"))
                if (Pf(t)) $c(t, A, e);
                else {
                  var r = document.createElement("a");
                  (r.href = t),
                    (r.target = "_blank"),
                    setTimeout(function () {
                      Ys(r);
                    });
                }
              else
                navigator.msSaveOrOpenBlob(
                  (function (n, i) {
                    return (
                      i === void 0
                        ? (i = { autoBom: !1 })
                        : Qe(i) !== "object" &&
                          (Ce.warn(
                            "Deprecated: Expected third argument to be a object",
                          ),
                          (i = { autoBom: !i })),
                      i.autoBom &&
                      /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                        n.type,
                      )
                        ? new Blob([String.fromCharCode(65279), n], {
                            type: n.type,
                          })
                        : n
                    );
                  })(t, e),
                  A,
                );
            }
          : function (t, A, e, r) {
              if (
                ((r = r || open("", "_blank")) &&
                  (r.document.title = r.document.body.innerText =
                    "downloading..."),
                typeof t == "string")
              )
                return $c(t, A, e);
              var n = t.type === "application/octet-stream",
                i = /constructor/i.test(VA.HTMLElement) || VA.safari,
                s = /CriOS\/[\d]+/.test(navigator.userAgent);
              if (
                (s || (n && i)) &&
                (typeof FileReader > "u" ? "undefined" : Qe(FileReader)) ===
                  "object"
              ) {
                var c = new FileReader();
                (c.onloadend = function () {
                  var B = c.result;
                  (B = s
                    ? B
                    : B.replace(/^data:[^;]*;/, "data:attachment/file;")),
                    r ? (r.location.href = B) : (location = B),
                    (r = null);
                }),
                  c.readAsDataURL(t);
              } else {
                var u = VA.URL || VA.webkitURL,
                  h = u.createObjectURL(t);
                r ? (r.location = h) : (location.href = h),
                  (r = null),
                  setTimeout(function () {
                    u.revokeObjectURL(h);
                  }, 4e4);
              }
            });
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */ function d0(t) {
  var A;
  (t = t || ""),
    (this.ok = !1),
    t.charAt(0) == "#" && (t = t.substr(1, 6)),
    (t =
      {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32",
      }[(t = (t = t.replace(/ /g, "")).toLowerCase())] || t);
  for (
    var e = [
        {
          re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
          example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
          process: function (c) {
            return [parseInt(c[1]), parseInt(c[2]), parseInt(c[3])];
          },
        },
        {
          re: /^(\w{2})(\w{2})(\w{2})$/,
          example: ["#00ff00", "336699"],
          process: function (c) {
            return [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)];
          },
        },
        {
          re: /^(\w{1})(\w{1})(\w{1})$/,
          example: ["#fb0", "f0f"],
          process: function (c) {
            return [
              parseInt(c[1] + c[1], 16),
              parseInt(c[2] + c[2], 16),
              parseInt(c[3] + c[3], 16),
            ];
          },
        },
      ],
      r = 0;
    r < e.length;
    r++
  ) {
    var n = e[r].re,
      i = e[r].process,
      s = n.exec(t);
    s &&
      ((A = i(s)),
      (this.r = A[0]),
      (this.g = A[1]),
      (this.b = A[2]),
      (this.ok = !0));
  }
  (this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
    (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
    (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
    (this.toRGB = function () {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }),
    (this.toHex = function () {
      var c = this.r.toString(16),
        u = this.g.toString(16),
        h = this.b.toString(16);
      return (
        c.length == 1 && (c = "0" + c),
        u.length == 1 && (u = "0" + u),
        h.length == 1 && (h = "0" + h),
        "#" + c + u + h
      );
    });
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */ function Au(t, A) {
  var e = t[0],
    r = t[1],
    n = t[2],
    i = t[3];
  (e = ct(e, r, n, i, A[0], 7, -680876936)),
    (i = ct(i, e, r, n, A[1], 12, -389564586)),
    (n = ct(n, i, e, r, A[2], 17, 606105819)),
    (r = ct(r, n, i, e, A[3], 22, -1044525330)),
    (e = ct(e, r, n, i, A[4], 7, -176418897)),
    (i = ct(i, e, r, n, A[5], 12, 1200080426)),
    (n = ct(n, i, e, r, A[6], 17, -1473231341)),
    (r = ct(r, n, i, e, A[7], 22, -45705983)),
    (e = ct(e, r, n, i, A[8], 7, 1770035416)),
    (i = ct(i, e, r, n, A[9], 12, -1958414417)),
    (n = ct(n, i, e, r, A[10], 17, -42063)),
    (r = ct(r, n, i, e, A[11], 22, -1990404162)),
    (e = ct(e, r, n, i, A[12], 7, 1804603682)),
    (i = ct(i, e, r, n, A[13], 12, -40341101)),
    (n = ct(n, i, e, r, A[14], 17, -1502002290)),
    (e = ut(
      e,
      (r = ct(r, n, i, e, A[15], 22, 1236535329)),
      n,
      i,
      A[1],
      5,
      -165796510,
    )),
    (i = ut(i, e, r, n, A[6], 9, -1069501632)),
    (n = ut(n, i, e, r, A[11], 14, 643717713)),
    (r = ut(r, n, i, e, A[0], 20, -373897302)),
    (e = ut(e, r, n, i, A[5], 5, -701558691)),
    (i = ut(i, e, r, n, A[10], 9, 38016083)),
    (n = ut(n, i, e, r, A[15], 14, -660478335)),
    (r = ut(r, n, i, e, A[4], 20, -405537848)),
    (e = ut(e, r, n, i, A[9], 5, 568446438)),
    (i = ut(i, e, r, n, A[14], 9, -1019803690)),
    (n = ut(n, i, e, r, A[3], 14, -187363961)),
    (r = ut(r, n, i, e, A[8], 20, 1163531501)),
    (e = ut(e, r, n, i, A[13], 5, -1444681467)),
    (i = ut(i, e, r, n, A[2], 9, -51403784)),
    (n = ut(n, i, e, r, A[7], 14, 1735328473)),
    (e = lt(
      e,
      (r = ut(r, n, i, e, A[12], 20, -1926607734)),
      n,
      i,
      A[5],
      4,
      -378558,
    )),
    (i = lt(i, e, r, n, A[8], 11, -2022574463)),
    (n = lt(n, i, e, r, A[11], 16, 1839030562)),
    (r = lt(r, n, i, e, A[14], 23, -35309556)),
    (e = lt(e, r, n, i, A[1], 4, -1530992060)),
    (i = lt(i, e, r, n, A[4], 11, 1272893353)),
    (n = lt(n, i, e, r, A[7], 16, -155497632)),
    (r = lt(r, n, i, e, A[10], 23, -1094730640)),
    (e = lt(e, r, n, i, A[13], 4, 681279174)),
    (i = lt(i, e, r, n, A[0], 11, -358537222)),
    (n = lt(n, i, e, r, A[3], 16, -722521979)),
    (r = lt(r, n, i, e, A[6], 23, 76029189)),
    (e = lt(e, r, n, i, A[9], 4, -640364487)),
    (i = lt(i, e, r, n, A[12], 11, -421815835)),
    (n = lt(n, i, e, r, A[15], 16, 530742520)),
    (e = ft(
      e,
      (r = lt(r, n, i, e, A[2], 23, -995338651)),
      n,
      i,
      A[0],
      6,
      -198630844,
    )),
    (i = ft(i, e, r, n, A[7], 10, 1126891415)),
    (n = ft(n, i, e, r, A[14], 15, -1416354905)),
    (r = ft(r, n, i, e, A[5], 21, -57434055)),
    (e = ft(e, r, n, i, A[12], 6, 1700485571)),
    (i = ft(i, e, r, n, A[3], 10, -1894986606)),
    (n = ft(n, i, e, r, A[10], 15, -1051523)),
    (r = ft(r, n, i, e, A[1], 21, -2054922799)),
    (e = ft(e, r, n, i, A[8], 6, 1873313359)),
    (i = ft(i, e, r, n, A[15], 10, -30611744)),
    (n = ft(n, i, e, r, A[6], 15, -1560198380)),
    (r = ft(r, n, i, e, A[13], 21, 1309151649)),
    (e = ft(e, r, n, i, A[4], 6, -145523070)),
    (i = ft(i, e, r, n, A[11], 10, -1120210379)),
    (n = ft(n, i, e, r, A[2], 15, 718787259)),
    (r = ft(r, n, i, e, A[9], 21, -343485551)),
    (t[0] = dn(e, t[0])),
    (t[1] = dn(r, t[1])),
    (t[2] = dn(n, t[2])),
    (t[3] = dn(i, t[3]));
}
function Oo(t, A, e, r, n, i) {
  return (A = dn(dn(A, t), dn(r, i))), dn((A << n) | (A >>> (32 - n)), e);
}
function ct(t, A, e, r, n, i, s) {
  return Oo((A & e) | (~A & r), t, A, n, i, s);
}
function ut(t, A, e, r, n, i, s) {
  return Oo((A & r) | (e & ~r), t, A, n, i, s);
}
function lt(t, A, e, r, n, i, s) {
  return Oo(A ^ e ^ r, t, A, n, i, s);
}
function ft(t, A, e, r, n, i, s) {
  return Oo(e ^ (A | ~r), t, A, n, i, s);
}
function p0(t) {
  var A,
    e = t.length,
    r = [1732584193, -271733879, -1732584194, 271733878];
  for (A = 64; A <= t.length; A += 64) Au(r, w5(t.substring(A - 64, A)));
  t = t.substring(A - 64);
  var n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (A = 0; A < t.length; A++) n[A >> 2] |= t.charCodeAt(A) << (A % 4 << 3);
  if (((n[A >> 2] |= 128 << (A % 4 << 3)), A > 55))
    for (Au(r, n), A = 0; A < 16; A++) n[A] = 0;
  return (n[14] = 8 * e), Au(r, n), r;
}
function w5(t) {
  var A,
    e = [];
  for (A = 0; A < 64; A += 4)
    e[A >> 2] =
      t.charCodeAt(A) +
      (t.charCodeAt(A + 1) << 8) +
      (t.charCodeAt(A + 2) << 16) +
      (t.charCodeAt(A + 3) << 24);
  return e;
}
(xa = VA.atob.bind(VA)), (Du = VA.btoa.bind(VA));
var Mf = "0123456789abcdef".split("");
function v5(t) {
  for (var A = "", e = 0; e < 4; e++)
    A += Mf[(t >> (8 * e + 4)) & 15] + Mf[(t >> (8 * e)) & 15];
  return A;
}
function m5(t) {
  return String.fromCharCode(
    (255 & t) >> 0,
    (65280 & t) >> 8,
    (16711680 & t) >> 16,
    (4278190080 & t) >> 24,
  );
}
function Tu(t) {
  return p0(t).map(m5).join("");
}
var C5 =
  (function (t) {
    for (var A = 0; A < t.length; A++) t[A] = v5(t[A]);
    return t.join("");
  })(p0("hello")) != "5d41402abc4b2a76b9719d911017c592";
function dn(t, A) {
  if (C5) {
    var e = (65535 & t) + (65535 & A);
    return (((t >> 16) + (A >> 16) + (e >> 16)) << 16) | (65535 & e);
  }
  return (t + A) & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */ function Ou(t, A) {
  var e, r, n, i;
  if (t !== e) {
    for (
      var s =
          ((n = t),
          (i = 1 + ((256 / t.length) >> 0)),
          new Array(i + 1).join(n)),
        c = [],
        u = 0;
      u < 256;
      u++
    )
      c[u] = u;
    var h = 0;
    for (u = 0; u < 256; u++) {
      var B = c[u];
      (h = (h + B + s.charCodeAt(u)) % 256), (c[u] = c[h]), (c[h] = B);
    }
    (e = t), (r = c);
  } else c = r;
  var p = A.length,
    w = 0,
    g = 0,
    L = "";
  for (u = 0; u < p; u++)
    (g = (g + (B = c[(w = (w + 1) % 256)])) % 256),
      (c[w] = c[g]),
      (c[g] = B),
      (s = c[(c[w] + c[g]) % 256]),
      (L += String.fromCharCode(A.charCodeAt(u) ^ s));
  return L;
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */ var Kf = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function bi(t, A, e, r) {
  (this.v = 1), (this.r = 2);
  var n = 192;
  t.forEach(function (c) {
    if (Kf.perm !== void 0) throw new Error("Invalid permission: " + c);
    n += Kf[c];
  }),
    (this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz");
  var i = (A + this.padding).substr(0, 32),
    s = (e + this.padding).substr(0, 32);
  (this.O = this.processOwnerPassword(i, s)),
    (this.P = -(1 + (255 ^ n))),
    (this.encryptionKey = Tu(
      i + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r),
    ).substr(0, 5)),
    (this.U = Ou(this.encryptionKey, this.padding));
}
function Li(t) {
  if (/[^\u0000-\u00ff]/.test(t))
    throw new Error(
      "Invalid PDF Name Object: " + t + ", Only accept ASCII characters.",
    );
  for (var A = "", e = t.length, r = 0; r < e; r++) {
    var n = t.charCodeAt(r);
    n < 33 ||
    n === 35 ||
    n === 37 ||
    n === 40 ||
    n === 41 ||
    n === 47 ||
    n === 60 ||
    n === 62 ||
    n === 91 ||
    n === 93 ||
    n === 123 ||
    n === 125 ||
    n > 126
      ? (A += "#" + ("0" + n.toString(16)).slice(-2))
      : (A += t[r]);
  }
  return A;
}
function kf(t) {
  if (Qe(t) !== "object")
    throw new Error(
      "Invalid Context passed to initialize PubSub (jsPDF-module)",
    );
  var A = {};
  (this.subscribe = function (e, r, n) {
    if (
      ((n = n || !1),
      typeof e != "string" || typeof r != "function" || typeof n != "boolean")
    )
      throw new Error(
        "Invalid arguments passed to PubSub.subscribe (jsPDF-module)",
      );
    A.hasOwnProperty(e) || (A[e] = {});
    var i = Math.random().toString(35);
    return (A[e][i] = [r, !!n]), i;
  }),
    (this.unsubscribe = function (e) {
      for (var r in A)
        if (A[r][e])
          return (
            delete A[r][e], Object.keys(A[r]).length === 0 && delete A[r], !0
          );
      return !1;
    }),
    (this.publish = function (e) {
      if (A.hasOwnProperty(e)) {
        var r = Array.prototype.slice.call(arguments, 1),
          n = [];
        for (var i in A[e]) {
          var s = A[e][i];
          try {
            s[0].apply(t, r);
          } catch (c) {
            VA.console && Ce.error("jsPDF PubSub Error", c.message, c);
          }
          s[1] && n.push(i);
        }
        n.length && n.forEach(this.unsubscribe);
      }
    }),
    (this.getTopics = function () {
      return A;
    });
}
function Fo(t) {
  if (!(this instanceof Fo)) return new Fo(t);
  var A = "opacity,stroke-opacity".split(",");
  for (var e in t) t.hasOwnProperty(e) && A.indexOf(e) >= 0 && (this[e] = t[e]);
  (this.id = ""), (this.objectNumber = -1);
}
function w0(t, A) {
  (this.gState = t),
    (this.matrix = A),
    (this.id = ""),
    (this.objectNumber = -1);
}
function Tn(t, A, e, r, n) {
  if (!(this instanceof Tn)) return new Tn(t, A, e, r, n);
  (this.type = t === "axial" ? 2 : 3),
    (this.coords = A),
    (this.colors = e),
    w0.call(this, r, n);
}
function Ii(t, A, e, r, n) {
  if (!(this instanceof Ii)) return new Ii(t, A, e, r, n);
  (this.boundingBox = t),
    (this.xStep = A),
    (this.yStep = e),
    (this.stream = ""),
    (this.cloneIndex = 0),
    w0.call(this, r, n);
}
function jA(t) {
  var A,
    e = typeof arguments[0] == "string" ? arguments[0] : "p",
    r = arguments[1],
    n = arguments[2],
    i = arguments[3],
    s = [],
    c = 1,
    u = 16,
    h = "S",
    B = null;
  Qe((t = t || {})) === "object" &&
    ((e = t.orientation),
    (r = t.unit || r),
    (n = t.format || n),
    (i = t.compress || t.compressPdf || i),
    (B = t.encryption || null) !== null &&
      ((B.userPassword = B.userPassword || ""),
      (B.ownerPassword = B.ownerPassword || ""),
      (B.userPermissions = B.userPermissions || [])),
    (c = typeof t.userUnit == "number" ? Math.abs(t.userUnit) : 1),
    t.precision !== void 0 && (A = t.precision),
    t.floatPrecision !== void 0 && (u = t.floatPrecision),
    (h = t.defaultPathOperation || "S")),
    (s = t.filters || (i === !0 ? ["FlateEncode"] : s)),
    (r = r || "mm"),
    (e = ("" + (e || "P")).toLowerCase());
  var p = t.putOnlyUsedFonts || !1,
    w = {},
    g = { internal: {}, __private__: {} };
  g.__private__.PubSub = kf;
  var L = "1.3",
    y = (g.__private__.getPdfVersion = function () {
      return L;
    });
  g.__private__.setPdfVersion = function (l) {
    L = l;
  };
  var N = {
    a0: [2383.94, 3370.39],
    a1: [1683.78, 2383.94],
    a2: [1190.55, 1683.78],
    a3: [841.89, 1190.55],
    a4: [595.28, 841.89],
    a5: [419.53, 595.28],
    a6: [297.64, 419.53],
    a7: [209.76, 297.64],
    a8: [147.4, 209.76],
    a9: [104.88, 147.4],
    a10: [73.7, 104.88],
    b0: [2834.65, 4008.19],
    b1: [2004.09, 2834.65],
    b2: [1417.32, 2004.09],
    b3: [1000.63, 1417.32],
    b4: [708.66, 1000.63],
    b5: [498.9, 708.66],
    b6: [354.33, 498.9],
    b7: [249.45, 354.33],
    b8: [175.75, 249.45],
    b9: [124.72, 175.75],
    b10: [87.87, 124.72],
    c0: [2599.37, 3676.54],
    c1: [1836.85, 2599.37],
    c2: [1298.27, 1836.85],
    c3: [918.43, 1298.27],
    c4: [649.13, 918.43],
    c5: [459.21, 649.13],
    c6: [323.15, 459.21],
    c7: [229.61, 323.15],
    c8: [161.57, 229.61],
    c9: [113.39, 161.57],
    c10: [79.37, 113.39],
    dl: [311.81, 623.62],
    letter: [612, 792],
    "government-letter": [576, 756],
    legal: [612, 1008],
    "junior-legal": [576, 360],
    ledger: [1224, 792],
    tabloid: [792, 1224],
    "credit-card": [153, 243],
  };
  g.__private__.getPageFormats = function () {
    return N;
  };
  var F = (g.__private__.getPageFormat = function (l) {
    return N[l];
  });
  n = n || "a4";
  var I = { COMPAT: "compat", ADVANCED: "advanced" },
    G = I.COMPAT;
  function Y() {
    this.saveGraphicsState(),
      M(new RA(xA, 0, 0, -xA, 0, Xr() * xA).toString() + " cm"),
      this.setFontSize(this.getFontSize() / xA),
      (h = "n"),
      (G = I.ADVANCED);
  }
  function Z() {
    this.restoreGraphicsState(), (h = "S"), (G = I.COMPAT);
  }
  var z = (g.__private__.combineFontStyleAndFontWeight = function (l, m) {
    if (
      (l == "bold" && m == "normal") ||
      (l == "bold" && m == 400) ||
      (l == "normal" && m == "italic") ||
      (l == "bold" && m == "italic")
    )
      throw new Error("Invalid Combination of fontweight and fontstyle");
    return (
      m &&
        (l =
          m == 400 || m === "normal"
            ? l === "italic"
              ? "italic"
              : "normal"
            : (m != 700 && m !== "bold") || l !== "normal"
              ? (m == 700 ? "bold" : m) + "" + l
              : "bold"),
      l
    );
  });
  (g.advancedAPI = function (l) {
    var m = G === I.COMPAT;
    return (
      m && Y.call(this),
      typeof l != "function" || (l(this), m && Z.call(this)),
      this
    );
  }),
    (g.compatAPI = function (l) {
      var m = G === I.ADVANCED;
      return (
        m && Z.call(this),
        typeof l != "function" || (l(this), m && Y.call(this)),
        this
      );
    }),
    (g.isAdvancedAPI = function () {
      return G === I.ADVANCED;
    });
  var W,
    T = function (l) {
      if (G !== I.ADVANCED)
        throw new Error(
          l +
            " is only available in 'advanced' API mode. You need to call advancedAPI() first.",
        );
    },
    AA =
      (g.roundToPrecision =
      g.__private__.roundToPrecision =
        function (l, m) {
          var D = A || m;
          if (isNaN(l) || isNaN(D))
            throw new Error(
              "Invalid argument passed to jsPDF.roundToPrecision",
            );
          return l.toFixed(D).replace(/0+$/, "");
        });
  W =
    g.hpf =
    g.__private__.hpf =
      typeof u == "number"
        ? function (l) {
            if (isNaN(l))
              throw new Error("Invalid argument passed to jsPDF.hpf");
            return AA(l, u);
          }
        : u === "smart"
          ? function (l) {
              if (isNaN(l))
                throw new Error("Invalid argument passed to jsPDF.hpf");
              return AA(l, l > -1 && l < 1 ? 16 : 5);
            }
          : function (l) {
              if (isNaN(l))
                throw new Error("Invalid argument passed to jsPDF.hpf");
              return AA(l, 16);
            };
  var uA =
      (g.f2 =
      g.__private__.f2 =
        function (l) {
          if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f2");
          return AA(l, 2);
        }),
    S = (g.__private__.f3 = function (l) {
      if (isNaN(l)) throw new Error("Invalid argument passed to jsPDF.f3");
      return AA(l, 3);
    }),
    x =
      (g.scale =
      g.__private__.scale =
        function (l) {
          if (isNaN(l))
            throw new Error("Invalid argument passed to jsPDF.scale");
          return G === I.COMPAT ? l * xA : G === I.ADVANCED ? l : void 0;
        }),
    K = function (l) {
      return G === I.COMPAT ? Xr() - l : G === I.ADVANCED ? l : void 0;
    },
    P = function (l) {
      return x(K(l));
    };
  g.__private__.setPrecision = g.setPrecision = function (l) {
    typeof parseInt(l, 10) == "number" && (A = parseInt(l, 10));
  };
  var sA,
    nA = "00000000000000000000000000000000",
    cA = (g.__private__.getFileId = function () {
      return nA;
    }),
    eA = (g.__private__.setFileId = function (l) {
      return (
        (nA =
          l !== void 0 && /^[a-fA-F0-9]{32}$/.test(l)
            ? l.toUpperCase()
            : nA
                .split("")
                .map(function () {
                  return "ABCDEF0123456789".charAt(
                    Math.floor(16 * Math.random()),
                  );
                })
                .join("")),
        B !== null &&
          (st = new bi(B.userPermissions, B.userPassword, B.ownerPassword, nA)),
        nA
      );
    });
  (g.setFileId = function (l) {
    return eA(l), this;
  }),
    (g.getFileId = function () {
      return cA();
    });
  var hA = (g.__private__.convertDateToPDFDate = function (l) {
      var m = l.getTimezoneOffset(),
        D = m < 0 ? "+" : "-",
        k = Math.floor(Math.abs(m / 60)),
        $ = Math.abs(m % 60),
        BA = [D, O(k), "'", O($), "'"].join("");
      return [
        "D:",
        l.getFullYear(),
        O(l.getMonth() + 1),
        O(l.getDate()),
        O(l.getHours()),
        O(l.getMinutes()),
        O(l.getSeconds()),
        BA,
      ].join("");
    }),
    fA = (g.__private__.convertPDFDateToDate = function (l) {
      var m = parseInt(l.substr(2, 4), 10),
        D = parseInt(l.substr(6, 2), 10) - 1,
        k = parseInt(l.substr(8, 2), 10),
        $ = parseInt(l.substr(10, 2), 10),
        BA = parseInt(l.substr(12, 2), 10),
        mA = parseInt(l.substr(14, 2), 10);
      return new Date(m, D, k, $, BA, mA, 0);
    }),
    UA = (g.__private__.setCreationDate = function (l) {
      var m;
      if ((l === void 0 && (l = new Date()), l instanceof Date)) m = hA(l);
      else {
        if (
          !/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(
            l,
          )
        )
          throw new Error("Invalid argument passed to jsPDF.setCreationDate");
        m = l;
      }
      return (sA = m);
    }),
    Q = (g.__private__.getCreationDate = function (l) {
      var m = sA;
      return l === "jsDate" && (m = fA(sA)), m;
    });
  (g.setCreationDate = function (l) {
    return UA(l), this;
  }),
    (g.getCreationDate = function (l) {
      return Q(l);
    });
  var _,
    O = (g.__private__.padd2 = function (l) {
      return ("0" + parseInt(l)).slice(-2);
    }),
    R = (g.__private__.padd2Hex = function (l) {
      return ("00" + (l = l.toString())).substr(l.length);
    }),
    X = 0,
    iA = [],
    aA = [],
    oA = 0,
    FA = [],
    QA = [],
    HA = !1,
    DA = aA,
    GA = function () {
      (X = 0),
        (oA = 0),
        (aA = []),
        (iA = []),
        (FA = []),
        (Er = Ge()),
        (Wt = Ge());
    };
  g.__private__.setCustomOutputDestination = function (l) {
    (HA = !0), (DA = l);
  };
  var gA = function (l) {
    HA || (DA = l);
  };
  g.__private__.resetCustomOutputDestination = function () {
    (HA = !1), (DA = aA);
  };
  var M = (g.__private__.out = function (l) {
      return (l = l.toString()), (oA += l.length + 1), DA.push(l), DA;
    }),
    YA = (g.__private__.write = function (l) {
      return M(
        arguments.length === 1
          ? l.toString()
          : Array.prototype.join.call(arguments, " "),
      );
    }),
    PA = (g.__private__.getArrayBuffer = function (l) {
      for (
        var m = l.length, D = new ArrayBuffer(m), k = new Uint8Array(D);
        m--;

      )
        k[m] = l.charCodeAt(m);
      return D;
    }),
    CA = [
      ["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
      ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
      ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
      ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
      ["Courier", "courier", "normal", "WinAnsiEncoding"],
      ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
      ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
      ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
      ["Times-Roman", "times", "normal", "WinAnsiEncoding"],
      ["Times-Bold", "times", "bold", "WinAnsiEncoding"],
      ["Times-Italic", "times", "italic", "WinAnsiEncoding"],
      ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
      ["ZapfDingbats", "zapfdingbats", "normal", null],
      ["Symbol", "symbol", "normal", null],
    ];
  g.__private__.getStandardFonts = function () {
    return CA;
  };
  var yA = t.fontSize || 16;
  g.__private__.setFontSize = g.setFontSize = function (l) {
    return (yA = G === I.ADVANCED ? l / xA : l), this;
  };
  var IA,
    EA =
      (g.__private__.getFontSize =
      g.getFontSize =
        function () {
          return G === I.COMPAT ? yA : yA * xA;
        }),
    MA = t.R2L || !1;
  (g.__private__.setR2L = g.setR2L =
    function (l) {
      return (MA = l), this;
    }),
    (g.__private__.getR2L = g.getR2L =
      function () {
        return MA;
      });
  var XA,
    Ae = (g.__private__.setZoomMode = function (l) {
      var m = [void 0, null, "fullwidth", "fullheight", "fullpage", "original"];
      if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(l)) IA = l;
      else if (isNaN(l)) {
        if (m.indexOf(l) === -1)
          throw new Error(
            'zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' +
              l +
              '" is not recognized.',
          );
        IA = l;
      } else IA = parseInt(l, 10);
    });
  g.__private__.getZoomMode = function () {
    return IA;
  };
  var te,
    se = (g.__private__.setPageMode = function (l) {
      if (
        [
          void 0,
          null,
          "UseNone",
          "UseOutlines",
          "UseThumbs",
          "FullScreen",
        ].indexOf(l) == -1
      )
        throw new Error(
          'Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' +
            l +
            '" is not recognized.',
        );
      XA = l;
    });
  g.__private__.getPageMode = function () {
    return XA;
  };
  var de = (g.__private__.setLayoutMode = function (l) {
    if (
      [
        void 0,
        null,
        "continuous",
        "single",
        "twoleft",
        "tworight",
        "two",
      ].indexOf(l) == -1
    )
      throw new Error(
        'Layout mode must be one of continuous, single, twoleft, tworight. "' +
          l +
          '" is not recognized.',
      );
    te = l;
  });
  (g.__private__.getLayoutMode = function () {
    return te;
  }),
    (g.__private__.setDisplayMode = g.setDisplayMode =
      function (l, m, D) {
        return Ae(l), de(m), se(D), this;
      });
  var qA = { title: "", subject: "", author: "", keywords: "", creator: "" };
  (g.__private__.getDocumentProperty = function (l) {
    if (Object.keys(qA).indexOf(l) === -1)
      throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return qA[l];
  }),
    (g.__private__.getDocumentProperties = function () {
      return qA;
    }),
    (g.__private__.setDocumentProperties =
      g.setProperties =
      g.setDocumentProperties =
        function (l) {
          for (var m in qA) qA.hasOwnProperty(m) && l[m] && (qA[m] = l[m]);
          return this;
        }),
    (g.__private__.setDocumentProperty = function (l, m) {
      if (Object.keys(qA).indexOf(l) === -1)
        throw new Error(
          "Invalid arguments passed to jsPDF.setDocumentProperty",
        );
      return (qA[l] = m);
    });
  var re,
    xA,
    at,
    ce,
    jt,
    ve = {},
    Ee = {},
    lr = [],
    le = {},
    Qn = {},
    Se = {},
    Vt = {},
    Lr = null,
    He = 0,
    JA = [],
    fe = new kf(g),
    Fn = t.hotfixes || [],
    tt = {},
    fr = {},
    hr = [],
    RA = function l(m, D, k, $, BA, mA) {
      if (!(this instanceof l)) return new l(m, D, k, $, BA, mA);
      isNaN(m) && (m = 1),
        isNaN(D) && (D = 0),
        isNaN(k) && (k = 0),
        isNaN($) && ($ = 1),
        isNaN(BA) && (BA = 0),
        isNaN(mA) && (mA = 0),
        (this._matrix = [m, D, k, $, BA, mA]);
    };
  Object.defineProperty(RA.prototype, "sx", {
    get: function () {
      return this._matrix[0];
    },
    set: function (l) {
      this._matrix[0] = l;
    },
  }),
    Object.defineProperty(RA.prototype, "shy", {
      get: function () {
        return this._matrix[1];
      },
      set: function (l) {
        this._matrix[1] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "shx", {
      get: function () {
        return this._matrix[2];
      },
      set: function (l) {
        this._matrix[2] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "sy", {
      get: function () {
        return this._matrix[3];
      },
      set: function (l) {
        this._matrix[3] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "tx", {
      get: function () {
        return this._matrix[4];
      },
      set: function (l) {
        this._matrix[4] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "ty", {
      get: function () {
        return this._matrix[5];
      },
      set: function (l) {
        this._matrix[5] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "a", {
      get: function () {
        return this._matrix[0];
      },
      set: function (l) {
        this._matrix[0] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "b", {
      get: function () {
        return this._matrix[1];
      },
      set: function (l) {
        this._matrix[1] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "c", {
      get: function () {
        return this._matrix[2];
      },
      set: function (l) {
        this._matrix[2] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "d", {
      get: function () {
        return this._matrix[3];
      },
      set: function (l) {
        this._matrix[3] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "e", {
      get: function () {
        return this._matrix[4];
      },
      set: function (l) {
        this._matrix[4] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "f", {
      get: function () {
        return this._matrix[5];
      },
      set: function (l) {
        this._matrix[5] = l;
      },
    }),
    Object.defineProperty(RA.prototype, "rotation", {
      get: function () {
        return Math.atan2(this.shx, this.sx);
      },
    }),
    Object.defineProperty(RA.prototype, "scaleX", {
      get: function () {
        return this.decompose().scale.sx;
      },
    }),
    Object.defineProperty(RA.prototype, "scaleY", {
      get: function () {
        return this.decompose().scale.sy;
      },
    }),
    Object.defineProperty(RA.prototype, "isIdentity", {
      get: function () {
        return (
          this.sx === 1 &&
          this.shy === 0 &&
          this.shx === 0 &&
          this.sy === 1 &&
          this.tx === 0 &&
          this.ty === 0
        );
      },
    }),
    (RA.prototype.join = function (l) {
      return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty]
        .map(W)
        .join(l);
    }),
    (RA.prototype.multiply = function (l) {
      var m = l.sx * this.sx + l.shy * this.shx,
        D = l.sx * this.shy + l.shy * this.sy,
        k = l.shx * this.sx + l.sy * this.shx,
        $ = l.shx * this.shy + l.sy * this.sy,
        BA = l.tx * this.sx + l.ty * this.shx + this.tx,
        mA = l.tx * this.shy + l.ty * this.sy + this.ty;
      return new RA(m, D, k, $, BA, mA);
    }),
    (RA.prototype.decompose = function () {
      var l = this.sx,
        m = this.shy,
        D = this.shx,
        k = this.sy,
        $ = this.tx,
        BA = this.ty,
        mA = Math.sqrt(l * l + m * m),
        NA = (l /= mA) * D + (m /= mA) * k;
      (D -= l * NA), (k -= m * NA);
      var KA = Math.sqrt(D * D + k * k);
      return (
        (NA /= KA),
        l * (k /= KA) < m * (D /= KA) &&
          ((l = -l), (m = -m), (NA = -NA), (mA = -mA)),
        {
          scale: new RA(mA, 0, 0, KA, 0, 0),
          translate: new RA(1, 0, 0, 1, $, BA),
          rotate: new RA(l, m, -m, l, 0, 0),
          skew: new RA(1, 0, NA, 1, 0, 0),
        }
      );
    }),
    (RA.prototype.toString = function (l) {
      return this.join(" ");
    }),
    (RA.prototype.inversed = function () {
      var l = this.sx,
        m = this.shy,
        D = this.shx,
        k = this.sy,
        $ = this.tx,
        BA = this.ty,
        mA = 1 / (l * k - m * D),
        NA = k * mA,
        KA = -m * mA,
        ZA = -D * mA,
        ee = l * mA;
      return new RA(NA, KA, ZA, ee, -NA * $ - ZA * BA, -KA * $ - ee * BA);
    }),
    (RA.prototype.applyToPoint = function (l) {
      var m = l.x * this.sx + l.y * this.shx + this.tx,
        D = l.x * this.shy + l.y * this.sy + this.ty;
      return new ei(m, D);
    }),
    (RA.prototype.applyToRectangle = function (l) {
      var m = this.applyToPoint(l),
        D = this.applyToPoint(new ei(l.x + l.w, l.y + l.h));
      return new Wi(m.x, m.y, D.x - m.x, D.y - m.y);
    }),
    (RA.prototype.clone = function () {
      var l = this.sx,
        m = this.shy,
        D = this.shx,
        k = this.sy,
        $ = this.tx,
        BA = this.ty;
      return new RA(l, m, D, k, $, BA);
    }),
    (g.Matrix = RA);
  var qt = (g.matrixMult = function (l, m) {
      return m.multiply(l);
    }),
    Br = new RA(1, 0, 0, 1, 0, 0);
  g.unitMatrix = g.identityMatrix = Br;
  var vt = function (l, m) {
    if (!Qn[l]) {
      var D =
        (m instanceof Tn ? "Sh" : "P") +
        (Object.keys(le).length + 1).toString(10);
      (m.id = D), (Qn[l] = D), (le[D] = m), fe.publish("addPattern", m);
    }
  };
  (g.ShadingPattern = Tn),
    (g.TilingPattern = Ii),
    (g.addShadingPattern = function (l, m) {
      return T("addShadingPattern()"), vt(l, m), this;
    }),
    (g.beginTilingPattern = function (l) {
      T("beginTilingPattern()"),
        ts(
          l.boundingBox[0],
          l.boundingBox[1],
          l.boundingBox[2] - l.boundingBox[0],
          l.boundingBox[3] - l.boundingBox[1],
          l.matrix,
        );
    }),
    (g.endTilingPattern = function (l, m) {
      T("endTilingPattern()"),
        (m.stream = QA[_].join(`
`)),
        vt(l, m),
        fe.publish("endTilingPattern", m),
        hr.pop().restore();
    });
  var Xe = (g.__private__.newObject = function () {
      var l = Ge();
      return Lt(l, !0), l;
    }),
    Ge = (g.__private__.newObjectDeferred = function () {
      return (
        X++,
        (iA[X] = function () {
          return oA;
        }),
        X
      );
    }),
    Lt = function (l, m) {
      return (
        (m = typeof m == "boolean" && m), (iA[l] = oA), m && M(l + " 0 obj"), l
      );
    },
    Rn = (g.__private__.newAdditionalObject = function () {
      var l = { objId: Ge(), content: "" };
      return FA.push(l), l;
    }),
    Er = Ge(),
    Wt = Ge(),
    Xt = (g.__private__.decodeColorString = function (l) {
      var m = l.split(" ");
      if (m.length !== 2 || (m[1] !== "g" && m[1] !== "G"))
        m.length === 5 &&
          (m[4] === "k" || m[4] === "K") &&
          (m = [
            (1 - m[0]) * (1 - m[3]),
            (1 - m[1]) * (1 - m[3]),
            (1 - m[2]) * (1 - m[3]),
            "r",
          ]);
      else {
        var D = parseFloat(m[0]);
        m = [D, D, D, "r"];
      }
      for (var k = "#", $ = 0; $ < 3; $++)
        k += ("0" + Math.floor(255 * parseFloat(m[$])).toString(16)).slice(-2);
      return k;
    }),
    Jt = (g.__private__.encodeColorString = function (l) {
      var m;
      typeof l == "string" && (l = { ch1: l });
      var D = l.ch1,
        k = l.ch2,
        $ = l.ch3,
        BA = l.ch4,
        mA = l.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
      if (typeof D == "string" && D.charAt(0) !== "#") {
        var NA = new d0(D);
        if (NA.ok) D = NA.toHex();
        else if (!/^\d*\.?\d*$/.test(D))
          throw new Error(
            'Invalid color "' + D + '" passed to jsPDF.encodeColorString.',
          );
      }
      if (
        (typeof D == "string" &&
          /^#[0-9A-Fa-f]{3}$/.test(D) &&
          (D = "#" + D[1] + D[1] + D[2] + D[2] + D[3] + D[3]),
        typeof D == "string" && /^#[0-9A-Fa-f]{6}$/.test(D))
      ) {
        var KA = parseInt(D.substr(1), 16);
        (D = (KA >> 16) & 255), (k = (KA >> 8) & 255), ($ = 255 & KA);
      }
      if (k === void 0 || (BA === void 0 && D === k && k === $))
        if (typeof D == "string") m = D + " " + mA[0];
        else
          switch (l.precision) {
            case 2:
              m = uA(D / 255) + " " + mA[0];
              break;
            case 3:
            default:
              m = S(D / 255) + " " + mA[0];
          }
      else if (BA === void 0 || Qe(BA) === "object") {
        if (BA && !isNaN(BA.a) && BA.a === 0)
          return (m = ["1.", "1.", "1.", mA[1]].join(" "));
        if (typeof D == "string") m = [D, k, $, mA[1]].join(" ");
        else
          switch (l.precision) {
            case 2:
              m = [uA(D / 255), uA(k / 255), uA($ / 255), mA[1]].join(" ");
              break;
            default:
            case 3:
              m = [S(D / 255), S(k / 255), S($ / 255), mA[1]].join(" ");
          }
      } else if (typeof D == "string") m = [D, k, $, BA, mA[2]].join(" ");
      else
        switch (l.precision) {
          case 2:
            m = [uA(D), uA(k), uA($), uA(BA), mA[2]].join(" ");
            break;
          case 3:
          default:
            m = [S(D), S(k), S($), S(BA), mA[2]].join(" ");
        }
      return m;
    }),
    gr = (g.__private__.getFilters = function () {
      return s;
    }),
    Nt = (g.__private__.putStream = function (l) {
      var m = (l = l || {}).data || "",
        D = l.filters || gr(),
        k = l.alreadyAppliedFilters || [],
        $ = l.addLength1 || !1,
        BA = m.length,
        mA = l.objectId,
        NA = function (ot) {
          return ot;
        };
      if (B !== null && mA === void 0)
        throw new Error(
          "ObjectId must be passed to putStream for file encryption",
        );
      B !== null && (NA = st.encryptor(mA, 0));
      var KA = {};
      D === !0 && (D = ["FlateEncode"]);
      var ZA = l.additionalKeyValues || [],
        ee =
          (KA =
            jA.API.processDataByFilters !== void 0
              ? jA.API.processDataByFilters(m, D)
              : { data: m, reverseChain: [] }).reverseChain +
          (Array.isArray(k) ? k.join(" ") : k.toString());
      if (
        (KA.data.length !== 0 &&
          (ZA.push({ key: "Length", value: KA.data.length }),
          $ === !0 && ZA.push({ key: "Length1", value: BA })),
        ee.length != 0)
      )
        if (ee.split("/").length - 1 == 1)
          ZA.push({ key: "Filter", value: ee });
        else {
          ZA.push({ key: "Filter", value: "[" + ee + "]" });
          for (var ae = 0; ae < ZA.length; ae += 1)
            if (ZA[ae].key === "DecodeParms") {
              for (
                var xe = [], Ne = 0;
                Ne < KA.reverseChain.split("/").length - 1;
                Ne += 1
              )
                xe.push("null");
              xe.push(ZA[ae].value), (ZA[ae].value = "[" + xe.join(" ") + "]");
            }
        }
      M("<<");
      for (var je = 0; je < ZA.length; je++)
        M("/" + ZA[je].key + " " + ZA[je].value);
      M(">>"),
        KA.data.length !== 0 && (M("stream"), M(NA(KA.data)), M("endstream"));
    }),
    dr = (g.__private__.putPage = function (l) {
      var m = l.number,
        D = l.data,
        k = l.objId,
        $ = l.contentsObjId;
      Lt(k, !0),
        M("<</Type /Page"),
        M("/Parent " + l.rootDictionaryObjId + " 0 R"),
        M("/Resources " + l.resourceDictionaryObjId + " 0 R"),
        M(
          "/MediaBox [" +
            parseFloat(W(l.mediaBox.bottomLeftX)) +
            " " +
            parseFloat(W(l.mediaBox.bottomLeftY)) +
            " " +
            W(l.mediaBox.topRightX) +
            " " +
            W(l.mediaBox.topRightY) +
            "]",
        ),
        l.cropBox !== null &&
          M(
            "/CropBox [" +
              W(l.cropBox.bottomLeftX) +
              " " +
              W(l.cropBox.bottomLeftY) +
              " " +
              W(l.cropBox.topRightX) +
              " " +
              W(l.cropBox.topRightY) +
              "]",
          ),
        l.bleedBox !== null &&
          M(
            "/BleedBox [" +
              W(l.bleedBox.bottomLeftX) +
              " " +
              W(l.bleedBox.bottomLeftY) +
              " " +
              W(l.bleedBox.topRightX) +
              " " +
              W(l.bleedBox.topRightY) +
              "]",
          ),
        l.trimBox !== null &&
          M(
            "/TrimBox [" +
              W(l.trimBox.bottomLeftX) +
              " " +
              W(l.trimBox.bottomLeftY) +
              " " +
              W(l.trimBox.topRightX) +
              " " +
              W(l.trimBox.topRightY) +
              "]",
          ),
        l.artBox !== null &&
          M(
            "/ArtBox [" +
              W(l.artBox.bottomLeftX) +
              " " +
              W(l.artBox.bottomLeftY) +
              " " +
              W(l.artBox.topRightX) +
              " " +
              W(l.artBox.topRightY) +
              "]",
          ),
        typeof l.userUnit == "number" &&
          l.userUnit !== 1 &&
          M("/UserUnit " + l.userUnit),
        fe.publish("putPage", {
          objId: k,
          pageContext: JA[m],
          pageNumber: m,
          page: D,
        }),
        M("/Contents " + $ + " 0 R"),
        M(">>"),
        M("endobj");
      var BA = D.join(`
`);
      return (
        G === I.ADVANCED &&
          (BA += `
Q`),
        Lt($, !0),
        Nt({ data: BA, filters: gr(), objectId: $ }),
        M("endobj"),
        k
      );
    }),
    Un = (g.__private__.putPages = function () {
      var l,
        m,
        D = [];
      for (l = 1; l <= He; l++)
        (JA[l].objId = Ge()), (JA[l].contentsObjId = Ge());
      for (l = 1; l <= He; l++)
        D.push(
          dr({
            number: l,
            data: QA[l],
            objId: JA[l].objId,
            contentsObjId: JA[l].contentsObjId,
            mediaBox: JA[l].mediaBox,
            cropBox: JA[l].cropBox,
            bleedBox: JA[l].bleedBox,
            trimBox: JA[l].trimBox,
            artBox: JA[l].artBox,
            userUnit: JA[l].userUnit,
            rootDictionaryObjId: Er,
            resourceDictionaryObjId: Wt,
          }),
        );
      Lt(Er, !0), M("<</Type /Pages");
      var k = "/Kids [";
      for (m = 0; m < He; m++) k += D[m] + " 0 R ";
      M(k + "]"),
        M("/Count " + He),
        M(">>"),
        M("endobj"),
        fe.publish("postPutPages");
    }),
    Gn = function (l) {
      fe.publish("putFont", { font: l, out: M, newObject: Xe, putStream: Nt }),
        l.isAlreadyPutted !== !0 &&
          ((l.objectNumber = Xe()),
          M("<<"),
          M("/Type /Font"),
          M("/BaseFont /" + Li(l.postScriptName)),
          M("/Subtype /Type1"),
          typeof l.encoding == "string" && M("/Encoding /" + l.encoding),
          M("/FirstChar 32"),
          M("/LastChar 255"),
          M(">>"),
          M("endobj"));
    },
    jn = function () {
      for (var l in ve)
        ve.hasOwnProperty(l) &&
          (p === !1 || (p === !0 && w.hasOwnProperty(l))) &&
          Gn(ve[l]);
    },
    Vn = function (l) {
      l.objectNumber = Xe();
      var m = [];
      m.push({ key: "Type", value: "/XObject" }),
        m.push({ key: "Subtype", value: "/Form" }),
        m.push({
          key: "BBox",
          value:
            "[" +
            [W(l.x), W(l.y), W(l.x + l.width), W(l.y + l.height)].join(" ") +
            "]",
        }),
        m.push({ key: "Matrix", value: "[" + l.matrix.toString() + "]" });
      var D = l.pages[1].join(`
`);
      Nt({ data: D, additionalKeyValues: m, objectId: l.objectNumber }),
        M("endobj");
    },
    qn = function () {
      for (var l in tt) tt.hasOwnProperty(l) && Vn(tt[l]);
    },
    Pa = function (l, m) {
      var D,
        k = [],
        $ = 1 / (m - 1);
      for (D = 0; D < 1; D += $) k.push(D);
      if ((k.push(1), l[0].offset != 0)) {
        var BA = { offset: 0, color: l[0].color };
        l.unshift(BA);
      }
      if (l[l.length - 1].offset != 1) {
        var mA = { offset: 1, color: l[l.length - 1].color };
        l.push(mA);
      }
      for (var NA = "", KA = 0, ZA = 0; ZA < k.length; ZA++) {
        for (D = k[ZA]; D > l[KA + 1].offset; ) KA++;
        var ee = l[KA].offset,
          ae = (D - ee) / (l[KA + 1].offset - ee),
          xe = l[KA].color,
          Ne = l[KA + 1].color;
        NA +=
          R(Math.round((1 - ae) * xe[0] + ae * Ne[0]).toString(16)) +
          R(Math.round((1 - ae) * xe[1] + ae * Ne[1]).toString(16)) +
          R(Math.round((1 - ae) * xe[2] + ae * Ne[2]).toString(16));
      }
      return NA.trim();
    },
    Po = function (l, m) {
      m || (m = 21);
      var D = Xe(),
        k = Pa(l.colors, m),
        $ = [];
      $.push({ key: "FunctionType", value: "0" }),
        $.push({ key: "Domain", value: "[0.0 1.0]" }),
        $.push({ key: "Size", value: "[" + m + "]" }),
        $.push({ key: "BitsPerSample", value: "8" }),
        $.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }),
        $.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }),
        Nt({
          data: k,
          additionalKeyValues: $,
          alreadyAppliedFilters: ["/ASCIIHexDecode"],
          objectId: D,
        }),
        M("endobj"),
        (l.objectNumber = Xe()),
        M("<< /ShadingType " + l.type),
        M("/ColorSpace /DeviceRGB");
      var BA =
        "/Coords [" +
        W(parseFloat(l.coords[0])) +
        " " +
        W(parseFloat(l.coords[1])) +
        " ";
      l.type === 2
        ? (BA += W(parseFloat(l.coords[2])) + " " + W(parseFloat(l.coords[3])))
        : (BA +=
            W(parseFloat(l.coords[2])) +
            " " +
            W(parseFloat(l.coords[3])) +
            " " +
            W(parseFloat(l.coords[4])) +
            " " +
            W(parseFloat(l.coords[5]))),
        M((BA += "]")),
        l.matrix && M("/Matrix [" + l.matrix.toString() + "]"),
        M("/Function " + D + " 0 R"),
        M("/Extend [true true]"),
        M(">>"),
        M("endobj");
    },
    Mo = function (l, m) {
      var D = Ge(),
        k = Xe();
      m.push({ resourcesOid: D, objectOid: k }), (l.objectNumber = k);
      var $ = [];
      $.push({ key: "Type", value: "/Pattern" }),
        $.push({ key: "PatternType", value: "1" }),
        $.push({ key: "PaintType", value: "1" }),
        $.push({ key: "TilingType", value: "1" }),
        $.push({
          key: "BBox",
          value: "[" + l.boundingBox.map(W).join(" ") + "]",
        }),
        $.push({ key: "XStep", value: W(l.xStep) }),
        $.push({ key: "YStep", value: W(l.yStep) }),
        $.push({ key: "Resources", value: D + " 0 R" }),
        l.matrix &&
          $.push({ key: "Matrix", value: "[" + l.matrix.toString() + "]" }),
        Nt({
          data: l.stream,
          additionalKeyValues: $,
          objectId: l.objectNumber,
        }),
        M("endobj");
    },
    Wn = function (l) {
      var m;
      for (m in le)
        le.hasOwnProperty(m) &&
          (le[m] instanceof Tn
            ? Po(le[m])
            : le[m] instanceof Ii && Mo(le[m], l));
    },
    Ma = function (l) {
      for (var m in ((l.objectNumber = Xe()), M("<<"), l))
        switch (m) {
          case "opacity":
            M("/ca " + uA(l[m]));
            break;
          case "stroke-opacity":
            M("/CA " + uA(l[m]));
        }
      M(">>"), M("endobj");
    },
    Ko = function () {
      var l;
      for (l in Se) Se.hasOwnProperty(l) && Ma(Se[l]);
    },
    Oi = function () {
      for (var l in (M("/XObject <<"), tt))
        tt.hasOwnProperty(l) &&
          tt[l].objectNumber >= 0 &&
          M("/" + l + " " + tt[l].objectNumber + " 0 R");
      fe.publish("putXobjectDict"), M(">>");
    },
    ko = function () {
      (st.oid = Xe()),
        M("<<"),
        M("/Filter /Standard"),
        M("/V " + st.v),
        M("/R " + st.r),
        M("/U <" + st.toHexString(st.U) + ">"),
        M("/O <" + st.toHexString(st.O) + ">"),
        M("/P " + st.P),
        M(">>"),
        M("endobj");
    },
    Ka = function () {
      for (var l in (M("/Font <<"), ve))
        ve.hasOwnProperty(l) &&
          (p === !1 || (p === !0 && w.hasOwnProperty(l))) &&
          M("/" + l + " " + ve[l].objectNumber + " 0 R");
      M(">>");
    },
    Ro = function () {
      if (Object.keys(le).length > 0) {
        for (var l in (M("/Shading <<"), le))
          le.hasOwnProperty(l) &&
            le[l] instanceof Tn &&
            le[l].objectNumber >= 0 &&
            M("/" + l + " " + le[l].objectNumber + " 0 R");
        fe.publish("putShadingPatternDict"), M(">>");
      }
    },
    Xn = function (l) {
      if (Object.keys(le).length > 0) {
        for (var m in (M("/Pattern <<"), le))
          le.hasOwnProperty(m) &&
            le[m] instanceof g.TilingPattern &&
            le[m].objectNumber >= 0 &&
            le[m].objectNumber < l &&
            M("/" + m + " " + le[m].objectNumber + " 0 R");
        fe.publish("putTilingPatternDict"), M(">>");
      }
    },
    Go = function () {
      if (Object.keys(Se).length > 0) {
        var l;
        for (l in (M("/ExtGState <<"), Se))
          Se.hasOwnProperty(l) &&
            Se[l].objectNumber >= 0 &&
            M("/" + l + " " + Se[l].objectNumber + " 0 R");
        fe.publish("putGStateDict"), M(">>");
      }
    },
    Te = function (l) {
      Lt(l.resourcesOid, !0),
        M("<<"),
        M("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
        Ka(),
        Ro(),
        Xn(l.objectOid),
        Go(),
        Oi(),
        M(">>"),
        M("endobj");
    },
    ka = function () {
      var l = [];
      jn(),
        Ko(),
        qn(),
        Wn(l),
        fe.publish("putResources"),
        l.forEach(Te),
        Te({ resourcesOid: Wt, objectOid: Number.MAX_SAFE_INTEGER }),
        fe.publish("postPutResources");
    },
    Ra = function () {
      fe.publish("putAdditionalObjects");
      for (var l = 0; l < FA.length; l++) {
        var m = FA[l];
        Lt(m.objId, !0), M(m.content), M("endobj");
      }
      fe.publish("postPutAdditionalObjects");
    },
    Ga = function (l) {
      (Ee[l.fontName] = Ee[l.fontName] || {}),
        (Ee[l.fontName][l.fontStyle] = l.id);
    },
    Pi = function (l, m, D, k, $) {
      var BA = {
        id: "F" + (Object.keys(ve).length + 1).toString(10),
        postScriptName: l,
        fontName: m,
        fontStyle: D,
        encoding: k,
        isStandardFont: $ || !1,
        metadata: {},
      };
      return (
        fe.publish("addFont", { font: BA, instance: this }),
        (ve[BA.id] = BA),
        Ga(BA),
        BA.id
      );
    },
    jo = function (l) {
      for (var m = 0, D = CA.length; m < D; m++) {
        var k = Pi.call(this, l[m][0], l[m][1], l[m][2], CA[m][3], !0);
        p === !1 && (w[k] = !0);
        var $ = l[m][0].split("-");
        Ga({ id: k, fontName: $[0], fontStyle: $[1] || "" });
      }
      fe.publish("addFonts", { fonts: ve, dictionary: Ee });
    },
    zt = function (l) {
      return (
        (l.foo = function () {
          try {
            return l.apply(this, arguments);
          } catch (k) {
            var m = k.stack || "";
            ~m.indexOf(" at ") && (m = m.split(" at ")[1]);
            var D =
              "Error in function " +
              m
                .split(
                  `
`,
                )[0]
                .split("<")[0] +
              ": " +
              k.message;
            if (!VA.console) throw new Error(D);
            VA.console.error(D, k), VA.alert && alert(D);
          }
        }),
        (l.foo.bar = l),
        l.foo
      );
    },
    Jn = function (l, m) {
      var D, k, $, BA, mA, NA, KA, ZA, ee;
      if (
        (($ = (m = m || {}).sourceEncoding || "Unicode"),
        (mA = m.outputEncoding),
        (m.autoencode || mA) &&
          ve[re].metadata &&
          ve[re].metadata[$] &&
          ve[re].metadata[$].encoding &&
          ((BA = ve[re].metadata[$].encoding),
          !mA && ve[re].encoding && (mA = ve[re].encoding),
          !mA && BA.codePages && (mA = BA.codePages[0]),
          typeof mA == "string" && (mA = BA[mA]),
          mA))
      ) {
        for (KA = !1, NA = [], D = 0, k = l.length; D < k; D++)
          (ZA = mA[l.charCodeAt(D)])
            ? NA.push(String.fromCharCode(ZA))
            : NA.push(l[D]),
            NA[D].charCodeAt(0) >> 8 && (KA = !0);
        l = NA.join("");
      }
      for (D = l.length; KA === void 0 && D !== 0; )
        l.charCodeAt(D - 1) >> 8 && (KA = !0), D--;
      if (!KA) return l;
      for (NA = m.noBOM ? [] : [254, 255], D = 0, k = l.length; D < k; D++) {
        if ((ee = (ZA = l.charCodeAt(D)) >> 8) >> 8)
          throw new Error(
            "Character at position " +
              D +
              " of string '" +
              l +
              "' exceeds 16bits. Cannot be encoded into UCS-2 BE",
          );
        NA.push(ee), NA.push(ZA - (ee << 8));
      }
      return String.fromCharCode.apply(void 0, NA);
    },
    mt =
      (g.__private__.pdfEscape =
      g.pdfEscape =
        function (l, m) {
          return Jn(l, m)
            .replace(/\\/g, "\\\\")
            .replace(/\(/g, "\\(")
            .replace(/\)/g, "\\)");
        }),
    Mi = (g.__private__.beginPage = function (l) {
      (QA[++He] = []),
        (JA[He] = {
          objId: 0,
          contentsObjId: 0,
          userUnit: Number(c),
          artBox: null,
          bleedBox: null,
          cropBox: null,
          trimBox: null,
          mediaBox: {
            bottomLeftX: 0,
            bottomLeftY: 0,
            topRightX: Number(l[0]),
            topRightY: Number(l[1]),
          },
        }),
        Va(He),
        gA(QA[_]);
    }),
    ja = function (l, m) {
      var D, k, $;
      switch (
        ((e = m || e),
        typeof l == "string" &&
          ((D = F(l.toLowerCase())),
          Array.isArray(D) && ((k = D[0]), ($ = D[1]))),
        Array.isArray(l) && ((k = l[0] * xA), ($ = l[1] * xA)),
        isNaN(k) && ((k = n[0]), ($ = n[1])),
        (k > 14400 || $ > 14400) &&
          (Ce.warn(
            "A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400",
          ),
          (k = Math.min(14400, k)),
          ($ = Math.min(14400, $))),
        (n = [k, $]),
        e.substr(0, 1))
      ) {
        case "l":
          $ > k && (n = [$, k]);
          break;
        case "p":
          k > $ && (n = [$, k]);
      }
      Mi(n),
        Ya(Gi),
        M(Yt),
        Vi !== 0 && M(Vi + " J"),
        qi !== 0 && M(qi + " j"),
        fe.publish("addPage", { pageNumber: He });
    },
    Vo = function (l) {
      l > 0 &&
        l <= He &&
        (QA.splice(l, 1),
        JA.splice(l, 1),
        He--,
        _ > He && (_ = He),
        this.setPage(_));
    },
    Va = function (l) {
      l > 0 && l <= He && (_ = l);
    },
    qo =
      (g.__private__.getNumberOfPages =
      g.getNumberOfPages =
        function () {
          return QA.length - 1;
        }),
    qa = function (l, m, D) {
      var k,
        $ = void 0;
      return (
        (D = D || {}),
        (l = l !== void 0 ? l : ve[re].fontName),
        (m = m !== void 0 ? m : ve[re].fontStyle),
        (k = l.toLowerCase()),
        Ee[k] !== void 0 && Ee[k][m] !== void 0
          ? ($ = Ee[k][m])
          : Ee[l] !== void 0 && Ee[l][m] !== void 0
            ? ($ = Ee[l][m])
            : D.disableWarning === !1 &&
              Ce.warn(
                "Unable to look up font label for font '" +
                  l +
                  "', '" +
                  m +
                  "'. Refer to getFontList() for available fonts.",
              ),
        $ ||
          D.noFallback ||
          (($ = Ee.times[m]) == null && ($ = Ee.times.normal)),
        $
      );
    },
    Wo = (g.__private__.putInfo = function () {
      var l = Xe(),
        m = function (k) {
          return k;
        };
      for (var D in (B !== null && (m = st.encryptor(l, 0)),
      M("<<"),
      M("/Producer (" + mt(m("jsPDF " + jA.version)) + ")"),
      qA))
        qA.hasOwnProperty(D) &&
          qA[D] &&
          M(
            "/" +
              D.substr(0, 1).toUpperCase() +
              D.substr(1) +
              " (" +
              mt(m(qA[D])) +
              ")",
          );
      M("/CreationDate (" + mt(m(sA)) + ")"), M(">>"), M("endobj");
    }),
    Ki = (g.__private__.putCatalog = function (l) {
      var m = (l = l || {}).rootDictionaryObjId || Er;
      switch (
        (Xe(),
        M("<<"),
        M("/Type /Catalog"),
        M("/Pages " + m + " 0 R"),
        IA || (IA = "fullwidth"),
        IA)
      ) {
        case "fullwidth":
          M("/OpenAction [3 0 R /FitH null]");
          break;
        case "fullheight":
          M("/OpenAction [3 0 R /FitV null]");
          break;
        case "fullpage":
          M("/OpenAction [3 0 R /Fit]");
          break;
        case "original":
          M("/OpenAction [3 0 R /XYZ null null 1]");
          break;
        default:
          var D = "" + IA;
          D.substr(D.length - 1) === "%" && (IA = parseInt(IA) / 100),
            typeof IA == "number" &&
              M("/OpenAction [3 0 R /XYZ null null " + uA(IA) + "]");
      }
      switch ((te || (te = "continuous"), te)) {
        case "continuous":
          M("/PageLayout /OneColumn");
          break;
        case "single":
          M("/PageLayout /SinglePage");
          break;
        case "two":
        case "twoleft":
          M("/PageLayout /TwoColumnLeft");
          break;
        case "tworight":
          M("/PageLayout /TwoColumnRight");
      }
      XA && M("/PageMode /" + XA),
        fe.publish("putCatalog"),
        M(">>"),
        M("endobj");
    }),
    Xo = (g.__private__.putTrailer = function () {
      M("trailer"),
        M("<<"),
        M("/Size " + (X + 1)),
        M("/Root " + X + " 0 R"),
        M("/Info " + (X - 1) + " 0 R"),
        B !== null && M("/Encrypt " + st.oid + " 0 R"),
        M("/ID [ <" + nA + "> <" + nA + "> ]"),
        M(">>");
    }),
    Jo = (g.__private__.putHeader = function () {
      M("%PDF-" + L), M("%ºß¬à");
    }),
    zo = (g.__private__.putXRef = function () {
      var l = "0000000000";
      M("xref"), M("0 " + (X + 1)), M("0000000000 65535 f ");
      for (var m = 1; m <= X; m++)
        typeof iA[m] == "function"
          ? M((l + iA[m]()).slice(-10) + " 00000 n ")
          : iA[m] !== void 0
            ? M((l + iA[m]).slice(-10) + " 00000 n ")
            : M("0000000000 00000 n ");
    }),
    Ir = (g.__private__.buildDocument = function () {
      GA(),
        gA(aA),
        fe.publish("buildDocument"),
        Jo(),
        Un(),
        Ra(),
        ka(),
        B !== null && ko(),
        Wo(),
        Ki();
      var l = oA;
      return (
        zo(),
        Xo(),
        M("startxref"),
        M("" + l),
        M("%%EOF"),
        gA(QA[_]),
        aA.join(`
`)
      );
    }),
    zn = (g.__private__.getBlob = function (l) {
      return new Blob([PA(l)], { type: "application/pdf" });
    }),
    Yn =
      (g.output =
      g.__private__.output =
        zt(function (l, m) {
          switch (
            (typeof (m = m || {}) == "string"
              ? (m = { filename: m })
              : (m.filename = m.filename || "generated.pdf"),
            l)
          ) {
            case void 0:
              return Ir();
            case "save":
              g.save(m.filename);
              break;
            case "arraybuffer":
              return PA(Ir());
            case "blob":
              return zn(Ir());
            case "bloburi":
            case "bloburl":
              if (
                VA.URL !== void 0 &&
                typeof VA.URL.createObjectURL == "function"
              )
                return (VA.URL && VA.URL.createObjectURL(zn(Ir()))) || void 0;
              Ce.warn(
                "bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.",
              );
              break;
            case "datauristring":
            case "dataurlstring":
              var D = "",
                k = Ir();
              try {
                D = Du(k);
              } catch {
                D = Du(unescape(encodeURIComponent(k)));
              }
              return (
                "data:application/pdf;filename=" + m.filename + ";base64," + D
              );
            case "pdfobjectnewwindow":
              if (Object.prototype.toString.call(VA) === "[object Window]") {
                var $ =
                    "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",
                  BA =
                    ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
                m.pdfObjectUrl && (($ = m.pdfObjectUrl), (BA = ""));
                var mA =
                    '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' +
                    $ +
                    '"' +
                    BA +
                    '></script><script >PDFObject.embed("' +
                    this.output("dataurlstring") +
                    '", ' +
                    JSON.stringify(m) +
                    ");</script></body></html>",
                  NA = VA.open();
                return NA !== null && NA.document.write(mA), NA;
              }
              throw new Error(
                "The option pdfobjectnewwindow just works in a browser-environment.",
              );
            case "pdfjsnewwindow":
              if (Object.prototype.toString.call(VA) === "[object Window]") {
                var KA =
                    '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' +
                    (m.pdfJsUrl || "examples/PDF.js/web/viewer.html") +
                    "?file=&downloadName=" +
                    m.filename +
                    '" width="500px" height="400px" /></body></html>',
                  ZA = VA.open();
                if (ZA !== null) {
                  ZA.document.write(KA);
                  var ee = this;
                  ZA.document.documentElement.querySelector(
                    "#pdfViewer",
                  ).onload = function () {
                    (ZA.document.title = m.filename),
                      ZA.document.documentElement
                        .querySelector("#pdfViewer")
                        .contentWindow.PDFViewerApplication.open(
                          ee.output("bloburl"),
                        );
                  };
                }
                return ZA;
              }
              throw new Error(
                "The option pdfjsnewwindow just works in a browser-environment.",
              );
            case "dataurlnewwindow":
              if (Object.prototype.toString.call(VA) !== "[object Window]")
                throw new Error(
                  "The option dataurlnewwindow just works in a browser-environment.",
                );
              var ae =
                  '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' +
                  this.output("datauristring", m) +
                  '"></iframe></body></html>',
                xe = VA.open();
              if (
                (xe !== null &&
                  (xe.document.write(ae), (xe.document.title = m.filename)),
                xe || typeof safari > "u")
              )
                return xe;
              break;
            case "datauri":
            case "dataurl":
              return (VA.document.location.href = this.output(
                "datauristring",
                m,
              ));
            default:
              return null;
          }
        })),
    Wa = function (l) {
      return Array.isArray(Fn) === !0 && Fn.indexOf(l) > -1;
    };
  switch (r) {
    case "pt":
      xA = 1;
      break;
    case "mm":
      xA = 72 / 25.4;
      break;
    case "cm":
      xA = 72 / 2.54;
      break;
    case "in":
      xA = 72;
      break;
    case "px":
      xA = Wa("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      xA = 12;
      break;
    case "ex":
      xA = 6;
      break;
    default:
      if (typeof r != "number") throw new Error("Invalid unit: " + r);
      xA = r;
  }
  var st = null;
  UA(), eA();
  var Yo = function (l) {
      return B !== null
        ? st.encryptor(l, 0)
        : function (m) {
            return m;
          };
    },
    Xa =
      (g.__private__.getPageInfo =
      g.getPageInfo =
        function (l) {
          if (isNaN(l) || l % 1 != 0)
            throw new Error("Invalid argument passed to jsPDF.getPageInfo");
          return { objId: JA[l].objId, pageNumber: l, pageContext: JA[l] };
        }),
    WA = (g.__private__.getPageInfoByObjId = function (l) {
      if (isNaN(l) || l % 1 != 0)
        throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
      for (var m in JA) if (JA[m].objId === l) break;
      return Xa(m);
    }),
    Zo =
      (g.__private__.getCurrentPageInfo =
      g.getCurrentPageInfo =
        function () {
          return { objId: JA[_].objId, pageNumber: _, pageContext: JA[_] };
        });
  (g.addPage = function () {
    return ja.apply(this, arguments), this;
  }),
    (g.setPage = function () {
      return Va.apply(this, arguments), gA.call(this, QA[_]), this;
    }),
    (g.insertPage = function (l) {
      return this.addPage(), this.movePage(_, l), this;
    }),
    (g.movePage = function (l, m) {
      var D, k;
      if (l > m) {
        (D = QA[l]), (k = JA[l]);
        for (var $ = l; $ > m; $--) (QA[$] = QA[$ - 1]), (JA[$] = JA[$ - 1]);
        (QA[m] = D), (JA[m] = k), this.setPage(m);
      } else if (l < m) {
        (D = QA[l]), (k = JA[l]);
        for (var BA = l; BA < m; BA++)
          (QA[BA] = QA[BA + 1]), (JA[BA] = JA[BA + 1]);
        (QA[m] = D), (JA[m] = k), this.setPage(m);
      }
      return this;
    }),
    (g.deletePage = function () {
      return Vo.apply(this, arguments), this;
    }),
    (g.__private__.text = g.text =
      function (l, m, D, k, $) {
        var BA,
          mA,
          NA,
          KA,
          ZA,
          ee,
          ae,
          xe,
          Ne,
          je = (k = k || {}).scope || this;
        if (
          typeof l == "number" &&
          typeof m == "number" &&
          (typeof D == "string" || Array.isArray(D))
        ) {
          var ot = D;
          (D = m), (m = l), (l = ot);
        }
        if (
          (arguments[3] instanceof RA
            ? (T("The transform parameter of text() with a Matrix value"),
              (Ne = $))
            : ((NA = arguments[4]),
              (KA = arguments[5]),
              (Qe((ae = arguments[3])) === "object" && ae !== null) ||
                (typeof NA == "string" && ((KA = NA), (NA = null)),
                typeof ae == "string" && ((KA = ae), (ae = null)),
                typeof ae == "number" && ((NA = ae), (ae = null)),
                (k = { flags: ae, angle: NA, align: KA }))),
          isNaN(m) || isNaN(D) || l == null)
        )
          throw new Error("Invalid arguments passed to jsPDF.text");
        if (l.length === 0) return je;
        var Ye = "",
          Zt = !1,
          Et = typeof k.lineHeightFactor == "number" ? k.lineHeightFactor : bn,
          Sr = je.internal.scaleFactor;
        function rs(Fe) {
          return (
            (Fe = Fe.split("	").join(Array(k.TabLen || 9).join(" "))), mt(Fe, ae)
          );
        }
        function Yi(Fe) {
          for (var Ue, Oe = Fe.concat(), Je = [], Dr = Oe.length; Dr--; )
            typeof (Ue = Oe.shift()) == "string"
              ? Je.push(Ue)
              : Array.isArray(Fe) &&
                  (Ue.length === 1 || (Ue[1] === void 0 && Ue[2] === void 0))
                ? Je.push(Ue[0])
                : Je.push([Ue[0], Ue[1], Ue[2]]);
          return Je;
        }
        function Zi(Fe, Ue) {
          var Oe;
          if (typeof Fe == "string") Oe = Ue(Fe)[0];
          else if (Array.isArray(Fe)) {
            for (var Je, Dr, $r = Fe.concat(), li = [], is = $r.length; is--; )
              typeof (Je = $r.shift()) == "string"
                ? li.push(Ue(Je)[0])
                : Array.isArray(Je) &&
                  typeof Je[0] == "string" &&
                  ((Dr = Ue(Je[0], Je[1], Je[2])),
                  li.push([Dr[0], Dr[1], Dr[2]]));
            Oe = li;
          }
          return Oe;
        }
        var ri = !1,
          $i = !0;
        if (typeof l == "string") ri = !0;
        else if (Array.isArray(l)) {
          var Aa = l.concat();
          mA = [];
          for (var ni, Ct = Aa.length; Ct--; )
            (typeof (ni = Aa.shift()) != "string" ||
              (Array.isArray(ni) && typeof ni[0] != "string")) &&
              ($i = !1);
          ri = $i;
        }
        if (ri === !1)
          throw new Error(
            'Type of text must be string or Array. "' +
              l +
              '" is not recognized.',
          );
        typeof l == "string" &&
          (l = l.match(/[\r?\n]/) ? l.split(/\r\n|\r|\n/g) : [l]);
        var ii = yA / je.internal.scaleFactor,
          ai = ii * (Et - 1);
        switch (k.baseline) {
          case "bottom":
            D -= ai;
            break;
          case "top":
            D += ii - ai;
            break;
          case "hanging":
            D += ii - 2 * ai;
            break;
          case "middle":
            D += ii / 2 - ai;
        }
        if (
          ((ee = k.maxWidth || 0) > 0 &&
            (typeof l == "string"
              ? (l = je.splitTextToSize(l, ee))
              : Object.prototype.toString.call(l) === "[object Array]" &&
                (l = l.reduce(function (Fe, Ue) {
                  return Fe.concat(je.splitTextToSize(Ue, ee));
                }, []))),
          (BA = {
            text: l,
            x: m,
            y: D,
            options: k,
            mutex: {
              pdfEscape: mt,
              activeFontKey: re,
              fonts: ve,
              activeFontSize: yA,
            },
          }),
          fe.publish("preProcessText", BA),
          (l = BA.text),
          (NA = (k = BA.options).angle),
          !(Ne instanceof RA) && NA && typeof NA == "number")
        ) {
          (NA *= Math.PI / 180),
            k.rotationDirection === 0 && (NA = -NA),
            G === I.ADVANCED && (NA = -NA);
          var si = Math.cos(NA),
            ea = Math.sin(NA);
          Ne = new RA(si, ea, -ea, si, 0, 0);
        } else NA && NA instanceof RA && (Ne = NA);
        G !== I.ADVANCED || Ne || (Ne = Br),
          (ZA = k.charSpace || Ai) !== void 0 &&
            ((Ye +=
              W(x(ZA)) +
              ` Tc
`),
            this.setCharSpace(this.getCharSpace() || 0)),
          (xe = k.horizontalScale) !== void 0 &&
            (Ye +=
              W(100 * xe) +
              ` Tz
`),
          k.lang;
        var Qt = -1,
          oc = k.renderingMode !== void 0 ? k.renderingMode : k.stroke,
          ta = je.internal.getCurrentPageInfo().pageContext;
        switch (oc) {
          case 0:
          case !1:
          case "fill":
            Qt = 0;
            break;
          case 1:
          case !0:
          case "stroke":
            Qt = 1;
            break;
          case 2:
          case "fillThenStroke":
            Qt = 2;
            break;
          case 3:
          case "invisible":
            Qt = 3;
            break;
          case 4:
          case "fillAndAddForClipping":
            Qt = 4;
            break;
          case 5:
          case "strokeAndAddPathForClipping":
            Qt = 5;
            break;
          case 6:
          case "fillThenStrokeAndAddToPathForClipping":
            Qt = 6;
            break;
          case 7:
          case "addToPathForClipping":
            Qt = 7;
        }
        var ns = ta.usedRenderingMode !== void 0 ? ta.usedRenderingMode : -1;
        Qt !== -1
          ? (Ye +=
              Qt +
              ` Tr
`)
          : ns !== -1 &&
            (Ye += `0 Tr
`),
          Qt !== -1 && (ta.usedRenderingMode = Qt),
          (KA = k.align || "left");
        var $t,
          ra = yA * Et,
          cc = je.internal.pageSize.getWidth(),
          uc = ve[re];
        (ZA = k.charSpace || Ai),
          (ee = k.maxWidth || 0),
          (ae = Object.assign({ autoencode: !0, noBOM: !0 }, k.flags));
        var Jr = [];
        if (Object.prototype.toString.call(l) === "[object Array]") {
          var _t;
          (mA = Yi(l)),
            KA !== "left" &&
              ($t = mA.map(function (Fe) {
                return (
                  (je.getStringUnitWidth(Fe, {
                    font: uc,
                    charSpace: ZA,
                    fontSize: yA,
                    doKerning: !1,
                  }) *
                    yA) /
                  Sr
                );
              }));
          var Ar,
            zr = 0;
          if (KA === "right") {
            (m -= $t[0]), (l = []), (Ct = mA.length);
            for (var wr = 0; wr < Ct; wr++)
              wr === 0
                ? ((Ar = xr(m)), (_t = qr(D)))
                : ((Ar = x(zr - $t[wr])), (_t = -ra)),
                l.push([mA[wr], Ar, _t]),
                (zr = $t[wr]);
          } else if (KA === "center") {
            (m -= $t[0] / 2), (l = []), (Ct = mA.length);
            for (var Hr = 0; Hr < Ct; Hr++)
              Hr === 0
                ? ((Ar = xr(m)), (_t = qr(D)))
                : ((Ar = x((zr - $t[Hr]) / 2)), (_t = -ra)),
                l.push([mA[Hr], Ar, _t]),
                (zr = $t[Hr]);
          } else if (KA === "left") {
            (l = []), (Ct = mA.length);
            for (var oi = 0; oi < Ct; oi++) l.push(mA[oi]);
          } else {
            if (KA !== "justify")
              throw new Error(
                'Unrecognized alignment option, use "left", "center", "right" or "justify".',
              );
            (l = []), (Ct = mA.length), (ee = ee !== 0 ? ee : cc);
            for (var er = 0; er < Ct; er++)
              (_t = er === 0 ? qr(D) : -ra),
                (Ar = er === 0 ? xr(m) : 0),
                er < Ct - 1
                  ? Jr.push(
                      W(x((ee - $t[er]) / (mA[er].split(" ").length - 1))),
                    )
                  : Jr.push(0),
                l.push([mA[er], Ar, _t]);
          }
        }
        var ci = typeof k.R2L == "boolean" ? k.R2L : MA;
        ci === !0 &&
          (l = Zi(l, function (Fe, Ue, Oe) {
            return [Fe.split("").reverse().join(""), Ue, Oe];
          })),
          (BA = {
            text: l,
            x: m,
            y: D,
            options: k,
            mutex: {
              pdfEscape: mt,
              activeFontKey: re,
              fonts: ve,
              activeFontSize: yA,
            },
          }),
          fe.publish("postProcessText", BA),
          (l = BA.text),
          (Zt = BA.mutex.isHex || !1);
        var na = ve[re].encoding;
        (na !== "WinAnsiEncoding" && na !== "StandardEncoding") ||
          (l = Zi(l, function (Fe, Ue, Oe) {
            return [rs(Fe), Ue, Oe];
          })),
          (mA = Yi(l)),
          (l = []);
        for (
          var Yr,
            tr,
            Nr,
            In = 0,
            ui = 1,
            xn = Array.isArray(mA[0]) ? ui : In,
            Zr = "",
            ia = function (Fe, Ue, Oe) {
              var Je = "";
              return (
                Oe instanceof RA
                  ? ((Oe =
                      typeof k.angle == "number"
                        ? qt(Oe, new RA(1, 0, 0, 1, Fe, Ue))
                        : qt(new RA(1, 0, 0, 1, Fe, Ue), Oe)),
                    G === I.ADVANCED &&
                      (Oe = qt(new RA(1, 0, 0, -1, 0, 0), Oe)),
                    (Je =
                      Oe.join(" ") +
                      ` Tm
`))
                  : (Je =
                      W(Fe) +
                      " " +
                      W(Ue) +
                      ` Td
`),
                Je
              );
            },
            Dt = 0;
          Dt < mA.length;
          Dt++
        ) {
          switch (((Zr = ""), xn)) {
            case ui:
              (Nr = (Zt ? "<" : "(") + mA[Dt][0] + (Zt ? ">" : ")")),
                (Yr = parseFloat(mA[Dt][1])),
                (tr = parseFloat(mA[Dt][2]));
              break;
            case In:
              (Nr = (Zt ? "<" : "(") + mA[Dt] + (Zt ? ">" : ")")),
                (Yr = xr(m)),
                (tr = qr(D));
          }
          Jr !== void 0 &&
            Jr[Dt] !== void 0 &&
            (Zr =
              Jr[Dt] +
              ` Tw
`),
            Dt === 0
              ? l.push(Zr + ia(Yr, tr, Ne) + Nr)
              : xn === In
                ? l.push(Zr + Nr)
                : xn === ui && l.push(Zr + ia(Yr, tr, Ne) + Nr);
        }
        (l =
          xn === In
            ? l.join(` Tj
T* `)
            : l.join(` Tj
`)),
          (l += ` Tj
`);
        var _r = `BT
/`;
        return (
          (_r +=
            re +
            " " +
            yA +
            ` Tf
`),
          (_r +=
            W(yA * Et) +
            ` TL
`),
          (_r +=
            Ln +
            `
`),
          (_r += Ye),
          (_r += l),
          M((_r += "ET")),
          (w[re] = !0),
          je
        );
      });
  var $o =
    (g.__private__.clip =
    g.clip =
      function (l) {
        return M(l === "evenodd" ? "W*" : "W"), this;
      });
  (g.clipEvenOdd = function () {
    return $o("evenodd");
  }),
    (g.__private__.discardPath = g.discardPath =
      function () {
        return M("n"), this;
      });
  var pr = (g.__private__.isValidStyle = function (l) {
    var m = !1;
    return (
      [
        void 0,
        null,
        "S",
        "D",
        "F",
        "DF",
        "FD",
        "f",
        "f*",
        "B",
        "B*",
        "n",
      ].indexOf(l) !== -1 && (m = !0),
      m
    );
  });
  g.__private__.setDefaultPathOperation = g.setDefaultPathOperation = function (
    l,
  ) {
    return pr(l) && (h = l), this;
  };
  var Ja =
      (g.__private__.getStyle =
      g.getStyle =
        function (l) {
          var m = h;
          switch (l) {
            case "D":
            case "S":
              m = "S";
              break;
            case "F":
              m = "f";
              break;
            case "FD":
            case "DF":
              m = "B";
              break;
            case "f":
            case "f*":
            case "B":
            case "B*":
              m = l;
          }
          return m;
        }),
    za = (g.close = function () {
      return M("h"), this;
    });
  (g.stroke = function () {
    return M("S"), this;
  }),
    (g.fill = function (l) {
      return Zn("f", l), this;
    }),
    (g.fillEvenOdd = function (l) {
      return Zn("f*", l), this;
    }),
    (g.fillStroke = function (l) {
      return Zn("B", l), this;
    }),
    (g.fillStrokeEvenOdd = function (l) {
      return Zn("B*", l), this;
    });
  var Zn = function (l, m) {
      Qe(m) === "object" ? ec(m, l) : M(l);
    },
    ki = function (l) {
      l === null || (G === I.ADVANCED && l === void 0) || ((l = Ja(l)), M(l));
    };
  function Ac(l, m, D, k, $) {
    var BA = new Ii(
      m || this.boundingBox,
      D || this.xStep,
      k || this.yStep,
      this.gState,
      $ || this.matrix,
    );
    BA.stream = this.stream;
    var mA = l + "$$" + this.cloneIndex++ + "$$";
    return vt(mA, BA), BA;
  }
  var ec = function (l, m) {
      var D = Qn[l.key],
        k = le[D];
      if (k instanceof Tn)
        M("q"),
          M(tc(m)),
          k.gState && g.setGState(k.gState),
          M(l.matrix.toString() + " cm"),
          M("/" + D + " sh"),
          M("Q");
      else if (k instanceof Ii) {
        var $ = new RA(1, 0, 0, -1, 0, Xr());
        l.matrix &&
          (($ = $.multiply(l.matrix || Br)),
          (D = Ac.call(k, l.key, l.boundingBox, l.xStep, l.yStep, $).id)),
          M("q"),
          M("/Pattern cs"),
          M("/" + D + " scn"),
          k.gState && g.setGState(k.gState),
          M(m),
          M("Q");
      }
    },
    tc = function (l) {
      switch (l) {
        case "f":
        case "F":
          return "W n";
        case "f*":
          return "W* n";
        case "B":
          return "W S";
        case "B*":
          return "W* S";
        case "S":
          return "W S";
        case "n":
          return "W n";
      }
    },
    Ri = (g.moveTo = function (l, m) {
      return M(W(x(l)) + " " + W(P(m)) + " m"), this;
    }),
    yn = (g.lineTo = function (l, m) {
      return M(W(x(l)) + " " + W(P(m)) + " l"), this;
    }),
    Vr = (g.curveTo = function (l, m, D, k, $, BA) {
      return (
        M(
          [W(x(l)), W(P(m)), W(x(D)), W(P(k)), W(x($)), W(P(BA)), "c"].join(
            " ",
          ),
        ),
        this
      );
    });
  (g.__private__.line = g.line =
    function (l, m, D, k, $) {
      if (isNaN(l) || isNaN(m) || isNaN(D) || isNaN(k) || !pr($))
        throw new Error("Invalid arguments passed to jsPDF.line");
      return G === I.COMPAT
        ? this.lines([[D - l, k - m]], l, m, [1, 1], $ || "S")
        : this.lines([[D - l, k - m]], l, m, [1, 1]).stroke();
    }),
    (g.__private__.lines = g.lines =
      function (l, m, D, k, $, BA) {
        var mA, NA, KA, ZA, ee, ae, xe, Ne, je, ot, Ye, Zt;
        if (
          (typeof l == "number" && ((Zt = D), (D = m), (m = l), (l = Zt)),
          (k = k || [1, 1]),
          (BA = BA || !1),
          isNaN(m) ||
            isNaN(D) ||
            !Array.isArray(l) ||
            !Array.isArray(k) ||
            !pr($) ||
            typeof BA != "boolean")
        )
          throw new Error("Invalid arguments passed to jsPDF.lines");
        for (
          Ri(m, D), mA = k[0], NA = k[1], ZA = l.length, ot = m, Ye = D, KA = 0;
          KA < ZA;
          KA++
        )
          (ee = l[KA]).length === 2
            ? ((ot = ee[0] * mA + ot), (Ye = ee[1] * NA + Ye), yn(ot, Ye))
            : ((ae = ee[0] * mA + ot),
              (xe = ee[1] * NA + Ye),
              (Ne = ee[2] * mA + ot),
              (je = ee[3] * NA + Ye),
              (ot = ee[4] * mA + ot),
              (Ye = ee[5] * NA + Ye),
              Vr(ae, xe, Ne, je, ot, Ye));
        return BA && za(), ki($), this;
      }),
    (g.path = function (l) {
      for (var m = 0; m < l.length; m++) {
        var D = l[m],
          k = D.c;
        switch (D.op) {
          case "m":
            Ri(k[0], k[1]);
            break;
          case "l":
            yn(k[0], k[1]);
            break;
          case "c":
            Vr.apply(this, k);
            break;
          case "h":
            za();
        }
      }
      return this;
    }),
    (g.__private__.rect = g.rect =
      function (l, m, D, k, $) {
        if (isNaN(l) || isNaN(m) || isNaN(D) || isNaN(k) || !pr($))
          throw new Error("Invalid arguments passed to jsPDF.rect");
        return (
          G === I.COMPAT && (k = -k),
          M([W(x(l)), W(P(m)), W(x(D)), W(x(k)), "re"].join(" ")),
          ki($),
          this
        );
      }),
    (g.__private__.triangle = g.triangle =
      function (l, m, D, k, $, BA, mA) {
        if (
          isNaN(l) ||
          isNaN(m) ||
          isNaN(D) ||
          isNaN(k) ||
          isNaN($) ||
          isNaN(BA) ||
          !pr(mA)
        )
          throw new Error("Invalid arguments passed to jsPDF.triangle");
        return (
          this.lines(
            [
              [D - l, k - m],
              [$ - D, BA - k],
              [l - $, m - BA],
            ],
            l,
            m,
            [1, 1],
            mA,
            !0,
          ),
          this
        );
      }),
    (g.__private__.roundedRect = g.roundedRect =
      function (l, m, D, k, $, BA, mA) {
        if (
          isNaN(l) ||
          isNaN(m) ||
          isNaN(D) ||
          isNaN(k) ||
          isNaN($) ||
          isNaN(BA) ||
          !pr(mA)
        )
          throw new Error("Invalid arguments passed to jsPDF.roundedRect");
        var NA = (4 / 3) * (Math.SQRT2 - 1);
        return (
          ($ = Math.min($, 0.5 * D)),
          (BA = Math.min(BA, 0.5 * k)),
          this.lines(
            [
              [D - 2 * $, 0],
              [$ * NA, 0, $, BA - BA * NA, $, BA],
              [0, k - 2 * BA],
              [0, BA * NA, -$ * NA, BA, -$, BA],
              [2 * $ - D, 0],
              [-$ * NA, 0, -$, -BA * NA, -$, -BA],
              [0, 2 * BA - k],
              [0, -BA * NA, $ * NA, -BA, $, -BA],
            ],
            l + $,
            m,
            [1, 1],
            mA,
            !0,
          ),
          this
        );
      }),
    (g.__private__.ellipse = g.ellipse =
      function (l, m, D, k, $) {
        if (isNaN(l) || isNaN(m) || isNaN(D) || isNaN(k) || !pr($))
          throw new Error("Invalid arguments passed to jsPDF.ellipse");
        var BA = (4 / 3) * (Math.SQRT2 - 1) * D,
          mA = (4 / 3) * (Math.SQRT2 - 1) * k;
        return (
          Ri(l + D, m),
          Vr(l + D, m - mA, l + BA, m - k, l, m - k),
          Vr(l - BA, m - k, l - D, m - mA, l - D, m),
          Vr(l - D, m + mA, l - BA, m + k, l, m + k),
          Vr(l + BA, m + k, l + D, m + mA, l + D, m),
          ki($),
          this
        );
      }),
    (g.__private__.circle = g.circle =
      function (l, m, D, k) {
        if (isNaN(l) || isNaN(m) || isNaN(D) || !pr(k))
          throw new Error("Invalid arguments passed to jsPDF.circle");
        return this.ellipse(l, m, D, D, k);
      }),
    (g.setFont = function (l, m, D) {
      return D && (m = z(m, D)), (re = qa(l, m, { disableWarning: !1 })), this;
    });
  var rc =
    (g.__private__.getFont =
    g.getFont =
      function () {
        return ve[qa.apply(g, arguments)];
      });
  (g.__private__.getFontList = g.getFontList =
    function () {
      var l,
        m,
        D = {};
      for (l in Ee)
        if (Ee.hasOwnProperty(l))
          for (m in ((D[l] = []), Ee[l]))
            Ee[l].hasOwnProperty(m) && D[l].push(m);
      return D;
    }),
    (g.addFont = function (l, m, D, k, $) {
      var BA = [
        "StandardEncoding",
        "MacRomanEncoding",
        "Identity-H",
        "WinAnsiEncoding",
      ];
      return (
        arguments[3] && BA.indexOf(arguments[3]) !== -1
          ? ($ = arguments[3])
          : arguments[3] && BA.indexOf(arguments[3]) == -1 && (D = z(D, k)),
        ($ = $ || "Identity-H"),
        Pi.call(this, l, m, D, $)
      );
    });
  var bn,
    Gi = t.lineWidth || 0.200025,
    $n =
      (g.__private__.getLineWidth =
      g.getLineWidth =
        function () {
          return Gi;
        }),
    Ya =
      (g.__private__.setLineWidth =
      g.setLineWidth =
        function (l) {
          return (Gi = l), M(W(x(l)) + " w"), this;
        });
  g.__private__.setLineDash =
    jA.API.setLineDash =
    jA.API.setLineDashPattern =
      function (l, m) {
        if (((l = l || []), (m = m || 0), isNaN(m) || !Array.isArray(l)))
          throw new Error("Invalid arguments passed to jsPDF.setLineDash");
        return (
          (l = l
            .map(function (D) {
              return W(x(D));
            })
            .join(" ")),
          (m = W(x(m))),
          M("[" + l + "] " + m + " d"),
          this
        );
      };
  var Za =
    (g.__private__.getLineHeight =
    g.getLineHeight =
      function () {
        return yA * bn;
      });
  g.__private__.getLineHeight = g.getLineHeight = function () {
    return yA * bn;
  };
  var $a =
      (g.__private__.setLineHeightFactor =
      g.setLineHeightFactor =
        function (l) {
          return typeof (l = l || 1.15) == "number" && (bn = l), this;
        }),
    As =
      (g.__private__.getLineHeightFactor =
      g.getLineHeightFactor =
        function () {
          return bn;
        });
  $a(t.lineHeight);
  var xr = (g.__private__.getHorizontalCoordinate = function (l) {
      return x(l);
    }),
    qr = (g.__private__.getVerticalCoordinate = function (l) {
      return G === I.ADVANCED
        ? l
        : JA[_].mediaBox.topRightY - JA[_].mediaBox.bottomLeftY - x(l);
    }),
    nc =
      (g.__private__.getHorizontalCoordinateString =
      g.getHorizontalCoordinateString =
        function (l) {
          return W(xr(l));
        }),
    Wr =
      (g.__private__.getVerticalCoordinateString =
      g.getVerticalCoordinateString =
        function (l) {
          return W(qr(l));
        }),
    Yt = t.strokeColor || "0 G";
  (g.__private__.getStrokeColor = g.getDrawColor =
    function () {
      return Xt(Yt);
    }),
    (g.__private__.setStrokeColor = g.setDrawColor =
      function (l, m, D, k) {
        return (
          (Yt = Jt({
            ch1: l,
            ch2: m,
            ch3: D,
            ch4: k,
            pdfColorType: "draw",
            precision: 2,
          })),
          M(Yt),
          this
        );
      });
  var ji = t.fillColor || "0 g";
  (g.__private__.getFillColor = g.getFillColor =
    function () {
      return Xt(ji);
    }),
    (g.__private__.setFillColor = g.setFillColor =
      function (l, m, D, k) {
        return (
          (ji = Jt({
            ch1: l,
            ch2: m,
            ch3: D,
            ch4: k,
            pdfColorType: "fill",
            precision: 2,
          })),
          M(ji),
          this
        );
      });
  var Ln = t.textColor || "0 g",
    ic =
      (g.__private__.getTextColor =
      g.getTextColor =
        function () {
          return Xt(Ln);
        });
  g.__private__.setTextColor = g.setTextColor = function (l, m, D, k) {
    return (
      (Ln = Jt({
        ch1: l,
        ch2: m,
        ch3: D,
        ch4: k,
        pdfColorType: "text",
        precision: 3,
      })),
      this
    );
  };
  var Ai = t.charSpace,
    ac =
      (g.__private__.getCharSpace =
      g.getCharSpace =
        function () {
          return parseFloat(Ai || 0);
        });
  g.__private__.setCharSpace = g.setCharSpace = function (l) {
    if (isNaN(l))
      throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return (Ai = l), this;
  };
  var Vi = 0;
  (g.CapJoinStyles = {
    0: 0,
    butt: 0,
    but: 0,
    miter: 0,
    1: 1,
    round: 1,
    rounded: 1,
    circle: 1,
    2: 2,
    projecting: 2,
    project: 2,
    square: 2,
    bevel: 2,
  }),
    (g.__private__.setLineCap = g.setLineCap =
      function (l) {
        var m = g.CapJoinStyles[l];
        if (m === void 0)
          throw new Error(
            "Line cap style of '" +
              l +
              "' is not recognized. See or extend .CapJoinStyles property for valid styles",
          );
        return (Vi = m), M(m + " J"), this;
      });
  var qi = 0;
  (g.__private__.setLineJoin = g.setLineJoin =
    function (l) {
      var m = g.CapJoinStyles[l];
      if (m === void 0)
        throw new Error(
          "Line join style of '" +
            l +
            "' is not recognized. See or extend .CapJoinStyles property for valid styles",
        );
      return (qi = m), M(m + " j"), this;
    }),
    (g.__private__.setLineMiterLimit =
      g.__private__.setMiterLimit =
      g.setLineMiterLimit =
      g.setMiterLimit =
        function (l) {
          if (((l = l || 0), isNaN(l)))
            throw new Error(
              "Invalid argument passed to jsPDF.setLineMiterLimit",
            );
          return M(W(x(l)) + " M"), this;
        }),
    (g.GState = Fo),
    (g.setGState = function (l) {
      (l = typeof l == "string" ? Se[Vt[l]] : es(null, l)).equals(Lr) ||
        (M("/" + l.id + " gs"), (Lr = l));
    });
  var es = function (l, m) {
    if (!l || !Vt[l]) {
      var D = !1;
      for (var k in Se)
        if (Se.hasOwnProperty(k) && Se[k].equals(m)) {
          D = !0;
          break;
        }
      if (D) m = Se[k];
      else {
        var $ = "GS" + (Object.keys(Se).length + 1).toString(10);
        (Se[$] = m), (m.id = $);
      }
      return l && (Vt[l] = m.id), fe.publish("addGState", m), m;
    }
  };
  (g.addGState = function (l, m) {
    return es(l, m), this;
  }),
    (g.saveGraphicsState = function () {
      return M("q"), lr.push({ key: re, size: yA, color: Ln }), this;
    }),
    (g.restoreGraphicsState = function () {
      M("Q");
      var l = lr.pop();
      return (re = l.key), (yA = l.size), (Ln = l.color), (Lr = null), this;
    }),
    (g.setCurrentTransformationMatrix = function (l) {
      return M(l.toString() + " cm"), this;
    }),
    (g.comment = function (l) {
      return M("#" + l), this;
    });
  var ei = function (l, m) {
      var D = l || 0;
      Object.defineProperty(this, "x", {
        enumerable: !0,
        get: function () {
          return D;
        },
        set: function (BA) {
          isNaN(BA) || (D = parseFloat(BA));
        },
      });
      var k = m || 0;
      Object.defineProperty(this, "y", {
        enumerable: !0,
        get: function () {
          return k;
        },
        set: function (BA) {
          isNaN(BA) || (k = parseFloat(BA));
        },
      });
      var $ = "pt";
      return (
        Object.defineProperty(this, "type", {
          enumerable: !0,
          get: function () {
            return $;
          },
          set: function (BA) {
            $ = BA.toString();
          },
        }),
        this
      );
    },
    Wi = function (l, m, D, k) {
      ei.call(this, l, m), (this.type = "rect");
      var $ = D || 0;
      Object.defineProperty(this, "w", {
        enumerable: !0,
        get: function () {
          return $;
        },
        set: function (mA) {
          isNaN(mA) || ($ = parseFloat(mA));
        },
      });
      var BA = k || 0;
      return (
        Object.defineProperty(this, "h", {
          enumerable: !0,
          get: function () {
            return BA;
          },
          set: function (mA) {
            isNaN(mA) || (BA = parseFloat(mA));
          },
        }),
        this
      );
    },
    Xi = function () {
      (this.page = He),
        (this.currentPage = _),
        (this.pages = QA.slice(0)),
        (this.pagesContext = JA.slice(0)),
        (this.x = at),
        (this.y = ce),
        (this.matrix = jt),
        (this.width = En(_)),
        (this.height = Xr(_)),
        (this.outputDestination = DA),
        (this.id = ""),
        (this.objectNumber = -1);
    };
  Xi.prototype.restore = function () {
    (He = this.page),
      (_ = this.currentPage),
      (JA = this.pagesContext),
      (QA = this.pages),
      (at = this.x),
      (ce = this.y),
      (jt = this.matrix),
      Ji(_, this.width),
      zi(_, this.height),
      (DA = this.outputDestination);
  };
  var ts = function (l, m, D, k, $) {
      hr.push(new Xi()),
        (He = _ = 0),
        (QA = []),
        (at = l),
        (ce = m),
        (jt = $),
        Mi([D, k]);
    },
    sc = function (l) {
      if (fr[l]) hr.pop().restore();
      else {
        var m = new Xi(),
          D = "Xo" + (Object.keys(tt).length + 1).toString(10);
        (m.id = D),
          (fr[l] = D),
          (tt[D] = m),
          fe.publish("addFormObject", m),
          hr.pop().restore();
      }
    };
  for (var ti in ((g.beginFormObject = function (l, m, D, k, $) {
    return ts(l, m, D, k, $), this;
  }),
  (g.endFormObject = function (l) {
    return sc(l), this;
  }),
  (g.doFormObject = function (l, m) {
    var D = tt[fr[l]];
    return M("q"), M(m.toString() + " cm"), M("/" + D.id + " Do"), M("Q"), this;
  }),
  (g.getFormObject = function (l) {
    var m = tt[fr[l]];
    return {
      x: m.x,
      y: m.y,
      width: m.width,
      height: m.height,
      matrix: m.matrix,
    };
  }),
  (g.save = function (l, m) {
    return (
      (l = l || "generated.pdf"),
      ((m = m || {}).returnPromise = m.returnPromise || !1),
      m.returnPromise === !1
        ? (_n(zn(Ir()), l),
          typeof _n.unload == "function" &&
            VA.setTimeout &&
            setTimeout(_n.unload, 911),
          this)
        : new Promise(function (D, k) {
            try {
              var $ = _n(zn(Ir()), l);
              typeof _n.unload == "function" &&
                VA.setTimeout &&
                setTimeout(_n.unload, 911),
                D($);
            } catch (BA) {
              k(BA.message);
            }
          })
    );
  }),
  jA.API))
    jA.API.hasOwnProperty(ti) &&
      (ti === "events" && jA.API.events.length
        ? (function (l, m) {
            var D, k, $;
            for ($ = m.length - 1; $ !== -1; $--)
              (D = m[$][0]),
                (k = m[$][1]),
                l.subscribe.apply(
                  l,
                  [D].concat(typeof k == "function" ? [k] : k),
                );
          })(fe, jA.API.events)
        : (g[ti] = jA.API[ti]));
  var En = (g.getPageWidth = function (l) {
      return (
        (JA[(l = l || _)].mediaBox.topRightX - JA[l].mediaBox.bottomLeftX) / xA
      );
    }),
    Ji = (g.setPageWidth = function (l, m) {
      JA[l].mediaBox.topRightX = m * xA + JA[l].mediaBox.bottomLeftX;
    }),
    Xr = (g.getPageHeight = function (l) {
      return (
        (JA[(l = l || _)].mediaBox.topRightY - JA[l].mediaBox.bottomLeftY) / xA
      );
    }),
    zi = (g.setPageHeight = function (l, m) {
      JA[l].mediaBox.topRightY = m * xA + JA[l].mediaBox.bottomLeftY;
    });
  return (
    (g.internal = {
      pdfEscape: mt,
      getStyle: Ja,
      getFont: rc,
      getFontSize: EA,
      getCharSpace: ac,
      getTextColor: ic,
      getLineHeight: Za,
      getLineHeightFactor: As,
      getLineWidth: $n,
      write: YA,
      getHorizontalCoordinate: xr,
      getVerticalCoordinate: qr,
      getCoordinateString: nc,
      getVerticalCoordinateString: Wr,
      collections: {},
      newObject: Xe,
      newAdditionalObject: Rn,
      newObjectDeferred: Ge,
      newObjectDeferredBegin: Lt,
      getFilters: gr,
      putStream: Nt,
      events: fe,
      scaleFactor: xA,
      pageSize: {
        getWidth: function () {
          return En(_);
        },
        setWidth: function (l) {
          Ji(_, l);
        },
        getHeight: function () {
          return Xr(_);
        },
        setHeight: function (l) {
          zi(_, l);
        },
      },
      encryptionOptions: B,
      encryption: st,
      getEncryptor: Yo,
      output: Yn,
      getNumberOfPages: qo,
      pages: QA,
      out: M,
      f2: uA,
      f3: S,
      getPageInfo: Xa,
      getPageInfoByObjId: WA,
      getCurrentPageInfo: Zo,
      getPDFVersion: y,
      Point: ei,
      Rectangle: Wi,
      Matrix: RA,
      hasHotfix: Wa,
    }),
    Object.defineProperty(g.internal.pageSize, "width", {
      get: function () {
        return En(_);
      },
      set: function (l) {
        Ji(_, l);
      },
      enumerable: !0,
      configurable: !0,
    }),
    Object.defineProperty(g.internal.pageSize, "height", {
      get: function () {
        return Xr(_);
      },
      set: function (l) {
        zi(_, l);
      },
      enumerable: !0,
      configurable: !0,
    }),
    jo.call(g, CA),
    (re = "F1"),
    ja(n, e),
    fe.publish("initialized"),
    g
  );
}
(bi.prototype.lsbFirstWord = function (t) {
  return String.fromCharCode(
    (t >> 0) & 255,
    (t >> 8) & 255,
    (t >> 16) & 255,
    (t >> 24) & 255,
  );
}),
  (bi.prototype.toHexString = function (t) {
    return t
      .split("")
      .map(function (A) {
        return ("0" + (255 & A.charCodeAt(0)).toString(16)).slice(-2);
      })
      .join("");
  }),
  (bi.prototype.hexToBytes = function (t) {
    for (var A = [], e = 0; e < t.length; e += 2)
      A.push(String.fromCharCode(parseInt(t.substr(e, 2), 16)));
    return A.join("");
  }),
  (bi.prototype.processOwnerPassword = function (t, A) {
    return Ou(Tu(A).substr(0, 5), t);
  }),
  (bi.prototype.encryptor = function (t, A) {
    var e = Tu(
      this.encryptionKey +
        String.fromCharCode(
          255 & t,
          (t >> 8) & 255,
          (t >> 16) & 255,
          255 & A,
          (A >> 8) & 255,
        ),
    ).substr(0, 10);
    return function (r) {
      return Ou(e, r);
    };
  }),
  (Fo.prototype.equals = function (t) {
    var A,
      e = "id,objectNumber,equals";
    if (!t || Qe(t) !== Qe(this)) return !1;
    var r = 0;
    for (A in this)
      if (!(e.indexOf(A) >= 0)) {
        if (
          (this.hasOwnProperty(A) && !t.hasOwnProperty(A)) ||
          this[A] !== t[A]
        )
          return !1;
        r++;
      }
    for (A in t) t.hasOwnProperty(A) && e.indexOf(A) < 0 && r--;
    return r === 0;
  }),
  (jA.API = { events: [] }),
  (jA.version = "2.5.1");
var De = jA.API,
  zu = 1,
  kn = function (t) {
    return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  },
  Qi = function (t) {
    return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
  },
  zA = function (t) {
    return t.toFixed(2);
  },
  cn = function (t) {
    return t.toFixed(5);
  };
De.__acroform__ = {};
var bt = function (t, A) {
    (t.prototype = Object.create(A.prototype)), (t.prototype.constructor = t);
  },
  Rf = function (t) {
    return t * zu;
  },
  Cr = function (t) {
    var A = new m0(),
      e = OA.internal.getHeight(t) || 0,
      r = OA.internal.getWidth(t) || 0;
    return (A.BBox = [0, 0, Number(zA(r)), Number(zA(e))]), A;
  },
  Q5 = (De.__acroform__.setBit = function (t, A) {
    if (((t = t || 0), (A = A || 0), isNaN(t) || isNaN(A)))
      throw new Error(
        "Invalid arguments passed to jsPDF.API.__acroform__.setBit",
      );
    return (t |= 1 << A);
  }),
  F5 = (De.__acroform__.clearBit = function (t, A) {
    if (((t = t || 0), (A = A || 0), isNaN(t) || isNaN(A)))
      throw new Error(
        "Invalid arguments passed to jsPDF.API.__acroform__.clearBit",
      );
    return (t &= ~(1 << A));
  }),
  U5 = (De.__acroform__.getBit = function (t, A) {
    if (isNaN(t) || isNaN(A))
      throw new Error(
        "Invalid arguments passed to jsPDF.API.__acroform__.getBit",
      );
    return t & (1 << A) ? 1 : 0;
  }),
  Ke = (De.__acroform__.getBitForPdf = function (t, A) {
    if (isNaN(t) || isNaN(A))
      throw new Error(
        "Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf",
      );
    return U5(t, A - 1);
  }),
  ke = (De.__acroform__.setBitForPdf = function (t, A) {
    if (isNaN(t) || isNaN(A))
      throw new Error(
        "Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf",
      );
    return Q5(t, A - 1);
  }),
  Re = (De.__acroform__.clearBitForPdf = function (t, A) {
    if (isNaN(t) || isNaN(A))
      throw new Error(
        "Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf",
      );
    return F5(t, A - 1);
  }),
  y5 = (De.__acroform__.calculateCoordinates = function (t, A) {
    var e = A.internal.getHorizontalCoordinate,
      r = A.internal.getVerticalCoordinate,
      n = t[0],
      i = t[1],
      s = t[2],
      c = t[3],
      u = {};
    return (
      (u.lowerLeft_X = e(n) || 0),
      (u.lowerLeft_Y = r(i + c) || 0),
      (u.upperRight_X = e(n + s) || 0),
      (u.upperRight_Y = r(i) || 0),
      [
        Number(zA(u.lowerLeft_X)),
        Number(zA(u.lowerLeft_Y)),
        Number(zA(u.upperRight_X)),
        Number(zA(u.upperRight_Y)),
      ]
    );
  }),
  b5 = function (t) {
    if (t.appearanceStreamContent) return t.appearanceStreamContent;
    if (t.V || t.DV) {
      var A = [],
        e = t._V || t.DV,
        r = Pu(t, e),
        n = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
      A.push("/Tx BMC"),
        A.push("q"),
        A.push("BT"),
        A.push(t.scope.__private__.encodeColorString(t.color)),
        A.push("/" + n + " " + zA(r.fontSize) + " Tf"),
        A.push("1 0 0 1 0 0 Tm"),
        A.push(r.text),
        A.push("ET"),
        A.push("Q"),
        A.push("EMC");
      var i = Cr(t);
      return (
        (i.scope = t.scope),
        (i.stream = A.join(`
`)),
        i
      );
    }
  },
  Pu = function (t, A) {
    var e = t.fontSize === 0 ? t.maxFontSize : t.fontSize,
      r = { text: "", fontSize: "" },
      n = (A =
        (A = A.substr(0, 1) == "(" ? A.substr(1) : A).substr(A.length - 1) ==
        ")"
          ? A.substr(0, A.length - 1)
          : A).split(" ");
    n = t.multiline
      ? n.map(function (S) {
          return S.split(`
`);
        })
      : n.map(function (S) {
          return [S];
        });
    var i = e,
      s = OA.internal.getHeight(t) || 0;
    s = s < 0 ? -s : s;
    var c = OA.internal.getWidth(t) || 0;
    c = c < 0 ? -c : c;
    var u = function (S, x, K) {
      if (S + 1 < n.length) {
        var P = x + " " + n[S + 1][0];
        return Zs(P, t, K).width <= c - 4;
      }
      return !1;
    };
    i++;
    A: for (; i > 0; ) {
      (A = ""), i--;
      var h,
        B,
        p = Zs("3", t, i).height,
        w = t.multiline ? s - i : (s - p) / 2,
        g = (w += 2),
        L = 0,
        y = 0,
        N = 0;
      if (i <= 0) {
        (A = `(...) Tj
`),
          (A +=
            "% Width of Text: " +
            Zs(A, t, (i = 12)).width +
            ", FieldWidth:" +
            c +
            `
`);
        break;
      }
      for (var F = "", I = 0, G = 0; G < n.length; G++)
        if (n.hasOwnProperty(G)) {
          var Y = !1;
          if (n[G].length !== 1 && N !== n[G].length - 1) {
            if ((p + 2) * (I + 2) + 2 > s) continue A;
            (F += n[G][N]), (Y = !0), (y = G), G--;
          } else {
            F =
              (F += n[G][N] + " ").substr(F.length - 1) == " "
                ? F.substr(0, F.length - 1)
                : F;
            var Z = parseInt(G),
              z = u(Z, F, i),
              W = G >= n.length - 1;
            if (z && !W) {
              (F += " "), (N = 0);
              continue;
            }
            if (z || W) {
              if (W) y = Z;
              else if (t.multiline && (p + 2) * (I + 2) + 2 > s) continue A;
            } else {
              if (!t.multiline || (p + 2) * (I + 2) + 2 > s) continue A;
              y = Z;
            }
          }
          for (var T = "", AA = L; AA <= y; AA++) {
            var uA = n[AA];
            if (t.multiline) {
              if (AA === y) {
                (T += uA[N] + " "), (N = (N + 1) % uA.length);
                continue;
              }
              if (AA === L) {
                T += uA[uA.length - 1] + " ";
                continue;
              }
            }
            T += uA[0] + " ";
          }
          switch (
            ((T =
              T.substr(T.length - 1) == " " ? T.substr(0, T.length - 1) : T),
            (B = Zs(T, t, i).width),
            t.textAlign)
          ) {
            case "right":
              h = c - B - 2;
              break;
            case "center":
              h = (c - B) / 2;
              break;
            case "left":
            default:
              h = 2;
          }
          (A +=
            zA(h) +
            " " +
            zA(g) +
            ` Td
`),
            (A +=
              "(" +
              kn(T) +
              `) Tj
`),
            (A +=
              -zA(h) +
              ` 0 Td
`),
            (g = -(i + 2)),
            (B = 0),
            (L = Y ? y : y + 1),
            I++,
            (F = "");
        }
      break;
    }
    return (r.text = A), (r.fontSize = i), r;
  },
  Zs = function (t, A, e) {
    var r = A.scope.internal.getFont(A.fontName, A.fontStyle),
      n =
        A.scope.getStringUnitWidth(t, {
          font: r,
          fontSize: parseFloat(e),
          charSpace: 0,
        }) * parseFloat(e);
    return {
      height:
        A.scope.getStringUnitWidth("3", {
          font: r,
          fontSize: parseFloat(e),
          charSpace: 0,
        }) *
        parseFloat(e) *
        1.5,
      width: n,
    };
  },
  L5 = {
    fields: [],
    xForms: [],
    acroFormDictionaryRoot: null,
    printedOut: !1,
    internal: null,
    isInitialized: !1,
  },
  E5 = function (t, A) {
    var e = { type: "reference", object: t };
    A.internal.getPageInfo(t.page).pageContext.annotations.find(function (r) {
      return r.type === e.type && r.object === e.object;
    }) === void 0 &&
      A.internal.getPageInfo(t.page).pageContext.annotations.push(e);
  },
  I5 = function (t, A) {
    for (var e in t)
      if (t.hasOwnProperty(e)) {
        var r = e,
          n = t[e];
        A.internal.newObjectDeferredBegin(n.objId, !0),
          Qe(n) === "object" &&
            typeof n.putStream == "function" &&
            n.putStream(),
          delete t[r];
      }
  },
  x5 = function (t, A) {
    if (
      ((A.scope = t),
      t.internal !== void 0 &&
        (t.internal.acroformPlugin === void 0 ||
          t.internal.acroformPlugin.isInitialized === !1))
    ) {
      if (
        ((cr.FieldNum = 0),
        (t.internal.acroformPlugin = JSON.parse(JSON.stringify(L5))),
        t.internal.acroformPlugin.acroFormDictionaryRoot)
      )
        throw new Error("Exception while creating AcroformDictionary");
      (zu = t.internal.scaleFactor),
        (t.internal.acroformPlugin.acroFormDictionaryRoot = new C0()),
        (t.internal.acroformPlugin.acroFormDictionaryRoot.scope = t),
        (t.internal.acroformPlugin.acroFormDictionaryRoot._eventID =
          t.internal.events.subscribe("postPutResources", function () {
            (function (e) {
              e.internal.events.unsubscribe(
                e.internal.acroformPlugin.acroFormDictionaryRoot._eventID,
              ),
                delete e.internal.acroformPlugin.acroFormDictionaryRoot
                  ._eventID,
                (e.internal.acroformPlugin.printedOut = !0);
            })(t);
          })),
        t.internal.events.subscribe("buildDocument", function () {
          (function (e) {
            e.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
            var r = e.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
            for (var n in r)
              if (r.hasOwnProperty(n)) {
                var i = r[n];
                (i.objId = void 0), i.hasAnnotation && E5(i, e);
              }
          })(t);
        }),
        t.internal.events.subscribe("putCatalog", function () {
          (function (e) {
            if (e.internal.acroformPlugin.acroFormDictionaryRoot === void 0)
              throw new Error("putCatalogCallback: Root missing.");
            e.internal.write(
              "/AcroForm " +
                e.internal.acroformPlugin.acroFormDictionaryRoot.objId +
                " 0 R",
            );
          })(t);
        }),
        t.internal.events.subscribe("postPutPages", function (e) {
          (function (r, n) {
            var i = !r;
            for (var s in (r ||
              (n.internal.newObjectDeferredBegin(
                n.internal.acroformPlugin.acroFormDictionaryRoot.objId,
                !0,
              ),
              n.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
            (r = r || n.internal.acroformPlugin.acroFormDictionaryRoot.Kids)))
              if (r.hasOwnProperty(s)) {
                var c = r[s],
                  u = [],
                  h = c.Rect;
                if (
                  (c.Rect && (c.Rect = y5(c.Rect, n)),
                  n.internal.newObjectDeferredBegin(c.objId, !0),
                  (c.DA = OA.createDefaultAppearanceStream(c)),
                  Qe(c) === "object" &&
                    typeof c.getKeyValueListForStream == "function" &&
                    (u = c.getKeyValueListForStream()),
                  (c.Rect = h),
                  c.hasAppearanceStream && !c.appearanceStreamContent)
                ) {
                  var B = b5(c);
                  u.push({ key: "AP", value: "<</N " + B + ">>" }),
                    n.internal.acroformPlugin.xForms.push(B);
                }
                if (c.appearanceStreamContent) {
                  var p = "";
                  for (var w in c.appearanceStreamContent)
                    if (c.appearanceStreamContent.hasOwnProperty(w)) {
                      var g = c.appearanceStreamContent[w];
                      if (
                        ((p += "/" + w + " "),
                        (p += "<<"),
                        Object.keys(g).length >= 1 || Array.isArray(g))
                      ) {
                        for (var s in g)
                          if (g.hasOwnProperty(s)) {
                            var L = g[s];
                            typeof L == "function" && (L = L.call(n, c)),
                              (p += "/" + s + " " + L + " "),
                              n.internal.acroformPlugin.xForms.indexOf(L) >=
                                0 || n.internal.acroformPlugin.xForms.push(L);
                          }
                      } else
                        typeof (L = g) == "function" && (L = L.call(n, c)),
                          (p += "/" + s + " " + L),
                          n.internal.acroformPlugin.xForms.indexOf(L) >= 0 ||
                            n.internal.acroformPlugin.xForms.push(L);
                      p += ">>";
                    }
                  u.push({
                    key: "AP",
                    value:
                      `<<
` +
                      p +
                      ">>",
                  });
                }
                n.internal.putStream({
                  additionalKeyValues: u,
                  objectId: c.objId,
                }),
                  n.internal.out("endobj");
              }
            i && I5(n.internal.acroformPlugin.xForms, n);
          })(e, t);
        }),
        (t.internal.acroformPlugin.isInitialized = !0);
    }
  },
  v0 = (De.__acroform__.arrayToPdfArray = function (t, A, e) {
    var r = function (s) {
      return s;
    };
    if (Array.isArray(t)) {
      for (var n = "[", i = 0; i < t.length; i++)
        switch ((i !== 0 && (n += " "), Qe(t[i]))) {
          case "boolean":
          case "number":
          case "object":
            n += t[i].toString();
            break;
          case "string":
            t[i].substr(0, 1) !== "/"
              ? (A !== void 0 && e && (r = e.internal.getEncryptor(A)),
                (n += "(" + kn(r(t[i].toString())) + ")"))
              : (n += t[i].toString());
        }
      return (n += "]");
    }
    throw new Error(
      "Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray",
    );
  }),
  eu = function (t, A, e) {
    var r = function (n) {
      return n;
    };
    return (
      A !== void 0 && e && (r = e.internal.getEncryptor(A)),
      (t = t || "").toString(),
      (t = "(" + kn(r(t)) + ")")
    );
  },
  Qr = function () {
    (this._objId = void 0),
      (this._scope = void 0),
      Object.defineProperty(this, "objId", {
        get: function () {
          if (this._objId === void 0) {
            if (this.scope === void 0) return;
            this._objId = this.scope.internal.newObjectDeferred();
          }
          return this._objId;
        },
        set: function (t) {
          this._objId = t;
        },
      }),
      Object.defineProperty(this, "scope", {
        value: this._scope,
        writable: !0,
      });
  };
(Qr.prototype.toString = function () {
  return this.objId + " 0 R";
}),
  (Qr.prototype.putStream = function () {
    var t = this.getKeyValueListForStream();
    this.scope.internal.putStream({
      data: this.stream,
      additionalKeyValues: t,
      objectId: this.objId,
    }),
      this.scope.internal.out("endobj");
  }),
  (Qr.prototype.getKeyValueListForStream = function () {
    var t = [],
      A = Object.getOwnPropertyNames(this).filter(function (i) {
        return (
          i != "content" &&
          i != "appearanceStreamContent" &&
          i != "scope" &&
          i != "objId" &&
          i.substring(0, 1) != "_"
        );
      });
    for (var e in A)
      if (Object.getOwnPropertyDescriptor(this, A[e]).configurable === !1) {
        var r = A[e],
          n = this[r];
        n &&
          (Array.isArray(n)
            ? t.push({ key: r, value: v0(n, this.objId, this.scope) })
            : n instanceof Qr
              ? ((n.scope = this.scope),
                t.push({ key: r, value: n.objId + " 0 R" }))
              : typeof n != "function" && t.push({ key: r, value: n }));
      }
    return t;
  });
var m0 = function () {
  Qr.call(this),
    Object.defineProperty(this, "Type", {
      value: "/XObject",
      configurable: !1,
      writable: !0,
    }),
    Object.defineProperty(this, "Subtype", {
      value: "/Form",
      configurable: !1,
      writable: !0,
    }),
    Object.defineProperty(this, "FormType", {
      value: 1,
      configurable: !1,
      writable: !0,
    });
  var t,
    A = [];
  Object.defineProperty(this, "BBox", {
    configurable: !1,
    get: function () {
      return A;
    },
    set: function (e) {
      A = e;
    },
  }),
    Object.defineProperty(this, "Resources", {
      value: "2 0 R",
      configurable: !1,
      writable: !0,
    }),
    Object.defineProperty(this, "stream", {
      enumerable: !1,
      configurable: !0,
      set: function (e) {
        t = e.trim();
      },
      get: function () {
        return t || null;
      },
    });
};
bt(m0, Qr);
var C0 = function () {
  Qr.call(this);
  var t,
    A = [];
  Object.defineProperty(this, "Kids", {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return A.length > 0 ? A : void 0;
    },
  }),
    Object.defineProperty(this, "Fields", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return A;
      },
    }),
    Object.defineProperty(this, "DA", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        if (t) {
          var e = function (r) {
            return r;
          };
          return (
            this.scope && (e = this.scope.internal.getEncryptor(this.objId)),
            "(" + kn(e(t)) + ")"
          );
        }
      },
      set: function (e) {
        t = e;
      },
    });
};
bt(C0, Qr);
var cr = function t() {
  Qr.call(this);
  var A = 4;
  Object.defineProperty(this, "F", {
    enumerable: !1,
    configurable: !1,
    get: function () {
      return A;
    },
    set: function (F) {
      if (isNaN(F))
        throw new Error('Invalid value "' + F + '" for attribute F supplied.');
      A = F;
    },
  }),
    Object.defineProperty(this, "showWhenPrinted", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(A, 3);
      },
      set: function (F) {
        F ? (this.F = ke(A, 3)) : (this.F = Re(A, 3));
      },
    });
  var e = 0;
  Object.defineProperty(this, "Ff", {
    enumerable: !1,
    configurable: !1,
    get: function () {
      return e;
    },
    set: function (F) {
      if (isNaN(F))
        throw new Error('Invalid value "' + F + '" for attribute Ff supplied.');
      e = F;
    },
  });
  var r = [];
  Object.defineProperty(this, "Rect", {
    enumerable: !1,
    configurable: !1,
    get: function () {
      if (r.length !== 0) return r;
    },
    set: function (F) {
      r = F !== void 0 ? F : [];
    },
  }),
    Object.defineProperty(this, "x", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !r || isNaN(r[0]) ? 0 : r[0];
      },
      set: function (F) {
        r[0] = F;
      },
    }),
    Object.defineProperty(this, "y", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !r || isNaN(r[1]) ? 0 : r[1];
      },
      set: function (F) {
        r[1] = F;
      },
    }),
    Object.defineProperty(this, "width", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !r || isNaN(r[2]) ? 0 : r[2];
      },
      set: function (F) {
        r[2] = F;
      },
    }),
    Object.defineProperty(this, "height", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !r || isNaN(r[3]) ? 0 : r[3];
      },
      set: function (F) {
        r[3] = F;
      },
    });
  var n = "";
  Object.defineProperty(this, "FT", {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return n;
    },
    set: function (F) {
      switch (F) {
        case "/Btn":
        case "/Tx":
        case "/Ch":
        case "/Sig":
          n = F;
          break;
        default:
          throw new Error(
            'Invalid value "' + F + '" for attribute FT supplied.',
          );
      }
    },
  });
  var i = null;
  Object.defineProperty(this, "T", {
    enumerable: !0,
    configurable: !1,
    get: function () {
      if (!i || i.length < 1) {
        if (this instanceof Uo) return;
        i = "FieldObject" + t.FieldNum++;
      }
      var F = function (I) {
        return I;
      };
      return (
        this.scope && (F = this.scope.internal.getEncryptor(this.objId)),
        "(" + kn(F(i)) + ")"
      );
    },
    set: function (F) {
      i = F.toString();
    },
  }),
    Object.defineProperty(this, "fieldName", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return i;
      },
      set: function (F) {
        i = F;
      },
    });
  var s = "helvetica";
  Object.defineProperty(this, "fontName", {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return s;
    },
    set: function (F) {
      s = F;
    },
  });
  var c = "normal";
  Object.defineProperty(this, "fontStyle", {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return c;
    },
    set: function (F) {
      c = F;
    },
  });
  var u = 0;
  Object.defineProperty(this, "fontSize", {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return u;
    },
    set: function (F) {
      u = F;
    },
  });
  var h = void 0;
  Object.defineProperty(this, "maxFontSize", {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return h === void 0 ? 50 / zu : h;
    },
    set: function (F) {
      h = F;
    },
  });
  var B = "black";
  Object.defineProperty(this, "color", {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return B;
    },
    set: function (F) {
      B = F;
    },
  });
  var p = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", {
    enumerable: !0,
    configurable: !1,
    get: function () {
      if (!(!p || this instanceof Uo || this instanceof Kn))
        return eu(p, this.objId, this.scope);
    },
    set: function (F) {
      (F = F.toString()), (p = F);
    },
  });
  var w = null;
  Object.defineProperty(this, "DV", {
    enumerable: !1,
    configurable: !1,
    get: function () {
      if (w) return this instanceof et ? w : eu(w, this.objId, this.scope);
    },
    set: function (F) {
      (F = F.toString()),
        (w =
          this instanceof et
            ? F
            : F.substr(0, 1) === "("
              ? Qi(F.substr(1, F.length - 2))
              : Qi(F));
    },
  }),
    Object.defineProperty(this, "defaultValue", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this instanceof et ? Qi(w.substr(1, w.length - 1)) : w;
      },
      set: function (F) {
        (F = F.toString()), (w = this instanceof et ? "/" + F : F);
      },
    });
  var g = null;
  Object.defineProperty(this, "_V", {
    enumerable: !1,
    configurable: !1,
    get: function () {
      if (g) return g;
    },
    set: function (F) {
      this.V = F;
    },
  }),
    Object.defineProperty(this, "V", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        if (g) return this instanceof et ? g : eu(g, this.objId, this.scope);
      },
      set: function (F) {
        (F = F.toString()),
          (g =
            this instanceof et
              ? F
              : F.substr(0, 1) === "("
                ? Qi(F.substr(1, F.length - 2))
                : Qi(F));
      },
    }),
    Object.defineProperty(this, "value", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this instanceof et ? Qi(g.substr(1, g.length - 1)) : g;
      },
      set: function (F) {
        (F = F.toString()), (g = this instanceof et ? "/" + F : F);
      },
    }),
    Object.defineProperty(this, "hasAnnotation", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this.Rect;
      },
    }),
    Object.defineProperty(this, "Type", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return this.hasAnnotation ? "/Annot" : null;
      },
    }),
    Object.defineProperty(this, "Subtype", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return this.hasAnnotation ? "/Widget" : null;
      },
    });
  var L,
    y = !1;
  Object.defineProperty(this, "hasAppearanceStream", {
    enumerable: !0,
    configurable: !0,
    get: function () {
      return y;
    },
    set: function (F) {
      (F = !!F), (y = F);
    },
  }),
    Object.defineProperty(this, "page", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        if (L) return L;
      },
      set: function (F) {
        L = F;
      },
    }),
    Object.defineProperty(this, "readOnly", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 1);
      },
      set: function (F) {
        F ? (this.Ff = ke(this.Ff, 1)) : (this.Ff = Re(this.Ff, 1));
      },
    }),
    Object.defineProperty(this, "required", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 2);
      },
      set: function (F) {
        F ? (this.Ff = ke(this.Ff, 2)) : (this.Ff = Re(this.Ff, 2));
      },
    }),
    Object.defineProperty(this, "noExport", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 3);
      },
      set: function (F) {
        F ? (this.Ff = ke(this.Ff, 3)) : (this.Ff = Re(this.Ff, 3));
      },
    });
  var N = null;
  Object.defineProperty(this, "Q", {
    enumerable: !0,
    configurable: !1,
    get: function () {
      if (N !== null) return N;
    },
    set: function (F) {
      if ([0, 1, 2].indexOf(F) === -1)
        throw new Error('Invalid value "' + F + '" for attribute Q supplied.');
      N = F;
    },
  }),
    Object.defineProperty(this, "textAlign", {
      get: function () {
        var F;
        switch (N) {
          case 0:
          default:
            F = "left";
            break;
          case 1:
            F = "center";
            break;
          case 2:
            F = "right";
        }
        return F;
      },
      configurable: !0,
      enumerable: !0,
      set: function (F) {
        switch (F) {
          case "right":
          case 2:
            N = 2;
            break;
          case "center":
          case 1:
            N = 1;
            break;
          case "left":
          case 0:
          default:
            N = 0;
        }
      },
    });
};
bt(cr, Qr);
var Si = function () {
  cr.call(this),
    (this.FT = "/Ch"),
    (this.V = "()"),
    (this.fontName = "zapfdingbats");
  var t = 0;
  Object.defineProperty(this, "TI", {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return t;
    },
    set: function (e) {
      t = e;
    },
  }),
    Object.defineProperty(this, "topIndex", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return t;
      },
      set: function (e) {
        t = e;
      },
    });
  var A = [];
  Object.defineProperty(this, "Opt", {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return v0(A, this.objId, this.scope);
    },
    set: function (e) {
      var r, n;
      (n = []),
        typeof (r = e) == "string" &&
          (n = (function (i, s, c) {
            c || (c = 1);
            for (var u, h = []; (u = s.exec(i)); ) h.push(u[c]);
            return h;
          })(r, /\((.*?)\)/g)),
        (A = n);
    },
  }),
    (this.getOptions = function () {
      return A;
    }),
    (this.setOptions = function (e) {
      (A = e), this.sort && A.sort();
    }),
    (this.addOption = function (e) {
      (e = (e = e || "").toString()), A.push(e), this.sort && A.sort();
    }),
    (this.removeOption = function (e, r) {
      for (
        r = r || !1, e = (e = e || "").toString();
        A.indexOf(e) !== -1 && (A.splice(A.indexOf(e), 1), r !== !1);

      );
    }),
    Object.defineProperty(this, "combo", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 18);
      },
      set: function (e) {
        e ? (this.Ff = ke(this.Ff, 18)) : (this.Ff = Re(this.Ff, 18));
      },
    }),
    Object.defineProperty(this, "edit", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 19);
      },
      set: function (e) {
        this.combo === !0 &&
          (e ? (this.Ff = ke(this.Ff, 19)) : (this.Ff = Re(this.Ff, 19)));
      },
    }),
    Object.defineProperty(this, "sort", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 20);
      },
      set: function (e) {
        e
          ? ((this.Ff = ke(this.Ff, 20)), A.sort())
          : (this.Ff = Re(this.Ff, 20));
      },
    }),
    Object.defineProperty(this, "multiSelect", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 22);
      },
      set: function (e) {
        e ? (this.Ff = ke(this.Ff, 22)) : (this.Ff = Re(this.Ff, 22));
      },
    }),
    Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 23);
      },
      set: function (e) {
        e ? (this.Ff = ke(this.Ff, 23)) : (this.Ff = Re(this.Ff, 23));
      },
    }),
    Object.defineProperty(this, "commitOnSelChange", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 27);
      },
      set: function (e) {
        e ? (this.Ff = ke(this.Ff, 27)) : (this.Ff = Re(this.Ff, 27));
      },
    }),
    (this.hasAppearanceStream = !1);
};
bt(Si, cr);
var Hi = function () {
  Si.call(this), (this.fontName = "helvetica"), (this.combo = !1);
};
bt(Hi, Si);
var Ni = function () {
  Hi.call(this), (this.combo = !0);
};
bt(Ni, Hi);
var ao = function () {
  Ni.call(this), (this.edit = !0);
};
bt(ao, Ni);
var et = function () {
  cr.call(this),
    (this.FT = "/Btn"),
    Object.defineProperty(this, "noToggleToOff", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 15);
      },
      set: function (e) {
        e ? (this.Ff = ke(this.Ff, 15)) : (this.Ff = Re(this.Ff, 15));
      },
    }),
    Object.defineProperty(this, "radio", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 16);
      },
      set: function (e) {
        e ? (this.Ff = ke(this.Ff, 16)) : (this.Ff = Re(this.Ff, 16));
      },
    }),
    Object.defineProperty(this, "pushButton", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 17);
      },
      set: function (e) {
        e ? (this.Ff = ke(this.Ff, 17)) : (this.Ff = Re(this.Ff, 17));
      },
    }),
    Object.defineProperty(this, "radioIsUnison", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 26);
      },
      set: function (e) {
        e ? (this.Ff = ke(this.Ff, 26)) : (this.Ff = Re(this.Ff, 26));
      },
    });
  var t,
    A = {};
  Object.defineProperty(this, "MK", {
    enumerable: !1,
    configurable: !1,
    get: function () {
      var e = function (i) {
        return i;
      };
      if (
        (this.scope && (e = this.scope.internal.getEncryptor(this.objId)),
        Object.keys(A).length !== 0)
      ) {
        var r,
          n = [];
        for (r in (n.push("<<"), A)) n.push("/" + r + " (" + kn(e(A[r])) + ")");
        return (
          n.push(">>"),
          n.join(`
`)
        );
      }
    },
    set: function (e) {
      Qe(e) === "object" && (A = e);
    },
  }),
    Object.defineProperty(this, "caption", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return A.CA || "";
      },
      set: function (e) {
        typeof e == "string" && (A.CA = e);
      },
    }),
    Object.defineProperty(this, "AS", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return t;
      },
      set: function (e) {
        t = e;
      },
    }),
    Object.defineProperty(this, "appearanceState", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return t.substr(1, t.length - 1);
      },
      set: function (e) {
        t = "/" + e;
      },
    });
};
bt(et, cr);
var so = function () {
  et.call(this), (this.pushButton = !0);
};
bt(so, et);
var _i = function () {
  et.call(this), (this.radio = !0), (this.pushButton = !1);
  var t = [];
  Object.defineProperty(this, "Kids", {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return t;
    },
    set: function (A) {
      t = A !== void 0 ? A : [];
    },
  });
};
bt(_i, et);
var Uo = function () {
  var t, A;
  cr.call(this),
    Object.defineProperty(this, "Parent", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return t;
      },
      set: function (n) {
        t = n;
      },
    }),
    Object.defineProperty(this, "optionName", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return A;
      },
      set: function (n) {
        A = n;
      },
    });
  var e,
    r = {};
  Object.defineProperty(this, "MK", {
    enumerable: !1,
    configurable: !1,
    get: function () {
      var n = function (c) {
        return c;
      };
      this.scope && (n = this.scope.internal.getEncryptor(this.objId));
      var i,
        s = [];
      for (i in (s.push("<<"), r)) s.push("/" + i + " (" + kn(n(r[i])) + ")");
      return (
        s.push(">>"),
        s.join(`
`)
      );
    },
    set: function (n) {
      Qe(n) === "object" && (r = n);
    },
  }),
    Object.defineProperty(this, "caption", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return r.CA || "";
      },
      set: function (n) {
        typeof n == "string" && (r.CA = n);
      },
    }),
    Object.defineProperty(this, "AS", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return e;
      },
      set: function (n) {
        e = n;
      },
    }),
    Object.defineProperty(this, "appearanceState", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return e.substr(1, e.length - 1);
      },
      set: function (n) {
        e = "/" + n;
      },
    }),
    (this.caption = "l"),
    (this.appearanceState = "Off"),
    (this._AppearanceType = OA.RadioButton.Circle),
    (this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(
      this.optionName,
    ));
};
bt(Uo, cr),
  (_i.prototype.setAppearance = function (t) {
    if (!("createAppearanceStream" in t) || !("getCA" in t))
      throw new Error(
        "Couldn't assign Appearance to RadioButton. Appearance was Invalid!",
      );
    for (var A in this.Kids)
      if (this.Kids.hasOwnProperty(A)) {
        var e = this.Kids[A];
        (e.appearanceStreamContent = t.createAppearanceStream(e.optionName)),
          (e.caption = t.getCA());
      }
  }),
  (_i.prototype.createOption = function (t) {
    var A = new Uo();
    return (
      (A.Parent = this),
      (A.optionName = t),
      this.Kids.push(A),
      S5.call(this.scope, A),
      A
    );
  });
var oo = function () {
  et.call(this),
    (this.fontName = "zapfdingbats"),
    (this.caption = "3"),
    (this.appearanceState = "On"),
    (this.value = "On"),
    (this.textAlign = "center"),
    (this.appearanceStreamContent = OA.CheckBox.createAppearanceStream());
};
bt(oo, et);
var Kn = function () {
  cr.call(this),
    (this.FT = "/Tx"),
    Object.defineProperty(this, "multiline", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 13);
      },
      set: function (A) {
        A ? (this.Ff = ke(this.Ff, 13)) : (this.Ff = Re(this.Ff, 13));
      },
    }),
    Object.defineProperty(this, "fileSelect", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 21);
      },
      set: function (A) {
        A ? (this.Ff = ke(this.Ff, 21)) : (this.Ff = Re(this.Ff, 21));
      },
    }),
    Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 23);
      },
      set: function (A) {
        A ? (this.Ff = ke(this.Ff, 23)) : (this.Ff = Re(this.Ff, 23));
      },
    }),
    Object.defineProperty(this, "doNotScroll", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 24);
      },
      set: function (A) {
        A ? (this.Ff = ke(this.Ff, 24)) : (this.Ff = Re(this.Ff, 24));
      },
    }),
    Object.defineProperty(this, "comb", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 25);
      },
      set: function (A) {
        A ? (this.Ff = ke(this.Ff, 25)) : (this.Ff = Re(this.Ff, 25));
      },
    }),
    Object.defineProperty(this, "richText", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 26);
      },
      set: function (A) {
        A ? (this.Ff = ke(this.Ff, 26)) : (this.Ff = Re(this.Ff, 26));
      },
    });
  var t = null;
  Object.defineProperty(this, "MaxLen", {
    enumerable: !0,
    configurable: !1,
    get: function () {
      return t;
    },
    set: function (A) {
      t = A;
    },
  }),
    Object.defineProperty(this, "maxLength", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return t;
      },
      set: function (A) {
        Number.isInteger(A) && (t = A);
      },
    }),
    Object.defineProperty(this, "hasAppearanceStream", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return this.V || this.DV;
      },
    });
};
bt(Kn, cr);
var co = function () {
  Kn.call(this),
    Object.defineProperty(this, "password", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return !!Ke(this.Ff, 14);
      },
      set: function (t) {
        t ? (this.Ff = ke(this.Ff, 14)) : (this.Ff = Re(this.Ff, 14));
      },
    }),
    (this.password = !0);
};
bt(co, Kn);
var OA = {
  CheckBox: {
    createAppearanceStream: function () {
      return {
        N: { On: OA.CheckBox.YesNormal },
        D: { On: OA.CheckBox.YesPushDown, Off: OA.CheckBox.OffPushDown },
      };
    },
    YesPushDown: function (t) {
      var A = Cr(t);
      A.scope = t.scope;
      var e = [],
        r = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
        n = t.scope.__private__.encodeColorString(t.color),
        i = Pu(t, t.caption);
      return (
        e.push("0.749023 g"),
        e.push(
          "0 0 " +
            zA(OA.internal.getWidth(t)) +
            " " +
            zA(OA.internal.getHeight(t)) +
            " re",
        ),
        e.push("f"),
        e.push("BMC"),
        e.push("q"),
        e.push("0 0 1 rg"),
        e.push("/" + r + " " + zA(i.fontSize) + " Tf " + n),
        e.push("BT"),
        e.push(i.text),
        e.push("ET"),
        e.push("Q"),
        e.push("EMC"),
        (A.stream = e.join(`
`)),
        A
      );
    },
    YesNormal: function (t) {
      var A = Cr(t);
      A.scope = t.scope;
      var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
        r = t.scope.__private__.encodeColorString(t.color),
        n = [],
        i = OA.internal.getHeight(t),
        s = OA.internal.getWidth(t),
        c = Pu(t, t.caption);
      return (
        n.push("1 g"),
        n.push("0 0 " + zA(s) + " " + zA(i) + " re"),
        n.push("f"),
        n.push("q"),
        n.push("0 0 1 rg"),
        n.push("0 0 " + zA(s - 1) + " " + zA(i - 1) + " re"),
        n.push("W"),
        n.push("n"),
        n.push("0 g"),
        n.push("BT"),
        n.push("/" + e + " " + zA(c.fontSize) + " Tf " + r),
        n.push(c.text),
        n.push("ET"),
        n.push("Q"),
        (A.stream = n.join(`
`)),
        A
      );
    },
    OffPushDown: function (t) {
      var A = Cr(t);
      A.scope = t.scope;
      var e = [];
      return (
        e.push("0.749023 g"),
        e.push(
          "0 0 " +
            zA(OA.internal.getWidth(t)) +
            " " +
            zA(OA.internal.getHeight(t)) +
            " re",
        ),
        e.push("f"),
        (A.stream = e.join(`
`)),
        A
      );
    },
  },
  RadioButton: {
    Circle: {
      createAppearanceStream: function (t) {
        var A = { D: { Off: OA.RadioButton.Circle.OffPushDown }, N: {} };
        return (
          (A.N[t] = OA.RadioButton.Circle.YesNormal),
          (A.D[t] = OA.RadioButton.Circle.YesPushDown),
          A
        );
      },
      getCA: function () {
        return "l";
      },
      YesNormal: function (t) {
        var A = Cr(t);
        A.scope = t.scope;
        var e = [],
          r =
            OA.internal.getWidth(t) <= OA.internal.getHeight(t)
              ? OA.internal.getWidth(t) / 4
              : OA.internal.getHeight(t) / 4;
        r = Number((0.9 * r).toFixed(5));
        var n = OA.internal.Bezier_C,
          i = Number((r * n).toFixed(5));
        return (
          e.push("q"),
          e.push(
            "1 0 0 1 " +
              cn(OA.internal.getWidth(t) / 2) +
              " " +
              cn(OA.internal.getHeight(t) / 2) +
              " cm",
          ),
          e.push(r + " 0 m"),
          e.push(r + " " + i + " " + i + " " + r + " 0 " + r + " c"),
          e.push("-" + i + " " + r + " -" + r + " " + i + " -" + r + " 0 c"),
          e.push("-" + r + " -" + i + " -" + i + " -" + r + " 0 -" + r + " c"),
          e.push(i + " -" + r + " " + r + " -" + i + " " + r + " 0 c"),
          e.push("f"),
          e.push("Q"),
          (A.stream = e.join(`
`)),
          A
        );
      },
      YesPushDown: function (t) {
        var A = Cr(t);
        A.scope = t.scope;
        var e = [],
          r =
            OA.internal.getWidth(t) <= OA.internal.getHeight(t)
              ? OA.internal.getWidth(t) / 4
              : OA.internal.getHeight(t) / 4;
        r = Number((0.9 * r).toFixed(5));
        var n = Number((2 * r).toFixed(5)),
          i = Number((n * OA.internal.Bezier_C).toFixed(5)),
          s = Number((r * OA.internal.Bezier_C).toFixed(5));
        return (
          e.push("0.749023 g"),
          e.push("q"),
          e.push(
            "1 0 0 1 " +
              cn(OA.internal.getWidth(t) / 2) +
              " " +
              cn(OA.internal.getHeight(t) / 2) +
              " cm",
          ),
          e.push(n + " 0 m"),
          e.push(n + " " + i + " " + i + " " + n + " 0 " + n + " c"),
          e.push("-" + i + " " + n + " -" + n + " " + i + " -" + n + " 0 c"),
          e.push("-" + n + " -" + i + " -" + i + " -" + n + " 0 -" + n + " c"),
          e.push(i + " -" + n + " " + n + " -" + i + " " + n + " 0 c"),
          e.push("f"),
          e.push("Q"),
          e.push("0 g"),
          e.push("q"),
          e.push(
            "1 0 0 1 " +
              cn(OA.internal.getWidth(t) / 2) +
              " " +
              cn(OA.internal.getHeight(t) / 2) +
              " cm",
          ),
          e.push(r + " 0 m"),
          e.push(r + " " + s + " " + s + " " + r + " 0 " + r + " c"),
          e.push("-" + s + " " + r + " -" + r + " " + s + " -" + r + " 0 c"),
          e.push("-" + r + " -" + s + " -" + s + " -" + r + " 0 -" + r + " c"),
          e.push(s + " -" + r + " " + r + " -" + s + " " + r + " 0 c"),
          e.push("f"),
          e.push("Q"),
          (A.stream = e.join(`
`)),
          A
        );
      },
      OffPushDown: function (t) {
        var A = Cr(t);
        A.scope = t.scope;
        var e = [],
          r =
            OA.internal.getWidth(t) <= OA.internal.getHeight(t)
              ? OA.internal.getWidth(t) / 4
              : OA.internal.getHeight(t) / 4;
        r = Number((0.9 * r).toFixed(5));
        var n = Number((2 * r).toFixed(5)),
          i = Number((n * OA.internal.Bezier_C).toFixed(5));
        return (
          e.push("0.749023 g"),
          e.push("q"),
          e.push(
            "1 0 0 1 " +
              cn(OA.internal.getWidth(t) / 2) +
              " " +
              cn(OA.internal.getHeight(t) / 2) +
              " cm",
          ),
          e.push(n + " 0 m"),
          e.push(n + " " + i + " " + i + " " + n + " 0 " + n + " c"),
          e.push("-" + i + " " + n + " -" + n + " " + i + " -" + n + " 0 c"),
          e.push("-" + n + " -" + i + " -" + i + " -" + n + " 0 -" + n + " c"),
          e.push(i + " -" + n + " " + n + " -" + i + " " + n + " 0 c"),
          e.push("f"),
          e.push("Q"),
          (A.stream = e.join(`
`)),
          A
        );
      },
    },
    Cross: {
      createAppearanceStream: function (t) {
        var A = { D: { Off: OA.RadioButton.Cross.OffPushDown }, N: {} };
        return (
          (A.N[t] = OA.RadioButton.Cross.YesNormal),
          (A.D[t] = OA.RadioButton.Cross.YesPushDown),
          A
        );
      },
      getCA: function () {
        return "8";
      },
      YesNormal: function (t) {
        var A = Cr(t);
        A.scope = t.scope;
        var e = [],
          r = OA.internal.calculateCross(t);
        return (
          e.push("q"),
          e.push(
            "1 1 " +
              zA(OA.internal.getWidth(t) - 2) +
              " " +
              zA(OA.internal.getHeight(t) - 2) +
              " re",
          ),
          e.push("W"),
          e.push("n"),
          e.push(zA(r.x1.x) + " " + zA(r.x1.y) + " m"),
          e.push(zA(r.x2.x) + " " + zA(r.x2.y) + " l"),
          e.push(zA(r.x4.x) + " " + zA(r.x4.y) + " m"),
          e.push(zA(r.x3.x) + " " + zA(r.x3.y) + " l"),
          e.push("s"),
          e.push("Q"),
          (A.stream = e.join(`
`)),
          A
        );
      },
      YesPushDown: function (t) {
        var A = Cr(t);
        A.scope = t.scope;
        var e = OA.internal.calculateCross(t),
          r = [];
        return (
          r.push("0.749023 g"),
          r.push(
            "0 0 " +
              zA(OA.internal.getWidth(t)) +
              " " +
              zA(OA.internal.getHeight(t)) +
              " re",
          ),
          r.push("f"),
          r.push("q"),
          r.push(
            "1 1 " +
              zA(OA.internal.getWidth(t) - 2) +
              " " +
              zA(OA.internal.getHeight(t) - 2) +
              " re",
          ),
          r.push("W"),
          r.push("n"),
          r.push(zA(e.x1.x) + " " + zA(e.x1.y) + " m"),
          r.push(zA(e.x2.x) + " " + zA(e.x2.y) + " l"),
          r.push(zA(e.x4.x) + " " + zA(e.x4.y) + " m"),
          r.push(zA(e.x3.x) + " " + zA(e.x3.y) + " l"),
          r.push("s"),
          r.push("Q"),
          (A.stream = r.join(`
`)),
          A
        );
      },
      OffPushDown: function (t) {
        var A = Cr(t);
        A.scope = t.scope;
        var e = [];
        return (
          e.push("0.749023 g"),
          e.push(
            "0 0 " +
              zA(OA.internal.getWidth(t)) +
              " " +
              zA(OA.internal.getHeight(t)) +
              " re",
          ),
          e.push("f"),
          (A.stream = e.join(`
`)),
          A
        );
      },
    },
  },
  createDefaultAppearanceStream: function (t) {
    var A = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
      e = t.scope.__private__.encodeColorString(t.color);
    return "/" + A + " " + t.fontSize + " Tf " + e;
  },
};
(OA.internal = {
  Bezier_C: 0.551915024494,
  calculateCross: function (t) {
    var A = OA.internal.getWidth(t),
      e = OA.internal.getHeight(t),
      r = Math.min(A, e);
    return {
      x1: { x: (A - r) / 2, y: (e - r) / 2 + r },
      x2: { x: (A - r) / 2 + r, y: (e - r) / 2 },
      x3: { x: (A - r) / 2, y: (e - r) / 2 },
      x4: { x: (A - r) / 2 + r, y: (e - r) / 2 + r },
    };
  },
}),
  (OA.internal.getWidth = function (t) {
    var A = 0;
    return Qe(t) === "object" && (A = Rf(t.Rect[2])), A;
  }),
  (OA.internal.getHeight = function (t) {
    var A = 0;
    return Qe(t) === "object" && (A = Rf(t.Rect[3])), A;
  });
var S5 = (De.addField = function (t) {
  if ((x5(this, t), !(t instanceof cr)))
    throw new Error("Invalid argument passed to jsPDF.addField.");
  var A;
  return (
    (A = t).scope.internal.acroformPlugin.printedOut &&
      ((A.scope.internal.acroformPlugin.printedOut = !1),
      (A.scope.internal.acroformPlugin.acroFormDictionaryRoot = null)),
    A.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(A),
    (t.page = t.scope.internal.getCurrentPageInfo().pageNumber),
    this
  );
});
(De.AcroFormChoiceField = Si),
  (De.AcroFormListBox = Hi),
  (De.AcroFormComboBox = Ni),
  (De.AcroFormEditBox = ao),
  (De.AcroFormButton = et),
  (De.AcroFormPushButton = so),
  (De.AcroFormRadioButton = _i),
  (De.AcroFormCheckBox = oo),
  (De.AcroFormTextField = Kn),
  (De.AcroFormPasswordField = co),
  (De.AcroFormAppearance = OA),
  (De.AcroForm = {
    ChoiceField: Si,
    ListBox: Hi,
    ComboBox: Ni,
    EditBox: ao,
    Button: et,
    PushButton: so,
    RadioButton: _i,
    CheckBox: oo,
    TextField: Kn,
    PasswordField: co,
    Appearance: OA,
  }),
  (jA.AcroForm = {
    ChoiceField: Si,
    ListBox: Hi,
    ComboBox: Ni,
    EditBox: ao,
    Button: et,
    PushButton: so,
    RadioButton: _i,
    CheckBox: oo,
    TextField: Kn,
    PasswordField: co,
    Appearance: OA,
  });
function Q0(t) {
  return t.reduce(function (A, e, r) {
    return (A[e] = r), A;
  }, {});
}
(function (t) {
  t.__addimage__ = {};
  var A = "UNKNOWN",
    e = {
      PNG: [[137, 80, 78, 71]],
      TIFF: [
        [77, 77, 0, 42],
        [73, 73, 42, 0],
      ],
      JPEG: [
        [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
        [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
        [255, 216, 255, 219],
        [255, 216, 255, 238],
      ],
      JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
      GIF87a: [[71, 73, 70, 56, 55, 97]],
      GIF89a: [[71, 73, 70, 56, 57, 97]],
      WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]],
      BMP: [
        [66, 77],
        [66, 65],
        [67, 73],
        [67, 80],
        [73, 67],
        [80, 84],
      ],
    },
    r = (t.__addimage__.getImageFileTypeByImageData = function (S, x) {
      var K,
        P,
        sA,
        nA,
        cA,
        eA = A;
      if (
        (x = x || A) === "RGBA" ||
        (S.data !== void 0 &&
          S.data instanceof Uint8ClampedArray &&
          "height" in S &&
          "width" in S)
      )
        return "RGBA";
      if (z(S))
        for (cA in e)
          for (sA = e[cA], K = 0; K < sA.length; K += 1) {
            for (nA = !0, P = 0; P < sA[K].length; P += 1)
              if (sA[K][P] !== void 0 && sA[K][P] !== S[P]) {
                nA = !1;
                break;
              }
            if (nA === !0) {
              eA = cA;
              break;
            }
          }
      else
        for (cA in e)
          for (sA = e[cA], K = 0; K < sA.length; K += 1) {
            for (nA = !0, P = 0; P < sA[K].length; P += 1)
              if (sA[K][P] !== void 0 && sA[K][P] !== S.charCodeAt(P)) {
                nA = !1;
                break;
              }
            if (nA === !0) {
              eA = cA;
              break;
            }
          }
      return eA === A && x !== A && (eA = x), eA;
    }),
    n = function S(x) {
      for (
        var K = this.internal.write,
          P = this.internal.putStream,
          sA = (0, this.internal.getFilters)();
        sA.indexOf("FlateEncode") !== -1;

      )
        sA.splice(sA.indexOf("FlateEncode"), 1);
      x.objectId = this.internal.newObject();
      var nA = [];
      if (
        (nA.push({ key: "Type", value: "/XObject" }),
        nA.push({ key: "Subtype", value: "/Image" }),
        nA.push({ key: "Width", value: x.width }),
        nA.push({ key: "Height", value: x.height }),
        x.colorSpace === N.INDEXED
          ? nA.push({
              key: "ColorSpace",
              value:
                "[/Indexed /DeviceRGB " +
                (x.palette.length / 3 - 1) +
                " " +
                ("sMask" in x && x.sMask !== void 0
                  ? x.objectId + 2
                  : x.objectId + 1) +
                " 0 R]",
            })
          : (nA.push({ key: "ColorSpace", value: "/" + x.colorSpace }),
            x.colorSpace === N.DEVICE_CMYK &&
              nA.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })),
        nA.push({ key: "BitsPerComponent", value: x.bitsPerComponent }),
        "decodeParameters" in x &&
          x.decodeParameters !== void 0 &&
          nA.push({
            key: "DecodeParms",
            value: "<<" + x.decodeParameters + ">>",
          }),
        "transparency" in x && Array.isArray(x.transparency))
      ) {
        for (var cA = "", eA = 0, hA = x.transparency.length; eA < hA; eA++)
          cA += x.transparency[eA] + " " + x.transparency[eA] + " ";
        nA.push({ key: "Mask", value: "[" + cA + "]" });
      }
      x.sMask !== void 0 &&
        nA.push({ key: "SMask", value: x.objectId + 1 + " 0 R" });
      var fA = x.filter !== void 0 ? ["/" + x.filter] : void 0;
      if (
        (P({
          data: x.data,
          additionalKeyValues: nA,
          alreadyAppliedFilters: fA,
          objectId: x.objectId,
        }),
        K("endobj"),
        "sMask" in x && x.sMask !== void 0)
      ) {
        var UA =
            "/Predictor " +
            x.predictor +
            " /Colors 1 /BitsPerComponent " +
            x.bitsPerComponent +
            " /Columns " +
            x.width,
          Q = {
            width: x.width,
            height: x.height,
            colorSpace: "DeviceGray",
            bitsPerComponent: x.bitsPerComponent,
            decodeParameters: UA,
            data: x.sMask,
          };
        "filter" in x && (Q.filter = x.filter), S.call(this, Q);
      }
      if (x.colorSpace === N.INDEXED) {
        var _ = this.internal.newObject();
        P({ data: T(new Uint8Array(x.palette)), objectId: _ }), K("endobj");
      }
    },
    i = function () {
      var S = this.internal.collections.addImage_images;
      for (var x in S) n.call(this, S[x]);
    },
    s = function () {
      var S,
        x = this.internal.collections.addImage_images,
        K = this.internal.write;
      for (var P in x) K("/I" + (S = x[P]).index, S.objectId, "0", "R");
    },
    c = function () {
      this.internal.collections.addImage_images ||
        ((this.internal.collections.addImage_images = {}),
        this.internal.events.subscribe("putResources", i),
        this.internal.events.subscribe("putXobjectDict", s));
    },
    u = function () {
      var S = this.internal.collections.addImage_images;
      return c.call(this), S;
    },
    h = function () {
      return Object.keys(this.internal.collections.addImage_images).length;
    },
    B = function (S) {
      return typeof t["process" + S.toUpperCase()] == "function";
    },
    p = function (S) {
      return Qe(S) === "object" && S.nodeType === 1;
    },
    w = function (S, x) {
      if (S.nodeName === "IMG" && S.hasAttribute("src")) {
        var K = "" + S.getAttribute("src");
        if (K.indexOf("data:image/") === 0)
          return xa(unescape(K).split("base64,").pop());
        var P = t.loadFile(K, !0);
        if (P !== void 0) return P;
      }
      if (S.nodeName === "CANVAS") {
        if (S.width === 0 || S.height === 0)
          throw new Error(
            "Given canvas must have data. Canvas width: " +
              S.width +
              ", height: " +
              S.height,
          );
        var sA;
        switch (x) {
          case "PNG":
            sA = "image/png";
            break;
          case "WEBP":
            sA = "image/webp";
            break;
          case "JPEG":
          case "JPG":
          default:
            sA = "image/jpeg";
        }
        return xa(S.toDataURL(sA, 1).split("base64,").pop());
      }
    },
    g = function (S) {
      var x = this.internal.collections.addImage_images;
      if (x) {
        for (var K in x) if (S === x[K].alias) return x[K];
      }
    },
    L = function (S, x, K) {
      return (
        S || x || ((S = -96), (x = -96)),
        S < 0 && (S = (-1 * K.width * 72) / S / this.internal.scaleFactor),
        x < 0 && (x = (-1 * K.height * 72) / x / this.internal.scaleFactor),
        S === 0 && (S = (x * K.width) / K.height),
        x === 0 && (x = (S * K.height) / K.width),
        [S, x]
      );
    },
    y = function (S, x, K, P, sA, nA) {
      var cA = L.call(this, K, P, sA),
        eA = this.internal.getCoordinateString,
        hA = this.internal.getVerticalCoordinateString,
        fA = u.call(this);
      if (((K = cA[0]), (P = cA[1]), (fA[sA.index] = sA), nA)) {
        nA *= Math.PI / 180;
        var UA = Math.cos(nA),
          Q = Math.sin(nA),
          _ = function (R) {
            return R.toFixed(4);
          },
          O = [_(UA), _(Q), _(-1 * Q), _(UA), 0, 0, "cm"];
      }
      this.internal.write("q"),
        nA
          ? (this.internal.write(
              [1, "0", "0", 1, eA(S), hA(x + P), "cm"].join(" "),
            ),
            this.internal.write(O.join(" ")),
            this.internal.write(
              [eA(K), "0", "0", eA(P), "0", "0", "cm"].join(" "),
            ))
          : this.internal.write(
              [eA(K), "0", "0", eA(P), eA(S), hA(x + P), "cm"].join(" "),
            ),
        this.isAdvancedAPI() &&
          this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")),
        this.internal.write("/I" + sA.index + " Do"),
        this.internal.write("Q");
    },
    N = (t.color_spaces = {
      DEVICE_RGB: "DeviceRGB",
      DEVICE_GRAY: "DeviceGray",
      DEVICE_CMYK: "DeviceCMYK",
      CAL_GREY: "CalGray",
      CAL_RGB: "CalRGB",
      LAB: "Lab",
      ICC_BASED: "ICCBased",
      INDEXED: "Indexed",
      PATTERN: "Pattern",
      SEPARATION: "Separation",
      DEVICE_N: "DeviceN",
    });
  t.decode = {
    DCT_DECODE: "DCTDecode",
    FLATE_DECODE: "FlateDecode",
    LZW_DECODE: "LZWDecode",
    JPX_DECODE: "JPXDecode",
    JBIG2_DECODE: "JBIG2Decode",
    ASCII85_DECODE: "ASCII85Decode",
    ASCII_HEX_DECODE: "ASCIIHexDecode",
    RUN_LENGTH_DECODE: "RunLengthDecode",
    CCITT_FAX_DECODE: "CCITTFaxDecode",
  };
  var F = (t.image_compression = {
      NONE: "NONE",
      FAST: "FAST",
      MEDIUM: "MEDIUM",
      SLOW: "SLOW",
    }),
    I = (t.__addimage__.sHashCode = function (S) {
      var x,
        K,
        P = 0;
      if (typeof S == "string")
        for (K = S.length, x = 0; x < K; x++)
          (P = (P << 5) - P + S.charCodeAt(x)), (P |= 0);
      else if (z(S))
        for (K = S.byteLength / 2, x = 0; x < K; x++)
          (P = (P << 5) - P + S[x]), (P |= 0);
      return P;
    }),
    G = (t.__addimage__.validateStringAsBase64 = function (S) {
      (S = S || "").toString().trim();
      var x = !0;
      return (
        S.length === 0 && (x = !1),
        S.length % 4 != 0 && (x = !1),
        /^[A-Za-z0-9+/]+$/.test(S.substr(0, S.length - 2)) === !1 && (x = !1),
        /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(S.substr(-2)) ===
          !1 && (x = !1),
        x
      );
    }),
    Y = (t.__addimage__.extractImageFromDataUrl = function (S) {
      var x = (S = S || "").split("base64,"),
        K = null;
      if (x.length === 2) {
        var P = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(
          x[0],
        );
        Array.isArray(P) && (K = { mimeType: P[1], charset: P[2], data: x[1] });
      }
      return K;
    }),
    Z = (t.__addimage__.supportsArrayBuffer = function () {
      return typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
    });
  t.__addimage__.isArrayBuffer = function (S) {
    return Z() && S instanceof ArrayBuffer;
  };
  var z = (t.__addimage__.isArrayBufferView = function (S) {
      return (
        Z() &&
        typeof Uint32Array < "u" &&
        (S instanceof Int8Array ||
          S instanceof Uint8Array ||
          (typeof Uint8ClampedArray < "u" && S instanceof Uint8ClampedArray) ||
          S instanceof Int16Array ||
          S instanceof Uint16Array ||
          S instanceof Int32Array ||
          S instanceof Uint32Array ||
          S instanceof Float32Array ||
          S instanceof Float64Array)
      );
    }),
    W = (t.__addimage__.binaryStringToUint8Array = function (S) {
      for (var x = S.length, K = new Uint8Array(x), P = 0; P < x; P++)
        K[P] = S.charCodeAt(P);
      return K;
    }),
    T = (t.__addimage__.arrayBufferToBinaryString = function (S) {
      for (
        var x = "", K = z(S) ? S : new Uint8Array(S), P = 0;
        P < K.length;
        P += 8192
      )
        x += String.fromCharCode.apply(null, K.subarray(P, P + 8192));
      return x;
    });
  t.addImage = function () {
    var S, x, K, P, sA, nA, cA, eA, hA;
    if (
      (typeof arguments[1] == "number"
        ? ((x = A),
          (K = arguments[1]),
          (P = arguments[2]),
          (sA = arguments[3]),
          (nA = arguments[4]),
          (cA = arguments[5]),
          (eA = arguments[6]),
          (hA = arguments[7]))
        : ((x = arguments[1]),
          (K = arguments[2]),
          (P = arguments[3]),
          (sA = arguments[4]),
          (nA = arguments[5]),
          (cA = arguments[6]),
          (eA = arguments[7]),
          (hA = arguments[8])),
      Qe((S = arguments[0])) === "object" && !p(S) && "imageData" in S)
    ) {
      var fA = S;
      (S = fA.imageData),
        (x = fA.format || x || A),
        (K = fA.x || K || 0),
        (P = fA.y || P || 0),
        (sA = fA.w || fA.width || sA),
        (nA = fA.h || fA.height || nA),
        (cA = fA.alias || cA),
        (eA = fA.compression || eA),
        (hA = fA.rotation || fA.angle || hA);
    }
    var UA = this.internal.getFilters();
    if (
      (eA === void 0 && UA.indexOf("FlateEncode") !== -1 && (eA = "SLOW"),
      isNaN(K) || isNaN(P))
    )
      throw new Error("Invalid coordinates passed to jsPDF.addImage");
    c.call(this);
    var Q = AA.call(this, S, x, cA, eA);
    return y.call(this, K, P, sA, nA, Q, hA), this;
  };
  var AA = function (S, x, K, P) {
      var sA, nA, cA;
      if (typeof S == "string" && r(S) === A) {
        S = unescape(S);
        var eA = uA(S, !1);
        (eA !== "" || (eA = t.loadFile(S, !0)) !== void 0) && (S = eA);
      }
      if ((p(S) && (S = w(S, x)), (x = r(S, x)), !B(x)))
        throw new Error(
          "addImage does not support files of type '" +
            x +
            "', please ensure that a plugin for '" +
            x +
            "' support is added.",
        );
      if (
        (((cA = K) == null || cA.length === 0) &&
          (K = (function (hA) {
            return typeof hA == "string" || z(hA)
              ? I(hA)
              : z(hA.data)
                ? I(hA.data)
                : null;
          })(S)),
        (sA = g.call(this, K)) ||
          (Z() &&
            (S instanceof Uint8Array || x === "RGBA" || ((nA = S), (S = W(S)))),
          (sA = this["process" + x.toUpperCase()](
            S,
            h.call(this),
            K,
            (function (hA) {
              return (
                hA && typeof hA == "string" && (hA = hA.toUpperCase()),
                hA in t.image_compression ? hA : F.NONE
              );
            })(P),
            nA,
          ))),
        !sA)
      )
        throw new Error(
          "An unknown error occurred whilst processing the image.",
        );
      return sA;
    },
    uA = (t.__addimage__.convertBase64ToBinaryString = function (S, x) {
      var K;
      x = typeof x != "boolean" || x;
      var P,
        sA = "";
      if (typeof S == "string") {
        P = (K = Y(S)) !== null ? K.data : S;
        try {
          sA = xa(P);
        } catch (nA) {
          if (x)
            throw G(P)
              ? new Error(
                  "atob-Error in jsPDF.convertBase64ToBinaryString " +
                    nA.message,
                )
              : new Error(
                  "Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ",
                );
        }
      }
      return sA;
    });
  t.getImageProperties = function (S) {
    var x,
      K,
      P = "";
    if (
      (p(S) && (S = w(S)),
      typeof S == "string" &&
        r(S) === A &&
        ((P = uA(S, !1)) === "" && (P = t.loadFile(S) || ""), (S = P)),
      (K = r(S)),
      !B(K))
    )
      throw new Error(
        "addImage does not support files of type '" +
          K +
          "', please ensure that a plugin for '" +
          K +
          "' support is added.",
      );
    if (
      (!Z() || S instanceof Uint8Array || (S = W(S)),
      !(x = this["process" + K.toUpperCase()](S)))
    )
      throw new Error("An unknown error occurred whilst processing the image");
    return (x.fileType = K), x;
  };
})(jA.API),
  (function (t) {
    var A = function (e) {
      if (e !== void 0 && e != "") return !0;
    };
    jA.API.events.push([
      "addPage",
      function (e) {
        this.internal.getPageInfo(e.pageNumber).pageContext.annotations = [];
      },
    ]),
      t.events.push([
        "putPage",
        function (e) {
          for (
            var r,
              n,
              i,
              s = this.internal.getCoordinateString,
              c = this.internal.getVerticalCoordinateString,
              u = this.internal.getPageInfoByObjId(e.objId),
              h = e.pageContext.annotations,
              B = !1,
              p = 0;
            p < h.length && !B;
            p++
          )
            switch ((r = h[p]).type) {
              case "link":
                (A(r.options.url) || A(r.options.pageNumber)) && (B = !0);
                break;
              case "reference":
              case "text":
              case "freetext":
                B = !0;
            }
          if (B != 0) {
            this.internal.write("/Annots [");
            for (var w = 0; w < h.length; w++) {
              r = h[w];
              var g = this.internal.pdfEscape,
                L = this.internal.getEncryptor(e.objId);
              switch (r.type) {
                case "reference":
                  this.internal.write(" " + r.object.objId + " 0 R ");
                  break;
                case "text":
                  var y = this.internal.newAdditionalObject(),
                    N = this.internal.newAdditionalObject(),
                    F = this.internal.getEncryptor(y.objId),
                    I = r.title || "Note";
                  (i =
                    "<</Type /Annot /Subtype /Text " +
                    (n =
                      "/Rect [" +
                      s(r.bounds.x) +
                      " " +
                      c(r.bounds.y + r.bounds.h) +
                      " " +
                      s(r.bounds.x + r.bounds.w) +
                      " " +
                      c(r.bounds.y) +
                      "] ") +
                    "/Contents (" +
                    g(F(r.contents)) +
                    ")"),
                    (i += " /Popup " + N.objId + " 0 R"),
                    (i += " /P " + u.objId + " 0 R"),
                    (i += " /T (" + g(F(I)) + ") >>"),
                    (y.content = i);
                  var G = y.objId + " 0 R";
                  (i =
                    "<</Type /Annot /Subtype /Popup " +
                    (n =
                      "/Rect [" +
                      s(r.bounds.x + 30) +
                      " " +
                      c(r.bounds.y + r.bounds.h) +
                      " " +
                      s(r.bounds.x + r.bounds.w + 30) +
                      " " +
                      c(r.bounds.y) +
                      "] ") +
                    " /Parent " +
                    G),
                    r.open && (i += " /Open true"),
                    (i += " >>"),
                    (N.content = i),
                    this.internal.write(y.objId, "0 R", N.objId, "0 R");
                  break;
                case "freetext":
                  n =
                    "/Rect [" +
                    s(r.bounds.x) +
                    " " +
                    c(r.bounds.y) +
                    " " +
                    s(r.bounds.x + r.bounds.w) +
                    " " +
                    c(r.bounds.y + r.bounds.h) +
                    "] ";
                  var Y = r.color || "#000000";
                  (i =
                    "<</Type /Annot /Subtype /FreeText " +
                    n +
                    "/Contents (" +
                    g(L(r.contents)) +
                    ")"),
                    (i +=
                      " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" +
                      Y +
                      ")"),
                    (i += " /Border [0 0 0]"),
                    (i += " >>"),
                    this.internal.write(i);
                  break;
                case "link":
                  if (r.options.name) {
                    var Z = this.annotations._nameMap[r.options.name];
                    (r.options.pageNumber = Z.page), (r.options.top = Z.y);
                  } else r.options.top || (r.options.top = 0);
                  if (
                    ((n =
                      "/Rect [" +
                      r.finalBounds.x +
                      " " +
                      r.finalBounds.y +
                      " " +
                      r.finalBounds.w +
                      " " +
                      r.finalBounds.h +
                      "] "),
                    (i = ""),
                    r.options.url)
                  )
                    i =
                      "<</Type /Annot /Subtype /Link " +
                      n +
                      "/Border [0 0 0] /A <</S /URI /URI (" +
                      g(L(r.options.url)) +
                      ") >>";
                  else if (r.options.pageNumber)
                    switch (
                      ((i =
                        "<</Type /Annot /Subtype /Link " +
                        n +
                        "/Border [0 0 0] /Dest [" +
                        this.internal.getPageInfo(r.options.pageNumber).objId +
                        " 0 R"),
                      (r.options.magFactor = r.options.magFactor || "XYZ"),
                      r.options.magFactor)
                    ) {
                      case "Fit":
                        i += " /Fit]";
                        break;
                      case "FitH":
                        i += " /FitH " + r.options.top + "]";
                        break;
                      case "FitV":
                        (r.options.left = r.options.left || 0),
                          (i += " /FitV " + r.options.left + "]");
                        break;
                      case "XYZ":
                      default:
                        var z = c(r.options.top);
                        (r.options.left = r.options.left || 0),
                          r.options.zoom === void 0 && (r.options.zoom = 0),
                          (i +=
                            " /XYZ " +
                            r.options.left +
                            " " +
                            z +
                            " " +
                            r.options.zoom +
                            "]");
                    }
                  i != "" && ((i += " >>"), this.internal.write(i));
              }
            }
            this.internal.write("]");
          }
        },
      ]),
      (t.createAnnotation = function (e) {
        var r = this.internal.getCurrentPageInfo();
        switch (e.type) {
          case "link":
            this.link(e.bounds.x, e.bounds.y, e.bounds.w, e.bounds.h, e);
            break;
          case "text":
          case "freetext":
            r.pageContext.annotations.push(e);
        }
      }),
      (t.link = function (e, r, n, i, s) {
        var c = this.internal.getCurrentPageInfo(),
          u = this.internal.getCoordinateString,
          h = this.internal.getVerticalCoordinateString;
        c.pageContext.annotations.push({
          finalBounds: { x: u(e), y: h(r), w: u(e + n), h: h(r + i) },
          options: s,
          type: "link",
        });
      }),
      (t.textWithLink = function (e, r, n, i) {
        var s,
          c,
          u = this.getTextWidth(e),
          h = this.internal.getLineHeight() / this.internal.scaleFactor;
        if (i.maxWidth !== void 0) {
          c = i.maxWidth;
          var B = this.splitTextToSize(e, c).length;
          s = Math.ceil(h * B);
        } else (c = u), (s = h);
        return (
          this.text(e, r, n, i),
          (n += 0.2 * h),
          i.align === "center" && (r -= u / 2),
          i.align === "right" && (r -= u),
          this.link(r, n - h, c, s, i),
          u
        );
      }),
      (t.getTextWidth = function (e) {
        var r = this.internal.getFontSize();
        return (this.getStringUnitWidth(e) * r) / this.internal.scaleFactor;
      });
  })(jA.API),
  (function (t) {
    var A = {
        1569: [65152],
        1570: [65153, 65154],
        1571: [65155, 65156],
        1572: [65157, 65158],
        1573: [65159, 65160],
        1574: [65161, 65162, 65163, 65164],
        1575: [65165, 65166],
        1576: [65167, 65168, 65169, 65170],
        1577: [65171, 65172],
        1578: [65173, 65174, 65175, 65176],
        1579: [65177, 65178, 65179, 65180],
        1580: [65181, 65182, 65183, 65184],
        1581: [65185, 65186, 65187, 65188],
        1582: [65189, 65190, 65191, 65192],
        1583: [65193, 65194],
        1584: [65195, 65196],
        1585: [65197, 65198],
        1586: [65199, 65200],
        1587: [65201, 65202, 65203, 65204],
        1588: [65205, 65206, 65207, 65208],
        1589: [65209, 65210, 65211, 65212],
        1590: [65213, 65214, 65215, 65216],
        1591: [65217, 65218, 65219, 65220],
        1592: [65221, 65222, 65223, 65224],
        1593: [65225, 65226, 65227, 65228],
        1594: [65229, 65230, 65231, 65232],
        1601: [65233, 65234, 65235, 65236],
        1602: [65237, 65238, 65239, 65240],
        1603: [65241, 65242, 65243, 65244],
        1604: [65245, 65246, 65247, 65248],
        1605: [65249, 65250, 65251, 65252],
        1606: [65253, 65254, 65255, 65256],
        1607: [65257, 65258, 65259, 65260],
        1608: [65261, 65262],
        1609: [65263, 65264, 64488, 64489],
        1610: [65265, 65266, 65267, 65268],
        1649: [64336, 64337],
        1655: [64477],
        1657: [64358, 64359, 64360, 64361],
        1658: [64350, 64351, 64352, 64353],
        1659: [64338, 64339, 64340, 64341],
        1662: [64342, 64343, 64344, 64345],
        1663: [64354, 64355, 64356, 64357],
        1664: [64346, 64347, 64348, 64349],
        1667: [64374, 64375, 64376, 64377],
        1668: [64370, 64371, 64372, 64373],
        1670: [64378, 64379, 64380, 64381],
        1671: [64382, 64383, 64384, 64385],
        1672: [64392, 64393],
        1676: [64388, 64389],
        1677: [64386, 64387],
        1678: [64390, 64391],
        1681: [64396, 64397],
        1688: [64394, 64395],
        1700: [64362, 64363, 64364, 64365],
        1702: [64366, 64367, 64368, 64369],
        1705: [64398, 64399, 64400, 64401],
        1709: [64467, 64468, 64469, 64470],
        1711: [64402, 64403, 64404, 64405],
        1713: [64410, 64411, 64412, 64413],
        1715: [64406, 64407, 64408, 64409],
        1722: [64414, 64415],
        1723: [64416, 64417, 64418, 64419],
        1726: [64426, 64427, 64428, 64429],
        1728: [64420, 64421],
        1729: [64422, 64423, 64424, 64425],
        1733: [64480, 64481],
        1734: [64473, 64474],
        1735: [64471, 64472],
        1736: [64475, 64476],
        1737: [64482, 64483],
        1739: [64478, 64479],
        1740: [64508, 64509, 64510, 64511],
        1744: [64484, 64485, 64486, 64487],
        1746: [64430, 64431],
        1747: [64432, 64433],
      },
      e = {
        65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 },
        65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 },
        65165: { 65247: { 65248: { 65258: 65010 } } },
        1617: {
          1612: 64606,
          1613: 64607,
          1614: 64608,
          1615: 64609,
          1616: 64610,
        },
      },
      r = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 },
      n = [1570, 1571, 1573, 1575];
    t.__arabicParser__ = {};
    var i = (t.__arabicParser__.isInArabicSubstitutionA = function (y) {
        return A[y.charCodeAt(0)] !== void 0;
      }),
      s = (t.__arabicParser__.isArabicLetter = function (y) {
        return (
          typeof y == "string" &&
          /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(
            y,
          )
        );
      }),
      c = (t.__arabicParser__.isArabicEndLetter = function (y) {
        return s(y) && i(y) && A[y.charCodeAt(0)].length <= 2;
      }),
      u = (t.__arabicParser__.isArabicAlfLetter = function (y) {
        return s(y) && n.indexOf(y.charCodeAt(0)) >= 0;
      });
    t.__arabicParser__.arabicLetterHasIsolatedForm = function (y) {
      return s(y) && i(y) && A[y.charCodeAt(0)].length >= 1;
    };
    var h = (t.__arabicParser__.arabicLetterHasFinalForm = function (y) {
      return s(y) && i(y) && A[y.charCodeAt(0)].length >= 2;
    });
    t.__arabicParser__.arabicLetterHasInitialForm = function (y) {
      return s(y) && i(y) && A[y.charCodeAt(0)].length >= 3;
    };
    var B = (t.__arabicParser__.arabicLetterHasMedialForm = function (y) {
        return s(y) && i(y) && A[y.charCodeAt(0)].length == 4;
      }),
      p = (t.__arabicParser__.resolveLigatures = function (y) {
        var N = 0,
          F = e,
          I = "",
          G = 0;
        for (N = 0; N < y.length; N += 1)
          F[y.charCodeAt(N)] !== void 0
            ? (G++,
              typeof (F = F[y.charCodeAt(N)]) == "number" &&
                ((I += String.fromCharCode(F)), (F = e), (G = 0)),
              N === y.length - 1 &&
                ((F = e), (I += y.charAt(N - (G - 1))), (N -= G - 1), (G = 0)))
            : ((F = e), (I += y.charAt(N - G)), (N -= G), (G = 0));
        return I;
      });
    t.__arabicParser__.isArabicDiacritic = function (y) {
      return y !== void 0 && r[y.charCodeAt(0)] !== void 0;
    };
    var w = (t.__arabicParser__.getCorrectForm = function (y, N, F) {
        return s(y)
          ? i(y) === !1
            ? -1
            : !h(y) ||
                (!s(N) && !s(F)) ||
                (!s(F) && c(N)) ||
                (c(y) && !s(N)) ||
                (c(y) && u(N)) ||
                (c(y) && c(N))
              ? 0
              : B(y) && s(N) && !c(N) && s(F) && h(F)
                ? 3
                : c(y) || !s(F)
                  ? 1
                  : 2
          : -1;
      }),
      g = function (y) {
        var N = 0,
          F = 0,
          I = 0,
          G = "",
          Y = "",
          Z = "",
          z = (y = y || "").split("\\s+"),
          W = [];
        for (N = 0; N < z.length; N += 1) {
          for (W.push(""), F = 0; F < z[N].length; F += 1)
            (G = z[N][F]),
              (Y = z[N][F - 1]),
              (Z = z[N][F + 1]),
              s(G)
                ? ((I = w(G, Y, Z)),
                  (W[N] +=
                    I !== -1 ? String.fromCharCode(A[G.charCodeAt(0)][I]) : G))
                : (W[N] += G);
          W[N] = p(W[N]);
        }
        return W.join(" ");
      },
      L =
        (t.__arabicParser__.processArabic =
        t.processArabic =
          function () {
            var y,
              N =
                typeof arguments[0] == "string"
                  ? arguments[0]
                  : arguments[0].text,
              F = [];
            if (Array.isArray(N)) {
              var I = 0;
              for (F = [], I = 0; I < N.length; I += 1)
                Array.isArray(N[I])
                  ? F.push([g(N[I][0]), N[I][1], N[I][2]])
                  : F.push([g(N[I])]);
              y = F;
            } else y = g(N);
            return typeof arguments[0] == "string"
              ? y
              : ((arguments[0].text = y), arguments[0]);
          });
    t.events.push(["preProcessText", L]);
  })(jA.API),
  (jA.API.autoPrint = function (t) {
    var A;
    switch ((((t = t || {}).variant = t.variant || "non-conform"), t.variant)) {
      case "javascript":
        this.addJS("print({});");
        break;
      case "non-conform":
      default:
        this.internal.events.subscribe("postPutResources", function () {
          (A = this.internal.newObject()),
            this.internal.out("<<"),
            this.internal.out("/S /Named"),
            this.internal.out("/Type /Action"),
            this.internal.out("/N /Print"),
            this.internal.out(">>"),
            this.internal.out("endobj");
        }),
          this.internal.events.subscribe("putCatalog", function () {
            this.internal.out("/OpenAction " + A + " 0 R");
          });
    }
    return this;
  }),
  (function (t) {
    var A = function () {
      var e = void 0;
      Object.defineProperty(this, "pdf", {
        get: function () {
          return e;
        },
        set: function (c) {
          e = c;
        },
      });
      var r = 150;
      Object.defineProperty(this, "width", {
        get: function () {
          return r;
        },
        set: function (c) {
          (r = isNaN(c) || Number.isInteger(c) === !1 || c < 0 ? 150 : c),
            this.getContext("2d").pageWrapXEnabled &&
              (this.getContext("2d").pageWrapX = r + 1);
        },
      });
      var n = 300;
      Object.defineProperty(this, "height", {
        get: function () {
          return n;
        },
        set: function (c) {
          (n = isNaN(c) || Number.isInteger(c) === !1 || c < 0 ? 300 : c),
            this.getContext("2d").pageWrapYEnabled &&
              (this.getContext("2d").pageWrapY = n + 1);
        },
      });
      var i = [];
      Object.defineProperty(this, "childNodes", {
        get: function () {
          return i;
        },
        set: function (c) {
          i = c;
        },
      });
      var s = {};
      Object.defineProperty(this, "style", {
        get: function () {
          return s;
        },
        set: function (c) {
          s = c;
        },
      }),
        Object.defineProperty(this, "parentNode", {});
    };
    (A.prototype.getContext = function (e, r) {
      var n;
      if ((e = e || "2d") !== "2d") return null;
      for (n in r)
        this.pdf.context2d.hasOwnProperty(n) && (this.pdf.context2d[n] = r[n]);
      return (this.pdf.context2d._canvas = this), this.pdf.context2d;
    }),
      (A.prototype.toDataURL = function () {
        throw new Error("toDataURL is not implemented.");
      }),
      t.events.push([
        "initialized",
        function () {
          (this.canvas = new A()), (this.canvas.pdf = this);
        },
      ]);
  })(jA.API),
  (function (t) {
    var A = { left: 0, top: 0, bottom: 0, right: 0 },
      e = !1,
      r = function () {
        this.internal.__cell__ === void 0 &&
          ((this.internal.__cell__ = {}),
          (this.internal.__cell__.padding = 3),
          (this.internal.__cell__.headerFunction = void 0),
          (this.internal.__cell__.margins = Object.assign({}, A)),
          (this.internal.__cell__.margins.width = this.getPageWidth()),
          n.call(this));
      },
      n = function () {
        (this.internal.__cell__.lastCell = new i()),
          (this.internal.__cell__.pages = 1);
      },
      i = function () {
        var u = arguments[0];
        Object.defineProperty(this, "x", {
          enumerable: !0,
          get: function () {
            return u;
          },
          set: function (y) {
            u = y;
          },
        });
        var h = arguments[1];
        Object.defineProperty(this, "y", {
          enumerable: !0,
          get: function () {
            return h;
          },
          set: function (y) {
            h = y;
          },
        });
        var B = arguments[2];
        Object.defineProperty(this, "width", {
          enumerable: !0,
          get: function () {
            return B;
          },
          set: function (y) {
            B = y;
          },
        });
        var p = arguments[3];
        Object.defineProperty(this, "height", {
          enumerable: !0,
          get: function () {
            return p;
          },
          set: function (y) {
            p = y;
          },
        });
        var w = arguments[4];
        Object.defineProperty(this, "text", {
          enumerable: !0,
          get: function () {
            return w;
          },
          set: function (y) {
            w = y;
          },
        });
        var g = arguments[5];
        Object.defineProperty(this, "lineNumber", {
          enumerable: !0,
          get: function () {
            return g;
          },
          set: function (y) {
            g = y;
          },
        });
        var L = arguments[6];
        return (
          Object.defineProperty(this, "align", {
            enumerable: !0,
            get: function () {
              return L;
            },
            set: function (y) {
              L = y;
            },
          }),
          this
        );
      };
    (i.prototype.clone = function () {
      return new i(
        this.x,
        this.y,
        this.width,
        this.height,
        this.text,
        this.lineNumber,
        this.align,
      );
    }),
      (i.prototype.toArray = function () {
        return [
          this.x,
          this.y,
          this.width,
          this.height,
          this.text,
          this.lineNumber,
          this.align,
        ];
      }),
      (t.setHeaderFunction = function (u) {
        return (
          r.call(this),
          (this.internal.__cell__.headerFunction =
            typeof u == "function" ? u : void 0),
          this
        );
      }),
      (t.getTextDimensions = function (u, h) {
        r.call(this);
        var B = (h = h || {}).fontSize || this.getFontSize(),
          p = h.font || this.getFont(),
          w = h.scaleFactor || this.internal.scaleFactor,
          g = 0,
          L = 0,
          y = 0,
          N = this;
        if (!Array.isArray(u) && typeof u != "string") {
          if (typeof u != "number")
            throw new Error(
              "getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.",
            );
          u = String(u);
        }
        var F = h.maxWidth;
        F > 0
          ? typeof u == "string"
            ? (u = this.splitTextToSize(u, F))
            : Object.prototype.toString.call(u) === "[object Array]" &&
              (u = u.reduce(function (G, Y) {
                return G.concat(N.splitTextToSize(Y, F));
              }, []))
          : (u = Array.isArray(u) ? u : [u]);
        for (var I = 0; I < u.length; I++)
          g < (y = this.getStringUnitWidth(u[I], { font: p }) * B) && (g = y);
        return (
          g !== 0 && (L = u.length),
          {
            w: (g /= w),
            h: Math.max(
              (L * B * this.getLineHeightFactor() -
                B * (this.getLineHeightFactor() - 1)) /
                w,
              0,
            ),
          }
        );
      }),
      (t.cellAddPage = function () {
        r.call(this), this.addPage();
        var u = this.internal.__cell__.margins || A;
        return (
          (this.internal.__cell__.lastCell = new i(
            u.left,
            u.top,
            void 0,
            void 0,
          )),
          (this.internal.__cell__.pages += 1),
          this
        );
      });
    var s = (t.cell = function () {
      var u;
      (u =
        arguments[0] instanceof i
          ? arguments[0]
          : new i(
              arguments[0],
              arguments[1],
              arguments[2],
              arguments[3],
              arguments[4],
              arguments[5],
            )),
        r.call(this);
      var h = this.internal.__cell__.lastCell,
        B = this.internal.__cell__.padding,
        p = this.internal.__cell__.margins || A,
        w = this.internal.__cell__.tableHeaderRow,
        g = this.internal.__cell__.printHeaders;
      return (
        h.lineNumber !== void 0 &&
          (h.lineNumber === u.lineNumber
            ? ((u.x = (h.x || 0) + (h.width || 0)), (u.y = h.y || 0))
            : h.y + h.height + u.height + p.bottom > this.getPageHeight()
              ? (this.cellAddPage(),
                (u.y = p.top),
                g &&
                  w &&
                  (this.printHeaderRow(u.lineNumber, !0), (u.y += w[0].height)))
              : (u.y = h.y + h.height || u.y)),
        u.text[0] !== void 0 &&
          (this.rect(u.x, u.y, u.width, u.height, e === !0 ? "FD" : void 0),
          u.align === "right"
            ? this.text(u.text, u.x + u.width - B, u.y + B, {
                align: "right",
                baseline: "top",
              })
            : u.align === "center"
              ? this.text(u.text, u.x + u.width / 2, u.y + B, {
                  align: "center",
                  baseline: "top",
                  maxWidth: u.width - B - B,
                })
              : this.text(u.text, u.x + B, u.y + B, {
                  align: "left",
                  baseline: "top",
                  maxWidth: u.width - B - B,
                })),
        (this.internal.__cell__.lastCell = u),
        this
      );
    });
    t.table = function (u, h, B, p, w) {
      if ((r.call(this), !B)) throw new Error("No data for PDF table.");
      var g,
        L,
        y,
        N,
        F = [],
        I = [],
        G = [],
        Y = {},
        Z = {},
        z = [],
        W = [],
        T = (w = w || {}).autoSize || !1,
        AA = w.printHeaders !== !1,
        uA =
          w.css && w.css["font-size"] !== void 0
            ? 16 * w.css["font-size"]
            : w.fontSize || 12,
        S = w.margins || Object.assign({ width: this.getPageWidth() }, A),
        x = typeof w.padding == "number" ? w.padding : 3,
        K = w.headerBackgroundColor || "#c8c8c8",
        P = w.headerTextColor || "#000";
      if (
        (n.call(this),
        (this.internal.__cell__.printHeaders = AA),
        (this.internal.__cell__.margins = S),
        (this.internal.__cell__.table_font_size = uA),
        (this.internal.__cell__.padding = x),
        (this.internal.__cell__.headerBackgroundColor = K),
        (this.internal.__cell__.headerTextColor = P),
        this.setFontSize(uA),
        p == null)
      )
        (I = F = Object.keys(B[0])),
          (G = F.map(function () {
            return "left";
          }));
      else if (Array.isArray(p) && Qe(p[0]) === "object")
        for (
          F = p.map(function (fA) {
            return fA.name;
          }),
            I = p.map(function (fA) {
              return fA.prompt || fA.name || "";
            }),
            G = p.map(function (fA) {
              return fA.align || "left";
            }),
            g = 0;
          g < p.length;
          g += 1
        )
          Z[p[g].name] = p[g].width * (19.049976 / 25.4);
      else
        Array.isArray(p) &&
          typeof p[0] == "string" &&
          ((I = F = p),
          (G = F.map(function () {
            return "left";
          })));
      if (T || (Array.isArray(p) && typeof p[0] == "string"))
        for (g = 0; g < F.length; g += 1) {
          for (
            Y[(N = F[g])] = B.map(function (fA) {
              return fA[N];
            }),
              this.setFont(void 0, "bold"),
              z.push(
                this.getTextDimensions(I[g], {
                  fontSize: this.internal.__cell__.table_font_size,
                  scaleFactor: this.internal.scaleFactor,
                }).w,
              ),
              L = Y[N],
              this.setFont(void 0, "normal"),
              y = 0;
            y < L.length;
            y += 1
          )
            z.push(
              this.getTextDimensions(L[y], {
                fontSize: this.internal.__cell__.table_font_size,
                scaleFactor: this.internal.scaleFactor,
              }).w,
            );
          (Z[N] = Math.max.apply(null, z) + x + x), (z = []);
        }
      if (AA) {
        var sA = {};
        for (g = 0; g < F.length; g += 1)
          (sA[F[g]] = {}), (sA[F[g]].text = I[g]), (sA[F[g]].align = G[g]);
        var nA = c.call(this, sA, Z);
        (W = F.map(function (fA) {
          return new i(u, h, Z[fA], nA, sA[fA].text, void 0, sA[fA].align);
        })),
          this.setTableHeaderRow(W),
          this.printHeaderRow(1, !1);
      }
      var cA = p.reduce(function (fA, UA) {
        return (fA[UA.name] = UA.align), fA;
      }, {});
      for (g = 0; g < B.length; g += 1) {
        "rowStart" in w &&
          w.rowStart instanceof Function &&
          w.rowStart({ row: g, data: B[g] }, this);
        var eA = c.call(this, B[g], Z);
        for (y = 0; y < F.length; y += 1) {
          var hA = B[g][F[y]];
          "cellStart" in w &&
            w.cellStart instanceof Function &&
            w.cellStart({ row: g, col: y, data: hA }, this),
            s.call(this, new i(u, h, Z[F[y]], eA, hA, g + 2, cA[F[y]]));
        }
      }
      return (
        (this.internal.__cell__.table_x = u),
        (this.internal.__cell__.table_y = h),
        this
      );
    };
    var c = function (u, h) {
      var B = this.internal.__cell__.padding,
        p = this.internal.__cell__.table_font_size,
        w = this.internal.scaleFactor;
      return Object.keys(u)
        .map(function (g) {
          var L = u[g];
          return this.splitTextToSize(
            L.hasOwnProperty("text") ? L.text : L,
            h[g] - B - B,
          );
        }, this)
        .map(function (g) {
          return (this.getLineHeightFactor() * g.length * p) / w + B + B;
        }, this)
        .reduce(function (g, L) {
          return Math.max(g, L);
        }, 0);
    };
    (t.setTableHeaderRow = function (u) {
      r.call(this), (this.internal.__cell__.tableHeaderRow = u);
    }),
      (t.printHeaderRow = function (u, h) {
        if ((r.call(this), !this.internal.__cell__.tableHeaderRow))
          throw new Error("Property tableHeaderRow does not exist.");
        var B;
        if (
          ((e = !0), typeof this.internal.__cell__.headerFunction == "function")
        ) {
          var p = this.internal.__cell__.headerFunction(
            this,
            this.internal.__cell__.pages,
          );
          this.internal.__cell__.lastCell = new i(
            p[0],
            p[1],
            p[2],
            p[3],
            void 0,
            -1,
          );
        }
        this.setFont(void 0, "bold");
        for (
          var w = [], g = 0;
          g < this.internal.__cell__.tableHeaderRow.length;
          g += 1
        ) {
          (B = this.internal.__cell__.tableHeaderRow[g].clone()),
            h && ((B.y = this.internal.__cell__.margins.top || 0), w.push(B)),
            (B.lineNumber = u);
          var L = this.getTextColor();
          this.setTextColor(this.internal.__cell__.headerTextColor),
            this.setFillColor(this.internal.__cell__.headerBackgroundColor),
            s.call(this, B),
            this.setTextColor(L);
        }
        w.length > 0 && this.setTableHeaderRow(w),
          this.setFont(void 0, "normal"),
          (e = !1);
      });
  })(jA.API);
var F0 = {
    italic: ["italic", "oblique", "normal"],
    oblique: ["oblique", "italic", "normal"],
    normal: ["normal", "oblique", "italic"],
  },
  U0 = [
    "ultra-condensed",
    "extra-condensed",
    "condensed",
    "semi-condensed",
    "normal",
    "semi-expanded",
    "expanded",
    "extra-expanded",
    "ultra-expanded",
  ],
  Mu = Q0(U0),
  y0 = [100, 200, 300, 400, 500, 600, 700, 800, 900],
  H5 = Q0(y0);
function Ku(t) {
  var A = t.family.replace(/"|'/g, "").toLowerCase(),
    e = (function (i) {
      return F0[(i = i || "normal")] ? i : "normal";
    })(t.style),
    r = (function (i) {
      if (!i) return 400;
      if (typeof i == "number")
        return i >= 100 && i <= 900 && i % 100 == 0 ? i : 400;
      if (/^\d00$/.test(i)) return parseInt(i);
      switch (i) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    })(t.weight),
    n = (function (i) {
      return typeof Mu[(i = i || "normal")] == "number" ? i : "normal";
    })(t.stretch);
  return {
    family: A,
    style: e,
    weight: r,
    stretch: n,
    src: t.src || [],
    ref: t.ref || { name: A, style: [n, e, r].join(" ") },
  };
}
function Gf(t, A, e, r) {
  var n;
  for (n = e; n >= 0 && n < A.length; n += r) if (t[A[n]]) return t[A[n]];
  for (n = e; n >= 0 && n < A.length; n -= r) if (t[A[n]]) return t[A[n]];
}
var N5 = {
    "sans-serif": "helvetica",
    fixed: "courier",
    monospace: "courier",
    terminal: "courier",
    cursive: "times",
    fantasy: "times",
    serif: "times",
  },
  jf = {
    caption: "times",
    icon: "times",
    menu: "times",
    "message-box": "times",
    "small-caption": "times",
    "status-bar": "times",
  };
function Vf(t) {
  return [t.stretch, t.style, t.weight, t.family].join(" ");
}
function _5(t, A, e) {
  for (
    var r = (e = e || {}).defaultFontFamily || "times",
      n = Object.assign({}, N5, e.genericFontFamilies || {}),
      i = null,
      s = null,
      c = 0;
    c < A.length;
    ++c
  )
    if (
      (n[(i = Ku(A[c])).family] && (i.family = n[i.family]),
      t.hasOwnProperty(i.family))
    ) {
      s = t[i.family];
      break;
    }
  if (!(s = s || t[r]))
    throw new Error(
      "Could not find a font-family for the rule '" +
        Vf(i) +
        "' and default family '" +
        r +
        "'.",
    );
  if (
    ((s = (function (u, h) {
      if (h[u]) return h[u];
      var B = Mu[u],
        p = B <= Mu.normal ? -1 : 1,
        w = Gf(h, U0, B, p);
      if (!w)
        throw new Error(
          "Could not find a matching font-stretch value for " + u,
        );
      return w;
    })(i.stretch, s)),
    (s = (function (u, h) {
      if (h[u]) return h[u];
      for (var B = F0[u], p = 0; p < B.length; ++p) if (h[B[p]]) return h[B[p]];
      throw new Error("Could not find a matching font-style for " + u);
    })(i.style, s)),
    !(s = (function (u, h) {
      if (h[u]) return h[u];
      if (u === 400 && h[500]) return h[500];
      if (u === 500 && h[400]) return h[400];
      var B = H5[u],
        p = Gf(h, y0, B, u < 400 ? -1 : 1);
      if (!p)
        throw new Error("Could not find a matching font-weight for value " + u);
      return p;
    })(i.weight, s)))
  )
    throw new Error("Failed to resolve a font for the rule '" + Vf(i) + "'.");
  return s;
}
function qf(t) {
  return t.trimLeft();
}
function D5(t, A) {
  for (var e = 0; e < t.length; ) {
    if (t.charAt(e) === A) return [t.substring(0, e), t.substring(e + 1)];
    e += 1;
  }
  return null;
}
function T5(t) {
  var A = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return A === null ? null : [A[0], t.substring(A[0].length)];
}
var $s,
  Wf,
  Xf,
  tu = ["times"];
(function (t) {
  var A,
    e,
    r,
    n,
    i,
    s,
    c,
    u,
    h,
    B = function (Q) {
      return (
        (Q = Q || {}),
        (this.isStrokeTransparent = Q.isStrokeTransparent || !1),
        (this.strokeOpacity = Q.strokeOpacity || 1),
        (this.strokeStyle = Q.strokeStyle || "#000000"),
        (this.fillStyle = Q.fillStyle || "#000000"),
        (this.isFillTransparent = Q.isFillTransparent || !1),
        (this.fillOpacity = Q.fillOpacity || 1),
        (this.font = Q.font || "10px sans-serif"),
        (this.textBaseline = Q.textBaseline || "alphabetic"),
        (this.textAlign = Q.textAlign || "left"),
        (this.lineWidth = Q.lineWidth || 1),
        (this.lineJoin = Q.lineJoin || "miter"),
        (this.lineCap = Q.lineCap || "butt"),
        (this.path = Q.path || []),
        (this.transform =
          Q.transform !== void 0 ? Q.transform.clone() : new u()),
        (this.globalCompositeOperation =
          Q.globalCompositeOperation || "normal"),
        (this.globalAlpha = Q.globalAlpha || 1),
        (this.clip_path = Q.clip_path || []),
        (this.currentPoint = Q.currentPoint || new s()),
        (this.miterLimit = Q.miterLimit || 10),
        (this.lastPoint = Q.lastPoint || new s()),
        (this.lineDashOffset = Q.lineDashOffset || 0),
        (this.lineDash = Q.lineDash || []),
        (this.margin = Q.margin || [0, 0, 0, 0]),
        (this.prevPageLastElemOffset = Q.prevPageLastElemOffset || 0),
        (this.ignoreClearRect =
          typeof Q.ignoreClearRect != "boolean" || Q.ignoreClearRect),
        this
      );
    };
  t.events.push([
    "initialized",
    function () {
      (this.context2d = new p(this)),
        (A = this.internal.f2),
        (e = this.internal.getCoordinateString),
        (r = this.internal.getVerticalCoordinateString),
        (n = this.internal.getHorizontalCoordinate),
        (i = this.internal.getVerticalCoordinate),
        (s = this.internal.Point),
        (c = this.internal.Rectangle),
        (u = this.internal.Matrix),
        (h = new B());
    },
  ]);
  var p = function (Q) {
    Object.defineProperty(this, "canvas", {
      get: function () {
        return { parentNode: !1, style: !1 };
      },
    });
    var _ = Q;
    Object.defineProperty(this, "pdf", {
      get: function () {
        return _;
      },
    });
    var O = !1;
    Object.defineProperty(this, "pageWrapXEnabled", {
      get: function () {
        return O;
      },
      set: function (gA) {
        O = !!gA;
      },
    });
    var R = !1;
    Object.defineProperty(this, "pageWrapYEnabled", {
      get: function () {
        return R;
      },
      set: function (gA) {
        R = !!gA;
      },
    });
    var X = 0;
    Object.defineProperty(this, "posX", {
      get: function () {
        return X;
      },
      set: function (gA) {
        isNaN(gA) || (X = gA);
      },
    });
    var iA = 0;
    Object.defineProperty(this, "posY", {
      get: function () {
        return iA;
      },
      set: function (gA) {
        isNaN(gA) || (iA = gA);
      },
    }),
      Object.defineProperty(this, "margin", {
        get: function () {
          return h.margin;
        },
        set: function (gA) {
          var M;
          typeof gA == "number"
            ? (M = [gA, gA, gA, gA])
            : (((M = new Array(4))[0] = gA[0]),
              (M[1] = gA.length >= 2 ? gA[1] : M[0]),
              (M[2] = gA.length >= 3 ? gA[2] : M[0]),
              (M[3] = gA.length >= 4 ? gA[3] : M[1])),
            (h.margin = M);
        },
      });
    var aA = !1;
    Object.defineProperty(this, "autoPaging", {
      get: function () {
        return aA;
      },
      set: function (gA) {
        aA = gA;
      },
    });
    var oA = 0;
    Object.defineProperty(this, "lastBreak", {
      get: function () {
        return oA;
      },
      set: function (gA) {
        oA = gA;
      },
    });
    var FA = [];
    Object.defineProperty(this, "pageBreaks", {
      get: function () {
        return FA;
      },
      set: function (gA) {
        FA = gA;
      },
    }),
      Object.defineProperty(this, "ctx", {
        get: function () {
          return h;
        },
        set: function (gA) {
          gA instanceof B && (h = gA);
        },
      }),
      Object.defineProperty(this, "path", {
        get: function () {
          return h.path;
        },
        set: function (gA) {
          h.path = gA;
        },
      });
    var QA = [];
    Object.defineProperty(this, "ctxStack", {
      get: function () {
        return QA;
      },
      set: function (gA) {
        QA = gA;
      },
    }),
      Object.defineProperty(this, "fillStyle", {
        get: function () {
          return this.ctx.fillStyle;
        },
        set: function (gA) {
          var M;
          (M = w(gA)),
            (this.ctx.fillStyle = M.style),
            (this.ctx.isFillTransparent = M.a === 0),
            (this.ctx.fillOpacity = M.a),
            this.pdf.setFillColor(M.r, M.g, M.b, { a: M.a }),
            this.pdf.setTextColor(M.r, M.g, M.b, { a: M.a });
        },
      }),
      Object.defineProperty(this, "strokeStyle", {
        get: function () {
          return this.ctx.strokeStyle;
        },
        set: function (gA) {
          var M = w(gA);
          (this.ctx.strokeStyle = M.style),
            (this.ctx.isStrokeTransparent = M.a === 0),
            (this.ctx.strokeOpacity = M.a),
            M.a === 0
              ? this.pdf.setDrawColor(255, 255, 255)
              : (M.a, this.pdf.setDrawColor(M.r, M.g, M.b));
        },
      }),
      Object.defineProperty(this, "lineCap", {
        get: function () {
          return this.ctx.lineCap;
        },
        set: function (gA) {
          ["butt", "round", "square"].indexOf(gA) !== -1 &&
            ((this.ctx.lineCap = gA), this.pdf.setLineCap(gA));
        },
      }),
      Object.defineProperty(this, "lineWidth", {
        get: function () {
          return this.ctx.lineWidth;
        },
        set: function (gA) {
          isNaN(gA) || ((this.ctx.lineWidth = gA), this.pdf.setLineWidth(gA));
        },
      }),
      Object.defineProperty(this, "lineJoin", {
        get: function () {
          return this.ctx.lineJoin;
        },
        set: function (gA) {
          ["bevel", "round", "miter"].indexOf(gA) !== -1 &&
            ((this.ctx.lineJoin = gA), this.pdf.setLineJoin(gA));
        },
      }),
      Object.defineProperty(this, "miterLimit", {
        get: function () {
          return this.ctx.miterLimit;
        },
        set: function (gA) {
          isNaN(gA) || ((this.ctx.miterLimit = gA), this.pdf.setMiterLimit(gA));
        },
      }),
      Object.defineProperty(this, "textBaseline", {
        get: function () {
          return this.ctx.textBaseline;
        },
        set: function (gA) {
          this.ctx.textBaseline = gA;
        },
      }),
      Object.defineProperty(this, "textAlign", {
        get: function () {
          return this.ctx.textAlign;
        },
        set: function (gA) {
          ["right", "end", "center", "left", "start"].indexOf(gA) !== -1 &&
            (this.ctx.textAlign = gA);
        },
      });
    var HA = null;
    function DA(gA, M) {
      if (HA === null) {
        var YA = (function (PA) {
          var CA = [];
          return (
            Object.keys(PA).forEach(function (yA) {
              PA[yA].forEach(function (IA) {
                var EA = null;
                switch (IA) {
                  case "bold":
                    EA = { family: yA, weight: "bold" };
                    break;
                  case "italic":
                    EA = { family: yA, style: "italic" };
                    break;
                  case "bolditalic":
                    EA = { family: yA, weight: "bold", style: "italic" };
                    break;
                  case "":
                  case "normal":
                    EA = { family: yA };
                }
                EA !== null &&
                  ((EA.ref = { name: yA, style: IA }), CA.push(EA));
              });
            }),
            CA
          );
        })(gA.getFontList());
        HA = (function (PA) {
          for (var CA = {}, yA = 0; yA < PA.length; ++yA) {
            var IA = Ku(PA[yA]),
              EA = IA.family,
              MA = IA.stretch,
              XA = IA.style,
              Ae = IA.weight;
            (CA[EA] = CA[EA] || {}),
              (CA[EA][MA] = CA[EA][MA] || {}),
              (CA[EA][MA][XA] = CA[EA][MA][XA] || {}),
              (CA[EA][MA][XA][Ae] = IA);
          }
          return CA;
        })(YA.concat(M));
      }
      return HA;
    }
    var GA = null;
    Object.defineProperty(this, "fontFaces", {
      get: function () {
        return GA;
      },
      set: function (gA) {
        (HA = null), (GA = gA);
      },
    }),
      Object.defineProperty(this, "font", {
        get: function () {
          return this.ctx.font;
        },
        set: function (gA) {
          var M;
          if (
            ((this.ctx.font = gA),
            (M =
              /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(
                gA,
              )) !== null)
          ) {
            var YA = M[1],
              PA = (M[2], M[3]),
              CA = M[4],
              yA = (M[5], M[6]),
              IA = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(CA)[2];
            (CA = Math.floor(
              IA === "px"
                ? parseFloat(CA) * this.pdf.internal.scaleFactor
                : IA === "em"
                  ? parseFloat(CA) * this.pdf.getFontSize()
                  : parseFloat(CA) * this.pdf.internal.scaleFactor,
            )),
              this.pdf.setFontSize(CA);
            var EA = (function (qA) {
              var re,
                xA,
                at = [],
                ce = qA.trim();
              if (ce === "") return tu;
              if (ce in jf) return [jf[ce]];
              for (; ce !== ""; ) {
                switch (((xA = null), (re = (ce = qf(ce)).charAt(0)))) {
                  case '"':
                  case "'":
                    xA = D5(ce.substring(1), re);
                    break;
                  default:
                    xA = T5(ce);
                }
                if (
                  xA === null ||
                  (at.push(xA[0]),
                  (ce = qf(xA[1])) !== "" && ce.charAt(0) !== ",")
                )
                  return tu;
                ce = ce.replace(/^,/, "");
              }
              return at;
            })(yA);
            if (this.fontFaces) {
              var MA = _5(
                DA(this.pdf, this.fontFaces),
                EA.map(function (qA) {
                  return {
                    family: qA,
                    stretch: "normal",
                    weight: PA,
                    style: YA,
                  };
                }),
              );
              this.pdf.setFont(MA.ref.name, MA.ref.style);
            } else {
              var XA = "";
              (PA === "bold" || parseInt(PA, 10) >= 700 || YA === "bold") &&
                (XA = "bold"),
                YA === "italic" && (XA += "italic"),
                XA.length === 0 && (XA = "normal");
              for (
                var Ae = "",
                  te = {
                    arial: "Helvetica",
                    Arial: "Helvetica",
                    verdana: "Helvetica",
                    Verdana: "Helvetica",
                    helvetica: "Helvetica",
                    Helvetica: "Helvetica",
                    "sans-serif": "Helvetica",
                    fixed: "Courier",
                    monospace: "Courier",
                    terminal: "Courier",
                    cursive: "Times",
                    fantasy: "Times",
                    serif: "Times",
                  },
                  se = 0;
                se < EA.length;
                se++
              ) {
                if (
                  this.pdf.internal.getFont(EA[se], XA, {
                    noFallback: !0,
                    disableWarning: !0,
                  }) !== void 0
                ) {
                  Ae = EA[se];
                  break;
                }
                if (
                  XA === "bolditalic" &&
                  this.pdf.internal.getFont(EA[se], "bold", {
                    noFallback: !0,
                    disableWarning: !0,
                  }) !== void 0
                )
                  (Ae = EA[se]), (XA = "bold");
                else if (
                  this.pdf.internal.getFont(EA[se], "normal", {
                    noFallback: !0,
                    disableWarning: !0,
                  }) !== void 0
                ) {
                  (Ae = EA[se]), (XA = "normal");
                  break;
                }
              }
              if (Ae === "") {
                for (var de = 0; de < EA.length; de++)
                  if (te[EA[de]]) {
                    Ae = te[EA[de]];
                    break;
                  }
              }
              (Ae = Ae === "" ? "Times" : Ae), this.pdf.setFont(Ae, XA);
            }
          }
        },
      }),
      Object.defineProperty(this, "globalCompositeOperation", {
        get: function () {
          return this.ctx.globalCompositeOperation;
        },
        set: function (gA) {
          this.ctx.globalCompositeOperation = gA;
        },
      }),
      Object.defineProperty(this, "globalAlpha", {
        get: function () {
          return this.ctx.globalAlpha;
        },
        set: function (gA) {
          this.ctx.globalAlpha = gA;
        },
      }),
      Object.defineProperty(this, "lineDashOffset", {
        get: function () {
          return this.ctx.lineDashOffset;
        },
        set: function (gA) {
          (this.ctx.lineDashOffset = gA), UA.call(this);
        },
      }),
      Object.defineProperty(this, "lineDash", {
        get: function () {
          return this.ctx.lineDash;
        },
        set: function (gA) {
          (this.ctx.lineDash = gA), UA.call(this);
        },
      }),
      Object.defineProperty(this, "ignoreClearRect", {
        get: function () {
          return this.ctx.ignoreClearRect;
        },
        set: function (gA) {
          this.ctx.ignoreClearRect = !!gA;
        },
      });
  };
  (p.prototype.setLineDash = function (Q) {
    this.lineDash = Q;
  }),
    (p.prototype.getLineDash = function () {
      return this.lineDash.length % 2
        ? this.lineDash.concat(this.lineDash)
        : this.lineDash.slice();
    }),
    (p.prototype.fill = function () {
      Y.call(this, "fill", !1);
    }),
    (p.prototype.stroke = function () {
      Y.call(this, "stroke", !1);
    }),
    (p.prototype.beginPath = function () {
      this.path = [{ type: "begin" }];
    }),
    (p.prototype.moveTo = function (Q, _) {
      if (isNaN(Q) || isNaN(_))
        throw (
          (Ce.error("jsPDF.context2d.moveTo: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.moveTo"))
        );
      var O = this.ctx.transform.applyToPoint(new s(Q, _));
      this.path.push({ type: "mt", x: O.x, y: O.y }),
        (this.ctx.lastPoint = new s(Q, _));
    }),
    (p.prototype.closePath = function () {
      var Q = new s(0, 0),
        _ = 0;
      for (_ = this.path.length - 1; _ !== -1; _--)
        if (
          this.path[_].type === "begin" &&
          Qe(this.path[_ + 1]) === "object" &&
          typeof this.path[_ + 1].x == "number"
        ) {
          Q = new s(this.path[_ + 1].x, this.path[_ + 1].y);
          break;
        }
      this.path.push({ type: "close" }), (this.ctx.lastPoint = new s(Q.x, Q.y));
    }),
    (p.prototype.lineTo = function (Q, _) {
      if (isNaN(Q) || isNaN(_))
        throw (
          (Ce.error("jsPDF.context2d.lineTo: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.lineTo"))
        );
      var O = this.ctx.transform.applyToPoint(new s(Q, _));
      this.path.push({ type: "lt", x: O.x, y: O.y }),
        (this.ctx.lastPoint = new s(O.x, O.y));
    }),
    (p.prototype.clip = function () {
      (this.ctx.clip_path = JSON.parse(JSON.stringify(this.path))),
        Y.call(this, null, !0);
    }),
    (p.prototype.quadraticCurveTo = function (Q, _, O, R) {
      if (isNaN(O) || isNaN(R) || isNaN(Q) || isNaN(_))
        throw (
          (Ce.error(
            "jsPDF.context2d.quadraticCurveTo: Invalid arguments",
            arguments,
          ),
          new Error(
            "Invalid arguments passed to jsPDF.context2d.quadraticCurveTo",
          ))
        );
      var X = this.ctx.transform.applyToPoint(new s(O, R)),
        iA = this.ctx.transform.applyToPoint(new s(Q, _));
      this.path.push({ type: "qct", x1: iA.x, y1: iA.y, x: X.x, y: X.y }),
        (this.ctx.lastPoint = new s(X.x, X.y));
    }),
    (p.prototype.bezierCurveTo = function (Q, _, O, R, X, iA) {
      if (isNaN(X) || isNaN(iA) || isNaN(Q) || isNaN(_) || isNaN(O) || isNaN(R))
        throw (
          (Ce.error(
            "jsPDF.context2d.bezierCurveTo: Invalid arguments",
            arguments,
          ),
          new Error(
            "Invalid arguments passed to jsPDF.context2d.bezierCurveTo",
          ))
        );
      var aA = this.ctx.transform.applyToPoint(new s(X, iA)),
        oA = this.ctx.transform.applyToPoint(new s(Q, _)),
        FA = this.ctx.transform.applyToPoint(new s(O, R));
      this.path.push({
        type: "bct",
        x1: oA.x,
        y1: oA.y,
        x2: FA.x,
        y2: FA.y,
        x: aA.x,
        y: aA.y,
      }),
        (this.ctx.lastPoint = new s(aA.x, aA.y));
    }),
    (p.prototype.arc = function (Q, _, O, R, X, iA) {
      if (isNaN(Q) || isNaN(_) || isNaN(O) || isNaN(R) || isNaN(X))
        throw (
          (Ce.error("jsPDF.context2d.arc: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.arc"))
        );
      if (((iA = !!iA), !this.ctx.transform.isIdentity)) {
        var aA = this.ctx.transform.applyToPoint(new s(Q, _));
        (Q = aA.x), (_ = aA.y);
        var oA = this.ctx.transform.applyToPoint(new s(0, O)),
          FA = this.ctx.transform.applyToPoint(new s(0, 0));
        O = Math.sqrt(Math.pow(oA.x - FA.x, 2) + Math.pow(oA.y - FA.y, 2));
      }
      Math.abs(X - R) >= 2 * Math.PI && ((R = 0), (X = 2 * Math.PI)),
        this.path.push({
          type: "arc",
          x: Q,
          y: _,
          radius: O,
          startAngle: R,
          endAngle: X,
          counterclockwise: iA,
        });
    }),
    (p.prototype.arcTo = function (Q, _, O, R, X) {
      throw new Error("arcTo not implemented.");
    }),
    (p.prototype.rect = function (Q, _, O, R) {
      if (isNaN(Q) || isNaN(_) || isNaN(O) || isNaN(R))
        throw (
          (Ce.error("jsPDF.context2d.rect: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.rect"))
        );
      this.moveTo(Q, _),
        this.lineTo(Q + O, _),
        this.lineTo(Q + O, _ + R),
        this.lineTo(Q, _ + R),
        this.lineTo(Q, _),
        this.lineTo(Q + O, _),
        this.lineTo(Q, _);
    }),
    (p.prototype.fillRect = function (Q, _, O, R) {
      if (isNaN(Q) || isNaN(_) || isNaN(O) || isNaN(R))
        throw (
          (Ce.error("jsPDF.context2d.fillRect: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.fillRect"))
        );
      if (!g.call(this)) {
        var X = {};
        this.lineCap !== "butt" &&
          ((X.lineCap = this.lineCap), (this.lineCap = "butt")),
          this.lineJoin !== "miter" &&
            ((X.lineJoin = this.lineJoin), (this.lineJoin = "miter")),
          this.beginPath(),
          this.rect(Q, _, O, R),
          this.fill(),
          X.hasOwnProperty("lineCap") && (this.lineCap = X.lineCap),
          X.hasOwnProperty("lineJoin") && (this.lineJoin = X.lineJoin);
      }
    }),
    (p.prototype.strokeRect = function (Q, _, O, R) {
      if (isNaN(Q) || isNaN(_) || isNaN(O) || isNaN(R))
        throw (
          (Ce.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.strokeRect"))
        );
      L.call(this) || (this.beginPath(), this.rect(Q, _, O, R), this.stroke());
    }),
    (p.prototype.clearRect = function (Q, _, O, R) {
      if (isNaN(Q) || isNaN(_) || isNaN(O) || isNaN(R))
        throw (
          (Ce.error("jsPDF.context2d.clearRect: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.clearRect"))
        );
      this.ignoreClearRect ||
        ((this.fillStyle = "#ffffff"), this.fillRect(Q, _, O, R));
    }),
    (p.prototype.save = function (Q) {
      Q = typeof Q != "boolean" || Q;
      for (
        var _ = this.pdf.internal.getCurrentPageInfo().pageNumber, O = 0;
        O < this.pdf.internal.getNumberOfPages();
        O++
      )
        this.pdf.setPage(O + 1), this.pdf.internal.out("q");
      if ((this.pdf.setPage(_), Q)) {
        this.ctx.fontSize = this.pdf.internal.getFontSize();
        var R = new B(this.ctx);
        this.ctxStack.push(this.ctx), (this.ctx = R);
      }
    }),
    (p.prototype.restore = function (Q) {
      Q = typeof Q != "boolean" || Q;
      for (
        var _ = this.pdf.internal.getCurrentPageInfo().pageNumber, O = 0;
        O < this.pdf.internal.getNumberOfPages();
        O++
      )
        this.pdf.setPage(O + 1), this.pdf.internal.out("Q");
      this.pdf.setPage(_),
        Q &&
          this.ctxStack.length !== 0 &&
          ((this.ctx = this.ctxStack.pop()),
          (this.fillStyle = this.ctx.fillStyle),
          (this.strokeStyle = this.ctx.strokeStyle),
          (this.font = this.ctx.font),
          (this.lineCap = this.ctx.lineCap),
          (this.lineWidth = this.ctx.lineWidth),
          (this.lineJoin = this.ctx.lineJoin),
          (this.lineDash = this.ctx.lineDash),
          (this.lineDashOffset = this.ctx.lineDashOffset));
    }),
    (p.prototype.toDataURL = function () {
      throw new Error("toDataUrl not implemented.");
    });
  var w = function (Q) {
      var _, O, R, X;
      if ((Q.isCanvasGradient === !0 && (Q = Q.getColor()), !Q))
        return { r: 0, g: 0, b: 0, a: 0, style: Q };
      if (
        /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(
          Q,
        )
      )
        (_ = 0), (O = 0), (R = 0), (X = 0);
      else {
        var iA = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(Q);
        if (iA !== null)
          (_ = parseInt(iA[1])),
            (O = parseInt(iA[2])),
            (R = parseInt(iA[3])),
            (X = 1);
        else if (
          (iA =
            /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(
              Q,
            )) !== null
        )
          (_ = parseInt(iA[1])),
            (O = parseInt(iA[2])),
            (R = parseInt(iA[3])),
            (X = parseFloat(iA[4]));
        else {
          if (((X = 1), typeof Q == "string" && Q.charAt(0) !== "#")) {
            var aA = new d0(Q);
            Q = aA.ok ? aA.toHex() : "#000000";
          }
          Q.length === 4
            ? ((_ = Q.substring(1, 2)),
              (_ += _),
              (O = Q.substring(2, 3)),
              (O += O),
              (R = Q.substring(3, 4)),
              (R += R))
            : ((_ = Q.substring(1, 3)),
              (O = Q.substring(3, 5)),
              (R = Q.substring(5, 7))),
            (_ = parseInt(_, 16)),
            (O = parseInt(O, 16)),
            (R = parseInt(R, 16));
        }
      }
      return { r: _, g: O, b: R, a: X, style: Q };
    },
    g = function () {
      return this.ctx.isFillTransparent || this.globalAlpha == 0;
    },
    L = function () {
      return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
    };
  (p.prototype.fillText = function (Q, _, O, R) {
    if (isNaN(_) || isNaN(O) || typeof Q != "string")
      throw (
        (Ce.error("jsPDF.context2d.fillText: Invalid arguments", arguments),
        new Error("Invalid arguments passed to jsPDF.context2d.fillText"))
      );
    if (((R = isNaN(R) ? void 0 : R), !g.call(this))) {
      var X = eA(this.ctx.transform.rotation),
        iA = this.ctx.transform.scaleX;
      x.call(this, {
        text: Q,
        x: _,
        y: O,
        scale: iA,
        angle: X,
        align: this.textAlign,
        maxWidth: R,
      });
    }
  }),
    (p.prototype.strokeText = function (Q, _, O, R) {
      if (isNaN(_) || isNaN(O) || typeof Q != "string")
        throw (
          (Ce.error("jsPDF.context2d.strokeText: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.strokeText"))
        );
      if (!L.call(this)) {
        R = isNaN(R) ? void 0 : R;
        var X = eA(this.ctx.transform.rotation),
          iA = this.ctx.transform.scaleX;
        x.call(this, {
          text: Q,
          x: _,
          y: O,
          scale: iA,
          renderingMode: "stroke",
          angle: X,
          align: this.textAlign,
          maxWidth: R,
        });
      }
    }),
    (p.prototype.measureText = function (Q) {
      if (typeof Q != "string")
        throw (
          (Ce.error(
            "jsPDF.context2d.measureText: Invalid arguments",
            arguments,
          ),
          new Error("Invalid arguments passed to jsPDF.context2d.measureText"))
        );
      var _ = this.pdf,
        O = this.pdf.internal.scaleFactor,
        R = _.internal.getFontSize(),
        X = (_.getStringUnitWidth(Q) * R) / _.internal.scaleFactor,
        iA = function (aA) {
          var oA = (aA = aA || {}).width || 0;
          return (
            Object.defineProperty(this, "width", {
              get: function () {
                return oA;
              },
            }),
            this
          );
        };
      return new iA({ width: (X *= Math.round(((96 * O) / 72) * 1e4) / 1e4) });
    }),
    (p.prototype.scale = function (Q, _) {
      if (isNaN(Q) || isNaN(_))
        throw (
          (Ce.error("jsPDF.context2d.scale: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.scale"))
        );
      var O = new u(Q, 0, 0, _, 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(O);
    }),
    (p.prototype.rotate = function (Q) {
      if (isNaN(Q))
        throw (
          (Ce.error("jsPDF.context2d.rotate: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.rotate"))
        );
      var _ = new u(Math.cos(Q), Math.sin(Q), -Math.sin(Q), Math.cos(Q), 0, 0);
      this.ctx.transform = this.ctx.transform.multiply(_);
    }),
    (p.prototype.translate = function (Q, _) {
      if (isNaN(Q) || isNaN(_))
        throw (
          (Ce.error("jsPDF.context2d.translate: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.translate"))
        );
      var O = new u(1, 0, 0, 1, Q, _);
      this.ctx.transform = this.ctx.transform.multiply(O);
    }),
    (p.prototype.transform = function (Q, _, O, R, X, iA) {
      if (isNaN(Q) || isNaN(_) || isNaN(O) || isNaN(R) || isNaN(X) || isNaN(iA))
        throw (
          (Ce.error("jsPDF.context2d.transform: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.transform"))
        );
      var aA = new u(Q, _, O, R, X, iA);
      this.ctx.transform = this.ctx.transform.multiply(aA);
    }),
    (p.prototype.setTransform = function (Q, _, O, R, X, iA) {
      (Q = isNaN(Q) ? 1 : Q),
        (_ = isNaN(_) ? 0 : _),
        (O = isNaN(O) ? 0 : O),
        (R = isNaN(R) ? 1 : R),
        (X = isNaN(X) ? 0 : X),
        (iA = isNaN(iA) ? 0 : iA),
        (this.ctx.transform = new u(Q, _, O, R, X, iA));
    });
  var y = function () {
    return (
      this.margin[0] > 0 ||
      this.margin[1] > 0 ||
      this.margin[2] > 0 ||
      this.margin[3] > 0
    );
  };
  p.prototype.drawImage = function (Q, _, O, R, X, iA, aA, oA, FA) {
    var QA = this.pdf.getImageProperties(Q),
      HA = 1,
      DA = 1,
      GA = 1,
      gA = 1;
    R !== void 0 &&
      oA !== void 0 &&
      ((GA = oA / R),
      (gA = FA / X),
      (HA = ((QA.width / R) * oA) / R),
      (DA = ((QA.height / X) * FA) / X)),
      iA === void 0 && ((iA = _), (aA = O), (_ = 0), (O = 0)),
      R !== void 0 && oA === void 0 && ((oA = R), (FA = X)),
      R === void 0 && oA === void 0 && ((oA = QA.width), (FA = QA.height));
    for (
      var M,
        YA = this.ctx.transform.decompose(),
        PA = eA(YA.rotate.shx),
        CA = new u(),
        yA = (CA = (CA = (CA = CA.multiply(YA.translate)).multiply(
          YA.skew,
        )).multiply(YA.scale)).applyToRectangle(
          new c(iA - _ * GA, aA - O * gA, R * HA, X * DA),
        ),
        IA = N.call(this, yA),
        EA = [],
        MA = 0;
      MA < IA.length;
      MA += 1
    )
      EA.indexOf(IA[MA]) === -1 && EA.push(IA[MA]);
    if ((G(EA), this.autoPaging))
      for (var XA = EA[0], Ae = EA[EA.length - 1], te = XA; te < Ae + 1; te++) {
        this.pdf.setPage(te);
        var se =
            this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
          de = te === 1 ? this.posY + this.margin[0] : this.margin[0],
          qA =
            this.pdf.internal.pageSize.height -
            this.posY -
            this.margin[0] -
            this.margin[2],
          re =
            this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
          xA = te === 1 ? 0 : qA + (te - 2) * re;
        if (this.ctx.clip_path.length !== 0) {
          var at = this.path;
          (M = JSON.parse(JSON.stringify(this.ctx.clip_path))),
            (this.path = I(
              M,
              this.posX + this.margin[3],
              -xA + de + this.ctx.prevPageLastElemOffset,
            )),
            Z.call(this, "fill", !0),
            (this.path = at);
        }
        var ce = JSON.parse(JSON.stringify(yA));
        ce = I(
          [ce],
          this.posX + this.margin[3],
          -xA + de + this.ctx.prevPageLastElemOffset,
        )[0];
        var jt = (te > XA || te < Ae) && y.call(this);
        jt &&
          (this.pdf.saveGraphicsState(),
          this.pdf
            .rect(this.margin[3], this.margin[0], se, re, null)
            .clip()
            .discardPath()),
          this.pdf.addImage(Q, "JPEG", ce.x, ce.y, ce.w, ce.h, null, null, PA),
          jt && this.pdf.restoreGraphicsState();
      }
    else this.pdf.addImage(Q, "JPEG", yA.x, yA.y, yA.w, yA.h, null, null, PA);
  };
  var N = function (Q, _, O) {
      var R = [];
      (_ = _ || this.pdf.internal.pageSize.width),
        (O =
          O ||
          this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2]);
      var X = this.posY + this.ctx.prevPageLastElemOffset;
      switch (Q.type) {
        default:
        case "mt":
        case "lt":
          R.push(Math.floor((Q.y + X) / O) + 1);
          break;
        case "arc":
          R.push(Math.floor((Q.y + X - Q.radius) / O) + 1),
            R.push(Math.floor((Q.y + X + Q.radius) / O) + 1);
          break;
        case "qct":
          var iA = hA(
            this.ctx.lastPoint.x,
            this.ctx.lastPoint.y,
            Q.x1,
            Q.y1,
            Q.x,
            Q.y,
          );
          R.push(Math.floor((iA.y + X) / O) + 1),
            R.push(Math.floor((iA.y + iA.h + X) / O) + 1);
          break;
        case "bct":
          var aA = fA(
            this.ctx.lastPoint.x,
            this.ctx.lastPoint.y,
            Q.x1,
            Q.y1,
            Q.x2,
            Q.y2,
            Q.x,
            Q.y,
          );
          R.push(Math.floor((aA.y + X) / O) + 1),
            R.push(Math.floor((aA.y + aA.h + X) / O) + 1);
          break;
        case "rect":
          R.push(Math.floor((Q.y + X) / O) + 1),
            R.push(Math.floor((Q.y + Q.h + X) / O) + 1);
      }
      for (var oA = 0; oA < R.length; oA += 1)
        for (; this.pdf.internal.getNumberOfPages() < R[oA]; ) F.call(this);
      return R;
    },
    F = function () {
      var Q = this.fillStyle,
        _ = this.strokeStyle,
        O = this.font,
        R = this.lineCap,
        X = this.lineWidth,
        iA = this.lineJoin;
      this.pdf.addPage(),
        (this.fillStyle = Q),
        (this.strokeStyle = _),
        (this.font = O),
        (this.lineCap = R),
        (this.lineWidth = X),
        (this.lineJoin = iA);
    },
    I = function (Q, _, O) {
      for (var R = 0; R < Q.length; R++)
        switch (Q[R].type) {
          case "bct":
            (Q[R].x2 += _), (Q[R].y2 += O);
          case "qct":
            (Q[R].x1 += _), (Q[R].y1 += O);
          case "mt":
          case "lt":
          case "arc":
          default:
            (Q[R].x += _), (Q[R].y += O);
        }
      return Q;
    },
    G = function (Q) {
      return Q.sort(function (_, O) {
        return _ - O;
      });
    },
    Y = function (Q, _) {
      for (
        var O,
          R,
          X = this.fillStyle,
          iA = this.strokeStyle,
          aA = this.lineCap,
          oA = this.lineWidth,
          FA = Math.abs(oA * this.ctx.transform.scaleX),
          QA = this.lineJoin,
          HA = JSON.parse(JSON.stringify(this.path)),
          DA = JSON.parse(JSON.stringify(this.path)),
          GA = [],
          gA = 0;
        gA < DA.length;
        gA++
      )
        if (DA[gA].x !== void 0)
          for (var M = N.call(this, DA[gA]), YA = 0; YA < M.length; YA += 1)
            GA.indexOf(M[YA]) === -1 && GA.push(M[YA]);
      for (var PA = 0; PA < GA.length; PA++)
        for (; this.pdf.internal.getNumberOfPages() < GA[PA]; ) F.call(this);
      if ((G(GA), this.autoPaging))
        for (
          var CA = GA[0], yA = GA[GA.length - 1], IA = CA;
          IA < yA + 1;
          IA++
        ) {
          this.pdf.setPage(IA),
            (this.fillStyle = X),
            (this.strokeStyle = iA),
            (this.lineCap = aA),
            (this.lineWidth = FA),
            (this.lineJoin = QA);
          var EA =
              this.pdf.internal.pageSize.width -
              this.margin[3] -
              this.margin[1],
            MA = IA === 1 ? this.posY + this.margin[0] : this.margin[0],
            XA =
              this.pdf.internal.pageSize.height -
              this.posY -
              this.margin[0] -
              this.margin[2],
            Ae =
              this.pdf.internal.pageSize.height -
              this.margin[0] -
              this.margin[2],
            te = IA === 1 ? 0 : XA + (IA - 2) * Ae;
          if (this.ctx.clip_path.length !== 0) {
            var se = this.path;
            (O = JSON.parse(JSON.stringify(this.ctx.clip_path))),
              (this.path = I(
                O,
                this.posX + this.margin[3],
                -te + MA + this.ctx.prevPageLastElemOffset,
              )),
              Z.call(this, Q, !0),
              (this.path = se);
          }
          if (
            ((R = JSON.parse(JSON.stringify(HA))),
            (this.path = I(
              R,
              this.posX + this.margin[3],
              -te + MA + this.ctx.prevPageLastElemOffset,
            )),
            _ === !1 || IA === 0)
          ) {
            var de = (IA > CA || IA < yA) && y.call(this);
            de &&
              (this.pdf.saveGraphicsState(),
              this.pdf
                .rect(this.margin[3], this.margin[0], EA, Ae, null)
                .clip()
                .discardPath()),
              Z.call(this, Q, _),
              de && this.pdf.restoreGraphicsState();
          }
          this.lineWidth = oA;
        }
      else (this.lineWidth = FA), Z.call(this, Q, _), (this.lineWidth = oA);
      this.path = HA;
    },
    Z = function (Q, _) {
      if (
        (Q !== "stroke" || _ || !L.call(this)) &&
        (Q === "stroke" || _ || !g.call(this))
      ) {
        for (var O, R, X = [], iA = this.path, aA = 0; aA < iA.length; aA++) {
          var oA = iA[aA];
          switch (oA.type) {
            case "begin":
              X.push({ begin: !0 });
              break;
            case "close":
              X.push({ close: !0 });
              break;
            case "mt":
              X.push({ start: oA, deltas: [], abs: [] });
              break;
            case "lt":
              var FA = X.length;
              if (
                iA[aA - 1] &&
                !isNaN(iA[aA - 1].x) &&
                ((O = [oA.x - iA[aA - 1].x, oA.y - iA[aA - 1].y]), FA > 0)
              ) {
                for (; FA >= 0; FA--)
                  if (X[FA - 1].close !== !0 && X[FA - 1].begin !== !0) {
                    X[FA - 1].deltas.push(O), X[FA - 1].abs.push(oA);
                    break;
                  }
              }
              break;
            case "bct":
              (O = [
                oA.x1 - iA[aA - 1].x,
                oA.y1 - iA[aA - 1].y,
                oA.x2 - iA[aA - 1].x,
                oA.y2 - iA[aA - 1].y,
                oA.x - iA[aA - 1].x,
                oA.y - iA[aA - 1].y,
              ]),
                X[X.length - 1].deltas.push(O);
              break;
            case "qct":
              var QA = iA[aA - 1].x + (2 / 3) * (oA.x1 - iA[aA - 1].x),
                HA = iA[aA - 1].y + (2 / 3) * (oA.y1 - iA[aA - 1].y),
                DA = oA.x + (2 / 3) * (oA.x1 - oA.x),
                GA = oA.y + (2 / 3) * (oA.y1 - oA.y),
                gA = oA.x,
                M = oA.y;
              (O = [
                QA - iA[aA - 1].x,
                HA - iA[aA - 1].y,
                DA - iA[aA - 1].x,
                GA - iA[aA - 1].y,
                gA - iA[aA - 1].x,
                M - iA[aA - 1].y,
              ]),
                X[X.length - 1].deltas.push(O);
              break;
            case "arc":
              X.push({ deltas: [], abs: [], arc: !0 }),
                Array.isArray(X[X.length - 1].abs) &&
                  X[X.length - 1].abs.push(oA);
          }
        }
        R = _ ? null : Q === "stroke" ? "stroke" : "fill";
        for (var YA = !1, PA = 0; PA < X.length; PA++)
          if (X[PA].arc)
            for (var CA = X[PA].abs, yA = 0; yA < CA.length; yA++) {
              var IA = CA[yA];
              IA.type === "arc"
                ? T.call(
                    this,
                    IA.x,
                    IA.y,
                    IA.radius,
                    IA.startAngle,
                    IA.endAngle,
                    IA.counterclockwise,
                    void 0,
                    _,
                    !YA,
                  )
                : K.call(this, IA.x, IA.y),
                (YA = !0);
            }
          else if (X[PA].close === !0) this.pdf.internal.out("h"), (YA = !1);
          else if (X[PA].begin !== !0) {
            var EA = X[PA].start.x,
              MA = X[PA].start.y;
            P.call(this, X[PA].deltas, EA, MA), (YA = !0);
          }
        R && AA.call(this, R), _ && uA.call(this);
      }
    },
    z = function (Q) {
      var _ = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
        O = _ * (this.pdf.internal.getLineHeightFactor() - 1);
      switch (this.ctx.textBaseline) {
        case "bottom":
          return Q - O;
        case "top":
          return Q + _ - O;
        case "hanging":
          return Q + _ - 2 * O;
        case "middle":
          return Q + _ / 2 - O;
        case "ideographic":
          return Q;
        case "alphabetic":
        default:
          return Q;
      }
    },
    W = function (Q) {
      return (
        Q +
        (this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor) *
          (this.pdf.internal.getLineHeightFactor() - 1)
      );
    };
  (p.prototype.createLinearGradient = function () {
    var Q = function () {};
    return (
      (Q.colorStops = []),
      (Q.addColorStop = function (_, O) {
        this.colorStops.push([_, O]);
      }),
      (Q.getColor = function () {
        return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
      }),
      (Q.isCanvasGradient = !0),
      Q
    );
  }),
    (p.prototype.createPattern = function () {
      return this.createLinearGradient();
    }),
    (p.prototype.createRadialGradient = function () {
      return this.createLinearGradient();
    });
  var T = function (Q, _, O, R, X, iA, aA, oA, FA) {
      for (var QA = nA.call(this, O, R, X, iA), HA = 0; HA < QA.length; HA++) {
        var DA = QA[HA];
        HA === 0 &&
          (FA
            ? S.call(this, DA.x1 + Q, DA.y1 + _)
            : K.call(this, DA.x1 + Q, DA.y1 + _)),
          sA.call(this, Q, _, DA.x2, DA.y2, DA.x3, DA.y3, DA.x4, DA.y4);
      }
      oA ? uA.call(this) : AA.call(this, aA);
    },
    AA = function (Q) {
      switch (Q) {
        case "stroke":
          this.pdf.internal.out("S");
          break;
        case "fill":
          this.pdf.internal.out("f");
      }
    },
    uA = function () {
      this.pdf.clip(), this.pdf.discardPath();
    },
    S = function (Q, _) {
      this.pdf.internal.out(e(Q) + " " + r(_) + " m");
    },
    x = function (Q) {
      var _;
      switch (Q.align) {
        case "right":
        case "end":
          _ = "right";
          break;
        case "center":
          _ = "center";
          break;
        case "left":
        case "start":
        default:
          _ = "left";
      }
      var O = this.pdf.getTextDimensions(Q.text),
        R = z.call(this, Q.y),
        X = W.call(this, R) - O.h,
        iA = this.ctx.transform.applyToPoint(new s(Q.x, R)),
        aA = this.ctx.transform.decompose(),
        oA = new u();
      oA = (oA = (oA = oA.multiply(aA.translate)).multiply(aA.skew)).multiply(
        aA.scale,
      );
      for (
        var FA,
          QA,
          HA,
          DA = this.ctx.transform.applyToRectangle(new c(Q.x, R, O.w, O.h)),
          GA = oA.applyToRectangle(new c(Q.x, X, O.w, O.h)),
          gA = N.call(this, GA),
          M = [],
          YA = 0;
        YA < gA.length;
        YA += 1
      )
        M.indexOf(gA[YA]) === -1 && M.push(gA[YA]);
      if ((G(M), this.autoPaging))
        for (var PA = M[0], CA = M[M.length - 1], yA = PA; yA < CA + 1; yA++) {
          this.pdf.setPage(yA);
          var IA = yA === 1 ? this.posY + this.margin[0] : this.margin[0],
            EA =
              this.pdf.internal.pageSize.height -
              this.posY -
              this.margin[0] -
              this.margin[2],
            MA = this.pdf.internal.pageSize.height - this.margin[2],
            XA = MA - this.margin[0],
            Ae = this.pdf.internal.pageSize.width - this.margin[1],
            te = Ae - this.margin[3],
            se = yA === 1 ? 0 : EA + (yA - 2) * XA;
          if (this.ctx.clip_path.length !== 0) {
            var de = this.path;
            (FA = JSON.parse(JSON.stringify(this.ctx.clip_path))),
              (this.path = I(FA, this.posX + this.margin[3], -1 * se + IA)),
              Z.call(this, "fill", !0),
              (this.path = de);
          }
          var qA = I(
            [JSON.parse(JSON.stringify(GA))],
            this.posX + this.margin[3],
            -se + IA + this.ctx.prevPageLastElemOffset,
          )[0];
          Q.scale >= 0.01 &&
            ((QA = this.pdf.internal.getFontSize()),
            this.pdf.setFontSize(QA * Q.scale),
            (HA = this.lineWidth),
            (this.lineWidth = HA * Q.scale));
          var re = this.autoPaging !== "text";
          if (re || qA.y + qA.h <= MA) {
            if (re || (qA.y >= IA && qA.x <= Ae)) {
              var xA = re
                  ? Q.text
                  : this.pdf.splitTextToSize(
                      Q.text,
                      Q.maxWidth || Ae - qA.x,
                    )[0],
                at = I(
                  [JSON.parse(JSON.stringify(DA))],
                  this.posX + this.margin[3],
                  -se + IA + this.ctx.prevPageLastElemOffset,
                )[0],
                ce = re && (yA > PA || yA < CA) && y.call(this);
              ce &&
                (this.pdf.saveGraphicsState(),
                this.pdf
                  .rect(this.margin[3], this.margin[0], te, XA, null)
                  .clip()
                  .discardPath()),
                this.pdf.text(xA, at.x, at.y, {
                  angle: Q.angle,
                  align: _,
                  renderingMode: Q.renderingMode,
                }),
                ce && this.pdf.restoreGraphicsState();
            }
          } else qA.y < MA && (this.ctx.prevPageLastElemOffset += MA - qA.y);
          Q.scale >= 0.01 && (this.pdf.setFontSize(QA), (this.lineWidth = HA));
        }
      else
        Q.scale >= 0.01 &&
          ((QA = this.pdf.internal.getFontSize()),
          this.pdf.setFontSize(QA * Q.scale),
          (HA = this.lineWidth),
          (this.lineWidth = HA * Q.scale)),
          this.pdf.text(Q.text, iA.x + this.posX, iA.y + this.posY, {
            angle: Q.angle,
            align: _,
            renderingMode: Q.renderingMode,
            maxWidth: Q.maxWidth,
          }),
          Q.scale >= 0.01 && (this.pdf.setFontSize(QA), (this.lineWidth = HA));
    },
    K = function (Q, _, O, R) {
      (O = O || 0),
        (R = R || 0),
        this.pdf.internal.out(e(Q + O) + " " + r(_ + R) + " l");
    },
    P = function (Q, _, O) {
      return this.pdf.lines(Q, _, O, null, null);
    },
    sA = function (Q, _, O, R, X, iA, aA, oA) {
      this.pdf.internal.out(
        [
          A(n(O + Q)),
          A(i(R + _)),
          A(n(X + Q)),
          A(i(iA + _)),
          A(n(aA + Q)),
          A(i(oA + _)),
          "c",
        ].join(" "),
      );
    },
    nA = function (Q, _, O, R) {
      for (var X = 2 * Math.PI, iA = Math.PI / 2; _ > O; ) _ -= X;
      var aA = Math.abs(O - _);
      aA < X && R && (aA = X - aA);
      for (var oA = [], FA = R ? -1 : 1, QA = _; aA > 1e-5; ) {
        var HA = QA + FA * Math.min(aA, iA);
        oA.push(cA.call(this, Q, QA, HA)), (aA -= Math.abs(HA - QA)), (QA = HA);
      }
      return oA;
    },
    cA = function (Q, _, O) {
      var R = (O - _) / 2,
        X = Q * Math.cos(R),
        iA = Q * Math.sin(R),
        aA = X,
        oA = -iA,
        FA = aA * aA + oA * oA,
        QA = FA + aA * X + oA * iA,
        HA = ((4 / 3) * (Math.sqrt(2 * FA * QA) - QA)) / (aA * iA - oA * X),
        DA = aA - HA * oA,
        GA = oA + HA * aA,
        gA = DA,
        M = -GA,
        YA = R + _,
        PA = Math.cos(YA),
        CA = Math.sin(YA);
      return {
        x1: Q * Math.cos(_),
        y1: Q * Math.sin(_),
        x2: DA * PA - GA * CA,
        y2: DA * CA + GA * PA,
        x3: gA * PA - M * CA,
        y3: gA * CA + M * PA,
        x4: Q * Math.cos(O),
        y4: Q * Math.sin(O),
      };
    },
    eA = function (Q) {
      return (180 * Q) / Math.PI;
    },
    hA = function (Q, _, O, R, X, iA) {
      var aA = Q + 0.5 * (O - Q),
        oA = _ + 0.5 * (R - _),
        FA = X + 0.5 * (O - X),
        QA = iA + 0.5 * (R - iA),
        HA = Math.min(Q, X, aA, FA),
        DA = Math.max(Q, X, aA, FA),
        GA = Math.min(_, iA, oA, QA),
        gA = Math.max(_, iA, oA, QA);
      return new c(HA, GA, DA - HA, gA - GA);
    },
    fA = function (Q, _, O, R, X, iA, aA, oA) {
      var FA,
        QA,
        HA,
        DA,
        GA,
        gA,
        M,
        YA,
        PA,
        CA,
        yA,
        IA,
        EA,
        MA,
        XA = O - Q,
        Ae = R - _,
        te = X - O,
        se = iA - R,
        de = aA - X,
        qA = oA - iA;
      for (QA = 0; QA < 41; QA++)
        (PA =
          (M =
            (HA = Q + (FA = QA / 40) * XA) + FA * ((GA = O + FA * te) - HA)) +
          FA * (GA + FA * (X + FA * de - GA) - M)),
          (CA =
            (YA = (DA = _ + FA * Ae) + FA * ((gA = R + FA * se) - DA)) +
            FA * (gA + FA * (iA + FA * qA - gA) - YA)),
          QA == 0
            ? ((yA = PA), (IA = CA), (EA = PA), (MA = CA))
            : ((yA = Math.min(yA, PA)),
              (IA = Math.min(IA, CA)),
              (EA = Math.max(EA, PA)),
              (MA = Math.max(MA, CA)));
      return new c(
        Math.round(yA),
        Math.round(IA),
        Math.round(EA - yA),
        Math.round(MA - IA),
      );
    },
    UA = function () {
      if (
        this.prevLineDash ||
        this.ctx.lineDash.length ||
        this.ctx.lineDashOffset
      ) {
        var Q,
          _,
          O =
            ((Q = this.ctx.lineDash),
            (_ = this.ctx.lineDashOffset),
            JSON.stringify({ lineDash: Q, lineDashOffset: _ }));
        this.prevLineDash !== O &&
          (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset),
          (this.prevLineDash = O));
      }
    };
})(jA.API),
  (function (t) {
    var A = function (i) {
        var s, c, u, h, B, p, w, g, L, y;
        for (
          c = [],
            u = 0,
            h = (i += s = "\0\0\0\0".slice(i.length % 4 || 4)).length;
          h > u;
          u += 4
        )
          (B =
            (i.charCodeAt(u) << 24) +
            (i.charCodeAt(u + 1) << 16) +
            (i.charCodeAt(u + 2) << 8) +
            i.charCodeAt(u + 3)) !== 0
            ? ((p =
                (B =
                  ((B =
                    ((B = ((B = (B - (y = B % 85)) / 85) - (L = B % 85)) / 85) -
                      (g = B % 85)) /
                    85) -
                    (w = B % 85)) /
                  85) % 85),
              c.push(p + 33, w + 33, g + 33, L + 33, y + 33))
            : c.push(122);
        return (
          (function (N, F) {
            for (var I = F; I > 0; I--) N.pop();
          })(c, s.length),
          String.fromCharCode.apply(String, c) + "~>"
        );
      },
      e = function (i) {
        var s,
          c,
          u,
          h,
          B,
          p = String,
          w = "length",
          g = 255,
          L = "charCodeAt",
          y = "slice",
          N = "replace";
        for (
          i[y](-2),
            i = i[y](0, -2)[N](/\s/g, "")[N]("z", "!!!!!"),
            u = [],
            h = 0,
            B = (i += s = "uuuuu"[y](i[w] % 5 || 5))[w];
          B > h;
          h += 5
        )
          (c =
            52200625 * (i[L](h) - 33) +
            614125 * (i[L](h + 1) - 33) +
            7225 * (i[L](h + 2) - 33) +
            85 * (i[L](h + 3) - 33) +
            (i[L](h + 4) - 33)),
            u.push(g & (c >> 24), g & (c >> 16), g & (c >> 8), g & c);
        return (
          (function (F, I) {
            for (var G = I; G > 0; G--) F.pop();
          })(u, s[w]),
          p.fromCharCode.apply(p, u)
        );
      },
      r = function (i) {
        var s = new RegExp(/^([0-9A-Fa-f]{2})+$/);
        if (
          ((i = i.replace(/\s/g, "")).indexOf(">") !== -1 &&
            (i = i.substr(0, i.indexOf(">"))),
          i.length % 2 && (i += "0"),
          s.test(i) === !1)
        )
          return "";
        for (var c = "", u = 0; u < i.length; u += 2)
          c += String.fromCharCode("0x" + (i[u] + i[u + 1]));
        return c;
      },
      n = function (i) {
        for (var s = new Uint8Array(i.length), c = i.length; c--; )
          s[c] = i.charCodeAt(c);
        return (i = (s = _u(s)).reduce(function (u, h) {
          return u + String.fromCharCode(h);
        }, ""));
      };
    t.processDataByFilters = function (i, s) {
      var c = 0,
        u = i || "",
        h = [];
      for (
        typeof (s = s || []) == "string" && (s = [s]), c = 0;
        c < s.length;
        c += 1
      )
        switch (s[c]) {
          case "ASCII85Decode":
          case "/ASCII85Decode":
            (u = e(u)), h.push("/ASCII85Encode");
            break;
          case "ASCII85Encode":
          case "/ASCII85Encode":
            (u = A(u)), h.push("/ASCII85Decode");
            break;
          case "ASCIIHexDecode":
          case "/ASCIIHexDecode":
            (u = r(u)), h.push("/ASCIIHexEncode");
            break;
          case "ASCIIHexEncode":
          case "/ASCIIHexEncode":
            (u =
              u
                .split("")
                .map(function (B) {
                  return ("0" + B.charCodeAt().toString(16)).slice(-2);
                })
                .join("") + ">"),
              h.push("/ASCIIHexDecode");
            break;
          case "FlateEncode":
          case "/FlateEncode":
            (u = n(u)), h.push("/FlateDecode");
            break;
          default:
            throw new Error('The filter: "' + s[c] + '" is not implemented');
        }
      return { data: u, reverseChain: h.reverse().join(" ") };
    };
  })(jA.API),
  (function (t) {
    (t.loadFile = function (A, e, r) {
      return (function (n, i, s) {
        (i = i !== !1), (s = typeof s == "function" ? s : function () {});
        var c = void 0;
        try {
          c = (function (u, h, B) {
            var p = new XMLHttpRequest(),
              w = 0,
              g = function (L) {
                var y = L.length,
                  N = [],
                  F = String.fromCharCode;
                for (w = 0; w < y; w += 1) N.push(F(255 & L.charCodeAt(w)));
                return N.join("");
              };
            if (
              (p.open("GET", u, !h),
              p.overrideMimeType("text/plain; charset=x-user-defined"),
              h === !1 &&
                (p.onload = function () {
                  p.status === 200 ? B(g(this.responseText)) : B(void 0);
                }),
              p.send(null),
              h && p.status === 200)
            )
              return g(p.responseText);
          })(n, i, s);
        } catch {}
        return c;
      })(A, e, r);
    }),
      (t.loadImageFile = t.loadFile);
  })(jA.API),
  (function (t) {
    function A() {
      return (
        VA.html2canvas
          ? Promise.resolve(VA.html2canvas)
          : iu(() => Promise.resolve().then(() => t5), void 0)
      )
        .catch(function (s) {
          return Promise.reject(new Error("Could not load html2canvas: " + s));
        })
        .then(function (s) {
          return s.default ? s.default : s;
        });
    }
    function e() {
      return (
        VA.DOMPurify
          ? Promise.resolve(VA.DOMPurify)
          : iu(() => import("./purify.es-cf254a40.js"), [])
      )
        .catch(function (s) {
          return Promise.reject(new Error("Could not load dompurify: " + s));
        })
        .then(function (s) {
          return s.default ? s.default : s;
        });
    }
    var r = function (s) {
        var c = Qe(s);
        return c === "undefined"
          ? "undefined"
          : c === "string" || s instanceof String
            ? "string"
            : c === "number" || s instanceof Number
              ? "number"
              : c === "function" || s instanceof Function
                ? "function"
                : s && s.constructor === Array
                  ? "array"
                  : s && s.nodeType === 1
                    ? "element"
                    : c === "object"
                      ? "object"
                      : "unknown";
      },
      n = function (s, c) {
        var u = document.createElement(s);
        for (var h in (c.className && (u.className = c.className),
        c.innerHTML &&
          c.dompurify &&
          (u.innerHTML = c.dompurify.sanitize(c.innerHTML)),
        c.style))
          u.style[h] = c.style[h];
        return u;
      },
      i = function s(c) {
        var u = Object.assign(
            s.convert(Promise.resolve()),
            JSON.parse(JSON.stringify(s.template)),
          ),
          h = s.convert(Promise.resolve(), u);
        return (h = (h = h.setProgress(1, s, 1, [s])).set(c));
      };
    ((i.prototype = Object.create(Promise.prototype)).constructor = i),
      (i.convert = function (s, c) {
        return (s.__proto__ = c || i.prototype), s;
      }),
      (i.template = {
        prop: {
          src: null,
          container: null,
          overlay: null,
          canvas: null,
          img: null,
          pdf: null,
          pageSize: null,
          callback: function () {},
        },
        progress: { val: 0, state: null, n: 0, stack: [] },
        opt: {
          filename: "file.pdf",
          margin: [0, 0, 0, 0],
          enableLinks: !0,
          x: 0,
          y: 0,
          html2canvas: {},
          jsPDF: {},
          backgroundColor: "transparent",
        },
      }),
      (i.prototype.from = function (s, c) {
        return this.then(function () {
          switch (
            (c =
              c ||
              (function (u) {
                switch (r(u)) {
                  case "string":
                    return "string";
                  case "element":
                    return u.nodeName.toLowerCase() === "canvas"
                      ? "canvas"
                      : "element";
                  default:
                    return "unknown";
                }
              })(s))
          ) {
            case "string":
              return this.then(e).then(function (u) {
                return this.set({
                  src: n("div", { innerHTML: s, dompurify: u }),
                });
              });
            case "element":
              return this.set({ src: s });
            case "canvas":
              return this.set({ canvas: s });
            case "img":
              return this.set({ img: s });
            default:
              return this.error("Unknown source type.");
          }
        });
      }),
      (i.prototype.to = function (s) {
        switch (s) {
          case "container":
            return this.toContainer();
          case "canvas":
            return this.toCanvas();
          case "img":
            return this.toImg();
          case "pdf":
            return this.toPdf();
          default:
            return this.error("Invalid target.");
        }
      }),
      (i.prototype.toContainer = function () {
        return this.thenList([
          function () {
            return (
              this.prop.src || this.error("Cannot duplicate - no source HTML.")
            );
          },
          function () {
            return this.prop.pageSize || this.setPageSize();
          },
        ]).then(function () {
          var s = {
              position: "relative",
              display: "inline-block",
              width:
                (typeof this.opt.width != "number" ||
                isNaN(this.opt.width) ||
                typeof this.opt.windowWidth != "number" ||
                isNaN(this.opt.windowWidth)
                  ? Math.max(
                      this.prop.src.clientWidth,
                      this.prop.src.scrollWidth,
                      this.prop.src.offsetWidth,
                    )
                  : this.opt.windowWidth) + "px",
              left: 0,
              right: 0,
              top: 0,
              margin: "auto",
              backgroundColor: this.opt.backgroundColor,
            },
            c = (function u(h, B) {
              for (
                var p =
                    h.nodeType === 3
                      ? document.createTextNode(h.nodeValue)
                      : h.cloneNode(!1),
                  w = h.firstChild;
                w;
                w = w.nextSibling
              )
                (B !== !0 && w.nodeType === 1 && w.nodeName === "SCRIPT") ||
                  p.appendChild(u(w, B));
              return (
                h.nodeType === 1 &&
                  (h.nodeName === "CANVAS"
                    ? ((p.width = h.width),
                      (p.height = h.height),
                      p.getContext("2d").drawImage(h, 0, 0))
                    : (h.nodeName !== "TEXTAREA" && h.nodeName !== "SELECT") ||
                      (p.value = h.value),
                  p.addEventListener(
                    "load",
                    function () {
                      (p.scrollTop = h.scrollTop),
                        (p.scrollLeft = h.scrollLeft);
                    },
                    !0,
                  )),
                p
              );
            })(this.prop.src, this.opt.html2canvas.javascriptEnabled);
          c.tagName === "BODY" &&
            (s.height =
              Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight,
              ) + "px"),
            (this.prop.overlay = n("div", {
              className: "html2pdf__overlay",
              style: {
                position: "fixed",
                overflow: "hidden",
                zIndex: 1e3,
                left: "-100000px",
                right: 0,
                bottom: 0,
                top: 0,
              },
            })),
            (this.prop.container = n("div", {
              className: "html2pdf__container",
              style: s,
            })),
            this.prop.container.appendChild(c),
            this.prop.container.firstChild.appendChild(
              n("div", {
                style: {
                  clear: "both",
                  border: "0 none transparent",
                  margin: 0,
                  padding: 0,
                  height: 0,
                },
              }),
            ),
            (this.prop.container.style.float = "none"),
            this.prop.overlay.appendChild(this.prop.container),
            document.body.appendChild(this.prop.overlay),
            (this.prop.container.firstChild.style.position = "relative"),
            (this.prop.container.height =
              Math.max(
                this.prop.container.firstChild.clientHeight,
                this.prop.container.firstChild.scrollHeight,
                this.prop.container.firstChild.offsetHeight,
              ) + "px");
        });
      }),
      (i.prototype.toCanvas = function () {
        var s = [
          function () {
            return (
              document.body.contains(this.prop.container) || this.toContainer()
            );
          },
        ];
        return this.thenList(s)
          .then(A)
          .then(function (c) {
            var u = Object.assign({}, this.opt.html2canvas);
            return delete u.onrendered, c(this.prop.container, u);
          })
          .then(function (c) {
            (this.opt.html2canvas.onrendered || function () {})(c),
              (this.prop.canvas = c),
              document.body.removeChild(this.prop.overlay);
          });
      }),
      (i.prototype.toContext2d = function () {
        var s = [
          function () {
            return (
              document.body.contains(this.prop.container) || this.toContainer()
            );
          },
        ];
        return this.thenList(s)
          .then(A)
          .then(function (c) {
            var u = this.opt.jsPDF,
              h = this.opt.fontFaces,
              B =
                typeof this.opt.width != "number" ||
                isNaN(this.opt.width) ||
                typeof this.opt.windowWidth != "number" ||
                isNaN(this.opt.windowWidth)
                  ? 1
                  : this.opt.width / this.opt.windowWidth,
              p = Object.assign(
                {
                  async: !0,
                  allowTaint: !0,
                  scale: B,
                  scrollX: this.opt.scrollX || 0,
                  scrollY: this.opt.scrollY || 0,
                  backgroundColor: "#ffffff",
                  imageTimeout: 15e3,
                  logging: !0,
                  proxy: null,
                  removeContainer: !0,
                  foreignObjectRendering: !1,
                  useCORS: !1,
                },
                this.opt.html2canvas,
              );
            if (
              (delete p.onrendered,
              (u.context2d.autoPaging =
                this.opt.autoPaging === void 0 || this.opt.autoPaging),
              (u.context2d.posX = this.opt.x),
              (u.context2d.posY = this.opt.y),
              (u.context2d.margin = this.opt.margin),
              (u.context2d.fontFaces = h),
              h)
            )
              for (var w = 0; w < h.length; ++w) {
                var g = h[w],
                  L = g.src.find(function (y) {
                    return y.format === "truetype";
                  });
                L && u.addFont(L.url, g.ref.name, g.ref.style);
              }
            return (
              (p.windowHeight = p.windowHeight || 0),
              (p.windowHeight =
                p.windowHeight == 0
                  ? Math.max(
                      this.prop.container.clientHeight,
                      this.prop.container.scrollHeight,
                      this.prop.container.offsetHeight,
                    )
                  : p.windowHeight),
              u.context2d.save(!0),
              c(this.prop.container, p)
            );
          })
          .then(function (c) {
            this.opt.jsPDF.context2d.restore(!0),
              (this.opt.html2canvas.onrendered || function () {})(c),
              (this.prop.canvas = c),
              document.body.removeChild(this.prop.overlay);
          });
      }),
      (i.prototype.toImg = function () {
        return this.thenList([
          function () {
            return this.prop.canvas || this.toCanvas();
          },
        ]).then(function () {
          var s = this.prop.canvas.toDataURL(
            "image/" + this.opt.image.type,
            this.opt.image.quality,
          );
          (this.prop.img = document.createElement("img")),
            (this.prop.img.src = s);
        });
      }),
      (i.prototype.toPdf = function () {
        return this.thenList([
          function () {
            return this.toContext2d();
          },
        ]).then(function () {
          this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
        });
      }),
      (i.prototype.output = function (s, c, u) {
        return (u = u || "pdf").toLowerCase() === "img" ||
          u.toLowerCase() === "image"
          ? this.outputImg(s, c)
          : this.outputPdf(s, c);
      }),
      (i.prototype.outputPdf = function (s, c) {
        return this.thenList([
          function () {
            return this.prop.pdf || this.toPdf();
          },
        ]).then(function () {
          return this.prop.pdf.output(s, c);
        });
      }),
      (i.prototype.outputImg = function (s) {
        return this.thenList([
          function () {
            return this.prop.img || this.toImg();
          },
        ]).then(function () {
          switch (s) {
            case void 0:
            case "img":
              return this.prop.img;
            case "datauristring":
            case "dataurlstring":
              return this.prop.img.src;
            case "datauri":
            case "dataurl":
              return (document.location.href = this.prop.img.src);
            default:
              throw 'Image output type "' + s + '" is not supported.';
          }
        });
      }),
      (i.prototype.save = function (s) {
        return this.thenList([
          function () {
            return this.prop.pdf || this.toPdf();
          },
        ])
          .set(s ? { filename: s } : null)
          .then(function () {
            this.prop.pdf.save(this.opt.filename);
          });
      }),
      (i.prototype.doCallback = function () {
        return this.thenList([
          function () {
            return this.prop.pdf || this.toPdf();
          },
        ]).then(function () {
          this.prop.callback(this.prop.pdf);
        });
      }),
      (i.prototype.set = function (s) {
        if (r(s) !== "object") return this;
        var c = Object.keys(s || {}).map(function (u) {
          if (u in i.template.prop)
            return function () {
              this.prop[u] = s[u];
            };
          switch (u) {
            case "margin":
              return this.setMargin.bind(this, s.margin);
            case "jsPDF":
              return function () {
                return (this.opt.jsPDF = s.jsPDF), this.setPageSize();
              };
            case "pageSize":
              return this.setPageSize.bind(this, s.pageSize);
            default:
              return function () {
                this.opt[u] = s[u];
              };
          }
        }, this);
        return this.then(function () {
          return this.thenList(c);
        });
      }),
      (i.prototype.get = function (s, c) {
        return this.then(function () {
          var u = s in i.template.prop ? this.prop[s] : this.opt[s];
          return c ? c(u) : u;
        });
      }),
      (i.prototype.setMargin = function (s) {
        return this.then(function () {
          switch (r(s)) {
            case "number":
              s = [s, s, s, s];
            case "array":
              if (
                (s.length === 2 && (s = [s[0], s[1], s[0], s[1]]),
                s.length === 4)
              )
                break;
            default:
              return this.error("Invalid margin array.");
          }
          this.opt.margin = s;
        }).then(this.setPageSize);
      }),
      (i.prototype.setPageSize = function (s) {
        function c(u, h) {
          return Math.floor(((u * h) / 72) * 96);
        }
        return this.then(function () {
          (s = s || jA.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") ||
            ((s.inner = {
              width: s.width - this.opt.margin[1] - this.opt.margin[3],
              height: s.height - this.opt.margin[0] - this.opt.margin[2],
            }),
            (s.inner.px = {
              width: c(s.inner.width, s.k),
              height: c(s.inner.height, s.k),
            }),
            (s.inner.ratio = s.inner.height / s.inner.width)),
            (this.prop.pageSize = s);
        });
      }),
      (i.prototype.setProgress = function (s, c, u, h) {
        return (
          s != null && (this.progress.val = s),
          c != null && (this.progress.state = c),
          u != null && (this.progress.n = u),
          h != null && (this.progress.stack = h),
          (this.progress.ratio = this.progress.val / this.progress.state),
          this
        );
      }),
      (i.prototype.updateProgress = function (s, c, u, h) {
        return this.setProgress(
          s ? this.progress.val + s : null,
          c || null,
          u ? this.progress.n + u : null,
          h ? this.progress.stack.concat(h) : null,
        );
      }),
      (i.prototype.then = function (s, c) {
        var u = this;
        return this.thenCore(s, c, function (h, B) {
          return (
            u.updateProgress(null, null, 1, [h]),
            Promise.prototype.then
              .call(this, function (p) {
                return u.updateProgress(null, h), p;
              })
              .then(h, B)
              .then(function (p) {
                return u.updateProgress(1), p;
              })
          );
        });
      }),
      (i.prototype.thenCore = function (s, c, u) {
        (u = u || Promise.prototype.then),
          s && (s = s.bind(this)),
          c && (c = c.bind(this));
        var h =
            Promise.toString().indexOf("[native code]") !== -1 &&
            Promise.name === "Promise"
              ? this
              : i.convert(Object.assign({}, this), Promise.prototype),
          B = u.call(h, s, c);
        return i.convert(B, this.__proto__);
      }),
      (i.prototype.thenExternal = function (s, c) {
        return Promise.prototype.then.call(this, s, c);
      }),
      (i.prototype.thenList = function (s) {
        var c = this;
        return (
          s.forEach(function (u) {
            c = c.thenCore(u);
          }),
          c
        );
      }),
      (i.prototype.catch = function (s) {
        s && (s = s.bind(this));
        var c = Promise.prototype.catch.call(this, s);
        return i.convert(c, this);
      }),
      (i.prototype.catchExternal = function (s) {
        return Promise.prototype.catch.call(this, s);
      }),
      (i.prototype.error = function (s) {
        return this.then(function () {
          throw new Error(s);
        });
      }),
      (i.prototype.using = i.prototype.set),
      (i.prototype.saveAs = i.prototype.save),
      (i.prototype.export = i.prototype.output),
      (i.prototype.run = i.prototype.then),
      (jA.getPageSize = function (s, c, u) {
        if (Qe(s) === "object") {
          var h = s;
          (s = h.orientation), (c = h.unit || c), (u = h.format || u);
        }
        (c = c || "mm"), (u = u || "a4"), (s = ("" + (s || "P")).toLowerCase());
        var B,
          p = ("" + u).toLowerCase(),
          w = {
            a0: [2383.94, 3370.39],
            a1: [1683.78, 2383.94],
            a2: [1190.55, 1683.78],
            a3: [841.89, 1190.55],
            a4: [595.28, 841.89],
            a5: [419.53, 595.28],
            a6: [297.64, 419.53],
            a7: [209.76, 297.64],
            a8: [147.4, 209.76],
            a9: [104.88, 147.4],
            a10: [73.7, 104.88],
            b0: [2834.65, 4008.19],
            b1: [2004.09, 2834.65],
            b2: [1417.32, 2004.09],
            b3: [1000.63, 1417.32],
            b4: [708.66, 1000.63],
            b5: [498.9, 708.66],
            b6: [354.33, 498.9],
            b7: [249.45, 354.33],
            b8: [175.75, 249.45],
            b9: [124.72, 175.75],
            b10: [87.87, 124.72],
            c0: [2599.37, 3676.54],
            c1: [1836.85, 2599.37],
            c2: [1298.27, 1836.85],
            c3: [918.43, 1298.27],
            c4: [649.13, 918.43],
            c5: [459.21, 649.13],
            c6: [323.15, 459.21],
            c7: [229.61, 323.15],
            c8: [161.57, 229.61],
            c9: [113.39, 161.57],
            c10: [79.37, 113.39],
            dl: [311.81, 623.62],
            letter: [612, 792],
            "government-letter": [576, 756],
            legal: [612, 1008],
            "junior-legal": [576, 360],
            ledger: [1224, 792],
            tabloid: [792, 1224],
            "credit-card": [153, 243],
          };
        switch (c) {
          case "pt":
            B = 1;
            break;
          case "mm":
            B = 72 / 25.4;
            break;
          case "cm":
            B = 72 / 2.54;
            break;
          case "in":
            B = 72;
            break;
          case "px":
            B = 0.75;
            break;
          case "pc":
          case "em":
            B = 12;
            break;
          case "ex":
            B = 6;
            break;
          default:
            throw "Invalid unit: " + c;
        }
        var g,
          L = 0,
          y = 0;
        if (w.hasOwnProperty(p)) (L = w[p][1] / B), (y = w[p][0] / B);
        else
          try {
            (L = u[1]), (y = u[0]);
          } catch {
            throw new Error("Invalid format: " + u);
          }
        if (s === "p" || s === "portrait")
          (s = "p"), y > L && ((g = y), (y = L), (L = g));
        else {
          if (s !== "l" && s !== "landscape") throw "Invalid orientation: " + s;
          (s = "l"), L > y && ((g = y), (y = L), (L = g));
        }
        return { width: y, height: L, unit: c, k: B, orientation: s };
      }),
      (t.html = function (s, c) {
        ((c = c || {}).callback = c.callback || function () {}),
          (c.html2canvas = c.html2canvas || {}),
          (c.html2canvas.canvas = c.html2canvas.canvas || this.canvas),
          (c.jsPDF = c.jsPDF || this),
          (c.fontFaces = c.fontFaces ? c.fontFaces.map(Ku) : null);
        var u = new i(c);
        return c.worker ? u : u.from(s).doCallback();
      });
  })(jA.API),
  (jA.API.addJS = function (t) {
    return (
      (Xf = t),
      this.internal.events.subscribe("postPutResources", function () {
        ($s = this.internal.newObject()),
          this.internal.out("<<"),
          this.internal.out("/Names [(EmbeddedJS) " + ($s + 1) + " 0 R]"),
          this.internal.out(">>"),
          this.internal.out("endobj"),
          (Wf = this.internal.newObject()),
          this.internal.out("<<"),
          this.internal.out("/S /JavaScript"),
          this.internal.out("/JS (" + Xf + ")"),
          this.internal.out(">>"),
          this.internal.out("endobj");
      }),
      this.internal.events.subscribe("putCatalog", function () {
        $s !== void 0 &&
          Wf !== void 0 &&
          this.internal.out("/Names <</JavaScript " + $s + " 0 R>>");
      }),
      this
    );
  }),
  (function (t) {
    var A;
    t.events.push([
      "postPutResources",
      function () {
        var e = this,
          r = /^(\d+) 0 obj$/;
        if (this.outline.root.children.length > 0)
          for (
            var n = e.outline.render().split(/\r\n/), i = 0;
            i < n.length;
            i++
          ) {
            var s = n[i],
              c = r.exec(s);
            if (c != null) {
              var u = c[1];
              e.internal.newObjectDeferredBegin(u, !1);
            }
            e.internal.write(s);
          }
        if (this.outline.createNamedDestinations) {
          var h = this.internal.pages.length,
            B = [];
          for (i = 0; i < h; i++) {
            var p = e.internal.newObject();
            B.push(p);
            var w = e.internal.getPageInfo(i + 1);
            e.internal.write(
              "<< /D[" + w.objId + " 0 R /XYZ null null null]>> endobj",
            );
          }
          var g = e.internal.newObject();
          for (e.internal.write("<< /Names [ "), i = 0; i < B.length; i++)
            e.internal.write("(page_" + (i + 1) + ")" + B[i] + " 0 R");
          e.internal.write(" ] >>", "endobj"),
            (A = e.internal.newObject()),
            e.internal.write("<< /Dests " + g + " 0 R"),
            e.internal.write(">>", "endobj");
        }
      },
    ]),
      t.events.push([
        "putCatalog",
        function () {
          this.outline.root.children.length > 0 &&
            (this.internal.write(
              "/Outlines",
              this.outline.makeRef(this.outline.root),
            ),
            this.outline.createNamedDestinations &&
              this.internal.write("/Names " + A + " 0 R"));
        },
      ]),
      t.events.push([
        "initialized",
        function () {
          var e = this;
          (e.outline = { createNamedDestinations: !1, root: { children: [] } }),
            (e.outline.add = function (r, n, i) {
              var s = { title: n, options: i, children: [] };
              return r == null && (r = this.root), r.children.push(s), s;
            }),
            (e.outline.render = function () {
              return (
                (this.ctx = {}),
                (this.ctx.val = ""),
                (this.ctx.pdf = e),
                this.genIds_r(this.root),
                this.renderRoot(this.root),
                this.renderItems(this.root),
                this.ctx.val
              );
            }),
            (e.outline.genIds_r = function (r) {
              r.id = e.internal.newObjectDeferred();
              for (var n = 0; n < r.children.length; n++)
                this.genIds_r(r.children[n]);
            }),
            (e.outline.renderRoot = function (r) {
              this.objStart(r),
                this.line("/Type /Outlines"),
                r.children.length > 0 &&
                  (this.line("/First " + this.makeRef(r.children[0])),
                  this.line(
                    "/Last " + this.makeRef(r.children[r.children.length - 1]),
                  )),
                this.line("/Count " + this.count_r({ count: 0 }, r)),
                this.objEnd();
            }),
            (e.outline.renderItems = function (r) {
              for (
                var n = this.ctx.pdf.internal.getVerticalCoordinateString,
                  i = 0;
                i < r.children.length;
                i++
              ) {
                var s = r.children[i];
                this.objStart(s),
                  this.line("/Title " + this.makeString(s.title)),
                  this.line("/Parent " + this.makeRef(r)),
                  i > 0 &&
                    this.line("/Prev " + this.makeRef(r.children[i - 1])),
                  i < r.children.length - 1 &&
                    this.line("/Next " + this.makeRef(r.children[i + 1])),
                  s.children.length > 0 &&
                    (this.line("/First " + this.makeRef(s.children[0])),
                    this.line(
                      "/Last " +
                        this.makeRef(s.children[s.children.length - 1]),
                    ));
                var c = (this.count = this.count_r({ count: 0 }, s));
                if (
                  (c > 0 && this.line("/Count " + c),
                  s.options && s.options.pageNumber)
                ) {
                  var u = e.internal.getPageInfo(s.options.pageNumber);
                  this.line(
                    "/Dest [" + u.objId + " 0 R /XYZ 0 " + n(0) + " 0]",
                  );
                }
                this.objEnd();
              }
              for (var h = 0; h < r.children.length; h++)
                this.renderItems(r.children[h]);
            }),
            (e.outline.line = function (r) {
              this.ctx.val +=
                r +
                `\r
`;
            }),
            (e.outline.makeRef = function (r) {
              return r.id + " 0 R";
            }),
            (e.outline.makeString = function (r) {
              return "(" + e.internal.pdfEscape(r) + ")";
            }),
            (e.outline.objStart = function (r) {
              this.ctx.val +=
                `\r
` +
                r.id +
                ` 0 obj\r
<<\r
`;
            }),
            (e.outline.objEnd = function () {
              this.ctx.val += `>> \r
endobj\r
`;
            }),
            (e.outline.count_r = function (r, n) {
              for (var i = 0; i < n.children.length; i++)
                r.count++, this.count_r(r, n.children[i]);
              return r.count;
            });
        },
      ]);
  })(jA.API),
  (function (t) {
    var A = [192, 193, 194, 195, 196, 197, 198, 199];
    t.processJPEG = function (e, r, n, i, s, c) {
      var u,
        h = this.decode.DCT_DECODE,
        B = null;
      if (
        typeof e == "string" ||
        this.__addimage__.isArrayBuffer(e) ||
        this.__addimage__.isArrayBufferView(e)
      ) {
        switch (
          ((e = s || e),
          (e = this.__addimage__.isArrayBuffer(e) ? new Uint8Array(e) : e),
          (u = (function (p) {
            for (
              var w,
                g = 256 * p.charCodeAt(4) + p.charCodeAt(5),
                L = p.length,
                y = { width: 0, height: 0, numcomponents: 1 },
                N = 4;
              N < L;
              N += 2
            ) {
              if (((N += g), A.indexOf(p.charCodeAt(N + 1)) !== -1)) {
                (w = 256 * p.charCodeAt(N + 5) + p.charCodeAt(N + 6)),
                  (y = {
                    width: 256 * p.charCodeAt(N + 7) + p.charCodeAt(N + 8),
                    height: w,
                    numcomponents: p.charCodeAt(N + 9),
                  });
                break;
              }
              g = 256 * p.charCodeAt(N + 2) + p.charCodeAt(N + 3);
            }
            return y;
          })(
            (e = this.__addimage__.isArrayBufferView(e)
              ? this.__addimage__.arrayBufferToBinaryString(e)
              : e),
          )).numcomponents)
        ) {
          case 1:
            c = this.color_spaces.DEVICE_GRAY;
            break;
          case 4:
            c = this.color_spaces.DEVICE_CMYK;
            break;
          case 3:
            c = this.color_spaces.DEVICE_RGB;
        }
        B = {
          data: e,
          width: u.width,
          height: u.height,
          colorSpace: c,
          bitsPerComponent: 8,
          filter: h,
          index: r,
          alias: n,
        };
      }
      return B;
    };
  })(jA.API);
var Fi,
  Ao,
  Jf,
  zf,
  Yf,
  O5 = (function () {
    var t, A, e;
    function r(i) {
      var s, c, u, h, B, p, w, g, L, y, N, F, I, G;
      for (
        this.data = i,
          this.pos = 8,
          this.palette = [],
          this.imgData = [],
          this.transparency = {},
          this.animation = null,
          this.text = {},
          p = null;
        ;

      ) {
        switch (
          ((s = this.readUInt32()),
          (L = function () {
            var Y, Z;
            for (Z = [], Y = 0; Y < 4; ++Y)
              Z.push(String.fromCharCode(this.data[this.pos++]));
            return Z;
          }
            .call(this)
            .join("")))
        ) {
          case "IHDR":
            (this.width = this.readUInt32()),
              (this.height = this.readUInt32()),
              (this.bits = this.data[this.pos++]),
              (this.colorType = this.data[this.pos++]),
              (this.compressionMethod = this.data[this.pos++]),
              (this.filterMethod = this.data[this.pos++]),
              (this.interlaceMethod = this.data[this.pos++]);
            break;
          case "acTL":
            this.animation = {
              numFrames: this.readUInt32(),
              numPlays: this.readUInt32() || 1 / 0,
              frames: [],
            };
            break;
          case "PLTE":
            this.palette = this.read(s);
            break;
          case "fcTL":
            p && this.animation.frames.push(p),
              (this.pos += 4),
              (p = {
                width: this.readUInt32(),
                height: this.readUInt32(),
                xOffset: this.readUInt32(),
                yOffset: this.readUInt32(),
              }),
              (B = this.readUInt16()),
              (h = this.readUInt16() || 100),
              (p.delay = (1e3 * B) / h),
              (p.disposeOp = this.data[this.pos++]),
              (p.blendOp = this.data[this.pos++]),
              (p.data = []);
            break;
          case "IDAT":
          case "fdAT":
            for (
              L === "fdAT" && ((this.pos += 4), (s -= 4)),
                i = (p != null ? p.data : void 0) || this.imgData,
                F = 0;
              0 <= s ? F < s : F > s;
              0 <= s ? ++F : --F
            )
              i.push(this.data[this.pos++]);
            break;
          case "tRNS":
            switch (((this.transparency = {}), this.colorType)) {
              case 3:
                if (
                  ((u = this.palette.length / 3),
                  (this.transparency.indexed = this.read(s)),
                  this.transparency.indexed.length > u)
                )
                  throw new Error("More transparent colors than palette size");
                if ((y = u - this.transparency.indexed.length) > 0)
                  for (I = 0; 0 <= y ? I < y : I > y; 0 <= y ? ++I : --I)
                    this.transparency.indexed.push(255);
                break;
              case 0:
                this.transparency.grayscale = this.read(s)[0];
                break;
              case 2:
                this.transparency.rgb = this.read(s);
            }
            break;
          case "tEXt":
            (w = (N = this.read(s)).indexOf(0)),
              (g = String.fromCharCode.apply(String, N.slice(0, w))),
              (this.text[g] = String.fromCharCode.apply(
                String,
                N.slice(w + 1),
              ));
            break;
          case "IEND":
            return (
              p && this.animation.frames.push(p),
              (this.colors = function () {
                switch (this.colorType) {
                  case 0:
                  case 3:
                  case 4:
                    return 1;
                  case 2:
                  case 6:
                    return 3;
                }
              }.call(this)),
              (this.hasAlphaChannel = (G = this.colorType) === 4 || G === 6),
              (c = this.colors + (this.hasAlphaChannel ? 1 : 0)),
              (this.pixelBitlength = this.bits * c),
              (this.colorSpace = function () {
                switch (this.colors) {
                  case 1:
                    return "DeviceGray";
                  case 3:
                    return "DeviceRGB";
                }
              }.call(this)),
              void (this.imgData = new Uint8Array(this.imgData))
            );
          default:
            this.pos += s;
        }
        if (((this.pos += 4), this.pos > this.data.length))
          throw new Error("Incomplete or corrupt PNG file");
      }
    }
    (r.prototype.read = function (i) {
      var s, c;
      for (c = [], s = 0; 0 <= i ? s < i : s > i; 0 <= i ? ++s : --s)
        c.push(this.data[this.pos++]);
      return c;
    }),
      (r.prototype.readUInt32 = function () {
        return (
          (this.data[this.pos++] << 24) |
          (this.data[this.pos++] << 16) |
          (this.data[this.pos++] << 8) |
          this.data[this.pos++]
        );
      }),
      (r.prototype.readUInt16 = function () {
        return (this.data[this.pos++] << 8) | this.data[this.pos++];
      }),
      (r.prototype.decodePixels = function (i) {
        var s = this.pixelBitlength / 8,
          c = new Uint8Array(this.width * this.height * s),
          u = 0,
          h = this;
        if ((i == null && (i = this.imgData), i.length === 0))
          return new Uint8Array(0);
        function B(p, w, g, L) {
          var y,
            N,
            F,
            I,
            G,
            Y,
            Z,
            z,
            W,
            T,
            AA,
            uA,
            S,
            x,
            K,
            P,
            sA,
            nA,
            cA,
            eA,
            hA,
            fA = Math.ceil((h.width - p) / g),
            UA = Math.ceil((h.height - w) / L),
            Q = h.width == fA && h.height == UA;
          for (
            x = s * fA,
              uA = Q ? c : new Uint8Array(x * UA),
              Y = i.length,
              S = 0,
              N = 0;
            S < UA && u < Y;

          ) {
            switch (i[u++]) {
              case 0:
                for (I = sA = 0; sA < x; I = sA += 1) uA[N++] = i[u++];
                break;
              case 1:
                for (I = nA = 0; nA < x; I = nA += 1)
                  (y = i[u++]),
                    (G = I < s ? 0 : uA[N - s]),
                    (uA[N++] = (y + G) % 256);
                break;
              case 2:
                for (I = cA = 0; cA < x; I = cA += 1)
                  (y = i[u++]),
                    (F = (I - (I % s)) / s),
                    (K = S && uA[(S - 1) * x + F * s + (I % s)]),
                    (uA[N++] = (K + y) % 256);
                break;
              case 3:
                for (I = eA = 0; eA < x; I = eA += 1)
                  (y = i[u++]),
                    (F = (I - (I % s)) / s),
                    (G = I < s ? 0 : uA[N - s]),
                    (K = S && uA[(S - 1) * x + F * s + (I % s)]),
                    (uA[N++] = (y + Math.floor((G + K) / 2)) % 256);
                break;
              case 4:
                for (I = hA = 0; hA < x; I = hA += 1)
                  (y = i[u++]),
                    (F = (I - (I % s)) / s),
                    (G = I < s ? 0 : uA[N - s]),
                    S === 0
                      ? (K = P = 0)
                      : ((K = uA[(S - 1) * x + F * s + (I % s)]),
                        (P = F && uA[(S - 1) * x + (F - 1) * s + (I % s)])),
                    (Z = G + K - P),
                    (z = Math.abs(Z - G)),
                    (T = Math.abs(Z - K)),
                    (AA = Math.abs(Z - P)),
                    (W = z <= T && z <= AA ? G : T <= AA ? K : P),
                    (uA[N++] = (y + W) % 256);
                break;
              default:
                throw new Error("Invalid filter algorithm: " + i[u - 1]);
            }
            if (!Q) {
              var _ = ((w + S * L) * h.width + p) * s,
                O = S * x;
              for (I = 0; I < fA; I += 1) {
                for (var R = 0; R < s; R += 1) c[_++] = uA[O++];
                _ += (g - 1) * s;
              }
            }
            S++;
          }
        }
        return (
          (i = p5(i)),
          h.interlaceMethod == 1
            ? (B(0, 0, 8, 8),
              B(4, 0, 8, 8),
              B(0, 4, 4, 8),
              B(2, 0, 4, 4),
              B(0, 2, 2, 4),
              B(1, 0, 2, 2),
              B(0, 1, 1, 2))
            : B(0, 0, 1, 1),
          c
        );
      }),
      (r.prototype.decodePalette = function () {
        var i, s, c, u, h, B, p, w, g;
        for (
          c = this.palette,
            B = this.transparency.indexed || [],
            h = new Uint8Array((B.length || 0) + c.length),
            u = 0,
            i = 0,
            s = p = 0,
            w = c.length;
          p < w;
          s = p += 3
        )
          (h[u++] = c[s]),
            (h[u++] = c[s + 1]),
            (h[u++] = c[s + 2]),
            (h[u++] = (g = B[i++]) != null ? g : 255);
        return h;
      }),
      (r.prototype.copyToImageData = function (i, s) {
        var c, u, h, B, p, w, g, L, y, N, F;
        if (
          ((u = this.colors),
          (y = null),
          (c = this.hasAlphaChannel),
          this.palette.length &&
            ((y =
              (F = this._decodedPalette) != null
                ? F
                : (this._decodedPalette = this.decodePalette())),
            (u = 4),
            (c = !0)),
          (L = (h = i.data || i).length),
          (p = y || s),
          (B = w = 0),
          u === 1)
        )
          for (; B < L; )
            (g = y ? 4 * s[B / 4] : w),
              (N = p[g++]),
              (h[B++] = N),
              (h[B++] = N),
              (h[B++] = N),
              (h[B++] = c ? p[g++] : 255),
              (w = g);
        else
          for (; B < L; )
            (g = y ? 4 * s[B / 4] : w),
              (h[B++] = p[g++]),
              (h[B++] = p[g++]),
              (h[B++] = p[g++]),
              (h[B++] = c ? p[g++] : 255),
              (w = g);
      }),
      (r.prototype.decode = function () {
        var i;
        return (
          (i = new Uint8Array(this.width * this.height * 4)),
          this.copyToImageData(i, this.decodePixels()),
          i
        );
      });
    var n = function () {
      if (Object.prototype.toString.call(VA) === "[object Window]") {
        try {
          (A = VA.document.createElement("canvas")), (e = A.getContext("2d"));
        } catch {
          return !1;
        }
        return !0;
      }
      return !1;
    };
    return (
      n(),
      (t = function (i) {
        var s;
        if (n() === !0)
          return (
            (e.width = i.width),
            (e.height = i.height),
            e.clearRect(0, 0, i.width, i.height),
            e.putImageData(i, 0, 0),
            ((s = new Image()).src = A.toDataURL()),
            s
          );
        throw new Error(
          "This method requires a Browser with Canvas-capability.",
        );
      }),
      (r.prototype.decodeFrames = function (i) {
        var s, c, u, h, B, p, w, g;
        if (this.animation) {
          for (
            g = [], c = B = 0, p = (w = this.animation.frames).length;
            B < p;
            c = ++B
          )
            (s = w[c]),
              (u = i.createImageData(s.width, s.height)),
              (h = this.decodePixels(new Uint8Array(s.data))),
              this.copyToImageData(u, h),
              (s.imageData = u),
              g.push((s.image = t(u)));
          return g;
        }
      }),
      (r.prototype.renderFrame = function (i, s) {
        var c, u, h;
        return (
          (c = (u = this.animation.frames)[s]),
          (h = u[s - 1]),
          s === 0 && i.clearRect(0, 0, this.width, this.height),
          (h != null ? h.disposeOp : void 0) === 1
            ? i.clearRect(h.xOffset, h.yOffset, h.width, h.height)
            : (h != null ? h.disposeOp : void 0) === 2 &&
              i.putImageData(h.imageData, h.xOffset, h.yOffset),
          c.blendOp === 0 &&
            i.clearRect(c.xOffset, c.yOffset, c.width, c.height),
          i.drawImage(c.image, c.xOffset, c.yOffset)
        );
      }),
      (r.prototype.animate = function (i) {
        var s,
          c,
          u,
          h,
          B,
          p,
          w = this;
        return (
          (c = 0),
          (p = this.animation),
          (h = p.numFrames),
          (u = p.frames),
          (B = p.numPlays),
          (s = function () {
            var g, L;
            if (
              ((g = c++ % h),
              (L = u[g]),
              w.renderFrame(i, g),
              h > 1 && c / h < B)
            )
              return (w.animation._timeout = setTimeout(s, L.delay));
          })()
        );
      }),
      (r.prototype.stopAnimation = function () {
        var i;
        return clearTimeout((i = this.animation) != null ? i._timeout : void 0);
      }),
      (r.prototype.render = function (i) {
        var s, c;
        return (
          i._png && i._png.stopAnimation(),
          (i._png = this),
          (i.width = this.width),
          (i.height = this.height),
          (s = i.getContext("2d")),
          this.animation
            ? (this.decodeFrames(s), this.animate(s))
            : ((c = s.createImageData(this.width, this.height)),
              this.copyToImageData(c, this.decodePixels()),
              s.putImageData(c, 0, 0))
        );
      }),
      r
    );
  })();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 *//**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */ function P5(t) {
  var A = 0;
  if (
    t[A++] !== 71 ||
    t[A++] !== 73 ||
    t[A++] !== 70 ||
    t[A++] !== 56 ||
    ((t[A++] + 1) & 253) != 56 ||
    t[A++] !== 97
  )
    throw new Error("Invalid GIF 87a/89a header.");
  var e = t[A++] | (t[A++] << 8),
    r = t[A++] | (t[A++] << 8),
    n = t[A++],
    i = n >> 7,
    s = 1 << ((7 & n) + 1);
  t[A++], t[A++];
  var c = null,
    u = null;
  i && ((c = A), (u = s), (A += 3 * s));
  var h = !0,
    B = [],
    p = 0,
    w = null,
    g = 0,
    L = null;
  for (this.width = e, this.height = r; h && A < t.length; )
    switch (t[A++]) {
      case 33:
        switch (t[A++]) {
          case 255:
            if (
              t[A] !== 11 ||
              (t[A + 1] == 78 &&
                t[A + 2] == 69 &&
                t[A + 3] == 84 &&
                t[A + 4] == 83 &&
                t[A + 5] == 67 &&
                t[A + 6] == 65 &&
                t[A + 7] == 80 &&
                t[A + 8] == 69 &&
                t[A + 9] == 50 &&
                t[A + 10] == 46 &&
                t[A + 11] == 48 &&
                t[A + 12] == 3 &&
                t[A + 13] == 1 &&
                t[A + 16] == 0)
            )
              (A += 14), (L = t[A++] | (t[A++] << 8)), A++;
            else
              for (A += 12; ; ) {
                if (!((S = t[A++]) >= 0)) throw Error("Invalid block size");
                if (S === 0) break;
                A += S;
              }
            break;
          case 249:
            if (t[A++] !== 4 || t[A + 4] !== 0)
              throw new Error("Invalid graphics extension block.");
            var y = t[A++];
            (p = t[A++] | (t[A++] << 8)),
              (w = t[A++]),
              !(1 & y) && (w = null),
              (g = (y >> 2) & 7),
              A++;
            break;
          case 254:
            for (;;) {
              if (!((S = t[A++]) >= 0)) throw Error("Invalid block size");
              if (S === 0) break;
              A += S;
            }
            break;
          default:
            throw new Error(
              "Unknown graphic control label: 0x" + t[A - 1].toString(16),
            );
        }
        break;
      case 44:
        var N = t[A++] | (t[A++] << 8),
          F = t[A++] | (t[A++] << 8),
          I = t[A++] | (t[A++] << 8),
          G = t[A++] | (t[A++] << 8),
          Y = t[A++],
          Z = (Y >> 6) & 1,
          z = 1 << ((7 & Y) + 1),
          W = c,
          T = u,
          AA = !1;
        Y >> 7 && ((AA = !0), (W = A), (T = z), (A += 3 * z));
        var uA = A;
        for (A++; ; ) {
          var S;
          if (!((S = t[A++]) >= 0)) throw Error("Invalid block size");
          if (S === 0) break;
          A += S;
        }
        B.push({
          x: N,
          y: F,
          width: I,
          height: G,
          has_local_palette: AA,
          palette_offset: W,
          palette_size: T,
          data_offset: uA,
          data_length: A - uA,
          transparent_index: w,
          interlaced: !!Z,
          delay: p,
          disposal: g,
        });
        break;
      case 59:
        h = !1;
        break;
      default:
        throw new Error("Unknown gif block: 0x" + t[A - 1].toString(16));
    }
  (this.numFrames = function () {
    return B.length;
  }),
    (this.loopCount = function () {
      return L;
    }),
    (this.frameInfo = function (x) {
      if (x < 0 || x >= B.length) throw new Error("Frame index out of range.");
      return B[x];
    }),
    (this.decodeAndBlitFrameBGRA = function (x, K) {
      var P = this.frameInfo(x),
        sA = P.width * P.height,
        nA = new Uint8Array(sA);
      Zf(t, P.data_offset, nA, sA);
      var cA = P.palette_offset,
        eA = P.transparent_index;
      eA === null && (eA = 256);
      var hA = P.width,
        fA = e - hA,
        UA = hA,
        Q = 4 * (P.y * e + P.x),
        _ = 4 * ((P.y + P.height) * e + P.x),
        O = Q,
        R = 4 * fA;
      P.interlaced === !0 && (R += 4 * e * 7);
      for (var X = 8, iA = 0, aA = nA.length; iA < aA; ++iA) {
        var oA = nA[iA];
        if (
          (UA === 0 &&
            ((UA = hA),
            (O += R) >= _ &&
              ((R = 4 * fA + 4 * e * (X - 1)),
              (O = Q + (hA + fA) * (X << 1)),
              (X >>= 1))),
          oA === eA)
        )
          O += 4;
        else {
          var FA = t[cA + 3 * oA],
            QA = t[cA + 3 * oA + 1],
            HA = t[cA + 3 * oA + 2];
          (K[O++] = HA), (K[O++] = QA), (K[O++] = FA), (K[O++] = 255);
        }
        --UA;
      }
    }),
    (this.decodeAndBlitFrameRGBA = function (x, K) {
      var P = this.frameInfo(x),
        sA = P.width * P.height,
        nA = new Uint8Array(sA);
      Zf(t, P.data_offset, nA, sA);
      var cA = P.palette_offset,
        eA = P.transparent_index;
      eA === null && (eA = 256);
      var hA = P.width,
        fA = e - hA,
        UA = hA,
        Q = 4 * (P.y * e + P.x),
        _ = 4 * ((P.y + P.height) * e + P.x),
        O = Q,
        R = 4 * fA;
      P.interlaced === !0 && (R += 4 * e * 7);
      for (var X = 8, iA = 0, aA = nA.length; iA < aA; ++iA) {
        var oA = nA[iA];
        if (
          (UA === 0 &&
            ((UA = hA),
            (O += R) >= _ &&
              ((R = 4 * fA + 4 * e * (X - 1)),
              (O = Q + (hA + fA) * (X << 1)),
              (X >>= 1))),
          oA === eA)
        )
          O += 4;
        else {
          var FA = t[cA + 3 * oA],
            QA = t[cA + 3 * oA + 1],
            HA = t[cA + 3 * oA + 2];
          (K[O++] = FA), (K[O++] = QA), (K[O++] = HA), (K[O++] = 255);
        }
        --UA;
      }
    });
}
function Zf(t, A, e, r) {
  for (
    var n = t[A++],
      i = 1 << n,
      s = i + 1,
      c = s + 1,
      u = n + 1,
      h = (1 << u) - 1,
      B = 0,
      p = 0,
      w = 0,
      g = t[A++],
      L = new Int32Array(4096),
      y = null;
    ;

  ) {
    for (; B < 16 && g !== 0; )
      (p |= t[A++] << B), (B += 8), g === 1 ? (g = t[A++]) : --g;
    if (B < u) break;
    var N = p & h;
    if (((p >>= u), (B -= u), N !== i)) {
      if (N === s) break;
      for (var F = N < c ? N : y, I = 0, G = F; G > i; ) (G = L[G] >> 8), ++I;
      var Y = G;
      if (w + I + (F !== N ? 1 : 0) > r)
        return void Ce.log("Warning, gif stream longer than expected.");
      e[w++] = Y;
      var Z = (w += I);
      for (F !== N && (e[w++] = Y), G = F; I--; )
        (G = L[G]), (e[--Z] = 255 & G), (G >>= 8);
      y !== null &&
        c < 4096 &&
        ((L[c++] = (y << 8) | Y),
        c >= h + 1 && u < 12 && (++u, (h = (h << 1) | 1))),
        (y = N);
    } else (c = s + 1), (h = (1 << (u = n + 1)) - 1), (y = null);
  }
  return w !== r && Ce.log("Warning, gif stream shorter than expected."), e;
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/ function ru(t) {
  var A,
    e,
    r,
    n,
    i,
    s = Math.floor,
    c = new Array(64),
    u = new Array(64),
    h = new Array(64),
    B = new Array(64),
    p = new Array(65535),
    w = new Array(65535),
    g = new Array(64),
    L = new Array(64),
    y = [],
    N = 0,
    F = 7,
    I = new Array(64),
    G = new Array(64),
    Y = new Array(64),
    Z = new Array(256),
    z = new Array(2048),
    W = [
      0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25,
      30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54,
      20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36,
      48, 49, 57, 58, 62, 63,
    ],
    T = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    AA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    uA = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
    S = [
      1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50,
      129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114,
      130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55,
      56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89,
      90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120,
      121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150,
      151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179,
      180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201,
      202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229,
      230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250,
    ],
    x = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    K = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    P = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
    sA = [
      0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129,
      8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10,
      22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55,
      56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89,
      90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120,
      121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149,
      150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178,
      179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200,
      201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229,
      230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250,
    ];
  function nA(Q, _) {
    for (var O = 0, R = 0, X = new Array(), iA = 1; iA <= 16; iA++) {
      for (var aA = 1; aA <= Q[iA]; aA++)
        (X[_[R]] = []), (X[_[R]][0] = O), (X[_[R]][1] = iA), R++, O++;
      O *= 2;
    }
    return X;
  }
  function cA(Q) {
    for (var _ = Q[0], O = Q[1] - 1; O >= 0; )
      _ & (1 << O) && (N |= 1 << F),
        O--,
        --F < 0 && (N == 255 ? (eA(255), eA(0)) : eA(N), (F = 7), (N = 0));
  }
  function eA(Q) {
    y.push(Q);
  }
  function hA(Q) {
    eA((Q >> 8) & 255), eA(255 & Q);
  }
  function fA(Q, _, O, R, X) {
    for (
      var iA,
        aA = X[0],
        oA = X[240],
        FA = (function (CA, yA) {
          var IA,
            EA,
            MA,
            XA,
            Ae,
            te,
            se,
            de,
            qA,
            re,
            xA = 0;
          for (qA = 0; qA < 8; ++qA) {
            (IA = CA[xA]),
              (EA = CA[xA + 1]),
              (MA = CA[xA + 2]),
              (XA = CA[xA + 3]),
              (Ae = CA[xA + 4]),
              (te = CA[xA + 5]),
              (se = CA[xA + 6]);
            var at = IA + (de = CA[xA + 7]),
              ce = IA - de,
              jt = EA + se,
              ve = EA - se,
              Ee = MA + te,
              lr = MA - te,
              le = XA + Ae,
              Qn = XA - Ae,
              Se = at + le,
              Vt = at - le,
              Lr = jt + Ee,
              He = jt - Ee;
            (CA[xA] = Se + Lr), (CA[xA + 4] = Se - Lr);
            var JA = 0.707106781 * (He + Vt);
            (CA[xA + 2] = Vt + JA), (CA[xA + 6] = Vt - JA);
            var fe = 0.382683433 * ((Se = Qn + lr) - (He = ve + ce)),
              Fn = 0.5411961 * Se + fe,
              tt = 1.306562965 * He + fe,
              fr = 0.707106781 * (Lr = lr + ve),
              hr = ce + fr,
              RA = ce - fr;
            (CA[xA + 5] = RA + Fn),
              (CA[xA + 3] = RA - Fn),
              (CA[xA + 1] = hr + tt),
              (CA[xA + 7] = hr - tt),
              (xA += 8);
          }
          for (xA = 0, qA = 0; qA < 8; ++qA) {
            (IA = CA[xA]),
              (EA = CA[xA + 8]),
              (MA = CA[xA + 16]),
              (XA = CA[xA + 24]),
              (Ae = CA[xA + 32]),
              (te = CA[xA + 40]),
              (se = CA[xA + 48]);
            var qt = IA + (de = CA[xA + 56]),
              Br = IA - de,
              vt = EA + se,
              Xe = EA - se,
              Ge = MA + te,
              Lt = MA - te,
              Rn = XA + Ae,
              Er = XA - Ae,
              Wt = qt + Rn,
              Xt = qt - Rn,
              Jt = vt + Ge,
              gr = vt - Ge;
            (CA[xA] = Wt + Jt), (CA[xA + 32] = Wt - Jt);
            var Nt = 0.707106781 * (gr + Xt);
            (CA[xA + 16] = Xt + Nt), (CA[xA + 48] = Xt - Nt);
            var dr = 0.382683433 * ((Wt = Er + Lt) - (gr = Xe + Br)),
              Un = 0.5411961 * Wt + dr,
              Gn = 1.306562965 * gr + dr,
              jn = 0.707106781 * (Jt = Lt + Xe),
              Vn = Br + jn,
              qn = Br - jn;
            (CA[xA + 40] = qn + Un),
              (CA[xA + 24] = qn - Un),
              (CA[xA + 8] = Vn + Gn),
              (CA[xA + 56] = Vn - Gn),
              xA++;
          }
          for (qA = 0; qA < 64; ++qA)
            (re = CA[qA] * yA[qA]),
              (g[qA] = re > 0 ? (re + 0.5) | 0 : (re - 0.5) | 0);
          return g;
        })(Q, _),
        QA = 0;
      QA < 64;
      ++QA
    )
      L[W[QA]] = FA[QA];
    var HA = L[0] - O;
    (O = L[0]), HA == 0 ? cA(R[0]) : (cA(R[w[(iA = 32767 + HA)]]), cA(p[iA]));
    for (var DA = 63; DA > 0 && L[DA] == 0; ) DA--;
    if (DA == 0) return cA(aA), O;
    for (var GA, gA = 1; gA <= DA; ) {
      for (var M = gA; L[gA] == 0 && gA <= DA; ) ++gA;
      var YA = gA - M;
      if (YA >= 16) {
        GA = YA >> 4;
        for (var PA = 1; PA <= GA; ++PA) cA(oA);
        YA &= 15;
      }
      (iA = 32767 + L[gA]), cA(X[(YA << 4) + w[iA]]), cA(p[iA]), gA++;
    }
    return DA != 63 && cA(aA), O;
  }
  function UA(Q) {
    (Q = Math.min(Math.max(Q, 1), 100)),
      i != Q &&
        ((function (_) {
          for (
            var O = [
                16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55,
                14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62,
                18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113,
                92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112,
                100, 103, 99,
              ],
              R = 0;
            R < 64;
            R++
          ) {
            var X = s((O[R] * _ + 50) / 100);
            (X = Math.min(Math.max(X, 1), 255)), (c[W[R]] = X);
          }
          for (
            var iA = [
                17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99,
                24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99,
                99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
              ],
              aA = 0;
            aA < 64;
            aA++
          ) {
            var oA = s((iA[aA] * _ + 50) / 100);
            (oA = Math.min(Math.max(oA, 1), 255)), (u[W[aA]] = oA);
          }
          for (
            var FA = [
                1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958,
                0.5411961, 0.275899379,
              ],
              QA = 0,
              HA = 0;
            HA < 8;
            HA++
          )
            for (var DA = 0; DA < 8; DA++)
              (h[QA] = 1 / (c[W[QA]] * FA[HA] * FA[DA] * 8)),
                (B[QA] = 1 / (u[W[QA]] * FA[HA] * FA[DA] * 8)),
                QA++;
        })(Q < 50 ? Math.floor(5e3 / Q) : Math.floor(200 - 2 * Q)),
        (i = Q));
  }
  (this.encode = function (Q, _) {
    _ && UA(_),
      (y = new Array()),
      (N = 0),
      (F = 7),
      hA(65496),
      hA(65504),
      hA(16),
      eA(74),
      eA(70),
      eA(73),
      eA(70),
      eA(0),
      eA(1),
      eA(1),
      eA(0),
      hA(1),
      hA(1),
      eA(0),
      eA(0),
      (function () {
        hA(65499), hA(132), eA(0);
        for (var EA = 0; EA < 64; EA++) eA(c[EA]);
        eA(1);
        for (var MA = 0; MA < 64; MA++) eA(u[MA]);
      })(),
      (function (EA, MA) {
        hA(65472),
          hA(17),
          eA(8),
          hA(MA),
          hA(EA),
          eA(3),
          eA(1),
          eA(17),
          eA(0),
          eA(2),
          eA(17),
          eA(1),
          eA(3),
          eA(17),
          eA(1);
      })(Q.width, Q.height),
      (function () {
        hA(65476), hA(418), eA(0);
        for (var EA = 0; EA < 16; EA++) eA(T[EA + 1]);
        for (var MA = 0; MA <= 11; MA++) eA(AA[MA]);
        eA(16);
        for (var XA = 0; XA < 16; XA++) eA(uA[XA + 1]);
        for (var Ae = 0; Ae <= 161; Ae++) eA(S[Ae]);
        eA(1);
        for (var te = 0; te < 16; te++) eA(x[te + 1]);
        for (var se = 0; se <= 11; se++) eA(K[se]);
        eA(17);
        for (var de = 0; de < 16; de++) eA(P[de + 1]);
        for (var qA = 0; qA <= 161; qA++) eA(sA[qA]);
      })(),
      hA(65498),
      hA(12),
      eA(3),
      eA(1),
      eA(0),
      eA(2),
      eA(17),
      eA(3),
      eA(17),
      eA(0),
      eA(63),
      eA(0);
    var O = 0,
      R = 0,
      X = 0;
    (N = 0), (F = 7), (this.encode.displayName = "_encode_");
    for (
      var iA,
        aA,
        oA,
        FA,
        QA,
        HA,
        DA,
        GA,
        gA,
        M = Q.data,
        YA = Q.width,
        PA = Q.height,
        CA = 4 * YA,
        yA = 0;
      yA < PA;

    ) {
      for (iA = 0; iA < CA; ) {
        for (QA = CA * yA + iA, DA = -1, GA = 0, gA = 0; gA < 64; gA++)
          (HA = QA + (GA = gA >> 3) * CA + (DA = 4 * (7 & gA))),
            yA + GA >= PA && (HA -= CA * (yA + 1 + GA - PA)),
            iA + DA >= CA && (HA -= iA + DA - CA + 4),
            (aA = M[HA++]),
            (oA = M[HA++]),
            (FA = M[HA++]),
            (I[gA] =
              ((z[aA] + z[(oA + 256) >> 0] + z[(FA + 512) >> 0]) >> 16) - 128),
            (G[gA] =
              ((z[(aA + 768) >> 0] +
                z[(oA + 1024) >> 0] +
                z[(FA + 1280) >> 0]) >>
                16) -
              128),
            (Y[gA] =
              ((z[(aA + 1280) >> 0] +
                z[(oA + 1536) >> 0] +
                z[(FA + 1792) >> 0]) >>
                16) -
              128);
        (O = fA(I, h, O, A, r)),
          (R = fA(G, B, R, e, n)),
          (X = fA(Y, B, X, e, n)),
          (iA += 32);
      }
      yA += 8;
    }
    if (F >= 0) {
      var IA = [];
      (IA[1] = F + 1), (IA[0] = (1 << (F + 1)) - 1), cA(IA);
    }
    return hA(65497), new Uint8Array(y);
  }),
    (t = t || 50),
    (function () {
      for (var Q = String.fromCharCode, _ = 0; _ < 256; _++) Z[_] = Q(_);
    })(),
    (A = nA(T, AA)),
    (e = nA(x, K)),
    (r = nA(uA, S)),
    (n = nA(P, sA)),
    (function () {
      for (var Q = 1, _ = 2, O = 1; O <= 15; O++) {
        for (var R = Q; R < _; R++)
          (w[32767 + R] = O),
            (p[32767 + R] = []),
            (p[32767 + R][1] = O),
            (p[32767 + R][0] = R);
        for (var X = -(_ - 1); X <= -Q; X++)
          (w[32767 + X] = O),
            (p[32767 + X] = []),
            (p[32767 + X][1] = O),
            (p[32767 + X][0] = _ - 1 + X);
        (Q <<= 1), (_ <<= 1);
      }
    })(),
    (function () {
      for (var Q = 0; Q < 256; Q++)
        (z[Q] = 19595 * Q),
          (z[(Q + 256) >> 0] = 38470 * Q),
          (z[(Q + 512) >> 0] = 7471 * Q + 32768),
          (z[(Q + 768) >> 0] = -11059 * Q),
          (z[(Q + 1024) >> 0] = -21709 * Q),
          (z[(Q + 1280) >> 0] = 32768 * Q + 8421375),
          (z[(Q + 1536) >> 0] = -27439 * Q),
          (z[(Q + 1792) >> 0] = -5329 * Q);
    })(),
    UA(t);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function ar(t, A) {
  if (
    ((this.pos = 0),
    (this.buffer = t),
    (this.datav = new DataView(t.buffer)),
    (this.is_with_alpha = !!A),
    (this.bottom_up = !0),
    (this.flag =
      String.fromCharCode(this.buffer[0]) +
      String.fromCharCode(this.buffer[1])),
    (this.pos += 2),
    ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1)
  )
    throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function $f(t) {
  function A(T) {
    if (!T) throw Error("assert :P");
  }
  function e(T, AA, uA) {
    for (var S = 0; 4 > S; S++) if (T[AA + S] != uA.charCodeAt(S)) return !0;
    return !1;
  }
  function r(T, AA, uA, S, x) {
    for (var K = 0; K < x; K++) T[AA + K] = uA[S + K];
  }
  function n(T, AA, uA, S) {
    for (var x = 0; x < S; x++) T[AA + x] = uA;
  }
  function i(T) {
    return new Int32Array(T);
  }
  function s(T, AA) {
    for (var uA = [], S = 0; S < T; S++) uA.push(new AA());
    return uA;
  }
  function c(T, AA) {
    var uA = [];
    return (
      (function S(x, K, P) {
        for (
          var sA = P[K], nA = 0;
          nA < sA &&
          (x.push(P.length > K + 1 ? [] : new AA()), !(P.length < K + 1));
          nA++
        )
          S(x[nA], K + 1, P);
      })(uA, 0, T),
      uA
    );
  }
  var u = function () {
    var T = this;
    function AA(a, o) {
      for (var f = (1 << (o - 1)) >>> 0; a & f; ) f >>>= 1;
      return f ? (a & (f - 1)) + f : a;
    }
    function uA(a, o, f, d, v) {
      A(!(d % f));
      do a[o + (d -= f)] = v;
      while (0 < d);
    }
    function S(a, o, f, d, v) {
      if ((A(2328 >= v), 512 >= v)) var C = i(512);
      else if ((C = i(v)) == null) return 0;
      return (function (U, b, E, H, j, tA) {
        var rA,
          J,
          wA = b,
          lA = 1 << E,
          V = i(16),
          q = i(16);
        for (
          A(j != 0), A(H != null), A(U != null), A(0 < E), J = 0;
          J < j;
          ++J
        ) {
          if (15 < H[J]) return 0;
          ++V[H[J]];
        }
        if (V[0] == j) return 0;
        for (q[1] = 0, rA = 1; 15 > rA; ++rA) {
          if (V[rA] > 1 << rA) return 0;
          q[rA + 1] = q[rA] + V[rA];
        }
        for (J = 0; J < j; ++J) (rA = H[J]), 0 < H[J] && (tA[q[rA]++] = J);
        if (q[15] == 1)
          return (
            ((H = new x()).g = 0), (H.value = tA[0]), uA(U, wA, 1, lA, H), lA
          );
        var dA,
          vA = -1,
          pA = lA - 1,
          _A = 0,
          bA = 1,
          kA = 1,
          LA = 1 << E;
        for (J = 0, rA = 1, j = 2; rA <= E; ++rA, j <<= 1) {
          if (((bA += kA <<= 1), 0 > (kA -= V[rA]))) return 0;
          for (; 0 < V[rA]; --V[rA])
            ((H = new x()).g = rA),
              (H.value = tA[J++]),
              uA(U, wA + _A, j, LA, H),
              (_A = AA(_A, rA));
        }
        for (rA = E + 1, j = 2; 15 >= rA; ++rA, j <<= 1) {
          if (((bA += kA <<= 1), 0 > (kA -= V[rA]))) return 0;
          for (; 0 < V[rA]; --V[rA]) {
            if (((H = new x()), (_A & pA) != vA)) {
              for (
                wA += LA, dA = 1 << ((vA = rA) - E);
                15 > vA && !(0 >= (dA -= V[vA]));

              )
                ++vA, (dA <<= 1);
              (lA += LA = 1 << (dA = vA - E)),
                (U[b + (vA = _A & pA)].g = dA + E),
                (U[b + vA].value = wA - b - vA);
            }
            (H.g = rA - E),
              (H.value = tA[J++]),
              uA(U, wA + (_A >> E), j, LA, H),
              (_A = AA(_A, rA));
          }
        }
        return bA != 2 * q[15] - 1 ? 0 : lA;
      })(a, o, f, d, v, C);
    }
    function x() {
      this.value = this.g = 0;
    }
    function K() {
      this.value = this.g = 0;
    }
    function P() {
      (this.G = s(5, x)),
        (this.H = i(5)),
        (this.jc = this.Qb = this.qb = this.nd = 0),
        (this.pd = s(Ct, K));
    }
    function sA(a, o, f, d) {
      A(a != null),
        A(o != null),
        A(2147483648 > d),
        (a.Ca = 254),
        (a.I = 0),
        (a.b = -8),
        (a.Ka = 0),
        (a.oa = o),
        (a.pa = f),
        (a.Jd = o),
        (a.Yc = f + d),
        (a.Zc = 4 <= d ? f + d - 4 + 1 : f),
        iA(a);
    }
    function nA(a, o) {
      for (var f = 0; 0 < o--; ) f |= oA(a, 128) << o;
      return f;
    }
    function cA(a, o) {
      var f = nA(a, o);
      return aA(a) ? -f : f;
    }
    function eA(a, o, f, d) {
      var v,
        C = 0;
      for (
        A(a != null),
          A(o != null),
          A(4294967288 > d),
          a.Sb = d,
          a.Ra = 0,
          a.u = 0,
          a.h = 0,
          4 < d && (d = 4),
          v = 0;
        v < d;
        ++v
      )
        C += o[f + v] << (8 * v);
      (a.Ra = C), (a.bb = d), (a.oa = o), (a.pa = f);
    }
    function hA(a) {
      for (; 8 <= a.u && a.bb < a.Sb; )
        (a.Ra >>>= 8),
          (a.Ra += (a.oa[a.pa + a.bb] << (si - 8)) >>> 0),
          ++a.bb,
          (a.u -= 8);
      O(a) && ((a.h = 1), (a.u = 0));
    }
    function fA(a, o) {
      if ((A(0 <= o), !a.h && o <= ai)) {
        var f = _(a) & ii[o];
        return (a.u += o), hA(a), f;
      }
      return (a.h = 1), (a.u = 0);
    }
    function UA() {
      (this.b = this.Ca = this.I = 0),
        (this.oa = []),
        (this.pa = 0),
        (this.Jd = []),
        (this.Yc = 0),
        (this.Zc = []),
        (this.Ka = 0);
    }
    function Q() {
      (this.Ra = 0),
        (this.oa = []),
        (this.h = this.u = this.bb = this.Sb = this.pa = 0);
    }
    function _(a) {
      return (a.Ra >>> (a.u & (si - 1))) >>> 0;
    }
    function O(a) {
      return A(a.bb <= a.Sb), a.h || (a.bb == a.Sb && a.u > si);
    }
    function R(a, o) {
      (a.u = o), (a.h = O(a));
    }
    function X(a) {
      a.u >= ea && (A(a.u >= ea), hA(a));
    }
    function iA(a) {
      A(a != null && a.oa != null),
        a.pa < a.Zc
          ? ((a.I = (a.oa[a.pa++] | (a.I << 8)) >>> 0), (a.b += 8))
          : (A(a != null && a.oa != null),
            a.pa < a.Yc
              ? ((a.b += 8), (a.I = a.oa[a.pa++] | (a.I << 8)))
              : a.Ka
                ? (a.b = 0)
                : ((a.I <<= 8), (a.b += 8), (a.Ka = 1)));
    }
    function aA(a) {
      return nA(a, 1);
    }
    function oA(a, o) {
      var f = a.Ca;
      0 > a.b && iA(a);
      var d = a.b,
        v = (f * o) >>> 8,
        C = (a.I >>> d > v) + 0;
      for (
        C ? ((f -= v), (a.I -= ((v + 1) << d) >>> 0)) : (f = v + 1),
          d = f,
          v = 0;
        256 <= d;

      )
        (v += 8), (d >>= 8);
      return (d = 7 ^ (v + Qt[d])), (a.b -= d), (a.Ca = (f << d) - 1), C;
    }
    function FA(a, o, f) {
      (a[o + 0] = (f >> 24) & 255),
        (a[o + 1] = (f >> 16) & 255),
        (a[o + 2] = (f >> 8) & 255),
        (a[o + 3] = (f >> 0) & 255);
    }
    function QA(a, o) {
      return (a[o + 0] << 0) | (a[o + 1] << 8);
    }
    function HA(a, o) {
      return QA(a, o) | (a[o + 2] << 16);
    }
    function DA(a, o) {
      return QA(a, o) | (QA(a, o + 2) << 16);
    }
    function GA(a, o) {
      var f = 1 << o;
      return (
        A(a != null),
        A(0 < o),
        (a.X = i(f)),
        a.X == null ? 0 : ((a.Mb = 32 - o), (a.Xa = o), 1)
      );
    }
    function gA(a, o) {
      A(a != null), A(o != null), A(a.Xa == o.Xa), r(o.X, 0, a.X, 0, 1 << o.Xa);
    }
    function M() {
      (this.X = []), (this.Xa = this.Mb = 0);
    }
    function YA(a, o, f, d) {
      A(f != null), A(d != null);
      var v = f[0],
        C = d[0];
      return (
        v == 0 && (v = (a * C + o / 2) / o),
        C == 0 && (C = (o * v + a / 2) / a),
        0 >= v || 0 >= C ? 0 : ((f[0] = v), (d[0] = C), 1)
      );
    }
    function PA(a, o) {
      return (a + (1 << o) - 1) >>> o;
    }
    function CA(a, o) {
      return (
        (((((4278255360 & a) + (4278255360 & o)) >>> 0) & 4278255360) +
          ((((16711935 & a) + (16711935 & o)) >>> 0) & 16711935)) >>>
        0
      );
    }
    function yA(a, o) {
      T[o] = function (f, d, v, C, U, b, E) {
        var H;
        for (H = 0; H < U; ++H) {
          var j = T[a](b[E + H - 1], v, C + H);
          b[E + H] = CA(f[d + H], j);
        }
      };
    }
    function IA() {
      this.ud = this.hd = this.jd = 0;
    }
    function EA(a, o) {
      return (((4278124286 & (a ^ o)) >>> 1) + (a & o)) >>> 0;
    }
    function MA(a) {
      return 0 <= a && 256 > a ? a : 0 > a ? 0 : 255 < a ? 255 : void 0;
    }
    function XA(a, o) {
      return MA(a + ((a - o + 0.5) >> 1));
    }
    function Ae(a, o, f) {
      return Math.abs(o - f) - Math.abs(a - f);
    }
    function te(a, o, f, d, v, C, U) {
      for (d = C[U - 1], f = 0; f < v; ++f) C[U + f] = d = CA(a[o + f], d);
    }
    function se(a, o, f, d, v) {
      var C;
      for (C = 0; C < f; ++C) {
        var U = a[o + C],
          b = (U >> 8) & 255,
          E = 16711935 & (E = (E = 16711935 & U) + ((b << 16) + b));
        d[v + C] = ((4278255360 & U) + E) >>> 0;
      }
    }
    function de(a, o) {
      (o.jd = (a >> 0) & 255),
        (o.hd = (a >> 8) & 255),
        (o.ud = (a >> 16) & 255);
    }
    function qA(a, o, f, d, v, C) {
      var U;
      for (U = 0; U < d; ++U) {
        var b = o[f + U],
          E = b >>> 8,
          H = b,
          j =
            255 &
            (j =
              (j = b >>> 16) +
              ((((a.jd << 24) >> 24) * ((E << 24) >> 24)) >>> 5));
        (H =
          255 &
          (H =
            (H = H + ((((a.hd << 24) >> 24) * ((E << 24) >> 24)) >>> 5)) +
            ((((a.ud << 24) >> 24) * ((j << 24) >> 24)) >>> 5))),
          (v[C + U] = (4278255360 & b) + (j << 16) + H);
      }
    }
    function re(a, o, f, d, v) {
      (T[o] = function (C, U, b, E, H, j, tA, rA, J) {
        for (E = tA; E < rA; ++E)
          for (tA = 0; tA < J; ++tA) H[j++] = v(b[d(C[U++])]);
      }),
        (T[a] = function (C, U, b, E, H, j, tA) {
          var rA = 8 >> C.b,
            J = C.Ea,
            wA = C.K[0],
            lA = C.w;
          if (8 > rA)
            for (C = (1 << C.b) - 1, lA = (1 << rA) - 1; U < b; ++U) {
              var V,
                q = 0;
              for (V = 0; V < J; ++V)
                V & C || (q = d(E[H++])), (j[tA++] = v(wA[q & lA])), (q >>= rA);
            }
          else T["VP8LMapColor" + f](E, H, wA, lA, j, tA, U, b, J);
        });
    }
    function xA(a, o, f, d, v) {
      for (f = o + f; o < f; ) {
        var C = a[o++];
        (d[v++] = (C >> 16) & 255),
          (d[v++] = (C >> 8) & 255),
          (d[v++] = (C >> 0) & 255);
      }
    }
    function at(a, o, f, d, v) {
      for (f = o + f; o < f; ) {
        var C = a[o++];
        (d[v++] = (C >> 16) & 255),
          (d[v++] = (C >> 8) & 255),
          (d[v++] = (C >> 0) & 255),
          (d[v++] = (C >> 24) & 255);
      }
    }
    function ce(a, o, f, d, v) {
      for (f = o + f; o < f; ) {
        var C = (((U = a[o++]) >> 16) & 240) | ((U >> 12) & 15),
          U = ((U >> 0) & 240) | ((U >> 28) & 15);
        (d[v++] = C), (d[v++] = U);
      }
    }
    function jt(a, o, f, d, v) {
      for (f = o + f; o < f; ) {
        var C = (((U = a[o++]) >> 16) & 248) | ((U >> 13) & 7),
          U = ((U >> 5) & 224) | ((U >> 3) & 31);
        (d[v++] = C), (d[v++] = U);
      }
    }
    function ve(a, o, f, d, v) {
      for (f = o + f; o < f; ) {
        var C = a[o++];
        (d[v++] = (C >> 0) & 255),
          (d[v++] = (C >> 8) & 255),
          (d[v++] = (C >> 16) & 255);
      }
    }
    function Ee(a, o, f, d, v, C) {
      if (C == 0)
        for (f = o + f; o < f; )
          FA(
            d,
            (((C = a[o++])[0] >> 24) |
              ((C[1] >> 8) & 65280) |
              ((C[2] << 8) & 16711680) |
              (C[3] << 24)) >>>
              0,
          ),
            (v += 32);
      else r(d, v, a, o, f);
    }
    function lr(a, o) {
      (T[o][0] = T[a + "0"]),
        (T[o][1] = T[a + "1"]),
        (T[o][2] = T[a + "2"]),
        (T[o][3] = T[a + "3"]),
        (T[o][4] = T[a + "4"]),
        (T[o][5] = T[a + "5"]),
        (T[o][6] = T[a + "6"]),
        (T[o][7] = T[a + "7"]),
        (T[o][8] = T[a + "8"]),
        (T[o][9] = T[a + "9"]),
        (T[o][10] = T[a + "10"]),
        (T[o][11] = T[a + "11"]),
        (T[o][12] = T[a + "12"]),
        (T[o][13] = T[a + "13"]),
        (T[o][14] = T[a + "0"]),
        (T[o][15] = T[a + "0"]);
    }
    function le(a) {
      return a == hc || a == Bc || a == ls || a == gc;
    }
    function Qn() {
      (this.eb = []), (this.size = this.A = this.fb = 0);
    }
    function Se() {
      (this.y = []),
        (this.f = []),
        (this.ea = []),
        (this.F = []),
        (this.Tc =
          this.Ed =
          this.Cd =
          this.Fd =
          this.lb =
          this.Db =
          this.Ab =
          this.fa =
          this.J =
          this.W =
          this.N =
          this.O =
            0);
    }
    function Vt() {
      (this.Rd = this.height = this.width = this.S = 0),
        (this.f = {}),
        (this.f.RGBA = new Qn()),
        (this.f.kb = new Se()),
        (this.sd = null);
    }
    function Lr() {
      (this.width = [0]),
        (this.height = [0]),
        (this.Pd = [0]),
        (this.Qd = [0]),
        (this.format = [0]);
    }
    function He() {
      this.Id =
        this.fd =
        this.Md =
        this.hb =
        this.ib =
        this.da =
        this.bd =
        this.cd =
        this.j =
        this.v =
        this.Da =
        this.Sd =
        this.ob =
          0;
    }
    function JA(a) {
      return alert("todo:WebPSamplerProcessPlane"), a.T;
    }
    function fe(a, o) {
      var f = a.T,
        d = o.ba.f.RGBA,
        v = d.eb,
        C = d.fb + a.ka * d.A,
        U = Ot[o.ba.S],
        b = a.y,
        E = a.O,
        H = a.f,
        j = a.N,
        tA = a.ea,
        rA = a.W,
        J = o.cc,
        wA = o.dc,
        lA = o.Mc,
        V = o.Nc,
        q = a.ka,
        dA = a.ka + a.T,
        vA = a.U,
        pA = (vA + 1) >> 1;
      for (
        q == 0
          ? U(
              b,
              E,
              null,
              null,
              H,
              j,
              tA,
              rA,
              H,
              j,
              tA,
              rA,
              v,
              C,
              null,
              null,
              vA,
            )
          : (U(
              o.ec,
              o.fc,
              b,
              E,
              J,
              wA,
              lA,
              V,
              H,
              j,
              tA,
              rA,
              v,
              C - d.A,
              v,
              C,
              vA,
            ),
            ++f);
        q + 2 < dA;
        q += 2
      )
        (J = H),
          (wA = j),
          (lA = tA),
          (V = rA),
          (j += a.Rc),
          (rA += a.Rc),
          (C += 2 * d.A),
          U(
            b,
            (E += 2 * a.fa) - a.fa,
            b,
            E,
            J,
            wA,
            lA,
            V,
            H,
            j,
            tA,
            rA,
            v,
            C - d.A,
            v,
            C,
            vA,
          );
      return (
        (E += a.fa),
        a.j + dA < a.o
          ? (r(o.ec, o.fc, b, E, vA),
            r(o.cc, o.dc, H, j, pA),
            r(o.Mc, o.Nc, tA, rA, pA),
            f--)
          : 1 & dA ||
            U(
              b,
              E,
              null,
              null,
              H,
              j,
              tA,
              rA,
              H,
              j,
              tA,
              rA,
              v,
              C + d.A,
              null,
              null,
              vA,
            ),
        f
      );
    }
    function Fn(a, o, f) {
      var d = a.F,
        v = [a.J];
      if (d != null) {
        var C = a.U,
          U = o.ba.S,
          b = U == us || U == ls;
        o = o.ba.f.RGBA;
        var E = [0],
          H = a.ka;
        (E[0] = a.T),
          a.Kb &&
            (H == 0 ? --E[0] : (--H, (v[0] -= a.width)),
            a.j + a.ka + a.T == a.o && (E[0] = a.o - a.j - H));
        var j = o.eb;
        (H = o.fb + H * o.A),
          (a = is(d, v[0], a.width, C, E, j, H + (b ? 0 : 3), o.A)),
          A(f == E),
          a && le(U) && $r(j, H, b, C, E, o.A);
      }
      return 0;
    }
    function tt(a) {
      var o = a.ma,
        f = o.ba.S,
        d = 11 > f,
        v = f == os || f == cs || f == us || f == fc || f == 12 || le(f);
      if (
        ((o.memory = null),
        (o.Ib = null),
        (o.Jb = null),
        (o.Nd = null),
        !$i(o.Oa, a, v ? 11 : 12))
      )
        return 0;
      if ((v && le(f) && mA(), a.da)) alert("todo:use_scaling");
      else {
        if (d) {
          if (((o.Ib = JA), a.Kb)) {
            if (
              ((f = (a.U + 1) >> 1),
              (o.memory = i(a.U + 2 * f)),
              o.memory == null)
            )
              return 0;
            (o.ec = o.memory),
              (o.fc = 0),
              (o.cc = o.ec),
              (o.dc = o.fc + a.U),
              (o.Mc = o.cc),
              (o.Nc = o.dc + f),
              (o.Ib = fe),
              mA();
          }
        } else alert("todo:EmitYUV");
        v && ((o.Jb = Fn), d && $());
      }
      if (d && !hl) {
        for (a = 0; 256 > a; ++a)
          (q0[a] = (89858 * (a - 128) + hs) >> fs),
            (J0[a] = -22014 * (a - 128) + hs),
            (X0[a] = -45773 * (a - 128)),
            (W0[a] = (113618 * (a - 128) + hs) >> fs);
        for (a = sa; a < wc; ++a)
          (o = (76283 * (a - 16) + hs) >> fs),
            (z0[a - sa] = Et(o, 255)),
            (Y0[a - sa] = Et((o + 8) >> 4, 15));
        hl = 1;
      }
      return 1;
    }
    function fr(a) {
      var o = a.ma,
        f = a.U,
        d = a.T;
      return (
        A(!(1 & a.ka)),
        0 >= f || 0 >= d
          ? 0
          : ((f = o.Ib(a, o)), o.Jb != null && o.Jb(a, o, f), (o.Dc += f), 1)
      );
    }
    function hr(a) {
      a.ma.memory = null;
    }
    function RA(a, o, f, d) {
      return fA(a, 8) != 47
        ? 0
        : ((o[0] = fA(a, 14) + 1),
          (f[0] = fA(a, 14) + 1),
          (d[0] = fA(a, 1)),
          fA(a, 3) != 0 ? 0 : !a.h);
    }
    function qt(a, o) {
      if (4 > a) return a + 1;
      var f = (a - 2) >> 1;
      return ((2 + (1 & a)) << f) + fA(o, f) + 1;
    }
    function Br(a, o) {
      return 120 < o
        ? o - 120
        : 1 <= (f = ((f = H0[o - 1]) >> 4) * a + (8 - (15 & f)))
          ? f
          : 1;
      var f;
    }
    function vt(a, o, f) {
      var d = _(f),
        v = a[(o += 255 & d)].g - 8;
      return (
        0 < v &&
          (R(f, f.u + 8),
          (d = _(f)),
          (o += a[o].value),
          (o += d & ((1 << v) - 1))),
        R(f, f.u + a[o].g),
        a[o].value
      );
    }
    function Xe(a, o, f) {
      return (f.g += a.g), (f.value += (a.value << o) >>> 0), A(8 >= f.g), a.g;
    }
    function Ge(a, o, f) {
      var d = a.xc;
      return (
        A((o = d == 0 ? 0 : a.vc[a.md * (f >> d) + (o >> d)]) < a.Wb), a.Ya[o]
      );
    }
    function Lt(a, o, f, d) {
      var v = a.ab,
        C = a.c * o,
        U = a.C;
      o = U + o;
      var b = f,
        E = d;
      for (d = a.Ta, f = a.Ua; 0 < v--; ) {
        var H = a.gc[v],
          j = U,
          tA = o,
          rA = b,
          J = E,
          wA = ((E = d), (b = f), H.Ea);
        switch ((A(j < tA), A(tA <= H.nc), H.hc)) {
          case 2:
            ns(rA, J, (tA - j) * wA, E, b);
            break;
          case 0:
            var lA = j,
              V = tA,
              q = E,
              dA = b,
              vA = (LA = H).Ea;
            lA == 0 &&
              (oc(rA, J, null, null, 1, q, dA),
              te(rA, J + 1, 0, 0, vA - 1, q, dA + 1),
              (J += vA),
              (dA += vA),
              ++lA);
            for (
              var pA = 1 << LA.b,
                _A = pA - 1,
                bA = PA(vA, LA.b),
                kA = LA.K,
                LA = LA.w + (lA >> LA.b) * bA;
              lA < V;

            ) {
              var ue = kA,
                Be = LA,
                oe = 1;
              for (ta(rA, J, q, dA - vA, 1, q, dA); oe < vA; ) {
                var ne = (oe & ~_A) + pA;
                ne > vA && (ne = vA),
                  (0, Jr[(ue[Be++] >> 8) & 15])(
                    rA,
                    J + +oe,
                    q,
                    dA + oe - vA,
                    ne - oe,
                    q,
                    dA + oe,
                  ),
                  (oe = ne);
              }
              (J += vA), (dA += vA), ++lA & _A || (LA += bA);
            }
            tA != H.nc && r(E, b - wA, E, b + (tA - j - 1) * wA, wA);
            break;
          case 1:
            for (
              wA = rA,
                V = J,
                vA = (rA = H.Ea) - (dA = rA & ~(q = (J = 1 << H.b) - 1)),
                lA = PA(rA, H.b),
                pA = H.K,
                H = H.w + (j >> H.b) * lA;
              j < tA;

            ) {
              for (
                _A = pA, bA = H, kA = new IA(), LA = V + dA, ue = V + rA;
                V < LA;

              )
                de(_A[bA++], kA), _t(kA, wA, V, J, E, b), (V += J), (b += J);
              V < ue &&
                (de(_A[bA++], kA),
                _t(kA, wA, V, vA, E, b),
                (V += vA),
                (b += vA)),
                ++j & q || (H += lA);
            }
            break;
          case 3:
            if (rA == E && J == b && 0 < H.b) {
              for (
                V = E,
                  rA = wA = b + (tA - j) * wA - (dA = (tA - j) * PA(H.Ea, H.b)),
                  J = E,
                  q = b,
                  lA = [],
                  dA = (vA = dA) - 1;
                0 <= dA;
                --dA
              )
                lA[dA] = J[q + dA];
              for (dA = vA - 1; 0 <= dA; --dA) V[rA + dA] = lA[dA];
              $t(H, j, tA, E, wA, E, b);
            } else $t(H, j, tA, rA, J, E, b);
        }
        (b = d), (E = f);
      }
      E != f && r(d, f, b, E, C);
    }
    function Rn(a, o) {
      var f = a.V,
        d = a.Ba + a.c * a.C,
        v = o - a.C;
      if ((A(o <= a.l.o), A(16 >= v), 0 < v)) {
        var C = a.l,
          U = a.Ta,
          b = a.Ua,
          E = C.width;
        if (
          (Lt(a, v, f, d),
          (v = b = [b]),
          A((f = a.C) < (d = o)),
          A(C.v < C.va),
          d > C.o && (d = C.o),
          f < C.j)
        ) {
          var H = C.j - f;
          (f = C.j), (v[0] += H * E);
        }
        if (
          (f >= d
            ? (f = 0)
            : ((v[0] += 4 * C.v),
              (C.ka = f - C.j),
              (C.U = C.va - C.v),
              (C.T = d - f),
              (f = 1)),
          f)
        ) {
          if (((b = b[0]), 11 > (f = a.ca).S)) {
            var j = f.f.RGBA,
              tA = ((d = f.S), (v = C.U), (C = C.T), (H = j.eb), j.A),
              rA = C;
            for (j = j.fb + a.Ma * j.A; 0 < rA--; ) {
              var J = U,
                wA = b,
                lA = v,
                V = H,
                q = j;
              switch (d) {
                case ss:
                  Ar(J, wA, lA, V, q);
                  break;
                case os:
                  zr(J, wA, lA, V, q);
                  break;
                case hc:
                  zr(J, wA, lA, V, q), $r(V, q, 0, lA, 1, 0);
                  break;
                case rl:
                  oi(J, wA, lA, V, q);
                  break;
                case cs:
                  Ee(J, wA, lA, V, q, 1);
                  break;
                case Bc:
                  Ee(J, wA, lA, V, q, 1), $r(V, q, 0, lA, 1, 0);
                  break;
                case us:
                  Ee(J, wA, lA, V, q, 0);
                  break;
                case ls:
                  Ee(J, wA, lA, V, q, 0), $r(V, q, 1, lA, 1, 0);
                  break;
                case fc:
                  wr(J, wA, lA, V, q);
                  break;
                case gc:
                  wr(J, wA, lA, V, q), li(V, q, lA, 1, 0);
                  break;
                case nl:
                  Hr(J, wA, lA, V, q);
                  break;
                default:
                  A(0);
              }
              (b += E), (j += tA);
            }
            a.Ma += C;
          } else alert("todo:EmitRescaledRowsYUVA");
          A(a.Ma <= f.height);
        }
      }
      (a.C = o), A(a.C <= a.i);
    }
    function Er(a) {
      var o;
      if (0 < a.ua) return 0;
      for (o = 0; o < a.Wb; ++o) {
        var f = a.Ya[o].G,
          d = a.Ya[o].H;
        if (
          0 < f[1][d[1] + 0].g ||
          0 < f[2][d[2] + 0].g ||
          0 < f[3][d[3] + 0].g
        )
          return 0;
      }
      return 1;
    }
    function Wt(a, o, f, d, v, C) {
      if (a.Z != 0) {
        var U = a.qd,
          b = a.rd;
        for (A(en[a.Z] != null); o < f; ++o)
          en[a.Z](U, b, d, v, d, v, C), (U = d), (b = v), (v += C);
        (a.qd = U), (a.rd = b);
      }
    }
    function Xt(a, o) {
      var f = a.l.ma,
        d = f.Z == 0 || f.Z == 1 ? a.l.j : a.C;
      if (((d = a.C < d ? d : a.C), A(o <= a.l.o), o > d)) {
        var v = a.l.width,
          C = f.ca,
          U = f.tb + v * d,
          b = a.V,
          E = a.Ba + a.c * d,
          H = a.gc;
        A(a.ab == 1),
          A(H[0].hc == 3),
          cc(H[0], d, o, b, E, C, U),
          Wt(f, d, o, C, U, v);
      }
      a.C = a.Ma = o;
    }
    function Jt(a, o, f, d, v, C, U) {
      var b = a.$ / d,
        E = a.$ % d,
        H = a.m,
        j = a.s,
        tA = f + a.$,
        rA = tA;
      v = f + d * v;
      var J = f + d * C,
        wA = 280 + j.ua,
        lA = a.Pb ? b : 16777216,
        V = 0 < j.ua ? j.Wa : null,
        q = j.wc,
        dA = tA < J ? Ge(j, E, b) : null;
      A(a.C < C), A(J <= v);
      var vA = !1;
      A: for (;;) {
        for (; vA || tA < J; ) {
          var pA = 0;
          if (b >= lA) {
            var _A = tA - f;
            A((lA = a).Pb),
              (lA.wd = lA.m),
              (lA.xd = _A),
              0 < lA.s.ua && gA(lA.s.Wa, lA.s.vb),
              (lA = b + _0);
          }
          if (
            (E & q || (dA = Ge(j, E, b)),
            A(dA != null),
            dA.Qb && ((o[tA] = dA.qb), (vA = !0)),
            !vA)
          )
            if ((X(H), dA.jc)) {
              (pA = H), (_A = o);
              var bA = tA,
                kA = dA.pd[_(pA) & (Ct - 1)];
              A(dA.jc),
                256 > kA.g
                  ? (R(pA, pA.u + kA.g), (_A[bA] = kA.value), (pA = 0))
                  : (R(pA, pA.u + kA.g - 256),
                    A(256 <= kA.value),
                    (pA = kA.value)),
                pA == 0 && (vA = !0);
            } else pA = vt(dA.G[0], dA.H[0], H);
          if (H.h) break;
          if (vA || 256 > pA) {
            if (!vA)
              if (dA.nd) o[tA] = (dA.qb | (pA << 8)) >>> 0;
              else {
                if (
                  (X(H),
                  (vA = vt(dA.G[1], dA.H[1], H)),
                  X(H),
                  (_A = vt(dA.G[2], dA.H[2], H)),
                  (bA = vt(dA.G[3], dA.H[3], H)),
                  H.h)
                )
                  break;
                o[tA] = ((bA << 24) | (vA << 16) | (pA << 8) | _A) >>> 0;
              }
            if (
              ((vA = !1),
              ++tA,
              ++E >= d &&
                ((E = 0),
                ++b,
                U != null && b <= C && !(b % 16) && U(a, b),
                V != null))
            )
              for (; rA < tA; )
                (pA = o[rA++]),
                  (V.X[((506832829 * pA) & 4294967295) >>> V.Mb] = pA);
          } else if (280 > pA) {
            if (
              ((pA = qt(pA - 256, H)),
              (_A = vt(dA.G[4], dA.H[4], H)),
              X(H),
              (_A = Br(d, (_A = qt(_A, H)))),
              H.h)
            )
              break;
            if (tA - f < _A || v - tA < pA) break A;
            for (bA = 0; bA < pA; ++bA) o[tA + bA] = o[tA + bA - _A];
            for (tA += pA, E += pA; E >= d; )
              (E -= d), ++b, U != null && b <= C && !(b % 16) && U(a, b);
            if ((A(tA <= v), E & q && (dA = Ge(j, E, b)), V != null))
              for (; rA < tA; )
                (pA = o[rA++]),
                  (V.X[((506832829 * pA) & 4294967295) >>> V.Mb] = pA);
          } else {
            if (!(pA < wA)) break A;
            for (vA = pA - 280, A(V != null); rA < tA; )
              (pA = o[rA++]),
                (V.X[((506832829 * pA) & 4294967295) >>> V.Mb] = pA);
            (pA = tA), A(!(vA >>> (_A = V).Xa)), (o[pA] = _A.X[vA]), (vA = !0);
          }
          vA || A(H.h == O(H));
        }
        if (a.Pb && H.h && tA < v)
          A(a.m.h),
            (a.a = 5),
            (a.m = a.wd),
            (a.$ = a.xd),
            0 < a.s.ua && gA(a.s.vb, a.s.Wa);
        else {
          if (H.h) break A;
          U != null && U(a, b > C ? C : b), (a.a = 0), (a.$ = tA - f);
        }
        return 1;
      }
      return (a.a = 3), 0;
    }
    function gr(a) {
      A(a != null), (a.vc = null), (a.yc = null), (a.Ya = null);
      var o = a.Wa;
      o != null && (o.X = null), (a.vb = null), A(a != null);
    }
    function Nt() {
      var a = new sc();
      return a == null
        ? null
        : ((a.a = 0),
          (a.xb = sl),
          lr("Predictor", "VP8LPredictors"),
          lr("Predictor", "VP8LPredictors_C"),
          lr("PredictorAdd", "VP8LPredictorsAdd"),
          lr("PredictorAdd", "VP8LPredictorsAdd_C"),
          (ns = se),
          (_t = qA),
          (Ar = xA),
          (zr = at),
          (wr = ce),
          (Hr = jt),
          (oi = ve),
          (T.VP8LMapColor32b = ra),
          (T.VP8LMapColor8b = uc),
          a);
    }
    function dr(a, o, f, d, v) {
      var C = 1,
        U = [a],
        b = [o],
        E = d.m,
        H = d.s,
        j = null,
        tA = 0;
      A: for (;;) {
        if (f)
          for (; C && fA(E, 1); ) {
            var rA = U,
              J = b,
              wA = d,
              lA = 1,
              V = wA.m,
              q = wA.gc[wA.ab],
              dA = fA(V, 2);
            if (wA.Oc & (1 << dA)) C = 0;
            else {
              switch (
                ((wA.Oc |= 1 << dA),
                (q.hc = dA),
                (q.Ea = rA[0]),
                (q.nc = J[0]),
                (q.K = [null]),
                ++wA.ab,
                A(4 >= wA.ab),
                dA)
              ) {
                case 0:
                case 1:
                  (q.b = fA(V, 3) + 2),
                    (lA = dr(PA(q.Ea, q.b), PA(q.nc, q.b), 0, wA, q.K)),
                    (q.K = q.K[0]);
                  break;
                case 3:
                  var vA,
                    pA = fA(V, 8) + 1,
                    _A = 16 < pA ? 0 : 4 < pA ? 1 : 2 < pA ? 2 : 3;
                  if (
                    ((rA[0] = PA(q.Ea, _A)),
                    (q.b = _A),
                    (vA = lA = dr(pA, 1, 0, wA, q.K)))
                  ) {
                    var bA,
                      kA = pA,
                      LA = q,
                      ue = 1 << (8 >> LA.b),
                      Be = i(ue);
                    if (Be == null) vA = 0;
                    else {
                      var oe = LA.K[0],
                        ne = LA.w;
                      for (Be[0] = LA.K[0][0], bA = 1; bA < 1 * kA; ++bA)
                        Be[bA] = CA(oe[ne + bA], Be[bA - 1]);
                      for (; bA < 4 * ue; ++bA) Be[bA] = 0;
                      (LA.K[0] = null), (LA.K[0] = Be), (vA = 1);
                    }
                  }
                  lA = vA;
                  break;
                case 2:
                  break;
                default:
                  A(0);
              }
              C = lA;
            }
          }
        if (
          ((U = U[0]),
          (b = b[0]),
          C && fA(E, 1) && !(C = 1 <= (tA = fA(E, 4)) && 11 >= tA))
        ) {
          d.a = 3;
          break A;
        }
        var me;
        if ((me = C))
          e: {
            var pe,
              $A,
              Ve,
              Ft = d,
              qe = U,
              Ut = b,
              ge = tA,
              xt = f,
              St = Ft.m,
              Ze = Ft.s,
              rt = [null],
              gt = 1,
              Pt = 0,
              vr = N0[ge];
            t: for (;;) {
              if (xt && fA(St, 1)) {
                var $e = fA(St, 3) + 2,
                  Or = PA(qe, $e),
                  Sn = PA(Ut, $e),
                  fi = Or * Sn;
                if (!dr(Or, Sn, 0, Ft, rt)) break t;
                for (rt = rt[0], Ze.xc = $e, pe = 0; pe < fi; ++pe) {
                  var tn = (rt[pe] >> 8) & 65535;
                  (rt[pe] = tn), tn >= gt && (gt = tn + 1);
                }
              }
              if (St.h) break t;
              for ($A = 0; 5 > $A; ++$A) {
                var _e = il[$A];
                !$A && 0 < ge && (_e += 1 << ge), Pt < _e && (Pt = _e);
              }
              var vc = s(gt * vr, x),
                dl = gt,
                pl = s(dl, P);
              if (pl == null) var gs = null;
              else A(65536 >= dl), (gs = pl);
              var oa = i(Pt);
              if (gs == null || oa == null || vc == null) {
                Ft.a = 1;
                break t;
              }
              var ds = vc;
              for (pe = Ve = 0; pe < gt; ++pe) {
                var nr = gs[pe],
                  hi = nr.G,
                  Bi = nr.H,
                  wl = 0,
                  ps = 1,
                  vl = 0;
                for ($A = 0; 5 > $A; ++$A) {
                  (_e = il[$A]),
                    (hi[$A] = ds),
                    (Bi[$A] = Ve),
                    !$A && 0 < ge && (_e += 1 << ge);
                  n: {
                    var ws,
                      mc = _e,
                      vs = Ft,
                      ca = oa,
                      AB = ds,
                      eB = Ve,
                      Cc = 0,
                      rn = vs.m,
                      tB = fA(rn, 1);
                    if ((n(ca, 0, 0, mc), tB)) {
                      var rB = fA(rn, 1) + 1,
                        nB = fA(rn, 1),
                        ml = fA(rn, nB == 0 ? 1 : 8);
                      (ca[ml] = 1), rB == 2 && (ca[(ml = fA(rn, 8))] = 1);
                      var ms = 1;
                    } else {
                      var Cl = i(19),
                        Ql = fA(rn, 4) + 4;
                      if (19 < Ql) {
                        vs.a = 3;
                        var Cs = 0;
                        break n;
                      }
                      for (ws = 0; ws < Ql; ++ws) Cl[S0[ws]] = fA(rn, 3);
                      var Qc = void 0,
                        ua = void 0,
                        Fl = vs,
                        iB = Cl,
                        Qs = mc,
                        Ul = ca,
                        Fc = 0,
                        nn = Fl.m,
                        yl = 8,
                        bl = s(128, x);
                      r: for (; S(bl, 0, 7, iB, 19); ) {
                        if (fA(nn, 1)) {
                          var aB = 2 + 2 * fA(nn, 3);
                          if ((Qc = 2 + fA(nn, aB)) > Qs) break r;
                        } else Qc = Qs;
                        for (ua = 0; ua < Qs && Qc--; ) {
                          X(nn);
                          var Ll = bl[0 + (127 & _(nn))];
                          R(nn, nn.u + Ll.g);
                          var gi = Ll.value;
                          if (16 > gi) (Ul[ua++] = gi), gi != 0 && (yl = gi);
                          else {
                            var sB = gi == 16,
                              El = gi - 16,
                              oB = I0[El],
                              Il = fA(nn, E0[El]) + oB;
                            if (ua + Il > Qs) break r;
                            for (var cB = sB ? yl : 0; 0 < Il--; )
                              Ul[ua++] = cB;
                          }
                        }
                        Fc = 1;
                        break r;
                      }
                      Fc || (Fl.a = 3), (ms = Fc);
                    }
                    (ms = ms && !rn.h) && (Cc = S(AB, eB, 8, ca, mc)),
                      ms && Cc != 0 ? (Cs = Cc) : ((vs.a = 3), (Cs = 0));
                  }
                  if (Cs == 0) break t;
                  if (
                    (ps && x0[$A] == 1 && (ps = ds[Ve].g == 0),
                    (wl += ds[Ve].g),
                    (Ve += Cs),
                    3 >= $A)
                  ) {
                    var la,
                      Uc = oa[0];
                    for (la = 1; la < _e; ++la) oa[la] > Uc && (Uc = oa[la]);
                    vl += Uc;
                  }
                }
                if (
                  ((nr.nd = ps),
                  (nr.Qb = 0),
                  ps &&
                    ((nr.qb =
                      ((hi[3][Bi[3] + 0].value << 24) |
                        (hi[1][Bi[1] + 0].value << 16) |
                        hi[2][Bi[2] + 0].value) >>>
                      0),
                    wl == 0 &&
                      256 > hi[0][Bi[0] + 0].value &&
                      ((nr.Qb = 1), (nr.qb += hi[0][Bi[0] + 0].value << 8))),
                  (nr.jc = !nr.Qb && 6 > vl),
                  nr.jc)
                ) {
                  var Fs,
                    Pr = nr;
                  for (Fs = 0; Fs < Ct; ++Fs) {
                    var an = Fs,
                      sn = Pr.pd[an],
                      Us = Pr.G[0][Pr.H[0] + an];
                    256 <= Us.value
                      ? ((sn.g = Us.g + 256), (sn.value = Us.value))
                      : ((sn.g = 0),
                        (sn.value = 0),
                        (an >>= Xe(Us, 8, sn)),
                        (an >>= Xe(Pr.G[1][Pr.H[1] + an], 16, sn)),
                        (an >>= Xe(Pr.G[2][Pr.H[2] + an], 0, sn)),
                        Xe(Pr.G[3][Pr.H[3] + an], 24, sn));
                  }
                }
              }
              (Ze.vc = rt), (Ze.Wb = gt), (Ze.Ya = gs), (Ze.yc = vc), (me = 1);
              break e;
            }
            me = 0;
          }
        if (!(C = me)) {
          d.a = 3;
          break A;
        }
        if (0 < tA) {
          if (((H.ua = 1 << tA), !GA(H.Wa, tA))) {
            (d.a = 1), (C = 0);
            break A;
          }
        } else H.ua = 0;
        var yc = d,
          xl = U,
          uB = b,
          bc = yc.s,
          Lc = bc.xc;
        if (
          ((yc.c = xl),
          (yc.i = uB),
          (bc.md = PA(xl, Lc)),
          (bc.wc = Lc == 0 ? -1 : (1 << Lc) - 1),
          f)
        ) {
          d.xb = k0;
          break A;
        }
        if ((j = i(U * b)) == null) {
          (d.a = 1), (C = 0);
          break A;
        }
        C = (C = Jt(d, j, 0, U, b, b, null)) && !E.h;
        break A;
      }
      return (
        C
          ? (v != null ? (v[0] = j) : (A(j == null), A(f)),
            (d.$ = 0),
            f || gr(H))
          : gr(H),
        C
      );
    }
    function Un(a, o) {
      var f = a.c * a.i,
        d = f + o + 16 * o;
      return (
        A(a.c <= o),
        (a.V = i(d)),
        a.V == null
          ? ((a.Ta = null), (a.Ua = 0), (a.a = 1), 0)
          : ((a.Ta = a.V), (a.Ua = a.Ba + f + o), 1)
      );
    }
    function Gn(a, o) {
      var f = a.C,
        d = o - f,
        v = a.V,
        C = a.Ba + a.c * f;
      for (A(o <= a.l.o); 0 < d; ) {
        var U = 16 < d ? 16 : d,
          b = a.l.ma,
          E = a.l.width,
          H = E * U,
          j = b.ca,
          tA = b.tb + E * f,
          rA = a.Ta,
          J = a.Ua;
        Lt(a, U, v, C),
          Yu(rA, J, j, tA, H),
          Wt(b, f, f + U, j, tA, E),
          (d -= U),
          (v += U * a.c),
          (f += U);
      }
      A(f == o), (a.C = a.Ma = o);
    }
    function jn() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function Vn() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function qn() {
      (this.Fb = this.Bb = this.Cb = 0), (this.Zb = i(4)), (this.Lb = i(4));
    }
    function Pa() {
      this.Yb = (function () {
        var a = [];
        return (
          (function o(f, d, v) {
            for (
              var C = v[d], U = 0;
              U < C && (f.push(v.length > d + 1 ? [] : 0), !(v.length < d + 1));
              U++
            )
              o(f[U], d + 1, v);
          })(a, 0, [3, 11]),
          a
        );
      })();
    }
    function Po() {
      (this.jb = i(3)), (this.Wc = c([4, 8], Pa)), (this.Xc = c([4, 17], Pa));
    }
    function Mo() {
      (this.Pc = this.wb = this.Tb = this.zd = 0),
        (this.vd = new i(4)),
        (this.od = new i(4));
    }
    function Wn() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function Ma() {
      this.Na = this.la = 0;
    }
    function Ko() {
      (this.Sc = [0, 0]),
        (this.Eb = [0, 0]),
        (this.Qc = [0, 0]),
        (this.ia = this.lc = 0);
    }
    function Oi() {
      (this.ad = i(384)),
        (this.Za = 0),
        (this.Ob = i(16)),
        (this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0);
    }
    function ko() {
      (this.uc = this.M = this.Nb = 0),
        (this.wa = Array(new Wn())),
        (this.Y = 0),
        (this.ya = Array(new Oi())),
        (this.aa = 0),
        (this.l = new Xn());
    }
    function Ka() {
      (this.y = i(16)), (this.f = i(8)), (this.ea = i(8));
    }
    function Ro() {
      (this.cb = this.a = 0),
        (this.sc = ""),
        (this.m = new UA()),
        (this.Od = new jn()),
        (this.Kc = new Vn()),
        (this.ed = new Mo()),
        (this.Qa = new qn()),
        (this.Ic = this.$c = this.Aa = 0),
        (this.D = new ko()),
        (this.Xb =
          this.Va =
          this.Hb =
          this.zb =
          this.yb =
          this.Ub =
          this.za =
            0),
        (this.Jc = s(8, UA)),
        (this.ia = 0),
        (this.pb = s(4, Ko)),
        (this.Pa = new Po()),
        (this.Bd = this.kc = 0),
        (this.Ac = []),
        (this.Bc = 0),
        (this.zc = [0, 0, 0, 0]),
        (this.Gd = Array(new Ka())),
        (this.Hd = 0),
        (this.rb = Array(new Ma())),
        (this.sb = 0),
        (this.wa = Array(new Wn())),
        (this.Y = 0),
        (this.oc = []),
        (this.pc = 0),
        (this.sa = []),
        (this.ta = 0),
        (this.qa = []),
        (this.ra = 0),
        (this.Ha = []),
        (this.B = this.R = this.Ia = 0),
        (this.Ec = []),
        (this.M = this.ja = this.Vb = this.Fc = 0),
        (this.ya = Array(new Oi())),
        (this.L = this.aa = 0),
        (this.gd = c([4, 2], Wn)),
        (this.ga = null),
        (this.Fa = []),
        (this.Cc = this.qc = this.P = 0),
        (this.Gb = []),
        (this.Uc = 0),
        (this.mb = []),
        (this.nb = 0),
        (this.rc = []),
        (this.Ga = this.Vc = 0);
    }
    function Xn() {
      (this.T = this.U = this.ka = this.height = this.width = 0),
        (this.y = []),
        (this.f = []),
        (this.ea = []),
        (this.Rc = this.fa = this.W = this.N = this.O = 0),
        (this.ma = "void"),
        (this.put = "VP8IoPutHook"),
        (this.ac = "VP8IoSetupHook"),
        (this.bc = "VP8IoTeardownHook"),
        (this.ha = this.Kb = 0),
        (this.data = []),
        (this.hb =
          this.ib =
          this.da =
          this.o =
          this.j =
          this.va =
          this.v =
          this.Da =
          this.ob =
          this.w =
            0),
        (this.F = []),
        (this.J = 0);
    }
    function Go() {
      var a = new Ro();
      return (
        a != null &&
          ((a.a = 0), (a.sc = "OK"), (a.cb = 0), (a.Xb = 0), aa || (aa = Ga)),
        a
      );
    }
    function Te(a, o, f) {
      return a.a == 0 && ((a.a = o), (a.sc = f), (a.cb = 0)), 0;
    }
    function ka(a, o, f) {
      return 3 <= f && a[o + 0] == 157 && a[o + 1] == 1 && a[o + 2] == 42;
    }
    function Ra(a, o) {
      if (a == null) return 0;
      if (((a.a = 0), (a.sc = "OK"), o == null))
        return Te(a, 2, "null VP8Io passed to VP8GetHeaders()");
      var f = o.data,
        d = o.w,
        v = o.ha;
      if (4 > v) return Te(a, 7, "Truncated header.");
      var C = f[d + 0] | (f[d + 1] << 8) | (f[d + 2] << 16),
        U = a.Od;
      if (
        ((U.Rb = !(1 & C)),
        (U.td = (C >> 1) & 7),
        (U.yd = (C >> 4) & 1),
        (U.ub = C >> 5),
        3 < U.td)
      )
        return Te(a, 3, "Incorrect keyframe parameters.");
      if (!U.yd) return Te(a, 4, "Frame not displayable.");
      (d += 3), (v -= 3);
      var b = a.Kc;
      if (U.Rb) {
        if (7 > v) return Te(a, 7, "cannot parse picture header");
        if (!ka(f, d, v)) return Te(a, 3, "Bad code word");
        (b.c = 16383 & ((f[d + 4] << 8) | f[d + 3])),
          (b.Td = f[d + 4] >> 6),
          (b.i = 16383 & ((f[d + 6] << 8) | f[d + 5])),
          (b.Ud = f[d + 6] >> 6),
          (d += 7),
          (v -= 7),
          (a.za = (b.c + 15) >> 4),
          (a.Ub = (b.i + 15) >> 4),
          (o.width = b.c),
          (o.height = b.i),
          (o.Da = 0),
          (o.j = 0),
          (o.v = 0),
          (o.va = o.width),
          (o.o = o.height),
          (o.da = 0),
          (o.ib = o.width),
          (o.hb = o.height),
          (o.U = o.width),
          (o.T = o.height),
          n((C = a.Pa).jb, 0, 255, C.jb.length),
          A((C = a.Qa) != null),
          (C.Cb = 0),
          (C.Bb = 0),
          (C.Fb = 1),
          n(C.Zb, 0, 0, C.Zb.length),
          n(C.Lb, 0, 0, C.Lb);
      }
      if (U.ub > v) return Te(a, 7, "bad partition length");
      sA((C = a.m), f, d, U.ub),
        (d += U.ub),
        (v -= U.ub),
        U.Rb && ((b.Ld = aA(C)), (b.Kd = aA(C))),
        (b = a.Qa);
      var E,
        H = a.Pa;
      if ((A(C != null), A(b != null), (b.Cb = aA(C)), b.Cb)) {
        if (((b.Bb = aA(C)), aA(C))) {
          for (b.Fb = aA(C), E = 0; 4 > E; ++E) b.Zb[E] = aA(C) ? cA(C, 7) : 0;
          for (E = 0; 4 > E; ++E) b.Lb[E] = aA(C) ? cA(C, 6) : 0;
        }
        if (b.Bb) for (E = 0; 3 > E; ++E) H.jb[E] = aA(C) ? nA(C, 8) : 255;
      } else b.Bb = 0;
      if (C.Ka) return Te(a, 3, "cannot parse segment header");
      if (
        (((b = a.ed).zd = aA(C)),
        (b.Tb = nA(C, 6)),
        (b.wb = nA(C, 3)),
        (b.Pc = aA(C)),
        b.Pc && aA(C))
      ) {
        for (H = 0; 4 > H; ++H) aA(C) && (b.vd[H] = cA(C, 6));
        for (H = 0; 4 > H; ++H) aA(C) && (b.od[H] = cA(C, 6));
      }
      if (((a.L = b.Tb == 0 ? 0 : b.zd ? 1 : 2), C.Ka))
        return Te(a, 3, "cannot parse filter header");
      var j = v;
      if (
        ((v = E = d),
        (d = E + j),
        (b = j),
        (a.Xb = (1 << nA(a.m, 2)) - 1),
        j < 3 * (H = a.Xb))
      )
        f = 7;
      else {
        for (E += 3 * H, b -= 3 * H, j = 0; j < H; ++j) {
          var tA = f[v + 0] | (f[v + 1] << 8) | (f[v + 2] << 16);
          tA > b && (tA = b),
            sA(a.Jc[+j], f, E, tA),
            (E += tA),
            (b -= tA),
            (v += 3);
        }
        sA(a.Jc[+H], f, E, b), (f = E < d ? 0 : 5);
      }
      if (f != 0) return Te(a, f, "cannot parse partitions");
      for (
        f = nA((E = a.m), 7),
          v = aA(E) ? cA(E, 4) : 0,
          d = aA(E) ? cA(E, 4) : 0,
          b = aA(E) ? cA(E, 4) : 0,
          H = aA(E) ? cA(E, 4) : 0,
          E = aA(E) ? cA(E, 4) : 0,
          j = a.Qa,
          tA = 0;
        4 > tA;
        ++tA
      ) {
        if (j.Cb) {
          var rA = j.Zb[tA];
          j.Fb || (rA += f);
        } else {
          if (0 < tA) {
            a.pb[tA] = a.pb[0];
            continue;
          }
          rA = f;
        }
        var J = a.pb[tA];
        (J.Sc[0] = dc[Et(rA + v, 127)]),
          (J.Sc[1] = pc[Et(rA + 0, 127)]),
          (J.Eb[0] = 2 * dc[Et(rA + d, 127)]),
          (J.Eb[1] = (101581 * pc[Et(rA + b, 127)]) >> 16),
          8 > J.Eb[1] && (J.Eb[1] = 8),
          (J.Qc[0] = dc[Et(rA + H, 117)]),
          (J.Qc[1] = pc[Et(rA + E, 127)]),
          (J.lc = rA + E);
      }
      if (!U.Rb) return Te(a, 4, "Not a key frame.");
      for (aA(C), U = a.Pa, f = 0; 4 > f; ++f) {
        for (v = 0; 8 > v; ++v)
          for (d = 0; 3 > d; ++d)
            for (b = 0; 11 > b; ++b)
              (H = oA(C, M0[f][v][d][b]) ? nA(C, 8) : O0[f][v][d][b]),
                (U.Wc[f][v].Yb[d][b] = H);
        for (v = 0; 17 > v; ++v) U.Xc[f][v] = U.Wc[f][K0[v]];
      }
      return (a.kc = aA(C)), a.kc && (a.Bd = nA(C, 8)), (a.cb = 1);
    }
    function Ga(a, o, f, d, v, C, U) {
      var b = o[v].Yb[f];
      for (f = 0; 16 > v; ++v) {
        if (!oA(a, b[f + 0])) return v;
        for (; !oA(a, b[f + 1]); )
          if (((b = o[++v].Yb[0]), (f = 0), v == 16)) return 16;
        var E = o[v + 1].Yb;
        if (oA(a, b[f + 2])) {
          var H = a,
            j = 0;
          if (oA(H, (rA = b)[(tA = f) + 3]))
            if (oA(H, rA[tA + 6])) {
              for (
                b = 0,
                  tA =
                    2 * (j = oA(H, rA[tA + 8])) + (rA = oA(H, rA[tA + 9 + j])),
                  j = 0,
                  rA = D0[tA];
                rA[b];
                ++b
              )
                j += j + oA(H, rA[b]);
              j += 3 + (8 << tA);
            } else
              oA(H, rA[tA + 7])
                ? ((j = 7 + 2 * oA(H, 165)), (j += oA(H, 145)))
                : (j = 5 + oA(H, 159));
          else j = oA(H, rA[tA + 4]) ? 3 + oA(H, rA[tA + 5]) : 2;
          b = E[2];
        } else (j = 1), (b = E[1]);
        (E = U + T0[v]), 0 > (H = a).b && iA(H);
        var tA,
          rA = H.b,
          J = ((tA = H.Ca >> 1) - (H.I >> rA)) >> 31;
        --H.b,
          (H.Ca += J),
          (H.Ca |= 1),
          (H.I -= ((tA + 1) & J) << rA),
          (C[E] = ((j ^ J) - J) * d[(0 < v) + 0]);
      }
      return 16;
    }
    function Pi(a) {
      var o = a.rb[a.sb - 1];
      (o.la = 0), (o.Na = 0), n(a.zc, 0, 0, a.zc.length), (a.ja = 0);
    }
    function jo(a, o) {
      if (a == null) return 0;
      if (o == null) return Te(a, 2, "NULL VP8Io parameter in VP8Decode().");
      if (!a.cb && !Ra(a, o)) return 0;
      if ((A(a.cb), o.ac == null || o.ac(o))) {
        o.ob && (a.L = 0);
        var f = Bs[a.L];
        if (
          (a.L == 2
            ? ((a.yb = 0), (a.zb = 0))
            : ((a.yb = (o.v - f) >> 4),
              (a.zb = (o.j - f) >> 4),
              0 > a.yb && (a.yb = 0),
              0 > a.zb && (a.zb = 0)),
          (a.Va = (o.o + 15 + f) >> 4),
          (a.Hb = (o.va + 15 + f) >> 4),
          a.Hb > a.za && (a.Hb = a.za),
          a.Va > a.Ub && (a.Va = a.Ub),
          0 < a.L)
        ) {
          var d = a.ed;
          for (f = 0; 4 > f; ++f) {
            var v;
            if (a.Qa.Cb) {
              var C = a.Qa.Lb[f];
              a.Qa.Fb || (C += d.Tb);
            } else C = d.Tb;
            for (v = 0; 1 >= v; ++v) {
              var U = a.gd[f][v],
                b = C;
              if (
                (d.Pc && ((b += d.vd[0]), v && (b += d.od[0])),
                0 < (b = 0 > b ? 0 : 63 < b ? 63 : b))
              ) {
                var E = b;
                0 < d.wb &&
                  (E = 4 < d.wb ? E >> 2 : E >> 1) > 9 - d.wb &&
                  (E = 9 - d.wb),
                  1 > E && (E = 1),
                  (U.dd = E),
                  (U.tc = 2 * b + E),
                  (U.ld = 40 <= b ? 2 : 15 <= b ? 1 : 0);
              } else U.tc = 0;
              U.La = v;
            }
          }
        }
        f = 0;
      } else Te(a, 6, "Frame setup failed"), (f = a.a);
      if ((f = f == 0)) {
        if (f) {
          (a.$c = 0), 0 < a.Aa || (a.Ic = $0);
          A: {
            (f = a.Ic), (d = 4 * (E = a.za));
            var H = 32 * E,
              j = E + 1,
              tA = 0 < a.L ? E * (0 < a.Aa ? 2 : 1) : 0,
              rA = (a.Aa == 2 ? 2 : 1) * E;
            if (
              (U =
                d +
                832 +
                (v = ((3 * (16 * f + Bs[a.L])) / 2) * H) +
                (C = a.Fa != null && 0 < a.Fa.length ? a.Kc.c * a.Kc.i : 0)) !=
              U
            )
              f = 0;
            else {
              if (U > a.Vb) {
                if (((a.Vb = 0), (a.Ec = i(U)), (a.Fc = 0), a.Ec == null)) {
                  f = Te(a, 1, "no memory during frame initialization.");
                  break A;
                }
                a.Vb = U;
              }
              (U = a.Ec),
                (b = a.Fc),
                (a.Ac = U),
                (a.Bc = b),
                (b += d),
                (a.Gd = s(H, Ka)),
                (a.Hd = 0),
                (a.rb = s(j + 1, Ma)),
                (a.sb = 1),
                (a.wa = tA ? s(tA, Wn) : null),
                (a.Y = 0),
                (a.D.Nb = 0),
                (a.D.wa = a.wa),
                (a.D.Y = a.Y),
                0 < a.Aa && (a.D.Y += E),
                A(!0),
                (a.oc = U),
                (a.pc = b),
                (b += 832),
                (a.ya = s(rA, Oi)),
                (a.aa = 0),
                (a.D.ya = a.ya),
                (a.D.aa = a.aa),
                a.Aa == 2 && (a.D.aa += E),
                (a.R = 16 * E),
                (a.B = 8 * E),
                (E = (H = Bs[a.L]) * a.R),
                (H = (H / 2) * a.B),
                (a.sa = U),
                (a.ta = b + E),
                (a.qa = a.sa),
                (a.ra = a.ta + 16 * f * a.R + H),
                (a.Ha = a.qa),
                (a.Ia = a.ra + 8 * f * a.B + H),
                (a.$c = 0),
                (b += v),
                (a.mb = C ? U : null),
                (a.nb = C ? b : null),
                A(b + C <= a.Fc + a.Vb),
                Pi(a),
                n(a.Ac, a.Bc, 0, d),
                (f = 1);
            }
          }
          if (f) {
            if (
              ((o.ka = 0),
              (o.y = a.sa),
              (o.O = a.ta),
              (o.f = a.qa),
              (o.N = a.ra),
              (o.ea = a.Ha),
              (o.Vd = a.Ia),
              (o.fa = a.R),
              (o.Rc = a.B),
              (o.F = null),
              (o.J = 0),
              !tl)
            ) {
              for (f = -255; 255 >= f; ++f) Zu[255 + f] = 0 > f ? -f : f;
              for (f = -1020; 1020 >= f; ++f)
                $u[1020 + f] = -128 > f ? -128 : 127 < f ? 127 : f;
              for (f = -112; 112 >= f; ++f)
                Al[112 + f] = -16 > f ? -16 : 15 < f ? 15 : f;
              for (f = -255; 510 >= f; ++f)
                el[255 + f] = 0 > f ? 0 : 255 < f ? 255 : f;
              tl = 1;
            }
            (er = Wo),
              (ci = Vo),
              (Yr = Va),
              (tr = qo),
              (Nr = qa),
              (na = ja),
              (In = ji),
              (ui = Ln),
              (xn = ac),
              (Zr = Vi),
              (ia = ic),
              (Dt = Ai),
              (_r = qi),
              (Fe = es),
              (Ue = As),
              (Oe = xr),
              (Je = qr),
              (Dr = nc),
              (rr[0] = pr),
              (rr[1] = Xo),
              (rr[2] = Zo),
              (rr[3] = $o),
              (rr[4] = Ja),
              (rr[5] = Zn),
              (rr[6] = za),
              (rr[7] = ki),
              (rr[8] = ec),
              (rr[9] = Ac),
              (An[0] = Wa),
              (An[1] = zo),
              (An[2] = Ir),
              (An[3] = zn),
              (An[4] = st),
              (An[5] = Yo),
              (An[6] = Xa),
              (Tr[0] = Vr),
              (Tr[1] = Jo),
              (Tr[2] = tc),
              (Tr[3] = Ri),
              (Tr[4] = bn),
              (Tr[5] = rc),
              (Tr[6] = Gi),
              (f = 1);
          } else f = 0;
        }
        f &&
          (f = (function (J, wA) {
            for (J.M = 0; J.M < J.Va; ++J.M) {
              var lA,
                V = J.Jc[J.M & J.Xb],
                q = J.m,
                dA = J;
              for (lA = 0; lA < dA.za; ++lA) {
                var vA = q,
                  pA = dA,
                  _A = pA.Ac,
                  bA = pA.Bc + 4 * lA,
                  kA = pA.zc,
                  LA = pA.ya[pA.aa + lA];
                if (
                  (pA.Qa.Bb
                    ? (LA.$b = oA(vA, pA.Pa.jb[0])
                        ? 2 + oA(vA, pA.Pa.jb[2])
                        : oA(vA, pA.Pa.jb[1]))
                    : (LA.$b = 0),
                  pA.kc && (LA.Ad = oA(vA, pA.Bd)),
                  (LA.Za = !oA(vA, 145) + 0),
                  LA.Za)
                ) {
                  var ue = LA.Ob,
                    Be = 0;
                  for (pA = 0; 4 > pA; ++pA) {
                    var oe,
                      ne = kA[0 + pA];
                    for (oe = 0; 4 > oe; ++oe) {
                      ne = P0[_A[bA + oe]][ne];
                      for (var me = al[oA(vA, ne[0])]; 0 < me; )
                        me = al[2 * me + oA(vA, ne[me])];
                      (ne = -me), (_A[bA + oe] = ne);
                    }
                    r(ue, Be, _A, bA, 4), (Be += 4), (kA[0 + pA] = ne);
                  }
                } else
                  (ne = oA(vA, 156)
                    ? oA(vA, 128)
                      ? 1
                      : 3
                    : oA(vA, 163)
                      ? 2
                      : 0),
                    (LA.Ob[0] = ne),
                    n(_A, bA, ne, 4),
                    n(kA, 0, ne, 4);
                LA.Dd = oA(vA, 142)
                  ? oA(vA, 114)
                    ? oA(vA, 183)
                      ? 1
                      : 3
                    : 2
                  : 0;
              }
              if (dA.m.Ka)
                return Te(J, 7, "Premature end-of-partition0 encountered.");
              for (; J.ja < J.za; ++J.ja) {
                if (
                  ((dA = V),
                  (vA = (q = J).rb[q.sb - 1]),
                  (_A = q.rb[q.sb + q.ja]),
                  (lA = q.ya[q.aa + q.ja]),
                  (bA = q.kc ? lA.Ad : 0))
                )
                  (vA.la = _A.la = 0),
                    lA.Za || (vA.Na = _A.Na = 0),
                    (lA.Hc = 0),
                    (lA.Gc = 0),
                    (lA.ia = 0);
                else {
                  var pe, $A;
                  if (
                    ((vA = _A),
                    (_A = dA),
                    (bA = q.Pa.Xc),
                    (kA = q.ya[q.aa + q.ja]),
                    (LA = q.pb[kA.$b]),
                    (pA = kA.ad),
                    (ue = 0),
                    (Be = q.rb[q.sb - 1]),
                    (ne = oe = 0),
                    n(pA, ue, 0, 384),
                    kA.Za)
                  )
                    var Ve = 0,
                      Ft = bA[3];
                  else {
                    me = i(16);
                    var qe = vA.Na + Be.Na;
                    if (
                      ((qe = aa(_A, bA[1], qe, LA.Eb, 0, me, 0)),
                      (vA.Na = Be.Na = (0 < qe) + 0),
                      1 < qe)
                    )
                      er(me, 0, pA, ue);
                    else {
                      var Ut = (me[0] + 3) >> 3;
                      for (me = 0; 256 > me; me += 16) pA[ue + me] = Ut;
                    }
                    (Ve = 1), (Ft = bA[0]);
                  }
                  var ge = 15 & vA.la,
                    xt = 15 & Be.la;
                  for (me = 0; 4 > me; ++me) {
                    var St = 1 & xt;
                    for (Ut = $A = 0; 4 > Ut; ++Ut)
                      (ge =
                        (ge >> 1) |
                        ((St =
                          (qe = aa(
                            _A,
                            Ft,
                            (qe = St + (1 & ge)),
                            LA.Sc,
                            Ve,
                            pA,
                            ue,
                          )) > Ve) <<
                          7)),
                        ($A =
                          ($A << 2) |
                          (3 < qe ? 3 : 1 < qe ? 2 : pA[ue + 0] != 0)),
                        (ue += 16);
                    (ge >>= 4),
                      (xt = (xt >> 1) | (St << 7)),
                      (oe = ((oe << 8) | $A) >>> 0);
                  }
                  for (Ft = ge, Ve = xt >> 4, pe = 0; 4 > pe; pe += 2) {
                    for (
                      $A = 0,
                        ge = vA.la >> (4 + pe),
                        xt = Be.la >> (4 + pe),
                        me = 0;
                      2 > me;
                      ++me
                    ) {
                      for (St = 1 & xt, Ut = 0; 2 > Ut; ++Ut)
                        (qe = St + (1 & ge)),
                          (ge =
                            (ge >> 1) |
                            ((St =
                              0 < (qe = aa(_A, bA[2], qe, LA.Qc, 0, pA, ue))) <<
                              3)),
                          ($A =
                            ($A << 2) |
                            (3 < qe ? 3 : 1 < qe ? 2 : pA[ue + 0] != 0)),
                          (ue += 16);
                      (ge >>= 2), (xt = (xt >> 1) | (St << 5));
                    }
                    (ne |= $A << (4 * pe)),
                      (Ft |= (ge << 4) << pe),
                      (Ve |= (240 & xt) << pe);
                  }
                  (vA.la = Ft),
                    (Be.la = Ve),
                    (kA.Hc = oe),
                    (kA.Gc = ne),
                    (kA.ia = 43690 & ne ? 0 : LA.ia),
                    (bA = !(oe | ne));
                }
                if (
                  (0 < q.L &&
                    ((q.wa[q.Y + q.ja] = q.gd[lA.$b][lA.Za]),
                    (q.wa[q.Y + q.ja].La |= !bA)),
                  dA.Ka)
                )
                  return Te(J, 7, "Premature end-of-file encountered.");
              }
              if (
                (Pi(J),
                (q = wA),
                (dA = 1),
                (lA = (V = J).D),
                (vA = 0 < V.L && V.M >= V.zb && V.M <= V.Va),
                V.Aa == 0)
              )
                A: {
                  if (
                    ((lA.M = V.M),
                    (lA.uc = vA),
                    Zi(V, lA),
                    (dA = 1),
                    (lA = ($A = V.D).Nb),
                    (vA = (ne = Bs[V.L]) * V.R),
                    (_A = (ne / 2) * V.B),
                    (me = 16 * lA * V.R),
                    (Ut = 8 * lA * V.B),
                    (bA = V.sa),
                    (kA = V.ta - vA + me),
                    (LA = V.qa),
                    (pA = V.ra - _A + Ut),
                    (ue = V.Ha),
                    (Be = V.Ia - _A + Ut),
                    (xt = (ge = $A.M) == 0),
                    (oe = ge >= V.Va - 1),
                    V.Aa == 2 && Zi(V, $A),
                    $A.uc)
                  )
                    for (
                      St = (qe = V).D.M, A(qe.D.uc), $A = qe.yb;
                      $A < qe.Hb;
                      ++$A
                    ) {
                      (Ve = $A), (Ft = St);
                      var Ze = (rt = (_e = qe).D).Nb;
                      pe = _e.R;
                      var rt = rt.wa[rt.Y + Ve],
                        gt = _e.sa,
                        Pt = _e.ta + 16 * Ze * pe + 16 * Ve,
                        vr = rt.dd,
                        $e = rt.tc;
                      if ($e != 0)
                        if ((A(3 <= $e), _e.L == 1))
                          0 < Ve && Oe(gt, Pt, pe, $e + 4),
                            rt.La && Dr(gt, Pt, pe, $e),
                            0 < Ft && Ue(gt, Pt, pe, $e + 4),
                            rt.La && Je(gt, Pt, pe, $e);
                        else {
                          var Or = _e.B,
                            Sn = _e.qa,
                            fi = _e.ra + 8 * Ze * Or + 8 * Ve,
                            tn = _e.Ha,
                            _e = _e.Ia + 8 * Ze * Or + 8 * Ve;
                          (Ze = rt.ld),
                            0 < Ve &&
                              (ui(gt, Pt, pe, $e + 4, vr, Ze),
                              Zr(Sn, fi, tn, _e, Or, $e + 4, vr, Ze)),
                            rt.La &&
                              (Dt(gt, Pt, pe, $e, vr, Ze),
                              Fe(Sn, fi, tn, _e, Or, $e, vr, Ze)),
                            0 < Ft &&
                              (In(gt, Pt, pe, $e + 4, vr, Ze),
                              xn(Sn, fi, tn, _e, Or, $e + 4, vr, Ze)),
                            rt.La &&
                              (ia(gt, Pt, pe, $e, vr, Ze),
                              _r(Sn, fi, tn, _e, Or, $e, vr, Ze));
                        }
                    }
                  if ((V.ia && alert("todo:DitherRow"), q.put != null)) {
                    if (
                      (($A = 16 * ge),
                      (ge = 16 * (ge + 1)),
                      xt
                        ? ((q.y = V.sa),
                          (q.O = V.ta + me),
                          (q.f = V.qa),
                          (q.N = V.ra + Ut),
                          (q.ea = V.Ha),
                          (q.W = V.Ia + Ut))
                        : (($A -= ne),
                          (q.y = bA),
                          (q.O = kA),
                          (q.f = LA),
                          (q.N = pA),
                          (q.ea = ue),
                          (q.W = Be)),
                      oe || (ge -= ne),
                      ge > q.o && (ge = q.o),
                      (q.F = null),
                      (q.J = null),
                      V.Fa != null &&
                        0 < V.Fa.length &&
                        $A < ge &&
                        ((q.J = zi(V, q, $A, ge - $A)),
                        (q.F = V.mb),
                        q.F == null && q.F.length == 0))
                    ) {
                      dA = Te(V, 3, "Could not decode alpha data.");
                      break A;
                    }
                    $A < q.j &&
                      ((ne = q.j - $A),
                      ($A = q.j),
                      A(!(1 & ne)),
                      (q.O += V.R * ne),
                      (q.N += V.B * (ne >> 1)),
                      (q.W += V.B * (ne >> 1)),
                      q.F != null && (q.J += q.width * ne)),
                      $A < ge &&
                        ((q.O += q.v),
                        (q.N += q.v >> 1),
                        (q.W += q.v >> 1),
                        q.F != null && (q.J += q.v),
                        (q.ka = $A - q.j),
                        (q.U = q.va - q.v),
                        (q.T = ge - $A),
                        (dA = q.put(q)));
                  }
                  lA + 1 != V.Ic ||
                    oe ||
                    (r(V.sa, V.ta - vA, bA, kA + 16 * V.R, vA),
                    r(V.qa, V.ra - _A, LA, pA + 8 * V.B, _A),
                    r(V.Ha, V.Ia - _A, ue, Be + 8 * V.B, _A));
                }
              if (!dA) return Te(J, 6, "Output aborted.");
            }
            return 1;
          })(a, o)),
          o.bc != null && o.bc(o),
          (f &= 1);
      }
      return f ? ((a.cb = 0), f) : 0;
    }
    function zt(a, o, f, d, v) {
      (v = a[o + f + 32 * d] + (v >> 3)),
        (a[o + f + 32 * d] = -256 & v ? (0 > v ? 0 : 255) : v);
    }
    function Jn(a, o, f, d, v, C) {
      zt(a, o, 0, f, d + v),
        zt(a, o, 1, f, d + C),
        zt(a, o, 2, f, d - C),
        zt(a, o, 3, f, d - v);
    }
    function mt(a) {
      return ((20091 * a) >> 16) + a;
    }
    function Mi(a, o, f, d) {
      var v,
        C = 0,
        U = i(16);
      for (v = 0; 4 > v; ++v) {
        var b = a[o + 0] + a[o + 8],
          E = a[o + 0] - a[o + 8],
          H = ((35468 * a[o + 4]) >> 16) - mt(a[o + 12]),
          j = mt(a[o + 4]) + ((35468 * a[o + 12]) >> 16);
        (U[C + 0] = b + j),
          (U[C + 1] = E + H),
          (U[C + 2] = E - H),
          (U[C + 3] = b - j),
          (C += 4),
          o++;
      }
      for (v = C = 0; 4 > v; ++v)
        (b = (a = U[C + 0] + 4) + U[C + 8]),
          (E = a - U[C + 8]),
          (H = ((35468 * U[C + 4]) >> 16) - mt(U[C + 12])),
          zt(f, d, 0, 0, b + (j = mt(U[C + 4]) + ((35468 * U[C + 12]) >> 16))),
          zt(f, d, 1, 0, E + H),
          zt(f, d, 2, 0, E - H),
          zt(f, d, 3, 0, b - j),
          C++,
          (d += 32);
    }
    function ja(a, o, f, d) {
      var v = a[o + 0] + 4,
        C = (35468 * a[o + 4]) >> 16,
        U = mt(a[o + 4]),
        b = (35468 * a[o + 1]) >> 16;
      Jn(f, d, 0, v + U, (a = mt(a[o + 1])), b),
        Jn(f, d, 1, v + C, a, b),
        Jn(f, d, 2, v - C, a, b),
        Jn(f, d, 3, v - U, a, b);
    }
    function Vo(a, o, f, d, v) {
      Mi(a, o, f, d), v && Mi(a, o + 16, f, d + 4);
    }
    function Va(a, o, f, d) {
      ci(a, o + 0, f, d, 1), ci(a, o + 32, f, d + 128, 1);
    }
    function qo(a, o, f, d) {
      var v;
      for (a = a[o + 0] + 4, v = 0; 4 > v; ++v)
        for (o = 0; 4 > o; ++o) zt(f, d, o, v, a);
    }
    function qa(a, o, f, d) {
      a[o + 0] && tr(a, o + 0, f, d),
        a[o + 16] && tr(a, o + 16, f, d + 4),
        a[o + 32] && tr(a, o + 32, f, d + 128),
        a[o + 48] && tr(a, o + 48, f, d + 128 + 4);
    }
    function Wo(a, o, f, d) {
      var v,
        C = i(16);
      for (v = 0; 4 > v; ++v) {
        var U = a[o + 0 + v] + a[o + 12 + v],
          b = a[o + 4 + v] + a[o + 8 + v],
          E = a[o + 4 + v] - a[o + 8 + v],
          H = a[o + 0 + v] - a[o + 12 + v];
        (C[0 + v] = U + b),
          (C[8 + v] = U - b),
          (C[4 + v] = H + E),
          (C[12 + v] = H - E);
      }
      for (v = 0; 4 > v; ++v)
        (U = (a = C[0 + 4 * v] + 3) + C[3 + 4 * v]),
          (b = C[1 + 4 * v] + C[2 + 4 * v]),
          (E = C[1 + 4 * v] - C[2 + 4 * v]),
          (H = a - C[3 + 4 * v]),
          (f[d + 0] = (U + b) >> 3),
          (f[d + 16] = (H + E) >> 3),
          (f[d + 32] = (U - b) >> 3),
          (f[d + 48] = (H - E) >> 3),
          (d += 64);
    }
    function Ki(a, o, f) {
      var d,
        v = o - 32,
        C = It,
        U = 255 - a[v - 1];
      for (d = 0; d < f; ++d) {
        var b,
          E = C,
          H = U + a[o - 1];
        for (b = 0; b < f; ++b) a[o + b] = E[H + a[v + b]];
        o += 32;
      }
    }
    function Xo(a, o) {
      Ki(a, o, 4);
    }
    function Jo(a, o) {
      Ki(a, o, 8);
    }
    function zo(a, o) {
      Ki(a, o, 16);
    }
    function Ir(a, o) {
      var f;
      for (f = 0; 16 > f; ++f) r(a, o + 32 * f, a, o - 32, 16);
    }
    function zn(a, o) {
      var f;
      for (f = 16; 0 < f; --f) n(a, o, a[o - 1], 16), (o += 32);
    }
    function Yn(a, o, f) {
      var d;
      for (d = 0; 16 > d; ++d) n(o, f + 32 * d, a, 16);
    }
    function Wa(a, o) {
      var f,
        d = 16;
      for (f = 0; 16 > f; ++f) d += a[o - 1 + 32 * f] + a[o + f - 32];
      Yn(d >> 5, a, o);
    }
    function st(a, o) {
      var f,
        d = 8;
      for (f = 0; 16 > f; ++f) d += a[o - 1 + 32 * f];
      Yn(d >> 4, a, o);
    }
    function Yo(a, o) {
      var f,
        d = 8;
      for (f = 0; 16 > f; ++f) d += a[o + f - 32];
      Yn(d >> 4, a, o);
    }
    function Xa(a, o) {
      Yn(128, a, o);
    }
    function WA(a, o, f) {
      return (a + 2 * o + f + 2) >> 2;
    }
    function Zo(a, o) {
      var f,
        d = o - 32;
      for (
        d = new Uint8Array([
          WA(a[d - 1], a[d + 0], a[d + 1]),
          WA(a[d + 0], a[d + 1], a[d + 2]),
          WA(a[d + 1], a[d + 2], a[d + 3]),
          WA(a[d + 2], a[d + 3], a[d + 4]),
        ]),
          f = 0;
        4 > f;
        ++f
      )
        r(a, o + 32 * f, d, 0, d.length);
    }
    function $o(a, o) {
      var f = a[o - 1],
        d = a[o - 1 + 32],
        v = a[o - 1 + 64],
        C = a[o - 1 + 96];
      FA(a, o + 0, 16843009 * WA(a[o - 1 - 32], f, d)),
        FA(a, o + 32, 16843009 * WA(f, d, v)),
        FA(a, o + 64, 16843009 * WA(d, v, C)),
        FA(a, o + 96, 16843009 * WA(v, C, C));
    }
    function pr(a, o) {
      var f,
        d = 4;
      for (f = 0; 4 > f; ++f) d += a[o + f - 32] + a[o - 1 + 32 * f];
      for (d >>= 3, f = 0; 4 > f; ++f) n(a, o + 32 * f, d, 4);
    }
    function Ja(a, o) {
      var f = a[o - 1 + 0],
        d = a[o - 1 + 32],
        v = a[o - 1 + 64],
        C = a[o - 1 - 32],
        U = a[o + 0 - 32],
        b = a[o + 1 - 32],
        E = a[o + 2 - 32],
        H = a[o + 3 - 32];
      (a[o + 0 + 96] = WA(d, v, a[o - 1 + 96])),
        (a[o + 1 + 96] = a[o + 0 + 64] = WA(f, d, v)),
        (a[o + 2 + 96] = a[o + 1 + 64] = a[o + 0 + 32] = WA(C, f, d)),
        (a[o + 3 + 96] =
          a[o + 2 + 64] =
          a[o + 1 + 32] =
          a[o + 0 + 0] =
            WA(U, C, f)),
        (a[o + 3 + 64] = a[o + 2 + 32] = a[o + 1 + 0] = WA(b, U, C)),
        (a[o + 3 + 32] = a[o + 2 + 0] = WA(E, b, U)),
        (a[o + 3 + 0] = WA(H, E, b));
    }
    function za(a, o) {
      var f = a[o + 1 - 32],
        d = a[o + 2 - 32],
        v = a[o + 3 - 32],
        C = a[o + 4 - 32],
        U = a[o + 5 - 32],
        b = a[o + 6 - 32],
        E = a[o + 7 - 32];
      (a[o + 0 + 0] = WA(a[o + 0 - 32], f, d)),
        (a[o + 1 + 0] = a[o + 0 + 32] = WA(f, d, v)),
        (a[o + 2 + 0] = a[o + 1 + 32] = a[o + 0 + 64] = WA(d, v, C)),
        (a[o + 3 + 0] =
          a[o + 2 + 32] =
          a[o + 1 + 64] =
          a[o + 0 + 96] =
            WA(v, C, U)),
        (a[o + 3 + 32] = a[o + 2 + 64] = a[o + 1 + 96] = WA(C, U, b)),
        (a[o + 3 + 64] = a[o + 2 + 96] = WA(U, b, E)),
        (a[o + 3 + 96] = WA(b, E, E));
    }
    function Zn(a, o) {
      var f = a[o - 1 + 0],
        d = a[o - 1 + 32],
        v = a[o - 1 + 64],
        C = a[o - 1 - 32],
        U = a[o + 0 - 32],
        b = a[o + 1 - 32],
        E = a[o + 2 - 32],
        H = a[o + 3 - 32];
      (a[o + 0 + 0] = a[o + 1 + 64] = (C + U + 1) >> 1),
        (a[o + 1 + 0] = a[o + 2 + 64] = (U + b + 1) >> 1),
        (a[o + 2 + 0] = a[o + 3 + 64] = (b + E + 1) >> 1),
        (a[o + 3 + 0] = (E + H + 1) >> 1),
        (a[o + 0 + 96] = WA(v, d, f)),
        (a[o + 0 + 64] = WA(d, f, C)),
        (a[o + 0 + 32] = a[o + 1 + 96] = WA(f, C, U)),
        (a[o + 1 + 32] = a[o + 2 + 96] = WA(C, U, b)),
        (a[o + 2 + 32] = a[o + 3 + 96] = WA(U, b, E)),
        (a[o + 3 + 32] = WA(b, E, H));
    }
    function ki(a, o) {
      var f = a[o + 0 - 32],
        d = a[o + 1 - 32],
        v = a[o + 2 - 32],
        C = a[o + 3 - 32],
        U = a[o + 4 - 32],
        b = a[o + 5 - 32],
        E = a[o + 6 - 32],
        H = a[o + 7 - 32];
      (a[o + 0 + 0] = (f + d + 1) >> 1),
        (a[o + 1 + 0] = a[o + 0 + 64] = (d + v + 1) >> 1),
        (a[o + 2 + 0] = a[o + 1 + 64] = (v + C + 1) >> 1),
        (a[o + 3 + 0] = a[o + 2 + 64] = (C + U + 1) >> 1),
        (a[o + 0 + 32] = WA(f, d, v)),
        (a[o + 1 + 32] = a[o + 0 + 96] = WA(d, v, C)),
        (a[o + 2 + 32] = a[o + 1 + 96] = WA(v, C, U)),
        (a[o + 3 + 32] = a[o + 2 + 96] = WA(C, U, b)),
        (a[o + 3 + 64] = WA(U, b, E)),
        (a[o + 3 + 96] = WA(b, E, H));
    }
    function Ac(a, o) {
      var f = a[o - 1 + 0],
        d = a[o - 1 + 32],
        v = a[o - 1 + 64],
        C = a[o - 1 + 96];
      (a[o + 0 + 0] = (f + d + 1) >> 1),
        (a[o + 2 + 0] = a[o + 0 + 32] = (d + v + 1) >> 1),
        (a[o + 2 + 32] = a[o + 0 + 64] = (v + C + 1) >> 1),
        (a[o + 1 + 0] = WA(f, d, v)),
        (a[o + 3 + 0] = a[o + 1 + 32] = WA(d, v, C)),
        (a[o + 3 + 32] = a[o + 1 + 64] = WA(v, C, C)),
        (a[o + 3 + 64] =
          a[o + 2 + 64] =
          a[o + 0 + 96] =
          a[o + 1 + 96] =
          a[o + 2 + 96] =
          a[o + 3 + 96] =
            C);
    }
    function ec(a, o) {
      var f = a[o - 1 + 0],
        d = a[o - 1 + 32],
        v = a[o - 1 + 64],
        C = a[o - 1 + 96],
        U = a[o - 1 - 32],
        b = a[o + 0 - 32],
        E = a[o + 1 - 32],
        H = a[o + 2 - 32];
      (a[o + 0 + 0] = a[o + 2 + 32] = (f + U + 1) >> 1),
        (a[o + 0 + 32] = a[o + 2 + 64] = (d + f + 1) >> 1),
        (a[o + 0 + 64] = a[o + 2 + 96] = (v + d + 1) >> 1),
        (a[o + 0 + 96] = (C + v + 1) >> 1),
        (a[o + 3 + 0] = WA(b, E, H)),
        (a[o + 2 + 0] = WA(U, b, E)),
        (a[o + 1 + 0] = a[o + 3 + 32] = WA(f, U, b)),
        (a[o + 1 + 32] = a[o + 3 + 64] = WA(d, f, U)),
        (a[o + 1 + 64] = a[o + 3 + 96] = WA(v, d, f)),
        (a[o + 1 + 96] = WA(C, v, d));
    }
    function tc(a, o) {
      var f;
      for (f = 0; 8 > f; ++f) r(a, o + 32 * f, a, o - 32, 8);
    }
    function Ri(a, o) {
      var f;
      for (f = 0; 8 > f; ++f) n(a, o, a[o - 1], 8), (o += 32);
    }
    function yn(a, o, f) {
      var d;
      for (d = 0; 8 > d; ++d) n(o, f + 32 * d, a, 8);
    }
    function Vr(a, o) {
      var f,
        d = 8;
      for (f = 0; 8 > f; ++f) d += a[o + f - 32] + a[o - 1 + 32 * f];
      yn(d >> 4, a, o);
    }
    function rc(a, o) {
      var f,
        d = 4;
      for (f = 0; 8 > f; ++f) d += a[o + f - 32];
      yn(d >> 3, a, o);
    }
    function bn(a, o) {
      var f,
        d = 4;
      for (f = 0; 8 > f; ++f) d += a[o - 1 + 32 * f];
      yn(d >> 3, a, o);
    }
    function Gi(a, o) {
      yn(128, a, o);
    }
    function $n(a, o, f) {
      var d = a[o - f],
        v = a[o + 0],
        C = 3 * (v - d) + lc[1020 + a[o - 2 * f] - a[o + f]],
        U = as[112 + ((C + 4) >> 3)];
      (a[o - f] = It[255 + d + as[112 + ((C + 3) >> 3)]]),
        (a[o + 0] = It[255 + v - U]);
    }
    function Ya(a, o, f, d) {
      var v = a[o + 0],
        C = a[o + f];
      return Tt[255 + a[o - 2 * f] - a[o - f]] > d || Tt[255 + C - v] > d;
    }
    function Za(a, o, f, d) {
      return (
        4 * Tt[255 + a[o - f] - a[o + 0]] + Tt[255 + a[o - 2 * f] - a[o + f]] <=
        d
      );
    }
    function $a(a, o, f, d, v) {
      var C = a[o - 3 * f],
        U = a[o - 2 * f],
        b = a[o - f],
        E = a[o + 0],
        H = a[o + f],
        j = a[o + 2 * f],
        tA = a[o + 3 * f];
      return 4 * Tt[255 + b - E] + Tt[255 + U - H] > d
        ? 0
        : Tt[255 + a[o - 4 * f] - C] <= v &&
            Tt[255 + C - U] <= v &&
            Tt[255 + U - b] <= v &&
            Tt[255 + tA - j] <= v &&
            Tt[255 + j - H] <= v &&
            Tt[255 + H - E] <= v;
    }
    function As(a, o, f, d) {
      var v = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Za(a, o + d, f, v) && $n(a, o + d, f);
    }
    function xr(a, o, f, d) {
      var v = 2 * d + 1;
      for (d = 0; 16 > d; ++d) Za(a, o + d * f, 1, v) && $n(a, o + d * f, 1);
    }
    function qr(a, o, f, d) {
      var v;
      for (v = 3; 0 < v; --v) As(a, (o += 4 * f), f, d);
    }
    function nc(a, o, f, d) {
      var v;
      for (v = 3; 0 < v; --v) xr(a, (o += 4), f, d);
    }
    function Wr(a, o, f, d, v, C, U, b) {
      for (C = 2 * C + 1; 0 < v--; ) {
        if ($a(a, o, f, C, U))
          if (Ya(a, o, f, b)) $n(a, o, f);
          else {
            var E = a,
              H = o,
              j = f,
              tA = E[H - 2 * j],
              rA = E[H - j],
              J = E[H + 0],
              wA = E[H + j],
              lA = E[H + 2 * j],
              V =
                (27 * (dA = lc[1020 + 3 * (J - rA) + lc[1020 + tA - wA]]) +
                  63) >>
                7,
              q = (18 * dA + 63) >> 7,
              dA = (9 * dA + 63) >> 7;
            (E[H - 3 * j] = It[255 + E[H - 3 * j] + dA]),
              (E[H - 2 * j] = It[255 + tA + q]),
              (E[H - j] = It[255 + rA + V]),
              (E[H + 0] = It[255 + J - V]),
              (E[H + j] = It[255 + wA - q]),
              (E[H + 2 * j] = It[255 + lA - dA]);
          }
        o += d;
      }
    }
    function Yt(a, o, f, d, v, C, U, b) {
      for (C = 2 * C + 1; 0 < v--; ) {
        if ($a(a, o, f, C, U))
          if (Ya(a, o, f, b)) $n(a, o, f);
          else {
            var E = a,
              H = o,
              j = f,
              tA = E[H - j],
              rA = E[H + 0],
              J = E[H + j],
              wA = as[112 + (((lA = 3 * (rA - tA)) + 4) >> 3)],
              lA = as[112 + ((lA + 3) >> 3)],
              V = (wA + 1) >> 1;
            (E[H - 2 * j] = It[255 + E[H - 2 * j] + V]),
              (E[H - j] = It[255 + tA + lA]),
              (E[H + 0] = It[255 + rA - wA]),
              (E[H + j] = It[255 + J - V]);
          }
        o += d;
      }
    }
    function ji(a, o, f, d, v, C) {
      Wr(a, o, f, 1, 16, d, v, C);
    }
    function Ln(a, o, f, d, v, C) {
      Wr(a, o, 1, f, 16, d, v, C);
    }
    function ic(a, o, f, d, v, C) {
      var U;
      for (U = 3; 0 < U; --U) Yt(a, (o += 4 * f), f, 1, 16, d, v, C);
    }
    function Ai(a, o, f, d, v, C) {
      var U;
      for (U = 3; 0 < U; --U) Yt(a, (o += 4), 1, f, 16, d, v, C);
    }
    function ac(a, o, f, d, v, C, U, b) {
      Wr(a, o, v, 1, 8, C, U, b), Wr(f, d, v, 1, 8, C, U, b);
    }
    function Vi(a, o, f, d, v, C, U, b) {
      Wr(a, o, 1, v, 8, C, U, b), Wr(f, d, 1, v, 8, C, U, b);
    }
    function qi(a, o, f, d, v, C, U, b) {
      Yt(a, o + 4 * v, v, 1, 8, C, U, b), Yt(f, d + 4 * v, v, 1, 8, C, U, b);
    }
    function es(a, o, f, d, v, C, U, b) {
      Yt(a, o + 4, 1, v, 8, C, U, b), Yt(f, d + 4, 1, v, 8, C, U, b);
    }
    function ei() {
      (this.ba = new Vt()),
        (this.ec = []),
        (this.cc = []),
        (this.Mc = []),
        (this.Dc = this.Nc = this.dc = this.fc = 0),
        (this.Oa = new He()),
        (this.memory = 0),
        (this.Ib = "OutputFunc"),
        (this.Jb = "OutputAlphaFunc"),
        (this.Nd = "OutputRowFunc");
    }
    function Wi() {
      (this.data = []),
        (this.offset = this.kd = this.ha = this.w = 0),
        (this.na = []),
        (this.xa = this.gb = this.Ja = this.Sa = this.P = 0);
    }
    function Xi() {
      (this.nc = this.Ea = this.b = this.hc = 0), (this.K = []), (this.w = 0);
    }
    function ts() {
      (this.ua = 0),
        (this.Wa = new M()),
        (this.vb = new M()),
        (this.md = this.xc = this.wc = 0),
        (this.vc = []),
        (this.Wb = 0),
        (this.Ya = new P()),
        (this.yc = new x());
    }
    function sc() {
      (this.xb = this.a = 0),
        (this.l = new Xn()),
        (this.ca = new Vt()),
        (this.V = []),
        (this.Ba = 0),
        (this.Ta = []),
        (this.Ua = 0),
        (this.m = new Q()),
        (this.Pb = 0),
        (this.wd = new Q()),
        (this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0),
        (this.s = new ts()),
        (this.ab = 0),
        (this.gc = s(4, Xi)),
        (this.Oc = 0);
    }
    function ti() {
      (this.Lc = this.Z = this.$a = this.i = this.c = 0),
        (this.l = new Xn()),
        (this.ic = 0),
        (this.ca = []),
        (this.tb = 0),
        (this.qd = null),
        (this.rd = 0);
    }
    function En(a, o, f, d, v, C, U) {
      for (a = a == null ? 0 : a[o + 0], o = 0; o < U; ++o)
        (v[C + o] = (a + f[d + o]) & 255), (a = v[C + o]);
    }
    function Ji(a, o, f, d, v, C, U) {
      var b;
      if (a == null) En(null, null, f, d, v, C, U);
      else for (b = 0; b < U; ++b) v[C + b] = (a[o + b] + f[d + b]) & 255;
    }
    function Xr(a, o, f, d, v, C, U) {
      if (a == null) En(null, null, f, d, v, C, U);
      else {
        var b,
          E = a[o + 0],
          H = E,
          j = E;
        for (b = 0; b < U; ++b)
          (H = j + (E = a[o + b]) - H),
            (j = (f[d + b] + (-256 & H ? (0 > H ? 0 : 255) : H)) & 255),
            (H = E),
            (v[C + b] = j);
      }
    }
    function zi(a, o, f, d) {
      var v = o.width,
        C = o.o;
      if ((A(a != null && o != null), 0 > f || 0 >= d || f + d > C))
        return null;
      if (!a.Cc) {
        if (a.ga == null) {
          var U;
          if (
            ((a.ga = new ti()),
            (U = a.ga == null) ||
              ((U = o.width * o.o),
              A(a.Gb.length == 0),
              (a.Gb = i(U)),
              (a.Uc = 0),
              a.Gb == null
                ? (U = 0)
                : ((a.mb = a.Gb), (a.nb = a.Uc), (a.rc = null), (U = 1)),
              (U = !U)),
            !U)
          ) {
            U = a.ga;
            var b = a.Fa,
              E = a.P,
              H = a.qc,
              j = a.mb,
              tA = a.nb,
              rA = E + 1,
              J = H - 1,
              wA = U.l;
            if (
              (A(b != null && j != null && o != null),
              (en[0] = null),
              (en[1] = En),
              (en[2] = Ji),
              (en[3] = Xr),
              (U.ca = j),
              (U.tb = tA),
              (U.c = o.width),
              (U.i = o.height),
              A(0 < U.c && 0 < U.i),
              1 >= H)
            )
              o = 0;
            else if (
              ((U.$a = (b[E + 0] >> 0) & 3),
              (U.Z = (b[E + 0] >> 2) & 3),
              (U.Lc = (b[E + 0] >> 4) & 3),
              (E = (b[E + 0] >> 6) & 3),
              0 > U.$a || 1 < U.$a || 4 <= U.Z || 1 < U.Lc || E)
            )
              o = 0;
            else if (
              ((wA.put = fr),
              (wA.ac = tt),
              (wA.bc = hr),
              (wA.ma = U),
              (wA.width = o.width),
              (wA.height = o.height),
              (wA.Da = o.Da),
              (wA.v = o.v),
              (wA.va = o.va),
              (wA.j = o.j),
              (wA.o = o.o),
              U.$a)
            )
              A: {
                A(U.$a == 1), (o = Nt());
                e: for (;;) {
                  if (o == null) {
                    o = 0;
                    break A;
                  }
                  if (
                    (A(U != null),
                    (U.mc = o),
                    (o.c = U.c),
                    (o.i = U.i),
                    (o.l = U.l),
                    (o.l.ma = U),
                    (o.l.width = U.c),
                    (o.l.height = U.i),
                    (o.a = 0),
                    eA(o.m, b, rA, J),
                    !dr(U.c, U.i, 1, o, null) ||
                      (o.ab == 1 && o.gc[0].hc == 3 && Er(o.s)
                        ? ((U.ic = 1),
                          (b = o.c * o.i),
                          (o.Ta = null),
                          (o.Ua = 0),
                          (o.V = i(b)),
                          (o.Ba = 0),
                          o.V == null ? ((o.a = 1), (o = 0)) : (o = 1))
                        : ((U.ic = 0), (o = Un(o, U.c))),
                      !o))
                  )
                    break e;
                  o = 1;
                  break A;
                }
                (U.mc = null), (o = 0);
              }
            else o = J >= U.c * U.i;
            U = !o;
          }
          if (U) return null;
          a.ga.Lc != 1 ? (a.Ga = 0) : (d = C - f);
        }
        A(a.ga != null), A(f + d <= C);
        A: {
          if (((o = (b = a.ga).c), (C = b.l.o), b.$a == 0)) {
            if (
              ((rA = a.rc),
              (J = a.Vc),
              (wA = a.Fa),
              (E = a.P + 1 + f * o),
              (H = a.mb),
              (j = a.nb + f * o),
              A(E <= a.P + a.qc),
              b.Z != 0)
            )
              for (A(en[b.Z] != null), U = 0; U < d; ++U)
                en[b.Z](rA, J, wA, E, H, j, o),
                  (rA = H),
                  (J = j),
                  (j += o),
                  (E += o);
            else
              for (U = 0; U < d; ++U)
                r(H, j, wA, E, o), (rA = H), (J = j), (j += o), (E += o);
            (a.rc = rA), (a.Vc = J);
          } else {
            if (
              (A(b.mc != null),
              (o = f + d),
              A((U = b.mc) != null),
              A(o <= U.i),
              U.C >= o)
            )
              o = 1;
            else if ((b.ic || $(), b.ic)) {
              (b = U.V), (rA = U.Ba), (J = U.c);
              var lA = U.i,
                V =
                  ((wA = 1),
                  (E = U.$ / J),
                  (H = U.$ % J),
                  (j = U.m),
                  (tA = U.s),
                  U.$),
                q = J * lA,
                dA = J * o,
                vA = tA.wc,
                pA = V < dA ? Ge(tA, H, E) : null;
              A(V <= q), A(o <= lA), A(Er(tA));
              e: for (;;) {
                for (; !j.h && V < dA; ) {
                  if (
                    (H & vA || (pA = Ge(tA, H, E)),
                    A(pA != null),
                    X(j),
                    256 > (lA = vt(pA.G[0], pA.H[0], j)))
                  )
                    (b[rA + V] = lA),
                      ++V,
                      ++H >= J && ((H = 0), ++E <= o && !(E % 16) && Xt(U, E));
                  else {
                    if (!(280 > lA)) {
                      wA = 0;
                      break e;
                    }
                    lA = qt(lA - 256, j);
                    var _A,
                      bA = vt(pA.G[4], pA.H[4], j);
                    if (
                      (X(j),
                      !(V >= (bA = Br(J, (bA = qt(bA, j)))) && q - V >= lA))
                    ) {
                      wA = 0;
                      break e;
                    }
                    for (_A = 0; _A < lA; ++_A)
                      b[rA + V + _A] = b[rA + V + _A - bA];
                    for (V += lA, H += lA; H >= J; )
                      (H -= J), ++E <= o && !(E % 16) && Xt(U, E);
                    V < dA && H & vA && (pA = Ge(tA, H, E));
                  }
                  A(j.h == O(j));
                }
                Xt(U, E > o ? o : E);
                break e;
              }
              !wA || (j.h && V < q)
                ? ((wA = 0), (U.a = j.h ? 5 : 3))
                : (U.$ = V),
                (o = wA);
            } else o = Jt(U, U.V, U.Ba, U.c, U.i, o, Gn);
            if (!o) {
              d = 0;
              break A;
            }
          }
          f + d >= C && (a.Cc = 1), (d = 1);
        }
        if (!d) return null;
        if (
          a.Cc &&
          ((d = a.ga) != null && (d.mc = null), (a.ga = null), 0 < a.Ga)
        )
          return alert("todo:WebPDequantizeLevels"), null;
      }
      return a.nb + f * v;
    }
    function l(a, o, f, d, v, C) {
      for (; 0 < v--; ) {
        var U,
          b = a,
          E = o + (f ? 1 : 0),
          H = a,
          j = o + (f ? 0 : 3);
        for (U = 0; U < d; ++U) {
          var tA = H[j + 4 * U];
          tA != 255 &&
            ((tA *= 32897),
            (b[E + 4 * U + 0] = (b[E + 4 * U + 0] * tA) >> 23),
            (b[E + 4 * U + 1] = (b[E + 4 * U + 1] * tA) >> 23),
            (b[E + 4 * U + 2] = (b[E + 4 * U + 2] * tA) >> 23));
        }
        o += C;
      }
    }
    function m(a, o, f, d, v) {
      for (; 0 < d--; ) {
        var C;
        for (C = 0; C < f; ++C) {
          var U = a[o + 2 * C + 0],
            b = 15 & (H = a[o + 2 * C + 1]),
            E = 4369 * b,
            H = (((240 & H) | (H >> 4)) * E) >> 16;
          (a[o + 2 * C + 0] =
            (((((240 & U) | (U >> 4)) * E) >> 16) & 240) |
            ((((((15 & U) | (U << 4)) * E) >> 16) >> 4) & 15)),
            (a[o + 2 * C + 1] = (240 & H) | b);
        }
        o += v;
      }
    }
    function D(a, o, f, d, v, C, U, b) {
      var E,
        H,
        j = 255;
      for (H = 0; H < v; ++H) {
        for (E = 0; E < d; ++E) {
          var tA = a[o + E];
          (C[U + 4 * E] = tA), (j &= tA);
        }
        (o += f), (U += b);
      }
      return j != 255;
    }
    function k(a, o, f, d, v) {
      var C;
      for (C = 0; C < v; ++C) f[d + C] = a[o + C] >> 8;
    }
    function $() {
      ($r = l), (li = m), (is = D), (Yu = k);
    }
    function BA(a, o, f) {
      T[a] = function (
        d,
        v,
        C,
        U,
        b,
        E,
        H,
        j,
        tA,
        rA,
        J,
        wA,
        lA,
        V,
        q,
        dA,
        vA,
      ) {
        var pA,
          _A = (vA - 1) >> 1,
          bA = b[E + 0] | (H[j + 0] << 16),
          kA = tA[rA + 0] | (J[wA + 0] << 16);
        A(d != null);
        var LA = (3 * bA + kA + 131074) >> 2;
        for (
          o(d[v + 0], 255 & LA, LA >> 16, lA, V),
            C != null &&
              ((LA = (3 * kA + bA + 131074) >> 2),
              o(C[U + 0], 255 & LA, LA >> 16, q, dA)),
            pA = 1;
          pA <= _A;
          ++pA
        ) {
          var ue = b[E + pA] | (H[j + pA] << 16),
            Be = tA[rA + pA] | (J[wA + pA] << 16),
            oe = bA + ue + kA + Be + 524296,
            ne = (oe + 2 * (ue + kA)) >> 3;
          (LA = (ne + bA) >> 1),
            (bA = ((oe = (oe + 2 * (bA + Be)) >> 3) + ue) >> 1),
            o(d[v + 2 * pA - 1], 255 & LA, LA >> 16, lA, V + (2 * pA - 1) * f),
            o(d[v + 2 * pA - 0], 255 & bA, bA >> 16, lA, V + (2 * pA - 0) * f),
            C != null &&
              ((LA = (oe + kA) >> 1),
              (bA = (ne + Be) >> 1),
              o(
                C[U + 2 * pA - 1],
                255 & LA,
                LA >> 16,
                q,
                dA + (2 * pA - 1) * f,
              ),
              o(
                C[U + 2 * pA + 0],
                255 & bA,
                bA >> 16,
                q,
                dA + (2 * pA + 0) * f,
              )),
            (bA = ue),
            (kA = Be);
        }
        1 & vA ||
          ((LA = (3 * bA + kA + 131074) >> 2),
          o(d[v + vA - 1], 255 & LA, LA >> 16, lA, V + (vA - 1) * f),
          C != null &&
            ((LA = (3 * kA + bA + 131074) >> 2),
            o(C[U + vA - 1], 255 & LA, LA >> 16, q, dA + (vA - 1) * f)));
      };
    }
    function mA() {
      (Ot[ss] = R0),
        (Ot[os] = ol),
        (Ot[rl] = G0),
        (Ot[cs] = cl),
        (Ot[us] = ul),
        (Ot[fc] = ll),
        (Ot[nl] = j0),
        (Ot[hc] = ol),
        (Ot[Bc] = cl),
        (Ot[ls] = ul),
        (Ot[gc] = ll);
    }
    function NA(a) {
      return a & ~V0 ? (0 > a ? 0 : 255) : a >> fl;
    }
    function KA(a, o) {
      return NA(((19077 * a) >> 8) + ((26149 * o) >> 8) - 14234);
    }
    function ZA(a, o, f) {
      return NA(
        ((19077 * a) >> 8) - ((6419 * o) >> 8) - ((13320 * f) >> 8) + 8708,
      );
    }
    function ee(a, o) {
      return NA(((19077 * a) >> 8) + ((33050 * o) >> 8) - 17685);
    }
    function ae(a, o, f, d, v) {
      (d[v + 0] = KA(a, f)), (d[v + 1] = ZA(a, o, f)), (d[v + 2] = ee(a, o));
    }
    function xe(a, o, f, d, v) {
      (d[v + 0] = ee(a, o)), (d[v + 1] = ZA(a, o, f)), (d[v + 2] = KA(a, f));
    }
    function Ne(a, o, f, d, v) {
      var C = ZA(a, o, f);
      (o = ((C << 3) & 224) | (ee(a, o) >> 3)),
        (d[v + 0] = (248 & KA(a, f)) | (C >> 5)),
        (d[v + 1] = o);
    }
    function je(a, o, f, d, v) {
      var C = (240 & ee(a, o)) | 15;
      (d[v + 0] = (240 & KA(a, f)) | (ZA(a, o, f) >> 4)), (d[v + 1] = C);
    }
    function ot(a, o, f, d, v) {
      (d[v + 0] = 255), ae(a, o, f, d, v + 1);
    }
    function Ye(a, o, f, d, v) {
      xe(a, o, f, d, v), (d[v + 3] = 255);
    }
    function Zt(a, o, f, d, v) {
      ae(a, o, f, d, v), (d[v + 3] = 255);
    }
    function Et(a, o) {
      return 0 > a ? 0 : a > o ? o : a;
    }
    function Sr(a, o, f) {
      T[a] = function (d, v, C, U, b, E, H, j, tA) {
        for (var rA = j + (-2 & tA) * f; j != rA; )
          o(d[v + 0], C[U + 0], b[E + 0], H, j),
            o(d[v + 1], C[U + 0], b[E + 0], H, j + f),
            (v += 2),
            ++U,
            ++E,
            (j += 2 * f);
        1 & tA && o(d[v + 0], C[U + 0], b[E + 0], H, j);
      };
    }
    function rs(a, o, f) {
      return f == 0 ? (a == 0 ? (o == 0 ? 6 : 5) : o == 0 ? 4 : 0) : f;
    }
    function Yi(a, o, f, d, v) {
      switch (a >>> 30) {
        case 3:
          ci(o, f, d, v, 0);
          break;
        case 2:
          na(o, f, d, v);
          break;
        case 1:
          tr(o, f, d, v);
      }
    }
    function Zi(a, o) {
      var f,
        d,
        v = o.M,
        C = o.Nb,
        U = a.oc,
        b = a.pc + 40,
        E = a.oc,
        H = a.pc + 584,
        j = a.oc,
        tA = a.pc + 600;
      for (f = 0; 16 > f; ++f) U[b + 32 * f - 1] = 129;
      for (f = 0; 8 > f; ++f)
        (E[H + 32 * f - 1] = 129), (j[tA + 32 * f - 1] = 129);
      for (
        0 < v
          ? (U[b - 1 - 32] = E[H - 1 - 32] = j[tA - 1 - 32] = 129)
          : (n(U, b - 32 - 1, 127, 21),
            n(E, H - 32 - 1, 127, 9),
            n(j, tA - 32 - 1, 127, 9)),
          d = 0;
        d < a.za;
        ++d
      ) {
        var rA = o.ya[o.aa + d];
        if (0 < d) {
          for (f = -1; 16 > f; ++f) r(U, b + 32 * f - 4, U, b + 32 * f + 12, 4);
          for (f = -1; 8 > f; ++f)
            r(E, H + 32 * f - 4, E, H + 32 * f + 4, 4),
              r(j, tA + 32 * f - 4, j, tA + 32 * f + 4, 4);
        }
        var J = a.Gd,
          wA = a.Hd + d,
          lA = rA.ad,
          V = rA.Hc;
        if (
          (0 < v &&
            (r(U, b - 32, J[wA].y, 0, 16),
            r(E, H - 32, J[wA].f, 0, 8),
            r(j, tA - 32, J[wA].ea, 0, 8)),
          rA.Za)
        ) {
          var q = U,
            dA = b - 32 + 16;
          for (
            0 < v &&
              (d >= a.za - 1
                ? n(q, dA, J[wA].y[15], 4)
                : r(q, dA, J[wA + 1].y, 0, 4)),
              f = 0;
            4 > f;
            f++
          )
            q[dA + 128 + f] = q[dA + 256 + f] = q[dA + 384 + f] = q[dA + 0 + f];
          for (f = 0; 16 > f; ++f, V <<= 2)
            (q = U),
              (dA = b + Bl[f]),
              rr[rA.Ob[f]](q, dA),
              Yi(V, lA, 16 * +f, q, dA);
        } else if (((q = rs(d, v, rA.Ob[0])), An[q](U, b), V != 0))
          for (f = 0; 16 > f; ++f, V <<= 2) Yi(V, lA, 16 * +f, U, b + Bl[f]);
        for (
          f = rA.Gc,
            q = rs(d, v, rA.Dd),
            Tr[q](E, H),
            Tr[q](j, tA),
            V = lA,
            q = E,
            dA = H,
            255 & (rA = f >> 0) &&
              (170 & rA ? Yr(V, 256, q, dA) : Nr(V, 256, q, dA)),
            rA = j,
            V = tA,
            255 & (f >>= 8) &&
              (170 & f ? Yr(lA, 320, rA, V) : Nr(lA, 320, rA, V)),
            v < a.Ub - 1 &&
              (r(J[wA].y, 0, U, b + 480, 16),
              r(J[wA].f, 0, E, H + 224, 8),
              r(J[wA].ea, 0, j, tA + 224, 8)),
            f = 8 * C * a.B,
            J = a.sa,
            wA = a.ta + 16 * d + 16 * C * a.R,
            lA = a.qa,
            rA = a.ra + 8 * d + f,
            V = a.Ha,
            q = a.Ia + 8 * d + f,
            f = 0;
          16 > f;
          ++f
        )
          r(J, wA + f * a.R, U, b + 32 * f, 16);
        for (f = 0; 8 > f; ++f)
          r(lA, rA + f * a.B, E, H + 32 * f, 8),
            r(V, q + f * a.B, j, tA + 32 * f, 8);
      }
    }
    function ri(a, o, f, d, v, C, U, b, E) {
      var H = [0],
        j = [0],
        tA = 0,
        rA = E != null ? E.kd : 0,
        J = E ?? new Wi();
      if (a == null || 12 > f) return 7;
      (J.data = a),
        (J.w = o),
        (J.ha = f),
        (o = [o]),
        (f = [f]),
        (J.gb = [J.gb]);
      A: {
        var wA = o,
          lA = f,
          V = J.gb;
        if (
          (A(a != null),
          A(lA != null),
          A(V != null),
          (V[0] = 0),
          12 <= lA[0] && !e(a, wA[0], "RIFF"))
        ) {
          if (e(a, wA[0] + 8, "WEBP")) {
            V = 3;
            break A;
          }
          var q = DA(a, wA[0] + 4);
          if (12 > q || 4294967286 < q) {
            V = 3;
            break A;
          }
          if (rA && q > lA[0] - 8) {
            V = 7;
            break A;
          }
          (V[0] = q), (wA[0] += 12), (lA[0] -= 12);
        }
        V = 0;
      }
      if (V != 0) return V;
      for (q = 0 < J.gb[0], f = f[0]; ; ) {
        A: {
          var dA = a;
          (lA = o), (V = f);
          var vA = H,
            pA = j,
            _A = (wA = [0]);
          if ((((LA = tA = [tA])[0] = 0), 8 > V[0])) V = 7;
          else {
            if (!e(dA, lA[0], "VP8X")) {
              if (DA(dA, lA[0] + 4) != 10) {
                V = 3;
                break A;
              }
              if (18 > V[0]) {
                V = 7;
                break A;
              }
              var bA = DA(dA, lA[0] + 8),
                kA = 1 + HA(dA, lA[0] + 12);
              if (2147483648 <= kA * (dA = 1 + HA(dA, lA[0] + 15))) {
                V = 3;
                break A;
              }
              _A != null && (_A[0] = bA),
                vA != null && (vA[0] = kA),
                pA != null && (pA[0] = dA),
                (lA[0] += 18),
                (V[0] -= 18),
                (LA[0] = 1);
            }
            V = 0;
          }
        }
        if (((tA = tA[0]), (wA = wA[0]), V != 0)) return V;
        if (((lA = !!(2 & wA)), !q && tA)) return 3;
        if (
          (C != null && (C[0] = !!(16 & wA)),
          U != null && (U[0] = lA),
          b != null && (b[0] = 0),
          (U = H[0]),
          (wA = j[0]),
          tA && lA && E == null)
        ) {
          V = 0;
          break;
        }
        if (4 > f) {
          V = 7;
          break;
        }
        if ((q && tA) || (!q && !tA && !e(a, o[0], "ALPH"))) {
          (f = [f]), (J.na = [J.na]), (J.P = [J.P]), (J.Sa = [J.Sa]);
          A: {
            (bA = a), (V = o), (q = f);
            var LA = J.gb;
            (vA = J.na),
              (pA = J.P),
              (_A = J.Sa),
              (kA = 22),
              A(bA != null),
              A(q != null),
              (dA = V[0]);
            var ue = q[0];
            for (
              A(vA != null),
                A(_A != null),
                vA[0] = null,
                pA[0] = null,
                _A[0] = 0;
              ;

            ) {
              if (((V[0] = dA), (q[0] = ue), 8 > ue)) {
                V = 7;
                break A;
              }
              var Be = DA(bA, dA + 4);
              if (4294967286 < Be) {
                V = 3;
                break A;
              }
              var oe = (8 + Be + 1) & -2;
              if (((kA += oe), 0 < LA && kA > LA)) {
                V = 3;
                break A;
              }
              if (!e(bA, dA, "VP8 ") || !e(bA, dA, "VP8L")) {
                V = 0;
                break A;
              }
              if (ue[0] < oe) {
                V = 7;
                break A;
              }
              e(bA, dA, "ALPH") ||
                ((vA[0] = bA), (pA[0] = dA + 8), (_A[0] = Be)),
                (dA += oe),
                (ue -= oe);
            }
          }
          if (
            ((f = f[0]),
            (J.na = J.na[0]),
            (J.P = J.P[0]),
            (J.Sa = J.Sa[0]),
            V != 0)
          )
            break;
        }
        (f = [f]), (J.Ja = [J.Ja]), (J.xa = [J.xa]);
        A: if (
          ((LA = a),
          (V = o),
          (q = f),
          (vA = J.gb[0]),
          (pA = J.Ja),
          (_A = J.xa),
          (bA = V[0]),
          (dA = !e(LA, bA, "VP8 ")),
          (kA = !e(LA, bA, "VP8L")),
          A(LA != null),
          A(q != null),
          A(pA != null),
          A(_A != null),
          8 > q[0])
        )
          V = 7;
        else {
          if (dA || kA) {
            if (((LA = DA(LA, bA + 4)), 12 <= vA && LA > vA - 12)) {
              V = 3;
              break A;
            }
            if (rA && LA > q[0] - 8) {
              V = 7;
              break A;
            }
            (pA[0] = LA), (V[0] += 8), (q[0] -= 8), (_A[0] = kA);
          } else
            (_A[0] = 5 <= q[0] && LA[bA + 0] == 47 && !(LA[bA + 4] >> 5)),
              (pA[0] = q[0]);
          V = 0;
        }
        if (
          ((f = f[0]), (J.Ja = J.Ja[0]), (J.xa = J.xa[0]), (o = o[0]), V != 0)
        )
          break;
        if (4294967286 < J.Ja) return 3;
        if (
          (b == null || lA || (b[0] = J.xa ? 2 : 1),
          (U = [U]),
          (wA = [wA]),
          J.xa)
        ) {
          if (5 > f) {
            V = 7;
            break;
          }
          (b = U),
            (rA = wA),
            (lA = C),
            a == null || 5 > f
              ? (a = 0)
              : 5 <= f && a[o + 0] == 47 && !(a[o + 4] >> 5)
                ? ((q = [0]),
                  (LA = [0]),
                  (vA = [0]),
                  eA((pA = new Q()), a, o, f),
                  RA(pA, q, LA, vA)
                    ? (b != null && (b[0] = q[0]),
                      rA != null && (rA[0] = LA[0]),
                      lA != null && (lA[0] = vA[0]),
                      (a = 1))
                    : (a = 0))
                : (a = 0);
        } else {
          if (10 > f) {
            V = 7;
            break;
          }
          (b = wA),
            a == null || 10 > f || !ka(a, o + 3, f - 3)
              ? (a = 0)
              : ((rA = a[o + 0] | (a[o + 1] << 8) | (a[o + 2] << 16)),
                (lA = 16383 & ((a[o + 7] << 8) | a[o + 6])),
                (a = 16383 & ((a[o + 9] << 8) | a[o + 8])),
                1 & rA ||
                3 < ((rA >> 1) & 7) ||
                !((rA >> 4) & 1) ||
                rA >> 5 >= J.Ja ||
                !lA ||
                !a
                  ? (a = 0)
                  : (U && (U[0] = lA), b && (b[0] = a), (a = 1)));
        }
        if (!a || ((U = U[0]), (wA = wA[0]), tA && (H[0] != U || j[0] != wA)))
          return 3;
        E != null &&
          ((E[0] = J),
          (E.offset = o - E.w),
          A(4294967286 > o - E.w),
          A(E.offset == E.ha - f));
        break;
      }
      return V == 0 || (V == 7 && tA && E == null)
        ? (C != null && (C[0] |= J.na != null && 0 < J.na.length),
          d != null && (d[0] = U),
          v != null && (v[0] = wA),
          0)
        : V;
    }
    function $i(a, o, f) {
      var d = o.width,
        v = o.height,
        C = 0,
        U = 0,
        b = d,
        E = v;
      if (
        ((o.Da = a != null && 0 < a.Da),
        o.Da &&
          ((b = a.cd),
          (E = a.bd),
          (C = a.v),
          (U = a.j),
          11 > f || ((C &= -2), (U &= -2)),
          0 > C || 0 > U || 0 >= b || 0 >= E || C + b > d || U + E > v))
      )
        return 0;
      if (
        ((o.v = C),
        (o.j = U),
        (o.va = C + b),
        (o.o = U + E),
        (o.U = b),
        (o.T = E),
        (o.da = a != null && 0 < a.da),
        o.da)
      ) {
        if (!YA(b, E, (f = [a.ib]), (C = [a.hb]))) return 0;
        (o.ib = f[0]), (o.hb = C[0]);
      }
      return (
        (o.ob = a != null && a.ob),
        (o.Kb = a == null || !a.Sd),
        o.da && ((o.ob = o.ib < (3 * d) / 4 && o.hb < (3 * v) / 4), (o.Kb = 0)),
        1
      );
    }
    function Aa(a) {
      if (a == null) return 2;
      if (11 > a.S) {
        var o = a.f.RGBA;
        (o.fb += (a.height - 1) * o.A), (o.A = -o.A);
      } else
        (o = a.f.kb),
          (a = a.height),
          (o.O += (a - 1) * o.fa),
          (o.fa = -o.fa),
          (o.N += ((a - 1) >> 1) * o.Ab),
          (o.Ab = -o.Ab),
          (o.W += ((a - 1) >> 1) * o.Db),
          (o.Db = -o.Db),
          o.F != null && ((o.J += (a - 1) * o.lb), (o.lb = -o.lb));
      return 0;
    }
    function ni(a, o, f, d) {
      if (d == null || 0 >= a || 0 >= o) return 2;
      if (f != null) {
        if (f.Da) {
          var v = f.cd,
            C = f.bd,
            U = -2 & f.v,
            b = -2 & f.j;
          if (0 > U || 0 > b || 0 >= v || 0 >= C || U + v > a || b + C > o)
            return 2;
          (a = v), (o = C);
        }
        if (f.da) {
          if (!YA(a, o, (v = [f.ib]), (C = [f.hb]))) return 2;
          (a = v[0]), (o = C[0]);
        }
      }
      (d.width = a), (d.height = o);
      A: {
        var E = d.width,
          H = d.height;
        if (((a = d.S), 0 >= E || 0 >= H || !(a >= ss && 13 > a))) a = 2;
        else {
          if (0 >= d.Rd && d.sd == null) {
            U = C = v = o = 0;
            var j = (b = E * gl[a]) * H;
            if (
              (11 > a ||
                ((C = ((H + 1) / 2) * (o = (E + 1) / 2)),
                a == 12 && (U = (v = E) * H)),
              (H = i(j + 2 * C + U)) == null)
            ) {
              a = 1;
              break A;
            }
            (d.sd = H),
              11 > a
                ? (((E = d.f.RGBA).eb = H), (E.fb = 0), (E.A = b), (E.size = j))
                : (((E = d.f.kb).y = H),
                  (E.O = 0),
                  (E.fa = b),
                  (E.Fd = j),
                  (E.f = H),
                  (E.N = 0 + j),
                  (E.Ab = o),
                  (E.Cd = C),
                  (E.ea = H),
                  (E.W = 0 + j + C),
                  (E.Db = o),
                  (E.Ed = C),
                  a == 12 && ((E.F = H), (E.J = 0 + j + 2 * C)),
                  (E.Tc = U),
                  (E.lb = v));
          }
          if (
            ((o = 1),
            (v = d.S),
            (C = d.width),
            (U = d.height),
            v >= ss && 13 > v)
          )
            if (11 > v)
              (a = d.f.RGBA),
                (o &= (b = Math.abs(a.A)) * (U - 1) + C <= a.size),
                (o &= b >= C * gl[v]),
                (o &= a.eb != null);
            else {
              (a = d.f.kb),
                (b = (C + 1) / 2),
                (j = (U + 1) / 2),
                (E = Math.abs(a.fa)),
                (H = Math.abs(a.Ab));
              var tA = Math.abs(a.Db),
                rA = Math.abs(a.lb),
                J = rA * (U - 1) + C;
              (o &= E * (U - 1) + C <= a.Fd),
                (o &= H * (j - 1) + b <= a.Cd),
                (o =
                  (o &= tA * (j - 1) + b <= a.Ed) &
                  (E >= C) &
                  (H >= b) &
                  (tA >= b)),
                (o &= a.y != null),
                (o &= a.f != null),
                (o &= a.ea != null),
                v == 12 &&
                  ((o &= rA >= C), (o &= J <= a.Tc), (o &= a.F != null));
            }
          else o = 0;
          a = o ? 0 : 2;
        }
      }
      return a != 0 || (f != null && f.fd && (a = Aa(d))), a;
    }
    var Ct = 64,
      ii = [
        0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383,
        32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303,
        8388607, 16777215,
      ],
      ai = 24,
      si = 32,
      ea = 8,
      Qt = [
        0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
        6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
      ];
    yA("Predictor0", "PredictorAdd0"),
      (T.Predictor0 = function () {
        return 4278190080;
      }),
      (T.Predictor1 = function (a) {
        return a;
      }),
      (T.Predictor2 = function (a, o, f) {
        return o[f + 0];
      }),
      (T.Predictor3 = function (a, o, f) {
        return o[f + 1];
      }),
      (T.Predictor4 = function (a, o, f) {
        return o[f - 1];
      }),
      (T.Predictor5 = function (a, o, f) {
        return EA(EA(a, o[f + 1]), o[f + 0]);
      }),
      (T.Predictor6 = function (a, o, f) {
        return EA(a, o[f - 1]);
      }),
      (T.Predictor7 = function (a, o, f) {
        return EA(a, o[f + 0]);
      }),
      (T.Predictor8 = function (a, o, f) {
        return EA(o[f - 1], o[f + 0]);
      }),
      (T.Predictor9 = function (a, o, f) {
        return EA(o[f + 0], o[f + 1]);
      }),
      (T.Predictor10 = function (a, o, f) {
        return EA(EA(a, o[f - 1]), EA(o[f + 0], o[f + 1]));
      }),
      (T.Predictor11 = function (a, o, f) {
        var d = o[f + 0];
        return 0 >=
          Ae((d >> 24) & 255, (a >> 24) & 255, ((o = o[f - 1]) >> 24) & 255) +
            Ae((d >> 16) & 255, (a >> 16) & 255, (o >> 16) & 255) +
            Ae((d >> 8) & 255, (a >> 8) & 255, (o >> 8) & 255) +
            Ae(255 & d, 255 & a, 255 & o)
          ? d
          : a;
      }),
      (T.Predictor12 = function (a, o, f) {
        var d = o[f + 0];
        return (
          ((MA(
            ((a >> 24) & 255) +
              ((d >> 24) & 255) -
              (((o = o[f - 1]) >> 24) & 255),
          ) <<
            24) |
            (MA(((a >> 16) & 255) + ((d >> 16) & 255) - ((o >> 16) & 255)) <<
              16) |
            (MA(((a >> 8) & 255) + ((d >> 8) & 255) - ((o >> 8) & 255)) << 8) |
            MA((255 & a) + (255 & d) - (255 & o))) >>>
          0
        );
      }),
      (T.Predictor13 = function (a, o, f) {
        var d = o[f - 1];
        return (
          ((XA(((a = EA(a, o[f + 0])) >> 24) & 255, (d >> 24) & 255) << 24) |
            (XA((a >> 16) & 255, (d >> 16) & 255) << 16) |
            (XA((a >> 8) & 255, (d >> 8) & 255) << 8) |
            XA((a >> 0) & 255, (d >> 0) & 255)) >>>
          0
        );
      });
    var oc = T.PredictorAdd0;
    (T.PredictorAdd1 = te),
      yA("Predictor2", "PredictorAdd2"),
      yA("Predictor3", "PredictorAdd3"),
      yA("Predictor4", "PredictorAdd4"),
      yA("Predictor5", "PredictorAdd5"),
      yA("Predictor6", "PredictorAdd6"),
      yA("Predictor7", "PredictorAdd7"),
      yA("Predictor8", "PredictorAdd8"),
      yA("Predictor9", "PredictorAdd9"),
      yA("Predictor10", "PredictorAdd10"),
      yA("Predictor11", "PredictorAdd11"),
      yA("Predictor12", "PredictorAdd12"),
      yA("Predictor13", "PredictorAdd13");
    var ta = T.PredictorAdd2;
    re(
      "ColorIndexInverseTransform",
      "MapARGB",
      "32b",
      function (a) {
        return (a >> 8) & 255;
      },
      function (a) {
        return a;
      },
    ),
      re(
        "VP8LColorIndexInverseTransformAlpha",
        "MapAlpha",
        "8b",
        function (a) {
          return a;
        },
        function (a) {
          return (a >> 8) & 255;
        },
      );
    var ns,
      $t = T.ColorIndexInverseTransform,
      ra = T.MapARGB,
      cc = T.VP8LColorIndexInverseTransformAlpha,
      uc = T.MapAlpha,
      Jr = (T.VP8LPredictorsAdd = []);
    (Jr.length = 16),
      ((T.VP8LPredictors = []).length = 16),
      ((T.VP8LPredictorsAdd_C = []).length = 16),
      ((T.VP8LPredictors_C = []).length = 16);
    var _t,
      Ar,
      zr,
      wr,
      Hr,
      oi,
      er,
      ci,
      na,
      Yr,
      tr,
      Nr,
      In,
      ui,
      xn,
      Zr,
      ia,
      Dt,
      _r,
      Fe,
      Ue,
      Oe,
      Je,
      Dr,
      $r,
      li,
      is,
      Yu,
      Zu = i(511),
      $u = i(2041),
      Al = i(225),
      el = i(767),
      tl = 0,
      lc = $u,
      as = Al,
      It = el,
      Tt = Zu,
      ss = 0,
      os = 1,
      rl = 2,
      cs = 3,
      us = 4,
      fc = 5,
      nl = 6,
      hc = 7,
      Bc = 8,
      ls = 9,
      gc = 10,
      E0 = [2, 3, 7],
      I0 = [3, 3, 11],
      il = [280, 256, 256, 256, 40],
      x0 = [0, 1, 1, 1, 0],
      S0 = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      H0 = [
        24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54,
        58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75,
        52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104,
        2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62,
        120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47,
        117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110,
        48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112,
      ],
      N0 = [
        2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004,
      ],
      _0 = 8,
      dc = [
        4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20,
        20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33,
        34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
        68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84,
        85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108,
        110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138,
        140, 143, 145, 148, 151, 154, 157,
      ],
      pc = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
        60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94,
        96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128,
        131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170,
        173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225,
        229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284,
      ],
      aa = null,
      D0 = [
        [173, 148, 140, 0],
        [176, 155, 140, 135, 0],
        [180, 157, 141, 134, 130, 0],
        [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0],
      ],
      T0 = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
      al = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
      O0 = [
        [
          [
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
          ],
          [
            [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
            [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
            [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128],
          ],
          [
            [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
            [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
            [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128],
          ],
          [
            [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
            [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
            [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128],
          ],
          [
            [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
            [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
            [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128],
          ],
          [
            [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
            [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
            [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128],
          ],
          [
            [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
            [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
            [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128],
          ],
          [
            [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
          ],
        ],
        [
          [
            [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
            [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
            [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128],
          ],
          [
            [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
            [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
            [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128],
          ],
          [
            [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
            [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
            [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128],
          ],
          [
            [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
            [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
            [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128],
          ],
          [
            [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
            [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
            [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128],
          ],
          [
            [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
            [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
            [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128],
          ],
          [
            [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
            [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
            [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128],
          ],
          [
            [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
            [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
            [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128],
          ],
        ],
        [
          [
            [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
            [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
            [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128],
          ],
          [
            [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
            [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
            [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128],
          ],
          [
            [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
            [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
            [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128],
          ],
          [
            [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
            [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
            [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128],
          ],
          [
            [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
            [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
            [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
          ],
          [
            [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128],
          ],
          [
            [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
            [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
            [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128],
          ],
          [
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
          ],
        ],
        [
          [
            [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
            [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
            [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128],
          ],
          [
            [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
            [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
            [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128],
          ],
          [
            [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
            [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
            [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128],
          ],
          [
            [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
            [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
            [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128],
          ],
          [
            [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
            [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
            [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128],
          ],
          [
            [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
            [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
            [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128],
          ],
          [
            [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
            [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
            [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128],
          ],
          [
            [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
          ],
        ],
      ],
      P0 = [
        [
          [231, 120, 48, 89, 115, 113, 120, 152, 112],
          [152, 179, 64, 126, 170, 118, 46, 70, 95],
          [175, 69, 143, 80, 85, 82, 72, 155, 103],
          [56, 58, 10, 171, 218, 189, 17, 13, 152],
          [114, 26, 17, 163, 44, 195, 21, 10, 173],
          [121, 24, 80, 195, 26, 62, 44, 64, 85],
          [144, 71, 10, 38, 171, 213, 144, 34, 26],
          [170, 46, 55, 19, 136, 160, 33, 206, 71],
          [63, 20, 8, 114, 114, 208, 12, 9, 226],
          [81, 40, 11, 96, 182, 84, 29, 16, 36],
        ],
        [
          [134, 183, 89, 137, 98, 101, 106, 165, 148],
          [72, 187, 100, 130, 157, 111, 32, 75, 80],
          [66, 102, 167, 99, 74, 62, 40, 234, 128],
          [41, 53, 9, 178, 241, 141, 26, 8, 107],
          [74, 43, 26, 146, 73, 166, 49, 23, 157],
          [65, 38, 105, 160, 51, 52, 31, 115, 128],
          [104, 79, 12, 27, 217, 255, 87, 17, 7],
          [87, 68, 71, 44, 114, 51, 15, 186, 23],
          [47, 41, 14, 110, 182, 183, 21, 17, 194],
          [66, 45, 25, 102, 197, 189, 23, 18, 22],
        ],
        [
          [88, 88, 147, 150, 42, 46, 45, 196, 205],
          [43, 97, 183, 117, 85, 38, 35, 179, 61],
          [39, 53, 200, 87, 26, 21, 43, 232, 171],
          [56, 34, 51, 104, 114, 102, 29, 93, 77],
          [39, 28, 85, 171, 58, 165, 90, 98, 64],
          [34, 22, 116, 206, 23, 34, 43, 166, 73],
          [107, 54, 32, 26, 51, 1, 81, 43, 31],
          [68, 25, 106, 22, 64, 171, 36, 225, 114],
          [34, 19, 21, 102, 132, 188, 16, 76, 124],
          [62, 18, 78, 95, 85, 57, 50, 48, 51],
        ],
        [
          [193, 101, 35, 159, 215, 111, 89, 46, 111],
          [60, 148, 31, 172, 219, 228, 21, 18, 111],
          [112, 113, 77, 85, 179, 255, 38, 120, 114],
          [40, 42, 1, 196, 245, 209, 10, 25, 109],
          [88, 43, 29, 140, 166, 213, 37, 43, 154],
          [61, 63, 30, 155, 67, 45, 68, 1, 209],
          [100, 80, 8, 43, 154, 1, 51, 26, 71],
          [142, 78, 78, 16, 255, 128, 34, 197, 171],
          [41, 40, 5, 102, 211, 183, 4, 1, 221],
          [51, 50, 17, 168, 209, 192, 23, 25, 82],
        ],
        [
          [138, 31, 36, 171, 27, 166, 38, 44, 229],
          [67, 87, 58, 169, 82, 115, 26, 59, 179],
          [63, 59, 90, 180, 59, 166, 93, 73, 154],
          [40, 40, 21, 116, 143, 209, 34, 39, 175],
          [47, 15, 16, 183, 34, 223, 49, 45, 183],
          [46, 17, 33, 183, 6, 98, 15, 32, 183],
          [57, 46, 22, 24, 128, 1, 54, 17, 37],
          [65, 32, 73, 115, 28, 128, 23, 128, 205],
          [40, 3, 9, 115, 51, 192, 18, 6, 223],
          [87, 37, 9, 115, 59, 77, 64, 21, 47],
        ],
        [
          [104, 55, 44, 218, 9, 54, 53, 130, 226],
          [64, 90, 70, 205, 40, 41, 23, 26, 57],
          [54, 57, 112, 184, 5, 41, 38, 166, 213],
          [30, 34, 26, 133, 152, 116, 10, 32, 134],
          [39, 19, 53, 221, 26, 114, 32, 73, 255],
          [31, 9, 65, 234, 2, 15, 1, 118, 73],
          [75, 32, 12, 51, 192, 255, 160, 43, 51],
          [88, 31, 35, 67, 102, 85, 55, 186, 85],
          [56, 21, 23, 111, 59, 205, 45, 37, 192],
          [55, 38, 70, 124, 73, 102, 1, 34, 98],
        ],
        [
          [125, 98, 42, 88, 104, 85, 117, 175, 82],
          [95, 84, 53, 89, 128, 100, 113, 101, 45],
          [75, 79, 123, 47, 51, 128, 81, 171, 1],
          [57, 17, 5, 71, 102, 57, 53, 41, 49],
          [38, 33, 13, 121, 57, 73, 26, 1, 85],
          [41, 10, 67, 138, 77, 110, 90, 47, 114],
          [115, 21, 2, 10, 102, 255, 166, 23, 6],
          [101, 29, 16, 10, 85, 128, 101, 196, 26],
          [57, 18, 10, 102, 102, 213, 34, 20, 43],
          [117, 20, 15, 36, 163, 128, 68, 1, 26],
        ],
        [
          [102, 61, 71, 37, 34, 53, 31, 243, 192],
          [69, 60, 71, 38, 73, 119, 28, 222, 37],
          [68, 45, 128, 34, 1, 47, 11, 245, 171],
          [62, 17, 19, 70, 146, 85, 55, 62, 70],
          [37, 43, 37, 154, 100, 163, 85, 160, 1],
          [63, 9, 92, 136, 28, 64, 32, 201, 85],
          [75, 15, 9, 9, 64, 255, 184, 119, 16],
          [86, 6, 28, 5, 64, 255, 25, 248, 1],
          [56, 8, 17, 132, 137, 255, 55, 116, 128],
          [58, 15, 20, 82, 135, 57, 26, 121, 40],
        ],
        [
          [164, 50, 31, 137, 154, 133, 25, 35, 218],
          [51, 103, 44, 131, 131, 123, 31, 6, 158],
          [86, 40, 64, 135, 148, 224, 45, 183, 128],
          [22, 26, 17, 131, 240, 154, 14, 1, 209],
          [45, 16, 21, 91, 64, 222, 7, 1, 197],
          [56, 21, 39, 155, 60, 138, 23, 102, 213],
          [83, 12, 13, 54, 192, 255, 68, 47, 28],
          [85, 26, 85, 85, 128, 128, 32, 146, 171],
          [18, 11, 7, 63, 144, 171, 4, 4, 246],
          [35, 27, 10, 146, 174, 171, 12, 26, 128],
        ],
        [
          [190, 80, 35, 99, 180, 80, 126, 54, 45],
          [85, 126, 47, 87, 176, 51, 41, 20, 32],
          [101, 75, 128, 139, 118, 146, 116, 128, 85],
          [56, 41, 15, 176, 236, 85, 37, 9, 62],
          [71, 30, 17, 119, 118, 255, 17, 18, 138],
          [101, 38, 60, 138, 55, 70, 43, 26, 142],
          [146, 36, 19, 30, 171, 255, 97, 27, 20],
          [138, 45, 61, 62, 219, 1, 81, 188, 64],
          [32, 41, 20, 117, 151, 142, 20, 21, 163],
          [112, 19, 12, 61, 195, 128, 48, 4, 24],
        ],
      ],
      M0 = [
        [
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
            [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
        ],
        [
          [
            [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
            [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255],
          ],
          [
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
        ],
        [
          [
            [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
            [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
            [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255],
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
        ],
        [
          [
            [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
            [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
          ],
        ],
      ],
      K0 = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
      An = [],
      rr = [],
      Tr = [],
      k0 = 1,
      sl = 2,
      en = [],
      Ot = [];
    BA("UpsampleRgbLinePair", ae, 3),
      BA("UpsampleBgrLinePair", xe, 3),
      BA("UpsampleRgbaLinePair", Zt, 4),
      BA("UpsampleBgraLinePair", Ye, 4),
      BA("UpsampleArgbLinePair", ot, 4),
      BA("UpsampleRgba4444LinePair", je, 2),
      BA("UpsampleRgb565LinePair", Ne, 2);
    var R0 = T.UpsampleRgbLinePair,
      G0 = T.UpsampleBgrLinePair,
      ol = T.UpsampleRgbaLinePair,
      cl = T.UpsampleBgraLinePair,
      ul = T.UpsampleArgbLinePair,
      ll = T.UpsampleRgba4444LinePair,
      j0 = T.UpsampleRgb565LinePair,
      fs = 16,
      hs = 1 << (fs - 1),
      sa = -227,
      wc = 482,
      fl = 6,
      V0 = (256 << fl) - 1,
      hl = 0,
      q0 = i(256),
      W0 = i(256),
      X0 = i(256),
      J0 = i(256),
      z0 = i(wc - sa),
      Y0 = i(wc - sa);
    Sr("YuvToRgbRow", ae, 3),
      Sr("YuvToBgrRow", xe, 3),
      Sr("YuvToRgbaRow", Zt, 4),
      Sr("YuvToBgraRow", Ye, 4),
      Sr("YuvToArgbRow", ot, 4),
      Sr("YuvToRgba4444Row", je, 2),
      Sr("YuvToRgb565Row", Ne, 2);
    var Bl = [
        0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396,
      ],
      Bs = [0, 2, 8],
      Z0 = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
      $0 = 1;
    this.WebPDecodeRGBA = function (a, o, f, d, v) {
      var C = os,
        U = new ei(),
        b = new Vt();
      (U.ba = b), (b.S = C), (b.width = [b.width]), (b.height = [b.height]);
      var E = b.width,
        H = b.height,
        j = new Lr();
      if (j == null || a == null) var tA = 2;
      else
        A(j != null),
          (tA = ri(a, o, f, j.width, j.height, j.Pd, j.Qd, j.format, null));
      if (
        (tA != 0
          ? (E = 0)
          : (E != null && (E[0] = j.width[0]),
            H != null && (H[0] = j.height[0]),
            (E = 1)),
        E)
      ) {
        (b.width = b.width[0]),
          (b.height = b.height[0]),
          d != null && (d[0] = b.width),
          v != null && (v[0] = b.height);
        A: {
          if (
            ((d = new Xn()),
            ((v = new Wi()).data = a),
            (v.w = o),
            (v.ha = f),
            (v.kd = 1),
            (o = [0]),
            A(v != null),
            ((a = ri(v.data, v.w, v.ha, null, null, null, o, null, v)) == 0 ||
              a == 7) &&
              o[0] &&
              (a = 4),
            (o = a) == 0)
          ) {
            if (
              (A(U != null),
              (d.data = v.data),
              (d.w = v.w + v.offset),
              (d.ha = v.ha - v.offset),
              (d.put = fr),
              (d.ac = tt),
              (d.bc = hr),
              (d.ma = U),
              v.xa)
            ) {
              if ((a = Nt()) == null) {
                U = 1;
                break A;
              }
              if (
                (function (rA, J) {
                  var wA = [0],
                    lA = [0],
                    V = [0];
                  e: for (;;) {
                    if (rA == null) return 0;
                    if (J == null) return (rA.a = 2), 0;
                    if (
                      ((rA.l = J),
                      (rA.a = 0),
                      eA(rA.m, J.data, J.w, J.ha),
                      !RA(rA.m, wA, lA, V))
                    ) {
                      rA.a = 3;
                      break e;
                    }
                    if (
                      ((rA.xb = sl),
                      (J.width = wA[0]),
                      (J.height = lA[0]),
                      !dr(wA[0], lA[0], 1, rA, null))
                    )
                      break e;
                    return 1;
                  }
                  return A(rA.a != 0), 0;
                })(a, d)
              ) {
                if ((d = (o = ni(d.width, d.height, U.Oa, U.ba)) == 0)) {
                  e: {
                    d = a;
                    t: for (;;) {
                      if (d == null) {
                        d = 0;
                        break e;
                      }
                      if (
                        (A(d.s.yc != null),
                        A(d.s.Ya != null),
                        A(0 < d.s.Wb),
                        A((f = d.l) != null),
                        A((v = f.ma) != null),
                        d.xb != 0)
                      ) {
                        if (
                          ((d.ca = v.ba),
                          (d.tb = v.tb),
                          A(d.ca != null),
                          !$i(v.Oa, f, cs))
                        ) {
                          d.a = 2;
                          break t;
                        }
                        if (!Un(d, f.width) || f.da) break t;
                        if (
                          ((f.da || le(d.ca.S)) && $(),
                          11 > d.ca.S ||
                            (alert("todo:WebPInitConvertARGBToYUV"),
                            d.ca.f.kb.F != null && $()),
                          d.Pb &&
                            0 < d.s.ua &&
                            d.s.vb.X == null &&
                            !GA(d.s.vb, d.s.Wa.Xa))
                        ) {
                          d.a = 1;
                          break t;
                        }
                        d.xb = 0;
                      }
                      if (!Jt(d, d.V, d.Ba, d.c, d.i, f.o, Rn)) break t;
                      (v.Dc = d.Ma), (d = 1);
                      break e;
                    }
                    A(d.a != 0), (d = 0);
                  }
                  d = !d;
                }
                d && (o = a.a);
              } else o = a.a;
            } else {
              if ((a = new Go()) == null) {
                U = 1;
                break A;
              }
              if (((a.Fa = v.na), (a.P = v.P), (a.qc = v.Sa), Ra(a, d))) {
                if ((o = ni(d.width, d.height, U.Oa, U.ba)) == 0) {
                  if (((a.Aa = 0), (f = U.Oa), A((v = a) != null), f != null)) {
                    if (
                      0 <
                      (E = 0 > (E = f.Md) ? 0 : 100 < E ? 255 : (255 * E) / 100)
                    ) {
                      for (H = j = 0; 4 > H; ++H)
                        12 > (tA = v.pb[H]).lc &&
                          (tA.ia = (E * Z0[0 > tA.lc ? 0 : tA.lc]) >> 3),
                          (j |= tA.ia);
                      j && (alert("todo:VP8InitRandom"), (v.ia = 1));
                    }
                    (v.Ga = f.Id),
                      100 < v.Ga ? (v.Ga = 100) : 0 > v.Ga && (v.Ga = 0);
                  }
                  jo(a, d) || (o = a.a);
                }
              } else o = a.a;
            }
            o == 0 && U.Oa != null && U.Oa.fd && (o = Aa(U.ba));
          }
          U = o;
        }
        C = U != 0 ? null : 11 > C ? b.f.RGBA.eb : b.f.kb.y;
      } else C = null;
      return C;
    };
    var gl = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function h(T, AA) {
    for (var uA = "", S = 0; S < 4; S++) uA += String.fromCharCode(T[AA++]);
    return uA;
  }
  function B(T, AA) {
    return ((T[AA + 0] << 0) | (T[AA + 1] << 8) | (T[AA + 2] << 16)) >>> 0;
  }
  function p(T, AA) {
    return (
      ((T[AA + 0] << 0) |
        (T[AA + 1] << 8) |
        (T[AA + 2] << 16) |
        (T[AA + 3] << 24)) >>>
      0
    );
  }
  new u();
  var w = [0],
    g = [0],
    L = [],
    y = new u(),
    N = t,
    F = (function (T, AA) {
      var uA = {},
        S = 0,
        x = !1,
        K = 0,
        P = 0;
      if (
        ((uA.frames = []),
        !(function (_, O, R, X) {
          for (var iA = 0; iA < X; iA++)
            if (_[O + iA] != R.charCodeAt(iA)) return !0;
          return !1;
        })(T, AA, "RIFF", 4))
      ) {
        var sA, nA;
        for (p(T, (AA += 4)), AA += 8; AA < T.length; ) {
          var cA = h(T, AA),
            eA = p(T, (AA += 4));
          AA += 4;
          var hA = eA + (1 & eA);
          switch (cA) {
            case "VP8 ":
            case "VP8L":
              uA.frames[S] === void 0 && (uA.frames[S] = {}),
                ((Q = uA.frames[S]).src_off = x ? P : AA - 8),
                (Q.src_size = K + eA + 8),
                S++,
                x && ((x = !1), (K = 0), (P = 0));
              break;
            case "VP8X":
              (Q = uA.header = {}).feature_flags = T[AA];
              var fA = AA + 4;
              (Q.canvas_width = 1 + B(T, fA)),
                (fA += 3),
                (Q.canvas_height = 1 + B(T, fA)),
                (fA += 3);
              break;
            case "ALPH":
              (x = !0), (K = hA + 8), (P = AA - 8);
              break;
            case "ANIM":
              ((Q = uA.header).bgcolor = p(T, AA)),
                (fA = AA + 4),
                (Q.loop_count =
                  ((sA = T)[(nA = fA) + 0] << 0) | (sA[nA + 1] << 8)),
                (fA += 2);
              break;
            case "ANMF":
              var UA, Q;
              ((Q = uA.frames[S] = {}).offset_x = 2 * B(T, AA)),
                (AA += 3),
                (Q.offset_y = 2 * B(T, AA)),
                (AA += 3),
                (Q.width = 1 + B(T, AA)),
                (AA += 3),
                (Q.height = 1 + B(T, AA)),
                (AA += 3),
                (Q.duration = B(T, AA)),
                (AA += 3),
                (UA = T[AA++]),
                (Q.dispose = 1 & UA),
                (Q.blend = (UA >> 1) & 1);
          }
          cA != "ANMF" && (AA += hA);
        }
        return uA;
      }
    })(N, 0);
  (F.response = N), (F.rgbaoutput = !0), (F.dataurl = !1);
  var I = F.header ? F.header : null,
    G = F.frames ? F.frames : null;
  if (I) {
    (I.loop_counter = I.loop_count),
      (w = [I.canvas_height]),
      (g = [I.canvas_width]);
    for (var Y = 0; Y < G.length && G[Y].blend != 0; Y++);
  }
  var Z = G[0],
    z = y.WebPDecodeRGBA(N, Z.src_off, Z.src_size, g, w);
  (Z.rgba = z), (Z.imgwidth = g[0]), (Z.imgheight = w[0]);
  for (var W = 0; W < g[0] * w[0] * 4; W++) L[W] = z[W];
  return (this.width = g), (this.height = w), (this.data = L), this;
}
(function (t) {
  var A = function () {
      return typeof _u == "function";
    },
    e = function (w, g, L, y) {
      var N = 4,
        F = s;
      switch (y) {
        case t.image_compression.FAST:
          (N = 1), (F = i);
          break;
        case t.image_compression.MEDIUM:
          (N = 6), (F = c);
          break;
        case t.image_compression.SLOW:
          (N = 9), (F = u);
      }
      w = r(w, g, L, F);
      var I = _u(w, { level: N });
      return t.__addimage__.arrayBufferToBinaryString(I);
    },
    r = function (w, g, L, y) {
      for (
        var N,
          F,
          I,
          G = w.length / g,
          Y = new Uint8Array(w.length + G),
          Z = B(),
          z = 0;
        z < G;
        z += 1
      ) {
        if (((I = z * g), (N = w.subarray(I, I + g)), y))
          Y.set(y(N, L, F), I + z);
        else {
          for (var W, T = Z.length, AA = []; W < T; W += 1)
            AA[W] = Z[W](N, L, F);
          var uA = p(AA.concat());
          Y.set(AA[uA], I + z);
        }
        F = N;
      }
      return Y;
    },
    n = function (w) {
      var g = Array.apply([], w);
      return g.unshift(0), g;
    },
    i = function (w, g) {
      var L,
        y = [],
        N = w.length;
      y[0] = 1;
      for (var F = 0; F < N; F += 1)
        (L = w[F - g] || 0), (y[F + 1] = (w[F] - L + 256) & 255);
      return y;
    },
    s = function (w, g, L) {
      var y,
        N = [],
        F = w.length;
      N[0] = 2;
      for (var I = 0; I < F; I += 1)
        (y = (L && L[I]) || 0), (N[I + 1] = (w[I] - y + 256) & 255);
      return N;
    },
    c = function (w, g, L) {
      var y,
        N,
        F = [],
        I = w.length;
      F[0] = 3;
      for (var G = 0; G < I; G += 1)
        (y = w[G - g] || 0),
          (N = (L && L[G]) || 0),
          (F[G + 1] = (w[G] + 256 - ((y + N) >>> 1)) & 255);
      return F;
    },
    u = function (w, g, L) {
      var y,
        N,
        F,
        I,
        G = [],
        Y = w.length;
      G[0] = 4;
      for (var Z = 0; Z < Y; Z += 1)
        (y = w[Z - g] || 0),
          (N = (L && L[Z]) || 0),
          (F = (L && L[Z - g]) || 0),
          (I = h(y, N, F)),
          (G[Z + 1] = (w[Z] - I + 256) & 255);
      return G;
    },
    h = function (w, g, L) {
      if (w === g && g === L) return w;
      var y = Math.abs(g - L),
        N = Math.abs(w - L),
        F = Math.abs(w + g - L - L);
      return y <= N && y <= F ? w : N <= F ? g : L;
    },
    B = function () {
      return [n, i, s, c, u];
    },
    p = function (w) {
      var g = w.map(function (L) {
        return L.reduce(function (y, N) {
          return y + Math.abs(N);
        }, 0);
      });
      return g.indexOf(Math.min.apply(null, g));
    };
  t.processPNG = function (w, g, L, y) {
    var N,
      F,
      I,
      G,
      Y,
      Z,
      z,
      W,
      T,
      AA,
      uA,
      S,
      x,
      K,
      P,
      sA = this.decode.FLATE_DECODE,
      nA = "";
    if (
      (this.__addimage__.isArrayBuffer(w) && (w = new Uint8Array(w)),
      this.__addimage__.isArrayBufferView(w))
    ) {
      if (
        ((w = (I = new O5(w)).imgData),
        (F = I.bits),
        (N = I.colorSpace),
        (Y = I.colors),
        [4, 6].indexOf(I.colorType) !== -1)
      ) {
        if (I.bits === 8) {
          (T = (W =
            I.pixelBitlength == 32
              ? new Uint32Array(I.decodePixels().buffer)
              : I.pixelBitlength == 16
                ? new Uint16Array(I.decodePixels().buffer)
                : new Uint8Array(I.decodePixels().buffer)).length),
            (uA = new Uint8Array(T * I.colors)),
            (AA = new Uint8Array(T));
          var cA,
            eA = I.pixelBitlength - I.bits;
          for (K = 0, P = 0; K < T; K++) {
            for (x = W[K], cA = 0; cA < eA; )
              (uA[P++] = (x >>> cA) & 255), (cA += I.bits);
            AA[K] = (x >>> cA) & 255;
          }
        }
        if (I.bits === 16) {
          (T = (W = new Uint32Array(I.decodePixels().buffer)).length),
            (uA = new Uint8Array(T * (32 / I.pixelBitlength) * I.colors)),
            (AA = new Uint8Array(T * (32 / I.pixelBitlength))),
            (S = I.colors > 1),
            (K = 0),
            (P = 0);
          for (var hA = 0; K < T; )
            (x = W[K++]),
              (uA[P++] = (x >>> 0) & 255),
              S &&
                ((uA[P++] = (x >>> 16) & 255),
                (x = W[K++]),
                (uA[P++] = (x >>> 0) & 255)),
              (AA[hA++] = (x >>> 16) & 255);
          F = 8;
        }
        y !== t.image_compression.NONE && A()
          ? ((w = e(uA, I.width * I.colors, I.colors, y)),
            (z = e(AA, I.width, 1, y)))
          : ((w = uA), (z = AA), (sA = void 0));
      }
      if (
        I.colorType === 3 &&
        ((N = this.color_spaces.INDEXED),
        (Z = I.palette),
        I.transparency.indexed)
      ) {
        var fA = I.transparency.indexed,
          UA = 0;
        for (K = 0, T = fA.length; K < T; ++K) UA += fA[K];
        if ((UA /= 255) === T - 1 && fA.indexOf(0) !== -1) G = [fA.indexOf(0)];
        else if (UA !== T) {
          for (
            W = I.decodePixels(),
              AA = new Uint8Array(W.length),
              K = 0,
              T = W.length;
            K < T;
            K++
          )
            AA[K] = fA[W[K]];
          z = e(AA, I.width, 1);
        }
      }
      var Q = (function (_) {
        var O;
        switch (_) {
          case t.image_compression.FAST:
            O = 11;
            break;
          case t.image_compression.MEDIUM:
            O = 13;
            break;
          case t.image_compression.SLOW:
            O = 14;
            break;
          default:
            O = 12;
        }
        return O;
      })(y);
      return (
        sA === this.decode.FLATE_DECODE && (nA = "/Predictor " + Q + " "),
        (nA +=
          "/Colors " + Y + " /BitsPerComponent " + F + " /Columns " + I.width),
        (this.__addimage__.isArrayBuffer(w) ||
          this.__addimage__.isArrayBufferView(w)) &&
          (w = this.__addimage__.arrayBufferToBinaryString(w)),
        ((z && this.__addimage__.isArrayBuffer(z)) ||
          this.__addimage__.isArrayBufferView(z)) &&
          (z = this.__addimage__.arrayBufferToBinaryString(z)),
        {
          alias: L,
          data: w,
          index: g,
          filter: sA,
          decodeParameters: nA,
          transparency: G,
          palette: Z,
          sMask: z,
          predictor: Q,
          width: I.width,
          height: I.height,
          bitsPerComponent: F,
          colorSpace: N,
        }
      );
    }
  };
})(jA.API),
  (function (t) {
    (t.processGIF89A = function (A, e, r, n) {
      var i = new P5(A),
        s = i.width,
        c = i.height,
        u = [];
      i.decodeAndBlitFrameRGBA(0, u);
      var h = { data: u, width: s, height: c },
        B = new ru(100).encode(h, 100);
      return t.processJPEG.call(this, B, e, r, n);
    }),
      (t.processGIF87A = t.processGIF89A);
  })(jA.API),
  (ar.prototype.parseHeader = function () {
    if (
      ((this.fileSize = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.reserved = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.offset = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.headerSize = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.width = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.height = this.datav.getInt32(this.pos, !0)),
      (this.pos += 4),
      (this.planes = this.datav.getUint16(this.pos, !0)),
      (this.pos += 2),
      (this.bitPP = this.datav.getUint16(this.pos, !0)),
      (this.pos += 2),
      (this.compress = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.rawSize = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.hr = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.vr = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.colors = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      (this.importantColors = this.datav.getUint32(this.pos, !0)),
      (this.pos += 4),
      this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15),
      this.bitPP < 15)
    ) {
      var t = this.colors === 0 ? 1 << this.bitPP : this.colors;
      this.palette = new Array(t);
      for (var A = 0; A < t; A++) {
        var e = this.datav.getUint8(this.pos++, !0),
          r = this.datav.getUint8(this.pos++, !0),
          n = this.datav.getUint8(this.pos++, !0),
          i = this.datav.getUint8(this.pos++, !0);
        this.palette[A] = { red: n, green: r, blue: e, quad: i };
      }
    }
    this.height < 0 && ((this.height *= -1), (this.bottom_up = !1));
  }),
  (ar.prototype.parseBGR = function () {
    this.pos = this.offset;
    try {
      var t = "bit" + this.bitPP,
        A = this.width * this.height * 4;
      (this.data = new Uint8Array(A)), this[t]();
    } catch (e) {
      Ce.log("bit decode error:" + e);
    }
  }),
  (ar.prototype.bit1 = function () {
    var t,
      A = Math.ceil(this.width / 8),
      e = A % 4;
    for (t = this.height - 1; t >= 0; t--) {
      for (var r = this.bottom_up ? t : this.height - 1 - t, n = 0; n < A; n++)
        for (
          var i = this.datav.getUint8(this.pos++, !0),
            s = r * this.width * 4 + 8 * n * 4,
            c = 0;
          c < 8 && 8 * n + c < this.width;
          c++
        ) {
          var u = this.palette[(i >> (7 - c)) & 1];
          (this.data[s + 4 * c] = u.blue),
            (this.data[s + 4 * c + 1] = u.green),
            (this.data[s + 4 * c + 2] = u.red),
            (this.data[s + 4 * c + 3] = 255);
        }
      e !== 0 && (this.pos += 4 - e);
    }
  }),
  (ar.prototype.bit4 = function () {
    for (
      var t = Math.ceil(this.width / 2), A = t % 4, e = this.height - 1;
      e >= 0;
      e--
    ) {
      for (
        var r = this.bottom_up ? e : this.height - 1 - e, n = 0;
        n < t;
        n++
      ) {
        var i = this.datav.getUint8(this.pos++, !0),
          s = r * this.width * 4 + 2 * n * 4,
          c = i >> 4,
          u = 15 & i,
          h = this.palette[c];
        if (
          ((this.data[s] = h.blue),
          (this.data[s + 1] = h.green),
          (this.data[s + 2] = h.red),
          (this.data[s + 3] = 255),
          2 * n + 1 >= this.width)
        )
          break;
        (h = this.palette[u]),
          (this.data[s + 4] = h.blue),
          (this.data[s + 4 + 1] = h.green),
          (this.data[s + 4 + 2] = h.red),
          (this.data[s + 4 + 3] = 255);
      }
      A !== 0 && (this.pos += 4 - A);
    }
  }),
  (ar.prototype.bit8 = function () {
    for (var t = this.width % 4, A = this.height - 1; A >= 0; A--) {
      for (
        var e = this.bottom_up ? A : this.height - 1 - A, r = 0;
        r < this.width;
        r++
      ) {
        var n = this.datav.getUint8(this.pos++, !0),
          i = e * this.width * 4 + 4 * r;
        if (n < this.palette.length) {
          var s = this.palette[n];
          (this.data[i] = s.red),
            (this.data[i + 1] = s.green),
            (this.data[i + 2] = s.blue),
            (this.data[i + 3] = 255);
        } else
          (this.data[i] = 255),
            (this.data[i + 1] = 255),
            (this.data[i + 2] = 255),
            (this.data[i + 3] = 255);
      }
      t !== 0 && (this.pos += 4 - t);
    }
  }),
  (ar.prototype.bit15 = function () {
    for (
      var t = this.width % 3, A = parseInt("11111", 2), e = this.height - 1;
      e >= 0;
      e--
    ) {
      for (
        var r = this.bottom_up ? e : this.height - 1 - e, n = 0;
        n < this.width;
        n++
      ) {
        var i = this.datav.getUint16(this.pos, !0);
        this.pos += 2;
        var s = (((i & A) / A) * 255) | 0,
          c = ((((i >> 5) & A) / A) * 255) | 0,
          u = ((((i >> 10) & A) / A) * 255) | 0,
          h = i >> 15 ? 255 : 0,
          B = r * this.width * 4 + 4 * n;
        (this.data[B] = u),
          (this.data[B + 1] = c),
          (this.data[B + 2] = s),
          (this.data[B + 3] = h);
      }
      this.pos += t;
    }
  }),
  (ar.prototype.bit16 = function () {
    for (
      var t = this.width % 3,
        A = parseInt("11111", 2),
        e = parseInt("111111", 2),
        r = this.height - 1;
      r >= 0;
      r--
    ) {
      for (
        var n = this.bottom_up ? r : this.height - 1 - r, i = 0;
        i < this.width;
        i++
      ) {
        var s = this.datav.getUint16(this.pos, !0);
        this.pos += 2;
        var c = (((s & A) / A) * 255) | 0,
          u = ((((s >> 5) & e) / e) * 255) | 0,
          h = (((s >> 11) / A) * 255) | 0,
          B = n * this.width * 4 + 4 * i;
        (this.data[B] = h),
          (this.data[B + 1] = u),
          (this.data[B + 2] = c),
          (this.data[B + 3] = 255);
      }
      this.pos += t;
    }
  }),
  (ar.prototype.bit24 = function () {
    for (var t = this.height - 1; t >= 0; t--) {
      for (
        var A = this.bottom_up ? t : this.height - 1 - t, e = 0;
        e < this.width;
        e++
      ) {
        var r = this.datav.getUint8(this.pos++, !0),
          n = this.datav.getUint8(this.pos++, !0),
          i = this.datav.getUint8(this.pos++, !0),
          s = A * this.width * 4 + 4 * e;
        (this.data[s] = i),
          (this.data[s + 1] = n),
          (this.data[s + 2] = r),
          (this.data[s + 3] = 255);
      }
      this.pos += this.width % 4;
    }
  }),
  (ar.prototype.bit32 = function () {
    for (var t = this.height - 1; t >= 0; t--)
      for (
        var A = this.bottom_up ? t : this.height - 1 - t, e = 0;
        e < this.width;
        e++
      ) {
        var r = this.datav.getUint8(this.pos++, !0),
          n = this.datav.getUint8(this.pos++, !0),
          i = this.datav.getUint8(this.pos++, !0),
          s = this.datav.getUint8(this.pos++, !0),
          c = A * this.width * 4 + 4 * e;
        (this.data[c] = i),
          (this.data[c + 1] = n),
          (this.data[c + 2] = r),
          (this.data[c + 3] = s);
      }
  }),
  (ar.prototype.getData = function () {
    return this.data;
  }),
  (function (t) {
    t.processBMP = function (A, e, r, n) {
      var i = new ar(A, !1),
        s = i.width,
        c = i.height,
        u = { data: i.getData(), width: s, height: c },
        h = new ru(100).encode(u, 100);
      return t.processJPEG.call(this, h, e, r, n);
    };
  })(jA.API),
  ($f.prototype.getData = function () {
    return this.data;
  }),
  (function (t) {
    t.processWEBP = function (A, e, r, n) {
      var i = new $f(A),
        s = i.width,
        c = i.height,
        u = { data: i.getData(), width: s, height: c },
        h = new ru(100).encode(u, 100);
      return t.processJPEG.call(this, h, e, r, n);
    };
  })(jA.API),
  (jA.API.processRGBA = function (t, A, e) {
    for (
      var r = t.data,
        n = r.length,
        i = new Uint8Array((n / 4) * 3),
        s = new Uint8Array(n / 4),
        c = 0,
        u = 0,
        h = 0;
      h < n;
      h += 4
    ) {
      var B = r[h],
        p = r[h + 1],
        w = r[h + 2],
        g = r[h + 3];
      (i[c++] = B), (i[c++] = p), (i[c++] = w), (s[u++] = g);
    }
    var L = this.__addimage__.arrayBufferToBinaryString(i);
    return {
      alpha: this.__addimage__.arrayBufferToBinaryString(s),
      data: L,
      index: A,
      alias: e,
      colorSpace: "DeviceRGB",
      bitsPerComponent: 8,
      width: t.width,
      height: t.height,
    };
  }),
  (jA.API.setLanguage = function (t) {
    return (
      this.internal.languageSettings === void 0 &&
        ((this.internal.languageSettings = {}),
        (this.internal.languageSettings.isSubscribed = !1)),
      {
        af: "Afrikaans",
        sq: "Albanian",
        ar: "Arabic (Standard)",
        "ar-DZ": "Arabic (Algeria)",
        "ar-BH": "Arabic (Bahrain)",
        "ar-EG": "Arabic (Egypt)",
        "ar-IQ": "Arabic (Iraq)",
        "ar-JO": "Arabic (Jordan)",
        "ar-KW": "Arabic (Kuwait)",
        "ar-LB": "Arabic (Lebanon)",
        "ar-LY": "Arabic (Libya)",
        "ar-MA": "Arabic (Morocco)",
        "ar-OM": "Arabic (Oman)",
        "ar-QA": "Arabic (Qatar)",
        "ar-SA": "Arabic (Saudi Arabia)",
        "ar-SY": "Arabic (Syria)",
        "ar-TN": "Arabic (Tunisia)",
        "ar-AE": "Arabic (U.A.E.)",
        "ar-YE": "Arabic (Yemen)",
        an: "Aragonese",
        hy: "Armenian",
        as: "Assamese",
        ast: "Asturian",
        az: "Azerbaijani",
        eu: "Basque",
        be: "Belarusian",
        bn: "Bengali",
        bs: "Bosnian",
        br: "Breton",
        bg: "Bulgarian",
        my: "Burmese",
        ca: "Catalan",
        ch: "Chamorro",
        ce: "Chechen",
        zh: "Chinese",
        "zh-HK": "Chinese (Hong Kong)",
        "zh-CN": "Chinese (PRC)",
        "zh-SG": "Chinese (Singapore)",
        "zh-TW": "Chinese (Taiwan)",
        cv: "Chuvash",
        co: "Corsican",
        cr: "Cree",
        hr: "Croatian",
        cs: "Czech",
        da: "Danish",
        nl: "Dutch (Standard)",
        "nl-BE": "Dutch (Belgian)",
        en: "English",
        "en-AU": "English (Australia)",
        "en-BZ": "English (Belize)",
        "en-CA": "English (Canada)",
        "en-IE": "English (Ireland)",
        "en-JM": "English (Jamaica)",
        "en-NZ": "English (New Zealand)",
        "en-PH": "English (Philippines)",
        "en-ZA": "English (South Africa)",
        "en-TT": "English (Trinidad & Tobago)",
        "en-GB": "English (United Kingdom)",
        "en-US": "English (United States)",
        "en-ZW": "English (Zimbabwe)",
        eo: "Esperanto",
        et: "Estonian",
        fo: "Faeroese",
        fj: "Fijian",
        fi: "Finnish",
        fr: "French (Standard)",
        "fr-BE": "French (Belgium)",
        "fr-CA": "French (Canada)",
        "fr-FR": "French (France)",
        "fr-LU": "French (Luxembourg)",
        "fr-MC": "French (Monaco)",
        "fr-CH": "French (Switzerland)",
        fy: "Frisian",
        fur: "Friulian",
        gd: "Gaelic (Scots)",
        "gd-IE": "Gaelic (Irish)",
        gl: "Galacian",
        ka: "Georgian",
        de: "German (Standard)",
        "de-AT": "German (Austria)",
        "de-DE": "German (Germany)",
        "de-LI": "German (Liechtenstein)",
        "de-LU": "German (Luxembourg)",
        "de-CH": "German (Switzerland)",
        el: "Greek",
        gu: "Gujurati",
        ht: "Haitian",
        he: "Hebrew",
        hi: "Hindi",
        hu: "Hungarian",
        is: "Icelandic",
        id: "Indonesian",
        iu: "Inuktitut",
        ga: "Irish",
        it: "Italian (Standard)",
        "it-CH": "Italian (Switzerland)",
        ja: "Japanese",
        kn: "Kannada",
        ks: "Kashmiri",
        kk: "Kazakh",
        km: "Khmer",
        ky: "Kirghiz",
        tlh: "Klingon",
        ko: "Korean",
        "ko-KP": "Korean (North Korea)",
        "ko-KR": "Korean (South Korea)",
        la: "Latin",
        lv: "Latvian",
        lt: "Lithuanian",
        lb: "Luxembourgish",
        mk: "North Macedonia",
        ms: "Malay",
        ml: "Malayalam",
        mt: "Maltese",
        mi: "Maori",
        mr: "Marathi",
        mo: "Moldavian",
        nv: "Navajo",
        ng: "Ndonga",
        ne: "Nepali",
        no: "Norwegian",
        nb: "Norwegian (Bokmal)",
        nn: "Norwegian (Nynorsk)",
        oc: "Occitan",
        or: "Oriya",
        om: "Oromo",
        fa: "Persian",
        "fa-IR": "Persian/Iran",
        pl: "Polish",
        pt: "Portuguese",
        "pt-BR": "Portuguese (Brazil)",
        pa: "Punjabi",
        "pa-IN": "Punjabi (India)",
        "pa-PK": "Punjabi (Pakistan)",
        qu: "Quechua",
        rm: "Rhaeto-Romanic",
        ro: "Romanian",
        "ro-MO": "Romanian (Moldavia)",
        ru: "Russian",
        "ru-MO": "Russian (Moldavia)",
        sz: "Sami (Lappish)",
        sg: "Sango",
        sa: "Sanskrit",
        sc: "Sardinian",
        sd: "Sindhi",
        si: "Singhalese",
        sr: "Serbian",
        sk: "Slovak",
        sl: "Slovenian",
        so: "Somani",
        sb: "Sorbian",
        es: "Spanish",
        "es-AR": "Spanish (Argentina)",
        "es-BO": "Spanish (Bolivia)",
        "es-CL": "Spanish (Chile)",
        "es-CO": "Spanish (Colombia)",
        "es-CR": "Spanish (Costa Rica)",
        "es-DO": "Spanish (Dominican Republic)",
        "es-EC": "Spanish (Ecuador)",
        "es-SV": "Spanish (El Salvador)",
        "es-GT": "Spanish (Guatemala)",
        "es-HN": "Spanish (Honduras)",
        "es-MX": "Spanish (Mexico)",
        "es-NI": "Spanish (Nicaragua)",
        "es-PA": "Spanish (Panama)",
        "es-PY": "Spanish (Paraguay)",
        "es-PE": "Spanish (Peru)",
        "es-PR": "Spanish (Puerto Rico)",
        "es-ES": "Spanish (Spain)",
        "es-UY": "Spanish (Uruguay)",
        "es-VE": "Spanish (Venezuela)",
        sx: "Sutu",
        sw: "Swahili",
        sv: "Swedish",
        "sv-FI": "Swedish (Finland)",
        "sv-SV": "Swedish (Sweden)",
        ta: "Tamil",
        tt: "Tatar",
        te: "Teluga",
        th: "Thai",
        tig: "Tigre",
        ts: "Tsonga",
        tn: "Tswana",
        tr: "Turkish",
        tk: "Turkmen",
        uk: "Ukrainian",
        hsb: "Upper Sorbian",
        ur: "Urdu",
        ve: "Venda",
        vi: "Vietnamese",
        vo: "Volapuk",
        wa: "Walloon",
        cy: "Welsh",
        xh: "Xhosa",
        ji: "Yiddish",
        zu: "Zulu",
      }[t] !== void 0 &&
        ((this.internal.languageSettings.languageCode = t),
        this.internal.languageSettings.isSubscribed === !1 &&
          (this.internal.events.subscribe("putCatalog", function () {
            this.internal.write(
              "/Lang (" + this.internal.languageSettings.languageCode + ")",
            );
          }),
          (this.internal.languageSettings.isSubscribed = !0))),
      this
    );
  }),
  (Fi = jA.API),
  (Ao = Fi.getCharWidthsArray =
    function (t, A) {
      var e,
        r,
        n = (A = A || {}).font || this.internal.getFont(),
        i = A.fontSize || this.internal.getFontSize(),
        s = A.charSpace || this.internal.getCharSpace(),
        c = A.widths ? A.widths : n.metadata.Unicode.widths,
        u = c.fof ? c.fof : 1,
        h = A.kerning ? A.kerning : n.metadata.Unicode.kerning,
        B = h.fof ? h.fof : 1,
        p = A.doKerning !== !1,
        w = 0,
        g = t.length,
        L = 0,
        y = c[0] || u,
        N = [];
      for (e = 0; e < g; e++)
        (r = t.charCodeAt(e)),
          typeof n.metadata.widthOfString == "function"
            ? N.push(
                (n.metadata.widthOfGlyph(n.metadata.characterToGlyph(r)) +
                  s * (1e3 / i) || 0) / 1e3,
              )
            : ((w =
                p && Qe(h[r]) === "object" && !isNaN(parseInt(h[r][L], 10))
                  ? h[r][L] / B
                  : 0),
              N.push((c[r] || y) / u + w)),
          (L = r);
      return N;
    }),
  (Jf = Fi.getStringUnitWidth =
    function (t, A) {
      var e = (A = A || {}).fontSize || this.internal.getFontSize(),
        r = A.font || this.internal.getFont(),
        n = A.charSpace || this.internal.getCharSpace();
      return (
        Fi.processArabic && (t = Fi.processArabic(t)),
        typeof r.metadata.widthOfString == "function"
          ? r.metadata.widthOfString(t, e, n) / e
          : Ao.apply(this, arguments).reduce(function (i, s) {
              return i + s;
            }, 0)
      );
    }),
  (zf = function (t, A, e, r) {
    for (var n = [], i = 0, s = t.length, c = 0; i !== s && c + A[i] < e; )
      (c += A[i]), i++;
    n.push(t.slice(0, i));
    var u = i;
    for (c = 0; i !== s; )
      c + A[i] > r && (n.push(t.slice(u, i)), (c = 0), (u = i)),
        (c += A[i]),
        i++;
    return u !== i && n.push(t.slice(u, i)), n;
  }),
  (Yf = function (t, A, e) {
    e || (e = {});
    var r,
      n,
      i,
      s,
      c,
      u,
      h,
      B = [],
      p = [B],
      w = e.textIndent || 0,
      g = 0,
      L = 0,
      y = t.split(" "),
      N = Ao.apply(this, [" ", e])[0];
    if ((u = e.lineIndent === -1 ? y[0].length + 2 : e.lineIndent || 0)) {
      var F = Array(u).join(" "),
        I = [];
      y.map(function (Y) {
        (Y = Y.split(/\s*\n/)).length > 1
          ? (I = I.concat(
              Y.map(function (Z, z) {
                return (
                  (z && Z.length
                    ? `
`
                    : "") + Z
                );
              }),
            ))
          : I.push(Y[0]);
      }),
        (y = I),
        (u = Jf.apply(this, [F, e]));
    }
    for (i = 0, s = y.length; i < s; i++) {
      var G = 0;
      if (
        ((r = y[i]),
        u &&
          r[0] ==
            `
` &&
          ((r = r.substr(1)), (G = 1)),
        w +
          g +
          (L = (n = Ao.apply(this, [r, e])).reduce(function (Y, Z) {
            return Y + Z;
          }, 0)) >
          A || G)
      ) {
        if (L > A) {
          for (
            c = zf.apply(this, [r, n, A - (w + g), A]),
              B.push(c.shift()),
              B = [c.pop()];
            c.length;

          )
            p.push([c.shift()]);
          L = n.slice(r.length - (B[0] ? B[0].length : 0)).reduce(function (
            Y,
            Z,
          ) {
            return Y + Z;
          }, 0);
        } else B = [r];
        p.push(B), (w = L + u), (g = N);
      } else B.push(r), (w += g + L), (g = N);
    }
    return (
      (h = u
        ? function (Y, Z) {
            return (Z ? F : "") + Y.join(" ");
          }
        : function (Y) {
            return Y.join(" ");
          }),
      p.map(h)
    );
  }),
  (Fi.splitTextToSize = function (t, A, e) {
    var r,
      n = (e = e || {}).fontSize || this.internal.getFontSize(),
      i = function (B) {
        if (B.widths && B.kerning)
          return { widths: B.widths, kerning: B.kerning };
        var p = this.internal.getFont(B.fontName, B.fontStyle);
        return p.metadata.Unicode
          ? {
              widths: p.metadata.Unicode.widths || { 0: 1 },
              kerning: p.metadata.Unicode.kerning || {},
            }
          : {
              font: p.metadata,
              fontSize: this.internal.getFontSize(),
              charSpace: this.internal.getCharSpace(),
            };
      }.call(this, e);
    r = Array.isArray(t) ? t : String(t).split(/\r?\n/);
    var s = (1 * this.internal.scaleFactor * A) / n;
    (i.textIndent = e.textIndent
      ? (1 * e.textIndent * this.internal.scaleFactor) / n
      : 0),
      (i.lineIndent = e.lineIndent);
    var c,
      u,
      h = [];
    for (c = 0, u = r.length; c < u; c++)
      h = h.concat(Yf.apply(this, [r[c], s, i]));
    return h;
  }),
  (function (t) {
    t.__fontmetrics__ = t.__fontmetrics__ || {};
    for (var A = "klmnopqrstuvwxyz", e = {}, r = {}, n = 0; n < A.length; n++)
      (e[A[n]] = "0123456789abcdef"[n]), (r["0123456789abcdef"[n]] = A[n]);
    var i = function (p) {
        return "0x" + parseInt(p, 10).toString(16);
      },
      s = (t.__fontmetrics__.compress = function (p) {
        var w,
          g,
          L,
          y,
          N = ["{"];
        for (var F in p) {
          if (
            ((w = p[F]),
            isNaN(parseInt(F, 10))
              ? (g = "'" + F + "'")
              : ((F = parseInt(F, 10)),
                (g = (g = i(F).slice(2)).slice(0, -1) + r[g.slice(-1)])),
            typeof w == "number")
          )
            w < 0
              ? ((L = i(w).slice(3)), (y = "-"))
              : ((L = i(w).slice(2)), (y = "")),
              (L = y + L.slice(0, -1) + r[L.slice(-1)]);
          else {
            if (Qe(w) !== "object")
              throw new Error(
                "Don't know what to do with value type " + Qe(w) + ".",
              );
            L = s(w);
          }
          N.push(g + L);
        }
        return N.push("}"), N.join("");
      }),
      c = (t.__fontmetrics__.uncompress = function (p) {
        if (typeof p != "string")
          throw new Error("Invalid argument passed to uncompress.");
        for (
          var w,
            g,
            L,
            y,
            N = {},
            F = 1,
            I = N,
            G = [],
            Y = "",
            Z = "",
            z = p.length - 1,
            W = 1;
          W < z;
          W += 1
        )
          (y = p[W]) == "'"
            ? w
              ? ((L = w.join("")), (w = void 0))
              : (w = [])
            : w
              ? w.push(y)
              : y == "{"
                ? (G.push([I, L]), (I = {}), (L = void 0))
                : y == "}"
                  ? (((g = G.pop())[0][g[1]] = I), (L = void 0), (I = g[0]))
                  : y == "-"
                    ? (F = -1)
                    : L === void 0
                      ? e.hasOwnProperty(y)
                        ? ((Y += e[y]),
                          (L = parseInt(Y, 16) * F),
                          (F = 1),
                          (Y = ""))
                        : (Y += y)
                      : e.hasOwnProperty(y)
                        ? ((Z += e[y]),
                          (I[L] = parseInt(Z, 16) * F),
                          (F = 1),
                          (L = void 0),
                          (Z = ""))
                        : (Z += y);
        return N;
      }),
      u = {
        codePages: ["WinAnsiEncoding"],
        WinAnsiEncoding: c(
          "{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}",
        ),
      },
      h = {
        Unicode: {
          Courier: u,
          "Courier-Bold": u,
          "Courier-BoldOblique": u,
          "Courier-Oblique": u,
          Helvetica: u,
          "Helvetica-Bold": u,
          "Helvetica-BoldOblique": u,
          "Helvetica-Oblique": u,
          "Times-Roman": u,
          "Times-Bold": u,
          "Times-BoldItalic": u,
          "Times-Italic": u,
        },
      },
      B = {
        Unicode: {
          "Courier-Oblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-BoldItalic": c(
            "{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}",
          ),
          "Helvetica-Bold": c(
            "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}",
          ),
          Courier: c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Courier-BoldOblique": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-Bold": c(
            "{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}",
          ),
          Symbol: c(
            "{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}",
          ),
          Helvetica: c(
            "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}",
          ),
          "Helvetica-BoldOblique": c(
            "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}",
          ),
          ZapfDingbats: c("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
          "Courier-Bold": c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
          "Times-Italic": c(
            "{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}",
          ),
          "Times-Roman": c(
            "{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}",
          ),
          "Helvetica-Oblique": c(
            "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}",
          ),
        },
      };
    t.events.push([
      "addFont",
      function (p) {
        var w = p.font,
          g = B.Unicode[w.postScriptName];
        g &&
          ((w.metadata.Unicode = {}),
          (w.metadata.Unicode.widths = g.widths),
          (w.metadata.Unicode.kerning = g.kerning));
        var L = h.Unicode[w.postScriptName];
        L && ((w.metadata.Unicode.encoding = L), (w.encoding = L.codePages[0]));
      },
    ]);
  })(jA.API),
  (function (t) {
    var A = function (e) {
      for (var r = e.length, n = new Uint8Array(r), i = 0; i < r; i++)
        n[i] = e.charCodeAt(i);
      return n;
    };
    t.API.events.push([
      "addFont",
      function (e) {
        var r = void 0,
          n = e.font,
          i = e.instance;
        if (!n.isStandardFont) {
          if (i === void 0)
            throw new Error(
              "Font does not exist in vFS, import fonts or remove declaration doc.addFont('" +
                n.postScriptName +
                "').",
            );
          if (
            typeof (r =
              i.existsFileInVFS(n.postScriptName) === !1
                ? i.loadFile(n.postScriptName)
                : i.getFileFromVFS(n.postScriptName)) != "string"
          )
            throw new Error(
              "Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" +
                n.postScriptName +
                "').",
            );
          (function (s, c) {
            (c = /^\x00\x01\x00\x00/.test(c) ? A(c) : A(xa(c))),
              (s.metadata = t.API.TTFFont.open(c)),
              (s.metadata.Unicode = s.metadata.Unicode || {
                encoding: {},
                kerning: {},
                widths: [],
              }),
              (s.metadata.glyIdsUsed = [0]);
          })(n, r);
        }
      },
    ]);
  })(jA),
  (function (t) {
    function A() {
      return (
        VA.canvg
          ? Promise.resolve(VA.canvg)
          : iu(
              () => import("./index.es-9d681939.js"),
              [
                "assets/index.es-9d681939.js",
                "assets/index-4f59dc0f.js",
                "assets/index-53c7eb43.css",
              ],
            )
      )
        .catch(function (e) {
          return Promise.reject(new Error("Could not load canvg: " + e));
        })
        .then(function (e) {
          return e.default ? e.default : e;
        });
    }
    jA.API.addSvgAsImage = function (e, r, n, i, s, c, u, h) {
      if (isNaN(r) || isNaN(n))
        throw (
          (Ce.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments),
          new Error("Invalid coordinates passed to jsPDF.addSvgAsImage"))
        );
      if (isNaN(i) || isNaN(s))
        throw (
          (Ce.error("jsPDF.addSvgAsImage: Invalid measurements", arguments),
          new Error(
            "Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage",
          ))
        );
      var B = document.createElement("canvas");
      (B.width = i), (B.height = s);
      var p = B.getContext("2d");
      (p.fillStyle = "#fff"), p.fillRect(0, 0, B.width, B.height);
      var w = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 },
        g = this;
      return A()
        .then(
          function (L) {
            return L.fromString(p, e, w);
          },
          function () {
            return Promise.reject(new Error("Could not load canvg."));
          },
        )
        .then(function (L) {
          return L.render(w);
        })
        .then(function () {
          g.addImage(B.toDataURL("image/jpeg", 1), r, n, i, s, u, h);
        });
    };
  })(),
  (jA.API.putTotalPages = function (t) {
    var A,
      e = 0;
    parseInt(this.internal.getFont().id.substr(1), 10) < 15
      ? ((A = new RegExp(t, "g")), (e = this.internal.getNumberOfPages()))
      : ((A = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g")),
        (e = this.pdfEscape16(
          this.internal.getNumberOfPages() + "",
          this.internal.getFont(),
        )));
    for (var r = 1; r <= this.internal.getNumberOfPages(); r++)
      for (var n = 0; n < this.internal.pages[r].length; n++)
        this.internal.pages[r][n] = this.internal.pages[r][n].replace(A, e);
    return this;
  }),
  (jA.API.viewerPreferences = function (t, A) {
    var e;
    (t = t || {}), (A = A || !1);
    var r,
      n,
      i,
      s = {
        HideToolbar: {
          defaultValue: !1,
          value: !1,
          type: "boolean",
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3,
        },
        HideMenubar: {
          defaultValue: !1,
          value: !1,
          type: "boolean",
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3,
        },
        HideWindowUI: {
          defaultValue: !1,
          value: !1,
          type: "boolean",
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3,
        },
        FitWindow: {
          defaultValue: !1,
          value: !1,
          type: "boolean",
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3,
        },
        CenterWindow: {
          defaultValue: !1,
          value: !1,
          type: "boolean",
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.3,
        },
        DisplayDocTitle: {
          defaultValue: !1,
          value: !1,
          type: "boolean",
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.4,
        },
        NonFullScreenPageMode: {
          defaultValue: "UseNone",
          value: "UseNone",
          type: "name",
          explicitSet: !1,
          valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
          pdfVersion: 1.3,
        },
        Direction: {
          defaultValue: "L2R",
          value: "L2R",
          type: "name",
          explicitSet: !1,
          valueSet: ["L2R", "R2L"],
          pdfVersion: 1.3,
        },
        ViewArea: {
          defaultValue: "CropBox",
          value: "CropBox",
          type: "name",
          explicitSet: !1,
          valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
          pdfVersion: 1.4,
        },
        ViewClip: {
          defaultValue: "CropBox",
          value: "CropBox",
          type: "name",
          explicitSet: !1,
          valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
          pdfVersion: 1.4,
        },
        PrintArea: {
          defaultValue: "CropBox",
          value: "CropBox",
          type: "name",
          explicitSet: !1,
          valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
          pdfVersion: 1.4,
        },
        PrintClip: {
          defaultValue: "CropBox",
          value: "CropBox",
          type: "name",
          explicitSet: !1,
          valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
          pdfVersion: 1.4,
        },
        PrintScaling: {
          defaultValue: "AppDefault",
          value: "AppDefault",
          type: "name",
          explicitSet: !1,
          valueSet: ["AppDefault", "None"],
          pdfVersion: 1.6,
        },
        Duplex: {
          defaultValue: "",
          value: "none",
          type: "name",
          explicitSet: !1,
          valueSet: [
            "Simplex",
            "DuplexFlipShortEdge",
            "DuplexFlipLongEdge",
            "none",
          ],
          pdfVersion: 1.7,
        },
        PickTrayByPDFSize: {
          defaultValue: !1,
          value: !1,
          type: "boolean",
          explicitSet: !1,
          valueSet: [!0, !1],
          pdfVersion: 1.7,
        },
        PrintPageRange: {
          defaultValue: "",
          value: "",
          type: "array",
          explicitSet: !1,
          valueSet: null,
          pdfVersion: 1.7,
        },
        NumCopies: {
          defaultValue: 1,
          value: 1,
          type: "integer",
          explicitSet: !1,
          valueSet: null,
          pdfVersion: 1.7,
        },
      },
      c = Object.keys(s),
      u = [],
      h = 0,
      B = 0,
      p = 0;
    function w(L, y) {
      var N,
        F = !1;
      for (N = 0; N < L.length; N += 1) L[N] === y && (F = !0);
      return F;
    }
    if (
      (this.internal.viewerpreferences === void 0 &&
        ((this.internal.viewerpreferences = {}),
        (this.internal.viewerpreferences.configuration = JSON.parse(
          JSON.stringify(s),
        )),
        (this.internal.viewerpreferences.isSubscribed = !1)),
      (e = this.internal.viewerpreferences.configuration),
      t === "reset" || A === !0)
    ) {
      var g = c.length;
      for (p = 0; p < g; p += 1)
        (e[c[p]].value = e[c[p]].defaultValue), (e[c[p]].explicitSet = !1);
    }
    if (Qe(t) === "object") {
      for (n in t)
        if (((i = t[n]), w(c, n) && i !== void 0)) {
          if (e[n].type === "boolean" && typeof i == "boolean") e[n].value = i;
          else if (e[n].type === "name" && w(e[n].valueSet, i)) e[n].value = i;
          else if (e[n].type === "integer" && Number.isInteger(i))
            e[n].value = i;
          else if (e[n].type === "array") {
            for (h = 0; h < i.length; h += 1)
              if (((r = !0), i[h].length === 1 && typeof i[h][0] == "number"))
                u.push(String(i[h] - 1));
              else if (i[h].length > 1) {
                for (B = 0; B < i[h].length; B += 1)
                  typeof i[h][B] != "number" && (r = !1);
                r === !0 && u.push([i[h][0] - 1, i[h][1] - 1].join(" "));
              }
            e[n].value = "[" + u.join(" ") + "]";
          } else e[n].value = e[n].defaultValue;
          e[n].explicitSet = !0;
        }
    }
    return (
      this.internal.viewerpreferences.isSubscribed === !1 &&
        (this.internal.events.subscribe("putCatalog", function () {
          var L,
            y = [];
          for (L in e)
            e[L].explicitSet === !0 &&
              (e[L].type === "name"
                ? y.push("/" + L + " /" + e[L].value)
                : y.push("/" + L + " " + e[L].value));
          y.length !== 0 &&
            this.internal.write(
              `/ViewerPreferences
<<
` +
                y.join(`
`) +
                `
>>`,
            );
        }),
        (this.internal.viewerpreferences.isSubscribed = !0)),
      (this.internal.viewerpreferences.configuration = e),
      this
    );
  }),
  (function (t) {
    var A = function () {
        var r =
            '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' +
            this.internal.__metadata__.namespaceuri +
            '"><jspdf:metadata>',
          n = unescape(
            encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">'),
          ),
          i = unescape(encodeURIComponent(r)),
          s = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
          c = unescape(
            encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>"),
          ),
          u = unescape(encodeURIComponent("</x:xmpmeta>")),
          h = i.length + s.length + c.length + n.length + u.length;
        (this.internal.__metadata__.metadata_object_number =
          this.internal.newObject()),
          this.internal.write(
            "<< /Type /Metadata /Subtype /XML /Length " + h + " >>",
          ),
          this.internal.write("stream"),
          this.internal.write(n + i + s + c + u),
          this.internal.write("endstream"),
          this.internal.write("endobj");
      },
      e = function () {
        this.internal.__metadata__.metadata_object_number &&
          this.internal.write(
            "/Metadata " +
              this.internal.__metadata__.metadata_object_number +
              " 0 R",
          );
      };
    t.addMetadata = function (r, n) {
      return (
        this.internal.__metadata__ === void 0 &&
          ((this.internal.__metadata__ = {
            metadata: r,
            namespaceuri: n || "http://jspdf.default.namespaceuri/",
          }),
          this.internal.events.subscribe("putCatalog", e),
          this.internal.events.subscribe("postPutResources", A)),
        this
      );
    };
  })(jA.API),
  (function (t) {
    var A = t.API,
      e = (A.pdfEscape16 = function (i, s) {
        for (
          var c,
            u = s.metadata.Unicode.widths,
            h = ["", "0", "00", "000", "0000"],
            B = [""],
            p = 0,
            w = i.length;
          p < w;
          ++p
        ) {
          if (
            ((c = s.metadata.characterToGlyph(i.charCodeAt(p))),
            s.metadata.glyIdsUsed.push(c),
            (s.metadata.toUnicode[c] = i.charCodeAt(p)),
            u.indexOf(c) == -1 &&
              (u.push(c), u.push([parseInt(s.metadata.widthOfGlyph(c), 10)])),
            c == "0")
          )
            return B.join("");
          (c = c.toString(16)), B.push(h[4 - c.length], c);
        }
        return B.join("");
      }),
      r = function (i) {
        var s, c, u, h, B, p, w;
        for (
          B = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`,
            u = [],
            p = 0,
            w = (c = Object.keys(i).sort(function (g, L) {
              return g - L;
            })).length;
          p < w;
          p++
        )
          (s = c[p]),
            u.length >= 100 &&
              ((B +=
                `
` +
                u.length +
                ` beginbfchar
` +
                u.join(`
`) +
                `
endbfchar`),
              (u = [])),
            i[s] !== void 0 &&
              i[s] !== null &&
              typeof i[s].toString == "function" &&
              ((h = ("0000" + i[s].toString(16)).slice(-4)),
              (s = ("0000" + (+s).toString(16)).slice(-4)),
              u.push("<" + s + "><" + h + ">"));
        return (
          u.length &&
            (B +=
              `
` +
              u.length +
              ` beginbfchar
` +
              u.join(`
`) +
              `
endbfchar
`),
          (B += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`)
        );
      };
    A.events.push([
      "putFont",
      function (i) {
        (function (s) {
          var c = s.font,
            u = s.out,
            h = s.newObject,
            B = s.putStream;
          if (
            c.metadata instanceof t.API.TTFFont &&
            c.encoding === "Identity-H"
          ) {
            for (
              var p = c.metadata.Unicode.widths,
                w = c.metadata.subset.encode(c.metadata.glyIdsUsed, 1),
                g = "",
                L = 0;
              L < w.length;
              L++
            )
              g += String.fromCharCode(w[L]);
            var y = h();
            B({ data: g, addLength1: !0, objectId: y }), u("endobj");
            var N = h();
            B({ data: r(c.metadata.toUnicode), addLength1: !0, objectId: N }),
              u("endobj");
            var F = h();
            u("<<"),
              u("/Type /FontDescriptor"),
              u("/FontName /" + Li(c.fontName)),
              u("/FontFile2 " + y + " 0 R"),
              u("/FontBBox " + t.API.PDFObject.convert(c.metadata.bbox)),
              u("/Flags " + c.metadata.flags),
              u("/StemV " + c.metadata.stemV),
              u("/ItalicAngle " + c.metadata.italicAngle),
              u("/Ascent " + c.metadata.ascender),
              u("/Descent " + c.metadata.decender),
              u("/CapHeight " + c.metadata.capHeight),
              u(">>"),
              u("endobj");
            var I = h();
            u("<<"),
              u("/Type /Font"),
              u("/BaseFont /" + Li(c.fontName)),
              u("/FontDescriptor " + F + " 0 R"),
              u("/W " + t.API.PDFObject.convert(p)),
              u("/CIDToGIDMap /Identity"),
              u("/DW 1000"),
              u("/Subtype /CIDFontType2"),
              u("/CIDSystemInfo"),
              u("<<"),
              u("/Supplement 0"),
              u("/Registry (Adobe)"),
              u("/Ordering (" + c.encoding + ")"),
              u(">>"),
              u(">>"),
              u("endobj"),
              (c.objectNumber = h()),
              u("<<"),
              u("/Type /Font"),
              u("/Subtype /Type0"),
              u("/ToUnicode " + N + " 0 R"),
              u("/BaseFont /" + Li(c.fontName)),
              u("/Encoding /" + c.encoding),
              u("/DescendantFonts [" + I + " 0 R]"),
              u(">>"),
              u("endobj"),
              (c.isAlreadyPutted = !0);
          }
        })(i);
      },
    ]),
      A.events.push([
        "putFont",
        function (i) {
          (function (s) {
            var c = s.font,
              u = s.out,
              h = s.newObject,
              B = s.putStream;
            if (
              c.metadata instanceof t.API.TTFFont &&
              c.encoding === "WinAnsiEncoding"
            ) {
              for (var p = c.metadata.rawData, w = "", g = 0; g < p.length; g++)
                w += String.fromCharCode(p[g]);
              var L = h();
              B({ data: w, addLength1: !0, objectId: L }), u("endobj");
              var y = h();
              B({ data: r(c.metadata.toUnicode), addLength1: !0, objectId: y }),
                u("endobj");
              var N = h();
              u("<<"),
                u("/Descent " + c.metadata.decender),
                u("/CapHeight " + c.metadata.capHeight),
                u("/StemV " + c.metadata.stemV),
                u("/Type /FontDescriptor"),
                u("/FontFile2 " + L + " 0 R"),
                u("/Flags 96"),
                u("/FontBBox " + t.API.PDFObject.convert(c.metadata.bbox)),
                u("/FontName /" + Li(c.fontName)),
                u("/ItalicAngle " + c.metadata.italicAngle),
                u("/Ascent " + c.metadata.ascender),
                u(">>"),
                u("endobj"),
                (c.objectNumber = h());
              for (var F = 0; F < c.metadata.hmtx.widths.length; F++)
                c.metadata.hmtx.widths[F] = parseInt(
                  c.metadata.hmtx.widths[F] *
                    (1e3 / c.metadata.head.unitsPerEm),
                );
              u(
                "<</Subtype/TrueType/Type/Font/ToUnicode " +
                  y +
                  " 0 R/BaseFont/" +
                  Li(c.fontName) +
                  "/FontDescriptor " +
                  N +
                  " 0 R/Encoding/" +
                  c.encoding +
                  " /FirstChar 29 /LastChar 255 /Widths " +
                  t.API.PDFObject.convert(c.metadata.hmtx.widths) +
                  ">>",
              ),
                u("endobj"),
                (c.isAlreadyPutted = !0);
            }
          })(i);
        },
      ]);
    var n = function (i) {
      var s,
        c = i.text || "",
        u = i.x,
        h = i.y,
        B = i.options || {},
        p = i.mutex || {},
        w = p.pdfEscape,
        g = p.activeFontKey,
        L = p.fonts,
        y = g,
        N = "",
        F = 0,
        I = "",
        G = L[y].encoding;
      if (L[y].encoding !== "Identity-H")
        return { text: c, x: u, y: h, options: B, mutex: p };
      for (
        I = c, y = g, Array.isArray(c) && (I = c[0]), F = 0;
        F < I.length;
        F += 1
      )
        L[y].metadata.hasOwnProperty("cmap") &&
          (s = L[y].metadata.cmap.unicode.codeMap[I[F].charCodeAt(0)]),
          s ||
          (I[F].charCodeAt(0) < 256 && L[y].metadata.hasOwnProperty("Unicode"))
            ? (N += I[F])
            : (N += "");
      var Y = "";
      return (
        parseInt(y.slice(1)) < 14 || G === "WinAnsiEncoding"
          ? (Y = w(N, y)
              .split("")
              .map(function (Z) {
                return Z.charCodeAt(0).toString(16);
              })
              .join(""))
          : G === "Identity-H" && (Y = e(N, L[y])),
        (p.isHex = !0),
        { text: Y, x: u, y: h, options: B, mutex: p }
      );
    };
    A.events.push([
      "postProcessText",
      function (i) {
        var s = i.text || "",
          c = [],
          u = { text: s, x: i.x, y: i.y, options: i.options, mutex: i.mutex };
        if (Array.isArray(s)) {
          var h = 0;
          for (h = 0; h < s.length; h += 1)
            Array.isArray(s[h]) && s[h].length === 3
              ? c.push([
                  n(Object.assign({}, u, { text: s[h][0] })).text,
                  s[h][1],
                  s[h][2],
                ])
              : c.push(n(Object.assign({}, u, { text: s[h] })).text);
          i.text = c;
        } else i.text = n(Object.assign({}, u, { text: s })).text;
      },
    ]);
  })(jA),
  (function (t) {
    var A = function () {
      return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
    };
    (t.existsFileInVFS = function (e) {
      return A.call(this), this.internal.vFS[e] !== void 0;
    }),
      (t.addFileToVFS = function (e, r) {
        return A.call(this), (this.internal.vFS[e] = r), this;
      }),
      (t.getFileFromVFS = function (e) {
        return (
          A.call(this),
          this.internal.vFS[e] !== void 0 ? this.internal.vFS[e] : null
        );
      });
  })(jA.API),
  (function (t) {
    t.__bidiEngine__ = t.prototype.__bidiEngine__ = function (r) {
      var n,
        i,
        s,
        c,
        u,
        h,
        B,
        p = A,
        w = [
          [0, 3, 0, 1, 0, 0, 0],
          [0, 3, 0, 1, 2, 2, 0],
          [0, 3, 0, 17, 2, 0, 1],
          [0, 3, 5, 5, 4, 1, 0],
          [0, 3, 21, 21, 4, 0, 1],
          [0, 3, 5, 5, 4, 2, 0],
        ],
        g = [
          [2, 0, 1, 1, 0, 1, 0],
          [2, 0, 1, 1, 0, 2, 0],
          [2, 0, 2, 1, 3, 2, 0],
          [2, 0, 2, 33, 3, 1, 1],
        ],
        L = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 },
        y = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 },
        N = [
          "(",
          ")",
          "(",
          "<",
          ">",
          "<",
          "[",
          "]",
          "[",
          "{",
          "}",
          "{",
          "«",
          "»",
          "«",
          "‹",
          "›",
          "‹",
          "⁅",
          "⁆",
          "⁅",
          "⁽",
          "⁾",
          "⁽",
          "₍",
          "₎",
          "₍",
          "≤",
          "≥",
          "≤",
          "〈",
          "〉",
          "〈",
          "﹙",
          "﹚",
          "﹙",
          "﹛",
          "﹜",
          "﹛",
          "﹝",
          "﹞",
          "﹝",
          "﹤",
          "﹥",
          "﹤",
        ],
        F = new RegExp(
          /^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/,
        ),
        I = !1,
        G = 0;
      this.__bidiEngine__ = {};
      var Y = function (S) {
          var x = S.charCodeAt(),
            K = x >> 8,
            P = y[K];
          return P !== void 0
            ? p[256 * P + (255 & x)]
            : K === 252 || K === 253
              ? "AL"
              : F.test(K)
                ? "L"
                : K === 8
                  ? "R"
                  : "N";
        },
        Z = function (S) {
          for (var x, K = 0; K < S.length; K++) {
            if ((x = Y(S.charAt(K))) === "L") return !1;
            if (x === "R") return !0;
          }
          return !1;
        },
        z = function (S, x, K, P) {
          var sA,
            nA,
            cA,
            eA,
            hA = x[P];
          switch (hA) {
            case "L":
            case "R":
              I = !1;
              break;
            case "N":
            case "AN":
              break;
            case "EN":
              I && (hA = "AN");
              break;
            case "AL":
              (I = !0), (hA = "R");
              break;
            case "WS":
              hA = "N";
              break;
            case "CS":
              P < 1 ||
              P + 1 >= x.length ||
              ((sA = K[P - 1]) !== "EN" && sA !== "AN") ||
              ((nA = x[P + 1]) !== "EN" && nA !== "AN")
                ? (hA = "N")
                : I && (nA = "AN"),
                (hA = nA === sA ? nA : "N");
              break;
            case "ES":
              hA =
                (sA = P > 0 ? K[P - 1] : "B") === "EN" &&
                P + 1 < x.length &&
                x[P + 1] === "EN"
                  ? "EN"
                  : "N";
              break;
            case "ET":
              if (P > 0 && K[P - 1] === "EN") {
                hA = "EN";
                break;
              }
              if (I) {
                hA = "N";
                break;
              }
              for (cA = P + 1, eA = x.length; cA < eA && x[cA] === "ET"; ) cA++;
              hA = cA < eA && x[cA] === "EN" ? "EN" : "N";
              break;
            case "NSM":
              if (s && !c) {
                for (eA = x.length, cA = P + 1; cA < eA && x[cA] === "NSM"; )
                  cA++;
                if (cA < eA) {
                  var fA = S[P],
                    UA = (fA >= 1425 && fA <= 2303) || fA === 64286;
                  if (((sA = x[cA]), UA && (sA === "R" || sA === "AL"))) {
                    hA = "R";
                    break;
                  }
                }
              }
              hA = P < 1 || (sA = x[P - 1]) === "B" ? "N" : K[P - 1];
              break;
            case "B":
              (I = !1), (n = !0), (hA = G);
              break;
            case "S":
              (i = !0), (hA = "N");
              break;
            case "LRE":
            case "RLE":
            case "LRO":
            case "RLO":
            case "PDF":
              I = !1;
              break;
            case "BN":
              hA = "N";
          }
          return hA;
        },
        W = function (S, x, K) {
          var P = S.split("");
          return (
            K && T(P, K, { hiLevel: G }),
            P.reverse(),
            x && x.reverse(),
            P.join("")
          );
        },
        T = function (S, x, K) {
          var P,
            sA,
            nA,
            cA,
            eA,
            hA = -1,
            fA = S.length,
            UA = 0,
            Q = [],
            _ = G ? g : w,
            O = [];
          for (I = !1, n = !1, i = !1, sA = 0; sA < fA; sA++) O[sA] = Y(S[sA]);
          for (nA = 0; nA < fA; nA++) {
            if (
              ((eA = UA),
              (Q[nA] = z(S, O, Q, nA)),
              (P = 240 & (UA = _[eA][L[Q[nA]]])),
              (UA &= 15),
              (x[nA] = cA = _[UA][5]),
              P > 0)
            )
              if (P === 16) {
                for (sA = hA; sA < nA; sA++) x[sA] = 1;
                hA = -1;
              } else hA = -1;
            if (_[UA][6]) hA === -1 && (hA = nA);
            else if (hA > -1) {
              for (sA = hA; sA < nA; sA++) x[sA] = cA;
              hA = -1;
            }
            O[nA] === "B" && (x[nA] = 0), (K.hiLevel |= cA);
          }
          i &&
            (function (R, X, iA) {
              for (var aA = 0; aA < iA; aA++)
                if (R[aA] === "S") {
                  X[aA] = G;
                  for (var oA = aA - 1; oA >= 0 && R[oA] === "WS"; oA--)
                    X[oA] = G;
                }
            })(O, x, fA);
        },
        AA = function (S, x, K, P, sA) {
          if (!(sA.hiLevel < S)) {
            if (S === 1 && G === 1 && !n)
              return x.reverse(), void (K && K.reverse());
            for (var nA, cA, eA, hA, fA = x.length, UA = 0; UA < fA; ) {
              if (P[UA] >= S) {
                for (eA = UA + 1; eA < fA && P[eA] >= S; ) eA++;
                for (hA = UA, cA = eA - 1; hA < cA; hA++, cA--)
                  (nA = x[hA]),
                    (x[hA] = x[cA]),
                    (x[cA] = nA),
                    K && ((nA = K[hA]), (K[hA] = K[cA]), (K[cA] = nA));
                UA = eA;
              }
              UA++;
            }
          }
        },
        uA = function (S, x, K) {
          var P = S.split(""),
            sA = { hiLevel: G };
          return (
            K || (K = []),
            T(P, K, sA),
            (function (nA, cA, eA) {
              if (eA.hiLevel !== 0 && B)
                for (var hA, fA = 0; fA < nA.length; fA++)
                  cA[fA] === 1 &&
                    (hA = N.indexOf(nA[fA])) >= 0 &&
                    (nA[fA] = N[hA + 1]);
            })(P, K, sA),
            AA(2, P, x, K, sA),
            AA(1, P, x, K, sA),
            P.join("")
          );
        };
      return (
        (this.__bidiEngine__.doBidiReorder = function (S, x, K) {
          if (
            ((function (sA, nA) {
              if (nA) for (var cA = 0; cA < sA.length; cA++) nA[cA] = cA;
              c === void 0 && (c = Z(sA)), h === void 0 && (h = Z(sA));
            })(S, x),
            s || !u || h)
          )
            if (s && u && c ^ h) (G = c ? 1 : 0), (S = W(S, x, K));
            else if (!s && u && h)
              (G = c ? 1 : 0), (S = uA(S, x, K)), (S = W(S, x));
            else if (!s || c || u || h) {
              if (s && !u && c ^ h)
                (S = W(S, x)),
                  c
                    ? ((G = 0), (S = uA(S, x, K)))
                    : ((G = 1), (S = uA(S, x, K)), (S = W(S, x)));
              else if (s && c && !u && h)
                (G = 1), (S = uA(S, x, K)), (S = W(S, x));
              else if (!s && !u && c ^ h) {
                var P = B;
                c
                  ? ((G = 1),
                    (S = uA(S, x, K)),
                    (G = 0),
                    (B = !1),
                    (S = uA(S, x, K)),
                    (B = P))
                  : ((G = 0),
                    (S = uA(S, x, K)),
                    (S = W(S, x)),
                    (G = 1),
                    (B = !1),
                    (S = uA(S, x, K)),
                    (B = P),
                    (S = W(S, x)));
              }
            } else (G = 0), (S = uA(S, x, K));
          else (G = c ? 1 : 0), (S = uA(S, x, K));
          return S;
        }),
        (this.__bidiEngine__.setOptions = function (S) {
          S &&
            ((s = S.isInputVisual),
            (u = S.isOutputVisual),
            (c = S.isInputRtl),
            (h = S.isOutputRtl),
            (B = S.isSymmetricSwapping));
        }),
        this.__bidiEngine__.setOptions(r),
        this.__bidiEngine__
      );
    };
    var A = [
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "S",
        "B",
        "S",
        "WS",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "B",
        "B",
        "S",
        "WS",
        "N",
        "N",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ES",
        "CS",
        "ES",
        "CS",
        "CS",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "CS",
        "N",
        "ET",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "L",
        "N",
        "N",
        "BN",
        "N",
        "N",
        "ET",
        "ET",
        "EN",
        "EN",
        "N",
        "L",
        "N",
        "N",
        "N",
        "EN",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ET",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "R",
        "NSM",
        "R",
        "NSM",
        "NSM",
        "R",
        "NSM",
        "NSM",
        "R",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "N",
        "N",
        "AL",
        "ET",
        "ET",
        "AL",
        "CS",
        "AL",
        "N",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "ET",
        "AN",
        "AN",
        "AL",
        "AL",
        "AL",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AN",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "AL",
        "AL",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "R",
        "R",
        "N",
        "N",
        "N",
        "N",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "BN",
        "BN",
        "BN",
        "L",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "WS",
        "B",
        "LRE",
        "RLE",
        "PDF",
        "LRO",
        "RLO",
        "CS",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "WS",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "N",
        "LRI",
        "RLI",
        "FSI",
        "PDI",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "EN",
        "L",
        "N",
        "N",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "ES",
        "ES",
        "N",
        "N",
        "N",
        "L",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "ES",
        "ES",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "NSM",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "ES",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "R",
        "N",
        "R",
        "R",
        "N",
        "R",
        "R",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "CS",
        "N",
        "CS",
        "N",
        "N",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ET",
        "N",
        "N",
        "ES",
        "ES",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "N",
        "BN",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ES",
        "CS",
        "ES",
        "CS",
        "CS",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
      ],
      e = new t.__bidiEngine__({ isInputVisual: !0 });
    t.API.events.push([
      "postProcessText",
      function (r) {
        var n = r.text,
          i = (r.x, r.y, r.options || {}),
          s = (r.mutex, i.lang, []);
        if (
          ((i.isInputVisual =
            typeof i.isInputVisual != "boolean" || i.isInputVisual),
          e.setOptions(i),
          Object.prototype.toString.call(n) === "[object Array]")
        ) {
          var c = 0;
          for (s = [], c = 0; c < n.length; c += 1)
            Object.prototype.toString.call(n[c]) === "[object Array]"
              ? s.push([e.doBidiReorder(n[c][0]), n[c][1], n[c][2]])
              : s.push([e.doBidiReorder(n[c])]);
          r.text = s;
        } else r.text = e.doBidiReorder(n);
        e.setOptions({ isInputVisual: !0 });
      },
    ]);
  })(jA),
  (jA.API.TTFFont = (function () {
    function t(A) {
      var e;
      if (
        ((this.rawData = A),
        (e = this.contents = new Cn(A)),
        (this.contents.pos = 4),
        e.readString(4) === "ttcf")
      )
        throw new Error("TTCF not supported.");
      (e.pos = 0),
        this.parse(),
        (this.subset = new $5(this)),
        this.registerTTF();
    }
    return (
      (t.open = function (A) {
        return new t(A);
      }),
      (t.prototype.parse = function () {
        return (
          (this.directory = new M5(this.contents)),
          (this.head = new k5(this)),
          (this.name = new q5(this)),
          (this.cmap = new b0(this)),
          (this.toUnicode = {}),
          (this.hhea = new R5(this)),
          (this.maxp = new W5(this)),
          (this.hmtx = new X5(this)),
          (this.post = new j5(this)),
          (this.os2 = new G5(this)),
          (this.loca = new Z5(this)),
          (this.glyf = new J5(this)),
          (this.ascender =
            (this.os2.exists && this.os2.ascender) || this.hhea.ascender),
          (this.decender =
            (this.os2.exists && this.os2.decender) || this.hhea.decender),
          (this.lineGap =
            (this.os2.exists && this.os2.lineGap) || this.hhea.lineGap),
          (this.bbox = [
            this.head.xMin,
            this.head.yMin,
            this.head.xMax,
            this.head.yMax,
          ])
        );
      }),
      (t.prototype.registerTTF = function () {
        var A, e, r, n, i;
        if (
          ((this.scaleFactor = 1e3 / this.head.unitsPerEm),
          (this.bbox = function () {
            var s, c, u, h;
            for (h = [], s = 0, c = (u = this.bbox).length; s < c; s++)
              (A = u[s]), h.push(Math.round(A * this.scaleFactor));
            return h;
          }.call(this)),
          (this.stemV = 0),
          this.post.exists
            ? ((r = 255 & (n = this.post.italic_angle)),
              32768 & (e = n >> 16) && (e = -(1 + (65535 ^ e))),
              (this.italicAngle = +(e + "." + r)))
            : (this.italicAngle = 0),
          (this.ascender = Math.round(this.ascender * this.scaleFactor)),
          (this.decender = Math.round(this.decender * this.scaleFactor)),
          (this.lineGap = Math.round(this.lineGap * this.scaleFactor)),
          (this.capHeight =
            (this.os2.exists && this.os2.capHeight) || this.ascender),
          (this.xHeight = (this.os2.exists && this.os2.xHeight) || 0),
          (this.familyClass =
            ((this.os2.exists && this.os2.familyClass) || 0) >> 8),
          (this.isSerif =
            (i = this.familyClass) === 1 ||
            i === 2 ||
            i === 3 ||
            i === 4 ||
            i === 5 ||
            i === 7),
          (this.isScript = this.familyClass === 10),
          (this.flags = 0),
          this.post.isFixedPitch && (this.flags |= 1),
          this.isSerif && (this.flags |= 2),
          this.isScript && (this.flags |= 8),
          this.italicAngle !== 0 && (this.flags |= 64),
          (this.flags |= 32),
          !this.cmap.unicode)
        )
          throw new Error("No unicode cmap for font");
      }),
      (t.prototype.characterToGlyph = function (A) {
        var e;
        return ((e = this.cmap.unicode) != null ? e.codeMap[A] : void 0) || 0;
      }),
      (t.prototype.widthOfGlyph = function (A) {
        var e;
        return (
          (e = 1e3 / this.head.unitsPerEm), this.hmtx.forGlyph(A).advance * e
        );
      }),
      (t.prototype.widthOfString = function (A, e, r) {
        var n, i, s, c;
        for (
          s = 0, i = 0, c = (A = "" + A).length;
          0 <= c ? i < c : i > c;
          i = 0 <= c ? ++i : --i
        )
          (n = A.charCodeAt(i)),
            (s +=
              this.widthOfGlyph(this.characterToGlyph(n)) + r * (1e3 / e) || 0);
        return s * (e / 1e3);
      }),
      (t.prototype.lineHeight = function (A, e) {
        var r;
        return (
          e == null && (e = !1),
          (r = e ? this.lineGap : 0),
          ((this.ascender + r - this.decender) / 1e3) * A
        );
      }),
      t
    );
  })());
var ur,
  Cn = (function () {
    function t(A) {
      (this.data = A ?? []), (this.pos = 0), (this.length = this.data.length);
    }
    return (
      (t.prototype.readByte = function () {
        return this.data[this.pos++];
      }),
      (t.prototype.writeByte = function (A) {
        return (this.data[this.pos++] = A);
      }),
      (t.prototype.readUInt32 = function () {
        return (
          16777216 * this.readByte() +
          (this.readByte() << 16) +
          (this.readByte() << 8) +
          this.readByte()
        );
      }),
      (t.prototype.writeUInt32 = function (A) {
        return (
          this.writeByte((A >>> 24) & 255),
          this.writeByte((A >> 16) & 255),
          this.writeByte((A >> 8) & 255),
          this.writeByte(255 & A)
        );
      }),
      (t.prototype.readInt32 = function () {
        var A;
        return (A = this.readUInt32()) >= 2147483648 ? A - 4294967296 : A;
      }),
      (t.prototype.writeInt32 = function (A) {
        return A < 0 && (A += 4294967296), this.writeUInt32(A);
      }),
      (t.prototype.readUInt16 = function () {
        return (this.readByte() << 8) | this.readByte();
      }),
      (t.prototype.writeUInt16 = function (A) {
        return this.writeByte((A >> 8) & 255), this.writeByte(255 & A);
      }),
      (t.prototype.readInt16 = function () {
        var A;
        return (A = this.readUInt16()) >= 32768 ? A - 65536 : A;
      }),
      (t.prototype.writeInt16 = function (A) {
        return A < 0 && (A += 65536), this.writeUInt16(A);
      }),
      (t.prototype.readString = function (A) {
        var e, r;
        for (r = [], e = 0; 0 <= A ? e < A : e > A; e = 0 <= A ? ++e : --e)
          r[e] = String.fromCharCode(this.readByte());
        return r.join("");
      }),
      (t.prototype.writeString = function (A) {
        var e, r, n;
        for (
          n = [], e = 0, r = A.length;
          0 <= r ? e < r : e > r;
          e = 0 <= r ? ++e : --e
        )
          n.push(this.writeByte(A.charCodeAt(e)));
        return n;
      }),
      (t.prototype.readShort = function () {
        return this.readInt16();
      }),
      (t.prototype.writeShort = function (A) {
        return this.writeInt16(A);
      }),
      (t.prototype.readLongLong = function () {
        var A, e, r, n, i, s, c, u;
        return (
          (A = this.readByte()),
          (e = this.readByte()),
          (r = this.readByte()),
          (n = this.readByte()),
          (i = this.readByte()),
          (s = this.readByte()),
          (c = this.readByte()),
          (u = this.readByte()),
          128 & A
            ? -1 *
              (72057594037927940 * (255 ^ A) +
                281474976710656 * (255 ^ e) +
                1099511627776 * (255 ^ r) +
                4294967296 * (255 ^ n) +
                16777216 * (255 ^ i) +
                65536 * (255 ^ s) +
                256 * (255 ^ c) +
                (255 ^ u) +
                1)
            : 72057594037927940 * A +
              281474976710656 * e +
              1099511627776 * r +
              4294967296 * n +
              16777216 * i +
              65536 * s +
              256 * c +
              u
        );
      }),
      (t.prototype.writeLongLong = function (A) {
        var e, r;
        return (
          (e = Math.floor(A / 4294967296)),
          (r = 4294967295 & A),
          this.writeByte((e >> 24) & 255),
          this.writeByte((e >> 16) & 255),
          this.writeByte((e >> 8) & 255),
          this.writeByte(255 & e),
          this.writeByte((r >> 24) & 255),
          this.writeByte((r >> 16) & 255),
          this.writeByte((r >> 8) & 255),
          this.writeByte(255 & r)
        );
      }),
      (t.prototype.readInt = function () {
        return this.readInt32();
      }),
      (t.prototype.writeInt = function (A) {
        return this.writeInt32(A);
      }),
      (t.prototype.read = function (A) {
        var e, r;
        for (e = [], r = 0; 0 <= A ? r < A : r > A; r = 0 <= A ? ++r : --r)
          e.push(this.readByte());
        return e;
      }),
      (t.prototype.write = function (A) {
        var e, r, n, i;
        for (i = [], r = 0, n = A.length; r < n; r++)
          (e = A[r]), i.push(this.writeByte(e));
        return i;
      }),
      t
    );
  })(),
  M5 = (function () {
    var t;
    function A(e) {
      var r, n, i;
      for (
        this.scalarType = e.readInt(),
          this.tableCount = e.readShort(),
          this.searchRange = e.readShort(),
          this.entrySelector = e.readShort(),
          this.rangeShift = e.readShort(),
          this.tables = {},
          n = 0,
          i = this.tableCount;
        0 <= i ? n < i : n > i;
        n = 0 <= i ? ++n : --n
      )
        (r = {
          tag: e.readString(4),
          checksum: e.readInt(),
          offset: e.readInt(),
          length: e.readInt(),
        }),
          (this.tables[r.tag] = r);
    }
    return (
      (A.prototype.encode = function (e) {
        var r, n, i, s, c, u, h, B, p, w, g, L, y;
        for (y in ((g = Object.keys(e).length),
        (u = Math.log(2)),
        (p = 16 * Math.floor(Math.log(g) / u)),
        (s = Math.floor(p / u)),
        (B = 16 * g - p),
        (n = new Cn()).writeInt(this.scalarType),
        n.writeShort(g),
        n.writeShort(p),
        n.writeShort(s),
        n.writeShort(B),
        (i = 16 * g),
        (h = n.pos + i),
        (c = null),
        (L = []),
        e))
          for (
            w = e[y],
              n.writeString(y),
              n.writeInt(t(w)),
              n.writeInt(h),
              n.writeInt(w.length),
              L = L.concat(w),
              y === "head" && (c = h),
              h += w.length;
            h % 4;

          )
            L.push(0), h++;
        return (
          n.write(L),
          (r = 2981146554 - t(n.data)),
          (n.pos = c + 8),
          n.writeUInt32(r),
          n.data
        );
      }),
      (t = function (e) {
        var r, n, i, s;
        for (e = L0.call(e); e.length % 4; ) e.push(0);
        for (i = new Cn(e), n = 0, r = 0, s = e.length; r < s; r = r += 4)
          n += i.readUInt32();
        return 4294967295 & n;
      }),
      A
    );
  })(),
  K5 = {}.hasOwnProperty,
  br = function (t, A) {
    for (var e in A) K5.call(A, e) && (t[e] = A[e]);
    function r() {
      this.constructor = t;
    }
    return (
      (r.prototype = A.prototype),
      (t.prototype = new r()),
      (t.__super__ = A.prototype),
      t
    );
  };
ur = (function () {
  function t(A) {
    var e;
    (this.file = A),
      (e = this.file.directory.tables[this.tag]),
      (this.exists = !!e),
      e &&
        ((this.offset = e.offset),
        (this.length = e.length),
        this.parse(this.file.contents));
  }
  return (
    (t.prototype.parse = function () {}),
    (t.prototype.encode = function () {}),
    (t.prototype.raw = function () {
      return this.exists
        ? ((this.file.contents.pos = this.offset),
          this.file.contents.read(this.length))
        : null;
    }),
    t
  );
})();
var k5 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "head"),
      (A.prototype.parse = function (e) {
        return (
          (e.pos = this.offset),
          (this.version = e.readInt()),
          (this.revision = e.readInt()),
          (this.checkSumAdjustment = e.readInt()),
          (this.magicNumber = e.readInt()),
          (this.flags = e.readShort()),
          (this.unitsPerEm = e.readShort()),
          (this.created = e.readLongLong()),
          (this.modified = e.readLongLong()),
          (this.xMin = e.readShort()),
          (this.yMin = e.readShort()),
          (this.xMax = e.readShort()),
          (this.yMax = e.readShort()),
          (this.macStyle = e.readShort()),
          (this.lowestRecPPEM = e.readShort()),
          (this.fontDirectionHint = e.readShort()),
          (this.indexToLocFormat = e.readShort()),
          (this.glyphDataFormat = e.readShort())
        );
      }),
      (A.prototype.encode = function (e) {
        var r;
        return (
          (r = new Cn()).writeInt(this.version),
          r.writeInt(this.revision),
          r.writeInt(this.checkSumAdjustment),
          r.writeInt(this.magicNumber),
          r.writeShort(this.flags),
          r.writeShort(this.unitsPerEm),
          r.writeLongLong(this.created),
          r.writeLongLong(this.modified),
          r.writeShort(this.xMin),
          r.writeShort(this.yMin),
          r.writeShort(this.xMax),
          r.writeShort(this.yMax),
          r.writeShort(this.macStyle),
          r.writeShort(this.lowestRecPPEM),
          r.writeShort(this.fontDirectionHint),
          r.writeShort(e),
          r.writeShort(this.glyphDataFormat),
          r.data
        );
      }),
      A
    );
  })(),
  Ah = (function () {
    function t(A, e) {
      var r, n, i, s, c, u, h, B, p, w, g, L, y, N, F, I, G;
      switch (
        ((this.platformID = A.readUInt16()),
        (this.encodingID = A.readShort()),
        (this.offset = e + A.readInt()),
        (p = A.pos),
        (A.pos = this.offset),
        (this.format = A.readUInt16()),
        (this.length = A.readUInt16()),
        (this.language = A.readUInt16()),
        (this.isUnicode =
          (this.platformID === 3 &&
            this.encodingID === 1 &&
            this.format === 4) ||
          (this.platformID === 0 && this.format === 4)),
        (this.codeMap = {}),
        this.format)
      ) {
        case 0:
          for (u = 0; u < 256; ++u) this.codeMap[u] = A.readByte();
          break;
        case 4:
          for (
            g = A.readUInt16(),
              w = g / 2,
              A.pos += 6,
              i = (function () {
                var Y, Z;
                for (
                  Z = [], u = Y = 0;
                  0 <= w ? Y < w : Y > w;
                  u = 0 <= w ? ++Y : --Y
                )
                  Z.push(A.readUInt16());
                return Z;
              })(),
              A.pos += 2,
              y = (function () {
                var Y, Z;
                for (
                  Z = [], u = Y = 0;
                  0 <= w ? Y < w : Y > w;
                  u = 0 <= w ? ++Y : --Y
                )
                  Z.push(A.readUInt16());
                return Z;
              })(),
              h = (function () {
                var Y, Z;
                for (
                  Z = [], u = Y = 0;
                  0 <= w ? Y < w : Y > w;
                  u = 0 <= w ? ++Y : --Y
                )
                  Z.push(A.readUInt16());
                return Z;
              })(),
              B = (function () {
                var Y, Z;
                for (
                  Z = [], u = Y = 0;
                  0 <= w ? Y < w : Y > w;
                  u = 0 <= w ? ++Y : --Y
                )
                  Z.push(A.readUInt16());
                return Z;
              })(),
              n = (this.length - A.pos + this.offset) / 2,
              c = (function () {
                var Y, Z;
                for (
                  Z = [], u = Y = 0;
                  0 <= n ? Y < n : Y > n;
                  u = 0 <= n ? ++Y : --Y
                )
                  Z.push(A.readUInt16());
                return Z;
              })(),
              u = F = 0,
              G = i.length;
            F < G;
            u = ++F
          )
            for (
              N = i[u], r = I = L = y[u];
              L <= N ? I <= N : I >= N;
              r = L <= N ? ++I : --I
            )
              B[u] === 0
                ? (s = r + h[u])
                : (s = c[B[u] / 2 + (r - L) - (w - u)] || 0) !== 0 &&
                  (s += h[u]),
                (this.codeMap[r] = 65535 & s);
      }
      A.pos = p;
    }
    return (
      (t.encode = function (A, e) {
        var r,
          n,
          i,
          s,
          c,
          u,
          h,
          B,
          p,
          w,
          g,
          L,
          y,
          N,
          F,
          I,
          G,
          Y,
          Z,
          z,
          W,
          T,
          AA,
          uA,
          S,
          x,
          K,
          P,
          sA,
          nA,
          cA,
          eA,
          hA,
          fA,
          UA,
          Q,
          _,
          O,
          R,
          X,
          iA,
          aA,
          oA,
          FA,
          QA,
          HA;
        switch (
          ((P = new Cn()),
          (s = Object.keys(A).sort(function (DA, GA) {
            return DA - GA;
          })),
          e)
        ) {
          case "macroman":
            for (
              y = 0,
                N = (function () {
                  var DA = [];
                  for (L = 0; L < 256; ++L) DA.push(0);
                  return DA;
                })(),
                I = { 0: 0 },
                i = {},
                sA = 0,
                hA = s.length;
              sA < hA;
              sA++
            )
              I[(oA = A[(n = s[sA])])] == null && (I[oA] = ++y),
                (i[n] = { old: A[n], new: I[A[n]] }),
                (N[n] = I[A[n]]);
            return (
              P.writeUInt16(1),
              P.writeUInt16(0),
              P.writeUInt32(12),
              P.writeUInt16(0),
              P.writeUInt16(262),
              P.writeUInt16(0),
              P.write(N),
              { charMap: i, subtable: P.data, maxGlyphID: y + 1 }
            );
          case "unicode":
            for (
              x = [],
                p = [],
                G = 0,
                I = {},
                r = {},
                F = h = null,
                nA = 0,
                fA = s.length;
              nA < fA;
              nA++
            )
              I[(Z = A[(n = s[nA])])] == null && (I[Z] = ++G),
                (r[n] = { old: Z, new: I[Z] }),
                (c = I[Z] - n),
                (F != null && c === h) || (F && p.push(F), x.push(n), (h = c)),
                (F = n);
            for (
              F && p.push(F),
                p.push(65535),
                x.push(65535),
                uA = 2 * (AA = x.length),
                T = 2 * Math.pow(Math.log(AA) / Math.LN2, 2),
                w = Math.log(T / 2) / Math.LN2,
                W = 2 * AA - T,
                u = [],
                z = [],
                g = [],
                L = cA = 0,
                UA = x.length;
              cA < UA;
              L = ++cA
            ) {
              if (((S = x[L]), (B = p[L]), S === 65535)) {
                u.push(0), z.push(0);
                break;
              }
              if (S - (K = r[S].new) >= 32768)
                for (
                  u.push(0), z.push(2 * (g.length + AA - L)), n = eA = S;
                  S <= B ? eA <= B : eA >= B;
                  n = S <= B ? ++eA : --eA
                )
                  g.push(r[n].new);
              else u.push(K - S), z.push(0);
            }
            for (
              P.writeUInt16(3),
                P.writeUInt16(1),
                P.writeUInt32(12),
                P.writeUInt16(4),
                P.writeUInt16(16 + 8 * AA + 2 * g.length),
                P.writeUInt16(0),
                P.writeUInt16(uA),
                P.writeUInt16(T),
                P.writeUInt16(w),
                P.writeUInt16(W),
                iA = 0,
                Q = p.length;
              iA < Q;
              iA++
            )
              (n = p[iA]), P.writeUInt16(n);
            for (P.writeUInt16(0), aA = 0, _ = x.length; aA < _; aA++)
              (n = x[aA]), P.writeUInt16(n);
            for (FA = 0, O = u.length; FA < O; FA++)
              (c = u[FA]), P.writeUInt16(c);
            for (QA = 0, R = z.length; QA < R; QA++)
              (Y = z[QA]), P.writeUInt16(Y);
            for (HA = 0, X = g.length; HA < X; HA++)
              (y = g[HA]), P.writeUInt16(y);
            return { charMap: r, subtable: P.data, maxGlyphID: G + 1 };
        }
      }),
      t
    );
  })(),
  b0 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "cmap"),
      (A.prototype.parse = function (e) {
        var r, n, i;
        for (
          e.pos = this.offset,
            this.version = e.readUInt16(),
            i = e.readUInt16(),
            this.tables = [],
            this.unicode = null,
            n = 0;
          0 <= i ? n < i : n > i;
          n = 0 <= i ? ++n : --n
        )
          (r = new Ah(e, this.offset)),
            this.tables.push(r),
            r.isUnicode && this.unicode == null && (this.unicode = r);
        return !0;
      }),
      (A.encode = function (e, r) {
        var n, i;
        return (
          r == null && (r = "macroman"),
          (n = Ah.encode(e, r)),
          (i = new Cn()).writeUInt16(0),
          i.writeUInt16(1),
          (n.table = i.data.concat(n.subtable)),
          n
        );
      }),
      A
    );
  })(),
  R5 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "hhea"),
      (A.prototype.parse = function (e) {
        return (
          (e.pos = this.offset),
          (this.version = e.readInt()),
          (this.ascender = e.readShort()),
          (this.decender = e.readShort()),
          (this.lineGap = e.readShort()),
          (this.advanceWidthMax = e.readShort()),
          (this.minLeftSideBearing = e.readShort()),
          (this.minRightSideBearing = e.readShort()),
          (this.xMaxExtent = e.readShort()),
          (this.caretSlopeRise = e.readShort()),
          (this.caretSlopeRun = e.readShort()),
          (this.caretOffset = e.readShort()),
          (e.pos += 8),
          (this.metricDataFormat = e.readShort()),
          (this.numberOfMetrics = e.readUInt16())
        );
      }),
      A
    );
  })(),
  G5 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "OS/2"),
      (A.prototype.parse = function (e) {
        if (
          ((e.pos = this.offset),
          (this.version = e.readUInt16()),
          (this.averageCharWidth = e.readShort()),
          (this.weightClass = e.readUInt16()),
          (this.widthClass = e.readUInt16()),
          (this.type = e.readShort()),
          (this.ySubscriptXSize = e.readShort()),
          (this.ySubscriptYSize = e.readShort()),
          (this.ySubscriptXOffset = e.readShort()),
          (this.ySubscriptYOffset = e.readShort()),
          (this.ySuperscriptXSize = e.readShort()),
          (this.ySuperscriptYSize = e.readShort()),
          (this.ySuperscriptXOffset = e.readShort()),
          (this.ySuperscriptYOffset = e.readShort()),
          (this.yStrikeoutSize = e.readShort()),
          (this.yStrikeoutPosition = e.readShort()),
          (this.familyClass = e.readShort()),
          (this.panose = (function () {
            var r, n;
            for (n = [], r = 0; r < 10; ++r) n.push(e.readByte());
            return n;
          })()),
          (this.charRange = (function () {
            var r, n;
            for (n = [], r = 0; r < 4; ++r) n.push(e.readInt());
            return n;
          })()),
          (this.vendorID = e.readString(4)),
          (this.selection = e.readShort()),
          (this.firstCharIndex = e.readShort()),
          (this.lastCharIndex = e.readShort()),
          this.version > 0 &&
            ((this.ascent = e.readShort()),
            (this.descent = e.readShort()),
            (this.lineGap = e.readShort()),
            (this.winAscent = e.readShort()),
            (this.winDescent = e.readShort()),
            (this.codePageRange = (function () {
              var r, n;
              for (n = [], r = 0; r < 2; r = ++r) n.push(e.readInt());
              return n;
            })()),
            this.version > 1))
        )
          return (
            (this.xHeight = e.readShort()),
            (this.capHeight = e.readShort()),
            (this.defaultChar = e.readShort()),
            (this.breakChar = e.readShort()),
            (this.maxContext = e.readShort())
          );
      }),
      A
    );
  })(),
  j5 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "post"),
      (A.prototype.parse = function (e) {
        var r, n, i;
        switch (
          ((e.pos = this.offset),
          (this.format = e.readInt()),
          (this.italicAngle = e.readInt()),
          (this.underlinePosition = e.readShort()),
          (this.underlineThickness = e.readShort()),
          (this.isFixedPitch = e.readInt()),
          (this.minMemType42 = e.readInt()),
          (this.maxMemType42 = e.readInt()),
          (this.minMemType1 = e.readInt()),
          (this.maxMemType1 = e.readInt()),
          this.format)
        ) {
          case 65536:
            break;
          case 131072:
            var s;
            for (
              n = e.readUInt16(), this.glyphNameIndex = [], s = 0;
              0 <= n ? s < n : s > n;
              s = 0 <= n ? ++s : --s
            )
              this.glyphNameIndex.push(e.readUInt16());
            for (this.names = [], i = []; e.pos < this.offset + this.length; )
              (r = e.readByte()), i.push(this.names.push(e.readString(r)));
            return i;
          case 151552:
            return (n = e.readUInt16()), (this.offsets = e.read(n));
          case 196608:
            break;
          case 262144:
            return (this.map = function () {
              var c, u, h;
              for (
                h = [], s = c = 0, u = this.file.maxp.numGlyphs;
                0 <= u ? c < u : c > u;
                s = 0 <= u ? ++c : --c
              )
                h.push(e.readUInt32());
              return h;
            }.call(this));
        }
      }),
      A
    );
  })(),
  V5 = function (t, A) {
    (this.raw = t),
      (this.length = t.length),
      (this.platformID = A.platformID),
      (this.encodingID = A.encodingID),
      (this.languageID = A.languageID);
  },
  q5 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "name"),
      (A.prototype.parse = function (e) {
        var r, n, i, s, c, u, h, B, p, w, g;
        for (
          e.pos = this.offset,
            e.readShort(),
            r = e.readShort(),
            u = e.readShort(),
            n = [],
            s = 0;
          0 <= r ? s < r : s > r;
          s = 0 <= r ? ++s : --s
        )
          n.push({
            platformID: e.readShort(),
            encodingID: e.readShort(),
            languageID: e.readShort(),
            nameID: e.readShort(),
            length: e.readShort(),
            offset: this.offset + u + e.readShort(),
          });
        for (h = {}, s = p = 0, w = n.length; p < w; s = ++p)
          (i = n[s]),
            (e.pos = i.offset),
            (B = e.readString(i.length)),
            (c = new V5(B, i)),
            h[(g = i.nameID)] == null && (h[g] = []),
            h[i.nameID].push(c);
        (this.strings = h),
          (this.copyright = h[0]),
          (this.fontFamily = h[1]),
          (this.fontSubfamily = h[2]),
          (this.uniqueSubfamily = h[3]),
          (this.fontName = h[4]),
          (this.version = h[5]);
        try {
          this.postscriptName = h[6][0].raw.replace(
            /[\x00-\x19\x80-\xff]/g,
            "",
          );
        } catch {
          this.postscriptName = h[4][0].raw.replace(
            /[\x00-\x19\x80-\xff]/g,
            "",
          );
        }
        return (
          (this.trademark = h[7]),
          (this.manufacturer = h[8]),
          (this.designer = h[9]),
          (this.description = h[10]),
          (this.vendorUrl = h[11]),
          (this.designerUrl = h[12]),
          (this.license = h[13]),
          (this.licenseUrl = h[14]),
          (this.preferredFamily = h[15]),
          (this.preferredSubfamily = h[17]),
          (this.compatibleFull = h[18]),
          (this.sampleText = h[19])
        );
      }),
      A
    );
  })(),
  W5 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "maxp"),
      (A.prototype.parse = function (e) {
        return (
          (e.pos = this.offset),
          (this.version = e.readInt()),
          (this.numGlyphs = e.readUInt16()),
          (this.maxPoints = e.readUInt16()),
          (this.maxContours = e.readUInt16()),
          (this.maxCompositePoints = e.readUInt16()),
          (this.maxComponentContours = e.readUInt16()),
          (this.maxZones = e.readUInt16()),
          (this.maxTwilightPoints = e.readUInt16()),
          (this.maxStorage = e.readUInt16()),
          (this.maxFunctionDefs = e.readUInt16()),
          (this.maxInstructionDefs = e.readUInt16()),
          (this.maxStackElements = e.readUInt16()),
          (this.maxSizeOfInstructions = e.readUInt16()),
          (this.maxComponentElements = e.readUInt16()),
          (this.maxComponentDepth = e.readUInt16())
        );
      }),
      A
    );
  })(),
  X5 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "hmtx"),
      (A.prototype.parse = function (e) {
        var r, n, i, s, c, u, h;
        for (
          e.pos = this.offset,
            this.metrics = [],
            r = 0,
            u = this.file.hhea.numberOfMetrics;
          0 <= u ? r < u : r > u;
          r = 0 <= u ? ++r : --r
        )
          this.metrics.push({ advance: e.readUInt16(), lsb: e.readInt16() });
        for (
          i = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
            this.leftSideBearings = (function () {
              var B, p;
              for (
                p = [], r = B = 0;
                0 <= i ? B < i : B > i;
                r = 0 <= i ? ++B : --B
              )
                p.push(e.readInt16());
              return p;
            })(),
            this.widths = function () {
              var B, p, w, g;
              for (g = [], B = 0, p = (w = this.metrics).length; B < p; B++)
                (s = w[B]), g.push(s.advance);
              return g;
            }.call(this),
            n = this.widths[this.widths.length - 1],
            h = [],
            r = c = 0;
          0 <= i ? c < i : c > i;
          r = 0 <= i ? ++c : --c
        )
          h.push(this.widths.push(n));
        return h;
      }),
      (A.prototype.forGlyph = function (e) {
        return e in this.metrics
          ? this.metrics[e]
          : {
              advance: this.metrics[this.metrics.length - 1].advance,
              lsb: this.leftSideBearings[e - this.metrics.length],
            };
      }),
      A
    );
  })(),
  L0 = [].slice,
  J5 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "glyf"),
      (A.prototype.parse = function () {
        return (this.cache = {});
      }),
      (A.prototype.glyphFor = function (e) {
        var r, n, i, s, c, u, h, B, p, w;
        return e in this.cache
          ? this.cache[e]
          : ((s = this.file.loca),
            (r = this.file.contents),
            (n = s.indexOf(e)),
            (i = s.lengthOf(e)) === 0
              ? (this.cache[e] = null)
              : ((r.pos = this.offset + n),
                (c = (u = new Cn(r.read(i))).readShort()),
                (B = u.readShort()),
                (w = u.readShort()),
                (h = u.readShort()),
                (p = u.readShort()),
                (this.cache[e] =
                  c === -1 ? new Y5(u, B, w, h, p) : new z5(u, c, B, w, h, p)),
                this.cache[e]));
      }),
      (A.prototype.encode = function (e, r, n) {
        var i, s, c, u, h;
        for (c = [], s = [], u = 0, h = r.length; u < h; u++)
          (i = e[r[u]]), s.push(c.length), i && (c = c.concat(i.encode(n)));
        return s.push(c.length), { table: c, offsets: s };
      }),
      A
    );
  })(),
  z5 = (function () {
    function t(A, e, r, n, i, s) {
      (this.raw = A),
        (this.numberOfContours = e),
        (this.xMin = r),
        (this.yMin = n),
        (this.xMax = i),
        (this.yMax = s),
        (this.compound = !1);
    }
    return (
      (t.prototype.encode = function () {
        return this.raw.data;
      }),
      t
    );
  })(),
  Y5 = (function () {
    function t(A, e, r, n, i) {
      var s, c;
      for (
        this.raw = A,
          this.xMin = e,
          this.yMin = r,
          this.xMax = n,
          this.yMax = i,
          this.compound = !0,
          this.glyphIDs = [],
          this.glyphOffsets = [],
          s = this.raw;
        (c = s.readShort()),
          this.glyphOffsets.push(s.pos),
          this.glyphIDs.push(s.readUInt16()),
          32 & c;

      )
        (s.pos += 1 & c ? 4 : 2),
          128 & c
            ? (s.pos += 8)
            : 64 & c
              ? (s.pos += 4)
              : 8 & c && (s.pos += 2);
    }
    return (
      (t.prototype.encode = function () {
        var A, e, r;
        for (
          e = new Cn(L0.call(this.raw.data)), A = 0, r = this.glyphIDs.length;
          A < r;
          ++A
        )
          e.pos = this.glyphOffsets[A];
        return e.data;
      }),
      t
    );
  })(),
  Z5 = (function (t) {
    function A() {
      return A.__super__.constructor.apply(this, arguments);
    }
    return (
      br(A, ur),
      (A.prototype.tag = "loca"),
      (A.prototype.parse = function (e) {
        var r, n;
        return (
          (e.pos = this.offset),
          (r = this.file.head.indexToLocFormat),
          (this.offsets =
            r === 0
              ? function () {
                  var i, s;
                  for (s = [], n = 0, i = this.length; n < i; n += 2)
                    s.push(2 * e.readUInt16());
                  return s;
                }.call(this)
              : function () {
                  var i, s;
                  for (s = [], n = 0, i = this.length; n < i; n += 4)
                    s.push(e.readUInt32());
                  return s;
                }.call(this))
        );
      }),
      (A.prototype.indexOf = function (e) {
        return this.offsets[e];
      }),
      (A.prototype.lengthOf = function (e) {
        return this.offsets[e + 1] - this.offsets[e];
      }),
      (A.prototype.encode = function (e, r) {
        for (
          var n = new Uint32Array(this.offsets.length), i = 0, s = 0, c = 0;
          c < n.length;
          ++c
        )
          if (((n[c] = i), s < r.length && r[s] == c)) {
            ++s, (n[c] = i);
            var u = this.offsets[c],
              h = this.offsets[c + 1] - u;
            h > 0 && (i += h);
          }
        for (var B = new Array(4 * n.length), p = 0; p < n.length; ++p)
          (B[4 * p + 3] = 255 & n[p]),
            (B[4 * p + 2] = (65280 & n[p]) >> 8),
            (B[4 * p + 1] = (16711680 & n[p]) >> 16),
            (B[4 * p] = (4278190080 & n[p]) >> 24);
        return B;
      }),
      A
    );
  })(),
  $5 = (function () {
    function t(A) {
      (this.font = A),
        (this.subset = {}),
        (this.unicodes = {}),
        (this.next = 33);
    }
    return (
      (t.prototype.generateCmap = function () {
        var A, e, r, n, i;
        for (e in ((n = this.font.cmap.tables[0].codeMap),
        (A = {}),
        (i = this.subset)))
          (r = i[e]), (A[e] = n[r]);
        return A;
      }),
      (t.prototype.glyphsFor = function (A) {
        var e, r, n, i, s, c, u;
        for (n = {}, s = 0, c = A.length; s < c; s++)
          n[(i = A[s])] = this.font.glyf.glyphFor(i);
        for (i in ((e = []), n))
          (r = n[i]) != null && r.compound && e.push.apply(e, r.glyphIDs);
        if (e.length > 0)
          for (i in (u = this.glyphsFor(e))) (r = u[i]), (n[i] = r);
        return n;
      }),
      (t.prototype.encode = function (A, e) {
        var r, n, i, s, c, u, h, B, p, w, g, L, y, N, F;
        for (n in ((r = b0.encode(this.generateCmap(), "unicode")),
        (s = this.glyphsFor(A)),
        (g = { 0: 0 }),
        (F = r.charMap)))
          g[(u = F[n]).old] = u.new;
        for (L in ((w = r.maxGlyphID), s)) L in g || (g[L] = w++);
        return (
          (B = (function (I) {
            var G, Y;
            for (G in ((Y = {}), I)) Y[I[G]] = G;
            return Y;
          })(g)),
          (p = Object.keys(B).sort(function (I, G) {
            return I - G;
          })),
          (y = (function () {
            var I, G, Y;
            for (Y = [], I = 0, G = p.length; I < G; I++)
              (c = p[I]), Y.push(B[c]);
            return Y;
          })()),
          (i = this.font.glyf.encode(s, y, g)),
          (h = this.font.loca.encode(i.offsets, y)),
          (N = {
            cmap: this.font.cmap.raw(),
            glyf: i.table,
            loca: h,
            hmtx: this.font.hmtx.raw(),
            hhea: this.font.hhea.raw(),
            maxp: this.font.maxp.raw(),
            post: this.font.post.raw(),
            name: this.font.name.raw(),
            head: this.font.head.encode(e),
          }),
          this.font.os2.exists && (N["OS/2"] = this.font.os2.raw()),
          this.font.directory.encode(N)
        );
      }),
      t
    );
  })();
jA.API.PDFObject = (function () {
  var t;
  function A() {}
  return (
    (t = function (e, r) {
      return (Array(r + 1).join("0") + e).slice(-r);
    }),
    (A.convert = function (e) {
      var r, n, i, s;
      if (Array.isArray(e))
        return (
          "[" +
          (function () {
            var c, u, h;
            for (h = [], c = 0, u = e.length; c < u; c++)
              (r = e[c]), h.push(A.convert(r));
            return h;
          })().join(" ") +
          "]"
        );
      if (typeof e == "string") return "/" + e;
      if (e != null && e.isString) return "(" + e + ")";
      if (e instanceof Date)
        return (
          "(D:" +
          t(e.getUTCFullYear(), 4) +
          t(e.getUTCMonth(), 2) +
          t(e.getUTCDate(), 2) +
          t(e.getUTCHours(), 2) +
          t(e.getUTCMinutes(), 2) +
          t(e.getUTCSeconds(), 2) +
          "Z)"
        );
      if ({}.toString.call(e) === "[object Object]") {
        for (n in ((i = ["<<"]), e))
          (s = e[n]), i.push("/" + n + " " + A.convert(s));
        return (
          i.push(">>"),
          i.join(`
`)
        );
      }
      return "" + e;
    }),
    A
  );
})();
const ew = () => {
  var n, i, s;
  const t = hB(),
    A = BB(),
    { invoice: e } = gB((c) => c.invoice);
  ku.useEffect(() => {
    t(dB({ id: e.id }));
  }, []);
  const r = () => {
    const c = document.getElementById("content");
    u0(c, { allowTaint: !0, useCORS: !0 })
      .then(async (u) => {
        const h = u.toDataURL("image/png"),
          B = 210,
          p = (u.height * B) / u.width,
          w = new jA("p", "mm"),
          g = 0;
        w.addImage(h, "PNG", 0, g, B, p), await w.save("Ithnain-Invoice.pdf");
      })
      .catch((u) => console.log(u));
  };
  return ye(pB, {
    children: Mt(wB, {
      size: 520,
      my: 10,
      className: "flex justify-center flex-col items-center",
      children: [
        Mt("div", {
          style: { color: "#042C43" },
          id: "content",
          className: "flex justify-center flex-col items-start p-2",
          children: [
            ye("img", {
              src: vB,
              alt: "company logo",
              className: "w-24",
              loading: "lazy",
            }),
            ye("div", {
              className:
                "flex justify-center flex-col items-center my-2 w-full",
              children: Mt("h5", {
                className: "w-full",
                children: [
                  " ",
                  ye("b", { children: "رقم الفاتورة:" }),
                  " ",
                  e.paymentId,
                  ye(Nn, { h: "xs" }),
                  ye("b", { children: "تاريخ الفاتورة:" }),
                  " ",
                  (n = e.updatedOn) == null ? void 0 : n.substr(0, 10),
                  ye(Nn, { h: "lg" }),
                  ye(au, { variant: "dashed", size: "xs" }),
                ],
              }),
            }),
            ye("div", {
              className:
                "flex justify-center flex-col items-center my-2 w-full",
              children: Mt("h5", {
                className: "w-full",
                children: [
                  " ",
                  ye("b", { children: "الرقم الضريبي:" }),
                  " 310397281100003",
                  ye(Nn, { h: "xs" }),
                  ye("b", { children: "العنوان:" }),
                  " king abdelaziz elreyad, al yasssmin 13326",
                  ye(Nn, { h: "lg" }),
                  ye(au, { variant: "dashed", size: "xs" }),
                ],
              }),
            }),
            ye("div", {
              className:
                "flex justify-center flex-col items-center my-2 w-full",
              children: Mt("table", {
                className: "w-full",
                children: [
                  Mt("tr", {
                    className: "w-full",
                    children: [
                      ye("td", {
                        className: "font-bold",
                        colSpan: 2,
                        children: "الخطة",
                      }),
                      ye("td", {
                        className: "font-bold",
                        colSpan: 2,
                        children: "عدد الجلسات",
                      }),
                      ye("td", {
                        className: "font-bold text-left",
                        colSpan: 2,
                        children: "السعر",
                      }),
                    ],
                  }),
                  Mt("tr", {
                    className: "border-b-2 h-11",
                    children: [
                      ye("td", {
                        colSpan: 2,
                        children: e.intensity.intensityTitle,
                      }),
                      ye("td", {
                        className: "text-center",
                        colSpan: 2,
                        children: e.intensity.numberOfSessions,
                      }),
                      Mt("td", {
                        className: "text-left",
                        colSpan: 2,
                        children: [" ", e.intensity.price, " ريال", " "],
                      }),
                    ],
                  }),
                  ye(Nn, { h: "lg" }),
                  Mt("tr", {
                    className: "border-b-2 h-11",
                    children: [
                      ye("td", { colSpan: 3, children: " 15% القيمة المضافة" }),
                      Mt("td", {
                        className: "text-left",
                        colSpan: 3,
                        children: [
                          (
                            Number(
                              (i = e == null ? void 0 : e.intensity) == null
                                ? void 0
                                : i.price,
                            ) * 0.15
                          ).toFixed(2),
                          " ريال",
                        ],
                      }),
                    ],
                  }),
                  ye(Nn, { h: "md" }),
                  Mt("tr", {
                    className: "w-full",
                    children: [
                      ye("td", { colSpan: 3, children: "المجموع" }),
                      Mt("td", {
                        className: "text-left",
                        colSpan: 3,
                        children: [
                          (
                            Number(
                              (s = e == null ? void 0 : e.intensity) == null
                                ? void 0
                                : s.price,
                            ) * 1.15
                          ).toFixed(2),
                          " ريال",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        ye(Sl, {
          onClick: () => r(),
          variant: "subtle",
          styles: (c) => ({
            root: {
              color: "#042C43",
              borderRadius: 17,
              "&:not([data-disabled])": c.fn.hover({}),
            },
          }),
          children: "تحميل الايصال",
        }),
        " ",
        ye(Sl, {
          onClick: () => A("/"),
          variant: "subtle",
          styles: (c) => ({
            root: {
              backgroundColor: "#042C43",
              borderColor: "#042C43",
              width: "100%",
              color: "white",
              margin: "15px",
              borderRadius: 17,
              "&:not([data-disabled])": c.fn.hover({
                backgroundColor: "#042C43",
              }),
            },
          }),
          children: "أنتهيت",
        }),
        " ",
      ],
    }),
  });
};
export { ew as default };

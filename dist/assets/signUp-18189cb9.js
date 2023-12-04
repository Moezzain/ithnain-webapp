import {
  a as d,
  u as le,
  p as cr,
  R as P,
  I as ur,
  r as x,
  c as Ve,
  g as fr,
  h as dr,
  q as pr,
  T as mr,
  i as _r,
  e as b,
  F as yr,
  j as K,
  b as vr,
  k as gr,
  C as br,
  B as Or,
  l as Pr,
  G as hr,
  m as $r,
  s as fe,
  t as wr,
} from "./index-4f59dc0f.js";
import { M as Er, P as Sr } from "./Modal-bdf05565.js";
import { g as re, I as jr, T as de } from "./TextInput-2a2577e1.js";
function Ir(e = !1, r) {
  const { onOpen: t, onClose: o } = r || {},
    [n, i] = d.useState(e),
    l = d.useCallback(() => {
      i((p) => p || (t == null || t(), !0));
    }, [t]),
    a = d.useCallback(() => {
      i((p) => p && (o == null || o(), !1));
    }, [o]),
    c = d.useCallback(() => {
      n ? a() : l();
    }, [a, l, n]);
  return [n, { open: l, close: a, toggle: c }];
}
const Le = d.createContext(null),
  Cr = Le.Provider,
  kr = () => d.useContext(Le);
var xr = Object.defineProperty,
  U = Object.getOwnPropertySymbols,
  Me = Object.prototype.hasOwnProperty,
  Ge = Object.prototype.propertyIsEnumerable,
  pe = (e, r, t) =>
    r in e
      ? xr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  me = (e, r) => {
    for (var t in r || (r = {})) Me.call(r, t) && pe(e, t, r[t]);
    if (U) for (var t of U(r)) Ge.call(r, t) && pe(e, t, r[t]);
    return e;
  },
  Nr = (e, r) => {
    var t = {};
    for (var o in e) Me.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && U)
      for (var o of U(e)) r.indexOf(o) < 0 && Ge.call(e, o) && (t[o] = e[o]);
    return t;
  };
const Ar = { size: "sm" },
  Xe = d.forwardRef((e, r) => {
    const t = le("CheckboxGroup", Ar, e),
      {
        children: o,
        value: n,
        defaultValue: i,
        onChange: l,
        size: a,
        wrapperProps: c,
      } = t,
      p = Nr(t, [
        "children",
        "value",
        "defaultValue",
        "onChange",
        "size",
        "wrapperProps",
      ]),
      [m, v] = cr({ value: n, defaultValue: i, finalValue: [], onChange: l }),
      h = (w) => {
        const $ = w.currentTarget.value;
        v(m.includes($) ? m.filter((y) => y !== $) : [...m, $]);
      };
    return P.createElement(
      Cr,
      { value: { value: m, onChange: h, size: a } },
      P.createElement(
        ur.Wrapper,
        me(
          me(
            {
              labelElement: "div",
              size: a,
              __staticSelector: "CheckboxGroup",
              ref: r,
            },
            c,
          ),
          p,
        ),
        o,
      ),
    );
  });
Xe.displayName = "@mantine/core/CheckboxGroup";
var Dr = Object.defineProperty,
  Y = Object.getOwnPropertySymbols,
  We = Object.prototype.hasOwnProperty,
  Be = Object.prototype.propertyIsEnumerable,
  _e = (e, r, t) =>
    r in e
      ? Dr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  oe = (e, r) => {
    for (var t in r || (r = {})) We.call(r, t) && _e(e, t, r[t]);
    if (Y) for (var t of Y(r)) Be.call(r, t) && _e(e, t, r[t]);
    return e;
  },
  Fr = (e, r) => {
    var t = {};
    for (var o in e) We.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && Y)
      for (var o of Y(e)) r.indexOf(o) < 0 && Be.call(e, o) && (t[o] = e[o]);
    return t;
  };
function Rr(e) {
  return P.createElement(
    "svg",
    oe(
      {
        viewBox: "0 0 10 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e,
    ),
    P.createElement("path", {
      d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  );
}
function Tr(e) {
  var r = e,
    { indeterminate: t } = r,
    o = Fr(r, ["indeterminate"]);
  return t
    ? P.createElement(
        "svg",
        oe(
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 32 6",
          },
          o,
        ),
        P.createElement("rect", {
          width: "32",
          height: "6",
          fill: "currentColor",
          rx: "3",
        }),
      )
    : P.createElement(Rr, oe({}, o));
}
var zr = Object.defineProperty,
  Vr = Object.defineProperties,
  Lr = Object.getOwnPropertyDescriptors,
  ye = Object.getOwnPropertySymbols,
  Mr = Object.prototype.hasOwnProperty,
  Gr = Object.prototype.propertyIsEnumerable,
  ve = (e, r, t) =>
    r in e
      ? zr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  ge = (e, r) => {
    for (var t in r || (r = {})) Mr.call(r, t) && ve(e, t, r[t]);
    if (ye) for (var t of ye(r)) Gr.call(r, t) && ve(e, t, r[t]);
    return e;
  },
  be = (e, r) => Vr(e, Lr(r));
const Xr = { xs: x(16), sm: x(20), md: x(24), lg: x(30), xl: x(36) };
var Wr = Ve(
  (
    e,
    {
      radius: r,
      color: t,
      transitionDuration: o,
      labelPosition: n,
      error: i,
      indeterminate: l,
    },
    { size: a },
  ) => {
    const c = fr({ size: a, sizes: Xr }),
      p = e.fn.variant({ variant: "filled", color: t });
    return {
      icon: be(ge({}, e.fn.cover()), {
        ref: re("icon"),
        color: l ? "inherit" : e.white,
        transform: l ? "none" : `translateY(${x(5)}) scale(0.5)`,
        opacity: l ? 1 : 0,
        transitionProperty: "opacity, transform",
        transitionTimingFunction: "ease",
        transitionDuration: `${o}ms`,
        pointerEvents: "none",
        width: "60%",
        position: "absolute",
        zIndex: 1,
        margin: "auto",
        "@media (prefers-reduced-motion)": {
          transitionDuration: e.respectReducedMotion ? "0ms" : void 0,
        },
      }),
      inner: {
        position: "relative",
        width: c,
        height: c,
        order: n === "left" ? 2 : 1,
      },
      input: be(ge({}, e.fn.focusStyles()), {
        appearance: "none",
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
        border: `${x(1)} solid ${
          i
            ? e.fn.variant({ variant: "filled", color: "red" }).background
            : e.colorScheme === "dark"
              ? e.colors.dark[4]
              : e.colors.gray[4]
        }`,
        width: c,
        height: c,
        borderRadius: e.fn.radius(r),
        padding: 0,
        display: "block",
        margin: 0,
        transition: `border-color ${o}ms ease, background-color ${o}ms ease`,
        cursor: e.cursorType,
        "&:checked": {
          backgroundColor: p.background,
          borderColor: p.background,
          [`& + .${re("icon")}`]: {
            opacity: 1,
            color: e.white,
            transform: "translateY(0) scale(1)",
          },
        },
        "&:disabled": {
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
          borderColor:
            e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[3],
          cursor: "not-allowed",
          [`& + .${re("icon")}`]: {
            color:
              e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[5],
          },
        },
      }),
    };
  },
);
const Br = Wr;
var Hr = Object.defineProperty,
  Z = Object.getOwnPropertySymbols,
  He = Object.prototype.hasOwnProperty,
  qe = Object.prototype.propertyIsEnumerable,
  Oe = (e, r, t) =>
    r in e
      ? Hr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  H = (e, r) => {
    for (var t in r || (r = {})) He.call(r, t) && Oe(e, t, r[t]);
    if (Z) for (var t of Z(r)) qe.call(r, t) && Oe(e, t, r[t]);
    return e;
  },
  qr = (e, r) => {
    var t = {};
    for (var o in e) He.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && Z)
      for (var o of Z(e)) r.indexOf(o) < 0 && qe.call(e, o) && (t[o] = e[o]);
    return t;
  };
const Kr = {
    size: "sm",
    transitionDuration: 100,
    icon: Tr,
    labelPosition: "right",
  },
  ae = d.forwardRef((e, r) => {
    const t = le("Checkbox", Kr, e),
      {
        className: o,
        style: n,
        sx: i,
        checked: l,
        disabled: a,
        color: c,
        label: p,
        indeterminate: m,
        id: v,
        size: h,
        radius: w,
        wrapperProps: $,
        children: y,
        classNames: E,
        styles: V,
        transitionDuration: C,
        icon: A,
        unstyled: L,
        labelPosition: M,
        description: ee,
        error: D,
        variant: F,
      } = t,
      W = qr(t, [
        "className",
        "style",
        "sx",
        "checked",
        "disabled",
        "color",
        "label",
        "indeterminate",
        "id",
        "size",
        "radius",
        "wrapperProps",
        "children",
        "classNames",
        "styles",
        "transitionDuration",
        "icon",
        "unstyled",
        "labelPosition",
        "description",
        "error",
        "variant",
      ]),
      O = kr(),
      N = dr(v),
      { systemStyles: R, rest: G } = pr(W),
      { classes: X } = Br(
        {
          radius: w,
          color: c,
          transitionDuration: C,
          labelPosition: M,
          error: !!D,
          indeterminate: m,
        },
        {
          name: "Checkbox",
          classNames: E,
          styles: V,
          unstyled: L,
          variant: F,
          size: (O == null ? void 0 : O.size) || h,
        },
      ),
      B = O ? { checked: O.value.includes(G.value), onChange: O.onChange } : {};
    return P.createElement(
      jr,
      H(
        H(
          {
            className: o,
            sx: i,
            style: n,
            id: N,
            size: (O == null ? void 0 : O.size) || h,
            labelPosition: M,
            label: p,
            description: ee,
            error: D,
            disabled: a,
            __staticSelector: "Checkbox",
            classNames: E,
            styles: V,
            unstyled: L,
            "data-checked": B.checked || void 0,
            variant: F,
          },
          R,
        ),
        $,
      ),
      P.createElement(
        "div",
        { className: X.inner },
        P.createElement(
          "input",
          H(
            H(
              {
                id: N,
                ref: r,
                type: "checkbox",
                className: X.input,
                checked: l,
                disabled: a,
              },
              G,
            ),
            B,
          ),
        ),
        P.createElement(A, { indeterminate: m, className: X.icon }),
      ),
    );
  });
ae.displayName = "@mantine/core/Checkbox";
ae.Group = Xe;
var Ur = Object.defineProperty,
  Yr = Object.defineProperties,
  Zr = Object.getOwnPropertyDescriptors,
  Pe = Object.getOwnPropertySymbols,
  Jr = Object.prototype.hasOwnProperty,
  Qr = Object.prototype.propertyIsEnumerable,
  he = (e, r, t) =>
    r in e
      ? Ur(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  et = (e, r) => {
    for (var t in r || (r = {})) Jr.call(r, t) && he(e, t, r[t]);
    if (Pe) for (var t of Pe(r)) Qr.call(r, t) && he(e, t, r[t]);
    return e;
  },
  rt = (e, r) => Yr(e, Zr(r));
function tt(e, r, t) {
  return typeof e < "u"
    ? e in t.headings.sizes
      ? t.headings.sizes[e].fontSize
      : x(e)
    : t.headings.sizes[r].fontSize;
}
function ot(e, r, t) {
  return typeof e < "u" && e in t.headings.sizes
    ? t.headings.sizes[e].lineHeight
    : t.headings.sizes[r].lineHeight;
}
var nt = Ve((e, { element: r, weight: t, inline: o }, { size: n }) => ({
  root: rt(et({}, e.fn.fontStyles()), {
    fontFamily: e.headings.fontFamily,
    fontWeight: t || e.headings.sizes[r].fontWeight || e.headings.fontWeight,
    fontSize: tt(n, r, e),
    lineHeight: o ? 1 : ot(n, r, e),
    margin: 0,
  }),
}));
const st = nt;
var it = Object.defineProperty,
  J = Object.getOwnPropertySymbols,
  Ke = Object.prototype.hasOwnProperty,
  Ue = Object.prototype.propertyIsEnumerable,
  $e = (e, r, t) =>
    r in e
      ? it(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  lt = (e, r) => {
    for (var t in r || (r = {})) Ke.call(r, t) && $e(e, t, r[t]);
    if (J) for (var t of J(r)) Ue.call(r, t) && $e(e, t, r[t]);
    return e;
  },
  at = (e, r) => {
    var t = {};
    for (var o in e) Ke.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && J)
      for (var o of J(e)) r.indexOf(o) < 0 && Ue.call(e, o) && (t[o] = e[o]);
    return t;
  };
const ct = { order: 1 },
  Ye = d.forwardRef((e, r) => {
    const t = le("Title", ct, e),
      {
        className: o,
        order: n,
        children: i,
        unstyled: l,
        size: a,
        weight: c,
        inline: p,
        variant: m,
      } = t,
      v = at(t, [
        "className",
        "order",
        "children",
        "unstyled",
        "size",
        "weight",
        "inline",
        "variant",
      ]),
      { classes: h, cx: w } = st(
        { element: `h${n}`, weight: c, inline: p },
        { name: "Title", unstyled: l, variant: m, size: a },
      );
    return [1, 2, 3, 4, 5, 6].includes(n)
      ? P.createElement(
          mr,
          lt(
            { variant: m, component: `h${n}`, ref: r, className: w(h.root, o) },
            v,
          ),
          i,
        )
      : null;
  });
Ye.displayName = "@mantine/core/Title";
var ut = function e(r, t) {
  if (r === t) return !0;
  if (r && t && typeof r == "object" && typeof t == "object") {
    if (r.constructor !== t.constructor) return !1;
    var o, n, i;
    if (Array.isArray(r)) {
      if (((o = r.length), o != t.length)) return !1;
      for (n = o; n-- !== 0; ) if (!e(r[n], t[n])) return !1;
      return !0;
    }
    if (r.constructor === RegExp)
      return r.source === t.source && r.flags === t.flags;
    if (r.valueOf !== Object.prototype.valueOf)
      return r.valueOf() === t.valueOf();
    if (r.toString !== Object.prototype.toString)
      return r.toString() === t.toString();
    if (((i = Object.keys(r)), (o = i.length), o !== Object.keys(t).length))
      return !1;
    for (n = o; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1;
    for (n = o; n-- !== 0; ) {
      var l = i[n];
      if (!e(r[l], t[l])) return !1;
    }
    return !0;
  }
  return r !== r && t !== t;
};
const we = _r(ut);
function ne(e) {
  return e === null || typeof e != "object"
    ? {}
    : Object.keys(e).reduce((r, t) => {
        const o = e[t];
        return o != null && o !== !1 && (r[t] = o), r;
      }, {});
}
var ft = Object.defineProperty,
  Ee = Object.getOwnPropertySymbols,
  dt = Object.prototype.hasOwnProperty,
  pt = Object.prototype.propertyIsEnumerable,
  Se = (e, r, t) =>
    r in e
      ? ft(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  mt = (e, r) => {
    for (var t in r || (r = {})) dt.call(r, t) && Se(e, t, r[t]);
    if (Ee) for (var t of Ee(r)) pt.call(r, t) && Se(e, t, r[t]);
    return e;
  };
function Ze(e, r) {
  if (r === null || typeof r != "object") return {};
  const t = mt({}, r);
  return (
    Object.keys(r).forEach((o) => {
      o.includes(`${String(e)}.`) && delete t[o];
    }),
    t
  );
}
const _t = "__MANTINE_FORM_INDEX__";
function je(e, r) {
  return r
    ? typeof r == "boolean"
      ? r
      : Array.isArray(r)
        ? r.includes(e.replace(/[.][0-9]/g, `.${_t}`))
        : !1
    : !1;
}
function Ie(e, r, t) {
  typeof t.value == "object" && (t.value = z(t.value)),
    !t.enumerable ||
    t.get ||
    t.set ||
    !t.configurable ||
    !t.writable ||
    r === "__proto__"
      ? Object.defineProperty(e, r, t)
      : (e[r] = t.value);
}
function z(e) {
  if (typeof e != "object") return e;
  var r = 0,
    t,
    o,
    n,
    i = Object.prototype.toString.call(e);
  if (
    (i === "[object Object]"
      ? (n = Object.create(e.__proto__ || null))
      : i === "[object Array]"
        ? (n = Array(e.length))
        : i === "[object Set]"
          ? ((n = new Set()),
            e.forEach(function (l) {
              n.add(z(l));
            }))
          : i === "[object Map]"
            ? ((n = new Map()),
              e.forEach(function (l, a) {
                n.set(z(a), z(l));
              }))
            : i === "[object Date]"
              ? (n = new Date(+e))
              : i === "[object RegExp]"
                ? (n = new RegExp(e.source, e.flags))
                : i === "[object DataView]"
                  ? (n = new e.constructor(z(e.buffer)))
                  : i === "[object ArrayBuffer]"
                    ? (n = e.slice(0))
                    : i.slice(-6) === "Array]" && (n = new e.constructor(e)),
    n)
  ) {
    for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      Ie(n, o[r], Object.getOwnPropertyDescriptor(e, o[r]));
    for (r = 0, o = Object.getOwnPropertyNames(e); r < o.length; r++)
      (Object.hasOwnProperty.call(n, (t = o[r])) && n[t] === e[t]) ||
        Ie(n, t, Object.getOwnPropertyDescriptor(e, t));
  }
  return n || e;
}
function Je(e) {
  return typeof e != "string" ? [] : e.split(".");
}
function Q(e, r, t) {
  const o = Je(e);
  if (o.length === 0) return t;
  const n = z(t);
  if (o.length === 1) return (n[o[0]] = r), n;
  let i = n[o[0]];
  for (let l = 1; l < o.length - 1; l += 1) {
    if (i === void 0) return n;
    i = i[o[l]];
  }
  return (i[o[o.length - 1]] = r), n;
}
function I(e, r) {
  const t = Je(e);
  if (t.length === 0 || typeof r != "object" || r === null) return;
  let o = r[t[0]];
  for (let n = 1; n < t.length && o !== void 0; n += 1) o = o[t[n]];
  return o;
}
function Ce(e) {
  const r = ne(e);
  return { hasErrors: Object.keys(r).length > 0, errors: r };
}
function se(e, r, t = "", o = {}) {
  return typeof e != "object" || e === null
    ? o
    : Object.keys(e).reduce((n, i) => {
        const l = e[i],
          a = `${t === "" ? "" : `${t}.`}${i}`,
          c = I(a, r);
        let p = !1;
        return (
          typeof l == "function" && (n[a] = l(c, r, a)),
          typeof l == "object" &&
            Array.isArray(c) &&
            ((p = !0), c.forEach((m, v) => se(l, r, `${a}.${v}`, n))),
          typeof l == "object" &&
            typeof c == "object" &&
            c !== null &&
            (p || se(l, r, a, n)),
          n
        );
      }, o);
}
function ie(e, r) {
  return Ce(typeof e == "function" ? e(r) : se(e, r));
}
function q(e, r, t) {
  if (typeof e != "string") return { hasError: !1, error: null };
  const o = ie(r, t),
    n = Object.keys(o.errors).find((i) =>
      e.split(".").every((l, a) => l === i.split(".")[a]),
    );
  return { hasError: !!n, error: n ? o.errors[n] : null };
}
function yt(e, { from: r, to: t }, o) {
  const n = I(e, o);
  if (!Array.isArray(n)) return o;
  const i = [...n],
    l = n[r];
  return i.splice(r, 1), i.splice(t, 0, l), Q(e, i, o);
}
var vt = Object.defineProperty,
  ke = Object.getOwnPropertySymbols,
  gt = Object.prototype.hasOwnProperty,
  bt = Object.prototype.propertyIsEnumerable,
  xe = (e, r, t) =>
    r in e
      ? vt(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  Ot = (e, r) => {
    for (var t in r || (r = {})) gt.call(r, t) && xe(e, t, r[t]);
    if (ke) for (var t of ke(r)) bt.call(r, t) && xe(e, t, r[t]);
    return e;
  };
function Pt(e, { from: r, to: t }, o) {
  const n = `${e}.${r}`,
    i = `${e}.${t}`,
    l = Ot({}, o);
  return (
    Object.keys(o).every((a) => {
      let c, p;
      if (
        (a.startsWith(n) && ((c = a), (p = a.replace(n, i))),
        a.startsWith(i) && ((c = a.replace(i, n)), (p = a)),
        c && p)
      ) {
        const m = l[c],
          v = l[p];
        return (
          v === void 0 ? delete l[c] : (l[c] = v),
          m === void 0 ? delete l[p] : (l[p] = m),
          !1
        );
      }
      return !0;
    }),
    l
  );
}
function ht(e, r, t) {
  const o = I(e, t);
  return Array.isArray(o)
    ? Q(
        e,
        o.filter((n, i) => i !== r),
        t,
      )
    : t;
}
var $t = Object.defineProperty,
  Ne = Object.getOwnPropertySymbols,
  wt = Object.prototype.hasOwnProperty,
  Et = Object.prototype.propertyIsEnumerable,
  Ae = (e, r, t) =>
    r in e
      ? $t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  St = (e, r) => {
    for (var t in r || (r = {})) wt.call(r, t) && Ae(e, t, r[t]);
    if (Ne) for (var t of Ne(r)) Et.call(r, t) && Ae(e, t, r[t]);
    return e;
  };
function De(e, r) {
  const t = e.substring(r.length + 1).split(".")[0];
  return parseInt(t, 10);
}
function Fe(e, r, t, o) {
  if (r === void 0) return t;
  const n = `${String(e)}`;
  let i = t;
  o === -1 && (i = Ze(`${n}.${r}`, i));
  const l = St({}, i),
    a = new Set();
  return (
    Object.entries(i)
      .filter(([c]) => {
        if (!c.startsWith(`${n}.`)) return !1;
        const p = De(c, n);
        return Number.isNaN(p) ? !1 : p >= r;
      })
      .forEach(([c, p]) => {
        const m = De(c, n),
          v = c.replace(`${n}.${m}`, `${n}.${m + o}`);
        (l[v] = p), a.add(v), a.has(c) || delete l[c];
      }),
    l
  );
}
function jt(e, r, t, o) {
  const n = I(e, o);
  if (!Array.isArray(n)) return o;
  const i = [...n];
  return i.splice(typeof t == "number" ? t : i.length, 0, r), Q(e, i, o);
}
function Re(e, r) {
  const t = Object.keys(e);
  if (typeof r == "string") {
    const o = t.filter((n) => n.startsWith(`${r}.`));
    return e[r] || o.some((n) => e[n]) || !1;
  }
  return t.some((o) => e[o]);
}
function It(e) {
  if (!/^[0-9a-zA-Z-]+$/.test(e))
    throw new Error(
      `[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`,
    );
}
const Ct = typeof window < "u" ? d.useLayoutEffect : d.useEffect;
function g(e, r) {
  Ct(() => {
    if (e)
      return (
        window.addEventListener(e, r), () => window.removeEventListener(e, r)
      );
  }, [e]);
}
function kt(e, r) {
  e && It(e),
    g(`mantine-form:${e}:set-field-value`, (t) =>
      r.setFieldValue(t.detail.path, t.detail.value),
    ),
    g(`mantine-form:${e}:set-values`, (t) => r.setValues(t.detail)),
    g(`mantine-form:${e}:set-initial-values`, (t) =>
      r.setInitialValues(t.detail),
    ),
    g(`mantine-form:${e}:set-errors`, (t) => r.setErrors(t.detail)),
    g(`mantine-form:${e}:set-field-error`, (t) =>
      r.setFieldError(t.detail.path, t.detail.error),
    ),
    g(`mantine-form:${e}:clear-field-error`, (t) =>
      r.clearFieldError(t.detail),
    ),
    g(`mantine-form:${e}:clear-errors`, r.clearErrors),
    g(`mantine-form:${e}:reset`, r.reset),
    g(`mantine-form:${e}:validate`, r.validate),
    g(`mantine-form:${e}:validate-field`, (t) => r.validateField(t.detail)),
    g(`mantine-form:${e}:reorder-list-item`, (t) =>
      r.reorderListItem(t.detail.path, t.detail.payload),
    ),
    g(`mantine-form:${e}:remove-list-item`, (t) =>
      r.removeListItem(t.detail.path, t.detail.index),
    ),
    g(`mantine-form:${e}:insert-list-item`, (t) =>
      r.insertListItem(t.detail.path, t.detail.item, t.detail.index),
    ),
    g(`mantine-form:${e}:set-dirty`, (t) => r.setDirty(t.detail)),
    g(`mantine-form:${e}:set-touched`, (t) => r.setTouched(t.detail)),
    g(`mantine-form:${e}:reset-dirty`, (t) => r.resetDirty(t.detail)),
    g(`mantine-form:${e}:reset-touched`, r.resetTouched);
}
function xt(e) {
  return (r) => {
    if (!r) e(r);
    else if (typeof r == "function") e(r);
    else if (typeof r == "object" && "nativeEvent" in r) {
      const { currentTarget: t } = r;
      t instanceof HTMLInputElement
        ? t.type === "checkbox"
          ? e(t.checked)
          : e(t.value)
        : (t instanceof HTMLTextAreaElement ||
            t instanceof HTMLSelectElement) &&
          e(t.value);
    } else e(r);
  };
}
var Nt = Object.defineProperty,
  At = Object.defineProperties,
  Dt = Object.getOwnPropertyDescriptors,
  Te = Object.getOwnPropertySymbols,
  Ft = Object.prototype.hasOwnProperty,
  Rt = Object.prototype.propertyIsEnumerable,
  ze = (e, r, t) =>
    r in e
      ? Nt(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  k = (e, r) => {
    for (var t in r || (r = {})) Ft.call(r, t) && ze(e, t, r[t]);
    if (Te) for (var t of Te(r)) Rt.call(r, t) && ze(e, t, r[t]);
    return e;
  },
  te = (e, r) => At(e, Dt(r));
function Tt({
  name: e,
  initialValues: r = {},
  initialErrors: t = {},
  initialDirty: o = {},
  initialTouched: n = {},
  clearInputErrorOnChange: i = !0,
  validateInputOnChange: l = !1,
  validateInputOnBlur: a = !1,
  onValuesChange: c,
  transformValues: p = (v) => v,
  validate: m,
} = {}) {
  const [v, h] = d.useState(n),
    [w, $] = d.useState(o),
    [y, E] = d.useState(r),
    [V, C] = d.useState(ne(t)),
    A = d.useRef(r),
    L = (s) => {
      A.current = s;
    },
    M = d.useCallback(() => h({}), []),
    ee = (s) => {
      const u = s ? k(k({}, y), s) : y;
      L(u), $({});
    },
    D = d.useCallback(
      (s) => C((u) => ne(typeof s == "function" ? s(u) : s)),
      [],
    ),
    F = d.useCallback(() => C({}), []),
    W = d.useCallback(() => {
      E(A.current), F(), $({}), M();
    }, []),
    O = d.useCallback((s, u) => D((f) => te(k({}, f), { [s]: u })), []),
    N = d.useCallback(
      (s) =>
        D((u) => {
          if (typeof s != "string") return u;
          const f = k({}, u);
          return delete f[s], f;
        }),
      [],
    ),
    R = d.useCallback(
      (s) =>
        $((u) => {
          if (typeof s != "string") return u;
          const f = Ze(s, u);
          return delete f[s], f;
        }),
      [],
    ),
    G = d.useCallback((s, u) => {
      const f = je(s, l);
      R(s),
        h((_) => te(k({}, _), { [s]: !0 })),
        E((_) => {
          const S = Q(s, u, _);
          if (f) {
            const j = q(s, m, S);
            j.hasError ? O(s, j.error) : N(s);
          }
          return c == null || c(S), S;
        }),
        !f && i && O(s, null);
    }, []),
    X = d.useCallback((s) => {
      E((u) => {
        const f = typeof s == "function" ? s(u) : s,
          _ = k(k({}, u), f);
        return c == null || c(_), _;
      }),
        i && F();
    }, []),
    B = d.useCallback((s, u) => {
      R(s),
        E((f) => {
          const _ = yt(s, u, f);
          return c == null || c(_), _;
        }),
        C((f) => Pt(s, u, f));
    }, []),
    Qe = d.useCallback((s, u) => {
      R(s),
        E((f) => {
          const _ = ht(s, u, f);
          return c == null || c(_), _;
        }),
        C((f) => Fe(s, u, f, -1));
    }, []),
    er = d.useCallback((s, u, f) => {
      R(s),
        E((_) => {
          const S = jt(s, u, f, _);
          return c == null || c(S), S;
        }),
        C((_) => Fe(s, f, _, 1));
    }, []),
    ce = d.useCallback(() => {
      const s = ie(m, y);
      return C(s.errors), s;
    }, [y, m]),
    rr = d.useCallback(
      (s) => {
        const u = q(s, m, y);
        return u.hasError ? O(s, u.error) : N(s), u;
      },
      [y, m],
    ),
    tr = (
      s,
      { type: u = "input", withError: f = !0, withFocus: _ = !0 } = {},
    ) => {
      const j = { onChange: xt((T) => G(s, T)) };
      return (
        f && (j.error = V[s]),
        u === "checkbox" ? (j.checked = I(s, y)) : (j.value = I(s, y)),
        _ &&
          ((j.onFocus = () => h((T) => te(k({}, T), { [s]: !0 }))),
          (j.onBlur = () => {
            if (je(s, a)) {
              const T = q(s, m, y);
              T.hasError ? O(s, T.error) : N(s);
            }
          })),
        j
      );
    },
    or = (s, u) => (f) => {
      f == null || f.preventDefault();
      const _ = ce();
      _.hasErrors ? u == null || u(_.errors, y, f) : s == null || s(p(y), f);
    },
    nr = (s) => p(s || y),
    sr = d.useCallback((s) => {
      s.preventDefault(), W();
    }, []),
    ir = (s) => {
      if (s) {
        const f = I(s, w);
        if (typeof f == "boolean") return f;
        const _ = I(s, y),
          S = I(s, A.current);
        return !we(_, S);
      }
      return Object.keys(w).length > 0 ? Re(w) : !we(y, A.current);
    },
    lr = d.useCallback((s) => Re(v, s), [v]),
    ar = d.useCallback(
      (s) => (s ? !q(s, m, y).hasError : !ie(m, y).hasErrors),
      [y, m],
    ),
    ue = {
      values: y,
      errors: V,
      setValues: X,
      setInitialValues: L,
      setErrors: D,
      setFieldValue: G,
      setFieldError: O,
      clearFieldError: N,
      clearErrors: F,
      reset: W,
      validate: ce,
      validateField: rr,
      reorderListItem: B,
      removeListItem: Qe,
      insertListItem: er,
      getInputProps: tr,
      onSubmit: or,
      onReset: sr,
      isDirty: ir,
      isTouched: lr,
      setTouched: h,
      setDirty: $,
      resetTouched: M,
      resetDirty: ee,
      isValid: ar,
      getTransformedValues: nr,
    };
  return kt(e, ue), ue;
}
const zt = [
  "يضمن فريق إثنين الخصوصية التامة للمريض وعدم الإطلاع على أي تفاصيل شخصية لأي حالة من قبل أي شخص خارج إثنين",
  "الهدف الأول و الأساسي لإثنين هو الحرص على وصول المريض لأفضل نتيجة علاجية وصحية ممكنة عن طريق تدريبه وتأهيله للوصول الى التحكم الذاتي المرن بالالتزام بالمعايير الدوائية و نمط الحياة المناسب  مع  متابعتك لطبيبك المعالج و يجب على متلقي الخدمة التعاون مع الأخصائي لغرض الوصول لهذا الهدف.",
  "الحصول علـــى  خدمة التثقيف و الدعم الصحي أو النفسي للمصاب بما يطلبه متلقي الخدمة  من الاستشارة  بشكل أساسي و بما  يناسب كل حالة على حدة حسب تقييم فريق إثنين الصحي  لكل حالة بشكل فردي  اعتمادا على الأبحاث و الدراسات المعتمدة  من  قبل اثنين من مقدمي الخدمة الصحية المؤهلين حسب تخصصاتهم  وفق خطة مبدئية تعرض لمتلقي الخدمة  حسب أهداف الجلسة التثقيفية و يمكن التعديل بها حسب احتياجات المصاب المتغيرة و موافقة مسؤول الحالة.",
  "تختلف الخطة المقترحة من قبل مسؤولي الحالات حسب كل حالة على حدة و يلتزم فريق إثنين من منفذي الخطة بعدد و كم الجلسات التثقيفية حسب الاتفاق المسبق مع متلقي الخدمة و مسؤول الحالة سواء كان المصاب أو أحد ذويه خلال فترة الاشتراك المتفق عليها.",
  "تكون مدة الجلسة التثقيفية معتمدة بـ ثلاثين الى تسعين دقيقة حسب تقييم مقدم الخدمة  ويحق لمتلقي الخدمة التواصل بالرسائل للمتابعة خلال فترة اشتراكه و يلتزم مقدم الخدمة بالرد عليه خلال هذه الفترة.",
  "يتم توفير مقدمي الرعاية الصحية المناسبين حسب توفرهم  للتواصل مع المصاب  أو ذويه  لتحقيق احتياجات المصاب بالرجوع للخطة المرسومة من قبل مسؤول الحالة.",
  "يعرض محتوى إثنين  صيغ مختلفة ومناسبة لكل حالة على حدة كما يتضمن معلومات ذات طابع عام، وليس الغرض منه ولا يوصى بأن يكون بديلا عن المشورة الطبية المتخصصة ومتابعة الطبيب الخاص بالحالة.",
  "يلتزم متلقي الخدمة سواء كان المصاب أو أحد ذويه بالإفصاح عن أي حالة أو وضع صحي يؤثر على الخطة أو الحالة الصحية العامة للمصاب",
  "جميع استشاراتنا النصية و الصوتية مسجلة و خاضعة لقوانين خصوصية المرضى.",
  "يلتزم متلقي الخدمة بالآداب والسلوكيات العامة و يحق لاثنين إيقاف الخدمة دون أي التزام من قبل اثنين في حال تجاوز متلقي الخدمة لأي من الآداب والسلوكيات العامة المتفق عليها",
  "يُحظر عليك نشر أو إرسال أي مواد غير قانونية أو إباحية أو بها تهديد أو قذف أو تشهير أو فُحش أو تحريض أو تدنيس أو أي مادة يمكن أن تشكل أو تحث على سلوك قد يُعتبر مخالفة جنائية أو ينشأ عنه مسؤولية مدنية أو ينتهك القانون بخلاف ذلك.",
  "يتم توفير مواد تثقيفية ملائمة لوضع المصاب الصحي بالإضافة الجلسات التثقيفية التي تحتوي على النصائح المناسبة لكل حالة على حدة حسب تقييم مسؤول الحالة واعتماد مدير تشغيل الخدمات الطبية.",
  "ينبغي ألا تستخدم محتوى إثنين لتشخيص مشكلة صحية أو مشكلة تتعلق باللياقة البدنية أو مرض. اسع دائما للحصول على المشورة من طبيبك بشأن أي حالة طبية أو علاج طبي. إثنين لا يراد به التشخيص الطبي أو العلاج الطبي. لا تتجاهل أبدا المشورة الطبية أو تتأخر في طلبها.",
  "د تكون هناك بعض الصعوبات التقنية و يعمل فريق إثنين على حلها و يجب الإبلاغ عنها فور ملاحظتها للعمل على تجاوزها.",
  "يحق لاثنين الغاء اشتراك المصاب في حال عدم التجاوب مع مقدمي الخدمة.",
];
function Vt({ opened: e, close: r }) {
  return b(yr, {
    children: b(Er, {
      opened: e,
      onClose: r,
      title: "الأحكام و الشروط",
      children: b("ul", {
        children: zt.map((t, o) =>
          K("li", { children: ["•  ", t, " ", b("br", {})] }, o.toString()),
        ),
      }),
    }),
  });
}
const Xt = () => {
  const e = vr(),
    r = gr(),
    [t, { open: o, close: n }] = Ir(!1),
    i = Tt({
      initialValues: { name: "", phone: "", termsOfService: !1 },
      validate: {
        name: (a) => (/^(?!\s*$).+/.test(a) ? null : "أدخل اسم صحيح"),
        phone: (a) =>
          /^[\u0660-\u0669]|[0-9]{9}$/.test(a) ? null : "أدخل رقم هاتف صحيح",
        termsOfService: (a) => (a ? null : "وافق على الاحكام و الشروط"),
      },
    }),
    l = (a) => {
      console.log("convertArabicNumerals(values.phone)"),
        console.log(fe(a.phone)),
        e(wr({ ...a, navigate: r, phone: fe(a.phone) }));
    };
  return K(br, {
    size: 520,
    my: 40,
    children: [
      b(Ye, {
        align: "center",
        sx: () => ({ fontFamily: "SSTArabic, sans-serif", fontWeight: 900 }),
        children: "الرجاء تسجيل الدخول",
      }),
      b(Sr, {
        withBorder: !0,
        shadow: "md",
        p: 30,
        mt: 30,
        radius: "md",
        children: K(Or, {
          maw: 320,
          mx: "auto",
          className: "flex flex-col",
          children: [
            b("img", { src: Pr, alt: "company logo", className: "w-32" }),
            K("form", {
              onSubmit: i.onSubmit((a) => l(a)),
              children: [
                b(de, {
                  label: "الأسم",
                  mt: "md",
                  placeholder: "الأسم",
                  ...i.getInputProps("name"),
                }),
                b(de, {
                  withAsterisk: !0,
                  mt: "md",
                  label: "رقم الهاتف",
                  placeholder: "5XXXXXXXX",
                  ...i.getInputProps("phone"),
                }),
                b(ae, {
                  mt: "md",
                  label: b("p", { onClick: o, children: "الاحكام و الشروط" }),
                  ...i.getInputProps("termsOfService", { type: "checkbox" }),
                }),
                b(hr, {
                  position: "center",
                  mt: "xl",
                  children: b($r, {
                    type: "submit",
                    color: "#eb4063",
                    radius: "lg",
                    styles: (a) => ({
                      root: {
                        backgroundColor: "#eb4063",
                        "&:not([data-disabled])": a.fn.hover({
                          backgroundColor: "#eb4063",
                        }),
                      },
                    }),
                    children: "تسجيل الدخول",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      b(Vt, { open: o, opened: t, close: n }),
    ],
  });
};
export { Xt as default };

import {
  c as G,
  r as g,
  a as c,
  u as J,
  h as K,
  R as d,
  B as Q,
  i as X,
  k as Z,
  j as v,
  F as ee,
  e as a,
  C as re,
  l as te,
  m as oe,
} from "./index-4f59dc0f.js";
import { C as ae, M as j } from "./Modal-bdf05565.js";
var se = Object.defineProperty,
  ne = Object.defineProperties,
  le = Object.getOwnPropertyDescriptors,
  E = Object.getOwnPropertySymbols,
  ie = Object.prototype.hasOwnProperty,
  ce = Object.prototype.propertyIsEnumerable,
  T = (e, r, t) =>
    r in e
      ? se(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  C = (e, r) => {
    for (var t in r || (r = {})) ie.call(r, t) && T(e, t, r[t]);
    if (E) for (var t of E(r)) ce.call(r, t) && T(e, t, r[t]);
    return e;
  },
  R = (e, r) => ne(e, le(r));
function de({ variant: e, color: r, theme: t }) {
  if (e === "filled")
    return {
      backgroundColor: t.fn.variant({ variant: "filled", color: r }).background,
      color: t.white,
    };
  if (e === "outline") {
    const o = t.fn.variant({ variant: "outline", color: r });
    return {
      color: o.color,
      borderColor: o.border,
      backgroundColor: t.colorScheme === "dark" ? t.colors.dark[6] : t.white,
    };
  }
  if (e === "light") {
    const o = t.fn.variant({ variant: "light", color: r });
    return { backgroundColor: o.background, color: o.color };
  }
  return null;
}
var pe = G((e, { radius: r, color: t }, { variant: o }) => ({
  root: C(
    R(C({}, e.fn.fontStyles()), {
      position: "relative",
      overflow: "hidden",
      paddingTop: e.spacing.sm,
      paddingBottom: e.spacing.sm,
      paddingLeft: e.spacing.md,
      paddingRight: e.spacing.sm,
      borderRadius: e.fn.radius(r),
      border: `${g(1)} solid transparent`,
    }),
    de({ variant: o, color: t, theme: e }),
  ),
  wrapper: { display: "flex" },
  body: { flex: 1 },
  title: {
    boxSizing: "border-box",
    margin: 0,
    marginBottom: e.spacing.xs,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    lineHeight: e.lineHeight,
    fontSize: e.fontSizes.sm,
    fontWeight: 700,
    "&[data-with-close-button]": { paddingRight: e.spacing.md },
  },
  label: { display: "block", overflow: "hidden", textOverflow: "ellipsis" },
  icon: {
    lineHeight: 1,
    width: g(20),
    height: g(20),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: e.spacing.md,
    marginTop: 1,
  },
  message: R(C({}, e.fn.fontStyles()), {
    lineHeight: e.lineHeight,
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: e.fontSizes.sm,
    color:
      o === "filled"
        ? e.white
        : e.colorScheme === "dark"
          ? o === "light"
            ? e.white
            : e.colors.dark[0]
          : e.black,
  }),
  closeButton: { width: g(10), height: g(10) },
}));
const fe = pe;
var ue = Object.defineProperty,
  b = Object.getOwnPropertySymbols,
  F = Object.prototype.hasOwnProperty,
  M = Object.prototype.propertyIsEnumerable,
  $ = (e, r, t) =>
    r in e
      ? ue(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  ge = (e, r) => {
    for (var t in r || (r = {})) F.call(r, t) && $(e, t, r[t]);
    if (b) for (var t of b(r)) M.call(r, t) && $(e, t, r[t]);
    return e;
  },
  me = (e, r) => {
    var t = {};
    for (var o in e) F.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && b)
      for (var o of b(e)) r.indexOf(o) < 0 && M.call(e, o) && (t[o] = e[o]);
    return t;
  };
const ye = { variant: "light" },
  S = c.forwardRef((e, r) => {
    const t = J("Alert", ye, e),
      {
        id: o,
        className: n,
        title: s,
        variant: l,
        children: m,
        color: f,
        classNames: u,
        icon: y,
        styles: _,
        onClose: w,
        radius: O,
        withCloseButton: x,
        closeButtonLabel: V,
        unstyled: U,
      } = t,
      q = me(t, [
        "id",
        "className",
        "title",
        "variant",
        "children",
        "color",
        "classNames",
        "icon",
        "styles",
        "onClose",
        "radius",
        "withCloseButton",
        "closeButtonLabel",
        "unstyled",
      ]),
      { classes: i, cx: Y } = fe(
        { color: f, radius: O },
        { classNames: u, styles: _, unstyled: U, variant: l, name: "Alert" },
      ),
      P = K(o),
      N = s && `${P}-title`,
      k = `${P}-body`;
    return d.createElement(
      Q,
      ge(
        {
          id: P,
          role: "alert",
          "aria-labelledby": N,
          "aria-describedby": k,
          className: Y(i.root, i[l], n),
          ref: r,
        },
        q,
      ),
      d.createElement(
        "div",
        { className: i.wrapper },
        y && d.createElement("div", { className: i.icon }, y),
        d.createElement(
          "div",
          { className: i.body },
          s &&
            d.createElement(
              "div",
              { className: i.title, "data-with-close-button": x || void 0 },
              d.createElement("span", { id: N, className: i.label }, s),
            ),
          d.createElement("div", { id: k, className: i.message }, m),
        ),
        x &&
          d.createElement(ae, {
            className: i.closeButton,
            onClick: w,
            variant: "transparent",
            size: 16,
            iconSize: 16,
            "aria-label": V,
          }),
      ),
    );
  });
S.displayName = "@mantine/core/Alert";
var L = { exports: {} },
  ve = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  be = ve,
  he = be;
function A() {}
function D() {}
D.resetWarningCache = A;
var _e = function () {
  function e(o, n, s, l, m, f) {
    if (f !== he) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function r() {
    return e;
  }
  var t = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: r,
    element: e,
    elementType: e,
    instanceOf: r,
    node: e,
    objectOf: r,
    oneOf: r,
    oneOfType: r,
    shape: r,
    exact: r,
    checkPropTypes: D,
    resetWarningCache: A,
  };
  return (t.PropTypes = t), t;
};
L.exports = _e();
var we = L.exports;
const p = X(we);
var Oe = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  Pe = Object.defineProperty,
  Ce = Object.defineProperties,
  Se = Object.getOwnPropertyDescriptors,
  h = Object.getOwnPropertySymbols,
  W = Object.prototype.hasOwnProperty,
  H = Object.prototype.propertyIsEnumerable,
  I = (e, r, t) =>
    r in e
      ? Pe(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  B = (e, r) => {
    for (var t in r || (r = {})) W.call(r, t) && I(e, t, r[t]);
    if (h) for (var t of h(r)) H.call(r, t) && I(e, t, r[t]);
    return e;
  },
  xe = (e, r) => Ce(e, Se(r)),
  Ne = (e, r) => {
    var t = {};
    for (var o in e) W.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && h)
      for (var o of h(e)) r.indexOf(o) < 0 && H.call(e, o) && (t[o] = e[o]);
    return t;
  },
  ke = (e, r, t) => {
    const o = c.forwardRef((n, s) => {
      var l = n,
        {
          color: m = "currentColor",
          size: f = 24,
          stroke: u = 2,
          children: y,
        } = l,
        _ = Ne(l, ["color", "size", "stroke", "children"]);
      return c.createElement(
        "svg",
        B(
          xe(B({ ref: s }, Oe), {
            width: f,
            height: f,
            stroke: m,
            strokeWidth: u,
            className: `tabler-icon tabler-icon-${e}`,
          }),
          _,
        ),
        [...t.map(([w, O]) => c.createElement(w, O)), ...(y || [])],
      );
    });
    return (
      (o.propTypes = {
        color: p.string,
        size: p.oneOfType([p.string, p.number]),
        stroke: p.oneOfType([p.string, p.number]),
      }),
      (o.displayName = `${r}`),
      o
    );
  },
  z = ke("alert-circle", "IconAlertCircle", [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
    ["path", { d: "M12 8v4", key: "svg-1" }],
    ["path", { d: "M12 16h.01", key: "svg-2" }],
  ]);
const je = () => {
    const [e, r] = c.useState(!1),
      [t, o] = c.useState(!1),
      n = c.useCallback(() => {
        r(!e);
      }, [e]),
      s = c.useCallback(() => {
        o(!t);
      }, [t]);
    return [e, t, n, s];
  },
  Ee = "/assets/OnboardingImage-43bc9614.png",
  $e = () => {
    const e = Z(),
      [r, t, o, n] = je();
    return (
      c.useEffect(() => {
        const l = new URLSearchParams(window.location.search).get("payment");
        l === "successful"
          ? (o(),
            setTimeout(() => {
              e("/invoice");
            }, 3e3))
          : l === "failed" && n();
      }, []),
      v(ee, {
        children: [
          a(j, {
            withCloseButton: !1,
            opened: r,
            onClose: o,
            padding: 0,
            children: v(S, {
              icon: a(z, { size: "1rem" }),
              title: "! مبروك",
              color: "green",
              children: [
                a("p", {
                  className: "",
                  children:
                    "لقد تم دفع الفاتورة بنجاح سيتم ارسال رسالة التأكيد.",
                }),
                a("p", { className: "", children: "لاتنس تحميل التطبيق." }),
              ],
            }),
          }),
          a(j, {
            withCloseButton: !1,
            opened: t,
            onClose: n,
            padding: 0,
            children: a(S, {
              icon: a(z, { size: "1rem" }),
              title: "! حدث خطاء ما",
              color: "red",
              children: a("p", {
                children:
                  "لم يتم دفع الفاتورة. يمكنك تسجيل الدخول و المحاولة مرة اخرى",
              }),
            }),
          }),
          v(re, {
            size: 520,
            my: 10,
            className: "flex justify-center flex-col items-start",
            children: [
              a("img", { src: Ee, alt: "company logo", className: "w-full" }),
              a("img", { src: te, alt: "company logo", className: "w-32" }),
              a("div", {
                className: "flex justify-center flex-col items-center my-2",
                children: a("h5", { children: "تطبيق السكري الخاص بك" }),
              }),
              v("div", {
                className:
                  "flex justify-center flex-col items-start mb-2 w-full",
                children: [
                  a("p", {
                    className: "text-xs",
                    children:
                      "حيا الله مُصاب السكري حبيبنا ، تطبيق اثنين ساعد ١٢ ألف مصاب مثل حالتك.، راح نساعدك وأنت في بيتك اوصل لنتائج تحاليل ممتازة مع السكري وتتخطى التحديات والمخاوف الي تواجهك",
                  }),
                  a("div", {
                    className:
                      "flex justify-center flex-row items-start mt-12 w-full",
                    children: a(oe, {
                      onClick: () => e("/signUp"),
                      variant: "outline",
                      styles: (s) => ({
                        root: {
                          backgroundColor: "#042C43",
                          borderColor: "#042C43",
                          color: "white",
                          borderRadius: 17,
                          "&:not([data-disabled])": s.fn.hover({
                            backgroundColor: "#042C43",
                          }),
                        },
                      }),
                      children: "سجل معنا",
                    }),
                  }),
                ],
              }),
              a("div", { id: "content" }),
            ],
          }),
        ],
      })
    );
  };
export { $e as default };

import {
  u as Y,
  h as Z,
  q as rr,
  r as _,
  c as er,
  g as R,
  a as V,
  R as o,
  B as tr,
  I as O,
} from "./index-4f59dc0f.js";
function hr(r) {
  return `___ref-${r || ""}`;
}
var ar = Object.defineProperty,
  sr = Object.defineProperties,
  or = Object.getOwnPropertyDescriptors,
  g = Object.getOwnPropertySymbols,
  q = Object.prototype.hasOwnProperty,
  L = Object.prototype.propertyIsEnumerable,
  T = (r, e, t) =>
    e in r
      ? ar(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  m = (r, e) => {
    for (var t in e || (e = {})) q.call(e, t) && T(r, t, e[t]);
    if (g) for (var t of g(e)) L.call(e, t) && T(r, t, e[t]);
    return r;
  },
  nr = (r, e) => sr(r, or(e)),
  lr = (r, e) => {
    var t = {};
    for (var a in r) q.call(r, a) && e.indexOf(a) < 0 && (t[a] = r[a]);
    if (r != null && g)
      for (var a of g(r)) e.indexOf(a) < 0 && L.call(r, a) && (t[a] = r[a]);
    return t;
  };
function ir(r, e, t) {
  const a = Y(r, e, t),
    {
      label: l,
      description: i,
      error: P,
      required: v,
      classNames: p,
      styles: n,
      className: u,
      unstyled: c,
      __staticSelector: y,
      sx: d,
      errorProps: $,
      labelProps: S,
      descriptionProps: x,
      wrapperProps: I,
      id: s,
      size: f,
      style: k,
      inputContainer: G,
      inputWrapperOrder: J,
      withAsterisk: K,
      variant: j,
    } = a,
    M = lr(a, [
      "label",
      "description",
      "error",
      "required",
      "classNames",
      "styles",
      "className",
      "unstyled",
      "__staticSelector",
      "sx",
      "errorProps",
      "labelProps",
      "descriptionProps",
      "wrapperProps",
      "id",
      "size",
      "style",
      "inputContainer",
      "inputWrapperOrder",
      "withAsterisk",
      "variant",
    ]),
    h = Z(s),
    { systemStyles: Q, rest: U } = rr(M),
    X = m(
      {
        label: l,
        description: i,
        error: P,
        required: v,
        classNames: p,
        className: u,
        __staticSelector: y,
        sx: d,
        errorProps: $,
        labelProps: S,
        descriptionProps: x,
        unstyled: c,
        styles: n,
        id: h,
        size: f,
        style: k,
        inputContainer: G,
        inputWrapperOrder: J,
        withAsterisk: K,
        variant: j,
      },
      I,
    );
  return nr(m({}, U), {
    classNames: p,
    styles: n,
    unstyled: c,
    wrapperProps: m(m({}, X), Q),
    inputProps: {
      required: v,
      classNames: p,
      styles: n,
      unstyled: c,
      id: h,
      size: f,
      __staticSelector: y,
      error: P,
      variant: j,
    },
  });
}
var pr = Object.defineProperty,
  cr = Object.defineProperties,
  dr = Object.getOwnPropertyDescriptors,
  D = Object.getOwnPropertySymbols,
  fr = Object.prototype.hasOwnProperty,
  _r = Object.prototype.propertyIsEnumerable,
  z = (r, e, t) =>
    e in r
      ? pr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Pr = (r, e) => {
    for (var t in e || (e = {})) fr.call(e, t) && z(r, t, e[t]);
    if (D) for (var t of D(e)) _r.call(e, t) && z(r, t, e[t]);
    return r;
  },
  vr = (r, e) => cr(r, dr(e));
const N = { xs: _(16), sm: _(20), md: _(24), lg: _(30), xl: _(36) };
var ur = er((r, { labelPosition: e }, { size: t }) => ({
  root: {},
  body: { display: "flex" },
  labelWrapper: vr(Pr({}, r.fn.fontStyles()), {
    display: "inline-flex",
    flexDirection: "column",
    WebkitTapHighlightColor: "transparent",
    fontSize: t in N ? R({ size: t, sizes: r.fontSizes }) : void 0,
    lineHeight: t in N ? R({ size: t, sizes: N }) : void 0,
    color: r.colorScheme === "dark" ? r.colors.dark[0] : r.black,
    cursor: r.cursorType,
    order: e === "left" ? 1 : 2,
  }),
  description: {
    marginTop: `calc(${r.spacing.xs} / 2)`,
    [e === "left" ? "paddingRight" : "paddingLeft"]: r.spacing.sm,
  },
  error: {
    marginTop: `calc(${r.spacing.xs} / 2)`,
    [e === "left" ? "paddingRight" : "paddingLeft"]: r.spacing.sm,
  },
  label: {
    cursor: r.cursorType,
    [e === "left" ? "paddingRight" : "paddingLeft"]: r.spacing.sm,
    "&[data-disabled]": {
      color: r.colorScheme === "dark" ? r.colors.dark[3] : r.colors.gray[5],
    },
  },
}));
const yr = ur;
var mr = Object.defineProperty,
  b = Object.getOwnPropertySymbols,
  A = Object.prototype.hasOwnProperty,
  B = Object.prototype.propertyIsEnumerable,
  W = (r, e, t) =>
    e in r
      ? mr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Or = (r, e) => {
    for (var t in e || (e = {})) A.call(e, t) && W(r, t, e[t]);
    if (b) for (var t of b(e)) B.call(e, t) && W(r, t, e[t]);
    return r;
  },
  gr = (r, e) => {
    var t = {};
    for (var a in r) A.call(r, a) && e.indexOf(a) < 0 && (t[a] = r[a]);
    if (r != null && b)
      for (var a of b(r)) e.indexOf(a) < 0 && B.call(r, a) && (t[a] = r[a]);
    return t;
  };
const br = V.forwardRef((r, e) => {
  var t = r,
    {
      __staticSelector: a,
      className: l,
      classNames: i,
      styles: P,
      unstyled: v,
      children: p,
      label: n,
      description: u,
      id: c,
      disabled: y,
      error: d,
      size: $,
      labelPosition: S,
      variant: x,
    } = t,
    I = gr(t, [
      "__staticSelector",
      "className",
      "classNames",
      "styles",
      "unstyled",
      "children",
      "label",
      "description",
      "id",
      "disabled",
      "error",
      "size",
      "labelPosition",
      "variant",
    ]);
  const { classes: s, cx: f } = yr(
    { labelPosition: S },
    { name: a, styles: P, classNames: i, unstyled: v, variant: x, size: $ },
  );
  return o.createElement(
    tr,
    Or({ className: f(s.root, l), ref: e }, I),
    o.createElement(
      "div",
      { className: f(s.body) },
      p,
      o.createElement(
        "div",
        { className: s.labelWrapper },
        n &&
          o.createElement(
            "label",
            { className: s.label, "data-disabled": y || void 0, htmlFor: c },
            n,
          ),
        u && o.createElement(O.Description, { className: s.description }, u),
        d &&
          d !== "boolean" &&
          o.createElement(O.Error, { className: s.error }, d),
      ),
    ),
  );
});
br.displayName = "@mantine/core/InlineInput";
var wr = Object.defineProperty,
  $r = Object.defineProperties,
  Sr = Object.getOwnPropertyDescriptors,
  w = Object.getOwnPropertySymbols,
  H = Object.prototype.hasOwnProperty,
  F = Object.prototype.propertyIsEnumerable,
  C = (r, e, t) =>
    e in r
      ? wr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  E = (r, e) => {
    for (var t in e || (e = {})) H.call(e, t) && C(r, t, e[t]);
    if (w) for (var t of w(e)) F.call(e, t) && C(r, t, e[t]);
    return r;
  },
  xr = (r, e) => $r(r, Sr(e)),
  Ir = (r, e) => {
    var t = {};
    for (var a in r) H.call(r, a) && e.indexOf(a) < 0 && (t[a] = r[a]);
    if (r != null && w)
      for (var a of w(r)) e.indexOf(a) < 0 && F.call(r, a) && (t[a] = r[a]);
    return t;
  };
const Nr = { type: "text", size: "sm", __staticSelector: "TextInput" },
  Er = V.forwardRef((r, e) => {
    const t = ir("TextInput", Nr, r),
      { inputProps: a, wrapperProps: l } = t,
      i = Ir(t, ["inputProps", "wrapperProps"]);
    return o.createElement(
      O.Wrapper,
      E({}, l),
      o.createElement(O, xr(E(E({}, a), i), { ref: e })),
    );
  });
Er.displayName = "@mantine/core/TextInput";
export { br as I, Er as T, hr as g };

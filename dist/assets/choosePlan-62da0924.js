import {
  R as p,
  a as f,
  u as Z,
  h as ee,
  p as me,
  I as ve,
  r as i,
  c as ye,
  g as m,
  q as ge,
  b as re,
  j as v,
  e as n,
  m as z,
  d as be,
  C as _e,
  l as Pe,
  F as Y,
  J as R,
  K as L,
} from "./index-4f59dc0f.js";
import { g as j, I as he, T as we } from "./TextInput-2a2577e1.js";
var Oe = Object.defineProperty,
  W = Object.getOwnPropertySymbols,
  xe = Object.prototype.hasOwnProperty,
  Ce = Object.prototype.propertyIsEnumerable,
  q = (e, r, o) =>
    r in e
      ? Oe(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[r] = o),
  Se = (e, r) => {
    for (var o in r || (r = {})) xe.call(r, o) && q(e, o, r[o]);
    if (W) for (var o of W(r)) Ce.call(r, o) && q(e, o, r[o]);
    return e;
  };
function $e(e) {
  return p.createElement(
    "svg",
    Se(
      { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 5 5" },
      e,
    ),
    p.createElement("path", {
      fill: "currentColor",
      d: "M0 2.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z",
    }),
  );
}
const oe = f.createContext(null),
  Ie = oe.Provider,
  Ne = () => f.useContext(oe);
var ke = Object.defineProperty,
  x = Object.getOwnPropertySymbols,
  ae = Object.prototype.hasOwnProperty,
  te = Object.prototype.propertyIsEnumerable,
  J = (e, r, o) =>
    r in e
      ? ke(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[r] = o),
  K = (e, r) => {
    for (var o in r || (r = {})) ae.call(r, o) && J(e, o, r[o]);
    if (x) for (var o of x(r)) te.call(r, o) && J(e, o, r[o]);
    return e;
  },
  Re = (e, r) => {
    var o = {};
    for (var a in e) ae.call(e, a) && r.indexOf(a) < 0 && (o[a] = e[a]);
    if (e != null && x)
      for (var a of x(e)) r.indexOf(a) < 0 && te.call(e, a) && (o[a] = e[a]);
    return o;
  };
const je = { size: "sm" },
  ne = f.forwardRef((e, r) => {
    const o = Z("RadioGroup", je, e),
      {
        children: a,
        value: l,
        defaultValue: t,
        onChange: c,
        size: d,
        wrapperProps: s,
        unstyled: u,
        name: T,
      } = o,
      _ = Re(o, [
        "children",
        "value",
        "defaultValue",
        "onChange",
        "size",
        "wrapperProps",
        "unstyled",
        "name",
      ]),
      S = ee(T),
      [P, h] = me({ value: l, defaultValue: t, finalValue: "", onChange: c }),
      $ = (I) => h(I.currentTarget.value);
    return p.createElement(
      Ie,
      { value: { value: P, onChange: $, size: d, name: S } },
      p.createElement(
        ve.Wrapper,
        K(
          K(
            {
              labelElement: "div",
              size: d,
              __staticSelector: "RadioGroup",
              ref: r,
              unstyled: u,
            },
            s,
          ),
          _,
        ),
        a,
      ),
    );
  });
ne.displayName = "@mantine/core/RadioGroup";
var Ee = Object.defineProperty,
  ze = Object.defineProperties,
  Te = Object.getOwnPropertyDescriptors,
  U = Object.getOwnPropertySymbols,
  Ge = Object.prototype.hasOwnProperty,
  Ve = Object.prototype.propertyIsEnumerable,
  H = (e, r, o) =>
    r in e
      ? Ee(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[r] = o),
  De = (e, r) => {
    for (var o in r || (r = {})) Ge.call(r, o) && H(e, o, r[o]);
    if (U) for (var o of U(r)) Ve.call(r, o) && H(e, o, r[o]);
    return e;
  },
  Fe = (e, r) => ze(e, Te(r));
const E = { xs: i(16), sm: i(20), md: i(24), lg: i(30), xl: i(36) },
  w = { xs: i(6), sm: i(8), md: i(10), lg: i(14), xl: i(16) };
var Ae = ye(
  (
    e,
    { color: r, transitionDuration: o, labelPosition: a, error: l },
    { size: t },
  ) => {
    const c = e.fn.variant({ variant: "filled", color: r }),
      d = e.fn.variant({ variant: "filled", color: "red" }).background;
    return {
      inner: {
        order: a === "left" ? 2 : 1,
        position: "relative",
        alignSelf: "flex-start",
      },
      icon: {
        ref: j("icon"),
        color: e.white,
        opacity: 0,
        transform: `scale(0.75) translateY(${i(2)})`,
        transition: `opacity ${o}ms ${e.transitionTimingFunction}`,
        pointerEvents: "none",
        width: m({ sizes: w, size: t }),
        height: m({ sizes: w, size: t }),
        position: "absolute",
        top: `calc(50% - ${m({ sizes: w, size: t })} / 2)`,
        left: `calc(50% - ${m({ sizes: w, size: t })} / 2)`,
      },
      radio: Fe(De({}, e.fn.focusStyles()), {
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
        border: `${i(1)} solid ${
          l ? d : e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4]
        }`,
        position: "relative",
        appearance: "none",
        width: m({ sizes: E, size: t }),
        height: m({ sizes: E, size: t }),
        borderRadius: m({ sizes: E, size: t }),
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transitionProperty: "background-color, border-color",
        transitionTimingFunction: e.transitionTimingFunction,
        transitionDuration: `${o}ms`,
        cursor: e.cursorType,
        "&:checked": {
          background: c.background,
          borderColor: c.background,
          [`& + .${j("icon")}`]: { opacity: 1, transform: "scale(1)" },
        },
        "&:disabled": {
          borderColor:
            e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[4],
          backgroundColor:
            e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[1],
          [`& + .${j("icon")}`]: {
            color:
              e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[4],
          },
        },
      }),
    };
  },
);
const Be = Ae;
var Me = Object.defineProperty,
  C = Object.getOwnPropertySymbols,
  se = Object.prototype.hasOwnProperty,
  ie = Object.prototype.propertyIsEnumerable,
  Q = (e, r, o) =>
    r in e
      ? Me(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[r] = o),
  O = (e, r) => {
    for (var o in r || (r = {})) se.call(r, o) && Q(e, o, r[o]);
    if (C) for (var o of C(r)) ie.call(r, o) && Q(e, o, r[o]);
    return e;
  },
  Ye = (e, r) => {
    var o = {};
    for (var a in e) se.call(e, a) && r.indexOf(a) < 0 && (o[a] = e[a]);
    if (e != null && C)
      for (var a of C(e)) r.indexOf(a) < 0 && ie.call(e, a) && (o[a] = e[a]);
    return o;
  };
const Le = {
    icon: $e,
    transitionDuration: 100,
    size: "sm",
    labelPosition: "right",
  },
  b = f.forwardRef((e, r) => {
    var o, a;
    const l = Z("Radio", Le, e),
      {
        className: t,
        style: c,
        id: d,
        label: s,
        size: u,
        title: T,
        disabled: _,
        color: S,
        classNames: P,
        styles: h,
        sx: $,
        icon: I,
        transitionDuration: le,
        wrapperProps: ce,
        unstyled: G,
        labelPosition: V,
        description: de,
        error: D,
        variant: F,
      } = l,
      ue = Ye(l, [
        "className",
        "style",
        "id",
        "label",
        "size",
        "title",
        "disabled",
        "color",
        "classNames",
        "styles",
        "sx",
        "icon",
        "transitionDuration",
        "wrapperProps",
        "unstyled",
        "labelPosition",
        "description",
        "error",
        "variant",
      ]),
      y = Ne(),
      pe = (o = y == null ? void 0 : y.size) != null ? o : u,
      A = e.size ? u : pe,
      { classes: N } = Be(
        { color: S, transitionDuration: le, labelPosition: V, error: !!D },
        {
          name: "Radio",
          classNames: P,
          styles: h,
          unstyled: G,
          variant: F,
          size: A,
        },
      ),
      { systemStyles: fe, rest: k } = ge(ue),
      B = ee(d),
      M = y
        ? {
            checked: y.value === k.value,
            name: (a = k.name) != null ? a : y.name,
            onChange: y.onChange,
          }
        : {};
    return p.createElement(
      he,
      O(
        O(
          {
            className: t,
            sx: $,
            style: c,
            id: B,
            size: A,
            labelPosition: V,
            label: s,
            description: de,
            error: D,
            disabled: _,
            __staticSelector: "Radio",
            classNames: P,
            styles: h,
            unstyled: G,
            "data-checked": M.checked || void 0,
            variant: F,
          },
          fe,
        ),
        ce,
      ),
      p.createElement(
        "div",
        { className: N.inner },
        p.createElement(
          "input",
          O(
            O(
              { ref: r, className: N.radio, type: "radio", id: B, disabled: _ },
              k,
            ),
            M,
          ),
        ),
        p.createElement(I, { className: N.icon, "aria-hidden": !0 }),
      ),
    );
  });
b.displayName = "@mantine/core/Radio";
b.Group = ne;
const We = "/assets/7sessionspromo-55efb4a0.jpg",
  qe = "/assets/12sessionspromo-3089df64.jpg";
function X({ value: e, setValue: r, createPayment: o }) {
  re();
  const [a, l] = f.useState(!1),
    [t, c] = f.useState(""),
    d = (u) => {
      console.log(u), r(u), c("");
    };
  return v("div", {
    className: "flex flex-col items-center",
    children: [
      a &&
        n(we, {
          className: " w-56",
          value: e,
          onChange: (u) => d(u.currentTarget.value),
          label: "",
          mt: "md",
          placeholder: "أدخل الأيميل",
          error: t,
        }),
      n(z, {
        onClick: () => {
          l(!0),
            a &&
              (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e)
                ? o(e)
                : c("أدخل ايميل صحيح"));
        },
        variant: "outline",
        className: "transition ease-in-out delay-500 w-32",
        styles: (u) => ({
          root: {
            backgroundColor: "#f4ca40",
            borderColor: "#f4ca40",
            color: "white",
            borderRadius: 17,
            marginTop: 10,
            marginBottom: 10,
            width: 160,
            "&:not([data-disabled])": u.fn.hover({
              backgroundColor: "#f4ca40",
            }),
          },
        }),
        children: a ? "أدفع تمارا" : "الدفع عن طريق تمارا",
      }),
      " ",
    ],
  });
}
const g = [
    {
      intensityId: "6be7094b-e4eb-436c-a837-4f5c38013869",
      description: "من الموقع",
      name: "السبع جلسات",
      amount: "350",
    },
    {
      intensityId: "2f397364-ca4e-4a7b-8511-3b2e816d0a9e",
      description: "من الموقع",
      name: "الأثنا عشر جلسة",
      amount: "550",
    },
  ],
  Ue = () => {
    const e = re(),
      { patient: r } = be((s) => s.auth),
      [o, a] = f.useState(""),
      [l, t] = f.useState(""),
      c = (s) => {
        e(L(!0)),
          setTimeout(
            function () {
              e(L(!1)), a(s);
            }.bind(void 0),
            500,
          );
      },
      d = (s) => {
        e(
          R({
            intensityId: g[1].intensityId,
            description: g[1].description,
            patientEmail: s,
          }),
        );
      };
    return n("div", {
      children: v(_e, {
        size: 520,
        my: 10,
        className: "flex justify-center flex-col items-start",
        children: [
          n("img", { src: Pe, alt: "company logo", className: "w-32 mt-10" }),
          n("div", {
            className: "flex justify-center flex-col items-center my-2",
            children: v("p", {
              style: { color: "#042C43" },
              className: " text-3xl my-6",
              children: ["مرحبا ", r == null ? void 0 : r.name],
            }),
          }),
          v("div", {
            className: "flex justify-center flex-col items-start mb-2 w-full",
            children: [
              n("p", {
                className: "text-base mb-4",
                children: "لتحديد خطتك داخل التطبيق جاوب على السؤال:",
              }),
              n("p", {
                className: "text-base",
                children: "هل تتعالج بالانسولين؟",
              }),
              v(b.Group, {
                value: o,
                onChange: c,
                name: "favoriteFramework",
                children: [
                  n(b, { value: "Yes", label: "نعم" }),
                  n(b, { value: "No", label: "لا" }),
                ],
              }),
              o !== "" &&
                n("div", {
                  className: "flex justify-start flex-col items-center w-full",
                  children:
                    o === "Yes"
                      ? v(Y, {
                          children: [
                            n("img", {
                              src: qe,
                              alt: "Intensive Plan",
                              className: " w-80 mb-5",
                            }),
                            n(z, {
                              onClick: () =>
                                e(
                                  R({
                                    intensityId: g[1].intensityId,
                                    description: g[1].description,
                                  }),
                                ),
                              variant: "outline",
                              styles: (s) => ({
                                root: {
                                  backgroundColor: "#eb4063",
                                  borderColor: "#eb4063",
                                  color: "white",
                                  borderRadius: 17,
                                  "&:not([data-disabled])": s.fn.hover({
                                    backgroundColor: "#eb4063",
                                  }),
                                },
                              }),
                              children: "واصل للدفع (٤٨٠ ريال)",
                            }),
                            n(X, { value: l, setValue: t, createPayment: d }),
                          ],
                        })
                      : v(Y, {
                          children: [
                            n("img", {
                              src: We,
                              alt: "Main Plan",
                              className: " w-80 mb-5",
                            }),
                            n(z, {
                              onClick: () =>
                                e(
                                  R({
                                    intensityId: g[0].intensityId,
                                    description: g[0].description,
                                  }),
                                ),
                              variant: "outline",
                              styles: (s) => ({
                                root: {
                                  backgroundColor: "#eb4063",
                                  borderColor: "#eb4063",
                                  color: "white",
                                  borderRadius: 17,
                                  "&:not([data-disabled])": s.fn.hover({
                                    backgroundColor: "#eb4063",
                                  }),
                                },
                              }),
                              children: "واصل للدفع (٢٨٠ ريال)",
                            }),
                            " ",
                            n(X, { value: l, setValue: t, createPayment: d }),
                          ],
                        }),
                }),
            ],
          }),
        ],
      }),
    });
  };
export { Ue as default };

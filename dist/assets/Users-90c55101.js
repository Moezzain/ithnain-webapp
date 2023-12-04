import {
  c as x,
  r as B,
  g as d,
  a as b,
  u as E,
  R as T,
  B as D,
  b as N,
  d as R,
  f as C,
  j as p,
  e as a,
  L as H,
} from "./index-4f59dc0f.js";
var I = Object.defineProperty,
  A = Object.defineProperties,
  L = Object.getOwnPropertyDescriptors,
  f = Object.getOwnPropertySymbols,
  U = Object.prototype.hasOwnProperty,
  V = Object.prototype.propertyIsEnumerable,
  h = (r, o, t) =>
    o in r
      ? I(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[o] = t),
  F = (r, o) => {
    for (var t in o || (o = {})) U.call(o, t) && h(r, t, o[t]);
    if (f) for (var t of f(o)) V.call(o, t) && h(r, t, o[t]);
    return r;
  },
  W = (r, o) => A(r, L(o)),
  q = x(
    (
      r,
      {
        captionSide: o,
        horizontalSpacing: t,
        verticalSpacing: e,
        fontSize: n,
        withBorder: s,
        withColumnBorders: l,
      },
    ) => {
      const i = `${B(1)} solid ${
        r.colorScheme === "dark" ? r.colors.dark[4] : r.colors.gray[3]
      }`;
      return {
        root: W(F({}, r.fn.fontStyles()), {
          width: "100%",
          borderCollapse: "collapse",
          captionSide: o,
          color: r.colorScheme === "dark" ? r.colors.dark[0] : r.black,
          lineHeight: r.lineHeight,
          border: s ? i : void 0,
          "& caption": {
            marginTop: o === "top" ? 0 : r.spacing.xs,
            marginBottom: o === "bottom" ? 0 : r.spacing.xs,
            fontSize: r.fontSizes.sm,
            color:
              r.colorScheme === "dark" ? r.colors.dark[2] : r.colors.gray[6],
          },
          "& thead tr th, & tfoot tr th, & tbody tr th": {
            textAlign: "left",
            fontWeight: "bold",
            color:
              r.colorScheme === "dark" ? r.colors.dark[0] : r.colors.gray[7],
            fontSize: d({ size: n, sizes: r.fontSizes }),
            padding: `${d({ size: e, sizes: r.spacing })} ${d({
              size: t,
              sizes: r.spacing,
            })}`,
          },
          "& thead tr th": { borderBottom: i },
          "& tfoot tr th, & tbody tr th": { borderTop: i },
          "& tbody tr td": {
            padding: `${d({ size: e, sizes: r.spacing })} ${d({
              size: t,
              sizes: r.spacing,
            })}`,
            borderTop: i,
            fontSize: d({ size: n, sizes: r.fontSizes }),
          },
          "& tbody tr:first-of-type td, & tbody tr:first-of-type th": {
            borderTop: "none",
          },
          "& thead th, & tbody td": {
            borderRight: l ? i : "none",
            "&:last-of-type": {
              borderRight: "none",
              borderLeft: l ? i : "none",
            },
          },
          "& tbody tr th": { borderRight: l ? i : "none" },
          "&[data-striped] tbody tr:nth-of-type(odd)": {
            backgroundColor:
              r.colorScheme === "dark" ? r.colors.dark[6] : r.colors.gray[0],
          },
          "&[data-hover] tbody tr": r.fn.hover({
            backgroundColor:
              r.colorScheme === "dark" ? r.colors.dark[5] : r.colors.gray[1],
          }),
        }),
      };
    },
  );
const G = q;
var J = Object.defineProperty,
  K = Object.defineProperties,
  M = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  v = Object.prototype.hasOwnProperty,
  y = Object.prototype.propertyIsEnumerable,
  g = (r, o, t) =>
    o in r
      ? J(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[o] = t),
  Q = (r, o) => {
    for (var t in o || (o = {})) v.call(o, t) && g(r, t, o[t]);
    if (c) for (var t of c(o)) y.call(o, t) && g(r, t, o[t]);
    return r;
  },
  X = (r, o) => K(r, M(o)),
  Y = (r, o) => {
    var t = {};
    for (var e in r) v.call(r, e) && o.indexOf(e) < 0 && (t[e] = r[e]);
    if (r != null && c)
      for (var e of c(r)) o.indexOf(e) < 0 && y.call(r, e) && (t[e] = r[e]);
    return t;
  };
const Z = {
    striped: !1,
    highlightOnHover: !1,
    captionSide: "top",
    horizontalSpacing: "xs",
    fontSize: "sm",
    verticalSpacing: 7,
    withBorder: !1,
    withColumnBorders: !1,
  },
  _ = b.forwardRef((r, o) => {
    const t = E("Table", Z, r),
      {
        className: e,
        children: n,
        striped: s,
        highlightOnHover: l,
        captionSide: i,
        horizontalSpacing: u,
        verticalSpacing: O,
        fontSize: S,
        unstyled: P,
        withBorder: w,
        withColumnBorders: z,
        variant: m,
      } = t,
      $ = Y(t, [
        "className",
        "children",
        "striped",
        "highlightOnHover",
        "captionSide",
        "horizontalSpacing",
        "verticalSpacing",
        "fontSize",
        "unstyled",
        "withBorder",
        "withColumnBorders",
        "variant",
      ]),
      { classes: j, cx: k } = G(
        {
          captionSide: i,
          verticalSpacing: O,
          horizontalSpacing: u,
          fontSize: S,
          withBorder: w,
          withColumnBorders: z,
        },
        { unstyled: P, name: "Table", variant: m },
      );
    return T.createElement(
      D,
      X(Q({}, $), {
        component: "table",
        ref: o,
        className: k(j.root, e),
        "data-striped": s || void 0,
        "data-hover": l || void 0,
      }),
      n,
    );
  });
_.displayName = "@mantine/core/Table";
const or = () => {
  const r = N(),
    { users: o, status: t, error: e } = R((s) => s.user);
  b.useEffect(() => {
    r(C()).unwrap();
  }, []);
  const n =
    o == null
      ? void 0
      : o.map((s) =>
          p(
            "tr",
            {
              children: [
                a("td", { children: s.id }),
                a("td", { children: s.name }),
                a("td", { children: s.username }),
                a("td", { children: s.email }),
                a("td", {
                  children: a(H, { to: `${s.id}`, children: "View" }),
                }),
              ],
            },
            s.id,
          ),
        );
  return a("div", {
    children:
      t === "pending"
        ? a("h1", { children: "Fetching..." })
        : e ||
          p(_, {
            striped: !0,
            highlightOnHover: !0,
            withBorder: !0,
            withColumnBorders: !0,
            children: [
              a("thead", {
                children: p("tr", {
                  children: [
                    a("th", { children: "ID" }),
                    a("th", { children: "Name" }),
                    a("th", { children: "Username" }),
                    a("th", { children: "Email" }),
                  ],
                }),
              }),
              a("tbody", { children: n }),
            ],
          }),
  });
};
export { or as default };

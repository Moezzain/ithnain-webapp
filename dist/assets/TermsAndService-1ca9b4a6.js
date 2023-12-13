import{a as d,u as ie,s as sr,R as b,I as ir,r as k,c as Fe,g as lr,l as ar,t as cr,T as fr,m as ur,e as B,F as dr,j as pr}from"./index-1f403715.js";import{g as ee,I as _r}from"./TextInput-a283e2a2.js";import{M as yr}from"./Modal-9e22f412.js";function Ct(e=!1,r){const{onOpen:t,onClose:o}=r||{},[n,i]=d.useState(e),l=d.useCallback(()=>{i(p=>p||(t==null||t(),!0))},[t]),c=d.useCallback(()=>{i(p=>p&&(o==null||o(),!1))},[o]),a=d.useCallback(()=>{n?c():l()},[c,l,n]);return[n,{open:l,close:c,toggle:a}]}const Ae=d.createContext(null),vr=Ae.Provider,mr=()=>d.useContext(Ae);var gr=Object.defineProperty,X=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,ce=(e,r,t)=>r in e?gr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,fe=(e,r)=>{for(var t in r||(r={}))ze.call(r,t)&&ce(e,t,r[t]);if(X)for(var t of X(r))Te.call(r,t)&&ce(e,t,r[t]);return e},Or=(e,r)=>{var t={};for(var o in e)ze.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&X)for(var o of X(e))r.indexOf(o)<0&&Te.call(e,o)&&(t[o]=e[o]);return t};const br={size:"sm"},Ve=d.forwardRef((e,r)=>{const t=ie("CheckboxGroup",br,e),{children:o,value:n,defaultValue:i,onChange:l,size:c,wrapperProps:a}=t,p=Or(t,["children","value","defaultValue","onChange","size","wrapperProps"]),[_,m]=sr({value:n,defaultValue:i,finalValue:[],onChange:l}),P=w=>{const $=w.currentTarget.value;m(_.includes($)?_.filter(v=>v!==$):[..._,$])};return b.createElement(vr,{value:{value:_,onChange:P,size:c}},b.createElement(ir.Wrapper,fe(fe({labelElement:"div",size:c,__staticSelector:"CheckboxGroup",ref:r},a),p),o))});Ve.displayName="@mantine/core/CheckboxGroup";var Pr=Object.defineProperty,Y=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,ue=(e,r,t)=>r in e?Pr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,te=(e,r)=>{for(var t in r||(r={}))Le.call(r,t)&&ue(e,t,r[t]);if(Y)for(var t of Y(r))Me.call(r,t)&&ue(e,t,r[t]);return e},$r=(e,r)=>{var t={};for(var o in e)Le.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Y)for(var o of Y(e))r.indexOf(o)<0&&Me.call(e,o)&&(t[o]=e[o]);return t};function wr(e){return b.createElement("svg",te({viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),b.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function hr(e){var r=e,{indeterminate:t}=r,o=$r(r,["indeterminate"]);return t?b.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6"},o),b.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):b.createElement(wr,te({},o))}var Er=Object.defineProperty,jr=Object.defineProperties,Sr=Object.getOwnPropertyDescriptors,de=Object.getOwnPropertySymbols,Ir=Object.prototype.hasOwnProperty,Cr=Object.prototype.propertyIsEnumerable,pe=(e,r,t)=>r in e?Er(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_e=(e,r)=>{for(var t in r||(r={}))Ir.call(r,t)&&pe(e,t,r[t]);if(de)for(var t of de(r))Cr.call(r,t)&&pe(e,t,r[t]);return e},ye=(e,r)=>jr(e,Sr(r));const kr={xs:k(16),sm:k(20),md:k(24),lg:k(30),xl:k(36)};var Nr=Fe((e,{radius:r,color:t,transitionDuration:o,labelPosition:n,error:i,indeterminate:l},{size:c})=>{const a=lr({size:c,sizes:kr}),p=e.fn.variant({variant:"filled",color:t});return{icon:ye(_e({},e.fn.cover()),{ref:ee("icon"),color:l?"inherit":e.white,transform:l?"none":`translateY(${k(5)}) scale(0.5)`,opacity:l?1:0,transitionProperty:"opacity, transform",transitionTimingFunction:"ease",transitionDuration:`${o}ms`,pointerEvents:"none",width:"60%",position:"absolute",zIndex:1,margin:"auto","@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}}),inner:{position:"relative",width:a,height:a,order:n==="left"?2:1},input:ye(_e({},e.fn.focusStyles()),{appearance:"none",backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.white,border:`${k(1)} solid ${i?e.fn.variant({variant:"filled",color:"red"}).background:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[4]}`,width:a,height:a,borderRadius:e.fn.radius(r),padding:0,display:"block",margin:0,transition:`border-color ${o}ms ease, background-color ${o}ms ease`,cursor:e.cursorType,"&:checked":{backgroundColor:p.background,borderColor:p.background,[`& + .${ee("icon")}`]:{opacity:1,color:e.white,transform:"translateY(0) scale(1)"}},"&:disabled":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2],borderColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[3],cursor:"not-allowed",[`& + .${ee("icon")}`]:{color:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[5]}}})}});const xr=Nr;var Dr=Object.defineProperty,U=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ve=(e,r,t)=>r in e?Dr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,q=(e,r)=>{for(var t in r||(r={}))Ge.call(r,t)&&ve(e,t,r[t]);if(U)for(var t of U(r))We.call(r,t)&&ve(e,t,r[t]);return e},Rr=(e,r)=>{var t={};for(var o in e)Ge.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&U)for(var o of U(e))r.indexOf(o)<0&&We.call(e,o)&&(t[o]=e[o]);return t};const Fr={size:"sm",transitionDuration:100,icon:hr,labelPosition:"right"},He=d.forwardRef((e,r)=>{const t=ie("Checkbox",Fr,e),{className:o,style:n,sx:i,checked:l,disabled:c,color:a,label:p,indeterminate:_,id:m,size:P,radius:w,wrapperProps:$,children:v,classNames:h,styles:T,transitionDuration:I,icon:x,unstyled:V,labelPosition:L,description:Q,error:D,variant:R}=t,W=Rr(t,["className","style","sx","checked","disabled","color","label","indeterminate","id","size","radius","wrapperProps","children","classNames","styles","transitionDuration","icon","unstyled","labelPosition","description","error","variant"]),O=mr(),N=ar(m),{systemStyles:F,rest:M}=cr(W),{classes:G}=xr({radius:w,color:a,transitionDuration:I,labelPosition:L,error:!!D,indeterminate:_},{name:"Checkbox",classNames:h,styles:T,unstyled:V,variant:R,size:(O==null?void 0:O.size)||P}),H=O?{checked:O.value.includes(M.value),onChange:O.onChange}:{};return b.createElement(_r,q(q({className:o,sx:i,style:n,id:N,size:(O==null?void 0:O.size)||P,labelPosition:L,label:p,description:Q,error:D,disabled:c,__staticSelector:"Checkbox",classNames:h,styles:T,unstyled:V,"data-checked":H.checked||void 0,variant:R},F),$),b.createElement("div",{className:G.inner},b.createElement("input",q(q({id:N,ref:r,type:"checkbox",className:G.input,checked:l,disabled:c},M),H)),b.createElement(x,{indeterminate:_,className:G.icon})))});He.displayName="@mantine/core/Checkbox";He.Group=Ve;var Ar=Object.defineProperty,zr=Object.defineProperties,Tr=Object.getOwnPropertyDescriptors,me=Object.getOwnPropertySymbols,Vr=Object.prototype.hasOwnProperty,Lr=Object.prototype.propertyIsEnumerable,ge=(e,r,t)=>r in e?Ar(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Mr=(e,r)=>{for(var t in r||(r={}))Vr.call(r,t)&&ge(e,t,r[t]);if(me)for(var t of me(r))Lr.call(r,t)&&ge(e,t,r[t]);return e},Gr=(e,r)=>zr(e,Tr(r));function Wr(e,r,t){return typeof e<"u"?e in t.headings.sizes?t.headings.sizes[e].fontSize:k(e):t.headings.sizes[r].fontSize}function Hr(e,r,t){return typeof e<"u"&&e in t.headings.sizes?t.headings.sizes[e].lineHeight:t.headings.sizes[r].lineHeight}var Br=Fe((e,{element:r,weight:t,inline:o},{size:n})=>({root:Gr(Mr({},e.fn.fontStyles()),{fontFamily:e.headings.fontFamily,fontWeight:t||e.headings.sizes[r].fontWeight||e.headings.fontWeight,fontSize:Wr(n,r,e),lineHeight:o?1:Hr(n,r,e),margin:0})}));const qr=Br;var Kr=Object.defineProperty,Z=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,Oe=(e,r,t)=>r in e?Kr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Xr=(e,r)=>{for(var t in r||(r={}))Be.call(r,t)&&Oe(e,t,r[t]);if(Z)for(var t of Z(r))qe.call(r,t)&&Oe(e,t,r[t]);return e},Yr=(e,r)=>{var t={};for(var o in e)Be.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Z)for(var o of Z(e))r.indexOf(o)<0&&qe.call(e,o)&&(t[o]=e[o]);return t};const Ur={order:1},Zr=d.forwardRef((e,r)=>{const t=ie("Title",Ur,e),{className:o,order:n,children:i,unstyled:l,size:c,weight:a,inline:p,variant:_}=t,m=Yr(t,["className","order","children","unstyled","size","weight","inline","variant"]),{classes:P,cx:w}=qr({element:`h${n}`,weight:a,inline:p},{name:"Title",unstyled:l,variant:_,size:c});return[1,2,3,4,5,6].includes(n)?b.createElement(fr,Xr({variant:_,component:`h${n}`,ref:r,className:w(P.root,o)},m),i):null});Zr.displayName="@mantine/core/Title";var Jr=function e(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var o,n,i;if(Array.isArray(r)){if(o=r.length,o!=t.length)return!1;for(n=o;n--!==0;)if(!e(r[n],t[n]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(i=Object.keys(r),o=i.length,o!==Object.keys(t).length)return!1;for(n=o;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[n]))return!1;for(n=o;n--!==0;){var l=i[n];if(!e(r[l],t[l]))return!1}return!0}return r!==r&&t!==t};const be=ur(Jr);function oe(e){return e===null||typeof e!="object"?{}:Object.keys(e).reduce((r,t)=>{const o=e[t];return o!=null&&o!==!1&&(r[t]=o),r},{})}var Qr=Object.defineProperty,Pe=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,$e=(e,r,t)=>r in e?Qr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,tt=(e,r)=>{for(var t in r||(r={}))et.call(r,t)&&$e(e,t,r[t]);if(Pe)for(var t of Pe(r))rt.call(r,t)&&$e(e,t,r[t]);return e};function Ke(e,r){if(r===null||typeof r!="object")return{};const t=tt({},r);return Object.keys(r).forEach(o=>{o.includes(`${String(e)}.`)&&delete t[o]}),t}const ot="__MANTINE_FORM_INDEX__";function we(e,r){return r?typeof r=="boolean"?r:Array.isArray(r)?r.includes(e.replace(/[.][0-9]/g,`.${ot}`)):!1:!1}function he(e,r,t){typeof t.value=="object"&&(t.value=z(t.value)),!t.enumerable||t.get||t.set||!t.configurable||!t.writable||r==="__proto__"?Object.defineProperty(e,r,t):e[r]=t.value}function z(e){if(typeof e!="object")return e;var r=0,t,o,n,i=Object.prototype.toString.call(e);if(i==="[object Object]"?n=Object.create(e.__proto__||null):i==="[object Array]"?n=Array(e.length):i==="[object Set]"?(n=new Set,e.forEach(function(l){n.add(z(l))})):i==="[object Map]"?(n=new Map,e.forEach(function(l,c){n.set(z(c),z(l))})):i==="[object Date]"?n=new Date(+e):i==="[object RegExp]"?n=new RegExp(e.source,e.flags):i==="[object DataView]"?n=new e.constructor(z(e.buffer)):i==="[object ArrayBuffer]"?n=e.slice(0):i.slice(-6)==="Array]"&&(n=new e.constructor(e)),n){for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)he(n,o[r],Object.getOwnPropertyDescriptor(e,o[r]));for(r=0,o=Object.getOwnPropertyNames(e);r<o.length;r++)Object.hasOwnProperty.call(n,t=o[r])&&n[t]===e[t]||he(n,t,Object.getOwnPropertyDescriptor(e,t))}return n||e}function Xe(e){return typeof e!="string"?[]:e.split(".")}function J(e,r,t){const o=Xe(e);if(o.length===0)return t;const n=z(t);if(o.length===1)return n[o[0]]=r,n;let i=n[o[0]];for(let l=1;l<o.length-1;l+=1){if(i===void 0)return n;i=i[o[l]]}return i[o[o.length-1]]=r,n}function S(e,r){const t=Xe(e);if(t.length===0||typeof r!="object"||r===null)return;let o=r[t[0]];for(let n=1;n<t.length&&o!==void 0;n+=1)o=o[t[n]];return o}function Ee(e){const r=oe(e);return{hasErrors:Object.keys(r).length>0,errors:r}}function ne(e,r,t="",o={}){return typeof e!="object"||e===null?o:Object.keys(e).reduce((n,i)=>{const l=e[i],c=`${t===""?"":`${t}.`}${i}`,a=S(c,r);let p=!1;return typeof l=="function"&&(n[c]=l(a,r,c)),typeof l=="object"&&Array.isArray(a)&&(p=!0,a.forEach((_,m)=>ne(l,r,`${c}.${m}`,n))),typeof l=="object"&&typeof a=="object"&&a!==null&&(p||ne(l,r,c,n)),n},o)}function se(e,r){return Ee(typeof e=="function"?e(r):ne(e,r))}function K(e,r,t){if(typeof e!="string")return{hasError:!1,error:null};const o=se(r,t),n=Object.keys(o.errors).find(i=>e.split(".").every((l,c)=>l===i.split(".")[c]));return{hasError:!!n,error:n?o.errors[n]:null}}function nt(e,{from:r,to:t},o){const n=S(e,o);if(!Array.isArray(n))return o;const i=[...n],l=n[r];return i.splice(r,1),i.splice(t,0,l),J(e,i,o)}var st=Object.defineProperty,je=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,Se=(e,r,t)=>r in e?st(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,at=(e,r)=>{for(var t in r||(r={}))it.call(r,t)&&Se(e,t,r[t]);if(je)for(var t of je(r))lt.call(r,t)&&Se(e,t,r[t]);return e};function ct(e,{from:r,to:t},o){const n=`${e}.${r}`,i=`${e}.${t}`,l=at({},o);return Object.keys(o).every(c=>{let a,p;if(c.startsWith(n)&&(a=c,p=c.replace(n,i)),c.startsWith(i)&&(a=c.replace(i,n),p=c),a&&p){const _=l[a],m=l[p];return m===void 0?delete l[a]:l[a]=m,_===void 0?delete l[p]:l[p]=_,!1}return!0}),l}function ft(e,r,t){const o=S(e,t);return Array.isArray(o)?J(e,o.filter((n,i)=>i!==r),t):t}var ut=Object.defineProperty,Ie=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,Ce=(e,r,t)=>r in e?ut(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_t=(e,r)=>{for(var t in r||(r={}))dt.call(r,t)&&Ce(e,t,r[t]);if(Ie)for(var t of Ie(r))pt.call(r,t)&&Ce(e,t,r[t]);return e};function ke(e,r){const t=e.substring(r.length+1).split(".")[0];return parseInt(t,10)}function Ne(e,r,t,o){if(r===void 0)return t;const n=`${String(e)}`;let i=t;o===-1&&(i=Ke(`${n}.${r}`,i));const l=_t({},i),c=new Set;return Object.entries(i).filter(([a])=>{if(!a.startsWith(`${n}.`))return!1;const p=ke(a,n);return Number.isNaN(p)?!1:p>=r}).forEach(([a,p])=>{const _=ke(a,n),m=a.replace(`${n}.${_}`,`${n}.${_+o}`);l[m]=p,c.add(m),c.has(a)||delete l[a]}),l}function yt(e,r,t,o){const n=S(e,o);if(!Array.isArray(n))return o;const i=[...n];return i.splice(typeof t=="number"?t:i.length,0,r),J(e,i,o)}function xe(e,r){const t=Object.keys(e);if(typeof r=="string"){const o=t.filter(n=>n.startsWith(`${r}.`));return e[r]||o.some(n=>e[n])||!1}return t.some(o=>e[o])}function vt(e){if(!/^[0-9a-zA-Z-]+$/.test(e))throw new Error(`[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`)}const mt=typeof window<"u"?d.useLayoutEffect:d.useEffect;function g(e,r){mt(()=>{if(e)return window.addEventListener(e,r),()=>window.removeEventListener(e,r)},[e])}function gt(e,r){e&&vt(e),g(`mantine-form:${e}:set-field-value`,t=>r.setFieldValue(t.detail.path,t.detail.value)),g(`mantine-form:${e}:set-values`,t=>r.setValues(t.detail)),g(`mantine-form:${e}:set-initial-values`,t=>r.setInitialValues(t.detail)),g(`mantine-form:${e}:set-errors`,t=>r.setErrors(t.detail)),g(`mantine-form:${e}:set-field-error`,t=>r.setFieldError(t.detail.path,t.detail.error)),g(`mantine-form:${e}:clear-field-error`,t=>r.clearFieldError(t.detail)),g(`mantine-form:${e}:clear-errors`,r.clearErrors),g(`mantine-form:${e}:reset`,r.reset),g(`mantine-form:${e}:validate`,r.validate),g(`mantine-form:${e}:validate-field`,t=>r.validateField(t.detail)),g(`mantine-form:${e}:reorder-list-item`,t=>r.reorderListItem(t.detail.path,t.detail.payload)),g(`mantine-form:${e}:remove-list-item`,t=>r.removeListItem(t.detail.path,t.detail.index)),g(`mantine-form:${e}:insert-list-item`,t=>r.insertListItem(t.detail.path,t.detail.item,t.detail.index)),g(`mantine-form:${e}:set-dirty`,t=>r.setDirty(t.detail)),g(`mantine-form:${e}:set-touched`,t=>r.setTouched(t.detail)),g(`mantine-form:${e}:reset-dirty`,t=>r.resetDirty(t.detail)),g(`mantine-form:${e}:reset-touched`,r.resetTouched)}function Ot(e){return r=>{if(!r)e(r);else if(typeof r=="function")e(r);else if(typeof r=="object"&&"nativeEvent"in r){const{currentTarget:t}=r;t instanceof HTMLInputElement?t.type==="checkbox"?e(t.checked):e(t.value):(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&e(t.value)}else e(r)}}var bt=Object.defineProperty,Pt=Object.defineProperties,$t=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable,Re=(e,r,t)=>r in e?bt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))wt.call(r,t)&&Re(e,t,r[t]);if(De)for(var t of De(r))ht.call(r,t)&&Re(e,t,r[t]);return e},re=(e,r)=>Pt(e,$t(r));function kt({name:e,initialValues:r={},initialErrors:t={},initialDirty:o={},initialTouched:n={},clearInputErrorOnChange:i=!0,validateInputOnChange:l=!1,validateInputOnBlur:c=!1,onValuesChange:a,transformValues:p=m=>m,validate:_}={}){const[m,P]=d.useState(n),[w,$]=d.useState(o),[v,h]=d.useState(r),[T,I]=d.useState(oe(t)),x=d.useRef(r),V=s=>{x.current=s},L=d.useCallback(()=>P({}),[]),Q=s=>{const f=s?C(C({},v),s):v;V(f),$({})},D=d.useCallback(s=>I(f=>oe(typeof s=="function"?s(f):s)),[]),R=d.useCallback(()=>I({}),[]),W=d.useCallback(()=>{h(x.current),R(),$({}),L()},[]),O=d.useCallback((s,f)=>D(u=>re(C({},u),{[s]:f})),[]),N=d.useCallback(s=>D(f=>{if(typeof s!="string")return f;const u=C({},f);return delete u[s],u}),[]),F=d.useCallback(s=>$(f=>{if(typeof s!="string")return f;const u=Ke(s,f);return delete u[s],u}),[]),M=d.useCallback((s,f)=>{const u=we(s,l);F(s),P(y=>re(C({},y),{[s]:!0})),h(y=>{const E=J(s,f,y);if(u){const j=K(s,_,E);j.hasError?O(s,j.error):N(s)}return a==null||a(E),E}),!u&&i&&O(s,null)},[]),G=d.useCallback(s=>{h(f=>{const u=typeof s=="function"?s(f):s,y=C(C({},f),u);return a==null||a(y),y}),i&&R()},[]),H=d.useCallback((s,f)=>{F(s),h(u=>{const y=nt(s,f,u);return a==null||a(y),y}),I(u=>ct(s,f,u))},[]),Ye=d.useCallback((s,f)=>{F(s),h(u=>{const y=ft(s,f,u);return a==null||a(y),y}),I(u=>Ne(s,f,u,-1))},[]),Ue=d.useCallback((s,f,u)=>{F(s),h(y=>{const E=yt(s,f,u,y);return a==null||a(E),E}),I(y=>Ne(s,u,y,1))},[]),le=d.useCallback(()=>{const s=se(_,v);return I(s.errors),s},[v,_]),Ze=d.useCallback(s=>{const f=K(s,_,v);return f.hasError?O(s,f.error):N(s),f},[v,_]),Je=(s,{type:f="input",withError:u=!0,withFocus:y=!0}={})=>{const j={onChange:Ot(A=>M(s,A))};return u&&(j.error=T[s]),f==="checkbox"?j.checked=S(s,v):j.value=S(s,v),y&&(j.onFocus=()=>P(A=>re(C({},A),{[s]:!0})),j.onBlur=()=>{if(we(s,c)){const A=K(s,_,v);A.hasError?O(s,A.error):N(s)}}),j},Qe=(s,f)=>u=>{u==null||u.preventDefault();const y=le();y.hasErrors?f==null||f(y.errors,v,u):s==null||s(p(v),u)},er=s=>p(s||v),rr=d.useCallback(s=>{s.preventDefault(),W()},[]),tr=s=>{if(s){const u=S(s,w);if(typeof u=="boolean")return u;const y=S(s,v),E=S(s,x.current);return!be(y,E)}return Object.keys(w).length>0?xe(w):!be(v,x.current)},or=d.useCallback(s=>xe(m,s),[m]),nr=d.useCallback(s=>s?!K(s,_,v).hasError:!se(_,v).hasErrors,[v,_]),ae={values:v,errors:T,setValues:G,setInitialValues:V,setErrors:D,setFieldValue:M,setFieldError:O,clearFieldError:N,clearErrors:R,reset:W,validate:le,validateField:Ze,reorderListItem:H,removeListItem:Ye,insertListItem:Ue,getInputProps:Je,onSubmit:Qe,onReset:rr,isDirty:tr,isTouched:or,setTouched:P,setDirty:$,resetTouched:L,resetDirty:Q,isValid:nr,getTransformedValues:er};return gt(e,ae),ae}const Et=["يضمن فريق إثنين الخصوصية التامة للمريض وعدم الإطلاع على أي تفاصيل شخصية لأي حالة من قبل أي شخص خارج إثنين","الهدف الأول و الأساسي لإثنين هو الحرص على وصول المريض لأفضل نتيجة علاجية وصحية ممكنة عن طريق تدريبه وتأهيله للوصول الى التحكم الذاتي المرن بالالتزام بالمعايير الدوائية و نمط الحياة المناسب  مع  متابعتك لطبيبك المعالج و يجب على متلقي الخدمة التعاون مع الأخصائي لغرض الوصول لهذا الهدف.","الحصول علـــى  خدمة التثقيف و الدعم الصحي أو النفسي للمصاب بما يطلبه متلقي الخدمة  من الاستشارة  بشكل أساسي و بما  يناسب كل حالة على حدة حسب تقييم فريق إثنين الصحي  لكل حالة بشكل فردي  اعتمادا على الأبحاث و الدراسات المعتمدة  من  قبل اثنين من مقدمي الخدمة الصحية المؤهلين حسب تخصصاتهم  وفق خطة مبدئية تعرض لمتلقي الخدمة  حسب أهداف الجلسة التثقيفية و يمكن التعديل بها حسب احتياجات المصاب المتغيرة و موافقة مسؤول الحالة.","تختلف الخطة المقترحة من قبل مسؤولي الحالات حسب كل حالة على حدة و يلتزم فريق إثنين من منفذي الخطة بعدد و كم الجلسات التثقيفية حسب الاتفاق المسبق مع متلقي الخدمة و مسؤول الحالة سواء كان المصاب أو أحد ذويه خلال فترة الاشتراك المتفق عليها.","تكون مدة الجلسة التثقيفية معتمدة بـ ثلاثين الى تسعين دقيقة حسب تقييم مقدم الخدمة  ويحق لمتلقي الخدمة التواصل بالرسائل للمتابعة خلال فترة اشتراكه و يلتزم مقدم الخدمة بالرد عليه خلال هذه الفترة.","يتم توفير مقدمي الرعاية الصحية المناسبين حسب توفرهم  للتواصل مع المصاب  أو ذويه  لتحقيق احتياجات المصاب بالرجوع للخطة المرسومة من قبل مسؤول الحالة.","يعرض محتوى إثنين  صيغ مختلفة ومناسبة لكل حالة على حدة كما يتضمن معلومات ذات طابع عام، وليس الغرض منه ولا يوصى بأن يكون بديلا عن المشورة الطبية المتخصصة ومتابعة الطبيب الخاص بالحالة.","يلتزم متلقي الخدمة سواء كان المصاب أو أحد ذويه بالإفصاح عن أي حالة أو وضع صحي يؤثر على الخطة أو الحالة الصحية العامة للمصاب","جميع استشاراتنا النصية و الصوتية مسجلة و خاضعة لقوانين خصوصية المرضى.","يلتزم متلقي الخدمة بالآداب والسلوكيات العامة و يحق لاثنين إيقاف الخدمة دون أي التزام من قبل اثنين في حال تجاوز متلقي الخدمة لأي من الآداب والسلوكيات العامة المتفق عليها","يُحظر عليك نشر أو إرسال أي مواد غير قانونية أو إباحية أو بها تهديد أو قذف أو تشهير أو فُحش أو تحريض أو تدنيس أو أي مادة يمكن أن تشكل أو تحث على سلوك قد يُعتبر مخالفة جنائية أو ينشأ عنه مسؤولية مدنية أو ينتهك القانون بخلاف ذلك.","يتم توفير مواد تثقيفية ملائمة لوضع المصاب الصحي بالإضافة الجلسات التثقيفية التي تحتوي على النصائح المناسبة لكل حالة على حدة حسب تقييم مسؤول الحالة واعتماد مدير تشغيل الخدمات الطبية.","ينبغي ألا تستخدم محتوى إثنين لتشخيص مشكلة صحية أو مشكلة تتعلق باللياقة البدنية أو مرض. اسع دائما للحصول على المشورة من طبيبك بشأن أي حالة طبية أو علاج طبي. إثنين لا يراد به التشخيص الطبي أو العلاج الطبي. لا تتجاهل أبدا المشورة الطبية أو تتأخر في طلبها.","د تكون هناك بعض الصعوبات التقنية و يعمل فريق إثنين على حلها و يجب الإبلاغ عنها فور ملاحظتها للعمل على تجاوزها.","يحق لاثنين الغاء اشتراك المصاب في حال عدم التجاوب مع مقدمي الخدمة."];function Nt({opened:e,close:r}){return B(dr,{children:B(yr,{opened:e,onClose:r,title:"الأحكام و الشروط",children:B("ul",{children:Et.map((t,o)=>pr("li",{children:["•  ",t," ",B("br",{})]},o.toString()))})})})}export{He as C,Zr as T,kt as a,Nt as b,Ct as u};

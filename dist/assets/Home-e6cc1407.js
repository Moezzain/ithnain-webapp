import{h as f,a as u,j as s,F as g,e,C as h,i as p,k as x}from"./index-1f403715.js";import{u as y,A as r,I as c}from"./useToggleSuccessFailedModal-903dff30.js";import{M as n}from"./Modal-9e22f412.js";import"./Paper-41840bff.js";const C="/assets/OnboardingImage-43bc9614.png",j=()=>{const a=f(),[d,m,l,o]=y();return u.useEffect(()=>{const i=new URLSearchParams(window.location.search).get("payment");i==="successful"?(l(),setTimeout(()=>{a("/invoice")},3e3)):i==="failed"&&o()},[]),s(g,{children:[e(n,{withCloseButton:!1,opened:d,onClose:l,padding:0,children:s(r,{icon:e(c,{size:"1rem"}),title:"! مبروك",color:"green",children:[e("p",{className:"",children:"لقد تم دفع الفاتورة بنجاح سيتم ارسال رسالة التأكيد."}),e("p",{className:"",children:"لاتنس تحميل التطبيق."})]})}),e(n,{withCloseButton:!1,opened:m,onClose:o,padding:0,children:e(r,{icon:e(c,{size:"1rem"}),title:"! حدث خطاء ما",color:"red",children:e("p",{children:"لم يتم دفع الفاتورة. يمكنك تسجيل الدخول و المحاولة مرة اخرى"})})}),s(h,{size:520,my:10,className:"flex justify-center flex-col items-start",children:[e("img",{src:C,alt:"company logo",className:"w-full"}),e("img",{src:p,alt:"company logo",className:"w-32"}),e("div",{className:"flex justify-center flex-col items-center my-2",children:e("h5",{children:"تطبيق السكري الخاص بك"})}),s("div",{className:"flex justify-center flex-col items-start mb-2 w-full",children:[e("p",{className:"text-xs",children:"حيا الله مُصاب السكري حبيبنا ، تطبيق اثنين ساعد ١٢ ألف مصاب مثل حالتك.، راح نساعدك وأنت في بيتك اوصل لنتائج تحاليل ممتازة مع السكري وتتخطى التحديات والمخاوف الي تواجهك"}),e("div",{className:"flex justify-center flex-row items-start mt-12 w-full",children:e(x,{onClick:()=>a("/signUp"),variant:"outline",styles:t=>({root:{backgroundColor:"#042C43",borderColor:"#042C43",color:"white",borderRadius:17,"&:not([data-disabled])":t.fn.hover({backgroundColor:"#042C43"})}}),children:"سجل معنا"})})]}),e("div",{id:"content"})]})]})};export{j as default};

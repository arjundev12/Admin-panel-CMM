(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15,30],{621:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return r}));var n="http://3.12.65.48:3000",r="http://3.12.65.48:3000/"},687:function(e,t,c){"use strict";c.r(t);var n=c(622),r=c.n(n),a=c(642);var s=c(636);function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=c(623),l=c(620),j=c(1),u=c(20),b=c(624),d=c.n(b),h=c(625),m=(c(627),c(621)),p=c(619),O=c(618),x=c(17);t.default=Object(u.j)((function(e){var t=Object(j.useState)(""),c=Object(l.a)(t,2),n=c[0],a=c[1],s=Object(j.useState)(""),b=Object(l.a)(s,2),f=b[0],y=b[1],v=Object(j.useState)([]),g=Object(l.a)(v,2),w=g[0],N=g[1],S=Object(u.g)(),k=function(){var e=Object(i.a)(r.a.mark((function e(t){var c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={email:n,password:f},N([].concat(o(w),[c])),e.next=5,d.a.post("".concat(m.a,"/api/admin/login"),c);case 5:a=e.sent,console.warn(a.data),200==a.data.code?(localStorage.setItem("Auth",!0),Object(h.b)("Login successfully"),setTimeout((function(){S.push("/")}),2e3)):Object(h.b)(a.data.message),console.warn(w);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"c-app c-default-layout flex-row align-items-center",children:[Object(x.jsx)(p.n,{children:Object(x.jsx)(p.J,{className:"justify-content-center",children:Object(x.jsx)(p.l,{md:"8",children:Object(x.jsx)(p.j,{children:Object(x.jsx)(p.g,{className:"p-4",children:Object(x.jsx)(p.h,{children:Object(x.jsxs)(p.v,{action:"",onSubmit:k,children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(x.jsxs)(p.D,{className:"mb-3",children:[Object(x.jsx)(p.F,{children:Object(x.jsx)(p.G,{children:Object(x.jsx)(O.a,{name:"cil-user"})})}),Object(x.jsx)(p.C,{type:"text",placeholder:"Username",autoComplete:"username",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(x.jsxs)(p.D,{className:"mb-4",children:[Object(x.jsx)(p.F,{children:Object(x.jsx)(p.G,{children:Object(x.jsx)(O.a,{name:"cil-lock-locked"})})}),Object(x.jsx)(p.C,{type:"password",placeholder:"Password",autoComplete:"current-password",value:f,onChange:function(e){return y(e.target.value)}})]}),Object(x.jsxs)(p.J,{children:[Object(x.jsx)(p.l,{xs:"6",children:Object(x.jsx)(p.e,{color:"primary",className:"px-4",type:"submit",children:"Login"})}),Object(x.jsx)(p.l,{xs:"6",className:"text-right",children:Object(x.jsx)(p.e,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})})})})})}),Object(x.jsx)(h.a,{})]})}))}}]);
//# sourceMappingURL=15.eb49ca42.chunk.js.map
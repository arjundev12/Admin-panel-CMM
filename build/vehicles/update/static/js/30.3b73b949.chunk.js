(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[30],{687:function(e,t,c){"use strict";c.r(t);var a=c(622),n=c.n(a),r=c(642);var s=c(636);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=c(623),l=c(620),j=c(1),u=c(20),b=c(624),d=c.n(b),m=c(625),O=(c(627),c(621)),h=c(619),p=c(618),x=c(17);t.default=Object(u.j)((function(e){var t=Object(j.useState)(""),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(j.useState)(""),b=Object(l.a)(s,2),f=b[0],y=b[1],g=Object(j.useState)([]),v=Object(l.a)(g,2),w=v[0],N=v[1],S=Object(u.g)(),k=function(){var e=Object(i.a)(n.a.mark((function e(t){var c,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={email:a,password:f},N([].concat(o(w),[c])),e.next=5,d.a.post("".concat(O.a,"/api/admin/login"),c);case 5:r=e.sent,console.warn(r.data),200==r.data.code?(localStorage.setItem("Auth",!0),Object(m.b)("Login successfully"),setTimeout((function(){S.push("/")}),2e3)):Object(m.b)(r.data.message),console.warn(w);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"c-app c-default-layout flex-row align-items-center",children:[Object(x.jsx)(h.n,{children:Object(x.jsx)(h.J,{className:"justify-content-center",children:Object(x.jsx)(h.l,{md:"8",children:Object(x.jsx)(h.j,{children:Object(x.jsx)(h.g,{className:"p-4",children:Object(x.jsx)(h.h,{children:Object(x.jsxs)(h.v,{action:"",onSubmit:k,children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(x.jsxs)(h.D,{className:"mb-3",children:[Object(x.jsx)(h.F,{children:Object(x.jsx)(h.G,{children:Object(x.jsx)(p.a,{name:"cil-user"})})}),Object(x.jsx)(h.C,{type:"text",placeholder:"Username",autoComplete:"username",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(x.jsxs)(h.D,{className:"mb-4",children:[Object(x.jsx)(h.F,{children:Object(x.jsx)(h.G,{children:Object(x.jsx)(p.a,{name:"cil-lock-locked"})})}),Object(x.jsx)(h.C,{type:"password",placeholder:"Password",autoComplete:"current-password",value:f,onChange:function(e){return y(e.target.value)}})]}),Object(x.jsxs)(h.J,{children:[Object(x.jsx)(h.l,{xs:"6",children:Object(x.jsx)(h.e,{color:"primary",className:"px-4",type:"submit",children:"Login"})}),Object(x.jsx)(h.l,{xs:"6",className:"text-right",children:Object(x.jsx)(h.e,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})})})})})}),Object(x.jsx)(m.a,{})]})}))}}]);
//# sourceMappingURL=30.3b73b949.chunk.js.map
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[27],{710:function(e,t,c){"use strict";c.r(t);var a=c(621),n=c.n(a),r=c(622),s=c(618),i=c(1),j=c(20),b=c(158),d=c(624),o=c.n(d),l=c(687),u=c(626),O=(c(627),c(620)),h=c(633),x=c(17);t.default=function(){Object(j.g)();var e=Object(i.useState)(3),t=Object(s.a)(e,2),c=t[0],a=(t[1],Object(i.useState)(0)),d=Object(s.a)(a,2),m=d[0],p=d[1],f=Object(i.useState)(1),g=Object(s.a)(f,2),w=g[0],v=g[1],S=Object(i.useState)(1),k=Object(s.a)(S,2),y=k[0],N=k[1],P=Object(i.useState)([]),J=Object(s.a)(P,2),_=J[0],q=J[1];Object(j.i)().id;Object(i.useEffect)((function(){A(w)}),[w,m]);var A=function(){var e=Object(r.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t={offset:w,limit:3},console.log("requset0",t),e.next=5,o.a.post("".concat(O.a,"/api/admin/get-customers"),t);case 5:if(c=e.sent,console.warn("respons",c.data.data),200!=c.data.code){e.next=15;break}return Object(u.b)("List get successfully"),e.next=11,p(c.data.data.total);case 11:return e.next=13,q(c.data.data.docs);case 13:e.next=16;break;case 15:Object(u.b)("somthing went wrong");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(b.b,{className:"btn btn-primary",to:"/dashboard",children:"back to Home"}),Object(x.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"S.no"}),Object(x.jsx)("th",{children:"Name"}),Object(x.jsx)("th",{children:"Status"}),Object(x.jsx)("th",{children:"Number"}),Object(x.jsx)("th",{children:"address"}),Object(x.jsx)("th",{children:"Actions"})]})}),Object(x.jsx)("tbody",{children:_.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t+y+1}),Object(x.jsx)("td",{children:e.name?e.name:null}),Object(x.jsx)("td",{children:e.status}),Object(x.jsx)("td",{children:e.number}),Object(x.jsx)("td",{children:e.location}),Object(x.jsxs)("td",{children:[Object(x.jsx)(b.b,{className:"btn btn-primary mr-2",to:"/customer/edit/".concat(e._id),children:" edit "}),Object(x.jsx)(b.b,{className:"btn btn-primary mr-2",to:"/wallet/customer/".concat(e._id),children:" wallet "})]})]})}))})]}),Object(x.jsx)(u.a,{}),Object(x.jsx)(h.a,{showPerPage:c,onPaginationChange:function(e,t){console.warn("getee, ",e,t),v(e),N(t)},total:m,page:w})]})}}}]);
//# sourceMappingURL=27.6c32434a.chunk.js.map
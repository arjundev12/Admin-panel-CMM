(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[29],{707:function(e,t,c){"use strict";c.r(t);var n=c(622),r=c.n(n),a=c(641),i=c(623),s=c(620),d=c(1),j=c(20),b=c(158),o=c(624),h=c.n(o),l=c(689),u=c(621),O=c(17);t.default=function(){Object(j.g)();var e=Object(d.useState)([{id:"",name:"",user_type:"",minner_Activity:""}]),t=Object(s.a)(e,2),c=t[0],n=t[1];Object(j.i)().id;Object(d.useEffect)((function(){o()}),[]);var o=function(){var e=Object(i.a)(r.a.mark((function e(){var t,c,i,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,h.a.post("".concat(u.a,"/api/admin/get-news"));case 3:c=e.sent,console.warn(c.data.data),i=Object(a.a)(c.data.data.docs);try{for(i.s();!(s=i.n()).done;)(d=s.value).title&&t.push(d)}catch(r){i.e(r)}finally{i.f()}n(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(b.b,{className:"btn btn-primary",to:"/",children:"back to Home"}),Object(O.jsx)(b.b,{className:"btn btn-primary",to:"/add/news",children:"add News"}),Object(O.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"S.no"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Content"}),Object(O.jsx)("th",{children:"Created by"})]})}),Object(O.jsx)("tbody",{children:c.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:e.title}),Object(O.jsx)("td",{children:e.content}),Object(O.jsx)("td",{children:e.created_by+""})]})}))})]})]})}}}]);
//# sourceMappingURL=29.b8eec819.chunk.js.map
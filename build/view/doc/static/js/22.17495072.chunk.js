(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{705:function(e,t,n){"use strict";n.r(t);var a=n(622),r=n.n(a),c=n(623),o=n(158),s=n(61),i=n(620),u=n(1),l=n(624),p=n.n(l),b=n(19),m=n(621),j=n(627),d=n(37);t.default=function(){var e=Object(b.g)(),t=Object(u.useState)({title:"",content:"",image:""}),n=Object(i.a)(t,2),a=n[0],l=n[1],f=Object(u.useState)({}),h=Object(i.a)(f,2),O=h[0],x=h[1],g=a.title,v=a.content,w=function(e){l(Object(s.a)(Object(s.a)({},a),{},Object(o.a)({},e.target.name,e.target.value)))},N=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x({image:t.target.files[0]});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",O.image),e.next=4,p.a.post("".concat(m.a,"/api/admin/upload-image"),n);case 4:if(200!=(c=e.sent).data.code){e.next=10;break}return Object(j.b)(c.data.message),console.warn(c.data.data.path),e.next=10,l(Object(s.a)(Object(s.a)({},a),{},{image:c.data.data.path}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var t=Object(c.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.warn("onsumbit",a),t.next=4,p.a.post("".concat(m.a,"/api/admin/news"),a);case 4:c=t.sent,Object(j.b)(c.data.message),setTimeout((function(){e.push("/news")}),1e3);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Add A News"}),Object(d.jsxs)("form",{onSubmit:function(e){return k(e)},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Title",name:"title",value:g,onChange:function(e){return w(e)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your content",name:"content",value:v,onChange:function(e){return w(e)}})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"file",name:"file",onChange:function(e){return N(e)}}),Object(d.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){return y(e)},children:"Upload"})]}),Object(d.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]}),Object(d.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=22.17495072.chunk.js.map
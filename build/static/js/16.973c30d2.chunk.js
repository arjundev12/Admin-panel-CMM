(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{619:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a="http://3.12.65.48:3001"},697:function(t,e,n){"use strict";n.r(e);var a=n(622),r=n.n(a),c=n(623),o=n(159),s=n(43),i=n(621),u=n(1),l=n(624),p=n.n(l),b=n(19),m=n(619),d=n(627),f=n(20);e.default=function(){var t=Object(b.g)(),e=Object(u.useState)({title:"",content:"",image:""}),n=Object(i.a)(e,2),a=n[0],l=n[1],j=Object(u.useState)({}),h=Object(i.a)(j,2),O=h[0],x=h[1],v=a.title,g=a.content,w=function(t){l(Object(s.a)(Object(s.a)({},a),{},Object(o.a)({},t.target.name,t.target.value)))},N=function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x({image:e.target.files[0]});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("image",O.image),t.next=4,p.a.post("".concat(m.a,"/api/admin/upload-image"),n);case 4:if(200!=(c=t.sent).data.code){t.next=10;break}return Object(d.b)(c.data.message),console.warn(c.data.data.path),t.next=10,l(Object(s.a)(Object(s.a)({},a),{},{image:c.data.data.path}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.warn("onsumbit",a),e.next=4,p.a.post("".concat(m.a,"/api/admin/news"),a);case 4:c=e.sent,Object(d.b)(c.data.message),setTimeout((function(){t.push("/news")}),1e3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Add A News"}),Object(f.jsxs)("form",{onSubmit:function(t){return k(t)},children:[Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Title",name:"title",value:v,onChange:function(t){return w(t)}})}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your content",name:"content",value:g,onChange:function(t){return w(t)}})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"file",name:"file",onChange:function(t){return N(t)}}),Object(f.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(t){return y(t)},children:"Upload"})]}),Object(f.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]}),Object(f.jsx)(d.a,{})]})}}}]);
//# sourceMappingURL=16.973c30d2.chunk.js.map
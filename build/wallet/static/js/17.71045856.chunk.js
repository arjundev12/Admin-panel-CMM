(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{625:function(e,t,n){},718:function(e,t,n){"use strict";n.r(t);var a=n(621),c=n.n(a),r=n(622),s=n(618),i=n(1),o=n(20),u=n(158),j=n(624),d=n.n(j),l=n(728),b=n(687),O=n(725),h=n(626),p=(n(627),n(620)),f=(n(633),n(625),n(656)),x=n.n(f),m=n(17);t.default=function(){Object(o.g)();var e=Object(i.useState)(10),t=Object(s.a)(e,2),n=(t[0],t[1],Object(i.useState)(0)),a=Object(s.a)(n,2),j=a[0],f=a[1],v=Object(i.useState)(1),g=Object(s.a)(v,2),w=g[0],y=(g[1],Object(i.useState)(1)),k=Object(s.a)(y,2),S=(k[0],k[1],Object(i.useState)([])),C=Object(s.a)(S,2),N=C[0],H=C[1];Object(o.i)().id;Object(i.useEffect)((function(){A(w)}),[w,j]);var A=function(){var e=Object(r.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={offset:w,limit:10},console.log("requset0",t),e.next=4,d.a.post("".concat(p.a,"/api/admin/cities"),t);case 4:if(n=e.sent,console.warn("respons",n.data.data),200!=n.data.code){e.next=14;break}return Object(h.b)("List get successfully"),e.next=10,f(n.data.data.total);case 10:return e.next=12,H(n.data.data.docs);case 12:e.next=15;break;case 14:Object(h.b)("somthing went wrong");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(r.a)(c.a.mark((function e(t,n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("oninput change data ",n),a={},"status"==t.target.name&&(a.status=t.target.value),a._id=n._id,e.next=6,d.a.put("".concat(p.a,"/api/admin/update-city"),a);case 6:200==(r=e.sent).data.code?(Object(h.b)(r.data.message),A(w)):Object(h.b)("somthing went wrong");case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),P=Object(i.useState)(!1),B=Object(s.a)(P,2),F=B[0],J=B[1],T=Object(i.useState)([]),_=Object(s.a)(T,2),q=_[0],D=_[1],E=Object(i.useState)(),L=Object(s.a)(E,2),z=L[0],G=L[1],K=Object(i.useState)(),M=Object(s.a)(K,2),Q=M[0],R=M[1],U=Object(i.useState)([]),V=Object(s.a)(U,2),W=V[0],X=V[1],Y=function(){return J(!1)},Z=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(!0),e.next=3,x.a.getStatesOfCountry("IN");case 3:return t=e.sent,e.next=6,D(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t.target.value);case 2:return e.next=4,x.a.getCitiesOfState("IN",t.target.value);case 4:return n=e.sent,e.next=7,X(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t.target.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={cityName:Q},e.next=4,d.a.post("".concat(p.a,"/api/admin/add-city"),n);case 4:(a=e.sent).data.code,Object(h.b)(a.data.message),Y(),A(w);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=Object(i.useState)(!1),ae=Object(s.a)(ne,2),ce=ae[0],re=ae[1],se=Object(i.useState)({name:""}),ie=Object(s.a)(se,2),oe=ie[0],ue=ie[1],je=Object(i.useState)({code:""}),de=Object(s.a)(je,2),le=de[0],be=de[1],Oe=Object(i.useState)({}),he=Object(s.a)(Oe,2),pe=he[0],fe=he[1],xe=function(){return re(!1)},me=function(){var e=Object(r.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return re(!0),console.warn("dataataaa",n),e.next=4,ue(n);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ve=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.warn("onInputChangePin",t.target.value.length),6!=t.target.value.length){e.next=7;break}return e.next=4,be({code:t.target.value});case 4:fe({}),e.next=8;break;case 7:fe({pin:"invalid pin"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={cityid:oe.id,name:le.code},e.next=3,d.a.post("".concat(p.a,"/api/admin/add-pin"),n);case 3:(a=e.sent).data.code,Object(h.b)(a.data.message),xe(),A(w);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{class:"btn-right",children:[Object(m.jsx)(u.b,{className:"btn btn-primary btn-home",to:"/dashboard",children:"back to Home"}),Object(m.jsx)(l.a,{variant:"primary btn-link",onClick:Z,children:"add city"}),Object(m.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"S.no"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{class:"status",children:"Status"}),Object(m.jsx)("th",{children:"Actions"})]})}),Object(m.jsx)("tbody",{children:N.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:e.name?e.name:null}),Object(m.jsx)("td",{children:Object(m.jsxs)("select",{class:"form-control",name:"status",value:e.status,onChange:function(t){return I(t,e)},children:[Object(m.jsx)("option",{value:"1",children:"Active"}),Object(m.jsx)("option",{value:"0",children:"Inactive"})]})}),Object(m.jsx)("td",{children:Object(m.jsx)(l.a,{className:"btn btn-primary mr-2 ",onClick:function(t){return me(t,e)},children:"Add Pincode"})})]})}))})]}),Object(m.jsxs)(O.a,{show:F,onHide:Y,children:[Object(m.jsx)(O.a.Header,{closeButton:!0,children:Object(m.jsx)(O.a.Title,{children:"Add City"})}),Object(m.jsx)("div",{class:"row",children:Object(m.jsxs)("div",{class:"popupselect",children:[Object(m.jsx)("div",{class:"form-group col-sm-6",children:Object(m.jsxs)("div",{class:"state-name",children:[Object(m.jsx)("label",{children:"State Name"}),Object(m.jsx)("select",{class:"form-control",name:"regionName",onChange:function(e){return $(e)},value:z,children:q.map((function(e,t){return Object(m.jsx)("option",{value:e.isoCode,children:e.name})}))})]})}),Object(m.jsx)("div",{class:"form-group col-sm-6",children:Object(m.jsxs)("div",{class:"city",children:[Object(m.jsx)("label",{children:"City Name"}),Object(m.jsx)("select",{class:"form-control",name:"cityName",onChange:function(e){return ee(e)},value:Q,children:W.map((function(e,t){return Object(m.jsx)("option",{value:e.name,children:e.name})}))})]})})]})}),Object(m.jsxs)(O.a.Footer,{children:[Object(m.jsx)(l.a,{variant:"secondary",onClick:Y,children:"Close"}),Object(m.jsx)(l.a,{variant:"primary",onClick:function(e){return te(e)},children:"Submit"})]})]}),Object(m.jsxs)(O.a,{show:ce,onHide:xe,children:[Object(m.jsx)(O.a.Header,{closeButton:!0,children:Object(m.jsx)(O.a.Title,{children:oe.name})}),Object(m.jsx)("div",{class:"row",children:Object(m.jsxs)("div",{class:"state-name-code",children:[Object(m.jsx)("label",{children:"Pincode"}),Object(m.jsx)("input",{type:"text",name:"code",class:"form-control",placeholder:"",onChange:function(e){return ve(e)}}),Object(m.jsx)("div",{className:"text-danger",children:pe.pin})]})}),Object(m.jsx)("div",{class:"footer-side",children:Object(m.jsxs)(O.a.Footer,{children:[Object(m.jsx)(l.a,{variant:"secondary",onClick:xe,children:"Close"}),Object(m.jsx)(l.a,{variant:"primary",onClick:function(e){return ge(e)},children:"Submit"})]})})]}),Object(m.jsx)(h.a,{})]})}}}]);
//# sourceMappingURL=17.71045856.chunk.js.map
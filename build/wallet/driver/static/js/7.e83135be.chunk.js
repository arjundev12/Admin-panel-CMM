(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7],{620:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c}));var s="http://3.12.65.48:3000",c="http://3.12.65.48:3000/"},632:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(13);var s=a(1),c=a.n(s),n=c.a.createContext({});n.Consumer,n.Provider;function r(e,t){var a=Object(s.useContext)(n);return e||a[t]||t}},633:function(e,t,a){"use strict";var s=a(618),c=a(1),n=a(17);t.a=function(e){var t=e.showPerPage,a=e.onPaginationChange,r=e.total,i=e.page,l=Object(c.useState)(i),o=Object(s.a)(l,2),d=o[0],j=o[1],m=Object(c.useState)(),b=Object(s.a)(m,2),u=b[0],h=b[1];console.log("numberOfButtons",u),console.log("total",r),console.log("counter",d),console.log("showPerPage",t),Object(c.useEffect)((function(){a(d,t*d-t),h(Math.ceil(r/t))}),[d]);var x=function(e){"prev"===e?j(1===d?1:d-1):"next"===e&&j(u===d?d:d+1)};return Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)("nav",{"aria-label":"Page navigation example",children:Object(n.jsxs)("ul",{class:"pagination",children:[Object(n.jsx)("li",{class:"page-item",children:Object(n.jsx)("a",{class:"page-link",onClick:function(){return x("prev")},children:"Previous"})}),new Array(u).fill("").map((function(e,t){return Object(n.jsx)("li",{class:"page-item ".concat(t+1===d?"active":null),children:Object(n.jsx)("a",{class:"page-link",onClick:function(){return j(t+1)},children:t+1})})})),Object(n.jsx)("li",{class:"page-item",children:Object(n.jsx)("a",{class:"page-link",onClick:function(){return x("next")},children:"Next"})})]})})})}},642:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(637);function c(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(s.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var c=0,n=function(){};return{s:n,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,r=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw r}}}}},669:function(e,t,a){"use strict";a.r(t);var s=a(621),c=a.n(s),n=a(642),r=a(622),i=a(618),l=a(1),o=a(20),d=a(158),j=a(624),m=a.n(j),b=a(687),u=a(626),h=(a(627),a(620)),x=a(633),O=a(17);t.default=function(){Object(o.g)();var e=Object(l.useState)(2),t=Object(i.a)(e,2),a=t[0],s=(t[1],Object(l.useState)(0)),j=Object(i.a)(s,2),p=j[0],v=j[1],f=Object(l.useState)(1),g=Object(i.a)(f,2),N=g[0],y=g[1],w=Object(l.useState)(1),S=Object(i.a)(w,2),k=S[0],z=S[1],C=Object(l.useState)([]),P=Object(i.a)(C,2),q=P[0],I=P[1],D=Object(o.i)().type;Object(l.useEffect)((function(){_(N)}),[N,p]);var _=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,s,r,i,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],s={type:D,offset:t,limit:2},e.next=4,m.a.post("".concat(h.a,"/api/admin/get-wallets"),s);case 4:r=e.sent,console.warn(r.data.data),i=Object(n.a)(r.data.data.docs);try{for(i.s();!(l=i.n()).done;)o=l.value,"customer"==D?o.customer_id&&a.push(o):a.push(o)}catch(c){i.e(c)}finally{i.f()}return Object(u.b)("List get successfully"),e.next=11,v(r.data.data.total);case 11:return e.next=13,I(a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)(d.b,{className:"btn btn-primary",to:"/wallet/".concat(D),children:"back"}),Object(O.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"S.no"}),Object(O.jsx)("th",{children:"wallet Id"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"total_amount"}),Object(O.jsx)("th",{children:"wallet_type"}),Object(O.jsx)("th",{children:"Actions"})]})}),Object(O.jsx)("tbody",{children:q.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+k+1}),Object(O.jsx)("td",{children:e._id}),Object(O.jsx)("td",{children:"customer"==e.wallet_type?e.customer_id.name:e.driver_id.name}),Object(O.jsx)("td",{children:e.total_amount}),Object(O.jsx)("td",{children:e.wallet_type}),Object(O.jsx)("td",{children:Object(O.jsx)(d.b,{className:"btn btn-primary mr-2 ",to:"/wallet/".concat(e._id,"/").concat(e.wallet_type),children:"view "})})]})}))})]}),Object(O.jsx)(u.a,{}),Object(O.jsx)(x.a,{showPerPage:a,onPaginationChange:function(e,t){console.warn("getee, ",e,t),y(e),z(t)},total:p,page:N})]})}},687:function(e,t,a){"use strict";var s=a(13),c=a(30),n=a(631),r=a.n(n),i=a(1),l=a.n(i),o=a(632),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.striped,d=e.bordered,j=e.borderless,m=e.hover,b=e.size,u=e.variant,h=e.responsive,x=Object(c.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(o.a)(a,"table"),p=r()(n,O,u&&O+"-"+u,b&&O+"-"+b,i&&O+"-striped",d&&O+"-bordered",j&&O+"-borderless",m&&O+"-hover"),v=l.a.createElement("table",Object(s.a)({},x,{className:p,ref:t}));if(h){var f=O+"-responsive";return"string"===typeof h&&(f=f+"-"+h),l.a.createElement("div",{className:f},v)}return v}));t.a=d},726:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(40),r=a(20),i=a(623),l=c.a.lazy((function(){return Promise.all([a.e(2),a.e(27)]).then(a.bind(null,700))})),o=c.a.lazy((function(){return a.e(29).then(a.bind(null,691))})),d=c.a.lazy((function(){return a.e(9).then(a.bind(null,707))})),j=c.a.lazy((function(){return a.e(14).then(a.bind(null,708))})),m=c.a.lazy((function(){return a.e(22).then(a.bind(null,709))})),b=c.a.lazy((function(){return a.e(26).then(a.bind(null,710))})),u=c.a.lazy((function(){return Promise.resolve().then(a.bind(null,669))})),h=c.a.lazy((function(){return a.e(18).then(a.bind(null,711))})),x=c.a.lazy((function(){return a.e(13).then(a.bind(null,712))})),O=c.a.lazy((function(){return a.e(10).then(a.bind(null,713))})),p=c.a.lazy((function(){return a.e(30).then(a.bind(null,714))})),v=c.a.lazy((function(){return a.e(31).then(a.bind(null,715))})),f=c.a.lazy((function(){return a.e(16).then(a.bind(null,716))})),g=c.a.lazy((function(){return a.e(15).then(a.bind(null,717))})),N=c.a.lazy((function(){return Promise.all([a.e(3),a.e(11),a.e(17)]).then(a.bind(null,718))})),y=c.a.lazy((function(){return Promise.all([a.e(3),a.e(38),a.e(12)]).then(a.bind(null,719))})),w=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:l},{path:"/users/add-users",name:"Add User",component:m},{path:"/users",exact:!0,name:"Users",component:o},{path:"/user/:id",exact:!0,name:"User Details",component:d},{path:"/user/edit/:id",exact:!0,name:"Edit User",component:j},{path:"/wallets/:type",exact:!0,name:"walletd",component:u},{path:"/wallet/:type/:id",exact:!0,name:"ViewWallet",component:h},{path:"/customers",exact:!0,name:"customers",component:b},{path:"/customer/edit/:id",exact:!0,name:"editProfile",component:x},{path:"/view/doc/:id",exact:!0,name:"viewDoc",component:O},{path:"/vehicles",exact:!0,name:"vehicles",component:p},{path:"/vehicles/update/:id",exact:!0,name:"EditVehicle",component:g},{path:"/vehicles/types",exact:!0,name:"vehicleType",component:v},{path:"/vehicles/edit/:id",exact:!0,name:"EditVehicleType",component:f},{path:"/cities",exact:!0,name:"Cities",component:N},{path:"/addcity",exact:!0,name:"add city",component:y}],S=a(17),k=Object(S.jsx)("div",{className:"pt-3 text-center",children:Object(S.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),z=function(){return Object(S.jsx)("main",{className:"c-main",children:Object(S.jsx)(i.n,{fluid:!0,children:Object(S.jsx)(s.Suspense,{fallback:k,children:Object(S.jsxs)(r.d,{children:[w.map((function(e,t){return e.component&&Object(S.jsx)(r.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(S.jsx)(i.t,{children:Object(S.jsx)(e.component,Object(n.a)({},t))})}},t)})),Object(S.jsx)(r.a,{from:"/",to:"/dashboard"})]})})})})},C=c.a.memo(z),P=function(){return Object(S.jsxs)(i.u,{fixed:!1,children:[Object(S.jsx)("div",{children:Object(S.jsx)("span",{className:"ml-1",children:"callmymoover & 2021 Reserved"})}),Object(S.jsx)("div",{className:"mfs-auto",children:Object(S.jsx)("h5",{rel:"noopener noreferrer",children:"Powered by Winklix"})})]})},q=c.a.memo(P),I=a(161),D=a(619),_=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.sidebarShow}));return Object(S.jsxs)(i.w,{withSubheader:!0,children:[Object(S.jsx)(i.U,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:a})}}),Object(S.jsx)(i.U,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:a})}}),Object(S.jsx)(i.x,{className:"mx-auto d-lg-none",to:"/",children:Object(S.jsx)(D.a,{name:"logo",height:"48",alt:"Logo"})}),Object(S.jsx)(i.y,{className:"d-md-down-none mr-auto",children:Object(S.jsx)(i.z,{className:"px-3",children:Object(S.jsx)(i.A,{to:"/dashboard",children:"Dashboard"})})}),Object(S.jsxs)(i.y,{className:"px-3",children:[Object(S.jsx)(J,{}),Object(S.jsx)(M,{}),Object(S.jsx)(V,{}),Object(S.jsx)(B,{})]}),Object(S.jsxs)(i.S,{className:"px-3 justify-content-between",children:[Object(S.jsx)(i.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:w}),Object(S.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(S.jsx)(i.H,{className:"c-subheader-nav-link",href:"#",children:Object(S.jsx)(D.a,{name:"cil-speech",alt:"Settings"})}),Object(S.jsxs)(i.H,{className:"c-subheader-nav-link","aria-current":"page",to:"/dashboard",children:[Object(S.jsx)(D.a,{name:"cil-graph",alt:"Dashboard"}),"\xa0Dashboard"]}),Object(S.jsxs)(i.H,{className:"c-subheader-nav-link",href:"#",children:[Object(S.jsx)(D.a,{name:"cil-settings",alt:"Settings"}),"\xa0Settings"]})]})]})]})},A=a(621),E=a.n(A),L=a(622),U=a(728),B=function(){var e=Object(r.g)(),t=function(){var t=Object(L.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("hiiiii"),localStorage.clear(),e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(S.jsx)("div",{children:Object(S.jsx)(U.a,{onClick:function(e){return t(e)},children:"log out"})})},V=function(){return Object(S.jsxs)(i.p,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down",children:[Object(S.jsxs)(i.s,{className:"c-header-nav-link",caret:!1,children:[Object(S.jsx)(D.a,{name:"cil-envelope-open"}),Object(S.jsx)(i.a,{shape:"pill",color:"info",children:4})]}),Object(S.jsxs)(i.r,{className:"pt-0",placement:"bottom-end",children:[Object(S.jsx)(i.q,{header:!0,tag:"div",color:"light",children:Object(S.jsxs)("strong",{children:["You have ",4," messages"]})}),Object(S.jsx)(i.q,{href:"#",children:Object(S.jsxs)("div",{className:"message",children:[Object(S.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(S.jsxs)("div",{className:"c-avatar",children:[Object(S.jsx)(i.B,{src:"avatars/7.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(S.jsx)("span",{className:"c-avatar-status bg-success"})]})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("small",{className:"text-muted",children:"John Doe"}),Object(S.jsx)("small",{className:"text-muted float-right mt-1",children:"Just now"})]}),Object(S.jsxs)("div",{className:"text-truncate font-weight-bold",children:[Object(S.jsx)("span",{className:"fa fa-exclamation text-danger"})," Important message"]}),Object(S.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(S.jsx)(i.q,{href:"#",children:Object(S.jsxs)("div",{className:"message",children:[Object(S.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(S.jsxs)("div",{className:"c-avatar",children:[Object(S.jsx)(i.B,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(S.jsx)("span",{className:"c-avatar-status bg-warning"})]})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("small",{className:"text-muted",children:"Jane Dovve"}),Object(S.jsx)("small",{className:"text-muted float-right mt-1",children:"5 minutes ago"})]}),Object(S.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(S.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(S.jsx)(i.q,{href:"#",children:Object(S.jsxs)("div",{className:"message",children:[Object(S.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(S.jsxs)("div",{className:"c-avatar",children:[Object(S.jsx)(i.B,{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(S.jsx)("span",{className:"c-avatar-status bg-danger"})]})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("small",{className:"text-muted",children:"Janet Doe"}),Object(S.jsx)("small",{className:"text-muted float-right mt-1",children:"1:52 PM"})]}),Object(S.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(S.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(S.jsx)(i.q,{href:"#",children:Object(S.jsxs)("div",{className:"message",children:[Object(S.jsx)("div",{className:"pt-3 mr-3 float-left",children:Object(S.jsxs)("div",{className:"c-avatar",children:[Object(S.jsx)(i.B,{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),Object(S.jsx)("span",{className:"c-avatar-status bg-info"})]})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("small",{className:"text-muted",children:"Joe Doe"}),Object(S.jsx)("small",{className:"text-muted float-right mt-1",children:"4:03 AM"})]}),Object(S.jsx)("div",{className:"text-truncate font-weight-bold",children:"Lorem ipsum dolor sit amet"}),Object(S.jsx)("div",{className:"small text-muted text-truncate",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."})]})}),Object(S.jsx)(i.q,{href:"#",className:"text-center border-top",children:Object(S.jsx)("strong",{children:"View all messages"})})]})]})},J=function(){return Object(S.jsxs)(i.p,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(S.jsxs)(i.s,{className:"c-header-nav-link",caret:!1,children:[Object(S.jsx)(D.a,{name:"cil-bell"}),Object(S.jsx)(i.a,{shape:"pill",color:"danger",children:5})]}),Object(S.jsxs)(i.r,{placement:"bottom-end",className:"pt-0",children:[Object(S.jsx)(i.q,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(S.jsxs)("strong",{children:["You have ",5," notifications"]})}),Object(S.jsxs)(i.q,{children:[Object(S.jsx)(D.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"]}),Object(S.jsxs)(i.q,{children:[Object(S.jsx)(D.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"]}),Object(S.jsxs)(i.q,{children:[Object(S.jsx)(D.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"]}),Object(S.jsxs)(i.q,{children:[Object(S.jsx)(D.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"]}),Object(S.jsxs)(i.q,{children:[Object(S.jsx)(D.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"]}),Object(S.jsx)(i.q,{header:!0,tag:"div",color:"light",children:Object(S.jsx)("strong",{children:"Server"})}),Object(S.jsxs)(i.q,{className:"d-block",children:[Object(S.jsx)("div",{className:"text-uppercase mb-1",children:Object(S.jsx)("small",{children:Object(S.jsx)("b",{children:"CPU Usage"})})}),Object(S.jsx)(i.I,{size:"xs",color:"info",value:25}),Object(S.jsx)("small",{className:"text-muted",children:"348 Processes. 1/4 Cores."})]}),Object(S.jsxs)(i.q,{className:"d-block",children:[Object(S.jsx)("div",{className:"text-uppercase mb-1",children:Object(S.jsx)("small",{children:Object(S.jsx)("b",{children:"Memory Usage"})})}),Object(S.jsx)(i.I,{size:"xs",color:"warning",value:70}),Object(S.jsx)("small",{className:"text-muted",children:"11444GB/16384MB"})]}),Object(S.jsxs)(i.q,{className:"d-block",children:[Object(S.jsx)("div",{className:"text-uppercase mb-1",children:Object(S.jsx)("small",{children:Object(S.jsx)("b",{children:"SSD 1 Usage"})})}),Object(S.jsx)(i.I,{size:"xs",color:"danger",value:90}),Object(S.jsx)("small",{className:"text-muted",children:"243GB/256GB"})]})]})]})},M=function(){return Object(S.jsxs)(i.p,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(S.jsxs)(i.s,{className:"c-header-nav-link",caret:!1,children:[Object(S.jsx)(D.a,{name:"cil-list"}),Object(S.jsx)(i.a,{shape:"pill",color:"warning",children:5})]}),Object(S.jsxs)(i.r,{placement:"bottom-end",className:"pt-0",children:[Object(S.jsx)(i.q,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(S.jsxs)("strong",{children:["You have ",5," pending tasks"]})}),Object(S.jsxs)(i.q,{className:"d-block",children:[Object(S.jsxs)("div",{className:"small mb-1",children:["Upgrade NPM & Bower ",Object(S.jsx)("span",{className:"float-right",children:Object(S.jsx)("strong",{children:"0%"})})]}),Object(S.jsx)(i.I,{size:"xs",color:"info",value:0})]}),Object(S.jsxs)(i.q,{className:"d-block",children:[Object(S.jsxs)("div",{className:"small mb-1",children:["ReactJS Version ",Object(S.jsx)("span",{className:"float-right",children:Object(S.jsx)("strong",{children:"25%"})})]}),Object(S.jsx)(i.I,{size:"xs",color:"danger",value:25})]}),Object(S.jsxs)(i.q,{className:"d-block",children:[Object(S.jsxs)("div",{className:"small mb-1",children:["VueJS Version ",Object(S.jsx)("span",{className:"float-right",children:Object(S.jsx)("strong",{children:"50%"})})]}),Object(S.jsx)(i.I,{size:"xs",color:"warning",value:50})]}),Object(S.jsxs)(i.q,{className:"d-block",children:[Object(S.jsxs)("div",{className:"small mb-1",children:["Add new layouts ",Object(S.jsx)("span",{className:"float-right",children:Object(S.jsx)("strong",{children:"75%"})})]}),Object(S.jsx)(i.I,{size:"xs",color:"info",value:75})]}),Object(S.jsxs)(i.q,{className:"d-block",children:[Object(S.jsxs)("div",{className:"small mb-1",children:["Angular 2 Cli Version ",Object(S.jsx)("span",{className:"float-right",children:Object(S.jsx)("strong",{children:"100%"})})]}),Object(S.jsx)(i.I,{size:"xs",color:"success",value:100})]}),Object(S.jsx)(i.q,{className:"text-center border-top",children:Object(S.jsx)("strong",{children:"View all tasks"})})]})]})},H=(a(669),[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(S.jsx)(D.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:"NEW"}},{_tag:"CSidebarNavItem",name:"Driver",to:"/users",icon:"cil-puzzle"},{_tag:"CSidebarNavItem",name:"Customers",to:"/customers",icon:"cil-puzzle"},{_tag:"CSidebarNavItem",name:"Vehicle List",to:"/vehicles",icon:"cil-puzzle"},{_tag:"CSidebarNavItem",name:"Manege Fare",to:"/vehicles/types",icon:"cil-puzzle"},{_tag:"CSidebarNavItem",name:"Manege cities",to:"/cities",icon:"cil-puzzle"},{_tag:"CSidebarNavDropdown",name:"Pages",route:"/pages",icon:"cil-star",_children:[{_tag:"CSidebarNavItem",name:"Login",to:"/login"}]}]),R=a.p+"static/media/2logo.59a5a039.png",T=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.sidebarShow}));return Object(S.jsxs)(i.K,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(S.jsx)(i.L,{className:"d-md-down-none",to:"/",children:Object(S.jsx)("img",{src:R,height:"51",width:"300"})}),Object(S.jsx)(i.N,{children:Object(S.jsx)(i.o,{items:H,components:{CSidebarNavDivider:i.O,CSidebarNavDropdown:i.P,CSidebarNavItem:i.Q,CSidebarNavTitle:i.R}})}),Object(S.jsx)(i.M,{className:"c-d-md-down-none"})]})},K=c.a.memo(T);t.default=function(){return Object(S.jsxs)("div",{className:"c-app c-default-layout",children:[Object(S.jsx)(K,{}),Object(S.jsxs)("div",{className:"c-wrapper",children:[Object(S.jsx)(_,{}),Object(S.jsx)("div",{className:"c-body",children:Object(S.jsx)(C,{})}),Object(S.jsx)(q,{})]})]})}},728:function(e,t,a){"use strict";var s=a(13),c=a(30),n=a(631),r=a.n(n),i=a(1),l=a.n(i),o=a(632);var d=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];e.apply(this,s),t.apply(this,s)}}),null)};function j(e){return!e||"#"===e.trim()}var m=l.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"a":a,r=e.disabled,i=e.onKeyDown,o=Object(c.a)(e,["as","disabled","onKeyDown"]),m=function(e){var t=o.href,a=o.onClick;(r||j(t))&&e.preventDefault(),r?e.stopPropagation():a&&a(e)};return j(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),r&&(o.tabIndex=-1,o["aria-disabled"]=!0),l.a.createElement(n,Object(s.a)({ref:t},o,{onClick:m,onKeyDown:d((function(e){" "===e.key&&(e.preventDefault(),m(e))}),i)}))}));m.displayName="SafeAnchor";var b=m,u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,i=e.size,d=e.active,j=e.className,m=e.block,u=e.type,h=e.as,x=Object(c.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),O=Object(o.a)(a,"btn"),p=r()(j,O,d&&"active",n&&O+"-"+n,m&&O+"-block",i&&O+"-"+i);if(x.href)return l.a.createElement(b,Object(s.a)({},x,{as:h,ref:t,className:r()(p,x.disabled&&"disabled")}));t&&(x.ref=t),u?x.type=u:h||(x.type="button");var v=h||"button";return l.a.createElement(v,Object(s.a)({},x,{className:p}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=u}}]);
//# sourceMappingURL=7.e83135be.chunk.js.map
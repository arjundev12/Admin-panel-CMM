(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{644:function(e,t,o){"use strict";var r=o(40),a=o(62),n=(o(1),o(634)),s=o(636),l=o(17),c=function(e){var t=e.borderColor,o=e.backgroundColor,c=e.pointHoverBackgroundColor,i=e.dataPoints,d=e.label,b=e.pointed,j=Object(a.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),h=c||("transparent"!==o?o:t),p=[{data:i,borderColor:Object(n.getColor)(t),backgroundColor:Object(n.getColor)(o),pointBackgroundColor:Object(n.getColor)(h),pointHoverBackgroundColor:Object(n.getColor)(h),label:d}],x={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,i)-5,max:Math.max.apply(Math,i)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},m={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},O=function(){var e=b?x:m;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),g=Object(n.deepObjectsMerge)(p,j.datasets||{}),u=Object(n.deepObjectsMerge)(O,j.options||{});return Object(l.jsx)(s.b,Object(r.a)(Object(r.a)({},j),{},{datasets:g,options:u,labels:d}))};c.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=c},729:function(e,t,o){"use strict";o.r(t);o(1);var r=o(623),a=o(619),n=o(644),s=o(40),l=o(62),c=o(634),i=o(636),d=o(17),b=function(e){var t=e.backgroundColor,o=e.pointHoverBackgroundColor,r=e.dataPoints,a=e.label,n=(e.pointed,Object(l.a)(e,["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"])),b=[{data:r,backgroundColor:Object(c.getColor)(t),pointHoverBackgroundColor:Object(c.getColor)(o),label:a,barPercentage:.5,categoryPercentage:1}],j={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(d.jsx)(i.a,Object(s.a)(Object(s.a)({},n),{},{datasets:b,options:j,labels:a}))};b.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};var j=b;t.default=function(){return Object(d.jsxs)(r.J,{children:[Object(d.jsx)(r.l,{sm:"6",lg:"3",children:Object(d.jsx)(r.W,{color:"gradient-primary",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.p,{children:[Object(d.jsx)(r.s,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.r,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.q,{children:"Action"}),Object(d.jsx)(r.q,{children:"Another action"}),Object(d.jsx)(r.q,{children:"Something else here..."}),Object(d.jsx)(r.q,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.l,{sm:"6",lg:"3",children:Object(d.jsx)(r.W,{color:"gradient-info",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}),children:Object(d.jsxs)(r.p,{children:[Object(d.jsx)(r.s,{caret:!1,color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-location-pin"})}),Object(d.jsxs)(r.r,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.q,{children:"Action"}),Object(d.jsx)(r.q,{children:"Another action"}),Object(d.jsx)(r.q,{children:"Something else here..."}),Object(d.jsx)(r.q,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.l,{sm:"6",lg:"3",children:Object(d.jsx)(r.W,{color:"gradient-warning",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.p,{children:[Object(d.jsx)(r.s,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.r,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.q,{children:"Action"}),Object(d.jsx)(r.q,{children:"Another action"}),Object(d.jsx)(r.q,{children:"Something else here..."}),Object(d.jsx)(r.q,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.l,{sm:"6",lg:"3",children:Object(d.jsx)(r.W,{color:"gradient-danger",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(j,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.p,{children:[Object(d.jsx)(r.s,{caret:!0,className:"text-white",color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.r,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.q,{children:"Action"}),Object(d.jsx)(r.q,{children:"Another action"}),Object(d.jsx)(r.q,{children:"Something else here..."}),Object(d.jsx)(r.q,{disabled:!0,children:"Disabled action"})]})]})})})]})}}}]);
//# sourceMappingURL=22.fa0f1993.chunk.js.map
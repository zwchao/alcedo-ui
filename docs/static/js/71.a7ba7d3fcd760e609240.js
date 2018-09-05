(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{500:function(e,a,t){"use strict";t(466);var r=t(12),n=t.n(r),l=(t(470),t(126)),p=t.n(l),s=t(127),c=t.n(s),o=t(128),m=t.n(o),d=t(129),i=t.n(d),u=t(130),h=t.n(u),E=t(20),f=t.n(E),x=t(0),v=t.n(x),y=t(504),w=(t(501),function(e){function a(e){var t,r;return p()(this,a),(r=m()(this,i()(a).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],r.generateData=(t=f()(f()(r)),r.generateData).bind(t),r}return h()(a,e),c()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(n()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(x.Component));w.defaultProps={data:null},a.a=w},501:function(e,a,t){var r=t(502);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(210)(r,n);r.locals&&(e.exports=r.locals)},502:function(e,a,t){(e.exports=t(209)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},831:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"Theme of the root element.",default:"Theme.DEFAULT"},depth:{type:"PropTypes.number",desc:"This number represents the zDepth of the paper shadow.",default:"1"},nonRounded:{type:"PropTypes.bool",desc:"If true,the paper container will have no border radius.",default:"false"},isCircular:{type:"PropTypes.bool",desc:"If true,the paper shape is circle.",default:"false"}}},832:function(e,a,t){var r=t(833);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(210)(r,n);r.locals&&(e.exports=r.locals)},833:function(e,a,t){(e.exports=t(209)(!1)).push([e.i,'.paper-examples .examples-wrapper::before, .paper-examples .examples-wrapper::after {\n  display: table;\n  content: ""; }\n\n.paper-examples .examples-wrapper::after {\n  clear: both; }\n\n.paper-examples .examples-wrapper .paper {\n  width: 80px;\n  height: 80px;\n  float: left;\n  margin: 0 20px 20px 0; }\n',""])},979:function(e,a,t){"use strict";t.r(a);var r=t(126),n=t.n(r),l=t(127),p=t.n(l),s=t(128),c=t.n(s),o=t(129),m=t.n(o),d=t(130),i=t.n(d),u=t(0),h=t.n(u),E=t(526),f=t(506),x=t(505),v=t(500),y=t(831),w=(t(832),function(e){function a(e){return n()(this,a),c()(this,m()(a).call(this,e))}return i()(a,e),p()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"example paper-examples"},h.a.createElement("h2",{className:"example-title"},"Paper"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Paper")," element is a basic container that can give depth to the page."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(f.a,null,h.a.createElement(x.a,{className:"example-header",title:"Paper Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Paper examples showing the range of zDepth."),h.a.createElement(E.a,{depth:0}),h.a.createElement(E.a,{depth:1}),h.a.createElement(E.a,{depth:2}),h.a.createElement(E.a,{depth:3}),h.a.createElement(E.a,{depth:4}),h.a.createElement(E.a,{depth:5}),h.a.createElement(E.a,{depth:6}),h.a.createElement(E.a,{depth:7}))))),h.a.createElement(f.a,null,h.a.createElement(x.a,{className:"example-header",title:"Non-Rounded Paper Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Corners are rounded by default.Set the nonRounded property to true for square corners."),h.a.createElement(E.a,{depth:0,nonRounded:!0}),h.a.createElement(E.a,{depth:1,nonRounded:!0}),h.a.createElement(E.a,{depth:2,nonRounded:!0}),h.a.createElement(E.a,{depth:3,nonRounded:!0}),h.a.createElement(E.a,{depth:4,nonRounded:!0}),h.a.createElement(E.a,{depth:5,nonRounded:!0}),h.a.createElement(E.a,{depth:6,nonRounded:!0}),h.a.createElement(E.a,{depth:7,nonRounded:!0}))))),h.a.createElement(f.a,null,h.a.createElement(x.a,{className:"example-header",title:"Circular Paper Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Pages are square by default. Set the isCircular property to true for round page."),h.a.createElement(E.a,{depth:0,isCircular:!0}),h.a.createElement(E.a,{depth:1,isCircular:!0}),h.a.createElement(E.a,{depth:2,isCircular:!0}),h.a.createElement(E.a,{depth:3,isCircular:!0}),h.a.createElement(E.a,{depth:4,isCircular:!0}),h.a.createElement(E.a,{depth:5,isCircular:!0}),h.a.createElement(E.a,{depth:6,isCircular:!0}),h.a.createElement(E.a,{depth:7,isCircular:!0}))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(v.a,{data:y}))}}]),a}(u.Component));a.default=w}}]);
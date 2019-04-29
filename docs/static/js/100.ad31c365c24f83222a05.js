(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{348:function(e,a,t){"use strict";var l=t(4),n=t.n(l),r=t(61),s=t.n(r),i=t(62),c=t.n(i),o=t(63),p=t.n(o),m=t(64),u=t.n(m),d=t(22),h=t.n(d),f=t(65),v=t.n(f),b=t(0),E=t.n(b),y=t(15),w=t.n(y),g=t(355),T=(t(349),function(e){function a(e){var t,l;return s()(this,a),(l=p()(this,u()(a).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],l.generateData=(t=h()(l),l.generateData).bind(t),l}return v()(a,e),c()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(n()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return E.a.createElement("div",{className:"prop-type-desc-table-wrapper"},E.a.createElement(g.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(b.Component));T.propTypes={data:w.a.object},T.defaultProps={data:null},a.a=T},349:function(e,a,t){var l=t(350);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(133)(l,n);l.locals&&(e.exports=l.locals)},350:function(e,a,t){(e.exports=t(132)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},403:function(e,a,t){"use strict";var l=t(346),n=t.n(l),r=t(331),s=t.n(r),i=t(61),c=t.n(i),o=t(62),p=t.n(o),m=t(63),u=t.n(m),d=t(64),h=t.n(d),f=t(22),v=t.n(f),b=t(65),E=t.n(b),y=t(23),w=t.n(y),g=t(0),T=t.n(g),x=t(15),N=t.n(x),S=t(343),P=t.n(S),C=t(360),L=t(379),k=t(359),D=t(345),z=t(347),O=t(344),A=t(361),V=function(e){function a(e){var t,l;c()(this,a);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return l=u()(this,(t=h()(a)).call.apply(t,[this,e].concat(r))),w()(v()(l),"clickHandler",function(e){var a=l.props,t=a.disabled,n=a.isLoading,r=a.beforeChange,s=a.onClick;if(!t&&!n){s&&s(e);var i=!l.state.value,c=function(){l.setState({value:i},function(){var a=l.props.onChange;a&&a(i,e)})};r?!1!==r(i)&&c():c()}}),l.state={value:!!e.value},l}return E()(a,e),p()(a,[{key:"render",value:function(){var e,t=this.props,l=t.className,r=t.style,i=t.theme,c=t.disabled,o=t.isLoading,p=t.size,m=t.labelVisible,u=t.tip,d=t.triggerEl,h=t.parentEl,f=t.tipPosition,v=(t.beforeChange,s()(t,["className","style","theme","disabled","isLoading","size","labelVisible","tip","triggerEl","parentEl","tipPosition","beforeChange"])),b=this.state.value,E=P()("switcher",(e={activated:b,small:p===a.Size.SMALL},w()(e,"theme-".concat(i),i),w()(e,l,l),e));return T.a.createElement(k.a,{tipContent:u,triggerEl:d,parentEl:h,position:f},T.a.createElement("div",n()({},v,{className:E,style:r,disabled:c||o,onClick:this.clickHandler}),m?T.a.createElement("div",{className:"switcher-label"}):null,T.a.createElement(C.a,{className:"switcher-slider-wrapper",disableTouchRipple:c||o},T.a.createElement("div",{className:"switcher-slider"},o?T.a.createElement(L.a,null):null))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return{prevProps:e,value:A.a.getDerivedState(e,a,"value")}}}]),a}(g.Component);w()(V,"Size",{DEFAULT:"",SMALL:"small"}),w()(V,"Theme",D.a),V.propTypes={className:N.a.string,style:N.a.object,theme:N.a.oneOf(O.a.enumerateValue(D.a)),value:N.a.bool,disabled:N.a.bool,isLoading:N.a.bool,labelVisible:N.a.bool,size:N.a.oneOf(O.a.enumerateValue(V.Size)),tip:N.a.string,tipPosition:N.a.oneOf(O.a.enumerateValue(z.a)),triggerEl:N.a.object,parentEl:N.a.object,onClick:N.a.func,beforeChange:N.a.func,onChange:N.a.func},V.defaultProps={theme:D.a.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:V.Size.DEFAULT,tipPosition:z.a.BOTTOM};var I=V;t.d(a,"a",function(){return I})},624:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The Switcher theme.",default:"Theme.DEFAULT"},value:{type:"PropTypes.bool",desc:"If true,the switcher will be in active status.",default:"false"},disabled:{type:"PropTypes.bool",desc:"Disables the switcher if set to true.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the switcher will be have loading effect.",default:"false"},labelVisible:{type:"PropTypes.bool",default:"false"},size:{type:"PropTypes.oneOf",desc:"The size of switcher.The value can be small or default.",default:"Switcher.Size.DEFAULT"},tip:{type:"PropTypes.string"},tipPosition:{type:"PropTypes.oneOf",default:"Position.BOTTOM"},triggerEl:{type:"PropTypes.object"},parentEl:{type:"PropTypes.object"},onClick:{type:"PropTypes.func",desc:"Callback function fired when the switcher touch-tapped."},beforeChange:{type:"PropTypes.func",desc:"Callback function fired before the switcher touch-tapped."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the switcher touch-tapped."}}},625:function(e,a,t){var l=t(626);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(133)(l,n);l.locals&&(e.exports=l.locals)},626:function(e,a,t){(e.exports=t(132)(!1)).push([e.i,'.switcher-examples .field-group {\n  float: none; }\n  .switcher-examples .field-group::before, .switcher-examples .field-group::after {\n    display: table;\n    content: ""; }\n  .switcher-examples .field-group::after {\n    clear: both; }\n\n.switcher-examples .switcher-ctrl {\n  margin: 16px 16px 0 0; }\n',""])},836:function(e,a,t){"use strict";t.r(a);var l=t(61),n=t.n(l),r=t(62),s=t.n(r),i=t(63),c=t.n(i),o=t(64),p=t.n(o),m=t(22),u=t.n(m),d=t(65),h=t.n(d),f=t(23),v=t.n(f),b=t(0),E=t.n(b),y=t(403),w=t(353),g=t(352),T=t(351),x=t(348),N=t(624),S=(t(625),function(e){function a(e){var t;return n()(this,a),t=c()(this,p()(a).call(this,e)),v()(u()(t),"updateValue",function(e){t.setState({value:e})}),v()(u()(t),"setActive",function(){t.setState({value:!0})}),v()(u()(t),"setInactive",function(){t.setState({value:!1})}),t.state={value:!0},t}return h()(a,e),s()(a,[{key:"render",value:function(){var e=this.state.value;return E.a.createElement("div",{className:"example switcher-examples"},E.a.createElement("h2",{className:"example-title"},"Switcher"),E.a.createElement("p",null,"A ",E.a.createElement("span",null,"Switcher")," is used as an on/off control."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(w.a,null,E.a.createElement(g.a,{className:"example-header",title:"Switcher Example"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Switcher simple example.Set the value property to true for active status."),E.a.createElement(y.a,{value:e,onChange:this.updateValue}),E.a.createElement("br",null),E.a.createElement(T.a,{className:"switcher-ctrl",value:"On",onClick:this.setActive}),E.a.createElement(T.a,{className:"switcher-ctrl",value:"Off",onClick:this.setInactive}))))),E.a.createElement(w.a,null,E.a.createElement(g.a,{className:"example-header",title:"Switcher Size Example"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Set the size property to small for small size switcher."),E.a.createElement(y.a,{theme:y.a.Theme.HIGHLIGHT,size:y.a.Size.SMALL}))))),E.a.createElement(w.a,null,E.a.createElement(g.a,{className:"example-header",title:"Other Config"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Display a hint icon."),E.a.createElement(y.a,{theme:y.a.Theme.HIGHLIGHT,labelVisible:!0}))))),E.a.createElement(w.a,null,E.a.createElement(g.a,{className:"example-header",title:"Switcher Disabled Example"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Set the disabled property to true for disabled props applied."),E.a.createElement(y.a,{disabled:!0,tip:"Disabled"}),E.a.createElement("br",null),E.a.createElement(y.a,{value:!0,disabled:!0,tip:"Disabled"}))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(x.a,{data:N}))}}]),a}(b.Component));a.default=S}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{282:function(e,a,t){"use strict";var n=t(4),l=t.n(n),r=t(51),s=t.n(r),i=t(52),c=t.n(i),o=t(53),p=t.n(o),m=t(54),u=t.n(m),d=t(19),h=t.n(d),f=t(55),v=t.n(f),b=t(18),E=t.n(b),y=t(0),w=t.n(y),g=t(276),T=t.n(g),x=t(288),N=(t(283),function(e){function a(e){var t;return s()(this,a),t=p()(this,u()(a).call(this,e)),E()(h()(t),"generateData",function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(l()({name:a},t.props.data[a]));return e}),t}return v()(a,e),c()(a,[{key:"render",value:function(){return w.a.createElement("div",{className:"prop-type-desc-table-wrapper"},w.a.createElement(x.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(y.Component));N.propTypes={data:T.a.object},a.a=N},283:function(e,a,t){var n=t(284);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};t(107)(n,l);n.locals&&(e.exports=n.locals)},284:function(e,a,t){(e.exports=t(106)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},339:function(e,a,t){"use strict";var n=t(280),l=t.n(n),r=t(261),s=t.n(r),i=t(51),c=t.n(i),o=t(52),p=t.n(o),m=t(53),u=t.n(m),d=t(54),h=t.n(d),f=t(19),v=t.n(f),b=t(55),E=t.n(b),y=t(18),w=t.n(y),g=t(0),T=t.n(g),x=t(276),N=t.n(x),S=t(277),C=t.n(S),P=t(294),L=t(312),k=t(293),z=t(279),D=t(281),O=t(278),A=t(289),V=function(e){function a(e){var t,n;c()(this,a);for(var l=arguments.length,r=new Array(l>1?l-1:0),s=1;s<l;s++)r[s-1]=arguments[s];return n=u()(this,(t=h()(a)).call.apply(t,[this,e].concat(r))),w()(v()(n),"handleClick",function(e){var a=n.props,t=a.disabled,l=a.isLoading,r=a.beforeChange,s=a.onClick;if(!t&&!l){s&&s(e);var i=!n.state.value,c=function(){n.setState({value:i},function(){var a=n.props.onChange;a&&a(i,e)})};r?!1!==r(i)&&c():c()}}),n.state={value:!!e.value},n}return E()(a,e),p()(a,[{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.style,i=t.theme,c=t.disabled,o=t.isLoading,p=t.size,m=t.labelVisible,u=t.tip,d=t.triggerEl,h=t.parentEl,f=t.tipPosition,v=(t.beforeChange,s()(t,["className","style","theme","disabled","isLoading","size","labelVisible","tip","triggerEl","parentEl","tipPosition","beforeChange"])),b=this.state.value;return T.a.createElement(k.a,{tipContent:u,triggerEl:d,parentEl:h,position:f},T.a.createElement("div",l()({},v,{className:C()("switcher",(e={activated:b,small:p===a.Size.SMALL},w()(e,"theme-".concat(i),i),w()(e,n,n),e)),style:r,disabled:c||o,onClick:this.handleClick}),m?T.a.createElement("div",{className:"switcher-label"}):null,T.a.createElement(P.a,{className:"switcher-slider-wrapper",disableTouchRipple:c||o},T.a.createElement("div",{className:"switcher-slider"},o?T.a.createElement(L.a,null):null))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return{prevProps:e,value:A.a.getDerivedState(e,a,"value")}}}]),a}(g.Component);w()(V,"Size",{DEFAULT:"",SMALL:"small"}),w()(V,"Theme",z.a),V.propTypes={className:N.a.string,style:N.a.object,theme:N.a.oneOf(O.a.enumerateValue(z.a)),value:N.a.bool,disabled:N.a.bool,isLoading:N.a.bool,labelVisible:N.a.bool,size:N.a.oneOf(O.a.enumerateValue(V.Size)),tip:N.a.string,tipPosition:N.a.oneOf(O.a.enumerateValue(D.a)),triggerEl:N.a.object,parentEl:N.a.object,onClick:N.a.func,beforeChange:N.a.func,onChange:N.a.func},V.defaultProps={theme:z.a.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:V.Size.DEFAULT,tipPosition:D.a.BOTTOM};var I=V;t.d(a,"a",function(){return I})},563:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The Switcher theme.",default:"Theme.DEFAULT"},value:{type:"PropTypes.bool",desc:"If true,the switcher will be in active status.",default:"false"},disabled:{type:"PropTypes.bool",desc:"Disables the switcher if set to true.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the switcher will be have loading effect.",default:"false"},labelVisible:{type:"PropTypes.bool",default:"false"},size:{type:"PropTypes.oneOf",desc:"The size of switcher.The value can be small or default.",default:"Switcher.Size.DEFAULT"},tip:{type:"PropTypes.string"},tipPosition:{type:"PropTypes.oneOf",default:"Position.BOTTOM"},triggerEl:{type:"PropTypes.object"},parentEl:{type:"PropTypes.object"},onClick:{type:"PropTypes.func",desc:"Callback function fired when the switcher touch-tapped."},beforeChange:{type:"PropTypes.func",desc:"Callback function fired before the switcher touch-tapped."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the switcher touch-tapped."}}},564:function(e,a,t){var n=t(565);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};t(107)(n,l);n.locals&&(e.exports=n.locals)},565:function(e,a,t){(e.exports=t(106)(!1)).push([e.i,'.switcher-examples .field-group {\n  float: none; }\n  .switcher-examples .field-group::before, .switcher-examples .field-group::after {\n    display: table;\n    content: ""; }\n  .switcher-examples .field-group::after {\n    clear: both; }\n\n.switcher-examples .switcher-ctrl {\n  margin: 16px 16px 0 0; }\n',""])},778:function(e,a,t){"use strict";t.r(a);var n=t(51),l=t.n(n),r=t(52),s=t.n(r),i=t(53),c=t.n(i),o=t(54),p=t.n(o),m=t(19),u=t.n(m),d=t(55),h=t.n(d),f=t(18),v=t.n(f),b=t(0),E=t.n(b),y=t(339),w=t(287),g=t(286),T=t(285),x=t(282),N=t(563),S=(t(564),function(e){function a(e){var t;return l()(this,a),t=c()(this,p()(a).call(this,e)),v()(u()(t),"updateValue",function(e){t.setState({value:e})}),v()(u()(t),"setActive",function(){t.setState({value:!0})}),v()(u()(t),"setInactive",function(){t.setState({value:!1})}),t.state={value:!0},t}return h()(a,e),s()(a,[{key:"render",value:function(){var e=this.state.value;return E.a.createElement("div",{className:"example switcher-examples"},E.a.createElement("h2",{className:"example-title"},"Switcher"),E.a.createElement("p",null,"A ",E.a.createElement("span",null,"Switcher")," is used as an on/off control."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(w.a,null,E.a.createElement(g.a,{className:"example-header",title:"Switcher Example"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Switcher simple example.Set the value property to true for active status."),E.a.createElement(y.a,{value:e,onChange:this.updateValue}),E.a.createElement("br",null),E.a.createElement(T.a,{className:"switcher-ctrl",value:"On",onClick:this.setActive}),E.a.createElement(T.a,{className:"switcher-ctrl",value:"Off",onClick:this.setInactive}))))),E.a.createElement(w.a,null,E.a.createElement(g.a,{className:"example-header",title:"Switcher Size Example"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Set the size property to small for small size switcher."),E.a.createElement(y.a,{theme:y.a.Theme.HIGHLIGHT,size:y.a.Size.SMALL}))))),E.a.createElement(w.a,null,E.a.createElement(g.a,{className:"example-header",title:"Other Config"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Display a hint icon."),E.a.createElement(y.a,{theme:y.a.Theme.HIGHLIGHT,labelVisible:!0}))))),E.a.createElement(w.a,null,E.a.createElement(g.a,{className:"example-header",title:"Switcher Disabled Example"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Set the disabled property to true for disabled props applied."),E.a.createElement(y.a,{disabled:!0,tip:"Disabled"}),E.a.createElement("br",null),E.a.createElement(y.a,{value:!0,disabled:!0,tip:"Disabled"}))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(x.a,{data:N}))}}]),a}(b.Component));a.default=S}}]);
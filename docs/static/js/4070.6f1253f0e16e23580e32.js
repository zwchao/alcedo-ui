"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[4070],{59141:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(8081),o=r.n(n),a=r(23645),l=r.n(a)()(o());l.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const c=l},48286:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(8081),o=r.n(n),a=r(23645),l=r.n(a)()(o());l.push([e.id,".color-picker-examples .examples-wrapper .picked-color-wrapper{margin-top:8px;border-top:1px solid #e4eaf2;padding-top:8px}.color-picker-examples .examples-wrapper .picked-color{display:inline-block;margin-right:16px;vertical-align:bottom}.color-picker-examples .examples-wrapper .picked-color-value{display:inline-block;line-height:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.color-picker-examples .examples-wrapper .color-select-scroller-wrapper{width:200px;height:200px;overflow:auto}.color-picker-examples .examples-wrapper .color-select-scroller-wrapper .color-select-scroller{width:1000px;height:1000px}",""]);const c=l},1116:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(15671),o=r(43144),a=r(97326),l=r(60136),c=r(82963),s=r(61120),i=r(4942),u=r(37699),p=r(45697),f=r.n(p),d=r(82996),h=r(93379),v=r.n(h),m=r(7795),Z=r.n(m),y=r(90569),b=r.n(y),g=r(3565),P=r.n(g),E=r(19216),k=r.n(E),x=r(44589),R=r.n(x),w=r(59141),C={};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}C.styleTagTransform=R(),C.setAttributes=P(),C.insert=b().bind(null,"head"),C.domAPI=Z(),C.insertStyleElement=k(),v()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals;var M=function(e){(0,l.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var o=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;return(0,n.Z)(this,f),t=p.call(this,e),(0,i.Z)((0,a.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(O({name:r},t.props.data[r]));return e})),t}return(0,o.Z)(f,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(u.Component);M.propTypes={data:f().object};const T=M},91939:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(15671),o=r(43144),a=r(97326),l=r(60136),c=r(82963),s=r(61120),i=r(4942),u=r(37699),p=r(24471),f=r(50704),d=r(88090),h=r(73294),v=r(41161),m=r(1116);const Z=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"hue":{"type":"PropTypes.number","desc":"hue value (deg)","default":"0"},"value":{"type":"PropTypes.string","desc":"rgb hex value","default":"ff0000"},"onChange":{"type":"PropTypes.func"}}');var y=r(44042);r(79707);const b=function(e){(0,l.Z)(g,e);var t,r,b=(t=g,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var o=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function g(e){var t;return(0,n.Z)(this,g),t=b.call(this,e),(0,i.Z)((0,a.Z)(t),"handleChange",(function(e){t.setState({value:e})})),t.state={value:"38b1eb"},t}return(0,o.Z)(g,[{key:"render",value:function(){var e=this.state.value;return u.createElement("div",{className:"example color-picker-examples"},u.createElement("h2",{className:"example-title"},"Color Picker"),u.createElement("h2",{className:"example-title"},"Examples"),u.createElement(p.Z,null,u.createElement(f.Z,{className:"example-header",title:"Basic"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement(d.Z,{hue:y.ZP.rgb2hsb(y.ZP.hex2rgb("38b1eb"))[0],value:e,onChange:this.handleChange}),u.createElement("div",{className:"picked-color-wrapper"},u.createElement(h.Z,{className:"picked-color",value:e}),u.createElement("div",{className:"picked-color-value"},"#",e)))))),u.createElement(p.Z,null,u.createElement(f.Z,{className:"example-header",title:"Basic"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("div",{className:"color-select-scroller-wrapper"},u.createElement("div",{className:"color-select-scroller"},u.createElement(v.Z,{position:v.Z.Position.BOTTOM_LEFT,parentEl:document.querySelector(".color-select-scroller-wrapper"),popupContent:u.createElement(d.Z,{hue:y.ZP.rgb2hsb(y.ZP.hex2rgb("38b1eb"))[0],value:e,scrollEl:document.querySelector(".color-select-scroller-wrapper"),onChange:this.handleChange})},u.createElement("div",null,u.createElement(h.Z,{className:"picked-color",value:e}),u.createElement("div",{className:"picked-color-value"},"#",e))))))))),u.createElement("h2",{className:"example-title"},"Properties"),u.createElement(m.Z,{data:Z}))}}]),g}(u.Component)},73294:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(87462),o=r(45987),a=r(15671),l=r(43144),c=r(97326),s=r(60136),i=r(82963),u=r(61120),p=r(4942),f=r(37699),d=r(45697),h=r.n(d),v=r(41844),m=r.n(v),Z=["className","style","opacity","value"];var y=function(e){(0,s.Z)(h,e);var t,r,d=(t=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var o=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function h(e){var t;(0,a.Z)(this,h);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t=d.call.apply(d,[this,e].concat(n)),(0,p.Z)((0,c.Z)(t),"isHex",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.value;return/^\#?(([0-9a-fA-F]{3})|([0-9a-fA-F]{6}))$/.test(e)})),(0,p.Z)((0,c.Z)(t),"getColor",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.value;return t.isHex(e)?"#"===e[0]?e:"#".concat(e):e})),t}return(0,l.Z)(h,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.style,a=e.opacity,l=(e.value,(0,o.Z)(e,Z));return f.createElement("div",(0,n.Z)({},l,{className:m()("color-block",(0,p.Z)({},t,t)),style:r}),f.createElement("div",{className:"color-block-overlay",style:{background:this.getColor(),opacity:a}}))}}]),h}(f.Component);y.propTypes={className:h().string,style:h().object,value:h().string,opacity:h().number},y.defaultProps={value:"ff0000",opacity:1};const b=y},88090:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(15671),o=r(43144),a=r(97326),l=r(60136),c=r(82963),s=r(61120),i=r(4942),u=r(37699),p=r(45697),f=r.n(p),d=r(12297),h=r.n(d),v=r(41844),m=r.n(v),Z=r(25299),y=r(72),b=r(25681),g=r(44042),P=r(19605);var E=function(e){(0,l.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var o=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;(0,n.Z)(this,f);for(var r=arguments.length,o=new Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];t=p.call.apply(p,[this,e].concat(o)),(0,i.Z)((0,a.Z)(t),"handleMouseDown",(function(e){t.activated=!0,t.handleChange(e.pageX,e.pageY)})),(0,i.Z)((0,a.Z)(t),"handleMouseMove",(function(e){t.activated&&t.handleChange(e.pageX,e.pageY)})),(0,i.Z)((0,a.Z)(t),"handleMouseUp",(function(){t.activated=!1})),(0,i.Z)((0,a.Z)(t),"handleChange",(function(e,r){var n=t.props.hue,o=t.colorPickerAreaEl.offsetWidth,a=t.colorPickerAreaEl.offsetHeight,l=Z.ZP.getOffset(t.colorPickerAreaEl),c=l.left,s=l.top,i=b.ZP.range(e-c,0,o),u=b.ZP.range(r-s,0,a),p=i/o,f=1-u/a,d=g.ZP.rgb2hex(g.ZP.hsb2rgb([n,p,f]));t.setState({value:d,s:p,b:f,x:i,y:u},(function(){var e=t.props.onChange;e&&e(d)}))})),t.activated=!1,t.colorPickerArea=(0,u.createRef)(),t.colorPickerAreaEl=null;var c=g.ZP.rgb2hsb(g.ZP.hex2rgb(e.value));return t.state={value:e.value,s:c?c[1]:0,b:c?c[2]:0,x:c?"".concat(100*c[1],"%"):0,y:c?"".concat(100*(1-c[2]),"%"):0},t}return(0,o.Z)(f,[{key:"componentDidMount",value:function(){this.colorPickerAreaEl=this.colorPickerArea&&this.colorPickerArea.current,y.Z.addEvent(document,"mousemove",this.handleMouseMove),y.Z.addEvent(document,"mouseup",this.handleMouseUp)}},{key:"componentWillUnmount",value:function(){y.Z.removeEvent(document,"mousemove",this.handleMouseMove),y.Z.removeEvent(document,"mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.style,n=e.hue,o=this.state,a=o.value,l=o.x,c=o.y,s=g.ZP.hue2rgb(n);return u.createElement("div",{className:m()("color-picker",(0,i.Z)({},t,t)),style:r},u.createElement("div",{ref:this.colorPickerArea,className:"color-picker-area",style:{background:s?"rgb(".concat(s.join(", "),")"):null},onMouseDown:this.handleMouseDown},u.createElement("div",{className:"color-picker-area-white-overlay"}),u.createElement("div",{className:"color-picker-area-black-overlay"}),u.createElement("div",{className:m()("color-picker-cursor",{light:h()(g.ZP.hex2rgb(a))/3<128}),style:{left:l,top:c}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=P.Z.getDerivedState(e,t,"value");if(r===t.value)return null;var n=g.ZP.rgb2hsb(g.ZP.hex2rgb(r));return{prevProps:e,value:r,s:n?n[1]:0,b:n?n[2]:0,x:n?"".concat(100*n[1],"%"):0,y:n?"".concat(100*(1-n[2]),"%"):0}}}]),f}(u.Component);E.propTypes={className:f().string,style:f().object,hue:f().number,value:f().string,onChange:f().func},E.defaultProps={hue:0,value:"ff0000"};const k=E},41161:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(87462),o=r(45987),a=r(15671),l=r(43144),c=r(97326),s=r(60136),i=r(82963),u=r(61120),p=r(4942),f=r(37699),d=r(45697),h=r.n(d),v=r(79958),m=r(23046),Z=r(87712),y=r(65248),b=r(81540),g=r(19605),P=["children","popupContent","onRequestOpen","onRequestClose"];var E=function(e){(0,s.Z)(h,e);var t,r,d=(t=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var o=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function h(e){var t;(0,a.Z)(this,h);for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return t=d.call.apply(d,[this,e].concat(n)),(0,p.Z)((0,c.Z)(t),"show",(function(){t.state.visible||t.setState({visible:!0},(function(){var e,r;return null===(e=(r=t.props).onRequestOpen)||void 0===e?void 0:e.call(r)}))})),(0,p.Z)((0,c.Z)(t),"hide",(function(){t.state.visible&&t.setState({visible:!1},(function(){var e,r;return null===(e=(r=t.props).onRequestClose)||void 0===e?void 0:e.call(r)}))})),(0,p.Z)((0,c.Z)(t),"toggle",(function(){t.setState({visible:!t.state.visible},(function(){var e,r,n,o;t.state.visible?null===(e=(r=t.props).onRequestOpen)||void 0===e||e.call(r):null===(n=(o=t.props).onRequestClose)||void 0===n||n.call(o)}))})),(0,p.Z)((0,c.Z)(t),"handleClick",(function(e){var r=t.props.children;r&&r.props&&r.props.onClick&&"function"==typeof r.props.onClick&&r.props.onClick(e),t.toggle()})),t.trigger=(0,f.createRef)(),t.triggerEl=null,t.state={visible:e.visible},t}return(0,l.Z)(h,[{key:"componentDidMount",value:function(){var e;this.triggerEl=(0,v.findDOMNode)(null===(e=this.trigger)||void 0===e?void 0:e.current)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.popupContent,a=(e.onRequestOpen,e.onRequestClose,(0,o.Z)(e,P)),l=this.state.visible;return r?f.createElement(f.Fragment,null,(0,f.cloneElement)(t,{ref:this.trigger,onClick:this.handleClick}),f.createElement(m.Z,(0,n.Z)({},a,{triggerEl:this.triggerEl,visible:l,onRequestClose:this.hide}),r)):t}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,visible:g.Z.getDerivedState(e,t,"visible")}}}]),h}(f.Component);(0,p.Z)(E,"Position",y.Z),(0,p.Z)(E,"Theme",Z.Z),E.propTypes={children:h().any,className:h().string,contentClassName:h().string,modalClassName:h().string,style:h().object,theme:h().oneOf(b.ZP.enumerateValue(Z.Z)),parentEl:h().object,triggerEl:h().object,visible:h().bool,hasTriangle:h().bool,triangle:h().element,position:h().oneOf(b.ZP.enumerateValue(y.Z)),isAnimated:h().bool,depth:h().number,isBlurClose:h().bool,isEscClose:h().bool,shouldFollowScroll:h().bool,scrollEl:h().object,resetPositionWait:h().number,showModal:h().bool,triggerHandler:h().func,onRender:h().func,onRendered:h().func,onDestroy:h().func,onDestroyed:h().func,onRequestOpen:h().func,onRequestClose:h().func,onWheel:h().func,popupContent:h().any},E.defaultProps={parentEl:document.body,visible:!1,hasTriangle:!0,position:y.Z.BOTTOM,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldFollowScroll:!1,resetPositionWait:250,showModal:!1};const k=E},44042:(e,t,r)=>{r.d(t,{ZP:()=>c,wK:()=>l});var n=r(42982),o=r(70885),a=r(25681);function l(e){if(a.ZP.isHex(e)){var t="#"===e[0]?e.slice(1):e;return 3===t.length?t.split("").map((function(e){return parseInt("".concat(e).concat(e),16)})):[t.slice(0,2),t.slice(2,4),t.slice(4,6)].map((function(e){return parseInt(e,16)}))}}const c={hue2rgb:function(e){if(a.ZP.isDeg(e)){var t=e/360,r=Math.floor(6*t),n=Math.round(255*(6*t-r)),o=function(e){var t=[[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,0,0]];return a.ZP.isPerCent(e)?t[Math.floor(6*e)]:t[0]}(t);return o[(2*r+1)%3]+=n*(a.ZP.isOdd(r)?-1:1),o}},rgb2hsb:function(e){if(!a.ZP.isRGB(e))return null;var t=(0,o.Z)(e,3),r=t[0],l=t[1],c=t[2],s=Math.max.apply(Math,(0,n.Z)(e)),i=Math.min.apply(Math,(0,n.Z)(e)),u=0;return s===r&&l>=c?u=60*(l-c)/(s-i):s===r&&l<c?u=60*(l-c)/(s-i)+360:s===l?u=60*(c-r)/(s-i)+120:s===c&&(u=60*(r-l)/(s-i)+240),[u?Math.round(u):u,0===s?0:(s-i)/s,s/255]},hsb2rgb:function(e){if(!a.ZP.isHSB(e))return null;var t=(0,o.Z)(e,3),r=t[0],n=t[1],l=t[2];r=360===r?0:r;var c=Math.floor(r/60)%6,s=r/60-c,i=l*(1-n),u=l*(1-s*n),p=l*(1-(1-s)*n),f=0,d=0,h=0;switch(c){case 0:f=l,d=p,h=i;break;case 1:f=u,d=l,h=i;break;case 2:f=i,d=l,h=p;break;case 3:f=i,d=u,h=l;break;case 4:f=p,d=i,h=l;break;case 5:f=l,d=i,h=u}return[Math.round(255*f),Math.round(255*d),Math.round(255*h)]},rgb2hex:function(e){if(e&&a.ZP.isRGB(e))return e.map((function(e){var t=e.toString(16);return t.length<2?"0".concat(t):t})).join("")},hex2rgb:l}},79707:(e,t,r)=>{var n=r(93379),o=r.n(n),a=r(7795),l=r.n(a),c=r(90569),s=r.n(c),i=r(3565),u=r.n(i),p=r(19216),f=r.n(p),d=r(44589),h=r.n(d),v=r(48286),m={};m.styleTagTransform=h(),m.setAttributes=u(),m.insert=s().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=f(),o()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals}}]);
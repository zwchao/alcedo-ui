"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[3700],{73294:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(45987),a=n(15671),l=n(43144),c=n(97326),i=n(60136),s=n(82963),u=n(61120),f=n(4942),p=n(37699),v=n(45697),h=n.n(v),d=n(41844),Z=n.n(d),g=["className","style","opacity","value"];var b=function(e){(0,i.Z)(h,e);var t,n,v=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var o=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function h(e){var t;(0,a.Z)(this,h);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t=v.call.apply(v,[this,e].concat(r)),(0,f.Z)((0,c.Z)(t),"isHex",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.value;return/^\#?(([0-9a-fA-F]{3})|([0-9a-fA-F]{6}))$/.test(e)})),(0,f.Z)((0,c.Z)(t),"getColor",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.value;return t.isHex(e)?"#"===e[0]?e:"#".concat(e):e})),t}return(0,l.Z)(h,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,a=e.opacity,l=(e.value,(0,o.Z)(e,g));return p.createElement("div",(0,r.Z)({},l,{className:Z()("color-block",(0,f.Z)({},t,t)),style:n}),p.createElement("div",{className:"color-block-overlay",style:{background:this.getColor(),opacity:a}}))}}]),h}(p.Component);b.propTypes={className:h().string,style:h().object,value:h().string,opacity:h().number},b.defaultProps={value:"ff0000",opacity:1};const m=b},88090:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(15671),o=n(43144),a=n(97326),l=n(60136),c=n(82963),i=n(61120),s=n(4942),u=n(37699),f=n(45697),p=n.n(f),v=n(12297),h=n.n(v),d=n(41844),Z=n.n(d),g=n(25299),b=n(72),m=n(25681),y=n(44042),k=n(19605);var C=function(e){(0,l.Z)(p,e);var t,n,f=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function p(e){var t;(0,r.Z)(this,p);for(var n=arguments.length,o=new Array(n>1?n-1:0),l=1;l<n;l++)o[l-1]=arguments[l];t=f.call.apply(f,[this,e].concat(o)),(0,s.Z)((0,a.Z)(t),"handleMouseDown",(function(e){t.activated=!0,t.handleChange(e.pageX,e.pageY)})),(0,s.Z)((0,a.Z)(t),"handleMouseMove",(function(e){t.activated&&t.handleChange(e.pageX,e.pageY)})),(0,s.Z)((0,a.Z)(t),"handleMouseUp",(function(){t.activated=!1})),(0,s.Z)((0,a.Z)(t),"handleChange",(function(e,n){var r=t.props.hue,o=t.colorPickerAreaEl.offsetWidth,a=t.colorPickerAreaEl.offsetHeight,l=g.Z.getOffset(t.colorPickerAreaEl),c=l.left,i=l.top,s=m.Z.range(e-c,0,o),u=m.Z.range(n-i,0,a),f=s/o,p=1-u/a,v=y.Z.rgb2hex(y.Z.hsb2rgb([r,f,p]));t.setState({value:v,s:f,b:p,x:s,y:u},(function(){var e=t.props.onChange;e&&e(v)}))})),t.activated=!1,t.colorPickerArea=(0,u.createRef)(),t.colorPickerAreaEl=null;var c=y.Z.rgb2hsb(y.Z.hex2rgb(e.value));return t.state={value:e.value,s:c?c[1]:0,b:c?c[2]:0,x:c?"".concat(100*c[1],"%"):0,y:c?"".concat(100*(1-c[2]),"%"):0},t}return(0,o.Z)(p,[{key:"componentDidMount",value:function(){this.colorPickerAreaEl=this.colorPickerArea&&this.colorPickerArea.current,b.Z.addEvent(document,"mousemove",this.handleMouseMove),b.Z.addEvent(document,"mouseup",this.handleMouseUp)}},{key:"componentWillUnmount",value:function(){b.Z.removeEvent(document,"mousemove",this.handleMouseMove),b.Z.removeEvent(document,"mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.hue,o=this.state,a=o.value,l=o.x,c=o.y,i=y.Z.hue2rgb(r);return u.createElement("div",{className:Z()("color-picker",(0,s.Z)({},t,t)),style:n},u.createElement("div",{ref:this.colorPickerArea,className:"color-picker-area",style:{background:i?"rgb(".concat(i.join(", "),")"):null},onMouseDown:this.handleMouseDown},u.createElement("div",{className:"color-picker-area-white-overlay"}),u.createElement("div",{className:"color-picker-area-black-overlay"}),u.createElement("div",{className:Z()("color-picker-cursor",{light:h()(y.Z.hex2rgb(a))/3<128}),style:{left:l,top:c}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=k.Z.getDerivedState(e,t,"value");if(n===t.value)return null;var r=y.Z.rgb2hsb(y.Z.hex2rgb(n));return{prevProps:e,value:n,s:r?r[1]:0,b:r?r[2]:0,x:r?"".concat(100*r[1],"%"):0,y:r?"".concat(100*(1-r[2]),"%"):0}}}]),p}(u.Component);C.propTypes={className:p().string,style:p().object,hue:p().number,value:p().string,onChange:p().func},C.defaultProps={hue:0,value:"ff0000"};const R=C},41161:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(87462),o=n(45987),a=n(15671),l=n(43144),c=n(97326),i=n(60136),s=n(82963),u=n(61120),f=n(4942),p=n(37699),v=n(45697),h=n.n(v),d=n(79958),Z=n(23046),g=n(87712),b=n(65248),m=n(81540),y=n(19605),k=["children","popupContent","onRequestOpen","onRequestClose"];var C=function(e){(0,i.Z)(h,e);var t,n,v=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var o=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function h(e){var t;(0,a.Z)(this,h);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t=v.call.apply(v,[this,e].concat(r)),(0,f.Z)((0,c.Z)(t),"show",(function(){t.state.visible||t.setState({visible:!0},(function(){var e,n;return null===(e=(n=t.props).onRequestOpen)||void 0===e?void 0:e.call(n)}))})),(0,f.Z)((0,c.Z)(t),"hide",(function(){t.state.visible&&t.setState({visible:!1},(function(){var e,n;return null===(e=(n=t.props).onRequestClose)||void 0===e?void 0:e.call(n)}))})),(0,f.Z)((0,c.Z)(t),"toggle",(function(){t.setState({visible:!t.state.visible},(function(){var e,n,r,o;t.state.visible?null===(e=(n=t.props).onRequestOpen)||void 0===e||e.call(n):null===(r=(o=t.props).onRequestClose)||void 0===r||r.call(o)}))})),(0,f.Z)((0,c.Z)(t),"handleClick",(function(e){var n=t.props.children;n&&n.props&&n.props.onClick&&"function"==typeof n.props.onClick&&n.props.onClick(e),t.toggle()})),t.trigger=(0,p.createRef)(),t.triggerEl=null,t.state={visible:e.visible},t}return(0,l.Z)(h,[{key:"componentDidMount",value:function(){var e;this.triggerEl=(0,d.findDOMNode)(null===(e=this.trigger)||void 0===e?void 0:e.current)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.popupContent,a=(e.onRequestOpen,e.onRequestClose,(0,o.Z)(e,k)),l=this.state.visible;return n?p.createElement(p.Fragment,null,(0,p.cloneElement)(t,{ref:this.trigger,onClick:this.handleClick}),p.createElement(Z.Z,(0,r.Z)({},a,{triggerEl:this.triggerEl,visible:l,onRequestClose:this.hide}),n)):t}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,visible:y.Z.getDerivedState(e,t,"visible")}}}]),h}(p.Component);(0,f.Z)(C,"Position",b.Z),(0,f.Z)(C,"Theme",g.Z),C.propTypes={children:h().any,className:h().string,contentClassName:h().string,modalClassName:h().string,style:h().object,theme:h().oneOf(m.ZP.enumerateValue(g.Z)),parentEl:h().object,triggerEl:h().object,visible:h().bool,hasTriangle:h().bool,triangle:h().element,position:h().oneOf(m.ZP.enumerateValue(b.Z)),isAnimated:h().bool,depth:h().number,isBlurClose:h().bool,isEscClose:h().bool,shouldFollowScroll:h().bool,scrollEl:h().object,resetPositionWait:h().number,showModal:h().bool,triggerHandler:h().func,onRender:h().func,onRendered:h().func,onDestroy:h().func,onDestroyed:h().func,onRequestOpen:h().func,onRequestClose:h().func,onWheel:h().func,popupContent:h().any},C.defaultProps={parentEl:document.body,visible:!1,hasTriangle:!0,position:b.Z.BOTTOM,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldFollowScroll:!1,resetPositionWait:250,showModal:!1};const R=C},44042:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(42982),o=n(70885),a=n(25681);const l={hue2rgb:function(e){if(a.Z.isDeg(e)){var t=e/360,n=Math.floor(6*t),r=Math.round(255*(6*t-n)),o=function(e){var t=[[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,0,0]];return a.Z.isPerCent(e)?t[Math.floor(6*e)]:t[0]}(t);return o[(2*n+1)%3]+=r*(a.Z.isOdd(n)?-1:1),o}},rgb2hsb:function(e){if(!a.Z.isRGB(e))return null;var t=(0,o.Z)(e,3),n=t[0],l=t[1],c=t[2],i=Math.max.apply(Math,(0,r.Z)(e)),s=Math.min.apply(Math,(0,r.Z)(e)),u=0;return i===n&&l>=c?u=60*(l-c)/(i-s)+0:i===n&&l<c?u=60*(l-c)/(i-s)+360:i===l?u=60*(c-n)/(i-s)+120:i===c&&(u=60*(n-l)/(i-s)+240),[u?Math.round(u):u,0===i?0:(i-s)/i,i/255]},hsb2rgb:function(e){if(!a.Z.isHSB(e))return null;var t=(0,o.Z)(e,3),n=t[0],r=t[1],l=t[2];n=360===n?0:n;var c=Math.floor(n/60)%6,i=n/60-c,s=l*(1-r),u=l*(1-i*r),f=l*(1-(1-i)*r),p=0,v=0,h=0;switch(c){case 0:p=l,v=f,h=s;break;case 1:p=u,v=l,h=s;break;case 2:p=s,v=l,h=f;break;case 3:p=s,v=u,h=l;break;case 4:p=f,v=s,h=l;break;case 5:p=l,v=s,h=u}return[Math.round(255*p),Math.round(255*v),Math.round(255*h)]},rgb2hex:function(e){if(e&&a.Z.isRGB(e))return e.map((function(e){var t=e.toString(16);return t.length<2?"0".concat(t):t})).join("")},hex2rgb:function(e){if(a.Z.isHex(e)){var t="#"===e[0]?1:0;return[n(0),n(2),n(4)]}function n(n){return parseInt(e.slice(n+t,n+t+2),16)}}}}}]);
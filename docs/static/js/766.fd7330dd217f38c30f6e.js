(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[766],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const o=a},80750:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".opacity-picker-examples .examples-wrapper .picked-opacity-wrapper {\n  margin-top: 8px;\n  border-top: 1px solid #e4eaf2;\n  padding-top: 8px; }\n\n.opacity-picker-examples .examples-wrapper .picked-opacity {\n  display: inline-block;\n  margin-right: 16px;\n  vertical-align: bottom; }\n\n.opacity-picker-examples .examples-wrapper .picked-opacity-value {\n  display: inline-block;\n  line-height: 24px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.opacity-picker-examples .examples-wrapper .opacity-select-scroller-wrapper {\n  width: 200px;\n  height: 200px;\n  overflow: auto; }\n  .opacity-picker-examples .examples-wrapper .opacity-select-scroller-wrapper .opacity-select-scroller {\n    width: 1000px;\n    height: 1000px; }\n\n.opacity-select-pop {\n  width: auto !important; }\n",""]);const o=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(34575),a=n.n(r),o=n(93913),c=n.n(o),l=n(81506),i=n.n(l),s=n(2205),p=n.n(s),u=n(78585),f=n.n(u),d=n(29754),h=n.n(d),m=n(59713),v=n.n(m),y=n(37699),g=n(45697),b=n.n(g),E=n(21940),k=n(93379),P=n.n(k),R=n(29250);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}P()(R.Z,{insert:"head",singleton:!1}),R.Z.locals;var N=function(e){p()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return f()(this,e)});function o(e){var t;return a()(this,o),t=r.call(this,e),v()(i()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(C({name:n},t.props.data[n]));return e})),t}return c()(o,[{key:"render",value:function(){return y.createElement("div",{className:"prop-type-desc-table-wrapper"},y.createElement(E.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),o}(y.Component);N.propTypes={data:b().object};const x=N},96184:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var r=n(34575),a=n.n(r),o=n(93913),c=n.n(o),l=n(81506),i=n.n(l),s=n(2205),p=n.n(s),u=n(78585),f=n.n(u),d=n(29754),h=n.n(d),m=n(59713),v=n.n(m),y=n(37699),g=n(24471),b=n(50704),E=n(86535),k=n(73294),P=n(41161),R=n(22356);const w=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"value":{"type":"PropTypes.number","desc":"Transparency value ( range: [0, 1] ).","default":"1"},"color":{"type":"PropTypes.string","desc":"Color hex value","default":"000000"},"onChange":{"type":"PropTypes.func"}}');var C=n(93379),N=n.n(C),x=n(80750);N()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;const Z=function(e){p()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return f()(this,e)});function o(e){var t;return a()(this,o),t=r.call(this,e),v()(i()(t),"changeHandler",(function(e){t.setState({opacity:e})})),t.state={opacity:1},t}return c()(o,[{key:"render",value:function(){var e=this.state.opacity;return y.createElement("div",{className:"example opacity-picker-examples"},y.createElement("h2",{className:"example-title"},"Opacity Picker"),y.createElement("h2",{className:"example-title"},"Examples"),y.createElement(g.Z,null,y.createElement(b.Z,{className:"example-header",title:"Basic"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("div",{className:"examples-wrapper"},y.createElement(E.Z,{value:e,color:"38b1eb",onChange:this.changeHandler}),y.createElement("div",{className:"picked-opacity-wrapper"},y.createElement(k.Z,{className:"picked-opacity",value:"38b1eb",opacity:e}),y.createElement("div",{className:"picked-opacity-value"},e)))))),y.createElement(g.Z,null,y.createElement(b.Z,{className:"example-header",title:"Basic"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("div",{className:"examples-wrapper"},y.createElement("div",{className:"opacity-select-scroller-wrapper"},y.createElement("div",{className:"opacity-select-scroller"},y.createElement(P.Z,{className:"opacity-select-pop",position:P.Z.Position.BOTTOM_LEFT,parentEl:document.querySelector(".opacity-select-scroller-wrapper"),popupContent:y.createElement(E.Z,{value:e,color:"38b1eb",scrollEl:document.querySelector(".opacity-select-scroller-wrapper"),onChange:this.changeHandler})},y.createElement("div",{className:"picked-opacity-wrapper"},y.createElement(k.Z,{className:"picked-opacity",value:"38b1eb",opacity:e}),y.createElement("div",{className:"picked-opacity-value"},e))))))))),y.createElement("h2",{className:"example-title"},"Properties"),y.createElement(R.Z,{data:w}))}}]),o}(y.Component)},73294:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67154),a=n.n(r),o=n(6479),c=n.n(o),l=n(34575),i=n.n(l),s=n(93913),p=n.n(s),u=n(81506),f=n.n(u),d=n(2205),h=n.n(d),m=n(78585),v=n.n(m),y=n(29754),g=n.n(y),b=n(59713),E=n.n(b),k=n(37699),P=n(45697),R=n.n(P),w=n(41844),C=n.n(w);var N=function(e){h()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=g()(t);if(n){var a=g()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return v()(this,e)});function o(e){var t;i()(this,o);for(var n=arguments.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];return t=r.call.apply(r,[this,e].concat(a)),E()(f()(t),"isHex",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.value;return/^\#?(([0-9a-fA-F]{3})|([0-9a-fA-F]{6}))$/.test(e)})),E()(f()(t),"getColor",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.value;return t.isHex(e)?"#"===e[0]?e:"#".concat(e):e})),t}return p()(o,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.opacity,o=(e.value,c()(e,["className","style","opacity","value"]));return k.createElement("div",a()({},o,{className:C()("color-block",E()({},t,t)),style:n}),k.createElement("div",{className:"color-block-overlay",style:{background:this.getColor(),opacity:r}}))}}]),o}(k.Component);N.propTypes={className:R().string,style:R().object,value:R().string,opacity:R().number},N.defaultProps={value:"ff0000",opacity:1};const x=N},86535:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(34575),a=n.n(r),o=n(93913),c=n.n(o),l=n(81506),i=n.n(l),s=n(2205),p=n.n(s),u=n(78585),f=n.n(u),d=n(29754),h=n.n(d),m=n(59713),v=n.n(m),y=n(37699),g=n(45697),b=n.n(g),E=n(41844),k=n.n(E),P=n(72),R=n(25299),w=n(25681),C=n(19605);var N=function(e){p()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return f()(this,e)});function o(e){var t;a()(this,o);for(var n=arguments.length,c=new Array(n>1?n-1:0),l=1;l<n;l++)c[l-1]=arguments[l];return t=r.call.apply(r,[this,e].concat(c)),v()(i()(t),"calcSliderLeft",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.value,n=t.huePickerBarEl,r=t.huePickerSliderEl;if(!e||!n||!r)return 0;var a=n.offsetWidth,o=r.offsetWidth,c=a-o;return e*c})),v()(i()(t),"handleMouseDown",(function(e){t.activated=!0,t.handleChange(e.pageX)})),v()(i()(t),"handleMouseMove",(function(e){t.activated&&t.handleChange(e.pageX)})),v()(i()(t),"handleMouseUp",(function(){t.activated=!1})),v()(i()(t),"handleChange",(function(e){var n=R.Z.getOffset(t.huePickerBarEl).left,r=t.huePickerBarEl.offsetWidth,a=t.huePickerSliderEl.offsetWidth,o=a/2,c=r-a,l=w.Z.range(e-o-n,0,c),i=Math.round(l/c*100)/100;t.setState({value:i},(function(){var e=t.props.onChange;e&&e(i)}))})),t.activated=!1,t.huePickerBar=(0,y.createRef)(),t.huePickerBarEl=null,t.huePickerSlider=(0,y.createRef)(),t.huePickerSliderEl=null,t.state={value:e.value},t}return c()(o,[{key:"componentDidMount",value:function(){this.huePickerBarEl=this.huePickerBar&&this.huePickerBar.current,this.huePickerSliderEl=this.huePickerSlider&&this.huePickerSlider.current,P.Z.addEvent(document,"mousemove",this.handleMouseMove),P.Z.addEvent(document,"mouseup",this.handleMouseUp)}},{key:"componentWillUnmount",value:function(){P.Z.removeEvent(document,"mousemove",this.handleMouseMove),P.Z.removeEvent(document,"mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.color;return y.createElement("div",{className:k()("opacity-picker",v()({},t,t)),style:n},y.createElement("div",{ref:this.huePickerBar,className:"opacity-picker-bar",onMouseDown:this.handleMouseDown},y.createElement("div",{className:"opacity-picker-color-overlay",style:{background:"linear-gradient(90deg, transparent, #".concat(r,")")}}),y.createElement("div",{ref:this.huePickerSlider,className:"opacity-picker-slider",style:{left:this.calcSliderLeft()}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:C.Z.getDerivedState(e,t,"value")}}}]),o}(y.Component);N.propTypes={className:b().string,style:b().object,value:b().number,color:b().string,onChange:b().func},N.defaultProps={value:1,color:"000000"};const x=N},41161:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var r=n(67154),a=n.n(r),o=n(6479),c=n.n(o),l=n(34575),i=n.n(l),s=n(81506),p=n.n(s),u=n(93913),f=n.n(u),d=n(2205),h=n.n(d),m=n(78585),v=n.n(m),y=n(29754),g=n.n(y),b=n(59713),E=n.n(b),k=n(37699),P=n(45697),R=n.n(P),w=n(79958),C=n(23046),N=n(87712),x=n(65248),Z=n(81540),O=n(19605);var S=function(e){h()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=g()(t);if(n){var a=g()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return v()(this,e)});function o(e){var t;i()(this,o);for(var n=arguments.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];return t=r.call.apply(r,[this,e].concat(a)),E()(p()(t),"show",(function(){t.state.visible||t.setState({visible:!0},(function(){var e=t.props.onRequestOpen;e&&e()}))})),E()(p()(t),"hide",(function(){t.state.visible&&t.setState({visible:!1},(function(){var e=t.props.onRequestClose;e&&e()}))})),E()(p()(t),"toggle",(function(){t.setState({visible:!t.state.visible},(function(){if(t.state.visible){var e=t.props.onRequestOpen;e&&e()}else{var n=t.props.onRequestClose;n&&n()}}))})),E()(p()(t),"handleClick",(function(e){var n=t.props.children;n&&n.props&&n.props.onClick&&"function"==typeof n.props.onClick&&n.props.onClick(e),t.toggle()})),t.trigger=(0,k.createRef)(),t.triggerEl=null,t.state={visible:e.visible},t}return f()(o,null,[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:O.Z.getDerivedState(e,t,"visible")}}}]),f()(o,[{key:"componentDidMount",value:function(){this.triggerEl=this.trigger&&this.trigger.current&&(0,w.findDOMNode)(this.trigger.current)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.popupContent,r=(e.onRequestOpen,e.onRequestClose,c()(e,["children","popupContent","onRequestOpen","onRequestClose"])),o=this.state.visible;return n?k.createElement(k.Fragment,null,(0,k.cloneElement)(t,{ref:this.trigger,onClick:this.handleClick}),k.createElement(C.Z,a()({},r,{triggerEl:this.triggerEl,visible:o,onRequestClose:this.hide}),n)):t}}]),o}(k.Component);E()(S,"Position",x.Z),E()(S,"Theme",N.Z),S.propTypes={children:R().any,className:R().string,contentClassName:R().string,modalClassName:R().string,style:R().object,theme:R().oneOf(Z.Z.enumerateValue(N.Z)),parentEl:R().object,triggerEl:R().object,visible:R().bool,hasTriangle:R().bool,triangle:R().element,position:R().oneOf(Z.Z.enumerateValue(x.Z)),isAnimated:R().bool,depth:R().number,isBlurClose:R().bool,isEscClose:R().bool,shouldFollowScroll:R().bool,scrollEl:R().object,resetPositionWait:R().number,showModal:R().bool,triggerHandler:R().func,onRender:R().func,onRendered:R().func,onDestroy:R().func,onDestroyed:R().func,onRequestOpen:R().func,onRequestClose:R().func,onWheel:R().func,popupContent:R().any},S.defaultProps={parentEl:document.body,visible:!1,hasTriangle:!0,position:x.Z.BOTTOM,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldFollowScroll:!1,resetPositionWait:250,showModal:!1};const D=S}}]);
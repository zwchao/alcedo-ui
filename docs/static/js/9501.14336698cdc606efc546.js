(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[9501],{75115:(e,t,r)=>{"use strict";r.d(t,{Z:()=>F});var n=r(22122),a=r(81253),o=r(6610),l=r(5991),s=r(63349),i=r(10379),c=r(46070),u=r(77608),f=r(96156),d=r(37699),p=r(45697),v=r.n(p),m=r(20645),h=r(87712),b=r(41844),y=r.n(b),Z=r(81540);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){(0,i.Z)(v,e);var t,r,p=(t=v,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var a=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function v(e){var t;(0,o.Z)(this,v);for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return t=p.call.apply(p,[this,e].concat(n)),(0,f.Z)((0,s.Z)(t),"focus",(function(){t.setState({isFocus:!0})})),(0,f.Z)((0,s.Z)(t),"blur",(function(){t.setState({isFocus:!1})})),(0,f.Z)((0,s.Z)(t),"setHovered",(function(e){t.setState({isHover:e})})),t.state={isHover:!1,isFocus:!1},t}return(0,l.Z)(v,[{key:"render",value:function(){var e=this,t=this.props,r=t.children,o=t.className,l=t.theme,s=t.label,i=t.isLabelAnimate,c=t.hasValue,u=t.disabled,p=t.required,v=t.useSeparator,h=(0,a.Z)(t,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),b=this.state,Z=b.isHover,g=b.isFocus;return d.createElement("div",(0,n.Z)({},h,{className:y()("material-provider","theme-".concat(l),(0,f.Z)({"has-label":s,"has-value":c,"has-separator":v,animated:i,focused:g},o,o)),disabled:u}),d.createElement("div",{className:"material-provider-label-wrapper"},d.createElement("span",{className:"material-provider-label"},s),p?d.createElement("div",{className:"material-provider-required-dot"}):null),d.Children.map(r,(function(t){var r=t.props,n=r.triggerClassName,o=r.placeholderClassName,l=(0,a.Z)(r,["triggerClassName","placeholderClassName"]),s=O(O({},l),{},{className:y()("material-provider-field",(0,f.Z)({},l.className,l.className)),onFocus:function(){l.onFocus&&l.onFocus.apply(l,arguments),e.focus()},onBlur:function(){l.onBlur&&l.onBlur.apply(l,arguments),e.blur()},onMouseOver:function(){l.onMouseOver&&l.onMouseOver.apply(l,arguments),e.setHovered(!0)},onMouseOut:function(){l.onMouseOut&&l.onMouseOut.apply(l,arguments),e.setHovered(!1)}});return"string"!=typeof t.type&&(s.triggerClassName=y()("material-provider-field-trigger",(0,f.Z)({},n,n)),s.placeholderClassName=y()("material-provider-field-placeholder",(0,f.Z)({},o,o))),(0,d.cloneElement)(t,s)})),v?d.createElement(m.Z,{theme:l,isHover:Z,isFocus:g,disabled:u}):null)}}]),v}(d.Component);C.propTypes={children:v().any,className:v().string,style:v().object,theme:v().oneOf(Z.Z.enumerateValue(h.Z)),label:v().any,isLabelAnimate:v().bool,hasValue:v().bool,disabled:v().bool,required:v().bool,useSeparator:v().bool},C.defaultProps={theme:h.Z.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};const F=C},59501:(e,t,r)=>{"use strict";r.d(t,{Z:()=>F});var n=r(22122),a=r(81253),o=r(6610),l=r(5991),s=r(63349),i=r(10379),c=r(46070),u=r(77608),f=r(96156),d=r(37699),p=r(45697),v=r.n(p),m=r(11669),h=r(75115),b=r(87712),y=r(41844),Z=r.n(y),g=r(81540),O=r(19605);var C=function(e){(0,i.Z)(v,e);var t,r,p=(t=v,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var a=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function v(e){var t;(0,o.Z)(this,v);for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return t=p.call.apply(p,[this,e].concat(n)),(0,f.Z)((0,s.Z)(t),"focus",(function(){var e,r,n,a;null===(e=t.providerInstance)||void 0===e||null===(r=e.focus)||void 0===r||r.call(e),null===(n=t.textFieldInstance)||void 0===n||null===(a=n.focus)||void 0===a||a.call(n)})),(0,f.Z)((0,s.Z)(t),"blur",(function(){var e,r,n,a;null===(e=t.providerInstance)||void 0===e||null===(r=e.blur)||void 0===r||r.call(e),null===(n=t.textFieldInstance)||void 0===n||null===(a=n.blur)||void 0===a||a.call(n)})),(0,f.Z)((0,s.Z)(t),"handleTriggerChange",(function(e){t.setState({value:e},(function(){var r=t.props.onChange;r&&r(e)}))})),t.provider=(0,d.createRef)(),t.providerInstance=null,t.textField=(0,d.createRef)(),t.textFieldInstance=null,t.state={value:e.value},t}return(0,l.Z)(v,[{key:"componentDidMount",value:function(){var e,t;this.providerInstance=null===(e=this.provider)||void 0===e?void 0:e.current,this.textFieldInstance=null===(t=this.textField)||void 0===t?void 0:t.current}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.style,o=e.theme,l=e.label,s=e.isLabelAnimate,i=e.disabled,c=e.required,u=(0,a.Z)(e,["className","style","theme","label","isLabelAnimate","disabled","required"]),p=this.state.value;return d.createElement(h.Z,{ref:this.provider,className:Z()("material-text-field",(0,f.Z)({},t,t)),style:r,theme:o,label:l,isLabelAnimate:s,hasValue:!!p,disabled:i,required:c},d.createElement(m.Z,(0,n.Z)({},u,{ref:this.textField,theme:o,value:p,disabled:i,required:c,onChange:this.handleTriggerChange})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:O.Z.getDerivedState(e,t,"value")}}}]),v}(d.Component);(0,f.Z)(C,"Type",m.Z.Type),(0,f.Z)(C,"Theme",b.Z),C.propTypes={className:v().string,style:v().object,theme:v().oneOf(g.Z.enumerateValue(b.Z)),type:v().oneOf(g.Z.enumerateValue(m.Z.Type)),name:v().string,label:v().any,isLabelAnimate:v().bool,placeholder:v().string,value:v().oneOfType([v().number,v().string]),iconCls:v().string,disabled:v().bool,readOnly:v().bool,autoFocus:v().bool,infoMsg:v().string,clearButtonVisible:v().bool,clearButtonIconCls:v().string,rightIconCls:v().string,passwordButtonVisible:v().bool,required:v().bool,maxLength:v().number,max:v().number,min:v().number,pattern:v().object,patternInvalidMsg:v().string,autoComplete:v().string,autoCorrect:v().string,autoCapitalize:v().string,spellCheck:v().string,onChange:v().func,onPressEnter:v().func,onValid:v().func,onInvalid:v().func,onFocus:v().func,onBlur:v().func,onClear:v().func,onPasswordVisible:v().func,onPasswordInvisible:v().func,onMouseOver:v().func,onMouseOut:v().func},C.defaultProps={theme:b.Z.DEFAULT,type:"text",isLabelAnimate:!0,disabled:!1,readOnly:!1,autoFocus:!1,clearButtonVisible:!0,clearButtonIconCls:"fas fa-times-circle",passwordButtonVisible:!0,required:!1,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",fieldMsgVisible:!1};const F=C},20645:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(6610),a=r(5991),o=r(10379),l=r(46070),s=r(77608),i=r(96156),c=r(37699),u=r(45697),f=r.n(u),d=r(41844),p=r.n(d),v=r(87712),m=r(81540);var h=function(e){(0,o.Z)(f,e);var t,r,u=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function f(e){(0,n.Z)(this,f);for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return u.call.apply(u,[this,e].concat(r))}return(0,a.Z)(f,[{key:"render",value:function(){var e=this.props,t=e.theme,r=e.isHover,n=e.isFocus,a=e.disabled;return c.createElement("div",{className:p()("material-field-separator",(0,i.Z)({hover:r,focused:n},"theme-".concat(t),t)),disabled:a},c.createElement("div",{className:"material-field-separator-hover"}),c.createElement("div",{className:"material-field-separator-focus"}))}}]),f}(c.Component);(0,i.Z)(h,"Theme",v.Z),h.propTypes={className:f().string,style:f().object,theme:f().oneOf(m.Z.enumerateValue(v.Z)),isHover:f().bool,isFocus:f().bool,disabled:f().bool},h.defaultProps={theme:v.Z.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};const b=h}}]);
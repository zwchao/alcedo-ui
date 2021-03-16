(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[8108],{29250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(23645),n=r.n(a)()((function(e){return e[1]}));n.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const l=n},93886:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(23645),n=r.n(a)()((function(e){return e[1]}));n.push([e.id,".example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""]);const l=n},22356:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Z});var a=r(6610),n=r(5991),l=r(63349),o=r(10379),s=r(46070),i=r(77608),c=r(96156),u=r(37699),p=r(45697),d=r.n(p),f=r(82996),m=r(93379),h=r.n(m),y=r(29250);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}h()(y.Z,{insert:"head",singleton:!1}),y.Z.locals;var g=function(e){(0,o.Z)(d,e);var t,r,p=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(r){var n=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,a.Z)(this,d),t=p.call(this,e),(0,c.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(v({name:r},t.props.data[r]));return e})),t}return(0,n.Z)(d,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(u.Component);g.propTypes={data:d().object};const Z=g},56668:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var a=r(6610),n=r(5991),l=r(63349),o=r(10379),s=r(46070),i=r(77608),c=r(96156),u=r(37699),p=r(15859),d=r(24471),f=r(50704),m=r(22944),h=r(65460),y=r(22356);const b=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"popupClassName":{"type":"PropTypes.string","desc":"The CSS class name of the popup element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"popupStyle":{"type":"PropTypes.object","desc":"Override the styles of the popup element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme.","default":"Theme.DEFAULT"},"position":{"type":"PropTypes.oneOf"},"name":{"type":"PropTypes.string","desc":"The name of the auto complete.","default":""},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the field.","default":""},"label":{"type":"PropTypes.any","default":""},"data":{"type":"PropTypes.oneOf","desc":"Children passed into the List.","default":"[]"},"value":{"type":"PropTypes.any"},"disabled":{"type":"PropTypes.bool","desc":"If true, the auto complete will be disabled.","default":"false"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"autoClose":{"type":"PropTypes.bool","desc":"If true, the popup list automatically closed after selection.","default":"false"},"minFilterLength":{"type":"PropTypes.number","default":"1"},"filterCallback":{"type":"PropTypes.func","desc":"Callback function fired when filter changed."},"iconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.","default":""},"rightIconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.","default":"fas fa-search"},"noMatchedPopupVisible":{"type":"PropTypes.bool","desc":"The visiblity of no matched popup.","default":"true"},"noMatchedMsg":{"type":"PropTypes.string","desc":"The message of no matched value.","default":""},"required":{"type":"PropTypes.bool","default":"false"},"isLabelAnimate":{"type":"PropTypes.bool","default":"true"},"filter":{"type":"PropTypes.string","default":""},"popupChildren":{"type":"PropTypes.any"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onFilterChange":{"type":"PropTypes.func","desc":"The function that trigger when filter changes."},"onFilterPressEnter":{"type":"PropTypes.func","desc":"The function that trigger when press enter."},"onFilterClear":{"type":"PropTypes.func","desc":"The function that trigger when filter cleared."},"onChange":{"type":"PropTypes.func","desc":"The function that trigger when value changed."},"onItemClick":{"type":"PropTypes.func","desc":"The function that trigger when touch-tap the list items."},"onFocus":{"type":"PropTypes.func","desc":"Callback function fired when LocalAutoComplete get focus."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when LocalAutoComplete lose focus."},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"}}');var v=r(93379),g=r.n(v),Z=r(93886);g()(Z.Z,{insert:"head",singleton:!1}),Z.Z.locals;const C=function(e){(0,o.Z)(g,e);var t,r,v=(t=g,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(r){var n=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function g(e){var t;return(0,a.Z)(this,g),t=v.call(this,e),(0,c.Z)((0,l.Z)(t),"show",(function(e){var r=t.state.MaterialLocalAutoCompleteVisible;r[e]=!0,t.setState({MaterialLocalAutoCompleteVisible:r})})),(0,c.Z)((0,l.Z)(t),"hide",(function(e){var r=t.state.MaterialLocalAutoCompleteVisible;r[e]=!1,t.setState({MaterialLocalAutoCompleteVisible:r})})),(0,c.Z)((0,l.Z)(t),"onChange",(function(e){console.log("select item: ",e)})),(0,c.Z)((0,l.Z)(t),"filterPressEnterHandle",(function(e){console.log("filter value: ",e)})),(0,c.Z)((0,l.Z)(t),"filterClearHandle",(function(){console.log("filter cleared")})),t.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],t.state={MaterialLocalAutoCompleteVisible:{}},t}return(0,n.Z)(g,[{key:"render",value:function(){var e=this,t=this.state.MaterialLocalAutoCompleteVisible;return u.createElement("div",{className:"example auto-complete-examples"},u.createElement("h2",{className:"example-title"},"MaterialLocalAutoComplete"),u.createElement("p",null,"A ",u.createElement("span",null,"MaterialLocalAutoComplete")," is an interface to help users to complete their input."),u.createElement("h2",{className:"example-title"},"Examples"),u.createElement(d.Z,null,u.createElement(f.Z,{className:"example-header",title:"Basic"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,u.createElement("code",null,"MaterialLocalAutoComplete")," simple example."),u.createElement(p.Z,{theme:p.Z.Theme.HIGHLIGHT,filterInitValue:"test",data:this.data,label:"Label",placeholder:"Please select ...",onChange:this.onChange,onFilterPressEnter:this.filterPressEnterHandle,onFilterClear:this.filterClearHandle}))))),u.createElement(d.Z,null,u.createElement(f.Z,{className:"example-header",title:"In Dialog"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,u.createElement("code",null,"MaterialLocalAutoComplete")," simple example."),u.createElement(m.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),u.createElement(h.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(t){return u.createElement("div",{className:"popover-dialog-content-scroller"},u.createElement("div",{className:"field-group"},u.createElement(p.Z,{theme:p.Z.Theme.HIGHLIGHT,filterInitValue:"test",data:e.data,label:"Label",placeholder:"Please select ...",parentEl:t,onChange:e.onChange,onFilterPressEnter:e.filterPressEnterHandle,onFilterClear:e.filterClearHandle})))})))))),u.createElement("h2",{className:"example-title"},"Properties"),u.createElement(y.Z,{data:b}))}}]),g}(u.Component)},15859:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var a=r(22122),n=r(81253),l=r(6610),o=r(5991),s=r(63349),i=r(10379),c=r(46070),u=r(77608),p=r(96156),d=r(37699),f=r(45697),m=r.n(f),h=r(41844),y=r.n(h),b=r(52615),v=r(75115),g=r(87712),Z=r(65248),C=r(81540),P=r(19605);var T=function(e){(0,i.Z)(m,e);var t,r,f=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(r){var n=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function m(e){var t;(0,l.Z)(this,m);for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return t=f.call.apply(f,[this,e].concat(a)),(0,p.Z)((0,s.Z)(t),"handleTriggerFilterChange",(function(e){t.setState({filter:e},(function(){var r=t.props.onFilterChange;r&&r(e)}))})),(0,p.Z)((0,s.Z)(t),"handleTriggerChange",(function(e){t.setState({value:e},(function(){var r=t.props.onChange;r&&r(e)}))})),(0,p.Z)((0,s.Z)(t),"closePopup",(function(){t.autoCompleteInstance&&t.autoCompleteInstance.closePopup()})),t.autoComplete=(0,d.createRef)(),t.autoCompleteInstance=null,t.state={value:e.value,filter:e.filter},t}return(0,o.Z)(m,[{key:"componentDidMount",value:function(){this.autoCompleteInstance=this.autoComplete&&this.autoComplete.current}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.style,l=e.theme,o=e.label,s=e.isLabelAnimate,i=e.popupClassName,c=e.disabled,u=e.required,f=(0,n.Z)(e,["className","style","theme","label","isLabelAnimate","popupClassName","disabled","required"]),m=this.state,h=m.value,g=m.filter;return d.createElement(v.Z,{className:y()("material-local-auto-complete",(0,p.Z)({},t,t)),style:r,theme:l,label:o,isLabelAnimate:s,hasValue:!!g,disabled:c,required:u},d.createElement(b.Z,(0,a.Z)({},f,{ref:this.autoComplete,popupClassName:y()("material-local-auto-complete-popup",(0,p.Z)({},i,i)),theme:l,value:h,disabled:c,onFilterChange:this.handleTriggerFilterChange,onChange:this.handleTriggerChange})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:P.Z.getDerivedState(e,t,"value")}}}]),m}(d.Component);(0,p.Z)(T,"Theme",g.Z),(0,p.Z)(T,"Position",Z.Z),T.propTypes={className:m().string,popupClassName:m().string,style:m().object,popupStyle:m().object,theme:m().oneOf(C.Z.enumerateValue(g.Z)),position:m().oneOf(C.Z.enumerateValue(Z.Z)),name:m().string,placeholder:m().string,label:m().any,data:m().oneOfType([m().arrayOf(m().oneOfType([m().shape({className:m().string,style:m().object,theme:m().oneOf(C.Z.enumerateValue(g.Z)),value:m().oneOfType([m().string,m().number]),desc:m().oneOfType([m().string,m().number]),disabled:m().bool,isLoading:m().bool,disableTouchRipple:m().bool,iconCls:m().string,rightIconCls:m().string,itemRenderer:m().func,onClick:m().func}),m().string,m().number])),m().array]).isRequired,value:m().any,disabled:m().bool,valueField:m().string,displayField:m().string,descriptionField:m().string,autoClose:m().bool,minFilterLength:m().number,filterCallback:m().func,iconCls:m().string,rightIconCls:m().string,noMatchedPopupVisible:m().bool,noMatchedMsg:m().string,required:m().bool,isLabelAnimate:m().bool,filter:m().string,popupChildren:m().any,renderer:m().func,onFilterChange:m().func,onFilterPressEnter:m().func,onFilterClear:m().func,onChange:m().func,onItemClick:m().func,onFocus:m().func,onBlur:m().func,onMouseOver:m().func,onMouseOut:m().func},T.defaultProps={theme:g.Z.DEFAULT,name:"",placeholder:"",label:"",isLabelAnimate:!0,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!1,minFilterLength:1,iconCls:"",rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,noMatchedMsg:"",required:!1,filter:""};const O=T},75115:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var a=r(22122),n=r(81253),l=r(6610),o=r(5991),s=r(63349),i=r(10379),c=r(46070),u=r(77608),p=r(96156),d=r(37699),f=r(45697),m=r.n(f),h=r(20645),y=r(87712),b=r(41844),v=r.n(b),g=r(81540);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){(0,i.Z)(m,e);var t,r,f=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(r){var n=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function m(e){var t;(0,l.Z)(this,m);for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return t=f.call.apply(f,[this,e].concat(a)),(0,p.Z)((0,s.Z)(t),"focus",(function(){t.setState({isFocus:!0})})),(0,p.Z)((0,s.Z)(t),"blur",(function(){t.setState({isFocus:!1})})),(0,p.Z)((0,s.Z)(t),"setHovered",(function(e){t.setState({isHover:e})})),t.state={isHover:!1,isFocus:!1},t}return(0,o.Z)(m,[{key:"render",value:function(){var e=this,t=this.props,r=t.children,l=t.className,o=t.theme,s=t.label,i=t.isLabelAnimate,c=t.hasValue,u=t.disabled,f=t.required,m=t.useSeparator,y=(0,n.Z)(t,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),b=this.state,g=b.isHover,Z=b.isFocus;return d.createElement("div",(0,a.Z)({},y,{className:v()("material-provider","theme-".concat(o),(0,p.Z)({"has-label":s,"has-value":c,"has-separator":m,animated:i,focused:Z},l,l)),disabled:u}),d.createElement("div",{className:"material-provider-label-wrapper"},d.createElement("span",{className:"material-provider-label"},s),f?d.createElement("div",{className:"material-provider-required-dot"}):null),d.Children.map(r,(function(t){var r=t.props,a=r.triggerClassName,l=r.placeholderClassName,o=(0,n.Z)(r,["triggerClassName","placeholderClassName"]),s=C(C({},o),{},{className:v()("material-provider-field",(0,p.Z)({},o.className,o.className)),onFocus:function(){o.onFocus&&o.onFocus.apply(o,arguments),e.focus()},onBlur:function(){o.onBlur&&o.onBlur.apply(o,arguments),e.blur()},onMouseOver:function(){o.onMouseOver&&o.onMouseOver.apply(o,arguments),e.setHovered(!0)},onMouseOut:function(){o.onMouseOut&&o.onMouseOut.apply(o,arguments),e.setHovered(!1)}});return"string"!=typeof t.type&&(s.triggerClassName=v()("material-provider-field-trigger",(0,p.Z)({},a,a)),s.placeholderClassName=v()("material-provider-field-placeholder",(0,p.Z)({},l,l))),(0,d.cloneElement)(t,s)})),m?d.createElement(h.Z,{theme:o,isHover:g,isFocus:Z,disabled:u}):null)}}]),m}(d.Component);P.propTypes={children:m().any,className:m().string,style:m().object,theme:m().oneOf(g.Z.enumerateValue(y.Z)),label:m().any,isLabelAnimate:m().bool,hasValue:m().bool,disabled:m().bool,required:m().bool,useSeparator:m().bool},P.defaultProps={theme:y.Z.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};const T=P},20645:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var a=r(6610),n=r(5991),l=r(10379),o=r(46070),s=r(77608),i=r(96156),c=r(37699),u=r(45697),p=r.n(u),d=r(41844),f=r.n(d),m=r(87712),h=r(81540);var y=function(e){(0,l.Z)(p,e);var t,r,u=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(r){var n=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){(0,a.Z)(this,p);for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return u.call.apply(u,[this,e].concat(r))}return(0,n.Z)(p,[{key:"render",value:function(){var e=this.props,t=e.theme,r=e.isHover,a=e.isFocus,n=e.disabled;return c.createElement("div",{className:f()("material-field-separator",(0,i.Z)({hover:r,focused:a},"theme-".concat(t),t)),disabled:n},c.createElement("div",{className:"material-field-separator-hover"}),c.createElement("div",{className:"material-field-separator-focus"}))}}]),p}(c.Component);(0,i.Z)(y,"Theme",m.Z),y.propTypes={className:p().string,style:p().object,theme:p().oneOf(h.Z.enumerateValue(m.Z)),isHover:p().bool,isFocus:p().bool,disabled:p().bool},y.defaultProps={theme:m.Z.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};const b=y}}]);
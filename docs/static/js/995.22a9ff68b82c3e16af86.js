(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[995],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const l=a},36570:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,'.material-tree-select-examples .field-group {\n  float: none; }\n  .material-tree-select-examples .field-group::before, .material-tree-select-examples .field-group::after {\n    display: table;\n    content: ""; }\n  .material-tree-select-examples .field-group::after {\n    clear: both; }\n\n.example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n',""]);const l=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(34575),a=n.n(r),l=n(93913),s=n.n(l),o=n(81506),c=n.n(o),i=n(2205),p=n.n(i),u=n(78585),d=n.n(u),f=n(29754),h=n.n(f),m=n(59713),y=n.n(m),b=n(37699),g=n(45697),v=n.n(g),T=n(82996),C=n(93379),P=n.n(C),S=n(29250);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}P()(S.Z,{insert:"head",singleton:!1}),S.Z.locals;var O=function(e){p()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return d()(this,e)});function l(e){var t;return a()(this,l),t=r.call(this,e),y()(c()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(x({name:n},t.props.data[n]));return e})),t}return s()(l,[{key:"render",value:function(){return b.createElement("div",{className:"prop-type-desc-table-wrapper"},b.createElement(T.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),l}(b.Component);O.propTypes={data:v().object};const I=O},29610:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(34575),a=n.n(r),l=n(93913),s=n.n(l),o=n(81506),c=n.n(o),i=n(2205),p=n.n(i),u=n(78585),d=n.n(u),f=n(29754),h=n.n(f),m=n(59713),y=n.n(m),b=n(37699),g=n(24471),v=n(50704),T=n(64027),C=n(22944),P=n(65460),S=n(22356);const E=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"popupClassName":{"type":"PropTypes.string","desc":"The class name of the popup element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"popupStyle":{"type":"PropTypes.object","desc":"Override the styles of the popup element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme.","default":"Theme.DEFAULT"},"position":{"type":"PropTypes.oneOf"},"name":{"type":"PropTypes.string","desc":"The name of the MaterialTreeSelect."},"label":{"type":"PropTypes.any","desc":"The label of the text field."},"isLabelAnimate":{"type":"PropTypes.bool","desc":"The animate of the text field.","default":"true"},"value":{"type":"PropTypes.any","desc":"The value of the MaterialTreeSelect."},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the MaterialTreeSelect.","default":"Please select ..."},"title":{"type":"PropTypes.string"},"tip":{"type":"PropTypes.string"},"tipPosition":{"type":"PropTypes.oneOf","default":"Position.BOTTOM"},"rightIconCls":{"type":"PropTypes.string","default":"fas fa-angle-down"},"/*":{"type":"","desc":"The options data."},"data":{"type":"PropTypes.oneOf","desc":"The options data.","default":"[]"},"invalidMsg":{"type":"PropTypes.string","desc":"The invalid message of dropDownSelect."},"disabled":{"type":"PropTypes.bool","desc":"If true,the dropDownSelect will be disabled.","default":"false"},"required":{"type":"PropTypes.bool","default":"false"},"selectMode":{"type":"PropTypes.oneOf","desc":"The select mode of listItem.Can be normal,checkbox.","default":"SelectMode.SINGLE_SELECT"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"infoMsg":{"type":"PropTypes.string","desc":"The message of the MaterialTreeSelect."},"textFormat":{"type":"PropTypes.func","desc":"Use this function to format the options\'s text."},"autoClose":{"type":"PropTypes.bool","desc":"If true,the drop-down box automatically closed after selection.","default":"true"},"useFilter":{"type":"PropTypes.bool","default":"false"},"filterIconCls":{"type":"PropTypes.string","default":"fas fa-search"},"noMatchedMsg":{"type":"PropTypes.string"},"isSelectRecursive":{"type":"PropTypes.bool","default":"false"},"allowCollapse":{"type":"PropTypes.bool","default":"true"},"collapsed":{"type":"PropTypes.bool","default":"false"},"collapsedIconCls":{"type":"PropTypes.string"},"expandedIconCls":{"type":"PropTypes.string"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string"},"checkboxCheckedIconCls":{"type":"PropTypes.string"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string"},"popupChildren":{"type":"PropTypes.any"},"resetPopPositionWait":{"type":"PropTypes.number","default":"250"},"renderer":{"type":"PropTypes.func"},"triggerRenderer":{"type":"PropTypes.func"},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the button is touch-tapped."},"onClosePopup":{"type":"PropTypes.func","desc":"Callback function fired when the popup is closed."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when a menu item is selected."},"isNodeCollapsed":{"type":"PropTypes.func"},"onWheel":{"type":"PropTypes.func"},"onFocus":{"type":"PropTypes.func"},"onBlur":{"type":"PropTypes.func"},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"}}');var x=n(93379),O=n.n(x),I=n(36570);O()(I.Z,{insert:"head",singleton:!1}),I.Z.locals;const N=function(e){p()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return d()(this,e)});function l(e){var t;return a()(this,l),t=r.call(this,e),y()(c()(t),"show",(function(e){var n=t.state.MaterialTreeSelectVisible;n[e]=!0,t.setState({MaterialTreeSelectVisible:n})})),y()(c()(t),"hide",(function(e){var n=t.state.MaterialTreeSelectVisible;n[e]=!1,t.setState({MaterialTreeSelectVisible:n})})),y()(c()(t),"onChangeHandler",(function(e){console.log(e)})),t.data={id:"0",text:"Root",desc:"Root",children:[{id:"00",text:"Children 0 - 0",desc:"Children 0 - 0"},{id:"01",text:"Children 0 - 1",desc:"Children 0 - 1",children:[{id:"010",text:"Children 0 - 1 - 0",desc:"Children 0 - 1 - 0"},{id:"011",text:"Children 0 - 1 - 1",desc:"Children 0 - 1 - 1"},{id:"012",text:"Children 0 - 1 - 2",desc:"Children 0 - 1 - 2"}]},{id:"02",text:"Children 0 - 2",desc:"Children 0 - 2"}]},t.state={MaterialTreeSelectVisible:{}},t}return s()(l,[{key:"render",value:function(){var e=this,t=this.state.MaterialTreeSelectVisible;return b.createElement("div",{className:"example material-tree-select-examples"},b.createElement("h2",{className:"examples-title"},"MaterialTreeSelectExamples"),b.createElement("p",null,b.createElement("span",null,"MaterialTreeSelect"),"use to store operating elements. Click on the contact and a drop-down menu will appear. You can select from the list and execute the appropriate command."),b.createElement("h2",{className:"example-title"},"Examples"),b.createElement(g.Z,null,b.createElement(v.Z,{className:"example-header",title:"Basic"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"examples-wrapper"},b.createElement("p",null,b.createElement("code",null,"Tree"),"simple example."),b.createElement(T.Z,{theme:T.Z.Theme.HIGHLIGHT,data:this.data,value:{id:"010",text:"Children 0 - 1 - 0",desc:"Children 0 - 1 - 0"},onChange:this.onChangeHandler}))))),b.createElement(g.Z,null,b.createElement(v.Z,{className:"example-header",title:"Basic"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"examples-wrapper"},b.createElement("p",null,b.createElement("code",null,"MaterialDropdownSelect")," simple example."),b.createElement("div",{className:"field-group"},b.createElement(T.Z,{theme:T.Z.Theme.HIGHLIGHT,label:"Label",placeholder:"Placeholder",selectMode:T.Z.SelectMode.MULTI_SELECT,autoClose:!1,data:this.data,isSelectRecursive:!0,useFilter:!0,collapsedIconCls:"far fa-plus-square",expandedIconCls:"far fa-minus-square",checkboxUncheckedIconCls:"far fa-circle",checkboxCheckedIconCls:"fas fa-check-circle",checkboxIndeterminateIconCls:"fas fa-minus-circle",tip:"MaterialTreeSelect Example",isNodeCollapsed:function(e){return"01"===e.id},onChange:this.onChangeHandler})))))),b.createElement(g.Z,null,b.createElement(v.Z,{className:"example-header",title:"In Dialog"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"examples-wrapper"},b.createElement("p",null,b.createElement("code",null,"MaterialDropdownSelect")," simple example."),b.createElement(C.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),b.createElement(P.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(t){return b.createElement("div",{className:"popover-dialog-content-scroller"},b.createElement("div",{className:"field-group"},b.createElement(T.Z,{theme:T.Z.Theme.HIGHLIGHT,label:"Label",placeholder:"Placeholder",selectMode:T.Z.SelectMode.MULTI_SELECT,autoClose:!1,data:e.data,isSelectRecursive:!0,useFilter:!0,parentEl:t,collapsedIconCls:"far fa-plus-square",expandedIconCls:"far fa-minus-square",checkboxUncheckedIconCls:"far fa-circle",checkboxCheckedIconCls:"fas fa-check-circle",checkboxIndeterminateIconCls:"fas fa-minus-circle",tip:"MaterialTreeSelect Example",onChange:e.onChangeHandler})))})))))),b.createElement("h2",{className:"example-title"},"Properties"),b.createElement(S.Z,{data:E}))}}]),l}(b.Component)},75115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(67154),a=n.n(r),l=n(6479),s=n.n(l),o=n(34575),c=n.n(o),i=n(93913),p=n.n(i),u=n(81506),d=n.n(u),f=n(2205),h=n.n(f),m=n(78585),y=n.n(m),b=n(29754),g=n.n(b),v=n(59713),T=n.n(v),C=n(37699),P=n(45697),S=n.n(P),E=n(20645),x=n(87712),O=n(41844),I=n.n(O),N=n(81540);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){T()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){h()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=g()(t);if(n){var a=g()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return y()(this,e)});function l(e){var t;c()(this,l);for(var n=arguments.length,a=new Array(n>1?n-1:0),s=1;s<n;s++)a[s-1]=arguments[s];return t=r.call.apply(r,[this,e].concat(a)),T()(d()(t),"focus",(function(){t.setState({isFocus:!0})})),T()(d()(t),"blur",(function(){t.setState({isFocus:!1})})),T()(d()(t),"setHovered",(function(e){t.setState({isHover:e})})),t.state={isHover:!1,isFocus:!1},t}return p()(l,[{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.className,l=t.theme,o=t.label,c=t.isLabelAnimate,i=t.hasValue,p=t.disabled,u=t.required,d=t.useSeparator,f=s()(t,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),h=this.state,m=h.isHover,y=h.isFocus;return C.createElement("div",a()({},f,{className:I()("material-provider","theme-".concat(l),T()({"has-label":o,"has-value":i,"has-separator":d,animated:c,focused:y},r,r)),disabled:p}),C.createElement("div",{className:"material-provider-label-wrapper"},C.createElement("span",{className:"material-provider-label"},o),u?C.createElement("div",{className:"material-provider-required-dot"}):null),C.Children.map(n,(function(t){var n=t.props,r=n.triggerClassName,a=n.placeholderClassName,l=s()(n,["triggerClassName","placeholderClassName"]),o=R(R({},l),{},{className:I()("material-provider-field",T()({},l.className,l.className)),onFocus:function(){l.onFocus&&l.onFocus.apply(l,arguments),e.focus()},onBlur:function(){l.onBlur&&l.onBlur.apply(l,arguments),e.blur()},onMouseOver:function(){l.onMouseOver&&l.onMouseOver.apply(l,arguments),e.setHovered(!0)},onMouseOut:function(){l.onMouseOut&&l.onMouseOut.apply(l,arguments),e.setHovered(!1)}});return"string"!=typeof t.type&&(o.triggerClassName=I()("material-provider-field-trigger",T()({},r,r)),o.placeholderClassName=I()("material-provider-field-placeholder",T()({},a,a))),(0,C.cloneElement)(t,o)})),d?C.createElement(E.Z,{theme:l,isHover:m,isFocus:y,disabled:p}):null)}}]),l}(C.Component);w.propTypes={children:S().any,className:S().string,style:S().object,theme:S().oneOf(N.Z.enumerateValue(x.Z)),label:S().any,isLabelAnimate:S().bool,hasValue:S().bool,disabled:S().bool,required:S().bool,useSeparator:S().bool},w.defaultProps={theme:x.Z.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};const k=w},64027:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var r=n(67154),a=n.n(r),l=n(6479),s=n.n(l),o=n(34575),c=n.n(o),i=n(93913),p=n.n(i),u=n(81506),d=n.n(u),f=n(2205),h=n.n(f),m=n(78585),y=n.n(m),b=n(29754),g=n.n(b),v=n(59713),T=n.n(v),C=n(37699),P=n(45697),S=n.n(P),E=n(41844),x=n.n(E),O=n(66510),I=n(75115),N=n(87712),Z=n(59448),R=n(65248),w=n(81540),k=n(19605);var M=function(e){h()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=g()(t);if(n){var a=g()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return y()(this,e)});function l(e){var t;c()(this,l);for(var n=arguments.length,a=new Array(n>1?n-1:0),s=1;s<n;s++)a[s-1]=arguments[s];return t=r.call.apply(r,[this,e].concat(a)),T()(d()(t),"startRipple",(function(e,n){t.treeSelectInstance&&t.treeSelectInstance.startRipple(e,n)})),T()(d()(t),"endRipple",(function(){t.treeSelectInstance&&t.treeSelectInstance.endRipple()})),T()(d()(t),"triggerRipple",(function(e,n){t.treeSelectInstance&&t.treeSelectInstance.triggerRipple(e,n)})),T()(d()(t),"resetPopupPosition",(function(){t.treeSelectInstance&&t.treeSelectInstance.resetPosition()})),T()(d()(t),"openPopup",(function(){t.treeSelectInstance&&t.treeSelectInstance.openPopup()})),T()(d()(t),"closePopup",(function(){t.treeSelectInstance&&t.treeSelectInstance.closePopup()})),T()(d()(t),"handleTriggerChange",(function(e){t.setState({value:e},(function(){var n=t.props.onChange;n&&n(e)}))})),t.treeSelect=(0,C.createRef)(),t.treeSelectInstance=null,t.state={value:e.value},t}return p()(l,[{key:"componentDidMount",value:function(){this.treeSelectInstance=this.treeSelect&&this.treeSelect.current}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.theme,l=e.label,o=e.isLabelAnimate,c=e.disabled,i=e.required,p=s()(e,["className","style","theme","label","isLabelAnimate","disabled","required"]),u=this.state.value;return C.createElement(I.Z,{className:x()("material-tree-select",T()({},t,t)),style:n,theme:r,label:l,isLabelAnimate:o,hasValue:u&&u.length>0,disabled:c,required:i},C.createElement(O.Z,a()({},p,{ref:this.treeSelect,value:u,disabled:c,onChange:this.handleTriggerChange})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:k.Z.getDerivedState(e,t,"value")}}}]),l}(C.Component);T()(M,"SelectMode",Z.Z),T()(M,"Theme",N.Z),T()(M,"Position",R.Z),T()(M,"TipPosition",R.Z),M.propTypes={className:S().string,popupClassName:S().string,style:S().object,popupStyle:S().object,theme:S().oneOf(w.Z.enumerateValue(N.Z)),position:S().oneOf(w.Z.enumerateValue(R.Z)),name:S().string,label:S().any,isLabelAnimate:S().bool,value:S().any,placeholder:S().string,title:S().string,tip:S().string,tipPosition:S().oneOf(w.Z.enumerateValue(R.Z)),rightIconCls:S().string,data:S().oneOfType([S().shape({className:S().string,style:S().object,theme:S().oneOf(w.Z.enumerateValue(N.Z)),value:S().oneOfType([S().string,S().number]),text:S().oneOfType([S().string,S().number]),desc:S().oneOfType([S().string,S().number]),disabled:S().bool,isLoading:S().bool,iconCls:S().string,rightIconCls:S().string,title:S().string,children:S().array,itemRenderer:S().func,onClick:S().func}),S().array]),invalidMsg:S().string,disabled:S().bool,required:S().bool,selectMode:S().oneOf(w.Z.enumerateValue(Z.Z)),valueField:S().string,displayField:S().string,descriptionField:S().string,infoMsg:S().string,textFormat:S().func,autoClose:S().bool,useFilter:S().bool,filterIconCls:S().string,noMatchedMsg:S().string,isSelectRecursive:S().bool,allowCollapse:S().bool,collapsed:S().bool,collapsedIconCls:S().string,expandedIconCls:S().string,radioUncheckedIconCls:S().string,radioCheckedIconCls:S().string,checkboxUncheckedIconCls:S().string,checkboxCheckedIconCls:S().string,checkboxIndeterminateIconCls:S().string,popupChildren:S().any,resetPopPositionWait:S().number,renderer:S().func,triggerRenderer:S().oneOfType([S().number,S().string,S().func]),onItemClick:S().func,onClosePopup:S().func,onChange:S().func,isNodeCollapsed:S().func,onWheel:S().func,onFocus:S().func,onBlur:S().func,onMouseOver:S().func,onMouseOut:S().func},M.defaultProps={theme:N.Z.DEFAULT,popupTheme:N.Z.DEFAULT,isLabelAnimate:!0,placeholder:"Please select ...",rightIconCls:"fas fa-angle-down",data:[],disabled:!1,selectMode:Z.Z.SINGLE_SELECT,tipPosition:R.Z.BOTTOM,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!0,useFilter:!1,filterIconCls:"fas fa-search",isSelectRecursive:!1,allowCollapse:!0,collapsed:!1,required:!1,resetPopPositionWait:250};const D=M},20645:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(34575),a=n.n(r),l=n(93913),s=n.n(l),o=n(2205),c=n.n(o),i=n(78585),p=n.n(i),u=n(29754),d=n.n(u),f=n(59713),h=n.n(f),m=n(37699),y=n(45697),b=n.n(y),g=n(41844),v=n.n(g),T=n(87712),C=n(81540);var P=function(e){c()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d()(t);if(n){var a=d()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function l(e){a()(this,l);for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return r.call.apply(r,[this,e].concat(n))}return s()(l,[{key:"render",value:function(){var e=this.props,t=e.theme,n=e.isHover,r=e.isFocus,a=e.disabled;return m.createElement("div",{className:v()("material-field-separator",h()({hover:n,focused:r},"theme-".concat(t),t)),disabled:a},m.createElement("div",{className:"material-field-separator-hover"}),m.createElement("div",{className:"material-field-separator-focus"}))}}]),l}(m.Component);h()(P,"Theme",T.Z),P.propTypes={className:b().string,style:b().object,theme:b().oneOf(C.Z.enumerateValue(T.Z)),isHover:b().bool,isFocus:b().bool,disabled:b().bool},P.defaultProps={theme:T.Z.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};const S=P}}]);
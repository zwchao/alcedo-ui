(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{292:function(e,t,a){"use strict";var n=a(61),l=a.n(n),o=a(62),r=a.n(o),s=a(63),i=a.n(s),c=a(64),p=a.n(c),d=a(21),u=a.n(d),h=a(65),f=a.n(h),m=a(9),g=a.n(m),b=a(0),y=a.n(b),v=a(287),P=a.n(v),C=a(299);a(293);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){function t(e){var a;return l()(this,t),a=i()(this,p()(t).call(this,e)),g()(u()(a),"generateData",(function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(T({name:t},a.props.data[t]));return e})),a}return f()(t,e),r()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(C.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(b.Component);x.propTypes={data:P.a.object},t.a=x},293:function(e,t,a){var n=a(113),l=a(294);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var o={insert:"head",singleton:!1},r=(n(l,o),l.locals?l.locals:{});e.exports=r},294:function(e,t,a){(t=a(114)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},308:function(e,t,a){"use strict";var n=a(267),l=a.n(n),o=a(268),r=a.n(o),s=a(61),i=a.n(s),c=a(62),p=a.n(c),d=a(63),u=a.n(d),h=a(64),f=a.n(h),m=a(21),g=a.n(m),b=a(65),y=a.n(b),v=a(9),P=a.n(v),C=a(0),E=a.n(C),T=a(287),x=a.n(T),S=a(288),N=a.n(S),O=a(310),F=a(290),w=a(289);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var A=function(e){function t(e){var a,n;i()(this,t);for(var l=arguments.length,o=new Array(l>1?l-1:0),r=1;r<l;r++)o[r-1]=arguments[r];return n=u()(this,(a=f()(t)).call.apply(a,[this,e].concat(o))),P()(g()(n),"setFocused",(function(e){n.setState({isFocus:e})})),P()(g()(n),"setHovered",(function(e){n.setState({isHover:e})})),n.state={isHover:!1,isFocus:!1},n}return y()(t,e),p()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.className,o=t.theme,s=t.label,i=t.isLabelAnimate,c=t.hasValue,p=t.disabled,d=t.required,u=t.useSeparator,h=r()(t,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),f=this.state,m=f.isHover,g=f.isFocus;return E.a.createElement("div",l()({},h,{className:N()("material-provider",P()({"has-label":s,"has-value":c,"has-separator":u,animated:i,focused:g},n,n)),disabled:p}),E.a.createElement("div",{className:"material-provider-label-wrapper"},E.a.createElement("span",{className:"material-provider-label"},s),d?E.a.createElement("div",{className:"material-provider-required-dot"}):null),C.Children.map(a,(function(t){var a=t.props,n=a.triggerClassName,l=a.placeholderClassName,o=r()(a,["triggerClassName","placeholderClassName"]),s=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){P()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o,{className:N()("material-provider-field",P()({},o.className,o.className)),onFocus:function(){o.onFocus&&o.onFocus.apply(o,arguments),e.setFocused(!0)},onBlur:function(){o.onBlur&&o.onBlur.apply(o,arguments),e.setFocused(!1)},onMouseOver:function(){o.onMouseOver&&o.onMouseOver.apply(o,arguments),e.setHovered(!0)},onMouseOut:function(){o.onMouseOut&&o.onMouseOut.apply(o,arguments),e.setHovered(!1)}});return"string"!=typeof t.type&&(s.triggerClassName=N()("material-provider-field-trigger",P()({},n,n)),s.placeholderClassName=N()("material-provider-field-placeholder",P()({},l,l))),Object(C.cloneElement)(t,s)})),u?E.a.createElement(O.a,{theme:o,isHover:m,isFocus:g,disabled:p}):null)}}]),t}(C.Component);A.propTypes={children:x.a.any,className:x.a.string,style:x.a.object,theme:x.a.oneOf(w.a.enumerateValue(F.a)),label:x.a.any,isLabelAnimate:x.a.bool,hasValue:x.a.bool,disabled:x.a.bool,required:x.a.bool,useSeparator:x.a.bool},A.defaultProps={theme:F.a.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};var D=A;a.d(t,"a",(function(){return D}))},310:function(e,t,a){"use strict";var n=a(61),l=a.n(n),o=a(62),r=a.n(o),s=a(63),i=a.n(s),c=a(64),p=a.n(c),d=a(65),u=a.n(d),h=a(9),f=a.n(h),m=a(0),g=a.n(m),b=a(287),y=a.n(b),v=a(288),P=a.n(v),C=a(290),E=a(289),T=function(e){function t(e){var a;l()(this,t);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return i()(this,(a=p()(t)).call.apply(a,[this,e].concat(o)))}return u()(t,e),r()(t,[{key:"render",value:function(){var e=this.props,t=e.theme,a=e.isHover,n=e.isFocus,l=e.disabled;return g.a.createElement("div",{className:P()("material-field-separator",f()({hover:a,focused:n},"theme-".concat(t),t)),disabled:l},g.a.createElement("div",{className:"material-field-separator-hover"}),g.a.createElement("div",{className:"material-field-separator-focus"}))}}]),t}(m.Component);f()(T,"Theme",C.a),T.propTypes={className:y.a.string,style:y.a.object,theme:y.a.oneOf(E.a.enumerateValue(C.a)),isHover:y.a.bool,isFocus:y.a.bool,disabled:y.a.bool},T.defaultProps={theme:C.a.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};var x=T;a.d(t,"a",(function(){return x}))},338:function(e,t,a){"use strict";var n=a(267),l=a.n(n),o=a(268),r=a.n(o),s=a(61),i=a.n(s),c=a(62),p=a.n(c),d=a(63),u=a.n(d),h=a(64),f=a.n(h),m=a(21),g=a.n(m),b=a(65),y=a.n(b),v=a(9),P=a.n(v),C=a(0),E=a.n(C),T=a(287),x=a.n(T),S=a(288),N=a.n(S),O=a(309),F=a(308),w=a(290),R=a(289),A=a(298),D=function(e){function t(e){var a,n;i()(this,t);for(var l=arguments.length,o=new Array(l>1?l-1:0),r=1;r<l;r++)o[r-1]=arguments[r];return n=u()(this,(a=f()(t)).call.apply(a,[this,e].concat(o))),P()(g()(n),"focus",(function(){n.textFieldInstance&&n.textFieldInstance.focus()})),P()(g()(n),"blur",(function(){n.textFieldInstance&&n.textFieldInstance.blur()})),P()(g()(n),"handleTriggerChange",(function(e){n.setState({value:e},(function(){var t=n.props.onChange;t&&t(e)}))})),n.textField=Object(C.createRef)(),n.textFieldInstance=null,n.state={value:e.value},n}return y()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.textFieldInstance=this.textField&&this.textField.current}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.theme,o=e.label,s=e.isLabelAnimate,i=e.disabled,c=e.required,p=r()(e,["className","style","theme","label","isLabelAnimate","disabled","required"]),d=this.state.value;return E.a.createElement(F.a,{className:N()("material-text-field",P()({},t,t)),style:a,theme:n,label:o,isLabelAnimate:s,hasValue:!!d,disabled:i,required:c},E.a.createElement(O.a,l()({},p,{ref:this.textField,theme:n,value:d,disabled:i,required:c,onChange:this.handleTriggerChange})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:A.a.getDerivedState(e,t,"value")}}}]),t}(C.Component);P()(D,"Type",O.a.Type),P()(D,"Theme",w.a),D.propTypes={className:x.a.string,style:x.a.object,theme:x.a.oneOf(R.a.enumerateValue(w.a)),type:x.a.oneOf(R.a.enumerateValue(O.a.Type)),name:x.a.string,label:x.a.any,isLabelAnimate:x.a.bool,placeholder:x.a.string,value:x.a.oneOfType([x.a.number,x.a.string]),iconCls:x.a.string,disabled:x.a.bool,readOnly:x.a.bool,autoFocus:x.a.bool,infoMsg:x.a.string,clearButtonVisible:x.a.bool,rightIconCls:x.a.string,passwordButtonVisible:x.a.bool,required:x.a.bool,maxLength:x.a.number,max:x.a.number,min:x.a.number,pattern:x.a.object,patternInvalidMsg:x.a.string,autoComplete:x.a.string,autoCorrect:x.a.string,autoCapitalize:x.a.string,spellCheck:x.a.string,onChange:x.a.func,onPressEnter:x.a.func,onValid:x.a.func,onInvalid:x.a.func,onFocus:x.a.func,onBlur:x.a.func,onClear:x.a.func,onPasswordVisible:x.a.func,onPasswordInvisible:x.a.func,onMouseOver:x.a.func,onMouseOut:x.a.func},D.defaultProps={theme:w.a.DEFAULT,type:"text",isLabelAnimate:!0,disabled:!1,readOnly:!1,autoFocus:!1,clearButtonVisible:!0,passwordButtonVisible:!0,required:!1,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",fieldMsgVisible:!1};var j=D;a.d(t,"a",(function(){return j}))},353:function(e,t,a){"use strict";var n=a(267),l=a.n(n),o=a(268),r=a.n(o),s=a(61),i=a.n(s),c=a(62),p=a.n(c),d=a(63),u=a.n(d),h=a(64),f=a.n(h),m=a(21),g=a.n(m),b=a(65),y=a.n(b),v=a(9),P=a.n(v),C=a(0),E=a.n(C),T=a(287),x=a.n(T),S=a(288),N=a.n(S),O=a(304),F=a(324),w=a(303),R=a(290),A=a(291),D=a(289),j=a(298),V=function(e){function t(e){var a,n;i()(this,t);for(var l=arguments.length,o=new Array(l>1?l-1:0),r=1;r<l;r++)o[r-1]=arguments[r];return n=u()(this,(a=f()(t)).call.apply(a,[this,e].concat(o))),P()(g()(n),"handleClick",(function(e){var t=n.props,a=t.disabled,l=t.isLoading,o=t.beforeChange,r=t.onClick;if(!a&&!l){r&&r(e);var s=!n.state.value,i=function(){n.setState({value:s},(function(){var t=n.props.onChange;t&&t(s,e)}))};o?!1!==o(s)&&i():i()}})),n.state={value:!!e.value},n}return y()(t,e),p()(t,[{key:"render",value:function(){var e,a=this.props,n=a.className,o=a.style,s=a.theme,i=a.disabled,c=a.isLoading,p=a.size,d=a.labelVisible,u=a.tip,h=a.triggerEl,f=a.parentEl,m=a.tipPosition,g=(a.beforeChange,r()(a,["className","style","theme","disabled","isLoading","size","labelVisible","tip","triggerEl","parentEl","tipPosition","beforeChange"])),b=this.state.value;return E.a.createElement(w.a,{tipContent:u,triggerEl:h,parentEl:f,position:m},E.a.createElement("div",l()({},g,{className:N()("switcher",(e={activated:b,small:p===t.Size.SMALL},P()(e,"theme-".concat(s),s),P()(e,n,n),e)),style:o,disabled:i||c,onClick:this.handleClick}),d?E.a.createElement("div",{className:"switcher-label"}):null,E.a.createElement(O.a,{className:"switcher-slider-wrapper",disableTouchRipple:i||c},E.a.createElement("div",{className:"switcher-slider"},c?E.a.createElement(F.a,null):null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:j.a.getDerivedState(e,t,"value")}}}]),t}(C.Component);P()(V,"Size",{DEFAULT:"",SMALL:"small"}),P()(V,"Theme",R.a),V.propTypes={className:x.a.string,style:x.a.object,theme:x.a.oneOf(D.a.enumerateValue(R.a)),value:x.a.bool,disabled:x.a.bool,isLoading:x.a.bool,labelVisible:x.a.bool,size:x.a.oneOf(D.a.enumerateValue(V.Size)),tip:x.a.string,tipPosition:x.a.oneOf(D.a.enumerateValue(A.a)),triggerEl:x.a.object,parentEl:x.a.object,onClick:x.a.func,beforeChange:x.a.func,onChange:x.a.func},V.defaultProps={theme:R.a.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:V.Size.DEFAULT,tipPosition:A.a.BOTTOM};var L=V;a.d(t,"a",(function(){return L}))},694:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"columns":{"type":"PropTypes.array","desc":"Children passed into table header."},"data":{"type":"PropTypes.array"},"value":{"type":"PropTypes.array"},"idProp":{"type":"PropTypes.string"},"disabled":{"type":"PropTypes.bool","default":"false"},"hasInitFadeOut":{"type":"PropTypes.bool","default":"true"},"noDataText":{"type":"PropTypes.string","default":"No Data"},"expandRows":{"type":"PropTypes.array","desc":"expand","default":"[]"},"expandIconCls":{"type":"PropTypes.string","default":"fas fa-chevron-right"},"selectTheme":{"type":"PropTypes.oneOf","desc":"multi select"},"selectMode":{"type":"PropTypes.oneOf","default":"SelectMode.SINGLE_SELECT"},"selectAllMode":{"type":"PropTypes.oneOf","default":"SelectAllMode.CURRENT_PAGE"},"isSelectRecursive":{"type":"PropTypes.bool","default":"false"},"selectUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"selectCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"selectIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"sorting":{"type":"PropTypes.shape","desc":"sorting"},"defaultSortingType":{"type":"PropTypes.oneOf","default":"SortingType.ASC"},"sortingAscIconCls":{"type":"PropTypes.string","default":"fas fa-sort-up"},"sortingDescIconCls":{"type":"PropTypes.string","default":"fas fa-sort-down"},"autoSorting":{"type":"PropTypes.bool","default":"true"},"isClickSorting":{"type":"PropTypes.bool","default":"true"},"sortingFunc":{"type":"PropTypes.func"},"pageSizeClassName":{"type":"PropTypes.string","desc":"pagination"},"pageSizeTriggerClassName":{"type":"PropTypes.string"},"pageSizePopupClassName":{"type":"PropTypes.string"},"isPaginated":{"type":"PropTypes.bool","default":"true"},"page":{"type":"PropTypes.number","default":"0"},"pageSize":{"type":"PropTypes.number","default":"10"},"pageSizes":{"type":"PropTypes.array","default":"[5, 10, 15, 20]"},"pageSizeValueField":{"type":"PropTypes.string","default":"value"},"pageSizeDisplayField":{"type":"PropTypes.string","default":"text"},"paginationParentEl":{"type":"PropTypes.object"},"useFullPagination":{"type":"PropTypes.bool","default":"false"},"paginationSelectionVisible":{"type":"PropTypes.bool","default":"false"},"paginationTotalVisible":{"type":"PropTypes.bool","default":"true"},"paginationPageVisible":{"type":"PropTypes.bool","default":"true"},"paginationPageSizeVisible":{"type":"PropTypes.bool","default":"true"},"paginationPageSizeRightIconCls":{"type":"PropTypes.string","default":"fas fa-angle-down"},"paginationPrevIconCls":{"type":"PropTypes.string","default":"fas fa-angle-left"},"paginationNextIconCls":{"type":"PropTypes.string","default":"fas fa-angle-right"},"paginationFirstIconCls":{"type":"PropTypes.string","default":"fas fa-angle-double-left"},"paginationLastIconCls":{"type":"PropTypes.string","default":"fas fa-angle-double-right"},"paginationSelectionRenderer":{"type":"PropTypes.func"},"paginationTotalRenderer":{"type":"PropTypes.func"},"isHeadHidden":{"type":"PropTypes.bool","desc":"hidden","default":"false"},"isFootHidden":{"type":"PropTypes.bool","default":"false"},"isHeadFixed":{"type":"PropTypes.bool","desc":"fixed","default":"false"},"isFootFixed":{"type":"PropTypes.bool","default":"false"},"scroll":{"type":"PropTypes.shape","desc":"scroll"},"onInit":{"type":"PropTypes.func","desc":"callback"},"onChange":{"type":"PropTypes.func"},"onSelect":{"type":"PropTypes.func"},"onDeselect":{"type":"PropTypes.func"},"onSelectAll":{"type":"PropTypes.func"},"onDeselectAll":{"type":"PropTypes.func"},"onExpand":{"type":"PropTypes.func"},"onCollapse":{"type":"PropTypes.func"},"onExpandChange":{"type":"PropTypes.func"},"onSortChange":{"type":"PropTypes.func"},"onDataUpdate":{"type":"PropTypes.func"},"onPaginationChange":{"type":"PropTypes.func"},"onPageChange":{"type":"PropTypes.func"},"onPageSizeChange":{"type":"PropTypes.func"},"onScrollStart":{"type":"PropTypes.func"},"onScrollEnd":{"type":"PropTypes.func"},"onScrollChange":{"type":"PropTypes.func"},"onResizeStart":{"type":"PropTypes.func"},"onResizeEnd":{"type":"PropTypes.func"},"onResizeChange":{"type":"PropTypes.func"}}')},695:function(e,t,a){var n=a(113),l=a(696);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var o={insert:"head",singleton:!1},r=(n(l,o),l.locals?l.locals:{});e.exports=r},696:function(e,t,a){(t=a(114)(!1)).push([e.i,'.table-examples .toolbar {\n  margin-bottom: 16px; }\n  .table-examples .toolbar::before, .table-examples .toolbar::after {\n    display: table;\n    content: ""; }\n  .table-examples .toolbar::after {\n    clear: both; }\n  .table-examples .toolbar .action-button {\n    float: left;\n    width: auto;\n    margin: 17px 16px 0 0; }\n  .table-examples .toolbar .filter {\n    float: right;\n    background: transparent; }\n\n.table-examples .table.example-table .table-action {\n  width: auto;\n  margin: 16px 16px 0 0; }\n\n.table-examples .table.example-table.head-hidden .scroll-table-body-scroller {\n  border-top: 1px solid #e4eaf2; }\n\n.table-examples .table.example-table.foot-hidden .scroll-table-body-scroller {\n  border-bottom: 1px solid #e4eaf2; }\n  .table-examples .table.example-table.foot-hidden .scroll-table-body-scroller tbody tr:last-child td {\n    border-bottom: none; }\n\n.table-examples .loading-table-wrapper {\n  position: relative;\n  min-height: 200px; }\n  .table-examples .loading-table-wrapper .table th, .table-examples .loading-table-wrapper .table td {\n    border: 1px solid #e4eaf2; }\n  .table-examples .loading-table-wrapper .loading-table-loading {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto; }\n',""]),e.exports=t},840:function(e,t,a){"use strict";a.r(t);var n=a(61),l=a.n(n),o=a(62),r=a.n(o),s=a(63),i=a.n(s),c=a(64),p=a.n(c),d=a(21),u=a.n(d),h=a(65),f=a.n(h),m=a(9),g=a.n(m),b=a(0),y=a.n(b),v=a(288),P=a.n(v),C=a(281),E=a.n(C),T=a(299),x=a(353),S=a(304),N=a(296),O=a(297),F=a(324),w=a(295),R=a(338),A=a(292),D=a(694),j=a(90);a(695);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=Symbol("LOADING_SYMBOL"),k=function(e){function t(e){var a;return l()(this,t),a=i()(this,p()(t).call(this,e)),g()(u()(a),"getFixedColumns",(function(){return a.columns.map((function(e){return["ID","Name"].includes(e.headRenderer)?L({fixed:T.a.Fixed.LEFT},e):["Status","Action"].includes(e.headRenderer)?L({fixed:T.a.Fixed.RIGHT},e):e}))})),g()(u()(a),"generateData",(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=[],l=0;l<e;l++){var o,r="".concat(t?"".concat(t,"-"):"").concat(l),s={id:r,firstName:"firstName".concat(r),lastName:"lastName".concat(r),age:Math.floor(100*Math.random()),deposit:E()(1e6*Math.random(),2),other:"Other Content"};if(a&&"0"===r.split("-").pop())s.children=[(o={},g()(o,I,!0),g()(o,"disabled",!0),o)];n.push(s)}return n})),g()(u()(a),"deleteRow",(function(e){var t=a.state.data.filter((function(t){return t.id!==e}));a.setState({data:t})})),g()(u()(a),"handleSortChange",(function(e){a.setState({sorting:e}),console.log("Sort Change Value: ",e)})),g()(u()(a),"handlePaginationChange",(function(e){var t=e.page,a=e.pageSize;console.log("page: ".concat(t,", pageSize: ").concat(a))})),g()(u()(a),"handleSelect",(function(e,t,a){console.log("Select Value: ",e)})),g()(u()(a),"handleDeselect",(function(e,t,a){console.log("Deselect Value: ",e)})),g()(u()(a),"handleSelectAll",(function(e){console.log("Select All Value: ",e)})),g()(u()(a),"handleSeselectAll",(function(e){console.log("Deselect All Value: ",e)})),g()(u()(a),"handleChange",(function(e){console.log("Changed Value: ",e)})),g()(u()(a),"handleExpand",(function(e){console.log("Expand: ",e);var t=a.state.data;e&&t&&e.children[0][I]&&setTimeout((function(){j.a.postOrderTraverse({children:t},(function(t){if(t&&t.id===e.id)return t.children=a.generateData(10,t.id),!1})),a.setState({data:t})}),1e3)})),g()(u()(a),"handleCollapse",(function(e){console.log("Collapse: ",e)})),g()(u()(a),"collapseAllRows",(function(){a.tableRef&&a.tableRef.current&&a.tableRef.current.collapseAllRows()})),g()(u()(a),"toggleHead",(function(){a.setState({headVisible:!a.state.headVisible})})),g()(u()(a),"toggleFoot",(function(){a.setState({footVisible:!a.state.footVisible})})),g()(u()(a),"handleFilter",(function(e){a.setState({filter:e})})),g()(u()(a),"filterData",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.data,t=a.state.filter;return t&&e?e.filter((function(e){return e&&(e.firstName&&e.firstName.toUpperCase().includes(t.toUpperCase())||e.lastName&&e.lastName.toUpperCase().includes(t.toUpperCase()))})):e})),a.tableRef=Object(b.createRef)(),a.state={data:a.generateData(),sorting:null,filter:"",headVisible:!0,footVisible:!0},a.columns=[{headRenderer:"ID",bodyRenderer:function(e){return e[I]?y.a.createElement(F.a,null):e.id},footRenderer:"Total",sortable:!0,sortingProp:"id"},{width:300,noWrap:!0,headRenderer:"Name",bodyRenderer:function(e){return e.firstName&&e.lastName?"".concat(e.firstName," ").concat(e.lastName):""},sortable:!0,sortingProp:"firstName"},{align:T.a.Align.RIGHT,noWrap:!0,headRenderer:"Age",bodyRenderer:function(e){return e.age},footRenderer:a.state.data&&a.state.data.length>0?function(){return y.a.createElement(b.Fragment,null,y.a.createElement("div",null,"Average"),y.a.createElement("div",null,a.state.data.reduce((function(e,t){return e+t.age}),0)/a.state.data.length))}:null,sortable:!0,sortingProp:"age"},{headRenderer:"Other Column",headAlign:T.a.Align.CENTER,children:[{width:300,headRenderer:"Other Column 1",bodyRenderer:function(e){return e.other?"".concat(e.other," 1"):""}},{width:300,headRenderer:"Other Column 2",bodyRenderer:function(e){return e.other?"".concat(e.other," 2"):""}},{width:300,headRenderer:"Other Column 3",bodyRenderer:function(e){return e.other?"".concat(e.other," 3"):""}},{width:300,headRenderer:"Other Column 4",bodyRenderer:function(e){return e.other?"".concat(e.other," 4"):""}}]},{align:T.a.Align.RIGHT,noWrap:!0,headRenderer:"Deposit",bodyRenderer:function(e){return e.deposit?"$".concat(e.deposit):""},footRenderer:a.state.data&&a.state.data.length>0?function(){return y.a.createElement(b.Fragment,null,y.a.createElement("div",null,"Sum"),y.a.createElement("div",null,"$",a.state.data.reduce((function(e,t){return E()(e+t.deposit,2)}),0)))}:null,sortable:!0,sortingProp:"deposit"},{headRenderer:"Status",bodyRenderer:function(e){return e[I]?null:y.a.createElement(x.a,{value:!e.disabled,size:"small",onClick:function(e){return e.stopPropagation()}})}},{headRenderer:"Action",bodyRenderer:function(e){return e[I]?null:y.a.createElement(S.a,{iconCls:"fas fa-trash-alt",onClick:function(){return a.deleteRow(e.id)}})}}],a.pageSizes=[{value:10,text:"10 / page"},{value:20,text:"20 / page"},{value:30,text:"30 / page"},{value:40,text:"40 / page"},{value:50,text:"50 / page"}],a}return f()(t,e),r()(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.sorting,n=e.filter,l=e.headVisible,o=e.footVisible,r=this.filterData(t);return y.a.createElement("div",{className:"example table-examples"},y.a.createElement("h2",{className:"example-title"},"Table"),y.a.createElement("p",null,y.a.createElement("span",null,"Table")," are used to display data and to organize it."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(N.a,null,y.a.createElement(O.a,{className:"example-header",title:"Normal"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"A simple ",y.a.createElement("code",null,"Table")," example."),y.a.createElement(T.a,{className:"example-table",columns:this.columns,data:t,onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll})))),y.a.createElement(N.a,null,y.a.createElement(O.a,{className:"example-header",title:"Fix Head & Foot"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"You can config ",y.a.createElement("code",null,"isHeadFixed")," to fix the Head,  and config ",y.a.createElement("code",null,"isFootFixed")," to fix the Foot."),y.a.createElement(T.a,{className:"example-table",columns:this.columns,data:t,isHeadFixed:!0,isFootFixed:!0,scroll:{maxHeight:320},onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll})))),y.a.createElement(N.a,null,y.a.createElement(O.a,{className:"example-header",title:"Fix Columns"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"You can config ",y.a.createElement("code",null,"fixed")," in columns to fix the column ",y.a.createElement("code",null,"Left")," or ",y.a.createElement("code",null,"Right"),"."),y.a.createElement(T.a,{className:"example-table",columns:this.getFixedColumns(),data:t,scroll:{width:1200},onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll})))),y.a.createElement(N.a,null,y.a.createElement(O.a,{className:"example-header",title:"Fix Head, Foot and Columns"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"toolbar"},y.a.createElement(w.a,{className:"action-button",value:"Collapse All Rows",onClick:this.collapseAllRows}),y.a.createElement(w.a,{className:"action-button",value:"Toggle Table Head",onClick:this.toggleHead}),y.a.createElement(w.a,{className:"action-button",value:"Toggle Table Foot",onClick:this.toggleFoot}),y.a.createElement(R.a,{className:"filter",label:"Filter",value:n,onChange:this.handleFilter})),y.a.createElement("div",{className:"loading-table-wrapper"},r?y.a.createElement(T.a,{ref:this.tableRef,className:P()("example-table",{"head-hidden":!l,"foot-hidden":!o||!r||r.length<1}),data:r,columns:this.getFixedColumns(),sorting:a,selectMode:T.a.SelectMode.MULTI_SELECT,isHeadFixed:!0,isFootFixed:!0,isHeadHidden:!l,isFootHidden:!o||!r||r.length<1,scroll:{width:1200,height:r&&r.length>0?320:0},useFullPagination:!0,paginationTotalRenderer:function(e){return y.a.createElement("span",null,"Self Defined Total: ",e)},onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll}):y.a.createElement(F.a,{className:"loading-table-loading"}))))),y.a.createElement(N.a,null,y.a.createElement(O.a,{className:"example-header",title:"No Data"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"No Data ",y.a.createElement("code",null,"Table")," example."),y.a.createElement(T.a,{className:"example-table",data:[],columns:this.columns,selectMode:T.a.SelectMode.MULTI_SELECT,isFootHidden:!0})))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(A.a,{data:D}))}}]),t}(b.Component);t.default=k}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{500:function(e,t,a){"use strict";a(466);var l=a(12),n=a.n(l),r=(a(470),a(126)),s=a.n(r),i=a(127),o=a.n(i),p=a(128),u=a.n(p),c=a(129),d=a.n(c),f=a(130),m=a.n(f),h=a(20),v=a.n(h),y=a(0),g=a.n(y),C=a(504),b=(a(501),function(e){function t(e){var a,l;return s()(this,t),(l=u()(this,d()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],l.generateData=(a=v()(v()(l)),l.generateData).bind(a),l}return m()(t,e),o()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(n()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return g.a.createElement("div",{className:"prop-type-desc-table-wrapper"},g.a.createElement(C.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(y.Component));b.defaultProps={data:null},t.a=b},501:function(e,t,a){var l=a(502);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(210)(l,n);l.locals&&(e.exports=l.locals)},502:function(e,t,a){(e.exports=a(209)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},509:function(e,t,a){"use strict";var l=a(467),n=a.n(l),r=a(12),s=a.n(r),i=(a(469),a(468)),o=a.n(i),p=a(126),u=a.n(p),c=a(127),d=a.n(c),f=a(128),m=a.n(f),h=a(129),v=a.n(h),y=a(130),g=a.n(y),C=a(20),b=a.n(C),F=a(40),T=a.n(F),P=a(0),E=a.n(P),N=a(497),D=a.n(N),H=a(512),w=a(499),S=(a(498),function(e){function t(e){var a,l;u()(this,t);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return l=m()(this,(a=v()(t)).call.apply(a,[this,e].concat(r))),T()(b()(b()(l)),"setFocused",function(e){l.setState({isFocus:e})}),T()(b()(b()(l)),"setHovered",function(e){l.setState({isHover:e})}),l.state={isHover:!1,isFocus:!1},l}return g()(t,e),d()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,l=t.className,r=t.theme,i=t.label,p=t.isLabelAnimate,u=t.hasValue,c=t.disabled,d=t.required,f=t.useSeparator,m=o()(t,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),h=this.state,v=h.isHover,y=h.isFocus,g=D()("material-provider",T()({"has-label":i,"has-value":u,"has-separator":f,animated:p,focused:y},l,l));return E.a.createElement("div",n()({},m,{className:g,disabled:c}),E.a.createElement("div",{className:"material-provider-label-wrapper"},E.a.createElement("span",{className:"material-provider-label"},i),d?E.a.createElement("div",{className:"material-provider-required-dot"}):null),P.Children.map(a,function(t){var a=t.props,l=a.triggerClassName,n=a.placeholderClassName,r=o()(a,["triggerClassName","placeholderClassName"]),i=s()({},r,{className:D()("material-provider-field",T()({},r.className,r.className)),onFocus:function(){r.onFocus&&r.onFocus.apply(r,arguments),e.setFocused(!0)},onBlur:function(){r.onBlur&&r.onBlur.apply(r,arguments),e.setFocused(!1)},onMouseOver:function(){r.onMouseOver&&r.onMouseOver.apply(r,arguments),e.setHovered(!0)},onMouseOut:function(){r.onMouseOut&&r.onMouseOut.apply(r,arguments),e.setHovered(!1)}});return"string"!=typeof t.type&&(i.triggerClassName=D()("material-provider-field-trigger",T()({},l,l)),i.placeholderClassName=D()("material-provider-field-placeholder",T()({},n,n))),Object(P.cloneElement)(t,i)}),f?E.a.createElement(H.a,{theme:r,isHover:v,isFocus:y,disabled:c}):null)}}]),t}(P.Component));S.defaultProps={theme:w.a.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};var L=S;a.d(t,"a",function(){return L})},512:function(e,t,a){"use strict";var l=a(126),n=a.n(l),r=a(127),s=a.n(r),i=a(128),o=a.n(i),p=a(129),u=a.n(p),c=a(130),d=a.n(c),f=a(40),m=a.n(f),h=a(0),v=a.n(h),y=a(497),g=a.n(y),C=a(499),b=(a(498),function(e){function t(e){var a;n()(this,t);for(var l=arguments.length,r=new Array(l>1?l-1:0),s=1;s<l;s++)r[s-1]=arguments[s];return o()(this,(a=u()(t)).call.apply(a,[this,e].concat(r)))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.theme,a=e.isHover,l=e.isFocus,n=e.disabled,r=g()("material-field-separator",m()({hover:a,focused:l},"theme-".concat(t),t));return v.a.createElement("div",{className:r,disabled:n},v.a.createElement("div",{className:"material-field-separator-hover"}),v.a.createElement("div",{className:"material-field-separator-focus"}))}}]),t}(h.Component));m()(b,"Theme",C.a),b.defaultProps={theme:C.a.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};var F=b;a.d(t,"a",function(){return F})},565:function(e,t,a){"use strict";var l=a(467),n=a.n(l),r=(a(474),a(466),a(468)),s=a.n(r),i=a(212),o=a.n(i),p=(a(213),a(214),a(217),a(218),a(211),a(126)),u=a.n(p),c=a(127),d=a.n(c),f=a(128),m=a.n(f),h=a(129),v=a.n(h),y=a(130),g=a.n(y),C=a(20),b=a.n(C),F=a(40),T=a.n(F),P=a(0),E=a.n(P),N=a(84),D=a(497),H=a.n(D),w=a(481),S=a.n(w),L=a(510),A=a(513),k=a(520),x=a(531),I=a(499),M=a(503),O=a(498),V=a(522),B=a(516),U=a(507),R=a(525),q=a(515),j=function(e){function t(e){var a,l;u()(this,t);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return l=m()(this,(a=v()(t)).call.apply(a,[this,e].concat(r))),T()(b()(b()(l)),"filterData",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.state.filter,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.props.data,a=l.props.minFilterLength;if(!e||e.length<a)return t;var n=l.props,r=n.valueField,s=n.displayField,i=n.renderer,p=n.filterCallback;return p?p(e,t):t&&t.filter(function(t){if(!t)return!1;if(i)return i(t).toString().toUpperCase().includes(e.toUpperCase());if("object"===o()(t)){var a=O.a.getTextByDisplayField(t,s,r);if(a)return a.toString().toUpperCase().includes(e.toUpperCase())}return t.toString().toUpperCase().includes(e.toUpperCase())})}),T()(b()(b()(l)),"filterFocusHandler",function(){if(!l.props.disabled){var e=l.props,t=e.minFilterLength,a=e.onFocus,n=l.state,r=n.filter,s=n.listData,i={filterFocused:!0};a&&a.apply(void 0,arguments),null!==r&&r.length>=t&&(i.popupVisible=!0,i.tempSelectIndex=s.length>0?0:null),l.setState(i)}}),T()(b()(b()(l)),"filterBlurHandler",function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];l.setState({filterFocused:!1},function(){var e=l.props.onBlur;e&&e.apply(void 0,t)})}),T()(b()(b()(l)),"filterKeyDownHandler",function(e){var t=l.props.useDynamicRenderList,a=l.state,n=a.tempSelectIndex,r=a.listData,s=t?l.refs.dynamicRenderList:l.refs.list,i=n;38===e.keyCode?i--:40===e.keyCode&&i++;var o=V.a.range(i,0,r.length-1);l.setState({tempSelectIndex:o},function(){var t=l.props.onFilterKeyDown;t&&t(e),s&&s.adjustScroll()})}),T()(b()(b()(l)),"filterPressEnterHandler",function(e,t){var a={};l.props.autoClose&&(a.popupVisible=!1),l.setState(a,function(){var e=l.props.onFilterPressEnter;e&&e(t),l.update()})}),T()(b()(b()(l)),"filterChangeHandler",function(e){var t=l.props,a=t.data,n=t.minFilterLength,r={filter:e,popupVisible:null!==e&&e.length>=n};e?(r.listData=l.filterData(e),r.tempSelectIndex=r.listData.length>0?0:null):(r.listData=a,r.value=null,r.tempSelectIndex=null),l.setState(r,function(){var t=l.props.onFilterChange;t&&t(e),l.refs.popup&&l.refs.popup.resetPosition()})}),T()(b()(b()(l)),"closePopup",function(){l.setState({popupVisible:!1},function(){var e=l.props.onPopupClosed;e&&e()})}),T()(b()(b()(l)),"popupRenderHandler",function(e){var t=B.a.isAbove(l.localAutoCompleteEl,l.triggerEl,Object(N.findDOMNode)(e));t!==l.state.isAbove&&l.setState({isAbove:t})}),T()(b()(b()(l)),"itemClickHandler",function(e){var t=l.props,a=t.autoClose,n=t.valueField,r=t.displayField,s=t.renderer,i=s?s(e):O.a.getTextByDisplayField(e,r,n),o={tempSelectIndex:null,value:e,filter:i,listData:l.filterData(i)},p=l.state.value!=e;a&&(o.popupVisible=!1),l.setState(o,function(){var t=l.props,a=t.onItemClick,n=t.onChange;a&&a(e),p&&n&&n(e)})}),T()(b()(b()(l)),"update",function(){var e=l.props,t=e.displayField,a=e.valueField,n=e.renderer,r=l.state,s=r.filter,i=r.tempSelectIndex,o=r.listData,p=null;if(s&&o&&o.length>0){p={};var u=S()(i)?i:0;p.value=o[u],p.filter=n?n(p.value):O.a.getTextByDisplayField(p.value,t,a),p.listData=l.filterData(p.filter)}l.setState(p,function(){if(p){var e=l.props,t=e.onFilterChange,a=e.onChange;t&&t(p.filter),a&&a(p.value)}})}),T()(b()(b()(l)),"mouseDownHandler",function(e){!l.state.filterFocused||R.a.isParent(e.target,l.localAutoCompleteEl)||R.a.isParent(e.target,Object(N.findDOMNode)(l.refs.popup))||l.update()}),l.triggerEl=null,l.state={tempSelectIndex:null,value:e.value,filter:e.filterInitValue,filterFocused:!1,popupVisible:!1,isAbove:!1,listData:l.filterData(e.filterInitValue)},l}return g()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.localAutoCompleteEl=this.refs.localAutoComplete,this.triggerEl=Object(N.findDOMNode)(this.refs.trigger),U.a.addEvent(document,"mousedown",this.mouseDownHandler)}},{key:"componentWillUnmount",value:function(){U.a.removeEvent(document,"mousedown",this.mouseDownHandler)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.triggerClassName,l=e.popupClassName,r=e.style,i=e.popupStyle,o=e.popupTheme,p=e.name,u=e.position,c=e.valueField,d=e.displayField,f=e.descriptionField,m=e.noMatchedPopupVisible,h=e.noMatchedMsg,v=e.popupChildren,y=e.renderer,g=e.useDynamicRenderList,C=e.listHeight,b=e.itemHeight,F=e.scrollBuffer,P=e.onFilterClear,N=(e.data,e.filterInitValue,e.minFilterLength,e.autoClose,e.onFilterPressEnter,e.filterCallback,e.onFilterChange,s()(e,["className","triggerClassName","popupClassName","style","popupStyle","popupTheme","name","position","valueField","displayField","descriptionField","noMatchedPopupVisible","noMatchedMsg","popupChildren","renderer","useDynamicRenderList","listHeight","itemHeight","scrollBuffer","onFilterClear","data","filterInitValue","minFilterLength","autoClose","onFilterPressEnter","filterCallback","onFilterChange"])),D=this.state,w=D.isAbove,S=D.tempSelectIndex,I=D.value,V=D.filter,B=D.popupVisible,U=D.listData,R=[{itemRenderer:function(){return E.a.createElement("div",{className:"no-matched-list-item"},h||E.a.createElement("span",null,E.a.createElement("i",{className:"fas fa-exclamation-triangle no-matched-list-item-icon"}),"No matched value."))},disableTouchRipple:!0}],q=U.length<1,j=u===M.a.TOP||u===M.a.TOP_LEFT||u===M.a.TOP_RIGHT||!u&&w,K=H()("local-auto-complete",T()({},t,t)),_=H()("local-auto-complete-trigger",q&&!m?"":B?" activated":"",j?" above":" blow",T()({},a,a)),G=H()("local-auto-complete-popup",j?" above":" blow",T()({},l,l)),J=Object.assign({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},i);return E.a.createElement("div",{ref:"localAutoComplete",className:K,style:r},p?E.a.createElement("input",{type:"hidden",name:p,value:O.a.getValueByValueField(I,c,d)}):null,E.a.createElement(L.a,n()({},N,{ref:"trigger",className:_,value:V,onFocus:this.filterFocusHandler,onBlur:this.filterBlurHandler,onChange:this.filterChangeHandler,onKeyDown:this.filterKeyDownHandler,onPressEnter:this.filterPressEnterHandler,onClear:P,onRightIconClick:this.filterPressEnterHandler})),q&&!m?null:E.a.createElement(A.a,{ref:"popup",className:G,style:J,theme:o,visible:B,triggerEl:this.triggerEl,hasTriangle:!1,position:u||(w?M.a.TOP_LEFT:M.a.BOTTOM_LEFT),onRender:this.popupRenderHandler,onRequestClose:this.closePopup},q?E.a.createElement(k.a,{className:"local-auto-complete-list",theme:o,data:R}):g?E.a.createElement(x.a,{ref:"dynamicRenderList",className:"local-auto-complete-list",theme:o,data:U,value:U[S],valueField:c,displayField:d,descriptionField:f,renderer:y,listHeight:C,itemHeight:b,scrollBuffer:F,onItemClick:this.itemClickHandler}):E.a.createElement(k.a,{ref:"list",className:"local-auto-complete-list",theme:o,data:U,value:U[S],valueField:c,displayField:d,descriptionField:f,renderer:y,onItemClick:this.itemClickHandler}),v))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:q.a.getDerivedState(e,t,"value")}}}]),t}(P.Component);T()(j,"Theme",I.a),T()(j,"Position",M.a),j.defaultProps={theme:I.a.DEFAULT,popupTheme:I.a.DEFAULT,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!0,minFilterLength:1,rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,filterInitValue:"",useDynamicRenderList:!1};var K=j;a.d(t,"a",function(){return K})},620:function(e,t,a){"use strict";var l=a(467),n=a.n(l),r=(a(211),a(468)),s=a.n(r),i=a(126),o=a.n(i),p=a(127),u=a.n(p),c=a(128),d=a.n(c),f=a(129),m=a.n(f),h=a(130),v=a.n(h),y=a(20),g=a.n(y),C=a(40),b=a.n(C),F=a(0),T=a.n(F),P=a(497),E=a.n(P),N=a(565),D=a(509),H=a(499),w=a(503),S=(a(498),a(515)),L=function(e){function t(e){var a,l;o()(this,t);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return l=d()(this,(a=m()(t)).call.apply(a,[this,e].concat(r))),b()(g()(g()(l)),"triggerFilterChangeHandler",function(e){l.setState({filter:e},function(){var t=l.props.onFilterChange;t&&t(e)})}),b()(g()(g()(l)),"triggerChangeHandler",function(e){l.setState({value:e},function(){var t=l.props.onChange;t&&t(e)})}),b()(g()(g()(l)),"closePopup",function(){l.refs.localAutoComplete&&l.refs.localAutoComplete.closePopup()}),l.state={value:e.value,filter:e.filterInitValue},l}return v()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,l=e.theme,r=e.label,i=e.isLabelAnimate,o=e.popupClassName,p=e.disabled,u=e.required,c=s()(e,["className","style","theme","label","isLabelAnimate","popupClassName","disabled","required"]),d=this.state,f=d.value,m=d.filter,h=E()("material-local-auto-complete",b()({},t,t)),v=E()("material-local-auto-complete-popup",b()({},o,o));return T.a.createElement(D.a,{className:h,style:a,theme:l,label:r,isLabelAnimate:i,hasValue:!!m,disabled:p,required:u},T.a.createElement(N.a,n()({},c,{ref:"localAutoComplete",popupClassName:v,theme:l,value:f,disabled:p,onFilterChange:this.triggerFilterChangeHandler,onChange:this.triggerChangeHandler})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:S.a.getDerivedState(e,t,"value")}}}]),t}(F.Component);b()(L,"Theme",H.a),b()(L,"Position",w.a),L.defaultProps={theme:H.a.DEFAULT,name:"",placeholder:"",label:"",isLabelAnimate:!0,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!1,minFilterLength:1,iconCls:"",rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,noMatchedMsg:"",required:!1,filterInitValue:""};var A=L;a.d(t,"a",function(){return A})},773:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element."},theme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},position:{type:"PropTypes.oneOf"},name:{type:"PropTypes.string",desc:"The name of the auto complete.",default:""},placeholder:{type:"PropTypes.string",desc:"The placeholder of the field.",default:""},label:{type:"PropTypes.any",default:""},data:{type:"PropTypes.oneOf",desc:"Children passed into the List.",default:"[]"},disabled:{type:"PropTypes.bool",desc:"If true, the auto complete will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},autoClose:{type:"PropTypes.bool",desc:"If true, the popup list automatically closed after selection.",default:"false"},minFilterLength:{type:"PropTypes.number",default:"1"},filterCallback:{type:"PropTypes.func",desc:"Callback function fired when filter changed."},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:"fas fa-search"},noMatchedPopupVisible:{type:"PropTypes.bool",desc:"The visiblity of no matched popup.",default:"true"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matched value.",default:""},required:{type:"PropTypes.bool",default:"false"},isLabelAnimate:{type:"PropTypes.bool",default:"true"},filterInitValue:{type:"PropTypes.string",default:""},popupChildren:{type:"PropTypes.any"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onFilterChange:{type:"PropTypes.func",desc:"The function that trigger when filter changes."},onFilterPressEnter:{type:"PropTypes.func",desc:"The function that trigger when press enter."},onFilterClear:{type:"PropTypes.func",desc:"The function that trigger when filter cleared."},onChange:{type:"PropTypes.func",desc:"The function that trigger when value changed."},onItemClick:{type:"PropTypes.func",desc:"The function that trigger when touch-tap the list items."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete get focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete lose focus."},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"}}},949:function(e,t,a){"use strict";a.r(t);var l=a(126),n=a.n(l),r=a(127),s=a.n(r),i=a(128),o=a.n(i),p=a(129),u=a.n(p),c=a(130),d=a.n(c),f=a(20),m=a.n(f),h=a(40),v=a.n(h),y=a(0),g=a.n(y),C=a(620),b=a(506),F=a(505),T=a(500),P=a(773),E=function(e){function t(e){var a;return n()(this,t),a=o()(this,u()(t).call(this,e)),v()(m()(m()(a)),"onChange",function(e){console.log("select item: ",e)}),v()(m()(m()(a)),"filterPressEnterHandle",function(e){console.log("filter value: ",e)}),v()(m()(m()(a)),"filterClearHandle",function(){console.log("filter cleared")}),a.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],a}return d()(t,e),s()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"example auto-complete-examples"},g.a.createElement("h2",{className:"example-title"},"MaterialLocalAutoComplete"),g.a.createElement("p",null,"A ",g.a.createElement("span",null,"MaterialLocalAutoComplete")," is an interface to help users to complete their input."),g.a.createElement("h2",{className:"example-title"},"Examples"),g.a.createElement(b.a,null,g.a.createElement(F.a,{className:"example-header",title:"Basic"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("div",{className:"examples-wrapper"},g.a.createElement("p",null,g.a.createElement("code",null,"MaterialLocalAutoComplete")," simple example."),g.a.createElement(C.a,{theme:C.a.Theme.HIGHLIGHT,filterInitValue:"test",data:this.data,label:"Label",placeholder:"Please select ...",onChange:this.onChange,onFilterPressEnter:this.filterPressEnterHandle,onFilterClear:this.filterClearHandle}))))),g.a.createElement("h2",{className:"example-title"},"Properties"),g.a.createElement(T.a,{data:P}))}}]),t}(y.Component);t.default=E}}]);
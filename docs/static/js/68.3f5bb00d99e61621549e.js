(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{405:function(e,t,a){(e.exports=a(169)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},406:function(e,t,a){var l=a(405);"string"==typeof l&&(l=[[e.i,l,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(168)(l,r);l.locals&&(e.exports=l.locals)},407:function(e,t,a){"use strict";var l=a(0),r=a.n(l),n=a(109),s=a.n(n),o=a(10),i=a.n(o),p=a(108),u=a.n(p),c=a(7),d=a.n(c),f=a(9),m=a.n(f),h=a(1),v=a.n(h),y=a(408),g=(a(406),function(e){function t(e){i()(this,t);var a=d()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return m()(t,e),u()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(h.Component));g.defaultProps={data:null},t.a=g},416:function(e,t,a){"use strict";var l,r,n=a(387),s=a.n(n),o=a(109),i=a.n(o),p=a(10),u=a.n(p),c=a(108),d=a.n(c),f=a(7),m=a.n(f),h=a(9),v=a.n(h),y=a(1),g=a.n(y),C=a(402),b=a.n(C),F=a(404),T=(a(403),r=l=function(e){function t(e){var a;u()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];return m()(this,(a=t.__proto__||i()(t)).call.apply(a,[this,e].concat(r)))}return v()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.theme,a=e.isHover,l=e.isFocus,r=e.disabled,n=b()("material-field-separator",s()({hover:a,focused:l},"theme-"+t,t));return g.a.createElement("div",{className:n,disabled:r},g.a.createElement("div",{className:"material-field-separator-hover"}),g.a.createElement("div",{className:"material-field-separator-focus"}))}}]),t}(y.Component),l.Theme=F.a,r);T.defaultProps={theme:F.a.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};var P=T;a.d(t,"a",function(){return P})},420:function(e,t,a){"use strict";var l=a(0),r=a.n(l),n=a(387),s=a.n(n),o=a(388),i=a.n(o),p=a(109),u=a.n(p),c=a(10),d=a.n(c),f=a(108),m=a.n(f),h=a(7),v=a.n(h),y=a(9),g=a.n(y),C=a(1),b=a.n(C),F=a(402),T=a.n(F),P=a(416),E=a(404),N=(a(403),function(e){function t(e){var a;d()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=v()(this,(a=t.__proto__||u()(t)).call.apply(a,[this,e].concat(r)));return s.setFocused=function(e){s.setState({isFocus:e})},s.setHovered=function(e){s.setState({isHover:e})},s.state={isHover:!1,isFocus:!1},s}return g()(t,e),m()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,l=t.className,n=t.theme,o=t.label,p=t.isLabelAnimate,u=t.hasValue,c=t.disabled,d=t.required,f=t.useSeparator,m=i()(t,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),h=this.state,v=h.isHover,y=h.isFocus,g=T()("material-provider",s()({"has-label":o,"has-value":u,"has-separator":f,animated:p,focused:y},l,l));return b.a.createElement("div",r()({},m,{className:g,disabled:c}),b.a.createElement("div",{className:"material-provider-label-wrapper"},b.a.createElement("span",{className:"material-provider-label"},o),d?b.a.createElement("div",{className:"material-provider-required-dot"}):null),C.Children.map(a,function(t){var a=t.props,l=a.triggerClassName,n=a.placeholderClassName,o=i()(a,["triggerClassName","placeholderClassName"]),p=r()({},o,{className:T()("material-provider-field",s()({},o.className,o.className)),onFocus:function(){o.onFocus&&o.onFocus.apply(o,arguments),e.setFocused(!0)},onBlur:function(){o.onBlur&&o.onBlur.apply(o,arguments),e.setFocused(!1)},onMouseOver:function(){o.onMouseOver&&o.onMouseOver.apply(o,arguments),e.setHovered(!0)},onMouseOut:function(){o.onMouseOut&&o.onMouseOut.apply(o,arguments),e.setHovered(!1)}});return"string"!=typeof t.type&&(p.triggerClassName=T()("material-provider-field-trigger",s()({},l,l)),p.placeholderClassName=T()("material-provider-field-placeholder",s()({},n,n))),Object(C.cloneElement)(t,p)}),f?b.a.createElement(P.a,{theme:n,isHover:v,isFocus:y,disabled:c}):null)}}]),t}(C.Component));N.defaultProps={theme:E.a.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};var H=N;a.d(t,"a",function(){return H})},462:function(e,t,a){"use strict";var l,r,n=a(70),s=a.n(n),o=a(387),i=a.n(o),p=a(44),u=a.n(p),c=a(109),d=a.n(c),f=a(10),m=a.n(f),h=a(108),v=a.n(h),y=a(7),g=a.n(y),C=a(9),b=a.n(C),F=a(1),T=a.n(F),P=a(68),E=a(402),N=a.n(E),H=a(392),D=a.n(H),A=a(414),S=a(417),w=a(423),L=a(433),x=a(404),k=a(403),I=a(426),M=a(435),O=a(412),_=a(431),V=(r=l=function(e){function t(e){var a;m()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=g()(this,(a=t.__proto__||d()(t)).call.apply(a,[this,e].concat(r)));return s.filterData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.state.filter,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.props.data,a=s.props.minFilterLength;if(!e||e.length<a)return t;var l=s.props,r=l.valueField,n=l.displayField,o=l.renderer,i=l.filterCallback;return i?i(e,t):t.filter(function(t){if(!t)return!1;if(o)return o(t).toString().toUpperCase().includes(e.toUpperCase());if("object"===(void 0===t?"undefined":u()(t))){var a=k.a.getTextByDisplayField(t,n,r);if(a)return a.toString().toUpperCase().includes(e.toUpperCase())}return t.toString().toUpperCase().includes(e.toUpperCase())})},s.filterFocusHandler=function(){if(!s.props.disabled){var e=s.props.onFocus,t=s.state,a=t.filter,l=t.listData,r={filterFocused:!0};e&&e.apply(void 0,arguments),a&&(r.popupVisible=!0,r.tempSelectIndex=l.length>0?0:null),s.setState(r)}},s.filterBlurHandler=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];s.setState({filterFocused:!1},function(){var e=s.props.onBlur;e&&e.apply(void 0,t)})},s.filterKeyDownHandler=function(e){var t=s.props.useDynamicRenderList,a=s.state,l=a.tempSelectIndex,r=a.listData,n=t?s.refs.dynamicRenderList:s.refs.list,o=l;38===e.keyCode?o--:40===e.keyCode&&o++;var i=I.a.range(o,0,r.length-1);s.setState({tempSelectIndex:i},function(){var t=s.props.onFilterKeyDown;t&&t(e),n&&n.adjustScroll()})},s.filterPressEnterHandler=function(e,t){var a={};s.props.autoClose&&(a.popupVisible=!1),s.setState(a,function(){var e=s.props.onFilterPressEnter;e&&e(t),s.update()})},s.filterChangeHandler=function(e){var t=s.props,a=t.data,l=t.minFilterLength,r={filter:e,popupVisible:!!e&&e.length>=l};e?(r.listData=s.filterData(e),r.tempSelectIndex=r.listData.length>0?0:null):(r.listData=a,r.value=null,r.tempSelectIndex=null),s.setState(r,function(){var t=s.props.onFilterChange;t&&t(e),s.refs.popup&&s.refs.popup.resetPosition()})},s.closePopup=function(){s.setState({popupVisible:!1},function(){var e=s.props.onPopupClosed;e&&e()})},s.popupRenderHandler=function(e){var t=M.a.isAbove(s.localAutoCompleteEl,s.triggerEl,Object(P.findDOMNode)(e));t!==s.state.isAbove&&s.setState({isAbove:t})},s.itemClickHandler=function(e){var t=s.props,a=t.autoClose,l=t.valueField,r=t.displayField,n=t.renderer,o=n?n(e):k.a.getTextByDisplayField(e,r,l),i={tempSelectIndex:null,value:e,filter:o,listData:s.filterData(o)},p=s.state.value!=e;a&&(i.popupVisible=!1),s.setState(i,function(){var t=s.props,a=t.onItemClick,l=t.onChange;a&&a(e),p&&l&&l(e)})},s.update=function(){var e=s.props,t=e.displayField,a=e.valueField,l=e.renderer,r=s.state,n=r.filter,o=r.tempSelectIndex,i=r.listData,p=null;if(n&&i&&i.length>0){p={};var u=D()(o)?o:0;p.value=i[u],p.filter=l?l(p.value):k.a.getTextByDisplayField(p.value,t,a),p.listData=s.filterData(p.filter)}s.setState(p,function(){if(p){var e=s.props,t=e.onFilterChange,a=e.onChange;t&&t(p.filter),a&&a(p.value)}})},s.mouseDownHandler=function(e){!s.state.filterFocused||_.a.isParent(e.target,s.localAutoCompleteEl)||_.a.isParent(e.target,Object(P.findDOMNode)(s.refs.popup))||s.update()},s.triggerEl=null,s.state={tempSelectIndex:null,value:e.value,filter:e.filterInitValue,filterFocused:!1,popupVisible:!1,isAbove:!1,listData:e.data},s}return b()(t,e),v()(t,[{key:"componentDidMount",value:function(){this.localAutoCompleteEl=this.refs.localAutoComplete,this.triggerEl=Object(P.findDOMNode)(this.refs.trigger),O.a.addEvent(document,"mousedown",this.mouseDownHandler)}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value})}},{key:"componentWillUnmount",value:function(){O.a.removeEvent(document,"mousedown",this.mouseDownHandler)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.triggerClassName,l=e.popupClassName,r=e.style,n=e.popupStyle,o=e.theme,p=e.popupTheme,u=e.name,c=e.placeholder,d=e.disabled,f=e.iconCls,m=e.rightIconCls,h=e.valueField,v=e.displayField,y=e.descriptionField,g=e.noMatchedPopupVisible,C=e.noMatchedMsg,b=e.popupChildren,F=e.renderer,P=e.useDynamicRenderList,E=e.listHeight,H=e.itemHeight,D=e.scrollBuffer,x=e.onFilterClear,I=e.onMouseOver,M=e.onMouseOut,O=this.state,_=O.isAbove,V=O.tempSelectIndex,B=O.value,U=O.filter,R=O.popupVisible,q=O.listData,j=[{itemRenderer:function(){return T.a.createElement("div",{className:"no-matched-list-item"},C||T.a.createElement("span",null,T.a.createElement("i",{className:"fas fa-exclamation-triangle no-matched-list-item-icon"}),"No matched value."))},disableTouchRipple:!0}],G=q.length<1,K=N()("local-auto-complete",i()({},t,t)),W=N()("local-auto-complete-trigger",G&&!g?"":R?" activated":"",_?" above":" blow",i()({},a,a)),J=N()("local-auto-complete-popup",_?" above":" blow",i()({},l,l)),Y=s()({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},n);return T.a.createElement("div",{ref:"localAutoComplete",className:K,style:r},u?T.a.createElement("input",{type:"hidden",name:u,value:k.a.getValueByValueField(B,h,v)}):null,T.a.createElement(A.a,{ref:"trigger",className:W,theme:o,value:U,placeholder:c,disabled:d,iconCls:f,rightIconCls:m,onFocus:this.filterFocusHandler,onBlur:this.filterBlurHandler,onMouseOver:I,onMouseOut:M,onChange:this.filterChangeHandler,onKeyDown:this.filterKeyDownHandler,onPressEnter:this.filterPressEnterHandler,onClear:x,onRightIconClick:this.filterPressEnterHandler}),G&&!g?null:T.a.createElement(S.a,{ref:"popup",className:J,style:Y,theme:p,visible:R,triggerEl:this.triggerEl,hasTriangle:!1,position:_?S.a.Position.TOP_LEFT:S.a.Position.BOTTOM_LEFT,onRender:this.popupRenderHandler,onRequestClose:this.closePopup},G?T.a.createElement(w.a,{className:"local-auto-complete-list",theme:p,data:j}):P?T.a.createElement(L.a,{ref:"dynamicRenderList",className:"local-auto-complete-list",theme:p,data:q,value:q[V],valueField:h,displayField:v,descriptionField:y,renderer:F,listHeight:E,itemHeight:H,scrollBuffer:D,onItemClick:this.itemClickHandler}):T.a.createElement(w.a,{ref:"list",className:"local-auto-complete-list",theme:p,data:q,value:q[V],valueField:h,displayField:v,descriptionField:y,renderer:F,onItemClick:this.itemClickHandler}),b))}}]),t}(F.Component),l.Theme=x.a,r);V.defaultProps={theme:x.a.DEFAULT,popupTheme:x.a.DEFAULT,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!0,minFilterLength:1,rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,filterInitValue:"",useDynamicRenderList:!1};var B=V;a.d(t,"a",function(){return B})},516:function(e,t,a){"use strict";var l,r,n=a(0),s=a.n(n),o=a(387),i=a.n(o),p=a(388),u=a.n(p),c=a(109),d=a.n(c),f=a(10),m=a.n(f),h=a(108),v=a.n(h),y=a(7),g=a.n(y),C=a(9),b=a.n(C),F=a(1),T=a.n(F),P=a(402),E=a.n(P),N=a(462),H=a(420),D=a(404),A=(a(403),r=l=function(e){function t(e){var a;m()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=g()(this,(a=t.__proto__||d()(t)).call.apply(a,[this,e].concat(r)));return s.triggerFilterChangeHandler=function(e){s.setState({filter:e},function(){var t=s.props.onFilterChange;t&&t(e)})},s.triggerChangeHandler=function(e){s.setState({value:e},function(){var t=s.props.onChange;t&&t(e)})},s.closePopup=function(){s.refs.localAutoComplete&&s.refs.localAutoComplete.closePopup()},s.state={value:e.value,filter:e.filterInitValue},s}return b()(t,e),v()(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,l=e.theme,r=e.label,n=e.isLabelAnimate,o=e.popupClassName,p=e.disabled,c=e.required,d=u()(e,["className","style","theme","label","isLabelAnimate","popupClassName","disabled","required"]),f=this.state,m=f.value,h=f.filter,v=E()("material-local-auto-complete",i()({},t,t)),y=E()("material-local-auto-complete-popup",i()({},o,o));return T.a.createElement(H.a,{className:v,style:a,theme:l,label:r,isLabelAnimate:n,hasValue:!!h,disabled:p,required:c},T.a.createElement(N.a,s()({},d,{ref:"localAutoComplete",popupClassName:y,theme:l,value:m,disabled:p,onFilterChange:this.triggerFilterChangeHandler,onChange:this.triggerChangeHandler})))}}]),t}(F.Component),l.Theme=D.a,r);A.defaultProps={theme:D.a.DEFAULT,name:"",placeholder:"",label:"",isLabelAnimate:!0,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!1,minFilterLength:1,iconCls:"",rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,noMatchedMsg:"",isGrouped:!1,required:!1,filterInitValue:""};var S=A;a.d(t,"a",function(){return S})},693:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element."},theme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},name:{type:"PropTypes.string",desc:"The name of the auto complete.",default:""},placeholder:{type:"PropTypes.string",desc:"The placeholder of the field.",default:""},label:{type:"PropTypes.any",default:""},data:{type:"PropTypes.oneOf",desc:"Children passed into the List.",default:"[]"},disabled:{type:"PropTypes.bool",desc:"If true, the auto complete will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},autoClose:{type:"PropTypes.bool",desc:"If true, the popup list automatically closed after selection.",default:"false"},minFilterLength:{type:"PropTypes.number",default:"1"},filterCallback:{type:"PropTypes.func",desc:"Callback function fired when filter changed."},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:"fas fa-search"},noMatchedPopupVisible:{type:"PropTypes.bool",desc:"The visiblity of no matched popup.",default:"true"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matched value.",default:""},isGrouped:{type:"PropTypes.bool",desc:"If true,the list data will be grouped.",default:"false"},required:{type:"PropTypes.bool",default:"false"},isLabelAnimate:{type:"PropTypes.bool",default:"true"},filterInitValue:{type:"PropTypes.string",default:""},popupChildren:{type:"PropTypes.any"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onFilterChange:{type:"PropTypes.func",desc:"The function that trigger when filter changes."},onFilterPressEnter:{type:"PropTypes.func",desc:"The function that trigger when press enter."},onFilterClear:{type:"PropTypes.func",desc:"The function that trigger when filter cleared."},onChange:{type:"PropTypes.func",desc:"The function that trigger when value changed."},onItemClick:{type:"PropTypes.func",desc:"The function that trigger when touch-tap the list items."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete get focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete lose focus."},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"}}},877:function(e,t,a){"use strict";a.r(t);var l=a(109),r=a.n(l),n=a(10),s=a.n(n),o=a(108),i=a.n(o),p=a(7),u=a.n(p),c=a(9),d=a.n(c),f=a(1),m=a.n(f),h=a(516),v=a(410),y=a(409),g=a(407),C=a(693),b=function(e){function t(e){s()(this,t);var a=u()(this,(t.__proto__||r()(t)).call(this,e));return a.onChange=function(e){console.log("select item: ",e)},a.filterPressEnterHandle=function(e){console.log("filter value: ",e)},a.filterClearHandle=function(){console.log("filter cleared")},a.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],a}return d()(t,e),i()(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"example auto-complete-examples"},m.a.createElement("h2",{className:"example-title"},"LocalAutoComplete"),m.a.createElement("p",null,"A ",m.a.createElement("span",null,"LocalAutoComplete")," is an interface to help users to complete their input."),m.a.createElement("h2",{className:"example-title"},"Examples"),m.a.createElement(v.a,null,m.a.createElement(y.a,{className:"example-header",title:"Basic"}),m.a.createElement("div",{className:"widget-content"},m.a.createElement("div",{className:"example-content"},m.a.createElement("div",{className:"examples-wrapper"},m.a.createElement("p",null,m.a.createElement("code",null,"LocalAutoComplete")," simple example."),m.a.createElement(h.a,{theme:h.a.Theme.HIGHLIGHT,filterInitValue:"test",data:this.data,label:"Label",placeholder:"Please select ...",onChange:this.onChange,onFilterPressEnter:this.filterPressEnterHandle,onFilterClear:this.filterClearHandle}))))),m.a.createElement("h2",{className:"example-title"},"Properties"),m.a.createElement(g.a,{data:C}))}}]),t}(f.Component);t.default=b}}]);
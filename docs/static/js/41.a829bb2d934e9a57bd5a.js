(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{2:function(e,t,a){e.exports=a(102)(2)},240:function(e,t,a){"use strict";var n=a(50),r=a.n(n),c=a(51),l=a.n(c),s=a(19),o=a.n(s),i=a(52),d=a.n(i),u=a(53),p=a.n(u),f=a(36),h=a.n(f),m=a(9),g=a.n(m),b=a(0),y=a.n(b),C=a(98),v=a.n(C),I=a(247);a(241);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=h()(e);if(t){var r=h()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return p()(this,a)}}var D=function(e){d()(a,e);var t=T(a);function a(e){var n;return r()(this,a),n=t.call(this,e),g()(o()(n),"generateData",(function(){var e=[];if(!n.props.data)return[];for(var t in n.props.data)e.push(E({name:t},n.props.data[t]));return e})),n}return l()(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(I.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(b.Component);D.propTypes={data:v.a.object},t.a=D},241:function(e,t,a){var n=a(99),r=a(242);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(r,c);e.exports=r.locals||{}},242:function(e,t,a){(t=a(100)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},339:function(e,t,a){"use strict";a.d(t,"a",(function(){return Y}));var n=a(218),r=a.n(n),c=a(101),l=a.n(c),s=a(50),o=a.n(s),i=a(51),d=a.n(i),u=a(19),p=a.n(u),f=a(52),h=a.n(f),m=a(53),g=a.n(m),b=a(36),y=a.n(b),C=a(9),v=a.n(C),I=a(0),k=a.n(I),E=a(98),T=a.n(E),D=a(221),x=a(15),L=a.n(x),P=a(236),S=a.n(P),O=a(273),N=a(276),w=a(272),R=a(251),M=a(238),F=a(237),U=a(239),j=a(253);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y()(e);if(t){var r=y()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return g()(this,a)}}var V=function(e){h()(a,e);var t=q(a);function a(e){var n;o()(this,a);for(var r=arguments.length,c=new Array(r>1?r-1:0),l=1;l<r;l++)c[l-1]=arguments[l];return n=t.call.apply(t,[this,e].concat(c)),v()(p()(n),"handleCheckboxChange",(function(e){var t=n.props,a=t.onSelect,r=t.onDeselect;e?a&&a():r&&r()})),v()(p()(n),"handleRadioChange",(function(){if(!n.props.checked){var e=n.props.onSelect;e&&e()}})),v()(p()(n),"handleClick",(function(e){e.preventDefault();var t=n.props,a=t.disabled,r=t.isLoading,c=t.readOnly;if(!(a||r||c)){var l=n.props.onClick;switch(l&&l(e),n.props.selectMode){case j.a.MULTI_SELECT:return void n.handleCheckboxChange(!n.props.checked);case j.a.SINGLE_SELECT:return void n.handleRadioChange()}}})),n}return d()(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.index,n=t.className,c=t.style,l=t.theme,s=t.data,o=t.text,i=t.desc,d=t.title,u=t.iconCls,p=t.rightIconCls,f=t.tip,h=t.tipPosition,m=t.disabled,g=t.isLoading,b=t.renderer,y=t.itemRenderer,C=t.readOnly,I=t.isDragDisabled,E=t.anchorIconCls,T=t.checked,x=t.selectTheme,L=t.selectMode,P=t.radioUncheckedIconCls,M=t.radioCheckedIconCls,F=t.checkboxUncheckedIconCls,U=t.checkboxCheckedIconCls,q=t.checkboxIndeterminateIconCls,V=t.onMouseEnter,_=t.onMouseLeave,A=p&&!u?"right":"left";return k.a.createElement(D.b,{key:a,draggableId:""+a,index:a,isDragDisabled:I},(function(t){var I;return(k.a.createElement("div",null,k.a.createElement("div",r()({ref:t.innerRef,style:t.draggableStyle},t.draggableProps,t.dragHandleProps),k.a.createElement(R.a,{className:"block",tipContent:f,position:h},k.a.createElement("div",{className:S()("draggable-list-item",(I={},v()(I,"theme-".concat(l),l),v()(I,"activated",T),v()(I,n,n),I)),style:c,disabled:m||g,readOnly:C,title:d,onClick:e.handleClick,onMouseEnter:V,onMouseLeave:_},L===j.a.SINGLE_SELECT&&(P||M)?k.a.createElement(N.a,{className:"draggable-list-item-select",theme:x,checked:T,disabled:m||g,uncheckedIconCls:P,checkedIconCls:M,disableTouchRipple:!0}):null,L===j.a.MULTI_SELECT?k.a.createElement(O.a,{className:"draggable-list-item-select",theme:x,checked:T,disabled:m||g,uncheckedIconCls:F,checkedIconCls:U,indeterminateIconCls:q,disableTouchRipple:!0}):null,g&&"left"===A?k.a.createElement("div",{className:"button-icon button-icon-left"},k.a.createElement(w.a,{className:"button-loading-icon",size:"small"})):u?k.a.createElement("i",{className:"button-icon button-icon-left ".concat(u),"aria-hidden":"true"}):null,y&&"function"==typeof y?y(s,a):b&&"function"==typeof b?b(s,a):i?k.a.createElement("div",{className:"draggable-list-item-content"},k.a.createElement("div",{className:"draggable-list-item-content-value"},o),k.a.createElement("div",{className:"draggable-list-item-content-desc"},i)):o,g&&"right"===A?k.a.createElement(w.a,{className:"button-icon button-icon-right button-loading-icon",size:"small"}):p?k.a.createElement("i",{className:"button-icon button-icon-right ".concat(p),"aria-hidden":"true"}):null,k.a.createElement("i",{className:"".concat(E," draggable-list-item-anchor"),"aria-hidden":"true"})))),t.placeholder))}))}}]),a}(I.Component);v()(V,"SelectMode",j.a),v()(V,"Theme",M.a),V.propTypes={index:T.a.number,className:T.a.string,style:T.a.object,theme:T.a.oneOf(F.a.enumerateValue(M.a)),selectTheme:T.a.oneOf(F.a.enumerateValue(M.a)),selectMode:T.a.oneOf(F.a.enumerateValue(j.a)),data:T.a.oneOfType([T.a.string,T.a.number,T.a.object]),value:T.a.oneOfType([T.a.string,T.a.number]),text:T.a.any,desc:T.a.string,title:T.a.string,disabled:T.a.bool,isLoading:T.a.bool,checked:T.a.bool,readOnly:T.a.bool,iconCls:T.a.string,rightIconCls:T.a.string,tip:T.a.string,tipPosition:T.a.oneOf(F.a.enumerateValue(U.a)),radioUncheckedIconCls:T.a.string,radioCheckedIconCls:T.a.string,checkboxUncheckedIconCls:T.a.string,checkboxCheckedIconCls:T.a.string,checkboxIndeterminateIconCls:T.a.string,isDragDisabled:T.a.bool,anchorIconCls:T.a.string,itemRenderer:T.a.func,renderer:T.a.func,onClick:T.a.func,onSelect:T.a.func,onDeselect:T.a.func,onMouseEnter:T.a.func,onMouseLeave:T.a.func},V.defaultProps={index:0,theme:M.a.DEFAULT,selectTheme:M.a.DEFAULT,selectMode:j.a.SINGLE_SELECT,disabled:!1,isLoading:!1,checked:!1,readOnly:!1,tipPosition:U.a.BOTTOM,checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square",isDragDisabled:!1,anchorIconCls:"fas fa-bars"};var _=V,A=a(263),H=a(329),G=a(266),B=a(243);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y()(e);if(t){var r=y()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return g()(this,a)}}var z=function(e){h()(a,e);var t=J(a);function a(e){var n;o()(this,a);for(var c=arguments.length,s=new Array(c>1?c-1:0),i=1;i<c;i++)s[i-1]=arguments[i];return n=t.call.apply(t,[this,e].concat(s)),v()(p()(n),"isListDisabled",(function(e){var t=n.props.data,a=n.state.value;return"function"==typeof e?e(a,t):e})),v()(p()(n),"isItemDisabled",(function(e,t,a){var r=n.props.data,c=n.state.value;return null!=e&&("function"==typeof e?e(t,c,r):e)||null!=a&&("function"==typeof a?a(t,c,r):a)})),v()(p()(n),"isItemDragDisabled",(function(e){var t=n.props,a=t.data,r=t.itemDragDisabled,c=n.state.value;return null!=r&&("function"==typeof r?r(e,c,a):r)})),v()(p()(n),"handleListItemSelect",(function(e,t){var a=n.props.selectMode,r=n.state.value;a===j.a.MULTI_SELECT?(r&&L()(r)||(r=[]),r.push(e)):a===j.a.SINGLE_SELECT&&(r=e),n.setState({value:r},(function(){var a=n.props,c=a.onItemSelect,l=a.onChange;c&&c(e,t),l&&l(r,t)}))})),v()(p()(n),"handleListItemDeselect",(function(e,t){if(n.props.selectMode===j.a.MULTI_SELECT){var a=n.props,r=a.valueField,c=a.displayField,l=n.state.value;l=l&&L()(l)?l.filter((function(t){return F.a.getValueByValueField(t,r,c)!=F.a.getValueByValueField(e,r,c)})):[],n.setState({value:l},(function(){var a=n.props,r=a.onItemDeselect,c=a.onChange;r&&r(e,t),c&&c(l,t)}))}})),v()(p()(n),"handleItemDragEnd",(function(e){if(e&&"draggableId"in e&&e.source&&"index"in e.source&&e.destination&&"index"in e.destination){var t=n.state.data;F.a.reorder(t,e.source.index,e.destination.index),n.setState({data:t},(function(){var a=n.props,r=a.handleItemDragEnd,c=a.onSequenceChange;r&&r(e),c&&c(t)}))}})),v()(p()(n),"renderListItem",(function(e,t){if(e){var a=n.props,c=a.theme,s=a.itemHeight,o=a.idField,i=a.valueField,d=a.displayField,u=a.descriptionField,f=a.disabled,h=a.itemDisabled,m=a.isLoading,g=a.renderer,b=a.selectTheme,y=a.selectMode,C=a.radioUncheckedIconCls,v=a.radioCheckedIconCls,I=a.checkboxUncheckedIconCls,E=a.checkboxCheckedIconCls,T=a.checkboxIndeterminateIconCls,D=a.anchorIconCls,x=a.onItemClick,L=n.state.value,P=p()(n),S={index:t,style:{height:s},theme:e.theme||c,selectTheme:e.selectTheme||b,radioUncheckedIconCls:e.radioUncheckedIconCls||C,radioCheckedIconCls:e.radioCheckedIconCls||v,checkboxUncheckedIconCls:e.checkboxUncheckedIconCls||I,checkboxCheckedIconCls:e.checkboxCheckedIconCls||E,checkboxIndeterminateIconCls:e.checkboxIndeterminateIconCls||T,anchorIconCls:e.anchorIconCls||D,checked:G.a.isItemChecked(e,L,P.props),selectMode:y,renderer:g,onSelect:function(){P.handleListItemSelect(e,t)},onDeselect:function(){P.handleListItemDeselect(e,t)}};return"object"===l()(e)?k.a.createElement(_,r()({},e,S,{key:e[o]||t,data:e,value:F.a.getValueByValueField(e,i,d),text:F.a.getTextByDisplayField(e,d,i),desc:e[u]||null,disabled:n.isListDisabled(f)||n.isItemDisabled(h,e,e.disabled),isLoading:m||e.isLoading,isDragDisabled:n.isItemDragDisabled(e),onClick:function(a){x&&x(e,t,a),e.onClick&&e.onClick(a)}})):k.a.createElement(_,r()({},S,{key:t,data:e,value:e,text:e,disabled:n.isListDisabled(f)||n.isItemDisabled(h,e),isLoading:m,isDragDisabled:n.isItemDragDisabled(e),onClick:function(a){return x&&x(e,t,a)}}))}})),n.state={data:e.data,value:G.a.getInitValue(e)},n}return d()(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.className,c=t.style,l=t.disabled,s=t.onNodeDragStart,o=this.state.data;return k.a.createElement(D.a,{onDragStart:s,onDragEnd:this.handleItemDragEnd},k.a.createElement("div",{className:S()("draggable-list",v()({},n,n)),disabled:l,style:c},k.a.createElement(D.c,{droppableId:"droppable"},(function(t){return k.a.createElement("div",r()({ref:t.innerRef,className:"draggable-list-items"},t.droppableProps),o&&o.map((function(t,a){return t===H.a?k.a.createElement("div",{key:a,className:"draggable-list-separator"}):e.renderListItem(t,a)})),t.placeholder)})),a))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,data:B.a.getDerivedState(e,t,"data"),value:G.a.getInitValue({value:B.a.getDerivedState(e,t,"value"),selectMode:e.selectMode})}}}]),a}(I.Component);v()(z,"SelectMode",j.a),v()(z,"LIST_SEPARATOR",H.a),v()(z,"Theme",M.a),z.propTypes={children:T.a.any,className:T.a.string,style:T.a.object,theme:T.a.oneOf(F.a.enumerateValue(M.a)),selectTheme:T.a.oneOf(F.a.enumerateValue(M.a)),selectMode:T.a.oneOf(F.a.enumerateValue(j.a)),data:T.a.arrayOf(T.a.oneOfType([T.a.shape({className:T.a.string,style:T.a.object,theme:T.a.oneOf(F.a.enumerateValue(M.a)),value:T.a.oneOfType([T.a.string,T.a.number]),text:T.a.oneOfType([T.a.string,T.a.number]),desc:T.a.oneOfType([T.a.string,T.a.number]),title:T.a.string,disabled:T.a.bool,isLoading:T.a.bool,disableTouchRipple:T.a.bool,iconCls:T.a.string,rightIconCls:T.a.string,tip:T.a.string,tipPosition:T.a.oneOf(F.a.enumerateValue(A.a.Position)),rippleDisplayCenter:T.a.bool,itemRenderer:T.a.func,onClick:T.a.func}),T.a.string,T.a.number,T.a.symbol])),value:T.a.any,idField:T.a.string,valueField:T.a.string,displayField:T.a.string,descriptionField:T.a.string,disabled:T.a.bool,itemDisabled:T.a.oneOfType([T.a.bool,T.a.func]),isLoading:T.a.bool,itemDragDisabled:T.a.oneOfType([T.a.bool,T.a.func]),radioUncheckedIconCls:T.a.string,radioCheckedIconCls:T.a.string,checkboxUncheckedIconCls:T.a.string,checkboxCheckedIconCls:T.a.string,checkboxIndeterminateIconCls:T.a.string,anchorIconCls:T.a.string,itemHeight:T.a.number,renderer:T.a.func,onItemClick:T.a.func,onItemSelect:T.a.func,onItemDeselect:T.a.func,onChange:T.a.func,onNodeDragStart:T.a.func,handleItemDragEnd:T.a.func,onSequenceChange:T.a.func},z.defaultProps={theme:M.a.DEFAULT,selectTheme:M.a.DEFAULT,selectMode:j.a.SINGLE_SELECT,idField:"id",valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,itemDisabled:!1,isLoading:!1,itemDragDisabled:!1,checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square",anchorIconCls:"fas fa-bars"};var Y=z},55:function(e,t,a){e.exports=a(10)(10)},673:function(e){e.exports=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the list item.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the list item select radio or checkbox.","default":"Theme.DEFAULT"},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of listItem.","default":"SelectMode.SINGLE_SELECT"},"data":{"type":"PropTypes.array","desc":"Children passed into the ListItem."},"value":{"type":"PropTypes.any"},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the list will be disabled.","default":"false"},"itemDisabled":{"type":"PropTypes.bool","desc":"List item disabled callback.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the list will be at loading status.","default":"false"},"itemDragDisabled":{"type":"PropTypes.bool","desc":"List item drag disabled callback.","default":"false"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"checkboxCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"anchorIconCls":{"type":"PropTypes.string","default":"fas fa-bars"},"itemHeight":{"type":"PropTypes.number"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the list-item touch tap."},"onItemSelect":{"type":"PropTypes.func","desc":"Callback function fired when the list-item select."},"onItemDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the list-item deselect."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the list changed."},"onNodeDragStart":{"type":"PropTypes.func"},"handleItemDragEnd":{"type":"PropTypes.func"},"onSequenceChange":{"type":"PropTypes.func"}}')},674:function(e,t,a){var n=a(99),r=a(675);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={insert:"head",singleton:!1};n(r,c);e.exports=r.locals||{}},675:function(e,t,a){(t=a(100)(!1)).push([e.i,".draggable-list-examples .draggable-list {\n  width: 200px;\n  border: 1px solid #e4eaf2; }\n",""]),e.exports=t},801:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a.n(n),c=a(51),l=a.n(c),s=a(19),o=a.n(s),i=a(52),d=a.n(i),u=a(53),p=a.n(u),f=a(36),h=a.n(f),m=a(9),g=a.n(m),b=a(0),y=a.n(b),C=a(339),v=a(245),I=a(246),k=a(240),E=a(673);a(674);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=h()(e);if(t){var r=h()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return p()(this,a)}}var D=function(e){d()(a,e);var t=T(a);function a(e){var n;return r()(this,a),n=t.call(this,e),g()(o()(n),"sequenceChangeHandler",(function(e){console.log("Sequence Changed:",e)})),g()(o()(n),"valueChangeHandler",(function(e){console.log("Value Changed:",e)})),n.listData=[{iconCls:"fab fa-facebook",text:"Facebook",title:"Facebook"},{iconCls:"fab fa-twitter",text:"Twitter",tip:"Twitter"},{iconCls:"fab fa-google-plus-g",text:"Google+",tip:"Google+"}],n.largeListData=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],n}return l()(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"example draggable-list-examples"},y.a.createElement("h2",{className:"example-title"},"DraggableList"),y.a.createElement("p",null,y.a.createElement("span",null,"DraggableList"),"is a list of elements that allow you to move elements with the mouse."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(v.a,null,y.a.createElement(I.a,{className:"example-header",title:"Draggable"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"A multiple-choice ",y.a.createElement("code",null,"DraggableList")," example."),y.a.createElement("div",{style:{width:240}},y.a.createElement(C.a,{style:{width:240},selectMode:C.a.SelectMode.MULTI_SELECT,data:this.listData,onSequenceChange:this.sequenceChangeHandler,onChange:this.valueChangeHandler})))))),y.a.createElement(v.a,null,y.a.createElement(I.a,{className:"example-header",title:"Draggable Group"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"A radio ",y.a.createElement("code",null,"DraggableList")," example."),y.a.createElement("div",{style:{width:240,height:240}},y.a.createElement(C.a,{style:{width:240,height:240},data:this.largeListData,itemDisabled:function(e){return e%2==0},itemDragDisabled:function(e){return e%2==0},onSequenceChange:this.sequenceChangeHandler,onChange:this.valueChangeHandler})))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(k.a,{data:E}))}}]),a}(b.Component);t.default=D}}]);
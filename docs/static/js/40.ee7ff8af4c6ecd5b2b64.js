(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{242:function(e,t,n){"use strict";var a=n(51),c=n.n(a),r=n(52),o=n.n(r),l=n(19),i=n.n(l),s=n(53),d=n.n(s),u=n(36),p=n.n(u),h=n(54),f=n.n(h),m=n(9),g=n.n(m),b=n(0),y=n.n(b),C=n(93),v=n.n(C),k=n(249);n(243);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var E=function(e){f()(a,e);var t,n=(t=a,function(){var e,n=p()(t);if(x()){var a=p()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return d()(this,e)});function a(e){var t;return c()(this,a),t=n.call(this,e),g()(i()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(T({name:n},t.props.data[n]));return e})),t}return o()(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(k.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(b.Component);E.propTypes={data:v.a.object},t.a=E},243:function(e,t,n){var a=n(94),c=n(244);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);var r={insert:"head",singleton:!1},o=(a(c,r),c.locals?c.locals:{});e.exports=o},244:function(e,t,n){(t=n(95)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},334:function(e,t,n){"use strict";n.d(t,"a",(function(){return ee}));var a=n(217),c=n.n(a),r=n(96),o=n.n(r),l=n(219),i=n.n(l),s=n(51),d=n.n(s),u=n(52),p=n.n(u),h=n(19),f=n.n(h),m=n(53),g=n.n(m),b=n(36),y=n.n(b),C=n(54),v=n.n(C),k=n(9),I=n.n(k),T=n(0),x=n.n(T),E=n(93),D=n.n(E),S=n(15),O=n.n(S),P=n(238),M=n.n(P),N=n(218),w=n.n(N),R=n(236),L=n(237),U=n(275),F=n(277),j=n(273),V=n(265),H=n(240),q=n(239),G=n(241),_=n(256),A=n(20);var B,W,z,J={getSource:function(){return{beginDrag:function(e){return{index:e.index,groupIndex:e.groupIndex}}}},getVerticalTarget:function(){return{hover:function(e,t,n){if(t.getItem().groupIndex===e.groupIndex){var a=t.getItem().index,c=e.index;if(a!==c){var r=Object(A.findDOMNode)(n).getBoundingClientRect(),o=(r.bottom-r.top)/2,l=t.getClientOffset().y-r.top;a<c&&l<o||a>c&&l>o||(e.onMove(a,c,e),t.getItem().index=c)}}}}},getHorizontalTarget:function(){return{hover:function(e,t,n){if(t.getItem().groupIndex===e.groupIndex){var a=t.getItem().index,c=e.index;if(a!==c){var r=Object(A.findDOMNode)(n).getBoundingClientRect(),o=(r.right-r.left)/2,l=t.getClientOffset().x-r.left;a<c&&l<o||a>c&&l>o||(e.onMove(a,c,e),t.getItem().index=c)}}}}}};function Y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var K=Object(R.a)("DRAG_GRID_ITEM",J.getHorizontalTarget(),(function(e){return{connectDropTarget:e.dropTarget()}}))(B=Object(L.a)("DRAG_GRID_ITEM",J.getSource(),(function(e,t){return{connectDragPreview:e.dragPreview(),connectDragSource:e.dragSource()}}))((z=W=function(e){v()(a,e);var t,n=(t=a,function(){var e,n=y()(t);if(Y()){var a=y()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return g()(this,e)});function a(e){var t;d()(this,a);for(var c=arguments.length,r=new Array(c>1?c-1:0),o=1;o<c;o++)r[o-1]=arguments[o];return t=n.call.apply(n,[this,e].concat(r)),I()(f()(t),"showTip",(function(){t.state.tipVisible||t.setState({tipVisible:!0})})),I()(f()(t),"hideTip",(function(){t.setState({tipVisible:!1})})),I()(f()(t),"handleCheckboxChange",(function(e){var n=t.props,a=n.onSelect,c=n.onDeselect;e?a&&a():c&&c()})),I()(f()(t),"handleRadioChange",(function(){if(!t.props.checked){var e=t.props.onSelect;e&&e()}})),I()(f()(t),"handleClick",(function(e){e.preventDefault();var n=t.props,a=n.disabled,c=n.isLoading,r=n.readOnly;if(!(a||c||r)){var o=t.props.onClick;switch(o&&o(e),t.props.selectMode){case _.a.MULTI_SELECT:return void t.handleCheckboxChange(!t.props.checked);case _.a.SINGLE_SELECT:return void t.handleRadioChange()}}})),I()(f()(t),"handleMouseOver",(function(e){t.showTip(e);var n=t.props.onMouseOver;n&&n(e)})),t.tipTrigger=Object(T.createRef)(),t.state={tipVisible:!1},t}return p()(a,[{key:"render",value:function(){var e,t=this.props,n=t.connectDragPreview,a=t.connectDragSource,r=t.connectDropTarget,o=t.isDraggableAnyWhere,l=t.anchorIconCls,i=t.index,s=t.className,d=t.theme,u=t.data,p=t.text,h=t.desc,f=t.iconCls,m=t.rightIconCls,g=t.tip,b=t.tipPosition,y=t.checked,C=t.disabled,v=t.isLoading,k=t.renderer,T=t.itemRenderer,E=t.col,D=t.selectTheme,S=t.selectMode,O=t.radioUncheckedIconCls,P=t.radioCheckedIconCls,N=t.checkboxUncheckedIconCls,R=t.checkboxCheckedIconCls,L=t.checkboxIndeterminateIconCls,H=(t.itemColWidth,t.onMove,t.onSelect,t.onDeselect,w()(t,["connectDragPreview","connectDragSource","connectDropTarget","isDraggableAnyWhere","anchorIconCls","index","className","theme","data","text","desc","iconCls","rightIconCls","tip","tipPosition","checked","disabled","isLoading","renderer","itemRenderer","col","selectTheme","selectMode","radioUncheckedIconCls","radioCheckedIconCls","checkboxUncheckedIconCls","checkboxCheckedIconCls","checkboxIndeterminateIconCls","itemColWidth","onMove","onSelect","onDeselect"])),q=this.state.tipVisible,G=m&&!f?"right":"left",A=x.a.createElement("i",{className:"".concat(l," draggable-grid-item-anchor"),"aria-hidden":"true"}),B=r(x.a.createElement("div",{className:"draggable-grid-item-wrapper",style:E?{width:"".concat(100/E,"%")}:null},x.a.createElement("div",c()({},H,{ref:this.tipTrigger,className:M()("draggable-grid-item",(e={},I()(e,"theme-".concat(d),d),I()(e,"activated",y),I()(e,s,s),e)),disabled:C||v,onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseOut:this.hideTip}),S===_.a.SINGLE_SELECT&&(O||P)?x.a.createElement(F.a,{className:"draggable-grid-item-select",theme:D,checked:y,disabled:C||v,uncheckedIconCls:O,checkedIconCls:P,disableTouchRipple:!0}):null,S===_.a.MULTI_SELECT?x.a.createElement(U.a,{className:"draggable-grid-item-select",theme:D,checked:y,disabled:C||v,uncheckedIconCls:N,checkedIconCls:R,indeterminateIconCls:L,disableTouchRipple:!0}):null,v&&"left"===G?x.a.createElement("div",{className:"button-icon button-icon-left"},x.a.createElement(j.a,{className:"button-loading-icon",size:"small"})):f?x.a.createElement("i",{className:"button-icon button-icon-left ".concat(f),"aria-hidden":"true"}):null,T&&"function"==typeof T?T(u,i):k&&"function"==typeof k?k(u,i):h?x.a.createElement("div",{className:"draggable-grid-item-content"},x.a.createElement("div",{className:"draggable-grid-item-content-value"},p),x.a.createElement("div",{className:"draggable-grid-item-content-desc"},h)):x.a.createElement("div",{className:"draggable-grid-item-content"},p),v&&"right"===G?x.a.createElement(j.a,{className:"button-icon button-icon-right button-loading-icon",size:"small"}):m?x.a.createElement("i",{className:"button-icon button-icon-right ".concat(m),"aria-hidden":"true"}):null,g?x.a.createElement(V.a,{visible:q,triggerEl:this.tipTrigger&&this.tipTrigger.current,position:b},g):null,o?A:a(A))));return o?a(B):n(B)}}]),a}(T.Component),I()(W,"SelectMode",_.a),I()(W,"Theme",H.a),B=z))||B)||B;K.propTypes={index:D.a.number,className:D.a.string,style:D.a.object,theme:D.a.oneOf(q.a.enumerateValue(H.a)),selectTheme:D.a.oneOf(q.a.enumerateValue(H.a)),selectMode:D.a.oneOf(q.a.enumerateValue(_.a)),data:D.a.oneOfType([D.a.string,D.a.number,D.a.object]),value:D.a.oneOfType([D.a.string,D.a.number]),text:D.a.any,desc:D.a.string,disabled:D.a.bool,isLoading:D.a.bool,checked:D.a.bool,readOnly:D.a.bool,itemColWidth:D.a.number,iconCls:D.a.string,rightIconCls:D.a.string,tip:D.a.string,tipPosition:D.a.oneOf(q.a.enumerateValue(G.a)),radioUncheckedIconCls:D.a.string,radioCheckedIconCls:D.a.string,checkboxUncheckedIconCls:D.a.string,checkboxCheckedIconCls:D.a.string,checkboxIndeterminateIconCls:D.a.string,isDraggableAnyWhere:D.a.bool,anchorIconCls:D.a.string,col:D.a.number,itemRenderer:D.a.func,renderer:D.a.func,onClick:D.a.func,onSelect:D.a.func,onDeselect:D.a.func,onMouseEnter:D.a.func,onMouseLeave:D.a.func,onMouseOver:D.a.func,connectDragPreview:D.a.func,connectDragSource:D.a.func,connectDropTarget:D.a.func,onMove:D.a.func},K.defaultProps={index:0,theme:H.a.DEFAULT,selectTheme:H.a.DEFAULT,selectMode:_.a.SINGLE_SELECT,disabled:!1,isLoading:!1,checked:!1,readOnly:!1,tipPosition:G.a.BOTTOM,checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square",isDraggableAnyWhere:!1,anchorIconCls:"fas fa-bars",col:3};var Q=K,X=n(268);function Z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var $=function(e){v()(a,e);var t,n=(t=a,function(){var e,n=y()(t);if(Z()){var a=y()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return g()(this,e)});function a(e){var t;d()(this,a);for(var c=arguments.length,r=new Array(c>1?c-1:0),o=1;o<c;o++)r[o-1]=arguments[o];return t=n.call.apply(n,[this,e].concat(r)),I()(f()(t),"listItemMoveHandler",(function(e,n,a){var c=t.state.data,r=c.splice(e,1);c.splice.apply(c,[n,0].concat(i()(r))),t.setState({data:c},(function(){var e=t.props.onSequenceChange;e&&e(c)}))})),I()(f()(t),"listItemSelectHandler",(function(e,n){var a=t.props.selectMode,c=t.state.value;a===_.a.MULTI_SELECT?(c&&O()(c)||(c=[]),c.push(e)):a===_.a.SINGLE_SELECT&&(c=e),t.setState({value:c},(function(){var a=t.props,r=a.onItemSelect,o=a.onChange;r&&r(e,n),o&&o(c,n)}))})),I()(f()(t),"listItemDeselectHandler",(function(e,n){if(t.props.selectMode===_.a.MULTI_SELECT){var a=t.props,c=a.valueField,r=a.displayField,o=t.state.value;o=o&&O()(o)?o.filter((function(t){return q.a.getValueByValueField(t,c,r)!=q.a.getValueByValueField(e,c,r)})):[],t.setState({value:o},(function(){var a=t.props,c=a.onItemDeselect,r=a.onChange;c&&c(e,n),r&&r(o,n)}))}})),t.state={data:e.data,value:X.a.getInitValue(e)},t}return p()(a,[{key:"componentWillReceiveProps",value:function(e){var t;e.data!==this.state.data&&((t=t||{}).data=e.data),e.value!==this.state.value&&((t=t||{}).value=X.a.getInitValue(e)),t&&this.setState(t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.className,r=t.style,l=t.theme,i=t.itemHeight,s=t.col,d=t.selectTheme,u=t.selectMode,p=t.radioUncheckedIconCls,h=t.radioCheckedIconCls,f=t.checkboxUncheckedIconCls,m=t.checkboxCheckedIconCls,g=t.checkboxIndeterminateIconCls,b=t.valueField,y=t.displayField,C=t.descriptionField,v=t.disabled,k=t.isLoading,T=t.renderer,E=t.onItemClick,D=this.state,S=D.data,O=D.value;return x.a.createElement("div",{className:M()("draggable-grid",I()({},a,a)),disabled:v,style:r},S&&S.map((function(t,n){return"object"===o()(t)?x.a.createElement(Q,c()({key:n},t,{index:n,style:{height:i},theme:t.theme||l,col:s,selectTheme:t.selectTheme||d,radioUncheckedIconCls:t.radioUncheckedIconCls||p,radioCheckedIconCls:t.radioCheckedIconCls||h,checkboxUncheckedIconCls:t.checkboxUncheckedIconCls||f,checkboxCheckedIconCls:t.checkboxCheckedIconCls||m,checkboxIndeterminateIconCls:t.checkboxIndeterminateIconCls||g,data:t,checked:X.a.isItemChecked(t,O,e.props),value:q.a.getValueByValueField(t,b,y),text:q.a.getTextByDisplayField(t,y,b),desc:t[C]||null,disabled:v||t.disabled,isLoading:k||t.isLoading,selectMode:u,renderer:T,onMove:e.listItemMoveHandler,onClick:function(e){E&&E(t,n,e),t.onClick&&t.onClick(e)},onSelect:function(){return e.listItemSelectHandler(t,n)},onDeselect:function(){return e.listItemDeselectHandler(t,n)}})):x.a.createElement(Q,{key:n,index:n,style:{height:i},theme:t.theme||l,col:s,selectTheme:t.selectTheme||d,radioUncheckedIconCls:t.radioUncheckedIconCls||p,radioCheckedIconCls:t.radioCheckedIconCls||h,checkboxUncheckedIconCls:t.checkboxUncheckedIconCls||f,checkboxCheckedIconCls:t.checkboxCheckedIconCls||m,checkboxIndeterminateIconCls:t.checkboxIndeterminateIconCls||g,data:t,checked:X.a.isItemChecked(t,O,e.props),value:t,text:t,disabled:v,isLoading:k,selectMode:u,renderer:T,onMove:e.listItemMoveHandler,onClick:function(e){return E&&E(t,n,e)},onSelect:function(){return e.listItemSelectHandler(t,n)},onDeselect:function(){return e.listItemDeselectHandler(t,n)}})})),n)}}]),a}(T.Component);I()($,"SelectMode",_.a),I()($,"Theme",H.a),$.propTypes={children:D.a.any,className:D.a.string,style:D.a.object,theme:D.a.oneOf(q.a.enumerateValue(H.a)),selectTheme:D.a.oneOf(q.a.enumerateValue(H.a)),selectMode:D.a.oneOf(q.a.enumerateValue(_.a)),data:D.a.arrayOf(D.a.oneOfType([D.a.shape({className:D.a.string,style:D.a.object,theme:D.a.oneOf(q.a.enumerateValue(H.a)),value:D.a.oneOfType([D.a.string,D.a.number]),text:D.a.oneOfType([D.a.string,D.a.number]),desc:D.a.oneOfType([D.a.string,D.a.number]),disabled:D.a.bool,isLoading:D.a.bool,disableTouchRipple:D.a.bool,iconCls:D.a.string,rightIconCls:D.a.string,tip:D.a.string,tipPosition:D.a.oneOf(q.a.enumerateValue(V.a.Position)),rippleDisplayCenter:D.a.bool,itemRenderer:D.a.func,onClick:D.a.func}),D.a.string,D.a.number,D.a.symbol])),value:D.a.any,idField:D.a.string,valueField:D.a.string,displayField:D.a.string,descriptionField:D.a.string,disabled:D.a.bool,isLoading:D.a.bool,scrollSpeed:D.a.number,scrollBuffer:D.a.number,radioUncheckedIconCls:D.a.string,radioCheckedIconCls:D.a.string,checkboxUncheckedIconCls:D.a.string,checkboxCheckedIconCls:D.a.string,checkboxIndeterminateIconCls:D.a.string,col:D.a.number,itemHeight:D.a.number,renderer:D.a.func,onItemClick:D.a.func,onItemSelect:D.a.func,onItemDeselect:D.a.func,onChange:D.a.func,onSequenceChange:D.a.func},$.defaultProps={theme:H.a.DEFAULT,selectTheme:H.a.DEFAULT,selectMode:_.a.SINGLE_SELECT,idField:"id",valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,scrollSpeed:20,scrollBuffer:40,checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square",col:3};var ee=$},677:function(e){e.exports=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the grid item.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the grid item select radio or checkbox.","default":"Theme.DEFAULT"},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of listItem.","default":"SelectMode.SINGLE_SELECT"},"data":{"type":"PropTypes.array","desc":"Children passed into the GridItem."},"value":{"type":"PropTypes.any"},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the grid will be disabled.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the grid will be at loading status."},"scrollSpeed":{"type":"PropTypes.number","desc":"The speed of scroll bar.","default":"20"},"scrollBuffer":{"type":"PropTypes.number","desc":"The number of overflows.","default":"40"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"checkboxCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"col":{"type":"PropTypes.number","default":"3"},"itemHeight":{"type":"PropTypes.number"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the grid-item touch tap."},"onItemSelect":{"type":"PropTypes.func","desc":"Callback function fired when the grid-item select."},"onItemDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the grid-item deselect."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the grid changed."},"onSequenceChange":{"type":"PropTypes.func","desc":"Callback function fired when select item sequence changed."}}')},803:function(e,t,n){"use strict";n.r(t);var a=n(51),c=n.n(a),r=n(52),o=n.n(r),l=n(19),i=n.n(l),s=n(53),d=n.n(s),u=n(36),p=n.n(u),h=n(54),f=n.n(h),m=n(9),g=n.n(m),b=n(0),y=n.n(b),C=n(235),v=n(233),k=n(334),I=n(247),T=n(246),x=n(242),E=n(677);function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var S=function(e){f()(a,e);var t,n=(t=a,function(){var e,n=p()(t);if(D()){var a=p()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return d()(this,e)});function a(e){var t;return c()(this,a),t=n.call(this,e),g()(i()(t),"sequenceChangeHandler",(function(e){console.log("Sequence Changed:",e)})),g()(i()(t),"changeHandler",(function(e){console.log("Value Changed:",e)})),t.gridData=[{iconCls:"fab fa-facebook",text:"Facebook",tip:"Facebook"},{iconCls:"fab fa-twitter",text:"Twitter",tip:"Twitter"},{iconCls:"fab fa-google-plus-g",text:"Google+",tip:"Google+"}],t.largeListData=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],t}return o()(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"example list-examples"},y.a.createElement("h2",{className:"example-title"},"DraggableGrid"),y.a.createElement("p",null,y.a.createElement("span",null,"DraggableGrid"),"used to move the draggable object by clicking the mouse and dragging it in the viewport."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(C.a,{backend:v.a},y.a.createElement(I.a,null,y.a.createElement(T.a,{className:"example-header",title:"DraggableGrid"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"A multiple-choice",y.a.createElement("code",null," DraggableGrid")," example."),y.a.createElement(k.a,{selectMode:k.a.SelectMode.MULTI_SELECT,data:this.gridData,onSequenceChange:this.sequenceChangeHandler,onChange:this.changeHandler}))))),y.a.createElement(I.a,null,y.a.createElement(T.a,{className:"example-header",title:"Draggable Group"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"A ",y.a.createElement("code",null,"DraggableGrid")," simple example."),y.a.createElement(k.a,{style:{height:120},data:this.largeListData,col:5,onSequenceChange:this.sequenceChangeHandler,onChange:this.changeHandler})))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(x.a,{data:E}))}}]),a}(b.Component);t.default=S},99:function(e,t,n){e.exports=n(10)(85)}}]);
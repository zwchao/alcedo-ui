(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{282:function(e,a,n){"use strict";var t=n(4),l=n.n(t),o=n(51),r=n.n(o),d=n(52),i=n.n(d),c=n(53),s=n.n(c),p=n(54),u=n.n(p),h=n(19),g=n.n(h),f=n(55),m=n.n(f),y=n(18),C=n.n(y),v=n(0),b=n.n(v),T=n(276),I=n.n(T),k=n(288),E=(n(283),function(e){function a(e){var n;return r()(this,a),n=s()(this,u()(a).call(this,e)),C()(g()(n),"generateData",function(){var e=[];if(!n.props.data)return[];for(var a in n.props.data)e.push(l()({name:a},n.props.data[a]));return e}),n}return m()(a,e),i()(a,[{key:"render",value:function(){return b.a.createElement("div",{className:"prop-type-desc-table-wrapper"},b.a.createElement(k.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(v.Component));E.propTypes={data:I.a.object},a.a=E},283:function(e,a,n){var t=n(284);"string"==typeof t&&(t=[[e.i,t,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(107)(t,l);t.locals&&(e.exports=t.locals)},284:function(e,a,n){(e.exports=n(106)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},349:function(e,a,n){"use strict";var t=n(278);a.a={calDepth:function(e,a){var n=e,t=0;if(!e||!a)return 0;var l=!0,o=!1,r=void 0;try{for(var d,i=a[Symbol.iterator]();!(l=(d=i.next()).done);l=!0){var c=d.value;if(!(c.index in n))return t;n=n[c.index].children,t++}}catch(e){o=!0,r=e}finally{try{l||null==i.return||i.return()}finally{if(o)throw r}}return n&&n.length>0?t+1:t},calPath:function(e,a,n){if(e&&a)return function e(a,n,l,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(a&&!(a.length<1)&&n){var d=l.valueField,i=l.displayField;if(t.a.getValueByValueField(a,d,i)===t.a.getValueByValueField(n,d,i))return o?[{node:a,index:r}]:null;if(a.children&&a.children.length>0)for(var c=0,s=a.children.length;c<s;c++){var p=e(a.children[c],n,l,a,c);if(p)return o?(p.unshift({node:a,index:r}),p):p}}}(a,e,n,null)},findNodeById:function e(a,n,t){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a){if(""+a.id==""+n)return t&&t(a,l,o),!0;if(a.children&&a.children.length>0)for(var r=0,d=a.children.length;r<d;r++)if(e(a.children[r],n,t,r,a))return}}}},384:function(e,a,n){"use strict";var t=n(51),l=n.n(t),o=n(52),r=n.n(o),d=n(53),i=n.n(d),c=n(54),s=n.n(c),p=n(19),u=n.n(p),h=n(55),g=n.n(h),f=n(18),m=n.n(f),y=n(0),C=n.n(y),v=n(276),b=n.n(v),T=n(264),I=n(277),k=n.n(I),E=n(12),x=n.n(E),N=n(280),S=n.n(N),F=n(4),P=n.n(F),D=n(312),w=n(293),L=n(294),R=n(317),V=n(315),O=n(279),M=n(281),U=n(295),B=n(323),q=n(278),_=n(311),A=function(e){function a(e){var n,t;l()(this,a);for(var o=arguments.length,r=new Array(o>1?o-1:0),d=1;d<o;d++)r[d-1]=arguments[d];return t=i()(this,(n=s()(a)).call.apply(n,[this,e].concat(r))),m()(u()(t),"toggleTreeNode",function(e){e&&e.stopPropagation();var a=t.props.onNodeToggleStart;a&&a(),t.setState({collapsed:!t.state.collapsed},function(){var e=t.props.onNodeToggleEnd;e&&e()})}),m()(u()(t),"handleCheckboxChange",function(e){var a=t.props,n=a.data,l=a.path,o=a.value,r=a.onSelect,d=a.onDeselect;_.a.isItemChecked(n,o,t.props)?d&&d(n,l,e):r&&r(n,l,e)}),m()(u()(t),"handleRadioChange",function(e){var a=t.props,n=a.data,l=a.path,o=a.onSelect;o&&o(n,l,e)}),m()(u()(t),"handleClick",function(e){e.preventDefault();var a=t.props,n=a.data,l=a.path,o=a.disabled,r=a.isLoading,d=a.readOnly;if(!(o||r||d||n.disabled||n.isLoading||n.readOnly)){var i=t.props.onClick;switch(i&&i(n,l,e),t.props.selectMode){case U.a.MULTI_SELECT:return void t.handleCheckboxChange(e);case U.a.SINGLE_SELECT:return void t.handleRadioChange(e)}}}),t.state={collapsed:(!e.data||!e.data[B.a])&&e.collapsed},t}return g()(a,e),r()(a,[{key:"render",value:function(){var e=this,n=this.props,t=n.index,l=n.depth,o=(n.path,n.theme),r=n.selectTheme,d=n.selectMode,i=n.data,c=n.value,s=n.disabled,p=n.isLoading,u=n.readOnly,h=n.allowCollapse,g=n.isSelectRecursive,f=n.valueField,y=n.displayField,v=n.descriptionField,b=n.collapsedIconCls,I=n.expandedIconCls,E=n.radioUncheckedIconCls,x=n.radioCheckedIconCls,N=n.checkboxUncheckedIconCls,F=n.checkboxCheckedIconCls,O=n.checkboxIndeterminateIconCls,M=n.renderer,A=n.onMouseEnter,G=n.onMouseLeave,j=n.isDragging,H=n.isNodeToggling,z=this.state.collapsed,J=_.a.isItemChecked(i,c,this.props),W=i.isLoading||p,Y=i.disabled||s||W,K=B.a in i,Q=i.rightIconCls&&!i.iconCls?"right":"left";return C.a.createElement(T.c,{droppableId:""+i.id,type:i.id,key:i.id},function(n){var c;return C.a.createElement("div",S()({ref:n.innerRef,className:"draggable-tree-node-wrapper"},n.droppableProps),K?null:C.a.createElement(w.a,{tipContent:i.tip,position:i.tipPosition},C.a.createElement("div",{className:k()("draggable-tree-node",(c={},m()(c,"theme-".concat(o),o),m()(c,"dragging",j),m()(c,i.className,i.className),c)),style:P()({},i.style,{paddingLeft:20*(l+1)}),disabled:Y,readOnly:u,onClick:e.handleClick,onMouseEnter:A,onMouseLeave:G},C.a.createElement("div",{className:"draggable-tree-node-inner"},h&&i.children&&i.children.length>0?C.a.createElement(L.a,{className:"draggable-tree-node-collapse-icon",iconCls:z?i.collapsedIconCls||b:i.expandedIconCls||I,onClick:e.toggleTreeNode}):null,d===U.a.SINGLE_SELECT&&(E||x)?C.a.createElement(R.a,{className:"draggable-tree-node-select",theme:r,checked:J,disabled:Y,uncheckedIconCls:i.radioUncheckedIconCls||E,checkedIconCls:i.radioCheckedIconCls||x,disableTouchRipple:!0}):null,d===U.a.MULTI_SELECT?C.a.createElement(V.a,{className:"draggable-tree-node-select",theme:r,checked:J,indeterminate:!!g&&indeterminate,disabled:Y,uncheckedIconCls:i.checkboxUncheckedIconCls||N,checkedIconCls:i.checkboxCheckedIconCls||F,indeterminateIconCls:i.checkboxIndeterminateIconCls||O,disableTouchRipple:!0}):null,W&&"left"===Q?C.a.createElement("div",{className:"button-icon button-icon-left"},C.a.createElement(D.a,{className:"button-loading-icon",size:"small"})):i.iconCls?C.a.createElement("i",{className:"button-icon button-icon-left ".concat(i.iconCls),"aria-hidden":"true"}):null,i.itemRenderer&&"function"==typeof i.itemRenderer?i.itemRenderer(i,t):M&&"function"==typeof M?M(i,t):i[v]?C.a.createElement("div",{className:"draggable-tree-node-content"},C.a.createElement("span",{className:"draggable-tree-node-content-value"},q.a.getTextByDisplayField(i,y,f)),C.a.createElement("span",{className:"draggable-tree-node-content-desc"},i[v])):q.a.getTextByDisplayField(i,y,f),W&&"right"===Q?C.a.createElement(D.a,{className:"button-icon button-icon-right button-loading-icon",size:"small"}):i.rightIconCls?C.a.createElement("i",{className:"button-icon button-icon-right ".concat(i.rightIconCls),"aria-hidden":"true"}):null))),i.children&&i.children.length>0?C.a.createElement("div",{className:"draggable-tree-node-children"+(z?" collapsed":"")},i.children.map(function(n,t){var o=o?[].concat(o,[{index:t,node:n}]):[{index:t,node:n}];return C.a.createElement(T.b,{key:n.id,draggableId:""+n.id,type:i.id,disableInteractiveElementBlocking:!1,isDragDisabled:H||Y,index:t},function(r,d){return C.a.createElement("div",null,C.a.createElement("div",S()({ref:r.innerRef,style:r.draggableStyle},r.draggableProps,r.dragHandleProps),C.a.createElement(a,S()({},e.props,{key:t,data:n,index:t,depth:l+(K?0:1),path:o,isDragging:d.isDragging}))))})})):null,n.placeholder)})}}]),a}(y.Component);m()(A,"SelectMode",U.a),m()(A,"Theme",O.a),A.propTypes={index:b.a.number,depth:b.a.number,path:b.a.array,theme:b.a.oneOf(q.a.enumerateValue(O.a)),selectTheme:b.a.oneOf(q.a.enumerateValue(O.a)),selectMode:b.a.oneOf(q.a.enumerateValue(U.a)),data:b.a.object,value:b.a.any,idField:b.a.string,valueField:b.a.string,displayField:b.a.string,descriptionField:b.a.string,disabled:b.a.bool,isLoading:b.a.bool,readOnly:b.a.bool,allowCollapse:b.a.bool,collapsed:b.a.bool,isNodeToggling:b.a.bool,isSelectRecursive:b.a.bool,renderer:b.a.func,collapsedIconCls:b.a.string,expandedIconCls:b.a.string,radioUncheckedIconCls:b.a.string,radioCheckedIconCls:b.a.string,checkboxUncheckedIconCls:b.a.string,checkboxCheckedIconCls:b.a.string,checkboxIndeterminateIconCls:b.a.string,onClick:b.a.func,onSelect:b.a.func,onDeselect:b.a.func,onMouseEnter:b.a.func,onMouseLeave:b.a.func,onNodeToggleStart:b.a.func,onNodeToggleEnd:b.a.func,isDragging:b.a.bool},A.defaultProps={index:0,depth:0,theme:O.a.DEFAULT,selectTheme:O.a.DEFAULT,selectMode:U.a.SINGLE_SELECT,idField:"id",valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,isLoading:!1,readOnly:!1,allowCollapse:!0,collapsed:!1,isNodeToggling:!1,isSelectRecursive:!1,tipPosition:M.a.BOTTOM,collapsedIconCls:"fas fa-caret-right",expandedIconCls:"fas fa-caret-down",checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square",isDragging:!1};var G=A,j=n(304),H=n(349),z=n(289),J=function(e){function a(e){var n,t;l()(this,a);for(var o=arguments.length,r=new Array(o>1?o-1:0),d=1;d<o;d++)r[d-1]=arguments[d];return t=i()(this,(n=s()(a)).call.apply(n,[this,e].concat(r))),m()(u()(t),"addRecursiveValue",function(e,a){if(e&&a&&(_.a.isItemChecked(e,a,t.props)||a.push(e),e.children&&!(e.children.length<1))){var n=!0,l=!1,o=void 0;try{for(var r,d=e.children[Symbol.iterator]();!(n=(r=d.next()).done);n=!0){var i=r.value;t.addRecursiveValue(i,a)}}catch(e){l=!0,o=e}finally{try{n||null==d.return||d.return()}finally{if(l)throw o}}}}),m()(u()(t),"removeRecursiveValue",function(e,a){if(e&&a){var n=_.a.getMultiSelectItemIndex(e,a,t.props);if(n>-1&&a.splice(n,1),e.children&&!(e.children.length<1)){var l=!0,o=!1,r=void 0;try{for(var d,i=e.children[Symbol.iterator]();!(l=(d=i.next()).done);l=!0){var c=d.value;t.removeRecursiveValue(c,a)}}catch(e){o=!0,r=e}finally{try{l||null==i.return||i.return()}finally{if(o)throw r}}}}}),m()(u()(t),"updateValue",function(e){var a,n=t.props,l=n.data,o=n.valueField,r=n.displayField,d=[];return q.a.postOrderTraverse(x()(l)?(a={},m()(a,B.a,!0),m()(a,"children",l),a):l,function(a){B.a in a||(!a.children||a.children.length<1?e.findIndex(function(e){return q.a.getValueByValueField(e,o,r)===q.a.getValueByValueField(a,o,r)})>-1&&d.push(a):a.children.every(function(e){return d.findIndex(function(a){return q.a.getValueByValueField(a,o,r)===q.a.getValueByValueField(e,o,r)})>-1})&&d.push(a))}),d}),m()(u()(t),"handleTreeNodeSelect",function(e,a,n){if(e){var l=t.props,o=l.selectMode,r=l.isSelectRecursive,d=t.state.value;o===U.a.MULTI_SELECT?(d&&x()(d)||(d=[]),r?(t.addRecursiveValue(e,d),d=t.updateValue(d)):d.push(e)):o===U.a.SINGLE_SELECT&&(d=e),t.setState({value:d},function(){var l=t.props,o=l.onNodeSelect,r=l.onChange;o&&o(e,a,n),r&&r(d,n)})}}),m()(u()(t),"handleTreeNodeDeselect",function(e,a,n){if(t.props.selectMode===U.a.MULTI_SELECT){var l=t.props.isSelectRecursive,o=t.state.value;if(o&&x()(o))if(l)t.removeRecursiveValue(node,o),o=t.updateValue(o);else{var r=_.a.getMultiSelectItemIndex(node,o,t.props);r>-1&&o.splice(r,1)}else o=[];t.setState({value:o},function(){var e=t.props,l=e.onNodeDeselect,r=e.onChange;l&&l(node,a,n),r&&r(o,n)})}}),m()(u()(t),"handleNodeToggleStart",function(){var e=t.props.beforeNodeToggle;e&&!1===e()||t.setState({isNodeToggling:!0})}),m()(u()(t),"handleNodeToggleEnd",function(){t.setState({isNodeToggling:!1})}),m()(u()(t),"onNodeDragStart",function(e){var a=t.props.onNodeDragStart;a&&a(e)}),m()(u()(t),"onNodeDragEnd",function(e){var a;if(e&&"draggableId"in e&&e.source&&"index"in e.source&&e.destination&&"index"in e.destination){var n=t.state.data,l=e.source.index,o=e.destination.index;H.a.findNodeById(x()(n)?(a={},m()(a,B.a,!0),m()(a,"children",n),a):n,e.draggableId,function(a,r,d){d.children&&l in d.children&&o in d.children&&(q.a.reorder(d.children,l,o),t.setState({data:n},function(){var a=t.props,l=a.onNodeDragEnd,o=a.onSequenceChange;l&&l(e),o&&o(n)}))})}}),t.state={data:e.data,value:_.a.getInitValue(e),isNodeToggling:!1},t}return g()(a,e),r()(a,[{key:"render",value:function(){var e,a=this.props,n=a.children,t=a.className,l=a.style,o=a.theme,r=a.allowCollapse,d=a.collapsed,i=a.collapsedIconCls,c=a.expandedIconCls,s=a.radioUncheckedIconCls,p=a.radioCheckedIconCls,u=a.checkboxUncheckedIconCls,h=a.checkboxCheckedIconCls,g=a.checkboxIndeterminateIconCls,f=a.idField,y=a.valueField,v=a.displayField,b=a.descriptionField,I=a.disabled,E=a.isLoading,N=a.readOnly,S=a.selectMode,F=a.renderer,P=a.onNodeClick,D=this.state,w=D.data,L=D.value,R=D.isNodeToggling;return C.a.createElement(T.a,{onDragStart:this.onNodeDragStart,onDragEnd:this.onNodeDragEnd},C.a.createElement("div",{className:k()("draggable-tree",m()({},t,t)),disabled:I,style:l},C.a.createElement(G,{data:x()(w)?(e={},m()(e,B.a,!0),m()(e,"children",w),e):w,value:L,theme:o,idField:f,valueField:y,displayField:v,descriptionField:b,disabled:I,isLoading:E,readOnly:N,selectMode:S,renderer:F,allowCollapse:r,collapsed:d,collapsedIconCls:i,expandedIconCls:c,radioUncheckedIconCls:s,radioCheckedIconCls:p,checkboxUncheckedIconCls:u,checkboxCheckedIconCls:h,checkboxIndeterminateIconCls:g,isNodeToggling:R,onClick:function(){return P&&P.apply(void 0,arguments)},onNodeToggleStart:this.handleNodeToggleStart,onNodeToggleEnd:this.handleNodeToggleEnd,onSelect:this.handleTreeNodeSelect,onDeselect:this.handleTreeNodeDeselect}),n))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return{prevProps:e,data:z.a.getDerivedState(e,a,"data"),value:_.a.getInitValue({value:z.a.getDerivedState(e,a,"value"),selectMode:e.selectMode})}}}]),a}(y.Component);m()(J,"SelectMode",U.a),m()(J,"Theme",O.a),J.propTypes={children:b.a.any,className:b.a.string,style:b.a.object,theme:b.a.oneOf(q.a.enumerateValue(O.a)),selectTheme:b.a.oneOf(q.a.enumerateValue(O.a)),selectMode:b.a.oneOf(q.a.enumerateValue(U.a)),data:b.a.oneOfType([b.a.shape({className:b.a.string,style:b.a.object,theme:b.a.oneOf(q.a.enumerateValue(O.a)),value:b.a.oneOfType([b.a.string,b.a.number]),text:b.a.oneOfType([b.a.string,b.a.number]),desc:b.a.oneOfType([b.a.string,b.a.number]),disabled:b.a.bool,isLoading:b.a.bool,iconCls:b.a.string,rightIconCls:b.a.string,tip:b.a.string,tipPosition:b.a.oneOf(q.a.enumerateValue(j.a.Position)),children:b.a.array,itemRenderer:b.a.func,onClick:b.a.func}),b.a.array]),idField:b.a.string,valueField:b.a.string,displayField:b.a.string,descriptionField:b.a.string,disabled:b.a.bool,isLoading:b.a.bool,readOnly:b.a.bool,isSelectRecursive:b.a.bool,allowCollapse:b.a.bool,collapsed:b.a.bool,collapsedIconCls:b.a.string,expandedIconCls:b.a.string,radioUncheckedIconCls:b.a.string,radioCheckedIconCls:b.a.string,checkboxUncheckedIconCls:b.a.string,checkboxCheckedIconCls:b.a.string,checkboxIndeterminateIconCls:b.a.string,renderer:b.a.func,onNodeClick:b.a.func,onNodeSelect:b.a.func,onNodeDeselect:b.a.func,onChange:b.a.func,onWheel:b.a.func,beforeNodeToggle:b.a.func,onNodeDragStart:b.a.func,onNodeDragEnd:b.a.func,onSequenceChange:b.a.func},J.defaultProps={theme:O.a.DEFAULT,selectTheme:O.a.DEFAULT,selectMode:U.a.SINGLE_SELECT,idField:"id",valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,isLoading:!1,readOnly:!1,isSelectRecursive:!1,allowCollapse:!0,collapsed:!1};var W=J;n.d(a,"a",function(){return W})},717:function(e){e.exports={children:{type:"PropTypes.any"},className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The theme of the tree node.",default:"Theme.DEFAULT"},selectTheme:{type:"PropTypes.oneOf",desc:"The theme of the tree node select radio or checkbox.",default:"Theme.DEFAULT"},selectMode:{type:"PropTypes.oneOf",desc:"The mode of tree node.",default:"SelectMode.SINGLE_SELECT"},data:{type:"PropTypes.oneOf",desc:"Children passed into the tree node."},idField:{type:"PropTypes.string",desc:'The id field name in data. (default: "id")',default:"id"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},disabled:{type:"PropTypes.bool",desc:"If true, the tree will be disabled.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true, the tree will be at loading status.",default:"false"},readOnly:{type:"PropTypes.bool",default:"false"},isSelectRecursive:{type:"PropTypes.bool",default:"false"},allowCollapse:{type:"PropTypes.bool",default:"true"},collapsed:{type:"PropTypes.bool",default:"false"},collapsedIconCls:{type:"PropTypes.string"},expandedIconCls:{type:"PropTypes.string"},radioUncheckedIconCls:{type:"PropTypes.string"},radioCheckedIconCls:{type:"PropTypes.string"},checkboxUncheckedIconCls:{type:"PropTypes.string"},checkboxCheckedIconCls:{type:"PropTypes.string"},checkboxIndeterminateIconCls:{type:"PropTypes.string"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onNodeClick:{type:"PropTypes.func",desc:"Callback function fired when the tree node touch tap."},onNodeSelect:{type:"PropTypes.func",desc:"Callback function fired when the tree node selected."},onNodeDeselect:{type:"PropTypes.func",desc:"Callback function fired when the tree node deselected."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the tree changed."},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."},beforeNodeToggle:{type:"PropTypes.func"},onNodeDragStart:{type:"PropTypes.func"},onNodeDragEnd:{type:"PropTypes.func"},onSequenceChange:{type:"PropTypes.func"}}},718:function(e,a,n){var t=n(719);"string"==typeof t&&(t=[[e.i,t,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(107)(t,l);t.locals&&(e.exports=t.locals)},719:function(e,a,n){(e.exports=n(106)(!1)).push([e.i,".draggable-tree-examples .tree-wrapper {\n  border: 1px solid #e4eaf2;\n  overflow: hidden; }\n",""])},843:function(e,a,n){"use strict";n.r(a);var t=n(51),l=n.n(t),o=n(52),r=n.n(o),d=n(53),i=n.n(d),c=n(54),s=n.n(c),p=n(19),u=n.n(p),h=n(55),g=n.n(h),f=n(18),m=n.n(f),y=n(0),C=n.n(y),v=n(384),b=n(297),T=n(287),I=n(286),k=n(282),E=n(717),x=(n(718),function(e){function a(e){var n;return l()(this,a),n=i()(this,s()(a).call(this,e)),m()(u()(n),"sequenceChangeHandler",function(e){console.log("Sequence Changed:",e)}),m()(u()(n),"changeHandler",function(e){console.log("Value Changed:",e)}),n.data={id:"0",text:"Root",desc:"Root",tip:"Root",children:[{id:"00",text:"Children 0 - 0",desc:"Children 0 - 0",tip:"Children 0 - 0"},{id:"01",text:"Children 0 - 1",desc:"Children 0 - 1",tip:"Children 0 - 1",children:[{id:"010",text:"Children 0 - 1 - 0",desc:"Children 0 - 1 - 0",tip:"Children 0 - 1 - 0"},{id:"011",text:"Children 0 - 1 - 1",desc:"Children 0 - 1 - 1",tip:"Children 0 - 1 - 1"},{id:"012",text:"Children 0 - 1 - 2",desc:"Children 0 - 1 - 2",tip:"Children 0 - 1 - 2"}]},{id:"02",text:"Children 0 - 2",desc:"Children 0 - 2",tip:"Children 0 - 2"}]},n}return g()(a,e),r()(a,[{key:"render",value:function(){return C.a.createElement("div",{className:"example draggable-tree-examples"},C.a.createElement("h2",{className:"example-title"},"DraggableTree"),C.a.createElement("p",null,C.a.createElement("span",null,"DraggableTree"),"is a list of elements that allow you to move elements with the mouse."),C.a.createElement("h2",{className:"example-title"},"Examples"),C.a.createElement(T.a,null,C.a.createElement(I.a,{className:"example-header",title:"Draggable"}),C.a.createElement("div",{className:"widget-content"},C.a.createElement("div",{className:"example-content"},C.a.createElement("div",{className:"examples-wrapper"},C.a.createElement("p",null,"A multiple-choice ",C.a.createElement("code",null,"DraggableTree")," example."),C.a.createElement(b.a,{className:"tree-wrapper"},C.a.createElement(v.a,{data:this.data,onChange:this.changeHandler,onSequenceChange:this.sequenceChangeHandler})))))),C.a.createElement("h2",{className:"example-title"},"Properties"),C.a.createElement(k.a,{data:E}))}}]),a}(y.Component));a.default=x}}]);
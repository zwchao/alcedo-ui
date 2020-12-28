(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[8934],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const l=a},69493:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".tree-examples .tree-wrapper {\n  border: 1px solid #e4eaf2;\n  overflow: hidden; }\n  .tree-examples .tree-wrapper .self-define-node {\n    display: inline-block; }\n    .tree-examples .tree-wrapper .self-define-node .self-define-node-id {\n      color: #fff;\n      background: #38b1eb;\n      border-radius: 4px;\n      padding: 0 4px; }\n    .tree-examples .tree-wrapper .self-define-node .self-define-node-text {\n      margin-left: 4px;\n      margin-right: 8px; }\n    .tree-examples .tree-wrapper .self-define-node .self-define-node-desc {\n      color: #d9d9d9; }\n",""]);const l=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(34575),a=n.n(r),l=n(93913),c=n.n(l),s=n(81506),o=n.n(s),d=n(2205),i=n.n(d),p=n(78585),f=n.n(p),u=n(29754),h=n.n(u),m=n(59713),y=n.n(m),b=n(37699),C=n(45697),T=n.n(C),x=n(82996),g=n(93379),v=n.n(g),E=n(29250);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}v()(E.Z,{insert:"head",singleton:!1}),E.Z.locals;var w=function(e){i()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return f()(this,e)});function l(e){var t;return a()(this,l),t=r.call(this,e),y()(o()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(N({name:n},t.props.data[n]));return e})),t}return c()(l,[{key:"render",value:function(){return b.createElement("div",{className:"prop-type-desc-table-wrapper"},b.createElement(x.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),l}(b.Component);w.propTypes={data:T().object};const k=w},49133:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(34575),a=n.n(r),l=n(93913),c=n.n(l),s=n(81506),o=n.n(s),d=n(2205),i=n.n(d),p=n(78585),f=n.n(p),u=n(29754),h=n.n(u),m=n(59713),y=n.n(m),b=n(37699),C=n(24471),T=n(50704),x=n(11253),g=n(12736),v=n(22356);const E=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the tree node.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the tree node select radio or checkbox.","default":"Theme.DEFAULT"},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of tree node.","default":"SelectMode.SINGLE_SELECT"},"data":{"type":"PropTypes.oneOf","desc":"Children passed into the tree node."},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the tree will be disabled.","default":"false"},"nodeDisabled":{"type":"PropTypes.bool","desc":"Tree node disabled callback."},"isLoading":{"type":"PropTypes.bool","desc":"If true, the tree will be at loading status.","default":"false"},"readOnly":{"type":"PropTypes.bool","default":"false"},"isSelectRecursive":{"type":"PropTypes.bool","default":"false"},"allowCollapse":{"type":"PropTypes.bool","default":"true"},"collapsed":{"type":"PropTypes.bool","default":"false"},"indentWidth":{"type":"PropTypes.number","default":"20"},"collapsedIconCls":{"type":"PropTypes.string"},"expandedIconCls":{"type":"PropTypes.string"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string"},"checkboxCheckedIconCls":{"type":"PropTypes.string"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onNodeClick":{"type":"PropTypes.func","desc":"Callback function fired when the tree node touch tap."},"onNodeSelect":{"type":"PropTypes.func","desc":"Callback function fired when the tree node selected."},"onNodeDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the tree node deselected."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the tree changed."},"isNodeCollapsed":{"type":"PropTypes.func"},"beforeNodeToggle":{"type":"PropTypes.func"}}');var P=n(93379),N=n.n(P),w=n(69493);N()(w.Z,{insert:"head",singleton:!1}),w.Z.locals;const k=function(e){i()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return f()(this,e)});function l(e){var t;return a()(this,l),t=r.call(this,e),y()(o()(t),"nodeClickHandler",(function(e){console.log("Node Clicked::",e)})),y()(o()(t),"nodeSelectHandler",(function(e,t){console.log("Node Selected::",e,t)})),y()(o()(t),"changeHandler",(function(e){console.log("Changed::",e)})),t.data={id:"0",text:"Root",desc:"Root",tip:"Root",children:[{id:"00",text:"Children 0 - 0",desc:"Children 0 - 0",tip:"Children 0 - 0"},{id:"01",text:"Children 0 - 1",desc:"Children 0 - 1",tip:"Children 0 - 1",children:[{id:"010",text:"Children 0 - 1 - 0",desc:"Children 0 - 1 - 0",tip:"Children 0 - 1 - 0"},{id:"011",text:"Children 0 - 1 - 1",desc:"Children 0 - 1 - 1",tip:"Children 0 - 1 - 1"},{id:"012",text:"Children 0 - 1 - 2",desc:"Children 0 - 1 - 2",tip:"Children 0 - 1 - 2"}]},{id:"02",text:"Children 0 - 2",desc:"Children 0 - 2",tip:"Children 0 - 2"}]},t.arrayData=t.data.children,t}return c()(l,[{key:"render",value:function(){return b.createElement("div",{className:"example tree-examples"},b.createElement("h2",{className:"examples-title"},"Tree"),b.createElement("p",null,b.createElement("span",null,"Tree"),"can fully display the hierarchy, and has interactive functions such as expansion, withdrawal and selection."),b.createElement("h2",{className:"example-title"},"Examples"),b.createElement(C.Z,null,b.createElement(T.Z,{className:"example-header",title:"Basic"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"examples-wrapper"},b.createElement("p",null,b.createElement("code",null,"Tree"),"simple example."),b.createElement(x.Z,{className:"tree-wrapper"},b.createElement(g.Z,{data:this.data,onNodeClick:this.nodeClickHandler,onNodeSelect:this.nodeSelectHandler,onChange:this.changeHandler})))))),b.createElement(C.Z,null,b.createElement(T.Z,{className:"example-header",title:"Self Define Node Renderer"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"examples-wrapper"},b.createElement(x.Z,{className:"tree-wrapper"},b.createElement(g.Z,{data:this.arrayData,collapsed:!0,collapsedIconCls:"far fa-plus-square",expandedIconCls:"far fa-minus-square",renderer:function(e){return b.createElement("div",{className:"self-define-node"},b.createElement("span",{className:"self-define-node-id"},e.id),b.createElement("span",{className:"self-define-node-text"},e.text),b.createElement("span",{className:"self-define-node-desc"},e.desc))},onNodeSelect:this.nodeSelectHandler,onChange:this.changeHandler})))))),b.createElement(C.Z,null,b.createElement(T.Z,{className:"example-header",title:"Multi Select"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"examples-wrapper"},b.createElement(x.Z,{className:"tree-wrapper"},b.createElement(g.Z,{selectMode:g.Z.SelectMode.MULTI_SELECT,data:this.data,isSelectRecursive:!0,checkboxUncheckedIconCls:"far fa-circle",checkboxCheckedIconCls:"fas fa-check-circle",checkboxIndeterminateIconCls:"fas fa-minus-circle",isNodeCollapsed:function(e){return"01"===e.id},nodeDisabled:function(e){return e.id.includes("2")},onNodeSelect:this.nodeSelectHandler,onChange:this.changeHandler})))))),b.createElement("h2",{className:"example-title"},"Properties"),b.createElement(v.Z,{data:E}))}}]),l}(b.Component)}}]);
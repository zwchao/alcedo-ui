(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[3582],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const o=a},79840:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".waterfall-examples .buttons {\n  text-align: center;\n  margin-bottom: 20px; }\n  .waterfall-examples .buttons .button-radio {\n    padding: 0; }\n\n.waterfall-examples .waterfall .paper {\n  border: 1px solid #e4eaf2; }\n",""]);const o=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r=n(34575),a=n.n(r),o=n(93913),l=n.n(o),c=n(81506),i=n.n(c),s=n(2205),u=n.n(s),p=n(78585),f=n.n(p),d=n(29754),m=n.n(d),h=n(59713),y=n.n(h),b=n(37699),g=n(45697),v=n.n(g),C=n(82996),O=n(93379),E=n.n(O),T=n(29250);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}E()(T.Z,{insert:"head",singleton:!1}),T.Z.locals;var R=function(e){u()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m()(t);if(n){var a=m()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return f()(this,e)});function o(e){var t;return a()(this,o),t=r.call(this,e),y()(i()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(Z({name:n},t.props.data[n]));return e})),t}return l()(o,[{key:"render",value:function(){return b.createElement("div",{className:"prop-type-desc-table-wrapper"},b.createElement(C.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),o}(b.Component);R.propTypes={data:v().object};const P=R},66608:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(34575),a=n.n(r),o=n(93913),l=n.n(o),c=n(81506),i=n.n(c),s=n(2205),u=n.n(s),p=n(78585),f=n.n(p),d=n(29754),m=n.n(d),h=n(59713),y=n.n(h),b=n(37699),g=n(24471),v=n(50704),C=n(98382),O=n(11253),E=n(29036),T=n(22356);const w=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"column":{"type":"PropTypes.number","desc":"Column count of waterfall.","default":"3"},"separator":{"type":"PropTypes.number","desc":"horizontal separator between items for calculation and display.","default":"10"}}');var Z=n(93379),R=n.n(Z),P=n(79840);R()(P.Z,{insert:"head",singleton:!1}),P.Z.locals;const k=function(e){u()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m()(t);if(n){var a=m()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return f()(this,e)});function o(e){var t;return a()(this,o),t=r.call(this,e),y()(i()(t),"columnChangeHandle",(function(e){t.setState({column:e})})),t.data=[{label:"Two Columns",value:2},{label:"Three Column",value:3},{label:"Four Column",value:4},{label:"Five Column",value:5}],t.state={column:3},t}return l()(o,[{key:"render",value:function(){var e=this.state.column;return b.createElement("div",{className:"example waterfall-examples"},b.createElement("h2",{className:"example-title"},"Waterfall"),b.createElement("p",null,"A ",b.createElement("span",null,"Waterfall")," is a container that can display items in multi columns."),b.createElement("h2",{className:"example-title"},"Examples"),b.createElement(g.Z,null,b.createElement(v.Z,{className:"example-header",title:"Waterfall Example"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"examples-wrapper"},b.createElement("div",{className:"buttons"},b.createElement(E.Z,{data:this.data,value:e,onChange:this.columnChangeHandle})),b.createElement(C.Z,{column:null==e?void 0:e.value},b.createElement(O.Z,{style:{height:20}}),b.createElement(O.Z,{style:{height:90}}),b.createElement(O.Z,{style:{height:30}}),b.createElement(O.Z,{style:{height:40}}),b.createElement(O.Z,{style:{height:80}}),b.createElement(O.Z,{style:{height:50}}),b.createElement(O.Z,{style:{height:60}}),b.createElement(O.Z,{style:{height:20}}),b.createElement(O.Z,{style:{height:70}})))))),b.createElement("h2",{className:"example-title"},"Properties"),b.createElement(T.Z,{data:w}))}}]),o}(b.Component)},29036:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67154),a=n.n(r),o=n(6479),l=n.n(o),c=n(34575),i=n.n(c),s=n(93913),u=n.n(s),p=n(2205),f=n.n(p),d=n(78585),m=n.n(d),h=n(29754),y=n.n(h),b=n(59713),g=n.n(b),v=n(37699),C=n(45697),O=n.n(C),E=n(41844),T=n.n(E),w=n(35720),Z=n(96509),R=n(87712),P=n(81540);var k=function(e){f()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=y()(t);if(n){var a=y()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return m()(this,e)});function o(e){i()(this,o);for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return r.call.apply(r,[this,e].concat(n))}return u()(o,[{key:"render",value:function(){var e=this.props,t=e.className,n=l()(e,["className"]);return v.createElement(w.Z,a()({},n,{className:T()("button-radio-group",g()({},t,t))}))}}]),o}(v.Component);g()(k,"Theme",R.Z),k.propTypes={className:O().string,style:O().object,theme:O().oneOf(P.Z.enumerateValue(R.Z)),parentEl:O().object,selectTheme:O().oneOf(P.Z.enumerateValue(R.Z)),data:O().arrayOf(O().oneOfType([O().shape({className:O().string,style:O().object,theme:O().oneOf(P.Z.enumerateValue(R.Z)),value:O().oneOfType([O().string,O().number]),text:O().oneOfType([O().string,O().number]),desc:O().oneOfType([O().string,O().number]),title:O().oneOfType([O().string,O().number]),disabled:O().oneOfType([O().bool,O().func]),isLoading:O().bool,disableTouchRipple:O().bool,iconCls:O().string,rightIconCls:O().string,tip:O().oneOfType([O().string,O().number]),tipPosition:O().oneOf(P.Z.enumerateValue(Z.Z.Position)),rippleDisplayCenter:O().bool,itemRenderer:O().func,onClick:O().func}),O().string,O().number])),value:O().any,idField:O().string,valueField:O().string,displayField:O().string,descriptionField:O().string,disabled:O().oneOfType([O().bool,O().func]),itemDisabled:O().oneOfType([O().bool,O().func]),disableTouchRipple:O().bool,isLoading:O().bool,autoSelect:O().bool,indeterminateCallback:O().func,radioUncheckedIconCls:O().string,radioCheckedIconCls:O().string,checkboxUncheckedIconCls:O().string,checkboxCheckedIconCls:O().string,checkboxIndeterminateIconCls:O().string,renderer:O().func,onItemClick:O().func,onChange:O().func},k.defaultProps={parentEl:document.body,theme:R.Z.DEFAULT,activatedTheme:R.Z.PRIMARY,selectTheme:R.Z.DEFAULT,idField:"id",valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,itemDisabled:!1,disableTouchRipple:!1,autoSelect:!0,checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square"};const x=k},98382:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(34575),a=n.n(r),o=n(93913),l=n.n(o),c=n(81506),i=n.n(c),s=n(2205),u=n.n(s),p=n(78585),f=n.n(p),d=n(29754),m=n.n(d),h=n(59713),y=n.n(h),b=n(37699),g=n(45697),v=n.n(g),C=n(79958),O=n(41844),E=n.n(O);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){u()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m()(t);if(n){var a=m()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return f()(this,e)});function o(e){var t;a()(this,o);for(var n=arguments.length,l=new Array(n>1?n-1:0),c=1;c<n;c++)l[c-1]=arguments[c];return t=r.call.apply(r,[this,e].concat(l)),y()(i()(t),"initTempColumns",(function(e){if(e&&!(e.length<1)){for(var t=[],n=0;n<e;n++)t.push({heightCount:0,children:[]});return t}})),y()(i()(t),"getMinHeightColumn",(function(e){if(e&&!(e.length<1)){for(var t=e[0],n=0,r=t.heightCount,a=1,o=e.length;a<o;a++)e[a].heightCount<r&&(t=e[a],n=a,r=e[a].heightCount);return{item:t,index:n,vslue:r}}})),y()(i()(t),"generateTempColumns",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props,n=e.column,r=e.separator,a=e.children,o=t.initTempColumns(n);return b.Children.forEach(a,(function(e,n){var a=(0,C.findDOMNode)(t.refs["waterfallTempChild".concat(n)]);if(a){var l=parseInt(getComputedStyle(a).height);if(!isNaN(l)){var c=t.getMinHeightColumn(o);if(c){var i=c.item,s=c.index,u=i.children.length;i.heightCount+=l+(0===u?0:r),i.children.push((0,b.cloneElement)(e,{key:"".concat(s,"-").concat(u),style:w(w({},e.props.style),{},{marginTop:0===u?0:r})}))}}}})),o})),y()(i()(t),"renderChildren",(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props,n=e.column,r=t.generateTempColumns(e),a={width:"".concat(100/n,"%")},o=[],l=0;l<n;l++)o.push(b.createElement("div",{key:l,className:"waterfall-column",style:a},r[l]&&r[l].children));return o})),t.renderTimeout=null,t.state={dom:null},t}return l()(o,[{key:"componentDidMount",value:function(){this.setState({dom:this.renderChildren()})}},{key:"componentDidUpdate",value:function(e){var t=this;this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){t.setState({dom:t.renderChildren(e)})}),0)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.state.dom;return b.createElement("div",{className:E()("waterfall",y()({},n,n)),style:r},a,b.createElement("div",{className:"waterfall-hidden"},t&&t.map((function(e,t){return(0,b.cloneElement)(e,{key:t,ref:"waterfallTempChild".concat(t)})}))))}}]),o}(b.Component);Z.propTypes={children:v().any,className:v().string,style:v().object,column:v().number,separator:v().number},Z.defaultProps={column:3,separator:10};const R=Z}}]);
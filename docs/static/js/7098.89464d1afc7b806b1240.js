(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[7098],{29250:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(23645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const l=r},22356:(e,t,a)=>{"use strict";a.d(t,{Z:()=>C});var n=a(34575),r=a.n(n),l=a(93913),o=a.n(l),c=a(81506),s=a.n(c),u=a(2205),i=a.n(u),p=a(78585),f=a.n(p),d=a(29754),m=a.n(d),h=a(59713),v=a.n(h),y=a(37699),b=a(45697),g=a.n(b),E=a(21940),w=a(93379),O=a.n(w),N=a(29250);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}O()(N.Z,{insert:"head",singleton:!1}),N.Z.locals;var k=function(e){i()(l,e);var t,a,n=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(a){var r=m()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f()(this,e)});function l(e){var t;return r()(this,l),t=n.call(this,e),v()(s()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(R({name:a},t.props.data[a]));return e})),t}return o()(l,[{key:"render",value:function(){return y.createElement("div",{className:"prop-type-desc-table-wrapper"},y.createElement(E.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),l}(y.Component);k.propTypes={data:g().object};const C=k},41566:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>N});var n=a(34575),r=a.n(n),l=a(93913),o=a.n(l),c=a(81506),s=a.n(c),u=a(2205),i=a.n(u),p=a(78585),f=a.n(p),d=a(29754),m=a.n(d),h=a(59713),v=a.n(h),y=a(37699),b=a(68874),g=a(24471),E=a(50704),w=a(22356);const O=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"value":{"type":"PropTypes.number","desc":"The value of Rate component."},"allowHalf":{"type":"PropTypes.bool","desc":"If true,the Rate will have half star."},"allowClear":{"type":"PropTypes.bool","desc":"If true,the Rate component will be clear the value when double click.","default":"true"},"disabled":{"type":"PropTypes.bool","desc":"If true,the Rate component will be disabled.","default":"false"},"count":{"type":"PropTypes.number","default":"5"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the rate change."}}');const N=function(e){i()(l,e);var t,a,n=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(a){var r=m()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f()(this,e)});function l(e){var t;return r()(this,l),t=n.call(this,e),v()(s()(t),"onChangeHandle",(function(e){t.setState({value:e})})),v()(s()(t),"onChangeHandle2",(function(e){t.setState({value2:e})})),t.state={value:3,value2:3.5},t}return o()(l,[{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.value2;return y.createElement("div",{className:"example rate-examples"},y.createElement("h2",{className:"example-title"},"Rate"),y.createElement("p",null,"The ",y.createElement("span",null,"Rate")," is used to evaluate something."),y.createElement("h2",{className:"example-title"},"Examples"),y.createElement(g.Z,null,y.createElement(E.Z,{className:"example-header",title:"Basic"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("p",null,"A simple ",y.createElement("code",null,"Rate")," example."),y.createElement(b.Z,{value:a,onChange:function(t){e.onChangeHandle(t)}})))),y.createElement(g.Z,null,y.createElement(E.Z,{className:"example-header",title:"With allowHalf"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("p",null,"Set the ",y.createElement("code",null,"allowHalf")," property to display half star."),y.createElement(b.Z,{value:n,allowHalf:!0,onChange:function(t){e.onChangeHandle2(t)}})))),y.createElement(g.Z,null,y.createElement(E.Z,{className:"example-header",title:"With disabled"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("p",null,"Set the ",y.createElement("code",null,"disabled")," property to disabled the ",y.createElement("code",null,"Rate")," component."),y.createElement(b.Z,{value:n,allowHalf:!0,disabled:!0,onChange:function(t){e.onChangeHandle2(t)}})))),y.createElement("h2",{className:"example-title"},"Properties"),y.createElement(w.Z,{data:O}))}}]),l}(y.Component)},68874:(e,t,a)=>{"use strict";a.d(t,{Z:()=>j});var n=a(34575),r=a.n(n),l=a(81506),o=a.n(l),c=a(93913),s=a.n(c),u=a(2205),i=a.n(u),p=a(78585),f=a.n(p),d=a(29754),m=a.n(d),h=a(59713),v=a.n(h),y=a(37699),b=a(45697),g=a.n(b),E=a(41844),w=a.n(E),O=a(72);const N=function(e,t,a){var n=[];if(t)for(var r=0;r<a;r++)r<=e-1?n.push("full"):r<e&&r>e-1?n.push("full-zero"):n.push("zero");else for(var l=0;l<a;l++)l<e?n.push("full"):n.push("zero");return n};var P=a(19605);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C=function(e){i()(l,e);var t,a,n=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(a){var r=m()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f()(this,e)});function l(e){var t;r()(this,l);for(var a=arguments.length,c=new Array(a>1?a-1:0),s=1;s<a;s++)c[s-1]=arguments[s];return t=n.call.apply(n,[this,e].concat(c)),v()(o()(t),"createItems",(function(e){var a=t.props,n=a.allowHalf,r=a.count;return N(e,n,r)})),v()(o()(t),"handleTriggerEvent",(function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1})),v()(o()(t),"handleMouseMove",(function(e){if(!t.props.disabled){var a=t.handleTriggerEvent(e.target,t.wrapperEl),n=t.props.value;a?"I"===e.target.nodeName?n=e.target.getAttribute("data-key"):"DIV"!==e.target.nodeName||-1===e.target.className.indexOf("half-star")&&-1===e.target.className.indexOf("star")||(n=e.target.getAttribute("data-key")):n=t.props.value;var r=t.createItems(n);t.setState({items:r})}})),v()(o()(t),"handleSelect",(function(e,a){a.preventDefault();var n=t.props,r=n.disabled,l=n.allowClear;r||(e===t.state.value&&l&&(e=0),t.setState({value:e},(function(){t.props.onChange&&t.props.onChange(e)})))})),t.wrapper=(0,y.createRef)(),t.wrapperEl=null,t.state={value:0,items:[]},t}return s()(l,null,[{key:"getDerivedStateFromProps",value:function(e,t){var a=P.Z.getDerivedState(e,t,"value");return{prevProps:e,value:a,items:N(a,e.allowHalf,e.count)}}}]),s()(l,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current;var e=this.props.value,t=this.createItems(e);this.setState({value:e,items:t}),O.Z.addEvent(document,"mousemove",this.handleMouseMove)}},{key:"componentWillUnmount",value:function(){O.Z.removeEvent(document,"mousemove",this.handleMouseMove)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.style,r=t.allowHalf,l=t.disabled,o=t.count,c=this.state.items;return y.createElement("div",{ref:this.wrapper,className:w()("rate",v()({},a,a)),style:k({width:30*o},n)},c&&c.map((function(t,a){return r?y.createElement("div",{key:a,className:"half-star ".concat(l?"disabled":""),"data-key":a+1},y.createElement("div",{className:"half-star-left","data-key":a+.5,onClick:function(t){e.handleSelect(a+.5,t)}},y.createElement("i",{className:"fas fa-star-half ".concat("full"==t||"full-zero"==t?"full":"zero"," ").concat(l?"disabled":""),"data-key":a+.5})),y.createElement("div",{className:"half-star-right","data-key":a+1,onClick:function(t){e.handleSelect(a+1,t)}},y.createElement("i",{className:"fas fa-star-half ".concat("zero"==t||"full-zero"==t?"zero":"full"," ").concat(l?"disabled":""),"data-key":a+1}))):y.createElement("div",{key:a,className:"star ".concat(l?"disabled":""),"data-key":a+1},y.createElement("i",{className:"fas fa-star ".concat("zero"==t?"zero":"full"," ").concat(l?"disabled":""),"data-key":a+1,onClick:function(t){e.handleSelect(a+1,t)}}))})))}}]),l}(y.Component);C.propTypes={className:g().string,style:g().object,value:g().number,allowHalf:g().bool,allowClear:g().bool,disabled:g().bool,count:g().number,onChange:g().func},C.defaultProps={allowClear:!0,count:5,defaultValue:0,disabled:!1};const j=C}}]);
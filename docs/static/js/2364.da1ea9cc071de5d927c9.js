(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[2364],{59141:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}\n",""]);const l=a},65121:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".flash-number-examples .field-group>*{display:inline-block;vertical-align:middle}\n",""]);const l=a},1116:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(6610),a=r(5991),l=r(63349),i=r(10379),s=r(46070),u=r(77608),c=r(96156),o=r(37699),p=r(45697),m=r.n(p),f=r(82996),d=r(93379),h=r.n(d),v=r(59141);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}h()(v.Z,{insert:"head",singleton:!1}),v.Z.locals;var b=function(e){(0,i.Z)(m,e);var t,r,p=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var a=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){var t;return(0,n.Z)(this,m),t=p.call(this,e),(0,c.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(Z({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(m,[{key:"render",value:function(){return o.createElement("div",{className:"prop-type-desc-table-wrapper"},o.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),m}(o.Component);b.propTypes={data:m().object};const E=b},9869:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var n=r(6610),a=r(5991),l=r(63349),i=r(10379),s=r(46070),u=r(77608),c=r(96156),o=r(37699),p=r(11669),m=r(50631),f=r(24471),d=r(50704),h=r(1116);const v=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"initValue":{"type":"PropTypes.number","desc":"Initial result value.","default":"0"},"value":{"type":"PropTypes.number","desc":"Result value.","default":"0"},"flashDuration":{"type":"PropTypes.number","desc":"Animation execution time.","default":"450"}}');var y=r(93379),Z=r.n(y),b=r(65121);Z()(b.Z,{insert:"head",singleton:!1}),b.Z.locals;const E=function(e){(0,i.Z)(Z,e);var t,r,y=(t=Z,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var a=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function Z(e){var t;return(0,n.Z)(this,Z),t=y.call(this,e),(0,c.Z)((0,l.Z)(t),"changeHandleValue1",(function(e){t.setState({value1:e})})),(0,c.Z)((0,l.Z)(t),"changeHandleValue2",(function(e){t.setState({value2:e})})),t.state={value1:"",value2:""},t}return(0,a.Z)(Z,[{key:"render",value:function(){var e=this.state,t=e.value1,r=e.value2;return o.createElement("div",{className:"example flash-number-examples"},o.createElement("h2",{className:"example-title"},"FlashNumber"),o.createElement("p",null,"A ",o.createElement("span",null,"FlashNumber")," is a numerical calculation animation."),o.createElement("h2",{className:"example-title"},"Examples"),o.createElement(f.Z,null,o.createElement(d.Z,{className:"example-header",title:"Basic"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("div",{className:"examples-wrapper"},o.createElement("p",null,o.createElement("code",null,"FlashNumber")," simple example."),o.createElement("div",{className:"field-group"},o.createElement(p.Z,{type:"number",value:t,onChange:this.changeHandleValue1}),o.createElement("span",null,"  X 2 = "),o.createElement(m.Z,{initValue:0,value:2*t})))))),o.createElement(f.Z,null,o.createElement(d.Z,{className:"example-header",title:"With flashTime"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("div",{className:"examples-wrapper"},o.createElement("p",null,"Set the ",o.createElement("code",null,"flashTime")," property to reset animation execution time."),o.createElement("div",{className:"field-group"},o.createElement(p.Z,{type:"number",value:r,onChange:this.changeHandleValue2}),o.createElement("span",null,"  X 3 = "),o.createElement(m.Z,{initValue:0,flashTime:1e3,value:3*r})))))),o.createElement("h2",{className:"example-title"},"Properties"),o.createElement(h.Z,{data:v}))}}]),Z}(o.Component)},50631:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(6610),a=r(5991),l=r(63349),i=r(10379),s=r(46070),u=r(77608),c=r(96156),o=r(37699),p=r(45697),m=r.n(p),f=r(41844),d=r.n(f);var h=function(e){(0,i.Z)(m,e);var t,r,p=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var a=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){var t;(0,n.Z)(this,m);for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return t=p.call.apply(p,[this,e].concat(a)),(0,c.Z)((0,l.Z)(t),"init",(function(){t.animationFrameId&&cancelAnimationFrame(t.animationFrameId),t.startTime=void 0,t.initValue=t.currentValue})),(0,c.Z)((0,l.Z)(t),"step",(function(e){if(t.startTime){if(t.wrapperEl){var r=t.initValue+Math.round((t.props.value-t.initValue)*(e-t.startTime)/t.flashDuration);t.props.value<t.initValue?t.wrapperEl.innerHTML=t.currentValue=r>t.props.value?r:t.props.value:t.props.value>t.initValue&&(t.wrapperEl.innerHTML=t.currentValue=r<t.props.value?r:t.props.value)}}else t.startTime=e;t.currentValue!=t.props.value?t.animationFrameId=requestAnimationFrame(t.step):t.animationFrameId=void 0})),t.flashDuration=e.flashDuration,t.startTime,t.initValue=e.initValue,t.animationFrameId,t.currentValue=0,t.wrapper=(0,o.createRef)(),t.wrapperEl=null,t}return(0,a.Z)(m,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,this.props.value!=this.initValue&&(this.animationFrameId=requestAnimationFrame(this.step))}},{key:"componentDidUpdate",value:function(e,t,r){e.value!==this.props.value&&(this.init(),this.animationFrameId=requestAnimationFrame(this.step)),e.flashDuration!==this.flashDuration&&(this.flashDuration=this.props.flashDuration)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.style;return o.createElement("span",{ref:this.wrapper,className:d()("flash-number",(0,c.Z)({},t,t)),style:r},this.currentValue)}}]),m}(o.Component);h.propTypes={className:m().string,style:m().object,initValue:m().number,value:m().number,flashDuration:m().number},h.defaultProps={initValue:0,value:0,flashDuration:450};const v=h}}]);
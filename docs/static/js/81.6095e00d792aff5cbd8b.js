(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{466:function(e,a,t){(e.exports=t(80)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},467:function(e,a,t){var n=t(466);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};t(79)(n,l);n.locals&&(e.exports=n.locals)},468:function(e,a,t){"use strict";var n=t(4),l=t.n(n),r=t(12),i=t.n(r),s=t(7),u=t.n(s),o=t(11),c=t.n(o),p=t(5),m=t.n(p),h=t(6),d=t.n(h),v=t(1),f=t.n(v),y=t(0),E=t.n(y),b=t(469),g=(t(467),function(e){function a(e){u()(this,a);var t=m()(this,(a.__proto__||i()(a)).call(this,e));return t.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=t.generateData.bind(t),t}return d()(a,e),c()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(l()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return f.a.createElement("div",{className:"prop-type-desc-table-wrapper"},f.a.createElement(b.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(v.Component));g.propTypes={data:E.a.object},g.defaultProps={data:null},a.a=g},513:function(e,a,t){"use strict";var n=t(8),l=t.n(n),r=t(12),i=t.n(r),s=t(7),u=t.n(s),o=t(11),c=t.n(o),p=t(5),m=t.n(p),h=t(6),d=t.n(h),v=t(1),f=t.n(v),y=t(0),E=t.n(y),b=t(9),g=t.n(b),V=function(e){function a(e){var t;u()(this,a);for(var n=arguments.length,l=Array(n>1?n-1:0),r=1;r<n;r++)l[r-1]=arguments[r];var s=m()(this,(t=a.__proto__||i()(a)).call.apply(t,[this,e].concat(l)));return s.flashDuration=e.flashDuration,s.startTime,s.initValue=e.initValue,s.animationFrameId,s.currentValue=0,s.init=s.init.bind(s),s.step=s.step.bind(s),s}return d()(a,e),c()(a,[{key:"init",value:function(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),this.startTime=void 0,this.initValue=this.currentValue}},{key:"step",value:function(e){if(this.startTime){var a=this.initValue+Math.round((this.props.value-this.initValue)*(e-this.startTime)/this.flashDuration);this.props.value<this.initValue?this.refs.el.innerHTML=this.currentValue=a>this.props.value?a:this.props.value:this.props.value>this.initValue&&(this.refs.el.innerHTML=this.currentValue=a<this.props.value?a:this.props.value)}else this.startTime=e;this.currentValue!=this.props.value?this.animationFrameId=requestAnimationFrame(this.step):this.animationFrameId=void 0}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&(this.init(),this.animationFrameId=requestAnimationFrame(this.step)),e.flashDuration!==this.flashDuration&&(this.flashDuration=e.flashDuration)}},{key:"componentDidMount",value:function(){this.props.value!=this.initValue&&(this.animationFrameId=requestAnimationFrame(this.step))}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style,n=g()("flash-number",l()({},a,a));return f.a.createElement("span",{ref:"el",className:n,style:t},this.currentValue)}}]),a}(v.Component);V.propTypes={className:E.a.string,style:E.a.object,initValue:E.a.number,value:E.a.number,flashDuration:E.a.number},V.defaultProps={className:"",style:null,initValue:0,value:0,flashDuration:450};var N=V;t.d(a,"a",function(){return N})},723:function(e,a,t){(e.exports=t(80)(!1)).push([e.i,".flash-number-examples .field-group > * {\n  display: inline-block;\n  vertical-align: middle; }\n",""])},724:function(e,a,t){var n=t(723);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};t(79)(n,l);n.locals&&(e.exports=n.locals)},725:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},initValue:{type:"PropTypes.number",desc:"Initial result value.",default:"0"},value:{type:"PropTypes.number",desc:"Result value.",default:"0"},flashDuration:{type:"PropTypes.number",desc:"Animation execution time.",default:"450"}}},875:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return V});var n=t(12),l=t.n(n),r=t(7),i=t.n(r),s=t(11),u=t.n(s),o=t(5),c=t.n(o),p=t(6),m=t.n(p),h=t(1),d=t.n(h),v=t(157),f=t(513),y=t(471),E=t(470),b=t(468),g=t(725),V=(t(724),function(e){function a(e){i()(this,a);var t=c()(this,(a.__proto__||l()(a)).call(this,e));return t.state={value1:"",value2:""},t.changeHandleValue1=t.changeHandleValue1.bind(t),t.changeHandleValue2=t.changeHandleValue2.bind(t),t}return m()(a,e),u()(a,[{key:"changeHandleValue1",value:function(e){this.setState({value1:e})}},{key:"changeHandleValue2",value:function(e){this.setState({value2:e})}},{key:"render",value:function(){var e=this.state,a=e.value1,t=e.value2;return d.a.createElement("div",{className:"example flash-number-examples"},d.a.createElement("h2",{className:"example-title"},"FlashNumber"),d.a.createElement("p",null,"A ",d.a.createElement("span",null,"FlashNumber")," is a numerical calculation animation."),d.a.createElement("h2",{className:"example-title"},"Examples"),d.a.createElement(y.a,null,d.a.createElement(E.a,{className:"example-header",title:"Basic"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"examples-wrapper"},d.a.createElement("p",null,d.a.createElement("code",null,"FlashNumber")," simple example."),d.a.createElement("div",{className:"field-group"},d.a.createElement(v.a,{type:"number",value:a,onChange:this.changeHandleValue1}),d.a.createElement("span",null,"  X 2 = "),d.a.createElement(f.a,{initValue:0,value:2*a})))))),d.a.createElement(y.a,null,d.a.createElement(E.a,{className:"example-header",title:"With flashTime"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"examples-wrapper"},d.a.createElement("p",null,"Set the ",d.a.createElement("code",null,"flashTime")," property to reset animation execution time."),d.a.createElement("div",{className:"field-group"},d.a.createElement(v.a,{type:"number",value:t,onChange:this.changeHandleValue2}),d.a.createElement("span",null,"  X 3 = "),d.a.createElement(f.a,{initValue:0,flashTime:1e3,value:3*t})))))),d.a.createElement("h2",{className:"example-title"},"Properties"),d.a.createElement(b.a,{data:g}))}}]),a}(h.Component))}}]);
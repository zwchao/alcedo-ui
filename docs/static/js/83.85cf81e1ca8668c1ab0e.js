(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{475:function(e,t,a){(e.exports=a(82)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},476:function(e,t,a){var l=a(475);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(81)(l,n);l.locals&&(e.exports=l.locals)},477:function(e,t,a){"use strict";var l=a(4),n=a.n(l),s=a(12),r=a.n(s),i=a(7),o=a.n(i),c=a(11),d=a.n(c),h=a(5),m=a.n(h),p=a(6),u=a.n(p),f=a(1),v=a.n(f),g=a(0),E=a.n(g),y=a(478),w=(a(476),function(e){function t(e){o()(this,t);var a=m()(this,(t.__proto__||r()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return u()(t,e),d()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(n()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));w.propTypes={data:E.a.object},w.defaultProps={data:null},t.a=w},545:function(e,t,a){"use strict";var l=a(4),n=a.n(l),s=a(8),r=a.n(s),i=a(12),o=a.n(i),c=a(7),d=a.n(c),h=a(11),m=a.n(h),p=a(5),u=a.n(p),f=a(6),v=a.n(f),g=a(1),E=a.n(g),y=a(0),w=a.n(y),x=a(9),b=a.n(x),N=a(17),P=function(e){function t(e){var a;d()(this,t);for(var l=arguments.length,n=Array(l>1?l-1:0),s=1;s<l;s++)n[s-1]=arguments[s];var r=u()(this,(a=t.__proto__||o()(t)).call.apply(a,[this,e].concat(n)));return r.state={left:0,right:0,shadow:"",tip:""},r.getPosition=r.getPosition.bind(r),r.downHandle=r.downHandle.bind(r),r.getElementLeft=r.getElementLeft.bind(r),r.clickHandle=r.clickHandle.bind(r),r.getNearest=r.getNearest.bind(r),r.overHandle=r.overHandle.bind(r),r.outHandle=r.outHandle.bind(r),r.moveHandle=r.moveHandle.bind(r),r.upHandle=r.upHandle.bind(r),r.changeHandle=r.changeHandle.bind(r),r}return v()(t,e),m()(t,[{key:"getPosition",value:function(e){var t=document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.scrollLeft||document.body.scrollLeft;return{x:e.clientX+a,y:e.clientY+t}}},{key:"getElementLeft",value:function(e){for(var t=e.offsetLeft,a=e.offsetParent;null!==a;)t+=a.offsetLeft,a=a.offsetParent;return t}},{key:"downHandle",value:function(e){return(e.srcElement?e.srcElement:e.target).getAttribute("class").indexOf("left")>-1?this.setState({shadow:"left"}):this.setState({shadow:"right"}),!1}},{key:"moveHandle",value:function(e){var t=this;if(this.state.shadow){var a=e||event,l=this.getElementLeft(this.refs.sliderBox),n=this.props.width>this.getPosition(a).x-l?this.getPosition(a).x-l:this.props.width;n=n>0?n:0,this.props.ruler&&(n=this.getNearest(n)),"left"===this.state.shadow?this.setState({left:n},function(){t.changeHandle()}):this.setState({right:n},function(){t.changeHandle()})}}},{key:"changeHandle",value:function(){var e=this.props,t=e.scale,a=e.decimalPlaces,l=e.width,n=this.state,s=n.left,r=n.right,i=parseFloat(s/l*(t[t.length-1]-t[0])+t[0]).toFixed(a),o=parseFloat(r/l*(t[t.length-1]-t[0])+t[0]).toFixed(a);this.props.onChange&&this.props.onChange(i,o)}},{key:"upHandle",value:function(){this.setState({shadow:""})}},{key:"overHandle",value:function(e){(e.srcElement?e.srcElement:e.target).getAttribute("class").indexOf("left")>-1?this.setState({tip:"left"}):this.setState({tip:"right"})}},{key:"outHandle",value:function(){this.setState({tip:""})}},{key:"clickHandle",value:function(e){var t=this,a=e||event,l=this.getElementLeft(this.refs.sliderBox),n=this.getPosition(a).x-l;this.props.ruler&&(n=this.getNearest(n)),Math.abs(this.state.left-n)>Math.abs(this.state.right-n)||!1===this.props.leftPoint?this.setState({right:n},function(){t.changeHandle()}):this.setState({left:n},function(){t.changeHandle()})}},{key:"getNearest",value:function(e){for(var t=this.props,a=t.width,l=t.ruler,n=a,s=0,r=0;r<l;r++){var i=Math.abs(e-r*a/(l-1));i<n&&(n=i,s=r)}return s*a/(l-1)}},{key:"componentDidMount",value:function(){this.setState({right:this.props.width/2}),N.a.addEvent(document,"mousemove",this.moveHandle),N.a.addEvent(document,"mouseup",this.upHandle),N.a.addEvent(this.refs.circleRight,"mouseover",this.overHandle),N.a.addEvent(this.refs.circleRight,"mouseout",this.outHandle),this.refs.circleLeft&&(N.a.addEvent(this.refs.circleLeft,"mouseover",this.overHandle),N.a.addEvent(this.refs.circleLeft,"mouseout",this.outHandle))}},{key:"componentWillUnmount",value:function(){N.a.removeEvent(document,"mousemove",this.moveHandle),N.a.removeEvent(document,"mouseup",this.upHandle),N.a.removeEvent(this.refs.circleRight,"mouseover",this.overHandle),N.a.removeEvent(this.refs.circleRight,"mouseout",this.outHandle),this.refs.circleLeft&&(N.a.removeEvent(this.refs.circleLeft,"mouseover",this.overHandle),N.a.removeEvent(this.refs.circleLeft,"mouseout",this.outHandle))}},{key:"render",value:function(){var e=this.props,t=e.leftPoint,a=e.scale,l=e.width,s=e.showScale,i=e.decimalPlaces,o=e.className,c=e.style,d=this.state,h=d.left,m=d.right,p=d.shadow,u=d.tip,f=b()("slider",r()({},o,o)),v=n()({},c,{width:l}),g={width:Math.abs(h-m),left:Math.min(h,m)},y={left:h},w={left:m},x=u||p?"":"hide",N="left"===p?"slider-shadow":"",P="right"===p?"slider-shadow":"",H=parseFloat(h/l*(a[a.length-1]-a[0])+a[0]).toFixed(i),S=parseFloat(m/l*(a[a.length-1]-a[0])+a[0]).toFixed(i);return E.a.createElement("div",{className:f,style:v},E.a.createElement("div",{ref:"sliderBox",className:"slider-box",onMouseDown:this.clickHandle},t?E.a.createElement("div",{ref:"circleLeft",className:"slider-circle slider-circle-left "+N,style:y,onMouseDown:this.downHandle}):null,E.a.createElement("div",{ref:"circleRight",className:"slider-circle slider-circle-right "+P,style:w,onMouseDown:this.downHandle}),E.a.createElement("div",{className:"slider-highlight",style:g}),"left"===p||"left"===u?E.a.createElement("div",{className:"slider-tip "+x,style:y},H):E.a.createElement("div",{className:"slider-tip "+x,style:w},S)),E.a.createElement("div",{className:"Slide-scale"},s?E.a.createElement("ul",null,a.map(function(e,t){var l={left:(e-a[0])/(a[a.length-1]-a[0])*100+"%"};return E.a.createElement("li",{style:l,key:t},e)})):null))}}]),t}(g.Component);P.propTypes={className:w.a.string,style:w.a.object,leftPoint:w.a.bool,width:w.a.number,scale:w.a.array,showScale:w.a.bool,ruler:w.a.number,decimalPlaces:w.a.number,onChange:w.a.func},P.defaultProps={className:"",style:null,leftPoint:!1,width:300,scale:[0,100],showScale:!1,decimalPlaces:0};var H=P;a.d(t,"a",function(){return H})},737:function(e,t,a){(e.exports=a(82)(!1)).push([e.i,".slider-examples .slider{margin:30px 0}",""])},738:function(e,t,a){var l=a(737);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(81)(l,n);l.locals&&(e.exports=l.locals)},739:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},leftPoint:{type:"PropTypes.bool",desc:"If true,the slider will have leftPoint.",default:"false"},width:{type:"PropTypes.number",desc:"The width of the slider.",default:"300"},scale:{type:"PropTypes.array",desc:"The size displayed on slider.",default:"[0, 100]"},showScale:{type:"PropTypes.bool",desc:"If true,the scale will have display.",default:"false"},ruler:{type:"PropTypes.number",desc:"The granularity the slider can step through values."},decimalPlaces:{type:"PropTypes.number",desc:"Decimal digits of tip.",default:"0"},onChange:{type:"PropTypes.func",desc:"Callback function fired when the slider change."}}},887:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return w});var l=a(12),n=a.n(l),s=a(7),r=a.n(s),i=a(11),o=a.n(i),c=a(5),d=a.n(c),h=a(6),m=a.n(h),p=a(1),u=a.n(p),f=a(545),v=a(480),g=a(479),E=a(477),y=a(739),w=(a(738),function(e){function t(e){r()(this,t);var a=d()(this,(t.__proto__||n()(t)).call(this,e));return a.change=a.change.bind(a),a}return m()(t,e),o()(t,[{key:"change",value:function(e,t){}},{key:"render",value:function(){return u.a.createElement("div",{className:"example slider-examples"},u.a.createElement("h2",{className:"example-title"},"Slider"),u.a.createElement("p",null,"A ",u.a.createElement("span",null,"Slider")," is an interface for users to input a value in a range. Sliders can be continuous or discrete."),u.a.createElement("h2",{className:"example-title"},"Examples"),u.a.createElement(v.a,null,u.a.createElement(g.a,{className:"example-header",title:"Slider Example"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("div",{className:"examples-wrapper"},u.a.createElement("p",null,"Slider simple default example."),u.a.createElement(f.a,null))))),u.a.createElement(v.a,null,u.a.createElement(g.a,{className:"example-header",title:"Slider Example"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("div",{className:"examples-wrapper"},u.a.createElement("p",null,"Set the leftPoint property to true for display leftPoint and the ruler property for the slider step through values."),u.a.createElement(f.a,{leftPoint:!0,ruler:10}))))),u.a.createElement(v.a,null,u.a.createElement(g.a,{className:"example-header",title:"Slider Example"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("div",{className:"examples-wrapper"},u.a.createElement("p",null,"Set the showScale property to true and the scale property for size displayed on slider."),u.a.createElement(f.a,{leftPoint:!0,scale:[0,50,80,100],showScale:!0}))))),u.a.createElement(v.a,null,u.a.createElement(g.a,{className:"example-header",title:"Slider Example"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("div",{className:"examples-wrapper"},u.a.createElement("p",null,"Set the decimalPlaces property for the decimal digits of tip."),u.a.createElement(f.a,{leftPoint:!1,scale:[2,5,7,10],showScale:!0,decimalPlaces:2}))))),u.a.createElement(v.a,null,u.a.createElement(g.a,{className:"example-header",title:"Slider Example"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("div",{className:"examples-wrapper"},u.a.createElement("p",null,"Set the width property for reset the slider width."),u.a.createElement(f.a,{leftPoint:!0,scale:[0,5,8,10],showScale:!0,decimalPlaces:1,width:600,tip:!0,onChange:this.change}))))),u.a.createElement("h2",{className:"example-title"},"Properties"),u.a.createElement(E.a,{data:y}))}}]),t}(p.Component))}}]);
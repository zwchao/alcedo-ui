(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{292:function(e,t,a){"use strict";var l=a(61),n=a.n(l),r=a(62),s=a.n(r),i=a(63),o=a.n(i),c=a(64),d=a.n(c),u=a(21),p=a.n(u),h=a(65),m=a.n(h),f=a(9),v=a.n(f),g=a(0),y=a.n(g),b=a(287),E=a.n(b),w=a(299);a(293);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e){function t(e){var a;return n()(this,t),a=o()(this,d()(t).call(this,e)),v()(p()(a),"generateData",(function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(x({name:t},a.props.data[t]));return e})),a}return m()(t,e),s()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(w.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(g.Component);S.propTypes={data:E.a.object},t.a=S},293:function(e,t,a){var l=a(294);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var n={insert:"head",singleton:!1};a(114)(l,n);l.locals&&(e.exports=l.locals)},294:function(e,t,a){(t=a(113)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},411:function(e,t,a){"use strict";var l=a(272),n=a.n(l),r=a(115),s=a.n(r),i=a(61),o=a.n(i),c=a(62),d=a.n(c),u=a(63),p=a.n(u),h=a(64),m=a.n(h),f=a(21),v=a.n(f),g=a(65),y=a.n(g),b=a(9),E=a.n(b),w=a(0),P=a.n(w),x=a(287),S=a.n(x),O=a(288),N=a.n(O),j=a(277),D=a.n(j),C=a(313),M=a(298);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){E()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=function(e){function t(e){var a,l;o()(this,t);for(var r=arguments.length,i=new Array(r>1?r-1:0),c=1;c<r;c++)i[c-1]=arguments[c];return l=p()(this,(a=m()(t)).call.apply(a,[this,e].concat(i))),E()(v()(l),"getPosition",(function(e){var t=document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.scrollLeft||document.body.scrollLeft;return{x:e.clientX+a,y:e.clientY+t}})),E()(v()(l),"getElementLeft",(function(e){if(!e)return 0;for(var t=e.offsetLeft,a=e.offsetParent;null!==a;)t+=a.offsetLeft,a=a.offsetParent;return t})),E()(v()(l),"handleDown",(function(e){if(!l.props.disabled)return(e.srcElement?e.srcElement:e.target).getAttribute("class").indexOf("left")>-1?l.setState({shadow:"left"}):l.setState({shadow:"right"}),!1})),E()(v()(l),"throttleMove",D()((function(e){l.handleMove(e)}),16)),E()(v()(l),"handleMove",(function(e){if(l.state.shadow){var t=e||event,a=l.getPosition(t).x-l.getElementLeft(l.sliderBoxEl),n=l.props.width>a?a:l.props.width;n=n>0?n:0,l.props.ruler&&(n=l.getNearest(n));var r=l.getValueFromPosition(n).toFixed(l.props.decimalPlaces);"left"===l.state.shadow?l.setState({left:r},(function(){l.handleChange(r,l.state.right)})):l.setState({right:r},(function(){l.handleChange(l.state.left,r)}))}})),E()(v()(l),"handleChange",(function(e,t){l.props.onChange&&l.props.onChange(e,t)})),E()(v()(l),"handleUp",(function(){l.setState({shadow:""},(function(){l.props.onBlur&&l.props.onBlur(l.state.left,l.state.right)}))})),E()(v()(l),"handleOver",(function(e){(e.srcElement||e.target).getAttribute("class").indexOf("left")>-1?l.setState({tip:"left"}):l.setState({tip:"right"})})),E()(v()(l),"handleOut",(function(){l.setState({tip:""})})),E()(v()(l),"handleClick",(function(e){if(!l.props.disabled){var t=e||event,a=l.getElementLeft(l.sliderBoxEl),n=l.getPosition(t).x-a,r=l.getPositionFromValue(l.state.left,l.state.right),s=r.leftPosition,i=r.rightPosition;if(l.props.ruler&&(n=l.getNearest(n)),Math.abs(s-n)>Math.abs(i-n)||!1===l.props.leftPoint){var o=l.getValueFromPosition(n).toFixed(l.props.decimalPlaces);l.setState({right:o},(function(){l.handleChange(l.state.left,o)}))}else{var c=l.getValueFromPosition(n).toFixed(l.props.decimalPlaces);l.setState({left:c},(function(){l.handleChange(c,l.state.right)}))}}})),E()(v()(l),"getNearest",(function(e){var t=l.props,a=t.width,n=t.ruler,r=t.scale,s=l.getScaleValueAndLabel(r)[0],i=s[0],o=s[s.length-1],c=Math.round(e*(o-i)/(a*n))*n/(o-i)*a;return c>a?a:c})),E()(v()(l),"getScaleValueAndLabel",(function(e){var t=[],a=[];return e.length>0&&e.forEach((function(e){t.push("object"===s()(e)?e.value:e),a.push("object"===s()(e)?e.label:e)})),[t,a]})),E()(v()(l),"getValueFromPosition",(function(e){var t=l.props,a=t.scale,r=t.width,s=l.getScaleValueAndLabel(a),i=n()(s,1)[0];return e/r*(i[i.length-1]-i[0])+i[0]})),E()(v()(l),"getPositionFromValue",(function(e,t){var a=l.props,r=a.scale,s=a.width,i=l.getScaleValueAndLabel(r),o=n()(i,1)[0],c=Math.min(o[0],o[o.length-1]),d=Math.max(o[0],o[o.length-1]),u=parseFloat(e||o[0]),p=parseFloat(t||o[0]);return p=p>d?d:p<c?c:p,{leftPosition:((u=u>d?d:u<c?c:u)-o[0])/(o[o.length-1]-o[0])*s,rightPosition:(p-o[0])/(o[o.length-1]-o[0])*s}})),l.sliderBox=Object(w.createRef)(),l.sliderBoxEl=null,l.circleLeft=Object(w.createRef)(),l.circleRight=Object(w.createRef)(),l.state={left:e.left||0,right:e.right||0,shadow:"",tip:""},l}return y()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.sliderBoxEl=this.sliderBox&&this.sliderBox.current,C.a.addEvent(document,"mousemove",this.throttleMove),C.a.addEvent(document,"mouseup",this.handleUp),C.a.addEvent(this.circleRight.current,"mouseover",this.handleOver),C.a.addEvent(this.circleRight.current,"mouseout",this.handleOut),C.a.addEvent(this.circleLeft.current,"mouseover",this.handleOver),C.a.addEvent(this.circleLeft.current,"mouseout",this.handleOut)}},{key:"componentWillUnmount",value:function(){C.a.removeEvent(document,"mousemove",this.throttleMove),C.a.removeEvent(document,"mouseup",this.handleUp),this.circleRight&&this.circleRight.current&&(C.a.removeEvent(this.circleRight.current,"mouseover",this.handleOver),C.a.removeEvent(this.circleRight.current,"mouseout",this.handleOut)),this.circleLeft&&this.circleLeft.current&&(C.a.removeEvent(this.circleLeft.current,"mouseover",this.handleOver),C.a.removeEvent(this.circleLeft.current,"mouseout",this.handleOut))}},{key:"render",value:function(){var e=this,t=this.props,a=t.leftPoint,l=t.showScalePoint,r=t.scale,s=t.width,i=t.showScale,o=t.decimalPlaces,c=t.className,d=t.style,u=t.disabled,p=this.state,h=p.left,m=p.right,f=p.shadow,v=p.tip,g=v||f?"":"hide",y=this.getScaleValueAndLabel(r),b=n()(y,2),w=b[0],x=b[1],S=this.getPositionFromValue(h,m),O=S.leftPosition,j=S.rightPosition;return P.a.createElement("div",{className:N()("slider",E()({},c,c)),style:k({},d,{width:s})},P.a.createElement("div",{ref:this.sliderBox,className:"slider-box ".concat(u?"disabled":""),onMouseDown:this.handleClick},l?w.map((function(t){var a=(t-w[0])/(w[w.length-1]-w[0])*s,l=Math.min(O,j),n=Math.max(O,j);return P.a.createElement("div",{className:"slider-circle fixed-circle ".concat(a<l||a>n?"disable-circle":""),style:{left:a},onMouseDown:e.handleDown})})):null,a?P.a.createElement("div",{ref:this.circleLeft,className:"slider-circle slider-circle-left ".concat("left"===f?"slider-shadow":""," ").concat(u?"disabled":""),style:{left:O},onMouseDown:this.handleDown}):null,P.a.createElement("div",{ref:this.circleRight,className:"slider-circle slider-circle-right ".concat("right"===f?"slider-shadow":""," ").concat(u?"disabled":""),style:{left:j},onMouseDown:this.handleDown}),P.a.createElement("div",{className:"slider-highlight ".concat(u?"disabled":""),style:{width:Math.abs(O-j),left:Math.min(O,j)}}),"left"===f||"left"===v?P.a.createElement("div",{className:"slider-tip ".concat(g),style:{left:O}},parseFloat(O/s*(w[w.length-1]-w[0])+w[0]).toFixed(o)):P.a.createElement("div",{className:"slider-tip ".concat(g),style:{left:j}},parseFloat(j/s*(w[w.length-1]-w[0])+w[0]).toFixed(o))),P.a.createElement("div",{className:"Slide-scale"},i?P.a.createElement("ul",null,x&&x.map((function(e,t){return P.a.createElement("li",{key:t,style:{left:(w[t]-w[0])/(w[w.length-1]-w[0])*100+"%"}},e)}))):null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,left:isFinite(e.left)?M.a.getDerivedState(e,t,"left"):t.left,right:isFinite(e.right)?M.a.getDerivedState(e,t,"right"):t.right}}}]),t}(w.Component);L.propTypes={className:S.a.string,style:S.a.object,disabled:S.a.bool,leftPoint:S.a.bool,width:S.a.number,scale:S.a.array,showScale:S.a.bool,showScalePoint:S.a.bool,ruler:S.a.number,decimalPlaces:S.a.number,onChange:S.a.func,onBlur:S.a.func},L.defaultProps={leftPoint:!1,showScalePoint:!1,width:300,scale:[0,100],showScale:!1,decimalPlaces:0};var F=L;a.d(t,"a",(function(){return F}))},575:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"disabled":{"type":"PropTypes.bool","desc":"If true,the slider will be disabled."},"leftPoint":{"type":"PropTypes.bool","desc":"If true,the slider will have leftPoint.","default":"false"},"width":{"type":"PropTypes.number","desc":"The width of the slider.","default":"300"},"scale":{"type":"PropTypes.array","desc":"The size displayed on slider.","default":"[0, 100]"},"showScale":{"type":"PropTypes.bool","desc":"If true,the scale will have display.","default":"false"},"showScalePoint":{"type":"PropTypes.bool","desc":"If true,the scale point will have display.","default":"false"},"ruler":{"type":"PropTypes.number","desc":"The granularity the slider can step through values."},"decimalPlaces":{"type":"PropTypes.number","desc":"Decimal digits of tip.","default":"0"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the slider change."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when the slider blur."}}')},576:function(e,t,a){var l=a(577);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var n={insert:"head",singleton:!1};a(114)(l,n);l.locals&&(e.exports=l.locals)},577:function(e,t,a){(t=a(113)(!1)).push([e.i,".slider-examples .slider {\n  margin: 30px 0; }\n",""]),e.exports=t},790:function(e,t,a){"use strict";a.r(t);var l=a(61),n=a.n(l),r=a(62),s=a.n(r),i=a(63),o=a.n(i),c=a(64),d=a.n(c),u=a(21),p=a.n(u),h=a(65),m=a.n(h),f=a(9),v=a.n(f),g=a(0),y=a.n(g),b=a(411),E=a(309),w=a(296),P=a(297),x=a(292),S=a(575),O=(a(576),function(e){function t(e){var a;return n()(this,t),a=o()(this,d()(t).call(this,e)),v()(p()(a),"changeHandler",(function(e,t){})),a.state={text:1},a}return m()(t,e),s()(t,[{key:"render",value:function(){var e=this;return y.a.createElement("div",{className:"example slider-examples"},y.a.createElement("h2",{className:"example-title"},"Slider"),y.a.createElement("p",null,"A ",y.a.createElement("span",null,"Slider")," is an interface for users to input a value in a range. Sliders can be continuous or discrete."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Slider simple default example."),y.a.createElement(b.a,{key:1,scale:[1,8],width:500,decimalPlaces:1,right:this.state.text,showScale:!0,onChange:function(t,a){e.setState({text:a})}}),y.a.createElement(E.a,{value:this.state.text,onChange:function(t){e.setState({text:t})}}))))),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the leftPoint property to true for display leftPoint and the ruler property for the slider step through values."),y.a.createElement(b.a,{key:2,initialScale:20,scale:[20,100],width:500,ruler:10}))))),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the showScale property to true and the scale property for size displayed on slider."),y.a.createElement(b.a,{key:3,leftPoint:!0,scale:[0,50,80,100],showScale:!0}))))),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the decimalPlaces property for the decimal digits of tip."),y.a.createElement(b.a,{key:4,leftPoint:!0,scale:[{value:4,label:"Current"},{value:3,label:"POS 3"},{value:2,label:"POS 2"},{value:1,label:"POS 1"}],initialScale:4.31,showScale:!0,showScalePoint:!0,decimalPlaces:2}))))),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the width property for reset the slider width."),y.a.createElement(b.a,{key:5,leftPoint:!0,scale:[0,5,8,10],showScale:!0,decimalPlaces:1,width:600,tip:!0,onChange:this.changeHandler}))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(x.a,{data:S}))}}]),t}(g.Component));t.default=O}}]);
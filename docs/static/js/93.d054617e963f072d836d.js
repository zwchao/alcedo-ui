(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{466:function(e,t,a){(e.exports=a(80)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},467:function(e,t,a){var n=a(466);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(79)(n,o);n.locals&&(e.exports=n.locals)},468:function(e,t,a){"use strict";var n=a(4),o=a.n(n),s=a(12),l=a.n(s),r=a(7),i=a.n(r),c=a(11),u=a.n(c),p=a(5),h=a.n(p),d=a(6),m=a.n(d),g=a(1),f=a.n(g),v=a(0),y=a.n(v),E=a(469),C=(a(467),function(e){function t(e){i()(this,t);var a=h()(this,(t.__proto__||l()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return m()(t,e),u()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(o()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return f.a.createElement("div",{className:"prop-type-desc-table-wrapper"},f.a.createElement(E.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(g.Component));C.propTypes={data:y.a.object},C.defaultProps={data:null},t.a=C},543:function(e,t,a){"use strict";var n=a(8),o=a.n(n),s=a(12),l=a.n(s),r=a(7),i=a.n(r),c=a(11),u=a.n(c),p=a(5),h=a.n(p),d=a(6),m=a.n(d),g=a(1),f=a.n(g),v=a(0),y=a.n(v),E=a(165),C=a.n(E),b=a(9),x=a.n(b),N=a(169),k=a(168),T=a(81),w=a(17),P=function(e){function t(e){var a;i()(this,t);for(var n=arguments.length,o=Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];var r=h()(this,(a=t.__proto__||l()(t)).call.apply(a,[this,e].concat(o)));return r.onChange=C()(function(e){r.changeText(e)},250),r.state={value:e.value,focus:!1,loading:e.loading},r.liHeight=40,r.maxHeight=401,r.inputHeight=50,r.borderWidth=1,r.changeText=r.changeText.bind(r),r.onChange=r.onChange.bind(r),r.onClick=r.onClick.bind(r),r.getClassName=r.getClassName.bind(r),r.onFocus=r.onFocus.bind(r),r}return m()(t,e),u()(t,[{key:"getClassName",value:function(e){for(var t=e.className,a=e.offsetParent;null!==a;)t+=a.className,a=a.offsetParent;return t}},{key:"changeText",value:function(e){var t=this,a=this.props.onChange;this.setState({value:e},function(){t.setState({loading:!0},function(){a&&a(e,!0)})})}},{key:"onFocus",value:function(){var e=this.props.onFocus;this.setState({focus:!0},function(){e&&e()})}},{key:"onClick",value:function(e){var t=this,a=this.props.onBlur,n=this.getClassName(e.target);if(n.indexOf("auto-complete-li")>-1){var o=this.props.onChange,s=e.srcElement?e.srcElement:e.target;this.setState({focus:!0},function(){o&&o(s.innerText,!1)})}else{if(n.indexOf("text-field")>-1)return!1;this.setState({focus:!1},function(){a&&a(t.state.value)})}}},{key:"componentWillReceiveProps",value:function(e){var t=this.state,a=t.value,n=t.loading;e.value===a&&e.loading===n||this.setState({value:e.value,loading:e.loading})}},{key:"componentDidMount",value:function(){w.a.addEvent(document,"click",this.onClick),this.triggerEl=a(33).findDOMNode(this.refs.trigger)}},{key:"componentWillUnmount",value:function(){w.a.removeEvent(document,"click",this.onClick)}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.className,n=e.style,s=e.placeholder,l=this.state,r=l.value,i=l.focus,c=l.loading,u=this.liHeight,p=this.maxHeight,h=this.inputHeight,d=this.borderWidth,m=x()("remote-auto-complete",o()({},a,a)),g=x()("auto-complete-inner",{focused:i}),v=c?50:t.length>0?t.length*u+d:0,y={height:v>p?p:v},E={height:h},C={height:u,lineHeight:u+"px"},b={height:h};return f.a.createElement("div",{className:m,style:n},f.a.createElement("div",{className:g,style:E},f.a.createElement(N.a,{ref:"trigger",style:b,value:r,onFocus:this.onFocus,placeholder:s,onChange:this.onChange}),f.a.createElement(T.a,{visible:i,triggerEl:this.triggerEl,hasTriangle:!1,style:{width:this.triggerEl&&getComputedStyle(this.triggerEl).width}},f.a.createElement("ul",{className:"auto-complete-list",style:y},c?f.a.createElement("li",{className:"auto-complete-li-loading"},f.a.createElement(k.a,{className:"loading",size:k.a.Size.DEFAULT})):t&&t.map(function(e){return f.a.createElement("li",{className:"auto-complete-li",key:e,style:C,title:e},e)})))))}}]),t}(g.Component);P.propTypes={className:y.a.string,style:y.a.object,value:y.a.string,data:y.a.array,loading:y.a.bool,placeholder:y.a.string,onChange:y.a.func,onBlur:y.a.func,onFocus:y.a.func},P.defaultProps={value:"",data:[],searchLength:1,loading:!1};var D=P;a.d(t,"a",function(){return D})},750:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},value:{type:"PropTypes.string",desc:"The value of input.",default:""},data:{type:"PropTypes.array",desc:"The options data.",default:"[]"},loading:{type:"PropTypes.bool",desc:"If true, the list is loading.",default:"false"},placeholder:{type:"PropTypes.string",desc:"The placeholder of input."},onChange:{type:"PropTypes.func",desc:"Callback function fired when value change."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when input blur."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when input focus."}}},888:function(e,t,a){"use strict";a.r(t);var n=a(12),o=a.n(n),s=a(7),l=a.n(s),r=a(11),i=a.n(r),c=a(5),u=a.n(c),p=a(6),h=a.n(p),d=a(1),m=a.n(d),g=a(543),f=a(471),v=a(470),y=a(468),E=a(750),C=function(e){function t(e){l()(this,t);var a=u()(this,(t.__proto__||o()(t)).call(this,e));return a.data=["test123456789123456789123456789123456789","test2","test3","derby1","derby2","derby3","test4","test5","test6","test7","test8","test9","test10","test11"],a.searchLength=2,a.state={chooseData:[],text:"",loading:!1},a.onChange=a.onChange.bind(a),a.onBlur=a.onBlur.bind(a),a}return h()(t,e),i()(t,[{key:"onChange",value:function(e,t){var a=this;this.timing&&clearTimeout(this.timing),e&&e.length>=this.searchLength&&t?this.timing=setTimeout(function(){var t=[];a.data.map(function(a){0===a.indexOf(e)&&t.push(a)}),a.setState({chooseData:t,text:e})},2e3):this.setState({chooseData:[],text:e})}},{key:"onBlur",value:function(e){this.setState({chooseData:[],text:e})}},{key:"render",value:function(){var e=this.state,t=e.chooseData,a=e.text,n=e.loading;return m.a.createElement("div",{className:"example auto-complete-examples"},m.a.createElement("h2",{className:"example-title"},"Remote Auto Complete"),m.a.createElement("p",null,"A ",m.a.createElement("span",null,"Remote Auto Complete")," is an interface to help users to complete their input."),m.a.createElement("h2",{className:"example-title"},"Examples"),m.a.createElement(f.a,null,m.a.createElement(v.a,{className:"example-header",title:"Remote Auto Complete Example"}),m.a.createElement("div",{className:"widget-content"},m.a.createElement("div",{className:"example-content"},m.a.createElement("div",{className:"examples-wrapper"},m.a.createElement("p",null,"Remote Auto Complete simple default example."),m.a.createElement(g.a,{data:t,onChange:this.onChange,value:a,onBlur:this.onBlur,loading:n}))))),m.a.createElement("h2",{className:"example-title"},"Properties"),m.a.createElement(y.a,{data:E}))}}]),t}(d.Component);t.default=C}}]);
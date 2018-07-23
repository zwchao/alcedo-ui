(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{423:function(e,a,n){"use strict";var t=n(9),l=n.n(t),s=n(110),i=n.n(s),r=n(111),o=n.n(r),c=n(112),p=n.n(c),d=n(113),m=n.n(d),u=n(114),g=n.n(u),h=n(0),v=n.n(h),f=n(427),E=(n(424),function(e){function a(e){o()(this,a);var n=m()(this,(a.__proto__||i()(a)).call(this,e));return n.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=n.generateData.bind(n),n}return g()(a,e),p()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(l()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(f.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(h.Component));E.defaultProps={data:null},a.a=E},424:function(e,a,n){var t=n(425);"string"==typeof t&&(t=[[e.i,t,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(185)(t,l);t.locals&&(e.exports=t.locals)},425:function(e,a,n){(e.exports=n(184)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},474:function(e,a,n){"use strict";var t,l,s=n(404),i=n.n(s),r=n(110),o=n.n(r),c=n(111),p=n.n(c),d=n(112),m=n.n(d),u=n(113),g=n.n(u),h=n(114),v=n.n(h),f=n(0),E=n.n(f),x=n(420),y=n.n(x),N=n(442),b=n(444),w=n(422),S=(n(421),l=t=function(e){function a(e){var n;p()(this,a);for(var t=arguments.length,l=Array(t>1?t-1:0),s=1;s<t;s++)l[s-1]=arguments[s];var i=g()(this,(n=a.__proto__||o()(a)).call.apply(n,[this,e].concat(l)));return i.clickHandler=function(e){var a=i.props,n=a.disabled,t=a.isLoading,l=a.beforeChange,s=a.onClick;if(!n&&!t){s&&s(e);var r=!i.state.value,o=function(){i.setState({value:r},function(){var a=i.props.onChange;a&&a(r,e)})};l?!1!==l(r)&&o():o()}},i.state={value:!!e.value},i}return v()(a,e),m()(a,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:!!e.value})}},{key:"render",value:function(){var e,n=this.props,t=n.className,l=n.style,s=n.theme,r=n.disabled,o=n.isLoading,c=n.size,p=n.labelVisible,d=this.state.value,m=y()("switcher",(e={activated:d,small:c===a.Size.SMALL},i()(e,"theme-"+s,s),i()(e,t,t),e));return E.a.createElement("div",{className:m,style:l,disabled:r||o,onClick:this.clickHandler},p?E.a.createElement("div",{className:"switcher-label"}):null,E.a.createElement(N.a,{className:"switcher-slider-wrapper",disableTouchRipple:r||o},E.a.createElement("div",{className:"switcher-slider"},o?E.a.createElement(b.a,null):null)))}}]),a}(f.Component),t.Size={DEFAULT:"",SMALL:"small"},t.Theme=w.a,l);S.defaultProps={theme:w.a.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:S.Size.DEFAULT};var L=S;n.d(a,"a",function(){return L})},556:function(e,a,n){"use strict";var t=n(404),l=n.n(t),s=n(110),i=n.n(s),r=n(111),o=n.n(r),c=n(112),p=n.n(c),d=n(113),m=n.n(d),u=n(114),g=n.n(u),h=n(0),v=n.n(h),f=n(420),E=n.n(f),x=function(e){function a(e){var n;o()(this,a);for(var t=arguments.length,l=Array(t>1?t-1:0),s=1;s<t;s++)l[s-1]=arguments[s];var r=m()(this,(n=a.__proto__||i()(a)).call.apply(n,[this,e].concat(l)));return r.state={spanning:e.spanning},r}return g()(a,e),p()(a,[{key:"componentWillReceiveProps",value:function(e){var a=this,n=e.spanning,t=this.props.delay;n&&t&&!isNaN(Number(t))?this.delayTimeout=setTimeout(function(){return a.setState({spanning:n})},t):this.setState({spanning:n})}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"render",value:function(){var e,a=this.props,n=a.className,t=a.style,s=a.description,i=a.size,r=a.children,o=this.state.spanning,c=E()("span-loading",(e={},l()(e,"span-loading-"+i,i),l()(e,n,n),e));return v.a.createElement("div",{className:c,style:t},o?v.a.createElement("span",{className:"span-loading-dot "+(i||"")},v.a.createElement("i",null),v.a.createElement("i",null),v.a.createElement("i",null),v.a.createElement("i",null)):null,r,s?v.a.createElement("div",{className:"span-loading-text"},s):null)}}]),a}(h.Component);x.defaultProps={spanning:!0,tip:"",type:""};var y=x;n.d(a,"a",function(){return y})},816:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},spanning:{type:"PropTypes.bool",desc:"If true,will show a span loading animation.",default:"true"},tip:{type:"PropTypes.string",desc:"Set the tip text,there will be a description under the loading.",default:""},size:{type:"PropTypes.string",desc:"Set the size of loading,can use small or large."},delay:{type:"PropTypes.number",desc:"Set the delay time of loading animation."}}},817:function(e,a,n){var t=n(818);"string"==typeof t&&(t=[[e.i,t,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(185)(t,l);t.locals&&(e.exports=t.locals)},818:function(e,a,n){(e.exports=n(184)(!1)).push([e.i,".span-loading-examples .example-span-loading {\n  text-align: center;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  padding: 30px 50px;\n  margin: 20px 0;\n  position: relative; }\n\n.span-loading-examples .span-loading-nested {\n  width: 100%; }\n  .span-loading-examples .span-loading-nested .span-loading-dot {\n    position: absolute;\n    top: calc(50% - 10px);\n    left: calc(50% - 10px);\n    z-index: 60; }\n\n.span-loading-examples .span-loading-info {\n  border: 1px solid #7eccf2;\n  background-color: white;\n  padding: 20px 0;\n  position: relative;\n  width: 100%; }\n  .span-loading-examples .span-loading-info.span-loading-blur {\n    overflow: hidden;\n    opacity: .7;\n    -webkit-filter: blur(0.5px);\n            filter: blur(0.5px); }\n  .span-loading-examples .span-loading-info .span-loading-message {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.55);\n    display: block;\n    margin-bottom: 10px; }\n  .span-loading-examples .span-loading-info .span-loading-content {\n    display: block; }\n\n.span-loading-examples .switcher-con {\n  padding: 30px 0 20px 10px; }\n  .span-loading-examples .switcher-con span {\n    float: left; }\n  .span-loading-examples .switcher-con .switcher {\n    float: left;\n    margin-left: 20px; }\n",""])},920:function(e,a,n){"use strict";n.r(a);var t=n(404),l=n.n(t),s=n(110),i=n.n(s),r=n(111),o=n.n(r),c=n(112),p=n.n(c),d=n(113),m=n.n(d),u=n(114),g=n.n(u),h=n(0),v=n.n(h),f=n(556),E=n(429),x=n(428),y=n(474),N=n(423),b=n(816),w=(n(817),function(e){function a(e){o()(this,a);var n=m()(this,(a.__proto__||i()(a)).call(this,e));return n.toggle=function(e,a){n.setState(l()({},"loading"+a,!n.state["loading"+a]))},n.state={loading1:!1,loading2:!1},n}return g()(a,e),p()(a,[{key:"render",value:function(){var e=this,a=this.state,n=a.loading1,t=a.loading2;return v.a.createElement("div",{className:"example span-loading-examples"},v.a.createElement("h2",{className:"example-title"},"SpanLoading"),v.a.createElement("p",null,v.a.createElement("span",null,"SpanLoading")," use to show pages and blocks loading status."),v.a.createElement("h2",{className:"example-title"},"Examples"),v.a.createElement(E.a,null,v.a.createElement(x.a,{className:"example-header",title:"SpanLoading Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"A simple SpanLoading example."),v.a.createElement(f.a,{spanning:!0})))),v.a.createElement(E.a,null,v.a.createElement(x.a,{className:"example-header",title:"With description"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"description")," property to add a description for SpanLoading."),v.a.createElement(f.a,{spanning:!0,description:"Loading..."})))),v.a.createElement(E.a,null,v.a.createElement(x.a,{className:"example-header",title:"With size"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"size")," property to small or large for different size SpanLoading."),v.a.createElement(f.a,{spanning:!0,size:"small"}),v.a.createElement(f.a,{spanning:!0}),v.a.createElement(f.a,{spanning:!0,size:"large"})))),v.a.createElement(E.a,null,v.a.createElement(x.a,{className:"example-header",title:"SpanLoading Inside Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Put SpanLoading inside a container."),v.a.createElement("div",{className:"example-span-loading"},v.a.createElement(f.a,{spanning:!0}))))),v.a.createElement(E.a,null,v.a.createElement(x.a,{className:"example-header",title:"SpanLoading nested Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"You can embed the contents directly into SpanLoading and change the existing containers to loaded states."),v.a.createElement(f.a,{spanning:n,className:"span-loading-nested"},v.a.createElement("div",{className:"span-loading-info "+(n?"span-loading-blur":"")},v.a.createElement("span",{className:"span-loading-message"},"Alert message title"),v.a.createElement("span",{className:"span-loading-description"},"Further details about the context of this alert."))),v.a.createElement("div",{className:"switcher-con"},v.a.createElement("span",null,"Loading state："),v.a.createElement(y.a,{value:n,onChange:function(a){e.toggle(a,1)}}))))),v.a.createElement(E.a,null,v.a.createElement(x.a,{className:"example-header",title:"With delay"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"delay")," property to delay the loading animation."),v.a.createElement(f.a,{spanning:t,delay:1e3,className:"span-loading-nested"},v.a.createElement("div",{className:"span-loading-info "+(t?"span-loading-blur":"")},v.a.createElement("span",{className:"span-loading-description"},"Delay the loading animation."))),v.a.createElement("div",{className:"switcher-con"},v.a.createElement("span",null,"Loading state："),v.a.createElement(y.a,{value:t,onChange:function(a){e.toggle(a,2)}}))))),v.a.createElement("h2",{className:"example-title"},"Properties"),v.a.createElement(N.a,{data:b}))}}]),a}(h.Component));a.default=w}}]);
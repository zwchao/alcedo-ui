(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{423:function(e,t,a){(e.exports=a(215)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},424:function(e,t,a){var n=a(423);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(214)(n,i);n.locals&&(e.exports=n.locals)},425:function(e,t,a){"use strict";var n=a(1),i=a.n(n),s=a(9),r=a.n(s),l=a(5),o=a.n(l),d=a(8),p=a.n(d),c=a(3),u=a.n(c),m=a(4),h=a.n(m),g=a(0),v=a.n(g),f=a(426),y=(a(424),function(e){function t(e){o()(this,t);var a=u()(this,(t.__proto__||r()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return h()(t,e),p()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(f.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(g.Component));y.defaultProps={data:null},t.a=y},459:function(e,t,a){"use strict";var n=a(2),i=a.n(n),s=a(9),r=a.n(s),l=a(5),o=a.n(l),d=a(8),p=a.n(d),c=a(3),u=a.n(c),m=a(4),h=a.n(m),g=a(0),v=a.n(g),f=a(7),y=a.n(f),w=a(156),E=a.n(w),b=function(e){function t(e){var a;o()(this,t);for(var n=arguments.length,i=Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];var l=u()(this,(a=t.__proto__||r()(t)).call.apply(a,[this,e].concat(i)));return l.progressTimeout=null,l.finishDuration=100,l.defaultHighlightStyle={width:0,transition:"width 0s"},l.state={highlightStyle:l.defaultHighlightStyle},l.setLoading=l.setLoading.bind(l),l.clearProgress=l.clearProgress.bind(l),l.enterHandler=l.enterHandler.bind(l),l.exitHandler=l.exitHandler.bind(l),l}return h()(t,e),p()(t,[{key:"setLoading",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.loadingProgress,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t[a],i=n.width,s=n.timeout,r={};r.width=i+"%",r.transition="width "+s+"ms linear 0ms",this.setState({highlightStyle:r},function(){a<t.length-1&&(e.clearProgress(),e.progressTimeout=setTimeout(function(){e.setLoading(t,a+1)},100===i?0:s))})}},{key:"clearProgress",value:function(){this.progressTimeout&&clearTimeout(this.progressTimeout)}},{key:"enterHandler",value:function(){var e=this;this.clearProgress(),this.setState({highlightStyle:this.defaultHighlightStyle},function(){e.setLoading()})}},{key:"exitHandler",value:function(){this.clearProgress(),this.setLoading([{width:100,timeout:this.finishDuration}])}},{key:"componentWillUnmonut",value:function(){this.clearProgress()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.visible,s=e.duration,r=e.showStripes,l=this.state.highlightStyle,o=y()("page-loading",i()({striped:r},t,t));return v.a.createElement(E.a,{in:n,timeout:{exit:s+this.finishDuration},classNames:"page-loading",onEnter:this.enterHandler,onExit:this.exitHandler},v.a.createElement("div",{className:o,style:a},v.a.createElement("div",{className:"page-loading-bar",style:l})))}}]),t}(g.Component);b.defaultProps={visible:!1,duration:250,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var x=b;a.d(t,"a",function(){return x})},539:function(e,t,a){(e.exports=a(215)(!1)).push([e.i,".page-loading-examples .example-content{position:relative;padding-left:0}.page-loading-examples .example-content .raised-button,.page-loading-examples .example-content>p{margin-left:30px}",""])},540:function(e,t,a){var n=a(539);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(214)(n,i);n.locals&&(e.exports=n.locals)},541:function(e){e.exports={className:{type:"PropTypes.string"},style:{type:"PropTypes.object"},visible:{type:"PropTypes.bool",default:"false"},duration:{type:"PropTypes.number",default:"250"},showStripes:{type:"PropTypes.bool",default:"true"}}},791:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return P});var n=a(2),i=a.n(n),s=a(9),r=a.n(s),l=a(5),o=a.n(l),d=a(8),p=a.n(d),c=a(3),u=a.n(c),m=a(4),h=a.n(m),g=a(0),v=a.n(g),f=a(459),y=a(427),w=a(428),E=a(429),b=a(425),x=a(541),P=(a(540),function(e){function t(e){o()(this,t);var a=u()(this,(t.__proto__||r()(t)).call(this,e));return a.loadingProgress=[{width:0,timeout:0},{width:80,timeout:200},{width:99,timeout:2e3}],a.state={visible1:!1,visible2:!1,visible3:!1},a.showLoading=a.showLoading.bind(a),a}return h()(t,e),p()(t,[{key:"showLoading",value:function(e){var t=this;this.setState(i()({},e,!0),function(){setTimeout(function(){t.setState(i()({},e,!1))},2e3)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.visible1,n=t.visible2,i=t.visible3;return v.a.createElement("div",{className:"example page-loading-examples"},v.a.createElement("h2",{className:"example-title"},"PageLoading"),v.a.createElement("p",null,v.a.createElement("span",null,"PageLoading")," use to show pages and blocks loading status."),v.a.createElement("h2",{className:"example-title"},"Examples"),v.a.createElement(y.a,null,v.a.createElement(w.a,{className:"example-header",title:"PageLoading Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"A simple PageLoading example."),v.a.createElement(E.a,{value:"loading",onTouchTap:function(){e.showLoading("visible1")}}),v.a.createElement(f.a,{visible:a,showStripes:!1})))),v.a.createElement(y.a,null,v.a.createElement(w.a,{className:"example-header",title:"Self Progress PageLoading Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set self loading progress on PageLoading."),v.a.createElement(E.a,{value:"loading",onTouchTap:function(){e.showLoading("visible2")}}),v.a.createElement(f.a,{visible:n,showStripes:!1,loadingProgress:this.loadingProgress})))),v.a.createElement(y.a,null,v.a.createElement(w.a,{className:"example-header",title:"Striped PageLoading Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"A striped pageLoading example."),v.a.createElement(E.a,{value:"loading",onTouchTap:function(){e.showLoading("visible3")}}),v.a.createElement(f.a,{visible:i,showStripes:!0})))),v.a.createElement("h2",{className:"example-title"},"Properties"),v.a.createElement(b.a,{data:x}))}}]),t}(g.Component))}}]);
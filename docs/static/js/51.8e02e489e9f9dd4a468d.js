(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{475:function(e,t,o){(e.exports=o(83)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},476:function(e,t,o){var i=o(475);"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(82)(i,n);i.locals&&(e.exports=i.locals)},477:function(e,t,o){"use strict";var i=o(4),n=o.n(i),r=o(12),a=o.n(r),p=o(7),s=o.n(p),l=o(11),u=o.n(l),c=o(5),g=o.n(c),m=o(6),d=o.n(m),f=o(1),h=o.n(f),b=o(0),T=o.n(b),v=o(478),E=(o(476),function(e){function t(e){s()(this,t);var o=g()(this,(t.__proto__||a()(t)).call(this,e));return o.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],o.generateData=o.generateData.bind(o),o}return d()(t,e),u()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(n()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return h.a.createElement("div",{className:"prop-type-desc-table-wrapper"},h.a.createElement(v.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));E.propTypes={data:T.a.object},E.defaultProps={data:null},t.a=E},491:function(e,t,o){(e.exports=o(83)(!1)).push([e.i,".pop-examples .trigger-button{width:160px;height:50px;margin:0}.pop-examples .button-group-wrapper{position:relative;width:500px;height:280px}.pop-examples .button-group-wrapper .button-group .trigger-position-button{width:120px}.pop-examples .button-group-wrapper .button-group.top{position:absolute;left:50px}.pop-examples .button-group-wrapper .button-group.top .trigger-position-button{margin-left:20px}.pop-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child{margin-left:0}.pop-examples .button-group-wrapper .button-group.left{position:absolute;top:60px;left:0}.pop-examples .button-group-wrapper .button-group.left .trigger-position-button{display:block;margin-top:20px}.pop-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child{margin-top:0}.pop-examples .button-group-wrapper .button-group.right{position:absolute;top:60px;right:0}.pop-examples .button-group-wrapper .button-group.right .trigger-position-button{display:block;margin-top:20px}.pop-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child{margin-top:0}.pop-examples .button-group-wrapper .button-group.bottom{position:absolute;left:50px;bottom:0}.pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button{margin-left:20px}.pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child{margin-left:0}.pop-examples .button-group-wrapper .button-group.center{position:absolute;left:190px;top:120px}.pop-examples .button-group-wrapper .button-group.center .trigger-position-button{margin-left:20px}.pop-examples .button-group-wrapper .button-group.center .trigger-position-button:first-child{margin-left:0}",""])},492:function(e,t,o){var i=o(491);"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(82)(i,n);i.locals&&(e.exports=i.locals)},679:function(e,t,o){(e.exports=o(83)(!1)).push([e.i,".customized-tip .customized-tip-triangle{position:relative;top:-4px}.customized-tip .tip-content{border:1px solid #e7e7e7}",""])},680:function(e,t,o){var i=o(679);"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(82)(i,n);i.locals&&(e.exports=i.locals)},681:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},contentClassName:{type:"PropTypes.string",desc:"The CSS class name of the content element."},modalClassName:{type:"PropTypes.string"},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The popover theme.Can be primary,highlight,success,warning,error.",default:"Theme.DARK"},triggerEl:{type:"PropTypes.object",desc:"This is the DOM element that will be used to set the position of the popover."},visible:{type:"PropTypes.bool",desc:"If true,the popover is visible.",default:"false"},hasTriangle:{type:"PropTypes.bool",desc:"If true,the popover will have a triangle on the top of the DOM element.",default:"true"},triangle:{type:"PropTypes.element"},position:{type:"PropTypes.oneOf",desc:"The popover alignment.",default:"Position.BOTTOM"},isAnimated:{type:"PropTypes.bool",desc:"If true, menu will have animation effects.",default:"true"},shouldPreventContainerScroll:{type:"PropTypes.bool",default:"true"},depth:{type:"PropTypes.number",desc:"The depth of Paper component.",default:"6"},isTriggerPositionFixed:{type:"PropTypes.bool",default:"false"},showModal:{type:"PropTypes.bool",default:"false"},onRender:{type:"PropTypes.func",desc:"The function of tip render."},onRendered:{type:"PropTypes.func",desc:"The function of tip rendered."},onDestroy:{type:"PropTypes.func",desc:"The function of tip destroy."},onDestroyed:{type:"PropTypes.func",desc:"The function of tip destroyed."},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."}}},855:function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return O});var i=o(12),n=o.n(i),r=o(7),a=o.n(r),p=o(11),s=o.n(p),l=o(5),u=o.n(l),c=o(6),g=o.n(c),m=o(1),d=o.n(m),f=o(34),h=o(481),b=o(37),T=o(38),v=o(480),E=o(479),w=o(2),y=o(477),x=o(681),O=(o(492),o(680),function(e){function t(e){a()(this,t);var o=u()(this,(t.__proto__||n()(t)).call(this,e));return o.state={tipVisible:{},triggerEl:{}},o.showTip=o.showTip.bind(o),o.hideTip=o.hideTip.bind(o),o}return g()(t,e),s()(t,[{key:"showTip",value:function(e){var t=this.state.tipVisible;t[e]=!0,this.setState({tipVisible:t})}},{key:"hideTip",value:function(e){var t=this.state.tipVisible;t[e]=!1,this.setState({tipVisible:t})}},{key:"componentDidMount",value:function(){for(var e={},t=0;t<=12;t++)e[t]=Object(f.findDOMNode)(this.refs["trigger"+t]);this.setState({triggerEl:e})}},{key:"render",value:function(){var e=this,t=this.state,o=t.tipVisible,i=t.triggerEl;return d.a.createElement("div",{className:"example pop-examples tip-examples"},d.a.createElement("h2",{className:"example-title"},"Tip"),d.a.createElement("p",null,"A ",d.a.createElement("span",null,"Tip")," can be used as an alternative to a Drop Down Tip that can contain elements inside."),d.a.createElement("h2",{className:"example-title"},"Examples"),d.a.createElement(v.a,null,d.a.createElement(E.a,{className:"example-header",title:"With value"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"popup-example-wrapper"},d.a.createElement("p",null,"Set the ",d.a.createElement("code",null,"value")," property to show different position of ",d.a.createElement("code",null,"Tip"),"."),d.a.createElement("div",{className:"button-group-wrapper"},d.a.createElement("div",{className:"button-group top"},d.a.createElement(h.a,{ref:"trigger3",className:"trigger-position-button",value:"Top Left",onMouseOver:function(){e.showTip(3)},onMouseOut:function(){e.hideTip(3)}}),d.a.createElement(h.a,{ref:"trigger4",className:"trigger-position-button",value:"Top",onMouseOver:function(){e.showTip(4)},onMouseOut:function(){e.hideTip(4)}}),d.a.createElement(h.a,{ref:"trigger5",className:"trigger-position-button",value:"Top right",onMouseOver:function(){e.showTip(5)},onMouseOut:function(){e.hideTip(5)}})),d.a.createElement("div",{className:"button-group right"},d.a.createElement(h.a,{ref:"trigger9",className:"trigger-position-button",value:"Right Top",onMouseOver:function(){e.showTip(9)},onMouseOut:function(){e.hideTip(9)}}),d.a.createElement(h.a,{ref:"trigger10",className:"trigger-position-button",value:"Right",onMouseOver:function(){e.showTip(10)},onMouseOut:function(){e.hideTip(10)}}),d.a.createElement(h.a,{ref:"trigger11",className:"trigger-position-button",value:"Right Bottom",onMouseOver:function(){e.showTip(11)},onMouseOut:function(){e.hideTip(11)}})),d.a.createElement("div",{className:"button-group bottom"},d.a.createElement(h.a,{ref:"trigger0",className:"trigger-position-button",value:"Bottom Left",onMouseOver:function(){e.showTip(0)},onMouseOut:function(){e.hideTip(0)}}),d.a.createElement(h.a,{ref:"trigger1",className:"trigger-position-button",value:"Bottom",onMouseOver:function(){e.showTip(1)},onMouseOut:function(){e.hideTip(1)}}),d.a.createElement(h.a,{ref:"trigger2",className:"trigger-position-button",value:"Bottom Right",onMouseOver:function(){e.showTip(2)},onMouseOut:function(){e.hideTip(2)}})),d.a.createElement("div",{className:"button-group left"},d.a.createElement(h.a,{ref:"trigger6",className:"trigger-position-button",value:"Left Top",onMouseOver:function(){e.showTip(6)},onMouseOut:function(){e.hideTip(6)}}),d.a.createElement(h.a,{ref:"trigger7",className:"trigger-position-button",value:"Left",onMouseOver:function(){e.showTip(7)},onMouseOut:function(){e.hideTip(7)}}),d.a.createElement(h.a,{ref:"trigger8",className:"trigger-position-button",value:"Left Bottom",onMouseOver:function(){e.showTip(8)},onMouseOut:function(){e.hideTip(8)}}))),d.a.createElement(b.a,{visible:o[0],triggerEl:i[0],position:b.a.Position.BOTTOM_LEFT},"Tip Content"),d.a.createElement(b.a,{visible:o[1],triggerEl:i[1],position:b.a.Position.BOTTOM},"Tip Content"),d.a.createElement(b.a,{visible:o[2],triggerEl:i[2],position:b.a.Position.BOTTOM_RIGHT},"Tip Content"),d.a.createElement(b.a,{visible:o[3],triggerEl:i[3],position:b.a.Position.TOP_LEFT},"Tip Content"),d.a.createElement(b.a,{visible:o[4],triggerEl:i[4],position:b.a.Position.TOP},"Tip Content"),d.a.createElement(b.a,{visible:o[5],triggerEl:i[5],position:b.a.Position.TOP_RIGHT},"Tip Content"),d.a.createElement(b.a,{visible:o[6],triggerEl:i[6],position:b.a.Position.LEFT_TOP},"Tip Content"),d.a.createElement(b.a,{visible:o[7],triggerEl:i[7],position:b.a.Position.LEFT},"Tip Content"),d.a.createElement(b.a,{visible:o[8],triggerEl:i[8],position:b.a.Position.LEFT_BOTTOM},"Tip Content"),d.a.createElement(b.a,{visible:o[9],triggerEl:i[9],position:b.a.Position.RIGHT_TOP},"Tip Content"),d.a.createElement(b.a,{visible:o[10],triggerEl:i[10],position:b.a.Position.RIGHT},"Tip Content"),d.a.createElement(b.a,{visible:o[11],triggerEl:i[11],position:b.a.Position.RIGHT_BOTTOM},"Tip Content"))))),d.a.createElement(v.a,null,d.a.createElement(E.a,{className:"example-header",title:"Customized Tip Triangle"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"popup-example-wrapper"},d.a.createElement(h.a,{ref:"trigger12",className:"trigger-button",value:"Show Tip",onMouseOver:function(){e.showTip(12)},onMouseOut:function(){e.hideTip(12)}}),d.a.createElement(b.a,{className:"customized-tip",theme:w.a.DEFAULT,visible:o[12],triggerEl:i[12],triangle:d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"customized-tip-triangle",width:"17",height:"7"},d.a.createElement("polyline",{points:"0,7 9,0 17,7",style:{stroke:"#e7e7e7",fill:"#fff"}}))},"Tip Content"))))),d.a.createElement(v.a,null,d.a.createElement(E.a,{className:"example-header",title:"Use Tip Provider"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"popup-example-wrapper"},d.a.createElement(T.a,{text:"Tip Content"},d.a.createElement(h.a,{className:"trigger-button",value:"Show Tip"})))))),d.a.createElement("h2",{className:"example-title"},"Properties"),d.a.createElement(y.a,{data:x}))}}]),t}(m.Component))}}]);
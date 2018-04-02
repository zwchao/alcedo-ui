(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{475:function(e,t,a){(e.exports=a(82)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},476:function(e,t,a){var n=a(475);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(81)(n,r);n.locals&&(e.exports=n.locals)},477:function(e,t,a){"use strict";var n=a(4),r=a.n(n),s=a(12),p=a.n(s),l=a(7),o=a.n(l),i=a(11),g=a.n(i),c=a(5),u=a.n(c),d=a(6),h=a.n(d),f=a(1),m=a.n(f),y=a(0),v=a.n(y),b=a(478),P=(a(476),function(e){function t(e){o()(this,t);var a=u()(this,(t.__proto__||p()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return h()(t,e),g()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return m.a.createElement("div",{className:"prop-type-desc-table-wrapper"},m.a.createElement(b.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));P.propTypes={data:v.a.object},P.defaultProps={data:null},t.a=P},622:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},count:{type:"PropTypes.number",desc:"The total of data.",default:"0"},page:{type:"PropTypes.number",desc:"The valid page.",default:"0"},total:{type:"PropTypes.number",desc:"The page count.",default:"0"},pageSize:{type:"PropTypes.number",desc:"The number of per page.",default:"10"},pageSizes:{type:"PropTypes.array",desc:"The array of pageSize.",default:"[5, 10, 15, 20]"},selectedCount:{type:"PropTypes.number",desc:"The total count of selected.",default:"0"},selectedCountVisible:{type:"PropTypes.bool",desc:"If true,the selectedCount will show.",default:"false"},pageSizeVisible:{type:"PropTypes.bool",desc:"If false, the pageSize choice box will not show.",default:"true"},paggingPrevIconCls:{type:"PropTypes.string",desc:"Use this property to set prev button icon.",default:"fas fa-angle-left"},paggingNextIconCls:{type:"PropTypes.string",desc:"Use this property to set next button icon.",default:"fas fa-angle-right"},paggingFirstIconCls:{type:"PropTypes.string",desc:"Use this property to set first button icon.",default:"fas fa-angle-double-left"},paggingLastIconCls:{type:"PropTypes.string",desc:"Use this property to set last button icon.",default:"fas fa-angle-double-right"},onChange:{type:"PropTypes.func",desc:"Callback function fired when Pagging component change."}}},834:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return S});var n=a(35),r=a.n(n),s=a(12),p=a.n(s),l=a(7),o=a.n(l),i=a(11),g=a.n(i),c=a(5),u=a.n(c),d=a(6),h=a.n(d),f=a(1),m=a.n(f),y=a(569),v=a(480),b=a(479),P=a(477),T=a(622),x=a(20),S=function(e){function t(e){o()(this,t);var a=u()(this,(t.__proto__||p()(t)).call(this,e));return a.pageSizes=[{value:10,text:"10"},{value:20,text:"20"},{value:30,text:"30"},{value:40,text:"40"},{value:50,text:"50"}],a.state={pagging:{pageSize:30,page:0}},a.pageChangedHandler=a.pageChangedHandler.bind(a),a.generateData=a.generateData.bind(a),a}return h()(t,e),g()(t,[{key:"generateData",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=[],a=0;a<e;a++)t.push({id:a,name:"firstName"+a});return t.length}},{key:"pageChangedHandler",value:function(e){var t=this;"object"===r()(e.pageSize)&&(e.pageSize=e.pageSize.value),this.setState({pagging:e},function(){t.resetPage(t.generateData(100),e)})}},{key:"resetPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.generateData(100),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.pagging,a=t.page,n=t.pageSize,r=Math.ceil(e/n);a+1>r&&this.setState({pagging:{pageSize:n,page:x.a.range(r-1,0)}})}},{key:"render",value:function(){var e=this.state.pagging,t=Math.ceil(this.generateData()/e.pageSize);return m.a.createElement("div",{className:"example pagging-examples"},m.a.createElement("h2",{className:"example-title"},"Pagging"),m.a.createElement("p",null,"A ",m.a.createElement("span",null,"Pagging")," element used for dividing long list, each time only loads a page."),m.a.createElement("h2",{className:"example-title"},"Examples"),m.a.createElement(v.a,null,m.a.createElement(b.a,{className:"example-header",title:"With "}),m.a.createElement("div",{className:"widget-content"},m.a.createElement("div",{className:"example-content"},m.a.createElement("p",null,"A simple ",m.a.createElement("code",null,"Pagging")," example."),m.a.createElement(y.a,{selectedCountVisible:!0,page:e.page,count:this.generateData(),total:t,pageSize:e.pageSize,pageSizes:this.pageSizes,onChange:this.pageChangedHandler})))),m.a.createElement("h2",{className:"example-title"},"Properties"),m.a.createElement(P.a,{data:T}))}}]),t}(f.Component)}}]);
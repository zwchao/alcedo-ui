(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{429:function(e,t,a){"use strict";var n=a(10),r=a.n(n),i=a(109),l=a.n(i),o=a(110),s=a.n(o),m=a(111),c=a.n(m),d=a(112),h=a.n(d),p=a(113),u=a.n(p),f=a(0),v=a.n(f),g=a(433),y=(a(430),function(e){function t(e){s()(this,t);var a=h()(this,(t.__proto__||l()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return u()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(g.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));y.defaultProps={data:null},t.a=y},430:function(e,t,a){var n=a(431);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(185)(n,r);n.locals&&(e.exports=n.locals)},431:function(e,t,a){(e.exports=a(184)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},439:function(e,t,a){"use strict";var n=a(10),r=a.n(n),i=a(408),l=a.n(i),o=a(409),s=a.n(o),m=a(109),c=a.n(m),d=a(110),h=a.n(d),p=a(111),u=a.n(p),f=a(112),v=a.n(f),g=a(113),y=a.n(g),C=a(0),T=a.n(C),E=a(426),Y=a.n(E),b=a(442),x=a(428),M=(a(427),function(e){function t(e){var a;h()(this,t);for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var l=v()(this,(a=t.__proto__||c()(t)).call.apply(a,[this,e].concat(r)));return l.setFocused=function(e){l.setState({isFocus:e})},l.setHovered=function(e){l.setState({isHover:e})},l.state={isHover:!1,isFocus:!1},l}return y()(t,e),u()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.className,i=t.theme,o=t.label,m=t.isLabelAnimate,c=t.hasValue,d=t.disabled,h=t.required,p=t.useSeparator,u=s()(t,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),f=this.state,v=f.isHover,g=f.isFocus,y=Y()("material-provider",l()({"has-label":o,"has-value":c,"has-separator":p,animated:m,focused:g},n,n));return T.a.createElement("div",r()({},u,{className:y,disabled:d}),T.a.createElement("div",{className:"material-provider-label-wrapper"},T.a.createElement("span",{className:"material-provider-label"},o),h?T.a.createElement("div",{className:"material-provider-required-dot"}):null),C.Children.map(a,function(t){var a=t.props,n=a.triggerClassName,i=a.placeholderClassName,o=s()(a,["triggerClassName","placeholderClassName"]),m=r()({},o,{className:Y()("material-provider-field",l()({},o.className,o.className)),onFocus:function(){o.onFocus&&o.onFocus.apply(o,arguments),e.setFocused(!0)},onBlur:function(){o.onBlur&&o.onBlur.apply(o,arguments),e.setFocused(!1)},onMouseOver:function(){o.onMouseOver&&o.onMouseOver.apply(o,arguments),e.setHovered(!0)},onMouseOut:function(){o.onMouseOut&&o.onMouseOut.apply(o,arguments),e.setHovered(!1)}});return"string"!=typeof t.type&&(m.triggerClassName=Y()("material-provider-field-trigger",l()({},n,n)),m.placeholderClassName=Y()("material-provider-field-placeholder",l()({},i,i))),Object(C.cloneElement)(t,m)}),p?T.a.createElement(b.a,{theme:i,isHover:v,isFocus:g,disabled:d}):null)}}]),t}(C.Component));M.defaultProps={theme:x.a.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};var P=M;a.d(t,"a",function(){return P})},442:function(e,t,a){"use strict";var n,r,i=a(408),l=a.n(i),o=a(109),s=a.n(o),m=a(110),c=a.n(m),d=a(111),h=a.n(d),p=a(112),u=a.n(p),f=a(113),v=a.n(f),g=a(0),y=a.n(g),C=a(426),T=a.n(C),E=a(428),Y=(a(427),r=n=function(e){function t(e){var a;c()(this,t);for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return u()(this,(a=t.__proto__||s()(t)).call.apply(a,[this,e].concat(r)))}return v()(t,e),h()(t,[{key:"render",value:function(){var e=this.props,t=e.theme,a=e.isHover,n=e.isFocus,r=e.disabled,i=T()("material-field-separator",l()({hover:a,focused:n},"theme-"+t,t));return y.a.createElement("div",{className:i,disabled:r},y.a.createElement("div",{className:"material-field-separator-hover"}),y.a.createElement("div",{className:"material-field-separator-focus"}))}}]),t}(g.Component),n.Theme=E.a,r);Y.defaultProps={theme:E.a.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};var b=Y;a.d(t,"a",function(){return b})},461:function(e,t,a){"use strict";var n,r,i=a(10),l=a.n(i),o=a(408),s=a.n(o),m=a(409),c=a.n(m),d=a(109),h=a.n(d),p=a(110),u=a.n(p),f=a(111),v=a.n(f),g=a(112),y=a.n(g),C=a(113),T=a.n(C),E=a(0),Y=a.n(E),b=a(426),x=a.n(b),M=a(438),P=a(439),k=a(428),D=(a(427),r=n=function(e){function t(e){var a;u()(this,t);for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var l=y()(this,(a=t.__proto__||h()(t)).call.apply(a,[this,e].concat(r)));return l.focus=function(){l.refs.textField.focus()},l.blur=function(){l.refs.textField.blur()},l.triggerChangeHandler=function(e){l.setState({value:e},function(){var t=l.props.onChange;t&&t(e)})},l.state={value:""},l}return T()(t,e),v()(t,[{key:"componentDidMount",value:function(){this.setState({value:this.props.value})}},{key:"componentWillReceiveProps",value:function(e){e.value===this.state.value&&e.popupVisible===this.props.popupVisible||this.setState({value:e.value,isFocus:e.popupVisible})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.theme,r=e.label,i=e.isLabelAnimate,o=e.disabled,m=e.required,d=e.popupVisible,h=c()(e,["className","style","theme","label","isLabelAnimate","disabled","required","popupVisible"]),p=this.state.value,u=x()("material-date-picker-text-field",s()({activated:d},t,t));return Y.a.createElement(P.a,{className:u,style:a,theme:n,label:r,isLabelAnimate:i,hasValue:!!p,disabled:o,required:m},Y.a.createElement(M.a,l()({},h,{ref:"textField",theme:n,value:p,disabled:o,required:m,onChange:this.triggerChangeHandler})))}}]),t}(E.Component),n.Type=M.a.Type,n.Theme=k.a,r);D.defaultProps={theme:k.a.DEFAULT,type:"text",name:"",label:"",isLabelAnimate:!0,placeholder:"",value:"",disabled:!1,readOnly:!1,autoFocus:!1,popupVisible:!1,clearButtonVisible:!0,passwordButtonVisible:!0,required:!1,patternInvalidMsg:"",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",fieldMsgVisible:!1};var N=D;a.d(t,"a",function(){return N})},541:function(e,t,a){"use strict";var n,r,i,l=a(408),o=a.n(l),s=a(418),m=a.n(s),c=a(109),d=a.n(c),h=a(110),p=a.n(h),u=a(111),f=a.n(u),v=a(112),g=a.n(v),y=a(113),C=a.n(y),T=a(0),E=a.n(T),Y=a(21),b=a.n(Y),x=a(410),M=a.n(x),P=a(426),k=a.n(P),D=a(438),N=a(461),V=a(467),F=a(457),H=a(458),I=a(441),S=a(428),A=a(432),L=a(427),_=a(69),w=a(444),O=(r=n=function(e){function t(e){var a;p()(this,t);for(var n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];var o=g()(this,(a=t.__proto__||d()(t)).call.apply(a,[this,e].concat(r)));i.call(o);var s=b()();o.validValue=!0;return o.state={value:e.value,popupVisible:!1,isAbove:!1,left:{text:"",datePickerLevel:"day",year:s.format("YYYY"),month:s.format("MM"),day:s.format("DD")},right:{text:"",datePickerLevel:"day",year:12==s.format("MM")?+s.format("YYYY")+1:s.format("YYYY"),month:12==s.format("MM")?1:+s.format("MM")+1,day:s.format("DD")},startTime:"",endTime:"",historyStartTime:"",historyEndTime:"",hoverTime:""},o}return C()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.value,a=e.dateFormat,n=M()(this.state);if(t&&t.length){var r=t[0],i=t[1];if(b()(r,a).isValid()&&b()(i,a).isValid()){var l=b()(t[0]).format("YYYY"),o=b()(t[0]).format("MM"),s=b()(t[0]).format("DD"),m=b()(t[1]).format("YYYY"),c=b()(t[1]).format("MM"),d=b()(t[1]).format("DD");n.left.text=r,n.left.year=l,n.left.month=o,n.left.day=s,n.right.text=i,n.right.day=d,l==m&&o==c?12==o?(n.right.year=+m+1,n.right.month=1):(n.right.year=m,n.right.month=+c+1):(n.right.year=m,n.right.month=c),n.startTime=r,n.endTime=i,n.historyStartTime=r,n.historyEndTime=i,this.setState(n)}else this.validValue=!1,console.error("Invalid date")}this.datePicker=this.refs.datePicker,this.triggerEl=Object(_.findDOMNode)(this.refs.trigger)}},{key:"componentWillReceiveProps",value:function(e){m()(e.value)===m()(this.props.value)&&e.dateFormat===this.props.dateFormat||this.setState({value:e.value})}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.style,r=t.name,i=t.placeholder,l=t.dateFormat,s=t.maxValue,m=t.minValue,c=t.label,d=t.isLabelAnimate,h=t.position,p=t.theme,u=t.popupClassName,f=t.rightIconCls,v=t.previousYearIconCls,g=t.previousMonthIconCls,y=t.nextYearIconCls,C=t.nextMonthIconCls,T=this.state,Y=T.popupVisible,x=T.left,M=T.right,P=T.startTime,S=T.endTime,_=T.hoverTime,w=T.isAbove,O=k()("material-date-range-picker",o()({},a,a)),R=x.text&&M.text?x.text+"~ "+M.text:"",B=M.year,q=M.month;B=1==q?+B-1:B,q=1==q?11:+q-2;var W=L.a.MonthDays(B)[q],j=b()([B,q,W]).format("YYYY-MM-DD"),U=x.year,J=x.month;U=12==J?+U+1:U,J=12==J?1:+J+1;var z=b()([U,J-1,1]).format("YYYY-MM-DD");return E.a.createElement("div",{ref:"datePicker",className:O,style:n},E.a.createElement(N.a,{ref:"trigger",className:"material-date-range-picker-field",theme:p,name:r,placeholder:i,label:c,isLabelAnimate:d,value:R,readOnly:!0,clearButtonVisible:!1,isFocusedSelectAll:!1,popupVisible:Y,rightIconCls:f,onClick:function(t){e.togglePopup(t)}}),E.a.createElement(I.a,{className:"material-date-range-picker-popup "+u,visible:Y,triggerEl:this.triggerEl,position:h||(w?A.a.TOP_LEFT:A.a.BOTTOM_LEFT),hasTriangle:!1,onRender:this.popupRenderHandler,onRequestClose:function(){e.closePopup()}},E.a.createElement("div",{className:"calendar-date-input-wrap"},E.a.createElement("div",{className:"DateRangePickerHeaderInput"},E.a.createElement(D.a,{className:"fl calendar-input",placeholder:i,value:x.text,clearButtonVisible:!1,onChange:function(t){e.textFieldChangeHandle("left",t)}}),E.a.createElement(D.a,{className:"fl calendar-input",placeholder:i,value:M.text,clearButtonVisible:!1,onChange:function(t){e.textFieldChangeHandle("right",t)}}))),"day"==x.datePickerLevel?E.a.createElement(V.a,{value:x.text,dateFormat:l,year:x.year,month:x.month,day:x.day,isFooter:!1,isRange:!0,maxValue:j,minValue:m,startTime:P,endTime:S,hoverTime:_,previousYearIconCls:v,previousMonthIconCls:g,nextYearIconCls:y,nextMonthIconCls:C,monthAndYearChange:function(t){e.monthAndYearChangeHandle("left",t)},onChange:function(t){e.dayPickerChangeHandle("left",t)},previousClick:function(t){e.datePickerChangeHandle("left",t)},hoverHandle:function(t){e.dayPickerHoverHandle("left",t)}}):"month"==x.datePickerLevel?E.a.createElement(F.a,{value:x.text,year:x.year,month:x.month,day:x.day,maxValue:j,minValue:m,previousYearIconCls:v,previousMonthIconCls:g,nextYearIconCls:y,nextMonthIconCls:C,onChange:function(t){e.monthPickerChangeHandle("left",t)},previousClick:function(t){e.datePickerChangeHandle("left",t)}}):E.a.createElement(H.a,{value:x.text,year:x.year,month:x.month,day:x.day,maxValue:j,minValue:m,previousYearIconCls:v,previousMonthIconCls:g,nextYearIconCls:y,nextMonthIconCls:C,onChange:function(t){e.yearPickerChangeHandle("left",t)}}),"day"==M.datePickerLevel?E.a.createElement(V.a,{value:M.text,dateFormat:l,year:M.year,month:M.month,day:M.day,isFooter:!1,isRange:!0,startTime:P,endTime:S,hoverTime:_,minValue:z,maxValue:s,previousYearIconCls:v,previousMonthIconCls:g,nextYearIconCls:y,nextMonthIconCls:C,monthAndYearChange:function(t){e.monthAndYearChangeHandle("right",t)},onChange:function(t){e.dayPickerChangeHandle("right",t)},previousClick:function(t){e.datePickerChangeHandle("right",t)},hoverHandle:function(t){e.dayPickerHoverHandle("left",t)}}):"month"==M.datePickerLevel?E.a.createElement(F.a,{value:M.text,year:M.year,month:M.month,day:M.day,minValue:z,maxValue:s,previousYearIconCls:v,previousMonthIconCls:g,nextYearIconCls:y,nextMonthIconCls:C,onChange:function(t){e.monthPickerChangeHandle("right",t)},previousClick:function(t){e.datePickerChangeHandle("right",t)}}):E.a.createElement(H.a,{value:M.text,year:M.year,month:M.month,day:M.day,minValue:z,maxValue:s,previousYearIconCls:v,previousMonthIconCls:g,nextYearIconCls:y,nextMonthIconCls:C,onChange:function(t){e.yearPickerChangeHandle("right",t)}})))}}]),t}(T.Component),n.Theme=S.a,n.Position=A.a,i=function(){var e=this;this.datePickerChangeHandle=function(t,a){var n=M()(e.state);n[t].datePickerLevel=a,e.setState(n)},this.textFieldChangeHandle=function(t,a){if(a&&a.length&&b()(a,e.props.dateFormat,!0).isValid()){var n=b()(a).format("YYYY-MM-DD"),r=n.split("-")[0],i=n.split("-")[1],l=n.split("-")[2],o=M()(e.state);"left"==t?(b()(a).isBefore(o.right.text)&&(o.startTime=a,o.left.text=a,o.left.year=r,o.left.month=i,o.left.day=l,r==o.right.year&&i==o.right.month&&(12==i?(o.right.month=1,o.right.year=+r+1):o.right.month=+i+1)),e.setState(o)):(b()(o.startTime).isBefore(a)&&(o.endTime=a,o.right.text=a,r==o.left.year&&i==o.left.month?o.right.month=+i+1:(o.right.year=r,o.right.month=i,o.right.day=l)),e.setState(o))}},this.dayPickerChangeHandle=function(t,a){var n=M()(e.state);if(n.endTime)n[t].text=a.time,n[t].year=a.year,n[t].month=a.month,n[t].day=a.day,n.startTime=a.time,n.endTime="",n.hoverTime="",e.setState(n);else if(n.startTime){var r=n.startTime,i=void 0;b()(r).isBefore(a.time)?i=a.time:(i=r,r=a.time),n.right.text=i,n.left.text=r,n.endTime=i,n.startTime=r,n.historyStartTime=r,n.historyEndTime=i,n.hoverTime="",e.setState(n)}else n[t].text=a.time,n[t].year=a.year,n[t].month=a.month,n[t].day=a.day,n.startTime=a.time,n.endTime="",n.hoverTime="",e.setState(n)},this.dayPickerHoverHandle=function(t,a){var n=M()(e.state),r=n.startTime,i=n.endTime;r&&""==i&&(n.hoverTime=a.time,b()(r).isBefore(a.time)?(n.left.text=r,n.right.text=a.time):(n.right.text=r,n.left.text=a.time),e.setState(n))},this.monthAndYearChangeHandle=function(t,a){var n=M()(e.state);n[t].year=a.year,n[t].month=a.month,e.setState(n)},this.monthPickerChangeHandle=function(t,a){var n=M()(e.state);n[t].datePickerLevel="day",n[t].year=a.year,n[t].month=a.month,e.setState(n)},this.yearPickerChangeHandle=function(t,a){var n=M()(e.state);n[t].datePickerLevel="month",n[t].year=a,e.setState(n)},this.togglePopup=function(t){e.validValue&&e.setState({popupVisible:!e.state.popupVisible})},this.closePopup=function(){var t=e.props.dateFormat,a=M()(e.state);a.popupVisible=!1,a.left.datePickerLevel="day",a.right.datePickerLevel="day",a.endTime||(a.startTime=a.historyStartTime,a.endTime=a.historyEndTime,a.left.text=a.historyStartTime,a.right.text=a.historyEndTime,a.hoverTime="",a.historyStartTime&&a.historyEndTime&&(a.left.year=b()(a.historyStartTime).format("YYYY"),a.left.month=b()(a.historyStartTime).format("MM"),a.left.day=b()(a.historyStartTime).format("DD"),b()(a.historyStartTime).format("YYYY")==b()(a.historyEndTime).format("YYYY")&&b()(a.historyStartTime).format("MM")==b()(a.historyEndTime).format("MM")?12==b()(a.historyEndTime).format("MM")?(a.right.year=+b()(a.historyEndTime).format("YYYY")+1,a.right.month=1):(a.right.year=b()(a.historyEndTime).format("YYYY"),a.right.month=+b()(a.historyEndTime).format("MM")+1):(a.right.year=b()(a.historyEndTime).format("YYYY"),a.right.month=b()(a.historyEndTime).format("MM")),a.right.day=b()(a.historyEndTime).format("DD"))),a.value=[b()(a.left.text,t),b()(a.right.text,t)],!e.props.disabled&&e.setState(a,function(){e.props.onChange&&e.props.onChange([b()(a.value[0]).format(e.props.dateFormat),b()(a.value[1]).format(e.props.dateFormat)])})},this.popupRenderHandler=function(t){if(!e.props.position){var a=w.a.isAbove(e.dropdownEl,e.triggerEl,Object(_.findDOMNode)(t));a!==e.state.isAbove&&e.setState({isAbove:a})}}},r);O.defaultProps={name:"",placeholder:"Date",popupClassName:"",dateFormat:"YYYY-MM-DD",previousYearIconCls:"fas fa-angle-double-left",previousMonthIconCls:"fas fa-angle-left",nextYearIconCls:"fas fa-angle-double-right",nextMonthIconCls:"fas fa-angle-right",position:A.a.BOTTOM_LEFT};var R=O;a.d(t,"a",function(){return R})},720:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},name:{type:"PropTypes.string",desc:"DateRangePicker input name.",default:""},value:{type:"PropTypes.array",desc:"This is the initial date value of the component."},maxValue:{type:"PropTypes.string",desc:"The ending of a range of valid dates. The range includes the endDate."},minValue:{type:"PropTypes.string",desc:"The beginning of a range of valid dates. The range includes the startDate."},placeholder:{type:"PropTypes.string",desc:"DateRangePicker textField element placeholder.",default:"Date"},label:{type:"PropTypes.any",desc:"The label of the DateRangePicker."},isLabelAnimate:{type:"PropTypes.bool",desc:"The animate of the DateRangePicker."},dateFormat:{type:"PropTypes.string",desc:"Date format.",default:"YYYY-MM-DD"},popupVisible:{type:"PropTypes.bool",desc:"If true,the date selection box will displayed."},onChange:{type:"PropTypes.func",desc:"Callback function that is fired when the date value changes."}}},886:function(e,t,a){"use strict";a.r(t);var n=a(109),r=a.n(n),i=a(110),l=a.n(i),o=a(111),s=a.n(o),m=a(112),c=a.n(m),d=a(113),h=a.n(d),p=a(0),u=a.n(p),f=a(541),v=a(435),g=a(434),y=a(429),C=a(720),T=function(e){function t(e){l()(this,t);var a=c()(this,(t.__proto__||r()(t)).call(this,e));return a.onChangeHandle=function(e){console.log(e)},a}return h()(t,e),s()(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"example date-range-picker-examples"},u.a.createElement("h2",{className:"example-title"},"Material Date Range Picker"),u.a.createElement("p",null,u.a.createElement("span",null,"Material Date Range Picker")," is used to select a date range."),u.a.createElement("h2",{className:"example-title"},"Examples"),u.a.createElement(v.a,null,u.a.createElement(g.a,{className:"example-header",title:"With value and dateFormat"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("div",{className:"examples-wrapper"},u.a.createElement("p",null,u.a.createElement("code",null,"Material Date Range Picker"),"simple example."),u.a.createElement(f.a,{label:"date range",onChange:this.onChangeHandle}))))),u.a.createElement(v.a,null,u.a.createElement(g.a,{className:"example-header",title:"With value and dateFormat"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("div",{className:"examples-wrapper"},u.a.createElement("p",null,u.a.createElement("code",null,"Material Date Range Picker")," using the ",u.a.createElement("code",null,"value")," property to set initial date and the ",u.a.createElement("code",null,"dateFormat")," property to set date format."),u.a.createElement(f.a,{label:"date range",value:["2015-07-01","2017-04-21"],dateFormat:"YYYY-MM-DD",onChange:this.onChangeHandle}))))),u.a.createElement(v.a,null,u.a.createElement(g.a,{className:"example-header",title:"With maxValue and minValue"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("div",{className:"examples-wrapper"},u.a.createElement("p",null,u.a.createElement("code",null,"Material Date Range Picker")," using the ",u.a.createElement("code",null,"maxValue")," property and ",u.a.createElement("code",null,"minValue"),"property to set date selectable range."),u.a.createElement(f.a,{label:"date range",isLabelAnimate:!0,dateFormat:"YYYY-MM-DD",maxValue:"2018-12-21",minValue:"2017-02-01",onChange:this.onChangeHandle}))))),u.a.createElement(v.a,null,u.a.createElement(g.a,{className:"example-header",title:"With placeholder"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("div",{className:"examples-wrapper"},u.a.createElement("p",null,u.a.createElement("code",null,"Material Date Range Picker")," using the ",u.a.createElement("code",null,"placeholder")," property to set default value."),u.a.createElement(f.a,{label:"date range",isLabelAnimate:!1,dateFormat:"YYYY-MM-DD",popupVisible:!0,maxValue:"2018-12-21",minValue:"2017-02-01",onChange:this.onChangeHandle}))))),u.a.createElement("h2",{className:"example-title"},"Properties"),u.a.createElement(y.a,{data:C}))}}]),t}(p.Component);t.default=T}}]);
(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[4244],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var l=n(23645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const r=a},89912:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var l=n(23645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,'.text-field-examples .field-group {\n  margin: 10px auto;\n  float: none; }\n  .text-field-examples .field-group::before, .text-field-examples .field-group::after {\n    display: table;\n    content: ""; }\n  .text-field-examples .field-group::after {\n    clear: both; }\n  .text-field-examples .field-group .text-field-label,\n  .text-field-examples .field-group .text-field {\n    float: left; }\n  .text-field-examples .field-group .text-field-label {\n    font-size: 14px;\n    line-height: 40px;\n    margin-right: 20px;\n    width: 80px; }\n\n.example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n  .popover-dialog-content-scroller .field-group {\n    margin: 10px auto; }\n',""]);const r=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var l=n(34575),a=n.n(l),r=n(93913),c=n.n(r),i=n(81506),s=n.n(i),o=n(2205),p=n.n(o),d=n(78585),u=n.n(d),m=n(29754),f=n.n(m),h=n(59713),y=n.n(h),g=n(37699),E=n(45697),v=n.n(E),b=n(82996),T=n(93379),x=n.n(T),N=n(29250);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}x()(N.Z,{insert:"head",singleton:!1}),N.Z.locals;var Z=function(e){p()(r,e);var t,n,l=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=f()(t);if(n){var a=f()(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return u()(this,e)});function r(e){var t;return a()(this,r),t=l.call(this,e),y()(s()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(w({name:n},t.props.data[n]));return e})),t}return c()(r,[{key:"render",value:function(){return g.createElement("div",{className:"prop-type-desc-table-wrapper"},g.createElement(b.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),r}(g.Component);Z.propTypes={data:v().object};const C=Z},80490:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var l=n(34575),a=n.n(l),r=n(93913),c=n.n(r),i=n(81506),s=n.n(i),o=n(2205),p=n.n(o),d=n(78585),u=n.n(d),m=n(29754),f=n.n(m),h=n(59713),y=n.n(h),g=n(37699),E=n(11669),v=n(38075),b=n(24471),T=n(50704),x=n(22944),N=n(65460),P=n(22356);const w=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"triggerClassName":{"type":"PropTypes.string","desc":"The CSS class name of the input element."},"placeholderClassName":{"type":"PropTypes.string","desc":"The CSS class name of the placeholder element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The TextField theme.","default":"Theme.DEFAULT"},"type":{"type":"PropTypes.oneOf","desc":"Specifies the type of input to display such as \\"password\\" or \\"text\\".","default":"text"},"name":{"type":"PropTypes.string","desc":"The name of the text field."},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the text field."},"value":{"type":"PropTypes.number","desc":"The value of the TextField.Type can be string or number."},"iconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon."},"disabled":{"type":"PropTypes.bool","desc":"Disables the textField if set to true.","default":"false"},"readOnly":{"type":"PropTypes.bool","desc":"If true,the textField will can\'t editable.","default":"false"},"autoFocus":{"type":"PropTypes.bool","desc":"If true,the textField will autoFocus.","default":"false"},"infoMsg":{"type":"PropTypes.string","desc":"The message of the textField."},"isFocusedSelectAll":{"type":"PropTypes.bool","default":"false"},"clearButtonVisible":{"type":"PropTypes.bool","desc":"If true,clearButton will display when the textField is not empty.","default":"true"},"clearButtonIconCls":{"type":"PropTypes.string","default":"fas fa-times-circle"},"rightIconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon."},"passwordButtonVisible":{"type":"PropTypes.bool","desc":"If true, passwordButton will display.","default":"true"},"required":{"type":"PropTypes.bool","desc":"If true,the textField must be required.","default":"false"},"maxLength":{"type":"PropTypes.number","desc":"The maximum length of textField to enter."},"max":{"type":"PropTypes.number","desc":"Maximum number of textField that can be entered."},"min":{"type":"PropTypes.number","desc":"Minimum number of textField that can be entered."},"pattern":{"type":"PropTypes.object","desc":"The matching rule of textField."},"patternInvalidMsg":{"type":"PropTypes.string","desc":"The invalid message of textField."},"isStrictMaxLength":{"type":"PropTypes.bool","default":"true"},"fieldMsgVisible":{"type":"PropTypes.bool","default":"false"},"parentEl":{"type":"PropTypes.object"},"tip":{"type":"PropTypes.string"},"tipPosition":{"type":"PropTypes.oneOf","default":"Position.BOTTOM"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the textField is changed."},"onKeyDown":{"type":"PropTypes.func","desc":"Callback function fired when key down."},"onPressEnter":{"type":"PropTypes.func","desc":"Callback function fired when press enter."},"onValid":{"type":"PropTypes.func","desc":"Callback function fired when textField valid."},"onInvalid":{"type":"PropTypes.func","desc":"Callback function fired when textField invalid."},"onFocus":{"type":"PropTypes.func","desc":"Callback function fired when textField focus."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when textField blur."},"onClear":{"type":"PropTypes.func","desc":"Callback function fired when textField clear."},"onPasswordVisible":{"type":"PropTypes.func","desc":"Callback function fired when password visible."},"onPasswordInvisible":{"type":"PropTypes.func","desc":"Callback function fired when password invisible."},"onIconClick":{"type":"PropTypes.func"},"onRightIconClick":{"type":"PropTypes.func"},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"}}');var Z=n(93379),C=n.n(Z),I=n(89912);C()(I.Z,{insert:"head",singleton:!1}),I.Z.locals;const R=function(e){p()(r,e);var t,n,l=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=f()(t);if(n){var a=f()(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return u()(this,e)});function r(e){var t;return a()(this,r),t=l.call(this,e),y()(s()(t),"show",(function(e){var n=t.state.TextFieldVisible;n[e]=!0,t.setState({TextFieldVisible:n})})),y()(s()(t),"hide",(function(e){var n=t.state.TextFieldVisible;n[e]=!1,t.setState({TextFieldVisible:n})})),y()(s()(t),"changeHandler",(function(e,n){var l=t.state.value;l[n]=e,t.setState({value:l},(function(){console.log("value changed::",e)}))})),t.state={value:{},TextFieldVisible:{}},t}return c()(r,[{key:"render",value:function(){var e=this,t=this.state,n=t.value,l=t.TextFieldVisible;return g.createElement("div",{className:"example text-field-examples"},g.createElement("h2",{className:"example-title"},"TextField"),g.createElement("p",null,g.createElement("span",null,"TextField"),"allow users to input text."),g.createElement("h2",{className:"example-title"},"Examples"),g.createElement(b.Z,null,g.createElement(T.Z,{className:"example-header",title:"With type"}),g.createElement("div",{className:"widget-content"},g.createElement("div",{className:"example-content"},g.createElement("div",{className:"examples-wrapper"},g.createElement("p",null,g.createElement("code",null,"TextField")," using the",g.createElement("code",null,"type"),' property to set the type of input to display such as "password" or "text".'),g.createElement("div",{className:"field-group"},g.createElement("label",{className:"text-field-label"},"Default"),g.createElement(E.Z,{value:n[0]||"",maxLength:20,onChange:function(t){return e.changeHandler(t,0)}})),g.createElement("div",{className:"field-group"},g.createElement("label",{className:"text-field-label"},"Password"),g.createElement(E.Z,{type:"password",rightIconCls:"fas fa-lock",value:n[1]||"",onChange:function(t){return e.changeHandler(t,1)}})))))),g.createElement(b.Z,null,g.createElement(T.Z,{className:"example-header",title:"With rightIconCls"}),g.createElement("div",{className:"widget-content"},g.createElement("div",{className:"example-content"},g.createElement("div",{className:"examples-wrapper"},g.createElement("p",null,g.createElement("code",null,"TextField")," using the",g.createElement("code",null,"rightIconCls")," property to set a icon display at right."),g.createElement("div",{className:"field-group"},g.createElement("label",{className:"text-field-label"},"Search"),g.createElement(E.Z,{rightIconCls:"fas fa-search",theme:E.Z.Theme.PRIMARY,value:n[2]||"",onRightIconClick:function(){return console.log("Search Icon Clicked.")},onChange:function(t){return e.changeHandler(t,2)}})))))),g.createElement(b.Z,null,g.createElement(T.Z,{className:"example-header",title:"With icon"}),g.createElement("div",{className:"widget-content"},g.createElement("div",{className:"example-content"},g.createElement("div",{className:"examples-wrapper"},g.createElement("p",null,g.createElement("code",null,"TextField")," using the",g.createElement("code",null,"iconCls")," property to set the icon of TextField to display at left."),g.createElement("div",{className:"field-group"},g.createElement("label",{className:"text-field-label"},"Username"),g.createElement(E.Z,{iconCls:"fas fa-user",theme:E.Z.Theme.HIGHLIGHT,value:n[3]||"",onChange:function(t){return e.changeHandler(t,3)}})),g.createElement("div",{className:"field-group"},g.createElement("label",{className:"text-field-label"},"Password"),g.createElement(E.Z,{iconCls:"fas fa-lock",type:"password",theme:E.Z.Theme.HIGHLIGHT,value:n[4]||"",onChange:function(t){return e.changeHandler(t,4)}})))))),g.createElement(b.Z,null,g.createElement(T.Z,{className:"example-header",title:"TextFieldGroup without label"}),g.createElement("div",{className:"widget-content"},g.createElement("div",{className:"example-content"},g.createElement("div",{className:"examples-wrapper"},g.createElement("p",null,g.createElement("code",null,"TextFieldGroup")," without",g.createElement("code",null,"label")," element and",g.createElement("code",null,"disabled")," props applied."),g.createElement(v.Z,null,g.createElement(E.Z,{iconCls:"fas fa-user",placeholder:"username",value:n[5]||"",onChange:function(t){return e.changeHandler(t,5)}}),g.createElement(E.Z,{iconCls:"fas fa-lock",type:E.Z.Type.PASSWORD,placeholder:"password",value:n[6]||"",onChange:function(t){return e.changeHandler(t,6)}})))))),g.createElement(b.Z,null,g.createElement(T.Z,{className:"example-header",title:"Valid"}),g.createElement("div",{className:"widget-content"},g.createElement("div",{className:"example-content"},g.createElement("div",{className:"examples-wrapper"},g.createElement("p",null,g.createElement("code",null,"TextField")," with",g.createElement("code",null,"pattern")," and",g.createElement("code",null,"patternInvalidMsg")," applied."),g.createElement("div",null,"Required"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{required:!0,clearButtonVisible:!1,fieldMsgVisible:!0,value:n[7]||"",onChange:function(t){return e.changeHandler(t,7)}})),g.createElement("div",null,"NUMBER"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NUMBER,fieldMsgVisible:!0,value:n[8]||"",onChange:function(t){return e.changeHandler(t,8)}})),g.createElement("div",null,"Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.INTEGER,fieldMsgVisible:!0,value:n[9]||"",onChange:function(t){return e.changeHandler(t,9)}})),g.createElement("div",null,"Positive Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.POSITIVE_INTEGER,fieldMsgVisible:!0,value:n[10]||"",onChange:function(t){return e.changeHandler(t,10)}})),g.createElement("div",null,"Nonnegative Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NONNEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[11]||"",onChange:function(t){return e.changeHandler(t,11)}})),g.createElement("div",null,"Negative Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[12]||"",onChange:function(t){return e.changeHandler(t,12)}})),g.createElement("div",null,"Nonpositive Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NONPOSITIVE_INTEGER,fieldMsgVisible:!0,value:n[13]||"",onChange:function(t){return e.changeHandler(t,13)}})),g.createElement("div",null,"Min / Max"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NUMBER,min:0,max:100,fieldMsgVisible:!0,value:n[14]||"",onChange:function(t){return e.changeHandler(t,14)}})),g.createElement("div",null,"Self Defined Pattern (Only a, b, c is allowed)"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{pattern:/^[abc]*$/,patternInvalidMsg:"Only a, b, c is allowed",fieldMsgVisible:!0,value:n[15]||"",onChange:function(t){return e.changeHandler(t,15)}})))))),g.createElement(b.Z,null,g.createElement(T.Z,{className:"example-header",title:"Disabled"}),g.createElement("div",{className:"widget-content"},g.createElement("div",{className:"example-content"},g.createElement("div",{className:"examples-wrapper"},g.createElement("div",{className:"field-group"},g.createElement(E.Z,{rightIconCls:"fas fa-search",value:"Disabled",theme:E.Z.Theme.PRIMARY,disabled:!0,onChange:function(t){return e.changeHandler(t,16)}})))))),g.createElement(b.Z,null,g.createElement(T.Z,{className:"example-header",title:"Valid In Dialog"}),g.createElement("div",{className:"widget-content"},g.createElement("div",{className:"example-content"},g.createElement("div",{className:"examples-wrapper"},g.createElement("p",null,g.createElement("code",null,"TextField")," with",g.createElement("code",null,"pattern")," and",g.createElement("code",null,"patternInvalidMsg")," applied."),g.createElement(x.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),g.createElement(N.Z,{visible:l[1],onRequestClose:function(){return e.hide(1)}},(function(t){return g.createElement("div",{className:"popover-dialog-content-scroller"},g.createElement("div",null,"Required"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{required:!0,clearButtonVisible:!1,fieldMsgVisible:!0,value:n[7]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,7)}})),g.createElement("div",null,"NUMBER"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NUMBER,fieldMsgVisible:!0,value:n[8]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,8)}})),g.createElement("div",null,"Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.INTEGER,fieldMsgVisible:!0,value:n[9]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,9)}})),g.createElement("div",null,"Positive Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.POSITIVE_INTEGER,fieldMsgVisible:!0,value:n[10]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,10)}})),g.createElement("div",null,"Nonnegative Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NONNEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[11]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,11)}})),g.createElement("div",null,"Negative Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[12]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,12)}})),g.createElement("div",null,"Nonpositive Integer"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NONPOSITIVE_INTEGER,fieldMsgVisible:!0,value:n[13]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,13)}})),g.createElement("div",null,"Min / Max"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{type:E.Z.Type.NUMBER,min:0,max:100,fieldMsgVisible:!0,value:n[14]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,14)}})),g.createElement("div",null,"Self Defined Pattern (Only a, b, c is allowed)"),g.createElement("div",{className:"field-group"},g.createElement(E.Z,{pattern:/^[abc]*$/,patternInvalidMsg:"Only a, b, c is allowed",fieldMsgVisible:!0,value:n[15]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,15)}})))})))))),g.createElement("h2",{className:"example-title"},"Properties"),g.createElement(P.Z,{data:w}))}}]),r}(g.Component)},38075:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var l=n(59713),a=n.n(l),r=n(34575),c=n.n(r),i=n(93913),s=n.n(i),o=n(2205),p=n.n(o),d=n(78585),u=n.n(d),m=n(29754),f=n.n(m),h=n(37699),y=n(45697),g=n.n(y),E=n(41844),v=n.n(E);var b=function(e){p()(r,e);var t,n,l=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=f()(t);if(n){var a=f()(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return u()(this,e)});function r(e){c()(this,r);for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return l.call.apply(l,[this,e].concat(n))}return s()(r,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,l=e.style;return h.createElement("div",{className:v()("text-field-group",a()({},n,n)),style:l},t)}}]),r}(h.Component);b.propTypes={children:g().any,className:g().string,style:g().object};const T=b}}]);
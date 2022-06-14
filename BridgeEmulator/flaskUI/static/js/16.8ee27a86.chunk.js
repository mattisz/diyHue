(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[16],{171:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var o=c(32),n=c(172),l=c.n(n),a=c(7);function i(e){var t=e.type,c=e.message,n=e.duration,i=e.setType;return Object(a.jsx)(l.a,{duration:n,persistOnHover:!0,children:Object(a.jsx)("div",{className:"notificationContainer",children:Object(a.jsxs)("div",{className:"notification ".concat(t),children:[Object(a.jsx)("p",{children:c}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(o.q,{onClick:function(){return i("none")}})})]})})})}},226:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return N}));var o=c(37),n=c(2),l=c(61),a=c.n(l),i=c(92),s=c(89),r=c(173),u=(c(174),c(7)),d=function(e){var t=e.light,c=e.lightsCatalog,o=e.setMessage,n=e.setType,l=function(){o("Begin light firmware update"),n("none"),n("success")};return Object(u.jsx)(u.Fragment,{children:["native_single","native_multi"].includes(t.protocol)&&c.lenght>2&&t.protocol_cfg.version===c[t.protocol_cfg.type].version&&Object(u.jsx)("div",{className:"btn blue",children:Object(u.jsx)(s.d,{title:"Update available",onClick:function(){Object(r.confirmAlert)({title:"Update light "+t.name+" firmware?",message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return l()}},{label:"No"}]})}})})})},j=c(175),h=c.n(j),b=(c(176),c(183)),g=c(212),p=function(e){var t=e.HOST_IP,c=e.api_key,o=e.id,n=e.light,l=e.modelIds,j=e.setType,h=e.setMessage,p=e.lightsCatalog,m=function(){a.a.delete("".concat(t,"/api/").concat(c,"/lights/").concat(o)).then((function(e){console.log(e.data),h("Light successfully deleted"),j("none"),j("success")})).catch((function(e){console.error(e),h("Error occured, check browser console"),j("none"),j("error")}))},O=l.map((function(e){return{value:e,label:e}}));return Object(u.jsxs)("div",{className:"devicecard light",children:[Object(u.jsxs)("div",{className:"row1",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)(b.a,{type:"light-"+n.config.archetype,color:"#eeeeee",onClick:function(){a.a.put("".concat(t,"/api/").concat(c,"/lights/").concat(o,"/state"),{alert:"select"}).then((function(e){console.log(e.data),h("Light alerted"),j("none"),j("success")})).catch((function(e){console.error(e),h("Error occured, check browser console"),j("none"),j("error")}))}})}),Object(u.jsxs)("div",{className:"text",children:[n.name," "]})]}),Object(u.jsxs)("div",{className:"row2",children:[Object(u.jsx)("div",{className:"form-control",children:Object(u.jsx)(g.a,{options:O,placeholder:n.modelid,onChange:function(e){return c=e.value,console.log(Object(i.a)({},o,c)),void a.a.post("".concat(t,"/light-types"),Object(i.a)({},o,c)).then((function(e){console.log(e.data),h("Modelid updated"),j("none"),j("success")})).catch((function(e){console.error(e),h("Error occured, check browser console"),j("none"),j("error")}));var c},menuPortalTarget:document.body,menuPosition:"fixed"})}),Object(u.jsx)(d,{light:n,lightsCatalog:p,setMessage:h,setType:j})]}),Object(u.jsxs)("div",{className:"row3",children:[Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Protocol: ",n.protocol]}),["native","native_multi","native_single","wled","esphome"].includes(n.protocol)?Object(u.jsxs)("li",{style:{cursor:"pointer"},onClick:function(){return window.open("http://"+n.protocol_cfg.ip,"_blank")},children:["IP: ",n.protocol_cfg.ip]}):Object(u.jsxs)("li",{children:["IP: ",n.protocol_cfg.ip]})]}),Object(u.jsxs)("div",{className:"iconbtn red",children:[Object(u.jsx)(s.a,{title:"Delete",onClick:function(){Object(r.confirmAlert)({title:"Delete light "+n.name,message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return m()}},{label:"No"}]})}})," "]})]}),n.state.reachable||Object(u.jsx)("div",{className:"label",children:"Offline"})]})},m=c(214),O=c(16),v=["protocol","ip"],f=function(e){var t=e.setType,c=e.setMessage,l=e.HOST_IP,s=e.API_KEY,r=Object(n.useState)({protocol:"auto"}),d=Object(o.a)(r,2),j=d[0],b=d[1],g=function(e,t){b(Object(O.a)(Object(O.a)({},j),{},Object(i.a)({},e,t)))};return Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var o={protocol:j.protocol,ip:j.ip,config:Object(m.a)(j,v)};a.a.post("".concat(l,"/api/").concat(s,"/lights"),o),c("Light added"),t("none"),t("success")}(e)},className:"add-form",children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Protocol:"}),Object(u.jsx)(h.a,{options:[{value:"auto",label:"Autodetect"},{value:"domoticz",label:"Domoticz"},{value:"flex",label:"Flex"},{value:"jeedom",label:"Jeedom"},{value:"milight",label:"MiLight"},{value:"mibox",label:"Mi Box"},{value:"wiz",label:"Wiz"}],value:j.protocol,onChange:function(e){return g("protocol",e.value)},placeholder:"Choose light protocol"})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Light IP Address:"}),Object(u.jsx)("input",{type:"text",placeholder:"192.168.x.x",value:j.ip,onChange:function(e){return g("ip",e.target.value)}})]}),"auto"!==j.protocol&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{type:"text",value:j.lightName,onChange:function(e){return g("lightName",e.target.value)},placeholder:"Name used on diyhue"})]}),Object(u.jsx)("div",{className:"form-control",children:Object(u.jsx)(h.a,{options:[{value:"LOM001",label:"On/Off Plug"},{value:"LWB010",label:"Dimmable Light"},{value:"LTW001",label:"Color temperature Light"},{value:"LCT015",label:"Color Light"},{value:"LST002",label:"Color Strip"}],value:j.lightModelID,onChange:function(e){return g("lightModelID",e.value)},placeholder:"Emulated light type"})})]}),("milight"===j.protocol||"mibox"===j.protocol)&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Device ID"}),Object(u.jsx)("input",{type:"text",value:j.miID,onChange:function(e){return g("miID",e.target.value)},placeholder:"0x1234"})]}),Object(u.jsx)(h.a,{options:[{value:"rgbw",label:"RGBW"},{value:"cct",label:"CCT"},{value:"rgb_cct",label:"RGB-CCT"},{value:"rgb",label:"RGB"}],value:j.miModes,onChange:function(e){return g("miModes",e.value)},placeholder:"Choose light mode"}),Object(u.jsx)(h.a,{options:["1","2","3","4"],value:j.miGroups,onChange:function(e){return g("miGroups",e.value)},placeholder:"Choose light group"})]}),"mibox"===j.protocol&&Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Port"}),Object(u.jsx)("input",{type:"number",placeholder:"Mi Box port",value:j.miBoxPort,onChange:function(e){return g("miboxPort",e.target.value)}})]}),"domoticz"===j.protocol&&Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Device ID"}),Object(u.jsx)("input",{type:"text",placeholder:"",value:j.domoticzID,onChange:function(e){return g("domoticzID",e.target.value)}})]}),"jeedom"===j.protocol&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Light Api"}),Object(u.jsx)("input",{type:"text",placeholder:"Light Api",value:j.jeedomlightAPI,onChange:function(e){return g("jeedomlightAPI",e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Light ID"}),Object(u.jsx)("input",{type:"text",placeholder:"Light ID",value:j.jeedomlightID,onChange:function(e){return g("jeedomlightID",e.target.value)}})]})]}),Object(u.jsx)("div",{className:"form-control",children:Object(u.jsx)("input",{type:"submit",value:"Add Light",className:"btn btn-block"})})]})},x=c(171);function N(e){var t=e.HOST_IP,c=e.API_KEY,l=Object(n.useState)({}),i=Object(o.a)(l,2),s=i[0],r=i[1],d=Object(n.useState)({}),j=Object(o.a)(d,2),h=j[0],b=j[1],g=Object(n.useState)([]),m=Object(o.a)(g,2),O=m[0],v=m[1],N=Object(n.useState)("none"),C=Object(o.a)(N,2),y=C[0],I=C[1],L=Object(n.useState)("no message"),P=Object(o.a)(L,2),_=P[0],k=P[1],D=Object(n.useState)(!1),T=Object(o.a)(D,2),w=T[0],S=T[1];return Object(n.useEffect)((function(){var e=function(){void 0!==c&&a.a.get("".concat(t,"/lights")).then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.error(e)}))};e(),void 0!==c&&a.a.get("".concat(t,"/light-types")).then((function(e){console.log(e.data),v(e.data.result)})).catch((function(e){console.error(e)})),void 0!==c&&a.a.get("https://raw.githubusercontent.com/diyhue/Lights/master/catalog.json").then((function(e){console.log(e.data),b(e.data)})).catch((function(e){console.error(e)}));var o=setInterval((function(){e()}),2e3);return function(){return clearInterval(o)}}),[t,c]),Object(u.jsx)("div",{className:"content",children:Object(u.jsx)("div",{className:"inner",children:Object(u.jsxs)("div",{className:"devicecontainer",children:["none"!==y&&Object(u.jsx)(x.a,{type:y,message:_,duration:"5000",setType:I}),Object(u.jsxs)("div",{className:"contentContainer lights",children:[Object(u.jsx)("div",{className:"headline",children:"Light Configuration"}),Object(u.jsxs)("div",{className:"btn generic",onClick:function(){void 0!==c&&a.a.post("".concat(t,"/api/").concat(c,"/lights"),"").then((function(e){console.log(e.data),k("Searching for new lights..."),I("none"),I("success")})).catch((function(e){console.error(e),k("Error occured, check browser console"),I("none"),I("error")}))},children:["Scan For Lights",Object(u.jsx)("div",{className:"btn btn-block"})]}),Object(u.jsx)("button",{onClick:function(){return S(!w)},className:"generic",style:{},children:"Add light manually"}),w&&Object(u.jsx)(f,{setType:I,setMessage:k,HOST_IP:t,API_KEY:c})]}),Object(u.jsx)("div",{className:"cardGrid",children:Object.entries(s).map((function(e){var n=Object(o.a)(e,2),l=n[0],a=n[1];return Object(u.jsx)(p,{HOST_IP:t,api_key:c,id:l,light:a,modelIds:O,setType:I,setMessage:k,lightsCatalog:h},l)}))})]})})})}}}]);
//# sourceMappingURL=16.8ee27a86.chunk.js.map
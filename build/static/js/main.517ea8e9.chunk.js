(window.webpackJsonpnew_project=window.webpackJsonpnew_project||[]).push([[0],{10:function(e,t,a){e.exports=a(27)},15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},17:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),l=a.n(o),c=(a(15),a(3)),i=a(4),m=(a(16),a(17),a(1)),s=a.n(m),d=a(9),p=a.n(d);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=function(){var e=(new Date).toLocaleDateString(),t=Object(r.useState)({header:"",headertwo:""}),a=Object(i.a)(t,2),o=a[0],l=a[1],m=Object(r.useState)({patientName:"",address:"",age:"",date:e}),d=Object(i.a)(m,2),u=d[0],g=d[1],h=Object(r.useState)({doctorName:"",prc:"",ptr:""}),E=Object(i.a)(h,2),v=E[0],b=E[1],N=Object(r.useState)(!0),w=Object(i.a)(N,2),y=w[0],O=w[1];function j(e){var t=e.target.value;l(f({},o,Object(c.a)({},e.target.name,t)))}function x(e){var t=e.target.value;g(f({},u,Object(c.a)({},e.target.name,t)))}function P(e){var t=e.target.value;b(f({},v,Object(c.a)({},e.target.name,t)))}return Object(r.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("doctorInputs"));null!==e&&b(e)}),[]),""!==o.header&&""!==o.headertwo&&""!==u.patientName&&""!==u.address&&""!==u.age&&""!==u.date&&""!==v.doctorName&&""!==v.prc&&""!==v.ptr?y&&O(!1):y||O(!0),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"landing pt-2"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-12 col-lg-6"},n.a.createElement("form",{className:"form white-containers",id:"fullPrescription"},n.a.createElement("div",{className:"form-group"},n.a.createElement(s.a,{type:"text",placeholder:"Practice Name",className:"form-control header-group",id:"header",onChange:j,name:"header",value:o.header})),n.a.createElement("div",{className:"form-group"},n.a.createElement(s.a,{type:"text",placeholder:"Practice Details",className:"form-control header-group",id:"header-two",onChange:j,name:"headertwo",value:o.headertwo})),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-8 col-md-8"},n.a.createElement("div",{className:"form-group-patient form-inline"},n.a.createElement("label",{className:"mb-0",htmlFor:"patientName"},"Patient Name:"),n.a.createElement(s.a,{type:"text",placeholder:"Type here",className:"form-control col-4 col-md-8",id:"patientName",onChange:x,name:"patientName",value:u.patientName})),n.a.createElement("div",{className:"form-group-patient form-inline"},n.a.createElement("label",{className:"mb-0",htmlFor:"address"},"Address:"),n.a.createElement(s.a,{type:"text",placeholder:"Type here",className:"form-control col-4 col-md-8",id:"address",onChange:x,name:"address",value:u.address,"aria-describedby":"address"}))),n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"form-group-patient form-inline"},n.a.createElement("label",{className:"mb-0",htmlFor:"age"},"Age:"),n.a.createElement(s.a,{type:"text",placeholder:"Type here",className:"form-control col-8",id:"age",onChange:x,name:"age",value:u.age,"aria-describedby":"age"})),n.a.createElement("div",{className:"form-group-patient form-inline"},n.a.createElement("label",{className:"mb-0",htmlFor:"date"},"Date:"),n.a.createElement(s.a,{type:"text",placeholder:"Header",className:"form-control col-8",id:"date",onChange:x,name:"date",value:u.date,"aria-describedby":"date"})))),n.a.createElement("p",{className:"rx"},"Rx"),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{type:"text",className:"form-control",id:"textarea","aria-describedby":"textarea",row:"6"})),n.a.createElement("div",{className:"row doctor-row"},n.a.createElement("div",{className:"col-5"}),n.a.createElement("div",{className:"col-7"},n.a.createElement("div",{className:"form-group-doctor form-inline d-flex justify-content-end"},n.a.createElement("div",{id:"preview"}),n.a.createElement(s.a,{type:"text",placeholder:"Doctor's Name",id:"doctor",name:"doctorName",value:v.doctorName,onChange:P})),n.a.createElement("div",{className:"form-group-doctor form-inline d-flex justify-content-end"},n.a.createElement("label",{className:"license m-0",htmlFor:"prc"},"PRC:"),n.a.createElement(s.a,{type:"text",placeholder:"PRC number",name:"prc",value:v.prc,onChange:P,id:"prc"})),n.a.createElement("div",{className:"form-group-doctor form-inline d-flex justify-content-end"},n.a.createElement("label",{className:"license m-0",htmlFor:"PTR"},"PTR:"),n.a.createElement(s.a,{type:"text",placeholder:"PTR number",name:"ptr",value:v.ptr,onChange:P,id:"ptr"})))))),n.a.createElement("div",{className:"right-div col-12 col-md-12 col-lg-6 text-center p-5"},n.a.createElement("h4",{className:"white wd-100 text-center"},"Upload your signature here"),n.a.createElement("div",{id:"signatureUploader",className:"text-dark container white-containers"},n.a.createElement("form",{encType:"multipart/form-data"},n.a.createElement("div",{id:"file-sig-div"},n.a.createElement("i",{id:"file-sig",className:"fas fa-file-signature fa-4x"}),n.a.createElement("div",null,n.a.createElement("p",{id:"namefile"},"Only pictures allowed."),n.a.createElement("p",{id:"subnamefile"},"(e.g. jpg ,jpeg, png)"))),n.a.createElement("input",{id:"file-input",type:"file",onChange:function(e){var t=e.target.files[0].name,a=document.getElementById("preview"),r=document.getElementById("img");function n(){var r=new FileReader;r.addEventListener("load",(function(){if(this.result&&localStorage){window.localStorage.setItem(t,this.result);var e=new Image;e.setAttribute("id","img"),e.src=window.localStorage.getItem(t),a.append(e)}else alert()})),r.readAsDataURL(e.target.files[0])}!1===a.contains(r)?n():a.contains(r)&&(r.outerHTML="",n()),console.log(t),console.log(e.target.files[0])}}),n.a.createElement("hr",null),n.a.createElement("div",{className:"btn-div"},n.a.createElement("button",{id:"btn-savedr",className:"btn text-white",onClick:function(){window.localStorage.setItem("doctorInputs",JSON.stringify(v)),alert("Doctor's information saved")}},"Save Doctor's Info"),n.a.createElement("button",{id:"btn-cleardr",className:"btn",onClick:function(){window.localStorage.removeItem("doctorInputs"),b({doctorName:"",prc:"",ptr:""}),alert("Doctor's information cleared")}},"Clear Doctor's Info")))),n.a.createElement("h4",{className:"white wd-100 text-center pt-3"},"Done writing your prescription?"),n.a.createElement("div",{id:"saveRx",className:"text-dark container p-4 white-containers"},n.a.createElement("p",{id:"notice"},"If you cannot click the download button, you might be missing some details on your prescription. Please check."),n.a.createElement("hr",null),n.a.createElement("button",{id:"btn-dl",className:"btn text-white",onClick:function(){p.a.toJpeg(document.getElementById("fullPrescription"),{quality:1}).then((function(e){var t=document.createElement("a");t.download="Rx-"+u.patientName+"-name.jpeg",t.href=e,t.click()}))},disabled:y,type:"button"},"Ready to Download!"))),n.a.createElement("footer",null,n.a.createElement("small",null,"\xa9 2020 gonzalesgonzalez")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.517ea8e9.chunk.js.map
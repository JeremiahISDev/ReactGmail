(this.webpackJsonpreactgmail=this.webpackJsonpreactgmail||[]).push([[0],{25:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(19),l=a.n(i),c=a(3),r=a(11),o=a(12),d=a(8),m=a(14),h=a(13),j=a(2),b=(a(25),a(0));var u=function(e){return Object(b.jsxs)("form",{className:"text-align-right",children:[Object(b.jsxs)("button",{className:"form__btn",onClick:function(t){t.preventDefault(),e.handleInboxFilter()},children:[Object(b.jsx)("span",{className:"fas fa-inbox mr-1"}),"Recibidos"]}),Object(b.jsxs)("button",{className:"form__btn",onClick:function(t){t.preventDefault(),e.handleDeleteFilter()},children:[Object(b.jsx)("span",{className:"fas fa-trash mr-1"}),"Papelera"]}),Object(b.jsx)("input",{className:"form__input-text",type:"text",placeholder:"Buscar un correo",value:e.textFilter,onChange:function(t){t.preventDefault();var a={value:t.target.value};e.handleTextFilter(a)}})]})};var x=function(e){return Object(b.jsxs)("header",{className:"col2 mb-1",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{className:"title",children:Object(b.jsxs)(c.b,{to:"/",className:"text--decoration--none",children:[Object(b.jsx)("span",{className:"fas fa-envelope-open-text mr-1"}),"Gmail"]})})}),Object(b.jsx)(u,{textFilter:e.textFilter,handleInboxFilter:e.handleInboxFilter,handleDeleteFilter:e.handleDeleteFilter,handleTextFilter:e.handleTextFilter})]})};a(35);var f=function(e){var t=!0===e.deleted?"text--decoration--through":"",a=!1===e.read?"text--bold":"";return Object(b.jsxs)("tr",{className:"cursor-pointer ".concat(t," ").concat(a),children:[Object(b.jsx)("td",{className:"email--cell",children:Object(b.jsx)(c.b,{className:"email--link text--decoration--none",to:"email/".concat(e.id),children:e.from})}),Object(b.jsx)("td",{className:"email--cell",children:Object(b.jsx)(c.b,{className:"email--link text--decoration--none",to:"email/".concat(e.id),children:e.subject})}),Object(b.jsx)("td",{className:"email--cell",children:Object(b.jsx)(c.b,{className:"email--link text--decoration--none",to:"email/".concat(e.id),children:e.time})}),Object(b.jsx)("td",{className:"text-align-right",children:Object(b.jsx)("button",{className:"form__btn fas fa-trash",onClick:function(t){t.stopPropagation(),e.handleDeleteEmail(e.id)}})})]})},O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleDeleteEmail=n.handleDeleteEmail.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.handleReadEmail(this.props.id)}},{key:"handleDeleteEmail",value:function(){this.props.handleDeleteEmail(this.props.id)}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"col2 mt-1 pt-1",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"title--meidum",children:this.props.subject}),Object(b.jsxs)("h3",{className:"title--small",children:[Object(b.jsx)("span",{className:"text--bold display-inline-block mr-1",children:this.props.fromName}),Object(b.jsxs)("span",{className:"text-normal display-inline-block",children:["<",this.props.fromEmail,">"]})]})]}),Object(b.jsxs)("div",{className:"text-align-right",children:[Object(b.jsx)(c.b,{className:"fas fa-times-circle form__btn",to:"/"}),Object(b.jsx)(c.b,{className:"fas fa-trash form__btn",to:"/",onClick:this.handleDeleteEmail})]})]}),Object(b.jsx)("p",{children:this.props.body}),Object(b.jsxs)("div",{className:"mt-1",children:[Object(b.jsxs)("button",{className:"form__btn",children:[Object(b.jsx)("span",{className:"fas fa-reply mr-1"}),"Responder"]}),Object(b.jsxs)("button",{className:"form__btn",children:[Object(b.jsx)("span",{className:"fas fa-reply-all mr-1"}),"Responder a todos"]}),Object(b.jsxs)("button",{className:"form__btn",children:[Object(b.jsx)("span",{className:"fas fa-share mr-1"}),"Reenviar a todos"]})]})]})}}]),a}(s.a.Component),p=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h4",{className:"title--medium pb-1",children:"Pol\xedtica de privacidad:"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt delectus voluptates nulla assumenda hic, molestiae at quibusdam repudiandae magnam accusantium sed accusamus amet sunt molestias explicabo natus eum temporibus. Eum."}),Object(b.jsx)(c.b,{to:"/",children:Object(b.jsx)("span",{title:"Volver",className:"btn--close fas fa-times-circle text--decoration--none"})})]})},v=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"title--medium pb-1",children:"Cookies:"}),Object(b.jsx)("p",{children:"Esta web no usa cookies, pero s\xed que usa un poquito de local storage ;)"}),Object(b.jsx)(c.b,{to:"/",children:Object(b.jsx)("span",{title:"Volver",className:"btn--close fas fa-times-circle text--decoration--none"})})]})},N=function(){return Object(b.jsxs)("div",{className:"col2",children:[Object(b.jsxs)("small",{className:"text--primary-light",children:[Object(b.jsx)(c.b,{className:"nav__link text--decoration--none",to:"/privacy",children:"Pol\xedtica de privacidad"}),"/",Object(b.jsx)(c.b,{className:"nav__link text--decoration--none",to:"/cookies",children:"Cookies"}),Object(b.jsx)(j.a,{path:"/",children:function(e){return!1===e.match.isExact?Object(b.jsxs)(b.Fragment,{children:["/",Object(b.jsx)(c.b,{className:"nav__link text--decoration--none",to:"/",children:"Ir a la home"})]}):null}})]}),Object(b.jsx)("small",{className:"text--primary-light text-align-right",children:"Ejercicio de React / Curso de Adalab"})]})},F=(a(36),function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/cookies",children:Object(b.jsx)(v,{})}),Object(b.jsx)(j.a,{path:"/privacy",children:Object(b.jsx)(p,{})}),Object(b.jsx)(j.a,{children:Object(b.jsx)(N,{})})]})})}),E=function(){return fetch("//beta.adalab.es/ejercicios-extra/api/emails/v01.json").then((function(e){return e.json()})).then((function(e){return e.results}))},k=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={emails:[],textFilter:"",showInbox:!0},n.handleInboxFilter=n.handleInboxFilter.bind(Object(d.a)(n)),n.handleDeleteFilter=n.handleDeleteFilter.bind(Object(d.a)(n)),n.handleTextFilter=n.handleTextFilter.bind(Object(d.a)(n)),n.handleReadEmail=n.handleReadEmail.bind(Object(d.a)(n)),n.handleDeleteEmail=n.handleDeleteEmail.bind(Object(d.a)(n)),n.renderEmailDetail=n.renderEmailDetail.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){e.setState({emails:t})}));var t=JSON.parse(localStorage.getItem("emailFilters"));null!==t&&this.setState({textFilter:t.textFilter,showInbox:t.showInbox})}},{key:"componentDidUpdate",value:function(){var e={textFilter:this.state.textFilter,showInbox:this.state.showInbox};localStorage.setItem("emailFilters",JSON.stringify(e))}},{key:"handleInboxFilter",value:function(){this.setState({showInbox:!0})}},{key:"handleDeleteFilter",value:function(){this.setState({showInbox:!1})}},{key:"handleTextFilter",value:function(e){this.setState({textFilter:e.value})}},{key:"handleReadEmail",value:function(e){this.setEmailAttribute(e,"read")}},{key:"handleDeleteEmail",value:function(e){this.setEmailAttribute(e,"deleted")}},{key:"setEmailAttribute",value:function(e,t){this.setState((function(a){return a.emails.find((function(t){return t.id===e}))[t]=!0,{emails:a.emails}}))}},{key:"renderFilters",value:function(){var e=this.state.showInbox?"recibidos":"borrados",t=""===this.state.textFilter?"y sin filtrar.":Object(b.jsxs)("span",{children:["y filtrando por"," ",Object(b.jsx)("span",{className:"text--bold",children:this.state.textFilter}),"."]});return Object(b.jsxs)("p",{className:"mb-1",children:["La usuaria est\xe1 visualizando los emails"," ",Object(b.jsx)("span",{className:"text--bold",children:e})," ",t]})}},{key:"renderEmails",value:function(){var e=this,t=this.state.textFilter.toLowerCase();return this.state.emails.filter((function(t){return!0===e.state.showInbox?!t.deleted:t.deleted})).filter((function(e){return e.fromName.toLowerCase().includes(t)||e.subject.toLowerCase().includes(t)||e.body.toLowerCase().includes(t)})).map((function(t){return Object(b.jsx)(f,{id:t.id,from:t.fromName,subject:t.subject,time:t.date,read:t.read,deleted:t.deleted,handleDeleteEmail:e.handleDeleteEmail},t.id)}))}},{key:"renderEmailDetail",value:function(e){var t=this.state.emails.find((function(t){return t.id===e.match.params.emailId}));return void 0!==t?Object(b.jsx)(O,{id:t.id,fromName:t.fromName,fromEmail:t.fromEmail,subject:t.subject,body:t.body,handleReadEmail:this.handleReadEmail,handleDeleteEmail:this.handleDeleteEmail}):Object(b.jsx)("p",{children:"Email no encontrado"})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{textFilter:this.state.textFilter,handleInboxFilter:this.handleInboxFilter,handleDeleteFilter:this.handleDeleteFilter,handleTextFilter:this.handleTextFilter}),this.renderFilters(),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/email/:emailId",render:this.renderEmailDetail}),Object(b.jsx)(j.a,{path:"/",children:Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:this.renderEmails()})})})]}),Object(b.jsx)(F,{})]})}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(c.a,{children:Object(b.jsx)(k,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.afbaa8d7.chunk.js.map
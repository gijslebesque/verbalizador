(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},37:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),s=a(9),o=(a(36),a(6)),i=(a(37),a(11)),u=a.n(i),m=a(13),E=a(8);function h(e){var t=e.addVerb,a=Object(n.useState)(""),r=Object(E.a)(a,2),c=r[0],s=r[1],o=Object(n.useState)(""),i=Object(E.a)(o,2),u=i[0],m=i[1];return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement("div",{className:"row"},l.a.createElement("form",{onSubmit:function(e){return t(e,{verb:c,translation:u})}},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{type:"text",placeholder:"El verbo",name:"verb",value:c,onChange:function(e){return s(e.target.value)},required:!0})),l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{type:"text",placeholder:"El traduccion",name:"translation",value:u,onChange:function(e){return m(e.target.value)},required:!0})),l.a.createElement("button",{className:"btn",type:"submit"},"Agregar un verbo")))))}var d=a(27),v=a(28),b=a.n(v),f=new function e(){var t=this;Object(d.a)(this,e),this.addVerb=function(e){return t.service.post("/verb",e)},this.getVerbs=function(){return t.service.get("/verb")},this.baseURL="https://verbalizador.herokuapp.com/",this.service=b.a.create({baseURL:this.baseURL})};function p(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)("present"),i=Object(E.a)(o,2),d=i[0],v=i[1],b=Object(n.useState)(1),p=Object(E.a)(b,2),g=p[0],N=p[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getVerbs();case 2:t=e.sent,a=t.data,c(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.addVerb(a);case 3:n=e.sent,l=n.data,c(r.concat(l));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){return r.filter((function(e){return e.tense===d})).map((function(e){var t=e.verb,a=e.translation,n=e.yo,r=e.tu,c=e.el,s=e.nosotros,o=e.vosotros,i=e.ellos;return l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,c),l.a.createElement("td",null,s),l.a.createElement("td",null,o),l.a.createElement("td",null,i))}))};return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement(h,{addVerb:w}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement("ul",{className:"tabs"},l.a.createElement("li",{onClick:function(){return N(1)},className:"tab col s6 ".concat(1===g?"active":"")},l.a.createElement(s.b,{onClick:function(){return v("present")},to:"present"},"El Presente")),l.a.createElement("li",{onClick:function(){return N(2)},className:"tab col s6 ".concat(2===g?"active":"")},l.a.createElement(s.b,{onClick:function(){return v("past")},to:"past"},"El Pret\xe9rito")))),l.a.createElement("div",{className:"col s12"},1===g&&l.a.createElement("table",{className:"highlight"},l.a.createElement("tr",null,l.a.createElement("th",null,"El verbo"),l.a.createElement("th",null,"Traduccion"),l.a.createElement("th",null,"Yo"),l.a.createElement("th",null,"T\xfa"),l.a.createElement("th",null,"\xc9l / Ella "),l.a.createElement("th",null,"Nosotros "),l.a.createElement("th",null,"Vosotros"),l.a.createElement("th",null,"Ellos / Ellas / Ustedes")),j())),l.a.createElement("div",{className:"col s12"},2===g&&l.a.createElement("table",{className:"highlight"},l.a.createElement("tr",null,l.a.createElement("th",null,"El verbo"),l.a.createElement("th",null,"Traduccion"),l.a.createElement("th",null,"Yo"),l.a.createElement("th",null,"T\xfa"),l.a.createElement("th",null,"\xc9l / Ella "),l.a.createElement("th",null,"Nosotros "),l.a.createElement("th",null,"Vosotros"),l.a.createElement("th",null,"Ellos / Ellas / Ustedes")),j())))))}function g(){return l.a.createElement("footer",{className:"page-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6 s12"}),l.a.createElement("div",{className:"col l4 offset-l2 s12"},l.a.createElement("h5",{className:"white-text"},"Bronnen"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"grey-text text-lighten-3",target:"_blank",rel:"noopener noreferrer",href:"https://www.enforex.com/spaans/taal/spaanse-verleden-onvoltooide-tijd.html"},"Verleden en onvoltooide tijd")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"grey-text text-lighten-3",href:"https://www.fluentin3months.com/spanish-verb-conjugation/"},"Verleden tijd")),l.a.createElement("li",null,l.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"},"Link 3")),l.a.createElement("li",null,l.a.createElement("a",{className:"grey-text text-lighten-3",href:"#!"},"Link 4")))))),l.a.createElement("div",{className:"footer-copyright"},l.a.createElement("div",{className:"container"},"\xa9 2019 De Gijs Lebesque",l.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/gijslebesque",target:"_blank",rel:"noopener noreferrer"},"Github"))))}var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Verblizador"),l.a.createElement("main",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/"},l.a.createElement(p,null)))),l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.a,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.0542e6c2.chunk.js.map
(this["webpackJsonpjook-website"]=this["webpackJsonpjook-website"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(7),r=n.n(c),s=n(2),a=(n(13),n.p+"static/media/jook-1500.499171cf.png"),l=n.p+"static/media/scratch.ad3ce9c6.jpg",o=n(6),j=(n(14),n.p+"static/media/coderjook-pc.67d43803.png"),d=n.p+"static/media/jook-pc.0d764e88.png",b=[{img:n.p+"static/media/romal-pc.c661facd.png",title:"romal kabelconfigurator",keyword:"romal",inhoud:"Naast de verkoop van producten, maakt Romal sinds 2009 klant specifieke kabel assemblies. Dit zijn coax, data, glasvezel of combinatiekabel-assemblies en worden in het kabelatelier vervaardigd en getest. De kabelconfigurator is een offerte systeem waarbij de vertegenwoordigers via een webapplicatie zelf een assemblie kunnen samenstellen en een offerte kunnen aanmaken. Alle gegevens die nodig zijn voor de kabelconfigurator worden via API uit het ERP systeem opgehaald",techniek:"Framework: React ^ Opmaak: html / bootstrap ^ connectie: API connectie axios ^ React: useContext, React Router",github:"",website:""},{img:j,title:"scratch website",keyword:"coderjook",inhoud:"Als trainer in digitale geletterheid heb ik veel lesmateriaal gemaakt voor Scratch. Deze handleidingen en scripts heb ik gebundeld op een website en worden gebruikt in de Coderdojo Utrecht en in de bibliotheek Utrecht. * Deze website heb ik gemaakt om met te verdiepen in CRUD operations in een database. Hiervoor heb ik firebase gebruikt. Daarnaast heb ik login en beheer gedeelte gemaakt en de basisbeginselen geleerd van Typescript.",techniek:"Framework: React / Typescript ^ Opmaak: html/css flexbox ^ Opslag: Firebase storage en realtime database ^ React: useContext, React-Router-Dom",github:"https://github.com/coderjook/scratch-website.git",website:"https://scratch-tutorials.netlify.app/"},{img:d,title:"jook.nl",keyword:"jook",inhoud:"Met de inhoud van deze website laat ik zien wie ik ben en waar mijn interesses liggen. * ik heb deze website gemaakt om me te verdiepen in css, positionering, responsive layout en css animaties en transitions.",techniek:"Framework: React ^ Opmaak: html / css - transition, animation ^ Componenten: slider, caroussel ^ React component: EmailJs",github:"https://github.com/coderjook/jook-website.git",website:"https://21mk8q.csb.app/"}],m=n(0);function h(e){var t=e.selectedProject,n=e.setSelectedProject,c=Object(i.useState)(["slide","slide active","slide last"]),r=Object(s.a)(c,2),a=r[0],l=r[1],j=Object(i.useState)(b),d=Object(s.a)(j,2),h=d[0],g=d[1];Object(i.useEffect)((function(){var e=document.getElementById("featured");e&&e.scrollIntoView({behavior:"smooth",block:"end"})}),[t]);var u=function(e){if("next"===e){var t=h[h.length-1],n=h.slice(0,-1);console.log("newArray:",n),g([t].concat(Object(o.a)(n))),console.log("lastItem:",t,"arrayProjects",h)}else if("previous"===e){var i=h[0],c=h.slice(1);console.log("previous newArray:",c),g([].concat(Object(o.a)(c),[i])),console.log("previous lastItem:",i,"arrayProjects",h)}var r;l([]),r=setTimeout((function(){l(["slide","slide active","slide last"]),clearTimeout(r)}),10)},x=function(e){n(e)};return Object(m.jsxs)("div",{id:"caroussel",children:[Object(m.jsxs)("h2",{children:["Mijn ",Object(m.jsx)("strong",{children:"Projecten"})]}),Object(m.jsx)("p",{children:"Klik op het project voor meer informatie"}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{onClick:function(){return u("previous")},children:"Vorige"}),Object(m.jsx)("button",{onClick:function(){return u("next")},children:"Volgende"})]}),Object(m.jsx)("div",{className:"slider",children:h.map((function(e,t){return Object(m.jsx)(m.Fragment,{children:t<=2&&Object(m.jsxs)("div",{className:a[t],id:t,children:[Object(m.jsx)("div",{className:"projectname",onClick:function(){return x(e)},children:Object(m.jsx)("center",{children:e.title})}),Object(m.jsx)("img",{src:e.img,alt:e.title,onClick:function(){return x(e)}})]},t)})}))})]})}n(16);function g(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"bubbles-container",children:Object(m.jsxs)("svg",{className:"bubbles",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 701 1024",children:[Object(m.jsxs)("g",{className:"bubbles-large","stroke-width":"7",children:[Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(10 940)",children:Object(m.jsx)("circle",{cx:"35",cy:"35",r:"35"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(373 940)",children:Object(m.jsx)("circle",{cx:"35",cy:"35",r:"35"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(408 940)",children:Object(m.jsx)("circle",{cx:"35",cy:"35",r:"35"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(621 940)",children:Object(m.jsx)("circle",{cx:"35",cy:"35",r:"35"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(179 940)",children:Object(m.jsx)("circle",{cx:"35",cy:"35",r:"35"})})})]}),Object(m.jsxs)("g",{className:"bubbles-small","stroke-width":"4",children:[Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(147 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(255 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(573 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(429 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(91 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(640 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(321 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(376 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(376 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})}),Object(m.jsx)("g",{children:Object(m.jsx)("g",{transform:"translate(497 984)",children:Object(m.jsx)("circle",{cx:"15",cy:"15",r:"15"})})})]})]})})})}n(17);function u(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"light"}),Object(m.jsx)("div",{className:"fly",children:Object(m.jsx)("div",{className:"img-coderspook"})})]})}n(18);var x=[{img:n.p+"static/media/microbit-mip.0be12c76.jpg"},{img:n.p+"static/media/pixel.0a3c6da9.jpg"},{img:n.p+"static/media/robot-mind.c0801264.jpg"},{img:l}],O=function(){var e=Object(i.useState)(2),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){var e=n>=x.length-1?0:n+1;c(e)}),4e3);return function(){return clearTimeout(e)}}),[n]),Object(m.jsx)("div",{className:"imageslider",children:x.map((function(e,t){return Object(m.jsx)("div",{className:"imageslide",style:{backgroundImage:"url(".concat(e.img,")"),marginLeft:0===t?"-".concat(100*n,"%"):void 0}},t)}))})},k=n(8);n(19);function v(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(!0),a=Object(s.a)(r,2),l=a[0],o=a[1],j=Object(i.useRef)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h2",{children:[Object(m.jsx)("strong",{children:"Say"})," Hello"]}),Object(m.jsx)("p",{children:"Heb je vragen / opmerkingen of wil je contact, vul dan onderstaand formulier in, dan laat ik snel iets van me horen."}),l?Object(m.jsxs)("form",{ref:j,onSubmit:function(e){e.preventDefault(),k.a.sendForm("service_kpcxxij","template_6gx4g3j",j.current,"6VXBc95jQBk_rmDmw").then((function(e){console.log(e.text),o(!1),c("de email is verzonden, u ontvangt zo snel mogelijk een reactie")}),(function(e){console.log(e.text),o(!1),c("helaas is er iets mis gegaan met de verzending van de mail. Stuur een email naar coderjook@gmail.com. Alvast dank")}))},className:"contactform",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("input",{type:"email",placeholder:"Emailadres",name:"email"}),Object(m.jsx)("input",{type:"text",placeholder:"Onderwerp",name:"subject"})]}),Object(m.jsx)("textarea",{placeholder:"Bericht",name:"message"}),Object(m.jsx)("input",{type:"submit",value:"Verstuur bericht",className:"button"})]}):Object(m.jsxs)(m.Fragment,{children:[n&&Object(m.jsx)("div",{className:"warning",children:n}),Object(m.jsx)("div",{onClick:function(){o(!0),c("")},className:"button",children:"open contactformulier"})]})]})}n(20);function p(e){var t=e.selectedProject,n=Object(i.useState)([]),c=Object(s.a)(n,2),r=c[0],a=c[1],l=Object(i.useState)([]),o=Object(s.a)(l,2),j=o[0],d=o[1],b=Object(i.useState)(""),h=Object(s.a)(b,2),g=h[0],u=h[1],x=t.img,O=t.title,k=t.keyword,v=t.inhoud,p=t.techniek,f=t.github,w=t.website;return Object(i.useEffect)((function(){var e;t.inhoud&&a(v.split("*")),t.techniek&&d(p.split("^")),u("show"),e=setTimeout((function(){u(""),clearTimeout(e)}),3e3)}),[t]),Object(m.jsx)(m.Fragment,{children:k&&Object(m.jsxs)("div",{id:"featured",className:g,children:[Object(m.jsxs)("div",{className:"div__text",children:[Object(m.jsx)("h2",{children:O}),Object(m.jsx)("h3",{children:"Inhoud"}),r.map((function(e){return Object(m.jsx)("p",{children:e})})),Object(m.jsx)("h3",{id:k,children:"Technieken website"}),Object(m.jsx)("p",{children:j.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[e,Object(m.jsx)("br",{})]})}))}),Object(m.jsxs)("div",{className:"buttons",children:[w&&Object(m.jsx)("a",{href:w,target:"_blank",rel:"noreferrer",className:"btn",children:"website"}),f&&Object(m.jsx)("a",{href:f,target:"_blank",rel:"noreferrer",className:"btn",children:"Github"})]})]}),Object(m.jsx)("div",{className:"div__img",children:Object(m.jsx)("img",{src:x,alt:k})})]})})}n(21);var f=n.p+"static/media/world.fe34a977.png";n(22);function w(){return Object(m.jsx)("div",{className:"dots",children:Object(m.jsxs)("div",{className:"spinner",children:[Object(m.jsx)("div",{class:"cube"}),Object(m.jsx)("div",{class:"blob top"}),Object(m.jsx)("div",{class:"blob bottom"}),Object(m.jsx)("div",{class:"blob left"}),Object(m.jsx)("div",{class:"blob move-blob"})]})})}function z(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(i.useEffect)((function(){a()}),[n]);var r=function(e){c(e),a(),console.log(e)},a=function(){var e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth",block:"end"})};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{id:"interesse",children:[Object(m.jsxs)("div",{className:"div__text",children:[Object(m.jsxs)("h2",{children:["Mijn ",Object(m.jsx)("strong",{children:"Interesses"})]}),Object(m.jsxs)("p",{children:["Zowel in mijn werk als in mijn vrije tijd vind ik het fascinerend om verbanden te ontdekken tussen dingen, mensen en gebeurtenissen en ze aan elkaar te verbinden. Of ik nu systemen aan elkaar koppel voor gegevensuitwisseling, een kindertekening gebruik als basis voor een game in Scratch, of op zoek ga naar de verbinding tussen geest en lichaam....alles staat in relatie tot elkaar."," ",Object(m.jsx)("strong",{children:'"Connecting the dots"'})]}),Object(m.jsx)(w,{})]}),Object(m.jsxs)("div",{className:"div__text",children:[Object(m.jsx)("h3",{children:"Junior Developer React "}),Object(m.jsxs)("p",{children:["Er is niets mooier dan een concept of een ingewikkeld bedrijfsproces uit te werken tot een bruikbare applicatie of feature. Ik zie het als uitdaging om de interactie tussen mens en media zo intu\xeftief mogelijk te laten verlopen. Programmeren is voor mij een creatief proces waarbij je kunt ontwerpen, structureren, knutselen en cre\xebren.."," ",Object(m.jsxs)("span",{onClick:function(){return r("caroussel")},className:"leesmeer",children:["bekijk mijn projecten"," "]})]}),Object(m.jsx)("h3",{children:"Trainer Digitale vaardigheden - Coderjook"}),Object(m.jsxs)("p",{children:["In mijn vrije tijd help ik kinderen hun digitale vaardigheden op een creatieve manier in te zetten. Ik wil kinderen de enorme wereld van digitale mogelijkheden laten zien en deze verbinden aan hun tastbare wereld. Door te programmeren, leren kinderen hoe je zelf dingen kan bouwen en maken. Zo worden ze creatiever, leren ze verbanden leggen en kritisch nadenken. Hierdoor zie ik kinderen tot bloei komen en hun talenten ontwikkelen. Kids get Future Proof.",Object(m.jsxs)("span",{onClick:function(){return r("kids")},className:"leesmeer",children:["lees meer"," "]})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("h3",{children:"Bewustzijnsontwikkeling"}),"We leven in een individualistische samenleving, maar hoe goed kennen we onszelf nu eigenlijk? Met onze telefoon staan we de hele dag in verbinding met elkaar. Maar in de verbinding met onszelf zijn we vaak nog zoekende. Juist door aandacht te besteden aan bewustzijnsontwikkeling sta je steviger in je schoenen in deze gedigitaliseerde samenleving en krijg grip op je wereld. Hoe kunnen we met inzet van media weer in contact komen met onszelf?",Object(m.jsxs)("span",{onClick:function(){return r("mission")},className:"leesmeer",children:["lees meer"," "]})]})]})]}),"kids"===n&&Object(m.jsxs)("div",{id:"kids",children:[Object(m.jsxs)("div",{className:"div__text",children:[Object(m.jsxs)("h2",{children:["Kids get ",Object(m.jsx)("strong",{children:"Future Proof"})]}),Object(m.jsx)("p",{children:"Ik vind het geweldig om kinderen hun eigen spel te laten maken met het gratis visueel programma Scratch. Ik merk dat programmeren de creativiteit van kinderen aanwakkert. Door ze te laten werken met hun hoofd, hart en handen kunnen ze op hun eigen manier hun talent erin kwijt. De een door bijvoorbeeld het grafisch ontwerpen van een spel, of het uitdenken van een verhaallijn, de ander door de techniek erachter. En de kinderen zelf\u2026die zijn vooral enorm enthousiast en trots op hun prestaties."})]}),Object(m.jsx)("div",{className:"div__img",children:Object(m.jsx)(O,{})})]}),"mission"===n&&Object(m.jsxs)("div",{id:"mission",children:[Object(m.jsx)(g,{}),Object(m.jsxs)("div",{className:"div__img",children:[Object(m.jsx)("img",{src:f,alt:"world",classname:"img-world"}),Object(m.jsx)("span",{children:"Designed by starline / Freepik"})]}),Object(m.jsxs)("div",{className:"div__text",children:[Object(m.jsxs)("h2",{children:["Krijg grip",Object(m.jsx)("strong",{children:" op je wereld"})]}),Object(m.jsxs)("p",{children:["Mijn hartewens is een applicatie te ontwikkelen waarmee je contact maakt met jezelf. Een app waarmee je jezelf durft te bevragen en waarmee je ontdekt welke patronen en overtuigingen jou gevormd hebben."," "]}),Object(m.jsxs)("p",{children:[" ",Object(m.jsxs)("strong",{children:[" ",'"We zien de dingen niet zoals ze zijn, maar zoals wij zijn." Anais Nin'," "]})," "]}),Object(m.jsx)("p",{children:"Als je weet waarmee je je identificeert en wie je in werkelijkheid bent, beweeg je je makkelijker en ben je minder kwetsbaar in deze wereld. Door jezelf uit je bubbel te halen, sta je meer open voor anderen en krijg je weer keuze om jouw pad te volgen."})]})]})]})}function y(){var e=Object(i.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{id:"hero",children:[Object(m.jsxs)("div",{className:"hero__text",children:[Object(m.jsxs)("h1",{children:["Hey, ik ben ",Object(m.jsx)("strong",{children:"Marianne"})]}),Object(m.jsx)("p",{children:"Als developer en trainer digitale vaardigheden ben ik dagelijks bezig met programmacodes. Programmeren heeft voor mij iets magisch. Ik vind het een fantastisch proces om idee\xebn om te zetten in werkbare producten."})]}),Object(m.jsx)("div",{className:"hero__img",children:Object(m.jsx)("img",{src:a,alt:"jook",className:"img-jook"})})]}),Object(m.jsx)(z,{}),Object(m.jsx)("div",{id:"street",children:Object(m.jsx)(u,{})}),Object(m.jsx)("div",{id:"caroussel",children:Object(m.jsx)(h,{selectedProject:n,setSelectedProject:c})}),Object(m.jsx)(p,{selectedProject:n,setSelectedProject:c}),Object(m.jsx)("div",{id:"contact",children:Object(m.jsx)(v,{})})]})}var N=document.getElementById("root");r.a.render(Object(m.jsx)(i.StrictMode,{children:Object(m.jsx)(y,{})}),N)}],[[23,1,2]]]);
//# sourceMappingURL=main.35c2adfb.chunk.js.map
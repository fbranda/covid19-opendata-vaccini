(this["webpackJsonpcovid19-dashboard-vaccini"]=this["webpackJsonpcovid19-dashboard-vaccini"]||[]).push([[0],{10:function(t,e,a){},93:function(t,e,a){},96:function(t,e,a){},98:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a(2),c=a.n(n),r=a(43),o=a.n(r),s=(a(93),a(7)),l=a(3),d=(a(10),a(38),a(39),a(40),a(41),function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"row m-0",style:{backgroundColor:"#0059b3"},children:Object(i.jsx)("div",{className:"col-12 d-flex flex-column justify-content-center mainBanner",children:Object(i.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(i.jsx)("img",{src:"logo.png",alt:"Logo",className:"main-logo"}),Object(i.jsx)("span",{className:"pl-3",children:"Report Vaccini Anti COVID-19"})]})})})})}),u=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"footer-wrapper p-4 clearfix",children:Object(i.jsx)("footer",{className:"footer_container container",id:"footer",children:Object(i.jsxs)("div",{className:"row title_row",children:[Object(i.jsxs)("div",{className:"col-md-4 d-flex justify-content-md-center justify-content-sm-start logo-section pt-2 pb-2",children:[Object(i.jsx)("a",{href:"http://covida19.herokuapp.com/calabria.html",className:"text-decoration-none",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:"logo_calabria.png",height:"4px",alt:"Logo",className:"logo pl-5 pr-2"})}),Object(i.jsx)("p",{className:"pt-sm-0",children:"Regione Calabria"})]}),Object(i.jsx)("div",{className:"col-md-4 d-flex justify-content-md-center justify-content-sm-start logo-section pt-2 pb-2",children:Object(i.jsx)("p",{className:"pt-sm-0",children:"\xa9 2021 Francesco Branda"})})]})})})})},m=a(44),j=a.n(m),p=function(t){var e;return Object(i.jsxs)("div",{className:"h-100 w-100 mt-2 mb-3 max-width-total",children:[Object(i.jsx)("div",{className:"timestamp mx-auto",children:Object(i.jsxs)("h6",{className:"text-center pb-4",children:["Ultimo aggiornamento: "," ",t.summary.timestamp&&j()(t.summary.timestamp).format("DD-MM-YYYY HH:mm")]})}),Object(i.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(i.jsxs)("div",{className:"d-flex justify-content-center align-items-baseline",children:[Object(i.jsx)("img",{src:"meds.png",alt:"meds",className:"pl-2 pr-5"})," ",Object(i.jsx)("h1",{className:"pl-2 mt-4 font-weight-light",children:null===(e=t.summary.tot)||void 0===e?void 0:e.toLocaleString("it")})]}),Object(i.jsx)("span",{className:"border-top mb-2"}),Object(i.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(i.jsx)("img",{src:"logo.png",alt:"fiore",height:"30"}),Object(i.jsx)("img",{src:"logo.png",alt:"fiore",height:"30"}),Object(i.jsx)("img",{src:"logo.png",alt:"fiore",height:"30",className:"pr-5"})," ",Object(i.jsx)("h4",{className:"pl-2",children:"Totale somministrazioni"})]})]})]})},h=a(5),b=a.n(h),v=a(16),g=(a(8),a(1)),x=a.n(g),f=function(t){return function(e,a){return e+ +(null===a||void 0===a?void 0:a[t])}},O=function(t){return function(e,a){return(null===a||void 0===a?void 0:a[t])>e?null===a||void 0===a?void 0:a[t]:e}},y=function(t){return function(e,a){var i=a[t];return e[i]||(e[i]=[]),e[i].push(a),e}},_=function(t){return function(e){return function(a){return a[t]===e}}},N=(_("area")("ITA"),_("TML_FASCIA_ETA"),function(t){return Object(s.a)(Object(s.a)({},t),{},{area:w[t.area],code:t.area})}),w={ABR:"Abruzzo",BAS:"Basilicata",CAL:"Calabria",CAM:"Campania",EMR:"Emilia-Romagna",FVG:"Friuli-Venezia Giulia",LAZ:"Lazio",LIG:"Liguria",LOM:"Lombardia",MAR:"Marche",MOL:"Molise",PAB:"P.A. Bolzano",PAT:"P.A. Trento",PIE:"Piemonte",PUG:"Puglia",SAR:"Sardegna",SIC:"Sicilia",TOS:"Toscana",UMB:"Umbria",VDA:"Valle d'Aosta",VEN:"Veneto"},S=(function(t){var e={};for(var a in t)e[t[a]]=a}(w),"https://raw.githubusercontent.com/fbranda/covid19-opendata-vaccini/master/dati"),k="".concat(S,"/somministrazioni-vaccini-summary-latest.json"),B="".concat(S,"/somministrazioni-vaccini-latest.json"),z="".concat(S,"/vaccini-summary-latest.json"),A="".concat(S,"/punti-somministrazione-latest.json"),C="".concat(S,"/anagrafica-vaccini-summary-latest.json"),D="".concat(S,"/last-update-dataset.json"),L="".concat(S,"/consegne-vaccini-latest.json"),F=function(t){var e,a,i;console.log(t);var n=t.dataSommVaxSummary.data.filter((function(t){return"ITA"!==t.area})).reduce(f("totale"),0),c=t.dataSupplierDoses.data,r=t.dataSommVaxDetail.data.map(N),o=t.dataVaxSummary.data.map(N),s=t.dataProfileSummary.data,l=null===t||void 0===t||null===(e=t.dataSommVaxDetail)||void 0===e?void 0:e.data,d={prima_dose:x.a.sum(null===l||void 0===l?void 0:l.map((function(t){return null===t||void 0===t?void 0:t.prima_dose}))),seconda_dose:x.a.sum(null===l||void 0===l?void 0:l.map((function(t){return null===t||void 0===t?void 0:t.seconda_dose}))),vax_somministrati:null===(a=x.a.sum(null===c||void 0===c||null===(i=c.filter((function(t){var e;return"2020-12-27"!==(null===t||void 0===t||null===(e=t.data_consegna)||void 0===e?void 0:e.substr(0,10))})))||void 0===i?void 0:i.map((function(t){return null===t||void 0===t?void 0:t.numero_dosi}))))||void 0===a?void 0:a.toLocaleString("it")},u=[{name:"Operatori Sanitari e Sociosanitari",code:"categoria_operatori_sanitari_sociosanitari",total:l.reduce(f("categoria_operatori_sanitari_sociosanitari"),0)},{name:"Personale non sanitario",code:"categoria_personale_non_sanitario",total:l.reduce(f("categoria_personale_non_sanitario"),0)},{name:"Ospiti Strutture Residenziali",code:"categoria_ospiti_rsa",total:l.reduce(f("categoria_ospiti_rsa"),0)},{name:"Over 80",code:"categoria_over80",total:l.reduce(f("categoria_over80"),0)},{name:"Forze Armate",code:"categoria_forze_armate",total:l.reduce(f("categoria_forze_armate"),0)},{name:"Personale Scolastico",code:"categoria_personale_scolastico",total:l.reduce(f("categoria_personale_scolastico"),0)}],m=x.a.groupBy(c,"fornitore"),j=Object.keys(m).map((function(t){var e=m[t].map((function(t){return t.numero_dosi}));return{totale:x.a.sum(e),fornitore:t,allDoses:m[t]}})),p=x.a.sum(j.map((function(t){return null===t||void 0===t?void 0:t.totale}))),h=x.a.groupBy(c,"area"),b=Object.keys(h).map((function(t){var e=h[t].map((function(t){return t.numero_dosi})),a=x.a.sum(e);return{area:w[t],dosi_somministrate:a}})),v=t.dataSommVaxSummary.data.reduce(y("area"),{}),g={};Object.keys(v).map((function(t){var e,a,i,n;return g[t]=[{name:"Operatori Sanitari e Sociosanitari",code:"categoria_operatori_sanitari_sociosanitari",total:v[t].reduce(f("categoria_operatori_sanitari_sociosanitari"),0)},{name:"Personale non sanitario",code:"categoria_personale_non_sanitario",total:v[t].reduce(f("categoria_personale_non_sanitario"),0)},{name:"Ospiti Strutture Residenziali",code:"categoria_ospiti_rsa",total:null===(e=v[t])||void 0===e?void 0:e.reduce(f("categoria_ospiti_rsa"),0)},{name:"Over 80",code:"categoria_over80",total:null===(a=v[t])||void 0===a?void 0:a.reduce(f("categoria_over80"),0)},{name:"Forze Armate",code:"categoria_forze_armate",total:null===(i=v[t])||void 0===i?void 0:i.reduce(f("categoria_forze_armate"),0)},{name:"Personale Scolastico",code:"categoria_personale_scolastico",total:null===(n=v[t])||void 0===n?void 0:n.reduce(f("categoria_personale_scolastico"),0)}],g})),o.forEach((function(t){g[t.code]?t.byCategory=g[t.code].reduce(y("code"),{}):t.byCategory={cat_oss:[{name:"Operatori Sanitari e Sociosanitari",code:"cat_oss",total:0}],cat_pns:[{name:"Personale non sanitario",code:"cat_pns",total:0}],cat_rsa:[{name:"Ospiti Strutture Residenziali",code:"cat_rsa",total:0}],over60:[{name:"Over 80",code:"over60",total:0}]}}));var O=x.a.groupBy(o,"code"),_=t.dataVaxLocations.data.map(N),S=0,k=x()(t.dataVaxLocations.data.map(N)).groupBy("area").map((function(t,e){return S=S>t.length?S:t.length,{area:e,locations:t.length}})).value(),B=x()(t.dataSommVaxDetail.data.map(N)).groupBy("code").map((function(t,e){var a,i=x.a.head(O[e]);return{code:e,area:null===(a=x.a.head(t))||void 0===a?void 0:a.area,categoria_operatori_sanitari_sociosanitari:x.a.sumBy(t,"categoria_operatori_sanitari_sociosanitari"),categoria_over80:x.a.sumBy(t,"categoria_over80"),categoria_ospiti_rsa:x.a.sumBy(t,"categoria_ospiti_rsa"),categoria_personale_non_sanitario:x.a.sumBy(t,"categoria_personale_non_sanitario"),categoria_forze_armate:x.a.sumBy(t,"categoria_forze_armate"),categoria_personale_scolastico:x.a.sumBy(t,"categoria_personale_scolastico"),byAge:x()(t).groupBy("fascia_anagrafica").map((function(e,a){var n,c=x.a.sumBy(e,(function(t){return t.sesso_maschile+t.sesso_femminile})),r=c/(i.dosi_consegnate||1);return{age:a,fascia_anagrafica:a,dosi_somministrate:c,dosi_consegnate:i.dosi_consegnate||0,percentuale_somministrazione:+(100*r).toFixed(1),area:null===(n=x.a.head(t))||void 0===n?void 0:n.area,totale:c}})).value(),sesso_femminile:x.a.sumBy(t,"sesso_femminile"),sesso_maschile:x.a.sumBy(t,"sesso_maschile"),dosi_consegnate:i.dosi_consegnate||0,dosi_somministrate:i.dosi_somministrate||0,percentuale_somministrazione:i.percentuale_somministrazione||0}})).value(),z=x()(t.dataSommVaxDetail.data.map(N)).groupBy((function(t){return t.fascia_anagrafica.toString().trim()})).map((function(t,e){var a=x()(t).groupBy("code").map((function(t,a){var i=x.a.sumBy(t,(function(t){return t.sesso_maschile+t.sesso_femminile})),n=i/(x.a.head(O[a]).dosi_consegnate||1);return{age:e,dosi_somministrate:i,sesso_maschile:x.a.sumBy(t,"sesso_maschile"),sesso_femminile:x.a.sumBy(t,"sesso_femminile"),code:a,dosi_consegnate:x.a.head(O[a]).dosi_consegnate||0,percentuale_somministrazione:+(100*n).toFixed(1),area:x.a.head(t).area}})).value();return{age:e,details:a}})).groupBy("age").value(),A={gen_m:s.reduce(f("sesso_maschile"),0),gen_f:s.reduce(f("sesso_femminile"),0)};return{timestamp:t.dataLastUpdate.ultimo_aggiornamento,tot:n,deliverySummary:o,categoriesAndAges:s,categories:u,categoriesByRegions:g,locations:_,gender:A,dataSomeVaxDetail:r,locationsByRegion:k,maxNumberOfLocations:S,allDosesSupplier:j,doesesByArea:b,totalSuplier:p,totalDoses:d,totalDeliverySummaryByAge:z,totalDeliverySummary:B}},E=function(){var t=Object(v.a)(b.a.mark((function t(){var e,a,i,n,c,r,o,d,u,m,j,p,h,v,g,x,f,O;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch(k),fetch(B),fetch(z),fetch(C),fetch(A),fetch(D),fetch(L)]);case 2:return e=t.sent,a=Object(l.a)(e,7),i=a[0],n=a[1],c=a[2],r=a[3],o=a[4],d=a[5],u=a[6],t.next=13,Promise.all([i.json(),n.json(),c.json(),r.json(),o.json(),d.json(),u.json()]);case 13:return m=t.sent,j=Object(l.a)(m,7),p=j[0],h=j[1],v=j[2],g=j[3],x=j[4],f=j[5],O=j[6],t.abrupt("return",Object(s.a)({},F({dataSommVaxSummary:p,dataSommVaxDetail:h,dataVaxSummary:v,dataProfileSummary:g,dataLastUpdate:f,dataVaxLocations:x,dataSupplierDoses:O})));case 23:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=a(4),R=function(t){var e=t.handleDeliveryBarChartClick,a=t.height,c=t.width,r=t.data,o=t.selected,s=t.property,l=t.title,d=t.ytitle,u=Object(n.useRef)(),m=Object(n.useRef)();Object(n.useEffect)((function(){M.g(m.current).selectAll("svg").remove(),p()}),[r,o]);var j=function(t){var e=M.g(t.node().parentNode),a=parseInt(t.style("width"),10),i=parseInt(t.style("height"),10),n=a/i;function c(){var a=parseInt(e.style("width"));t.attr("width",a),t.attr("height",Math.round(a/n))}t.attr("viewBox","0 0 ".concat(a," ").concat(i)).attr("preserveAspectRatio","xMinYMid").call(c),M.g(window).on("resize."+e.attr("id"),c)};var p=function(){var t=(null===r||void 0===r?void 0:r.reduce(O(s.yprop),0))||0,i=M.g(m.current).append("svg").attr("width",c).attr("height",a),n=50,u=50,p=M.e().padding(.2),h=M.f().domain([0,t]);h.range([a,0]),p.range([0,c]).domain(r.map((function(t){return t[s.xprop]}))),i.attr("width",c+2*u).attr("height",a+2*n).call(j).attr("id","svg-bar"),i.append("text").attr("x",c/2+u).attr("y",n/2).attr("class","title").attr("text-anchor","middle").attr(l),i.append("text").attr("x",-a/2-n).attr("y",u/2.4).attr("transform","rotate(-90)").attr("class","title").text(d);var b=i.append("g").attr("transform","translate(".concat(u,",").concat(n,")"));b.append("g").attr("class","axis").attr("transform","translate(0,".concat(a,")")).style("font-size",20).call(M.a(p));var v=b.selectAll().data(r);v.enter().append("rect").on("click",(function(t,a){e(a)})).attr("id",(function(t){return null===t||void 0===t?void 0:t.fascia_anagrafica})).attr("opacity",(function(t){return o?o===(null===t||void 0===t?void 0:t.fascia_anagrafica)?1:.3:1})).attr("class","bar").attr("x",(function(t){return p(t[s.xprop])})).attr("y",(function(t){return h(t[s.yprop])})).attr("height",(function(t){return a-h(t[s.yprop])})).attr("width",p.bandwidth()).append("title").attr("x",(function(t){return p(t[s.xprop])})).attr("y",(function(t){return h(t[s.yprop])})).text((function(t){return"Fascia ".concat(t[s.xprop]," totale: ").concat(t[s.yprop])})),v.enter().append("text").attr("class","bartext").attr("text-anchor","middle").attr("fill","white").attr("x",(function(t){return p(t[s.xprop])+35})).attr("y",(function(t){return a-h(t[s.yprop])>=0?h(t[s.yprop])-10:h(t[s.yprop])})).text((function(t){return t[s.yprop].toLocaleString("it")})),v.exit().remove()};return Object(i.jsx)("div",{ref:m,className:"chart svg-container",children:Object(i.jsx)("svg",{ref:u,className:"svg-content-responsive"})})},V=a(48),I=(a(96),function(t){var e=t.handleMapDeliveryClick,a=t.fillMapDeliveryArea,c=t.fillBy,r=t.summary,o=t.tooltip,s=Object(n.useState)([]),d=Object(l.a)(s,2),u=d[0],m=d[1],j=Object(n.useState)(0),p=Object(l.a)(j,2),h=p[0],g=p[1];Object(n.useEffect)((function(){var t=x.a.maxBy(r||{},c);g(t?t[c]:0)}),[r,c]);var f=M.c().center([0,41]).rotate([347,0]).parallels([35,45]).scale(2200).translate([249,239]);return Object(n.useEffect)((function(){(function(){var t=Object(v.a)(b.a.mark((function t(){var e,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("data/geo/it.json");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,m(V.a(a,a.objects.regions).features);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(i.jsx)("div",{className:"map-area mt-sx-3",children:Object(i.jsx)("svg",{className:"h-100 w-100",height:478,children:Object(i.jsxs)("g",{className:"countries",children:[u.map((function(t,n){var s,l,d=t.properties.reg_name,u=x.a.filter(r,(function(t){return t.area===d})),m={};return u&&u.length>0&&(m=u[0]),Object(i.jsx)("path",{d:M.d().projection(f)(t),className:"country",id:"".concat(null===(s=m)||void 0===s||null===(l=s.area)||void 0===l?void 0:l.trim()),fill:a({region:m,maxValue:h,field:c}),stroke:"#FFFFFF",strokeWidth:.7,onClick:function(){return e(m)},children:Object(i.jsx)("title",{children:Object(i.jsx)("span",{className:"bg-info",children:o(m)})})},"path-".concat(n))})),");"]})})})}),P=function(t){var e,a,c=t.data,r=Object(n.useState)([]),o=Object(l.a)(r,2),s=(o[0],o[1]),d=Object(n.useState)([]),u=Object(l.a)(d,2),m=(u[0],u[1]),j=Object(n.useState)(null),p=Object(l.a)(j,2),h=p[0],b=p[1],v=Object(n.useState)(0),x=Object(l.a)(v,2),f=(x[0],x[1]),O=Object(n.useState)({}),y=Object(l.a)(O,2),_=y[0],N=y[1],w=Object(n.useState)([]),S=Object(l.a)(w,2),k=S[0],B=S[1],z=Object(n.useState)(null),A=Object(l.a)(z,2),C=A[0],D=A[1];Object(n.useEffect)((function(){Object(g.isEmpty)(c)||(s(c.totalDeliverySummary),B(c.categoriesAndAges),N(c.gender),m(c.totalDeliverySummary),f(c.tot))}),[c]);var L=function(){b(null),m(c.totalDeliverySummary),f(c.tot),N(c.gender),B(c.categoriesAndAges),D(null),s(c.totalDeliverySummary)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12 d-flex justify-content-end",children:Object(i.jsx)("img",{alt:"",src:"",onClick:L})})}),Object(i.jsxs)("div",{className:"row",style:{backgroundColor:"#F8FBFE"},children:[Object(i.jsx)("div",{className:"col-12 col-lg-5 h-100 order-md-2 order-lg-1 ",children:Object(i.jsx)("div",{className:"container-info d-none d-sm-none d-md-flex d-lg-flex"})}),Object(i.jsx)("div",{className:"col-12  d-flex justify-content-center align-items-center p-5 bg-title-plot"})]}),Object(i.jsxs)("div",{className:"row position-powerbi",style:{backgroundColor:"#F8FBFE"},children:[Object(i.jsx)("div",{className:"col-12 col-md-6 align-items-end testo-info-campania d-none d-sm-none d-md-flex d-lg-flex"}),Object(i.jsxs)("div",{className:"col-12 col-md-6  position-relative",children:[Object(i.jsx)("div",{className:"bg-gradient-bar"}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-6 d-flex align-items-baseline",children:[Object(i.jsx)("img",{src:"user_f.png",alt:"users",width:"75px"}),Object(i.jsx)("span",{className:"text-center font-weight-light text-white",children:Object(i.jsx)("h3",{className:"total_gender",children:null===_||void 0===_||null===(e=_.gen_f)||void 0===e?void 0:e.toLocaleString("it")})})]}),Object(i.jsxs)("div",{className:"col-6  d-flex align-items-baseline",children:[Object(i.jsx)("img",{src:"user_m.png",alt:"users",width:"75px"}),Object(i.jsx)("span",{className:"text-center font-weight-light text-white",children:Object(i.jsx)("h3",{className:"total_gender",children:null===_||void 0===_||null===(a=_.gen_m)||void 0===a?void 0:a.toLocaleString("it")})})]})]})]}),Object(i.jsx)("div",{className:"col-12 col-md-5",style:{backgroundColor:"#17324D"},children:Object(i.jsxs)("div",{className:"p-4 position-relative",children:[Object(i.jsx)("div",{style:{height:100},children:Object(i.jsx)("img",{src:"group_person.svg",alt:"Logo",className:"img-fluid"})}),Object(i.jsxs)("div",{className:"text-white w-100",children:[Object(i.jsx)("div",{className:"w-100 h-100 d-flex justify-content-end",children:Object(i.jsx)("img",{src:"logo.png",width:"40",height:"40",alt:"Logo"})}),Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-end text-right",children:Object(i.jsxs)("h3",{children:["Somministrazioni",Object(i.jsx)("br",{})," per fasce di et\xe0"]})})]})]})}),Object(i.jsx)("div",{className:"col-12  col-md-7",style:{backgroundColor:"#17324D"},children:Object(i.jsx)(R,{title:"",xtitle:"Fascia d'et\xe0",ytitle:"",width:800,handleDeliveryBarChartClick:function(t){if(h&&L(),t.fascia_anagrafica===C)L();else{var e=Object(g.find)(c.categoriesAndAges,(function(e){return e.fascia_anagrafica===t.fascia_anagrafica}));B(c.categoriesAndAges),f(e.totale),D(t.fascia_anagrafica),m(Object(g.head)(c.totalDeliverySummaryByAge[t.fascia_anagrafica]).details),N({gen_m:t.sesso_maschile,gen_f:t.sesso_femminile}),s(Object(g.head)(c.totalDeliverySummaryByAge[t.fascia_anagrafica]).details)}},height:300,selected:C,property:{xprop:"fascia_anagrafica",yprop:"totale"},data:k})})]})]})},T=function(t){var e=t.handleRectClick,a=t.height,c=t.width,r=t.data,o=t.selectedCodeCategory,s=t.property,l=t.title,d=(t.ytitle,Object(n.useRef)()),u=Object(n.useRef)();Object(n.useEffect)((function(){M.g(u.current).selectAll("svg").remove(),j()}),[r,o]);var m=function(t){var e=M.g(t.node().parentNode),a=parseInt(t.style("width"),10),i=parseInt(t.style("height"),10),n=a/i;function c(){var a=parseInt(e.style("width"));t.attr("width",a),t.attr("height",Math.round(a/n))}t.attr("viewBox","0 0 ".concat(a," ").concat(i)).attr("preserveAspectRatio","xMinYMid").call(c),M.g(window).on("resize."+e.attr("id"),c)};var j=function(){var t=(null===r||void 0===r?void 0:r.reduce(O(s.yprop),0))||0,i=M.g(u.current).append("svg").attr("width",c).attr("height",a),n=50,d=170,j=M.f().domain([0,t]).range([0,c-20]),p=M.e().padding(.4).range([0,a]).domain(r.map((function(t){return t[s.xprop]})));i.attr("width",c+2*d).attr("height",a+2*n).call(m).attr("id","svg-horizontal-bar"),i.append("text").attr("x",c/2+d).attr("y",n/2).attr("class","hb-title").attr("text-anchor","middle").attr(l);var h=i.append("g").attr("transform","translate(".concat(d,",").concat(n,")"));h.append("g").attr("class","hb-axis").call(M.b(p)).style("font-size","18px").attr("transform","translate(85,0)");var b=h.selectAll().data(r);b.enter().append("rect").on("click",(function(t,a){e(a)})).attr("opacity",(function(t){return o===t.code?1:o?.3:1})).attr("class","hb-bar").attr("x",j(0)+95).attr("y",(function(t){return p(t[s.xprop])})).attr("width",(function(t){return j(t[s.yprop])})).attr("height",p.bandwidth()).append("hb-title").attr("x",(function(t){return j(t[s.xprop])})).attr("y",(function(t){return p(t[s.yprop])})).text((function(t){return"Fascia ".concat(t[s.xprop]," totale: ").concat(t[s.yprop])})),b.enter().append("text").attr("class","hb-bartext").attr("text-anchor","middle").attr("fill","white").attr("x",(function(t){return j(t[s.yprop])+140})).attr("y",(function(t){return a-p(t[s.xprop])>=0?p(t[s.xprop])+20:p(t[s.xprop])})).text((function(t){return t[s.yprop].toLocaleString("it")})),b.exit().remove()};return Object(i.jsx)("div",{ref:u,className:"chart svg-container",style:{marginTop:40},children:Object(i.jsx)("svg",{ref:d,className:"svg-content-responsive"})})},Y=function(t){var e=t.data,a=Object(n.useState)([]),c=Object(l.a)(a,2),r=c[0],o=c[1],s=Object(n.useState)([]),d=Object(l.a)(s,2),u=(d[0],d[1]),m=Object(n.useState)(null),j=Object(l.a)(m,2),p=j[0],h=j[1],b=Object(n.useState)(0),v=Object(l.a)(b,2),x=v[0],f=v[1],O=Object(n.useState)("dosi_somministrate"),y=Object(l.a)(O,2),_=(y[0],y[1]),N=Object(n.useState)(null),w=Object(l.a)(N,2),S=w[0],k=w[1];Object(n.useEffect)((function(){Object(g.isEmpty)(e)||(o(e.categories),f(e.tot),u(null===e||void 0===e?void 0:e.totalDeliverySummary))}),[e]);var B=function(){k(null),o(null===e||void 0===e?void 0:e.categories),f(null===e||void 0===e?void 0:e.tot),u(null===e||void 0===e?void 0:e.totalDeliverySummary),h(null),_("dosi_somministrate")};return Object(i.jsxs)("div",{className:"row ",children:[Object(i.jsxs)("div",{style:{marginTop:40},className:"col-12  d-flex justify-content-center align-items-center p-5 bg-title-plot",children:[Object(i.jsx)("img",{src:"logo.png",width:"86",height:"86",alt:"Logo",className:"img-fluid",style:{zIndex:10}}),Object(i.jsx)("h3",{className:"text-center",children:"Somministrazioni per categoria"})]}),Object(i.jsxs)("div",{className:"col-12 col-md-12 h-100  ",children:[Object(i.jsx)("div",{className:"mb-5  d-lg-none ",style:{position:"relative",background:"#013366"},children:Object(i.jsxs)("div",{className:"text-white w-100",children:[Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pt-5 pl-4",children:Object(i.jsxs)("h5",{children:["Totale",Object(i.jsx)("br",{}),"somministrazioni"]})}),Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pl-4",children:Object(i.jsx)("p",{className:"numeri_box",children:x&&x.toLocaleString("it")})})]})}),Object(i.jsx)("div",{className:"col-3 col-md-3  d-none d-lg-block",style:{height:100},children:Object(i.jsx)("div",{style:{position:"relative",background:"#17324D",top:-90,left:105},children:Object(i.jsxs)("div",{className:"text-white w-100",children:[Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pt-3 pl-4",children:Object(i.jsxs)("h5",{children:["Totale",Object(i.jsx)("br",{}),"somministrazioni"]})}),Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pl-4",children:Object(i.jsx)("p",{className:"numeri_box",children:x&&x.toLocaleString("it")})})]})})})]}),Object(i.jsx)("div",{className:"col-12  d-flex justify-content-center",children:Object(i.jsx)(T,{title:"",xtitle:"Vaccinazioni per categoria",handleRectClick:function(t){if(S&&B(),p===(null===t||void 0===t?void 0:t.code))B();else if(t){var a=Object(g.find)(e.categories,(function(e){return e.code===t.code}));h(t.code),_(t.code),f(null===a||void 0===a?void 0:a.total)}},ytitle:"",width:350,height:360,property:{xprop:"name",yprop:"total"},data:r,selectedCodeCategory:p})}),Object(i.jsxs)("div",{className:"col-12 col-md-6 h-100",style:{overflow:"hidden"},children:[Object(i.jsx)("div",{className:"p-4 position-relative d-lg-none",children:Object(i.jsxs)("div",{className:"w-100 h-100 d-flex justify-content-start pr-5",children:[Object(i.jsx)("img",{src:"logo.png",width:"35",height:"35",alt:"Logo"}),Object(i.jsxs)("h5",{className:"pl-3 pl-sm-1",children:["Vaccinazioni",Object(i.jsx)("br",{})," per regione"]})]})}),Object(i.jsx)("div",{className:"p-4 position-relative d-none d-lg-block",style:{left:"300px",top:"190px"},children:Object(i.jsxs)("div",{className:"w-100 h-100 d-flex justify-content-start pr-5",children:[Object(i.jsx)("img",{src:"logo.png",width:"35",height:"35",alt:"Logo"}),Object(i.jsxs)("h5",{className:"pl-3 pl-sm-1",children:["Somministrazioni",Object(i.jsx)("br",{})," per regione"]})]})})]})]})},U=function(t){var e=+t.width,a=+t.height,c=Object(n.useRef)(),r=Object(n.useRef)();Object(n.useEffect)((function(){M.g(r.current).selectAll("svg").remove(),s()}),[t]);var o=function(t){var e=M.g(t.node().parentNode),a=parseInt(t.style("width"),10),i=parseInt(t.style("height"),10),n=a/i;function c(){var a=parseInt(e.style("width"));t.attr("width",a),t.attr("height",Math.round(a/n))}t.attr("viewBox","0 0 ".concat(a," ").concat(i)).attr("preserveAspectRatio","xMinYMid").call(c),M.g(window).on("resize."+e.attr("id"),c)};var s=function(){var i=(null===t||void 0===t?void 0:t.data)||[],n=(null===i||void 0===i?void 0:i.reduce(O(t.property.yprop),0))||0,c=M.g(r.current).append("svg").attr("width",e).attr("height",a),s=50,l=20,d=M.e().padding(.5),u=M.f().domain([0,n]);u.range([a,0]),d.range([0,e]).domain(i.map((function(e){return e[t.property.xprop]}))),c.attr("width",e+2*l).attr("height",a+2*s).call(o).attr("id","svg-bar"),c.append("text").attr("x",e/8+l).attr("y",s/6).attr("class","title-bar-dark").attr("text-anchor","middle").attr(t.title),c.append("text").attr("x",-a/2-s).attr("y",l/2.4).attr("transform","rotate(-90)").attr("class","title-bar-dark").text(t.ytitle);var m=c.append("g").attr("transform","translate(".concat(l,",").concat(s,")"));m.append("g").attr("class","axis-dark").attr("transform","translate(0,".concat(a,")")).style("font-size",20).call(M.a(d));var j=m.selectAll().data(i);j.enter().append("rect").on("click",(function(e,a){t.handleDeliveryBarChartClick(a)})).attr("id",(function(t){return null===t||void 0===t?void 0:t.fornitore})).attr("opacity",(function(e){var a;return(null===(a=t.selected)||void 0===a?void 0:a.fornitore)===(null===e||void 0===e?void 0:e.fornitore)?1:t.selected?.3:1})).attr("class","bg-bar").attr("x",(function(e){return+d(e[t.property.xprop])})).attr("y",(function(e){return u(e[t.property.yprop])})).attr("height",(function(e){return a-u(e[t.property.yprop])})).attr("width",d.bandwidth()).append("title").attr("x",(function(e){return d(e[t.property.xprop])})).attr("y",(function(e){return u(e[t.property.yprop])})).text((function(e){return"Fascia ".concat(e[t.property.xprop]," totale: ").concat(e[t.property.yprop])})),j.enter().append("text").attr("class","bartext-dark").attr("text-anchor","center").attr("fill","black").attr("x",(function(e){return d(e[t.property.xprop])})).attr("y",(function(e){return a-u(e[t.property.yprop])>=0?u(e[t.property.yprop])-10:u(e[t.property.yprop])})).text((function(e){var a;return null===(a=e[t.property.yprop])||void 0===a?void 0:a.toLocaleString("it")})),j.exit().remove()};return Object(i.jsx)("div",{ref:r,children:Object(i.jsx)("svg",{ref:c})})},G=function(t){var e=Object(n.useState)(null),a=Object(l.a)(e,2),c=a[0],r=a[1],o=Object(n.useState)(null),s=Object(l.a)(o,2),d=s[0],u=s[1],m=Object(n.useState)([]),j=Object(l.a)(m,2),p=j[0],h=j[1],b=Object(n.useState)(0),v=Object(l.a)(b,2),x=v[0],f=v[1],O=function(){var e,a,i;h(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.allDosesSupplier),f(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.totalSuplier),u(null),r(null),f(null===t||void 0===t||null===(i=t.data)||void 0===i?void 0:i.totalSuplier)};Object(n.useEffect)((function(){var e,a;Object(g.isEmpty)(t)||(h(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.allDosesSupplier),f(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.totalSuplier))}),[t]);var y=function(t){u(t)};return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-12 col-md-12 h-100",children:[Object(i.jsxs)("div",{className:"col-12 d-flex justify-content-center align-items-center p-5 bg-title-plot",children:[Object(i.jsx)("h3",{className:"text-center",children:"Distribuzione vaccini per fornitore"}),Object(i.jsx)("img",{src:"logo.png",width:"86",height:"86",alt:"Logo",className:"d-none d-lg-block",style:{position:"absolute",right:28,zIndex:10}})]}),Object(i.jsxs)("div",{className:"col-12 col-md-12 h-100",children:[Object(i.jsx)("div",{className:"mb-5 d-lg-none",style:{position:"relative",background:"#013366"},children:Object(i.jsxs)("div",{className:"text-white w-100",children:[Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pt-5 pl-4",children:Object(i.jsx)("h5",{children:"Totale vaccini distribuiti"})}),Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pl-4",children:Object(i.jsxs)("p",{className:"numeri_box",children:[null===x||void 0===x?void 0:x.toLocaleString("it"),"             "]})}),Object(i.jsx)("div",{className:"col-12 d-flex justify-content-end  pb-2",children:Object(i.jsx)("img",{alt:"",src:"",onClick:O,height:35})})]})}),Object(i.jsx)("div",{className:"offset-md-9 col-md-3  d-none d-lg-block",style:{height:100},children:Object(i.jsx)("div",{style:{position:"relative",background:"#17324D",top:-90,left:-50},children:Object(i.jsxs)("div",{className:"text-white w-100",children:[Object(i.jsx)("div",{className:"w-100 h-100 d-flex justify-content-start pt-3 pl-4",children:Object(i.jsxs)("h5",{children:["Totale",Object(i.jsx)("br",{}),"vaccini distribuiti"]})}),Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pl-4",children:Object(i.jsx)("p",{className:"numeri_box",children:null===x||void 0===x?void 0:x.toLocaleString("it")})}),Object(i.jsx)("div",{className:"col-12 d-flex justify-content-end  pb-2",children:Object(i.jsx)("img",{alt:"",src:"",onClick:O,height:35})})]})})})]})]}),Object(i.jsx)("div",{className:"col-12 col-md-6 h-100 pb-5",children:Object(i.jsx)(U,{title:"",xtitle:"Fascia d'et\xe0",ytitle:"",width:"800",handleDeliveryBarChartClick:function(t){d===t?O():c?(O(),function(t){if(document.getElementById(t)&&t){var e=new MouseEvent("click",{bubbles:!0,cancelable:!0});document.getElementById(t).dispatchEvent(e)}}(t.fornitore)):(y(t),u(t),f(null===t||void 0===t?void 0:t.totale))},height:"300",selected:d,property:{xprop:"fornitore",yprop:"totale"},data:p})}),Object(i.jsx)("div",{className:" d-none d-sm-none d-md-block d-lg-none  col-md-6"})]})},H=a(17),J=a.n(H),W=a(47),Z=a.n(W);a(97);J.a.DataTable=Z.a;var q=[{title:"Regione",data:"area"},{title:"Provincia",data:"provincia"},{title:"Comune",data:"comune"},{title:"Punto di somministrazione",data:"presidio_ospedaliero"}],K=function(t){return Object(n.useEffect)((function(){var e,a=t.setLocationCount,i=J()("#datatable-locations").find("table").DataTable({dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",paging:!1,searching:!0,destroy:!0,bLengthChange:!1,info:!1,scrollY:"550px",scrollCollapse:!0,data:(null===(e=t.summary)||void 0===e?void 0:e.locations)||[],columns:q});(null===t||void 0===t?void 0:t.selected)?i.search(t.selected).draw():i.search(" ").draw(),a(i.rows({search:"applied"}).count()/2)})),Object(i.jsx)("div",{id:"datatable-locations",children:Object(i.jsx)("table",{className:"display compact",cellSpacing:"0",width:"100%"})})},Q=function(){return Object(i.jsx)("div",{className:"text-white w-100",children:Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pt-5 pl-4",children:Object(i.jsx)("h5",{children:"Totale punti di somministrazione"})})})},X=function(){return Object(i.jsxs)("div",{className:"w-100 h-100 d-flex justify-content-start pr-5",children:[Object(i.jsx)("img",{src:"logo.png",width:"35",height:"35",alt:"Logo"}),Object(i.jsxs)("h5",{className:"pl-3 pl-sm-1",children:["Principali punti di",Object(i.jsx)("br",{})," somministrazione ",Object(i.jsx)("br",{})," della regione"]})]})},$=function(t){var e=t.data,a=Object(n.useState)({}),c=Object(l.a)(a,2),r=c[0],o=c[1],d=Object(n.useState)(""),u=Object(l.a)(d,2),m=u[0],j=u[1],p=Object(n.useState)(0),h=Object(l.a)(p,2),b=h[0],v=h[1];Object(n.useEffect)((function(){Object(g.isEmpty)(e)||o(e)}),[e]);var x=function(){j(""),v(0)};return Object(i.jsxs)("div",{className:"row ",children:[Object(i.jsxs)("div",{className:"col-12 d-flex justify-content-center align-items-center p-5 bg-title-plot",children:[Object(i.jsx)("img",{src:"logo.png",width:"86",height:"86",alt:"Logo",className:"img-fluid",style:{zIndex:10}}),Object(i.jsx)("h3",{className:"text-center",children:"Principali punti di somministrazione"})]}),Object(i.jsxs)("div",{className:"col-12 col-md-12 h-100 p-0",children:[Object(i.jsx)("div",{className:"mb-5  d-lg-none ",style:{position:"relative",background:"#013366"},children:Object(i.jsxs)("div",{className:"text-white w-100",children:[Object(i.jsx)(Q,{}),Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pl-4",children:Object(i.jsx)("p",{className:"numeri_box",children:b})}),Object(i.jsx)("div",{className:"col-12 d-flex justify-content-end  pb-2",children:Object(i.jsx)("img",{alt:"",src:"",onClick:x,height:35})})]})}),Object(i.jsx)("div",{className:"col-3 col-md-3 h-100 d-none d-lg-block",children:Object(i.jsx)("div",{style:{position:"relative",background:"#17324D",top:-90,left:40},children:Object(i.jsxs)("div",{className:"text-white w-100",children:[Object(i.jsx)(Q,{}),Object(i.jsx)("div",{className:"w-100  h-100 d-flex justify-content-start pl-4",children:Object(i.jsx)("p",{className:"numeri_box",children:b})}),Object(i.jsx)("div",{className:"col-12 d-flex justify-content-end  pb-2",children:Object(i.jsx)("img",{alt:"",src:"",onClick:x,height:35})})]})})})]}),Object(i.jsxs)("div",{className:"col-12 col-md-6 pt-5",children:[Object(i.jsx)("div",{className:"p-4 position-relative d-lg-none",children:Object(i.jsx)(X,{})}),Object(i.jsx)("div",{className:"p-4 position-relative d-none d-lg-block",style:{left:"300px",top:"190px"},children:Object(i.jsx)(X,{})}),Object(i.jsx)(I,{fillMapDeliveryArea:function(t){var e=t.region,a=t.maxValue,i=t.field,n=0;if(e.area===m)n=1;else if(m){var c=e[i]/(2*a);n=Object(g.max)([c,.1])}else n=Object(g.max)([e[i]/a,.1]);return"rgba(23,50,77,".concat(n,")")},summary:e.locationsByRegion,handleMapDeliveryClick:function(t){m===t.area?j(null):j(t.area)},tooltip:function(t){return t.area+" "+(t.locations&&t.locations.toLocaleString("it"))},fillBy:"locations",className:"ml-5 w-100 h-100"})]}),Object(i.jsx)("div",{className:"col-12 col-md-6 pt-3 pl-3",children:Object(i.jsx)(K,{summary:Object(s.a)({},r),selected:m,className:"mr-5 h-100",setLocationCount:v})})]})};var tt=function(){var t,e,a=Object(n.useState)({}),c=Object(l.a)(a,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){E().then((function(t){!function(){var t=document.getElementById("loader-custom");t&&(t.className=t.className.includes("d-none")?t.className:t.className+" d-none")}(),o(t)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(i.jsx)(p,{className:"mb-3",summary:Object(s.a)({},r)})})}),Object(i.jsx)("div",{style:{padding:20}}),Object(i.jsx)("div",{className:"row position-powerbi",style:{backgroundColor:"#17324D"},children:Object(i.jsx)("div",{className:"col-12",children:Object(i.jsxs)("div",{className:"p-4 position-relative d-flex justify-content-center  h-100",style:{backgroundColor:"#17324D",minHeight:240},children:[Object(i.jsx)("div",{className:"d-none  d-lg-block",style:{height:100,position:"absolute",left:"20px",top:"20px"},children:Object(i.jsx)("img",{src:"group_person.svg",alt:"Logo",className:"img-fluid"})}),Object(i.jsx)("div",{className:"  d-none  d-lg-block position-absolute center-logo",children:Object(i.jsx)("img",{src:"logo.png",width:"80",height:"80",alt:"Logo"})}),Object(i.jsxs)("div",{className:"text-white w-100",style:{padding:20},children:[Object(i.jsxs)("div",{className:"w-100  h-100 align-items-center d-flex justify-content-center text-right",children:[Object(i.jsxs)("h4",{style:{marginRight:10},children:["Totale",Object(i.jsx)("br",{})," persone vaccinate"]}),Object(i.jsxs)("div",{className:"d-flex justify-content-center text-right align-items-center border-pink",children:[" ",null===r||void 0===r||null===(t=r.totalDoses)||void 0===t||null===(e=t.seconda_dose)||void 0===e?void 0:e.toLocaleString("it")]})]}),Object(i.jsx)("div",{className:"text-center position-relative",style:{top:-10},children:"(a cui sono state somministrate la prima e la seconda dose di vaccino)"})]})]})})}),Object(i.jsx)(P,{data:r}),Object(i.jsx)(Y,{data:r}),Object(i.jsx)(G,{data:r}),Object(i.jsx)($,{data:r}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-12 text-center pt-5 pb-3",children:["I dati visualizzati sono disponibili all'indirizzo"," ",Object(i.jsx)("a",{href:"https://github.com/italia/covid19-opendata-vaccini",children:"https://github.com/italia/covid19-opendata-vaccini"})]})})]}),Object(i.jsx)(u,{})]})},et=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(e){var a=e.getCLS,i=e.getFID,n=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),i(t),n(t),c(t),r(t)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(tt,{})}),document.getElementById("root")),et()}},[[98,1,2]]]);
//# sourceMappingURL=main.0e4cee8a.chunk.js.map
(this.webpackJsonpdogs=this.webpackJsonpdogs||[]).push([[0],{29:function(e,a,t){e.exports=t(65)},38:function(e,a,t){},58:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=(t(34),t(37),t(11)),s=(t(38),t(7)),i=t(8),m=t(10),u=t(9),d=t(27),p=t(1),g=(t(58),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"DogList"},r.a.createElement("h1",{className:"display-1 text-center mt-4 mb-4"},r.a.createElement("i",{className:"em em-heartpulse","aria-label":"GROWING HEART"}),"Adopt!",r.a.createElement("i",{className:"em em-heartpulse","aria-label":"GROWING HEART"})),r.a.createElement("div",{className:"row"},this.props.dogs.map((function(e){return r.a.createElement("div",{className:"Dog col-md-6 col-lg-4 col-xl-3 text-center",key:e.name},r.a.createElement(l.b,{to:"/".concat(e.name)},r.a.createElement("img",{className:"rounded-circle",src:e.photo,alt:e.name}),r.a.createElement("h3",{className:"Underline"},e.name)))}))))}}]),t}(n.Component)),v=(t(63),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).getDog=function(){var a=e.props.match.params.name,t=[];return e.props.dogs.map((function(e){return e.name.toLowerCase()===a.toLowerCase()&&(t=e)})),t},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.getDog(this.props);return console.log(e),r.a.createElement("div",{className:"DogDetails row justify-content-center mt-5"},r.a.createElement("div",{className:"col-11 col-lg-5"},r.a.createElement("div",{className:"DogDetails-card card mb-5"},r.a.createElement("img",{className:"card-img-top",src:e.photo,alt:e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},e.name),r.a.createElement("h4",{className:"card-subtitle text-muted"},"Age: ",e.age),r.a.createElement("h4",{className:"mt-1 card-subtitle text-muted"},e.gender),r.a.createElement("h4",{className:"mt-1 card-subtitle text-muted"},"Size: ",e.size)),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},e.description)),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:e.url,target:"_blank",className:"btn btn-info"},"Adopt Me")))))}}]),t}(n.Component)),b=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return(r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{dogs:e.props.dogs})}}),r.a.createElement(p.b,{exact:!0,path:"/:name",render:function(a){return r.a.createElement(v,Object.assign({dogs:e.props.dogs},a))}}),r.a.createElement(p.a,{to:"/"})))}}]),t}(n.Component),h=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.dogs.map((function(e){return r.a.createElement("li",{className:"nav-item",key:e.name},r.a.createElement(l.c,{to:"/".concat(e.name),className:"nav-link"},e.name))}));return(r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(l.b,{to:"/",className:"navbar-brand"},"Dog App"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.c,{exact:!0,to:"/",className:"nav-link"},"Home")),e))))}}]),t}(n.Component),E=(t(64),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).getDogs=function(){var e=new d.Client({apiKey:"aYkEPGGl0yVpNEu51e6NHlAVvHBtvUDdzZNkBqGx8ycXhzZTFM",secret:"UVn3DKS4Ne7jtUZdUcoY2uHRLwTIRpNX4DXaYqR0"}),a=[];e.animal.search({type:"",location:"New York, Ny",limit:25}).then((function(e){console.log(e),e.data.animals.map((function(e){return a.push({id:e.id,name:e.name,age:e.age,status:e.status,description:e.description,photo:e.primary_photo_cropped.large,gender:e.gender,size:e.size,url:e.url})})),n.setState({dogs:a})})).catch((function(e){alert(e)}))},n.state={dogs:[]},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getDogs()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{dogs:this.state.dogs}),r.a.createElement("div",{className:"container"},r.a.createElement(b,{dogs:this.state.dogs})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{basename:"/DogApp"},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.dddaf474.chunk.js.map
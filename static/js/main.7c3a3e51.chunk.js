(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(n,e,t){n.exports=t(30)},30:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(11),o=t.n(i),c=t(32),l=t(5),u=t(6),s=t(8),h=t(7),f=t(9),d=t(2),m=t(3),p=t(31);function g(){var n=Object(m.a)(["\n    align-items: flex-end;\n    display: flex;\n    font-size: 10px;\n    text-transform: uppercase;\n    color: ",";\n"]);return g=function(){return n},n}function v(){var n=Object(m.a)(["\n\tcursor: pointer;\n    fill: ",";\n    margin-left: 5px;\n\n\t@media (max-width: 576px) {\n    }\n"]);return v=function(){return n},n}function b(){var n=Object(m.a)(['\n    font-family: "kotori_rosebold";\n    font-size: 15px;\n']);return b=function(){return n},n}function x(){var n=Object(m.a)(["\n    align-items: flex-end;\n    display: flex;\n    justify-content: space-between;\n    padding: 30px 60px;\n    position: fixed;\n    width: 100%;\n    z-index: 1;\n\n    @media (max-width: 576px) {\n        padding: 30px;\n    }\n"]);return x=function(){return n},n}var w=function(n){var e=n.onClick;return a.a.createElement(y,null,a.a.createElement(j,null,a.a.createElement(p.a,{to:"/"},"Anna Zayarova")),a.a.createElement(O,null,a.a.createElement("span",null,"Click me"),a.a.createElement(k,{onClick:e,height:"24",width:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"}))))},y=d.c.header(x()),j=d.c.div(b()),k=d.c.svg(v(),function(n){return n.theme.red}),O=d.c.div(g(),function(n){return n.theme.text});a.a.Component;function E(){var n=Object(m.a)(["\n    color: ",';\n    font-size: 16px;\n    font-family: "kotori_roseregular";\n    margin-right: 40px;\n\n    @media (max-width: 576px) {\n        margin-right: 20px;\n    }\n']);return E=function(){return n},n}function C(){var n=Object(m.a)(["\n    align-items: center;\n    background: ","\n    display: flex;\n    flex-direction: row;\n    height: 30vh;\n    padding-left: 60px;\n    width: 100%;\n\n    @media (max-width: 576px) {\n        padding-left: 30px;\n    }\n"]);return C=function(){return n},n}var z=function(){return a.a.createElement(A,null,a.a.createElement(M,{rel:"noopener noreferrer",href:"https://www.github.com/annazayarova",target:"_blank"},"GitHub"),a.a.createElement(M,{rel:"noopener noreferrer",href:"https://www.behance.net/annazayarova",target:"_blank"},"Behance"),a.a.createElement(M,{rel:"noopener noreferrer",href:"http://www.linkedin.com/in/annazayarova",target:"_blank"},"LinkedIn"),a.a.createElement(M,{rel:"noopener noreferrer",href:"mailto:annazayarova@gmail.com"},"Email"))},A=d.c.div(C(),function(n){return n.theme.text}),M=d.c.a(E(),function(n){return n.theme.bg});function q(){var n=Object(m.a)(["\n  \tcolor: ",';\n  \tfont-family: "kotori_roseregular";\n  \tfont-size: 15px;\n  \tfont-weight: normal;\n  \tletter-spacing: 2px;\n  \tmargin: 30px 0 0;\n  \tpadding: 0;\n  \ttext-transform: uppercase;\n\n  \t@media (max-width: 576px) {\n    \tfont-size: 13px;\n    \tletter-spacing: 0px;\n    \tmargin: 10px 0 0;\n  \t}\n']);return q=function(){return n},n}var T=d.c.div(q(),function(n){return n.theme.text}),W=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=["Progressive web applications","headless e-commerce solutions","modern technologies: ES6, React, GraphQL"],e=new(function(){function n(e){Object(l.a)(this,n),this.el=e,this.chars="ontfderntractivedr",this.update=this.update.bind(this)}return Object(u.a)(n,[{key:"setText",value:function(n){var e=this,t=this.el.innerText,r=Math.max(t.length,n.length),a=new Promise(function(n){return e.resolve=n});this.queue=[];for(var i=0;i<r;i++){var o=t[i]||"",c=n[i]||"",l=Math.floor(40*Math.random()),u=l+Math.floor(40*Math.random());this.queue.push({from:o,to:c,start:l,end:u})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),a}},{key:"update",value:function(){for(var n="",e=0,t=0,r=this.queue.length;t<r;t++){var a=this.queue[t],i=a.from,o=a.to,c=a.start,l=a.end,u=a.char;this.frame>=l?(e++,n+=o):this.frame>=c?((!u||Math.random()<.28)&&(u=this.randomChar(),this.queue[t].char=u),n+='<span className="dud">'.concat(u,"</span>")):n+=i}this.el.innerHTML=n,e===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),n}())(document.querySelector(".scramble")),t=0;!function r(){e.setText(n[t]).then(function(){setTimeout(r,3e3)}),t=(t+1)%n.length}()}},{key:"render",value:function(){return a.a.createElement(T,{className:"scramble"})}}]),e}(a.a.Component),_=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),e}(r.Component);function D(){var n=Object(m.a)(["\n    width: 50px;\n    text-align: left;\n    position: absolute;\n    bottom: 5px;\n    left: 50%;\n    margin-left: -25px;\n    z-index: 99;\n    transform: rotate(90deg);\n"]);return D=function(){return n},n}d.c.div(D());function H(){var n=Object(m.a)(["\n    color: ",';\n    font-family: "kotori_rosebold";\n    font-size: 60px;\n    line-height: 40px;\n    margin-bottom: 5px;\n    padding: 0;\n\n    @media (max-width: 576px) {\n        font-size: 40px;\n    }\n']);return H=function(){return n},n}function L(){var n=Object(m.a)(["\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    height: 70vh;\n    padding-left: 60px;\n\n    @media (max-width: 576px) {\n        padding-left: 30px;\n    }\n"]);return L=function(){return n},n}function R(){var n=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n    width: 100%;\n"]);return R=function(){return n},n}var S=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(V,null,a.a.createElement(_,null),a.a.createElement(B,null,a.a.createElement(N,null,"Web Development"),a.a.createElement(W,null)),a.a.createElement(z,null))}}]),e}(r.Component),V=d.c.div(R()),B=d.c.div(L()),N=d.c.h2(H(),function(n){return n.theme.text});function P(){var n=Object(m.a)(["\n\tbody {\n\t\tbackground: ",';\n\t\tfont-family: "kotori_roseregular";\n\t\tfont-smoothing: antialiased;\n\t\tfont-size:15px;\n\t\tline-height:15px;\n\t\tmargin: 0;\n  \t\tpadding: 0;\n  \t\ttext-rendering: optimizeLegibility;\n\t}\n\na {\n\tcolor: ',";\n\ttext-decoration:none;\n}\n\nimg {\n\twidth: 100%;\n}\n\na {\n\ttext-decoration:none\n}\n\nhtml,\nbody,\n#root {\n  height: 100%;\n  width: 100%;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml * {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return P=function(){return n},n}var F={bg:"white",text:"black",grey:"rgb(185, 185, 185)",red:"#E04343"},U={bg:"#000",text:"white",grey:"white",red:"white"},G=Object(d.b)(P(),function(n){return n.theme.bg},function(n){return n.theme.text}),I=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(n=Object(h.a)(e)).call.apply(n,[this].concat(a)))).state={isDay:!0,theme:F},t.handleClick=function(){var n=!t.state.isDay;t.setState({isDay:n,theme:n?F:U})},t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.state.theme;return a.a.createElement(d.a,{theme:n},a.a.createElement(a.a.Fragment,null,a.a.createElement(G,null),a.a.createElement(w,{onClick:this.handleClick}),a.a.createElement(S,null)))}}]),e}(r.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}o.a.render(a.a.createElement(c.a,null,a.a.createElement(I,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");J?(function(n,e){fetch(n).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):Z(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Z(e,n)})}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.7c3a3e51.chunk.js.map
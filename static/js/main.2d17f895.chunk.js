(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),s=n(3),u=n(4),l=n(6),i=n(5),d=(n(12),function(t){var e=t.name,n=t.color;return r.a.createElement("li",{style:{color:n}},e)}),f=function(t){var e=t.goods;return r.a.createElement("ol",null,e.map((function(t){var e=t.id,n=t.name,o=t.color;return r.a.createElement(d,{key:e,name:n,color:o})})))};function m(){return fetch("https://mate.academy/students-api/goods").then((function(t){if(t.ok)return t.json();throw new Error("Response not successful ".concat(t.statusText))})).then((function(t){return t.data})).catch((function(t){throw console.error(t.message),new Error("Failed to Fetch")}))}var h=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[],error:""},t.onLoadAll=function(){m().then((function(e){t.setState({goods:e,error:""})})).catch((function(e){return t.setState({error:e.message})}))},t.onLoad5=function(){m().then((function(e){t.setState({goods:e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5),error:""})})).catch((function(e){return t.setState({error:e.message})}))},t.onLoadRed=function(){m().then((function(e){t.setState({goods:e.filter((function(t){return"red"===t.color})),error:""})})).catch((function(e){return t.setState({error:e.message})}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.error;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",onClick:this.onLoadAll},"All goods"),r.a.createElement("button",{type:"button",onClick:this.onLoad5},"5 goods"),r.a.createElement("button",{type:"button",onClick:this.onLoadRed},"red goods"),n?r.a.createElement("p",null,n):r.a.createElement(f,{goods:e}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.2d17f895.chunk.js.map
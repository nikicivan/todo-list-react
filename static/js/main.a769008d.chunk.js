(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),r=(a(13),a(14),a(2)),s=a(7),i=function(e){var t=e.textInput,a=e.setInputText,o=e.todos,c=e.setTodos,l=e.setFilter;return n.a.createElement("form",null,n.a.createElement("input",{onChange:function(e){a(e.target.value)},value:t,type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),c([].concat(Object(s.a)(o),[{text:t,completed:!1,id:1e3*Math.random()}])),a("")},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fas fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{name:"todos",className:"filter-todo",onChange:function(e){l(e.target.value)}},n.a.createElement("option",{value:"all"},"All"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},u=a(4),m=function(e){var t=e.text,a=e.todo,o=e.todos,c=e.setTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),n.a.createElement("button",{className:"complete-btn",onClick:function(){c(o.map((function(e){return e.id===a.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))}},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("button",{className:"trash-btn",onClick:function(){c(o.filter((function(e){return e.id!==a.id})))}},n.a.createElement("i",{className:"fas fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(m,{todos:t,setTodos:a,key:e.id,text:e.text,id:e.id,todo:e})}))))},f=function(e){var t=Object(o.useState)(""),a=Object(r.a)(t,2),c=a[0],l=a[1],s=Object(o.useState)([]),u=Object(r.a)(s,2),m=u[0],f=u[1],p=Object(o.useState)("All"),E=Object(r.a)(p,2),b=E[0],v=E[1],h=Object(o.useState)([]),g=Object(r.a)(h,2),N=g[0],O=g[1];return Object(o.useEffect)((function(){!function(){if(localStorage.getItem("todos")){var e=JSON.parse(localStorage.getItem("todos"));f(e)}else localStorage.setItem("todos",JSON.stringify([]))}()}),[]),Object(o.useEffect)((function(){!function(){switch(b){case"completed":O(m.filter((function(e){return!0===e.completed})));break;case"uncompleted":O(m.filter((function(e){return!1===e.completed})));break;default:O(m)}}(),localStorage.setItem("todos",JSON.stringify(m))}),[m,b]),n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("h1",null,"Ivan's Todo list")),n.a.createElement(i,{todos:m,setTodos:f,textInput:c,setInputText:l,setFilter:v}),n.a.createElement(d,{todos:m,setTodos:f,filteredTodos:N}))};var p=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a769008d.chunk.js.map
(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),l=(a(13),a(1)),o=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(0),u=function(e){var t=e.user,a=t.email,n=t.name;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},m=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(d.jsxs)("article",{"data-id":a,className:i?"TodoInfo TodoInfo--completed":"TodoInfo",children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(d.jsx)(u,{user:r})]})},j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})};function b(e){return o.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:b(e.userId)})})),p=function(){var e=Object(l.useState)(h),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),c=Object(s.a)(i,2),u=c[0],m=c[1],p=Object(l.useState)(null),O=Object(s.a)(p,2),f=O[0],x=O[1],v=Object(l.useState)(!1),S=Object(s.a)(v,2),y=S[0],I=S[1],N=Object(l.useState)(!1),g=Object(s.a)(N,2),C=g[0],_=g[1],k=Math.max.apply(Math,Object(r.a)(h.map((function(e){return e.id}))))+1,T=function(e){switch(e.target.id){case"titleInput":I(!1),m(e.target.value);break;case"userSelect":_(!1),x(b(Number(e.target.value)))}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),u||I(!0),f||_(!0),u&&f){var t={id:k,title:u,userId:f?f.id:-1,completed:!1,user:f};n([].concat(Object(r.a)(a),[t])),m(""),x(null)}},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"titleInput",children:"Title: "}),Object(d.jsx)("input",{type:"text",id:"titleInput",placeholder:"Enter a title",value:u,"data-cy":"titleInput",onChange:T}),y&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"userSelect",children:"User: "}),Object(d.jsxs)("select",{id:"userSelect",placeholder:"Choose a user","data-cy":"userSelect",value:f?f.id:0,onChange:T,children:[Object(d.jsx)("option",{value:"",children:"Choose a user"}),o.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(j,{todos:a})]})};i.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8b5bfe51.chunk.js.map
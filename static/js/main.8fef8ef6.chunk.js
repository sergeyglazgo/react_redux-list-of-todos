(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n.n(c),s=n(3),a=n(17),o=n(18),i=n(6),u=n(12),l=n(16),d="LOAD_TODOS",j="LOAD_USER",b=function(e){return{type:j,payload:e}},p={todos:[],user:null},h=Object(u.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(i.a)(Object(i.a)({},e),{},{todos:Object(o.a)(t.payload)});case j:return Object(i.a)(Object(i.a)({},e),{},{user:t.payload});default:return e}}),Object(l.composeWithDevTools)()),O=h,f=(n(26),n(0)),m=function(e){return e.todos},x=function(e){return e.user},v=function(e){var t;return null===(t=e.user)||void 0===t?void 0:t.id},_=(n(27),n(1)),N=function(){var e=Object(s.b)(),t=Object(s.c)(x);return Object(_.jsx)(_.Fragment,{children:t&&Object(_.jsxs)("div",{className:"CurrentUser",children:[Object(_.jsx)("h2",{className:"CurrentUser__title",children:Object(_.jsx)("span",{children:"Selected user: ".concat(t.id)})}),Object(_.jsx)("h3",{className:"CurrentUser__name",children:t.name}),Object(_.jsx)("p",{className:"CurrentUser__email",children:t.email}),Object(_.jsx)("p",{className:"CurrentUser__phone",children:t.phone}),Object(_.jsx)("button",{className:"button CurrentUser__clear",type:"button",onClick:function(){return e(b(null))},children:"Clear"})]})})},y=n(8),T=n(4),k=n(5),C=n.n(k),w=n(14),L=n.n(w),g="https://mate.academy/students-api";function U(){return A.apply(this,arguments)}function A(){return(A=Object(y.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return E.apply(this,arguments)}function E(){return(E=Object(y.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(30);var S=function(){var e=Object(f.useState)(""),t=Object(T.a)(e,2),n=t[0],c=t[1],r=Object(f.useState)("all"),a=Object(T.a)(r,2),o=a[0],i=a[1],u=Object(s.b)(),l=Object(s.c)(m),j=Object(s.c)(v),p=function(){var e=Object(y.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:n=e.sent,u(b(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=l.filter((function(e){return e.title.includes(n)})).filter((function(e){switch(o){case"not completed":return!e.completed;case"completed":return e.completed;default:return!0}}));return Object(f.useEffect)((function(){var e=function(){var e=Object(y.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,u({type:d,payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),Object(_.jsxs)("div",{className:"TodoList",children:[Object(_.jsx)("h2",{children:"Todos:"}),Object(_.jsxs)("div",{className:"field",children:[Object(_.jsx)("label",{className:"label",children:"Filter by title"}),Object(_.jsx)("div",{className:"control",children:Object(_.jsx)("input",{className:"input",type:"text",placeholder:"Text input",value:n,onChange:function(e){return c(e.target.value)}})})]}),Object(_.jsx)("div",{className:"select",children:Object(_.jsxs)("select",{onChange:function(e){return i(e.target.value)},children:[Object(_.jsx)("option",{value:"all",children:"All"}),Object(_.jsx)("option",{value:"not completed",children:"Not completed"}),Object(_.jsx)("option",{value:"completed",children:"Completed"})]})}),Object(_.jsx)("div",{className:"TodoList__list-container",children:Object(_.jsx)("ul",{className:"TodoList__list",children:h.map((function(e){return Object(_.jsxs)("li",{className:L()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(_.jsxs)("label",{htmlFor:"".concat(e.id),children:[Object(_.jsx)("input",{id:"".concat(e.id),type:"checkbox",readOnly:!0,checked:e.completed}),Object(_.jsx)("p",{children:e.title})]}),Object(_.jsx)("button",{className:L()("TodoList__user-button","button",{"TodoList__user-button--selected":j===e.userId}),type:"button",onClick:function(){return j!==e.userId&&p(e.userId)},children:"User #".concat(e.userId)}),Object(_.jsx)("button",{className:"TodoList__user-button button",type:"button",onClick:function(){return t=e.id,fetch("".concat(g,"/todos/").concat(t),{method:"DELETE"});var t},children:"Delete"})]},e.id)}))})})]})},I=function(){var e=Object(s.c)(x);return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("div",{className:"App__sidebar",children:Object(_.jsx)(S,{})}),Object(_.jsx)("div",{className:"App__content",children:Object(_.jsx)("div",{className:"App__content-container",children:e?Object(_.jsx)(N,{}):"No user selected"})})]})},F=function(){return Object(_.jsx)(s.a,{store:O,children:Object(_.jsx)(a.a,{children:Object(_.jsx)(I,{})})})};r.a.render(Object(_.jsx)(F,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8fef8ef6.chunk.js.map
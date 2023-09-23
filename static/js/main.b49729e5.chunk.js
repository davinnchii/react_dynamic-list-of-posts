(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(10),s=n.n(c),a=n(2),i=n(1),r=n.n(i),o=(n(17),n(18),n(19),n(3)),l=n.n(o),d=n(0),j=r.a.createContext({}),m=function(e){var t=e.children,n=Object(i.useState)([]),c=Object(a.a)(n,2),s={posts:c[0],setPosts:c[1]};return Object(d.jsx)(j.Provider,{value:s,children:t})},u="https://mate.academy/students-api";function b(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),b(300).then((function(){return fetch(u+e,c)})).then((function(e){if(e.ok)return e.json();throw new Error}))}var O=function(e){return h(e)},x=function(e,t){return h(e,"POST",t)},f=function(e){return h(e,"DELETE")},p=(n(21),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),v=function(e){var t=e.post,n=e.selectedPost,c=e.onSelectPost;return Object(d.jsxs)("tr",{"data-cy":"Post",children:[Object(d.jsx)("td",{"data-cy":"PostId",children:t.id}),Object(d.jsx)("td",{"data-cy":"PostTitle",children:t.title}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{type:"button","data-cy":"PostButton",className:l()("button is-link",{"is-light":(null===n||void 0===n?void 0:n.id)!==t.id}),onClick:function(){return c(t)},children:(null===n||void 0===n?void 0:n.id)!==t.id?"Open":"Close"})})]},t.id)},N=function(e){var t=e.selectedPost,n=e.selectedUser,c=e.onSelectPost,s=e.onAddComment,r=e.onError,o=Object(i.useContext)(j),l=o.posts,m=o.setPosts,u=Object(i.useState)(!0),b=Object(a.a)(u,2),h=b[0],x=b[1];Object(i.useEffect)((function(){var e;x(!0),(e=n.id,O("/posts?userId=".concat(e))).then(m).catch((function(){return r(!0)})).finally((function(){return x(!1)}))}),[n]);var f=function(e){t&&e.id===t.id?c(null):(s(!1),c(e))};return Object(d.jsx)(d.Fragment,{children:h?Object(d.jsx)(p,{}):Object(d.jsx)("div",{"data-cy":"PostsList",children:l.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"title",children:"Posts:"}),Object(d.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"has-background-link-light",children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:l.map((function(e){return Object(d.jsx)(v,{post:e,selectedPost:t,onSelectPost:f})}))})]})]}):Object(d.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"})})})},g=r.a.createContext({}),y=function(e){var t=e.children,n=Object(i.useState)(null),c=Object(a.a)(n,2),s={selectedUser:c[0],setSelectedUser:c[1]};return Object(d.jsx)(g.Provider,{value:s,children:t})},C=function(){return Object(i.useContext)(g)},w=function(e){var t=e.isDropDownActive,n=e.onCloseDropDown,c=e.onChangeUser,s=Object(i.useState)([]),r=Object(a.a)(s,2),o=r[0],j=r[1],m=C().selectedUser;Object(i.useEffect)((function(){O("/users").then(j).catch((function(){console.info("Something went wrong")}))}),[]);return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:l()("dropdown",{"is-active":t}),children:[Object(d.jsx)("div",{className:"dropdown-trigger",children:Object(d.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return n(!t)},children:[Object(d.jsx)("span",{children:(null===m||void 0===m?void 0:m.name)||"Choose a user"}),Object(d.jsx)("span",{className:"icon is-small",children:Object(d.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(d.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",tabIndex:0,onBlur:function(){return n(!1)},children:Object(d.jsx)("div",{className:"dropdown-content",children:o.map((function(e){return Object(d.jsx)("a",{href:"#user-".concat(e.id),className:l()("dropdown-item",{"is-active":(null===m||void 0===m?void 0:m.id)===e.id}),onClick:function(){return function(e){c(e),n(!1)}(e)},children:e.name},e.id)}))})})]})},S=r.a.createContext({}),P=function(e){var t=e.children,n=Object(i.useState)([]),c=Object(a.a)(n,2),s={comments:c[0],setComments:c[1]};return Object(d.jsx)(S.Provider,{value:s,children:t})},E=function(){return Object(i.useContext)(S)},k=function(e){return f("/comments/".concat(e))},D=function(e){var t=e.comment,n=e.onDelete;return Object(d.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(d.jsxs)("div",{className:"message-header",children:[Object(d.jsx)("a",{href:"mailto:".concat(t.email),"data-cy":"CommentAuthor",children:t.name}),Object(d.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return n(t.id)},children:"delete button"})]}),Object(d.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:t.body})]},t.id)},F=function(e){var t=e.comments,n=e.onDelete;return Object(d.jsx)(d.Fragment,{children:t.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"title is-4",children:"Comments:"}),t.map((function(e){return Object(d.jsx)(D,{comment:e,onDelete:n})}))]}):Object(d.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"})})},T=n(7),A=n(5),U=n(12),I=n(11),B=n(9),L=n.n(B),M={userName:"",email:"",commentText:""},_=function(e){var t=e.selectedPost,n=E().setComments,c=Object(i.useState)(M),s=Object(a.a)(c,2),r=s[0],o=s[1],j=r.userName,m=r.email,u=r.commentText,b=Object(i.useState)(!1),h=Object(a.a)(b,2),O=h[0],f=h[1],p=Object(i.useState)(!1),v=Object(a.a)(p,2),N=v[0],g=v[1],y=function(){var e=Object(I.a)(L.a.mark((function e(c){var s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),g(!0),!(j&&m&&u)){e.next=17;break}return f(!0),e.prev=4,e.next=7,a={name:j,email:m,body:u,postId:t.id},x("/comments",a);case 7:s=e.sent,n((function(e){return[].concat(Object(U.a)(e),[s])})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.info("Something went wrong.");case 14:o((function(e){return Object(A.a)(Object(A.a)({},e),{},{commentText:""})})),g(!1),f(!1);case 17:case"end":return e.stop()}var a}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),C=!u&&N,w=!m&&N,S=!j&&N,P=function(e){var t=e.target,n=t.name,c=t.value;o((function(e){return Object(A.a)(Object(A.a)({},e),{},Object(T.a)({},n,c))}))};return Object(d.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:y,onReset:function(e){e.preventDefault(),o(M),g(!1)},children:[Object(d.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"userName",id:"comment-author-name",placeholder:"Name Surname",className:l()("input",{"is-danger":S}),value:j,onChange:P}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-user"})}),S&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:l()("input",{"is-danger":w}),value:m,onChange:P}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-envelope"})}),w&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),w&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("textarea",{id:"comment-body",name:"commentText",placeholder:"Type comment here",className:l()("textarea",{"is-danger":C}),value:u,onChange:P})}),C&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:l()("button is-link",{"is-loading":O}),children:"Add"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},J=function(e){var t=e.onAddComment,n=e.onDeleteComment,c=e.comments,s=e.isNewComment,a=e.hasError,i=e.selectedPost,r=E().setComments;return Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(F,{comments:c,onDelete:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))})),n(e)}}),s?Object(d.jsx)(_,{selectedPost:i}):Object(d.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){t(!0)},children:"Write a comment"})]})})},q=function(e){var t=e.selectedPost,n=e.isNewComment,c=e.onAddComment,s=E(),r=s.comments,o=s.setComments,l=Object(i.useState)(!1),j=Object(a.a)(l,2),m=j[0],u=j[1],b=Object(i.useState)(!1),h=Object(a.a)(b,2),x=h[0],f=h[1];return Object(i.useEffect)((function(){var e;u(!0),(e=t.id,O("/comments?postId=".concat(e))).then(o).catch((function(){return f(!0)})).finally((function(){return u(!1)}))}),[t]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(d.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(d.jsx)("div",{className:"block",children:m?Object(d.jsx)(p,{}):Object(d.jsx)(J,{comments:r,isNewComment:n,onAddComment:c,onDeleteComment:k,hasError:x,selectedPost:t})})]})})},W=function(){var e=Object(i.useState)(null),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(!1),r=Object(a.a)(s,2),o=r[0],j=r[1],m=Object(i.useState)(!1),u=Object(a.a)(m,2),b=u[0],h=u[1],O=Object(i.useState)(!1),x=Object(a.a)(O,2),f=x[0],p=x[1],v=C(),g=v.selectedUser,y=v.setSelectedUser,S=g&&!f;return Object(d.jsx)("main",{className:"section",role:"presentation",onClick:function(){b&&h(!1)},children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"tile is-ancestor",children:[Object(d.jsx)("div",{className:"tile is-parent",children:Object(d.jsxs)("div",{className:"tile is-child box is-success",children:[Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(w,{isDropDownActive:b,onCloseDropDown:h,onChangeUser:function(e){c(null),y(null),y(e)}})}),Object(d.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!g&&Object(d.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),f&&Object(d.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),S&&Object(d.jsx)(N,{selectedPost:n,selectedUser:g,onSelectPost:function(e){return c(e)},onAddComment:j,onError:p})]})]})}),Object(d.jsx)("div",{"data-cy":"Sidebar",className:l()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":!!n}),children:n&&Object(d.jsx)("div",{className:"tile is-child box is-success ",children:Object(d.jsx)(q,{selectedPost:n,isNewComment:o,onAddComment:j})})})]})})})};s.a.render(Object(d.jsx)(y,{children:Object(d.jsx)(m,{children:Object(d.jsx)(P,{children:Object(d.jsx)(W,{})})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b49729e5.chunk.js.map
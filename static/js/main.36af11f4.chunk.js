(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var r=n(32),a=n(4),i={masseges:[{id:1,message:"Hi",myMessage:!1},{id:2,message:"How are you",myMessage:!0},{id:3,message:"Where are you from??",myMessage:!0},{id:4,message:"Help",myMessage:!1},{id:5,message:"Hello",myMessage:!0}],dialogs:[{id:1,name:"Artem",ava:"https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{id:2,name:"Arina",ava:"https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{id:3,name:"Anita",ava:"https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{id:4,name:"Dima",ava:"https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{id:5,name:"Egor",ava:"https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},{id:6,name:"Pavel",ava:"https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}]},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SEND-MESSAGE":var n={id:6,message:e.sendMessage,myMessage:!0};return Object(a.a)(Object(a.a)({},t),{},{masseges:[].concat(Object(r.a)(t.masseges),[n]),newMessage:""});default:return t}},s=function(t){return{type:"SEND-MESSAGE",sendMessage:t}}},129:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return j})),n.d(e,"b",(function(){return p})),n.d(e,"f",(function(){return O}));var r=n(9),a=n.n(r),i=n(17),c=n(32),s=n(4),o=n(20),u={postData:[{id:1,message:"Today I go to the cinema",numberLike:12},{id:2,message:"Haw are you?",numberLike:20},{id:3,message:"It's my firs post!",numberLike:100}],profile:null,status:""},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-POST":var n={id:5,message:e.newPostAdd,numberLike:0};return Object(s.a)(Object(s.a)({},t),{},{postData:[].concat(Object(c.a)(t.postData),[n])});case"DELETE-POST":return Object(s.a)(Object(s.a)({},t),{},{postData:Object(c.a)(t.postData.filter((function(t){return t.id!==e.id&&t})))});case"SET-USER-PROFILE":return Object(s.a)(Object(s.a)({},t),{},{profile:e.profile});case"SET-STATUS":return Object(s.a)(Object(s.a)({},t),{},{status:e.status});default:return t}},l=function(t){return{type:"ADD-POST",newPostAdd:t}},d=function(t){return{type:"SET-USER-PROFILE",profile:t}},b=function(t){return{type:"SET-STATUS",status:t}},j=function(t){return function(){var e=Object(i.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.getProfile(t);case 2:r=e.sent,n(d(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(t){return function(){var e=Object(i.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.getStatus(t);case 2:r=e.sent,n(b(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(i.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(b(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},132:function(t,e,n){"use strict";n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"f",(function(){return b})),n.d(e,"d",(function(){return j})),n.d(e,"c",(function(){return h})),n.d(e,"a",(function(){return g})),n.d(e,"e",(function(){return x}));var r=n(9),a=n.n(r),i=n(17),c=n(32),s=n(4),o=n(20),u=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(s.a)(Object(s.a)({},t),r):t}))},f={users:[],pageSize:30,totalUsersCount:200,currentPage:1,isFetching:!0,followingInProgress:[]},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FOLLOW-USER":return Object(s.a)(Object(s.a)({},t),{},{users:u(t.users,e.usersID,"id",{followed:!0})});case"UNFOLLOW-USER":return Object(s.a)(Object(s.a)({},t),{},{users:u(t.users,e.usersID,"id",{followed:!1})});case"SET-USERS":return Object(s.a)(Object(s.a)({},t),{},{users:e.user});case"SET-CURRENT-PAGE":return Object(s.a)(Object(s.a)({},t),{},{currentPage:e.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(s.a)(Object(s.a)({},t),{},{totalUsersCount:e.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(s.a)(Object(s.a)({},t),{},{isFetching:e.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(s.a)(Object(s.a)({},t),{},{followingInProgress:e.isFetching?[].concat(Object(c.a)(t.followingInProgress),[e.userID]):t.followingInProgress.filter((function(t){return t!==e.userID}))});default:return t}},d=function(t){return{type:"FOLLOW-USER",usersID:t}},b=function(t){return{type:"UNFOLLOW-USER",usersID:t}},j=function(t){return{type:"SET-CURRENT-PAGE",currentPage:t}},p=function(t){return{type:"TOGGLE-IS-FETCHING",isFetching:t}},O=function(t,e){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:t,userID:e}},h=function(t,e){return function(){var n=Object(i.a)(a.a.mark((function n(r){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p(!0)),r(j(t)),n.next=4,o.c.getUsers(t,e);case 4:i=n.sent,r(p(!1)),r({type:"SET-USERS",user:i.items}),r({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:i.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},m=function(){var t=Object(i.a)(a.a.mark((function t(e,n,r,i){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(O(!0,n)),t.next=3,r(n);case 3:0===t.sent.resultCode&&e(i(n)),e(O(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),g=function(t){return function(){var e=Object(i.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o.c.followToUser.bind(t),m(n,t,r,d);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(i.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o.c.unFollowToUser.bind(t),m(n,t,r,b);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},137:function(t,e,n){t.exports={loginContainer:"LoginPage_loginContainer__2ACPH"}},168:function(t,e,n){},169:function(t,e,n){},20:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var r=n(134),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"89087f1a-df84-4609-ac91-9f089fdba243"}}),i={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.get("users?page=".concat(t,"&count=",30)).then((function(t){return t.data}))},followToUser:function(t){return a.post("follow/".concat(t)).then((function(t){return t.data}))},unFollowToUser:function(t){return a.delete("follow/".concat(t)).then((function(t){return t.data}))},getProfile:function(t){return c.getProfile(t)}},c={getProfile:function(t){return a.get("profile/"+t).then((function(t){return t.data}))},getStatus:function(t){return a.get("profile/status/"+t)},updateStatus:function(t){return a.put("profile/status",{status:t})}},s={me:function(){return a.get("auth/me").then((function(t){return t.data}))},login:function(t){return a.post("/auth/login",t)},logout:function(){return a.delete("/auth/login").then((function(t){return t.data}))}}},296:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(66),c=n.n(i),s=(n(168),n(35)),o=n(36),u=n(38),f=n(37),l=n(10),d=n(11),b=(n(169),n(12)),j=n(9),p=n.n(j),O=n(17),h=n(4),m=n(20),g=n(43),x={id:null,email:null,login:"",isAuth:!1},v=function(t){return{type:"SET-AUTH-USER-DATA",data:t}},w=function(){return function(){var t=Object(O.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.me();case 2:0===(n=t.sent).resultCode&&e(v(Object(h.a)({isAuth:!0},n.data)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=n(24),y=n(90),E=n.n(y),_=n.p+"static/media/logo.73d85abf.svg",T=n(1),A=function(t){return Object(T.jsxs)("header",{className:E.a.header,children:[Object(T.jsx)("img",{src:_}),Object(T.jsx)("div",{className:E.a.loginBlock,children:t.isAuth?Object(T.jsxs)("div",{children:[t.login,"-",Object(T.jsx)("button",{onClick:t.logoutMe,children:"Log out"})]}):Object(T.jsx)(S.b,{to:"/login",children:"Login"})})]})},M=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.authMe()}},{key:"render",value:function(){return Object(T.jsx)(A,{logoutMe:this.props.logoutMe,isAuth:this.props.isAuth,login:this.props.login})}}]),n}(a.a.Component),C=Object(b.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{setAuthUserData:v,authMe:w,logoutMe:function(){return function(){var t=Object(O.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.logout();case 2:0===t.sent.resultCode&&e(v({id:null,email:null,login:"",isAuth:!1}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(M),D=n(89),k=n(130),P=n(68),L=n(74),N=n(54),U=n.n(N),I=n(50),G=n.n(I),F=Object(P.a)(30),H=Object(k.a)({form:"login"})((function(t){return Object(T.jsxs)("form",{onSubmit:t.handleSubmit,className:U.a.form,children:[Object(T.jsx)("div",{children:Object(T.jsx)(D.a,{placeholder:"email",name:"email",component:L.a,validate:[P.b,F],className:U.a.input})}),Object(T.jsx)("div",{children:Object(T.jsx)(D.a,{placeholder:"password",type:"password",name:"password",component:L.a,validate:[P.b,F],className:U.a.input})}),Object(T.jsxs)("div",{children:[Object(T.jsx)(D.a,{type:"checkbox",component:"input",name:"rememberMe",className:U.a.checkbox})," remember me"]}),t.error&&Object(T.jsx)("div",{className:G.a.formSummaryError,children:t.error}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{children:"Login"})})]})})),R=n(137),B=n.n(R),z=Object(b.b)((function(t){return{isAuth:t.auth.isAuth}}),{loginMe:function(t){return function(){var e=Object(O.a)(p.a.mark((function e(n){var r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.login(t);case 2:0===(r=e.sent).data.resultCode?n(w()):(a=r.data.messages.length>0?r.data.messages[0]:"someError",n(Object(g.a)("login",{_error:a})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(t){var e=t.loginMe;return t.isAuth?Object(T.jsx)(l.a,{to:"/profile"}):Object(T.jsxs)("div",{className:B.a.loginContainer,children:[Object(T.jsx)("h1",{children:"Login"}),Object(T.jsx)(H,{onSubmit:function(t){e(t)}})]})})),W=n(97),q=Object(W.a)((function(){return Object(T.jsx)("div",{children:Object(T.jsx)("button",{children:"+"})})})),Y=n(94),V=n.n(Y),Z=n(95),X=n.n(Z),J=function(t){var e=t.link,n=t.title;return Object(T.jsx)("div",{className:X.a.item,children:Object(T.jsx)(S.b,{to:e,activeClassName:X.a.active,children:n})})},Q=function(){Object(b.d)((function(t){return t.usersPage.users}));return Object(T.jsx)("nav",{className:V.a.nav,children:Object(T.jsxs)("div",{className:V.a.navContainer,children:[Object(T.jsx)(J,{link:"/profile",title:"Profile"}),Object(T.jsx)(J,{link:"/users",title:"Users"}),Object(T.jsx)(J,{link:"/dialogs",title:"Massages"}),Object(T.jsx)(J,{link:"/news",title:"News"}),Object(T.jsx)(J,{link:"/music",title:"Music"}),Object(T.jsx)(J,{link:"/setting",title:"Settings"})]})})},K=function(){Object(b.c)();return Object(T.jsx)("div",{children:"News"})},$=function(){return Object(T.jsx)("div",{children:"Setting"})},tt={initializet:!1},et=n(65);function nt(t){return function(){return Object(T.jsx)(r.Suspense,{fallback:Object(T.jsx)(et.a,{}),children:Object(T.jsx)(t,{})})}}var rt=a.a.lazy((function(){return n.e(5).then(n.bind(null,312))})),at=a.a.lazy((function(){return n.e(3).then(n.bind(null,311))})),it=a.a.lazy((function(){return n.e(4).then(n.bind(null,310))})),ct=function(t){Object(u.a)(n,t);var e=Object(f.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initializet?Object(T.jsxs)("div",{className:"app-wrapper",children:[Object(T.jsx)(C,{}),Object(T.jsx)(Q,{}),Object(T.jsxs)("div",{className:"app-wrapper-content",children:[Object(T.jsx)(l.a,{from:"about",to:"/profile/:userID?"}),Object(T.jsx)(l.b,{path:"/profile/:userID?",render:nt(at)}),Object(T.jsx)(l.b,{path:"/dialogs",render:nt(rt)}),Object(T.jsx)(l.b,{path:"/news",render:function(){return Object(T.jsx)(K,{})}}),Object(T.jsx)(l.b,{path:"/music",render:function(){return Object(T.jsx)(q,{})}}),Object(T.jsx)(l.b,{path:"/setting",render:function(){return Object(T.jsx)($,{})}}),Object(T.jsx)(l.b,{path:"/users",render:nt(it)}),Object(T.jsx)(l.b,{path:"/login",render:function(){return Object(T.jsx)(z,{})}})]})]}):Object(T.jsx)(et.a,{})}}]),n}(a.a.Component),st=Object(d.d)(Object(b.b)((function(t){return{initializet:t.app.initializet}}),{initializeApp:function(){return function(t){var e=t(w());Promise.all([e]).then((function(){return t({type:"INITIALIZET-SUCCESS"})}))}}})(ct)),ot=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,309)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),i(t),c(t)}))},ut=n(128),ft=n(129),lt=n(132),dt=n(138),bt=n(131),jt=Object(d.c)({postPage:ft.d,messagePage:ut.b,usersPage:lt.g,auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-AUTH-USER-DATA":return Object(h.a)(Object(h.a)({},t),e.data);default:return t}},form:bt.a,app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INITIALIZET-SUCCESS":return Object(h.a)(Object(h.a)({},t),{},{initializet:!0});default:return t}}}),pt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,Ot=Object(d.e)(jt,pt(Object(d.a)(dt.a)));window.__store__=Ot;var ht=Ot;c.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(S.a,{children:Object(T.jsx)(b.a,{store:ht,children:Object(T.jsx)(st,{store:ht})})})}),document.getElementById("root")),ot()},50:function(t,e,n){t.exports={error:"FormsControls_error__25lZQ",formSummaryError:"FormsControls_formSummaryError__3SArY"}},54:function(t,e,n){t.exports={form:"LoginForm_form__3zkcS",input:"LoginForm_input__A4twx",checkbox:"LoginForm_checkbox__3o0GS"}},65:function(t,e,n){"use strict";n(0);var r=n.p+"static/media/preloader.d564adc2.svg",a=n(96),i=n.n(a),c=n(1);e.a=function(){return Object(c.jsxs)("div",{className:i.a.preloaderContainer,children:[Object(c.jsx)("img",{src:r,className:i.a.preloader})," "]})}},68:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r=function(t){if(!t)return"Field is rejquired"},a=function(t){return function(e){if(e.length>t)return"max length is ".concat(t,"  symbols")}}},74:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return f}));var r=n(4),a=n(34),i=(n(0),n(50)),c=n.n(i),s=(n(89),n(1)),o=function(t){t.input;var e=t.meta,n=Object(a.a)(t,["input","meta"]),r=e.touched&&e.error;return Object(s.jsxs)("div",{className:"".concat(c.a.formControl,"  ").concat(r&&c.a.error),children:[Object(s.jsx)("div",{children:n.children}),Object(s.jsx)("div",{children:r&&Object(s.jsx)("span",{children:e.error})})]})},u=function(t){var e=t.input,n=(t.meta,Object(a.a)(t,["input","meta"]));return Object(s.jsxs)(o,Object(r.a)(Object(r.a)({},t),{},{children:[Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},e),n))," "]}))},f=function(t){var e=t.input,n=(t.meta,Object(a.a)(t,["input","meta"]));return Object(s.jsxs)(o,Object(r.a)(Object(r.a)({},t),{},{children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({},e),n))," "]}))}},90:function(t,e,n){t.exports={header:"Header_header__yfRMG",loginBlock:"Header_loginBlock__2TtaP"}},94:function(t,e,n){t.exports={nav:"Navbar_nav__1pZty",navContainer:"Navbar_navContainer__3lypU"}},95:function(t,e,n){t.exports={item:"NavlinkForPage_item__1QzgZ",active:"NavlinkForPage_active__2SybX"}},96:function(t,e,n){t.exports={preloaderContainer:"Preloader_preloaderContainer__cTqqf",preloader:"Preloader_preloader__1X58S"}},97:function(t,e,n){"use strict";var r=n(4),a=n(34),i=n(35),c=n(36),s=n(38),o=n(37),u=n(0),f=n.n(u),l=n(12),d=n(10),b=n(1),j=function(t){return{isAuth:t.auth.isAuth}};e.a=function(t){var e=function(e){Object(s.a)(u,e);var n=Object(o.a)(u);function u(){return Object(i.a)(this,u),n.apply(this,arguments)}return Object(c.a)(u,[{key:"render",value:function(){var e=this.props,n=(e.isAuth,Object(a.a)(e,["isAuth"]));return this.props.isAuth?Object(b.jsx)(t,Object(r.a)({},n)):Object(b.jsx)(d.a,{to:"/login"})}}]),u}(f.a.Component);return Object(l.b)(j)(e)}}},[[296,1,2]]]);
//# sourceMappingURL=main.36af11f4.chunk.js.map
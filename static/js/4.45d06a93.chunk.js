(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{297:function(e,t,n){"use strict";var r=n(34),o=(n(0),n(298)),a=n.n(o),s=n(1);t.a=function(e){var t=e.title,n=e.onClick,o=Object(r.a)(e,["title","onClick"]),u="".concat(a.a.button," ").concat(o.className);return Object(s.jsx)("button",{onClick:n,className:u,disabled:o.disabled,children:t})}},298:function(e,t,n){e.exports={button:"Button_button__2czcP"}},299:function(e,t,n){"use strict";t.a=n.p+"static/media/user.17df8b8c.png"},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(98);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var s,u=e[Symbol.iterator]();!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},309:function(e,t,n){},310:function(e,t,n){e.exports={userPage:"User_userPage__2fV_d",avaButton:"User_avaButton__2XvCX",avaDiv:"User_avaDiv__8o_Y5",ava:"User_ava__2oGSE",buttonDiv:"User_buttonDiv__1YVJg",userButton:"User_userButton__1V3Wv",info:"User_info__1DROC",NameStatus:"User_NameStatus__3Tl6P",name:"User_name__339LZ",userInfo:"User_userInfo__1rMPm",location:"User_location__Me1bg"}},311:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__3UFLY",selectedPage:"Paginator_selectedPage__2VvUS",notselectpage:"Paginator_notselectpage__1YS2_"}},314:function(e,t,n){"use strict";n.r(t);var r=n(36),o=n(37),a=n(39),s=n(38),u=n(12),i=n(132),c=n(0),l=n.n(c),f=n(34),p=n(309),g=n.n(p),v=n(310),h=n.n(v),d=n(299),b=n(24),j=n(297),m=n(1),_=function(e){var t=e.user,n=Object(f.a)(e,["user"]);return console.log(t),Object(m.jsxs)("div",{className:h.a.userPage,children:[Object(m.jsxs)("div",{className:h.a.avaButton,children:[Object(m.jsx)("div",{className:h.a.avaDiv,children:Object(m.jsx)(b.b,{to:"/profile/"+t.id,children:Object(m.jsx)("img",{src:null!==t.photos.large?t.photos.large:d.a,className:h.a.ava})})}),Object(m.jsx)("div",{className:h.a.buttonDiv,children:t.followed?Object(m.jsx)(j.a,{className:h.a.userButton,onClick:function(){return n.unFollow(t.id)},title:"Unfollow",disabled:n.followingInProgress.some((function(e){return e===t.id}))}):Object(m.jsx)(j.a,{className:h.a.userButton,onClick:function(){return n.follow(t.id)},title:"Follow",disabled:n.followingInProgress.some((function(e){return e===t.id}))})})]}),Object(m.jsx)("div",{className:h.a.info,children:Object(m.jsxs)("div",{className:h.a.NameStatus,children:[Object(m.jsx)("h4",{className:h.a.name,children:t.name}),Object(m.jsxs)("p",{className:h.a.userInfo,children:["status: ",t.status]})]})})]})},y=n(300),P=n(311),w=n.n(P),O=l.a.memo((function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,o=e.onPageChange,a=e.portionSize,s=Math.ceil(t/n),u=[],i=1;i<=s;i++)u.push(i);var l=Math.ceil(s/a),f=Object(c.useState)(1),p=Object(y.a)(f,2),g=p[0],v=p[1],h=(g-1)*a+1,d=g*a;return Object(m.jsxs)("div",{className:w.a.pageNumber,children:[g>1&&Object(m.jsx)(j.a,{title:"prev",onClick:function(){return v(g-1)}}),u.filter((function(e){return e>=h&&e<=d})).map((function(e){return Object(m.jsx)("span",{className:r===e?w.a.selectedPage:w.a.notselectpage,onClick:function(){return o(e)},children:e},e)})),l-g>1&&Object(m.jsx)(j.a,{title:"next",onClick:function(){return v(g+1)}})]})})),x=l.a.memo((function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,o=e.onPageChange,a=Object(f.a)(e,["totalUsersCount","pageSize","currentPage","onPageChange"]);return Object(m.jsxs)("div",{className:g.a.users,children:[Object(m.jsx)(O,{totalUsersCount:t,pageSize:n,currentPage:r,onPageChange:o,portionSize:20}),a.users.map((function(e){return Object(m.jsx)(_,{user:e,follow:a.follow,unFollow:a.unFollow,followingInProgress:a.followingInProgress},e.id)}))]})})),S=n(67),C=n(11),U="NOT_FOUND";var N=function(e,t){return e===t};function k(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,o=void 0===r?N:r,a=n.maxSize,s=void 0===a?1:a,u=n.resultEqualityCheck,i=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(o),c=1===s?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:U},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(i):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var o=n[r];return r>0&&(n.splice(r,1),n.unshift(o)),o.value}return U}return{get:r,put:function(t,o){r(t)===U&&(n.unshift({key:t,value:o}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(s,i);function l(){var t=c.get(arguments);if(t===U){if(t=e.apply(null,arguments),u){var n=c.getEntries(),r=n.find((function(e){return u(e.value,t)}));r&&(t=r.value)}c.put(arguments,t)}return t}return l.clearCache=function(){return c.clear()},l}function F(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a,s=0,u={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(u=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var c=u,l=c.memoizeOptions,f=void 0===l?n:l,p=Array.isArray(f)?f:[f],g=F(r),v=e.apply(void 0,[function(){return s++,i.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],t=g.length,n=0;n<t;n++)e.push(g[n].apply(null,arguments));return a=v.apply(null,e)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:v,dependencies:g,lastResult:function(){return a},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),h};return o}var I=z(k),A=I((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),D=function(e){return e.usersPage.pageSize},B=function(e){return e.usersPage.totalUsersCount},E=function(e){return e.usersPage.currentPage},q=function(e){return e.usersPage.isFetching},M=function(e){return e.usersPage.followingInProgress},R=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[this.props.isFetching?Object(m.jsx)(S.a,{}):null,Object(m.jsx)(x,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,unFollowSuccess:this.props.unFollowSuccess,followSuccess:this.props.followSuccess,users:this.props.users,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unFollow:this.props.unFollow})]})}}]),n}(l.a.Component);t.default=Object(C.d)(Object(u.b)((function(e){return{users:A(e),pageSize:D(e),totalUsersCount:B(e),currentPage:E(e),isFetching:q(e),followingInProgress:M(e)}}),{followSuccess:i.b,unFollowSuccess:i.f,setCurrentPage:i.d,follow:i.a,unFollow:i.e,requestUsers:i.c}))(R)}}]);
//# sourceMappingURL=4.45d06a93.chunk.js.map
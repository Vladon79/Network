(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{297:function(t,e,s){"use strict";e.a=s.p+"static/media/user.17df8b8c.png"},298:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var a=s(98);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],a=!0,n=!1,o=void 0;try{for(var r,i=t[Symbol.iterator]();!(a=(r=i.next()).done)&&(s.push(r.value),!e||s.length!==e);a=!0);}catch(c){n=!0,o=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return s}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},300:function(t,e,s){t.exports={mypost:"MyPost_mypost__3sDTz",mypostContainer:"MyPost_mypostContainer__2-bdk",ava:"MyPost_ava__3OT6u",form:"MyPost_form__26x3X",myPosts:"MyPost_myPosts__2lsYr"}},301:function(t,e,s){t.exports={PrfileInfo:"ProfileInfo_PrfileInfo__3tEmj",PrfileInfoImg:"ProfileInfo_PrfileInfoImg__10neJ",ava:"ProfileInfo_ava__arQX6",discriptionInfo:"ProfileInfo_discriptionInfo__ZtD8k",name:"ProfileInfo_name__10GhZ",profileStatus:"ProfileInfo_profileStatus__2A15U",statusText:"ProfileInfo_statusText__1GbtM",statusInput:"ProfileInfo_statusInput__2bsQm"}},303:function(t,e,s){t.exports={post:"Post_post__3xkcK",massage:"Post_massage__3-F9C",like:"Post_like__zUo2a"}},304:function(t,e,s){t.exports={profile:"Profile_profile__Raocc",profileContainer:"Profile_profileContainer__3htoh"}},311:function(t,e,s){"use strict";s.r(e);var a=s(4),n=s(35),o=s(36),r=s(38),i=s(37),c=s(12),u=s(0),l=s.n(u),f=s(300),p=s.n(f),j=s(89),d=s(130),b=s(68),m=s(74),_=s(1),h=Object(b.a)(30),O=Object(d.a)({form:"profileNewPostForm"})((function(t){return Object(_.jsxs)("form",{onSubmit:t.handleSubmit,className:p.a.form,children:[Object(_.jsx)("div",{children:Object(_.jsx)(j.a,{placeholder:"Add new post",name:"newPost",component:m.b,validate:[b.b,h]})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{children:"Login"})})]})})),x=s(303),v=s.n(x),P=s(297),y=function(t){return Object(_.jsxs)("div",{className:v.a.post,children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:P.a})}),Object(_.jsxs)("div",{className:v.a.massage,children:[t.massage,Object(_.jsxs)("div",{className:v.a.like,children:[Object(_.jsx)("span",{children:"\u2665"}),t.like]})]})]})},g=l.a.memo((function(t){var e=t.post.map((function(t){return Object(_.jsx)(y,{massage:t.message,like:t.numberLike},t.id)}));return Object(_.jsxs)("div",{className:p.a.mypost,children:[Object(_.jsxs)("div",{className:p.a.mypostContainer,children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{className:p.a.ava,src:P.a})}),Object(_.jsx)(O,{onSubmit:function(e){var s=e.newPost;t.addPost(s)}})]}),Object(_.jsxs)("div",{className:p.a.myPosts,children:[Object(_.jsx)("h3",{children:"My post"}),e]})]})})),I=s(304),S=s.n(I),N=s(65),k=s(301),C=s.n(k),w=s(298),D=function(t){var e=Object(u.useState)(t.status),s=Object(w.a)(e,2),a=s[0],n=s[1],o=Object(u.useState)(!1),r=Object(w.a)(o,2),i=r[0],c=r[1];return Object(u.useEffect)((function(){n(t.status)}),[t.status]),Object(_.jsx)("div",{className:C.a.profileStatus,children:i?Object(_.jsx)("div",{className:C.a.statusInput,children:Object(_.jsx)("input",{autoFocus:!0,onChange:function(t){t.currentTarget.value&&n(t.currentTarget.value)},onBlur:function(){c(!1),t.updateStatus(a)},value:a})}):Object(_.jsx)("div",{className:C.a.statusText,children:Object(_.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"__________"})})})},M=function(t){var e=t.profile,s=t.status,a=t.updateStatus;return e?Object(_.jsxs)("div",{className:C.a.PrfileInfo,children:[Object(_.jsx)("div",{className:C.a.PrfileInfoImg,children:Object(_.jsx)("img",{className:C.a.ava,src:e.photos.large||P.a})}),Object(_.jsxs)("div",{className:C.a.discriptionInfo,children:[Object(_.jsx)("h5",{className:C.a.name,children:"Vlad Klopot"}),Object(_.jsx)(D,{status:s,updateStatus:a})]})]}):Object(_.jsx)(N.a,{})},T=function(t){return Object(_.jsx)("div",{className:S.a.profile,children:Object(_.jsxs)("div",{className:S.a.profileContainer,children:[Object(_.jsx)(M,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(_.jsx)(g,{post:t.post,newPostChange:t.newPostChange,addPost:t.addPost})]})})},U=s(129),A=s(10),E=s(97),F=s(11),J=function(t){Object(r.a)(s,t);var e=Object(i.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userID;t||(t=String(this.props.userID)),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(_.jsx)(T,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(l.a.Component);e.default=Object(F.d)(E.a,Object(c.b)((function(t){return{profile:t.postPage.profile,status:t.postPage.status,post:t.postPage.postData,userID:t.auth.id}}),{addPost:U.a,setUsersProfile:U.e,getUserProfile:U.c,getStatus:U.b,updateStatus:U.f}),A.f)(J)}}]);
//# sourceMappingURL=3.e1b1b706.chunk.js.map
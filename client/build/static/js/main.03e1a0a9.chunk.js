(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,t,a){e.exports=a(159)},128:function(e,t,a){},152:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(128),a(18)),l=a(16),s=a(29),u=a(54),p=a(77),m=a(217);var d=function(e){var t=e.children,a=e.value,n=e.index,c=Object(u.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"registration-".concat(n),"aria-labelledby":"registration-".concat(n)},c),a===n&&r.a.createElement(m.a,{p:3},r.a.createElement(p.a,{component:"div"},t)))},b=a(6),f=a.n(b),g=a(14),h=a(17),v=a(194),E=a(218),O=a(197),y=a(11),j="LOGIN_USER",x="LOGIN_USER_SUCCESS",w="LOGIN_USER_OAUTH",k="LOGIN_USER_ERROR",C="LOGOUT_USER",N="FETCH_CURRENT_USER",S="UPDATE_CURRENT_USER",I="GET_ALL_BOARDS",L="GET_ALL_BOARDS_SUCCESS",A="GET_ALL_BOARDS_ERROR",B="GET_ONE_BOARD",_="GET_ONE_BOARD_SUCCESS",T=function(e){return{type:x,payload:e}},R=function(e){return{type:k,payload:e}},U=function(){return{type:N}},D=function(){return{type:C}},P=function(e){return{type:L,payload:e}},W=function(e){return{type:_,payload:e}},z=a(196),G=a(106),F=a.n(G);var H=Object(y.c)((function(e){return{login:e.login}}),(function(e){return{loginUser:function(t){var a;e((a=t,{type:j,payload:Object(h.a)({},a)}))},Oauth:function(t){var a;e((a=t,{type:w,payload:Object(h.a)({},a)}))}}}))((function(e){var t=e.loginUser,a=e.login,c=e.Oauth,o=Object(n.useState)({email:"",password:""}),i=Object(l.a)(o,2),u=i[0],d=i[1],b=function(e){e.persist(),d((function(t){return Object(h.a)({},t,Object(s.a)({},e.target.name,e.target.value))}))},y=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t.profileObj);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.a,{container:!0},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(u)},style:{width:"100%"}},r.a.createElement(p.a,{variant:"h4",component:"div"},r.a.createElement(m.a,{fontStyle:"normal",my:4},"Log in")),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(E.a,{value:u.email,onChange:b,placeholder:"Type your email here",name:"email",label:"Email",type:"email",variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},required:!0,fullWidth:!0})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(E.a,{value:u.password,onChange:b,placeholder:"Type your password here",name:"password",label:"Password",type:"password",variant:"outlined",margin:"normal",required:!0,InputLabelProps:{shrink:!0},inputProps:{minLength:6,maxLength:20},fullWidth:!0})),r.a.createElement(z.a,{style:{color:"red"}},a.error),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(O.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0},"Log in")),r.a.createElement("br",null),r.a.createElement(v.a,{item:!0,sx:12},r.a.createElement(F.a,{style:{width:"100%"},render:function(e){return r.a.createElement(O.a,{style:{width:"100%"},onClick:e.onClick,disabled:e.disabled,variant:"contained",color:"secondary"},"Sign in with Google")},clientId:"937632957539-rgj6ua135uhqo0lnuejibuted9ht71ta.apps.googleusercontent.com",onSuccess:y,onFailure:j,cookiePolicy:"single_host_origin"}))))})),q=a(24),M=a.n(q),V=a(107);function X(){return localStorage.getItem("jwt-token")}var J=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("/api/user/profile",{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}});case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("/api/user/login",t,{headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("/api/user/oauth",t,{headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("/api/user/register",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.put("/api/user/details",t,{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}});case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("/api/board/create",t,{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}});case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("/api/board/".concat(t,"/getAllBoards"),{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}});case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}},e.next=4,M.a.get("/api/board/".concat(t),{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}});case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("/api/board/card/create",t,{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}});case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.patch("/api/board/card/update",t,{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.put("/api/board/card/items",t,{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.put("/api/board/card",t,{headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var oe=function(){var e=Object(n.useState)({username:"",password:"",confirmPassword:"",email:""}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(e){e.persist(),c((function(t){return Object(h.a)({},t,Object(s.a)({},e.target.name,e.target.value))}))};return r.a.createElement(v.a,{container:!0},r.a.createElement(p.a,{variant:"h4",component:"div"},r.a.createElement(m.a,{fontStyle:"normal",my:4},"Register")),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Q(a)},style:{width:"100%"}},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(E.a,{onChange:o,placeholder:"Type your username here",name:"username",label:"Username",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{minLength:3,maxLength:20},fullWidth:!0})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(E.a,{onChange:o,placeholder:"Type your email here",name:"email",label:"Email",type:"email",variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},required:!0,fullWidth:!0})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(E.a,{onChange:o,placeholder:"Type your password here",name:"password",label:"Password",type:"password",variant:"outlined",margin:"normal",required:!0,InputLabelProps:{shrink:!0},inputProps:{minLength:6,maxLength:20},fullWidth:!0})),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(E.a,{onChange:o,placeholder:"Re-type your password here",label:"Password",name:"confirmPassword",type:"password",variant:"outlined",margin:"normal",inputProps:{minLength:6,maxLength:20},InputLabelProps:{shrink:!0},required:!0,fullWidth:!0})),r.a.createElement(v.a,{item:!0,xs:12,md:12},r.a.createElement(O.a,{variant:"contained",color:"primary",type:"submit",fullWidth:!0},"Register"))))},ie=a(198),le=a(220),se=a(199);function ue(e){return{id:"registration-".concat(e),"aria-controls":"registration-".concat(e)}}var pe=Object(ie.a)((function(e){return{registrationContainer:Object(s.a)({flexDirection:"row-reverse",height:"100%",margin:"20px 80px 10px 80px",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("sm"),{flexDirection:"column-reverse"}),registration:Object(s.a)({width:"50%",minHeight:"600px",flex:1},e.breakpoints.down("sm"),{width:"100%"}),image:{width:"100%",height:"100%"}}}));var me=Object(y.c)((function(e){return{login:e.login}}),null)((function(e){var t=e.login,a=pe(),n=Object(i.g)(),c=r.a.useState(0),o=Object(l.a)(c,2),s=o[0],u=o[1];return r.a.useEffect((function(){t.isLoggedIn&&n.push("/home/".concat(t.user.name))})),r.a.createElement("div",{className:a.registrationContainer},r.a.createElement("div",{className:a.registration},r.a.createElement(le.a,{value:s,onChange:function(e,t){u(t)},"aria-label":"simple tabs example"},r.a.createElement(se.a,Object.assign({label:"Sign Up"},ue(0))),r.a.createElement(se.a,Object.assign({label:"Log in"},ue(1)))),r.a.createElement(d,{value:s,index:0},r.a.createElement(oe,null)),r.a.createElement(d,{value:s,index:1},r.a.createElement(H,null))),r.a.createElement("div",{style:{width:"50%",flex:1}},r.a.createElement("img",{className:a.image,src:"/assets/form.svg"})))}));Object(y.c)((function(e){return{currentUser:e.login,location:e.router.location.pathname}}),(function(e){return{fetchCurrentUser:function(){return e(U())}}}))((function(e){var t=e.currentUser,a=e.fetchCurrentUser,c=Object(u.a)(e,["currentUser","fetchCurrentUser"]),o=Object(i.g)(),l=localStorage.getItem("jwt-token");return Object(n.useEffect)((function(){l?function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(t.user)&&a():o.push("/")}),[l]),r.a.createElement(r.a.Fragment,null,c.children)}));var de=a(113),be=a(34),fe=a(200),ge=a(201),he=a(202),ve=a(203),Ee=(a(152),a(74)),Oe=a.n(Ee);var ye=Object(y.c)((function(e){return{login:e.login}}),null)((function(e){var t=e.login,a=e.getAllBoards,c=Object(n.useState)(!1),o=Object(l.a)(c,2),i=o[0],s=o[1],u=Object(n.useState)(""),p=Object(l.a)(u,2),m=p[0],d=p[1],b=Object(n.useState)("rgb(0, 121, 191)"),h=Object(l.a)(b,2),v=h[0],y=h[1],j=Object(n.useRef)(null),x=function(e){j.current.style.backgroundColor=e.target.style.backgroundColor,y(e.target.style.backgroundColor)},w=function(){var e=Object(g.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,$({boardName:m,boardColor:v});case 3:return e.next=5,a(t.user.name);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,{elevation:3,className:"paper"},r.a.createElement("div",{onClick:function(){s((function(e){return!e}))},className:"board-overlay"}),"Create New Board"),r.a.createElement("div",{className:i?"boardOpen":"boardClose"},r.a.createElement("form",{onSubmit:w,className:"form-container"},r.a.createElement(fe.a,{style:{maxHeight:"140px",minWidth:"300px",margin:20,color:"white"}},r.a.createElement(ge.a,{style:{padding:0,color:"white"},subheader:"Create your board",action:r.a.createElement(he.a,{"aria-label":"close",onClick:function(){return s(!1)},ref:j},r.a.createElement(Oe.a,null))}),r.a.createElement(ve.a,{style:{padding:10}},r.a.createElement(E.a,{name:"boardName",value:m,onChange:function(e){d(e.target.value)},fullWidth:!0,label:"Board name*"})),r.a.createElement(O.a,{color:"primary",variant:"contained",type:"submit"},"Create")),r.a.createElement("div",{style:{height:"96px",marginTop:"20px",width:"100px"}},r.a.createElement("div",{className:"background-grid"},r.a.createElement("div",{className:"background-grid-items"},r.a.createElement("button",{type:"button",className:"background-button",onClick:x,style:{backgroundColor:"rgb(176, 70, 50)"}})),r.a.createElement("div",{className:"background-grid-items"},r.a.createElement("button",{type:"button",className:"background-button",onClick:x,style:{backgroundColor:"rgb(0, 121, 191)"}})),r.a.createElement("div",{className:"background-grid-items"},r.a.createElement("button",{onClick:x,type:"button",className:"background-button",style:{backgroundColor:"rgb(210, 144, 52)"}})),r.a.createElement("div",{className:"background-grid-items"},r.a.createElement("button",{type:"button",className:"background-button",onClick:x,style:{backgroundColor:"rgb(81, 152, 57)"}})))))))})),je=a(210),xe=a(211),we=a(28),ke=a(112),Ce=a(222),Ne=a(204),Se=a(205),Ie=a(195),Le=a(219),Ae=a(108),Be=a.n(Ae),_e=a(206),Te=a(207),Re=a(208),Ue=a(209),De=(a(154),Object(ie.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(s.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(we.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(we.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:{display:"flex"}}})));var Pe=Object(y.c)((function(e){return{login:e.login}}),(function(e){return{logOut:function(){return e(D())}}}))((function(e){var t=e.logOut,a=e.login,n=De(),c=Object(i.g)(),o=r.a.useState(null),s=Object(l.a)(o,2),u=s[0],m=s[1],d=Boolean(u),b=d?"trello-popover":void 0,f=r.a.useState(null),g=Object(l.a)(f,2),h=g[0],v=g[1],E=r.a.useState(null),O=Object(l.a)(E,2),y=(O[0],O[1],Boolean(h)),j=function(e){console.log(e.target.to),v(null)},x="primary-search-account-menu",w=r.a.createElement(ke.a,{anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},id:x,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:y,onClose:j},r.a.createElement(Ce.a,{onClick:j,name:"profile"},"Profile"),r.a.createElement(Ce.a,{onClick:j},"My account"),r.a.createElement(Ce.a,{onClick:function(){t()}},"Log out"));return r.a.createElement("div",{className:n.grow},r.a.createElement(Ne.a,{position:"static",style:{backgroundColor:"#026aa7"}},r.a.createElement(Se.a,{style:{minHeight:0}},r.a.createElement(he.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){c.push("/home/"+a.user.name)}},r.a.createElement(Be.a,null)),r.a.createElement(p.a,{className:n.title,variant:"h6",noWrap:!0},"TRELLO"),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(_e.a,null)),r.a.createElement(Ie.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:n.grow}),r.a.createElement("div",{className:n.sectionDesktop},r.a.createElement(he.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(Te.a,null)),r.a.createElement(he.a,{"aria-label":"info ",color:"inherit",onClick:function(e){m(e.currentTarget)}},r.a.createElement(Re.a,null)),r.a.createElement(he.a,{edge:"end","aria-label":"account of current user","aria-controls":x,"aria-haspopup":"true",onClick:function(e){v(e.currentTarget)},color:"inherit"},r.a.createElement(Ue.a,null))))),r.a.createElement(Le.a,{id:b,open:d,anchorEl:u,onClose:function(){m(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(p.a,{style:{textAlign:"center"}},"Information!"),r.a.createElement("img",{className:"information-img",src:"https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@1x.d554cbf6d240549b8ef0.png",srcset:"https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@1x.d554cbf6d240549b8ef0.png 1x, https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@2x.dc2ae20f9f00051bb6d4.png 2x",alt:"",role:"presentation"})),w)})),We=(a(155),Object(ie.a)((function(e){return{mainContainer:Object(s.a)({padding:"40px 10%",display:"flex"},e.breakpoints.down("sm"),{padding:"40px 0"}),sideBar:{minWidth:"200px","& ul":{listStyleType:"none",marginRight:"20px","& li":{padding:"10px 0",backgroundColor:"#e4f0f6",margin:"0px 3px 3px 5px",borderRadius:"5px","& a":{textDecoration:"none",color:"#0079bf",display:"flex",alignItems:"center"}}}},gridItems:{minHeight:"100px",minWidth:"200px"},paper:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{backgroundColor:"rgba(9,30,66,.04)",transition:"all 85ms ease"},"& a":{textDecoration:"none",textAlign:"center"}}}})));var ze=Object(y.c)((function(e){var t=e.login,a=e.boards,n=e.router;return{login:t,boards:a.boards,location:n}}),(function(e){return{getAllBoards:function(t){e({type:I,payload:t})}}}))((function(e){var t=e.login,a=e.getAllBoards,c=e.boards,o=(e.location,Object(i.h)().user),l=We();return Object(n.useEffect)((function(){document.title="Home | "+t.user.name,a(o)}),[t.user.name]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,null),r.a.createElement("main",{style:{height:"100%",position:"relative"}},r.a.createElement("div",{className:l.mainContainer},r.a.createElement("div",{className:l.sideBar},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(be.b,{to:"/home/".concat(t.user.name)},r.a.createElement(je.a,null),"Boards")),r.a.createElement("li",null,r.a.createElement(be.b,{to:"/home/".concat(t.user.name)},r.a.createElement(xe.a,null),"Home")))),r.a.createElement(v.a,{container:!0,spacing:2},c.map((function(e){return r.a.createElement(v.a,{key:e._id,item:!0,md:2,sm:6,xs:10,className:l.gridItems},r.a.createElement(de.a,{elevation:3,style:{backgroundColor:"".concat(e.backgroundColor)},className:l.paper},r.a.createElement(be.a,{to:"/boards/".concat(e.name),style:{position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%"}}),r.a.createElement(p.a,{style:{color:"white",fontWeight:1e3},component:"h2"},e.name)))})),r.a.createElement(v.a,{item:!0,md:2,sm:6,xs:10,className:l.gridItems},r.a.createElement(ye,{getAllBoards:a}))))))})),Ge=function(){return r.a.createElement("div",{className:"404"},"404 Not Found")},Fe=(a(156),a(214)),He=a(213),qe=a(65),Me=a(161),Ve=a(212),Xe=a(75),Je={textarea:{resize:"none",overflow:"hidden",borderImage:"none",borderRadius:"6px 6px 6px 6px",borderStyle:"none solid solid none",borderWidth:"medium 1px 1px medium",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.12) inset",color:"#555555",fontSize:"1.2em",lineHeight:"1.4em",padding:"5px 8px"},container:{position:"absolute",height:"calc(100% - 50px)",width:"100%"}},Ke=function(e){var t=e.overlayVar,a=e.setOverlay,c=e.overlay,o=e.getSpecificBoard,i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],p=s[1],m=function(){var e=Object(g.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,ne(Object(h.a)({},t,{value:u}));case 3:return e.next=5,o();case 5:a(!c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(g.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,re(Object(h.a)({},t));case 3:return e.next=5,o();case 5:a(!c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"update-overlay-container",style:Je.container},r.a.createElement("div",{className:"relative-container",style:{backgroundColor:"rgba(0, 0, 0, 0.75)",width:"100%",height:"100%",position:"relative"}},r.a.createElement("div",{className:"update-overlay",style:{transform:"translate3d(".concat(t.x,"px,").concat(t.y-40,"px,0)"),position:"absolute",zIndex:30,display:"flex"}},r.a.createElement("form",{onSubmit:m},r.a.createElement("div",{className:"textarea-container"},r.a.createElement(Me.a,{onChange:function(e){p(e.target.value)},value:u,rowsMin:5,rowsMax:7,cols:30,style:Je.textarea})),r.a.createElement(O.a,{type:"submit",color:"secondary",variant:"contained"},"Save")),r.a.createElement("div",{className:"update_options",style:{display:"flex",flexDirection:"column"}},r.a.createElement("form",{onSubmit:d},r.a.createElement(O.a,{type:"submit",color:"secondary"},r.a.createElement(Ve.a,{style:{color:Xe.a[500]}}))),r.a.createElement(he.a,{onClick:function(){a(!c)}},r.a.createElement(He.a,{style:{color:Xe.a[500]}}))))))},Ye=a(7),Qe=a(76),Ze=Object(Ye.a)((function(e){return{root:{color:"white",backgroundColor:Qe.a[500],"&:hover":{backgroundColor:Qe.a[700]}}}}))(O.a);var $e=Object(y.c)(null,(function(e){return{setBoard:function(t){e(W(t))}}}))((function(e){var t=e.card,a=e.updateBoards,c=e.overlayVar,o=e.setOverlay,i=(e.setBoard,Object(n.useState)("")),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(!1),b=Object(l.a)(d,2),v=b[0],O=b[1],y=Object(n.useState)(t.name),j=Object(l.a)(y,2),x=j[0],w=j[1],k=Object(n.useState)(!1),C=Object(l.a)(k,2),N=C[0],S=C[1],I=function(e){e.currentTarget.getBoundingClientRect();var a=e.clientX,n=e.clientY,r=t._id,i=e.target.closest("div").parentNode.getAttribute("data-rbd-draggable-id");c({x:a,y:n,cardId:r,itemId:i}),o(!0)},L=function(){var e=Object(g.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==a.which){e.next=6;break}return a.preventDefault(),e.next=4,ce({cardId:t._id,name:x});case 4:e.sent,S(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){e.persist(),m(e.target.value)},B=function(){var e=Object(g.a)(f.a.mark((function e(n){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={cardId:t._id,item:u},c={headers:{Authorization:"Bearer "+X(),"Content-Type":"application/json",Accept:"application/json"}},e.next=5,M.a.post("http://localhost:5000/api/board/card/items",r,c);case 5:return e.next=7,a();case 7:m("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(fe.a,{style:{backgroundColor:"#ebecf0",maxHeight:"600px",width:"auto"}},N?r.a.createElement("form",null,r.a.createElement(E.a,{onKeyPress:L,fullWidth:!0,label:"Card Title",value:x,onChange:function(e){w(e.target.value)}})):r.a.createElement(p.a,{component:"h2",variant:"h5",style:{padding:"5px 16px",cursor:"pointer"},onDoubleClick:function(){S(!N)}},t.name),r.a.createElement(qe.c,{droppableId:"".concat(t._id)},(function(e){return r.a.createElement(ve.a,Object.assign({},e.droppableProps,{innerRef:e.innerRef,className:"todo-cards"}),t.items&&t.items.map((function(e,t){return r.a.createElement(qe.b,{draggableId:"".concat(e._id),key:"".concat(e._id),index:t},(function(t,a){return r.a.createElement("div",Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef,style:(n=a.isDragging,c=t.draggableProps.style,Object(h.a)({userSelect:"none",transform:n?"rotate(20deg)":"rotate(100deg)",color:n?"red":"black"},c))}),r.a.createElement(de.a,{square:!0,variant:"outlined",className:"todo-card-item"},r.a.createElement(p.a,{style:{overflowWrap:"break-word",overflow:"hidden"},component:"h5"},e.item),r.a.createElement(he.a,{id:"iconButton",onClick:I},r.a.createElement(Fe.a,null))));var n,c}))})),e.placeholder,v?r.a.createElement(de.a,{style:{padding:10}},r.a.createElement("form",{onSubmit:B},r.a.createElement(E.a,{fullWidth:!0,label:"Add new todo",value:u,onChange:A}),r.a.createElement("br",null),r.a.createElement(Ze,{type:"submit",variant:"contained",color:"primary"},"Add"),r.a.createElement(he.a,{onClick:function(){O((function(e){return!e}))}},r.a.createElement(He.a,null)))):r.a.createElement("div",{className:"card-composer",onClick:function(){O((function(e){return!e}))},style:{backgroundColor:"transparent"}},r.a.createElement("a",{href:"#",className:"card-composer-text"},r.a.createElement("span",null,r.a.createElement(Te.a,{className:"card-composer-icon",fontSize:"large"})),r.a.createElement("p",null," Add a todo "))))})))})),et=a(109),tt=a.n(et);a(157);var at=Object(y.c)((function(e){return{login:e.login,boards:e.boards}}),(function(e){return{getOneBoard:function(t){e(function(e){return{type:B,payload:e}}(t))}}}))((function(e){e.login;var t=e.getOneBoard,a=e.boards.specificBoard,c=Object(n.useState)(""),o=Object(l.a)(c,2),s=o[0],u=o[1],p=Object(i.h)().boardName,m=Object(n.useState)(!1),d=Object(l.a)(m,2),b=d[0],h=d[1],v=Object(n.useState)({}),y=Object(l.a)(v,2),j=y[0],x=y[1],w=Object(n.useState)(!1),k=Object(l.a)(w,2),C=k[0],N=k[1],S=function(e){x(e)},I=function(e){N((function(e){return!e}))},L=function(){t(p)};Object(n.useEffect)((function(){document.title=p,t(p)}),[]);var A=function(){var e=Object(g.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,ae({boardName:p,name:s});case 3:return e.next=5,t(p);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(g.a)(f.a.mark((function e(a){var n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.destination,r=a.draggableId,c=a.source,n){e.next=3;break}return e.abrupt("return");case 3:return{destination:n.droppableId,itemId:r,source:c.droppableId},e.next=6,t(p);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"boards",style:{backgroundColor:"".concat(a.backgroundColor),height:"100%"}},r.a.createElement(Pe,null),b&&r.a.createElement(Ke,{overlayVar:j,setOverlay:h,overlay:b,getSpecificBoard:L}),r.a.createElement("div",{className:"boards-container"},r.a.createElement(qe.a,{onDragEnd:B},a.cards&&a.cards.map((function(e){return r.a.createElement("div",{className:"board-cards",key:"".concat(e._id)},r.a.createElement($e,{setOverlay:h,updateBoards:L,overlayVar:S,card:e}))}))),C?r.a.createElement("div",{className:"board-cards"},r.a.createElement(de.a,{style:{backgroundColor:"#ebecf0",padding:10}},r.a.createElement("form",{onSubmit:A},r.a.createElement(E.a,{placeholder:"Enter a list name",variant:"outlined",fullWidth:!0,value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement(O.a,{type:"submit",style:{backgroundColor:"#5aac44",color:"#fff"}},"Add"),r.a.createElement(he.a,{onClick:I},r.a.createElement(Oe.a,null))))):r.a.createElement("div",{className:"board-cards"},r.a.createElement(O.a,{onClick:I,style:{backgroundColor:"hsla(0,0%,100%,.24)"},fullWidth:!0},r.a.createElement(tt.a,null),"Add a list"))))})),nt=(a(158),a(221)),rt=a(215),ct=a(216),ot=Object(ie.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(rt.a[500]),backgroundColor:rt.a[500]},purple:{color:e.palette.getContrastText(ct.a[500]),backgroundColor:ct.a[500]}}})),it=Object(y.c)((function(e){return{login:e.login}}),(function(e){return{updateUser:function(t){e(function(e){return{type:S,payload:e}}(t))}}}))((function(e){var t=e.login,a=e.updateUser,c=ot(),o=Object(n.useState)({username:"",bio:""}),i=Object(l.a)(o,2),s=i[0],u=i[1];Object(n.useEffect)((function(){u({username:t.user.name,bio:t.user.bio})}),[t.user.name]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,null),r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"profile-header"},r.a.createElement(nt.a,{className:c.purple},t.user.name&&t.user.name[0],t.user.name&&t.user.name.split(" ")[1][0]),r.a.createElement(p.a,{variant:"h5",component:"h3"},t.user.name)),r.a.createElement("div",{className:"profile-content"},r.a.createElement("div",{className:"profile-content-container"},r.a.createElement(p.a,{variant:"h5",component:"h4",gutterBottom:!0,style:{marginBottom:50}},"Manage your personal information"),r.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},"About"),r.a.createElement("hr",null),r.a.createElement("div",{className:"profile-form-container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(s)}},r.a.createElement("div",{className:"form-control"},r.a.createElement(E.a,{id:"username",label:"Username",value:"".concat(s.username),onChange:function(e){e.persist(),u((function(t){return Object(h.a)({},t,{username:e.target.value})}))},variant:"outlined",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})),r.a.createElement("div",{className:"form-control"},r.a.createElement(E.a,{id:"bio",label:"Bio",value:"".concat(s.bio),onChange:function(e){e.persist(),u((function(t){return Object(h.a)({},t,{bio:e.target.value})}))},variant:"outlined",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})),r.a.createElement("div",{className:"form-control"},r.a.createElement(Ze,{type:"submit",variant:"contained",color:"primary",style:{color:"#fff"},fullWidth:!0},"Save"))))))))}));Object(y.c)((function(e){return{isLoggedIn:e.login.isLoggedIn}}),null)((function(e){var t=e.component,a=e.isLoggedIn,n=Object(u.a)(e,["component","isLoggedIn"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))}));var lt=Object(y.c)((function(e){return{currentUser:e.login}}),(function(e){return{fetchCurrentUser:function(){return e(U())},logOut:function(){return e(D())}}}))((function(e){e.currentUser;var t=e.fetchCurrentUser,a=e.logOut;return Object(i.g)(),Object(n.useEffect)((function(){var e=localStorage.getItem("jwt-token");e&&(!function(e){try{var t=Object(V.a)(e);return console.log(t.exp,Date.now()/1e3),t.exp<Date.now()/1e3}catch(a){return!1}}(e)?t():a())}),[]),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:me}),r.a.createElement(i.b,{exact:!0,path:"/home/:user",component:ze}),r.a.createElement(i.b,{exact:!0,path:"/boards/:boardName",component:at}),r.a.createElement(i.b,{path:"/profile",component:it}),r.a.createElement(i.b,{component:Ge}))})),st=a(27),ut=a(110),pt={user:{},isLoggedIn:!1,isLoading:!0,error:""},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:case w:return Object.assign({},e,Object(h.a)({},e));case S:return Object.assign({},e,Object(h.a)({},e,{user:t.payload}));case x:return Object.assign({},e,Object(h.a)({},e,{isLoggedIn:!0,isLoading:!1,user:t.payload}));case k:return Object.assign({},e,Object(h.a)({},e,{error:"LOGIN ERROR"}));case C:return localStorage.removeItem("jwt-token"),window.location="/",Object.assign({},e,Object(h.a)({},e,{user:{},isLoggedIn:!1}));default:return e}},dt=a(111),bt={boards:[],specificBoard:{},error:""},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(h.a)({},e,{boards:Object(dt.a)(t.payload)});case A:var a=t.payload;return Object(h.a)({},e,{error:a});case _:var n=t.payload;return Object(h.a)({},e,{specificBoard:Object(h.a)({},n)});default:return e}},gt=a(51),ht=function(e){return Object(st.c)({login:mt,router:Object(gt.b)(e),boards:ft})},vt=a(15),Et=f.a.mark(jt),Ot=f.a.mark(xt),yt=f.a.mark(wt);function jt(e){var t;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(vt.b)(ee,e.payload);case 3:return t=a.sent,a.next=6,Object(vt.c)(P(t.data));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),console.log(a.t0),a.next=13,Object(vt.c)((n=a.t0,{type:A,payload:n}));case 13:case"end":return a.stop()}var n}),Et,null,[[0,8]])}function xt(e){var t,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(vt.b)(te,t);case 4:return a=n.sent,console.log(a),n.next=8,Object(vt.c)(W(a.data));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),Ot,null,[[1,10]])}function wt(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.e)(I,jt);case 2:return e.next=4,Object(vt.e)(B,xt);case 4:case"end":return e.stop()}}),yt)}var kt=wt,Ct=f.a.mark(At),Nt=f.a.mark(Bt),St=f.a.mark(_t),It=f.a.mark(Tt),Lt=f.a.mark(Rt);function At(e){var t,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(vt.b)(J,e.payload);case 3:return t=n.sent,a=t.data.user,n.next=7,Object(vt.c)(T(a));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),Ct,null,[[0,9]])}function Bt(e){var t,a,n;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(vt.b)(K,e.payload);case 3:t=r.sent,a=t.data,n=t.status,r.t0=n,r.next=200===r.t0?9:403===r.t0?13:16;break;case 9:return localStorage.setItem("jwt-token",a.token),r.next=12,Object(vt.c)(T(a.user));case 12:return r.abrupt("break",17);case 13:return r.next=15,Object(vt.c)(R("Login Failed. Please Try Again"));case 15:return r.abrupt("break",17);case 16:return r.abrupt("return",n);case 17:r.next=24;break;case 19:return r.prev=19,r.t1=r.catch(0),console.log(r.t1),r.next=24,Object(vt.c)(R("Login Failed. Please Try Again"));case 24:case"end":return r.stop()}}),Nt,null,[[0,19]])}function _t(e){var t,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(vt.b)(Z,e.payload);case 3:if(t=n.sent,a=t.user,200!==t.status){n.next=9;break}return n.next=9,Object(vt.c)(T(a));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),St,null,[[0,11]])}function Tt(e){var t,a,n;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(vt.b)(Y,e.payload);case 3:t=r.sent,a=t.status,n=t.data,console.log(n),r.t0=a,r.next=200===r.t0?10:403===r.t0?14:17;break;case 10:return localStorage.setItem("jwt-token",n.token),r.next=13,Object(vt.c)(T(n.user));case 13:return r.abrupt("break",18);case 14:return r.next=16,Object(vt.c)(R("Login Failed. Please Try Again"));case 16:return r.abrupt("break",18);case 17:return r.abrupt("return",a);case 18:r.next=25;break;case 20:return r.prev=20,r.t1=r.catch(0),console.log(r.t1),r.next=25,Object(vt.c)(R("Login Failed. Please Try Again"));case 25:case"end":return r.stop()}}),It,null,[[0,20]])}function Rt(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vt.f)(j,Bt);case 2:return e.next=4,Object(vt.f)(w,Tt);case 4:return e.next=6,Object(vt.e)(S,_t);case 6:return e.next=8,Object(vt.f)(N,At);case 8:case"end":return e.stop()}}),Lt)}var Ut=Rt,Dt=f.a.mark(Pt);function Pt(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[Ut,kt],t.next=3,Object(vt.a)(e.map((function(e){return Object(vt.d)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Object(vt.b)(e);case 4:return t.abrupt("break",12);case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:t.next=0;break;case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))})));case 3:case"end":return t.stop()}}),Dt)}var Wt=Pt,zt=a(32),Gt=a(101),Ft=Object(ut.a)(),Ht=Object(zt.a)(),qt=Object(st.e)(ht(Ht),Object(st.d)(Object(st.a)(Ft,Object(Gt.a)(Ht)),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({serialize:!0,trace:!0})));Ft.run(Wt),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y.a,{store:qt},r.a.createElement(gt.a,{history:Ht},r.a.createElement(lt,null)))),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.03e1a0a9.chunk.js.map
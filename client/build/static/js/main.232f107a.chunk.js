(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(28),s=n.n(a),i=n(7),j=n(9),o=n(2),u=(n(19),n(0)),l=function(e){return Object(u.jsxs)("nav",{className:"navlogin",children:[Object(u.jsx)("div",{className:"marginstart",children:"MBYA staff"}),Object(u.jsx)(i.b,{className:"margin",exact:!0,to:"/elementary",children:"Elementary"}),Object(u.jsx)(i.b,{className:"margin",exact:!0,to:"/highschool",children:"High School"}),Object(u.jsx)(i.b,{className:"margin",exact:!0,to:"/",onClick:function(){return localStorage.clear()},children:"Sign Out"})]})},h=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h3",{children:"This is home"})]})},b=n(10),d=n.n(b),x=n(12),O=n(18),p=function(e){return"textfield"===e.fieldType?Object(u.jsx)("textarea",{type:e.type,name:e.name,value:e.value,onChange:function(t){return e.onChange(t)},placeholder:e.placeholder,required:!0}):Object(u.jsx)("input",{type:e.type,name:e.name,value:e.value,onChange:function(t){return e.onChange(t)},placeholder:e.placeholder,autoComplete:"false",required:!0})},m=n(30),f=n.n(m).a.create({baseURL:"".concat(window.location.origin,"/api")});f.interceptors.request.use(function(){var e=Object(x.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=localStorage.getItem("token"))&&(t.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var g=f,v=function(){var e=Object(x.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("User Inf",t),e.prev=1,e.next=4,g.post("/team/login",t);case 4:return n=e.sent,console.log(n.data),localStorage.setItem("token",n.data.token),e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=Object(c.useState)(""),n=Object(O.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(O.a)(s,2),j=i[0],l=i[1],h=Object(o.f)(),b=function(){var e=Object(x.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:r,password:j},e.next=5,v(n);case 5:return c=e.sent,console.log(c),h.push("/home"),e.abrupt("return");case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"signin flex-col",children:Object(u.jsxs)("form",{className:"flex-col",onSubmit:b,children:[Object(u.jsx)(p,{placeholder:"Your Email",name:"email",type:"email",value:r,onChange:function(e){var t=e.target;a(t.value)}}),Object(u.jsx)(p,{placeholder:"Password",name:"password",type:"password",value:j,onChange:function(e){var t=e.target;l(t.value)}}),Object(u.jsx)("button",{onClick:b,children:"Sign In"})]})})},y=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"this is Landing page"})})},N=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h3",{children:"This is elementary"}),Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.b,{className:"margin",exact:!0,to:"/Kindergarten",children:"Kindergarten"}),Object(u.jsx)(i.b,{className:"margin",exact:!0,to:"/first-grade",children:"First Grade"}),Object(u.jsx)(i.b,{className:"margin",exact:!0,to:"/second-grade",children:"Second Grade"}),Object(u.jsx)(i.b,{className:"margin",exact:!0,to:"/third-grade",children:"Third Grade"})]})]})},S=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h3",{children:"This is HighSchool"})]})},k=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h3",{children:"This is second grade"})]})},T=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h3",{children:"This is FirstGrade"})]})},C=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h3",{children:"This is third grade"})]})},I=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h3",{children:"This is Kindergarten"}),Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:"Moran"})})]})},G=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)("h3",{children:"This is Moran"})]})},M=Object(o.g)((function(e){return Object(u.jsx)("main",{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/login",component:function(e){return Object(u.jsx)(w,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/home",component:function(e){return Object(u.jsx)(h,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/elementary",component:function(e){return Object(u.jsx)(N,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/kindergarten",component:function(e){return Object(u.jsx)(I,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/first-grade",component:function(e){return Object(u.jsx)(T,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/second-grade",component:function(e){return Object(u.jsx)(k,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/third-grade",component:function(e){return Object(u.jsx)(C,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/highschool",component:function(e){return Object(u.jsx)(S,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/",component:function(e){return Object(u.jsx)(w,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/landing",component:function(e){return Object(u.jsx)(y,Object(j.a)({},e))}}),Object(u.jsx)(o.a,{exact:!0,path:"/moran",component:function(e){return Object(u.jsx)(G,Object(j.a)({},e))}})]})})})),q=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(M,{})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(q,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.232f107a.chunk.js.map
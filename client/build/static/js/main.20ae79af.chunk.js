(this["webpackJsonparchitectual-client"]=this["webpackJsonparchitectual-client"]||[]).push([[0],{100:function(e,t,c){},105:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(39),s=c.n(a),i=(c(99),c(100),c(5)),o=c(22),l=c(9),j=c(89),d=c(129),b=c(131),u=c(128),O=c(87),p=c(11);function h(e,t){return 1===t?e:e+"s"}function m(e,t,c){return new Promise((function(n,r){var a,s,i,o=window.indexedDB.open("mern-ski-resort",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(r){switch(a=o.result,s=a.transaction(e,"readwrite"),i=s.objectStore(e),a.onerror=function(e){console.log("error",e)},t){case"put":i.put(c),n(c);break;case"get":var l=i.getAll();l.onsuccess=function(){n(l.result)};break;case"delete":i.delete(c._id);break;default:console.log("No valid method")}s.oncomplete=function(){a.close()}}}))}var x=c(43),f=c(14),g="UPDATE_PRODUCTS",v="UPDATE_CATEGORIES",y="UPDATE_CURRENT_CATEGORY",w="ADD_TO_CART",N="ADD_MULTIPLE_TO_CART",_="REMOVE_FROM_CART",k="UPDATE_CART_QUANTITY",S="TOGGLE_CART",C=function(e,t){switch(t.type){case g:return Object(i.a)(Object(i.a)({},e),{},{products:Object(f.a)(t.products)});case w:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(f.a)(e.cart),[t.product])});case N:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(f.a)(e.cart),Object(f.a)(t.products))});case k:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case _:var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:c.length>0,cart:c});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case S:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case v:return Object(i.a)(Object(i.a)({},e),{},{categories:Object(f.a)(t.categories)});case y:return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var T=c(2),E=["value"],A=Object(n.createContext)(),P=A.Provider,R=function(e){e.value;var t,c=Object(x.a)(e,E),r=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(C,t)),a=Object(p.a)(r,2),s=a[0],o=a[1];return Object(T.jsx)(P,Object(i.a)({value:[s,o]},c))},D=function(){return Object(n.useContext)(A)};var I,F,W,U,L,$=function(e){var t=D(),c=Object(p.a)(t,2),n=c[0],r=c[1],a=e.image,s=e.name,l=e._id,j=e.price,d=e.quantity,b=n.cart;return Object(T.jsxs)("div",{className:"card px-1 py-1",children:[Object(T.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(T.jsx)("img",{alt:s,src:"/images/".concat(a)}),Object(T.jsx)("p",{children:s})]}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[d," ",h("Project",d)," Available "]}),Object(T.jsxs)("span",{children:["$",j]})]}),Object(T.jsx)("button",{onClick:function(){var t=b.find((function(e){return e._id===l}));t?(r({type:k,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),m("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(r({type:w,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),m("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},children:"Select your Project"})]})},H=c(92),Q=c(35),q=c(130),M=Object(q.a)(I||(I=Object(Q.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),z=(Object(q.a)(F||(F=Object(Q.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(q.a)(W||(W=Object(Q.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),B=Object(q.a)(U||(U=Object(Q.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),K=Object(q.a)(L||(L=Object(Q.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),G=c.p+"static/media/spinner.7e729fec.gif";var Y=function(){var e=D(),t=Object(p.a)(e,2),c=t[0],r=t[1],a=c.currentCategory,s=Object(H.b)(M),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(r({type:g,products:o.products}),o.products.forEach((function(e){m("products","put",e)}))):i||m("products","get").then((function(e){r({type:g,products:e})}))}),[o,i,r]),Object(T.jsxs)("div",{className:"my-2",children:[Object(T.jsx)("br",{}),Object(T.jsx)("h3",{children:"Our Actual Projects"}),Object(T.jsx)("br",{}),c.products.length?Object(T.jsx)("div",{className:"flex-row",children:(a?c.products.filter((function(e){return e.category._id===a})):c.products).map((function(e){return Object(T.jsx)($,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(T.jsx)("h3",{children:"You haven't selected a project, please complete your selection!"}),i?Object(T.jsx)("img",{src:G,alt:"loading"}):null]})};var V=function(){var e=D(),t=Object(p.a)(e,2),c=t[0],r=t[1],a=c.categories,s=Object(H.b)(z),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(r({type:v,categories:o.categories}),o.categories.forEach((function(e){m("categories","put",e)}))):i||m("categories","get").then((function(e){r({type:v,categories:e})}))}),[o,i,r]),Object(T.jsxs)("div",{children:[Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("h2",{style:{textAlign:"center"},children:"Application to Manage Architectual & Construction Projects"}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:" Our application takes care of managing your architectural projects, we provide the necessary framework to design, build, manage and complete architectonical and construction projects. We take care to develop your project in a cost-effective, profitable and with the highest quality. Our portfolio contains high impact and some of the best architectonical projects worldwide."}),Object(T.jsx)("br",{}),Object(T.jsx)("h3",{children:"Architectual and Construction Projects Categories"}),Object(T.jsx)("br",{}),a.map((function(e){return Object(T.jsx)("button",{onClick:function(){var t;t=e._id,r({type:y,currentCategory:t})},children:e.name},e._id)})),Object(T.jsx)("div",{})]})},Z=c(8),J=c(13),X=c(83),ee=c(120),te=c(28),ce=function(e){var t=e.item,c=D(),n=Object(p.a)(c,2)[1];return Object(T.jsxs)("div",{className:"flex-row",children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[t.name,", $",t.price]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{children:"Qty:"}),Object(T.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:_,_id:t._id}),m("cart","delete",Object(i.a)({},t))):(n({type:k,_id:t._id,purchaseQuantity:parseInt(c)}),m("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object(T.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:_,_id:e._id}),m("cart","delete",Object(i.a)({},e))}(t)},children:Object(T.jsx)(te.e,{style:{color:"dark-grey",fontSize:"30px"}})})]})]})]})},ne=c(25),re=c(24),ae=c(73),se=c.n(ae),ie=new(function(){function e(){Object(ne.a)(this,e)}return Object(re.a)(e,[{key:"getProfile",value:function(){return se()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return se()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),oe=(c(105),c(84)),le=Object(X.a)("pk_test_51LULRzE5IrKGMKYOVpxNuSyeuS716Ta9qJhSc5B668buXvqKWCSQTKRDcuPmqCywCfYZfudggJZJnEA6AY4aXwfF000fYOqZcC"),je=function(){var e=D(),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(ee.a)(K),s=Object(p.a)(a,2),i=s[0],o=s[1].data;function l(){r({type:S})}return Object(n.useEffect)((function(){o&&le.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(n.useEffect)((function(){function e(){return(e=Object(J.a)(Object(Z.a)().mark((function e(){var t;return Object(Z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:t=e.sent,r({type:N,products:Object(f.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.cart.length||function(){e.apply(this,arguments)}()}),[c.cart.length,r]),c.cartOpen?Object(T.jsxs)("div",{className:"cart",children:[Object(T.jsx)("div",{className:"close",onClick:l,children:"[close]"}),Object(T.jsx)("h2",{children:"CHECKOUT CART"}),c.cart.length?Object(T.jsxs)("div",{children:[c.cart.map((function(e){return Object(T.jsx)(ce,{item:e},e._id)})),Object(T.jsxs)("div",{className:"flex-row space-between",children:[Object(T.jsxs)("strong",{children:["Total: $",function(){var e=0;return c.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ie.loggedIn()?Object(T.jsx)("button",{onClick:function(){var e=[];c.cart.forEach((function(t){for(var c=0;c<t.purchaseQuantity;c++)e.push(t._id)})),i({variables:{products:e}})},children:"Checkout"}):Object(T.jsx)("span",{children:"(log in to check out)"})]})]}):Object(T.jsxs)("h3",{children:[Object(T.jsx)("span",{role:"img","aria-label":"shocked",children:Object(T.jsx)(oe.a,{style:{colour:"navy",fontSize:"50px"}})}),"Please add tool and design project."]})]}):Object(T.jsx)("div",{className:"cart-closed",onClick:l,children:Object(T.jsx)("span",{role:"img","aria-label":"trash",children:Object(T.jsx)(te.a,{style:{fontSize:"45px",justifyContent:"center"}})})})},de=(c(106),c(91)),be=c(121),ue=c(122),Oe=c(123),pe=c(124),he=[{src:"/images/imggp4.jpg",altText:"",caption:"Hospitality",key:1},{src:"/images/ap01a.jpg",altText:"",caption:"Health",key:2},{src:"/images/ap01.jpg",altText:"",caption:"Research & Institutional Development",key:3},{src:"/images/imgres03.jpg",altText:"",caption:"Residential",key:4},{src:"/images/comm-slider.jpg",altText:"",caption:"Commercial",key:5},{src:"/images/attstadium.jpg",altText:"",caption:"Sports & Events",key:6}];var me=function(e){var t=Object(n.useState)(0),c=Object(p.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!1),o=Object(p.a)(s,2),l=o[0],j=o[1],d=function(){if(!l){var e=r===he.length-1?0:r+1;a(e)}},b=function(){if(!l){var e=0===r?he.length-1:r-1;a(e)}},u=he.map((function(e){return Object(T.jsxs)(de.a,{onExiting:function(){return j(!0)},onExited:function(){return j(!1)},children:[Object(T.jsx)("img",{src:e.src,alt:e.altText}),Object(T.jsx)(be.a,{captionHeader:e.caption})]},e.src)}));return Object(T.jsxs)(ue.a,Object(i.a)(Object(i.a)({activeIndex:r,next:d,previous:b},e),{},{children:[Object(T.jsx)(Oe.a,{items:he,activeIndex:r,onClickHandler:function(e){l||a(e)}}),u,Object(T.jsx)(pe.a,{direction:"prev",directionText:"Previous",onClickHandler:b}),Object(T.jsx)(pe.a,{direction:"next",directionText:"Next",onClickHandler:d})]}))},xe=function(){return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)(me,{}),Object(T.jsx)(V,{}),Object(T.jsx)(Y,{}),Object(T.jsx)(je,{})]})};var fe=function(){var e=D(),t=Object(p.a)(e,2),c=t[0],r=t[1],a=Object(l.p)().id,s=Object(n.useState)({}),j=Object(p.a)(s,2),d=j[0],b=j[1],u=Object(H.b)(M),O=u.loading,h=u.data,x=c.products,f=c.cart;return Object(n.useEffect)((function(){x.length?b(x.find((function(e){return e._id===a}))):h?(r({type:g,products:h.products}),h.products.forEach((function(e){m("products","put",e)}))):O||m("products","get").then((function(e){r({type:g,products:e})}))}),[x,h,O,r,a]),Object(T.jsxs)(T.Fragment,{children:[d&&f?Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/",children:"\u2190 Back to Project"}),Object(T.jsx)("h2",{children:d.name}),Object(T.jsx)("p",{children:d.description}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Price:"}),"   USD    $",d.price," ",Object(T.jsx)("button",{onClick:function(){var e=f.find((function(e){return e._id===a}));e?(r({type:k,_id:a,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),m("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(r({type:w,product:Object(i.a)(Object(i.a)({},d),{},{purchaseQuantity:1})}),m("cart","put",Object(i.a)(Object(i.a)({},d),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(T.jsx)("button",{disabled:!f.find((function(e){return e._id===d._id})),onClick:function(){r({type:_,_id:d._id}),m("cart","delete",Object(i.a)({},d))},children:"Remove from Cart"})]}),Object(T.jsx)("img",{src:"/images/".concat(d.image),alt:d.name})]}):null,O?Object(T.jsx)("img",{src:G,alt:"loading"}):null,Object(T.jsx)(je,{})]})};var ge,ve,ye,we=function(e){var t=e.children;return Object(T.jsx)("div",{style:{height:2560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},Ne=function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(we,{children:[Object(T.jsx)("h1",{children:"404 Page Not Found"}),Object(T.jsx)("h1",{children:Object(T.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},_e=c(15),ke=c(125),Se=Object(q.a)(ge||(ge=Object(Q.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Ce=Object(q.a)(ve||(ve=Object(Q.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Te=Object(q.a)(ye||(ye=Object(Q.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var Ee=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(p.a)(t,2),r=c[0],a=c[1],s=Object(ke.a)(Se),l=Object(p.a)(s,2),j=l[0],d=l[1].error,b=function(){var e=Object(J.a)(Object(Z.a)().mark((function e(t){var c,n;return Object(Z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j({variables:{email:r.email,password:r.password}});case 4:c=e.sent,n=c.data.login.token,ie.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,c=t.name,n=t.value;a(Object(i.a)(Object(i.a)({},r),{},Object(_e.a)({},c,n)))};return Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(T.jsx)("h2",{children:"Login"}),Object(T.jsxs)("form",{onSubmit:b,children:[Object(T.jsxs)("div",{className:"flex-row space-between my-4",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-4",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),d?Object(T.jsx)("div",{children:Object(T.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:Object(T.jsx)("strong",{children:"We welcome you back to our Login Page."})}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"If you have forgotten your password and you will have to sign up/register with us again. "}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{style:{color:"black",fontSize:"30px"},children:"Our Professional Services Include:"}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"1.  Digital Management."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"2.  Architectonic Design."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"3.  Project Management."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"4.  Approvals, Regulations and Legal aspects."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"5. Architectural, Project management and Construction through the lifecycle of your project."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"6. Quality assurance with the Highest Standards."}),Object(T.jsx)("br",{})]})]})]})};var Ae=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(p.a)(t,2),r=c[0],a=c[1],s=Object(ke.a)(Te),l=Object(p.a)(s,1)[0],j=function(){var e=Object(J.a)(Object(Z.a)().mark((function e(t){var c,n;return Object(Z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName}});case 3:c=e.sent,n=c.data.addUser.token,ie.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,c=t.name,n=t.value;a(Object(i.a)(Object(i.a)({},r),{},Object(_e.a)({},c,n)))};return Object(T.jsxs)("div",{className:"container col-12 md-auto",children:[Object(T.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(T.jsx)("h2",{children:"Signup"}),Object(T.jsxs)("form",{onSubmit:j,children:[Object(T.jsxs)("div",{className:"flex-row space-between mb-4",children:[Object(T.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(T.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})]}),Object(T.jsxs)("div",{className:"flex-row space-between mb-4",children:[Object(T.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(T.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})]}),Object(T.jsxs)("div",{className:"flex-row space-between mb-4",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})]}),Object(T.jsxs)("div",{className:"flex-row space-between mb-4",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})]}),Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:Object(T.jsxs)("strong",{children:["Thank you for registering with us.  Start enjoying  our professional services ",Object(T.jsx)("span",{style:{color:"black"},children:" We will take care to manage and develop your project."})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"We are very excited that you have decided to sign up for our application and interact with our website. "}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"Our firm recognizes that different backgrounds and vantage points can enrich our work and our relationships with clients.."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"Our team is formed by a group of people respected for their personal character and professional expertise.  "}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"Architectual & Construction Professional Team"})]})]})]})},Pe=c(85);var Re=function(){return Object(T.jsxs)("header",{className:"flex-row px-1",children:[Object(T.jsx)("h1",{children:Object(T.jsxs)(o.b,{to:"/",children:[Object(T.jsx)("span",{role:"img","aria-label":"Skiing",children:Object(T.jsx)(Pe.a,{style:{color:"blue",fontSize:"60px"}})}),"    ARCHITECTUAL  -   MANAGEMENT"]})}),Object(T.jsx)("nav",{children:ie.loggedIn()?Object(T.jsxs)("ul",{className:"flex-row",children:[Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/orderHistory",children:"Profile"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)("a",{href:"/",onClick:function(){return ie.logout()},children:"Logout"})})]}):Object(T.jsxs)("ul",{className:"flex-row",children:[Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/",children:"Home"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/signup",children:"Register"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/login",children:"Login"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/contact",children:"About"})})]})})]})},De=c(86),Ie=c(76),Fe=c(90),We=(c(109),function(){var e=Object(De.a)(),t=e.register,c=e.handleSubmit,r=e.reset,a=e.formState.errors,s=Object(n.useState)(!1),o=Object(p.a)(s,2),l=o[0],j=o[1],d=function(){var e=Object(J.a)(Object(Z.a)().mark((function e(t){var c,n,a,s,i;return Object(Z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.name,n=t.email,a=t.subject,s=t.message,e.prev=1,j(!0),i={name:c,email:n,subject:a,message:s},e.next=6,Fe.a.send(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVICE_ID,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TEMPLATE_ID,i,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_USER_ID);case 6:r(),Object(Ie.b)("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"}),j(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsx)("div",{className:"ContactForm",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"col-12",children:[Object(T.jsx)("div",{className:"contactForm",children:Object(T.jsxs)("form",{id:"contact-form",onSubmit:c(d),className:"col-12 m-3",noValidate:!0,children:[Object(T.jsxs)("div",{className:"row formRow",children:[Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("h1",{children:"About Us"}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"We are a new code developer, project management and architectural design firm committed to delivering according to the highest quality standards. We deliver designs that inspire, connect, and perform. Our portfolio covers multiple ranges of applications in architectural design construction and project management."}),Object(T.jsx)("img",{src:"/../../../images/image5.jpg",alt:""}),Object(T.jsx)("br",{}),Object(T.jsx)("h1",{children:"Contact Us"}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"We are an interdisciplinary global design firm expanding to the technological and digital side. Our team of architects, coding programmers , project management and designers will provide the smart, quality, innovation solutions that meet all regulations and building construction standards."}),Object(T.jsx)("p",{}),Object(T.jsxs)("p",{children:["Contact us at (+1) 800 614 212 3457 ",Object(T.jsx)(te.d,{style:{color:"blue",fontSize:"30px"}}),"Our team of professionals will be in Contact with you to assist you and provide detailed information of our portfolio and services."]}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"We believe that design should build trust between our collaborators, our clients and those who inhabit the places we design. We aim to inspire and empower the people and communities who encounter our work. To preserve and respect our natural resources, we create places that conserve and improve our planet."}),Object(T.jsx)("p",{children:" We aim to inspire and empower the people and communities who encounter our work. To preserve and respect our natural resources, we create places that conserve and improve our planet."}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:"If you would like to contact us and receive professional service support, please fill out and submit the form below. "}),Object(T.jsx)("br",{}),Object(T.jsx)("h3",{children:"Contact Form"}),Object(T.jsx)("br",{}),Object(T.jsx)("h5",{children:"Please complete the necessary information in this form and provide a valid email address."}),Object(T.jsxs)("div",{className:"col-5",children:[Object(T.jsx)("input",Object(i.a)(Object(i.a)({type:"text",name:"name"},t("name",{required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}})),{},{className:"form-control formInput",placeholder:"Name"})),a.name&&Object(T.jsx)("span",{className:"errorMessage",children:a.name.message})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("div",{className:"col-5",children:[Object(T.jsx)("input",Object(i.a)(Object(i.a)({type:"email",name:"email"},t("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})),{},{className:"form-control formInput",placeholder:"Email address"})),a.email&&Object(T.jsx)("span",{className:"errorMessage",children:"Please enter a valid email address"})]})]}),Object(T.jsx)("div",{className:"row formRow",children:Object(T.jsxs)("div",{className:"col-10",children:[Object(T.jsx)("br",{}),Object(T.jsx)("input",Object(i.a)(Object(i.a)({type:"text",name:"subject"},t("subject",{required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}})),{},{className:"form-control formInput",placeholder:"Subject"})),a.subject&&Object(T.jsx)("span",{className:"errorMessage",children:a.subject.message})]})}),Object(T.jsx)("div",{className:"row formRow",children:Object(T.jsxs)("div",{className:"col-10",children:[Object(T.jsx)("br",{}),Object(T.jsx)("textarea",Object(i.a)(Object(i.a)({rows:6,name:"message"},t("message",{required:!0})),{},{className:"form-control formInput",placeholder:"Message"})),a.message&&Object(T.jsx)("span",{className:"errorMessage",children:"Please enter a message"})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("button",{className:"submit-btn",disabled:l,type:"submit",children:"Submit"}),Object(T.jsx)("br",{})]})}),Object(T.jsx)(Ie.a,{})]})})})})});var Ue=function(){var e=Object(ke.a)(Ce),t=Object(p.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(J.a)(Object(Z.a)().mark((function e(){var c,n,r,a;return Object(Z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:if(c=e.sent,!(n=c.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,a=r.data,a.addOrder.products.forEach((function(e){m("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(T.jsx)("div",{children:Object(T.jsxs)(we,{children:[Object(T.jsx)("h1",{children:"Success!"}),Object(T.jsx)("h2",{children:"Thank you for your business!"}),Object(T.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var Le=function(){var e,t=Object(H.b)(B).data;return t&&(e=t.user),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("h2",{children:["Customer Projects History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(T.jsxs)("div",{className:"my-2",children:[Object(T.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(T.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var c=e._id,n=e.image,r=e.name,a=e.price;return Object(T.jsxs)("div",{className:"card px-1 py-1",children:[Object(T.jsxs)(o.b,{to:"/products/".concat(c),children:[Object(T.jsx)("img",{alt:r,src:"/images/".concat(n)}),Object(T.jsx)("p",{children:r})]}),Object(T.jsx)("div",{children:Object(T.jsxs)("span",{children:["$",a]})})]},t)}))})]},e._id)}))]}):null]})})},$e=(c(110),function(){return Object(T.jsx)("footer",{className:"footer mt-auto py-3 bg-dark ",style:{position:"fixed",bottom:"0px"},children:Object(T.jsxs)("div",{className:"flex-row space-between px-2",children:[Object(T.jsxs)("span",{className:"footer px-2",style:{color:"white"},children:["\xa9",(new Date).getFullYear()," ","by"," ",Object(T.jsx)("a",{className:"footer px-2",href:"https://github.com/MauricioGB1",target:"_blank",rel:"noopener noreferrer",style:{color:"white",fontSize:"18px"},children:"Mauricio Gomez"})]}),Object(T.jsx)("span",{children:Object(T.jsx)("a",{className:"footer px-2",href:"https://github.com/MauricioGB1/MAUGB-Final-Project-MERN-Full-Stack-Application",target:"_blank",rel:"noopener noreferrer",children:Object(T.jsx)(te.b,{style:{color:"white",fontSize:"32px"}})})}),Object(T.jsx)("span",{children:Object(T.jsx)("a",{className:"footer px-2",href:"https://www.linkedin.com/",target:"_blank",rel:"noopener noreferrer",children:Object(T.jsx)(te.c,{style:{color:"white",fontSize:"32px"}})})}),Object(T.jsx)("span",{children:Object(T.jsx)("a",{className:"footer px-2",href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:Object(T.jsx)(te.f,{style:{color:"white",fontSize:"32px"}})})})]})})}),He=Object(j.a)({uri:"/graphql"}),Qe=Object(O.a)((function(e,t){var c=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},c),{},{authorization:n?"Bearer ".concat(n):""})}})),qe=new d.a({link:Qe.concat(He),cache:new b.a});var Me=function(){return Object(T.jsx)(u.a,{client:qe,children:Object(T.jsx)(o.a,{children:Object(T.jsx)("div",{children:Object(T.jsxs)(R,{children:[Object(T.jsx)(Re,{}),Object(T.jsxs)(l.c,{children:[Object(T.jsx)(l.a,{path:"/",element:Object(T.jsx)(xe,{})}),Object(T.jsx)(l.a,{path:"/login",element:Object(T.jsx)(Ee,{})}),Object(T.jsx)(l.a,{path:"/signup",element:Object(T.jsx)(Ae,{})}),Object(T.jsx)(l.a,{path:"/success",element:Object(T.jsx)(Ue,{})}),Object(T.jsx)(l.a,{path:"/orderHistory",element:Object(T.jsx)(Le,{})}),Object(T.jsx)(l.a,{path:"/products/:id",element:Object(T.jsx)(fe,{})}),Object(T.jsx)(l.a,{exact:!0,path:"/contact",element:Object(T.jsx)(We,{})}),Object(T.jsx)(l.a,{path:"*",element:Object(T.jsx)(Ne,{})})]}),Object(T.jsx)($e,{})]})})})})},ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(Me,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ze?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Be(t,e)}))}}()}},[[111,1,2]]]);
//# sourceMappingURL=main.20ae79af.chunk.js.map
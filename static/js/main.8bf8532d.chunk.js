(this["webpackJsonpstore-app"]=this["webpackJsonpstore-app"]||[]).push([[0],{39:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(6),s=a.n(n),o=(a(39),a(3)),i=a(11),l=a(4),p=[10,390],m=Object(r.createContext)(),q=a(17),u=a(18),d=a(34),N=a(33),j=Object.freeze({FLEX_START:"flex-start",CENTER:"center",SPACE_BETWEEN:"space-between"}),A=Object.freeze({FLEX_START:"flex-start",FLEX_END:"flex-end",CENTER:"center"}),T=Object.freeze({ROW:"row",COLUMN:"column"}),O=a(1),b=function(e){Object(d.a)(a,e);var t=Object(N.a)(a);function a(){return Object(q.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"".concat(this.props.className),style:{flexDirection:this.props.flexDirection,justifyContent:this.props.justifyContent,alignItems:this.props.alignItems},children:this.props.children})}}]),a}(r.Component);b.defaultProps={justifyContent:j.FLEX_START,alignItems:A.FLEX_START,flexDirection:T.ROW,className:""};var V=a.p+"static/media/gift.3ee6afc0.svg",h=function(){var e=Object(r.useState)(),t=Object(o.a)(e,1)[0];return Object(O.jsxs)("div",{className:"newsletterContainer",children:[Object(O.jsxs)(b,{flexDirection:T.ROW,justifyContent:j.SPACE_BETWEEN,className:"newsletterBox",children:[Object(O.jsx)("p",{className:"discount",children:"Get Discount 35% off"}),Object(O.jsxs)("form",{className:"inputContainer",children:[Object(O.jsx)("input",{className:"newsletterEmail",id:"email",placeholder:"Your email"}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault()},type:"button",id:"send",className:"newsletterSubmit",children:"Send"})]})]}),t&&Object(O.jsxs)("div",{className:"newsletterPopup",children:[Object(O.jsx)("p",{className:"popupText",children:"Thank You User!"}),Object(O.jsx)("p",{className:"popupText",children:"Check Out Your EmailBox"}),Object(O.jsx)("img",{alt:"gift",src:V,className:"gift"}),Object(O.jsx)("button",{className:"closePopup",children:"x"})]})]})},g=function(){function e(){Object(q.a)(this,e)}return Object(u.a)(e,null,[{key:"updateBasket",value:function(e){return localStorage.setItem("basket",JSON.stringify(e))}}]),e}();g.getDataByKey=function(e){return JSON.parse(localStorage.getItem(e))},g.itemInBasket=function(e){return g.getDataByKey("basket").some((function(t){return t.name===e.name}))};var x=a.p+"static/media/delivery.b4aaa8c3.png",f=a.p+"static/media/return.2cb24d83.png",v=a.p+"static/media/pay.05d8694a.png",R=function(e){var t=e.icon,a=e.header,r=e.subheader;return Object(O.jsxs)("div",{className:"delivery",children:[Object(O.jsx)("img",{alt:"icon",className:"icon shipmentSign",src:t}),Object(O.jsx)("p",{className:"iconHeader",children:a}),Object(O.jsx)("p",{className:"iconSubheader",children:r})]})},U=function(){return Object(O.jsxs)("div",{className:"paymentFinal",children:[Object(O.jsx)(R,{icon:x,header:"Free Standard Delivery",subheader:"Faster delivery available to most countries"}),Object(O.jsx)(R,{icon:f,header:"Easy returns",subheader:"Send it back within 14 days"}),Object(O.jsxs)("div",{className:"total",children:[Object(O.jsx)("p",{className:"totalHeader",children:"total"}),Object(O.jsxs)(b,{className:"sub-total",flexDirection:T.ROW,justifyContent:j.SPACE_BETWEEN,children:[Object(O.jsx)("p",{children:"sub-total"}),Object(O.jsx)("p",{children:"$1235"})]}),Object(O.jsxs)(b,{className:"delivery-option",flexDirection:T.ROW,justifyContent:j.SPACE_BETWEEN,children:[Object(O.jsx)("p",{children:"delivery"}),Object(O.jsx)("p",{children:"free"})]}),Object(O.jsx)("button",{className:"checkoutBtn",children:"CHECKOUT"}),Object(O.jsx)("p",{className:"acceptedPayments",children:"We Accept"}),Object(O.jsx)("img",{className:"visa",alt:"payments",src:v})]})]})},k=function(){var e=Object(r.useContext)(m),t=e.basket,a=e.setBasket;return Object(O.jsxs)(b,{flexDirection:T.COLUMN,justify:j.CENTER,align:A.CENTER,className:"checkoutWrapper",children:[Object(O.jsx)("h1",{className:"checkoutHeader",children:"Checkout"}),Object(O.jsxs)("div",{className:"checkoutInner",children:[Object(O.jsx)("div",{className:"checkoutProductList",children:t.map((function(e,r){return Object(O.jsxs)(b,{className:"product",alignItems:A.FLEX_START,flexDirection:T.ROW,justifyContent:j.SPACE_BETWEEN,children:[Object(O.jsx)("img",{alt:"product",className:"productImgCart",src:e.image}),Object(O.jsxs)("div",{className:"productDetails",children:[Object(O.jsx)("p",{className:"productName",children:e.name}),Object(O.jsxs)("p",{className:"productPrice",children:["$",e.price," per Item"]})]}),Object(O.jsxs)("p",{className:"priceFinal",children:[e.price,"$"]}),Object(O.jsx)("button",{onClick:(c=e.name,function(e){var r=t.filter((function(e){return e.name!==c}));a(r,g.updateBasket(r)),e.preventDefault()}),className:"deleteProduct",children:Object(O.jsx)("img",{alt:"icon",className:"icon",src:"data:image/png;base64,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"})})]},r);var c}))}),Object(O.jsx)(U,{})]})]})},W=function(e){var t=e.cart,a=e.setCart,c=Object(r.useContext)(m),n=c.basket,s=c.setBasket;return Object(O.jsx)("div",{className:t?"cart-wrapper active":"cart-wrapper",children:Object(O.jsxs)("div",{className:"inside-cart",children:[Object(O.jsx)("button",{className:"closeCart",onClick:function(){return a(!1)},children:"x"}),Object(O.jsx)("p",{className:"cartHeader",children:"Your cart"}),n.map((function(e,t){return Object(O.jsxs)(b,{className:"productCartWrapper",alignItems:A.CENTER,justifyContent:j.CENTER,children:[Object(O.jsx)("img",{alt:"product",className:"productImgCart",src:e.image}),Object(O.jsxs)("div",{className:"productDetails",children:[Object(O.jsx)("p",{className:"productName",children:e.name}),Object(O.jsx)("p",{className:"productQty",children:"Quantity: 1"}),Object(O.jsxs)("p",{className:"productPrice",children:["$",e.price]}),Object(O.jsx)("button",{onClick:(a=e.name,function(e){var t=n.filter((function(e){return e.name!==a}));s(t,g.updateBasket(t)),e.preventDefault()}),className:"removeBtn",children:"Remove"})]})]},t);var a})),Object(O.jsxs)("div",{className:"totalContainer",children:[Object(O.jsxs)("p",{className:"totalHeader",children:["Subtotal: $",n.reduce((function(e,t){return e+1*t.price}),0)]}),Object(O.jsx)(i.b,{className:"checkoutBtn",exact:!0,to:"/checkout",children:"Go To Checkout"})]})]})})},S=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(!1),s=Object(o.a)(n,2),l=s[0],p=s[1],q=Object(r.useContext)(m).basket.length;return Object(r.useEffect)((function(){document.addEventListener("scroll",(function(){window.scrollY>20?c(!0):c(!1)}))})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b,{className:"navbarWrapper ".concat(a?" scroll":""),children:Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsx)("img",{className:"logo",alt:"logo",src:"data:image/png;base64,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"}),Object(O.jsxs)("ul",{className:"navigation",children:[Object(O.jsx)(i.b,{className:"navItem",exact:!0,to:"/",children:"shop"}),Object(O.jsx)(i.b,{className:"navItem",exact:!0,to:"/elements",children:"elements"}),Object(O.jsxs)("li",{className:"navItem cartNavDetails",children:[Object(O.jsx)("img",{className:"cartIcon",alt:"cart",onClick:function(){return p(!l)},src:"data:image/png;base64,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"}),Object(O.jsx)("p",{className:"quantity",children:q})]})]})]})}),Object(O.jsx)(W,{cart:l,setCart:p})]})},C=function(){return Object(O.jsx)("div",{className:"footerWrapper",children:Object(O.jsxs)(b,{justifyContent:j.SPACE_BETWEEN,alignItems:A.CENTER,className:"footer",children:[Object(O.jsx)("p",{className:"copy",children:" 2021 Maison & All right reserved."}),Object(O.jsx)("ul",{className:"footerNav",children:Object(O.jsx)("li",{className:"navItem",children:"XD"})})]})})},E=function(e){var t=e.slides,a=Object(r.useState)(0),c=Object(o.a)(a,2),n=c[0],s=c[1],i=t.length;return Object(O.jsxs)("section",{className:"slideWrapper",children:[t.map((function(e,t){return Object(O.jsxs)("div",{className:t===n?"slide active":"slide",style:{backgroundImage:"url(".concat(e.image,")")},children:[Object(O.jsx)("p",{className:"slideText",children:e.text}),Object(O.jsxs)("p",{className:"currentSlide",children:["Showing ",n+1," of 3"]})]},t)})),Object(O.jsx)("span",{className:"arrow left-arrow",onClick:function(){return s(0===n?i-1:n-1)}}),Object(O.jsx)("span",{className:"arrow right-arrow",onClick:function(){return s(n===i-1?0:n+1)}}),Object(O.jsxs)("svg",{className:"arrows",children:[Object(O.jsx)("path",{className:"a1",d:"M0 0 L15 16 L30 0"}),Object(O.jsx)("path",{className:"a2",d:"M0 10 L15 26 L30 10"})]})]})},Z=[{image:a.p+"static/media/slide1.bb8e2a31.png",text:"Check out our products up to 50% promo"},{image:a.p+"static/media/slide2.9404e664.png",text:"Check out our products up to 60% promo"},{image:a.p+"static/media/slide3.c7501a48.png",text:"Check out our products up to 70% promo"}],P=(a(45),a(26)),J=function(){var e=Object(r.useContext)(m),t=e.priceRange,a=e.setPriceRange,c=Object(P.a)(P.b.Range);return Object(O.jsxs)("div",{className:"priceFilterContainer",children:[Object(O.jsx)("p",{className:"priceHeader",children:"Filter by"}),Object(O.jsx)("p",{className:"priceRange",children:"Price range"}),Object(O.jsx)(c,{min:0,max:300,defaultValue:t,onAfterChange:function(e){a(e)},tipFormatter:function(e){return"".concat(e," USD")}})]})},B=function(){var e=Object(r.useContext)(m),t=e.sort,a=e.setSort;return Object(O.jsxs)("div",{className:"sortContainer",children:[Object(O.jsx)("p",{className:"sortHeader",children:"Sort by:"}),Object(O.jsxs)("select",{defaultValue:t,onChange:function(e){a(e.target.value)},children:[Object(O.jsx)("option",{value:"NAME",children:"Name"}),Object(O.jsx)("option",{value:"PRICE",children:"Price"})]})]})},L=["All","Living","Dining","Furniture","Lighting","Technics","Accessories"],D=function(){var e=Object(r.useContext)(m),t=e.category,a=e.setCategory,c=function(e){return function(t){a(e),t.preventDefault()}};return Object(O.jsxs)("div",{className:"categoryContainer",children:[Object(O.jsx)("p",{className:"sidebarHeader",children:"Categories"}),Object(O.jsx)("ul",{className:"categories",children:L.map((function(e,a){return Object(O.jsx)("li",{className:"category ".concat(t===e?"active":""),onClick:c(e),children:e},a)}))})]})},X=function(){return Object(O.jsxs)(b,{alignItems:A.FLEX_START,justifyContent:j.FLEX_START,flexDirection:T.COLUMN,className:"sidebar",children:[Object(O.jsx)(D,{}),Object(O.jsx)(J,{}),Object(O.jsx)(B,{})]})},K=function(e,t){return"NAME"===t?function(e){return e.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:1}))}(e):function(e){return e.sort((function(e,t){return Number(e.price)-Number(t.price)}))}(e)},Q=a(25),Y=a.n(Q),y=a(32),F=function(){var e=Object(y.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/michaelous/products/main/shop.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.products);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=a(14),I=function(e){var t=e.product,a=e.showPopup,c=Object(r.useContext)(m),n=c.basket,s=c.setBasket,o=function(e){return g.itemInBasket(e)};return Object(O.jsx)("div",{className:"popupWrapper",children:Object(O.jsxs)("div",{className:"productPopup",children:[Object(O.jsx)("div",{className:"imgWrapper",children:Object(O.jsx)("img",{className:"imgPopup",alt:"product",src:t.image})}),Object(O.jsxs)("div",{className:"productDetails",children:[Object(O.jsx)("p",{className:"productName",children:t.name}),Object(O.jsxs)("p",{className:"productPrice",children:[t.price,"$"]}),Object(O.jsx)("p",{className:"productCategory",children:t.category}),Object(O.jsx)("p",{className:"productDescription",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore\n                                eu fugiat nulla pariatur."}),Object(O.jsx)("button",{className:"addToCart ".concat(o(t)?"added":""),onClick:function(e){return function(t){o(e)||(s([].concat(Object(H.a)(n),[e]),g.updateBasket([].concat(Object(H.a)(n),[e]))),t.preventDefault())}}(t),children:o(t)?"Added To Cart ":"Add To Cart"})]}),Object(O.jsx)("button",{className:"closePopup",onClick:function(){return a(!1)},children:"X"})]})})},z=a.p+"static/media/arrow.02216e31.svg",G=function(e){var t=Object(r.useContext)(m),a=t.page,c=t.setPage,n=Object(r.useState)(4),s=Object(o.a)(n,2),i=s[0],l=s[1],p=function(){return Math.ceil(e.items/4)};Object(r.useEffect)((function(){l(p),e.items<=4&&c(1)}),[e.items]);var q=function(){a<p()&&c(a+1)},u=function(){1!==a&&c(a-1)};return Object(O.jsxs)(b,{className:"productsControls topControls",flexDirection:T.ROW,justifyContent:j.SPACE_BETWEEN,alignItems:A.CENTER,children:[function(){var e=p()>1;return Object(O.jsxs)("ul",{className:"productsPagination",children:[e&&Object(O.jsx)("img",{className:"arrowControl arrowLeft ".concat(1===a?"inactive":""),onClick:u,src:z,alt:"arrow"}),Object(H.a)(Array(i)).map((function(e,t){return Object(O.jsxs)("li",{className:"page ".concat(a===t+1?"current":""),onClick:(r=t+1,function(e){c(r),e.preventDefault()}),children:[" ",t+1," "]},t);var r})),e&&Object(O.jsx)("img",{className:"arrowControl arrowRight ".concat(a===p()?"inactive":""),onClick:q,src:z,alt:"arrow"})]})}(),Object(O.jsxs)("p",{className:"paginationText",children:["Showing ",e.items," products"]})]})},w=function(){var e=Object(r.useContext)(m),t=e.category,a=e.sort,c=e.page,n=e.priceRange,s=(e.basket,Object(r.useState)(!1)),i=Object(o.a)(s,2),l=i[0],p=i[1],q=Object(r.useState)(""),u=Object(o.a)(q,2),d=u[0],N=u[1],V=Object(r.useState)(!1),h=Object(o.a)(V,2),x=h[0],f=h[1],v=Object(r.useState)([]),R=Object(o.a)(v,2),U=R[0],k=R[1],W=Object(r.useState)(!1),S=Object(o.a)(W,2),C=S[0],E=(S[1],Object(r.useState)([])),Z=Object(o.a)(E,2),P=Z[0],J=Z[1];Object(r.useEffect)((function(){F().then((function(e){J(e),k(e)}))}),[]),Object(r.useEffect)((function(){var e=function(e,t){return e.filter((function(e){return a=t[0],r=t[1],(c=e.price)>a&&c<r;var a,r,c}))}(function(e,t){return"All"===t?e:e.filter((function(e){return e.category===t}))}(P,t),n),r=K(e,a);k(r)}),[t,n,a]);var B=function(e){return g.itemInBasket(e)},L=function(e){return function(t){p(!0),N(function(e){return U.filter((function(t){return t.name===e}))[0]}(e)),t.preventDefault()}},D=function(){return f(!0)};return Object(O.jsxs)("div",{className:"productsWrapper",children:[Object(O.jsx)(G,{items:U.length}),Object(O.jsxs)(b,{className:"productContainer",flexDirection:T.ROW,justifyContent:j.FLEX_START,alignItems:A.CENTER,children:[function(e,t,a){return e.slice((a-1)*t,a*t)}(U,4,c).map((function(e,t){return Object(O.jsxs)("div",{onClick:L(e.name),className:"product ".concat(B(e)?"inCart ":"").concat(C?"loading":""),children:[Object(O.jsx)("img",{onLoad:D,alt:"product",className:"productImg ".concat(x?"showProduct":""),src:e.image}),Object(O.jsx)("p",{className:"productId",children:e.id}),Object(O.jsxs)("div",{className:"productDetails",children:[Object(O.jsx)("p",{className:"productTitle",children:e.name}),Object(O.jsxs)("p",{className:"productPrice",children:["$",e.price]})]})]},t)})),l&&Object(O.jsx)(I,{product:d,showPopup:p})]}),Object(O.jsx)(G,{items:U.length})]})},M=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E,{slides:Z}),Object(O.jsxs)(b,{flexDirection:T.ROW,justifyContent:j.SPACE_BETWEEN,alignItems:A.FLEX_START,className:"wrapperContainer",children:[Object(O.jsx)(X,{}),Object(O.jsx)(w,{})]})]})},_=[{image:a.p+"static/media/home1.c937d509.jpg",header:"home furniture",subheader:"photography"},{image:a.p+"static/media/home2.c4a36542.jpg",header:"Lounge collection",subheader:"Photography"},{image:a.p+"static/media/home3.e19e8a41.jpg",header:"Dutch cafe",subheader:"Photography"}],$=[{item:"Lorem ipsum dolor sit amet consectetur"},{item:"Adipiscing elit, sed do eiusmod tempor"},{item:"Incididunt ut labore et dolore magna aliqua"},{item:"Ut enim ad minim veniam, quis"},{item:"Incididunt ut labore et dolore magna aliqua"}],ee=function(e){var t=e.data;return Object(O.jsx)("ul",{className:"perksList flexItem",children:t.map((function(e,t){return Object(O.jsx)("li",{className:"perk",children:e.item},t)}))})},te=function(){return Object(O.jsxs)(b,{flexDirection:T.COLUMN,justify:j.CENTER,align:A.CENTER,className:"elementsWrapper",children:[Object(O.jsx)("h1",{className:"elementsHeader",children:"Elements"}),Object(O.jsxs)("div",{className:"perksSection",children:[Object(O.jsx)("p",{className:"flexItem perkHeader",children:"image galleries and interactive features"}),Object(O.jsx)(ee,{data:$}),Object(O.jsx)(ee,{data:$})]}),Object(O.jsx)("div",{className:"elementsContent",children:_.map((function(e,t){return Object(O.jsx)("div",{className:"element",style:{backgroundImage:"url(".concat(e.image,")")},children:Object(O.jsxs)("div",{className:"textWrapper",children:[Object(O.jsx)("p",{className:"elementHeader",children:e.header}),Object(O.jsxs)("p",{className:"elementSubheader",children:[e.subheader," "]})]})},t)}))})]})},ae=function(){var e=Object(r.useState)("NAME"),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(1),s=Object(o.a)(n,2),q=s[0],u=s[1],d=Object(r.useState)("All"),N=Object(o.a)(d,2),j=N[0],A=N[1],T=Object(r.useState)(p),b=Object(o.a)(T,2),V=b[0],g=b[1],x=JSON.parse(localStorage.getItem("basket")),f=Object(r.useState)(x),v=Object(o.a)(f,2),R={page:q,setPage:u,sort:a,setSort:c,basket:v[0],setBasket:v[1],category:j,setCategory:A,priceRange:V,setPriceRange:g};return Object(O.jsxs)(m.Provider,{value:R,children:[Object(O.jsxs)(i.a,{children:[Object(O.jsx)(S,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/elements",component:te}),Object(O.jsx)(l.a,{path:"/checkout",component:k}),Object(O.jsx)(l.a,{path:"/",component:M})]})]}),Object(O.jsx)(h,{}),Object(O.jsx)(C,{})]})};a(46);var re=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(ae,{})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(re,{})}),document.getElementById("root")),ce()}},[[47,1,2]]]);
//# sourceMappingURL=main.8bf8532d.chunk.js.map
(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/item1.7f80bd1c.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/item2.03d6c6cf.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/item3.bae4d552.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/item4.79f40678.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/item5.8ebdc719.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/item6.5901ecd0.jpg"},36:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),l=a(14),o=a(19),s=a(7),u=a(8),m=a(10),d=a(9),p=a(11),f=a(15),h=a(6),b=function(){return r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(h.b,{to:"/shoppingcart",className:"brand-logo"},"Shopping"),r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/shoppingcart"},"Shop")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/shoppingcart/cart"},r.a.createElement("i",{className:"material-icons"},"shopping_cart"))))))},g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.b,{to:"/shoppingcart"},"Welcome Cheng's shopping mall"))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){this.props.addToCart(e)}},{key:"renderList",value:function(){var e=this;return this.props.items.map((function(t){return r.a.createElement("div",{className:"col s4",key:t.id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t.image,alt:"",width:"250"}),r.a.createElement("span",{className:"card-title pink-text text-lighten-2"},t.title),r.a.createElement("span",{to:"/",className:"btn-floating halfway-fab waves-effect waves-light red",onClick:function(){e.handleClick(t.id)}},r.a.createElement("i",{className:"material-icons"},"add"))),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,t.description),r.a.createElement("p",null,r.a.createElement("b",null,"Price: ",t.price,"$")))))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"center"},"Our items"),r.a.createElement("div",{className:"row"},this.renderList()))}}]),t}(n.Component),v=Object(l.b)((function(e){return{items:e.items}}),(function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}}))(E),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleChecked=function(e){console.log(e.target.checked),e.target.checked?a.props.addShipping():a.props.subtractShipping()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderList",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"collection"},r.a.createElement("li",{className:"collection-item"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",ref:"shipping",onChange:this.handleChecked}),r.a.createElement("span",null,"Shipping(+6$)"))),r.a.createElement("li",{className:"collection-item"},r.a.createElement("b",null,"Total: ",this.props.total," $"))),r.a.createElement("div",{className:"checkout"},r.a.createElement("button",{className:"waves-effect waves-light btn"},"Checkout")))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderList())}}]),t}(n.Component),O=Object(l.b)((function(e){return{addedItems:e.addedItems,total:e.total}}),{addShipping:function(){return{type:"ADD_SHIPPING"}},subtractShipping:function(){return{type:"SUBTRACT_SHIPPING"}}})(y),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleRemove=function(e){a.props.removeItem(e)},a.handleAddQuantity=function(e){a.props.addQuantity(e)},a.handleSubtractQuantity=function(e){a.props.subtractQuantity(e)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"addedItemsList",value:function(){var e=this;return 0!==this.props.items.length?this.props.items.map((function(t){return r.a.createElement("li",{className:"collection-item avatar",key:t.id},r.a.createElement("img",{src:t.image,alt:""}),r.a.createElement("div",{className:"item-desc"},r.a.createElement("span",{className:"title"},t.title),r.a.createElement("p",null,t.description),r.a.createElement("p",null,r.a.createElement("b",null,"Price: ",t.price,"$")),r.a.createElement("p",null,r.a.createElement("b",null,"Quantity: ",t.quantity)),r.a.createElement("div",{className:"add-remove"},r.a.createElement(h.b,{to:"/shoppingcart/cart",onClick:function(){return e.handleAddQuantity(t.id)}},r.a.createElement("i",{className:"material-icons"},"arrow_drop_up")),r.a.createElement(h.b,{to:"/shoppingcart/cart",onClick:function(){return e.handleSubtractQuantity(t.id)}},r.a.createElement("i",{className:"material-icons"},"arrow_drop_down"))),r.a.createElement("button",{className:"waves-effect waves-light btn pink remove",onClick:function(){return e.handleRemove(t.id)}},"Remove")))})):r.a.createElement("p",null,"Nothing.")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"cart"},r.a.createElement("h5",null,"You have ordered:"),r.a.createElement("ul",{className:"collection"},this.addedItemsList()),r.a.createElement(O,null)))}}]),t}(n.Component),N=Object(l.b)((function(e){return{items:e.addedItems}}),{removeItem:function(e){return{type:"REMOVE_ITEM",id:e}},addQuantity:function(e){return{type:"ADD_QUANTITY",id:e}},subtractQuantity:function(e){return{type:"SUBTRACT_QUANTITY",id:e}}})(j),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).landingPage=function(){return r.a.createElement(f.a,{exact:!0,path:"/",component:g})},a.defaultPage=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(f.a,{exact:!0,path:"/shoppingcart",component:v}),r.a.createElement(f.a,{exact:!0,path:"/shoppingcart/cart",component:N}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:this.landingPage}),r.a.createElement(f.a,{component:this.defaultPage}))))}}]),t}(r.a.Component),C=a(35),I=a(28),w=a(29),T=a.n(w),P=a(30),A=a.n(P),S=a(31),_=a.n(S),D=a(32),x=a.n(D),Q=a(33),L=a.n(Q),R=a(34),q=a.n(R);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(I.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M={items:[{id:1,title:"pair of black booties",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",price:110,image:T.a},{id:2,title:"leaf photography during daytime",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",price:120,image:A.a},{id:3,title:"rectangular white case on gray surface",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",price:130,image:_.a},{id:4,title:"person using MacBook pro",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",price:140,image:x.a},{id:5,title:"black backpack hanging on brown tree branch",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",price:150,image:L.a},{id:6,title:"turned-on post-2018 iPhone",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet.",price:160,image:q.a}],addedItems:[],total:0},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_CART"===t.type){var a=e.items.find((function(e){return e.id===t.id})),n=e.addedItems.find((function(e){return t.id===e.id}));if(n)return a.quantity+=1,B({},e,{total:e.total+a.price});a.quantity=1;var r=e.total+a.price;return B({},e,{addedItems:[].concat(Object(C.a)(e.addedItems),[a]),total:r})}if("REMOVE_ITEM"===t.type){var i=e.addedItems.find((function(e){return t.id===e.id})),c=e.addedItems.filter((function(e){return t.id!==e.id})),l=e.total-i.prie*i.quantity;return console.log(i),B({},e,{addedItems:c,total:l})}if("ADD_QUANTITY"===t.type){var o=e.items.find((function(e){return e.id===t.id}));o.quantity+=1;var s=e.total+o.price;return B({},e,{total:s})}if("SUBTRACT_QUANTITY"===t.type){var u=e.items.find((function(e){return e.id===t.id}));if(1===u.quantity){var m=e.addedItems.filter((function(e){return e.id!==t.id})),d=e.total-u.price;return B({},e,{addedItems:m,total:d})}u.quantity-=1;var p=e.total-u.price;return B({},e,{total:p})}return"ADD_SHIPPING"===t.type?B({},e,{total:e.total+6}):"SUBTRACT_SHIPPING"===t.type?B({},e,{total:e.total-6}):e},G=(a(46),Object(o.b)(Y));c.a.render(r.a.createElement(l.a,{store:G},r.a.createElement(k,null)),document.querySelector("#root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7cf60b2a.chunk.js.map
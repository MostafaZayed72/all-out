(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{502:function(t,e,r){var content=r(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("b996de64",content,!0,{sourceMap:!1})},545:function(t,e,r){"use strict";r(502)},546:function(t,e,r){var o=r(69)((function(i){return i[1]}));o.push([t.i,".preloader img[data-v-6c0df6d1]{width:50px}.radial-gradient[data-v-6c0df6d1]{background:radial-gradient(circle at center,#f7f7f7,#e9ecef)}.text-center h2[data-v-6c0df6d1]{color:#333;font-size:1.75rem}.form-control[data-v-6c0df6d1]{border-radius:5px;font-size:1rem;padding:12px}.btn-primary[data-v-6c0df6d1]{background-color:#007bff;border:none}.shadow[data-v-6c0df6d1]{box-shadow:0 4px 6px rgba(0,0,0,.1)}.sub-title[data-v-6c0df6d1]{color:#333;font-size:18px;margin-bottom:30px}img[data-v-6c0df6d1]{border-radius:10px}@media (max-width:768px){.col-xl-7[data-v-6c0df6d1]{display:none}.col-xl-5[data-v-6c0df6d1]{max-width:100%}}.authentication-login[data-v-6c0df6d1]{background-color:#fff;max-width:400px;padding:20px;position:relative;z-index:10}.form-control[data-v-6c0df6d1]{position:relative;z-index:20}",""]),o.locals={},t.exports=o},627:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(30),r(31),r(16),r(7),r(19);var o=r(8),n=r(4);r(33),r(92);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={head:{title:"ALL OUT FZC-LLC Login"},auth:!1,name:"login",data:function(){return{blobUrl:null,data:{email:null,password:null},loaded:!1}},methods:{loginHandler:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d({},t.data),e.prev=1,e.next=4,t.$auth.loginWith("local",{data:r});case 4:o=e.sent,(n=o.data).success?(data=JSON.stringify(n.response.data),localStorage.setItem("data",data),localStorage.setItem("loggedIn",!0),window.location.href="/vendors"):t.$toast.error(n.messageText||"You have to verify your email.").goAway(1500),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}},f=(r(545),r(15)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("body",{attrs:{"data-sidebartype":"full"}},[t._m(0),t._v(" "),e("div",{attrs:{id:"main-wrapper"}},[e("div",{staticClass:"radial-gradient min-vh-100 w-100 d-flex justify-content-center align-items-center"},[e("div",{staticClass:"row w-100"},[t._m(1),t._v(" "),e("div",{staticClass:"col-xl-5 col-xxl-4 d-flex justify-content-center align-items-center"},[e("div",{staticClass:"authentication-login w-100 p-4 bg-white shadow rounded"},[t._m(2),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.loginHandler.apply(null,arguments)}}},[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("Username")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Enter your email",required:""},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"form-label",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter your password",required:""},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary w-100 py-3 rounded-pill",attrs:{type:"submit"}},[t._v("\n                Sign In\n              ")])]),t._v(" "),t._m(3)])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"preloader",staticStyle:{display:"none"}},[t("img",{staticClass:"lds-ripple img-fluid",attrs:{src:"https://allout.ae/wp-content/uploads/2024/05/allout-logo-100x100-1.png",alt:"loader"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xl-7 col-xxl-8 d-none d-xl-block"},[e("a",{staticClass:"text-nowrap logo-img d-block px-4 py-9",attrs:{href:"/"}},[e("img",{staticClass:"dark-logo",attrs:{src:"https://allout.ae/wp-content/uploads/2024/05/allout-logo-100x100-1.png",alt:"All Out Logo"}})]),t._v(" "),e("div",{staticClass:"text-center mt-3"},[e("h1",{staticClass:"fw-bold"},[t._v("Adventure Awaits!")]),t._v(" "),e("p",{staticClass:"sub-title"},[t._v("\n              ✓ EASY PLANNING, INCREDIBLE EXPERIENCES   \n              ✓ ENDLESS EXCURSIONS   \n              ✓ MAXIMIZE YOUR TIME\n            ")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center align-items-center flex-wrap gap-4"},[e("img",{staticClass:"img-fluid rounded",staticStyle:{width:"300px",height:"auto"},attrs:{src:"https://allout.ae/wp-content/uploads/2024/05/2.png",alt:"Adventure Image 1"}}),t._v(" "),e("img",{staticClass:"img-fluid rounded",staticStyle:{width:"300px",height:"auto"},attrs:{src:"https://allout.ae/wp-content/uploads/2024/05/2-1-1.png",alt:"Adventure Image 2"}}),t._v(" "),e("img",{staticClass:"img-fluid rounded",staticStyle:{width:"300px",height:"auto"},attrs:{src:"https://allout.ae/wp-content/uploads/2024/05/6-2.png",alt:"Adventure Image 3"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center mb-5"},[e("h2",{staticClass:"fw-bold mb-2"},[t._v("Welcome ")]),t._v(" "),e("p",{staticClass:"text-muted mb-4"},[t._v("Your Admin Dashboard")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center mt-4"},[e("p",{staticClass:"mb-0"},[t._v("\n                New to ALL OUT?\n                "),e("a",{staticClass:"text-primary",attrs:{href:"https://allout.ae/contact/"}},[t._v("\n                  Call Customer Support\n                ")])])])}],!1,null,"6c0df6d1",null);e.default=component.exports}}]);
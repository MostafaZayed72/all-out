(window.webpackJsonp=window.webpackJsonp||[]).push([[38,4,16],{433:function(t,e,l){"use strict";l.r(e);var c={extends:l(190).a,props:{chartData:{type:Object,required:!0},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartData,this.options)}},r=l(16),component=Object(r.a)(c,undefined,undefined,!1,null,null,null);e.default=component.exports},434:function(t,e,l){"use strict";l.r(e);var c={extends:l(190).c,props:{chartData:{type:Object,required:!0},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartData,this.options)}},r=l(16),component=Object(r.a)(c,undefined,undefined,!1,null,null,null);e.default=component.exports},596:function(t,e,l){"use strict";l.r(e);var c=l(433),r=l(434),d={name:"index",layout:"adminLte",metaInfo:function(){return{script:[{src:"https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js",defer:!0,body:!0,callback:this.onScriptLoaded},{src:"https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js",body:!0,skip:!this.externalLoaded}],link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}]}},data:function(){return{load:!1,chartData:{labels:["Lions","Monkeys","Zebras","Eagles","Horses"],datasets:[{label:"Dataset 1",data:[12,19,3,2,3],backgroundColor:["rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{responsive:!0,scales:{x:{display:!0,title:{display:!0}},y:{display:!0,title:{display:!0,text:"Value"}}}}}},mounted:function(){$(".owl-carousel").owlCarousel({items:4,loop:!0,margin:10,autoplay:!0,autoplayTimeout:900,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:3,nav:!1},1e3:{items:5,nav:!0,loop:!1,margin:20}}})},components:{BarChart:c.default,PieChart:r.default}},n=l(16),component=Object(n.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"body-wrapper"},[e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 d-flex align-items-strech"},[e("div",{staticClass:"card w-100"},[e("div",{staticClass:"card-body"},[t._m(1),t._v(" "),e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-8"},[e("BarChart",{attrs:{chartData:t.chartData,options:t.options}})],1),t._v(" "),t._m(2)])])])]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 d-flex align-items-strech"},[e("div",{staticClass:"card w-100"},[e("div",{staticClass:"card-body"},[e("div",[e("h5",{staticClass:"card-title fw-semibold mb-1"},[t._v("Statistics")]),t._v(" "),e("p",{staticClass:"card-subtitle mb-0"},[t._v("Every month")]),t._v(" "),e("div",{staticClass:"mb-7 pb-8",attrs:{id:"salary"}}),t._v(" "),t._m(4),t._v(" "),e("div",{},[e("PieChart",{attrs:{chartData:t.chartData,options:t.options}})],1)])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"owl-carousel counter-carousel owl-theme"},[e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-primary-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-user-male.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-primary mb-1"},[t._v("Total Clients")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-primary mb-0"},[t._v("96")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-warning-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-briefcase.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-warning mb-1"},[t._v("Total Bookings")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-warning mb-0"},[t._v("3,650")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-info-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-mailbox.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-info mb-1"},[t._v("Total Services")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-info mb-0"},[t._v("356")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-danger-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-favorites.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-danger mb-1"},[t._v("Total Locations")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-danger mb-0"},[t._v("696")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-info-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-connect.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-info mb-1"},[t._v("Total Categories")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-info mb-0"},[t._v("59")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-sm-flex d-block align-items-center justify-content-between mb-9"},[e("div",{staticClass:"mb-3 mb-sm-0"},[e("h5",{staticClass:"card-title fw-semibold"},[t._v("Total Earnings")]),t._v(" "),e("p",{staticClass:"card-subtitle mb-0"},[t._v("136.5 AED")])]),t._v(" "),e("select",{staticClass:"form-select w-auto"},[e("option",{attrs:{value:"1"}},[t._v("By Day")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("By Week")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("By Month")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("By 3 Months")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("By 6 Months")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("By 1 Year")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("By All Time")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"hstack mb-4 pb-1"},[e("div",{staticClass:"p-8 bg-primary-subtle rounded-1 me-3 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-primary fs-6"})]),t._v(" "),e("div",[e("h4",{staticClass:"mb-0 fs-7 fw-semibold"},[t._v("63,489.50 AED")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("Total Earnings")])])]),t._v(" "),e("div",[e("div",{staticClass:"d-flex align-items-baseline mb-4"},[e("span",{staticClass:"round-8 text-bg-primary rounded-circle me-6"}),t._v(" "),e("div",[e("p",{staticClass:"fs-3 mb-1"},[t._v("Earnings this month")]),t._v(" "),e("h6",{staticClass:"fs-5 fw-semibold mb-0"},[t._v("48,820 AED")])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-baseline mb-4 pb-1"},[e("span",{staticClass:"round-8 text-bg-secondary rounded-circle me-6"}),t._v(" "),e("div",[e("p",{staticClass:"fs-3 mb-1"},[t._v("Expense this month")]),t._v(" "),e("h6",{staticClass:"fs-5 fw-semibold mb-0"},[t._v("26,498 AED")])])]),t._v(" "),e("div",[e("button",{staticClass:"btn btn-primary w-100"},[t._v("\n                                            View Full Report\n                                        ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-8"},[e("h5",{staticClass:"card-title mb-9 fw-semibold"},[t._v("Today Visits")]),t._v(" "),e("h4",{staticClass:"fw-semibold mb-3"},[t._v("148")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mb-3"},[e("span",{staticClass:"me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-up-left text-success"})]),t._v(" "),e("p",{staticClass:"text-dark me-1 fs-3 mb-0"},[t._v("12")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("Registration")])])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"d-flex justify-content-center"},[e("div",{attrs:{id:"breakup"}})])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row align-items-start"},[e("div",{staticClass:"col-8"},[e("h5",{staticClass:"card-title mb-9 fw-semibold"},[t._v("\n                                            Revenue Breakdown\n                                        ")]),t._v(" "),e("h4",{staticClass:"fw-semibold mb-3"},[t._v("$6,820")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center pb-1"},[e("span",{staticClass:"me-2 rounded-circle bg-warning round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-down-right text-danger"})]),t._v(" "),e("p",{staticClass:"text-dark me-1 fs-3 mb-0"},[t._v("(5)")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("Total bookings")])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center pb-1"},[e("span",{staticClass:"me-2 rounded-circle bg-danger round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-down-right text-danger"})]),t._v(" "),e("p",{staticClass:"text-dark me-1 fs-3 mb-0"},[t._v("(109.2 AED)")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("Vendor")])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center pb-1"},[e("span",{staticClass:"me-2 rounded-circle bg-success round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-down-right text-danger"})]),t._v(" "),e("p",{staticClass:"text-dark me-1 fs-3 mb-0"},[t._v("(27.3 AED)")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("All out")])])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"d-flex justify-content-end"},[e("div",{staticClass:"text-white text-bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-currency-dollar fs-6"})])])])])]),t._v(" "),e("div",{attrs:{id:"earning"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"bg-primary-subtle rounded me-8 p-8 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-primary fs-6"})]),t._v(" "),e("div",[e("p",{staticClass:"fs-3 mb-0 fw-normal"},[t._v("Bookings")]),t._v(" "),e("h6",{staticClass:"fw-semibold text-dark fs-4 mb-0"},[t._v("\n                                            36,358 AED\n                                        ")])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"text-bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-muted fs-6"})]),t._v(" "),e("div",[e("p",{staticClass:"fs-3 mb-0 fw-normal"},[t._v("Earnings")]),t._v(" "),e("h6",{staticClass:"fw-semibold text-dark fs-4 mb-0"},[t._v("5,296 AED")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body pb-0 mb-xxl-4 pb-1"},[e("p",{staticClass:"mb-1 fs-3"},[t._v("Customers")]),t._v(" "),e("h4",{staticClass:"fw-semibold fs-7"},[t._v("36,358")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mb-3"},[e("span",{staticClass:"me-2 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-down-right text-danger"})]),t._v(" "),e("p",{staticClass:"text-dark fs-3 mb-0"},[t._v("+9%")])])]),t._v(" "),e("div",{attrs:{id:"customers"}})])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("p",{staticClass:"mb-1 fs-3"},[t._v("Bookings")]),t._v(" "),e("h4",{staticClass:"fw-semibold fs-7"},[t._v("78,298")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mb-3"},[e("span",{staticClass:"me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-up-left text-success"})]),t._v(" "),e("p",{staticClass:"text-dark fs-3 mb-0"},[t._v("+9%")])]),t._v(" "),e("div",{attrs:{id:"projects"}})])])])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex align-items-center mb-7 pb-2"},[e("div",{staticClass:"me-3 pe-1"},[e("img",{staticClass:"shadow-warning rounded-2",attrs:{src:"/Modernize/images/profile/user-1.jpg",alt:"",width:"72",height:"72"}})]),t._v(" "),e("div",[e("h5",{staticClass:"fw-semibold fs-5 mb-2"},[t._v("\n                                    Super awesome, Vue coming soon!\n                                ")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("22 March, 2023")])])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("ul",{staticClass:"hstack mb-0"},[e("li",{staticClass:"ms-n8"},[e("a",{staticClass:"me-1",attrs:{href:"javascript:void(0)"}},[e("img",{staticClass:"rounded-circle border border-2 border-white",attrs:{src:"/Modernize/images/profile/user-2.jpg",width:"44",height:"44",alt:""}})])]),t._v(" "),e("li",{staticClass:"ms-n8"},[e("a",{staticClass:"me-1",attrs:{href:"javascript:void(0)"}},[e("img",{staticClass:"rounded-circle border border-2 border-white",attrs:{src:"/Modernize/images/profile/user-3.jpg",width:"44",height:"44",alt:""}})])]),t._v(" "),e("li",{staticClass:"ms-n8"},[e("a",{staticClass:"me-1",attrs:{href:"javascript:void(0)"}},[e("img",{staticClass:"rounded-circle border border-2 border-white",attrs:{src:"/Modernize/images/profile/user-4.jpg",width:"44",height:"44",alt:""}})])]),t._v(" "),e("li",{staticClass:"ms-n8"},[e("a",{staticClass:"me-1",attrs:{href:"javascript:void(0)"}},[e("img",{staticClass:"rounded-circle border border-2 border-white",attrs:{src:"/Modernize/images/profile/user-5.jpg",width:"44",height:"44",alt:""}})])])]),t._v(" "),e("a",{staticClass:"text-bg-light rounded py-1 px-8 d-flex align-items-center text-decoration-none",attrs:{href:"#"}},[e("i",{staticClass:"ti ti-message-2 fs-6 text-primary"})])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 d-flex align-items-strech"},[e("div",{staticClass:"card w-100"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title fw-semibold"},[t._v("Weekly Stats")]),t._v(" "),e("p",{staticClass:"card-subtitle mb-0"},[t._v("Average sales")]),t._v(" "),e("div",{staticClass:"my-4",attrs:{id:"stats"}}),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"d-flex align-items-center justify-content-between mb-7"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"p-6 bg-primary-subtle rounded me-6 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-primary fs-6"})]),t._v(" "),e("div",[e("h6",{staticClass:"mb-1 fs-4 fw-semibold"},[t._v("Top Sales")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("Johnathan Doe")])])]),t._v(" "),e("div",{staticClass:"bg-primary-subtle badge"},[e("p",{staticClass:"fs-3 text-primary fw-semibold mb-0"},[t._v("+68")])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between mb-7"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"p-6 bg-success-subtle rounded me-6 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-success fs-6"})]),t._v(" "),e("div",[e("h6",{staticClass:"mb-1 fs-4 fw-semibold"},[t._v("Best Seller")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("MaterialPro Admin")])])]),t._v(" "),e("div",{staticClass:"bg-success-subtle badge"},[e("p",{staticClass:"fs-3 text-success fw-semibold mb-0"},[t._v("+68")])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"p-6 bg-danger-subtle rounded me-6 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-danger fs-6"})]),t._v(" "),e("div",[e("h6",{staticClass:"mb-1 fs-4 fw-semibold"},[t._v("Most Commented")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("Ample Admin")])])]),t._v(" "),e("div",{staticClass:"bg-danger-subtle badge"},[e("p",{staticClass:"fs-3 text-danger fw-semibold mb-0"},[t._v("+68")])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BarChart:l(433).default,PieChart:l(434).default})}}]);
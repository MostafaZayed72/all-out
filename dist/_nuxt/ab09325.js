(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{589:function(t,e,l){"use strict";l.r(e);l(17);var c={name:"index",layout:"adminLte",metaInfo:function(){return{script:[{src:"https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js",defer:!0,body:!0,callback:this.onScriptLoaded},{src:"https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js",body:!0,skip:!this.externalLoaded}],link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}]}},data:function(){return{load:!1}},mounted:function(){this.token=JSON.parse(localStorage.getItem("access_token")),this.token?this.$router.push(this.localeLocation({name:"home"})):this.$router.push(this.localeLocation({name:"login"}))}},d=l(16),component=Object(d.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"body-wrapper"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"owl-carousel counter-carousel owl-theme"},[e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-primary-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-user-male.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-primary mb-1"},[t._v("Employees")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-primary mb-0"},[t._v("96")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-warning-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-briefcase.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-warning mb-1"},[t._v("Clients")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-warning mb-0"},[t._v("3,650")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-info-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-mailbox.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-info mb-1"},[t._v("Projects")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-info mb-0"},[t._v("356")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-danger-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-favorites.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-danger mb-1"},[t._v("Events")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-danger mb-0"},[t._v("696")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-success-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-speech-bubble.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-success mb-1"},[t._v("Payroll")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-success mb-0"},[t._v("$96k")])])])])]),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"card border-0 zoom-in bg-info-subtle shadow-none"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3",attrs:{src:"/Modernize/images/svgs/icon-connect.svg",width:"50",height:"50",alt:""}}),t._v(" "),e("p",{staticClass:"fw-semibold fs-3 text-info mb-1"},[t._v("Reports")]),t._v(" "),e("h5",{staticClass:"fw-semibold text-info mb-0"},[t._v("59")])])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 d-flex align-items-strech"},[e("div",{staticClass:"card w-100"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-sm-flex d-block align-items-center justify-content-between mb-9"},[e("div",{staticClass:"mb-3 mb-sm-0"},[e("h5",{staticClass:"card-title fw-semibold"},[t._v("Revenue Updates")]),t._v(" "),e("p",{staticClass:"card-subtitle mb-0"},[t._v("Overview of Profit")])]),t._v(" "),e("select",{staticClass:"form-select w-auto"},[e("option",{attrs:{value:"1"}},[t._v("March 2023")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("April 2023")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("May 2023")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("June 2023")])])]),t._v(" "),e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-md-8"},[e("div",{attrs:{id:"chart"}})]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"hstack mb-4 pb-1"},[e("div",{staticClass:"p-8 bg-primary-subtle rounded-1 me-3 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-primary fs-6"})]),t._v(" "),e("div",[e("h4",{staticClass:"mb-0 fs-7 fw-semibold"},[t._v("$63,489.50")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("Total Earnings")])])]),t._v(" "),e("div",[e("div",{staticClass:"d-flex align-items-baseline mb-4"},[e("span",{staticClass:"round-8 text-bg-primary rounded-circle me-6"}),t._v(" "),e("div",[e("p",{staticClass:"fs-3 mb-1"},[t._v("Earnings this month")]),t._v(" "),e("h6",{staticClass:"fs-5 fw-semibold mb-0"},[t._v("$48,820")])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-baseline mb-4 pb-1"},[e("span",{staticClass:"round-8 text-bg-secondary rounded-circle me-6"}),t._v(" "),e("div",[e("p",{staticClass:"fs-3 mb-1"},[t._v("Expense this month")]),t._v(" "),e("h6",{staticClass:"fs-5 fw-semibold mb-0"},[t._v("$26,498")])])]),t._v(" "),e("div",[e("button",{staticClass:"btn btn-primary w-100"},[t._v("\n                      View Full Report\n                    ")])])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-8"},[e("h5",{staticClass:"card-title mb-9 fw-semibold"},[t._v("\n                      Yearly Breakup\n                    ")]),t._v(" "),e("h4",{staticClass:"fw-semibold mb-3"},[t._v("$36,358")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mb-3"},[e("span",{staticClass:"me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-up-left text-success"})]),t._v(" "),e("p",{staticClass:"text-dark me-1 fs-3 mb-0"},[t._v("+9%")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("last year")])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"me-4"},[e("span",{staticClass:"round-8 text-bg-primary rounded-circle me-2 d-inline-block"}),t._v(" "),e("span",{staticClass:"fs-2"},[t._v("2023")])]),t._v(" "),e("div",[e("span",{staticClass:"round-8 bg-primary-subtle rounded-circle me-2 d-inline-block"}),t._v(" "),e("span",{staticClass:"fs-2"},[t._v("2023")])])])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"d-flex justify-content-center"},[e("div",{attrs:{id:"breakup"}})])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-12 col-md-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row align-items-start"},[e("div",{staticClass:"col-8"},[e("h5",{staticClass:"card-title mb-9 fw-semibold"},[t._v("\n                      Monthly Earnings\n                    ")]),t._v(" "),e("h4",{staticClass:"fw-semibold mb-3"},[t._v("$6,820")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center pb-1"},[e("span",{staticClass:"me-2 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-down-right text-danger"})]),t._v(" "),e("p",{staticClass:"text-dark me-1 fs-3 mb-0"},[t._v("+9%")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("last year")])])]),t._v(" "),e("div",{staticClass:"col-4"},[e("div",{staticClass:"d-flex justify-content-end"},[e("div",{staticClass:"text-white text-bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-currency-dollar fs-6"})])])])])]),t._v(" "),e("div",{attrs:{id:"earning"}})])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 d-flex align-items-strech"},[e("div",{staticClass:"card w-100"},[e("div",{staticClass:"card-body"},[e("div",[e("h5",{staticClass:"card-title fw-semibold mb-1"},[t._v("Employee Salary")]),t._v(" "),e("p",{staticClass:"card-subtitle mb-0"},[t._v("Every month")]),t._v(" "),e("div",{staticClass:"mb-7 pb-8",attrs:{id:"salary"}}),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"bg-primary-subtle rounded me-8 p-8 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-primary fs-6"})]),t._v(" "),e("div",[e("p",{staticClass:"fs-3 mb-0 fw-normal"},[t._v("Salary")]),t._v(" "),e("h6",{staticClass:"fw-semibold text-dark fs-4 mb-0"},[t._v("$36,358")])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"text-bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-muted fs-6"})]),t._v(" "),e("div",[e("p",{staticClass:"fs-3 mb-0 fw-normal"},[t._v("Profit")]),t._v(" "),e("h6",{staticClass:"fw-semibold text-dark fs-4 mb-0"},[t._v("$5,296")])])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body pb-0 mb-xxl-4 pb-1"},[e("p",{staticClass:"mb-1 fs-3"},[t._v("Customers")]),t._v(" "),e("h4",{staticClass:"fw-semibold fs-7"},[t._v("36,358")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mb-3"},[e("span",{staticClass:"me-2 rounded-circle bg-danger-subtle round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-down-right text-danger"})]),t._v(" "),e("p",{staticClass:"text-dark fs-3 mb-0"},[t._v("+9%")])])]),t._v(" "),e("div",{attrs:{id:"customers"}})])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("p",{staticClass:"mb-1 fs-3"},[t._v("Projects")]),t._v(" "),e("h4",{staticClass:"fw-semibold fs-7"},[t._v("78,298")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center mb-3"},[e("span",{staticClass:"me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-arrow-up-left text-success"})]),t._v(" "),e("p",{staticClass:"text-dark fs-3 mb-0"},[t._v("+9%")])]),t._v(" "),e("div",{attrs:{id:"projects"}})])])])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex align-items-center mb-7 pb-2"},[e("div",{staticClass:"me-3 pe-1"},[e("img",{staticClass:"shadow-warning rounded-2",attrs:{src:"/Modernize/images/profile/user-1.jpg",alt:"",width:"72",height:"72"}})]),t._v(" "),e("div",[e("h5",{staticClass:"fw-semibold fs-5 mb-2"},[t._v("\n                  Super awesome, Vue coming soon!\n                ")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("22 March, 2023")])])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("ul",{staticClass:"hstack mb-0"},[e("li",{staticClass:"ms-n8"},[e("a",{staticClass:"me-1",attrs:{href:"javascript:void(0)"}},[e("img",{staticClass:"rounded-circle border border-2 border-white",attrs:{src:"/Modernize/images/profile/user-2.jpg",width:"44",height:"44",alt:""}})])]),t._v(" "),e("li",{staticClass:"ms-n8"},[e("a",{staticClass:"me-1",attrs:{href:"javascript:void(0)"}},[e("img",{staticClass:"rounded-circle border border-2 border-white",attrs:{src:"/Modernize/images/profile/user-3.jpg",width:"44",height:"44",alt:""}})])]),t._v(" "),e("li",{staticClass:"ms-n8"},[e("a",{staticClass:"me-1",attrs:{href:"javascript:void(0)"}},[e("img",{staticClass:"rounded-circle border border-2 border-white",attrs:{src:"/Modernize/images/profile/user-4.jpg",width:"44",height:"44",alt:""}})])]),t._v(" "),e("li",{staticClass:"ms-n8"},[e("a",{staticClass:"me-1",attrs:{href:"javascript:void(0)"}},[e("img",{staticClass:"rounded-circle border border-2 border-white",attrs:{src:"/Modernize/images/profile/user-5.jpg",width:"44",height:"44",alt:""}})])])]),t._v(" "),e("a",{staticClass:"text-bg-light rounded py-1 px-8 d-flex align-items-center text-decoration-none",attrs:{href:"#"}},[e("i",{staticClass:"ti ti-message-2 fs-6 text-primary"})])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4 d-flex align-items-strech"},[e("div",{staticClass:"card text-bg-primary border-0 w-100"},[e("div",{staticClass:"card-body pb-0"},[e("h5",{staticClass:"fw-semibold mb-1 text-white card-title"},[t._v("\n              Best Selling Products\n            ")]),t._v(" "),e("p",{staticClass:"fs-3 mb-3 text-white"},[t._v("Overview 2023")]),t._v(" "),e("div",{staticClass:"text-center mt-3"},[e("img",{staticClass:"img-fluid",attrs:{src:"/Modernize/images/backgrounds/piggy.png",alt:""}})])]),t._v(" "),e("div",{staticClass:"card mx-2 mb-2 mt-n2"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"mb-7 pb-1"},[e("div",{staticClass:"d-flex justify-content-between align-items-center mb-6"},[e("div",[e("h6",{staticClass:"mb-1 fs-4 fw-semibold"},[t._v("MaterialPro")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("$23,568")])]),t._v(" "),e("div",[e("span",{staticClass:"badge bg-primary-subtle text-primary fw-semibold fs-3"},[t._v("55%")])])]),t._v(" "),e("div",{staticClass:"progress bg-primary-subtle",staticStyle:{height:"4px"}},[e("div",{staticClass:"progress-bar w-50",attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),e("div",[e("div",{staticClass:"d-flex justify-content-between align-items-center mb-6"},[e("div",[e("h6",{staticClass:"mb-1 fs-4 fw-semibold"},[t._v("Flexy Admin")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("$23,568")])]),t._v(" "),e("div",[e("span",{staticClass:"badge bg-secondary-subtle text-secondary fw-bold fs-3"},[t._v("20%")])])]),t._v(" "),e("div",{staticClass:"progress bg-secondary-subtle",staticStyle:{height:"4px"}},[e("div",{staticClass:"progress-bar text-bg-secondary w-25",attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})])])])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 d-flex align-items-strech"},[e("div",{staticClass:"card w-100"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title fw-semibold"},[t._v("Weekly Stats")]),t._v(" "),e("p",{staticClass:"card-subtitle mb-0"},[t._v("Average sales")]),t._v(" "),e("div",{staticClass:"my-4",attrs:{id:"stats"}}),t._v(" "),e("div",{staticClass:"position-relative"},[e("div",{staticClass:"d-flex align-items-center justify-content-between mb-7"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"p-6 bg-primary-subtle rounded me-6 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-primary fs-6"})]),t._v(" "),e("div",[e("h6",{staticClass:"mb-1 fs-4 fw-semibold"},[t._v("Top Sales")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("Johnathan Doe")])])]),t._v(" "),e("div",{staticClass:"bg-primary-subtle badge"},[e("p",{staticClass:"fs-3 text-primary fw-semibold mb-0"},[t._v("+68")])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between mb-7"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"p-6 bg-success-subtle rounded me-6 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-success fs-6"})]),t._v(" "),e("div",[e("h6",{staticClass:"mb-1 fs-4 fw-semibold"},[t._v("Best Seller")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("MaterialPro Admin")])])]),t._v(" "),e("div",{staticClass:"bg-success-subtle badge"},[e("p",{staticClass:"fs-3 text-success fw-semibold mb-0"},[t._v("+68")])])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"p-6 bg-danger-subtle rounded me-6 d-flex align-items-center justify-content-center"},[e("i",{staticClass:"ti ti-grid-dots text-danger fs-6"})]),t._v(" "),e("div",[e("h6",{staticClass:"mb-1 fs-4 fw-semibold"},[t._v("Most Commented")]),t._v(" "),e("p",{staticClass:"fs-3 mb-0"},[t._v("Ample Admin")])])]),t._v(" "),e("div",{staticClass:"bg-danger-subtle badge"},[e("p",{staticClass:"fs-3 text-danger fw-semibold mb-0"},[t._v("+68")])])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-8 d-flex align-items-strech"},[e("div",{staticClass:"card w-100"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-sm-flex d-block align-items-center justify-content-between mb-7"},[e("div",{staticClass:"mb-3 mb-sm-0"},[e("h5",{staticClass:"card-title fw-semibold"},[t._v("Top Performers")]),t._v(" "),e("p",{staticClass:"card-subtitle mb-0"},[t._v("Best Employees")])]),t._v(" "),e("div",[e("select",{staticClass:"form-select"},[e("option",{attrs:{value:"1"}},[t._v("March 2023")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("April 2023")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("May 2023")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("June 2023")])])])]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table align-middle text-nowrap mb-0"},[e("thead",[e("tr",{staticClass:"text-muted fw-semibold"},[e("th",{staticClass:"ps-0",attrs:{scope:"col"}},[t._v("Assigned")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Project")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Priority")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Budget")])])]),t._v(" "),e("tbody",{staticClass:"border-top"},[e("tr",[e("td",{staticClass:"ps-0"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"me-2 pe-1"},[e("img",{staticClass:"rounded-circle",attrs:{src:"/Modernize/images/profile/user-1.jpg",width:"40",height:"40",alt:""}})]),t._v(" "),e("div",[e("h6",{staticClass:"fw-semibold mb-1"},[t._v("Sunil Joshi")]),t._v(" "),e("p",{staticClass:"fs-2 mb-0 text-muted"},[t._v("Web Designer")])])])]),t._v(" "),e("td",[e("p",{staticClass:"mb-0 fs-3"},[t._v("Elite Admin")])]),t._v(" "),e("td",[e("span",{staticClass:"badge fw-semibold py-1 w-85 bg-primary-subtle text-primary"},[t._v("Low")])]),t._v(" "),e("td",[e("p",{staticClass:"fs-3 text-dark mb-0"},[t._v("$3.9K")])])]),t._v(" "),e("tr",[e("td",{staticClass:"ps-0"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"me-2 pe-1"},[e("img",{staticClass:"rounded-circle",attrs:{src:"/Modernize/images/profile/user-2.jpg",width:"40",height:"40",alt:""}})]),t._v(" "),e("div",[e("h6",{staticClass:"fw-semibold mb-1"},[t._v("John Deo")]),t._v(" "),e("p",{staticClass:"fs-2 mb-0 text-muted"},[t._v("Web Developer")])])])]),t._v(" "),e("td",[e("p",{staticClass:"mb-0 fs-3"},[t._v("Flexy Admin")])]),t._v(" "),e("td",[e("span",{staticClass:"badge fw-semibold py-1 w-85 bg-warning-subtle text-warning"},[t._v("Medium")])]),t._v(" "),e("td",[e("p",{staticClass:"fs-3 text-dark mb-0"},[t._v("$24.5K")])])]),t._v(" "),e("tr",[e("td",{staticClass:"ps-0"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"me-2 pe-1"},[e("img",{staticClass:"rounded-circle",attrs:{src:"/Modernize/images/profile/user-3.jpg",width:"40",height:"40",alt:""}})]),t._v(" "),e("div",[e("h6",{staticClass:"fw-semibold mb-1"},[t._v("Nirav Joshi")]),t._v(" "),e("p",{staticClass:"fs-2 mb-0 text-muted"},[t._v("Web Manager")])])])]),t._v(" "),e("td",[e("p",{staticClass:"mb-0 fs-3"},[t._v("Material Pro")])]),t._v(" "),e("td",[e("span",{staticClass:"badge fw-semibold py-1 w-85 bg-info-subtle text-info"},[t._v("High")])]),t._v(" "),e("td",[e("p",{staticClass:"fs-3 text-dark mb-0"},[t._v("$12.8K")])])]),t._v(" "),e("tr",[e("td",{staticClass:"ps-0"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"me-2 pe-1"},[e("img",{staticClass:"rounded-circle",attrs:{src:"/Modernize/images/profile/user-4.jpg",width:"40",height:"40",alt:""}})]),t._v(" "),e("div",[e("h6",{staticClass:"fw-semibold mb-1"},[t._v("Yuvraj Sheth")]),t._v(" "),e("p",{staticClass:"fs-2 mb-0 text-muted"},[t._v("Project Manager")])])])]),t._v(" "),e("td",[e("p",{staticClass:"mb-0 fs-3"},[t._v("Xtreme Admin")])]),t._v(" "),e("td",[e("span",{staticClass:"badge fw-semibold py-1 w-85 bg-success-subtle text-success"},[t._v("Low")])]),t._v(" "),e("td",[e("p",{staticClass:"fs-3 text-dark mb-0"},[t._v("$4.8K")])])]),t._v(" "),e("tr",[e("td",{staticClass:"border-0 ps-0"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"me-2 pe-1"},[e("img",{staticClass:"rounded-circle",attrs:{src:"/Modernize/images/profile/user-5.jpg",width:"40",height:"40",alt:""}})]),t._v(" "),e("div",[e("h6",{staticClass:"fw-semibold mb-1"},[t._v("Micheal Doe")]),t._v(" "),e("p",{staticClass:"fs-2 mb-0 text-muted"},[t._v("Content Writer")])])])]),t._v(" "),e("td",{staticClass:"border-0"},[e("p",{staticClass:"mb-0 fs-3"},[t._v("Helping Hands WP Theme")])]),t._v(" "),e("td",{staticClass:"border-0"},[e("span",{staticClass:"badge fw-semibold py-1 w-85 bg-danger-subtle text-danger"},[t._v("High")])]),t._v(" "),e("td",{staticClass:"border-0"},[e("p",{staticClass:"fs-3 text-dark mb-0"},[t._v("$9.3K")])])])])])])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);
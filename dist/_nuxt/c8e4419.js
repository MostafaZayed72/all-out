(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{423:function(t,e,n){"use strict";var o=n(3),r=n(424);o({target:"String",proto:!0,forced:n(425)("link")},{link:function(t){return r(this,"a","href",t)}})},424:function(t,e,n){"use strict";var o=n(6),r=n(43),l=n(23),c=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var v=l(r(t)),_="<"+e;return""!==n&&(_+=" "+n+'="'+d(l(o),c,"&quot;")+'"'),_+">"+v+"</"+e+">"}},425:function(t,e,n){"use strict";var o=n(5);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},472:function(t,e,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("14f051fb",content,!0,{sourceMap:!1})},512:function(t,e,n){"use strict";n(472)},513:function(t,e,n){var o=n(68)((function(i){return i[1]}));o.push([t.i,".heading[data-v-0f1462d2]{font-size:25px;font-weight:600}.sub-heading[data-v-0f1462d2]{color:#6c757d;font-size:14px;margin-bottom:30px}.section-header[data-v-0f1462d2]{padding:16px 16px 0}.section-title[data-v-0f1462d2]{font-size:20px;font-weight:600}.section-description[data-v-0f1462d2]{color:#6c757d;font-size:14px}.details-table th[data-v-0f1462d2]{background-color:#f8f9fa;font-weight:600;width:30%}.details-table td[data-v-0f1462d2]{font-size:16px;padding:12px}.modal-content[data-v-0f1462d2]{padding:20px}",""]),o.locals={},t.exports=o},591:function(t,e,n){"use strict";n.r(e);n(19),n(37),n(7);var o=n(4),r=(n(33),n(38),n(423),n(90)),l=n.n(r),c=n(111),d=n.n(c),v={layout:"adminLte",data:function(){return{dataTable:null,link:"/base/api/chatbotrequests",load:!1,listing:{content:[],number:0,totalPages:1,last:!0},data:{id:null,customerName:"X",serviceName:"X",phoneNumber:"X",location:"X",noReservations:"X",serviceId:"X",numOfUsers:"X",dateAndTime:"X",userId:"X",createdAt:"X"},config:{auth:{username:"user",password:"123456"}}}},mounted:function(){this.getAll()},methods:{pagination:function(t,e){t.preventDefault(),this.getAll(e)},getDate:function(t){return d.a.utc(t).format("MMMM DD, YYYY HH:mm:ss")},getAll:function(){var t=arguments,e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=t.length>0&&void 0!==t[0]?t[0]:0,e.load=!1,l.a.get(e.link+"?page="+o+"&size=10",e.config).then((function(t){t.data.success?(e.listing=t.data.response,e.load=!0):e.listing={content:[]}})).catch((function(t){console.error(t)}));case 3:case"end":return n.stop()}}),n)})))()},goto:function(t){var e=this;l.a.get(this.link+"/"+t,this.config).then((function(t){t.data.success?(e.data=t.data.response,$("#getChatbotRequestDeatils").modal("show")):e.$toast.error(t.data.message).goAway(1500)})).catch((function(t){e.$toast.error(t.response.data.messageText).goAway(1500)}))},closeModal:function(){$("#getChatbotRequestDeatils").modal("hide")},updateStatus:function(t,e){var n=this;l.a.put("".concat(this.link,"/").concat(t,"/status?newStatus=").concat(e),{},this.config).then((function(t){200===t.status||t.data.msg?n.$toast.success("Status updated successfully!").goAway(1500):n.$toast.error("Unexpected response. Status not updated.").goAway(1500)})).catch((function(t){n.$toast.error("Error updating status. Please try again.").goAway(1500),console.error(t)}))},formatDate:function(t){return d.a.utc(t).format("MMMM DD, YYYY HH:mm:ss")}}},_=v,f=(n(512),n(16)),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"body-wrapper"},[e("div",{staticClass:"container-fluid"},[t.load?e("div",{staticClass:"card card-body"},[t._m(0),t._v(" "),e("div",[t._m(1),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table search-table align-middle text-nowrap"},[t._m(2),t._v(" "),e("tbody",t._l(t.listing.content,(function(n){return e("tr",{key:"booking-"+n.id,staticClass:"search-items"},[e("td",[t._v(t._s(n.id))]),t._v(" "),e("td",[t._v(t._s(n.serviceName))]),t._v(" "),e("td",[t._v(t._s(n.customerName))]),t._v(" "),e("td",[t._v(t._s(n.noReservations))]),t._v(" "),e("td",[t._v(t._s(n.numOfUsers))]),t._v(" "),e("td",[t._v(t._s(t.getDate(n.dateAndTime)))]),t._v(" "),e("td",[t._v(t._s(n.phoneNumber))]),t._v(" "),e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:n.status,expression:"item.status"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(n,"status",e.target.multiple?o:o[0])}}},[e("option",{attrs:{value:"1"}},[t._v("Solved")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Cancelled")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Pending")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("Postponed")])])]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.updateStatus(n.id,n.status)}}},[t._v("\n                  Update\n                ")]),t._v(" "),e("a",{staticClass:"btn btn-info btn-sm ml-2",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.goto(n.id)}}},[t._v("\n                  View\n                ")])])])})),0)]),t._v(" "),e("ul",{staticClass:"pagination"},[t.listing.number>0?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link link",attrs:{href:"","aria-label":"Previous"},on:{click:function(e){return t.pagination(e,t.listing.number-1)}}},[t._m(3)])]):t._e(),t._v(" "),t._l(t.listing.totalPages,(function(n){return e("li",{key:n+"pag",staticClass:"page-item",class:{active:n==t.listing.number+1}},[e("a",{staticClass:"page-link link",attrs:{href:""},on:{click:function(e){return t.pagination(e,n-1)}}},[t._v(t._s(n))])])})),t._v(" "),t.listing.last?t._e():e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link link",attrs:{href:"","aria-label":"Next"},on:{click:function(e){return t.pagination(e,t.listing.number+1)}}},[t._m(4)])])],2)])])]):t._e()]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"getChatbotRequestDeatils",tabindex:"-1",role:"dialog","aria-labelledby":"getChatbotRequestDeatilsTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg"},[e("div",{staticClass:"modal-content"},[t._m(5),t._v(" "),e("div",{staticClass:"modal-body"},[e("table",{staticClass:"table table-bordered details-table"},[e("tbody",[e("tr",[e("th",[t._v("Customer Name")]),t._v(" "),e("td",[t._v(t._s(t.data.customerName))])]),t._v(" "),e("tr",[e("th",[t._v("Service Name")]),t._v(" "),e("td",[t._v(t._s(t.data.serviceName))])]),t._v(" "),e("tr",[e("th",[t._v("Phone Number")]),t._v(" "),e("td",[t._v(t._s(t.data.phoneNumber))])]),t._v(" "),e("tr",[e("th",[t._v("Location")]),t._v(" "),e("td",[t._v(t._s(t.data.location))])]),t._v(" "),e("tr",[e("th",[t._v("No. Reservations")]),t._v(" "),e("td",[t._v(t._s(t.data.noReservations))])]),t._v(" "),e("tr",[e("th",[t._v("No. of Users")]),t._v(" "),e("td",[t._v(t._s(t.data.numOfUsers))])]),t._v(" "),e("tr",[e("th",[t._v("Service ID")]),t._v(" "),e("td",[t._v(t._s(t.data.serviceId))])]),t._v(" "),e("tr",[e("th",[t._v("User ID")]),t._v(" "),e("td",[t._v(t._s(t.data.userId))])]),t._v(" "),e("tr",[e("th",[t._v("Date and Time")]),t._v(" "),e("td",[t._v(t._s(t.formatDate(t.data.dateAndTime)))])]),t._v(" "),e("tr",[e("th",[t._v("Created At")]),t._v(" "),e("td",[t._v(t._s(t.formatDate(t.data.createdAt)))])])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.closeModal}},[t._v("Close")])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"heading"},[t._v("Chatbot Details")]),t._v(" "),e("p",{staticClass:"sub-heading"},[t._v("You can follow up with chatbot details below")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-header"},[e("h3",{staticClass:"section-title"},[t._v("List")]),t._v(" "),e("p",{staticClass:"section-description"},[t._v("You can follow up with the chatbot request details.")])])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"header-item"},[e("tr",[e("th",[t._v("ID")]),t._v(" "),e("th",[t._v("Service")]),t._v(" "),e("th",[t._v("Customer")]),t._v(" "),e("th",[t._v("N.Reservations")]),t._v(" "),e("th",[t._v("N.Users")]),t._v(" "),e("th",[t._v("Date")]),t._v(" "),e("th",[t._v("Phone")]),t._v(" "),e("th",[t._v("Status")]),t._v(" "),e("th",[t._v("Actions")])])])},function(){var t=this._self._c;return t("span",{attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"ti ti-chevrons-left fs-4"})])},function(){var t=this._self._c;return t("span",{attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"ti ti-chevrons-right fs-4"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("Chatbot Request Details")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],!1,null,"0f1462d2",null);e.default=component.exports}}]);
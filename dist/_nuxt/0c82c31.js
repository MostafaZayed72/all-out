(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{449:function(t,e,o){"use strict";o.r(e);o(73);var n={head:function(){return{script:[{src:"https://cdn.ckeditor.com/ckeditor5/41.1.0/classic/ckeditor.js",body:!0}]}},props:{content:""},data:function(){return{quill:null,load:!1,text:"",editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"]]}}}},mounted:function(){var t=this;ClassicEditor.create(document.querySelector("#editor")).then((function(t){console.log(t)})).catch((function(t){console.error(t)})),setTimeout((function(){$(".ql-editor").html(t.content),t.$forceUpdate()}),1e3),this.load=!0},methods:{updateEditor:function(){this.text=$(".ql-editor").html(),this.$emit("updated",this.text)}}},l=o(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("ClientOnly",{attrs:{"fallback-tag":"span",fallback:"Loading comments..."}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"},{name:"quill",rawName:"v-quill:myQuillEditor",value:t.editorOption,expression:"editorOption",arg:"myQuillEditor"}],ref:"editor",staticClass:"quill-editor",on:{input:t.updateEditor}})])}),[],!1,null,null,null);e.default=component.exports}}]);
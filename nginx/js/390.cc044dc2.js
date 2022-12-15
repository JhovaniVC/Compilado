"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[390],{8390:function(t,e,i){i.r(e),i.d(e,{default:function(){return C}});var s=i(6190),a=i(9582),n=i(4886),l=i(266),r=i(9256),o=i(5151),u=i(4061),h=i(9223),d=i(418),c=i(5125),p=i(4324),m=i(9422),f=i(1713),g=i(5375),v=i(3687),y=i(7808),x=i(2648),I=i(920),b=i(6313),w=i(7953),Z=function(){var t=this,e=t._self._c;return e(r.Z,{staticClass:"mt-16"},[e(I.Z,[e(m.Z,[e("section",{staticClass:"mt-16"},[e(a.Z,{staticClass:"mt-16"},[[e(o.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.Prensa,"sort-by":"text"},scopedSlots:t._u([{key:"top",fn:function(){return[e(b.Z,{attrs:{flat:""}},[e(w.qW,{staticClass:"font-weight-bold"},[t._v("PRENSA")]),e(h.Z,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e(v.Z),e(u.Z,{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:a}){return[e(s.Z,t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",a,!1),i),[t._v(" AGREGAR ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(a.Z,[e(n.EB,[e("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),e(c.Z,{ref:"form",staticClass:"ma-4",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(f.Z,{attrs:{dense:""}},[e(y.Z,{attrs:{label:"Titulo",outlined:"",dense:""},model:{value:t.editedItem.titulo,callback:function(e){t.$set(t.editedItem,"titulo",e)},expression:"editedItem.titulo"}})],1),e(f.Z,{staticClass:"d-flex justify-center",attrs:{dense:""}},[e(l.Z,{attrs:{cols:"5"}},[e(g.Z,{attrs:{outlined:"",dense:"",items:t.items,"item-text":"autor","item-value":"autor",label:"Autor","persistent-hint":"","return-object":"","single-line":""},model:{value:t.editedItem.autor,callback:function(e){t.$set(t.editedItem,"autor",e)},expression:"editedItem.autor"}})],1),e(l.Z,{attrs:{cols:"5"}},[e(y.Z,{directives:[{name:"mask",rawName:"v-mask",value:"####-##-##",expression:"'####-##-##'"}],attrs:{label:"Fecha",outlined:"",dense:""},model:{value:t.editedItem.fecha,callback:function(e){t.$set(t.editedItem,"fecha",e)},expression:"editedItem.fecha"}})],1)],1),e(f.Z,{attrs:{dense:""}},[e(l.Z,[e(x.Z,{attrs:{label:"Texto",outlined:"",dense:""},model:{value:t.editedItem.descripcion,callback:function(e){t.$set(t.editedItem,"descripcion",e)},expression:"editedItem.descripcion"}})],1)],1),e(f.Z,{attrs:{dense:""}},[e(l.Z,[e(d.Z,{attrs:{label:"Foto","show-size":"",counter:"",multiple:"",filled:"","prepend-icon":"mdi-camera"},model:{value:t.editedItem.imagen,callback:function(e){t.$set(t.editedItem,"imagen",e)},expression:"editedItem.imagen"}})],1),e(l.Z,[e("v-image")],1)],1)],1),t._v(" "),e(n.h7,[e(v.Z),e(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancel ")]),e(s.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Guardar ")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:i}){return[e(p.Z,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")])]}},{key:"no-data",fn:function(){return[e(s.Z,{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0}])})]],2)],1)])],1)],1)},$=[],S=(i(7658),i(1694)),k={data:()=>({valid:!0,items:null,dialog:!1,headers:[{text:"Titulo",align:"start",sortable:!1,value:"titulo"},{text:"Texto",value:"descripcion"},{text:"Autor",value:"autor"},{text:"Fecha",value:"fecha"},{text:"Imagen",value:"imagen"},{text:"Acción",value:"actions",sortable:!1}],Prensa:[],editedIndex:-1,editedItem:{titulo:"",descripcion:"",autor:"",fecha:"",imagen:""},defaultItem:{titulo:"",descripcion:"",autor:"",fecha:"",imagen:""}}),computed:{formTitle(){return-1===this.editedIndex?"Nueva Prensa":"Editar Prensa"}},watch:{dialog(t){t||this.close()}},created(){this.initialize()},methods:{async getData(){const t=await(0,S.Pb)("/autho/Prensa");this.Prensa.push(t["data"][0]),console.log(this.Prensa)},async initialize(){await this.getData()},editItem(t){this.editedIndex=this.Prensa.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},save(){this.editedIndex>-1?Object.assign(this.Prensa[this.editedIndex],this.editedItem):this.Prensa.push(this.editedItem),this.close()}}},_=k,z=i(1001),V=(0,z.Z)(_,Z,$,!1,null,"73596aec",null),C=V.exports},418:function(t,e,i){i.d(e,{Z:function(){return u}});i(7658);var s=i(7808),a=s.Z,n=i(4127),l=i(5352),r=i(4101),o=i(1767),u=a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>(0,l.TI)(t).every((t=>null!=t&&"object"===typeof t))}},computed:{classes(){return{...a.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce(((t,{size:e=0})=>t+e),0);return this.$vuetify.lang.t(this.counterSizeString,t,(0,l.XE)(e,1024===this.base))},internalArrayValue(){return(0,l.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((t=>{const{name:e="",size:i=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${(0,l.XE)(i,1024===this.base)})`:s})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&(0,r.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];(0,l.vZ)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((t,e)=>this.$createElement(n.Z,{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t]))):[]},genControl(){const t=a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=(0,o.y0)(t.data.style,{display:"none"})),t},genInput(){const t=a.options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))})):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=a.options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:t=>{t.target&&"LABEL"===t.target.nodeName||this.$refs.input.click()}},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},5125:function(t,e,i){i(7658);var s=i(7678),a=i(2500),n=i(4712);e["Z"]=(0,s.Z)(a.Z,(0,n.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},2648:function(t,e,i){i.d(e,{Z:function(){return l}});var s=i(7808),a=i(7678);const n=(0,a.Z)(s.Z);var l=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=s.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=390.cc044dc2.js.map
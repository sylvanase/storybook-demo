function e(e,n,t,o,r,s,i,d,c,a){"boolean"!=typeof i&&(c=d,d=i,i=!1);const f="function"==typeof t?t.options:t;let l;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,r&&(f.functional=!0)),o&&(f._scopeId=o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=l):n&&(l=i?function(e){n.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,d(e))}),l)if(f.functional){const e=f.render;f.render=function(n,t){return l.call(t),e(n,t)}}else{const e=f.beforeCreate;f.beforeCreate=e?[].concat(e,l):[l]}return t}const n=e({render:function(){var e=this,n=e.$createElement;return(e._self._c||n)("form",[e._t("default")],2)},staticRenderFns:[]},undefined,{name:"LgForm",provide(){return{form:this}},props:{model:{type:Object},rules:{type:Object}}},undefined,false,undefined,!1,void 0,void 0,void 0);n.install=e=>{e.component(n.name,n)};export default n;

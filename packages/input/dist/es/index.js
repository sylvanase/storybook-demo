function e(e,t,n,o,i,r,s,d,a,p){"boolean"!=typeof s&&(a=d,d=s,s=!1);const u="function"==typeof n?n.options:n;let c;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):t&&(c=s?function(e){t.call(this,p(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),c)if(u.functional){const e=u.render;u.render=function(t,n){return c.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,c):[c]}return n}const t=e({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",e._b({attrs:{type:e.type},domProps:{value:e.value},on:{input:e.handleInput}},"input",e.$attrs,!1))])},staticRenderFns:[]},undefined,{name:"LgInput",inheritAttrs:!1,props:{value:{type:String},type:{type:String,default:"text"}},methods:{handleInput(e){this.$emit("input",e.target.value)}}},undefined,false,undefined,!1,void 0,void 0,void 0);t.install=e=>{e.component(t.name,t)};export default t;
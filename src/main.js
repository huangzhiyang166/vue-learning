// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;


Vue.directive("demo",{
    bind: function (el, binding, vnode) {
      var s = JSON.stringify
      el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
    }
})

console.log(Vue.util)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data : function(){
    return{
      message : "hello!"
    }
  },
  template: '<div><div id="hook-arguments-example" v-demo:hello|type.a.b="message"></div><App/></div>',
  components: { App }
})

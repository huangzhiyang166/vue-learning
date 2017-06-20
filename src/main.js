<<<<<<< HEAD
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
=======

// import ElementUI from "element-ui";
// import "element-ui/lib/theme-default/index.css";
// Vue.use(ElementUI);

// import Vue from 'vue'
// import App from './App'
// import router from './router'
// Vue.config.productionTip = false;

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })


//index.js
import Vue from "vue";
var App = new Vue({
    el : "#app",
    data : function(){
        return{
            message : "hello world"
        }
    },
    beforeCreate : function(){},    //在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
    created : function(){},
    beforeMount : function(){},
    mounted : function(){},
    beforeUpdate : function(){},
    updated : function(){},
    activated : function(){},
    deactivated : function(){},
    beforeDestroy : function(){},
    destroyed : function(){},
    computed : {   //计算属性

    },
    watch : {      //watcher

    },
    components : { //子组件体系
        
    },
    methods : {    //实例方法
        sayHi : function(){
            console.log("hi");
        }
    }
});
>>>>>>> c3959286a3d7eedc08f1cbcb72f6edb0101c58f7

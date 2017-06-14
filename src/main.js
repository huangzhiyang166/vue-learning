
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
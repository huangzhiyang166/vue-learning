
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-default/index.css";
// Vue.use(ElementUI);

// import Vue from 'vue'
// import router from './router'
// Vue.config.productionTip = false;

import "./assets/css/global.scss";
import Vue from "vue";
import App from './App'
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})





// var vm = new Vue({
//     el : "#app",                    //挂载元素
//     data : function(){
//         return{                     //数据
//             message : "hello world",
//             a : "test"
//         }
//     },
//     template : '<div><p>您刚才输入了：{{message}} {{a}}</p><input v-bind:msg="message" type="text" v-model="message"></div>',                  //html模板
//     computed : {},                  //计算属性
//     watch : {},                     //watcher
//     components : {},                //组件体系
//     directives : {},                //自定义指令
//     filters : {},                   //过滤器  
//     mixins : [],                    //方法混入
//     methods : {},                   //实例方法

//     //以下为整个vue实例的生命周期函数
//     beforeCreate : function(){},    //在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
//     created : function(){},         //实例已完数据观测(data observer)，属性和方法的运算，但还没挂载到el元素上
//     beforeMount : function(){},     //挂载到el元素之前
//     mounted : function(){
//         // this.$set(this.$data,"a","test_a");
//         this.a = "test_a";
//     },         //挂载到el元素后，可以访问到真实dom节点了
//     beforeUpdate : function(){},    //数据更新前
//     updated : function(){},         //数据更新完成
//     activated : function(){},       //keep-alive 组件激活时调用
//     deactivated : function(){},     //keep-alive 组件停用时调用
//     beforeDestroy : function(){},   //实例销毁之前调用
//     destroyed : function(){}        //销毁后
// });

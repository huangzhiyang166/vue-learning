# Vue分享



## <h2 style="text-align:left">Vue组件间的通信</h2>

##### 父组件向子组件传递数据 - 通过props   

##### 子组件向父组件传递数据 - 通过$emit 

##### 跨级组件间的通信 - 通过$emit / vuex  



//child component
var child = new Vue({
    props : ["message"],
    template : '<div>{{message}}</div>'
});


//parent component
var parent = new Vue({
    data : function(){
        return{
            message : "hello world!"
        }
    },
    template : '<div><child :message="message"></child></div>'
    components : {
        child : child
    }
});


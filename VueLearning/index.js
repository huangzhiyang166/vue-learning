
var SubComponent = require("./SubComponent");


function init(){
    var app = new Vue({
        el : "#VueApp",
        data : function(){
            return{
                message : "huangzhiyang"
            }
        },
        methods : {
            onChildClick : function(data){
                console.log(data);
            }
        },
        components : {
            "my-sub" : SubComponent
        }
    });
}




module.exports = {
    init : init
}
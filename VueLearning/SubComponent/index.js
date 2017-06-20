module.exports = {
    template : require("./index.xtpl"),
    props : ["message"],
    data : function(){
        return{
            sayType : "hello"
        }
    },
    methods : {
        onclick : function(e){
            this.$emit("onclick","ss");
        }
    }
};
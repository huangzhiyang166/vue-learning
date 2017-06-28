var express = require("express");
var router = express.Router();

var faker = require("faker");
var _ = require("lodash");

var output = function(code,data,msg){
    return{
        code : code || 200,
        data : data || {},
        msg : msg || ""
    }
};


router.get("/getBookInfo",function(req,res){
    var data = [{
        buy_low : 2,
        buy_up : 10,
        title : "测试title测试title测试title测试title测试title",
        jsprice : 1,
        tprice : 2,
        storage : 8
    },{
        buy_low : 3,
        buy_up : 10,
        title : "测试title测试title测试title测试title测试title",
        jsprice : 1,
        tprice : 2,
        storage : 15
    },{
        buy_low : 3,
        buy_up : 0,
        title : "测试title测试title测试title测试title测试title",
        jsprice : 1,
        tprice : 2,
        storage : -1,
    }];
    res.send(output(200,data));
});

router.post("/getStoragePrice",function(req,res){
    var body = req.body;
    var data = body.data;
    setTimeout(function(){
        res.send(output(200,data));
    },500)
})



module.exports = router;
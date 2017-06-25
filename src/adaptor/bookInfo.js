module.exports = function(data){
    data.forEach(function(item,index){
        if(index==0){
            item["count"] = item.buy_low;
        }else{
            item["count"] = 0
        }
        item["index"] = index;
    })
    return data;
};
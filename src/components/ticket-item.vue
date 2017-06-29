<template>
    <div class="ticketItem">
        <div class="lt">
            <p class="tit">{{info.title}}</p>
            <div class="priceLine">
                <span class="jsprice priceBox"><i class="yen">&yen;</i><em class="num">{{jsprice}}</em></span>
                <span class="tprice through priceBox"><i class="yen">&yen;</i><em class="num">{{tprice}}</em></span>
            </div>
            <div class="storageLine">库存：{{storage}}</div>
        </div>
        <counter 
            :value="info.count" 
            :max="max" 
            :min="min" 
            :buy-low="info.buy_low"
            :buy-up="info.buy_up"
            :allowZero="info.index!=0"
            @countChange="onCountChange"
            @max="onMax"
            @min="onMin">
        </counter>
    </div>
</template>

<script>
export default {
    props : {
        info : {
            type : Object,
            required : true,
            default : function(){
                return{}
            }
        },
        index : {
            type : Number,
            default : -1
        }
    },
    data(){
        return{}
    },
    computed : {
        max : function(){
            let {buy_low,buy_up,storage,index} = this.info;
            let max;
            if(buy_up!=0 && storage!=-1){ //如果两者都不为不限，则取两者中最小值一方
                max = Math.min(buy_up,storage);
            }else if(buy_up==0 && storage==-1){//如果两者都为不限
                max = -1;
            }else{ //一个不限，一个有具体数值
                max = buy_up==0 ? storage : buy_up;
            }           
            return max; 
        },
        min : function(){
            return this.info.buy_low;
        },
        storage : function(){
            return this.info.storage==-1 ? "不限" : this.info.storage;
        },
        jsprice : function(){
            return this.info.jsprice;
        },
        tprice : function(){
            return this.info.tprice;
        }
    },
    methods : {
        onCountChange : function(val){
            this.info.count = val;
        },
        onMax : function(val){
            this.info.count = val;
        },
        onMin : function(val){
            this.info.count = val;
        }
    },
    components : {
        counter : require("./counter.vue")
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/flex";
.ticketItem{
    @include flexbox;
    padding: 10px;
    margin-bottom: 10px;
    background: #fff;
    .lt{ margin-right: 10px;}
    .countBox{ 
        margin-left: auto;
        margin-right: 10px;
        align-self: center;
    }
    .tit{ font-size: 14px; line-height: 1.4; font-weight: bold}
    .priceLine{ line-height: 1.6;}
    .storageLine{ line-height: 1.6}
}
</style>

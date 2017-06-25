<template>
  <div class="countBox">
      <div class="con">
        <span @click="onMinus" class="minu minuBtn btn">-</span>
        <input type="number" @input="onInput" @change="onChange" placeholder="请输入数字" :value="currentValue" name="" id="" class="countInp">
        <span @click="onAdd" class="add addBtn btn">+</span>
      </div>
      <div v-if="buyLow!=0 || buyUp!=-1" class="tip">
        <span v-if="buyLow!=0">{{buyLow}}张起购</span>
        <span class="buyUp" v-if="buyUp">限购{{buyUp}}张</span>
      </div>
  </div>
</template>
<script>
export default {
    name : "count",
    props : {
        value : {
            type : [String,Number],
            default : 0
        },
        buyLow : {
            type : [String,Number],
            default : 0
        },
        buyUp : {
            type : [String,Number],
            default : -1
        },
        max : {
            type : [String,Number],
            default : -1
        },
        min : {
            type : [String,Number],
            default : 0
        },
        allowZero : {
            type : Boolean,
            default : true
        }
    },
    data : function(){
        return{
            currentValue : this.value
        }
    },
    watch : {
        "value" : function(newVal,oldVal){
            this.setCurrentValue(newVal);
        }
    },
    methods : {
        setCurrentValue :function(val){
            if(this.currentValue===val) return;
            this.currentValue = val;
        },
        onInput : function(e){
            //this.setCurrentValue(e.target.value);
        },
        onChange : function(e){
            var oldVal = this.currentValue;
            var max = this.max * 1;
            var min = this.min * 1;
            var valStr = e.target.value;
            var val = valStr * 1;
            var allowZero = this.allowZero;
            var reg = allowZero ? /^\d+$/ : /^[1-9][0-9]*$/;
            if(!reg.test(valStr)){
                e.target.value = oldVal;
                this.setCurrentValue(oldVal);
                this.$emit("countChange",oldVal);
                return;
            }
            if(max!=-1 && val>max){
                e.target.value = oldVal;
                this.setCurrentValue(max);
                return this.$emit("max",max);
            }
            if(val<min){
                if(allowZero){
                    e.target.value = oldVal;
                    this.setCurrentValue(0);
                    this.$emit("countChange",0);
                }else{
                    e.target.value = oldVal;
                    this.setCurrentValue(min);
                    this.$emit("min",min);
                }
            }
        },
        onAdd : function(e){
            var max = this.max * 1;
            var min = this.min * 1;
            var val = this.currentValue * 1;
            var newVal = val + 1;
            if(max!=-1 && newVal>max){
                return this.$emit("max",val);
            }
            if(newVal<min) newVal = min;
            this.$emit("countChange",newVal);
        },
        onMinus : function(e){
            var max = this.max * 1;
            var min = this.min * 1;
            var allowZero = this.allowZero;
            var val = this.currentValue * 1;
            var newVal = val - 1;
            if(newVal<min){
                if(allowZero){
                    newVal = 0;
                }else{
                    newVal = min;
                }
            }
            this.setCurrentValue(newVal);
            this.$emit("countChange",newVal);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../assets/css/flex";
    .countBox .con{
        @include flexbox;
        input[type=number]{
            box-shadow: none;
            width : 50px;
            border: 1px solid #bfcbd9;
            text-align: center;
        }
        .btn{
            display: block;
            width: 40px;
            height: 34px;
            line-height: 34px;
            border: 1px solid #bfcbd9;
            align-self: center;
            font-size: 22px;
            cursor: pointer;
            text-align: center;
            color: #bfcbd9;
            &:hover,&:active{ color:#20a0ff}
        }
        .add.btn{
            border-left: 0 none;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }
        .minu.btn{
            border-right: 0 none;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }
    }
    .countBox .tip{
        text-align: right;
        margin-top: 5px;
        color: #999;
        & > .buyUp{ margin-left: 5px;}
    }
    
</style>
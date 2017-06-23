<template>
  <div class="countBox">
      <span @click="onMinus" class="minu minuBtn btn">-</span>
      <input type="number" @change="onChange" placeholder="请输入数字" :value="count" name="" id="" class="countInp">
      <span @click="onAdd" class="add addBtn btn">+</span>
  </div>
</template>
<script>
export default {
    name : "count",
    props : {
        val : {
            type : [String,Number],
            default : 0
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
            
        }
    },
    computed : {
        count : function(){
            return this.val;
        }
    },
    methods : {
        onChange : function(e){
            var oldVal = this.count;
            var max = this.max * 1;
            var min = this.min * 1;
            var valStr = e.target.value;
            var val = valStr * 1;
            var allowZero = this.allowZero;
            var reg = allowZero ? /^\d+$/ : /^[1-9][0-9]*$/;

            if(!reg.test(valStr)) return this.$emit("countChange",oldVal);
            if(max!=-1 && val>max) return this.$emit("max",max);
            if(val<min){
                if(allowZero){
                    this.$emit("countChange",0);
                }else{
                    this.$emit("min",min);
                }
            }
        },
        onAdd : function(e){
            var max = this.max * 1;
            var min = this.min * 1;
            var val = this.count * 1;
            var newVal = val + 1;
            if(max!=-1 && newVal>max) return this.$emit("max",val);
            if(newVal<min) newVal = min;
            this.$emit("countChange",newVal);
        },
        onMinus : function(e){
            var max = this.max * 1;
            var min = this.min * 1;
            var allowZero = this.allowZero;
            var val = this.count * 1;
            var newVal = val - 1;
            if(newVal<min){
                if(allowZero){
                    newVal = 0;
                }else{
                    newVal = min;
                }
            }
            this.$emit("countChange",newVal);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../assets/css/flex";
    .countBox{
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
    
</style>
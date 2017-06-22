<template>
  <div>
      <input type="text" v-model="val" name="" id="" class="countInp">
  </div>
</template>
<script>
export default {
    name : "count",
    props : {
        count : {
            type : String,
            defalut : "0"
        }
    },
    data : function(){
        console.log(this.count)
        return{
            val : this.count
        }
    }
}
</script>

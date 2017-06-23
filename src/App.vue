<template>
  <div>
      <ticket-item v-for="item in ticketList" :info="item" :key="item.index"></ticket-item>
  </div>
</template>

<script>
export default {
  data(){
    return{
        ticketList : [{
          buy_low : 3,
          buy_up : 10,
          title : "测试title测试title测试title测试title测试title",
          jsprice : 0.01,
          tprice : 0.02,
          storage : -1,
          index : 0
        },{
          buy_low : 4,
          buy_up : 10,
          title : "测试title2222",
          jsprice : 0.01,
          tprice : 0.02,
          storage : -1,
          index : 1
        }]
    }
  },
  methods : {
    
  },
  components : {
    ticketItem : require("./components/ticket-item.vue")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

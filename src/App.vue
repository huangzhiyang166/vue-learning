<template>
  <div>
      <div class="switchCon">
        <div v-for="(group,index) in changes" :index="index" :key="index" @click="onSwitchTriggerClick" class="box">
          <div v-for="(item,idx) in group" :index="index" :key="idx" :storage="item.storage" :price="item.jsprice" class="line">库存：{{item.storage}} 价格：{{item.jsprice}}</div>
        </div>
      </div>
      <template v-if="!isLoading">
        <ticket-item v-for="item in ticketList" :info="item" :key="item.index"></ticket-item>
        <div class="totalMoneyBar">
          总价：<span class="money"><i class="yen">&yen;</i><em class="num">{{totalMoney}}</em></span>
        </div>
      </template>
      <template v-else>
        <div style="height:300px; line-height:300px; text-align:center; color:#999">努力加载中...</div>
      </template>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { bookInfo } from "./adaptor";
export default {
  data(){
    return{
        changes : [
          [{
            storage : 5,
            jsprice : 3
          },{
            storage : -1,
            jsprice : 5
          },{
            storage : 0,
            jsprice : 10
          }],[{
            storage : 10,
            jsprice : 6
          },{
            storage : 3,
            jsprice : 4
          },{
            storage : -1,
            jsprice : 8
          }],[{
            storage : -1,
            jsprice : 12
          },{
            storage : 0,
            jsprice : 7
          },{
            storage : 20,
            jsprice : 1
          }]
        ],
        isLoading : true,
        ticketList : []
    }
  },
  mounted :function(){
    this.isLoading = true;
    axios.get("/api/getBookInfo").then((res) => {
        this.isLoading = false;
        let o = res.data;
        let {code,data,msg} = o;
        if(code==200){
          this.ticketList = bookInfo(data);
        }else{
          //fail
        }
    })
  },
  computed : {
    totalMoney : function(){
      let ticketList = this.ticketList;
      let total = 0;
      ticketList.forEach((item,index)=>{
        total += (item.count * item.jsprice);
      })
      return total;
    }
  },
  methods : {
    onSwitchTriggerClick : function(e){
      let target = e.target;
      let index = target.getAttribute("index");
      let data = this.changes[index];
      let ticketList = this.ticketList;
      if(!data) return false;
      this.isLoading = true;
      axios.post("/api/getStoragePrice",{data:data}).then((res)=>{
        this.isLoading = false;
        let o = res.data;
        let data = o.data;
        data.forEach((item,index) => {
          let ticket = ticketList[index];
          let count = ticket.count;
          let old_storage = ticket.storage;
          let storage = item.storage;
          let buy_up = ticket.buy_up;
          if(storage==-1){
            item["count"] = count;
          }else if(old_storage==-1){
            item["count"] = Math.min(storage,buy_up);
          }else{
            item["count"] = Math.min(storage,buy_up);
          }
          Vue.set(this.ticketList,index,Object.assign({},ticket,item));
        })
      })
    }
  },
  components : {
    ticketItem : require("./components/ticket-item.vue")
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/css/flex";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.switchCon{
  @include flexbox;
  padding: 10px;
  cursor: pointer;
  .box{
    @include flex;
    margin-right: 10px;
    &:last-child{ margin-right: 0;}
    background: #fff;
    padding: 10px;
    padding-right: 0;
    line-height: 1.7
  }

}

</style>

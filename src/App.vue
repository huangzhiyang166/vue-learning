<template>
  <div>
      <div class="switchCon">
        <div v-for="(group,index) in changes" :index="index" :key="index" @click="onSwitchTriggerClick" class="box">
          <div v-for="(item,idx) in group" :index="index" :key="idx" :storage="item.storage" :price="item.jsprice" class="line">库存：{{item.storage}} 价格：{{item.jsprice}}</div>
        </div>
      </div>
      <template v-if="!isGetBookInfoLoading">
        <ticket-item v-for="item in ticketList" :info="item" :key="item.index"></ticket-item>
      </template>
      <template v-else>
        <div style="height:300px; line-height:300px; text-align:center; color:#999">努力加载中...</div>
      </template>
      <div class="footBar">
        <div class="con">
          <div class="pr">
            总价：<span class="priceBox"><i class="yen">&yen;</i><em class="num">{{totalMoney}}</em></span>
          </div>
          <a @click="onSubmitBtnClick" href="###" id="submitBtn" class="submitBtn">提交订单</a>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import {mapState,mapGetters} from "vuex";
import axios from "axios";
import { bookInfo } from "./adaptor";
import Store from "./store";
export default {
  store : Store,
  data(){
    return{
        changes : this.$store.state.changes
    }
  },
  mounted :function(){
    this.$store.dispatch("getBookInfo",{pid:1,aid:2});
  },
  computed : {
    ...mapState(["isGetBookInfoLoading","ticketList"]),
    ...mapGetters(["totalMoney"])
  },
  methods : {
    onSwitchTriggerClick : function(e){
      let target = e.target;
      let index = target.getAttribute("index");
      this.$store.dispatch("swtichStorePrice",index);
    },
    onSubmitBtnClick : function(e){
      this.$store.dispatch("submitOrder",e);
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
.footBar{
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 -1px 1px rgba(0,0,0,0.1);
  .con{
    @include flexbox;
    .pr{ height: 45px; line-height: 45px; padding-left: 15px;}
    .submitBtn{
      display: block;
      height: 45px;
      line-height: 45px;
      flex:none;
      align-self: center;
      margin-left: auto;
      padding: 0 20px 0 20px;
      color: #fff;
      background: orangered
    }
  }
  
}

</style>

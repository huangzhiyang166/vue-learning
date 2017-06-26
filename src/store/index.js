import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {bookInfo} from "../adaptor";

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        ticketList : [],
        isGetBookInfoLoading : false,
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
        ]
    },
    getters : {
        totalMoney : function(state){
            let ticketList = state.ticketList;
            let total = 0;
            ticketList.map(ticket => {
                total += ticket.jsprice * ticket.count;
            });
            return total;
        }
    },
    actions: {
        //ajax获取ticketList
        getBookInfo : function({commit,state},payload){
            commit("setGetBookInfoLoading",true);
            axios.get("/api/getBookInfo",payload).then((res) => {
                commit("setGetBookInfoLoading",false);
                let o = res.data;
                let {code,data,msg} = o;
                if(code==200){
                    commit("setBookInfo",{list:bookInfo(data)});
                }else{
                    //fail
                }
            })
        },
        //切换日期时，ticketList组件需要切换到相应日期的库存价格
        swtichStorePrice : function({commit,state},index){
            let data = state.changes[index];
            let ticketList = state.ticketList;
            if(!data) return false;
            commit("setGetBookInfoLoading",true);
            axios.post("/api/getStoragePrice",{data:data}).then((res)=>{
                commit("setGetBookInfoLoading",false);
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
                    Vue.set(state.ticketList,index,Object.assign({},ticket,item));
                })
            })
        },
        //提交订单
        submitOrder : function(context,payload){
            console.log("submitOrder");
            console.log(context.state.ticketList);
        }
    },
    mutations: {
        setBookInfo : function(state,{list}){
            state.ticketList = list;
        },
        getBookInfo : function(state,params){
            
        },
        setGetBookInfoLoading : function(state,loading){
            state.isGetBookInfoLoading = !!loading;
        }
    }
});
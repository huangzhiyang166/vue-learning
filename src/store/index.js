import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state : {
        ticketList : [],
        isGetBookInfoLoading : false
    },
    actions: {
        getBookInfo : function({commit},{pid,aid}){
            commit("getBookInfo",{
                pid : pid,
                aid : aid
            })
        }  
    },
    mutations: {
        getBookInfo : function(state,params){
            console.log("mutations params");
            console.log(params);
        }
    }
});
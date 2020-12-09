import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {allMember,allinvoice,alleLog} from "../api2";
import MemberShow from "./router/pages/home/childrens/MemberShow";

Vue.use(Vuex)
Vue.use(VueAxios, axios)

axios.defaults.withCredentials= true;
export default new Vuex.Store({
  state:{
    user:'',
    isLogin:false,
    members:[],
    invoices:[],
    elogs:[]
  },
  mutations:{
    initUser(state,user){
      state.user=user
    },
    isLogin(state,status){
      state.isLogin=status
    },
    MemberShow(state,list){
      state.members=list
    },
    InvoiceShow(state,list){
      state.invoices=list
    },
    eLogsShow(state,list){
      state.elogs=list
    }
  },
  actions:{
    //获取用户登录状态
    UserStatus(context){
      axios.post('/isLogin/')
        .then((response)=>{
        if(response.data.code===200){
          context.commit("isLogin",true)
        }else{
          context.commit('isLogin',false)
        }
      })
        .catch(err=>{
          console.log(err)
        })
    },
    getLogin(context){
      axios.get('/')
    },
    getUser(content){
      axios.post('/getUser/').then(res=>{
        console.log(res.data)
        content.commit("initUser",res.data.message)
      })
    },
    allMember(content){
      allMember().then(res=>{
        content.commit("MemberShow",res.message)
      })
    },
    allInvoice(content){
      allinvoice().then(res=>{
        content.commit('InvoiceShow',res.message)
        console.log(res)
      })
    },
    alleXLog(content){
      alleLog().then(result=>{
        content.commit("eLogsShow",result.message)
      })
    }

  }
})

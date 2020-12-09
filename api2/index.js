import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ajax from './ajax'

Vue.use(VueAxios, axios)



export const pwdLogin = (uname, pwd) => ajax('/login', {uname, pwd}, 'POST');
export const delLogin =() => ajax('/delUser',{},'POST')

export const addMember=(cardNo,cardName,sex,mobile,telephone,email,address,balance,note)=>ajax('/newmember/',{cardNo,cardName,sex,mobile,telephone,email,address,balance,note},'POST')

export const allMember=()=>ajax('/allMember/',{},'GET')

export const alleLog=()=>ajax('/allExponseLog/',{},'GET')

export const allinvoice=()=>ajax('/allinvoice/',{},'GET')

export const sales=(cardId,Salesperson)=>ajax('/changeStatue/',{cardId,Salesperson},'POST')

//获取所有会员
export const getMember=(mid)=>ajax('/getMember/',{mid},'GET')

export const addInvoice =(invoiceNo,dutyNo,name,project,balance)=>ajax('/addinvoice/',{invoiceNo,dutyNo,name,project,balance},'POST')

export const minusMoney =(HandNo,money)=>ajax('/minusmoney/',{HandNo,money},'POST')

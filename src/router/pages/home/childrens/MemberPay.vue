<template>
  <div>
    <div class="row newmember">
      <div class="col-sm-6 left-box">
        <div class="search-box">
          <input type="text" placeholder="会员卡卡号" v-model="searchHandNo">
          <i @click.prevent="getM(searchHandNo)" class="iconfont search-btn">&#xe6b9;</i>
        </div>
        <hr />
        <div class="user-avatar-box">
          <img src="http://login.jiujiuke.net/Assets/images/infoPic.jpg" alt="">
        </div>
        <ul class="member-data">
          <li>会员卡号：<span>{{HandNO}}</span></li>
          <li>卡内余额：<span>{{Balance}}</span></li>
          <li>手机号码：<span>{{Mobile}}</span></li>
          <li>售出时间：<span>{{salesTime}}</span></li>
          <li>售出状态：<span>{{GarrdStatus}}</span></li>
          <li>创建时间：<span>{{checkDate}}</span></li>
          <li>业务员： <span>{{Salesperson}}</span> </li>
        </ul>
      </div>
      <div class="col-sm-6 right-box">
        <ul>
          <li><label for="">消费者姓名：</label><input type="text"></li>
          <li><label for="">消费金额：</label><input type="text" v-model="Balance"></li>
          <li><label>备注</label><textarea></textarea></li>
        </ul>
        <button @click="resultmoney()" class="account">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import {getMember,minusMoney} from "../../../../../api2";

export default {
  name: "MemberPay",
  data(){
    return {
      HandNO:'',
      Balance:'',
      phone:'',
      searchHandNo:'',
      checkDate:'',
      salesTime:'',
      Salesperson:'',
      Mobile:'',
      GarrdStatus:''
    }
  },
  methods:{
    async getM(mid){
      console.log(mid)
      let result=await getMember(mid)
      this.HandNO=result.data.HandNo
      this.Balance=result.data.Balance
      this.Salesperson=result.data.Salesperson
      this.salesTime=result.data.salesTime
      this.checkDate=result.data.CheckDate
      this.Mobile=result.data.Mobile
      this.GarrdStatus=result.data.GarrdStatus
    },
    async resultmoney(){
      if(this.HandNO==='' || this.Balance<=0){
        Swal.fire({
          type: 'success',
          title: '操作失败',
          text: '卡号未输入或者消费金额应该大于等于0',
        })
      }else{
        let result = await minusMoney(this.HandNO,this.Balance)
        if(result.code===200){
          Swal.fire({
            type: 'success',
            title: '消费成功',
            text: this.HandNO+'消费成功，剩余金额'+result.balance,
          })
          this.HandNO=''
          this.Balance=''
          this.Salesperson=''
          this.salesTime=''
          this.checkDate=''
          this.Mobile=''
          this.GarrdStatus=''
        }else{
          Swal.fire({
            type: 'error',
            title: '消费失败',
            text: result.message,
          })
        }
      }

    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
.newmember
  background-color: #fff;
  margin 0 30px
  padding 20px 0
 .left-box
   padding 0 40px
   .search-box
     height 34px
     line-height 34px
     margin-bottom 35px
     input
       width 502.5px
       height 100%
       float left
       padding-left 20px
       border 1px solid #CCCCCC
     i
       display inline-block
       color #ffffff
       width 40px
       float left
       font-size 23px
       background-color: orange
       line-height 34px
       cursor pointer
       box-sizing border-box
       text-align center
  .user-avatar-box
    height 125px
    width 100%
    overflow hidden
    text-align center
    margin-bottom 50px
    img
      width 125px
      height 100%
      border-radius 50%


  .member-data
    display flex
    justify-content space-between
    flex-wrap wrap
    li
      width 50%
      margin-bottom 20px
      font-weight bold
      span
        font-weight normal !important
        font-size 15px
        overflow hidden
        color #CCCCCC
.right-box
  padding-right 260px
  border-left 1px solid #ccc
  text-align right
  ul
    display flex
    flex-direction column
    align-items right
    li
      display flex
      justify-content space-between
      margin-bottom 20px
      label
        width 100px
        text-align center
        font-weight 400 !important
      input
        flex 1
      textarea
        flex 1
        height 200px


  .account
    color #fff
    width 60%
    height 60px
    background-color: #f90
    border none


</style>

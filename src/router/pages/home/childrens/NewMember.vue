<template>
  <div>
      <div class="row newmember">
        <div class="col-sm-6 left-box">
          <div class="row hy-1">
            <div class="col-sm-3 table-box"><lable>会员卡号</lable></div>
            <div class="col-sm-9 input-box"><input type="text" v-model="cardNo"></div>
          </div>  <div class="row hy-1">
            <div class="col-sm-3 table-box"><lable>手机号码</lable></div>
            <div class="col-sm-9 input-box"><input type="text" v-model="telephone"></div>
          </div>  <div class="row hy-1">
            <div class="col-sm-3 table-box"><lable>性别</lable></div>
          <div class="col-sm-9 custom-control custom-radio">
            <div class="row">
                <div class="col-sm-4"><input type="radio" value="1"  name="sex" v-model="sex">
                  <label for="customRadio2" >男</label></div>
                <div class="col-sm-4"><input type="radio" value="0"  name="sex" v-model="sex"  checked="checked">
                  <label for="customRadio1" >女</label>
                </div>
              <div class="col-sm-4"></div>
            </div>


          </div>
          </div>  <div class="row hy-1">
            <div class="col-sm-3 table-box"><lable>身份证号码</lable></div>
            <div class="col-sm-9 input-box"><input type="text"></div>
          </div>  <div class="row hy-1">
            <div class="col-sm-3 table-box"><lable>提成员工</lable></div>
            <div class="col-sm-9 input-box"><input type="text"></div>
          </div>  <div class="row hy-1">
            <div class="col-sm-3 table-box" ><lable>邮箱</lable></div>
            <div class="col-sm-9 input-box" ><input type="text" v-model="email"></div>
          </div>  <div class="row hy-1">
            <div class="col-sm-3 table-box"><lable>充值金额</lable></div>
            <div class="col-sm-9 input-box"><input type="text" v-model="balance"></div>
          </div>
        </div>
        <div class="col-sm-6 right-box">
          <div class="row hy-1">
            <div class="col-sm-3 table-box"><lable>会员姓名</lable></div>
            <div class="col-sm-9 input-box"><input type="text" v-model="cardName"></div>
          </div>
          <div class="row hy-1">
            <div class="col-sm-3 table-box"><lable>家庭电话</lable></div>
            <div class="col-sm-9 input-box"><input type="text" v-model="mobile"></div>
          </div>
        </div>
      </div>
      <hr />
      <div class="save-button">
        <a style="width: 150px; height: 50px;text-align: center;line-height: 43px" class="btn btn-primary" @click="newMember()" href="#">保存</a>
        <a style="width: 150px; height: 50px;text-align: center;line-height: 43px" class="btn btn-outline-danger" href="#">取消</a>
      </div>
  </div>
</template>

<script>
import {addMember} from "../../../../../api2";

export default {
  name: "NewMember",
  data(){
    return {
      cardNo:'',
      cardName:'',
      sex:1,
      mobile:'',
      telephone:'',
      email:'',
      balance:'',
      Note:''
    }
  },
  computed:{
    phoneRight() {
      return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)
    }
  },
  methods:{
    async newMember(){
      if(!this.cardNo || !this.balance){
        swal.fire({
          position: 'center',
          type: 'error',
          title: '请输入卡号和金额',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        let result=await addMember(this.cardNo,this.cardName,this.sex,
          this.mobile,this.telephone,this.email,this.address,
          this.balance,this.note)
        if(result.code===200){
          swal.fire({
            position: 'center',
            type: 'success',
            title: result.message,
            showConfirmButton: false,
            timer: 2000
          })
          this.cardNo='',
            this.cardName='',
            this.sex=1,
            this.mobile='',
            this.telephone='',
            this.email='',
            this.balance='',
            this.Note=''
        }else if(result.code===206){
          swal.fire({
            position: 'center',
            type: 'error',
            title: result.message,
            showConfirmButton: false,
            timer: 2000
          })
        }
      }

    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .save-button
    text-align center
  .newmember
    width 100%
    background-color: #ffffff
    margin 0 auto
    padding 20px
    .left-box,.right-box
      .hy-1
        margin-bottom 15px
        height 37px
  .table-box
    line-height 37px
    text-align right

  label
      text-align right
  .input-box
    input
      width 80%
      height 100%

</style>

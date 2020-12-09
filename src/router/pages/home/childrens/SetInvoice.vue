<template>
  <div>
    <div class="index">
      <div class="inner-left">
        <img src="/static/fapiao.png" alt="">
      </div>
      <div class="inner-right">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">发票号码</label>
            <input  v-model="invoiceNo" class="form-control"  placeholder="请输入发票号码">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">税号</label>
            <input  v-model="dutyNo" class="form-control" id="exampleInputEmail1" placeholder="请输入发票抬头">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">单位名称</label>
            <input v-model="name" class="form-control" name="dwmc" placeholder="请输入单位名称">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">体检项目</label>
            <input v-model="project"  class="form-control" name="tjxm" placeholder="体检费">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">体检金额</label>
            <input v-model="balance" class="form-control" name="tjje"  placeholder="请输入体检金额">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">开票人</label>
            <select name="kpr" class="form-control" >
              <option>{{ $store.state.user.username }}</option>
            </select>
          </div>
          <button @click.prevent="newInvoice()" class="btn btn-primary" >立即开票</button>
        </form>
      </div>
    </div>


  </div>

</template>

<script>
import {addInvoice} from './../../../../../api2/index'
export default {
name: "SetInvolice",
  data(){
  return{
    invoiceNo:'',
    dutyNo:'个人',
    name:'',
    project:'体检费',
    balance:'',
  }
  },
  methods:{
  async newInvoice(){
    var that= this
    let result = await addInvoice(this.invoiceNo,this.dutyNo,this.name,this.project,this.balance)
    if(result.code===200){
      console.log(result.code)
      swal.fire({
        title: '开票成功！现在打印吗？',
        text: '确定您将跳转发票打印页面',
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '确定跳转！',
      }).then(function(){
        window.location.assign("http://127.0.0.1:3000/cms/getinvoice?fid="+that.invoiceNo)
      })

    }
  }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
.index{
  width: 100%;
  height: 720px;
  overflow: hidden;
}
.inner-left
  float: left;
  width: 730px;
  img
    width 100%
    height 100%

.inner-right{
  float: right;
  width: 502px;
}
.h1{
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

<template>
  <div class="wrapper">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li @click="switchTo('index')" class="nav-item d-none d-sm-inline-block ">
          <a href="#" class="nav-link">首页</a>
        </li>
        <li @click="switchTo('index')" class="nav-item d-none d-sm-inline-block ">
          <a @click.prevent="sell()" href="#" class="nav-link">出售</a>
        </li>
      </ul>
      <div class="nav-right"><a href="" @click.prevent="delUser()">注销</a></div>

    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="#" class="brand-link">
        <img src="./dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">招财喵</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="./dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
          </div>
          <div class="info">
            <a href="#" class="d-block">{{user.username}}</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <!--              会员管理-->
            <li class="nav-item has-treeview menu-open">
              <a @click.prevent="" href="#" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  会员管理
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li v-on:click.prevent="switchTo('newmember')" class="nav-item" >
                  <a href="#" class="nav-link ":class="{active:$route.path.includes('/newmember')}">
                    <i class="far fa-circle nav-icon"></i>
                    <p>添加会员</p>
                  </a>
                </li>
                <li v-on:click.prevent="switchTo('membershow')" class="nav-item">
                  <a href="#" class="nav-link" :class="{active: $route.path.includes('/membershow')}">
                    <i class="far fa-circle nav-icon"></i>
                    <p>会员列表</p>
                  </a>
                </li>
                <li v-on:click.prevent="switchTo('memberpay')" class="nav-item">
                  <a href="#" class="nav-link" :class="{active:$route.path.includes('/memberpay')}">
                    <i class="far fa-circle nav-icon"></i>
                    <p>会员消费</p>
                  </a>
                </li>
              </ul>
            </li>
            <!--              财务管理-->
            <li class="nav-item has-treeview menu-open">
              <a href="#" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  财务管理
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li v-on:click.prevent="switchTo('exponseLog')" class="nav-item">
                  <a href="#" class="nav-link" :class="{active:$route.path.includes('/exponseLog')}">
                    <i class="far fa-circle nav-icon"></i>
                    <p>消费充值记录</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="./index2.html" >
                    <i class="far fa-circle nav-icon"></i>
                    <p>账单查询</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item has-treeview menu-open">
              <a href="#" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  开票功能
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li @click.prevent="switchTo('setinvoice')" class="nav-item">
                  <a href="#" class="nav-link " :class="{active:$route.path.includes('setinvoice')}">
                    <i class="far fa-circle nav-icon"></i>
                    <p>开票</p>
                  </a>
                </li>
                <li @click.prevent="switchTo('invoiceshow')"  class="nav-item">
                  <a href="#" class="nav-link" :class="{active:$route.path.includes('invoiceshow')}">
                    <i class="far fa-circle nav-icon"></i>
                    <p>开票记录</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="./index2.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>开票汇总</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item has-treeview menu-open">
              <a href="#" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  销售助手
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="./index.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>业绩汇总</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="./index2.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>提成设置</p>
                  </a>
                </li>
              </ul>
            </li>

          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0 text-dark">Dashboard</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
      <section class="content">
        <router-view />

      </section>
      <!-- Main content -->
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <strong>招财喵会员管理系统 &copy; 2020-12月 <a href="http://adminlte.io">Admin:刘杨</a>.</strong>
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0.0
      </div>
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
</template>

<script>
import {delLogin,sales} from "../../../../api2";
import {mapState} from  'vuex'

export default {
  name: "cmsBase",
  data(){
    return {

    }
  },
  methods:{
    async delUser(){
      let status = await delLogin()
      if(status.code===200){
        alert('注销成功')
        window.location.reload()
      }
    },
    sell(){
      swal.mixin({
        input: 'text',
        confirmButtonText: '下一步',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: '会员卡号',
          text: '请刷卡'
        },
        '销售员'
      ]).then((result) => {
        console.log(result.value)
        if (result.value) {
          var results=sales(result.value[0],result.value[1])
          results.then(res=>{
            if(res.code===200){
              Swal.fire({
                type: 'success',
                title: '售卡成功',
                text: result.value[0]+'已成功出售',
              })
            }else{
              Swal.fire({
                type: 'error',
                title: '售卡失败',
                text: res.message,
              })
            }
          })

        }
      })
    },
    switchTo(path){
      this.$router.replace(path);
    },
  },
  computed:{
    ...mapState(["user"])
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">

</style>

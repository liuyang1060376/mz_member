<template>
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">所有会员列表</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>卡号</th>
                    <th>余额</th>
                    <th>充值时间</th>
                    <th>创建者</th>
                    <th>手机号码</th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr v-for="(item,key) in members">
                    <td>{{item.HandNo}}</td>
                    <td>{{item.Balance}}
                    </td>
                    <td>{{item.CheckDate}}</td>
                    <td>{{item.Creator}}</td>
                    <td>{{item.Telephone}}</td>
                  </tr>

                  </tbody>
<!--                  <tfoot>-->
<!--                  <tr>-->
<!--                    <th>Rendering engine</th>-->
<!--                    <th>Browser</th>-->
<!--                    <th>Platform(s)</th>-->
<!--                    <th>Engine version</th>-->
<!--                    <th>CSS grade</th>-->
<!--                  </tr>-->
<!--                  </tfoot>-->
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
    </div>
</template>

<script>
import {allMember} from "../../../../../api2";
import {mapState} from 'vuex'

export default {
  name: "MemberShow",
  created() {
    this.$store.dispatch('allMember')
  },
  computed:{
    ...mapState(['members'])
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">

</style>

<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">消费记录</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>卡号</th>
                  <th>操作者</th>
                  <th>操作时间</th>
                  <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(elog,key) in elogs">
                  <td>{{ elog.HandNo}}</td>
                  <td>{{ elog.creator}}</td>
                  <td>{{ elog.CheckDate}}</td>
                  <td>{{ elog.Note}}</td>
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
import {alleLog} from "../../../../../api2";
import {mapState} from 'vuex'

export default {
name: "ExponseLog",
  computed:{
  ...mapState(["elogs"])
  },
  created() {
    this.$store.dispatch('alleXLog')
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">

</style>

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
                  <th>发票号码</th>
                  <th>税号</th>
                  <th>单位名称</th>
                  <th>开票人</th>
                  <th>开票时间</th>
                  <th>金额</th>
                  <th>操作</th>

                </tr>
                </thead>
                <tbody>

                <tr v-for="(invoice,key) in invoices">
                  <td>{{ invoice.invoiceNo}}</td>
                  <td>{{ invoice.dutyNo}}</td>
                  <td>{{ invoice.FpName}}</td>
                  <td>{{ invoice.admin}}</td>
                  <td>{{ invoice.checkDate}}</td>
                  <td>{{ invoice.balance}}</td>
                  <td><button>打印</button><button>作废</button></td>
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
import {mapState} from 'vuex'
export default {
  name: "Show",
  created() {
    this.$store.dispatch('allInvoice')
  },
  computed:{
    ...mapState(["invoices"])
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">

</style>

<template>
  <div>
    <div v-if="isLogin">
      <CMSBase />
    </div>
    <Login v-else />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CMSBase from './CMSBase'
import Login from "../common/Login";
export default {
  name: "Index",
  data(){
    return ({
      datas:''
    })
  },
  components:{Login,CMSBase},
  created() {
    this.$store.dispatch("UserStatus")
  },
  computed: {
    ...mapState(['isLogin'])
  },
  mounted() {
  },


}
</script>

<style lang="stylus">
.nav-right
  position: absolute
  right: 80px
</style>

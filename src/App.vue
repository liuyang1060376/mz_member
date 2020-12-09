<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

// import {mapState} from 'vuex'
export default {
  name: 'App',
  data(){
    return {
      user:''
    }
  },
  created() {
    this.$store.dispatch("getUser")
  }
}
</script>

<style>

</style>

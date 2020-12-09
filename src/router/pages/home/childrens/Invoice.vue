<template>
    <div class="invoice-box">
      <router-view />
    </div>
</template>

<script>

export default {
name: "Invoice"
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .invoice-box
    width 100%
    background-color: #fff
    margin 10px 30px
    padding 10px
</style>

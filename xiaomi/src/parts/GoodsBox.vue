<template>
  <div class="good-box">
    <div class="box-header">
      <h2 class="box-title">{{goodsItem.boxTitle}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['goodsItem']
}
</script>

<style lang="less">
  .good-box {
    position: relative;
    width: 1226px;
    height: auto;
    padding-top: 4px;
    margin: 0 auto;
  }
</style>
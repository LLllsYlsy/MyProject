<template>
  <div class="info_head">
    <div class="info_name">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .info_head {
    text-align: center;
    background: #FFFFFF;
    .info_name {
      padding: 25px 0 5px 0;
      span {
        font-size:22px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(23,31,36,1);
        line-height:30px;
      }
    }
  }
</style>

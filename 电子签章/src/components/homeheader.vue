<template>
  <div class="home_head clearfix">
    <div class="home_name">
      <slot></slot>
    </div>
    <!-- <div class="home_info" @click="toinfo">
        <img src="../assets/images/homelogo.png">
    </div>-->
    <router-link class="home_info" tag="div" to="/infomanager">
      <img src="../assets/images/homelogo.png">
    </router-link>
  </div>
</template>

<script>
export default {
  // methods:{
  //   toinfo () {
  //     this.$router.push('/infomanager');
  //   }
  // }
};
</script>

<style lang="less">
.home_head {
  height: 60px;
  padding: 26px 24px 13px 15px;
  margin-bottom: 15px;
  background-color: #ffffff;
  .home_name {
    width: 200px;
    height: 21px;
    font-size: 18px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 21px;
    float: left;
  }

  .home_info {
    position: relative;
    width: 16px;
    height: 18px;
    float: right;
  }
}
</style>
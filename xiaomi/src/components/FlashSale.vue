<template>
  <div class="flash-sale">
    <div class="box-header">
      <h2 class="box-title">小米闪购</h2>
      <div class="slide-control">
        <span class="slide-left slide-button">
          <i class="fa fa-angle-left"></i>
        </span>
        <span class="divider"></span>
        <span class="slide-right slide-button">
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
    </div>
    <slide></slide>
  </div>
</template>

<script>
import Slide from '../parts/Slide'

export default {
  data () {
    return {

    }
  },
  components: {
    'Slide': Slide
  }
}
</script>

<style lang="less">
  .flash-sale {
    position: relative;
    width: 1226px;
    height: auto;
    padding-top: 4px;
    margin: 0 auto 22px;
  }

  .box-header {
    text-align: start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box-title {
      display: inline-block;
      font-size: 22px;
      font-weight: 200;
      line-height: 58px;
      color: #333;
    }
  }

  .slide-control {
    display: flex;
    border: 1px solid #e0e0e0;
    .slide-button {
      padding: 0 4px;
      font-size: 20px;
      font-weight: 800;
      line-height: 20px;
      color: #b0b0b0;
      text-align: center;
      transition: color .5s;
      cursor: pointer;

      i {
        width: 26px;
        height: 18px;
      }
    }

    .divider {
      width: 1px;
      height: 21px;
      background: #e0e0e0;
    }
  }
</style>
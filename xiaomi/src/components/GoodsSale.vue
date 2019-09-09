<template>
  <div class="goods-sale">
    <poster :postItem="postItem1"></poster>
    <goods-box :goodsItem="goodsItem1"></goods-box>
  </div>
</template>

<script>
import Poster from '../parts/Poster'
import GoodsBox from '../parts/GoodsBox'

export default {
  data () {
    return {
      postItem1: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a2f39c9fe0804ace1d3707574c7c86f.jpg?w=2452&h=240', url: 'https://www.mi.com/redminote7pro/'},
      postItem2: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a2f39c9fe0804ace1d3707574c7c86f.jpg?w=2452&h=240', url: 'https://www.mi.com/redminote7pro/'},
      postItem3: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a2f39c9fe0804ace1d3707574c7c86f.jpg?w=2452&h=240', url: 'https://www.mi.com/redminote7pro/'},
      postItem4: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a2f39c9fe0804ace1d3707574c7c86f.jpg?w=2452&h=240', url: 'https://www.mi.com/redminote7pro/'},
      postItem5: {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1a2f39c9fe0804ace1d3707574c7c86f.jpg?w=2452&h=240', url: 'https://www.mi.com/redminote7pro/'},

      goodsItem1: {
        boxTitle: '手机',
        isHot: false
      }
    }
  },
  components: {
    'Poster': Poster,
    'GoodsBox': GoodsBox
  }
}
</script>

<style lang="less">
  .goods-sale {
      position: relative;
      width: 1226px;
      height: auto;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
  }
</style>
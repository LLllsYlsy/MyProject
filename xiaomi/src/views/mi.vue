<template>
  <div class="index-page">
    <top-bar></top-bar>
    <top-header></top-header>
    <menu-banner></menu-banner>
    <sub-channel></sub-channel>
    <div class="gray-page">
      <flash-sale></flash-sale>
      <goods-sale></goods-sale>
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import TopHeader from '../components/TopHeader'
import MenuBanner from '../components/MenuBanner'
import SubChannel from '../components/SubChannel'
import FlashSale from '../components/FlashSale'
import GoodsSale from '../components/GoodsSale'

export default {
  data () {
    return {}
  },
  components: {
    'TopBar': TopBar,
    'TopHeader': TopHeader,
    'MenuBanner': MenuBanner,
    'SubChannel': SubChannel,
    'FlashSale': FlashSale,
    'GoodsSale': GoodsSale,
  }
}
</script>

<style lang="less">
  .index-page {
    .gray-page {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      background-color: #f5f5f5;
    }
  }
</style>
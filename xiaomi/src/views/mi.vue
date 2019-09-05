<template>
  <div>
    <top-bar></top-bar>
    <top-header></top-header>
    <menu-banner></menu-banner>
    <sub-channel></sub-channel>
    <flash-sale></flash-sale>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import TopHeader from '../components/TopHeader'
import MenuBanner from '../components/MenuBanner'
import SubChannel from '../components/SubChannel'
import FlashSale from '../components/FlashSale'

export default {
  data () {
    return {

    }
  },
  components: {
    'top-bar': TopBar,
    'TopHeader': TopHeader,
    'MenuBanner': MenuBanner,
    'SubChannel': SubChannel,
    'FlashSale': FlashSale,
  }
}
</script>

<style lang="less">

</style>
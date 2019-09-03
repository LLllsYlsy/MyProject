<template>
  <div>
    <top-bar></top-bar>
    <top-header></top-header>
    <menu-banner></menu-banner>
    <sub-channel></sub-channel>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import TopHeader from '../components/TopHeader'
import MenuBanner from '../components/MenuBanner'
import SubChannel from '../components/SubChannel'

export default {
  data () {
    return {

    }
  },
  components: {
    'top-bar': TopBar,
    'TopHeader': TopHeader,
    'MenuBanner': MenuBanner,
    'SubChannel': SubChannel
  }
}
</script>

<style lang="less">

</style>
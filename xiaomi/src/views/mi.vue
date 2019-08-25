<template>
  <div>
    <top-bar></top-bar>
    <top-header></top-header>
    <menu-banner></menu-banner>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import TopHeader from '../components/TopHeader'
import MenuBanner from '../components/MenuBanner'

export default {
  data () {
    return {

    }
  },
  components: {
    'top-bar': TopBar,
    'TopHeader': TopHeader,
    'MenuBanner': MenuBanner
  }
}
</script>

<style lang="less">

</style>
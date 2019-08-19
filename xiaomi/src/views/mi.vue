<template>
  <div>
    <top-bar></top-bar>
    <top-header></top-header>
  </div>
</template>

<script>
import TopBar from "../components/TopBar"
import TopHeader from "../components/TopHeader"

export default {
  data () {
    return {

    }
  },
  components: {
    'top-bar': TopBar,
    'TopHeader': TopHeader
  }
}
</script>

<style lang="less">

</style>
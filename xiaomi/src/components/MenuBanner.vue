<template>
  <div class="menu-banner">
    <banner></banner>
  </div>
</template>

<script>
import Banner from '../parts/Banner'

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    'Banner': Banner
  }
}
</script>

<style lang="less">
  .menu-banner {
    position: relative;
    width: 1226px;
    height: auto;
    margin: 0 auto;
  }
</style>
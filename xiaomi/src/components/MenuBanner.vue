<template>
  <div class="menu-banner">
    <banner :banners="banners"></banner>
  </div>
</template>

<script>
import Banner from '../parts/Banner'

export default {
  data () {
    return {
      banners: [
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cefed8336bae62768afeeb6a3b8f55c8.jpg?w=2452&h=920', url: 'https://www.mi.com/redminote7/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/743e04f29f920648b9d99b04a85ce343.jpg?w=2452&h=920', url: 'https://www.mi.com/a/h/11251.html'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d7d3f2df881cf62e5fafdada94f5018.jpg?w=2452&h=920', url: 'https://www.mi.com/mitvall-screen/e55c/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bd4174b8c5aad67a64864a5716ad152.jpg?w=2452&h=920', url: 'https://www.mi.com/washer-dryer-10/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f0eb196c6c65a89ffba6efa4b5679c.jpg?w=2452&h=920', url: 'https://www.mi.com/a/h/11117.html'}
      ]
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
<template lang="html">
  <div class="container">
    <home-header></home-header>
    <div class="content">
      <ul class="cont-ul">
        <list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></list>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import CommonFooter from '../components/commonFooter'
import List from '../components/list'
export default {
  data () {
      return {
          items: []
      }
  },
  components: {
    HomeHeader,
    CommonFooter,
    List
  },
  created () {
      // this.$http.get('http://127.0.0.1:9527/goods').then((data) => {
      //   this.items = data.body.body;
      // })
      let data = require('../../server/static/goods.json')
      this.items = data.goods
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1.8rem;
  }
  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>

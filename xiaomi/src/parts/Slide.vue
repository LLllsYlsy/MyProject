<template>
  <div class="sale-slide">
    <!-- <transition-group name="slide-trans" class="slide-container" tag="ul">
      <li class="slide-item"
      v-for="(item, index) in slideItems"
      :key="index"
      :style="{'border-top-color': item.topColor}"
      :data-index="index"
      v-show="parseInt(index / 4) === slideIndex">
        <a :href="item.url">
          <img :src="item.src" :alt="item.value">
          <h3 class="name">{{item.value}}</h3>
          <span class="desc">{{item.desc}}</span>
          <div class="price">
            <span>{{item.newPrice}}元</span>
            <del>{{item.oldPrice}}元</del>
          </div>
        </a>
      </li>
    </transition-group> -->
    <ul class="slide-container"
    v-for="(list, key) in slideListMatch"
    :key="key"
    :data-key="key">
      <li class="slide-item"
      v-for="(item, index) in list"
      :key="index"
      :style="{'border-top-color': item.topColor}"
      :data-index="index">
        <a :href="item.url">
          <img :src="item.src" :alt="item.value">
          <h3 class="name">{{item.value}}</h3>
          <span class="desc">{{item.desc}}</span>
          <div class="price">
            <span>{{item.newPrice}}元</span>
            <del>{{item.oldPrice}}元</del>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideIndex: 0,
      slideTimer: '',
    }
  },
  props: ['slideItems'],
  methods: {
    next () {
      // const lastIndex = parseInt(this.slideItems.length / 4);
			// if (this.slideIndex < lastIndex) {
			// 	this.slideIndex += 1;
			// } else {
			// 	this.slideIndex = 0;
			// }
    },
    prev () {
      // const lastIndex = parseInt(this.slideItems.length / 4);
			// if (this.slideIndex > 0) {
			// 	this.slideIndex -= 1;
			// } else {
			// 	this.slideIndex = lastIndex;
			// }
    },
    play () {
      // let _this = this;
			// clearInterval(this.slideTimer);
			// this.slideTimer = setInterval(() => {
			// 	_this.next();
			// }, 5000);
    }
  },
  computed: {
    slideListMatch () {
      if (this.slideItems && this.slideItems.length) {
        const matchData = [];
        for(let i = 0; i < this.slideItems.length; i += 4){
          matchData.push(this.slideItems.slice(i, i + 4));
        }
        return matchData;
      }
    }
  },
  mounted () {
    this.play();
  }
}
</script>

<style lang="less">
  .sale-slide {
    width: 978px;
    height: 340px;
    margin-left: 14px;
    overflow: hidden;
    position: relative;
    display: flex;
    .slide-container {
      height: 340px;
      display: flex;
      .slide-item {
        display: block;
        width: 234px;
        margin-right: 14px;
        border-top-width: 1px;
        border-top-style: solid;
        text-align: center;
        background: #fff;
        transition: all .8s ease;
        a {
          display: block;
          height: 300px;
          padding-top: 39px;
        }

        img {
          display: block;
          width: 160px;
          height: 160px;
          margin: 0 37px 22px;
        }

        .name {
          display: block;
          margin: 0 20px 3px;
          font-size: 14px;
          font-weight: 400;
          text-overflow: ellipsis;
          color: #212121;
          overflow: hidden;
          white-space: nowrap;
        }

        .desc {
          display: block;
          height: 18px;
          margin: 0 20px 12px;
          font-size: 12px;
          text-overflow: ellipsis;
          color: #b0b0b0;
          overflow: hidden;
          white-space: nowrap;
        }

        .price {
          font-size: 14px;
          color: #ff6709;
          del {
            color: #b0b0b0;
            margin-left: 4px;
          }
        }
      }
    }
  }

  // 滚动轮播
  .slide-trans-enter, .slide-trans-leave-active  {
      transform: translate(100%, 0);
  }
</style>
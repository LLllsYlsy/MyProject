<template>
  <div class="top-header">
    <div class="top-container">
      <a class="mi-icon" href="#"></a>
      <div class="header-navs-container">
        <div class="divider"></div>
        <ul class="navs">
          <li class="navs-item" v-for="(item, index) in navs" :key="index">
            <a v-if="item.type"
            :data-type="item.type"
            @mouseenter="itemListShow(item.type)"
            @mouseleave="itemListHide()"
            >{{item.value}}</a>
            <a v-else :href="item.url"  target="_blank">{{item.value}}</a>
          </li>
        </ul>
      </div>
    </div>
    <transition name="list-fade">
      <div class="item-list"
      @mouseenter="itemListShow()"
      @mouseleave="itemListHide()"
      v-show="itemListFlag">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemListFlag: false,
      timer: "",
      navs: [
        {value: "小米手机", type: "xiaomi"},
				{value: "Redmi 红米", type: "redmi"},
				{value: "电视", type: "tv"},
				{value: "笔记本", type: "laptop"},
				{value: "家电", type: "household"},
				{value: "路由器", type: "router"},
				{value: "智能硬件", type: "hardware"},
				{value: "服务", url: "//www.mi.com/service/"},
				{value: "社区", url: "http://www.xiaomi.cn"}
      ]
    }
  },
  methods: {
    itemListShow: function (type) {
      if (type) {

      }
      this.itemListFlag = true;
      clearTimeout(this.timer);
    },
    itemListHide: function () {
      let _this = this;
      this.timer = setTimeout(function () {
				_this.itemListFlag = false
			}, 300);
    }
  }
}
</script>

<style lang="less">
  .top-header {
    width: 100%;
    height: 100px;
    .top-container {
      width: 1226px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .mi-icon {
        display: block;
        width: 55px;
        height: 55px;
        margin-right: 7px;
        cursor: pointer;
        background: #ff6700 url("../assets/image/home-logo.png") no-repeat;
        background-position: -55px 0;
        transition: all .20s ease;
      }

      .mi-icon:hover {
          background-position: 0 0;
        }

      .header-navs-container {
        display: flex;
        padding: 12px 0 0 30px;
        height: 100%;
        .divider {
          width: 142px;
          height: 88px;
        }

        .navs {
          display: flex;
          line-height: 88px;
          .navs-item > a {
            cursor: pointer;
            padding: 26px 10px 38px;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }
    }

    .item-list {
      position: absolute;
      left: 0;
      top: 140px;
      width: 100%;
      height: 230px;
      background: #fff;
      border-top: 1px solid #e0e0e0;
      box-shadow: 0 3px 4px rgba(0, 0, 0, .18);
      overflow: hidden;
      // z-index: 11;
    }
  }

  .list-fade-transition {
    transition: all .3s ease;
    height: 230px;
    opacity: 1;
  }

  .list-fade-enter, .list-fade-leave {
    height: 0;
    opacity: 0;
  }
</style>
<template>
  <div class="good-box">
    <div class="box-header">
      <h2 class="box-title">{{goodsItem.boxTitle}}</h2>
      <div class="type-select" v-if="goodsItem.isHot">
        <ul class="tab-list">
          <li class="tab-item"
          v-for="(item, index) in goodsItem.tabList"
          :key="index"
          :class="{'active': true}">{{item.value}}</li>
        </ul>
      </div>
      <div class="type-more" v-else>
        <a :href="goodsItem.url">
          <span>查看全部</span>
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
    <div class="box-content">
      <div class="promo-content">
        <div class="promo-one" v-if="goodsItem.listData.promo.length === 1">
          <a class="brick-item" target="_blank" :href="goodsItem.listData.promo[0].url">
            <img :src="goodsItem.listData.promo[0].src">
          </a>
        </div>
        <div class="promo-two" v-if="goodsItem.listData.promo.length === 2">
          <a class="brick-item" target="_blank"
          :href="item.url"
          v-for="(item, index) in goodsItem.listData.promo"
          :key="index">
            <img :src="item.src">
          </a>
        </div>
      </div>
      <div class="goods-content">
        <div class="goods-one" v-if="!goodsItem.isHot">
          <div class="goods-item brick-item"
          v-for="(item, index) in goodsItem.listData.goods"
          :key="index">
            <a :href="item.url" target="_blank">
              <img :src="item.src" :alt="item.value">
              <h3 class="name ellipsis">{{item.value}}</h3>
              <span class="desc ellipsis">{{item.desc}}</span>
              <div class="price">
                <span>{{item.newPrice}}元</span>
                <span v-if="item.sub">起</span>
                <del v-if="item.oldPrice">{{item.oldPrice}}元</del>
              </div>
            </a>
          </div>
        </div>
        <div class="goods-two" v-else>
          <div class="goods-item brick-item"></div>
          <div class=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['goodsItem']
}
</script>

<style lang="less">
  .good-box {
    position: relative;
    width: 1226px;
    height: auto;
    margin: 0 auto;
  }

  .box-header {
    .type-select {
      display: inline-block;
      .tab-list {
        display: flex;
        .tab-item {
          display: inline-block;
          margin-left: 30px;
          color: #424242;
          border-bottom: 2px solid transparent;
          transition: all .3s;
          cursor: pointer;
        }

        .active {
          border-bottom: 2px solid #ff6709;
          color: #ff6709;
        }
      }
    }

    .type-more {
      display: inline-block;
      a {
        font-size: 16px;
        display: flex;
        align-items: center;
        span {
          color: #424242;
          transition: all .4s;
        }

        i {
          width: 20px;
          height: 20px;
          margin-left: 8px;
          border-radius: 16px;
          font-size: 15px;
          line-height: 20px;
          background: #b0b0b0;
          color: #fff;
          text-align: center;
          vertical-align: 2px;
          transition: all .4s;
        }

        &:hover {
          span {
            color: #ff6709;
          }

          i {
            background: #ff6709;
          }
        }
      }
    }
  }

  .box-content {
    display: flex;
    .promo-content {
      .promo-one {
        a {
          display: block;
          height: 614px;
          img {
            height: 100%;
            width: 234px;
          }
        }
      }

      .promo-two {
        a {
          display: block;
          height: 300px;
          img {
            width: 234px;
            height: 100%;
          }
        }

        a:first-child {
          margin-bottom: 14px;
        }
      }
    }

    .goods-content {
      .goods-one {
        width: 992px;
        display: flex;
        flex-wrap: wrap;
        .goods-item {
          background: #fff;
          height: 300px;
          padding: 20px 0;
          width: 234px;
          margin-left: 14px;
          margin-bottom: 14px;
          a {
            display: block;
            img {
              width: 160px;
              height: 160px;
              margin: 0 auto 18px;
            }

            .name {
              font-size: 14px;
              font-weight: 400;
              color: #333;
              margin: 0 10px 2px;
            }

            .desc {
              display: block;
              margin: 0 10px 10px;
              height: 18px;
              font-size: 12px;
              color: #b0b0b0;
            }

            .price {
              margin: 0 10px 14px;
              font-size: 14px;
              color: #ff6700;
              del {
                color: #b0b0b0;
                margin-left: 8px;
              }
            }
          }
        }
      }
    }
  }

  .brick-item {
    transition: all .2s linear;
    &:hover {
      transform: translate3d(0,-2px,0);
      box-shadow: 0 15px 30px rgba(0,0,0,.1);
    }
  }
</style>
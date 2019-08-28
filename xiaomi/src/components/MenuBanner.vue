<template>
  <div class="menu-banner">
    <div class="menu-container" @mouseleaver="bannerMenuHide()">
      <ul class="menu-list">
        <li class="list-item"
        v-for="(item, index) in menus"
        :key="index"
        @mouseenter="bannerMenuShow(item.type)">
          <a :href="item.url" target="blank">{{item.value}}</a>
          <i class="fa fa-angle-right"></i>
        </li>
      </ul>
    </div>
    <div class="menu-info"
    v-show="bannerMenuFlag"
    @mouseleaver="bannerMenuHide()"
    @mouseenter="bannerMenuShow()">
        <ul class="menu-info-list" v-for="(list, key) in menuListMatch" :key="key">
          <li class="info-list-item"
          v-for="(item, index) in list"
          :key="index">
            <a :href="item.url">
              <img :src="item.src" :alt="item.name" />
							<div class="">{{item.name}}</div>
            </a>
          </li>
        </ul>
      </div>
    <banner :banners="banners"></banner>
  </div>
</template>

<script>
import Banner from '../parts/Banner'

export default {
  data () {
    return {
      bannerMenuFlag: false,
      menuTimer: '',
      listInfoData: [],
      menus: [
        {value: '手机 电话卡', url: 'https://www.mi.com/p/1915.html', type: 'phone'},
        {value: '电视 盒子', url: 'https://www.mi.com/a/h/9819.html', type: 'tv'},
        {value: '笔记本 平板', url: 'https://www.mi.com/a/h/7529.html', type: 'laptop'},
        {value: '家电 插线板', url: 'https://www.mi.com/p/9285.html', type: 'household'},
        {value: '出行 穿戴', url: 'https://www.mi.com/p/9289.html', type: 'wear'},
        {value: '智能 路由器', url: 'https://www.mi.com/a/h/8363.html', type: 'router'},
        {value: '电源 配件', url: 'https://www.mi.com/p/9290.html', type: 'power'},
        {value: '健康 儿童', url: 'https://www.mi.com/p/9291.html', type: 'health'},
        {value: '耳机 音箱', url: 'https://www.mi.com/p/9292.html', type: 'pods'},
        {value: '生活 箱包', url: 'https://www.mi.com/p/9293.html', type: 'life'}
      ],
      banners: [
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cefed8336bae62768afeeb6a3b8f55c8.jpg?w=2452&h=920', url: 'https://www.mi.com/redminote7/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/743e04f29f920648b9d99b04a85ce343.jpg?w=2452&h=920', url: 'https://www.mi.com/a/h/11251.html'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d7d3f2df881cf62e5fafdada94f5018.jpg?w=2452&h=920', url: 'https://www.mi.com/mitvall-screen/e55c/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bd4174b8c5aad67a64864a5716ad152.jpg?w=2452&h=920', url: 'https://www.mi.com/washer-dryer-10/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f0eb196c6c65a89ffba6efa4b5679c.jpg?w=2452&h=920', url: 'https://www.mi.com/a/h/11117.html'}
      ],
      phone: [
        {name: '小米CC9', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b0d7d2c85734b80a1b8d1a4100c9c1f.png', url: 'https://www.mi.com/micc9/'},
        {name: '小米CC美图定制版', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/20e23b306f50384ab85b6658f5c963ff.jpg', url: 'https://www.mi.com/xiaomicc9mt'},
        {name: '小米CC9e', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d3ee15816d2ccbe922172033c3c3941.png', url: 'https://www.mi.com/micc9e'},
        {name: '小米9', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cce3d767b8841c237cd610833799fe3.png', url: 'https://www.mi.com/mi9/'},
        {name: '小米9 SE', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ebff4a3d7ac1df43737d195cd38a2a37.png', url: 'https://www.mi.com/mi9se/'},
        {name: '小米MIX 3', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9e83fabc3efeb8dd9f880ce26220c294.png', url: 'https://www.mi.com/mix3/'},
        {name: '小米MIX 2S', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7ab17259cd65adb7222e856fa1996a34.png', url: 'https://www.mi.com/mix2s/'},
        {name: '小米Max 3', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fbb0bc35bd92d1fa8840762810a5cc84.png', url: 'https://www.mi.com/max3/'},
        {name: '黑鲨手机2 Pro', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eea579b45e6d01f214423c19ef76a459.png', url: 'https://item.mi.com/product/10000175.html'},
        {name: '黑鲨游戏手机 2', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82a363a6644bc3661ae5592726d4625e.jpg', url: 'https://www.mi.com/blackshark-game2/'},
        {name: 'Redmi K20 Pro', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b04a1e68b00130a879fa75865fb7c4b1.jpg', url: 'https://www.mi.com/redmik20pro/'},
        {name: 'Redmi K20', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb14154721f2b239a4eff12f28b8cd93.jpg', url: 'https://www.mi.com/redmik20/'},
        {name: 'Redmi 7A', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/85d746207b997873ddfcdca0da025f78.jpg', url: 'https://www.mi.com/redmi7a/'},
        {name: 'Redmi 7', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/265c87b03067bc11097db369e71bf976.png', url: 'https://www.mi.com/redmi7/'},
        {name: 'Redmi Note 7 Pro', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26d1de72e958da75048be5c6cc0b73f6.jpg', url: 'https://www.mi.com/redminote7pro/'},
        {name: 'Redmi Note 7', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7c684a08a482a61b19c8d7f9b1113f5f.png', url: 'https://www.mi.com/redminote7/'},
        {name: '移动4G+专区', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c483e65040470208823a8bfb5d73c27.jpg', url: 'https://www.mi.com/p/5592.html'},
        {name: '小米移动 电话卡', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dafced4abb82c502c087a2aca7078f48.jpg', url: 'https://www.mi.com/mimobile/'},
        {name: '手机上门维修', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png', url: 'https://item.mi.com/7532.html'},
        {name: '云服务空间月卡', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg', url: 'https://item.mi.com/8262.html'},
        {name: '米粉卡 日租卡', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1a2ed8c7ac2ab7ebfd1554a7a1ac25a6.jpg', url: 'https://www.mi.com/micard'}
      ],
      tv: [
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''},
        {name: '', src: '', url: ''}
      ]
    }
  },
  methods: {
    bannerMenuHide () {
      let _this = this;
      this.menuTimer = setTimeout(() => {
				_this.bannerMenuFlag = false;
			}, 300);
    },
    bannerMenuShow (type) {
      if (type) {
        this.listInfoData = this[type];
      }

      this.bannerMenuFlag = true;
      clearTimeout(this.menuTimer);
    }
  },
  computed: {
    menuListMatch () {
      if (this.listInfoData && this.listInfoData.length) {
        const matchData = [];
        for(let i = 0; i < this.listInfoData.length; i += 6){
          matchData.push(this.listInfoData.slice(i, i + 6));
        }
        return matchData;
      }
    }
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
    .menu-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 235px;
      height: auto;
      background: rgba(0, 0, 0, 0.3);
      z-index: 10;
    }
  }

  .menu-list {
    padding: 20px 0;
    height: 460px;
    .list-item {
      display: flex;
      padding-left: 30px;
      &:hover {
        background-color: #ff6700;
      }

      a {
        position: relative;
        display: inline-block;
        width: 170px;
        height: 42px;
        line-height: 42px;
        color: #fff;
        text-align: left;
        background-color: transparent;
      }

      i {
        font-size: 22px;
        color: #e0e0e0;
        line-height: 42px;
      }
    }
  }

  .menu-info {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    left: 235px;
    top: 0;
    z-index: 11;
    border: 1px solid #e0e0e0;
    box-shadow: 3px 8px 16px rgba( 0, 0, 0, 0.18);
    .menu-info-list {
      width: auto;
      height: 460px;
      margin: 0;
      padding: 0;
      list-style: none;
      background: #fff;
    }
    }
</style>
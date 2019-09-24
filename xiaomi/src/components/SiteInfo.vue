<template>
  <div class="site-info">
    <div class="logo-footer">
      <img src="../assets/image/logo-footer.png">
    </div>
    <div class="info-footer">
      <ul class="info-link">
        <li class="info-item" v-for="(item, index) in footerNavs" :key="index">
          <template v-if="item.value === 'Select Location'">
            <a :href="item.url">{{item.value}}</a>
          </template>
          <template v-else>
            <a :href="item.url" target="_blank">{{item.value}}</a>
            <span class="nav-span">|</span>
          </template>
        </li>
      </ul>
      <div class="info-license"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerNavs: [
        {value: '小米商城', url: 'https://www.mi.com/index.html'},
        {value: 'MIUI', url: 'https://www.miui.com/'},
        {value: '米家', url: 'https://home.mi.com/index.html'},
        {value: '米聊', url: 'http://www.miliao.com/'},
        {value: '多看', url: 'https://www.duokan.com/'},
        {value: '游戏', url: 'http://game.xiaomi.com/'},
        {value: '路由器', url: 'http://www.miwifi.com/'},
        {value: '米粉卡', url: 'https://www.mi.com/micard/'},
        {value: '政企服务', url: 'https://b.mi.com/?client_id=180100031058&masid=17409.0358'},
        {value: '小米天猫店', url: 'https://xiaomi.tmall.com/'},
        {value: '小米集团隐私政策', url: 'https://privacy.mi.com/all/zh_CN/'},
        {value: '小米商城隐私政策', url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html'},
        {value: '小米商城用户协议', url: 'https://www.mi.com/about/user-agreement/'},
        {value: '问题反馈', url: 'https://static.mi.com/feedback/'},
        {value: '廉正举报', url: 'https://www.mi.com/jiancha/'},
        {value: '诚信合规', url: 'https://integrity.mi.com/'},
        {value: 'Select Location', url: 'javascript:void(0);'},
      ]
    }
  }
}
</script>

<style lang="less">
  .site-info {
    position: relative;
    width: 1226px;
    height: auto;
    margin: 0 auto;
    padding: 30px 0;
    font-size: 12px;
    display: flex;
  }

  .logo-footer {
    height: 57px;
    img {
      width: 57px;
      height: 57px;
      margin-right: 10px;
    }
  }

  .info-footer .info-link {
    display: flex;
    .info-item {
      height: 18px;
      line-height: 18px;
      display: inline-block;
      a {
        display: inline-block;
        color: #757575;
      }

      .nav-span {
        line-height: 18px;
      }
    }
  }

  .info-footer .info-license {

  }
</style>
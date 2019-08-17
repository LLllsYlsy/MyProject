<template>
  <div class="info_page">
    <div class="info_title">
      <span>用户中心</span>
    </div>

    <div class="info_content">
      <van-cell-group class="info_content_group" :border="false">
        <van-cell :border="false" class="info_content_style content_border" title="企业名称">
          <template slot>{{userInfo.companyName}}</template>
        </van-cell>
        <van-cell :border="false" class="info_content_style content_border" title="统一社会信用代码">
          <template slot>{{userInfo.Code}}</template>
        </van-cell>
        <van-cell :border="false" class="info_content_style content_border" title="登录密码">
          <template slot>{{userInfo.loginPw}}</template>
        </van-cell>
        <van-cell :border="false" class="info_content_style content_border" title="手机号">
          <template slot>{{userInfo.phoneNumber}}</template>
        </van-cell>
        <van-cell :border="false" class="info_content_style content_border" title="邮箱">
          <template slot>{{userInfo.email}}</template>
        </van-cell>
        <van-cell :border="false" class="info_content_style" title="签约密码">
          <template slot>{{userInfo.signPw}}</template>
        </van-cell>
      </van-cell-group>
    </div>

    <div class="info_button">
      <van-button class="info_button_style" type="default">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        companyName: "公司",
        Code: 11111111111111,
        loginPw: "******",
        phoneNumber: "未绑定",
        email: "未绑定",
        signPw: "未设置"
      }
    };
  }
};
</script>

<style lang="less">
.info_page {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #f3f5f7;
  overflow-y: auto;
  .info_title {
    text-align: center;
    padding: 25px 0 36px 0;
    background-color: #ffffff;
    span {
      font-size: 22px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(23, 31, 36, 1);
      line-height: 30px;
    }
  }

  .info_content {
    background-color: #ffffff;
    margin-bottom: 10px;
    .info_content_group {
      padding-bottom: 2px;
      margin: 0 15px;
      .info_content_style {
        padding: 12px 0;
        // border-bottom: 1px solid rgba(233,233,233,1);
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        line-height: 22px;
      }

      .content_border {
        border-bottom: 1px solid rgba(233, 233, 233, 1);
      }
    }
  }

  .info_button {
    .info_button_style {
      width: 100%;
      height: 50px;
      border: none;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 140, 144, 1);
      line-height: 22px;
    }
  }
}
</style>
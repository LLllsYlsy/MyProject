<template>
  <div class="home_page">
    <home-header>
      <span>您尚未进行实名认证</span>
    </home-header>
    <div class="home_content">
      <div class="warning_img">
        <img src="../assets/images/warning.png">
      </div>
      <div class="warning_content">
        <p>根据<span>《中华人民共和国电子签名法》</span>规定，电子签名方必须身份真实，请下载APP完成实名认证后再登陆。</p>
      </div>
      <div class="downloadButton">
        <div>
          <van-button class="buttonStyle" round type="danger" size="large">下载APP完成验证</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HomeHeader from "../components/homeheader"
  export default {
    data () {
      return {

      }
    },
    components:{
      HomeHeader,
    }
  }
</script>

<style lang="less">
  .home_page {
    width: 100%;
    height: 100%;
    position:fixed;
    background-color: #F3F5F7;
    overflow-y: auto;
    .home_content {
      text-align: -webkit-center;
      height: 100%;
      background-color: #FFFFFF;
      .warning_img {
        padding-top: 20px;
        text-align: center;
        img{
          width: 40px;
          height: 40px;
        }
      }

      .warning_content {
        width: 288px;
        padding: 21px 0 36px 0;
        p {
          font-size:16px;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:#333333;
          line-height:22px;
          span {
            color:#618CFF !important;
          }
        }
      }

      .downloadButton {
        .buttonStyle {
          width: 280px;
          height: 44px;
          background: linear-gradient(
            270deg,
            rgba(154, 123, 253, 1) 0%,
            rgba(104, 141, 255, 1) 100%
          );
          border-radius: 29px;
          border: none;
        }
      }
    }
  }
</style>



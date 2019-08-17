<template>
  <div>
    <div class="header"></div>
    <div class="login">
      <div class="loginDiv">
        <van-cell-group :border="false">
          <van-field :border="false" class="loginInfo" v-model="userName" placeholder="手机号/邮箱"/>
          <van-field :border="false" class="loginInfo inputTop" v-model="picCode" placeholder="请输入图形验证码"/>
          <div class="inputTop clearfix">
            <van-field
              :border="false"
              type="password"
              class="pwStyle"
              v-model="passWord"
              v-if="active"
              placeholder="请输入密码"
            />
            <van-field
              :border="false"
              class="pwStyle"
              v-model="passWord"
              v-else
              placeholder="请输入密码"
            />
            <div class="icon" @click="pwKnow">
              <img v-show="active" src="../assets/images/pwunvisiable.png">
              <img v-show="!active" src="../assets/images/pwvisiable.png">
            </div>
          </div>
        </van-cell-group>
      </div>
    </div>
    <div class="loginButton">
      <div class="button">
        <!-- <van-button class="buttonStyle" @click="tohomepage" round type="danger" size="large">登录</van-button> -->
        <van-button class="buttonStyle" to="/homepage" round type="danger" size="large" v-if="signed">登录</van-button>
        <van-button class="buttonStyle" to="/homepage_unsign" round type="danger" size="large" v-else>登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: "",
      picCode: "",
      passWord: "",

      signed: false,

      active: true
    };
  },
  methods:{
    // tohomepage(){
    //   this.$router.push('/homepage');
    //   // this.$router.go(-1);
    // },
    pwKnow () {
      this.active = !(this.active);
    }
  }
};
</script>

<style lang="less">
.header {
  width: 100%;
  height: 214px;
  background: url("../assets/images/background.png");
  background-size: 100%;
  background-repeat: no-repeat;
  .logo {
    text-align: center;
    padding-top: 41px;
    img {
      width: 80px;
      height: 80px;
    }
  }

  .name {
    text-align: center;
    padding-top: 19px;
    img {
      width: 65px;
      height: 33px;
    }
  }
}

.login {
  padding-top: 64px;
  text-align: -webkit-center;
  .loginDiv {
    width: 315px;
    .loginInfo {
      font-size: 16px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(201, 201, 201, 1);
      line-height: 22px;
      border-bottom: 1px solid #e9e9e9;
      padding: 15px 0 10px 0;
    }

    .inputTop {
      margin-top: 16px;
      border-bottom: 1px solid #e9e9e9;
      .pwStyle {
        width: 250px;
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(201, 201, 201, 1);
        line-height: 22px;
        padding: 15px 0 10px 0;
        float: left;
      }
    }

    .icon{
      width: 30px;
      height: 30px;
      position: relative;
      float: right;
      margin: 15px 1px 0 0;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}

.loginButton {
  text-align: -webkit-center;
  .button {
    padding-top: 59px;
    .buttonStyle {
      width: 315px;
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
</style>



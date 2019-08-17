<template>
  <div class="home_page">
    <!-- <div class="home_head clearfix">
      <div class="home_name">
        <span>{{companyInfo.companyName}}</span>
      </div>
      <div class="home_info" to="/infomanager">
        <img src="../assets/images/homelogo.png">
      </div>
    </div>-->
    <home-header>
      <span>{{companyInfo.companyName}}</span>
    </home-header>
    <div class="home_content">
      <router-link tag="div" to="/signinfo" class="home_cell border_style">
        <!-- <div class="home_cell border_style"> -->
        <div class="home_cell_content clearfix">
          <div class="home_cell_content_image">
            <img src="../assets/images/waitforme.png">
          </div>
          <span class="content_info_name">待我签约</span>
          <span class="content_info_num">{{companyInfo.waitForMeNum}}</span>
        </div>
        <!-- </div> -->
      </router-link>

      <router-link tag="div" to="/signinfo" class="home_cell border_style">
      <!-- <div class="home_cell border_style"> -->
        <div class="home_cell_content clearfix">
          <div class="home_cell_content_image">
            <img src="../assets/images/waitforother.png">
          </div>
          <span class="content_info_name">待他人签约</span>
          <span class="content_info_num">{{companyInfo.waitForOtherNum}}</span>
        </div>
      <!-- </div> -->
      </router-link>

      <router-link tag="div" to="/signinfo" class="home_cell border_style_white">
      <!-- <div class="home_cell border_style_white"> -->
        <div class="home_cell_content clearfix">
          <div class="home_cell_content_image">
            <img src="../assets/images/signed.png">
          </div>
          <span class="content_info_name">已完成</span>
          <span class="content_info_num">{{companyInfo.signed}}</span>
        </div>
      <!-- </div> -->
      </router-link>
    </div>
  </div>
</template>

<script>
import HomeHeader from "../components/homeheader";
export default {
  data() {
    return {
      companyInfo: {
        companyName: "公司",
        waitForMeNum: 111,
        waitForOtherNum: 1,
        signed: 11
      }
    };
  },
  components: {
    HomeHeader
  }
};
</script>

<style lang="less">
.home_page {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #f3f5f7;
  overflow-y: auto;
  // .home_head {
  //   height: 60px;
  //   padding: 26px 24px 13px 15px;
  //   margin-bottom: 15px;
  //   background-color: #FFFFFF;
  //   .home_name {
  //     width:200px;
  //     height:21px;
  //     font-size:18px;
  //     font-family:PingFangSC-Medium;
  //     font-weight:500;
  //     color:rgba(51,51,51,1);
  //     line-height:21px;
  //     float: left;
  //   }

  //   .home_info {
  //     position: relative;
  //     width: 16px;
  //     height: 18px;
  //     float: right;
  //   }
  // }
  .home_content {
    background-color: #ffffff;
    .home_cell {
      padding: 18px 0 11px 0;
      margin: 0 20px 0 16px;
      .home_cell_content {
        .home_cell_content_image {
          width: 60px;
          height: 60px;
          float: left;
          img {
            width: 60px;
            height: 60px;
          }
        }
        .content_info_name {
          padding: 17px 0 18px 10px;
          font-size: 16px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 25px;
          float: left;
        }

        .content_info_num {
          padding: 17px 5px 18px 0;
          font-size: 18px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 25px;
          float: right;
        }
      }
    }

    .border_style {
      border-bottom: 1px solid #e9e9e9;
    }

    .border_style_white {
      border-bottom: 1px solid #ffffff;
    }
  }
}
</style>
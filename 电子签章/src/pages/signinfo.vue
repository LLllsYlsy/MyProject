<template>
  <div class="signinfo_page">
    <Info-Header>
      <span>待我签署</span>
    </Info-Header>

    <div class="info_cell clearfix" v-for="(item,index) in contractInfo" :key="index" @click="consoleIndex(index)">
      <div class="info_cell_mark">
        <div class="mark_content" v-if="item.receive">
          <span class="receive">收</span>
        </div>
        <div class="mark_content_send" v-else>
          <span class="send">发</span>
        </div>
      </div>

      <div class="info_cell_content">
        <div class="cell_content_title clearfix">
          <span class="title">{{item.contractName}}</span>
          <span class="receive" v-if="item.waitme">待我签署</span>
          <span class="send" v-else>待他人签署</span>
        </div>
        <div class="cell_content_info">发起人：{{item.initiator}}</div>
        <div class="cell_content_time clearfix">
          <span class="time">{{item.time}}</span>
          <router-link tag="span" to="/write" class="sign" v-if="item.waitme">
            签署
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoHeader from "../components/infoheader"
export default {
  data () {
    return {
      contractInfo: [{
        contractName: "劳动合同",
        initiator :"公司",
        time: "2019-09-09",

        receive: true,
        waitme: true
      },{
        contractName: "商务合作合同",
        initiator :"公司",
        time: "2019-09-09",

        receive: true,
        waitme: false
      },{
        contractName: "商务合作合同",
        initiator :"公司",
        time: "2019-09-09",

        receive: false,
        waitme: false
      },{
        contractName: "劳动合同",
        initiator :"公司",
        time: "2019-09-09",

        receive: true,
        waitme: true
      }]
    }
  },
  components: {
    InfoHeader
  },
  methods: {
    consoleIndex: (index) => console.log(index)
  }
}
</script>

<style lang="less">
  .signinfo_page {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;
    overflow-y: auto;
    .info_cell {
      padding: 13px 14px 5px 10px;
      margin: 10px 15px;
      background-color: #ffffff;
      box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.05);
      border-radius: 4px;
      .info_cell_mark {
        float: left;
        margin-top: 8px;
        //margin: 8px 10px 54px 0;
        .mark_content {
          width: 40px;
          height: 40px;
          border:1px solid rgba(97,140,255,1);
          border-radius: 50%;
          text-align: center;
          .receive{
            font-size: 20px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color :rgba(97,140,255,1);
            line-height: 40px;
          }
        }

        .mark_content_send {
          width: 40px;
          height: 40px;
          border:1px solid rgba(154,123,253,1);
          border-radius: 50%;
          text-align: center;
          .send {
            font-size: 20px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(154,123,253,1);;
            line-height: 40px;
          }
        }
      }

      .info_cell_content {
        width: 84.3%;
        float: right;
        .cell_content_title {
          padding-bottom: 13px;
          border-bottom: 1px solid rgba(233,233,233,1);
          .title {
            font-size: 16px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(23,31,36,1);
            line-height: 22px;
            float: left;
          }

          .receive {
            width: 50px;
            height: 20px;
            margin-top: 2px;
            background: rgba(238,233,255,1);
            border-radius:4px;
            text-align: center;
            float: right;
            font-size: 10px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(154,123,253,1);
            line-height: 20px;
          }

          .send {
            width: 60px;
            height: 20px;
            margin-top: 2px;
            background: rgba(234,240,255,1);
            border-radius:4px;
            text-align: center;
            float: right;
            font-size: 10px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(97,140,255,1);
            line-height: 20px;
          }
        }

        .cell_content_info {
          margin: 10px 0 14px 0;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(23,31,36,1);
          line-height: 20px;
        }

        .cell_content_time {
          .time {
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(153,153,153,1);
            line-height: 22px;
            float: left;
          }

          .sign {
            font-size: 16px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(97,140,255,1);
            line-height: 22px;
            float: right;
          }
        }
      }
    }
  }
</style>

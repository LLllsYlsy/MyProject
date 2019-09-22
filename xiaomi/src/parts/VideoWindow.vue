<template>
  <div class="window-container">
    <div class="video-window">
      <div class="window-header">
        <span class="name">{{videoItem.value}}</span>
        <span class="close" @click="closeVideoWindow">×</span>
      </div>
      <video :src="videoItem.videourl" ref="video" preload="auto" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['videoItem'],
  methods: {
    closeVideoWindow () {
      this.$refs.video.pause();// vue操作DOM
      this.$emit('windowEvent', false);
    }
  }
}
</script>

<style lang="less">
  .window-container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.3);
    .video-window {
      position: absolute;
      width: 880px;
      height: 492px;
      left: calc(50% - 440px);
      top: calc(50% - 231px);
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      overflow: hidden;
      .window-header {
        height: 60px;
        padding: 14px 20px;
        line-height: 32px;
        background-color: #f5f5f5;
        display: flex;
        justify-content: space-between;
        .name {
          font-size: 18px;
          font-weight: 400;
          color: #424242;
        }

        .close {
          vertical-align: middle;
          width: 32px;
          line-height: 32px;
          font-size: 24px;
          font-weight: 400;
          border-radius: 30px;
          color: #757575;
          background-color: #f5f5f5;
          transition: all .2s;
          cursor: pointer;
          &:hover {
            color: #fff;
			      background: #e53935;
          }
        }
      }

      video {
        width: 100%;
        height: 432px;
        background-color: #000;
      }
    }
  }
</style>
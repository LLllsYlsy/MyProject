<template>
  <transition name="window-trans">
    <div class="location-window window-container" v-show="windowFlag">
      <transition name="content-trans">
        <div class="window-content" v-show="contentFlag">
          <div class="window-header">
            <span class="name">Select location or language</span>
            <span class="close" @click="close">×</span>
          </div>
          <div class="window-body">
            <h3>Welcome to Mi.com</h3>
            <p>Please select location or language</p>
            <div></div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import bus from '@/bus.js'

export default {
  data () {
    return {
      windowFlag: false,
      contentFlag: false,
    }
  },
  methods: {
    receive () {
      bus.$on('locationWindowEvent', (flag) => {
        this.windowFlag = true;
        this.contentFlag = true;
      })
    },
    close () {
      this.contentFlag = false;
    }
  },
  watch: {
    contentFlag (newvalue, oldvalue) {
      if (!newvalue) {
        setTimeout(() => {
          this.windowFlag = false;
        }, 300);
      }
    }
  },
  mounted () {
    this.receive();
  }
}
</script>

<style lang="less">
  .location-window .window-content {
    position: absolute;
      width: 840px;
      height: 566px;
      left: calc(50% - 420px);
      top: calc(50% - 283px);
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      overflow: hidden;
      .window-body {
        width: 100%;
        height: calc(100% - 60px);
        background-color: #fff;
        padding: 20px;
      }
  }
</style>
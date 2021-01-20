<template>
  <div class="play-details">
    <!-- 背景 -->
    <div class="bj-box">
      <!-- 图片加载完成后执行loadImage事件 -->
      <img :src="`${imgUrl}?param=128y128`" @load="loadImage" style="display: none;" />
      <img class="bj-img" :src="`${BJ_ImgUrl}?param=128y128`" />
      <img class="before-img" ref="beforeImg" :src="`${BJ_ImgUrl_D}?param=128y128`" />
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="top">
        <v-btn
          fab
          dark
          small
          color="rgba(255,255,255, 0)"
          @click.stop="$emit('close')"
        >
          <v-icon x-large>mdi-chevron-down</v-icon>
        </v-btn>
        <div class="text" :style="{fontSize: 10 + $fontSize() + 'px'}">
          <span class="song-name">歌名</span>
          <span class="singer">歌手</span>
        </div>
        <div>123</div>
      </div>
      <span @click="testSwitch">切换</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "play-details",
  data() {
    return {
      imgUrl: "https://p1.music.126.net/pI-Nf1Y7IIckBEIhGGR8mA==/109951165572687041.jpg",
      BJ_ImgUrl: '',
      BJ_ImgUrl_D: '',
      timer: 0,

      testImgs: [
        'https://p2.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg',
        'https://p2.music.126.net/m3nu__bH_6yEHTT2-VEgqw==/109951165604255385.jpg',
        'http://p1.music.126.net/ob48GYsWClv2FomlqhdntQ==/109951165641875889.jpg'
      ],
      testIndex: 0
    };
  },
  methods: {
    loadImage() {
      if(this.BJ_ImgUrl !== this.imgUrl) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$refs.beforeImg.style = 'opacity: 0;'
          this.BJ_ImgUrl = this.imgUrl
          setTimeout(() => {
            this.BJ_ImgUrl_D = this.imgUrl
            this.$refs.beforeImg.style = ''
          }, 500)
        }, 750)
      }
    },

    testSwitch() {
      if(this.testIndex < this.testImgs.length) {
        this.imgUrl = this.testImgs[this.testIndex++]
      }
      else {
        this.testIndex = 0
        this.imgUrl = "https://p1.music.126.net/pI-Nf1Y7IIckBEIhGGR8mA==/109951165572687041.jpg"
      }
    }
  },
};
</script>

<style lang="scss" scoped>
  .play-details {
    font-size: 10em;
    overflow: hidden;
    height: 100%;
    background-color: #fff;
    position: relative;
    z-index: 1;
    background-size: cover;
    background-position: center;
    transition: background-image 1s;
    .bj-box {
      position: absolute;
      top: -10%;
      right: -10%;
      bottom: -10%;
      left: -10%;
      .bj-img,
      .before-img {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        filter: blur(30px);
      }
      .bj-img {
        z-index: -1;
      }
      .before-img {
        transition: 1s;
        opacity: 1;
        z-index: 0;
      }
    }

    .content {
      font-size: 16px;
      color: #fff;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba($color: #000000, $alpha: 0.6);
      // backdrop-filter: blur(30px);
      .top {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        // align-items: center;
        .text {
          color: #fff;
          display: flex;
          flex-direction: column;
          text-align: center;
          .song-name {
            font-size: 1em;
          }
          .singer {
            font-size: .75em;
          }
        }
      }
    }
  }
</style>

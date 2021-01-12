<template>
  <div
    class="play-details"
    :style="{ backgroundImage: BJ_ImgUrl }"
  >
    <img :src="`${imgUrl}?param=128y128`" @load="loadImage" style="display: none;" />
    <div class="content">
      <div class="top"></div>
      <span @click="$emit('close')">×</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "play-details",
  data() {
    return {
      imgUrl: "https://p1.music.126.net/pI-Nf1Y7IIckBEIhGGR8mA==/109951165572687041.jpg",
      BJ_ImgUrl: ''
    };
  },
  methods: {
    loadImage() {
      this.BJ_ImgUrl = `url(${this.imgUrl}?param=128y128)`
    }
  },
  created() {
    setTimeout(() => {
      this.imgUrl = "https://p2.music.126.net/zr7uprB86pCc6H9HWu2avw==/109951165621877409.jpg";
    }, 3500);
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
  ::v-deep .v-image__image {
    transition: .25s;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.45);
    backdrop-filter: blur(30px);
  }
}
</style>

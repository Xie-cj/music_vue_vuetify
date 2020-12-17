<template>
<div class="home">
  <v-responsive class="banner-box" width="100%" :aspect-ratio="3/1">
    <v-container>
          <v-carousel
            interval="3000"
            height="100%"
            hide-delimiter-background
            show-arrows-on-hover
            delimiter-icon="mdi-minus"
          >
            <v-carousel-item
              
              v-for="(item, index) in banners"
              :key="index"
              :src="item.imageUrl"
              :lazy-src="`${item.imageUrl}?param=300y100`"
              :eager="true"
            ></v-carousel-item>
          </v-carousel>
    </v-container>
  </v-responsive>
</div>
  
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  created() {
    this.getBanner()
  },
  methods: {
    getBanner() {
      this.$api.banner()
        .then(res => {
          this.banners = res.banners
        })
    }
  },
  data: () => ({
    banners: []
  })
}
</script>

<style lang="scss" scoped>
  .home {
    .banner-box {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
</style>

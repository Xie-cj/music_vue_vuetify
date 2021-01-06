<template>
  <v-responsive
    class="banner-box bj05 rounded-lg"
    width="100%"
    :aspect-ratio="27 / 10"
    @touchmove.prevent
  >
    <v-carousel
      cycle
      interval="3000"
      height="100%"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      :show-arrows="$vuetify.breakpoint.name !== 'xs' && Boolean(banners.length)"
      show-arrows-on-hover
    >
      <v-carousel-item
        class="carousel-item"
        v-for="(item, index) in banners"
        :key="index"
        :src="`${item.imageUrl}?param=1080y400`"
        :lazy-src="`${item.imageUrl}?param=270y100`"
        :eager="true"
        @click.stop="bannerClick(item)"
      >
        <v-sheet
          class="badge"
          :style="{
            fontSize: $fontSize() + 'px',
            padding: `${$fontSize() / 4 + 'px'} ${$fontSize() / 2 + 'px'}`,
          }"
          bottom
          inline
          v-if="item.typeTitle"
          :color="item.titleColor || $config.mainColor"
          v-text="item.typeTitle"
        ></v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-responsive>
</template>

<script>
export default {
  name: "Home",
  components: {},
  created() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      this.$api.banner().then((res) => {
        this.banners = res.banners;
        this.$emit("onLoad");
      });
    },
    bannerClick(item) {
      console.log(item);
    },
  },
  data: () => ({
    banners: [],
  })
};
</script>

<style lang="scss" scoped>
.banner-box {
  overflow: hidden;
  .carousel-item {
    position: relative;
    cursor: pointer;
    .badge {
      pointer-events: none;
      position: absolute;
      display: inline-block;
      right: 0;
      bottom: 0;
      padding: 3px 6px;
      border-radius: 9px 0 0 0;
    }
  }
  ::v-deep .v-carousel__controls {
    height: 22px;
    position: absolute;
    width: auto;
    min-width: 200px;
    left: 50% !important;
    transform: translateX(-50%);
    .v-btn--icon.v-size--small {
      width: 20px;
      height: 20px;
    }
    .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
      opacity: 0 !important;
    }
    .v-carousel__controls__item {
      margin: 0;
    }
    .v-item--active.v-btn--active {
      .v-icon {
        opacity: 1;
        font-size: 24px !important;
      }
    }
  }
}
</style>

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
      :show-arrows="$vuetify.breakpoint.name !== 'xs' && Boolean(bannersFilter.length)"
      show-arrows-on-hover
    >
      <v-carousel-item
        class="carousel-item"
        v-for="(item, index) in bannersFilter"
        :key="index"
        :src="`${item.imageUrl}?param=1080y400`"
        :lazy-src="`${item.imageUrl}?param=270y100`"
        :eager="true"
        @click.stop="bannerClick(item)"
      >
        <v-sheet
          class="badge"
          bottom
          inline
          v-if="item.typeTitle"
          :color="$store.state.theme.mainColor"
          v-text="item.typeTitle"
        ></v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-responsive>
</template>

<script>
export default {
  name: "Home",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    bannerClick(item) {
      // targetType: 1 单曲, 10 专辑, 1004 MV
      console.log(
        {
          '1': '单曲',
          '10': '专辑',
          '1004': 'MV'
        }[item.targetType],
        'id:' + item.targetId
      );
    },
  },
  data: () => ({
  }),
  computed: {
    bannersFilter() {
      return this.banners.filter(item => {
        return [1, 10, 1004].includes(item.targetType)
      })
    }
  }
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
      font-size: var(--fontSize);
      padding: calc(var(--fontSize) / 4) calc(var(--fontSize) / 2);
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

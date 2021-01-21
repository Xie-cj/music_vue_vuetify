<template>
  <v-container
    class="package"
    :class="{'no-show': windowSize.y <= 520}"
    :style="{ height: footerHeight }"
  >
    <v-dialog
      eager
      fullscreen
      v-model="show"
      attach="#app"
      transition="slide-y-reverse-transition"
    >
      <PlayDetails @close="closeDetails" />
    </v-dialog>
    <v-footer class="music-footer">
      <div
        v-ripple
        @click.stop="bottomClick()"
        :style="{ height: footerHeight }"
        class="footer-main elevation-6 rounded-t"
      >
        <v-hover v-slot:default="{ hover }">
          <v-responsive
            :style="{ width: footerHeight }"
            :aspect-ratio="1 / 1"
            @click.stop="showDetails()"
          >
            <v-img
              height="100%"
              :src="'https://p2.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg'"
            ></v-img>
            <div
              class="shade"
              :class="hover && $fontSize() > 10 ? 'unfold' : ''"
            >
              <svg
                style="
                  width: 100%;
                  height: 100%;
                  transform: rotate(45deg);
                  opacity: 0.8;
                "
                t="1608568898652"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8396"
                width="128"
                height="128"
              >
                <path
                  d="M554.666667 857.6l98.133333-98.133333 29.866667 29.866666-149.333334 149.333334L384 789.333333l29.866667-29.866666 98.133333 98.133333V597.333333h42.666667v260.266667z m0-691.2V426.666667h-42.666667V166.4L413.866667 264.533333 384 234.666667 533.333333 85.333333 682.666667 234.666667l-29.866667 29.866666L554.666667 166.4z"
                  fill="#dbdbdb"
                  p-id="8397"
                ></path>
              </svg>
            </div>
          </v-responsive>
        </v-hover>
        <div class="content" :style="{ left: footerHeight, width: `calc(100% - ${footerHeight})` }">
          {{windowSize.y}}
        </div>
      </div>
    </v-footer>
  </v-container>
</template>

<script>
import PlayDetails from "./PlayDetails";

export default {
  name: "music-footer",
  props: {
    windowSize: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    PlayDetails,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    bottomClick() {
      if (this.$fontSize() === 10) {
        this.showDetails();
      }
    },
    showDetails() {
      if (this.$fontSize() === 10) {
        setTimeout(() => {
          this.show = true;
          this.pushURL()
        }, this.$store.state.theme.animationTime);
      } else {
        this.show = true;
        this.pushURL()
      }
    },
    closeDetails() {
      this.show = false
      window.removeEventListener('popstate', this.closeDetails, false);
    },
    pushURL() {
      // 向历史记录中插入了当前页
      // history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.closeDetails, false);
    },
  },
  computed: {
    footerHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "48px";
        case "sm":
          return "56px";
        case "md":
          return "64px";
        case "lg":
          return "72px";
        case "xl":
          return "80px";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.package {
  padding: 0;
  width: 100%;
  &.no-show .music-footer{
    bottom: -100%;
  }
  .music-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
    background-color: transparent !important;
    padding: 0 !important;
    transition: .25s .25s;
    .footer-main {
      width: 100%;
      max-width: 1200px;
      background-color: #fff;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      .shade {
        cursor: pointer;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.25s;
        background-color: rgba($color: #000000, $alpha: 0.5);
        opacity: 0;
        &.unfold {
          opacity: 1;
        }
      }
      .content{
        position: absolute;
        height: 100%;
        top: 0;
      }
    }
  }
}
</style>
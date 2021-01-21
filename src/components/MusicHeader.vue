<template>
  <div class="music-header">
    <v-hover open-delay="100" close-delay="200" v-slot="{ hover }">
      <v-app-bar
        app
        dark
        :color="$store.state.theme.mainColor"
        :collapse="!hover && foldHead"
        min-width="180"
      >
        <transition name="scale-transition">
          <v-btn
            style="position: absolute; left: 16px;"
            v-show="hover || !foldHead"
            fab
            dark
            small
            color="rgba(255,255,255,.15)"
            @click.stop="back()"
          >
            <v-icon
              :x-large="$store.state.historyArr.length > 1"
              :dense="$store.state.historyArr.length <= 1"
              transition="scale-transition"
            >
              {{
                $store.state.historyArr.length > 1
                  ? "mdi-chevron-left"
                  : "mdi-home"
              }}
            </v-icon>
          </v-btn>
        </transition>

        <div
          style="width: 100%;"
          class="d-flex justify-center align-center"
        >
          <div
            class="d-flex align-center"
            :style="{cursor: 'pointer'}"
            @click="topClick()"
          >
            <div class="logo-box" :style="{backgroundColor: $store.state.theme.mainColor}">
              <img
                class="logo"
                alt="logo"
                :src="logoImg"
                :width="30 + $fontSize()"
              >
            </div>
            <span class="text-h5">{{ $config.title }}</span>
          </div>
        </div>

        <transition name="scale-transition">
          <v-btn
            style="position: absolute; right: 16px;"
            v-show="(hover || !foldHead) && $route.name !== 'Setting'"
            fab
            dark
            small
            color="rgba(255,255,255,.15)"
            @click.stop="$router.push('/setting')"
          >
            <v-icon
              transition="scale-transition"
            >
              mdi-cog-outline
            </v-icon>
          </v-btn>
        </transition>
      </v-app-bar>
    </v-hover>
  </div>
</template>

<script>
  export default {
    name: "music-header",
    data: () => ({
      logoImg: require("@/assets/logo.png"),
    }),
    methods: {
      back() {
        if (this.$store.state.historyArr.length > 1) {
          this.$router.back();
        } else {
          this.$route.name !== 'Home'
            && (this.$store.commit('setHistoryArr', []), this.$router.replace('/'));
        }
      },
      topClick() {
        if(this.$route.name === 'Home') {
          this.$router.push('/about')
        } else {
          this.$router.push('/')
        }
      }
    },
    computed: {
      foldHead() {
        if (this.$fontSize() === 10) {
          return false;
        } else {
          return true;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
.logo-box {
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1) background-color;
  margin-right: 5px;
  
  .logo {
    transition: .25s;
    vertical-align: middle;
    mix-blend-mode: hard-light;
  }
}
  
</style>
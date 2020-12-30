<template>
  <div class="music-header">
    <v-hover open-delay="100" close-delay="200" v-slot="{ hover }">
      <v-app-bar
        app
        dark
        :color="$config.mainColor"
        :collapse="!hover && foldHead"
        min-width="180"
      >
        <transition name="scale-transition">
          <v-btn
            style="position: absolute"
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
            style="cursor: pointer;"
            class="d-flex align-center"
            @click="$router.push('/about')"
          >
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src="logoImg"
              transition="scale-transition"
              width="40"
            />
            <span class="text-h5">{{ $config.title }}</span>
          </div>
        </div>
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
        this.$route.name !== "Home" &&
          (this.$store.commit("setHistoryArr", []), this.$router.replace("/"));
      }
    },
  },
  computed: {
    foldHead() {
      if (this.$fontSize() <= 12) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

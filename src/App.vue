<template>
  <v-app>
    <v-hover open-delay="100" close-delay="200" v-slot="{ hover }">
      <v-app-bar
        app
        :color="$config.mainColor"
        dark
        :collapse="!hover && foldHead"
        min-width="180"
      >
      <transition name="scale-transition">
        <v-btn
          style="position: absolute;"
          v-show="hover || !foldHead"
          fab
          dark
          small
          color="rgba(255,255,255,.15)"
        >
          <v-icon
            x-large
            transition="scale-transition"
          >
            mdi-chevron-left
          </v-icon>
        </v-btn>
      </transition>
        <div style="width: 100%" class="d-flex justify-center align-center">
          <div class="d-flex align-center">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src="logoImg"
              transition="scale-transition"
              width="40"
            />
            <span class="text-h5">{{$config.title}}</span>
          </div>
        </div>
      </v-app-bar>
    </v-hover>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    logoImg: require('@/assets/logo.png')
  }),
  methods: {
  },
  computed: {
    foldHead () {
      if(this.$fontSize() <= 12) {
        return false
      } else {
        return true
      }
    },
  },
  created() {
    Vue.prototype.$fontSize = () => {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 10
        case 'sm': return 12
        case 'md': return 14
        case 'lg': return 16
        case 'xl': return 18
      }
    }
    Vue.prototype.$fontSize2 = () => {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 16
        case 'sm': return 16
        case 'md': return 18
        case 'lg': return 16
        case 'xl': return 16
      }
    }
  }
};
</script>

<style lang="scss">
.bj05 {
  background-color: rgba(0, 0, 0, .05);
}
</style>

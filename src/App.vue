<template>
  <v-app>
    <v-hover v-slot="{ hover }">
      <v-app-bar
        app
        color="blue darken-1"
        dark
        :collapse="!hover && completeHead"
        min-width="180"
      >
      <transition name="scale-transition">
        <v-btn
          style="position: absolute;"
          v-show="hover || !completeHead"
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
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import config from '@/config'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    logoImg: require('@/assets/logo.png')
  }),
  computed: {
    completeHead () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return false
        case 'md': return true
        case 'lg': return true
        case 'xl': return true
      }
    },
  },
};
</script>

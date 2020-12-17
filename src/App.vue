<template>
  <v-app>
    <v-hover v-slot="{ hover }">
      <v-app-bar
        app
        color="primary"
        dark
        :collapse="!hover"
      >
      <transition name="scale-transition">
        <v-btn
          style="position: absolute;"
          v-if="hover"
          fab
          dark
          small
          color="rgba(255,255,255,.15)"
        >
          <v-icon
            x-large
            v-if="hover"
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
              src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
              transition="scale-transition"
              width="40"
            />
            <span class="text-h5">{{$config.title}}</span>
          </div>
        </div>
      </v-app-bar>
    </v-hover>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import config from '@/config'
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
  }),
};
</script>

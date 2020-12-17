<template>
  <v-app>
    <v-hover v-slot="{ hover }">
      <v-app-bar
        app
        color="primary"
        dark
        :collapse="!hover"
      >
        <div style="width: 100%" class="d-flex justify-space-between align-center">
          <v-btn
            v-if="hover"
            class="mx-2"
            fab
            dark
            small
            color="pink"
          >
            <v-icon dark>
              mdi-heart
            </v-icon>
          </v-btn>
          
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
          <i></i>
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

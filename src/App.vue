<template>
  <v-app>
    <MusicHeader />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <MusicFooter />
  </v-app>
</template>

<script>
import Vue from 'vue'
import MusicHeader from '@/components/MusicHeader'
import MusicFooter from '@/components/MusicFooter'

export default {
  name: 'App',
  components: {
    MusicHeader,
    MusicFooter
  },
  data: () => ({
  }),
  methods: {
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

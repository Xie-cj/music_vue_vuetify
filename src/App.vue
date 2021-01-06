<template>
  <v-app :style="{backgroundColor: $config.bjColor}">
    <v-overlay @touchmove.stop.prevent :value="!loading" z-index="9">
      <v-progress-circular
        :size="70"
        :width="7"
        :color="$config.mainColor"
        indeterminate
      ></v-progress-circular>
    </v-overlay>

    <MusicHeader />
    <v-main>
      <v-container>
        <Search />
        <transition name="scroll-y-transition" mode="out-in">
          <router-view :style="{width: '100%', height: '100%'}"/>
        </transition>
      </v-container>
    </v-main>
    <MusicFooter />
  </v-app>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import Search from  '@/views/Search/Search'
import MusicHeader from '@/components/MusicHeader'
import MusicFooter from '@/components/MusicFooter'

export default {
  name: 'App',
  components: {
    Search,
    MusicHeader,
    MusicFooter
  },
  data: () => ({
  }),
  computed: mapState([
    'loading'
  ]),
  methods: {
    ...mapMutations(['setLoading']),
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


:root {
  &::-webkit-scrollbar {
    width: 0;
  }
}

.bj05 {
  background-color: rgba(0, 0, 0, .05);
}
</style>

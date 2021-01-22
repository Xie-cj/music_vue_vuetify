<template>
  <v-app v-resize="onResize" :style="{backgroundColor: $config.bjColor}">
    <!-- 全局loading -->
    <Loading />
    <!-- 主要内容 -->
    <MusicHeader />
    <v-main>
      <v-container>
        <Search :windowSize="windowSize" />
        <transition name="scroll-y-transition" mode="out-in">
          <router-view :style="{width: '100%', height: '100%'}" />
        </transition>
      </v-container>
    </v-main>
    <MusicFooter :windowSize="windowSize" />
  </v-app>
</template>

<script>
import Vue from 'vue'
import Loading from '@/components/common/Loading'
import Search from  '@/components/Search'
import MusicHeader from '@/components/MusicHeader'
import MusicFooter from '@/components/MusicFooter'

export default {
  name: 'App',
  components: {
    Loading,
    Search,
    MusicHeader,
    MusicFooter
  },
  data: () => ({
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
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
  },
  mounted () {
    this.onResize()
  },
};
</script>

<style lang="scss">
:root {
  ::-webkit-scrollbar {
    width: 0;
  }
}

.bj05 {
  background-color: rgba(0, 0, 0, .05);
}
</style>

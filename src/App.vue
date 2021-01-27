<template>
  <v-app v-resize="onResize" :style="{backgroundColor: $config.bjColor}">
    <!-- 全局loading -->
    <Loading />
    <!-- 全局消息框 -->
    <Message />
    <!-- 顶部 -->
    <MusicHeader />
    <!-- 主要内容 -->
    <v-main>
      <v-container>
        <Search :windowSize="windowSize" />
        <transition name="scroll-y-transition" mode="out-in">
          <router-view :style="{width: '100%', height: '100%'}" />
        </transition>
      </v-container>
    </v-main>
    <!-- 底部 -->
    <MusicFooter :windowSize="windowSize" />
  </v-app>
</template>

<script>
import Vue from 'vue'
import Loading from '@/components/global/Loading'
import Message from '@/components/global/Message'
import Search from  '@/components/global/Search'
import MusicHeader from '@/components/global/MusicHeader'
import MusicFooter from '@/components/global/MusicFooter'

export default {
  name: 'App',
  components: {
    Loading,
    Message,
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

<template>
  <v-app>
    <MusicHeader />
    <v-overlay :value="!loading" z-index="9">
      <v-progress-circular
          :size="70"
          :width="7"
          :color="$config.mainColor"
          indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-main>
      <v-container>
        <transition name="scroll-y-transition" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>

    <MusicFooter />
  </v-app>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import MusicHeader from '@/components/MusicHeader'
import MusicFooter from '@/components/MusicFooter'

import { createSimpleTransition } from 'vuetify/lib/components/transitions/createTransition'

export default {
  name: 'App',
  components: {
    MusicHeader,
    MusicFooter
  },
  data: () => ({
  }),
  computed: mapState([
    'loading'
  ]),
  methods: {
  },
  created() {
    const myTransition = createSimpleTransition('player-transition')
    Vue.component('player-transition', myTransition)

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

    // 监听浏览器返回事件
    if (window.history && window.history.pushState) {
      window.onpopstate = function(e) {
        console.log(e)
      }
    }
  },
  mounted () {
    // 挂载时添加监控返回键
    // if (window.history && window.history.pushState) {
    //   window.addEventListener('popstate', (e) => {console.log(e)}, false);
    // }
  },
  destroyed () {
    // 销毁时删除监控返回键
    // window.removeEventListener('popstate', () => {console.log(1)}, false);
  },
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
.player-transition {
  &-leave-active {
    position: absolute;
  }
  &-enter-active, &-leave, &-leave-to {
    transition: .25s ease-in-out;
  }
  &-enter, &-leave-to {
    transform: translateY(100%);
  }
  &-enter {
    transition: .1s ease-in-out;
  }
}
</style>

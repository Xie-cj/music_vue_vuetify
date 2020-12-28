import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全局加载提示
    loading: false
  },
  mutations: {
    // 设置全局加载提示
    setLoading(state, value) {
      // state.loading = value
      if(!value) {
        state.loading = value
      } else {
        // 加载提示至少保持0.5s
        setTimeout(() => {
          state.loading = value
        }, 500);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

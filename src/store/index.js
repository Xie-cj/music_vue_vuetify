import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全局加载提示
    loading: true,
    // 历史记录长度
    historyLength: parseInt(sessionStorage.getItem('historyLength')) || 1
  },
  mutations: {
    // 设置全局加载提示
    setLoading(state, value) {
      if(!value) {
        state.loading = value
      } else {
        // 加载提示至少保持0.5s
        setTimeout(() => {
          state.loading = value
        }, 500);
      }
    },
    setHistoryLength(state, value) {
      state.historyLength += value
      console.log(value)
      sessionStorage.setItem('historyLength', state.historyLength)
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全局加载提示
    loading: true,
    // 历史记录
    historyArr: sessionStorage.getItem('historyArr') ? sessionStorage.getItem('historyArr').split(',') : []
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
    // 设置历史记录
    setHistoryArr(state, historyArr) {
      state.historyArr = historyArr
      sessionStorage.setItem('historyArr', state.historyArr)
    }
  },
  actions: {
  },
  modules: {
  }
})

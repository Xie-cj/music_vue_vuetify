export default {
  // 设置全局加载提示
  setLoading(state, value) {
    if(!value) {
      state.loading = value
      document.querySelector('html').style.overflow = 'hidden'
    } else {
      // 加载提示至少保持0.5s
      setTimeout(() => {
        state.loading = value
        document.querySelector('html').style.overflow = ''
      }, 500);
    }
  },
  // 设置路由历史记录
  setHistoryArr(state, historyArr) {
    state.historyArr = historyArr
    sessionStorage.setItem('historyArr', state.historyArr)
  }
}
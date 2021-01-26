export default {
  // 设置全局加载提示
  setLoading(state, value) {
    if(value) {
      state.loading = value
      document.querySelector('html').style.overflow = 'hidden'
    } else {
      setTimeout(() => { // 加载提示至少保持0.75s
        state.loading = value
        document.querySelector('html').style.overflow = ''
      }, 750);
    }
  },

  // 设置路由历史记录
  setHistoryArr(state, historyArr) {
    state.historyArr = historyArr
    sessionStorage.setItem('historyArr', state.historyArr)
  },
  
  // 添加搜索历史
  addSearchHistory(state, item) {
    state.searchHistory.includes(item)
      ? (
          state.searchHistory.splice(state.searchHistory.indexOf(item), 1),
          state.searchHistory.splice(0, 0, item)
        )
      : state.searchHistory.unshift(item)
    if(state.searchHistory.length > 10) { // 只保留10个历史
      state.searchHistory.length = 10
    }
    localStorage.setItem('searchHistory', state.searchHistory)
  },
  // 删除搜索历史
  deleteSearchHistory(state, item) {
    item === 'all'
      ? state.searchHistory = []
      : state.searchHistory.splice(state.searchHistory.indexOf(item), 1)
      localStorage.setItem('searchHistory', state.searchHistory)
  },

  // 设置主题色
  setMainColor(state, value) {
    state.theme.mainColor = value
    localStorage.setItem('mainColor', state.theme.mainColor)
  }
}
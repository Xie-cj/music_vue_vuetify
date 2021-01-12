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
  },
  
  // 添加搜索历史
  addSearchHistory(state, item) {
    state.searchHistory.includes(item)
      ? (
          state.searchHistory.splice(state.searchHistory.indexOf(item), 1),
          state.searchHistory.splice(0, 0, item)
        )
      : state.searchHistory.unshift(item)
    // 只保留10个历史
    if(state.searchHistory.length > 10) {
      state.searchHistory.length = 10
    }
    sessionStorage.setItem('searchHistory', state.searchHistory)
  },
  // 删除搜索历史
  deleteSearchHistory(state, item) {
    item === 'all'
      ? state.searchHistory = []
      : state.searchHistory.splice(state.searchHistory.indexOf(item), 1)
    sessionStorage.setItem('searchHistory', state.searchHistory)
  }
}
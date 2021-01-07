export default {
  // 全局加载提示
  loading: true,
  // 路由历史记录
  historyArr: sessionStorage.getItem('historyArr') ? sessionStorage.getItem('historyArr').split(',') : [],
  // 搜索历史
  searchHistory: sessionStorage.getItem('searchHistory') ? sessionStorage.getItem('searchHistory').split(',') : []
}
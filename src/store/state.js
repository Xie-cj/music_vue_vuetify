export default {
  // 全局加载提示
  loading: false,
  // 路由历史记录
  historyArr: sessionStorage.getItem('historyArr') ? sessionStorage.getItem('historyArr').split(',') : []
}
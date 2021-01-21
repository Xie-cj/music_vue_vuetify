export default {
  // 全局加载提示
  loading: false,
  // 路由历史记录
  historyArr: sessionStorage.getItem('historyArr') ? sessionStorage.getItem('historyArr').split(',') : [],
  // 搜索历史
  searchHistory: localStorage.getItem('searchHistory') ? localStorage.getItem('searchHistory').split(',') : [],
  // 主题
  theme: {
    mainColor: localStorage.getItem('mainColor') || '#1e88e5', // 主题色
    bjColor: '#f9f9f9', // 页面背景色
    animationTime: 250, // 动画时间
  }
}
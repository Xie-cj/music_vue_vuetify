import { get } from '@/plugins/axios'

// 首页
const Home = {
  banner: (p, showLoading) => get('/banner', p, showLoading), // 轮播图
  personalized: (p, showLoading) => get('/personalized', p, showLoading), // 推荐歌单
  popularSinger: (p, showLoading) => get('/top/artists', p, showLoading), // 热门歌手
}

// 歌曲/专辑/歌单
const Song = {
  playlist: (p, showLoading) => get('/playlist/detail', p, showLoading), // 歌单详情
  album: (p, showLoading) => get('/album', p, showLoading), // 专辑
}

// 搜索
const Search = {
  searchDefault: (p, showLoading) => get('/search/default', p, showLoading), // 默认搜索关键词
  searchHot: (p, showLoading) => get('/search/hot/detail', p, showLoading), // 热门搜索
}

export default {
  ...Home,
  ...Song,
  ...Search
}

import { get } from '@/plugins/axios'

// 首页
const Home = {
  banner: p => get('/banner'), // 轮播图
  personalized: p => get('/personalized', p), // 推荐歌单
  popularSinger: p => get('/top/artists', p), // 热门歌手
}

// 搜索
const Search = {
  searchDefault: p => get('/search/default'), // 默认搜索关键词
}

export default {
  ...Home,
  ...Search
}

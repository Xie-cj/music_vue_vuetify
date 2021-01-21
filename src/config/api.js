import { get } from '@/plugins/axios'

// 首页
const Home = {
  banner: () => get('/banner'), // 轮播图
  personalized: p => get('/personalized', p), // 推荐歌单
  popularSinger: p => get('/top/artists', p), // 热门歌手
}

// 歌曲/专辑/歌单
const Song = {
  playlist: p => get('/playlist/detail', p), // 歌单详情
  album: p => get('/album', p), // 专辑
}

// 搜索
const Search = {
  searchDefault: () => get('/search/default'), // 默认搜索关键词
  searchHot: () => get('/search/hot/detail'), // 热门搜索
}

export default {
  ...Home,
  ...Song,
  ...Search
}

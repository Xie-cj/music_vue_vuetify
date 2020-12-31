import { get } from '@/plugins/axios'

export default {
  banner: p => get('/banner'), // 轮播图
  personalized: p => get('/personalized', p), // 推荐歌单
  popularSinger: p => get('/top/artists', p), // 热门歌手
}

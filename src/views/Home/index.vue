<template>
  <div class="home">
    <Carousel :banners="banners" class="carousel" />
    <RecommPlayList :listData="recommPlayList" class="recomm" />
    <ArtistsList title="热门歌手" :listData="popularSinger" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import Carousel from './components/Carousel'
import RecommPlayList from './components/RecommPlayList'
import ArtistsList from '@/components/ArtistsList'

export default {
  name: 'Home',
  components: {
    Carousel,
    RecommPlayList,
    ArtistsList
  },
  data: () => ({
    banners: [],
    popularSinger: undefined,
    recommPlayList: undefined,
  }),
  methods: {
    ...mapMutations(['setLoading']),
    getData() {
      this.setLoading(true)
      Promise.all([
        this.$api.banner(),
        this.$api.personalized({ limit: 6 }),
        this.$api.popularSinger({ limit: 6 })
      ]).then(resArr => {
        this.banners = resArr[0].banners
        this.recommPlayList = resArr[1].result
        this.popularSinger = resArr[2].artists
      }).catch(() => {
        this.$message(`获取首页数据失败，请稍后重试`, 'error', 6000)
      }).finally(() => {
        this.setLoading(false)
      })
    },
  },
  created() {
    this.getData()
  }
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
</style>

<template>
  <div class="home">
    <Search />
    <Carousel @onLoad="carouselOnLoad" class="carousel" />
    <RecommPlayList @onLoad="RecommPlayListOnLoad" class="recomm" />
    <SingerList title="热门歌手" :listData="popularSinger" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Search from  '@/components/Search'
import Carousel from './Carousel'
import RecommPlayList from './RecommPlayList'
import SingerList from '@/components/SingerList'

export default {
  name: 'Home',
  components: {
    Search,
    Carousel,
    RecommPlayList,
    SingerList
  },
  data: () => ({
    popularSinger: [],
    onLoad: {
      carouse: false,
      RecommPlayList: false,
      popularSinger: false
    },
  }),
  watch: {
    onLoad: {
      handler(val) {
        let isLoading = true;
        if (Object.values(val).includes(false)) {
          isLoading = false;
        }
        this.setLoading(isLoading);
      },
      deep: true,
    },
  },
  methods: {
    ...mapMutations(['setLoading']),
    carouselOnLoad() {
      this.onLoad.carouse = true;
    },
    RecommPlayListOnLoad() {
      this.onLoad.RecommPlayList = true;
    },
    // 获取热门歌手
    getPopularSinger() {
      this.$api.popularSinger({ limit: 6 }).then((res) => {
        this.popularSinger = res.artists;
        this.onLoad.popularSinger = true
      });
    }
  },
  created() {
    this.getPopularSinger()
  }
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
</style>

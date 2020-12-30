<template>
  <div class="home">
    <Carousel @onLoad="carouselOnLoad" class="carousel" />
    <RecommPlayList @onLoad="RecommPlayListOnLoad" class="recomm" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Carousel from "./Carousel";
import RecommPlayList from "./RecommPlayList";

export default {
  name: "Home",
  components: {
    Carousel,
    RecommPlayList,
  },
  data: () => ({
    onLoad: {
      carouse: false,
      RecommPlayList: false,
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
    ...mapMutations(["setLoading"]),
    carouselOnLoad() {
      this.onLoad.carouse = true;
    },
    RecommPlayListOnLoad() {
      this.onLoad.RecommPlayList = true;
    },
  },
  created() {
    this.setLoading(false);
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
</style>

<template>
    <div class="home">
        <v-overlay :value="!loading">
            <v-progress-circular
                :size="70"
                :width="7"
                :color="$config.mainColor"
                indeterminate
            ></v-progress-circular>
        </v-overlay>
        <Carousel @onLoad="carouselOnLoad" class="carousel"/>
        <RecommPlayList @onLoad="RecommPlayListOnLoad" class="recomm" />
    </div>
</template>

<script>
import Carousel from './Carousel'
import RecommPlayList from './RecommPlayList'

export default {
    name: 'Home',
    components: {
        Carousel,
        RecommPlayList
    },
    data: () => ({
        onLoad: {
            carouse: false,
            RecommPlayList: false
        }
    }),
    computed: {
        loading() {
            let isLoading = true
            if(Object.values(this.onLoad).includes(false)) {
                isLoading = false
            }
            return isLoading
        }
    },
    methods: {
        carouselOnLoad() {
            this.onLoad.carouse = true
        },
        RecommPlayListOnLoad() {
            this.onLoad.RecommPlayList = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .home {
        max-width: 1400px;
        margin: 0 auto;
    }
</style>

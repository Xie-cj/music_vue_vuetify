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
        <RecommPlaylist class="recomm" />
    </div>
</template>

<script>
import Carousel from './Carousel'
import RecommPlaylist from './RecommPlaylist'

export default {
    name: 'Home',
    components: {
        Carousel,
        RecommPlaylist
    },
    data: () => ({
        onLoad: {
            carouse: false
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .home {
        .carousel,
        .recomm {
            max-width: 1400px;
            margin: 0 auto;
        }
    }
</style>

<template>
    <div class="home">
        <v-container>
            <Carousel class="carousel" :banners="banners"/>
        </v-container>
    </div>
</template>

<script>
import Carousel from './Carousel'

export default {
    name: 'Home',
    components: {
        Carousel
    },
    created() {
        this.getBanner()
    },
    methods: {
        getBanner() {
            this.$api.banner().then(res => {
                this.banners = res.banners
            })
        }
    },
    data: () => ({
        banners: []
    })
}
</script>

<style lang="scss" scoped>
    .home {
        .carousel {
            max-width: 1200px;
            margin: 0 auto;
        }
    }
</style>

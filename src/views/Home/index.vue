<template>
    <div class="home">
        <Carousel class="carousel"/>
    </div>
</template>

<script>
import Carousel from './Carousel'

export default {
    name: 'Home',
    components: {
        Carousel
    },
    data: () => ({
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

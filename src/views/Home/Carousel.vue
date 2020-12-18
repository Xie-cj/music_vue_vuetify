<template>
    <v-responsive class="banner-box rounded-lg" width="100%" :aspect-ratio="27/10">
        <v-carousel
            interval="3000"
            height="100%"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            :show-arrows="$vuetify.breakpoint.name !== 'xs'"
        >
            <v-carousel-item
                @touchmove.prevent
                class="carousel-item"
                v-for="(item, index) in banners"
                :key="index"
                :src="`${item.imageUrl}?param=1080y400`"
                :lazy-src="`${item.imageUrl}?param=270y100`"
                :eager="true"
            ></v-carousel-item>
        </v-carousel>
    </v-responsive>
</template>

<script>
export default {
    name: 'Home',
    props: {
        banners: {
            type: Array,
            default: []
        }
    },
    components: {
    },
    methods: {
    },
    data: () => ({
    })
}
</script>

<style lang="scss" scoped>
.banner-box {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .carousel-item {
        position: relative;
    }
    ::v-deep .v-carousel__controls {
        height: 22px;
        .v-btn--icon.v-size--small {
            width: 20px;
            height: 20px;
        }
        .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
            opacity: 0 !important;
        }
        .v-carousel__controls__item {
            margin: 0;
        }
        .v-item--active.v-btn--active {
            .v-icon {
                opacity: 1;
            }
        }
    }
}
</style>

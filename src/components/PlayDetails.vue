<template>
    <div class="play-details">
        <v-img
            class="bj"
            :src="imgUrl"
            :lazy-src="imgUrl + '?param=128y128'"
            transition="fade-transition"
        ></v-img>
        <div class="content">
            <span @click="$emit('close')">×</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'play-details',
    data() {
        return {
            imgUrl: 'https://p1.music.126.net/pI-Nf1Y7IIckBEIhGGR8mA==/109951165572687041.jpg'
        }
    },
    created() {
        setTimeout(() => {
            this.imgUrl = 'https://p2.music.126.net/rPrQVPau1RukWWU4u1UYqA==/109951165559573991.jpg'
        }, 3500)
    }
}
</script>

<style lang="scss" scoped>
    .play-details {
        font-size: 10em;
        overflow: hidden;
        height: 100%;
        background-color: #fff;
        position: relative;
        z-index: 1;
        background-size: cover;
        background-position: center;
        .bj {
            transform: scale(1.2);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            filter: blur(30px);
        }
        .content {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba($color: #000000, $alpha: .6);
            backdrop-filter: blur(30px);
        }
    }
</style>

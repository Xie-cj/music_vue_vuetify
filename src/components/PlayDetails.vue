<template>
    <div class="play-details">
        <span @click="$emit('close')">×</span>
        <v-img
            class="bj"
            :src="imgUrl"
        ></v-img>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'play-details',
    data() {
        return {
            imgUrl: ''
        }
    },
    created() {
        setTimeout(() => {
            this.imgUrl = 'https://p2.music.126.net/lrgv2NsmAyoXkH7Gen3MBw==/109951165222113252.jpg'
        }, 200)
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
    }
</style>

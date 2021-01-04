<template>
  <v-hover v-slot:default="{ hover }">
    <div class="list-item">
      <v-responsive
        v-ripple
        :class="{'hover elevation-8': hover || $fontSize() <= 10, 'large-size': $fontSize() > 10}"
        class="transition rounded-circle bj05"
        :aspect-ratio="1 / 1"
      >
        <div class="img-box">
          <v-img
            width="100%"
            height="100%"
            :src="item.picUrl"
            :lazy-src="`${item.picUrl}?param=27y27`"
          ></v-img>
        </div>
      </v-responsive>
      <p :style="{ fontSize: $fontSize2() * 1.25 + 'px' }" class="name">{{item.name}}</p>
    </div>
  </v-hover>
</template>

<script>
  export default {
  name: '',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  methods: {},
  };
</script>

<style scoped lang="scss">
  .list-item {
    & > * {
      transition: 0.25s;
    }
    .img-box {
      width: 100%;
      height: 100%;
    }
    .large-size.hover {
      transform: scale(1.05);
    }
  }
  .name {
    margin: 10px 0 0 0;
    text-align: center;
    cursor: pointer;
  }
</style>
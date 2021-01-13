<template>
  <div class="setting">
    Setting
    <div class="theme-box">
      <h1>主题色</h1>
      <i
        class="theme-item"
        v-for="(item, index) in colors"
        :key="index"
        :style="{backgroundColor: item}"
        @click.stop="setMainColor(item)"
      ></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'setting',
    data() {
      return {
        colors: [
          '#1e88e5',
          '#F44336',
          '#E91E63',
          '#9C27B0',
          '#009688'
        ]
      };
    },
    methods: {
      setMainColor(value) {
        this.$theme.mainColor = value
        console.log(this.$theme.mainColor)
      }
    },
  };
</script>

<style scoped lang="scss">
  .setting {
    .theme-box {
      .theme-item {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin: 0 3px 3px 0;
      }
    }
  }
</style>
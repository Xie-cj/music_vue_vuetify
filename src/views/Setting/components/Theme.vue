<template>
  <div class="theme-box">
    <h1 style="margin-bottom: 10px">主题色</h1>
    <span class="title">默认：</span>
    <i
      class="theme-item"
      :style="{backgroundColor: '#1e88e5'}"
      @click.stop="setMainColor('#1e88e5')"
    ></i>
    <br />
    <span class="title">自定义颜色：</span>
    <div v-click-outside="onClickOutside" style="display: inline-block;">
      <i
        class="theme-item"
        :style="{backgroundColor: $store.state.theme.mainColor}"
        @click="show = !show"
      ></i>
      <transition name="slide-y-transition">
        <v-color-picker
          v-show="show"
          class="pick-color"
          mode="hexa"
          width="350"
          v-model="inputColor"
          show-swatches
          :swatches="colors"
          @input="setMainColor(inputColor)"
        ></v-color-picker>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'theme-box',
    data() {
      return {
        show: false,
        inputColor: this.$store.state.theme.mainColor,
        colors: [
          ['#F44336', '#E91E63', '#9C27B0'],
          ['#673AB7', '#3F51B5', '#2196F3'],
          ['#00ACC1', '#009688', '#4CAF50'],
          ['#8BC34A', '#C0CA33', '#FFB300'],
          ['#FF9800', '#FF5722', '#795548'],
          ['#607D8B', '#9E9E9E', '#333333']
        ]
      };
    },
    methods: {
      setMainColor(value) {
        this.$store.commit('setMainColor', value)
      },
      onClickOutside() {
        this.show = false
      }
    },
    computed: {
      selectMainColor() {
        return this.$store.state.theme.mainColor
      }
    },
    watch: {
      selectMainColor(value) {
        this.inputColor = value
      }
    }
  };
</script>

<style scoped lang="scss">
  .theme-box {
    .title {
      display: block;
    }
    .theme-item {
      display: inline-block;
      width: 40px;
      height: 40px;
      cursor: pointer;
      margin: 0 3px 3px 0;
    }
  }
</style>
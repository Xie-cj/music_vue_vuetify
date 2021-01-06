<template>
  <div class="search-expand rounded-lg elevation-6">
    <div style="text-align: right;">
      <v-icon
        right
        @click.stop="$emit('close')"
      >mdi-apple-keyboard-control</v-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-expand',
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped lang="scss">
  .search-expand {
    background-color: #fff;
    padding: 8px;
  }
</style>
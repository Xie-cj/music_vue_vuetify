<template>
  <div class="paly-list">
    paly-list
  </div>
</template>

<script>
  export default {
    name: 'palyList',
    props: {
      palyList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped lang="scss">
  .paly-list {
  }
</style>
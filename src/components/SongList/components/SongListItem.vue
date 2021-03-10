<template>
  <li class="song-list-item">
    <slot name="index"/>
    {{songListItem.name}}
  </li>
</template>

<script>
  export default {
    name: 'songListItem',
    props: {
      songListItem: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped lang="scss">
  .song-list-item {
    position: relative;
  }
</style>
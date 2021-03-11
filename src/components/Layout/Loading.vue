<template>
  <v-overlay :value="$store.state.loading" z-index="9">
    <v-progress-circular
      :size="70"
      :width="7"
      :color="$store.state.theme.mainColor"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
  export default {
    name: 'loading',
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped lang="scss">
  .loading {
  }
</style>
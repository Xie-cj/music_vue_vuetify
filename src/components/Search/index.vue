<template>
  <div class="search-box" :class="{'large-size': $fontSize() > 12}">
    <v-text-field
      class="search"
      label="Search"
      v-model="keyword"
      outlined
      dense
      clearable
      append-icon="mdi-magnify"
      @click:append="search"
    >
    </v-text-field>
  </div>
</template>

<script>
  export default {
  name: 'search',
  data() {
    return {
      keyword: ''
    };
  },
  methods: {
    search() {
      console.log(this.keyword)
    }
  },
  };
</script>

<style scoped lang="scss">
  .search-box {
    position: relative;
    ::v-deep .v-text-field {
      padding: 0;
      margin: 0;
    }
    &.large-size {
      position: absolute;
      z-index: 999;
      top: -50px;
      right: 13px;
      width: 300px;
    }
  }
</style>
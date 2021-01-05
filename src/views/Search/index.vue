<template>
  <div class="search-page">
    {{keyword}}
  </div>
</template>

<script>
  export default {
    name: 'search-page',
    data() {
      return {};
    },
    computed: {
      keyword() {
        return this.$route.query.keyword
      }
    },
    methods: {},
    created() {
      this.$noHttp()
    }
  };
</script>

<style scoped lang="scss">
  .search-page {
  }
</style>
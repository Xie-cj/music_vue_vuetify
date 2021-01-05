<template>
  <div class="search-box" :class="{'large-size': $fontSize() > 12}">
    <v-text-field
      ref="searchInput"
      class="search"
      append-icon="mdi-magnify"
      rounded
      dense
      clearable
      solo
      :label="defaultKeyword.showKeyword"
      :color="$config.mainColor"
      v-model="keyword"
      @click:append="search"
      @keyup.enter="search"
      @focus="focus"
    >
    </v-text-field>
  </div>
</template>

<script>
  export default {
    name: 'search',
    data: () => ({
      keyword: '', // // 搜索关键词
      defaultKeyword: {}, // 默认关键词
    }),
    methods: {
      // 搜索
      search() {
        this.$router.replace({
          name: 'Search',
          query: {
            keyword: this.keyword || this.defaultKeyword.realkeyword
          }
        })
        this.$refs.searchInput.blur()
      },
      // 获取焦点时
      focus() {
        if(this.$route.name !== 'Search') {
          this.$router.push({
            name: 'Search',
            query: {
              keyword: this.keyword || undefined
            }
          })
        }
      }
    },
    created() {
      this.$api.searchDefault().then(res => {
        this.defaultKeyword = res.data
      })
    }
  };
</script>

<style scoped lang="scss">
  .search-box {
    position: relative;
    ::v-deep .v-text-field {
      padding: 0;
      margin: 0 0 8px 0;
      .v-text-field__details {
        display: none;
      }
    }
    ::v-deep .v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
      transform: rotate(0) !important;
    }
    &.large-size {
      position: absolute;
      top: -50px;
      right: 13px;
      width: 300px;
    }
  }
</style>
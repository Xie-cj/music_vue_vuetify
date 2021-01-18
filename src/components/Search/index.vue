<template>
  <div
    class="search-box"
    :style="{top: `-${$fontSize() !== 10 ? $fontSize() > 12 ? '50' : '42' : '0'}px`}"
    :class="{'large-size': $fontSize() > 10, active}"
    v-click-outside="onClickOutside"
  >
    <v-text-field
      rounded
      dense
      solo
      clearable
      autocomplete="off"
      ref="searchInput"
      class="search"
      append-icon="mdi-magnify"
      v-model="keyword"
      :label="defaultKeyword.showKeyword"
      :color="$store.state.theme.mainColor"
      @click:append="search"
      @keyup.enter="search"
      @focus="focus"
    >
    </v-text-field>
    <transition name="slide-y-transition">
      <SearchExpand
        class="expand"
        :style="{maxHeight: (windowSize.y - 120) + 'px'}"
        v-show="showExpand"
        @close="onClickOutside"
        @search="searchHistoryClick"
        @getFocus="getFocus"
      />
    </transition>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import SearchExpand from './SearchExpand'

  export default {
    name: 'search',
    props: {
      windowSize: {
        type: Object,
        default: () => {}
      }
    },
    components: {
      SearchExpand
    },
    data: () => ({
      keyword: '', // // 搜索关键词
      defaultKeyword: {}, // 默认关键词
      active: false, // 焦点是否在组件内
      showExpand: false, // 是否显示搜索拓展
    }),
    methods: {
      ...mapMutations([
        'addSearchHistory'
      ]),
      searchHistoryClick(keyword) {
        this.keyword = keyword
        this.search()
      },
      // 搜索
      search() {
        let toParam = {
          name: 'Search',
          query: {
            keyword: this.keyword || this.defaultKeyword.realkeyword
          }
        }
        this.$route.name === 'Search'
          ? this.$router.replace(toParam)
          : this.$router.push(toParam)
        this.$refs.searchInput.blur()
        this.onClickOutside()
        setTimeout(() => {
          this.addSearchHistory(toParam.query.keyword)
        }, this.$store.state.theme.animationTime)
      },
      // 获取焦点
      focus() {
        this.active = true
        this.$fontSize() === 10
          ? this.showExpand = true
          : setTimeout(() => {
            this.showExpand = true
          }, this.$store.state.theme.animationTime)
      },
      // 点击组件外的元素（失去焦点）
      onClickOutside() {
        this.showExpand = false
        this.$fontSize() === 10
          ? this.active = false
          : setTimeout(() => {
              this.active = false
            }, this.$store.state.theme.animationTime)
      },
      getFocus() {
        setTimeout(() => {
          this.$refs.searchInput.focus()
        }, this.$store.state.theme.animationTime + 25)
      }
    },
    created() {
      this.$api.searchDefault().then(res => {
        this.defaultKeyword = res.data
      })
    },
  };
</script>

<style scoped lang="scss">
  .search-box {
    position: relative;
    transition: .25s;
    ::v-deep .v-text-field {
      padding: 0 0 8px 0;
      margin: 0;
      .v-text-field__details {
        display: none;
      }
    }
    ::v-deep .v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
      transform: rotate(0) !important;
    }
    &.large-size {
      position: absolute;
      right: 13px;
      width: 220px;
      &.active {
        width: 300px;
      }
    }

    .expand {
      position: absolute;
      z-index: 2;
      top: calc(100% - 8px);
      width: 100%;
      height: 350px;
    }
  }
</style>
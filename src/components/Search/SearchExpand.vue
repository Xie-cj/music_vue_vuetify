<template>
  <div class="search-expand rounded-lg elevation-6">
    <v-icon
      right
      class="close-icon"
      @click.stop="$emit('close')"
    >mdi-chevron-up</v-icon>
    <!-- 搜索历史 -->
    <div class="search-history" v-show="searchHistory.length">
      <p class="title">搜索历史 <v-icon @click="clickDeleteAll">mdi-delete</v-icon></p>
      <div class="search-history-box">
        <v-hover
          v-for="item in searchHistory"
          :key="item"
          v-slot:default="{ hover }"
        >
          <div
            :class="{bj05: hover}"
            class="search-history-item rounded-pill"
            @click.stop="$emit('search', item)"
          >
            {{item}}
            <v-icon
              dense
              style="margin-left: 5px"
              @click.stop="deleteSearchHistory(item)"
            >mdi-close</v-icon>
          </div>
        </v-hover>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="hot-search">
      <p class="title">热门搜索</p>
      <p v-if="!hotList.length" style="text-align: center">
        <v-progress-circular
          :size="30"
          :width="4"
          :color="$config.mainColor"
          indeterminate
        ></v-progress-circular>
      </p>
      <ul v-else class="hot-search-box">
        <li
          class="hot-search-item"
          v-for="(item, index) in hotList"
          :key="item.searchWord"
          :class="{'top-three': index < 3}"
          @click.stop="$emit('search', item.searchWord)"
        >
          <span class="index">{{index + 1}}</span>
          {{item.searchWord}}
          <img class="icon" v-if="item.iconUrl" :src="item.iconUrl">
        </li>
      </ul>
    </div>
    <!-- 弹出框 -->
    <v-dialog
      v-model="dialog"
      max-width="290"
      :retain-focus="false"
    >
      <v-card>
        <v-card-title>确定删除历史记录?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            取消
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="deleteAll()"
          >
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'search-expand',
    data() {
      return {
        dialog: false,
        hotList: []
      };
    },
    computed: {
      ...mapState([
        'searchHistory'
      ])
    },
    methods: {
      ...mapMutations([
        'deleteSearchHistory'
      ]),
      clickDeleteAll() {
        this.$emit('close')
        this.dialog = true
      },
      deleteAll() {
        this.deleteSearchHistory('all')
        this.$emit('getFocus')
        this.dialog = false
      }
    },
    created() {
      this.$api.searchHot().then(res => {
        this.hotList = res.data
      })
    },
  };
</script>

<style scoped lang="scss">
  .search-expand {
    position: relative;
    background-color: #fff;
    padding: 8px;
    overflow: auto;
    .close-icon {
      position: absolute;
      top: 8px;
      right: 8px;
    }
    .title {
      font-size: 1.2em !important;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .search-history {
      .search-history-box {
        display: flex;
        flex-wrap: wrap;
        .search-history-item {
          font-size: .85em;
          cursor: pointer;
          display: flex;
          align-items: center;
          border: 1px solid #cdcdcd;
          padding: 2px .6em 2px 1em;
          margin: 0 5px 5px 0;
          transition: .25s;
        }
      }
    }
    .hot-search {
      margin-top: 5px;
      .title {
        margin: 0;
      }
      .hot-search-box {
        list-style: none;
        padding: 0;
        .hot-search-item {
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 5px 0 5px 25px;
          position: relative;
          transition: .25s;
          &:hover {
            background-color: #f5f5f5;
          }
          &.top-three {
            font-weight: bold;
            .index {
              color: red;
            }
          }
          .index {
            position: absolute;
            left: 0;
            margin-right: 10px;
          }
          .icon {
            margin-left: 5px;
            height: 15px;
          }
        }
      }
    }
  }
</style>
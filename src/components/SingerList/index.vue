<template>
  <div
    :style="{ marginTop: $fontSize() * 0.5 + 'px', fontSize: $fontSize() * 2 + 'px' }"
    class="popular-singer"
  >
    <h2 v-if="listData.length" style="font-size: 1em">{{ title }}</h2>
    <v-row class="list-box">
      <v-col
        class="list-item-container"
        v-for="item in listData"
        :key="item.id"
        @click="itemClick(item)"
        cols="6"
        lg="2"
        md="4"
        sm="4"
        xs="6"
      >
        <v-card outlined tile>
          <SingerListItem :item="item" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import SingerListItem from './SingerListItem'

  export default {
    name: 'popular-singer',
    components: {
      SingerListItem
    },
    props: {
      title: {
        type: String,
        default: '歌手列表'
      },
      listData: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {};
    },
    methods: {
      itemClick(item) {
        console.log(item)
      }
    },
  };
</script>

<style scoped lang="scss">
  .popular-singer {
    .list-box {
      .list-item-container {
        cursor: pointer;
        ::v-deep .theme--light.v-sheet--outlined {
          border: none !important;
        }
        ::v-deep .theme--light.v-card {
          background-color: transparent !important;
        }
      }
    }
  }
</style>
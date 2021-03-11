<template>
  <div
    :style="{ marginTop: $fontSize() * 0.5 + 'px', fontSize: $fontSize() * 2 + 'px' }"
    class="artists-list"
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
          <ArtistsListItem :item="item" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import ArtistsListItem from './components/ArtistsListItem'

  export default {
    name: 'artists',
    components: {
      ArtistsListItem
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
        this.$router.push({
          name: 'Artists',
          params: { id: item.id }
        })
      }
    },
  };
</script>

<style scoped lang="scss">
  .artists-list {
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
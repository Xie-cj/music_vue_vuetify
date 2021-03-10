<template>
  <div class="song-list">
    <ul class="song-list-ul" :style="{fontSize: $fontSize() / 3 + 8 + 'px'}">
      <li class="song-list-ul-li"
        v-ripple="$fontSize() < 12 ? true : false"
        v-for="(item, index) in songList"
        :key="item.id"
        :songListItem="item"
      >
        <span class="index">{{(index + 1) | add0}}</span>
        <div class="song-info">
          <span class="name">{{item.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import SongListItem from './components/SongListItem'

  export default {
    name: 'songList',
    components: {
      SongListItem
    },
    props: {
      songList: {
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
  .song-list {
    &-ul {
      list-style: none;
      padding-left: 0;
      &-li {
        height: 3em;
        font-size: 1.2em;
        display: flex;
        border: 1px solid #f1f1f1;
        border-bottom: none;
        background-color: #fdfdfd;
        &:last-child {
          border-bottom: 1px solid #f1f1f1;
        }
        .index {
          font-size: 1em;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #999;
          width: 40px;
          height: 100%;
        }
        .song-info {
          width: calc(100% - 40px);
          padding: 5px 0;
          .name {

          }
        }
      }
    }
  }
</style>
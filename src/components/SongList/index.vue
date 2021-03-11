<template>
  <div class="song-list">
    <ul v-if="songList.length" class="song-list-ul" :style="{fontSize: $fontSize() / 3 + 8 + 'px'}">
      <li class="song-list-ul-li"
        v-ripple="$fontSize() < 12 ? true : false"
        v-for="(item, index) in songList"
        :key="item.id"
        :songListItem="item"
      >
        <span class="index">
          <v-icon v-if="index === 0" :color="$store.state.theme.mainColor" :style="{fontSize: $fontSize() + 18 + 'px'}">mdi-volume-low</v-icon>
          <template v-else>
            {{(index + 1) | add0}}
          </template>
        </span>
        <div class="song-info">
          <div class="name" :class="index === 0 ? 'active' : ''">{{item.name}}</div>
          <div class="artists" @click.stop>
            <span
              class="artists-item"
              v-for="artists in item.ar"
              :key="artists.id"
            >
              <span class="artists-item-name" @click.stop="goArtists(artists)">{{artists.name}}</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
    <div class="loading" v-else-if="!$store.state.loading">
      <v-progress-circular
        :size="30"
        :width="3"
        :color="$store.state.theme.mainColor"
        indeterminate
      ></v-progress-circular>
    </div>    
  </div>
</template>

<script>
  export default {
    name: 'songList',
    props: {
      songList: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {};
    },
    methods: {
      goArtists(artists) {
        if (this.$fontSize() < 12) {
          return
        }
        this.$router.push({
          name: 'Artists',
          params: { id: artists.id }
        })
      }
    },
  };
</script>

<style scoped lang="scss">
  @import '@/assets/style/mixins.scss';

  .song-list {
    &-ul {
      list-style: none;
      padding-left: 0;
      &-li {
        height: calc(3em + 10px);
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
          padding: .4em 0;
          width: 70%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .name {
            display: inline-block;
            width: 100%;
            @include ellipsisBasic(1);
            &.active {
              color: var(--mainColor);
              font-weight: bold;
            }
          }
          .artists {
            width: 100%;
            @include ellipsisBasic(1);
            &-item {
              display: inline-block;
              font-size: .8em;
              &:last-child {
                &::after {
                  content: '';
                  margin: 0;
                }
              }
              &::after {
                content: '/';
                margin: 0 5px;
              }
              &-name {
                color: #999;
                text-decoration: none;
                cursor: pointer;
                &:hover {
                  color: #333;
                }
              }
            }
          }
        }
      }
    }
    .loading {
      text-align: center;
      padding: 20px;
    }
  }
</style>
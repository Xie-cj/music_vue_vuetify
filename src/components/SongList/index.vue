<template>
  <div class="song-list">
    <ul v-if="songList.length" class="song-list-ul" :style="{fontSize: $fontSize() / 3 + 8 + 'px'}">
      <v-hover
          v-slot:default="{ hover }"
          v-for="(item, index) in songList"
          :key="item.id" >
        <li
          class="song-list-ul-li"
          :class="(hover && $fontSize() >= 12) ? 'hover' : ''"
          @click="songClick(item)"
        >
          <div class="text" v-ripple="$fontSize() < 12 ? true : false">
            <span class="index">
              <v-icon v-if="item.id === selcetId" :color="$store.state.theme.mainColor" :style="{fontSize: $fontSize() + 18 + 'px'}">mdi-volume-low</v-icon>
              <template v-else>
                {{(index + 1) | add0}}
              </template>
            </span>
            <div class="song-info">
              <div class="name" :class="item.id === selcetId ? 'active' : ''">{{item.name}}</div>
              <div class="artists">
                <span
                  class="artists-item"
                  v-for="artists in item.ar"
                  :key="artists.id"
                >
                  <span
                    class="artists-item-name"
                    :class="$fontSize() >= 12 ? 'active' : ''"
                    @click="goArtists(artists)"
                  >{{artists.name}}</span>
                </span>
              </div>
            </div>
          </div>
          <div class="function">
            <div class="large" v-show="$fontSize() > 10">
              <span
                class="album"
                :class="$fontSize() >= 12 ? 'active' : ''"
              >{{item.al.name}}</span>
              <span class="duration">{{item.dt | msToMin}}</span>
            </div>
            <div class="small" v-show="$fontSize() <= 10" @click.stop>
              <div class="icon-box" v-ripple>
                <v-icon>mdi-dots-vertical</v-icon>
              </div>
            </div>
          </div>
        </li>
      </v-hover>
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
      return {
        selcetId: 0
      };
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
      },
      songClick(item) {
        this.selcetId = item.id
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
        border: 1px solid #f1f1f1;
        border-bottom: none;
        background-color: #fdfdfd;
        transition: .25s;
        position: relative;
        cursor: pointer;
        &.hover {
          background-color: #f5f5f5;
        }
        &:last-child {
          border-bottom: 1px solid #f1f1f1;
        }
        .text {
          display: flex;
          width: 100%;
          .index {
            font-size: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999;
            width: 40px;
          }
          .song-info {
            padding: .4em 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .name {
              display: inline-block;
              width: 100%;
              transition: .25s;
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
                  &.active:hover {
                    color: #333;
                  }
                }
              }
            }
          }
        }
        .function {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          .large {
            font-size: 1em;
            .album {
              color: #999;
              &.active:hover {
                color: #333;;
              }
            }
          }
          .small {
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .icon-box {
              width: 30px;
              height: 100%;
              overflow: hidden;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
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
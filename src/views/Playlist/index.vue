<template>
  <div class="playlist">
    <v-row class="playlist-info">
      <v-col
        class="playlist-info-header"
        cols="12"
        lg="8"
        md="10"
        sm="10"
        xs="12"
      >
        <v-responsive
          class="rounded bj05"
          :width="$fontSize() * 4 + 80"
          :aspect-ratio="1 / 1"
        >
          <v-img
            v-show="playlist.coverImgUrl"
            :src="playlist.coverImgUrl"
            :lazy-src="playlist.coverImgUrl + '?param=64y64'"
          ></v-img>
        </v-responsive>
        
        <div
          class="playlist-info-header-text"
        >
          <div class="playlist-info-header-text-name" v-if="playlist.name">
            <span
              class="type"
            >歌单</span>
            {{playlist.name}}
          </div>
          <div class="playlist-info-header-text-tags" v-if="playlist.tags && playlist.tags.length">
            标签：{{playlist.tags.join(' / ')}}
          </div>
          <div class="playlist-info-header-text-description" v-if="playlist.description">
            <v-tooltip max-width="700" bottom>
              <template v-slot:activator="{ on, attrs }">
                <span class="description" v-bind="attrs" v-on="on">{{playlist.description}}</span>
              </template>
              <span>
                {{playlist.description}}
              </span>
            </v-tooltip>
          </div>
        </div>
      </v-col>
    </v-row>
    <h2 style="margin-bottom: 10px; font-size: calc(var(--fontSize) + 10px)">歌曲列表</h2>
    <SongList :songList="songList"/>
  </div>
</template>

<script>
  import SongList from '@/components/SongList'

  export default {
    name: 'playlist',
    components: {
      SongList
    },
    data() {
      return {
        id: 0,
        playlist: {},
        songList: []
      };
    },
    methods: {
      getData() {
        if (!this.id) {
          this.$message('id不能为空！', 'error', 6000)
          return
        }
        this.$api.playlist({
          id: this.id
        }, true).then(res => {
          if (res.code === 200) {
            this.playlist = res.playlist
            this.$api.songDetail({
              ids: this.playlist.trackIds.map(item => item.id).join(',')
            }, false).then(res => {
              if (res.code === 200) {
                this.songList = res.songs
              }
            })
          }
        })
      }
    },
    activated() {
      if (this.$route.params.id != this.id) {
        this.id = this.$route.params.id
        this.playlist = {}
        this.songList = []
        this.getData()
      }
    }
  };
</script>

<style scoped lang="scss">
  @import '@/assets/style/mixins.scss';

  .playlist {
    &-info {
      &-header {
        display: flex;
        transition: .25s;
        &-text {
          transition: .25s;
          height: 100%;
          overflow: hidden;
          margin-left: 12px;
          font-size: calc(var(--fontSize) / 2 + 8px);
          width: calc(100% - (var(--fontSize) * 4 + 80px) - 12px);
          &-name {
            @include ellipsisBasic();
            font-size: 1.3em;
            margin-bottom: .4em;
            .type {
              font-size: .8em;
              display: inline-block;
              padding: 0 8px;
              border-radius: 5px;
              margin-right: 3px;
              vertical-align: middle;
              color: var(--mainColor);
              border: var(--mainColor) solid 1px;
            }
          }
          &-tags {
            @include ellipsisBasic(1);
            margin-bottom: .4em;
          }
          &-description {
            color: #333;
            font-size: .9em;
            margin-bottom: 0;
            font-weight: lighter;
            .description {
              @include ellipsisBasic(2);
            }
          }
        }
      }
    }
  }
</style>
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
            :src="playlist.coverImgUrl"
            :lazy-src="playlist.coverImgUrl + '?param=64y64'"
          ></v-img>
        </v-responsive>
        
        <div class="playlist-info-header-text" :style="{width: `calc(100% - ${$fontSize() * 4 + 80}px - 12px)`, fontSize: `calc(${$fontSize() / 2}px + 8px)`}">
          <p class="playlist-info-header-text-name">
            <span
              v-if="playlist.name"
              class="tag"
              :style="{
                color: $store.state.theme.mainColor,
                border: `${$store.state.theme.mainColor} 1px solid`
              }"
            >歌单</span>
            {{playlist.name}}
          </p>
          <p class="playlist-info-header-text-description">
            {{playlist.description}}
          </p>
        </div>
      </v-col>
    </v-row>
    <h2 :style="{fontSize: $fontSize() + 10 + 'px'}" style="margin-bottom: 10px;">
      歌曲列表
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon style="font-size: 1em; vertical-align: unset;" v-bind="attrs" v-on="on">mdi-alert-circle</v-icon>
        </template>
        <span>
          由于网易云官方的限制<br />
          未登录时歌单为不完整歌单<br />
          （本项目不支持登录）
        </span>
      </v-tooltip>
    </h2>
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
      };
    },
    computed: {
      songList() {
        return this.playlist.tracks
      }
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
          }
        }).catch(() => {
          this.$message('获取歌单信息失败，请稍后重试', 'error', 6000)
        })
      }
    },
    mounted() {
      this.getData()
    },
    created() {
      this.id = this.$route.query.id
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
          &-name {
            @include ellipsisBasic();
            font-size: 1.3em;
            .tag {
              font-size: .8em;
              display: inline-block;
              padding: 0 8px;
              border-radius: 5px;
              margin-right: 3px;
              vertical-align: middle;
            }
          }
          &-description {
            @include ellipsisBasic(3);
            color: #333;
            font-size: .9em;
            margin-bottom: 0;
            font-weight: lighter;
          }
        }
      }
    }
  }
</style>
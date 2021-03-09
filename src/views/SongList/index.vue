<template>
  <div class="song-list">
    <v-row class="song-list-info">
      <v-col
        class="song-list-info-header"
        cols="12"
        lg="8"
        md="10"
        sm="10"
        xs="12"
      >
        <v-responsive
          class="rounded song-list-info-header-img"
          width="100"
          :aspect-ratio="1 / 1"
        >
          <v-img
            :src="playlist.coverImgUrl"
            :lazy-src="playlist.coverImgUrl + '?param=64y64'"
          ></v-img>
        </v-responsive>
        
        <div class="song-list-info-header-text" :style="{width: `calc(100% - ${$fontSize() * 8}px - 12px)`, fontSize: `calc(${$fontSize() / 2}px + 8px)`}">
          <span
            class="song-list-info-header-text-tag"
            :style="{
              color: this.$store.state.theme.mainColor,
              border: `${this.$store.state.theme.mainColor} 1px solid`
            }"
          >歌单</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'songList',
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
  .song-list {
    &-info {
      &-header {
        display: flex;
        transition: .25s;
        // background-color: #666;
        &-img {
          background-color: #ccc;
        }
        &-text {
          transition: .25s;
          height: 100%;
          overflow: hidden;
          margin-left: 12px;
          &-tag {
            font-size: 1.2em;
            display: inline-block;
            padding: 0 8px;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>
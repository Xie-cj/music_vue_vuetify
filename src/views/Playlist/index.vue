<template>
  <div class="playlist">
    <div v-if="id">
      {{id}}
    </div>
    <div v-else>
      id不能为空
    </div>
  </div>
</template>

<script>
  export default {
    name: 'playlist',
    data() {
      return {
        id: 0,
        playlistInfo: {},
      };
    },
    methods: {
      getData() {
        this.$api.playlist({
          id: this.id
        }, true).then(res => {
          if (res.code === 200) {
            
          }
          console.log(res)
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
  .playlist {
  }
</style>
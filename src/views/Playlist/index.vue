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
        id: 0
      };
    },
    methods: {
      getData() {
        this.$api.playlist({
          id: this.id
        }, true).then(res => {
          console.log(res)
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
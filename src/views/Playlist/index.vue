<template>
  <div class="album">
    <div v-if="id">
      album
    </div>
    <div v-else>
      id不能为空
    </div>
  </div>
</template>

<script>
  export default {
    name: 'album',
    data() {
      return {
        id: 0
      };
    },
    methods: {},
    created() {
      this.id = this.$route.query.id
      this.$api.playlist({
        id: this.id
      }).then(res => {
        console.log(res)
      })
    }
  };
</script>

<style scoped lang="scss">
  .album {
  }
</style>
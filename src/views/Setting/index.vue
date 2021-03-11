<template>
  <div class="setting">
    Setting
    <Theme />
  </div>
</template>

<script>
  import Theme from './components/Theme'

  export default {
    name: 'setting',
    components: {
      Theme,
    },
    data() {
      return {

      }
    },
    methods: {
    },
  };
</script>

<style scoped lang="scss">
  .setting {
  }
</style>
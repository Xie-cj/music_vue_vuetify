<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "not-found",
  data() {
    return {};
  },
  methods: {
  },
  created() {
    this.$noHttp()
  }
};
</script>

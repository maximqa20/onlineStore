<template>
  <div id="app">
    <h1>Магазин</h1>
      <div class="container">
        <router-view></router-view>
      </div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      mode: true,
    };
  },
  computed: {
    componentName() {
      return this.mode === true ? 'ProductDetails' : 'ProductAdd';
    },
  },
  components: {

  },
};
</script>

<style lang="scss">
  @import "style/style";
</style>

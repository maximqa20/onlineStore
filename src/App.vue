<template>
  <div id="app">
    <h1>Магазин</h1>
      <div class="container">
        <products></products>
        <div>
          <a class="btn btn primary" @click="mode=!mode">
            {{mode ? 'Добавить товар' : 'Подробности'}}
          </a>
        <keep-alive>
          <component :is="componentName"></component>
        </keep-alive>
        </div>
      </div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  </div>
</template>

<script>
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductAdd from './components/ProductAdd';

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
    ProductAdd,
    products: ProductList,
    ProductDetails,
  },
};
</script>

<style lang="scss">
  @import "style/style";
</style>

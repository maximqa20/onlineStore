<template>
  <div class="product">
    <h2>Продукт</h2>
    <form>
      <div>
        <label>Товар: </label>
        <span>{{product.title}}</span>
      </div>
      <div>
        <label>Цена: </label>
        <span>${{product.price}}</span>
      </div>
      <div>
        <label>Количество: </label>
        <span>{{product.qt}}</span>
      </div>
    </form>
    <router-link :to="{name: 'ProductList'}" class="btn btn-info">Назад</router-link>
  </div>
</template>

<script>
import ProductService from '../components/ProductService';

export default {
  name: 'ProductDetails',
  data() {
    return {
      product: {},
    };
  },
  created() {
    ProductService.$on('viewDetails', (selectedProduct) => {
      this.product = selectedProduct;
    });
  },
  mounted() {
    ProductService.viewDetails(this.$route.params.id);
  },
};
</script>


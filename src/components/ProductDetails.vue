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
  </div>
</template>

<script>
import ProductService from '@/components/ProductService';

export default {
  name: 'ProductDetails',
  data() {
    return {
      product: {},
    };
  },
  created() {
    ProductService.$on('viewDetails1', (selectedProduct) => {
      this.product = selectedProduct;
    });
  },
};
</script>


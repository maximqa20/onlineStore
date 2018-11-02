<template>
    <div>
      <router-link to="/add" class="btn btn-success">Добавить продукт</router-link>
      <ProductItem v-for="(product, i) in products" :key="product.id"
                   :product="product" :index="(i+1)"></ProductItem>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem';
import ProductService from '../components/ProductService';

export default {
  data() {
    return {
      products: ProductService.products,
    };
  },
  components: {
    ProductItem,
  },
};
</script>

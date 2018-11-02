<template>
  <div class="product">
    <form>
      <div class="form-group">
        <label>Товар</label>
        <input type="text" class="form-control" id="title" placeholder="Введите товар" v-model="product.title">
      </div>
      <div class="form-group">
        <label>Цена</label>
        <input type="number" class="form-control" id="price" placeholder="Введите цену" v-model="product.price">
      </div>
      <div class="form-group">
        <label>Количество</label>
        <input type="number" class="form-control" id="qt" placeholder="Введите кол-во" v-model="product.qt">
      </div>
      <button type="submit" class="btn btn primary" @click.prevent="addProduct">Submit</button>
    </form>
  </div>
</template>

<script>
import ProductService from '../components/ProductService';

export default {
  name: 'ProductAdd',
  data() {
    return {
      product: {},
    };
  },
  methods: {
    addProduct() {
      ProductService.addProduct(this.product.title, this.product.price, this.product.qt);
      this.$router.push('/');
    },
  },
};
</script>

<template>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{index}}. {{product.title}}</h4>
        <p class="card-text">В наличии: {{product.qt}}</p>
        <p class="card-text">Цена за штуку: {{product.price}}</p>
        <a href="#" class="btn btn-primary" @click="viewDetailsClicked">Подробнее..</a>
      </div>
    </div>
</template>

<script>
import ProductService from '@/components/ProductService';

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    viewDetailsClicked() {
      // this.$emit('viewDetails', this.product.id);
      // this.viewDetails(this.product.id);
      ProductService.viewDetails(this.product.id);
    },
  },

};
</script>


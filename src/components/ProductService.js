import Vue from 'vue';
import _ from 'lodash';


export default new Vue({
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Product #1',
          price: 50,
          qt: 1000,
        },
        {
          id: 2,
          title: 'Product #2',
          price: 100,
          qt: 456,
        },
        {
          id: 3,
          title: 'Product #3',
          price: 23,
          qt: 23445,
        },
        {
          id: 4,
          title: 'Product #4',
          price: 50,
          qt: 1000,
        },
      ],
    };
  },
  methods: {
    viewDetails(id) {
      const productToView = _.find(this.products, { id });
      this.$emit('viewDetails', productToView);
      console.log('1', productToView);
    },
    addProduct(title, price, qt) {
      console.log('1111111111 ', this.products);
      const id = this.products[this.products.length - 1].id + 1;
      console.log('1', id);
      this.products.push({
        id,
        title,
        price,
        qt,
      });
    },
  },
});

import Vue from 'vue';
import Router from 'vue-router';
import ProductList from '@/components/ProductList';
import ProductDetails from '@/components/ProductDetails';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList,
    },
    {
      path: '/ProductsDetails',
      name: 'ProductDetails',
      component: ProductDetails,
    },
  ],
});

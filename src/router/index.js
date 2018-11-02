import Vue from 'vue';
import Router from 'vue-router';
import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';
import ProductAdd from '../components/ProductAdd';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList,
    },
    {
      path: '/add',
      name: 'ProductAdd',
      component: ProductAdd,
    },
    {
      path: '/detail/:id',
      name: 'ProductDetails',
      component: ProductDetails,
    },
    {
      path: '*',
      component: ProductList,
    },
  ],
  mode: 'history',
});

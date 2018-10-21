import Vue from 'vue';
import Router from 'vue-router';

import ProductsIndex from './views/ProductsIndex.vue';
import ProductsNew from './views/ProductsNew.vue';
import ProductsShow from './views/ProductsShow.vue';

import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'root', component: ProductsIndex },

    { path: '/products', name: 'products-index', component: ProductsIndex },
    { path: '/products/new', name: 'products-new', component: ProductsNew },
    { path: '/products/:id', name: 'products-show', component: ProductsShow },
    
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout }
  ]
});

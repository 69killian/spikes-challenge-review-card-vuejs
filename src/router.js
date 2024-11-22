// src/router.js

import Vue from 'vue';
import Router from 'vue-router';

// Importer les composants que vous souhaitez utiliser pour la navigation
import Home from './components/Home.vue';
import About from './components/About.vue';

// Indiquer à Vue d'utiliser Vue Router
Vue.use(Router);

// Définir les routes (URL et les composants qui doivent être rendus)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];

// Créer une instance du Router avec les routes définies
const router = new Router({
  routes, // c'est l'équivalent de `routes: routes`
  mode: 'history' // Pour éviter que les URLs aient un `#` (ex: /#/about)
});

export default router;

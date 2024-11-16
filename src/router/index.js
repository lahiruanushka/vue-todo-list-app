
import { createRouter, createWebHistory } from 'vue-router';
import TodosView from '../views/TodosView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', name: "home", component: TodosView },
  { path: '/about', name: "about",component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

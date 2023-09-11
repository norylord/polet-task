import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstForm from "@/components/FirstForm.vue";
import FirstView from "@/views/FirstView.vue";
import SecondView from "@/views/SecondView.vue";
import ThridView from "@/views/ThridView.vue";
import FourthView from "@/views/FourthView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/1',
      name: 'first',
      component: FirstView
    },
    {
      path: '/2',
      name: 'second',
      component: SecondView
    },
    {
      path: '/3',
      name: 'third',
      component: ThridView
    },
    {
      path: '/4',
      name: 'fourth',
      component: FourthView
    },
  ]
})

export default router

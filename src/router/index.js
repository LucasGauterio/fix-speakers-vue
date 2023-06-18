// Composables
import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'

const routes = [
  {
    path: '',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/:lang',
        name: 'Home Language',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

let userLanguage = (navigator.language || navigator.userLanguage).substring(0,2);

console.log('selected language', userLanguage);

router.beforeEach((to, from, next) => {
  const lang = to.params.lang || userLanguage;

  if (lang && i18n.global.availableLocales.includes(lang)) {
    i18n.global.locale = lang;
  }

  next();
});

export default router

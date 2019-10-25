import Vue from 'vue'
import Router from 'vue-router'
import Album from "@/components/Album";
import Index from "../components/Index";
import Login from "../components/Login";
import Articles from "../components/Articles";

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {requireAuth: true}
    },
    {
      path: '/Album',
      name: 'Album',
      component: Album,
      meta: {requireAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles

    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem(process.env.TOKEN_NAME);

    if (token === null || token === '' || token === undefined) {
      next('/login');
      alert('检测到您还未登录,请登录后操作！');
    } else {
      next();
    }
  }
});

export default router;



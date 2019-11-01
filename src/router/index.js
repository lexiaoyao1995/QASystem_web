import Vue from 'vue'
import Router from 'vue-router'
import Album from "@/components/Album";
import Index from "../components/Index";
import Login from "../components/Login";
import Articles from "../components/Articles";
import PhotoList from "../components/PhotoList";
import Article from "../components/Article";

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'firstIndex',
      component: Index,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/Album',
      name: 'Album',
      component: Album,
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
    },
    {
      path: '/photoList/:id',
      name: 'photoList',
      component: PhotoList
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
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



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Axios from "axios";
import ToolService from "./service/ToolService";
import photoService from "./service/photoService";
//

Axios.interceptors.request.use(
  config => {
    if (localStorage.getItem(process.env.TOKEN_NAME)) {
      console.log(localStorage.getItem(process.env.TOKEN_NAME));
      config.headers[process.env.TOKEN_NAME] = localStorage.getItem(process.env.TOKEN_NAME);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

//http reponse响应拦截器
Axios.interceptors.response.use(
  response => {
    if (response.data.body === 'token out time') {
      localStorage.removeItem(process.env.TOKEN_NAME);
      alert('token 过期');
      router.replace({
        path: '/login',
      });
    }
    return response;
  },
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem(process.env.TOKEN_NAME);
        alert('请先登录');
        router.replace({
          path: '/login',
        });
      } else {
        alert('未知错误');
        router.replace({
          path: '/login',
        });
      }
    }
  });


//
Vue.use(ViewUI);

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;
Vue.prototype.$tool = ToolService;

Vue.prototype.photoService = photoService;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})



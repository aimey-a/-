import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import navigationBat from '@/components/navigationBat/navigationBat'
import forbta from '@/components/forbta/forbta'
Vue.component('navigationBat', navigationBat)
Vue.component('forbta', forbta)
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
axios.defaults.baseURL = 'http://l2636i3287.wicp.vip/'; //请求的默认地址
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; 
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
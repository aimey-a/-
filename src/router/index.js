import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// login.js

// import RouterLoad from 'tools/routerLoading'

// 懒加载
// const Login = resolve => {
//   // require之前开启loading
//   RouterLoad.show()
//   require(['@/components/login/Login'], component => {
//     // require结束后关闭loading
//     RouterLoad.hide()
//     resolve(component)
//   })
// }
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/List",
    name: "List",
    component: () =>
      import("../views/List.vue"),
  }, {
    path: "/Detail",
    name: "Detail",
    component: () =>
      import("../views/Detail.vue"),
  }, {
    path: "/About",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';

import demoRouters from './modules/demo';

Vue.use(VueRouter);

const routes = [...demoRouters];


// 防止连续点击多次路由报错
let routerPush = VueRouter.prototype.push;
let routerReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((err) => err);
};
// replace
VueRouter.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch((err) => err);
};

// 实例初始化
const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;

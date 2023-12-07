import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

/* 样式初始化 */
import '@/assets/base.css'; // 基础样式初始化
import '@/style/index.less'; // 应用样式初始化

/* 应用功能性库 */
import Element from 'element-ui'; // ElementUI组件库
import 'element-ui/lib/theme-chalk/index.css';
import plugins from './plugins';
// 自定义功能插件
Vue.use(Element);
Vue.use(plugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

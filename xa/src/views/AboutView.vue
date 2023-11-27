<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="login">网络请求登录</button>
  </div>
</template>

<script>
import { login } from '@/api/user';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {},
  created() {},
  methods: {
    async login() {
      const res = await login(this.username, this.password);
      console.log(res);
    },
  },
};
</script>

<style lang="less">
@media (width >= 1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 100vh;

    h1 {
      color: red;
    }
  }
}
</style>

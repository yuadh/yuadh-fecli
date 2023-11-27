<template>
  <div>
    HomePage

    <br />
    icon:<IconCommunity />
    <br />
    store:{{ this.$store.getters.count }}
    <br />
    ElementUI:<el-button>按钮</el-button>
  </div>
</template>
<script>
import IconCommunity from '@/components/icons/IconCommunity';
export default {
  name: '',
  components: {
    IconCommunity,
  },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="" scoped></style>

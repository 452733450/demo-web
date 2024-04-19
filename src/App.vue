<template>
  <div id="app">
    <Tabs />
  </div>
  <div class="info">
    这是从本地后端项目获取的json数据：
    <button v-on:click="postInfo">获取数据</button>
    <br>
    {{this.info}}
  </div>
</template>

<script>
import axios from 'axios';
import Tabs from './components/Tabs.vue';

export default {
  components: {
    Tabs
  },
  name: 'App',
  data() {
    return {
      info: {}
    }
  },
  methods: {
    postInfo: function () {
      axios.post('/api/user/info')
          .then(response => (this.info = response))
          .catch(function (error) { // 请求失败处理
            // eslint-disable-next-line no-console
            console.log(error);
          });
    }
  }
}
</script>

<style>
.info{
  width:100%;
  height: 100%;
}
</style>
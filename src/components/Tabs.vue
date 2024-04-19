<template>
  <div>
    <div class="tabs">
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: currentTab === tab }"
          @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div class="tab-content">
      <div v-show="currentTab === 'Home'">Home Content</div>
      <div v-show="currentTab === 'Posts'">Posts Content</div>
      <div v-show="currentTab === 'About'">About Content</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ['Home', 'Posts', 'About'];
const currentTab = ref('Home');
</script>

<style scoped>
.tabs button {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  background-color: #f3f3f3;
  cursor: pointer;
}

.tabs button.active {
  background-color: #ddd;
}

.tab-content div {
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>

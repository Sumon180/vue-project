<script setup lang="ts">
import { ref } from 'vue'
import ToDo from './components/ToDo.vue';

const appName = ref('📝 Todo App');

</script>

<template>
  
 <ToDo :title="appName" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<script setup lang="ts">
import Header from "./components/Header.vue";
import ToDo from "./components/ToDo.vue";

const appName = "📝 Todo App";
</script>

<template>
  <Header />
  <router-view />
</template>

<style scoped></style>

<script setup lang="ts">
import ToDo from "../components/ToDo.vue";

const appName = "📝 Todo App";
</script>

<template>
  <ToDo :title="appName" />
</template>

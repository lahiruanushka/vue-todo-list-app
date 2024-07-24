<template>
  <div>
    <TodoHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TodoHeader from "./components/TodoHeader.vue";
</script>

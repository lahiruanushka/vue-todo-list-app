<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="bg-blue-600 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-3">
 <img src="@/assets/images/checklist.png" alt="Logo" class="h-10 w-10 rounded-full">
        <h1 class="text-2xl font-bold">Todo List</h1>
      </div>
      <ul class="flex space-x-6">
        <RouterLink to="/" class="hover:text-gray-300">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-300">About</RouterLink>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
</style>

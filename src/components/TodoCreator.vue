<script setup>
import TodoButton from "../components/TodoButton.vue";

import { reactive, defineEmits } from 'vue';

const emit = defineEmits(['create-todo']);

const todoState = reactive({
  todo: "",
  invalid: false,
  errorMsg: "",
});

const createTodo = () => {
  if (todoState.todo.trim() !== "") {
    emit("create-todo", todoState.todo);
    todoState.todo = "";
    todoState.invalid = false;
    todoState.errorMsg = "";
    return;
  }

  todoState.invalid = true;
  todoState.errorMsg = "Todo value cannot be empty";
};
</script>

<template>
  <div class="flex flex-col items-center justify-center bg-gray-100 p-4">
    <div class="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
      <input
        type="text"
        placeholder="Enter your task"
        v-model="todoState.todo"
        class="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
      <span v-if="todoState.invalid" class="text-red-500 text-sm mb-4 block">
        {{ todoState.errorMsg }}
      </span>
      <TodoButton @click="createTodo">Create</TodoButton>
    </div>
  </div>
</template>

<style scoped>
</style>

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
  // Reset error state at the start
  todoState.invalid = false;
  todoState.errorMsg = "";

  // Trim and check the todo value
  const trimmedTodo = todoState.todo.trim();
  
  if (trimmedTodo === "") {
    todoState.invalid = true;
    todoState.errorMsg = "Todo value cannot be empty";
    return;
  }

  // Emit the trimmed todo value
  emit("create-todo", trimmedTodo);
  
  // Clear the input after successful creation
  todoState.todo = "";
};
</script>

<template>
  <div class="w-full">
    <div class="flex gap-4">
      <input
        type="text"
        placeholder="Enter your task"
        v-model="todoState.todo"
        @keyup.enter="createTodo"
        class="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
      <TodoButton 
        @click="createTodo"
        class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        Add Task
      </TodoButton>
    </div>
    <span 
      v-if="todoState.invalid" 
      class="text-red-500 text-sm mt-2 block"
    >
      {{ todoState.errorMsg }}
    </span>
  </div>
</template>
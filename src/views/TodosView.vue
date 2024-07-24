<script setup>
import { ref } from 'vue';
import { uid } from 'uid';

import TodoCreator from "../components/TodoCreator.vue";
import TodoItem from "../components/TodoItem.vue";

const todoList = ref([]);

const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: false,
    isEditing: false,
  });
};

const updateTodo = (updatedTodo) => {
  const index = todoList.value.findIndex(todo => todo.id === updatedTodo.id);
  if (index !== -1) {
    todoList.value[index] = updatedTodo;
  }
};

const deleteTodo = (id) => {
  todoList.value = todoList.value.filter(todo => todo.id !== id);
};
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
    <h1 class="text-3xl font-bold mb-6">Create Todo</h1>
    <TodoCreator @create-todo="createTodo" />
    <ul v-if="todoList.length > 0">
      <TodoItem 
        v-for="todo in todoList" 
        :key="todo.id" 
        :todo="todo" 
        @update-todo="updateTodo"
        @delete-todo="deleteTodo"
      />
    </ul>
    <div v-else>
      You have no todos. Complete one!
    </div>
  </main>
</template>

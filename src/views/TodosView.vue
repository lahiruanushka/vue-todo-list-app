<script setup>
import { ref, computed } from 'vue';
import { uid } from 'uid';
import TodoCreator from "../components/TodoCreator.vue";
import TodoItem from "../components/TodoItem.vue";
import { Icon } from '@iconify/vue';

const todoList = ref([]);
const filterState = ref('all'); // 'all', 'active', 'completed'

const filteredTodos = computed(() => {
  switch (filterState.value) {
    case 'active':
      return todoList.value.filter(todo => !todo.isCompleted);
    case 'completed':
      return todoList.value.filter(todo => todo.isCompleted);
    default:
      return todoList.value;
  }
});

const stats = computed(() => ({
  total: todoList.value.length,
  completed: todoList.value.filter(todo => todo.isCompleted).length,
  active: todoList.value.filter(todo => !todo.isCompleted).length
}));

const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: false,
    isEditing: false,
    createdAt: new Date()
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

const clearCompleted = () => {
  todoList.value = todoList.value.filter(todo => !todo.isCompleted);
};
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">
          Todo List
        </h1>
        <p class="text-gray-600">Stay organized and productive</p>
      </div>

      <!-- Main Content -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <!-- Todo Creator -->
        <div class="p-6 border-b border-gray-100">
          <TodoCreator @create-todo="createTodo" />
        </div>

        <!-- Stats Bar -->
        <div class="bg-gray-50 px-6 py-3 flex justify-between items-center text-sm border-b border-gray-100">
          <div class="flex space-x-4 text-gray-600">
            <span>Total: {{ stats.total }}</span>
            <span>Active: {{ stats.active }}</span>
            <span>Completed: {{ stats.completed }}</span>
          </div>
          <button 
            v-if="stats.completed > 0"
            @click="clearCompleted"
            class="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Clear completed
          </button>
        </div>

        <!-- Filters -->
        <div class="bg-gray-50 px-6 py-3 flex space-x-4 border-b border-gray-100">
          <button 
            v-for="filter in ['all', 'active', 'completed']"
            :key="filter"
            @click="filterState = filter"
            :class="{
              'text-blue-600 bg-blue-50': filterState === filter,
              'text-gray-600 hover:text-gray-900': filterState !== filter
            }"
            class="px-3 py-1 rounded-md capitalize font-medium text-sm transition-colors duration-200"
          >
            {{ filter }}
          </button>
        </div>

        <!-- Todo List -->
        <div class="divide-y divide-gray-100">
          <ul v-if="filteredTodos.length > 0">
            <TodoItem 
              v-for="(todo, index) in filteredTodos" 
              :key="todo.id" 
              :todo="todo" 
              :index="index"
              @update-todo="updateTodo"
              @delete-todo="deleteTodo"
              class="border-b last:border-b-0"
            />
          </ul>
          <div 
            v-else 
            class="flex flex-col items-center justify-center py-12 px-6 text-center"
          >
            <Icon 
              icon="mdi:clipboard-text-outline" 
              class="w-16 h-16 text-gray-300 mb-4"
            />
            <p class="text-gray-500 mb-2">No todos found</p>
            <p class="text-sm text-gray-400">
              {{ filterState === 'all' 
                ? 'Add a new todo to get started!' 
                : `No ${filterState} todos yet` 
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
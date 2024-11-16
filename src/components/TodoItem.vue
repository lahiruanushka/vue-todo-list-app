<script setup>
import { ref, watch } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
});

const emit = defineEmits(['update-todo', 'delete-todo']);
const newTodoText = ref(props.todo.todo);

watch(() => props.todo.todo, (newVal) => {
  newTodoText.value = newVal;
});

const toggleComplete = () => {
  emit('update-todo', { ...props.todo, isCompleted: !props.todo.isCompleted });
};

const startEditing = () => {
  newTodoText.value = props.todo.todo;
  emit('update-todo', { ...props.todo, isEditing: true });
};

const saveTodo = () => {
  if (newTodoText.value.trim()) {
    emit('update-todo', { ...props.todo, todo: newTodoText.value, isEditing: false });
  }
};

const editTodo = (event) => {
  newTodoText.value = event.target.value;
};

const removeTodo = () => {
  emit('delete-todo', props.todo.id);
};
</script>

<template>
  <li class="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
    <div class="p-4 flex items-center justify-between gap-4">
      <div class="flex items-center flex-1 min-w-0">
        <div class="relative flex items-center justify-center">
          <input 
            type="checkbox" 
            :checked="todo.isCompleted"
            @input="toggleComplete"
            class="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          >
        </div>
        
        <div class="ml-4 flex-1 min-w-0">
          <input 
            v-if="todo.isEditing" 
            type="text" 
            :value="newTodoText" 
            @input="editTodo"
            @keyup.enter="saveTodo"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Edit todo..."
          >
          <span 
            v-else 
            :class="{
              'line-through text-gray-500': todo.isCompleted,
              'text-gray-900': !todo.isCompleted
            }"
            class="block truncate text-sm"
          >
            {{ todo.todo }}
          </span>
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <button 
          v-if="todo.isEditing"
          @click="saveTodo"
          class="p-2 text-green-600 hover:text-green-700 rounded-full hover:bg-green-50 transition-colors duration-200"
        >
          <Icon icon="mdi:check-circle" class="w-5 h-5" />
        </button>
        <button 
          v-else
          @click="startEditing"
          class="p-2 text-blue-600 hover:text-blue-700 rounded-full hover:bg-blue-50 transition-colors duration-200"
        >
          <Icon icon="mdi:pencil" class="w-5 h-5" />
        </button>
        <button 
          @click="removeTodo"
          class="p-2 text-red-600 hover:text-red-700 rounded-full hover:bg-red-50 transition-colors duration-200"
        >
          <Icon icon="mdi:delete" class="w-5 h-5" />
        </button>
      </div>
    </div>
  </li>
</template>
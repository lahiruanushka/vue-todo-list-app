<template>
  <li class="flex justify-between items-center mb-4">
    <div class="flex items-center">
      <input type="checkbox" :checked="todo.isCompleted" @change="toggleComplete">
      <div class="ml-2">
        <input v-if="todo.isEditing" type="text" :value="newTodoText" @input="editTodo" class="mr-2">
        <span v-else>{{ todo.todo }}</span>
      </div>
    </div>
    <div class="flex space-x-2">
      <Icon v-if="todo.isEditing" icon="mdi:check-circle" style="color: green" @click="saveTodo"/>
      <Icon v-else icon="mdi:pencil" style="color: blue" @click="startEditing"/>
      <Icon icon="mdi:delete" style="color: red" @click="removeTodo"/>
    </div>
  </li>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
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
  emit('update-todo', { ...props.todo, todo: newTodoText.value, isEditing: false });
};

const editTodo = (event) => {
  newTodoText.value = event.target.value;
};

const removeTodo = () => {
  emit('delete-todo', props.todo.id);
};
</script>

<style scoped>
input[type="text"] {
  border: 1px solid #ccc;
  padding: 4px;
}
</style>

<template>
  <div class="task-input">
    <form @submit.prevent="handleSubmitTask">
      <input v-model="newtask" placeholder="Add a new task...">
      <button class="add-button">ADD</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useSubmitTask } from '../composables/useSubmitTask';
import { ref } from 'vue';

const newtask = ref('');

// Call the useSubmitTask function with the entered task as a parameter
const handleSubmitTask = () => {
  if (newtask.value.trim() !== '') {
    useSubmitTask(newtask.value.trim());
    // Clear the task input field after submission
    newtask.value = '';
  }
}
</script>


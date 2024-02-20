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

<style scoped lang="scss">
.task-input {
  background-color: var(--theme-c-blue-transparent);
  box-shadow: var(--box-shadow-1);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--border-radius-1);
  border-style: solid;
  border-color: var(--color-accent-one);
  border-width: 1px;
}
.add-button {
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
  border: none;
  background-color: white;
  padding: var(--space-1) var(--space-3);
  color: var(--theme-c-soft-black);
  font-weight: bold
}
.add-button:hover {
  cursor: pointer;
}


/* Target the placeholder text of an input */
::-webkit-input-placeholder { /* Webkit browsers (Safari, Chrome) */
    font-style: italic; /* Make the placeholder text italic */
}
:-moz-placeholder { /* Firefox 18- */
    font-style: italic; /* Make the placeholder text italic */
}
::-moz-placeholder { /* Firefox 19+ */
    font-style: italic; /* Make the placeholder text italic */
}
:-ms-input-placeholder { /* Internet Explorer */
    font-style: italic; /* Make the placeholder text italic */
}

input[type="text"] {
  color: var(--color-heading);
  font-size: var(--fs-3);
  font-weight: 500;
}

input {
    background-color:transparent;
    border: 0px solid;
    height:22.39px;
    width:250px;
    caret-color: var(--color-accent-one);
}
input:focus {
    outline:none;
}

input:focus::placeholder {
    color: transparent;
}

form {
  height: 22.39px;
}

</style>
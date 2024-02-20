<template>
  <div class="task-display">
    <p>{{ task.content }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '../utils/types';

defineProps<{
  task: Task;
}>();
</script>

<style scoped lang="scss">
.task-display {
  color: var(--color-heading);
  font-size: var(--fs-3);
  font-weight: 500;
  box-shadow: var(--box-shadow-1);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--border-radius-1);
}
</style>

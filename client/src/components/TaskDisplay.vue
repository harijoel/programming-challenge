<template>
  <div class="task-display">
    <!--
      Mission Two: Add ability to check and uncheck tasks

      Display the tasks according to the design in the README.md file.

      Definition of done:
      [ ] A checkbox is visible to the left of the task
      [ ] Clicking a checked task will uncheck it
      [ ] Clicking an unchecked task will check it
      [ ] All task changes are persisted to the database

      Your submission will be judged out of ten points based
      on the following criteria:

      Design fidelity - 5 points total
        - Is the spacing correct? (e.g. padding, margin) - 2 points
        - Is there good interaction feedback? (e.g. hover, focus, active states) - 3 points
      Code quality - 5 points
        - Are concerns clearly separated? (e.g. clear responsibilities for functions, etc.) - 3 point
        - Is the code easy to read and understand? - 2 points
    -->
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

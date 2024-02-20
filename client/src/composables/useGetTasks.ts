import { ref } from 'vue';
import api from '../utils/axios';

import type { Task } from '../utils/types';

export const useGetTasks = () => {
  const state = ref<'loading' | 'failed' | 'loaded'>('loading');
  const tasks = ref<Task[]>([]);

  const getTasks = () => {
    api.get<Task[]>('/tasks')
      .then((response) => {
        tasks.value = response.data;
        state.value = 'loaded';
      })
      .catch((error) => {
        console.error(error);
        state.value = 'failed';
      });
  };

  getTasks();

  return { state, tasks, getTasks };
};

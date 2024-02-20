import { ref } from 'vue';
import api from '../utils/axios';
import type { Task } from '@/utils/types';

export const useSubmitTask = (newtask: string) => {
  const submitedState = ref<'idle' | 'failed' | 'submitted'>('idle');

  const submitTask = (newtask: string) => {
  return api.post('/insert-task', { content: newtask })
    .then((response) => {
      submitedState.value = 'submitted';
      console.log(newtask)
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      submitedState.value = 'failed';
    });
  };

  submitTask(newtask)

  return { submitedState, submitTask };
};

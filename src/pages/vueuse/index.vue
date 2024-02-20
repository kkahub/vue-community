<template>
  <q-page padding>
    <div class="text-h4">useAsyncState</div>
    <q-separator spaced />
    <p>isReady : {{ isReady }}</p>
    <p>isLoading : {{ isLoading }}</p>
    <button @click="handleButton">execute</button>
    <p>error : {{ error }}</p>
    <p>state : {{ state }}</p>
  </q-page>
</template>

<script setup>
import { useAsyncState } from '@vueuse/core';
import axios from 'axios';

const { state, isLoading, error, isReady, execute } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data),
  { name: '김근애' },
  {
    immediate: false,
  },
);

const handleButton = () => {
  execute(1000);
};
</script>

<style lang="scss" scoped></style>

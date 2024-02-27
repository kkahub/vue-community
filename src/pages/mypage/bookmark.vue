<template>
  <PostList :items="items" />
</template>

<script setup>
import { useAsyncState } from '@vueuse/core';
import { getUserBookmarks } from 'src/services';
import { useAuthStore } from 'src/stores/auth';
import PostList from 'src/components/apps/post/PostList.vue';

const authStore = useAuthStore();

const { state: items } = useAsyncState(() => getUserBookmarks(authStore.uid));
</script>

<style lang="scss" scoped></style>

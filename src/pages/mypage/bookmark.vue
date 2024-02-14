<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';

const posts = Array.from(Array(3), (_, index) => ({
  id: 'A' + index,
  title: 'Vue3 Firebase 강의 ' + index,
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse assumenda nostrum quaerat aut quasi voluptate. Ratione error blanditiis excepturi? Dolorum quod officiis aperiam eligendi voluptatem sapiente provident a asperiores.',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  category: '카테고리 ' + index,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
}));
</script>

<style lang="scss" scoped></style>

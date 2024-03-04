<template>
  <q-list bordered separator>
    <PostItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :escapeHTML="escapeHTML"
    />
  </q-list>
</template>

<script setup>
import PostItem from './PostItem.vue';

defineProps({
  items: Array,
  default: () => [],
  escapeHTML: {
    type: Boolean,
    default: false,
  },
});
</script>

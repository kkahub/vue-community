<template>
  <div class="flex items-center q-mb-lg">
    <div class="text-h5">전체</div>
    <q-space />
    <q-tabs
      :model-value="sort"
      @update:model-value="value => $emit('update:sort', value)"
      narrow-indicator
      dense
    >
      <q-tab :rapple="false" label="최신순" name="createdAt"></q-tab>
      <q-tab :rapple="false" label="조회순" name="readCount"></q-tab>
      <q-tab :rapple="false" label="좋아요순" name="likeCount"></q-tab>
    </q-tabs>
  </div>
</template>

<script setup>
defineProps({
  sort: {
    type: String,
    default: 'createdAt',
  },
});
defineEmits(['update:sort']);
</script>

<style lang="scss" scoped></style>

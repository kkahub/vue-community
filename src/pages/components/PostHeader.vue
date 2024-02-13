<template>
  <div class="flex items-center q-mb-lg">
    <div class="text-h5">전체</div>
    <q-space />
    <q-tabs narrow-indicator dense>
      <q-tab :rapple="false" label="최신순" name="createTime"></q-tab>
      <q-tab :rapple="false" label="조회순" name="readCount"></q-tab>
      <q-tab :rapple="false" label="좋아요순" name="likeCount"></q-tab>
    </q-tabs>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

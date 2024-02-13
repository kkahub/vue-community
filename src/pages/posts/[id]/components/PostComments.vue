<template>
  <div>
    <div class="text-subtitle1 text-weight-bold q-mb-lg">댓글 6</div>

    <q-input type="textarea" class="bg-white" outlined></q-input>

    <div v-if="isActive">
      <div class="flex justify-end q-gutter-x-sm q-mt-sm">
        <q-btn label="최소" color="dark" unelevated />
        <q-btn label="등록" color="primary" unelevated />
      </div>
    </div>

    <q-card v-if="!isActive">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 작성해보세요.</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);
const toggleActive = () => (isActive.value = !isActive.value);
</script>

<style lang="scss" scoped></style>

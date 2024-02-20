<template>
  <BaseCard>
    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-gutter-y-md">
        <div class="text-h6">비밀번호 변경</div>
        <q-input
          v-model="form.newPassword"
          type="password"
          outlined
          dense
          label="새로운 비밀번호"
        />
        <q-input
          v-model="form.newPasswordConfirm"
          type="password"
          outlined
          dense
          label="새로운 비밀번호 확인"
        />
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-space />
        <q-btn
          type="submit"
          label="저장하기"
          flat
          color="primary"
          :loading="isLoading"
        />
      </q-card-actions>
    </q-form>
  </BaseCard>
</template>

<script setup>
import { useQuasar } from 'quasar';
import BaseCard from 'src/components/base/BaseCard.vue';
import { useAsyncState } from '@vueuse/core';
import { updateUserPassword } from 'src/services';
import { ref } from 'vue';
import { getErrorMessage } from 'src/utils/firebase/error-message';

const $q = useQuasar();

const { isLoading, execute } = useAsyncState(updateUserPassword, null, {
  immediate: false,
  throwError: true,
  onSuccess: () => {
    $q.notify('비밀번호가 변경되었습니다.');
    form.value.newPassword = '';
    form.value.newPasswordConfirm = '';
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const form = ref({
  newPassword: '',
  newPasswordConfirm: '',
});
const handleSubmit = () => execute(0, form.value.newPassword);
// const handleSubmit = async () => {
//   await updateUserPassword(form.value.newPassword);
//   $q.notify('비밀번호가 변경되었습니다.');
//   form.value.newPassword = '';
//   form.value.newPasswordConfirm = '';
// };
</script>

<style lang="scss" scoped></style>

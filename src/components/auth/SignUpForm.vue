<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSumbit">
      <!-- <q-input
        v-model="form.nickname"
        placeholder="닉네임"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequired]"
      /> -->
      <q-input
        v-model="form.email"
        placeholder="이메일"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequired, validateEmail]"
      />
      <q-input
        v-model="form.password"
        type="password"
        placeholder="비밀번호(문자, 숫자조합 8자 이상)"
        autocomplete="on"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequired, validatePassword]"
      />
      <q-input
        v-model="passwordConfirm"
        type="password"
        placeholder="비밀번호 확인"
        autocomplete="on"
        outlined
        dense
        hide-bottom-space
        :rules="[
          validateRequired,
          val => validatePasswordConfirm(form.password, val),
        ]"
      />
      <q-btn
        type="submit"
        label="가입하기"
        class="full-width"
        unelevated
        color="primary"
        :loading="isLoading"
      />
      <q-separator />
      <q-btn
        label="로그인 하기"
        class="full-width"
        unelevated
        flat
        @click="$emit('changeView', 'SignInForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useAsyncState } from '@vueuse/core';
import { signUpWithEmail } from 'src/services';
import {
  validateRequired,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from 'src/utils/validate-rules';
import { getErrorMessage } from 'src/utils/firebase/error-message';

const emit = defineEmits(['changeView', 'closeDialog']);

const $q = useQuasar();

const { isLoading, execute } = useAsyncState(signUpWithEmail, null, {
  immediate: false,
  onSuccess: () => {
    $q.notify('가입을 환영합니다 :)');
    $q.notify('이메일에서 인증 링크를 확인해주세요.');
    emit('closeDialog');
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const passwordConfirm = ref('');
const form = ref({
  nickname: '',
  email: '',
  password: '',
});

const handleSumbit = () => execute(1000, form.value);
// const handleSumbit = async () => {
//   await signUpWithEmail(form.value);
//   $q.notify('가입을 환영합니다 :)');
//   $q.notify('이메일에서 인증 링크를 확인해주세요.');
//   emit('closeDialog');
// };
</script>

<style lang="scss" scoped></style>

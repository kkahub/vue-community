<template>
  <q-dialog
    :model-value="medelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    transition-show="none"
    transition-hide="none"
    @hide="changeViewMode('SignInForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="q-px-xl q-pb-xl">
        <!-- v-if 조건부 렌더링 -->
        <!-- <SignInForm
          v-if="viewMode === 'SignInForm'"
          @change-view="changeViewMode"
        />
        <SignUpForm
          v-else-if="viewMode === 'SignUpForm'"
          @change-view="changeViewMode"
        />
        <FindPasswordForm v-else @change-view="changeViewMode" /> -->

        <!-- 동적 컴포넌트 활용 렌더링 -->
        <component
          :is="authViewComponents[viewMode]"
          @change-view="changeViewMode"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineAsyncComponent, defineProps, defineEmits, ref } from 'vue';
// import SignInForm from './SignInForm.vue';
// import SignUpForm from './SignUpForm.vue';
// import FindPasswordForm from './FindPasswordForm.vue';

defineProps({
  medelValue: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['update:modelValue']);

const viewMode = ref('SignInForm');
const changeViewMode = mode => (viewMode.value = mode);

// const authViewComponents = {
//   SignInForm,
//   SignUpForm,
//   FindPasswordForm,
// };
const authViewComponents = {
  SignInForm: defineAsyncComponent(() => import('./SignInForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SignUpForm.vue')),
  FindPasswordForm: defineAsyncComponent(() =>
    import('./FindPasswordForm.vue'),
  ),
};
</script>

<style lang="scss" scoped></style>

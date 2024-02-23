<template>
  <BaseCard class="q-pa-lg">
    <div class="flex q-mb-md">
      <q-btn
        icon="sym_o_arrow_back"
        flat
        round
        dense
        color="grey"
        size="16px"
        @click="$router.back()"
      />
      <q-space />
      <q-btn icon="sym_o_favorite" flat round dense color="red" size="16px" />
      <q-btn icon="sym_o_bookmark" flat round dense color="blue" size="16px" />
    </div>
    <div class="flex items-center">
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <div class="q-ml-md">
        <div>짐코딩</div>
        <div class="text-grey-6">
          {{ date.formatDate(post.createdAt, 'YYYY. MM. DD HH:mm:ss') }}
        </div>
      </div>

      <q-space />

      <q-btn icon="more_horiz" round flat>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
              :to="`/posts/${$route.params.id}/edit`"
            >
              <q-item-section>수정하기</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="handleDeletePost">
              <q-item-section>삭제하기</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

    <div class="q-mt-md text-h5 text-weight-bold">{{ post.title }}</div>
    <div class="text-teal">
      <span v-for="tag in post.tags" :key="tag">#{{ tag }}&nbsp;</span>
      {{ post.category }}
    </div>
    <div class="row items-center q-gutter-x-md q-mt-md justify-end">
      <PostIcon name="sym_o_visibility" :label="post.readCount" />
      <PostIcon name="sym_o_sms" :label="post.commentCount" />
      <PostIcon name="sym_o_favorite" :label="post.likeCount" />
      <PostIcon name="sym_o_bookmark" :label="post.bookmarkCount" />
    </div>
    <q-separator class="q-my-lg" />
    <TiptapViewer v-if="post.content" :content="post.content" />
  </BaseCard>
</template>

<script setup>
import { date, useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { useAsyncState } from '@vueuse/core';
import { getPost, deletePost } from 'src/services';
import PostIcon from 'src/components/apps/post/PostIcon.vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import TiptapViewer from 'src/components/tiptap/TiptapViewer.vue';

const route = useRoute();
const router = useRouter();
const $q = useQuasar();

const { state: post, error } = useAsyncState(
  () => getPost(route.params.id),
  {},
);

const { execute: executeDeletePost } = useAsyncState(deletePost, null, {
  immediate: false,
  onSuccess: () => {
    $q.notify('삭제완료!');
    router.push('/');
  },
});
const handleDeletePost = async () => {
  if (confirm('삭제 하시겠어요?') === false) {
    return;
  }
  await executeDeletePost(0, route.params.id);
};
</script>

<style lang="scss" scoped></style>

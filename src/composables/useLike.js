import { storeToRefs } from 'pinia';
import { useAuthStore } from 'src/stores/auth';

export const useLike = (id, options) => {
  const { initialCount } = options || {};
  const { uid, isAuthenticated } = storeToRefs(useAuthStore());
  const isLike = ref(false);
  const likeCount = ref(initialCount.value);
  const postId = ref(id);

  const initLike = async () => {
    if (isAuthenticated.value === false) {
      isLike.value = false;
      return;
    }
    isLike.value = await hasLike(uid.value, postId.value);
  };

  const toggleLike = async () => {
    if (isAuthenticated.value === false) {
      alert('로그인 후 이용가능합니다.');
      return;
    }
    if (isLike.value) {
      await removeLike(uid.value, postId.value);
      likeCount.value--;
    } else {
      await addLike(uid.value, postId.value);
      likeCount.value++;
    }
    isLike.value = !isLike.value;
  };
  watch(isAuthenticated, () => initLike(), { immediate: true });

  return {
    isLike,
    likeCount,
    toggleLike,
  };
};

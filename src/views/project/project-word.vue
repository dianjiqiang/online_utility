<template>
  <div class="word">
    <iframe
      name="embed_readwrite"
      :src="`/word/p/${wordId}?showControls=true&showChat=true&showLineNumbers=true&useMonospaceFont=false`"
      width="100%"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const wordId = ref<string | string[]>('');

  onMounted(() => {
    const id = useRoute().params?.id;
    if (!id) {
      ElMessage.error('请检查对应的文件ID是否正确');
      return;
    }
    wordId.value = id;
  });
</script>

<style scoped>
  .word {
    height: 100vh;
  }

  iframe {
    display: block;
    border: none;
    height: 100vh; /*设置高度百分比,一直调到只有一个滚动调为止*/
    width: 100%;
  }
</style>

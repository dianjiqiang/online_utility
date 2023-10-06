<template>
  <div class="project">
    <h1>请选择您要使用的在线工具</h1>
    <el-button type="primary" @click="handleBtnClick('excel')">在线excel</el-button>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const handleBtnClick = (type: string) => {
    if (type === 'excel') {
      console.log('打开excel');
      router.push('/home/folder?utils=excel');
    }
  };
</script>

<style scoped></style>

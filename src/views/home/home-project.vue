<template>
  <div class="project">
    <h1>请选择您要使用的在线工具</h1>
    <el-button type="primary" @click="handleBtnClick('excel')">在线excel</el-button>
    <br />
    <el-button type="primary" @click="handleBtnClick('word')">在线word</el-button>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const handleBtnClick = (type: string) => {
    if (type === 'excel') {
      console.log('打开excel');
      router.push('/home/folder?utils=excel');
    } else if (type === 'word') {
      router.push('/home/folder?utils=word');
    }
  };
</script>

<style scoped></style>

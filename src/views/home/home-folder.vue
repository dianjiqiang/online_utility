<template>
  <div class="folder">
    <template v-for="(item, index) of fileList" :key="index">
      <div class="file-list" @click="() => handleGoOfUtils(item.id)">
        <div class="top">
          <ExcelIcon />
          <div class="content">
            <span class="name">
              {{ item.name }}
            </span>
            <div class="other-information">
              <span class="time other-item">修改时间: {{ item.updateAt }}</span>
              <span class="author other-item">创建人: {{ item.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  import ExcelIcon from '@/svg/excel-icon.vue';

  import type { LocationQueryValue } from 'vue-router';
  import type { DataType } from './data/folder.data';
  import { excelData, wordData } from './data/folder.data';

  const route = useRoute();
  const router = useRouter();
  const fileList = ref<DataType[]>([]);
  let routeType: LocationQueryValue | LocationQueryValue[] = '';

  onMounted(() => {
    if (route.query?.utils === 'excel') {
      // 请求excel的文件夹 根据用户token
      fileList.value = excelData;
    } else if (route.query?.utils === 'word') {
      fileList.value = wordData;
    }

    routeType = route.query.utils;
  });

  const handleGoOfUtils = (id: string) => {
    if (routeType === 'excel') {
      router.push('/project/sheet/' + id);
    } else if (routeType === 'word') {
      router.push('/project/word/' + id);
    }
  };
</script>

<style scoped lang="less">
  .file-list {
    box-sizing: border-box;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 16px;
    &:hover {
      background-color: #ccc;
    }
    .top {
      display: flex;
      align-items: center;
      .content {
        display: flex;
        flex-direction: column;
      }
      .other-item {
        margin-right: 16px;
      }
    }
  }
</style>

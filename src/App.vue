<template>
  <div
    id="luckysheet"
    style="
      margin: 0px;
      padding: 0px;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      top: 0px;
    "
  ></div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  import CreateOptionsType from './type/luckysheet/options';

  onMounted(() => {
    const options: CreateOptionsType = {
      container: 'luckysheet', //luckysheet为容器id
      title: '吉兰丁智能科技有限公司', // 设定表格名称
      lang: 'zh', // 设定表格语言
      functionButton:
        '<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">下载</button>',
    };

    luckysheet.create(options);
  });
</script>

<style></style>

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

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';

  import CreateOptionsType from '@/type/luckysheet/options';
  import { sheetDataToAxiosData } from '../../utils/formatSheetData';

  const route = useRoute();
  const sheetsData = ref<any>({});
  const isRefush = ref(true);

  onMounted(() => {
    // 取出文件id
    const id = route.params.id;

    if (!id) {
      ElMessage.error('未获取到正确id, 请联系管理员处理');
      return;
    }

    const options: CreateOptionsType = {
      container: 'luckysheet', //luckysheet为容器id
      title: '吉兰丁智能科技有限公司', // 设定表格名称
      lang: 'zh', // 设定表格语言
      plugins: [
        { name: 'chart' },
        { name: 'exportXlsx', config: { url: 'http://localhost:3002/luckyToXlsx' } },
        {
          name: 'print',
          config: {
            license: '',
          },
        },
      ],
      functionButton:
        '<button id="downLoadId" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">下载</button>',
      hook: {
        updated(operate) {
          console.log(operate);

          if (operate.type === 'datachange') {
            if (isRefush.value) {
              // 对比出和本身的区别 , 然后再进行推送或者修改
              const res = sheetDataToAxiosData(sheetsData.value, operate.curdata);
              sheetsData.value = operate.curdata;
              console.log(res);
              setCellValue(1, 1, { v: '小黑', fc: '#ff0000' });
            } else {
              isRefush.value = true;
            }
          } else if (operate.type === 'resize') {
            console.log(operate);
          }
        },
        sheetActivate(index, isPivotInitial, isNewSheet) {
          // 新建
          if (isNewSheet) {
            console.log('新创建的工作表');
          }
          // 是数据透视表页面
          if (isPivotInitial) {
            console.log('数据透视表页面');
          }
          console.log(index, 'sheet index');
        },
      },
    };

    luckysheet.create(options);
    setTimeout(() => {
      sheetsData.value = luckysheet.flowdata();
    }, 1000);
  });

  const setCellValue = (row: number, column: number, value: any, setting?: any) => {
    luckysheet.setCellValue(row, column, value, setting);
    isRefush.value = false;
    setTimeout(() => {
      luckysheet.setCellValue(row, column, value, setting);
      isRefush.value = false;
    });
  };
</script>

<style scoped></style>

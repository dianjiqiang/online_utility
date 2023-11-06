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
  import { onMounted, ref, onUnmounted } from 'vue';
  import { useRoute } from 'vue-router';

  import CreateOptionsType from '@/type/luckysheet/options';
  // import { sheetDataToAxiosData } from '../../utils/formatSheetData';
  import { create300wData } from './basicData';

  const route = useRoute();
  const sheetsData = ref<any>({});
  // const isRefush = ref(true);

  onMounted(() => {
    // 取出文件id
    const id = route.params.id;

    if (!id) {
      ElMessage.error('未获取到正确id, 请联系管理员处理');
      return;
    }

    const options: CreateOptionsType = {
      container: 'luckysheet', //luckysheet为容器id
      title: id === '123' ? '吉兰丁智能科技有限公司' : 'one last kiss', // 设定表格名称
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
      data: [
        {
          name: 'Cell',
          index: '0',
          zoomRatio: 1,
          order: '0',
          column: 18,
          row: 36,
          status: 1,
          celldata: id === '123' ? create300wData() : [],
          ch_width: 2361,
          rh_height: 936,
          luckysheet_select_save: [
            {
              left: 741,
              width: 138,
              top: 796,
              height: 19,
              left_move: 741,
              width_move: 138,
              top_move: 796,
              height_move: 19,
              row: [33, 33],
              column: [6, 6],
              row_focus: 33,
              column_focus: 6,
            },
          ],
          calcChain: [
            {
              r: 0,
              c: 3,
              index: '0',
              func: [true, 3, '=Formula!A1+Formula!B1'],
              color: 'w',
              parent: null,
              chidren: {},
              times: 0,
            },
          ],
          scrollLeft: 0,
          scrollTop: 0,
        },
      ],
      functionButton:
        '<button id="downLoadId" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">下载</button>',
      hook: {
        updated(operate) {
          // console.log(operate);
          // if (operate.type === 'datachange') {
          //   if (isRefush.value) {
          //     // 对比出和本身的区别 , 然后再进行推送或者修改
          //     const res = sheetDataToAxiosData(sheetsData.value, operate.curdata);
          //     sheetsData.value = operate.curdata;
          //     console.log(res);
          //     setCellValue(1, 1, { v: '小黑', fc: '#ff0000' });
          //   } else {
          //     isRefush.value = true;
          //   }
          // } else if (operate.type === 'resize') {
          //   console.log(operate);
          // }
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
        workbookCreateAfter() {
          console.log('大家好我是定制珍珠');

          sheetsData.value = luckysheet.flowdata();
          const downLoadId = document.getElementById('downLoadId');
          if (downLoadId) {
            downLoadId.onclick = () => {
              console.log('大家好我是定制珍珠');
            };
          }
        },
      },
    };

    luckysheet.create(options);
  });

  // const setCellValue = (row: number, column: number, value: any, setting?: any) => {
  //   luckysheet.setCellValue(row, column, value, setting);
  //   isRefush.value = false;
  // };

  onUnmounted(() => {
    location.reload();
  });
</script>

<style scoped></style>

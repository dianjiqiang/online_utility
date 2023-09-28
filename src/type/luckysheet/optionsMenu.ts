export interface ShowtoolbarConfigType {
  undoRedo: boolean; //撤销重做，注意撤消重做是两个按钮，由这一个配置决定显示还是隐藏
  paintFormat: boolean; //格式刷
  currencyFormat: boolean; //货币格式
  percentageFormat: boolean; //百分比格式
  numberDecrease: boolean; // '减少小数位数'
  numberIncrease: boolean; // '增加小数位数
  moreFormats: boolean; // '更多格式'
  font: boolean; // '字体'
  fontSize: boolean; // '字号大小'
  bold: boolean; // '粗体 (Ctrl+B)'
  italic: boolean; // '斜体 (Ctrl+I)'
  strikethrough: boolean; // '删除线 (Alt+Shift+5)'
  underline: boolean; // '下划线 (Alt+Shift+6)'
  textColor: boolean; // '文本颜色'
  fillColor: boolean; // '单元格颜色'
  border: boolean; // '边框'
  mergeCell: boolean; // '合并单元格'
  horizontalAlignMode: boolean; // '水平对齐方式'
  verticalAlignMode: boolean; // '垂直对齐方式'
  textWrapMode: boolean; // '换行方式'
  textRotateMode: boolean; // '文本旋转方式'
  image: boolean; // '插入图片'
  link: boolean; // '插入链接'
  chart: boolean; // '图表'（图标隐藏，但是如果配置了chart插件，右击仍然可以新建图表）
  postil: boolean; //'批注'
  pivotTable: boolean; //'数据透视表'
  function: boolean; // '公式'
  frozenMode: boolean; // '冻结方式'
  sortAndFilter: boolean; // '排序和筛选'
  conditionalFormat: boolean; // '条件格式'
  dataVerification: boolean; // '数据验证'
  splitColumn: boolean; // '分列'
  screenshot: boolean; // '截图'
  findAndReplace: boolean; // '查找替换'
  protection: boolean; // '工作表保护'
  print: boolean; // '打印'
}

export interface ShowsheetbarConfigType {
  add: boolean; //新增sheet
  menu: boolean; //sheet管理菜单
  sheet: boolean; //sheet页显示
}

export interface ShowstatisticBarConfigType {
  count: boolean; // 计数栏
  view: boolean; // 打印视图
  zoom: boolean; // 缩放
}

// {
//   url: 'www.baidu.com';
//   icon: '<i class="fa fa-folder" aria-hidden="true"></i>';
//   name: '我的表格';
// }
export interface UserMenuItemType {
  url: string; // 地址
  icon: string; // json字符串
  name: string; // 名称
}

export interface CellRightClickConfigType {
  copy: boolean; // 复制
  copyAs: boolean; // 复制为
  paste: boolean; // 粘贴
  insertRow: boolean; // 插入行
  insertColumn: boolean; // 插入列
  deleteRow: boolean; // 删除选中行
  deleteColumn: boolean; // 删除选中列
  deleteCell: boolean; // 删除单元格
  hideRow: boolean; // 隐藏选中行和显示选中行
  hideColumn: boolean; // 隐藏选中列和显示选中列
  rowHeight: boolean; // 行高
  columnWidth: boolean; // 列宽
  clear: boolean; // 清除内容
  matrix: boolean; // 矩阵操作选区
  sort: boolean; // 排序选区
  filter: boolean; // 筛选选区
  chart: boolean; // 图表生成
  image: boolean; // 插入图片
  link: boolean; // 插入链接
  data: boolean; // 数据验证
  cellFormat: boolean; // 设置单元格格式
}

export interface SheetRightClickConfigType {
  delete: boolean; // 删除
  copy: boolean; // 复制
  rename: boolean; //重命名
  color: boolean; //更改颜色
  hide: boolean; //隐藏，取消隐藏
  move: boolean; //向左移，向右移
}

export interface PagerType {
  pageIndex: number; //当前的页码  1
  pageSize: number; //每页显示多少行数据  10
  total: number; //数据总行数  50
  selectOption: [number, number]; //允许设置每页行数的选项  [10, 20]
}

export interface PositionType {
  r: number; // 单元格所在行号
  c: number; // 单元格所在列号
  start_r: number; // 单元格左上角的水平坐标
  start_c: number; // 单元格左上角的垂直坐标
  end_r: number; // 单元格右下角的水平坐标
  end_c: number; // 单元格右下角的垂直坐标
}

export interface moveStateType {
  functionResizeStatus: boolean; // 工具栏拖动
  horizontalmoveState: boolean; //水平冻结分割栏拖动
  verticalmoveState: boolean; // 垂直冻结分割栏拖动
  pivotTableMoveState: boolean; // 数据透视表字段拖动
  sheetMoveStatus: boolean; // sheet改变你的位置拖动
  scrollStatus: boolean; // 鼠标触发了滚动条移动
  selectStatus: boolean; // 鼠标移动框选数据
  rowsSelectedStatus: boolean; // 通过行标题来选择整行操作
  colsSelectedStatus: boolean; // 通过列标题来选择整列操作
  cellSelectedMove: boolean; // 选框的移动
  cellSelectedExtend: boolean; // 选框下拉填充
  colsChangeSize: boolean; // 拖拽改变列宽
  rowsChangeSize: boolean; // 拖拽改变行高
  chartMove: boolean; // 图表移动
  chartResize: boolean; // 图表改变大小
  rangeResize: boolean; // 公式参数高亮选区的大小拖拽
  rangeMove: boolean; // 公式参数高亮选区的位置拖拽
}

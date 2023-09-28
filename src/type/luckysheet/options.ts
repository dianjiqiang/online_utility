import type {
  ShowtoolbarConfigType,
  ShowsheetbarConfigType,
  ShowstatisticBarConfigType,
  UserMenuItemType,
  CellRightClickConfigType,
  SheetRightClickConfigType,
  PagerType,
} from './optionsMenu';

import { HookType } from './optionsHook';

interface OptionsType {
  container: string; //容器ID
  title: string; //工作簿名称
  lang: 'en' | 'zh' | 'zh_tw' | 'es'; // 语言
  gridKey: string; //表格唯一标识
  loadUrl: string; // 加载所有工作表的配置，并包含当前页单元格数据 与"loadSheetUrl"配合使用。参数为gridKey 详情参阅 https://dream-num.github.io/LuckysheetDocs/zh/guide/config.html#%E9%85%8D%E7%BD%AE%E9%A1%B9
  loadSheetUrl: string; // 配置loadSheetUrl接口地址，用于异步加载其它单元格数据参数为gridKey（表格主键） 和 index
  allowUpdate: boolean; //是否允许操作表格后的后台更新，与updateUrl配合使用。如果要开启共享编辑，此参数必须设置为true
  updateUrl: string; // 操作表格后，实时保存数据的websocket地址，此接口也是共享编辑的接口地址。
  plugins: { name: string; config?: any }[]; // 插件
  updateImageUrl: string; //缩略图更新地址
  data: any[];
  column: number; // 空表格默认的列数量  默认60
  row: number; // 空表格默认的行数据量 默认 84
  autoFormatw: boolean; // 自动格式化超过4位数的数字为‘亿万格式’，例：true or "true" or "TRUE" false
  accuracy: number; // 设置精度，小数点后的位数。传参数为数字或数字字符串，例： "0" 或 0
  allowCopy: boolean; // 是否允许拷贝 true
  showtoolbar: boolean; // 是否显示工具栏
  showtoolbarConfig: Partial<ShowtoolbarConfigType>; // 自定义配置工具栏，可以与showtoolbar配合使用，showtoolbarConfig拥有更高的优先级。
  showinfobar: boolean; // 是否显示顶部信息栏 true
  showsheetbar: boolean; // 是否显示底部sheet页按钮  true
  showsheetbarConfig: Partial<ShowsheetbarConfigType>; // 自定义配置底部sheet页按钮，可以与showsheetbar配合使用，showsheetbarConfig拥有更高的优先级。
  showstatisticBar: boolean; // 是否显示底部计数栏  true
  showstatisticBarConfig: Partial<ShowstatisticBarConfigType>; // 自定义配置底部计数栏，可以与showstatisticBar配合使用，showstatisticBarConfig拥有更高的优先级。
  enableAddRow: boolean; // 允许添加行 true
  enableAddBackTop: boolean; // 允许回到顶部  true
  userInfo: string | boolean | object; // 右上角的用户信息展示样式，支持以下三种形式  HTML模板字符串/false不展示/对象格式
  userMenuItem: Partial<UserMenuItemType>[];
  myFolderUrl: string; // 左上角<返回按钮的链接
  devicePixelRatio: number; //设备比例，比例越大表格分辨率越高  window.devicePixelRatio
  functionButton: string; // 右上角功能按钮  '<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">下载</button>'
  showConfigWindowResize: boolean; // 图表或数据透视表的配置会在右侧弹出，设置弹出后表格是否会自动缩进  true
  forceCalculation: boolean; // 强制刷新公式。 默认情况下，为提高加载性能，表格初始化的时候，含有公式的单元格会默认直接取得v和m作为数据结果，而不做实时计算。
  cellRightClickConfig: Partial<CellRightClickConfigType>; // 自定义配置单元格右击菜单 {}
  sheetRightClickConfig: Partial<SheetRightClickConfigType>; //自定义配置sheet页右击菜单 {}
  rowHeaderWidth: number; // 行标题区域的宽度，如果设置为0，则表示隐藏行标题 46
  columnHeaderHeight: number; // 列标题区域的高度，如果设置为0，则表示隐藏列标题 20
  sheetFormulaBar: boolean; // 是否显示公式栏 true
  defaultFontSize: number; // 初始化默认字体大小 11
  limitSheetNameLength: boolean; // 工作表重命名等场景下是否限制工作表名称的长度
  defaultSheetNameMaxLength: number; // 默认允许的工作表名最大长度 31
  pager: Partial<PagerType>; // 分页器按钮设置   点击分页按钮会触发钩子函数 onTogglePager，返回当前页码，同sPage的backFun方法，此分页器设置只负责UI部分，具体切换分页后的数据请求和数据渲染，请在onTogglePager钩子行数里自定义处理。
  hook: Partial<HookType>;
}

type CreateOptionsType = Partial<OptionsType>;

export default CreateOptionsType;

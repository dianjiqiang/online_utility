import { PositionType, moveStateType } from './optionsMenu';

export interface keyDownHook {
  /**
   * 进入单元格编辑模式之前触发。在选中了某个单元格且在非编辑状态下，通常有以下三种常规方法触发进入编辑模式
   * 双击单元格
   * 敲Enter键
   * 使用API：enterEditMode
   * @param range {Array} [range]: 当前选区范围
   * @returns undefined
   */
  cellEditBefore: (range: [number, number]) => void;
  /**
   * 更新这个单元格值之前触发，return false 则不执行后续的更新。在编辑状态下修改了单元格之后，退出编辑模式并进行数据更新之前触发这个钩子。
   * @param r {Number} [r]: 单元格所在行数
   * @param c {Number} [c]: 单元格所在列数
   * @param value {Object | String | Number} [value]: 要修改的单元格内容
   * @param isRefresh {Boolean} [isRefresh]: 是否刷新整个表格
   * @returns undefined
   */
  cellUpdateBefore: (r: number, c: number, value: any, isRefresh: boolean) => void | boolean;
  /**
   * 更新这个单元格后触发
   * @param r 单元格所在行数
   * @param c 单元格所在列数
   * @param oldValue 修改前的单元格对象
   * @param newValue 修改后的单元格对象
   * @param isRefresh 是否刷新整个表格
   * @returns false 不修改
   */
  cellUpdated: (
    r: number,
    c: number,
    oldValue: any,
    newValue: any,
    isRefresh: boolean,
  ) => void | boolean;
  /**
   * 单元格渲染前触发，return false 则不渲染该单元格
   * @param cell {Object} [cell]:单元格对象
   * @param position  PositionType
   * @param sheet {Object} [sheet]:当前sheet对象
   * @param ctx {Object} [ctx]: 当前画布的context
   * @returns void
   */
  cellRenderBefore: (cell: any, position: PositionType, sheet: any, ctx: any) => void | boolean;
  /**
   * 单元格渲染后触发，return false 则不渲染该单元格
   * @param cell {Object} [cell]:单元格对象
   * @param position  PositionType
   * @param sheet {Object} [sheet]:当前sheet对象
   * @param ctx {Object} [ctx]: 当前画布的context
   * @returns void
   */
  cellRenderAfter: (cell: any, position: PositionType, sheet: any, ctx: any) => void | boolean;
  /**
   * 行标题单元格渲染前触发，return false 则不渲染行标题
   * @param rowNum 行号
   * @param position positionType
   * @param ctx 当前画布的context
   * @returns void | boolean
   */
  rowTitleCellRenderBefore: (rowNum: number, position: PositionType, ctx: any) => void | boolean;
  /**
   * 行标题单元格渲染后触发，return false 则不渲染行标题
   * @param rowNum 行号
   * @param position positionType
   * @param ctx 当前画布的context
   * @returns void | boolean
   */
  rowTitleCellRenderAfter: (rowNum: number, position: PositionType, ctx: any) => void | boolean;
  /**
   * 列标题单元格渲染前触发，return false 则不渲染列标题
   * @param columnAbc {Object} [columnAbc]:列标题字符
   * @param position PositionType
   * @param ctx 当前画布的context
   * @returns void | boolean
   */
  columnTitleCellRenderBefore: (columnAbc: any, position: PositionType, ctx: any) => void | boolean;
  /**
   * 列标题单元格渲染后触发，return false 则不渲染列标题
   * @param columnAbc {Object} [columnAbc]:列标题字符
   * @param position PositionType
   * @param ctx 当前画布的context
   * @returns void | boolean
   */
  columnTitleCellRenderAfter: (columnAbc: any, position: PositionType, ctx: any) => void | boolean;
}

export interface mouseHook {
  /**
   * 单元格点击前的事件，return false则终止之后的点击操作
   * @param cell 单元格对象
   * @param position PositionType
   * @param sheet 当前sheet对象
   * @param ctx 当前画布的context
   * @returns void | boolean
   */
  cellMousedownBefore: (cell: any, position: PositionType, sheet: any, ctx: any) => void | boolean;
  /**
   * 单元格点击后的事件，return false则终止之后的点击操作
   * @param cell 单元格对象
   * @param position PositionType
   * @param sheet 当前sheet对象
   * @param ctx 当前画布的context
   * @returns void | boolean
   */
  cellMousedown: (cell: any, position: PositionType, sheet: any, ctx: any) => void | boolean;
  /**
   * 鼠标移动事件，可通过cell判断鼠标停留在哪个单元格
   * @param cell 单元格对象
   * @param position PositionType
   * @param sheet 当前sheet对象
   * @param moveState moveStateType
   * @param ctx 当前画布的context
   * @returns void
   */
  sheetMousemove: (
    cell: any,
    position: PositionType,
    sheet: any,
    moveState: moveStateType,
    ctx: any,
  ) => void;
  /**
   * 鼠标释放事件，可通过cell判断鼠标停留在哪个单元格
   * @param cell 单元格对象
   * @param position PositionType
   * @param sheet 当前sheet对象
   * @param moveState moveStateType
   * @param ctx 当前画布的context
   * @returns void
   */
  sheetMouseup: (
    cell: any,
    position: PositionType,
    sheet: any,
    moveState: moveStateType,
    ctx: any,
  ) => void;
  /**
   * 鼠标滚动事件
   * @param position { scrollLeft: 横向滚动条位置; scrollTop: 纵向滚动条位置; canvasHeight: canvas高度 }
   * @returns void
   */
  scroll: (position: { scrollLeft: number; scrollTop: number; canvasHeight: number }) => void;
  /**
   * 鼠标拖拽文件到Luckysheet内部的结束事件
   * @param cell 单元格对象
   * @param position PositionType
   * @param shell 当前sheet对象
   * @param ctx 当前画布的context
   * @param event 当前事件对象
   * @returns void
   */
  cellDragStop: (cell: any, position: PositionType, shell: any, ctx: any, event: Event) => void;
}

export interface constituencyHook {
  /**
   * 框选或者设置选区后触发
   * @param sheet 当前sheet对象
   * @param range 选区范围，可能为多个选区
   * @returns void
   */
  rangeSelect: (sheet: any, range: any) => void;
  /**
   * 移动选区前，包括单个单元格
   * @param range 当前选区范围，只能为单个选区
   * @returns void
   */
  rangeMoveBefore: (range: [number, number]) => void;
  /**
   * 移动选区后，包括单个单元格
   * @param oldRange 移动前当前选区范围，只能为单个选区
   * @param newRange 移动后当前选区范围，只能为单个选区
   * @returns void
   */
  rangeMoveAfter: (oldRange: [number, number], newRange: [number, number]) => void;
  /**
   * 选区修改前
   * @param range 选区范围，可能为多个选区
   * @param data 选区范围所对应的数据
   * @returns void
   */
  rangeEditBefore: (range: any, data: any) => void;
  /**
   * 选区修改后
   * @param range 选区范围，可能为多个选区
   * @param oldData 选区范围所对应的旧数据
   * @param newData 选区范围所对应的新数据
   * @returns void
   */
  rangeEditAfter: (range: any, oldData: any, newData: any) => void;
  /**
   * 选区复制前
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangeCopyBefore: (range: any, data: any) => void;
  /**
   * 选区复制后
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangeCopyAfter: (range: any, data: any) => void;
  /**
   * 选区粘贴前
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangePasteBefore: (range: any, data: any) => void;
  /**
   * 选区粘贴后
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangePasteAfter: (range: any, data: any) => void;
  /**
   * 选区剪贴前
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangeCutBefore: (range: any, data: any) => void;
  /**
   * 选区剪贴后
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangeCutAfter: (range: any, data: any) => void;
}

export type HookType = keyDownHook | mouseHook;

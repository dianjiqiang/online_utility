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
  /**
   * 选区删除前
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangeDeleteBefore: (range: any, data: any) => void;
  /**
   * 选区删除后
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangeDeleteAfter: (range: any, data: any) => void;
  /**
   * 选区清除前
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangeClearBefore: (range: any, data: any) => void;
  /**
   * 选区清除后
   * @param range {Object | Array} [range]: 选区范围，可能为多个选区
   * @param data {Object} [data]: 选区范围所对应的数据
   * @returns void
   */
  rangeClearAfter: (range: any, data: any) => void;
  /**
   * 选区下拉前
   * @param range {Array} [range]: 当前选区范围，只能为单个范围
   * @returns void
   */
  rangePullBefore: (range: [number, number]) => void;
  /**
   * 选区下拉后
   * @param range {Array} [range]: 当前选区范围，只能为单个范围
   * @returns void
   */
  rangePullAfter: (range: [number, number]) => void;
}

export interface sheetHook {
  /**
   * 创建sheet页前触发，sheet页新建也包含数据透视表新建
   * @returns void
   */
  sheetCreatekBefore: () => void;
  /**
   * 创建sheet页后触发，sheet页新建也包含数据透视表新建
   * @returns void
   */
  sheetCreateAfter: () => void;
  /**
   * sheet移动前
   * @param i {Number} [i]: 当前sheet页的index
   * @param order {Number} [order]: 当前sheet页order
   * @returns void
   */
  sheetMoveBefore: (i: number, order: number) => void;
  /**
   * sheet移动后
   * @param i 当前sheet index
   * @param oldOrder 修改前sheet页 order
   * @param newOrder 修改后sheet页 order
   * @returns
   */
  sheetMoveAfter: (i: number, oldOrder: number, newOrder: number) => void;
  /**
   * sheet删除前
   * @param sheet 要被删除sheet页的配置
   * @returns void
   */
  sheetDeleteBefore: (sheet: any) => void;
  /**
   * sheet删除后
   * @param sheet 要被删除sheet页的配置
   * @returns void
   */
  sheetDeleteAfter: (sheet: any) => void;
  /**
   * sheet修改名称前
   * @param i  sheet页的index
   * @param name 当前sheet页名称
   * @returns void
   */
  sheetEditNameBefore: (i: number, name: string) => void;
  /**
   * sheet修改名称后
   * @param i sheet页的index
   * @param oldName 修改前当前sheet页名称
   * @param newName 修改后当前sheet页名称
   * @returns void
   */
  sheetEditNameAfter: (i: number, oldName: string, newName: string) => void;
  /**
   * sheet修改颜色前
   * @param i sheet页的index
   * @param color 当前sheet页颜色
   * @returns
   */
  sheetEditColorBefore: (i: number, color: string) => void;
  /**
   * sheet修改颜色后
   * @param i sheet页的index
   * @param oldColor 修改前当前sheet页颜色
   * @param newColor 修改后当前sheet页颜色
   * @returns
   */
  sheetEditColorAfter: (i: number, oldColor: string, newColor: string) => void;
  /**
   * sheet缩放前
   * @param i sheet页的index
   * @param zoom 当前sheet页缩放比例
   * @returns
   */
  sheetZoomBefore: (i: number, zoom: string) => void;
  /**
   * sheet缩放后
   * @param i {Number} [i]: sheet页的index
   * @param oldZoom {String} [oldZoom]: 修改前当前sheet页缩放比例
   * @param newZoom {String} [newZoom]: 修改后当前sheet页缩放比例
   * @returns
   */
  sheetZoomAfter: (i: number, oldZoom: string, newZoom: string) => void;
  /**
   * 激活工作表前
   * @param i {Number} [i]: sheet页的index
   * @param isPivotInitial {Boolean} [isPivotInitial]: 是否切换到了数据透视表页
   * @param isNewSheet {Boolean} [isNewSheet]: 是否新建了sheet页
   * @returns
   */
  sheetActivate: (i: number, isPivotInitial: boolean, isNewSheet: boolean) => void;
  /**
   * 工作表从活动状态转为非活动状态前
   * @param i {Number} [i]: sheet页的index
   * @returns
   */
  sheetDeactivateBefore: (i: number) => void;
  /**
   * 工作表从活动状态转为非活动状态后
   * @param i
   * @returns {Number} [i]: sheet页的index
   */
  sheetDeactivateAfter: (i: number) => void;
}

export interface workBookHook {
  /**
   * 表格创建之前触发。旧的钩子函数叫做beforeCreateDom
   * @param book {Object} [book]: 整个工作簿的配置（options）
   * @returns
   */
  workbookCreateBefore: (book: any) => void;
  /**
   * 表格创建之后触发
   * @param book {Object} [book]: 整个工作簿的配置（options）
   * @returns
   */
  workbookCreateAfter: (book: any) => void;
  /**
   * 表格销毁之前触发
   * @param book {Object} [book]: 整个工作簿的配置（options）
   * @returns
   */
  workbookDestroyBefore: (book: any) => void;
  /**
   * 表格销毁之后触发
   * @param book {Object} [book]: 整个工作簿的配置（options）
   * @returns
   */
  workbookDestroyAfter: (book: any) => void;
  /**
   * 协同编辑中的每次操作后执行的方法，监听表格内容变化，即客户端每执行一次表格操作，Luckysheet将这次操作存到历史记录中后触发，撤销重做时因为也算一次操作，也会触发此钩子函数。
   * @param operate 本次操作的历史记录信息，根据不同的操作，会有不同的历史记录
   * @returns void
   */
  updated: (operate: any) => void;
  /**
   * resize执行之后
   * @param size 整个工作簿区域的宽高
   * @returns
   */
  resized: (size: any) => void;
}

export interface imageBefore {
  /**
   * 图片插入之前
   * @param url 图片地址
   * @returns
   */
  imageInsertBefore: (url: any) => void;
  /**
   * 图片插入之后
   * @param url 图片地址、宽高、位置等信息
   * @returns
   */
  imageInsertAfter: (item: any) => void;
  /**
   * 图片插入之后
   * @param url 图片地址、宽高、位置等信息
   * @returns
   */
  imageUpdateBefore: (item: any) => void;
  /**
   * 图片修改之后，修改的内容包括宽高、位置、裁剪等操作
   * @param oldItem 旧图片地址、宽高、位置等信息
   * @param newItem 新图片地址、宽高、位置等信息
   * @returns
   */
  imageUpdateAfter: (oldItem: any, newItem: any) => void;
  /**
   * 图片删除前
   * @param url 图片地址、宽高、位置等信息
   * @returns
   */
  imageDeleteBefore: (item: any) => void;
  /**
   * 图片删除之后
   * @param url 图片地址、宽高、位置等信息
   * @returns
   */
  imageDeleteAfter: (item: any) => void;
}

export interface remarkHook {
  /**
   * 插入批注之前，return false 则不插入批注
   * @param r 单元格所在行号
   * @param c 单元格所在列号
   * @returns void | boolean
   */
  commentInsertBefore: (r: number, c: number) => void | boolean;
  /**
   * 插入批注之后
   * @param r 单元格所在行号
   * @param c 单元格所在列号
   * @param cell 被插入批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}，包含批注信息
   * @returns void
   */
  commentInsertAfter: (r: number, c: number, cell: any) => void;
  /**
   * 删除批注之前，return false 则不删除批注
   * @param r 单元格所在行号
   * @param c 单元格所在列号
   * @param cell 要删除的批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}，包含批注信息
   * @returns void | boolean
   */
  commentDeleteBefore: (r: number, c: number, cell: any) => void | boolean;
  /**
   * 删除批注之后
   * @param r 单元格所在行号
   * @param c 单元格所在列号
   * @param cell 要删除的批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}，包含批注信息
   * @returns void
   */
  commentDeleteAfter: (r: number, c: number, cell: any) => void;
  /**
   * 修改批注之前，return false 则不修改批注
   * @param r 单元格所在行号
   * @param c 单元格所在列号
   * @param value 新的批注内容
   * @returns void | boolean
   */
  commentUpdateBefore: (r: number, c: number, value: string) => void | boolean;
  /**
   * 修改批注之后
   * @param r 单元格所在行号
   * @param c 单元格所在列号
   * @param oldCell 修改前批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}
   * @param newCell 修改前批注所在的单元格信息，如：{ r:0,c:2,v:{m:'233',v:'233'}}
   * @returns void
   */
  commentUpdateAfter: (r: number, c: number, oldCell: any, newCell: any) => void;
}

export interface pivotTableHook {
  /**
   * 修改数据透视表之前，操作如：拖动字段等
   * @param sheet 数据透视表所在sheet页配置
   * @returns
   */
  pivotTableEditBefore: (sheet: any) => void;
  /**
   * 修改数据透视表之后，操作如：拖动字段等
   * @param oldSheet 修改前数据透视表所在sheet页配置
   * @param newSheet 修改后数据透视表所在sheet页配置
   * @returns
   */
  pivotTableEditAfter: (oldSheet: any, newSheet: any) => void;
}

export interface freezeHook {
  /**
   * 设置冻结前
   * @param frozen {Object} [frozen]: 冻结类型信息
   * @returns
   */
  frozenCreateBefore: (frozen: any) => void;
  /**
   * 设置冻结后
   * @param frozen {Object} [frozen]: 冻结类型信息
   * @returns
   */
  frozenCreateAfter: (frozen: any) => void;
  /**
   * 取消冻结前
   * @param frozen {Object} [frozen]: 冻结类型信息
   * @returns
   */
  frozenCancelBefore: (frozen: any) => void;
  /**
   * 取消冻结后
   * @param frozen {Object} [frozen]: 冻结类型信息
   * @returns
   */
  frozenCancelAfter: (frozen: any) => void;
}

export interface pointHook {
  /**
   * 打印前
   * @returns
   */
  printBefore: () => void;
}

export interface pageUtilsHook {
  /**
   * 点击分页按钮回调函数，返回当前页码
   * @param page {Object} [page]: 返回当前分页对象
   * @returns
   */
  onTogglePager: (page: any) => void;
}

export type HookType =
  | keyDownHook
  | mouseHook
  | sheetHook
  | workBookHook
  | imageBefore
  | remarkHook
  | pivotTableHook
  | freezeHook
  | pointHook
  | pageUtilsHook;

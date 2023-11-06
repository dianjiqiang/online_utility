declare let luckysheet: {
  create: (options: CreateOptionsType) => any;
  /**
   * 设置单元格值
   * @param row {Number} [row]: 单元格所在行数；从0开始的整数，0表示第一行
   * @param column {Number} [column]: 单元格所在列数；从0开始的整数，0表示第一列
   * @param value {Object | String | Number} [value]: 要设置的值；可以为字符串或数字，或为符合Luckysheet单元格格式的对象，参考 单元格属性表
   * @param setting 
        {PlainObject} [setting]: 可选参数
        {Number} [order]: 工作表下标；默认值为当前工作表下标
        {Boolean} [isRefresh]: 是否刷新界面；默认为true；用于多个单元格赋值时候控制节流，前面单元格赋值的时候应设置为 false，最后一个单元格赋值时设置为true。
        {Function} [success]: 操作结束的回调函数
   * @returns 
   */
  setCellValue: (row, column, value, setting?) => any;
  /**
   * @returns data数据
   */
  flowdata: () => any;
  /**
   * {PlainObject} [setting]: 可选参数
   * {Function} [success]: 表格释放成功后的回调函数
   */
  destroy: () => void;
};

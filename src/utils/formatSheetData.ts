const _diffObjectOrArray = (obj1, obj2) => {
  // 检查类型是否相同
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // 如果是基本数据类型，直接比较值
  if (typeof obj1 !== 'object' || obj1 === null) {
    return obj1 === obj2;
  }

  // 获取两个对象的属性名称数组
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // 比较属性数量
  if (keys1.length !== keys2.length) {
    return false;
  }

  // 递归比较每个属性的值
  for (const key of keys1) {
    if (!_diffObjectOrArray(obj1[key], obj2[key])) {
      return false;
    }
  }

  // 如果没有找到不同，返回 true
  return true;
};

// 简单的diff算法
/**
 * 状况处理
 *  1 两个数组长度不一样
 *  2 两个数组长度一样
 *    2.1 arr1 为 null arr2不为null
 *    2.2 arr1 不为 null  arr2为null
 *    2.3 arr1 和 arr2 都为null
 *    2.4 arr1 和 arr2 都不为null
 */
export const sheetDataToAxiosData = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    // 刷新整张表格  所有包含的数据都刷新
    const newArray: any[] = [];
    arr2.forEach((item, index: number) => {
      item.forEach((item2, index2: number) => {
        if (item2 !== null) {
          newArray.push({
            row: index,
            column: index2,
            ...item2,
          });
        }
      });
    });
    return newArray;
  } else {
    const newArray: any[] = [];
    arr2.forEach((item, index: number) => {
      item.forEach((item2, index2: number) => {
        if (arr1[index][index2] === null && item2 !== null) {
          newArray.push({
            row: index,
            column: index2,
            ...item2,
          });
        } else if (arr1[index][index2] !== null && item2 === null) {
          newArray.push({
            row: index,
            column: index2,
            v: null,
          });
        } else if (arr1[index][index2] !== null && item2 !== null) {
          // 2.4操作  做数值比较
          if (!_diffObjectOrArray(arr1[index][index2], item2)) {
            newArray.push({
              row: index,
              column: index2,
              ...item2,
            });
          }
        }
        // 2.3 不做任何操作
      });
    });
    return newArray;
  }
};

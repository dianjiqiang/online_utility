export const create300wData = () => {
  const arr = [] as any;
  for (let i = 0; i < 300000; i++) {
    for (let k = 0; k < 10; k++) {
      const newObject = {
        r: i,
        c: k,
        v: {
          v: i + k,
          m: i + k,
        },
      };
      arr.push(newObject);
    }
  }

  return arr;
};

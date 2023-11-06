export type DataType = {
  id: string;
  type: string;
  name: string;
  size: string;
  collaboratorsNames: string[];
  author: string;
  createAt: string;
  updateAt: string;
};

export const excelData = [
  {
    id: '123',
    type: 'excel',
    name: '砂之惑星',
    size: '22.33kb',
    collaboratorsNames: ['miku', '米津玄师'],
    author: '米津玄师',
    createAt: '2022-3-4 22:33:44',
    updateAt: '2023-4-5 12:32:44',
  },
  {
    id: '234',
    type: 'excel',
    name: 'loser',
    size: '22.43kb',
    collaboratorsNames: ['米津玄师'],
    author: '米津玄师',
    createAt: '2022-3-4 22:33:44',
    updateAt: '2023-4-5 12:32:44',
  },
  {
    id: '456',
    type: 'excel',
    name: 'KICK BACK',
    size: '22.33kb',
    collaboratorsNames: ['米津玄师'],
    author: '米津玄师',
    createAt: '2022-3-4 22:33:44',
    updateAt: '2023-4-5 12:32:44',
  },
];

export const wordData = [
  {
    id: '789',
    type: 'word',
    name: '砂之惑星',
    size: '22.33kb',
    collaboratorsNames: ['miku', '米津玄师'],
    author: '米津玄师',
    createAt: '2022-3-4 22:33:44',
    updateAt: '2023-4-5 12:32:44',
  },
  {
    id: '890',
    type: 'word',
    name: 'loser',
    size: '222mb',
    collaboratorsNames: ['米津玄师'],
    author: '米津玄师',
    createAt: '2022-3-4 22:33:44',
    updateAt: '2023-4-5 12:32:44',
  },
  {
    id: 'tumuxuezhang',
    type: 'word',
    name: '土木圣经',
    size: '1kb',
    collaboratorsNames: ['土木学长', '土木学长211'],
    author: '土木学长',
    createAt: '2022-3-4 22:33:44',
    updateAt: '2023-4-5 12:32:44',
  },
];

export const arrayData = ['离开地球表面', '像我这样的人', '冬天的秘密'];

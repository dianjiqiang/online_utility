import { createRouter, createWebHashHistory } from 'vue-router';

import homeFolderVue from '@/views/home/home-folder.vue';
import homeProjectVue from '@/views/home/home-project.vue';

// 配置映射关系
const routes = [
  {
    path: '/',
    redirect: '/home', //重定向  我们在子组件重定向的时候 必须写完整的路由路径才能正确跳转
  },
  {
    name: 'Home', //给路由指定的唯一一个名字
    path: '/home',
    redirect: '/home/project',
    children: [
      {
        name: 'HomeProject',
        path: 'project',
        component: homeProjectVue,
      },
      {
        name: 'HomeFolder',
        path: 'folder',
        component: homeFolderVue,
      },
    ],
  },
  {
    name: 'Project',
    path: '/project',
    redirect: '/project/sheet',
    children: [
      {
        name: 'ProjectSheet',
        path: 'sheet/:id',
        component: () => import('@/views/project/project-sheet.vue'),
      },
    ],
  },
];
//创建路由对象  导入映射关系
const router = createRouter({
  routes,
  history: createWebHashHistory(), //指定history模式
});

export default router;

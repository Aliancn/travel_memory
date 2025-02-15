import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: 'Home',
    },
  },
  /**
   * 子路由示例
   */
  {
    path: '/foo',
    name: 'foo',
    component: () => import('@/components/TransferStation.vue'),
    meta: {
      title: 'Foo',
    },
    redirect: {
      name: 'bar',
    },
    children: [
      {
        path: 'bar',
        name: 'bar',
        component: () => import('@/views/foo/bar.vue'),
        meta: {
          title: 'Bar',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import('@/views/travel.vue'),
    meta: {
      // requiresAuth: true,
      title: 'Travel',
    },
  },
]

export default routes

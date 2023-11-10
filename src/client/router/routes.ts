import { type RouteRecordRaw } from 'vue-router';

type RouteRecordRawNamed = RouteRecordRaw & { name: string };
export const routes: Array<RouteRecordRawNamed> = [
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/page-home.vue'),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../pages/page-about.vue'),
  },
  {
    name: 'error',
    path: '/error',
    component: () => import('../pages/page-error.vue'),
    meta: {
      responseCode: 500,
    },
  },
  {
    name: 'not-found',
    path: '/404',
    component: () => import('../pages/page-not-found.vue'),
    meta: {
      responseCode: 404,
    },
  },
  {
    name: 'catch-not-found',
    path: '/:notFoundPath(.*)*',
    redirect: (to) => ({
      name: 'not-found',
      query: {
        'not-found': encodeURIComponent(String(to.params.notFoundPath)),
      },
    }),
  },
];

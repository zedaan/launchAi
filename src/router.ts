import { lazy } from 'solid-js';

const routes = [
  {
    path: '/about',
    component: lazy(() => import('./containers/About'))
  },
  {
    path: '/',
    component: lazy(() => import('./containers/App'))
  },
  {
    path: "*all",
    component: lazy(() => import('./containers/404'))
  }
]

export default routes;

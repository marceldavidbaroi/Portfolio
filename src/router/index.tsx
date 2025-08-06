// src/routes/AppRoutes.tsx

import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import homeRoutes from '../modules/home/routers';
import PageNotFound from '../modules/common/pages/PageNotFound';

const routes: RouteObject[] = [
  ...homeRoutes,

  // 👇 Catch-all route (should be the LAST one)
  {
    path: '*',
    element: <PageNotFound />,
  },
];

export default function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

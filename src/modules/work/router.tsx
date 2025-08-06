// src/modules/work/router.tsx
import type { RouteObject } from 'react-router-dom';
import Layout from '../../layout/Layout';
import WorkList from './pages/WorkIndex';
import WorkDetail from './pages/WorkDetails';

const workRoutes: RouteObject[] = [
  {
    path: 'work',
    element: <Layout />, // Reuse the same layout
    children: [
      { index: true, element: <WorkList /> }, // /work
      { path: ':id', element: <WorkDetail /> }, // /work/:id
    ],
  },
];

export default workRoutes;

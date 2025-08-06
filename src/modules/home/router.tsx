// src/modules/home/routers.tsx
import type { RouteObject } from 'react-router-dom';
import Layout from '../../layout/Layout';
import HomeIndex from './pages/HomeIndex';

const homeRoutes: RouteObject[] = [
  {
    path: 'home',
    element: <Layout />,  // Layout wraps this module’s routes
    children: [
      { index: true, element: <HomeIndex /> }, // default page at /home
      // add more nested routes here if needed
    ],
  },
];

export default homeRoutes;

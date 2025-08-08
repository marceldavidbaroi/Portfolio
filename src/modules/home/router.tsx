// src/modules/home/routers.tsx
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import HomeIndex from './pages/HomeIndex';

const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" replace />, // redirect from root to /home
  },
  {
    path: 'home',
    element: <Layout />, // Layout wraps this module’s routes
    children: [
      { index: true, element: <HomeIndex /> }, // default page at /home
      // more nested routes can go here
    ],
  },
];

export default homeRoutes;

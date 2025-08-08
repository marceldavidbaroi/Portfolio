// src/modules/work/router.tsx
import type { RouteObject } from 'react-router-dom';
import Layout from '../../layout/Layout';
import AboutMeIndex from './pages/AboutMeIndex';

const aboutMeRoutes: RouteObject[] = [
  {
    path: 'about-me',
    element: <Layout />,
    children: [
      { index: true, element: <AboutMeIndex /> }, // /work
    ],
  },
];

export default aboutMeRoutes;

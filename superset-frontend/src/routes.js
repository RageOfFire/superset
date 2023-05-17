import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import MCCPage from './pages/MCC/MCCPage';
import MCCAddForm from './pages/MCC/MCCAddForm';
import MCCEditForm from './pages/MCC/MCCEditForm';
import KPPage from './pages/KP/KPPage';
import KPAddForm from './pages/KP/KPAddForm';
import KPEditForm from './pages/KP/KPEditForm';
import CTPage from './pages/CT/CTPage';
import CTAddForm from './pages/CT/CTAddForm';
import CTEditForm from './pages/CT/CTEditForm';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'mcc', element: <MCCPage /> },
        { path: 'mcc/add', element: <MCCAddForm /> },
        { path: 'mcc/edit/:id', element: <MCCEditForm /> },
        { path: 'kp', element: <KPPage /> },
        { path: 'kp/add', element: <KPAddForm /> },
        { path: 'kp/edit/:id', element: <KPEditForm /> },
        { path: 'ct', element: <CTPage /> },
        { path: 'ct/add', element: <CTAddForm /> },
        { path: 'ct/edit/:id', element: <CTEditForm /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

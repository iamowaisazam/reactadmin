import { lazy } from 'react';

// project imports
import MainLayout from '../views/layout/MainLayout';
import Loadable from '../views/layout/ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));


// users
const UserIndex = Loadable(lazy(() => import('views/users/index')));
const UserEdit = Loadable(lazy(() => import('views/users/edit')));
const UserCreate = Loadable(lazy(() => import('views/users/create')));
const UserProfile = Loadable(lazy(() => import('views/users/profile')));


// categories
const CategoryIndex = Loadable(lazy(() => import('views/category/index')));
const CategoryEdit = Loadable(lazy(() => import('views/category/edit')));
const CategoryCreate = Loadable(lazy(() => import('views/category/create')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'users',
      children: [
          {
            path: 'index',
            element: <UserIndex />
          },
          {
            path: 'create',
            element: <UserCreate />
          },
          {
            path: 'edit/:id',
            element: <UserEdit />
          }
      ]
    },
    {
      path: 'profile/:id',
      element: <UserProfile />
    } 
  ]
};

export default MainRoutes;

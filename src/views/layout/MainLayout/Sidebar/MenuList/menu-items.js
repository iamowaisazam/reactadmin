import { IconTypography, IconPalette, IconShadow, IconWindmill,IconKey,IconDashboard } from '@tabler/icons';
import {AccountCircle,Category,LocalParking,Group,BrandingWatermark,Assessment} from '@mui/icons-material';


// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconKey,
  IconDashboard
};




// ==============================|| dashboard ITEMS ||============================== //
const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

// ==============================|| modules ITEMS ||============================== //
const modules = {
  id: 'utilities',
  title: 'Modules',
  type: 'group',
  children: [
    {
      id: 'users-list',
      title: 'Users',
      type: 'item',
      url: '/users/index',
      icon: AccountCircle,
      breadcrumbs: false
    },
    {
        id: 'categories-list',
        title: 'Category',
        type: 'item',
        url: '/utils/util-typography',
        icon: Category,
        breadcrumbs: false
    },
    {
        id: 'products-list',
        title: 'Products',
        type: 'item',
        url: '/utils/util-typography',
        icon: LocalParking,
        breadcrumbs: false
      },
      {
        id: 'customer-list',
        title: 'Customers',
        type: 'item',
        url: '/utils/util-typography',
        icon: Group,
        breadcrumbs: false
      },
      {
        id: 'orders-list',
        title: 'Orders',
        type: 'item',
        url: '/utils/util-typography',
        icon: BrandingWatermark,
        breadcrumbs: false
      },
      {
        id: 'reports-list',
        title: 'Reports',
        type: 'item',
        url: '/utils/util-typography',
        icon: Assessment,
        breadcrumbs: false
      },
  ]
};


// ==============================|| pages ITEMS ||============================== //
// const pages = {
//   id: 'pages',
//   title: 'Auth',
//   type: 'group',
//   children: [
//     {
//       id: 'authentication',
//       title: 'Authentication',
//       type: 'collapse',
//       icon: icons.IconKey,

//       children: [
//         {
//           id: 'login3',
//           title: 'Login',
//           type: 'item',
//           url: '/login',
//           target: true
//         },
//         {
//           id: 'register3',
//           title: 'Register',
//           type: 'item',
//           url: '/register',
//           target: true
//         }
//       ]
//     }
//   ]
// };









// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    dashboard,
    modules 
   ]
};

export default menuItems;
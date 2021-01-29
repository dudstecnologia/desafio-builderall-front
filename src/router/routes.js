export default [
  {
    path: "/",
    component: () => import('../layouts/PublicLayout'),
    children: [
      {
        path: "",
        component: () => import('../pages/Index')
       }
    ]
  },
  {
    path: "/login",
    component: () => import('../layouts/AuthLayout'),
    children: [
      {
        path: "",
        component: () => import('../pages/Auth/Login')
      }
    ]
  },
  {
    path: "/admin",
    component: () => import('../layouts/AdminLayout'),
    children: [
      {
        path: "",
        component: () => import('../pages/Admin/Dashboard')
      }
    ]
  },
  {
    path: '*',
    component: () => import('../pages/Error404.vue')
  }
]

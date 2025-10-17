import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'

// Tambahkan redirect untuk root path
const routes = setupLayouts([
  {
    path: '/',
    redirect: '/auth/login-student/page' // Redirect ke halaman login
  },
  ...generatedRoutes // Gabungkan dengan generated routes
])

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const adminToken = localStorage.getItem('adminToken')
  const userToken = localStorage.getItem('userToken')

  // Cek autentikasi untuk route yang membutuhkan login
  if (to.meta.requiresAuth) {
    if (to.path.includes('admin') && !adminToken) {
      return next('/auth/login-student/page')
    }
    if (to.path.includes('user') && !userToken) {
      return next('/auth/login-student/page')
    }
  }

  next()
})

export default router
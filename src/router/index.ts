import { createRouter, createWebHistory } from 'vue-router'
import progress from '@bassist/progress'
import routes from './routes'
import { APP_NAME } from '@/constants'
import { useUserStore } from '@/stores/user'
progress.configure({ showSpinner: false })
progress.setColor('var(--c-brand)')
import { pinia } from '@/stores/index'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition ? savedPosition : { top: 0, left: 0 }
  },
})

router.beforeEach((to, from, next) => {
  progress.start()

  // Check if the route requires authentication and the user is not logged in
  const userStore = useUserStore(pinia)
  if (to.meta.requiresAuth && !userStore.token) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

router.afterEach((to) => {
  const { title } = to.meta
  document.title = title ? `${title} - ${APP_NAME}` : APP_NAME
  progress.done()
})

export default router

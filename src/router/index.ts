import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/step-1',
      name: 'step-1',
      component: () => import('@/views/StepOneView.vue')
    },
    {
      path: '/step-2',
      name: 'step-2',
      component: () => import('@/views/StepTwoView.vue')
    },
    {
      path: '/step-3',
      name: 'step-3',
      component: () => import('@/views/StepThreeView.vue')
    },
    {
      path: '/payment-pix',
      name: 'payment-pix',
      component: () => import('@/views/PaymentPixView.vue')
    },
    {
      path: '/payment-ticket',
      name: 'payment-ticket',
      component: () => import('@/views/PaymentTicketView.vue')
    },
    {
      path: '/payment-debit-credit',
      name: 'payment-debit-credit',
      component: () => import('@/views/PaymentDebitCreditView.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/views/Success.vue')
    }
  ]
})

export default router

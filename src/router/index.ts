import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/products',
            name: 'products.index',
            component: () => import("@/views/products/IndexProducts.vue"),
        },
        {
            path: '/products/:product',
            name: 'products.show',
            props: route => ({
                routeId: parseInt(Array.isArray(route.params.product) ? route.params.product[0] : route.params.product)
            }),
            component: () => import('@/views/products/ShowProducts.vue')
        },
        {
            path: '/contact-us',
            name: 'contactUs',
            component: () => import('@/views/ContactUsView.vue')
        }
    ]
})

export default router

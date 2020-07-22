import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('user')) {
                console.log(from, to);
                next({
                    path: from.path === '/' ? '/home' : from.path
                })
            } else {
                next()
            }
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('user')) {
                console.log(from, to);
                next({
                    path: from.path === '/' ? '/home' : from.path
                })
            } else {
                next()
            }
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Register.vue')
    },
    {
        path: '/vote',
        name: 'Vote',
        beforeEnter: (to, from, next) => {
            // ...
            if (!localStorage.getItem('user')) {
                next({
                    path: '/'
                })
            } else {
                next()
            }
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Vote.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/home',
        name: 'Home',
        beforeEnter: (to, from, next) => {
            // ...
            if (!localStorage.getItem('user')) {
                next({
                    path: '/'
                })
            } else {
                next()
            }
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue'),
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         const user = localStorage.getItem('user');
//         //const user = auth.currentUser;
//         if (!user) {
//             next({ path: '/' })
//         } else {
//             next()
//         }
//     } else {
//         next()
//     }
// })

export default router
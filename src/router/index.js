import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: resolve => require(['../components/Home.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../views/User/user.vue'], resolve)
                },
            ]
        }
    ]
})

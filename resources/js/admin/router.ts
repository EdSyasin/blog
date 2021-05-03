import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "./store/index";

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: "Login",
        component: () => import(/* webpackChunkName: "Login" */"./views/login/Login.vue"),
        meta: {
            title: "Вход",
            layout: "clean-layout"
        }
    },
    {
        path: '/admin',
        name: "Admin",
        component: () => import( /* webpackChunkName: "About" */ './views/About.vue'),
        meta: {
            title: "Админка",
            authRequired: true
        }
    },
    {
        path: '/admin/posts/new',
        name: 'PostCreate',
        component: () => import( /* webpackChunkName: "PostEditor" */ './views/post-create/PostCreate.vue'),
        meta: {
            title: "Новый пост",
            authRequired: true
        }
    }
];

const router = new VueRouter({
    mode: "history",
    //base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.authRequired){
        if(!store.getters.isLogin){
            next('/login')
        }
    }
    if(to.meta.title){
        document.title = to.meta.title;
    }

    next();
})

export default router;

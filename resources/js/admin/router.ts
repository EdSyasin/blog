import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: "Login",
        component: () => import(/* webpackChunkName: "Login" */"./views/login/Login.vue"),
        meta: {
            title: "Вход"
        }
    },
    {
        path: '/admin',
        name: "Admin",
        component: () => import( /* webpackChunkName: "About" */ './views/About.vue'),
        meta: {
            title: "О сайте"
        }
    },
    {
        path: '/admin/posts/new',
        name: 'PostCreate',
        component: () => import( /* webpackChunkName: "PostEditor" */ './views/post-create/PostCreate.vue'),
        meta: {
            title: "Новый пост"
        }
    }
];

const router = new VueRouter({
    mode: "history",
    //base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.title){
        document.title = to.meta.title;
    }
    next();
})

export default router;

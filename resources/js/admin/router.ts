import Vue from 'vue';
import VueRouter from 'vue-router';
//import About from "./views/About.vue";
//const About = () => import(/* webpackChunkName: "About" */ './views/About.vue')

Vue.use(VueRouter);

const routes = [
    {
        path: '/admin',
        name: "Admin",
        component: () => import( /* webpackChunkName: "About" */ './views/About.vue')
    },
    {
        path: '/admin/posts/new',
        name: 'PostCreate',
        component: () => import( /*webpackChunkName: "PostEditor" */ './views/PostCreate.vue')
    }
];

const router = new VueRouter({
    mode: "history",
    //base: process.env.BASE_URL,
    routes
})

export default router;

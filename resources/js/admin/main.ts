import Vue from 'vue';
import App from './App.vue';
import router from './router';
//import "../../sass/app.scss";

new Vue({
    router,
    render: h => h(App)
}).$mount('#adminApp');

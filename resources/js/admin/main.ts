import Vue from 'vue';
import App from './App.vue';
import router from './router';

//Layouts
import Clean from "./layouts/Clean.vue";
Vue.component('clean-layout', Clean)

//Components
import InputText from "./components/form/InputText.vue";
Vue.component('c-text-field', InputText);

new Vue({
    router,
    render: h => h(App)
}).$mount('#adminApp');

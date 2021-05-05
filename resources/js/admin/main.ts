import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store/index";
import Axios from "axios";


//Layouts
import Clean from "./layouts/Clean.vue";
Vue.component('clean-layout', Clean)
import Default from "./layouts/Default.vue";
Vue.component('default-layout', Default)

//Components
import InputText from "./components/form/InputText.vue";
Vue.component('c-text-field', InputText);
import Button from "./components/Button.vue";
Vue.component('c-button', Button);

Vue.prototype.$http = Axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#adminApp');

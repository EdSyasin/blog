import Vue from "vue";
import Vuex, { StoreOptions } from 'vuex';
//Modules
import user from './user';

Vue.use(Vuex);

const store: StoreOptions<any> = {
    modules: {
        user: user
    }
}

export default new Vuex.Store(store);

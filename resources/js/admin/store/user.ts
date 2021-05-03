import {Module} from "vuex";
import axios from "axios";

const user: Module<any, any> = {
    state: () => ({
        user: localStorage.getItem('user') || null
    }),
    mutations: {
        SET_USER(state, user){
            localStorage.setItem('user', JSON.stringify(user))
            state.user = user;
        },
        CLEAN_USER(state){
            localStorage.removeItem('user');
            state.user = null;
        }
    },
    actions: {
        GET_USER: async (context, payload) => {
            try {
                let { data, status, request } = await axios.get("/ajax/auth/user");
                if (status == 200){
                    context.commit('SET_USER', data.user);
                }
            } catch (e){
                context.commit("CLEAN_USER");
            }
        }
    },
    getters: {
        isLogin(state){
            return !!state.user;
        }
    }
}

export default user

<template>
    <main class="main-login">
        <form class="login-form" onsubmit="return false;" >

            <c-text-field type="text" v-model="username" placeholder="Логин" @keypress.enter="submit"></c-text-field>
            <c-text-field type="password" v-model="password" placeholder="Пароль" @keypress.enter="submit"></c-text-field>

            <c-button @click="submit">Войти</c-button>
        </form>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";

export default Vue.extend( {
    name: "Login",
    data() {
        return {
            username : '',
            password: ''
        }
    },
    methods: {
        submit(){
            const body = {
                "username": this.username,
                'password': this.password
            };

            axios
                .post('/ajax/auth/login', JSON.stringify(body), {headers:{"Content-Type": "application/json"}})
                .then(res => {
                    this.$store.commit("SET_USER", res.data.user);
                    this.$router.push("/admin");
                })
                .catch(e => {
                    console.error(e);
                })

        }
    }
})
</script>

<style lang="scss">

.main-login{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form{
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 25px;
    box-shadow:
        12px 12px 16px 0 rgba(0, 0, 0, 0.25),
        -8px -8px 12px 0 rgba(255, 255, 255, 0.3);


}

</style>

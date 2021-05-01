<template>
    <main class="main-login">
        <form class="login-form" onsubmit="return false;" @keypress.enter="submit">
            <input type="text" v-model="login">
            <input type="password" v-model="password">
            <button>Войти</button>
        </form>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend( {
    name: "Login",
    data() {
        return{
            login :'',
            password: ''
        }
    },
    methods: {
        submit(){
            alert(this.login + this.password);
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

    input{
        border: black 1px solid;
        font-size: 17px;
    }
}

</style>

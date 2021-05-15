<template>
    <component :is="layout">
        <router-view v-if="!loading"></router-view>
    </component>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import uniqueId from "../services/uniqueId";

@Component({
    provide: {
        uniqueId: uniqueId
    }
})
export default class App extends Vue{


    private loading = true;

    get layout(){
        return this.$route.meta.layout || 'default-layout';
    }

    created(){
        this.$store.dispatch('GET_USER');
        this.loading = false;
    }
}


</script>

<style lang="scss">


</style>

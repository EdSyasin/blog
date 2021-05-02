<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class App extends Vue{
    get layout(){
        return this.$route.meta.layout || 'default-layout';
    }
}


</script>

<style lang="scss">


</style>

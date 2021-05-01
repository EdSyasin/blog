<template>
    <div>
        <span class="keklol">work</span>
        <router-view></router-view>

    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class App extends Vue{

}


</script>

<style lang="scss">

.keklol{
    color: #4a5568;
}


</style>

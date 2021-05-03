<template>
    <div class="kek">
        <router-link to="/login">login</router-link>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class About extends Vue{

}

</script>

<style lang="scss">
.kek{
    font-size: 70px;
}
</style>

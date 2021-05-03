<template>
    <button @click="$emit('click')" class="customButton">
        <slot/>
    </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "CButton",
    data(){
        return {

        }
    }
})
</script>

<style lang="scss">

    .customButton{
        height: 3.29412rem;
        padding: 1px 16px 0;
        border-radius: 12px;
        font-size: 17px;
    }

</style>

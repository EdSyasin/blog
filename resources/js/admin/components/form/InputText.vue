<template>
    <div class="customInputText">
        <input v-model="text" :type="type" :placeholder="placeholder">
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "InputText",
    props: {
        value: {
            default: '',
            type: String
        },
        placeholder: {
            default: '',
            type: String
        },
        type: {
            default: 'text',
            type: String
        }
    },
    data(){
        return {

        }
    },
    computed: {
        text: {
            get():string {
                return this.value
            },
            set(val: string){
                this.$emit('input', val);
            }
        }
    }

})
</script>

<style lang="scss">
    .customInputText{
        margin-bottom: 20px;

        input {
            height: 3.29412rem;
            padding: 1px 16px 0;
            border-radius: 12px;
            border: #d2d2d7 1px solid;
            font-size: 17px;


            &:focus{
                outline: none;
            }
        }
    }

</style>

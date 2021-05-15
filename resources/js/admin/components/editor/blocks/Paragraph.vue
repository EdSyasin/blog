<template>
    <p
            class="paragraph"
            :class="{'paragraph_placeholder': index === 0 && text.length === 0}"
            contenteditable="true"
            @input="e => onChange(e)"
            @keypress.enter="e => onEnterPress(e)"
            @keydown.delete="e => onDelete(e)"
            ref="paragraph"
            @focus="onFocus"
    >

    </p>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        value: {
            required: true,
            type: Object
        },
        index: {
            type: Number
        }
    },
    name: 'Paragraph',
    computed: {
        text: {
            get(){
                return this.value.text;
            },
            set(value){
                this.$emit('input', {
                    text: value
                })
            }
        }
    },
    methods: {
        onChange(e: Event){
            const paragraph = e.target as HTMLParagraphElement;
            if(paragraph.innerHTML.length > 0){
                this.$emit('clean-and-focus', {
                    show: false
                });
            } else {
                this.$emit('clean-and-focus', {
                    show: true,
                    el: this.$el
                });
            }
            this.text = paragraph.innerHTML;
        },
        onDelete(e: Event){
            const paragraph = e.target as HTMLParagraphElement;
            if(paragraph.innerHTML === ''){
                e.preventDefault();
                this.$emit('clean-and-focus', {
                    show: false
                });
                this.$emit('remove');
            }
        },
        focus(){
            const element = this.$refs.paragraph as HTMLParagraphElement;
            if(element.innerHTML.length > 0){
                let range = document.createRange() as Range;//Create a range (a range is a like the selection but invisible)
                range.selectNodeContents(element);//Select the entire contents of the element with the range
                range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
                let selection = window.getSelection() as Selection;//get the selection object (allows you to change selection)
                selection.removeAllRanges();//remove any selections already made
                selection.addRange(range);
            }
            element.focus();
        },
        onEnterPress(e: KeyboardEvent){
            e.preventDefault();
            this.$emit('next-block')
        },
        onFocus(){
            if(this.$el.innerHTML === ''){
                this.$emit('clean-and-focus', {
                    show: true,
                    el: this.$el
                })
            }
        }
    },
    mounted(){
        if(this.text === '' && this.index !== 0){
            this.focus();
        }
    }
})

</script>

<style lang="scss">
    .editor{
        .paragraph{
            position: relative;
            width: 100%;
            display: block;

            &:focus{
                outline: none;
            }
        }

        .paragraph_placeholder{

            &::before{
                content: 'Текст сюда';
                position: absolute;
                color: gray;
            }
        }
    }
</style>

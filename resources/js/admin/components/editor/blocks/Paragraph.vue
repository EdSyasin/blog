<template>
    <p
            contenteditable="true"
            @input="e => onChange(e)"
            @keypress.enter="e => onEnterPress(e)"
            ref="paragraph"
    >

    </p>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const Shit = Vue.extend({
    props: {
        value: {
            required: true,
            type: Object
        }
    }
})

@Component
export default class Paragraph extends Shit {

    get text(){
        return this.value.text;
    }

    set text(value){
        this.$emit('input', {
            text: value
        })
    }

    onChange(e: Event){
        const paragraph = e.target as HTMLParagraphElement;
        this.text = paragraph.innerHTML;
        if(paragraph.innerHTML === ''){
            this.$emit('remove');
        }
    }

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
    }

    onEnterPress(e: KeyboardEvent){
        e.preventDefault();
        this.$emit('next-block')
    }

    mounted(){
        if(this.text === ''){
            this.focus();
        }
    }
}

</script>

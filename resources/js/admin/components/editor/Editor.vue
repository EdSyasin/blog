<template>
    <div class="editor">
        <component
                v-for="(item, index) in blocks"
                :is="item.type"
                v-model="item.block"
                :key="index"
                @next-block="addBlock(index)"
                @remove="removeBlock(index)"
                :ref="`block-${index}`"
        >

        </component>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
//Blocks
import Paragraph from "./blocks/Paragraph.vue";


@Component({
    components: {
        Paragraph
    }
})
export default class Editor extends Vue {
    private blocks = [
        {
            type: 'paragraph',
            block: {
                text: ''
            }
        }
    ];

    addBlock(prevIndex: number){
        this.blocks.splice(prevIndex + 1, 0, {
            type: "paragraph",
            block: {
                text: ''
            }
        })
    }

    removeBlock(index: number){
        this.blocks.splice(index, 1);
        if(this.blocks[index - 1].type === 'paragraph'){
            const refs = this.$refs[`block-${index - 1}`] as Array<HTMLParagraphElement>;
            refs[0].focus();
        }
    }
}
</script>

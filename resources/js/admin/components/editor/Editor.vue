<template>
    <div class="editor">
        <component
                v-for="(item, index) in blocks"
                :is="item.type"
                v-model="item.block"
                :key="item.id"
                :index="index"
                @next-block="addBlock(index)"
                @remove="removeBlock(index)"
                @clean-and-focus="e => setButtonsGroup(e)"
                :ref="`block-${index}`"
                class="block"
                :class="{'block_first': index === 0}"
        >
        </component>
        <input
                type="file"
                accept="image/gif, image/jpeg, image/png"
                ref="image-input"
                style="display: none"
        >
        <div class="addButtonsGroup" :ref="'addButtonsGroup'" style="top: 0">
            <button @click="addImage">
                <span class="mdi mdi-image"/>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue_, {PropType, VueConstructor} from "vue";

//Blocks
import Paragraph from "./blocks/Paragraph.vue";

const Vue = Vue_ as VueConstructor<Vue_ & {
    uniqueId(prefix: string): string;
    $refs: {
        'image-input': HTMLInputElement,
        addButtonsGroup : HTMLDivElement
    }
}>

export default Vue.extend({
    name: 'Editor',
    props: {
        value: {
            type: Array as PropType<IBlock[]>,
            default: () => [
                {
                    type: 'paragraph',
                    block: {
                        text: ''
                    }
                }
            ]
        }
    },
    inject: ['uniqueId'],
    data(){
        return {
            blocks: [] as IBlock[]
        }
    },
    components: {
        Paragraph
    },
    watch: {
        blocks: {
            deep: true,
            handler(){
                this.$emit('input', this.blocks.map((e: IBlock) => ({
                    type: e.type,
                    block: e.block
                })))
            }
        }
    },
    methods:{
        addBlock(prevIndex: number): void{
            this.blocks.splice(prevIndex + 1, 0, {
                id: this.uniqueId('block') as string,
                type: "paragraph",
                block: {
                    text: ''
                }
            })
        },
        removeBlock(index: number): void{
            if(index !== 0){
                this.blocks.splice(index, 1);
                if(this.blocks[index - 1].type === 'paragraph'){
                    const refs = this.$refs[`block-${index - 1}`] as Array<HTMLParagraphElement>;
                    refs[0].focus();
                }
            }
        },
        setButtonsGroup(evtData: {show: boolean, el?: HTMLElement}){
            let btnsGroup = this.$refs.addButtonsGroup;
            if(evtData.show){
                btnsGroup.classList.add('addButtonsGroup_shown');
                btnsGroup.style.top = `${evtData.el?.offsetTop}px`;
            } else {
                btnsGroup.classList.remove('addButtonsGroup_shown');
            }
        },
        addImage(){
            this.$refs["image-input"].click();
        }
    },
    created(){
        this.blocks = this.value.map((e: IBlock) => ({
            ...e,
            id: this.uniqueId('block') as string
        }))
    }
})


</script>

<style lang="scss">
.editor{
    position: relative;

    .addButtonsGroup{
        position: absolute;
        right: 100%;
        display: none;
        font-size: 16px;
        transform: translateY(-6px);

        button{
            font-size: 2em;
            cursor: pointer;
            margin-left: 10px;
            background: none;
            display: block;

            &:hover{
                color: gray;
            }
        }
    }

    .addButtonsGroup_shown{
        display: flex;

    }
}

@media(max-width: 964px){
    .editor {

        .addButtonsGroup {
            width: 100%;
            height: 0;
            justify-content: center;
            align-items: center;
            left: 0;
            right: auto;
            transform: translateY(12px);

        }
    }
}
</style>

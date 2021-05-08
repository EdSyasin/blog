<template>
    <main class="editorMain">
        <input id="editorTitle" class="editorInput" placeholder="Заголовок" v-model="post.title"/>
        <editor/>

        <aside class="buttonContainer">
            <button id="publicButton" class="publicButton">Publish</button>
            <a id="editorSettingsButton" class="buttonIcon editorSettingsButton mdi mdi-cog"></a>
        </aside>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Editor from "../../components/editor/Editor.vue";


    export default Vue.extend({
        name: "PostCreate",
        data() {
            return {
               post: {
                   title: ''
               }
            }
        },
        components: {
            Editor
        }
    })
</script>

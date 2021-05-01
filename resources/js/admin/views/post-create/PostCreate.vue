<template>
    <main class="editorMain">
        <input id="editorTitle" class="editorInput" placeholder="Заголовок" v-model="post.title"/>
        <div id="editorjs">

        </div>
        <aside class="buttonContainer">
            <button id="publicButton" class="publicButton">Publish</button>
            <a id="editorSettingsButton" class="buttonIcon editorSettingsButton mdi mdi-cog"></a>
        </aside>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue';
    import EditorJS from "@editorjs/editorjs";
    import Header from "@editorjs/header";
    import AttachesTool from "@editorjs/attaches";
    import ImageTool from '@editorjs/image';

    let editor : EditorJS;


    export default Vue.extend({
        name: "PostCreate",
        data() {
            return {
               post: {
                   title: ''
               }
            }
        },
        mounted() {
            const metaToken = document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement;
            editor = new EditorJS({
                /**
                 * Id of Element that should contain the Editor
                 */
                holder: 'editorjs',
                placeholder: "Писать тут",
                tools: {
                    header: Header,
                    attaches: {
                        class: AttachesTool,
                        config: {
                            additionalRequestHeaders:{
                                'X-CSRF-TOKEN': metaToken.content,
                            },
                            endpoint: '/ajax/editorjs'
                        }
                    },
                    image: {
                        class: ImageTool,
                        config: {
                            additionalRequestHeaders:{
                                'X-CSRF-TOKEN': metaToken.content,
                            },
                            endpoints: {
                                byFile: '/ajax/editorjs', // Your backend file uploader endpoint
                                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                            }
                        }
                    }
                }
            })
        }
    })
</script>

import EditorJS from "@editorjs/editorjs";
import ImageTool from '@editorjs/image';
import AttachesTool from "@editorjs/attaches";
import Header from "@editorjs/header";
import Axios from "axios";

let editorTitle = document.getElementById('editorTitle');
let publicButton = document.getElementById('publicButton');

let title = '';

let editor = new EditorJS({
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
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                },
                endpoint: '/ajax/editorjs'
            }
        },
        image: {
            class: ImageTool,
            config: {
                additionalRequestHeaders:{
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                },
                endpoints: {
                    byFile: '/ajax/editorjs', // Your backend file uploader endpoint
                    byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                }
            }
        }
    }
})

publicButton.addEventListener('click', () => {
    editor.save()
        .then(content => {
            const data = {
                title: editorTitle.value,
                content: content
            };
            axios
                .post('/ajax/posts?status=published', JSON.stringify(data), {headers: {"Content-Type": "application/json"}})
                .then(() => {
                    alert("Запись сохранена!")
                })
                .catch(() => {
                    alert("Что-то пошло не так!")
                })

        })
})


axios.get("/ajaxtest")
    .then(response => {
        console.log(response.data)
    })





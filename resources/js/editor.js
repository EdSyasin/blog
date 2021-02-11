import EditorJS from "@editorjs/editorjs";
import ImageTool from '@editorjs/image';
import AttachesTool from "@editorjs/attaches";
import Header from "@editorjs/header";
import Axios from "axios"

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
                endpoint: '/api/editorjs'
            }
        },
        image: {
            class: ImageTool,
            config: {
                additionalRequestHeaders:{
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                },
                endpoints: {
                    byFile: '/api/editorjs', // Your backend file uploader endpoint
                    byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                }
            }
        }
    }
})

axios.get("/ajaxtest")
    .then(response => {
        console.log(response.data)
    })





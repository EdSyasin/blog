import Axios from "axios";

export default class ImageUploader{

    private url: string;
    private uploader: HTMLElement;
    private img: HTMLImageElement;
    private icon: HTMLElement;
    private input: HTMLInputElement;


    constructor(id: string) {
        this.url = "#";
        this.uploader = document.getElementById(id) as HTMLElement;
        this.img = this.uploader.querySelector(`#` + id + `__img`) as HTMLImageElement;
        this.icon = this.uploader.querySelector(`#` + id + `__icon`) as HTMLElement;
        this.input = this.uploader.querySelector(`#` + id + `__input`) as HTMLInputElement;
        this.input.addEventListener('change', (event: Event) => {
            const target = event.target as HTMLInputElement;
            const files = target.files as FileList;
            //debugger
            if(files.length > 0){
                let file = files[0];
                this.upload(file)
            }
        })
    }

    get URL(){
        return this.url;
    }

    set URL(value){
        this.url = value;
        this.icon.style.display = 'none';
        this.img.style.display = 'block';
    }

    upload(file: File){
        const data = new FormData();
        data.append('file', file);
        Axios
            .post("/ajax/files", data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                this.URL = response.data.file.url;
                this.showImage(this.url);
            })
    }

    showImage(url: string){
        this.img.src = url;
    }

}

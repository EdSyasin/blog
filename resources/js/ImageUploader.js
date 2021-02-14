export default class ImageUploader{

    constructor(id) {
        this.url = null;
        this.uploader = document.getElementById(id);
        this.img = this.uploader.querySelector(`#` + id + `__img`);
        this.icon = this.uploader.querySelector(`#` + id + `__icon`);
        this.input = this.uploader.querySelector(`#` + id + `__input`);
        this.input.addEventListener('input', event => {
            console.log(event.target.files[0])
            this.upload(event.target.files[0])
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

    upload(file){
        const data = new FormData();
        data.append('file', file);
        axios
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

    showImage(url){
        this.img.src = url;
    }

}

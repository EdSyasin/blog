export default class Overlay{

    constructor(id) {
        this.isOpen = false;
        this.overlay = document.getElementById(id);
        this.overlay.firstElementChild.addEventListener('click', () => {
            this.toggle();
        })
    }

    toggle(){
        if(this.isOpen){
            this.isOpen = false;
            this.overlay.classList.add("overlay_close");
        } else {
            this.isOpen = true;
            this.overlay.classList.remove("overlay_close");
        }
    }
}

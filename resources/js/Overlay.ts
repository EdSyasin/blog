export default class Overlay{
    private isOpen: boolean;
    private overlay: HTMLElement;
    private background: HTMLElement;

    constructor(id: string) {
        this.isOpen = false;
        this.overlay = document.getElementById(id) as HTMLElement;
        this.background = this.overlay.firstElementChild as HTMLElement;
        this.background.addEventListener('click', () => {
            this.toggle();
        })
    }

    get open(){
        return this.isOpen;
    }

    set open(value){
        if(!value){
            this.isOpen = false;
            this.overlay.classList.add("overlay_close");
        } else {
            this.isOpen = true;
            this.overlay.classList.remove("overlay_close");
        }
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

require('./bootstrap');

const uploader = () => import("ImageUploader");

let kek = new uploader();


window.deletePost = function(id){
    const ensure = window.confirm('Точно удалить?');
    if(ensure) {
        axios
            .delete("/ajax/posts/"+ id)
            .then(response => {
                console.log(response.data);
                location.reload();
            })
    }
}

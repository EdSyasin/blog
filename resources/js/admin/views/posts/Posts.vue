<template>
    <main>
        <h1>Публикации <router-link to="/admin/posts/new" ><span class="mdi mdi-plus"></span></router-link></h1>

    </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Posts extends Vue{
    private posts: IPost[] = [];
    private options = {
        page: 1,
        itemsPerPage: 15
    };

    getPosts(){
        this.$http
            .get("/ajax/posts")
            .then(res => {
                this.posts = res.data.config;
            })
    }

    created(){
        this.getPosts();
    }
}
</script>

<style lang="scss">

</style>

<template>
    <div class="defaultLayout">
        <aside class="defaultLayout_sideMenu">
            <nav>
                <ul>
                   <li v-for="item in navLinks" :key="item.path">
                        <router-link
                                :to="item.path"
                                :class="{'_selected': $route.path == item.path}"
                        ><span :class="'mdi ' + item.icon"></span></router-link>
                   </li>
                </ul>
            </nav>
        </aside>
        <div class="defaultLayout_content">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";


@Component
export default class Default extends Vue{
    navLinks = [
        {
            name: "Главная",
            icon: "mdi-view-dashboard",
            path: "/admin"
        },
        {
            name: "Публикации",
            icon: "mdi-post",
            path: "/admin/posts"
        },
        {
            name: "Пользователи",
            icon: "mdi-account",
            path: "/admin/users"
        }
    ]
}
</script>

<style lang="scss">
.defaultLayout{
    padding-left: 50px;

    .defaultLayout_sideMenu{
        position: fixed;
        top: 0;
        left: 0;
        width: 50px;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        nav{
            width: 100%;

            ul{
                padding: 0;

                li{
                    list-style: none;

                    a{
                        display: block;
                        width: 100%;
                        font-size: 2.5em;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        &._selected{
                            border-left: black 3px solid;
                        }
                    }
                }
            }
        }
    }

    .defaultLayout_content{
        padding: 16px 16px;
        border-radius: 25px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    }


}
</style>

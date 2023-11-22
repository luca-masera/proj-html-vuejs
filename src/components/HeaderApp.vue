<template>
    <div class="d-flex justify-content-evenly box ">
        <div class="pt-3 padding-start">
            <img class="pt-2" src='/images/dark-logo.png' alt="">
        </div>
        <div>
            <ul class="d-flex pt-3 padding-end">
                <li class="dropdown1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Home
                    </a>
                    <section class="dropdown2 pt-2 " v-for="(action, index) in store.list[0].sections">

                        <a class="dropdown-item d-block  " href="#"> {{ action.title }}</a>
                    </section>
                </li>
                <li class="dropdown1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Pages
                    </a>
                    <section class="dropdown2 pt-2 " v-for="(action, index) in store.list[1].sections">

                        <a class="dropdown-item d-block  " href="#"> {{ action.title }}</a>
                    </section>
                </li>
                <li class="dropdown1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Courses
                    </a>
                    <section class="dropdown2 pt-2 " v-for="(action, index) in store.list[2].sections">

                        <a class="dropdown-item d-block  " href="#"> {{ action.title }}</a>
                    </section>
                </li>
                <li class="dropdown1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Features
                    </a>
                    <section class="dropdown2 pt-2 " v-for="(action, index) in store.list[3].sections">

                        <a class="dropdown-item d-block  " href="#"> {{ action.title }}</a>
                    </section>
                </li>
                <li class="dropdown1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Blog
                    </a>
                    <section class="dropdown2 pt-2 " v-for="(action, index) in store.list[4].sections">

                        <a class="dropdown-item d-block  " href="#"> {{ action.title }}</a>
                    </section>
                </li>
                <li class="dropdown1">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Shop
                    </a>
                    <section class="dropdown2 pt-2 " v-for="(action, index) in store.list[5].sections">

                        <a class="dropdown-item d-block  " href="#"> {{ action.title }}</a>
                    </section>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'HeaderApp',

    data() {
        return {
            store
        }
    }
}


</script>

<style lang="css" scoped>
li {
    list-style: none;
    padding: 10px;
}

img {
    width: 150px;
}

.box {
    height: 80px;
    background-color: white;
    padding-left: 260px;
    padding-right: 250px;

}

.d-block {
    display: block;
}

.dropdown1 {
    position: relative;
    display: inline-block;
}

.dropdown2 {
    display: none;
    background-color: white;
    min-width: 150px;
    z-index: 1;

}


.dropdown2 a:hover {
    color: #20AD96;
}

.dropdown1:hover .dropdown2 {
    display: block;

    color: black;
}
</style>

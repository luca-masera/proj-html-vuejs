<template>
    <div class="d-flex justify-content-evenly box ">
        <div class="pt-3 padding-start">
            <img class="pt-2" src='/images/dark-logo.png' alt="">
        </div>
        <div>
            <ul class="d-flex pt-3 padding-end">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Home
                    </a>
                    <ul class="dropdown-menu" v-for="(action, index) in store.list">

                        <li><a class="dropdown-item" href="#"> </a>{{ action }}</li>

                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Pages
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Courses
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Features
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Blog
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                        aria-expanded="false">
                        Shop
                    </a>
                </li>
                <li>
                    <i class="fa-regular fa-circle-user"></i>
                </li>
                <li>
                    <input type="search" class="form-control" id="search" placeholder="Search...">
                    <label for="search"></label>
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
</style>

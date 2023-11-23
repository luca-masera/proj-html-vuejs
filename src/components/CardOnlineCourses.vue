<template>
    <div class="box d-flex">
        <div class="pe-4">
            <img :src="photo" alt="titolo">
        </div>
        <div>
            <span class="color"><b>{{ price }}</b></span>
            <h6 class="pb-2 pt-2"><b>{{ title }}</b></h6>
            <span class="pe-3 color-text"> <i class="fa-regular fa-file"></i> {{ lessons }}</span>
            <span class="color-text"> <i class="fa-regular fa-user"></i> {{ students }}</span>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'CardOnlineCourses',

    props: [
        'price',
        'photo',
        'title',
        'lessons',
        'students'

    ],



    data() {
        return {
            store
        }
    }
}
</script>

<style lang="css" scoped>
.box {
    width: 500px;
    height: 200px;
    padding: 30px;
}

.box:hover {
    background-color: white;
    cursor: pointer;
}

img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
}

.pb {
    margin-bottom: 10px;
}

h6 {
    color: #3F3A64;
}


.color {
    color: #20AD96;
}

.color-text {
    color: #8C89A2;
}
</style>
#{{}}
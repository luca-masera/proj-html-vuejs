<template>
    <div class="box d-flex">
        <div class="pe-4">
            <img :src="photo" alt="titolo">
        </div>
        <div>
            <span class="color"><b>{{ price }}</b></span>
            <h6 class="pb-2 pt-2">{{ title }}</h6>
            <span class="pe-3"> <i class="fa-regular fa-file"></i> {{ lessons }}</span>
            <span> <i class="fa-regular fa-user"></i> {{ students }}</span>
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
}

.box:hover {
    background-color: white;
}

img {
    width: 150px;
    height: 150px;
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
</style>
#{{}}
<template>
    <div class="box">
        <div>
            <h5 class="pb-2">{{ title }}</h5>
            <p class="pb-3"> {{ text }}</p>
        </div>
        <div class="d-flex">
            <div class="d-flex">
                <img :src="image" alt="">
            </div>
            <div class="d-flex flex-column ps-3 pt-1">
                <h6> {{ name }}</h6>
                <p> {{ activity }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'CarouselCardMain',
    props: [
        'title',
        'text',
        'image',
        'name',
        'activity'

    ],
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="css" scoped>
img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.box {
    margin: 45px;
    padding: 45px;
}

h5 {
    color: #3F3A64;
}
</style>

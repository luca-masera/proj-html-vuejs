<template>
    <div class="box-wrapper d-flex justify-content-between">
        <div class="pt-5">
            <h6><b>Address</b></h6>
            <div v-for="(recaps, index) in store.lista[0].sections">
                <p>{{ recaps.text }}</p>
            </div>
        </div>
        <div class="d-flex align-items-center ">
            <div class="p-4">
                <h6>Explore</h6>
                <div v-for="(recaps, index) in store.lista[1].sections">
                    <a class="dropdown-item" href="#">{{ recaps.name }}</a>
                </div>

            </div>
            <div class="p-4 mt-4 ">
                <div v-for="(recaps, index) in store.lista[2].sections">
                    <a class="dropdown-item" href="#">{{ recaps.name }}</a>
                </div>

            </div>
            <div class="p-4 margin-top">
                <h6>Information</h6>
                <div v-for="(recaps, index) in store.lista[3].sections">
                    <a class="dropdown-item" href="#">{{ recaps.name }}</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'FooterApp',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="css" scoped>
.box-wrapper {
    padding-right: 450px;
    padding-left: 420px;
    background-color: #F5F1ED;
}

.margin-top {
    margin-top: 20px;
}
</style>
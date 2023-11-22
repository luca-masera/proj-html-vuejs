<template>
    <FirstsectionMain />

    <div class="box">
        <div class="text padding">
            <p>Stimulated to learn?</p>
            <h4>Featured Online Courses</h4>
        </div>
        <div class=" d-flex flex-wrap box-card">
            <CardOnlineCourses v-for="card in store.cards" :price="card.price" :photo="card.photo" :title="card.title"
                :lessons="card.lessons" :students="card.students" />
        </div>
        <div class="text ">
            <button type="button" class="btn btn-success mb-3 mt-3 px-5">View all course <i
                    class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
import FirstsectionMain from './FirstsectionMain.vue';
import CardOnlineCourses from './CardOnlineCourses.vue';

export default {
    name: "MainApp",
    components: { FirstsectionMain, CardOnlineCourses },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="css" scoped>
.box-card {
    padding-right: 450px;
    padding-left: 420px;
}

.box {
    background-color: #F5F1ED;

}

.text {
    text-align: center;

}

.padding {
    padding-top: 60px;
    padding-bottom: 30px;
}
</style>
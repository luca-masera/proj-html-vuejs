<template>
    <FirstsectionMain />

    <div class="box">
        <div class="text padding">
            <p class="color-text">Stimulated to learn?</p>
            <h4><b>Featured Online Courses</b></h4>
        </div>
        <div class=" d-flex flex-wrap box-card">
            <CardOnlineCourses v-for="card in store.cards" :price="card.price" :photo="card.photo" :title="card.title"
                :lessons="card.lessons" :students="card.students" />
        </div>
        <div class="text">
            <button type="button" class="btn btn-success mb-5 mt-3 px-5  ">View all course <i
                    class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
    <SmartTutoring />
    <div class="box-carousel">
        <div class="text padding">
            <p class="color-text">Great words about maxcoach</p>
            <h4><b>Our</b> <span>top learners'</span> <b>verbatim</b></h4>
        </div>
        <div class="d-flex ">
            <CardCarouselMain class="bg-white" v-for="carousel in store.card" :title="carousel.title" :text="carousel.text"
                :image="carousel.image" :name="carousel.name" :activity="carousel.activity" />
        </div>
        <div class="text py-5">
            <p class="color-text">Start today for getting <span>Online Certification</span></p>
            <h4><b>You can be your own guiding star with our help!</b></h4>
            <div class="text ">
                <button type="button" class="btn btn-success mb-3 mt-3 px-5">Get started now
                </button>
            </div>
        </div>
    </div>

    <SectionNumberMain />
    <CardArtistMain />
</template>

<script>

import { store } from '../data/store.js';
import FirstsectionMain from './FirstsectionMain.vue';
import CardOnlineCourses from './CardOnlineCourses.vue';
import SmartTutoring from './SmartTutoring.vue';
import SectionNumberMain from './SectionNumberMain.vue';
import CardArtistMain from './CardArtistMain.vue';
import CardCarouselMain from './CardCarouselMain.vue';


export default {
    name: "MainApp",
    components: { FirstsectionMain, CardOnlineCourses, SmartTutoring, SectionNumberMain, CardArtistMain, CardCarouselMain },
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

.box-carousel {

    background-color: #F5F1ED;
}

h4 {
    color: #3F3A64;
}

.color-text {
    color: #8C89A2;
}

h4 span {
    color: #20AD96;
}

p span {
    color: #20AD96;
}

button:hover {
    background-color: #3F3A64
}
</style>
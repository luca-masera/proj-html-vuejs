<template>
    <div class="box-wrapper">
        <div class="text padding">
            <span>Maxcoach available courses</span>
            <h4>Access Smart Tutoring Program For Benefits.</h4>
        </div>
        <div class="d-flex">
            <div class="p-4">
                <img src='/images/customize.png' alt="">
                <h5> Customize Preferences</h5>
                <p>Learners are given the right to arrange and customize their study schedule and timetable based on
                    preferences. </p>
                <span class="color">Start here <i class="fa-solid fa-arrow-right"></i></span>
            </div>
            <div class="p-4">
                <img src='/images/cloud.png' alt="">
                <h5> Cloud Storage</h5>
                <p>You can store online lessons via online cloud or download to your device and revise lessons on the way.
                </p>
                <span class="color">Get Free Quote <i class="fa-solid fa-arrow-right"></i></span>
            </div>
            <div class="p-4">
                <img src='/images/multimedia.png' alt="">
                <h5> Multimedia Channels</h5>
                <p>We provide study materials with various formats: video, audio, slides, doc, prints, books and
                    applications. </p>
                <span class="color">Start now <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
        <div class="d-flex pb-5 ">
            <div class="position-relative">

                <img class="w-10 " src='/images/ricci2.jpg' alt="">


                <div class="position-absolute">
                    <img src='/images/youtube.png' alt="">
                </div>
            </div>
            <div class="box ">
                <span>Get started effortlessly</span>
                <h2 class="py-4">Enjoy Our Companionship</h2>
                <p class="pb-4">Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek
                    for some
                    hidden hints of early-bird rewards as well.</p>
                <span>Download free guidebook <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SmartTutoring'
}
</script>

<style lang="css" scoped>
.text {
    text-align: center;
}

.padding {
    padding-top: 60px;
    padding-bottom: 30px;
}

.box-wrapper {
    padding-right: 450px;
    padding-left: 420px;
}

.color {
    color: #3F3A64;
}

.w-10 {
    width: 90%;
    padding-top: 150px;
    padding-left: 40px;

}


.position-relative {
    position: relative;
}

.position-absolute {
    position: absolute;
    top: 60%;
    width: 95%;
    text-align: center
}

.box {
    width: 280px;
    padding-top: 150px;
    padding-left: 10px
}
</style>
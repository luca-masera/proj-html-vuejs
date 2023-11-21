<template>
    <div class="box d-flex justify-content-evenly">
        <div class="padding-start">
            <h2>Distant learning for further expansion</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic beatae libero vero necessitatibus nam dolorem
                nesciunt sed ipsa eaque eveniet.
            </p>
            <button type="button" class="btn btn-success mb-3 mt-3"><i class="fa-solid fa-download pe-2"></i>Download
                free
                guide
            </button>
            <p>
                Have questions? Get Free Sample
            </p>
        </div>
        <div class="padding-end ">
            <img class="img-ricci" src='/images/ricci.jpg' alt="">
        </div>
    </div>
    <div class="box text-center">
        <img class="p" src='/images/client-logo-01.png' alt="">
        <img class="p" src='/images/client-logo-02.png' alt="">
        <img class="p" src='/images/client-logo-03.png' alt="">
        <img class="p" src='/images/client-logo-04.png' alt="">
        <img class="p" src='/images/client-logo-05.png' alt="">
        <img class="p" src='/images/client-logo-06.png' alt="">

    </div>
</template>

<script>
export default {
    name: 'FirstSectionMain'
}
</script>



<style lang="css" scoped>
.box {
    background-color: #F8F8F8;
}

button {
    background-color: #20AD96;
    border-radius: 10%;
    color: white;
}

.img-ricci {
    width: 350px;
    border-radius: 1000%;
}

.padding-end {
    padding-right: 450px;
    padding-top: 50px
}

.padding-start {
    padding-left: 420px;
    margin-right: 150px;
    padding-top: 100px;
}

.p {
    padding: 30px;
    padding-top: 40px;
}
</style>
#
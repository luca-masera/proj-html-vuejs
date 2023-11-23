<template>
    <div class="box d-flex justify-content-evenly">
        <div class="padding">
            <h2><b>Distant learning for further expansion</b></h2>
            <p class="color">Learning is a life-long journey that in fact we never find the terminate stop. Stop searching,
                enjoy the
                process.
            </p>

            <button type="button" class="btn btn-success mb-3 mt-3 px-3"><i class="fa-solid fa-download pe-2"></i>Download
                free
                guide
            </button>
            <p class="color">
                Have questions? <span><u>Get Free Sample <i class="fa-solid fa-arrow-right"></i></u></span>
            </p>
        </div>
        <div>
            <img class="img-ricci pt-5 pe-2 " src='/images/ricci.jpg' alt="">
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
    name: 'FirstsectionMain'
}
</script>



<style lang="css" scoped>
.box {
    background-color: #FFFFFF;
    padding-right: 420px;
    padding-left: 420px;
}

button {
    background-color: #20AD96;
    border-radius: 10%;
    color: white;
}

.img-ricci {
    width: 400px;
    border-radius: 100%;
}

.padding {
    margin-right: 180px;
    padding-top: 100px;
}

.p {
    padding: 30px;
    padding-top: 40px;
}

h2 {
    color: #3F3A64
}

.color {
    color: #8C89A2;
}

p span {
    color: #20AD96;
}

button:hover {
    background-color: #3F3A64
}
</style>
#
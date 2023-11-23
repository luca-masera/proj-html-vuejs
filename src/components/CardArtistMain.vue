<template>
    <div class="box d-flex ">
        <div class="d-flex flex-column margin ">
            <span class="pt-5 pb-2 color-text ">Enjoyable Insights</span>
            <h4 class="pb-3 color"><b>Most Viewed </b><span>Best Blogs</span></h4>
            <span class="pb-3 color"><i class="fa-solid fa-arrow-right pe-2"></i> Become a Better Blogger: Content
                Planning</span>
            <span class="pb-3 color"><i class="fa-solid fa-arrow-right pe-2"></i>Promoting Your Online Business on
                Pinterest</span>
            <span class="pb-3 color"><i class="fa-solid fa-arrow-right pe-2 "></i>Gamification and Game-Based
                Learning</span>
            <span class="pb-3 color"><i class="fa-solid fa-arrow-right pe-2"></i>Designing an Online Course from Expert’s
                Perspective</span>
            <span class="color"><i class="fa-solid fa-arrow-right pe-2"></i>Why Online Courses Are the Future of
                Education</span>
        </div>
        <div class="box-card mx-5 pb-4 ">
            <img src="/images/artist-01.jpeg" alt="">
            <p class="px-3 pt-3 ">Artist</p>
            <h6 class="px-3 color">Brush Strokes Energize Trees in Paintings</h6>
            <span class="px-3"><i class="fa-regular fa-calendar"></i>May 15,2020</span>
            <span><i class="fa-regular fa-eye"></i> 688 views</span>
        </div>
        <div class="box-card pb-4 ">
            <img src="/images/artist-02.jpg" alt="">
            <p class="px-3 pt-3 ">Artist</p>
            <h6 class="px-3 color">Pocket-Sized Notebooks Hold Miniature Paintings</h6>
            <span class="px-3"><i class="fa-regular fa-calendar"></i>May 15,2020</span>
            <span><i class="fa-regular fa-eye"></i> 603 views</span>
        </div>
    </div>
    <div class="box-white my-5">
        <h4 class="pb-3 color"><b>Subscribe</b> <span>Newsletters</span></h4>
        <p class="pb-3">Enter your email address to register to our newsletter subscription delivered on a regular basis!
        </p>
        <div class="d-flex">
            <input type="email" class="form-control" id="email" placeholder="Enter your email">
            <label for="email"></label>
            <button type="button" class="btn btn-success">Subscribe</button>
        </div>


    </div>
</template>

<script>
export default {
    name: 'CardArtistMain'
}
</script>

<style lang="css" scoped>
.box {
    padding-right: 450px;
    padding-left: 420px;
    background-color: #F5F1ED;


}

.box-white {
    padding-right: 700px;
    padding-left: 700px;
    text-align: center;

}

img {
    width: 100%;
}

.box-card {
    width: 25%;
    height: 40%;
    background-color: white;
    margin-top: 80px;
    margin-bottom: 70px;

}

.margin {
    margin-top: 85px;
}

.color {
    color: #3F3A64;
}

h4 span {
    color: #20AD96;
}

.color-text {
    color: #8C89A2;
}

button:hover {
    background-color: #3F3A64
}
</style>
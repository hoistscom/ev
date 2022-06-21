<template>
    <div class="hero-slider">
        <swiper :options="swiperOptions">
            <!-- Hero Slider Item Start -->
            <div class="swiper-slide" v-for="(hero, index) in heros" :key="index">
                <div class="hero-slide-item bg-cover" :style="{backgroundImage: `url('${hero.imgSrc}')`}">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="hero-slide-content">
                                    <h4 class="subtitle">{{ hero.subTitle }}</h4>
                                    <h2 class="title" v-html="hero.title">{{ hero.title }}</h2>
                                    <p>{{ hero.desc }}</p>
                                    <n-link :to="hero.btnUrl" class="btn-link">Learn More</n-link>
                                    <n-link :to="hero.btnUrl" class="btn-link cta-space">Our Services</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    speed: 1150,
                    spaceBetween: 30,

                    // Navigation arrows
                    navigation: {
                        nextEl: '.hero-slider .home-slider-next',
                        prevEl: '.hero-slider .home-slider-prev'
                    },
                    pagination: {
                        el: '.hero-slider .swiper-pagination',
                        type: 'bullets',
                        clickable: 'true'
                    },
                },

                heros: [
                    {
                        id: 1,
                        subTitle: "Illinois Residents",
                        title: "80% Rebate For EV Chargers",
                        desc: "Starting July 1st, 2022, Illinois businesses and residents may receive up to 80% rebate when installing new electric vehicle chargers.",
                        btnUrl: "/project",
                        imgSrc: "/images/slider/EV-Charger-Hero.jpg"
                    },
                    {
                        id: 2,
                        subTitle: "Illinois Residents",
                        title: "80% Rebate For EV Chargers",
                        desc: "Starting July 1st, 2022, Illinois businesses and residents may receive up to 80% rebate when installing new electric vehicle chargers.",
                        btnUrl: "/project",
                        imgSrc: "/images/slider/EV-Hero2.jpg"
                    },
                ]
            }
        },
    };
</script>

<style scoped>
.cta-space {
    margin-left: 1em;
}
</style>
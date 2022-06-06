<template>
    <div class="brand-logo-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Brand Logo Wrapper Start -->
                    <div class="brand-logo-carousel" data-aos="fade-up" data-aos-delay="300">
                        <swiper :options="swiperOptions">
                            <div class="swiper-slide single-brand-logo" v-for="(brand, index) in brandLogos" :key="index">
                                <n-link to="">
                                    <img :src="brand.imgSrc" :alt="brand.alt">
                                </n-link>
                            </div>
                        </swiper>
                    </div>
                    <!-- Brand Logo Wrapper End -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    speed: 750,
                    spaceBetween: 30,
                    slidesPerView: 5,
                    autoplay: true,

                    // Responsive breakpoints
                    breakpoints: {
                        320: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 4
                        },
                        992: {
                            slidesPerView: 5
                        }
                    }
                },

                brandLogos: [
                    {
                        imgSrc: "/images/brand-logo/1.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand-logo/2.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand-logo/3.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand-logo/4.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/brand-logo/5.png",
                        alt: "brand logo"
                    }
                ]
            }
        },
    };
</script>
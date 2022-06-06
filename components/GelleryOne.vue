<template>
    <div class="section bg-light">
        <div class="container">
            <div class="row align-items-center mb-5" data-aos="fade-up" data-aos-delay="300">

                <!-- Section Title Start -->
                <div class="col-xl-3 col-md-12">
                    <div class="section-title mb-0">
                        <h2 class="title">latest Works</h2>
                    </div>
                </div>
                <!-- Section Title End -->

                <!-- Tab Start -->
                <div class="col-xl-7 col-md-8">
                    <!-- Section Title & Product Tab Start -->
                    <div class="section-tabs-header">
                        <!-- Tabs Header Start -->
                        <ul class="tabs-header-nav nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#architecture"  @click.prevent="setActive('architecture')" :class="{ active: isActive('architecture') }">Architecture</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#interior" @click.prevent="setActive('interior')" :class="{ active: isActive('interior') }">Interior</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#landscape" @click.prevent="setActive('landscape')" :class="{ active: isActive('landscape') }">Landscape</a>
                            </li>
                        </ul>
                        <!-- Tabs Header End -->
                    </div>
                    <!-- Section Title & Product Tab End -->
                </div>
                <!-- Tab End -->

                <!-- All Project Button Start -->
                <div class="col-xl-2 col-md-4">
                    <div class="all-project-btn">
                        <n-link to="/project">See All Projects <i class="arrow icofont-rounded-right"></i></n-link>
                    </div>
                </div>
                <!-- All Project Button End -->

            </div>
        </div>
        <div class="container-auto">
            <!-- Tab Content Start -->
            <div class="tab-content swiper-arrow-hover" data-aos="fade-up" data-aos-delay="400">
                <div class="tab-pane fade" :class="{ 'active show': isActive('architecture') }" id="architecture">
                    <swiper :options="swiperOptions">
                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/1-1.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Residential</h4>
                                    <h3 class="title">
                                        <n-link to="/project">Cubic Villa</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/1-2.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Architecture</h4>
                                    <h3 class="title">
                                        <n-link to="/project">Culture House</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/1-3.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Commercial</h4>
                                    <h3 class="title">
                                        <n-link to="/project">ABC Financial Bank</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/1-4.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Interior</h4>
                                    <h3 class="title">
                                        <n-link to="/project">B6-No.5 OLA Tower</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </swiper>

                    <!-- Swiper Navigation Start -->
                    <div class="tab-carousel-prev tab-carousel-btn">
                        <i class="icofont-thin-left"></i>
                    </div>
                    <div class="tab-carousel-next tab-carousel-btn">
                        <i class="icofont-thin-right"></i>
                    </div>
                    <!-- Swiper Navigation End -->
                </div>
                <div class="tab-pane fade" :class="{ 'active show': isActive('interior') }" id="interior">
                    <swiper :options="swiperOptions">
                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/2-1.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Residential</h4>
                                    <h3 class="title">
                                        <n-link to="/project">Cubic Villa</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/2-2.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Architecture</h4>
                                    <h3 class="title">
                                        <n-link to="/project">Culture House</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/2-3.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Commercial</h4>
                                    <h3 class="title">
                                        <n-link to="/project">ABC Financial Bank</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/2-4.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Interior</h4>
                                    <h3 class="title">
                                        <n-link to="/project">B6-No.5 OLA Tower</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </swiper>

                    <!-- Swiper Navigation Start -->
                    <div class="tab-carousel-prev tab-carousel-btn">
                        <i class="icofont-thin-left"></i>
                    </div>
                    <div class="tab-carousel-next tab-carousel-btn">
                        <i class="icofont-thin-right"></i>
                    </div>
                    <!-- Swiper Navigation End -->
                </div>
                <div class="tab-pane fade" :class="{ 'active show': isActive('landscape') }" id="landscape">
                    <swiper :options="swiperOptions">
                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/1-1.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Residential</h4>
                                    <h3 class="title">
                                        <n-link to="/project">Cubic Villa</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/1-2.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Architecture</h4>
                                    <h3 class="title">
                                        <n-link to="/project">Culture House</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/1-3.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Commercial</h4>
                                    <h3 class="title">
                                        <n-link to="/project">ABC Financial Bank</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-project-slide">
                                <div class="thumb">
                                    <n-link to="/project" class="image">
                                        <img class="fit-image" src="/images/gallery/1-4.jpg" alt="Product" />
                                    </n-link>
                                </div>
                                <div class="content">
                                    <h4 class="subtitle">Interior</h4>
                                    <h3 class="title">
                                        <n-link to="/project">B6-No.5 OLA Tower</n-link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </swiper>

                    <!-- Swiper Navigation Start -->
                    <div class="tab-carousel-prev tab-carousel-btn">
                        <i class="icofont-thin-left"></i>
                    </div>
                    <div class="tab-carousel-next tab-carousel-btn">
                        <i class="icofont-thin-right"></i>
                    </div>
                    <!-- Swiper Navigation End -->
                </div>
            </div>
            <!-- Tab Content End -->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeItem: 'architecture',
                
                swiperOptions: {
                    speed: 1000,
                    slidesPerView: 4,
                    loop: true,
                    spaceBetween: 1,

                    // Navigation arrows
                    navigation: {
                        nextEl: '.tab-carousel-next',
                        prevEl: '.tab-carousel-prev',
                    },

                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        }
                    }
                }
            }
        },
        methods: {
            isActive (menuItem) {
            return this.activeItem === menuItem
            },
            setActive (menuItem) {
            this.activeItem = menuItem
            }
        }
    };
</script>
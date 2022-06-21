<template>
    <div class="section-padding-top bg-light" id="services">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Section Title Start -->
                    <div class="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h2 class="title">Our Services</h2>
                    </div>
                    <!-- Section Title End -->
                </div>

                <div class="col-12">
                    <div class="service-inner-container">
                        <div class="service-block" data-aos="fade-up" data-aos-delay="300" v-for="(service, index) in services" :key="index">
                            <div class="inner-box">
                                <h5 class="title">
                                    <n-link to="/about">{{ service.title }}</n-link>
                                </h5>
                                <p>{{ service.desc }}</p>
                                <div class="inner-box-bottom">
                                    <div class="icon">
                                        <!-- <img class="small-icon" :src="`/images/icon/${service.icon}`"/> -->
                                        <i class="icofont">{{ service.icon }}</i>
                                    </div>
                                    <n-link to="/about" class="more">more details</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        title: "Review Infrastructure",
                        desc: "Before any chargers may be installed, the existing infrastructure must be reviewed.",
                        icon: "icofont-dart"
                    },
                    {
                        title: "Feasibility Study",
                        desc: "Bring the beautifully for your house. Just enjoy!",
                        icon: "icofont-ruler-compass-alt"
                    },
                    {
                        title: "Engineered Drawings",
                        desc: "Bring nature in your house. Health is important",
                        icon: "icofont-credit-card"
                    },
                    {
                        title: "Engineering & Installation",
                        desc: "Bring the beautifully for your house. Just enjoy!",
                        icon: "icofont-ruler-compass-alt"
                    },
                    {
                        title: "Netwok Metering",
                        desc: "Bring nature in your house. Health is important",
                        icon: "icofont-credit-card"
                    },
                    {
                        title: "Load Sharing",
                        desc: "Consulting solutions and make plan to renovation",
                        icon: "icofont-live-support"
                    }
                ]
            }
        },
    };
</script>
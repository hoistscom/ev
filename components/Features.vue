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
                                    <n-link to="#contact">{{ service.title }}</n-link>
                                </h5>
                                <p>{{ service.desc }}</p>
                                <div class="inner-box-bottom">
                                    <div class="icon">
                                        <!-- <img class="small-icon" :src="`/images/icon/${service.icon}`"/> -->
                                        <i :class="service.icon"></i>
                                    </div>
                                    <!-- <n-link to="/about" class="more">more details</n-link> -->
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
                        desc: "Before any chargers may be installed, the existing infrastructure must be reviewed to determine project scope.",
                        icon: "icofont-architecture"
                    },
                    {
                        title: "Feasibility Study",
                        desc: "Feasibility studies are conducted to determine the existing demand for electricity and evaluate future need.",
                        icon: "icofont-clip-board"
                    },
                    {
                        title: "Engineered Drawings",
                        desc: "We create blueprints that are suitable for submitting building permits to local municipalities for your projects.",
                        icon: "icofont-ruler-compass-alt"
                    },
                    {
                        title: "Engineering & Installation",
                        desc: "In addition to EV charger installation, we also offer a full suite of electrical engineering services.",
                        icon: "icofont-charging"
                    },
                    {
                        title: "Network Metering",
                        desc: "Provides additional income by taking the excess electricity gathered from solar and adding it back to the grid.",
                        icon: "icofont-energy-solar"
                    },
                    {
                        title: "Load Sharing",
                        desc: "With distributed load sharing, each EV charger connected to the system will receive the same amount of electricity.",
                        icon: "icofont-bars"
                    }
                ]
            }
        },
    };
</script>
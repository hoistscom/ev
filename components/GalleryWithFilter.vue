<template>
    <div class="project-masonry-section">
        <div class="container">
            <div class="row">
                <div class="sorting-button">
                    <button data-filter="all" class="port-filter">All</button>
                    <button data-filter=".residential" class="port-filter">Residentials</button>
                    <button data-filter=".commercial" class="port-filter">Commercials</button>
                    <button data-filter=".architecture" class="port-filter">Architecture</button>
                    <button data-filter=".interior" class="port-filter">Interior</button>
                </div>
            </div>

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 box mesonry-list mtn-30">
                <!-- Single project Start -->
                <div class="col mix mt-30" :class="project.category" v-for="(project, index) in projects" :key="index">
                    <div class="single-project-wrap">
                        <div class="project-thumb position-relative">
                            <n-link to="/project-details" class="image">
                                <img :src="project.imgSrc" :alt="project.title">
                            </n-link>
                        </div>
                        <div class="inner-content">
                            <div class="sub-title">{{ project.category }}</div>
                            <h4 class="title">
                                <n-link to="/project-details">{{ project.title }}</n-link>
                            </h4>
                        </div>
                    </div>
                </div>
                <!-- Single project End -->
            </div>

            <div class="row section-padding-bottom">
                <div class="col-12">
                    <div class="load-more text-center mt-30">
                        <a href="javascript:void(0)">...Load more...</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mixer: null,
                projects: [
                    {
                        imgSrc: "/images/gallery/2.jpg",
                        title: "Dustin Villa, Spain",
                        category: "residential"
                    },
                    {
                        imgSrc: "/images/gallery/3.jpg",
                        title: "ABC Financial Bank",
                        category: "commercial"
                    },
                    {
                        imgSrc: "/images/gallery/4.jpg",
                        title: "Cubic Villa",
                        category: "residential"
                    },
                    {
                        imgSrc: "/images/gallery/5.jpg",
                        title: "Culture House",
                        category: "architecture"
                    },
                    {
                        imgSrc: "/images/gallery/6.jpg",
                        title: "B6-No.5 OLA Tower",
                        category: "interior"
                    },
                    {
                        imgSrc: "/images/gallery/7.jpg",
                        title: "Minimal Interior - A5, Italy",
                        category: "interior"
                    }
                ]
            }
        },

        mounted () {
            this.$nextTick(() => {
                const containerEl = document.querySelector('.box')
                this.mixer = new this.mixitup(containerEl)
            })
        },
    };
</script>

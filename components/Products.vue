<template>
    <div class="section-padding" id="products">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Section Title Start -->
                    <div class="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h2 class="title">We Offer 100+ Products</h2>
                    </div>
                    <!-- Section Title End -->
                </div>

                <div class="col-12">
                    <div class="product-inner-container">
                        <div class="product-block" data-aos="fade-up" data-aos-delay="300" v-for="(product, index) in products" :key="index">
                            <div class="product-inner-box">
                                <div class="product-inner-box-left">
                                    <img class="product-img" :src="`/images/products/${product.img}`"/>
                                    <!-- <n-link to="/about" class="more">more details</n-link> -->
                                </div>
                                <div class="product-inner-box-right">
                                    <h5 class="product-title">
                                        <n-link to="#contact">{{ product.title }}</n-link>
                                    </h5>
                                    <ul class="product-list">
                                        <li class="product-item">{{ product.desc1 }}</li>
                                        <li class="product-item">{{ product.desc2 }}</li>
                                        <li class="product-item">{{ product.desc3 }}</li>
                                        <li class="product-item">{{ product.desc4 }}</li>
                                    </ul>
                                    <a :href="`${product.link}`" target="_blank">
                                        <p class="btn-success btn-hover-dark read-more-btn">{{ product.title }} Products</p>
                                    </a>
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
                products: [
                    {
                        title: "SemaConnect",
                        desc1: "Series 5",
                        desc2: "Series 6",
                        desc3: "Series 7",
                        desc4: "Series 8",
                        img: "Series-7-with-Holsters-top-only1.png",
                        link: "https://semaconnect.com/products/"
                    },
                    {
                        title: "Clipper Creek",
                        desc1: "Series 5",
                        desc2: "Series 6",
                        desc3: "Series 7",
                        desc4: "Series 8",
                        img: "Clipper-Creek1.png",
                        link: "https://semaconnect.com/products/"
                    },
                    {
                        title: "Charge Point",
                        desc1: "Series 5",
                        desc2: "Series 6",
                        desc3: "Series 7",
                        desc4: "Series 8",
                        img: "CP-Express.png",
                        link: "https://semaconnect.com/products/"
                    },
                    {
                        title: "Leviton",
                        desc1: "Series 5",
                        desc2: "Series 6",
                        desc3: "Series 7",
                        desc4: "Series 8",
                        img: "EVR30-B1C.png",
                        link: "https://semaconnect.com/products/"
                    },
                ]
            }
        },
    };
</script>
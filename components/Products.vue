<template>
    <div class="section-padding-top" id="products">
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
                    <div class="mb-30" data-aos="fade-up" data-aos-delay="300">
                        <p>The world is transitioning to electric vehicles and we can help you meet the demand for charging from your customers and employees. We carry the best EV chargers on the market from manufacturers such as SemaConnect, Clipper Creek, Charge Point, and more. This includes level 2 chargers and level 3 chargers (DCFC: Direct Current Fast Charging).</p>
                    </div>
                    <div class="product-inner-container">
                        <div class="product-block" data-aos="fade-up" data-aos-delay="300" v-for="(product, index) in products" :key="index">
                            <div class="product-inner-box">
                                <div class="product-inner-box-left">
                                    <img class="product-img" :src="`/images/products/${product.img}`"/>
                                    <!-- <n-link to="/about" class="more">more details</n-link> -->
                                </div>
                                <div class="product-inner-box-right">
                                    <h5 class="product-title">
                                        <n-link to="#contact">{{ product.title }} EV Chargers</n-link>
                                    </h5>
                                    <ul class="product-list">
                                        <li class="product-item">{{ product.desc1 }}</li>
                                        <li class="product-item">{{ product.desc2 }}</li>
                                        <li class="product-item">{{ product.desc3 }}</li>
                                        <li class="product-item">{{ product.desc4 }}</li>
                                    </ul>
                                    <a :href="`${product.link}`" target="_blank">
                                        <p class="btn btn-success btn-hover-dark read-more-btn">{{ product.title }} Products</p>
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
                        desc1: "Series 5 - Multifamily",
                        desc2: "Series 6 - Commercial",
                        desc3: "Series 7 - Fleets",
                        desc4: "Series 8 - Retail",
                        img: "Series-7-with-Holsters-top-only1.png",
                        link: "https://semaconnect.com/products/"
                    },
                    {
                        title: "Clipper Creek",
                        desc1: "AmazingE Series",
                        desc2: "LCS Series",
                        desc3: "LHS Series",
                        desc4: "Share2 Series",
                        img: "Clipper-Creek1.png",
                        link: "https://semaconnect.com/products/"
                    },
                    {
                        title: "Charge Point",
                        desc1: "Express - DCFS",
                        desc2: "Express Plus - Scalable DCFS",
                        desc3: "CT4000 - All-Purpose",
                        desc4: "CPF50 - Fleets & Multifamily",
                        img: "CP-Express.png",
                        link: "https://www.chargepoint.com/products/commercial"
                    },
                    {
                        title: "Leviton",
                        desc1: "EVR Series",
                        desc2: "Wall Mount Station",
                        desc3: "Bollard Station",
                        desc4: "CPDCF - Public",
                        img: "EVR30-B1C.png",
                        link: "https://www.leviton.com/en/all-products-new/ev-charging/evse-charging#t=Products&sort=%40wcs_site_tree_rank%20ascending&layout=card&f:@tsa_device_type=[Charger]"
                    },
                ]
            }
        },
    };
</script>
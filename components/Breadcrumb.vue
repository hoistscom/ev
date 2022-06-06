<template>
    <div class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-12" data-aos="fade-up" data-aos-delay="300">
                    <div class="breadcrumb-wrapper">
                        <!-- Bread Title Start -->
                        <div class="bread-title">
                            <h1 class="title">{{ title }}</h1>
                        </div>
                        <!-- Bread Title End -->

                        <b-breadcrumb class="post-meta" :items="items"></b-breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['items', 'title']
    };
</script>

<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <BannerOne />

        <AboutOne />

        <Features />

        <Counterup />

        <VideoCallToAction />

        <TeamOne />

        <Testimonial />

        <BrandLogoCarousel />

        <Footer />

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top icofont-rounded-up"></i>
                <i class="arrow-bottom icofont-rounded-up"></i>
            </back-to-top>
        </client-only>

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            BannerOne: () => import('@/components/BannerOne'),
            AboutOne: () => import('@/components/AboutOne'),
            Features: () => import('@/components/Features'),
            Counterup: () => import('@/components/Counterup'),
            VideoCallToAction: () => import('@/components/VideoCallToAction'),
            TeamOne: () => import('@/components/TeamOne'),
            Testimonial: () => import('@/components/Testimonial'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'About Us'
            }
        },
    };
</script>



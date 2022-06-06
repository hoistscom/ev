<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <HeroOne />

        <AboutOne />

        <Features />

        <Counterup />

        <GelleryOne />

        <Testimonial />

        <BrandLogoCarousel />

        <BlogStyleOne />

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
            HeroOne: () => import('@/components/HeroOne'),
            AboutOne: () => import('@/components/AboutOne'),
            Features: () => import('@/components/Features'),
            Counterup: () => import('@/components/Counterup'),
            GelleryOne: () => import('@/components/GelleryOne'),
            Testimonial: () => import('@/components/Testimonial'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            BlogStyleOne: () => import('@/components/BlogStyleOne'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Architecture'
            }
        },
    };
</script>



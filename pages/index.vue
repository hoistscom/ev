<template>
    <div class="main-container">
        <!-- Google ReCAPTCHA -->

        <TheHeader />

        <HeroTwo />

        <!-- Embedded image for sharing -->
        <img type="hidden" url="../static/images/slider/Chicago-EV.jpg" />

        <AboutOne />

        <Features />

        <Counterup />

        <Products />

        <BrandLogoCarousel />

        <EvProgram />

        <ContactForm />

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
            HeroTwo: () => import('@/components/HeroTwo'),
            AboutOne: () => import('@/components/AboutOne'),
            Features: () => import('@/components/Features'),
            Counterup: () => import('@/components/Counterup'),
            Testimonial: () => import('@/components/Testimonial'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'EV Chargers',
            }
        },
    };
</script>
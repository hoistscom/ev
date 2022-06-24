<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <HeroOne />

        <AboutOne />

        <Features />

        <Counterup />

        <Testimonial />

        <BrandLogoCarousel />

        <EvProgram />

        <!-- Contact Page Section Start -->
        <div class="section-padding" id="contact">
            <div class="container">

                <!-- Form Boxed Start -->
                <div class="form-boxed" data-aos="fade-up" data-aos-delay="300">
                    <div class="section-title text-center">
                        <h2 class="title">Have A Question? Contact Us</h2>
                    </div>

                    <div class="boxed-inner">
                        <!-- Contact Form -->
                        <div class="contact-form">
                            <form>
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 form-group">
                                        <input class="input-item" type="text" name="name" placeholder="Enter your name...">
                                    </div>

                                    <div class="col-lg-4 col-md-6 form-group">
                                        <input class="input-item" type="email" name="email" placeholder="Your Email">
                                    </div>

                                    <div class="col-lg-4 col-md-12 form-group">
                                        <input class="input-item" type="text" name="subject" placeholder="Subject">
                                    </div>

                                    <div class="col-lg-12 form-group mb-10">
                                        <div class="input-item">
                                            <textarea class="textarea-item" name="message" placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 text-center form-group">
                                        <button class="btn btn-primary btn-hover-dark" type="submit" name="submit" id="submit"><span class="txt">Send Message</span></button>
                                    </div>
                                    <p class="col-8 form-message mb-0"></p>
                                </div>
                            </form>
                        </div>
                        <!--End Contact Form -->
                    </div>

                </div>
                <!-- Form Boxed End -->
            </div>
        </div>
        <!-- Contact Page Section End -->

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
            Testimonial: () => import('@/components/Testimonial'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Architecture'
            }
        },
    };
</script>
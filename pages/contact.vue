<template>
    <div class="main-container">

        <TheHeaderTwo />

        <OffCanvasMobileMenu />

        <!-- Contact Map Start -->
        <div class="section">
            <!--Google Map Area Start-->
            <div class="google-map-area w-100">
                <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"></iframe>
            </div>
            <!--Google Map Area Start-->
        </div>
        <!-- Contact Map End -->

        <!-- Contact Page Section Start -->
        <div class="contact-content-wrapper">
            <div class="container">
                <!-- Contact Info Boxed Start -->
                <div class="contact-info-boxed bg-light" data-aos="fade-up" data-aos-delay="300">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="inner-content">
                                <h1 class="title">Brooklyn, <span>New York</span></h1>
                                <span class="text">Your address goes here <br> Your address goes here</span>
                                <span class="email">Email: <a href="mailto:demo@example.com">demo@example.com</a></span>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="inner-info">
                                <span class="call">Call directly:<br><a href="tel:0123456789">0123456789</a></span>
                                <ul class="location-list">
                                    <li><span>Brand Offices:</span>Office Location | Office Location | Office Location | Office Location <br> Office Location | Office Location</li>
                                    <li><span>Work Hours:</span>Mon - Sat: 8.00 - 17.00, Sunday closed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Contact Info Boxed End -->

                <!-- Form Boxed Start -->
                <div class="form-boxed bg-light mt-50" data-aos="fade-up" data-aos-delay="300">
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
            TheHeaderTwo: () => import('@/components/TheHeaderTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Contact Us'
            }
        },
    };
</script>



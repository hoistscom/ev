<template>
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
                        <form action="https://formsubmit.co/0eb24e92fc02b5f5836b63922260a72f" method="POST">
                        <!-- <form> -->
                            <!-- Honeypot -->
                            <input type="text" name="_honey" style="display: none;">

                            <!-- Disable Captcha -->
                            <input type="hidden" name="_captcha" value="false">

                            <!-- Next Page -->
                            <input type="hidden" name="_next" value="https://ev-chicago.herokuapp.com/success">

                            <div class="row">
                                <div class="col-lg-4 col-md-6 form-group">
                                    <input class="input-item" type="text" name="Name" placeholder="Full Name" required>
                                </div>

                                <div class="col-lg-4 col-md-6 form-group">
                                    <input class="input-item" type="email" name="Email" placeholder="Your Email" required>
                                </div>

                                <div class="col-lg-4 col-md-12 form-group">
                                    <input class="input-item" type="tel" name="Phone" placeholder="Phone Number" required>
                                </div>

                                <div class="col-lg-12 form-group mb-10">
                                    <div class="input-item">
                                        <textarea class="textarea-item" name="Message" placeholder="Message" required></textarea>
                                    </div>
                                </div>

                                <div class="col-lg-12 text-center form-group">
                                    <button class="btn btn-primary btn-hover-dark" type="submit"><span class="txt">Send Message</span></button>
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
</template>

<script>
</script>

<style>
</style>
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

                            <!-- Subject -->
                            <input type="hidden" name="_subject" value="Chicago EV - New Inquiry">

                            <!-- CC: Additional recipients of the contact form -->
                            <input type="hidden" name="_cc" value="timstats91@gmail.com">

                            <!-- Template Style 2: Table -->
                            <input type="hidden" name="_template" value="table">

                            <!-- Next Page -->
                            <input type="hidden" name="_next" value="https://ev-chicago.herokuapp.com/success">

                            <!-- Auto Response (Doesn't work unless Captcha is active) -->
                            <!-- <input type="hidden" name="_autoresponse" value="Thanks for contacting Chicago EV! We'll review the information you included and get back to you within 1-2 business days."> -->

                            <div class="row">
                                <div class="col-lg-4 col-md-6 form-group">
                                    <label for="cars">Full Name*</label>
                                    <input class="input-item" type="text" name="Name" required>
                                </div>

                                <div class="col-lg-4 col-md-6 form-group">
                                    <label for="cars">Email*</label>
                                    <input class="input-item" type="email" name="Email" required>
                                </div>

                                <div class="col-lg-4 col-md-12 form-group">
                                    <label for="cars">Phone Number</label>
                                    <input class="input-item" type="tel" name="Phone Number">
                                </div>

                                <div class="col-lg-4 col-md-6 form-group">
                                    <label for="cars">Company Name</label>
                                    <input class="input-item" type="text" name="Company Name">
                                </div>

                                <div class="col-lg-4 col-md-6 form-group">
                                    <label for="cars">Company Address</label>
                                    <input class="input-item" type="text" name="Company Address">
                                </div>

                                <div class="col-lg-4 col-md-12 form-group">
                                    <label for="cars">Location Type</label>
                                    <select class="input-item" type="text" name="Location">
                                        <option value="Default" disabled selected>
                                            Select an Option
                                        </option>
                                        <option value="Multi-Unit Residential">
                                            Multi-Unit Residential
                                        </option>
                                        <option value="Parking Garage">
                                            Parking Garage
                                        </option>
                                        <option value="Commercial Business">
                                            Commercial Business
                                        </option>
                                        <option value="Shopping Outlet">
                                            Shopping Outlet
                                        </option>
                                        <option value="Fleet">
                                            Fleet
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>

                                <div class="col-lg-12 form-group mb-10">
                                    <label for="cars">Message*</label>
                                    <div class="input-item">
                                        <textarea class="textarea-item" name="Message" required></textarea>
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
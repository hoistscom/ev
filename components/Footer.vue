<template>
    <footer class="section-padding-top footer-cover glow overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <!-- Footer Logo Start -->
                    <div class="footer-logo">
                        <n-link to="/">
                            <img class="small-logo" src="/images/logo/Chicago-EV-Logo.png" alt="Logo Black" />
                        </n-link>
                    </div>
                    <!-- Footer Logo End -->

                    <!-- Footer Nav Start 
                    <ul class="footer-nav mb-n3">
                        <li class="mb-3">
                            <n-link to="/">Home</n-link>
                        </li>
                        <li class="mb-3">
                            <n-link to="/project">Project</n-link>
                        </li>
                        <li class="mb-3">
                            <n-link to="/blog">Blogs</n-link>
                        </li>
                        <li class="mb-3">
                            <n-link to="/about">About</n-link>
                        </li>
                        <li class="mb-3">
                            <n-link to="/contact">Contact</n-link>
                        </li>
                    </ul>
                     Footer Nav End -->

                    <!-- Contact Info Start -->
                    <div class="contact-info">
                        <p>1230 S. Hannah Ave. Forest Park, IL 60130</p>
                        <p><a href="tel:7087714549">(708)771-4549</a></p>
                        <p><a href="mailto:mike.clutter@sievertelectric.com">mike.clutter@sievertelectric.com</a></p>
                    </div>
                    <!-- Contact Info End -->

                    <!-- Footer Social Icons Start 
                    <ul class="footer-social-icons social-media-link justify-content-center">
                        <li>
                            <a href="#" class="icofont-facebook"></a>
                        </li>
                        <li>
                            <a href="#" class="icofont-twitter"></a>
                        </li>
                        <li>
                            <a href="#" class="icofont-instagram"></a>
                        </li>
                        <li>
                            <a href="#" class="icofont-linkedin"></a>
                        </li>
                        <li>
                            <a href="#" class="icofont-pinterest"></a>
                        </li>
                        <li>
                            <a href="#" class="icofont-dribbble"></a>
                        </li>
                    </ul>
                    Footer Social Icons End -->

                    <!-- Copyright Start -->
                    <div class="copyright">© 2022 <span>Chicago EV</span>
                        <p>All rights reserved</p>
                    </div>
                    <!-- Copyright End -->
                </div>
            </div>
        </div>
        <!-- <div class="footer-cover">
            <img src="/images/slider/car-footer.svg" alt="Logo Black">
        </div> -->
    </footer>
</template>

<style lang="scss">
    .glow {
        // background-image: radial-gradient(elipse at farthest-corner 100% -100%, rgba(175, 175, 175, 0) 100%, rgba(175, 175, 175, 1) 75% );
        background:radial-gradient(circle at 90% -10%, rgba(22, 22, 22, 0.8) 0%, rgba(0, 0, 0, 1) 29%);
    }
    .footer-cover {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        &:before{
            content: url("/images/slider/car-footer.svg");
            // background-image: "/images/slider/car-footer.svg";
            width: 250px important;
            background-size: 50%;
            top: 0;
            right: 0;
            bottom: 0;
            max-width: 30%;
        }
    }
</style>
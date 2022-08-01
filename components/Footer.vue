<template>
    <footer class="glow overflow-hidden">
        <div class="footer-cover">
            <div class="container footer-content">
                <div class="row">
                    <div class="col">
                        <!-- Footer Logo Start -->
                        <div class="footer-logo">
                            <n-link to="/">
                                <!-- <img class="small-logo" src="/images/logo/Chicago-EV-Logo.png" alt="Logo Black" /> -->
                                <Logo class="small-footer-logo"/>
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
                            <p><a href="mailto:sales@chicagoev.com">sales@chicagoev.com</a></p>
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
                        <div class="copyright">© 2022 <span>Chicago EV</span> All rights reserved                            
                        </div>
                        <!-- Copyright End -->
                    </div>
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
        background-position: right bottom;
        // background-size: 20;
        background-repeat: no-repeat;
        background-image: url("/images/slider/car-footer.svg");
        z-index: -1;

    //     &::before{
    //         content: url("/images/slider/car-footer.svg");
    //         // background: url("/images/slider/car-footer.svg");
    //         background-size: 100%;
    //         // width: 400px;
    //         top: 0;
    //         right: 0;
    //         bottom: 0;
    //         // max-width: 50%;
    //         position: relative;
    //     }
    }
    .footer-content {
        margin-top: 0;

        @media #{$extraBig-device, $laptop-device, $desktop-device} {
            margin-top: 100px;
        }
        
        @media #{$large-mobile, $small-mobile, $extra-small-mobile} {
            margin-top: 75px;
        }
    }
    .small-footer-logo {
        max-width: 250px;
    }
</style>
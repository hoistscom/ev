<template>
    <div class="work-image-bg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="content">
                        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="300">how we work</h4>
                        <h2 class="title" data-aos="fade-up" data-aos-delay="300">Easy &amp; Trusted <br> Progress</h2>
                        <p data-aos="fade-up" data-aos-delay="300">We understand that you’re hiring us to actually listen, and more <br> importantly, understand your vision, so that your home reflects your spirit and <br> personality, not ours. Above all else, when the project is finished, <br> we want you to  LOVE WHERE YOU LIVE</p>
                        <a href="#" class="pdf-file" data-aos="fade-up" data-aos-delay="300"><span class="icon icofont-file-pdf"></span>Download Offer [.PDF]</a>

                        <CoolLightBox 
                            :items="items" 
                            :index="index"
                            @close="index = null">
                        </CoolLightBox>

                            <a href="javascript:void(0)" class="video-box clearfix" data-aos="fade-up" data-aos-delay="300" @click="index = imageIndex" v-for="(image, imageIndex) in items" :key="imageIndex">
                                See How we work
                                <span class="fa-play icofont-play"><i class="ripple "></i></span>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

    export default {
        components: {
            CoolLightBox,
        },

        data() {
            return {
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
                        autoplay: true
                    },
                ],
                index: null
            }
        },
    };
</script>
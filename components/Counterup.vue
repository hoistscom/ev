<template>
    <div class="section-padding-bottom bg-light funfact-wrapper">
        <div class="container">
            <div class="funfact-inner">
                <div class="row mtn-30">
                    <div class="col-sm-4 col-6 mt-30" data-aos="fade-up" v-for="(counter, index) in counterUpContent" :key="index">
                        <div class="single-funfact">
                                <countTo :startVal='0' :endVal='counter.endVal' :duration='3000'></countTo>
                            <h6 class="title" v-html="counter.title">{{ counter.title }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from 'vue-count-to';

    export default {
        components: { 
            countTo,
        },
        data() {
            return {
                counterUpContent: [
                    { 
                        endVal: 1283,
                        title: "Chargers <br> Installed"
                    },
                    {
                        endVal: 117,
                        title: "EV Charger <br> Products"
                    },
                    {
                        endVal: 6,
                        title: "Versatile <br> Services"
                    },
                ]
            }
        },
    };
</script>
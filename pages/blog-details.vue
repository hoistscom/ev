<template>
    <div class="main-container">

        <TheHeaderTwo />

        <OffCanvasMobileMenu />

        <BlogDetailsPost />

        <RelatedBlogPost />

        <!-- Old New Post Section Start -->
        <div class="old-new-post-section overflow-hidden">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="old-new-post-content mtn-30">
                            <n-link to="/blog-details" class="old-post mt-30" data-aos="fade-right" data-aos-delay="300">Older<span>The Way Of Building</span></n-link>
                            <n-link to="/blog-details" class="new-post mt-30" data-aos="fade-left" data-aos-delay="300">Newer<span>New Interior Design Trends</span></n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Old New Post Section End -->

        <CommentForm />

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
            BlogDetailsPost: () => import('@/components/BlogDetailsPost'),
            RelatedBlogPost: () => import('@/components/RelatedBlogPost'),
            CommentForm: () => import('@/components/CommentForm'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Blog Details'
            }
        },
    };
</script>



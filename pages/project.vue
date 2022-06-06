<template>
    <div class="main-container">

        <TheHeaderTwo />

        <OffCanvasMobileMenu />

        <Breadcrumb :items="items" title="Our Project" />

        <GalleryWithFilter />

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
            Breadcrumb: () => import('@/components/Breadcrumb'),
            GalleryWithFilter: () => import('@/components/GalleryWithFilter'),
            Footer: () => import('@/components/Footer'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Project',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Our Projects'
            }
        },
    };
</script>



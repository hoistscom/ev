<template>
    <div class="main-container bg-image">
        <!-- Google ReCAPTCHA -->

        <SuccessComponent />

    </div>
</template>

<script>
    export default {
        components: {
            SuccessComponent: () => import('@/components/SuccessComponent'),
        },

        head() {
            return {
                title: 'Success!'
            }
        },
    };
</script>
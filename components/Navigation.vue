<template>
    <nav class="main-menu" :class="addClassNeme">
        <ul>
            <li class="has-children">
                <n-link to="#about">About Us</n-link>
            </li>
            <li class="has-children">
                <n-link to="#services">Services</n-link>
            </li>
            <li>
                <n-link to="#testimonials">Testimonials</n-link>
            </li>
            <li>
                <n-link to="#ev-program">EV Program</n-link>
            </li>
            <li>
                <n-link to="#contact">Contact</n-link>
            </li>
            <!-- <li class="has-children">
                <n-link to="/blog">Blog</n-link>
                <ul class="submenu">
                    <li>
                        <n-link to="/blog">Blog</n-link>
                    </li>
                    <li>
                        <n-link to="/blog-details">Blog Details</n-link>
                    </li>
                </ul>
            </li> -->
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ["addClassNeme"]
    }
</script>
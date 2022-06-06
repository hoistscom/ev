<template>
    <div class="news-block">
        <div class="image">
            <n-link to="/blog-details">
                <img :src="blog.imgSrc" :alt="blog.title" class="fit-image" />
            </n-link>
        </div>
        <div class="lower-content">
            <ul class="info-list">
                <li>{{ blog.date }}</li>
                <li>{{ blog.category }}</li>
            </ul>
            <h4 class="title">
                <n-link to="/blog-details">{{ blog.title }}</n-link>
            </h4>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>

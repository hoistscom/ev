export default {
    generate: {
        fallback: true
    },
    
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Gothic',
        titleTemplate: '%s || Gothic',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'assets/scss/style.scss'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/Mixitup.client.js',
        {
            src: "~/plugins/aos", 
            ssr: false 
        },
        { 
            src: '~plugins/vue-backtotop.js', 
            ssr: false 
        },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        ['nuxt-mail', {
            message: {
                to: 'tim@hoists.com',
            },
            smtp: {
                host: 'smtp.mailtrap.io',
                port: 2525,
                auth: {
                    user: 'f41dffb1cd6c3e',
                    pass: 'ad21e6c3b01592'
                },
            },
        }],
    ],

    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        extend (config, ctx) {
        },
    },
}

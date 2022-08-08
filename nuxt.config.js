export default {
    generate: {
        fallback: true
    },
    
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Chicago EV',
        titleTemplate: '%s || Chicago EV',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Chicago EV sells and installs electric vehicle chargers in the Chicagoland area.' },
            { hid: 'keywords', name: 'keywords', content: 'ev chargers, ev program, electric vehicles, chicago ev, semaconnect, clipper creek, chicago car chargers'},
            { hid: 'og:title', property: 'og:title', content: 'Chicago EV' },
            { hid: 'og:url', property: 'og:url', content: 'http://ev-chicago.herokuapp.com' },
            { hid: 'og:description', property: 'og:description', content: "Chicago EV sells and installs electric vehicle chargers in the Chicagoland area. Whether you own a shopping outlet, a parking garage, a fleet of electric vehicles, or any other commercial business, we have a solution that best fits your needs." },
            { hid: 'og:image', property: 'og:image', content: 'https://ev-chicago.herokuapp.com/images/slider/Chicago-EV.jpg'},
            { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        htmlAttrs: {
            lang: "en",
        },
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
        '@nuxtjs/robots'
    ],

    robots: {
        UserAgent: '*',
        Disallow: ''
    },

    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss'
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        extend (config, ctx) {
        },
        extend(config, { isClient }) {
            // Extend only webpack config for client-bundle
            if (isClient) {
                config.devtool = 'source-map'
            }
        }
    },
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  components: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'owasp-top-ten',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=ABeeZee&family=Baloo+2:wght@400;500;600;700&family=Chakra+Petch:wght@400;500;600;700&family=Figtree:wght@300;400;500;600;700&family=Kodchasan:wght@300;400;500;600;700&family=Livvic:wght@300;400;500;600;700&family=Maven+Pro:wght@400;500;600;700&family=Prompt:wght@300;400;500;600;700&family=Quattrocento+Sans:wght@400;700&family=Quicksand:wght@400;500;600;700&family=Urbanist:wght@300;400;500;600;700&display=swap",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

    ['@nuxtjs/style-resources', {
      scss: [
        '@/assets/style/scss/_global.scss',
      ]
    }]

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',

    [
      '@nuxtjs/markdownit',
      {
        runtime: true,
        linkify: true,
        breaks: true,
      }
    ],

    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          solid: true,
          brands: true
        }
      }
    ],


    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'phone',
        breakpoints: {
          phoneS: 370,
          phone: 500,
          tablet: 1024,
          laptop: 1280,
          laptopL: 1550,
          desktop: Infinity,
        }
      }
    ],

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

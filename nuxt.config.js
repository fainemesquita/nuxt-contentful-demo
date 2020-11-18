require('dotenv').config();
const contentful = require('contentful');

module.exports = {
    /*
    ** Headers of the page
    */
   head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: '' },
      { name: 'og:title', content: '' },
      { name: 'og:description', content: '' },
      { name: 'og:image', content: 'url(~assets/images/home-header-mobile.jpg)' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800;900&display=swap'}
    ]
  },
    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/main.scss'
    ],
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    modules: ['@nuxtjs/dotenv', '@nuxtjs/markdownit'],
    markdownit: {
        injected: true
    },

    webfontloader: {
        google: {
          families: ['Open+Sans:200,300,400,500,600,700,800,900&display=swap']
        }
    },

      /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/vue-gtag',
    "~/plugins/contentful",
    "~/plugins/posts"
  ],

    /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
 components: true,
 /*

   /*
  ** Nuxt.js modules
  */
 modules: [
    'nuxt-webfontloader',
    // '@/modules/static',
    // '@/modules/crawler',
    ['nuxt-lazy-load', {
      directiveOnly: true
    }],
    // ['nuxt-svg-sprite-module', {
    //   directory: '~/assets/icons/'
    // }],
    '@aceforth/nuxt-optimized-images',
    ['@netsells/nuxt-hotjar', { 
      id: '2009736', 
      sv: '6',
  }],
  ],
  
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 100
    },
    optipng: false,
    pngquant: {
      speed: 8,
      quality: [0.8, 0.9]
    },
    webp: {
      quality: 90
    }
  },
  

    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient, loaders: { vue } }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
                config.module.rules.push({
                    test: /(\.vue|\.js)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    exclude: /.nuxt/
                });
            }
            if (isClient) {
                vue.transformAssetUrls.img = ['data-src', 'src']
                vue.transformAssetUrls.source = ['data-srcset', 'srcset']
              }
            config.node = {
                fs: 'empty'
            }
        }
    },
    target: 'static',

    generate: {
        routes: () => {
            const client = contentful.createClient({
                space:  process.env.CTF_SPACE_ID,
                accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
                CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
                CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
                CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT
            });

            return client.getEntries({
                content_type: 'blogPost'
            }).then((response) => {
                return response.items.map(entry => {
                    return {
                        route: entry.fields.slug,
                        payload: entry
                    };
                });
            });
        },
    fallback: '404.html'
    }
}

// generate: {
//     routes() {
//       return Promise.all([
//         client.getEntries({
//           content_type: "blogPost"
//         })
//       ]).then(([blogEntries]) => {
//         return [...blogEntries.items.map(entry => entry.fields.slug)];
//       });
//     }
//    }

// routes: [
//     '/faine-post',
//     '/automate-with-webhooks'
//   ],
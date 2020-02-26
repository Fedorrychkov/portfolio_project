'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    [
      '@naumstory/nuxtjs-yandex-metrika',
      {
        id: '57659530',
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ]
  ],
  plugins: [
    {src: '~/plugins/vue-vuetify', ssr: true},
    {src: '~/plugins/vue-particles', ssr: false},
    {src: '~/plugins/vue-scrollto', ssr: false},
    '~/plugins/vue-lang',
    '~/plugins/vue-filter-numformat'
  ],
  buildModules: [
    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  head: {
    title: 'Федор Рычков - JavaScript разработчик, сооснователь Labado и Belka.guru',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Пишу веб приложения с 2014 года. Начинал как верстальщик, теперь занимаюсь разработкой высоконагруженного фронтенда на JavaScript.'
      },
      // OG META TAGS
      {
        property: 'og:image',
        content: 'fedorrychkov.jpeg'
      },
      {
        property: 'og:image:width',
        content: '333'
      },
      {
        property: 'og:image:height',
        content: '500'
      },
      {
        property: 'og:title',
        content: 'JavaScript Developer Fedor Rychkov'
      },
      {
        property: 'og:url',
        content: 'http://new.fedorrychkov.com/'
      },
      {
        property: 'og:description',
        content: 'I am JavaScript developer, co-founder of Labado and Belka.guru'
      },
      {
        name: 'yandex-verification',
        content: '06131fe7e497e8e5'
      },
      {
        name: 'google-site-verification',
        content: 'OzxDXQKMwuyGrgSrcDF08cTWum1fdyGJ9fz63X_9jKc'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/scss/main.scss'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources')
}

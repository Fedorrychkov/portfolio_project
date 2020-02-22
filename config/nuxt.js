'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  plugins: [
    {src: '~/plugins/vue-particles', ssr: false},
    {src: '~/plugins/vue-scrollto', ssr: false},
    '~/plugins/vue-lang',
  ],
  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  head: {
    title: 'Fedorrychkov - frontend/fullstack javascript разработчик',
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
        content: 'Сайт портфолио frontend/fullstack разработчика Фёдора Рычкова. Здесь можно ознакомится с моим резюме и проектами.'
      },
      // OG META TAGS
      {
        property: 'og:image',
        content: 'og-image.jpg'
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
        content: 'JavaScript разработчик Рычков Фёдор'
      },
      {
        property: 'og:url',
        content: 'https://fedorrychkov.com/'
      },
      {
        property: 'og:description',
        content: 'Портфолио и резюме можно найти туть!'
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

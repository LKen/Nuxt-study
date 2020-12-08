export default {
  // Nuxt.js lets you create environment variables client side, also to be shared from server side. (https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-env/)
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-study',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/styles/main.less'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/api',
    '@/plugins/antd-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    ['@nuxtjs/dotenv', { filename: '.env.prod' }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  // external server with Koa
  serverMiddleware: [
    { path: '/api', handler: '~/server' }
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
    }
  },

  middleware: 'global',

  // Plugin: axios, setting
  axios: {
    baseURL: process.env.BASE_URL // 一定要写完整，不然默认 127.0.0.1：80
  },

  // 配置 router 中间件，每次跳转路由都会经过中间件，可进行相应的权限判断
  router: {
    middleware: 'authenticated'
  },

  // server-side and client-side
  publicRuntimeConfig: {},

  // only server-side, overrides publicRuntimeConfig for server.
  privateRuntimeConfig: {}
}

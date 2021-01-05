/*
 * File: nuxt.config.ts
 * Project: nuxt-study
 * File Created: Thursday, 19th November 2020 1:54:06 pm
 * Author: KLEN (liangchuqiang@gosuncn.com)
 * Description: TS 配置  (https://typescript.nuxtjs.org/cookbook/components)
 * -----
 * Last Modified: Friday, 11th December 2020 9:59:42 am
 * Modified By: KLEN (liangchuqiang@gosuncn.com>)
 * -----
 * Copyright © 2015 - 2020 广州高新兴机器人有限公司, All Rights Reserved
 * -----
 */

import webpack from 'webpack'
import { NuxtConfig } from '@nuxt/types'

type SplitChunksOptions = webpack.Options.SplitChunksOptions

const Conf: NuxtConfig = {
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['ant-design-vue/dist/antd.css', '~/assets/styles/main.less'],

  // Global variables. (https://github.com/nuxt-community/style-resources-module)
  styleResources: {
    less: '~/assets/styles/vars/*.less'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/api', '@/plugins/antd-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    ['@nuxtjs/dotenv', { filename: '.env.prod' }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],

  // external server with Koa
  serverMiddleware: [{ path: '/api', handler: '~/server' }],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    extend(config, { isDev, isClient }): void {
      if (isDev && isClient) {
        config.module?.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      if (isClient) {
        ;(config.optimization?.splitChunks as SplitChunksOptions).maxSize = 200000
      }
    }
  },

  middleware: [],

  // Plugin: axios, setting
  axios: {
    baseURL: process.env.BASE_URL // 一定要写完整，不然默认 127.0.0.1：80
  },

  // 配置 router 中间件，每次跳转路由都会经过中间件，可进行相应的权限判断
  router: {
    middleware: 'authenticated'
  },

  // server-side and client-side, should hold all env variables that are public as these will be exposed on the frontend. This could include a reference to your public URL for example.
  publicRuntimeConfig: {},

  // only server-side, overrides publicRuntimeConfig for server, should hold all env variables that are private and that should not be exposed on the frontend. This could include a reference to your API secret tokens for example.
  privateRuntimeConfig: {}
}

export default Conf

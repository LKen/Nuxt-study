{ name: 'client',
  mode: 'production',
  devtool: false,
  optimization:
   { runtimeChunk: 'single',
     minimize: true,
     minimizer: [ [TerserPlugin] ],
     splitChunks:
      { chunks: 'all',
        automaticNameDelimiter: '/',
        cacheGroups: [Object],
        maxSize: 200000 } },
  output:
   { path: 'F:\\vue-ssr\\Nuxt-study\\.nuxt\\dist\\client',
     filename: '[contenthash:7].js',
     futureEmitAssets: true,
     chunkFilename: '[contenthash:7].js',
     publicPath: '/_nuxt/' },
  performance: { maxEntrypointSize: 1024000, hints: 'warning' },
  module:
   { rules:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ] },
  plugins:
   [ VueLoaderPlugin {},
     WarningIgnorePlugin { filter: [Function] },
     WebpackBarPlugin {
       profile: false,
       handler: [Function],
       modulesCount: 500,
       showEntries: false,
       showModules: true,
       showActiveModules: true,
       options: [Object],
       reporters: [Array] },
     HtmlWebpackPlugin {
       options: [Object],
       childCompilerHash: undefined,
       assetJson: undefined,
       hash: undefined,
       version: 4 },
     HtmlWebpackPlugin {
       options: [Object],
       childCompilerHash: undefined,
       assetJson: undefined,
       hash: undefined,
       version: 4 },
     VueSSRClientPlugin { options: [Object] },
     DefinePlugin { definitions: [Object] },
     ForkTsCheckerWebpackPlugin { options: [Object] } ],
  resolve:
   { extensions:
      [ '.wasm', '.mjs', '.js', '.json', '.vue', '.jsx', '.ts', '.tsx' ],
     alias:
      { '~~': 'F:\\vue-ssr\\Nuxt-study',
        '@@': 'F:\\vue-ssr\\Nuxt-study',
        '~': 'F:\\vue-ssr\\Nuxt-study',
        '@': 'F:\\vue-ssr\\Nuxt-study',
        assets: 'F:\\vue-ssr\\Nuxt-study\\assets',
        static: 'F:\\vue-ssr\\Nuxt-study\\static',
        'vue-meta':
         'F:\\vue-ssr\\Nuxt-study\\node_modules\\vue-meta\\dist\\vue-meta.esm.browser.js' },
     modules:
      [ 'node_modules',
        'F:\\vue-ssr\\Nuxt-study\\node_modules\\@nuxt\\typescript-runtime\\bin\\node_modules',
        'F:\\vue-ssr\\Nuxt-study\\node_modules\\@nuxt\\typescript-runtime\\node_modules',
        'F:\\vue-ssr\\Nuxt-study\\node_modules\\@nuxt\\node_modules',
        'F:\\vue-ssr\\Nuxt-study\\node_modules',
        'F:\\vue-ssr\\node_modules',
        'F:\\node_modules' ] },
  resolveLoader:
   { modules:
      [ 'F:\\vue-ssr\\Nuxt-study\\node_modules\\@nuxt\\webpack\\node_modules',
        'node_modules',
        'F:\\vue-ssr\\Nuxt-study\\node_modules\\@nuxt\\typescript-runtime\\bin\\node_modules',
        'F:\\vue-ssr\\Nuxt-study\\node_modules\\@nuxt\\typescript-runtime\\node_modules',
        'F:\\vue-ssr\\Nuxt-study\\node_modules\\@nuxt\\node_modules',
        'F:\\vue-ssr\\Nuxt-study\\node_modules',
        'F:\\vue-ssr\\node_modules',
        'F:\\node_modules' ] },
  entry: { app: [ 'F:\\vue-ssr\\Nuxt-study\\.nuxt\\client.js' ] } }

i You can use --depth or add more queries to inspect [Object] and [Array] fields.

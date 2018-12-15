module.exports = {
  css: [
    'normalize.css/normalize.css',
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bibased project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['~/plugins/vuex']
  },
  plugins: ['~plugins/element-ui', {src: '~plugins/vue-quill-editor', ssr: false}, '~plugins/iview'],
  modules: [
    // 请求代理配置，解决跨域
    '@gauseen/nuxt-proxy',
  ],
  cache: {
    max: 100000,
    maxAge: 900000
  },
  proxyTable: {
    '/db': { target: 'http://localhost:80/commercial-goods/public/index/index/index'}
    // '/db': { target: 'http://localhost:3003/commercial-goods/public/'}
  },
}

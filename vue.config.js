module.exports = {
  publicPath: process.env.VUE_APP_PUBLICPATH,
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  },
  lintOnSave: true,

  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: '@import "@/scss/global.scss;',
  //     },
  //   },
  // },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";
              @import "@/scss/_mixins.scss";`,
      },
    },
  },

  // pluginOptions: {
  // //   'style-resources-loader': {
  // //     preProcessor: 'scss',
  // //     patterns: [
  // //       path.resolve(__dirname, '@/styles/global.scss'),
  // //     ],
  // //   },
  // // },
  // },
  // assetsDir: 'static',
  transpileDependencies: [
    // can be string or regex
    '@phila/pinboard',
    '@phila/vue-comps',
    '@phila/vue-mapping',
    '@phila/vue-datafetch',
    // /other-dep/
  ],

};

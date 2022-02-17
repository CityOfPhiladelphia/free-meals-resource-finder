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

  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "@/scss/_variables.scss";
  //             @import "@/scss/_mixins.scss";`,
  //     },
  //   },
  // },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@phila/phila-ui/src/assets/styles/scss/helpers.scss";
          @import "~@phila/phila-ui/src/assets/styles/scss/functions.scss";
          @import "~@phila/phila-ui/src/assets/styles/scss/colors.scss";
        `,
        // @import "@/scss/_variables.scss";
        // @import "@/scss/_mixins.scss";
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
    '@phila/phila-ui',
    // '@phila/vue-comps',
    '@phila/vue-mapping',
    '@phila/vue-datafetch',
    'fuse.js',
    // /other-dep/
  ],

};

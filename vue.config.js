module.exports = {
  publicPath: process.env.VUE_APP_PUBLICPATH,
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@phila/phila-ui/src/assets/styles/scss/helpers.scss";
          @import "~@phila/phila-ui/src/assets/styles/scss/functions.scss";
          @import "~@phila/phila-ui/src/assets/styles/scss/colors.scss";
        `,
        sourceMap: true,
        sassOptions: {
          outputStyle: "compressed",
        },
      },
    },
  },
};

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  css: { extract: false },
  configureWebpack: {
    output: {
      libraryExport: "default"
    },
    plugins: [new BundleAnalyzerPlugin()]
  },
  pluginOptions: {
    compression: {
      gzip: {
        filename: "[file].gz[query]",
        algorithm: "gzip",
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8
      }
    }
  }
};

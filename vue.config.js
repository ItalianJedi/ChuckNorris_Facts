const path = require("push");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: require("./aliases.config").webpack
    }
  },
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  },
  runtimeCompiler: true,
  css: {
    sourceMap: true
  },
  publicPath: "",
  outputDir: "./docs",
  assetsDir: "assets"
};

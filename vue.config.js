const { defineConfig } = require('@vue/cli-service');

const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      luckysheet: 'luckysheet',
      ElMessage: 'ElMessage',
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
    proxy: {
      '/word': {
        target: 'http://localhost:9001',
        pathRewrite: { '/word': '' },
      },
    },
  },
});

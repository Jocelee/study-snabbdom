const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // 虚拟打包路径，文件夹不会真正生成，而是在8080端口生成
    publicPath: 'dist',
    // 打包的文件名
    filename: 'bundle.js',
  },
  devServer: {
      // 端口号
      port: 8080,
      // 静态资源文件夹
      contentBase: 'www'
  }
};
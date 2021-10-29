const react = require('@neutrinojs/react');
const devServer = require('@neutrinojs/dev-server');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    react({
      html: {
        title: 'Brew Master Pro 2.0',
        template: 'index.ejs',
      }
    }),
    devServer({
      host:'0.0.0.0',
      hot: true,
      proxy: {
        '/services': 'http://192.168.1.73:8080',
        '/events': 'http://192.168.1.73:8080'
      },
      contentBase: 'src/assets',
      contentBasePublicPath: '/assets'
    }),
  ],
};

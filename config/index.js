var path = require('path');

module.exports = {

    productionGzipExtensions: ['js', 'css'],

    dev: {

        env: require('./dev.env'),
        port: 3000,
        srcRoot: path.resolve(__dirname, '../examples'),
        index: path.resolve(__dirname, '../examples/index.html'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        assetsVirtualRoot: path.posix.join('/', 'static'),
        proxyTable: {},
        cssSourceMap: false

    },

    build: {

        env: require('./prod.env'),
        index: path.resolve(__dirname, '../docs/index.html'),
        assetsRoot: path.resolve(__dirname, '../docs'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: false

    },

    demo: {

        port: 3001

    }

};
const path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    CopyPlugin = require('copy-webpack-plugin'),
    HtmlPlugin = require('html-webpack-plugin'),
    HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin'),
    CompressionPlugin = require('compression-webpack-plugin'),
    // BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,

    config = require('../config.js'),
    baseWebpackConfig = require('../webpack.config.base.js'),
    utils = require('../utils.js'),
    vendorsAssets = require(utils.assetsVendorsAbsolutePath('vendors-assets.json')),

    env = process.env.NODE_ENV;

module.exports = merge(baseWebpackConfig, {

    mode: 'production',

    devtool: config.build.productionSourceMap ? '#source-map' : false,

    output: {
        publicPath: './',
        path: config.build.assetsRoot,
        filename: utils.assetsSubPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsSubPath('js/[id].[chunkhash].js')
    },

    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            cacheGroups: {
                componentsStyles: {
                    name: 'componentsStyles',
                    test: /[\\/]scss[\\/]index\.scss/,
                    chunks: 'all',
                    priority: 4,
                    reuseExistingChunk: true
                },
                lodash: {
                    name: 'lodash',
                    test: /[\\/]lodash[\\/]/,
                    chunks: 'all',
                    priority: 3,
                    reuseExistingChunk: true
                },
                reactBeautifulDnd: {
                    name: 'reactBeautifulDnd',
                    test: /[\\/]react-beautiful-dnd[\\/]/,
                    chunks: 'all',
                    priority: 2,
                    reuseExistingChunk: true
                },
                components: {
                    name: 'components',
                    test: /[\\/]src[\\/]/,
                    chunks: 'all',
                    priority: 1,
                    reuseExistingChunk: true
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    reuseExistingChunk: true
                }
            }
        }
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${env}'`
            }
        }),

        new CopyPlugin([{
            from: path.resolve(__dirname, '../../static'),
            to: config.assetsSubDirectory,
            ignore: ['.*']
        }]),

        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('polyfill-manifest.json'))
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('moment-manifest.json'))
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('react-manifest.json'))
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('tools-manifest.json'))
        }),

        new HtmlPlugin({
            filename: config.build.index,
            template: './examples/index.html',
            favicon: './examples/assets/images/favicon.ico',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunksSortMode: 'dependency'
        }),

        new HtmlIncludeAssetsPlugin({
            assets: [
                vendorsAssets['polyfill'].js,
                vendorsAssets['moment'].js,
                vendorsAssets['react'].js,
                vendorsAssets['tools'].js
            ],
            append: false
        }),

        new CompressionPlugin({
            test: new RegExp('\\.(' + config.productionGzipExtensions.join('|') + ')$'),
            cache: true,
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            threshold: 1,
            minRatio: 0.8
        })

        // new BundleAnalyzerPlugin()

    ]

});

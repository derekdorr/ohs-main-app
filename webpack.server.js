const Webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const srcPath = path.join(__dirname, '/src');
const distPath = path.join(__dirname, '/dist');

module.exports = {
    watch: false,
    cache: true,
    context: srcPath,
    target: 'node',
    entry: {
        server: './server.js',
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: 'styles.css',
            allChunks: true,
        }),
        new Webpack.LoaderOptionsPlugin({
            debug: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[name]_[local]',
                            },
                        },
                        {
                            loader: 'sass-loader',
                            query: {
                                sourceMap: false,
                            },
                        },
                    ],
                }),
            }
        ],
    },
    resolve: {
        alias: {
            '/services': './src/services/index',
        },
        modules: ['node_modules'],
    },
}
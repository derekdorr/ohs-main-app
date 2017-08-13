const Webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const srcPath = path.join(__dirname, '/src');
const distPath = path.join(__dirname, '/dist');

module.exports = {
    watch: true,
    cache: true,
    context: srcPath,
    target: 'web',
    entry: {
        client: './client.js',
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
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /.scss$/,
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
            '/services': './src/services/client',
        },
        modules: ['node_modules'],
    },
}
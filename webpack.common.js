const
    config = require('./config'),
    path = require('path');

const
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(config.srcDir, 'index.tsx'),
        vendor: [
            'react',
            'react-dom',
            'react-google-maps'
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: config.distDir
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(config.distDir),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new HtmlWebpackPlugin({
            template: path.join(config.srcDir, 'index.html')
        }),
    ],
};

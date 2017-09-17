const
    config = require('./config'),
    common = require('./webpack.common'),
    merge = require('webpack-merge');

const
    webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: config.distDir,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
});

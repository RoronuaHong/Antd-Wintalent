const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./build/webpack.base');
const buildConfig = require('./build/build.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css"
});

const config = {
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "img/[name].[ext]?[hash]"
                        }
                    }
                ]
            },
            {
                test: /\.gz$/,
                enforce: "pre",
                use: "gzip-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: true,
                ecma: 6,
                mangle: true
            }
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRadio: 0.8
        }),
        extractSass,
        new CopyWebpackPlugin([
            {
                from: './public/favicon.ico',
                to: './favicon.ico'
            }
        ]),
        new webpack.optimize.OccurrenceOrderPlugin(),       //分配ID, 优先考虑使用最多的模块
        new webpack.optimize.DedupePlugin(),                //删除类似的重复代码
        new webpack.optimize.AggressiveMergingPlugin(),     //合并块
    ]
}

const webpackConfig = merge(baseConfig, buildConfig, config);

module.exports = webpackConfig;

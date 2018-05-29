const path = require('path');
const HotModuleReplacementPlugin = require('react-hot-loader');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./build/webpack.base');
const buildConfig = require('./build/build.config');

const config = {
    devtool: 'cheap-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: "style-loader"
                    }, 
                    {
                        loader: "css-loader"
                    }, 
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|ico|mp4|webm)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
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
        new webpack.NamedModulesPlugin(),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        ignored: /node_modules/
    },
    devServer: {
        port: "7712",
        openPage: "./home.html",
        inline: true,                       //实时刷新
        hot: true,
        open: true,
        compress: true,
        historyApiFallback: {
            index: '/index.html'
        },
        host: "0.0.0.0",
        proxy: {
            // "/manage/": "http://192.168.0.178:8099"
            // "/manage/": "http://192.168.0.205:8080"
            // "/manage/": "http://hrsaas.wintalent.cn:8080"
            // "/api/": "http://192.168.0.169:3000"
            "/wt/runner/hunter/": "http://192.168.0.205:8081"
        }
    }
}

const webpackConfig = merge(baseConfig, buildConfig, config);

module.exports = webpackConfig;

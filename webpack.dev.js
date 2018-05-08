const path = require('path');
const HotModuleReplacementPlugin = require('react-hot-loader');
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
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: "img/[name].[ext]?[hash]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
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
        inline: true,   //实时刷新
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

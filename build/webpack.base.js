const path = require('path');
const webpack = require("webpack");
const es3ifyPlugin = require('es3ify-webpack-plugin');

const config = {
    entry: {
        vendor: ["console-polyfill", "babel-polyfill", "media-match", "raf/polyfill", "react", "react-dom", "react-router-dom"]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: [
            ".js", 
            ".css",
            ".less",
            ".scss", 
            ".png", 
            ".jpg", 
            ".jpeg", 
            ".gif",
            ".web.js",
            ".json"
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)\S*$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'css/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        // new es3ifyPlugin()
    ]
}

module.exports = config;

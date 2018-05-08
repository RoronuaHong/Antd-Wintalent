const HtmlWebpackPlugin = require('html-webpack-plugin');

const template = "./public/index.html";
const PUBLIC_URL = "./public";

const config = {
    entry: {
        home: "./src/pages/Home/index.js",
        signin: "./src/pages/SignIn/index.js",
        other: "./src/pages/Other/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: template,
            filename: 'home.html',
            hash: true,
            chunks: ["vendor", "home"],
            PUBLIC_URL: PUBLIC_URL,
            hash: true,
            title: "猎头"
        }),
        new HtmlWebpackPlugin({
            template: template,
            filename: 'signin.html',
            hash: true,
            chunks: ["vendor", "signin"],
            PUBLIC_URL: PUBLIC_URL,
            hash: true,
            title: "登录"
        }),
        new HtmlWebpackPlugin({
            template: template,
            filename: 'other.html',
            hash: true,
            chunks: ["vendor", "other"],
            PUBLIC_URL: PUBLIC_URL,
            hash: true,
            title: "其他"
        })
    ]
}

module.exports = config;

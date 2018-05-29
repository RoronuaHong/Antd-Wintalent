const HtmlWebpackPlugin = require('html-webpack-plugin');

const template = "./public/index.html";
const PUBLIC_URL = "./public";

const config = {
    entry: {
        home: "./src/pages/Home/index.js",
        signin: "./src/pages/SignIn/index.js",
        other: "./src/pages/Other/index.js",
        pwdmanage: "./src/pages/PasswordManage/index.js",
        recrecord: "./src/pages/RecRecord/index.js",
        candidate: "./src/pages/Candidate/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: template,
            filename: 'home.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true     //压缩 去掉引号
            },
            chunks: ["vendor", "home"],
            PUBLIC_URL: PUBLIC_URL,
            title: "猎头"
        }),
        new HtmlWebpackPlugin({
            template: template,
            filename: 'signin.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true     //压缩 去掉引号
            },
            chunks: ["vendor", "signin"],
            PUBLIC_URL: PUBLIC_URL,
            title: "猎头登录"
        }),
        new HtmlWebpackPlugin({
            template: template,
            filename: 'other.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true     //压缩 去掉引号
            },
            chunks: ["vendor", "other"],
            PUBLIC_URL: PUBLIC_URL,
            title: "其他"
        }),
        new HtmlWebpackPlugin({
            template: template,
            filename: 'pwdmanage.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true     //压缩 去掉引号
            },
            chunks: ["vendor", "pwdmanage"],
            PUBLIC_URL: PUBLIC_URL,
            title: "用户管理"
        }),
        new HtmlWebpackPlugin({
            template: template,
            filename: 'recrecord.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true     //压缩 去掉引号
            },
            chunks: ["vendor", "recrecord"],
            PUBLIC_URL: PUBLIC_URL,
            title: "推荐记录"
        }),
        new HtmlWebpackPlugin({
            template: template,
            filename: 'candidate.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true     //压缩 去掉引号
            },
            chunks: ["vendor", "candidate"],
            PUBLIC_URL: PUBLIC_URL,
            title: "候选人"
        })
    ],
    performance: {
        hints: false
    }
}

module.exports = config;

const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HOST = "http://localhost"
const PORT = 3000

module.exports = {
    entry: path.join(__dirname, '../example/example.js'),
    output: {
        path: path.join(__dirname, "../example/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                use: [{
                    loader: "babel-loader"
                }],
                exclude: "/node_modules/",
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { minimize: false, sourceMap: true } },
                    { loader: "postcss-loader" },
                    { loader: "less-loader", options: { sourceMap: true } }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { minimize: false, sourceMap: true } },
                    { loader: "postcss-loader" }
                ]

            },
            {
                test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "images/[name].[ext]"          //遇到图片  生成一个images文件夹  名字.后缀的图片
                    }
                }]
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]",
                        },
                    },
                ],
            },
        ]
    },
    devtool: "source-map",
    //自动补全后缀
    resolve: {
        enforceExtension: false,
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve("src"),
            path.resolve("."),
            "node_modules",
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "../example/"),
        compress: false,
        inline: true,
        port: PORT,
        publicPath: "/dist",
        historyApiFallback: true,
        stats: {
            color: true,
            errors: true,
            version: true,
            warnings: true,
            progress: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './example/index.html',
            title: 'react-3d-gallery example'
        }),
        new OpenBrowserPlugin({
            url: `${HOST}:${PORT}/`
        })
    ]
}
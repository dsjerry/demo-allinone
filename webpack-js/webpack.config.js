const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name]-[hash]-bundle.js",
        path: path.join(__dirname, "dist"),
    },
    devServer: {
        port: 8090,
        hot: true,
        static: {
            directory: path.join(__dirname, "public"),
        },
        client: {
            logging: "info",
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.png$/,
                use: {
                    // 可以使用 file-loader；使用 url-loader 后指定大小范围图片会被转换成 base64 格式
                    // 否则自动使用 file-loader
                    // loader: "file-loader",
                    loader: "url-loader",
                    options: {
                        limit: 1024 * 10,
                    },
                },
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 传递参数以自定义生成的 html 文件
        new HtmlWebpackPlugin({
            title: "Webpack Plugin Sample",
            meta: {
                viewport: "width=device-width",
            },
            template: "./src/index.html",
        }),
    ],
}

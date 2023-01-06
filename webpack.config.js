const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./index.js",
        analytics: "./analytics.js"
    },
    resolve: {
        extensions: [".js", ".json", ".png"],
        alias: {}
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif)$/, type: "asset/resource"
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/, type: "asset/resource"
            },
            {
                test: /\.xml$/, use: ["xml-loader"]
            },
            {
                test: /\.csv$/, use: ["csv-loader"]
            },
        ]
    }
}


//entry - файл, который является точкой входа в приложение. Самый последний файл, которому нужны все зависимости проекта грубо говоря (App)
//output - информация от том куда складывать результат работы вебпака.
//npx webpack
//после минимального конфигурирования вебпака в js файлах становятся доступны inmport, export, require

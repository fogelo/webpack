const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
        analytics: "./src/analytics.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ]
}


//entry - файл, который является точкой входа в приложение. Самый последний файл, которому нужны все зависимости проекта грубо говоря (App)
//output - информация от том куда складывать результат работы вебпака.
//npx webpack
//после минимального конфигурирования вебпака в js файлах становятся доступны inmport, export, require

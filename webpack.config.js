const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssWebpackPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



const isDev = process.env.NODE_ENV === "development"
console.log("isDev", isDev)

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
    devServer: {
        static: {
            directory: path.join(__dirname, "src"),
        },
        compress: true,
        port: 8080,
        hot: isDev,
        // open: true,
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/favicon.ico"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        }),
        new MiniCssWebpackPlugin({
            filename: "styles.css"
        }),
        new CssMinimizerPlugin(),
        // new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    {
                        loader: MiniCssWebpackPlugin.loader,
                        // options: {
                        // }
                    },
                    "css-loader"]
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
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}


//entry - файл, который является точкой входа в приложение. Самый последний файл, которому нужны все зависимости проекта грубо говоря (App)
//output - информация от том куда складывать результат работы вебпака.
//npx webpack
//после минимального конфигурирования вебпака в js файлах становятся доступны inmport, export, require

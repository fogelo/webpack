const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}


//entry - файл, который является точкой входа в приложение. Самый последний файл, которому нужны все зависимости проекта грубо говоря (App)
//output - информация от том куда складывать результат работы вебпака.

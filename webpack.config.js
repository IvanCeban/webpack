const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    }, // Откуда стоит начать сборку приложения
    output: { // Куда складывать результат сборки
        filename: '[name].[contenthash].js', // имя файла сборки
        path: path.resolve(__dirname, 'dist') // адрес где будет этот файл находиться
    },
    plugins: [
        new HTMLWebpackPlugin()
    ]
}
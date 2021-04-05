const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    }, // Откуда стоит начать сборку приложения
    output: { // Куда складывать результат сборки
        filename: '[name].[contenthash].js', // имя файла сборки
        path: path.resolve(__dirname, 'dist') // адрес где будет этот файл находиться
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // при помощи регулярного выражения проверяем расширение файла
                use: ['style-loader', 'css-loader'] // если это css, то используем эти loaders
            }

        ]
    }
}
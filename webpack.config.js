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
    resolve: {
        extensions: ['.js', '.json', '.png'], // какие расширения нужно понимать по умолчаию
        alias: { // позволяет задавать абсолютные пути
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 3000
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
            },
            {
                test: /\.(png|jpg|svg|gif)$/, // перечисляем возможные расширения графических файлов
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    }
}

// libs
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// variables
const BUILD_DIR = path.resolve(__dirname, './dist');

// config
module.exports = {
    entry: './src/js/index.ts',
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/index.html',
            inject: 'inject'
        })
    ],
    devServer: {
        contentBase: './',
        compress: true,
        host: '0.0.0.0',
        port: 8000
    }
};

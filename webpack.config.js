const { resolve } = require('path');
const path = require('path');
const patch = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:   'development',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
       path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve:{
        extensions: ['.js', '.jsx']
    },

    devServer:{
        contentBase:  path.resolve(__dirname, 'public'),
    }, // yarn webpack serve 'agora converte o bundle e atualiza a porta 8080'

    plugins :[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};
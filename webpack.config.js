const path = require('path');

const sassLoaders = [
    'css-loader',
    'sass-loader'
]
module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // {
            //     test: /\.scss$/,
            //     loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            // }
        ],
    },
    // plugins: [
    //     new ExtractTextPlugin("styles.css"),
    // ],
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        alias: {
                "request$": "xhr"
        }
    },
    devServer: { inline: true },
    node: {fs: "empty"}
};
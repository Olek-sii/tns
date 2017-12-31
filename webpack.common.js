const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const publicPath = 'http://localhost:8050/static/build/';
const cssName = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
const jsName = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

module.exports = {
    entry: ['react-hot-loader/patch', './src/client.js'],
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("styles.css"),
        new webpack.NamedModulesPlugin()
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }))
            },
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] }
        ]
    },
    output: {
        filename: jsName,
        path: `${__dirname}/static/build/`,
        publicPath
    }
};

// /* eslint no-useless-escape: 0 */
//
// var webpack = require('webpack');
// var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// var CleanWebpackPlugin = require('clean-webpack-plugin');
//
// var publicPath = 'http://localhost:8050/static/build/';
// var cssName = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
// var jsName = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';
//
// var plugins = [
//     new webpack.DefinePlugin({
//         'process.env': {
//             BROWSER: JSON.stringify(true),
//             NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
//         }
//     }),
//     new ExtractTextPlugin(cssName),
//     new UglifyJsPlugin()
// ];
//
// if (process.env.NODE_ENV === 'production') {
//     plugins.push(
//         new CleanWebpackPlugin([ 'public/static/build/' ], {
//             root: __dirname,
//             verbose: true,
//             dry: false
//         })
//     );
// }
//
// module.exports = {
//     entry: path.resolve(__dirname, './src/client.js'),
//     resolve: {
//         extensions: ['.js', '.jsx']
//     },
//     plugins,
//     output: {
//         path: `${__dirname}/public/static/build/`,
//         filename: jsName,
//         publicPath
//     },
//     module: {
//         rules: [
//             { test: /\.css$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})) },
//             { test: /\.scss$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})) },
//             { test: /\.jsx?$/, loader: process.env.NODE_ENV !== 'production' ? ['react-hot-loader/webpack', 'babel-loader'] : 'babel-loader', exclude: [/node_modules/, /public/] },
//             { test: /\.jsx?$/, loader: 'eslint-loader', include: path.resolve(process.cwd(), 'src'), enforce: 'pre' }
//         ]
//     },
//     devServer: {
//         headers: { 'Access-Control-Allow-Origin': '*' }
//     }
// };

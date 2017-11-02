var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)/,
            use: ExtractTextPlugin.extract('css-loader!sass-loader')
        }, {
            test: /\.(png|svg|jpe?g|gif)/,
            use: [
                'file-loader?name=[name].[ext]&outputPath=images/',

                {
                    loader: 'image-webpack-loader',
                    options: {
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 4,
                        },
                        pngquant: {
                            quality: '80-90',
                            speed: 4
                        },
                        mozjpeg: {
                            progressive: true,
                            quality: 75
                        },
                        // Specifying webp here will create a WEBP version of your JPG/PNG images
                        webp: {
                            quality: 75
                        }
                    }
                }
            ]
        }]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'app/index.html' }),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('css/main.css', {
            allChunks: true
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    )
}

module.exports = config;
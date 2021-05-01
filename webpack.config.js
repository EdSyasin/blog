const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        vue: "./resources/js/admin/main.ts",
        app: "./resources/sass/app.scss"
    },
    output: {
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[id].chunk.js",
        path: __dirname + "/public"
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/],
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    configFile: 'tsconfig.json'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader',
                        scss: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            'sass-loader'
                        ],
                        esModule: true
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // {
            //     test: /\.vue\.(s?[ac]ss)$/,
            //     use: ['vue-style-loader', 'css-loader', 'sass-loader']
            // },
            // {
            //     //test: /\.(scss|css)$/,
            //     test: /(?<!\.vue)\.(s?[ac]ss)$/,
            //     sideEffects: true,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         //'vue-style-loader',
            //         'css-loader',
            //         'sass-loader',
            //
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue']
    }
}

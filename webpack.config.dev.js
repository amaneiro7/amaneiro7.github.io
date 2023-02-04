const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ProgressPlugin = require('progress-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",        
        clean: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            '@styles': path.resolve(__dirname,'src/styles'),
            '@App': path.resolve(__dirname,'src/App'),
            '@Components': path.resolve(__dirname,'src/Components'),
            '@assets': path.resolve(__dirname,'src/assets/images'),
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",      
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",                    
                },
            },
            {
                test: /\.(png|jpg|jpeg)/,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        new ProgressPlugin(true),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/skillset"),
                    to: "assets/skillset"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/download"),
                    to: "assets/download"
                }
            ]
        })
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        open: true
    },
};
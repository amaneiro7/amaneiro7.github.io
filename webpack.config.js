const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ProgressPlugin = require('progress-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: 'assets/images/[hash][ext][query]',   
        clean: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            '@styles': path.resolve(__dirname,'src/styles'),
            '@App': path.resolve(__dirname,'src/App'),
            '@Components': path.resolve(__dirname,'src/Components'),
        }
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: [                    
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.(png|jpg|jpeg)/,
                type: 'asset/resource'
            }
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
                    from: path.resolve(__dirname, "src", "assets/portfolio"),
                    to: "assets/portfolio"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/skillset"),
                    to: "assets/skillset"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/achievements"),
                    to: "assets/achievements"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/achievements-icon"),
                    to: "assets/achievements-icon"
                },
                {
                    from: path.resolve(__dirname, "src", "assets/download"),
                    to: "assets/download"
                }
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
};
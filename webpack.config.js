let webpack = require("webpack");
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let HtmlWebpackExcludeAssetsPlugin = require("html-webpack-exclude-assets-plugin");
let CopyWebpackPlugin = require("copy-webpack-plugin");

function root(p) {
    return path.resolve(__dirname, p);
}

module.exports = {
    entry: {
        "app": "./client/main",
        "test-worker": "./client/workers/test-worker"
    },
    output: {
        path: root("public"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['raw-loader']
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'raw-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },

            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ['raw-loader']
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            root("./client/app")
        ],
        extensions: [".js", ".ts"],
        alias: {

        }
    },
    devtool: "source-map",
    target: "web",
    plugins: [

        new CopyWebpackPlugin(
            [{
                from: root("./client/static"),
                to: root("./public")
            }]
        ),

        new HtmlWebpackPlugin({
            title: "My App",
            filename: root("./public/index.html"),
            template: root("./client/index.html"),
            excludeAssets: [
                /workers/
            ]
        }),

        new HtmlWebpackExcludeAssetsPlugin()
        /*,


        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true
        })
        */

    ]
};
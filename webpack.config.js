var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

function root(p) {
    return path.resolve(__dirname, p);
}

module.exports = {
    entry: {
        "app": "./client/main"
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

        new HtmlWebpackPlugin({
            title: "My App",
            filename: root("./public/index.html"),
            template: root("./client/index.html")
        })
        /*,


        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true
        })
        */

    ]
};
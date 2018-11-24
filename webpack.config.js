const webpack = require("webpack");
require("babel-polyfill");

module.exports = {
    entry: ["babel-polyfill", "./src/Index.js"],
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: "./public",
        port: "5000"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
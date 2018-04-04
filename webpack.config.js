const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.join(__dirname, 'static'),
    entry: path.join(__dirname, "src", "client", "client.js"),
    output: {
        path: path.join(__dirname, 'static'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        /*
        new HtmlWebPackPlugin({
            template: "../src/index.html",
            filename: "./index.html"
        }),
        */
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "./style/[id].css"
        })
    ]
};

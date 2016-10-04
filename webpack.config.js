module.exports = {
    context: __dirname,
    entry: {
        example: [ "./client-src/example/index.js" ]
    },
    output: {
        path: "./public/assets",
        publicPath: "/assets/",
        filename: "[name]/library.js"
    },
    devServer: {
        contentBase: "./public",
        hot: false,
        inline: true        
    },
    devtool: "sourceMap",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    "ui5-loader?sourceRoot=./client-src",
                    "babel-loader?sourceRoot=./client-src"
                ]
            }
        ]
    }
};

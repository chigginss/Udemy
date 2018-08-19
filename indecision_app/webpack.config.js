const path = require('path');

// entry -> output

// tell wepback where to start
// path is absolute path where we want to output - must be absolute
module.exports = {
    entry: "./source/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

//loader - customize the behavior of webpack
//convert an SCSS file to CSS

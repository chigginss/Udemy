const path = require('path');

// entry -> output

// tell wepback where to start
// path is absolute path where we want to output - must be absolute
module.exports = {
    entry: "./source/app2.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    }
};

//loader - customize the behavior of webpack
//convert an SCSS file to CSS

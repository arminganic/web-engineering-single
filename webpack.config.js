const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'assets/js/bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist') // use dist folder to serve application to the browser
    }
}

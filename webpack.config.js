var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'public') + '/app/app.js',
    output: {
        path: path.resolve(__dirname, 'public') + '/dist/app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'public'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
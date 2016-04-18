var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        //suite: path.join(__dirname, 'src'),
        button: './test/button.js',
        dropdown: './test/dropdown.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'Suite',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,

            loaders: [
                'babel?presets[]=stage-0,presets[]=react,presets[]=es2015,plugins[]=transform-decorators-legacy'
            ],
            exclude: /node_modules/
        }]
    }
};

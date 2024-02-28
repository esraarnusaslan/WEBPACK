const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const dev = {
    mode: 'development',
    devServer: {
        watchFiles: ['src/**/*.html', 'src/**/*.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js',
        clean: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s(a|c)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};

module.exports = merge(common, dev);

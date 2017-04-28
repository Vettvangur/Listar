var path    = require('path');
var webpack = require('webpack');

var settings = {
    devtool: 'eval-source-map',
    watch: true,
    entry: {
        app:     'js/app',
    },
    output: {
        path: path.join(__dirname, './js/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
              {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
              },
              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react', 
                        ['env', { 'modules': false }]
                    ]
                },
              }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'app',
            chunks: [
                'app',
                'booking'
            ]
        })
    ],
    resolve: {
        modules: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'js'),
            'node_modules'
        ],
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", '.jsx'],
        alias: {
            components: path.resolve('js/components'),
            data:       path.resolve('js/data'),
            models:     path.resolve('js/models'),
            gUtilities: path.resolve('js/gUtilities'),
            utilities:  path.resolve('js/utilities'),
            pages:  path.resolve('js/pages'),

            reusableComponents: path.resolve('js/reusableComponents')
        } 
    }
};

module.exports = function(env) {

    if (env && env.prod) {
        settings = Object.assign(settings, {
            devtool: '',
            output: {
                path: path.join(__dirname, '../Umbraco.Site/scripts'),
                filename: '[name].min.js'
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env': {
                        // This has effect on the react lib size
                        'NODE_ENV': JSON.stringify('production'),
                    }
                }),
                new webpack.optimize.UglifyJsPlugin({})
            ]
        });
    }

    return settings;
};

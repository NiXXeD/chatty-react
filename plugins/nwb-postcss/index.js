module.exports = {
    cssPreprocessors: {
        postcss: {
            test: /\.scss$/,
            loader: require.resolve('postcss-loader'),
            defaultConfig: 'postcssLoader',
            postcss: () => ([
                //scss syntax
                require('precss')
            ])
        }
    }
}

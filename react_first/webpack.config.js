module.exports = {
    entry: {
        index: './jsx/index.jsx',
    },
    output: {
        path:__dirname + '/build',
        filename:'[name].js',
    },
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.js[x]?$/,
                exclude:/node_modules/,
                use: {
                    loader :'babel-loader',
                    options:{
                        presets:['es2015','react']
                    }
                }
            },
        ]
    }
};
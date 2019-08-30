module.exports = {
    mode: 'development',
    target: 'web',
    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

const path = require('path');

module.exports = {
        entry: './src/index.ts',
       devtool: 'inline-source-map',
    module: {
    rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },{ test: /\.js$/, loader: "source-map-loader" }
    ],
},
resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
},
output: {
    filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
},
};

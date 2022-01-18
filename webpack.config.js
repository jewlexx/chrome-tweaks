const path = require('path');

module.exports = () => {
  return {
    mode: 'production',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      publicPath: '',
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
    },
  };
};
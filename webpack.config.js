const path = require('path');
const fs = require('fs');

module.exports = () => {
  const dist = path.resolve(__dirname, 'dist');
  fs.copyFileSync(
    path.resolve(__dirname, 'manifest.json'),
    path.resolve(dist, 'manifest.json'),
  );

  return {
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      path: dist,
      filename: 'bundle.js',
    },
  };
};

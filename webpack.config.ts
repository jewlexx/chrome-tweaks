import path from 'path';
import fs from 'fs';

const config = () => {
  const dist = path.resolve(__dirname, 'dist');
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist);
  fs.copyFileSync(
    path.resolve(__dirname, 'chrome.manifest.json'),
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

export default config;

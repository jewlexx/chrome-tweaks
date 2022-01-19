import path from 'path';
import fs from 'fs';

interface Env {
  firefox: true | undefined;
  chrome: true | undefined;
}

const config = (env: Env) => {
  if (!env.firefox && !env.chrome) {
    process.stdout.write(
      'Please choose either chrome or firefox using "--env <browser>"\n',
    );
    process.exit(1);
  }

  const dist = path.resolve(__dirname, 'dist');
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist);
  const manifestLoc = path.resolve(
    __dirname,
    `${env.firefox ? 'firefox' : 'chrome'}.manifest.json`,
  );
  fs.copyFileSync(manifestLoc, path.resolve(dist, 'manifest.json'));

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

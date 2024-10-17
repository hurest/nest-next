const path = require('path');

module.exports = [
  {
    // 클라이언트용 번들 설정
    entry: './src/client/index.tsx',
    target: 'web',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, '.react/public'),
      filename: 'bundle.js',
      publicPath: '/public/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  },
];

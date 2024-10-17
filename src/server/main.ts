import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import register from '@babel/register';
import { join } from 'path';
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';

register({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  extensions: ['.js'],
});

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 정적 파일 제공
  app.useStaticAssets(join(__dirname, '..', '../.react/public'));

  // View 엔진 설정
  app.setBaseViewsDir(join(__dirname, '..', 'client'));
  app.setViewEngine('js');
  app.engine('js', (filePath, options, callback) => {
    const Component = require(filePath).default;
    const componentStr = ReactDOMServer.renderToString(
      React.createElement(Component, options),
    );

    return callback(
      null,
      `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>React SSR</title>
        </head>
      <body>
        <div id="root">${componentStr}</div>
        <script src="/bundle.js"></script>
      </body>
      </html>`,
    );
  });

  await app.listen(3000);
}

bootstrap();

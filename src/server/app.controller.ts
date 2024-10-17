import { Controller, Get, Req, Res, Render } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { createRequire } from 'module';

const requires = createRequire(__filename);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  @Render('App')
  async root(@Req() request: Request, @Res() res: Response) {
    const path = request.path;

    try {
      const getServerSideProps = requires(
        __dirname + '/../client/pages' + path,
      ).getServerSideProps;
      const pageProps = await getServerSideProps();

      return { pageProps: pageProps.props, path };
    } catch {
      return res.status(404);
    }
  }
}

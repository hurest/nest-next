import * as React from 'react';

interface AppProps {
  pageProps: any;
  path: string;
}

export default function App({ path, pageProps }: AppProps): JSX.Element {
  try {
    const PageComponent = require(`${__dirname}/pages${path}`).default;

    return (
      <>
        <PageComponent {...pageProps} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PAGE_PROPS__ = ${JSON.stringify(pageProps)};`,
          }}
        ></script>
      </>
    );
  } catch {
    return <>404 Not Found</>;
  }
}

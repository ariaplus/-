import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Aria+</title>
      <meta name='og:title' content='Aria+' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
    </Head>
  );
}

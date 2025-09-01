import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const baseDomain = 'https://theoakenshield.com';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link href={`${baseDomain}${pathname}`} key="canonical" rel="canonical" />

        {/*This tag tells the browser to set the viewport width equal to the device's screen width and to initialize
           zoom level at 100%. By doing this, the website can be displayed properly on mobile devices without requiring
           users to scroll horizontally or zoom in/out.*/}
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <link href="/favicon.png" rel="icon" sizes="any" />
        <link href="/favicon.png" rel="icon" sizes="16x16" />
        <link href="/favicon.png" rel="icon" sizes="32x32" />

        {/*<link href="/icon.svg" rel="icon" type="image/svg+xml" />*/}
        {/*<link href="/apple-touch-icon.png" rel="apple-touch-icon" />*/}
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`${baseDomain}${pathname}`} property="og:url" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;

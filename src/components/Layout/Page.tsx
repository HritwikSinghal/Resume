import {NextPage} from 'next';
import Head from 'next/head';
// import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';
import profilePic from '../../images/profilepic.webp';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  // const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link href="https://theoakenshield.com" key="canonical" rel="canonical" />

        {/*This tag tells the browser to set the viewport width equal to the device's screen width and to initialize
           zoom level at 100%. By doing this, the website can be displayed properly on mobile devices without requiring
           users to scroll horizontally or zoom in/out.*/}
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" />

        {/*<link href="/icon.svg" rel="icon" type="image/svg+xml" />*/}
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/*Meta Tags Generated via https://www.opengraph.io*/}
        {/*Facebook Meta Tags*/}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content="https://theoakenshield.com/" property="og:url" />
        <meta content={profilePic} property="og:image" />

        {/*Twitter Meta Tags*/}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="https://theoakenshield.com/" property="twitter:url" />
        <meta content={profilePic} name="twitter:image" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;

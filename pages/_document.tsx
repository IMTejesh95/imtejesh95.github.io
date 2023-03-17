import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "lib/gtag";
import { SEO_IMAGE } from 'data/constants';

type Props = {
  title: string;
  siteName: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const props: Props = {
  title: 'Tejesh Chauragade - Software Engineer',
  siteName: 'tejeshchauragade.me',
  keywords:
    'backend developer, node.js, python, typescript, graphql, postgresql, tejesh, tejeshchuaragade, chauragade, imtejesh95',
  description:
    'Enjoy designing and developing solutions to challenging problems, also a quick learner!',
  image: SEO_IMAGE
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content={props.keywords} />
          <meta property="og:title" content={props.title} />
          <meta property="og:image" content={props.image} />
          <meta property="og:description" content={props.description} />
          <meta property="og:site_name" content={props.siteName} />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content={props.description} />
          <meta name="twitter:image" content={props.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

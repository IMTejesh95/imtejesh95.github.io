import Head from 'next/head';
import { SEO_IMAGE } from 'data/constants';

type Props = {
  title: string;
  siteName: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const Meta = ({ title, siteName, keywords, description, image }: Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <title>{title.includes('Tejesh') ? title : title.concat(' | Tejesh Chauragade')}</title> */}
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Tejesh Chauragade - Software Engineer',
  siteName: 'tejeshchauragade.me',
  keywords:
    'backend developer, node.js, python, typescript, graphql, postgresql, tejesh, tejeshchuaragade, chauragade, imtejesh95',
  description:
    'Enjoy developing and implementing solutions to challenging problems, also a quick learner!',
  image: SEO_IMAGE
};

export default Meta;

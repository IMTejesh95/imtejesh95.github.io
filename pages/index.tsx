import Home from 'components/home-page/home';
import { NextPage } from 'next';
import { BlogPostProps } from 'interfaces/interface';
import PageLayout from 'components/layouts/pageLayout';

const Index: NextPage<BlogPostProps> = () => {
  return (
    <PageLayout title="Tejesh Chauragade - Software Engineer">
      <Home />
    </PageLayout>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: { posts: [] },
//     revalidate: 1
//   };
// };

export default Index;

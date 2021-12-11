import { NextPage, GetStaticProps } from 'next'
import Layout from 'components/Layout'

interface Props {
  content: { attributes: HomeAttributes };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
  hero_image: string;
}
const HomePage: NextPage<Props> = ({ content }) => {
  const { attributes } = content;
  return (
    <Layout
      title={`${attributes?.hero_title ? attributes.hero_title : 'Home'} | Community`}
    >
      <h1 className="text-lg mb-2">{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
      <img src={attributes.hero_image} alt='hero image' />
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);
  return { props: { content: content.default } };
};
export default HomePage;

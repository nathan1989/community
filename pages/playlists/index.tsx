import { GetStaticProps } from 'next'
import { Playlist } from 'interfaces'
import Layout from 'components/Layout'
import Link from 'next/link'

type Props = {
  items: Playlist[]
}

const Playlists = ({ items }: Props) => (
  <Layout title="Playlists | Community">
    <h1>Playlists</h1>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Link href={`/playlists/${item.slug}`}>
            <a>
              {item.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

const getAllPlaylists = async () => {
  const BLOGS_PATH = 'content/playlists'
  const items = (context => {
    return context.keys()
    .filter((path) => !path.includes(BLOGS_PATH))
    .map(path => path.replace('./', ''))
  })(require.context('/content/playlists', false, /\.md$/))

  return Promise.all(
    items.map(async path => {
      const markdown = await import(`../../${BLOGS_PATH}/${path}`);
      const items = markdown.attributes
      return { ...items, slug: path.substring(0, path.length - 3) };
    })
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const items = await getAllPlaylists()
  return { props: { items } }
};
export default Playlists

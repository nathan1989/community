import { GetStaticProps } from 'next'
import { PlaylistProps } from 'interfaces'
import Layout from 'components/Layout'
import Link from 'next/link'
import config from 'cms/config'

type Props = {
  items: PlaylistProps[]
}

const Playlists = ({ items }: Props) => (
  <Layout title="Playlists | Community">
    <h1 className="text-lg mb-1">Playlists</h1>
    <p className="mb-4">New playlists to be added regularly.</p>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
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
  const playlistFolderPath = config?.collections?.find(i => i.name === 'playlists')?.folder || ''
  const items = (context => {
    return context.keys()
    .filter((path) => !path.includes(playlistFolderPath))
    .map(path => path.replace('./', ''))
  })(require.context('/content/playlists', false, /\.md$/))

  return Promise.all(
    items.map(async path => {
      console.log(path)
      const markdown = await import(`../../${playlistFolderPath}/${path}`);
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

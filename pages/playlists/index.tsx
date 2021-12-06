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
          <Link href="/playlists/[item]" as={`/playlists/${item}`}>
            <a>
              {item}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const BLOGS_PATH = 'content/playlists'

  const items = (context => {
    const keys = context.keys()
    const data = keys.map(async (path) => {
      const markdown = await import(`${BLOGS_PATH}/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
    return data
  })(require.context('content/playlists', true, /\.md$/))

  console.log(items)

  return { props: { items } }
};
export default Playlists

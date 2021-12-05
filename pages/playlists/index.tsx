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
  const items = (context => {
    const keys = context.keys()
    console.log(keys)
    const data = keys.map((key) => {
      console.log(key)
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      return slug
    })
    return data
  })(require.context('content/playlists', false, /\.md$/))
  console.log(items)
  return { props: { items } }
};
export default Playlists

import { GetStaticProps } from 'next'
import { Playlist } from 'interfaces'
import Layout from 'components/Layout'
import List from 'components/Playlists'

type Props = {
  items: Playlist[]
}

const Playlists = ({ items }: Props) => (
  <Layout title="Playlists | Community">
    <h1>Playlists</h1>
    {items && <List items={items} />}
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  return { props: { item: [] } }
};

export default Playlists

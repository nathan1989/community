import { GetStaticPaths, GetStaticProps } from 'next'
import { Playlist } from 'interfaces'
import Layout from 'components/Layout'
import ListDetail from 'components/Playlist'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
    slug: string
}

type Props = {
  item?: Playlist
  errors?: string
}

const Playlist = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Community">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.title : 'User Detail'
      } | Community`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default Playlist

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  console.log(slug)
  const item = await import(`content/playlists/${slug}.md`);
  console.log(item)
  return { props: { item } }
};

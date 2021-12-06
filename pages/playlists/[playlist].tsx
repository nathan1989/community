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
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
    })
    return data
  })(require.context('../../content/playlists', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/playlists/${slug}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const item = await import(`../../content/playlists/${slug}.md`).catch(() => null)
  return { props: { item } }
};

import { GetStaticPaths, GetStaticProps } from 'next'
import { PlaylistProps } from 'interfaces'
import Layout from 'components/Layout'
import { ParsedUrlQuery } from 'querystring'
import PlaylistSection from 'components/PlaylistSection'

interface Params extends ParsedUrlQuery {
  playlist: string
}

type Props = {
  item: PlaylistProps
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
      title={`${item ? item.title : 'Playlist detail'} | Community`}
    >
      <PlaylistSection item={item} />
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
  const { playlist } = context.params as Params
  const item = await import(`../../content/playlists/${playlist}.md`).catch(() => null)
  return { props: { item: item?.attributes } }
};

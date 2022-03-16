import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Playlists.module.css'

export default function Home({ playlists }) {
  return (<div className={styles['container']}>
    <Head>
      <title>Community</title>
    </Head>
    <h1 className={styles['header']}>Playlists</h1>
    <p className={styles['subtitle']}>New playlists to be added regularly.</p>
    <ul className={styles['playlists']}>
      {playlists.map(playlist => (
        <li key={playlist.slug}>
          <Link href={`/playlists/${playlist.slug}`}>
            <a>{playlist.date}:{playlist.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>)
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInPlaylists = fs.readdirSync('./content/playlists')

  // Get the front matter and slug (the filename without .md) of all files
  const playlists = filesInPlaylists.map(filename => {
    const file = fs.readFileSync(`./content/playlists/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      playlists
    }
  }

}
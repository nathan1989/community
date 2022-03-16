import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const navItems = [
    { href: '/playlists', label: 'Playlists' },
    { href: '/lyrics', label: 'Lyrics' },
  ]
  return (<div className='container'>
    <Head>
      <title>Community</title>
    </Head>
    <div className={styles.container}>
      <img src="https://via.placeholder.com/450" alt="Community" />
      <div className={styles.details}>
        <p>
          <span>Sunday</span>
          <span>11am to 12pm</span>
        </p>
        <p>
          Your local park
        </p>
      </div>
      <ul className={styles.links}>
        {navItems.map((blog, index) => (
          <li key={index}>
            <Link href={blog.href}>
              <a className='h2'>{blog.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>)
}
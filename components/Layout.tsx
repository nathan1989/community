import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap" rel="stylesheet" />
      **<script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />**
    </Head>
    <header className="p-4">
      <nav className="text-xl">
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/playlists">
          <a>Playlists</a>
        </Link>{' '}
      </nav>
    </header>
    <div className="flex flex-col items-center justify-items-center p-4">
      {children}
    </div>
  </div>
)

export default Layout

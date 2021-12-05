import React from 'react'
import Link from 'next/link'

import { Playlist } from '../interfaces'

type Props = {
  data: Playlist
}

const PlaylistItem = ({ data }: Props) => (
  <Link href="/playlists/[id]" as={`/playlists/${data.id}`}>
    <a>
      {data.title}
    </a>
  </Link>
)

export default PlaylistItem

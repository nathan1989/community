import * as React from 'react'

import { Playlist } from '../interfaces'

type PlaylistProps = {
  item: Playlist
}

const Playlist = ({ item: user }: PlaylistProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default Playlist

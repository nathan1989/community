import * as React from 'react'

import { Playlist } from '../interfaces'

type PlaylistProps = {
  item: Playlist
}

const Playlist = ({ item: user }: PlaylistProps) => (
  <div>
    <h1>{user.title}</h1>
    <p>{user.description}</p>
  </div>
)

export default Playlist

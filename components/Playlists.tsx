import * as React from 'react'
import ListItem from './PlaylistItem'
import { Playlist } from '../interfaces'

type Props = {
  items: Playlist[]
}

const Playlists = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default Playlists

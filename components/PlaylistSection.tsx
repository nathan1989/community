import { NextPage } from 'next'
import { PlaylistProps } from 'interfaces'
import Markdown from 'markdown-to-jsx'
import moment from 'moment'

type Props = {
  item: PlaylistProps
}

const PlaylistSection: NextPage<Props> = ({ item }) => (
    <div>
        <h1>{item.title}</h1>
        <p>{moment(item.date).format('Do MMM YYYY [at] h:mm A z')}</p>
        <p>{item.description}</p>
        <Markdown>{item.playlist}</Markdown>
        <Markdown>{item.lyrics}</Markdown>
    </div>
)

export default PlaylistSection
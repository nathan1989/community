import { NextPage } from 'next'
import { PlaylistProps } from 'interfaces'
import Markdown from 'markdown-to-jsx'
import moment from 'moment'

type Props = {
  item: PlaylistProps
}

const PlaylistSection: NextPage<Props> = ({ item }) => (
    <div>
        <div className="flex items-end mb-2">
          <h1 className="text-xl mr-2">{item.title}</h1>
          <span className="text-md italic">{moment(item.date).format('Do MMM YYYY [at] h:mm A z')}</span>
        </div>
        <p className="mb-3">{item.description}</p>
        <Markdown>{item.playlist}</Markdown>
        <Markdown>{item.lyrics}</Markdown>
    </div>
)

export default PlaylistSection
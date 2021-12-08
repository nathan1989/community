
import { PlaylistProps } from 'interfaces'
import moment from 'moment'

type Props = {
  item: PlaylistProps
}

const PlaylistSection = ({ item }: Props) => (
    <div>
        <h1>{item.title}</h1>
        <p>{moment(item.date).format('Do MMM YYYY [at] h:mm A z')}</p>
        <p>{item.description}</p>
        <div dangerouslySetInnerHTML={{ __html: item.playlist }} />
    </div>
)

export default PlaylistSection